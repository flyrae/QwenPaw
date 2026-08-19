/**
 * Node test for the skill-span state machine (trajectory/skillSpans.ts).
 * Compiles the single TS module with tsc into a temp dir, then runs the
 * edge-case matrix from DESIGN.md plus the WP4 feature-index cases as
 * plain assertions inside the build guard chain.
 */
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const tmp = path.join(root, ".tmp-skillspans");
fs.rmSync(tmp, { recursive: true, force: true });

const tsc = path.join(root, "node_modules", "typescript", "bin", "tsc");
if (!fs.existsSync(tsc)) {
  console.error("test-skillspans: tsc not installed; run npm ci first");
  process.exit(1);
}
execFileSync(
  process.execPath,
  [
    tsc,
    path.join(root, "src", "trajectory", "skillSpans.ts"),
    "--outDir",
    tmp,
    "--module",
    "commonjs",
    "--target",
    "es2020",
    "--skipLibCheck",
  ],
  { stdio: "inherit" },
);

const {
  SkillSpanTracker,
  buildSkillFeatures,
  matchSkillFeatures,
  skillHue,
  spanDurationMs,
  spanEndT,
} = require(path.join(tmp, "skillSpans.js"));

let failures = 0;
function check(name, cond) {
  if (cond) {
    console.log(`  ok  ${name}`);
  } else {
    failures += 1;
    console.error(`FAIL  ${name}`);
  }
}

// ── case 1: slash run completes ────────────────────────────────────────
{
  const tr = new SkillSpanTracker();
  tr.onSlashSkill("xlsx", 8, 1000);
  tr.onToolCall({
    attribution: { skill: "xlsx", kind: "temporal", detail: "slash" },
    recordIndex: 3,
    seq: 12,
    t: 2000,
  });
  tr.onRunEnd(17, 5000);
  const [s] = tr.spans();
  check(
    "1 slash span bounds",
    s.trigger === "slash" && s.startSeq === 8 && s.endKind === "run_end",
  );
  check(
    "1 attribution recorded",
    s.attributedIndexes.length === 1 && s.evidences[0].kind === "temporal",
  );
  check("1 not bypass", s.bypass === false && s.loadSeq === null);
}

// ── case 2: crashed run leaks nothing into the next ───────────────────
{
  const tr = new SkillSpanTracker();
  tr.onSlashSkill("a", 1, 100);
  tr.onToolCall({
    attribution: { skill: "a", kind: "temporal", detail: "" },
    recordIndex: 1,
    seq: 2,
    t: 150,
  });
  tr.onRunStart();
  const spans = tr.spans();
  check(
    "2 crashed span hard-closed",
    spans.length === 1 &&
      spans[0].endKind === null &&
      spans[0].lastActivitySeq === 2,
  );
}

// ── case 3: double load keeps one span, loadSeq = last ────────────────
{
  const tr = new SkillSpanTracker();
  tr.onSkillLoad("docx", 5, 100);
  tr.onSkillLoad("docx", 9, 200);
  const [s] = tr.spans();
  check(
    "3 single span, loadSeq updated",
    s.trigger === "load" && s.loadSeq === 9,
  );
}

// ── case 4: two skills — recent one takes temporal attribution ────────
{
  const tr = new SkillSpanTracker();
  tr.onSkillLoad("a", 1, 100);
  tr.onToolCall({
    attribution: { skill: "a", kind: "temporal", detail: "" },
    recordIndex: 1,
    seq: 2,
    t: 150,
  });
  tr.onSkillLoad("b", 5, 300);
  tr.onToolCall({
    attribution: { skill: "b", kind: "temporal", detail: "" },
    recordIndex: 3,
    seq: 6,
    t: 350,
  });
  tr.onRunEnd(9, 500);
  const [sa, sb] = tr.spans();
  check("4 spans sorted by start", sa.skill === "a" && sb.skill === "b");
  check(
    "4 a soft-frozen at load of b",
    sa.lastActivitySeq === 2 && sb.lastActivitySeq === 6,
  );
  check(
    "4 duration uses last activity",
    spanDurationMs(sa) === 50 && spanDurationMs(sb) === 50,
  );
}

// ── case 5: resource bypass, later load flips bypass ──────────────────
{
  const tr = new SkillSpanTracker();
  tr.onToolCall({
    attribution: { skill: "pdf", kind: "path", detail: "dir" },
    recordIndex: 2,
    seq: 4,
    t: 100,
  });
  let [s] = tr.spans();
  check(
    "5 bypass opens resource span",
    s.trigger === "resource" && s.bypass === true,
  );
  tr.onSkillLoad("pdf", 6, 200);
  [s] = tr.spans();
  check("5 late load clears bypass", s.bypass === false && s.loadSeq === 6);
}

// ── case 6: load with zero attributed calls ────────────────────────────
{
  const tr = new SkillSpanTracker();
  tr.onSkillLoad("x", 1, 100);
  tr.onRunEnd(5, 400);
  const [s] = tr.spans();
  check(
    "6 empty span survives with null activity",
    s.attributedIndexes.length === 0 &&
      s.lastActivitySeq === null &&
      spanEndT(s) === 400,
  );
}

// ── case 10: slash run then mid-run load of another skill ─────────────
{
  const tr = new SkillSpanTracker();
  tr.onSlashSkill("xlsx", 1, 100);
  tr.onSkillLoad("pdf", 3, 200);
  const [a, b] = tr.spans();
  check(
    "10 both spans coexist",
    a.skill === "xlsx" &&
      a.trigger === "slash" &&
      b.skill === "pdf" &&
      b.trigger === "load",
  );
}

// ── case 12: in-flight run keeps open span ─────────────────────────────
{
  const tr = new SkillSpanTracker();
  tr.onSlashSkill("s", 1, 100);
  const [s] = tr.spans();
  check("12 open span endKind null", s.endKind === null && s.endSeq === null);
}

// ── determinism: hue stable across calls ───────────────────────────────
check(
  "hue deterministic",
  skillHue("docx") === skillHue("docx") && Number.isInteger(skillHue("docx")),
);

// ── WP4: feature index + content matching ──────────────────────────────
{
  const body = [
    "# PDF skill",
    "",
    "```bash",
    "python scripts/pdf_extract.py --track-changes=all input.docx",
    "```",
    "",
    "```bash",
    "pip install python-docx",
    "```",
  ].join("\n");
  const feats = buildSkillFeatures(body);
  const featSet = new Set(feats);
  check("W4 script filename indexed", featSet.has("pdf_extract.py"));
  check("W4 distinctive flag indexed", featSet.has("--track-changes=all"));
  check(
    "W4 generic tokens excluded",
    !featSet.has("install") && !featSet.has("python"),
  );
  const indexes = new Map([
    ["pdf", feats],
    [
      "xlsx",
      buildSkillFeatures(
        "# xlsx\n```bash\npython scripts/xlsx_run.py data.xlsx\n```",
      ),
    ],
  ]);
  check(
    "W4 unique hit",
    matchSkillFeatures(
      "cd /tmp && python scripts/pdf_extract.py a.docx",
      indexes,
    )?.skill === "pdf",
  );
  check(
    "W4 no hit returns null",
    matchSkillFeatures("echo hello world", indexes) === null,
  );
  const both = new Map([
    ["a", buildSkillFeatures("```bash\npython scripts/shared_tool.py\n```")],
    [
      "b",
      buildSkillFeatures("# b\n```bash\npython scripts/shared_tool.py\n```"),
    ],
  ]);
  check(
    "W4 ambiguous returns null",
    matchSkillFeatures("python scripts/shared_tool.py", both) === null,
  );
}

fs.rmSync(tmp, { recursive: true, force: true });
if (failures > 0) {
  console.error(`test-skillspans: ${failures} FAILURE(S)`);
  process.exit(1);
}
console.log("test-skillspans: all cases passed");

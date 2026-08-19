var Zn = Object.defineProperty;
var es = (e, n, t) => n in e ? Zn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var yt = (e, n, t) => es(e, typeof n != "symbol" ? n + "" : n, t);
const ts = {
  "zh-CN": {
    routeLabel: "轨迹",
    sessions: "会话",
    noSessions: "暂无轨迹记录",
    noSessionsHint: "与智能体对话后，这里会出现按会话记录的轨迹",
    searchPlaceholder: "搜索会话 / 智能体 / 渠道",
    runs: "运行",
    llmCalls: "LLM 调用",
    toolCalls: "工具调用",
    tokens: "Token",
    selectSession: "选择左侧会话查看轨迹",
    refresh: "刷新",
    export: "导出",
    delete: "删除",
    deleteConfirm: "删除该会话的全部轨迹记录？",
    loadOlder: "加载更早的事件",
    query: "用户输入",
    llmCall: "LLM 调用",
    toolCall: "工具调用",
    input: "输入",
    output: "输出",
    thinking: "思考",
    model: "模型",
    messages: "消息数",
    duration: "耗时",
    usage: "用量",
    running: "进行中",
    success: "成功",
    error: "错误",
    cancelled: "已取消",
    unknown: "未知",
    settings: "录制设置",
    enabled: "启用轨迹录制",
    captureLlm: "记录 LLM 调用",
    captureTools: "记录工具调用",
    loadFailed: "加载失败",
    events: "事件",
    status: "状态",
    selectRecord: "点击记录查看详情",
    summary: "摘要",
    throughput: "吞吐",
    noTiming: "无流式时序数据",
    searchEvents: "搜索事件",
    projectionHint: "时间线投影：顺序（等宽）/ 时长（压缩空闲）/ 时刻（记录时间点）/ 实际（完整墙钟）",
    collapseAll: "折叠全部请求",
    expandAll: "展开全部请求",
    promptInitial: "初始系统提示词",
    promptChanged: "系统提示词已变更",
    prompt: "提示词",
    noPrevPrompt: "没有可对比的上一版提示词",
    captureHeaders: "记录系统提示词变更",
    collapseTools: "显示/隐藏工具调用",
    spawnedAgent: "子代理",
    openChildSession: "打开子会话轨迹",
    exported: "已导出 JSONL",
    deleted: "已删除",
    sessionTotal: "会话累计",
    thisRequest: "本请求",
    collapseSidebar: "收起会话列表",
    expandSidebar: "展开会话列表",
    statRounds: "轮",
    statSteps: "步",
    statTtftAvg: "首 token 平均",
    statCacheHit: "缓存命中",
    statInput: "输入",
    statOutput: "输出",
    source: "来源",
    channel: "渠道",
    userId: "用户",
    replySent: "已回复",
    chars: "字",
    image: "图片",
    file: "文件",
    audio: "音频",
    video: "视频",
    inboundParts: "入站内容",
    deliveredText: "送达内容",
    copySessionId: "复制会话 ID",
    copiedSessionId: "已复制",
    viewCurrentTrace: "查看当前会话轨迹",
    noTraceForSession: "该会话暂无轨迹记录，发送消息后自动生成",
    inputComposition: "输入构成",
    roleSystem: "系统提示",
    roleUser: "用户消息",
    roleAssistant: "助手消息",
    roleTool: "工具结果",
    roleOther: "其他",
    charUnit: "字",
    estimatedTag: "（估算）",
    estimateNote: "字符→token 按模型系数估算，仅供参考",
    realInputTokens: "输入 token（实测）",
    compositionNote: "桶按消息字符占比呈现；实测 token 为计费口径总量（含带外工具结果）",
    maxToolMsg: "最大单条工具消息",
    growthVsPrev: "较上一轮输入增量",
    firstRound: "首轮",
    cacheAbsorbed: "其中缓存吸收",
    outputSize: "输出大小",
    beforeTruncation: "截断前",
    inputTab: "输入",
    skillLoadKind: "技能",
    skillLoaded: "已加载",
    skillResource: "技能资源",
    skillBypass: "未加载说明书直接使用",
    skillBypassStrip: "未加载即执行",
    skillGuided: "技能归属",
    guidedBySlash: "斜杠命令指定该技能后执行",
    guidedByLoad: "该技能加载后执行（推断）",
    contextReset: "上下文前缀发生变化（压缩/重写），本次已全量重记",
    inputTotal: "输入总量",
    spanOpen: "进行中",
    spanTriggerSlash: "斜杠命令",
    spanTriggerLoad: "技能加载",
    spanTriggerResource: "资源触碰",
    spanEndRun: "run 边界",
    spanEndLast: "末次归属活动",
    spanStart: "开始",
    spanEnd: "结束",
    spanLastActivity: "末次活动",
    spanDuration: "活动时长",
    spanAttributed: "归属步骤",
    spanLoadState: "加载状态",
    spanEvidence: "归属证据",
    spanNoActivity: "加载后无归属活动",
    resetBreakAt: "重置断点",
    resetSizes: "前后规模",
    resetMsgs: "条",
    resetRoles: "role 变化",
    resetChanges: "逐条变化",
    resetOldPrefix: "旧:",
    resetNewPrefix: "新:",
    resetKept: "保留",
    resetRemoved: "移除",
    resetRewritten: "重写",
    resetAdded: "新增",
    legendTitle: "图例",
    legendLoad: "技能加载：模型通过 Skill 工具读取了该技能的完整说明",
    legendResource: "技能资源触碰（蓝=加载说明书后使用；橙=未加载直接使用）",
    legendGuided: "时间归属：技能激活后按其指示执行的普通调用（推断，悬停看依据）",
    legendStripTitle: "行色条：",
    legendStrip: "该行归属的技能执行段颜色（橙=旁路）",
    legendBandTitle: "时间线色带：",
    legendBand: "技能执行段（斜杠/加载/资源三锚点起，run 结束止），点击查看详情",
    inputMessages: "输入消息",
    inputExpand: "展开全文",
    inputCollapseText: "收起"
  },
  "en-US": {
    routeLabel: "Trace",
    sessions: "Sessions",
    noSessions: "No traces yet",
    noSessionsHint: "Talk to an agent and step-level traces will appear here per session",
    searchPlaceholder: "Search session / agent / channel",
    runs: "Runs",
    llmCalls: "LLM calls",
    toolCalls: "Tool calls",
    tokens: "Tokens",
    selectSession: "Select a session to view its trace",
    refresh: "Refresh",
    export: "Export",
    delete: "Delete",
    deleteConfirm: "Delete all trace records of this session?",
    loadOlder: "Load older events",
    query: "User input",
    llmCall: "LLM call",
    toolCall: "Tool call",
    input: "Input",
    output: "Output",
    thinking: "Thinking",
    model: "Model",
    messages: "Messages",
    duration: "Duration",
    usage: "Usage",
    running: "Running",
    success: "Success",
    error: "Error",
    cancelled: "Cancelled",
    unknown: "Unknown",
    settings: "Recording settings",
    enabled: "Trace recording",
    captureLlm: "Capture LLM calls",
    captureTools: "Capture tool calls",
    loadFailed: "Failed to load",
    events: "events",
    status: "Status",
    selectRecord: "Select a record to inspect",
    summary: "Summary",
    throughput: "Throughput",
    noTiming: "No streaming timing data",
    searchEvents: "Search events",
    projectionHint: "Timeline projection: Sequence (equal width) / Duration (idle-compressed) / Time (recorded instants) / Actual (full wall clock)",
    collapseAll: "Collapse all requests",
    expandAll: "Expand all requests",
    promptInitial: "Initial system prompt",
    promptChanged: "System prompt updated",
    prompt: "Prompt",
    noPrevPrompt: "No previous prompt to diff against",
    captureHeaders: "Capture system prompt changes",
    collapseTools: "Show/hide tool calls",
    spawnedAgent: "Sub-agent",
    openChildSession: "Open child session trace",
    exported: "JSONL exported",
    deleted: "Deleted",
    sessionTotal: "session total",
    thisRequest: "This request",
    collapseSidebar: "Collapse session list",
    expandSidebar: "Expand session list",
    statRounds: "rounds",
    statSteps: "steps",
    statTtftAvg: "Avg first token",
    statCacheHit: "Cache hit",
    statInput: "In",
    statOutput: "Out",
    source: "Source",
    channel: "Channel",
    userId: "User",
    replySent: "Reply sent",
    chars: "chars",
    image: "image(s)",
    file: "file(s)",
    audio: "audio",
    video: "video",
    inboundParts: "Inbound parts",
    deliveredText: "Delivered text",
    copySessionId: "Copy session ID",
    copiedSessionId: "Copied",
    viewCurrentTrace: "View this chat's trace",
    noTraceForSession: "No trace for this session yet — it is created after the first message",
    inputComposition: "Input composition",
    roleSystem: "System prompt",
    roleUser: "User messages",
    roleAssistant: "Assistant messages",
    roleTool: "Tool results",
    roleOther: "Other",
    charUnit: "chars",
    estimatedTag: "(est.)",
    estimateNote: "chars→tokens uses a per-model ratio — estimates only",
    realInputTokens: "Input tokens (measured)",
    compositionNote: "buckets show message char shares; measured tokens are the billed total (out-of-band tool results included)",
    maxToolMsg: "Largest tool message",
    growthVsPrev: "Input growth vs prev round",
    firstRound: "First round",
    cacheAbsorbed: "Absorbed by cache",
    outputSize: "Output size",
    beforeTruncation: "before truncation",
    inputTab: "Input",
    skillLoadKind: "Skill",
    skillLoaded: "loaded",
    skillResource: "Skill resource",
    skillBypass: "used without loading the skill",
    skillBypassStrip: "executed without load",
    skillGuided: "Skill attribution",
    guidedBySlash: "run after this skill was set via slash command",
    guidedByLoad: "run after this skill was loaded (inferred)",
    contextReset: "Context prefix changed (compaction / rewrite); full input re-recorded",
    inputTotal: "Total input",
    spanOpen: "open",
    spanTriggerSlash: "slash command",
    spanTriggerLoad: "skill load",
    spanTriggerResource: "resource touch",
    spanEndRun: "run boundary",
    spanEndLast: "last attributed activity",
    spanStart: "Start",
    spanEnd: "End",
    spanLastActivity: "Last activity",
    spanDuration: "Active duration",
    spanAttributed: "Attributed steps",
    spanLoadState: "Load state",
    spanEvidence: "Evidence",
    spanNoActivity: "No attributed activity after load",
    resetBreakAt: "Breakpoint",
    resetSizes: "Before → after",
    resetMsgs: "msgs",
    resetRoles: "Role changes",
    resetChanges: "Per-message changes",
    resetOldPrefix: "old: ",
    resetNewPrefix: "new: ",
    resetKept: "kept",
    resetRemoved: "removed",
    resetRewritten: "rewritten",
    resetAdded: "added",
    legendTitle: "Legend",
    legendLoad: "Skill load: the model read the skill's full instructions via the Skill tool",
    legendResource: "Skill resource touch (blue = after loading the doc; orange = used without loading)",
    legendGuided: "Temporal attribution: an ordinary call after the skill became active (inferred; hover for basis)",
    legendStripTitle: "Row strip: ",
    legendStrip: "color of the row's skill execution span (orange = bypass)",
    legendBandTitle: "Timeline band: ",
    legendBand: "skill execution span (slash/load/resource anchor → run end); click for details",
    inputMessages: "Input messages",
    inputExpand: "show full text",
    inputCollapseText: "collapse"
  }
};
function At(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ie() {
  try {
    return At(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function f(e, n) {
  return ts[e][n];
}
const Fe = window.QwenPaw.host;
async function ns(e) {
  return Ae(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function Cn(e, n) {
  return Fe.fetch ? Fe.fetch(e, n) : fetch(Fe.getApiUrl(e), {
    ...n,
    headers: {
      ...(n == null ? void 0 : n.headers) || {},
      ...Fe.getApiToken() ? { Authorization: `Bearer ${Fe.getApiToken()}` } : {}
    }
  });
}
class zn extends Error {
  constructor(n, t) {
    super(t), this.status = n, this.name = "ApiError";
  }
}
async function Ae(e, n) {
  const t = await Cn(e, n), s = await t.text();
  let l = null;
  try {
    l = s ? JSON.parse(s) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new zn(
      t.status,
      typeof o == "string" ? o : `HTTP ${t.status}`
    );
  }
  return l;
}
async function Ut(e) {
  const n = new URLSearchParams();
  return n.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && n.set("offset", String(e.offset)), Ae(
    `/agent-trace/sessions?${n.toString()}`
  );
}
async function ss(e, n) {
  const t = new URLSearchParams();
  n != null && n.beforeSeq && t.set("before_seq", String(n.beforeSeq)), t.set("limit", String(n == null ? void 0 : n.limit));
  const s = t.toString();
  return Ae(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function ls() {
  return Ae("/agent-trace/config");
}
async function os(e) {
  return Ae("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function is(e) {
  const n = await Cn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!n.ok) throw new Error(`HTTP ${n.status}`);
  const t = await n.blob(), s = URL.createObjectURL(t), l = document.createElement("a");
  l.href = s, l.download = `${e}.jsonl`, l.click(), URL.revokeObjectURL(s);
}
async function rs(e) {
  await Ae(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function $n(e) {
  if (!e) return null;
  try {
    return (await Ae(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Oe = window.QwenPaw.host, nt = Oe.React, { useMemo: as } = nt, { Button: cs, Tooltip: us } = Oe.antd, { CompassOutlined: ds } = Oe.antdIcons;
function hs(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function ps() {
  const e = typeof Oe.useLocale == "function" ? Oe.useLocale() : void 0, n = as(
    () => At(e ?? ie()),
    [e]
  );
  return /* @__PURE__ */ nt.createElement(us, { title: f(n, "viewCurrentTrace") }, /* @__PURE__ */ nt.createElement(
    cs,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ nt.createElement(ds, null),
      "aria-label": f(n, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof Oe.getCurrentSessionId == "function" ? Oe.getCurrentSessionId() : null;
        $n(t).then((s) => {
          window.location.href = hs(s ?? t);
        });
      }
    }
  ));
}
const Wt = 3e3;
function Kt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function fs(e, n) {
  const t = Kt(e ?? ""), s = Kt(n ?? "");
  if (t.length > Wt || s.length > Wt)
    return [
      ...t.map((p) => ({ kind: "del", text: p })),
      ...s.map((p) => ({ kind: "add", text: p }))
    ];
  const l = t.length, o = s.length, r = new Int32Array((l + 1) * (o + 1)), c = (p, y) => p * (o + 1) + y;
  for (let p = l - 1; p >= 0; p -= 1)
    for (let y = o - 1; y >= 0; y -= 1)
      r[c(p, y)] = t[p] === s[y] ? r[c(p + 1, y + 1)] + 1 : Math.max(r[c(p + 1, y)], r[c(p, y + 1)]);
  const h = [];
  let g = 0, i = 0;
  for (; g < l && i < o; )
    t[g] === s[i] ? (h.push({ kind: "same", text: t[g] }), g += 1, i += 1) : r[c(g + 1, i)] >= r[c(g, i + 1)] ? (h.push({ kind: "del", text: t[g] }), g += 1) : (h.push({ kind: "add", text: s[i] }), i += 1);
  for (; g < l; )
    h.push({ kind: "del", text: t[g] }), g += 1;
  for (; i < o; )
    h.push({ kind: "add", text: s[i] }), i += 1;
  return h;
}
function ms(e, n = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((o, r) => {
    if (o.kind !== "same")
      for (let c = Math.max(0, r - n); c <= Math.min(e.length - 1, r + n); c += 1)
        t[c] = !0;
  });
  const s = [];
  let l = 0;
  return e.forEach((o, r) => {
    t[r] ? (l > 0 && (s.push({ kind: "gap", count: l }), l = 0), s.push(o)) : l += 1;
  }), l > 0 && s.push({ kind: "gap", count: l }), s;
}
function gs(e) {
  let n = 0, t = 0;
  for (const s of e)
    s.kind === "add" ? n += 1 : s.kind === "del" && (t += 1);
  return { added: n, removed: t };
}
function ys(e) {
  let n = 0;
  for (let t = 0; t < e.length; t += 1)
    n = (n * 31 + e.charCodeAt(t)) % 100003;
  return n % 360;
}
class vs {
  constructor() {
    yt(this, "open", /* @__PURE__ */ new Map());
    yt(this, "finished", []);
  }
  /** A run opens: any still-open spans are hard-closed first (crashed
   * runs without run/end must not leak attribution — same semantics as
   * Kimi's run/start reset for activeRunSkills). */
  onRunStart() {
    this.closeAll(null, null, null);
  }
  onSlashSkill(n, t, s) {
    this.onRunStart(), this.openSpan(n, "slash", t, s);
  }
  onSkillLoad(n, t, s) {
    let l = this.open.get(n);
    return l || (l = this.openSpan(n, "load", t, s)), l.loadSeq = t, l.bypass && (l.bypass = !1), l.id;
  }
  onToolCall(n) {
    if (!n.attribution) return null;
    const { skill: t, kind: s, detail: l } = n.attribution;
    let o = this.open.get(t);
    return o || (o = this.openSpan(
      t,
      s === "path" ? "resource" : "load",
      n.seq,
      n.t
    ), s === "temporal" && (o.trigger = "resource")), o.attributedIndexes.push(n.recordIndex), o.evidences.push({
      kind: s,
      detail: l,
      recordIndex: n.recordIndex
    }), o.lastActivitySeq = n.seq, o.lastActivityT = n.t, o.id;
  }
  onRunEnd(n, t) {
    this.closeAll(n, t, "run_end");
  }
  /** All spans (open + finished) in start order. */
  spans() {
    const n = [...this.open.values()];
    return [...this.finished, ...n].sort((t, s) => t.startSeq - s.startSeq);
  }
  openSpan(n, t, s, l) {
    const o = {
      id: `${n}#${s}`,
      skill: n,
      trigger: t,
      startSeq: s,
      startT: l,
      endSeq: null,
      endT: null,
      endKind: null,
      lastActivitySeq: null,
      lastActivityT: null,
      attributedIndexes: [],
      evidences: [],
      bypass: t === "resource",
      loadSeq: t === "load" ? s : null,
      colorHue: ys(n)
    };
    return this.open.set(n, o), o;
  }
  closeAll(n, t, s) {
    for (const l of this.open.values())
      l.endSeq = n, l.endT = t, l.endKind = s, this.finished.push(l);
    this.open.clear();
  }
}
function Ss(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function Es(e) {
  const n = e.lastActivityT ?? e.endT;
  return n === null ? null : Math.max(0, n - e.startT);
}
const xs = /* @__PURE__ */ new Set([
  "python",
  "python3",
  "pip",
  "node",
  "npm",
  "cd",
  "dir",
  "echo",
  "print",
  "import",
  "export",
  "command",
  "output",
  "input",
  "path",
  "file",
  "files",
  "true",
  "false",
  "null",
  "shell",
  "bash",
  "powershell",
  "windows",
  "linux",
  "macos",
  "install",
  "install-g",
  "sudo",
  "run",
  "scripts",
  "script",
  "content",
  "params",
  "return",
  "string",
  "number",
  "const",
  "await",
  "async",
  "function",
  "default",
  "options",
  "results"
]);
function bs(e) {
  const n = /* @__PURE__ */ new Set();
  for (const t of e.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi
  ))
    n.add(t[1].toLowerCase());
  for (const t of e.matchAll(/```[a-z]*\n([\s\S]*?)```/g))
    for (const s of t[1].matchAll(/[\w./=\-]{6,}/g)) {
      const l = s[0].toLowerCase();
      xs.has(l) || n.add(l);
    }
  return [...n];
}
function ks(e, n) {
  const t = e.toLowerCase();
  let s = null, l = !1;
  for (const [o, r] of n)
    for (const c of r)
      if (t.includes(c)) {
        s === null ? s = { skill: o, feature: c } : s.skill !== o && (l = !0);
        break;
      }
  return l ? null : s;
}
const ws = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, Ts = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function On(e, n) {
  const t = e.markerKind ? ws[e.markerKind] : void 0;
  if (t) return n === "zh-CN" ? t.zh : t.en;
  const s = Ts[e.kind];
  return s ? n === "zh-CN" ? s.zh : s.en : e.kind;
}
const Vt = 60;
function He(e) {
  return `${e.role}|${e.text ?? `#${e.chars ?? 0}`}`;
}
function Gt(e) {
  return e.chars ?? (e.text ? e.text.length : 0);
}
function Xt(e) {
  const n = {};
  for (const t of e)
    n[t.role] = (n[t.role] ?? 0) + 1;
  return n;
}
function _s(e, n) {
  let t = 0;
  for (; t < e.length && t < n.length && He(e[t]) === He(n[t]); )
    t += 1;
  const s = e.slice(t), l = n.slice(t), o = /* @__PURE__ */ new Map();
  for (const u of l) {
    const S = He(u);
    o.set(S, (o.get(S) ?? 0) + 1);
  }
  const r = [], c = [], h = [];
  for (let u = 0; u < Math.min(t, Vt); u += 1)
    h.push({ status: "kept", role: e[u].role });
  for (const u of s) {
    const S = He(u), T = o.get(S) ?? 0;
    T > 0 ? (o.set(S, T - 1), h.push({ status: "kept", role: u.role })) : r.push(u);
  }
  for (const u of l) {
    const S = He(u), T = o.get(S) ?? 0;
    T > 0 && (o.set(S, T - 1), c.push(u));
  }
  const g = /* @__PURE__ */ new Map();
  for (const u of c) {
    const S = g.get(u.role);
    S ? S.push(u) : g.set(u.role, [u]);
  }
  const i = [], p = [];
  for (const u of r) {
    const S = g.get(u.role);
    S && S.length > 0 ? i.push([u, S.shift()]) : p.push(u);
  }
  const y = [...g.values()].flat();
  for (const [u, S] of i)
    h.push({
      status: "rewritten",
      role: u.role,
      oldText: u.text,
      newText: S.text
    });
  for (const u of p)
    h.push({
      status: "removed",
      role: u.role,
      oldText: u.text
    });
  for (const u of y)
    h.push({
      status: "added",
      role: u.role,
      newText: u.text
    });
  return {
    breakAt: t,
    beforeCount: e.length,
    afterCount: n.length,
    beforeChars: e.reduce((u, S) => u + Gt(S), 0),
    afterChars: n.reduce((u, S) => u + Gt(S), 0),
    beforeByRole: Xt(e),
    afterByRole: Xt(n),
    changes: h.slice(0, Vt)
  };
}
function Is(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function ve(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const n = e * 1e3;
  return n < 1e3 ? `${Math.round(n)}ms` : n < 6e4 ? `${(n / 1e3).toFixed(1)}s` : `${Math.floor(n / 6e4)}m${Math.round(n % 6e4 / 1e3)}s`;
}
function Z(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function Rt(e, n) {
  return e === void 0 || !Number.isFinite(e) || n === null || n === void 0 || n <= 0 ? "-" : `${(e / n).toFixed(1)} tok/s`;
}
function Ce(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function pe(e) {
  if (!e) return null;
  const n = Date.parse(e);
  return Number.isFinite(n) ? n : null;
}
function An(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function Ms(e) {
  if (!e) return "-";
  const n = new Date(e);
  return Number.isNaN(n.getTime()) ? e : n.toLocaleString();
}
function Cs(e) {
  if (!e) return "-";
  const n = Date.parse(e);
  if (!Number.isFinite(n)) return e;
  const t = Date.now() - n;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(n).toLocaleString();
}
function Rn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Ct(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Ln = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function Nn(e) {
  return e || "unknown";
}
const it = window.QwenPaw.host, a = it.React, { useEffect: zs, useRef: $s, useState: Dn } = a, { Button: jn, Collapse: Pn, Empty: qt, Tabs: Lt, Tag: zt } = it.antd, { Text: V } = it.antd.Typography, { CopyOutlined: Os, CloseOutlined: As } = it.antdIcons, Rs = 320, Ls = 720, qe = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Ns = 2e4;
function Ds(e) {
  if (e.length > Ns) return e;
  const n = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let s = 0, l, o = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > s && n.push(e.slice(s, l.index));
    const r = l[0];
    let c = "rgba(128,128,128,1)";
    l[1] !== void 0 ? c = qe.key : l[2] !== void 0 ? c = qe.string : l[3] !== void 0 ? c = qe.number : c = qe.literal, n.push(
      /* @__PURE__ */ a.createElement("span", { key: o++, style: { color: c } }, r)
    ), s = l.index + r.length;
  }
  return s < e.length && n.push(e.slice(s)), n;
}
function be({ value: e, json: n = !1 }) {
  const [t, s] = Dn(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const o = async () => {
    try {
      await navigator.clipboard.writeText(l), s(!0), window.setTimeout(() => s(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ a.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ a.createElement(
    "a",
    {
      onClick: () => void o(),
      title: "Copy",
      style: {
        position: "absolute",
        top: 4,
        right: 6,
        fontSize: 11,
        color: t ? "#52c41a" : "rgba(128,128,128,1)",
        zIndex: 1
      }
    },
    t ? "✓" : /* @__PURE__ */ a.createElement(Os, null)
  ), /* @__PURE__ */ a.createElement(
    "pre",
    {
      style: {
        margin: 0,
        padding: "6px 10px",
        background: "rgba(128,128,128,0.06)",
        borderRadius: 6,
        fontSize: 12,
        maxHeight: 380,
        overflow: "auto",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      }
    },
    n ? Ds(l) : l
  ));
}
function M({
  label: e,
  value: n,
  danger: t = !1
}) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "3px 0",
        fontSize: 12
      }
    },
    /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ a.createElement(
      V,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      n
    )
  );
}
function Jt({
  input: e,
  output: n,
  cacheRead: t,
  cacheWrite: s,
  reasoning: l
}) {
  const o = Math.max(0, e - t - s), r = Math.max(0, n - l);
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "Input", value: `${Z(e)} tok` }), t ? /* @__PURE__ */ a.createElement(M, { label: "Cached", value: `${Z(t)} tok` }) : null, s ? /* @__PURE__ */ a.createElement(
    M,
    {
      label: "Cache created",
      value: `${Z(s)} tok`
    }
  ) : null, t || s ? /* @__PURE__ */ a.createElement(M, { label: "Other", value: `${Z(o)} tok` }) : null, /* @__PURE__ */ a.createElement(M, { label: "Output", value: `${Z(n)} tok` }), l ? /* @__PURE__ */ a.createElement(M, { label: "Reasoning", value: `${Z(l)} tok` }) : null, l ? /* @__PURE__ */ a.createElement(M, { label: "Content", value: `${Z(r)} tok` }) : null);
}
function vt({
  label: e,
  onOpen: n,
  children: t
}) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      style: {
        marginTop: 8,
        borderTop: "1px solid rgba(128,128,128,0.15)",
        paddingTop: 6
      }
    },
    /* @__PURE__ */ a.createElement("a", { onClick: n, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 2 } }, t)
  );
}
const Qt = ["system", "user", "assistant", "tool"], js = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function Ps({
  request: e,
  locale: n
}) {
  const t = e.inputComposition;
  if (!t) return null;
  const s = [], l = new Set(Qt), o = [
    ...Qt.filter((c) => t.charsByRole[c]),
    ...Object.keys(t.charsByRole).filter(
      (c) => !l.has(c) && t.charsByRole[c]
    )
  ], r = t.totalChars || 1;
  for (const c of o) {
    const h = t.charsByRole[c], g = js[c] ?? "roleOther", i = Math.round(h / r * 100);
    s.push(
      /* @__PURE__ */ a.createElement(
        M,
        {
          key: c,
          label: f(n, g),
          value: `${Z(h)} ${f(n, "charUnit")} · ${i}%`
        }
      )
    );
  }
  return t.maxToolChars > 0 && s.push(
    /* @__PURE__ */ a.createElement(
      M,
      {
        key: "max-tool",
        label: f(n, "maxToolMsg"),
        value: `${Z(t.maxToolChars)} ${f(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(V, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, f(n, "inputComposition")), s, e.inputTokens > 0 ? /* @__PURE__ */ a.createElement(
    M,
    {
      label: f(n, "realInputTokens"),
      value: `${Z(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ a.createElement(
    V,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    f(n, "compositionNote")
  ), e.growth ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    M,
    {
      label: f(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? f(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${Z(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ a.createElement(
    M,
    {
      label: f(n, "cacheAbsorbed"),
      value: `${Z(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Bs({
  request: e,
  onJumpRecord: n
}) {
  const t = ie(), [s, l] = a.useState("summary"), o = /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "Started", value: Ce(e.startedAt) }), /* @__PURE__ */ a.createElement(
    M,
    {
      label: "Total",
      value: ve(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ a.createElement(
    M,
    {
      label: "First TTFT",
      value: ve(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ a.createElement(
    M,
    {
      label: "Total decoding",
      value: ve(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ a.createElement(
    M,
    {
      label: f(t, "throughput"),
      value: Rt(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), r = /* @__PURE__ */ a.createElement(
    Jt,
    {
      input: e.inputTokens,
      output: e.outputTokens,
      cacheRead: e.cacheReadTokens,
      cacheWrite: e.cacheWriteTokens,
      reasoning: e.reasoningTokens
    }
  ), c = [
    {
      key: "summary",
      label: f(t, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ a.createElement(
        M,
        {
          label: f(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ a.createElement(M, { label: "Query", value: Fs(e.query) }), /* @__PURE__ */ a.createElement(
        M,
        {
          label: f(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ a.createElement(M, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ a.createElement(
        M,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && n ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => n(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ a.createElement(vt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ a.createElement(be, { value: e.options, json: !0 })) : null, /* @__PURE__ */ a.createElement(vt, { label: "Usage", onOpen: () => l("usage") }, r), /* @__PURE__ */ a.createElement(vt, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(V, { strong: !0, style: { fontSize: 12 } }, f(t, "thisRequest")), r, /* @__PURE__ */ a.createElement(Ps, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        V,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        f(t, "sessionTotal")
      ), /* @__PURE__ */ a.createElement(
        Jt,
        {
          input: e.sessionTotals.inputTokens,
          output: e.sessionTotals.outputTokens,
          cacheRead: 0,
          cacheWrite: 0,
          reasoning: e.sessionTotals.reasoningTokens
        }
      )) : null)
    },
    {
      key: "timing",
      label: "Timing",
      children: o
    },
    ...e.options ? [
      {
        key: "options",
        label: "Options",
        children: /* @__PURE__ */ a.createElement(be, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ a.createElement(
    Lt,
    {
      size: "small",
      activeKey: s,
      onChange: (h) => l(h),
      items: c,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Fs(e, n = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Hs({
  oldText: e,
  newText: n
}) {
  const t = a.useMemo(
    () => fs(e, n),
    [e, n]
  ), s = a.useMemo(() => gs(t), [t]), l = a.useMemo(() => ms(t), [t]), o = ie();
  return e === void 0 ? /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 12 } }, f(o, "noPrevPrompt")) : /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ a.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ a.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ a.createElement(
    "div",
    {
      style: {
        borderRadius: 6,
        border: "1px solid rgba(128,128,128,0.2)",
        overflow: "auto",
        maxHeight: 420,
        fontSize: 11,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
        lineHeight: "18px"
      }
    },
    l.map((r, c) => {
      if (r.kind === "gap")
        return /* @__PURE__ */ a.createElement(
          "div",
          {
            key: c,
            style: {
              padding: "0 8px",
              color: "rgba(128,128,128,0.8)",
              background: "rgba(128,128,128,0.05)",
              userSelect: "none"
            }
          },
          "⋯ ",
          r.count
        );
      const h = r;
      return /* @__PURE__ */ a.createElement(
        "div",
        {
          key: c,
          style: {
            padding: "0 8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            background: h.kind === "add" ? "rgba(82,196,26,0.12)" : h.kind === "del" ? "rgba(255,77,79,0.10)" : void 0,
            color: h.kind === "del" ? "rgba(255,77,79,0.9)" : void 0
          }
        },
        h.kind === "add" ? "+ " : h.kind === "del" ? "− " : "  ",
        h.text || " "
      );
    })
  ));
}
function Us({ record: e }) {
  var o;
  const n = ie(), t = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: f(n, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "#", value: String(e.index) }), /* @__PURE__ */ a.createElement(
        M,
        {
          label: f(n, "status"),
          value: s ? f(n, "promptChanged") : f(n, "promptInitial")
        }
      ), /* @__PURE__ */ a.createElement(M, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ a.createElement(M, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ a.createElement(M, { label: "Tools", value: String(t.length) }))
    },
    ...s ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ a.createElement(
          Hs,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: f(n, "prompt"),
      children: /* @__PURE__ */ a.createElement(be, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 4 } }, t.map((r) => /* @__PURE__ */ a.createElement(V, { key: r, code: !0, style: { fontSize: 11 } }, r)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ a.createElement(
          Pn,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((r, c) => {
              var g;
              const h = typeof r.name == "string" && r.name || typeof ((g = r.function) == null ? void 0 : g.name) == "string" && r.function.name || `tool-${c + 1}`;
              return {
                key: String(c),
                label: /* @__PURE__ */ a.createElement(V, { code: !0, style: { fontSize: 11 } }, h),
                children: /* @__PURE__ */ a.createElement(be, { value: r })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ a.createElement(be, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ a.createElement(Lt, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function St({ dragRef: e, width: n }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      onPointerDown: (t) => {
        e.current = {
          anchorX: t.clientX,
          anchorWidth: n
        };
      },
      style: {
        position: "absolute",
        left: -3,
        top: 0,
        bottom: 0,
        width: 6,
        cursor: "col-resize",
        zIndex: 10
      },
      title: "Drag to resize"
    }
  );
}
function st({ onClose: e }) {
  return e ? /* @__PURE__ */ a.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ a.createElement(
    jn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ a.createElement(As, null),
      onClick: e
    }
  )) : null;
}
function Ws({
  record: e,
  request: n,
  onJumpSession: t,
  onJumpRecord: s,
  onSelectTurn: l,
  onClose: o
}) {
  const r = ie(), [c, h] = Dn(400), g = $s(null);
  if (zs(() => {
    const S = (A) => {
      const k = g.current;
      if (k === null) return;
      const w = k.anchorX - A.clientX;
      h(
        Math.min(Ls, Math.max(Rs, k.anchorWidth + w))
      );
    }, T = () => {
      g.current = null;
    };
    return window.addEventListener("pointermove", S), window.addEventListener("pointerup", T), () => {
      window.removeEventListener("pointermove", S), window.removeEventListener("pointerup", T);
    };
  }, []), e === null && n === null)
    return /* @__PURE__ */ a.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: c,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ a.createElement(
        qt,
        {
          image: qt.PRESENTED_IMAGE_SIMPLE,
          description: f(r, "selectRecord")
        }
      )
    );
  if (e === null && n !== null)
    return /* @__PURE__ */ a.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: c,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ a.createElement(St, { dragRef: g, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: o }), /* @__PURE__ */ a.createElement(Bs, { request: n, onJumpRecord: s }))
    );
  const i = e;
  if (i.kind === "system" && i.prompt !== void 0)
    return /* @__PURE__ */ a.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: c,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ a.createElement(St, { dragRef: g, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: o }), /* @__PURE__ */ a.createElement(Us, { record: i }))
    );
  const p = i.usage, y = i.timing, u = [];
  return u.push({
    key: "summary",
    label: f(r, "summary"),
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "#", value: String(i.index) }), /* @__PURE__ */ a.createElement(M, { label: "Kind", value: On(i, r) }), i.runIndex > 0 && l ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(i.runIndex)
      },
      "Request #",
      i.runIndex,
      " →"
    )) : null, /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(r, "status"),
        value: i.running ? f(r, "running") : i.isError ? f(r, "error") : f(r, "success"),
        danger: i.isError
      }
    ), i.provider ? /* @__PURE__ */ a.createElement(M, { label: "Provider", value: i.provider }) : null, i.model ? /* @__PURE__ */ a.createElement(M, { label: f(r, "model"), value: i.model }) : null, i.toolName ? /* @__PURE__ */ a.createElement(M, { label: "Tool", value: i.toolName }) : null, i.inSkill ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(r, "skillResource"),
        value: i.inSkillLoaded ? `⚡ ${i.inSkill}` : `⚡ ${i.inSkill}（${f(r, "skillBypass")}）`
      }
    ) : null, i.guidedSkill ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(r, "skillGuided"),
        value: `∈ ${i.guidedSkill}（${i.guidedReason === "slash" ? f(r, "guidedBySlash") : f(r, "guidedByLoad")}）`
      }
    ) : null, i.toolOutputChars ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(r, "outputSize"),
        value: i.toolOutputBytes ? `${Z(i.toolOutputChars)} ${f(
          r,
          "charUnit"
        )} · ${Ct(i.toolOutputBytes)} (${f(
          r,
          "beforeTruncation"
        )})` : `${Z(i.toolOutputChars)} ${f(
          r,
          "charUnit"
        )}`
      }
    ) : null, i.kind === "user" && (i.channel || i.userId) ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(r, "source"),
        value: [i.channel, i.userId].filter(Boolean).join(" · ")
      }
    ) : null, i.receipt ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(r, "channel"),
        value: i.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(r, "duration"),
        value: ve(i.timeSeconds)
      }
    ), i.note ? /* @__PURE__ */ a.createElement(V, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.spawnSession ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(r, "spawnedAgent"),
        value: i.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ a.createElement(
      jn,
      {
        size: "small",
        onClick: () => i.spawnSession && t(i.spawnSession),
        style: { marginTop: 4 }
      },
      f(r, "openChildSession")
    ) : null) : null)
  }), i.kind === "tool" ? (i.toolInput && u.push({
    key: "payload",
    label: f(r, "input"),
    children: /* @__PURE__ */ a.createElement(be, { value: i.toolInput, json: !0 })
  }), (i.toolOutput || i.toolError) && u.push({
    key: "result",
    label: f(r, "output"),
    children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolError ? /* @__PURE__ */ a.createElement(V, { type: "danger", style: { fontSize: 12 } }, i.toolError) : null, i.toolOutput ? /* @__PURE__ */ a.createElement(be, { value: i.toolOutput }) : null)
  })) : (i.outputText || i.thinkingText || i.messages || i.marker || i.toolCalls && i.toolCalls.length > 0) && (i.inputNew && i.inputNew.length > 0 && u.push({
    key: "input",
    label: f(r, "inputTab"),
    children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.contextReset ? /* @__PURE__ */ a.createElement(V, { type: "warning", style: { fontSize: 12 } }, f(r, "contextReset")) : null, i.resetDetail ? /* @__PURE__ */ a.createElement(
      "div",
      {
        style: {
          border: "1px solid rgba(250,173,20,0.4)",
          borderRadius: 6,
          padding: "6px 8px"
        }
      },
      /* @__PURE__ */ a.createElement(
        M,
        {
          label: f(r, "resetBreakAt"),
          value: `#${i.resetDetail.breakAt + 1}`
        }
      ),
      /* @__PURE__ */ a.createElement(
        M,
        {
          label: f(r, "resetSizes"),
          value: `${i.resetDetail.beforeCount} ${f(
            r,
            "resetMsgs"
          )} · ${Z(i.resetDetail.beforeChars)} ${f(
            r,
            "charUnit"
          )} → ${i.resetDetail.afterCount} ${f(
            r,
            "resetMsgs"
          )} · ${Z(i.resetDetail.afterChars)} ${f(
            r,
            "charUnit"
          )}`
        }
      ),
      /* @__PURE__ */ a.createElement(
        M,
        {
          label: f(r, "resetRoles"),
          value: Object.keys(i.resetDetail.afterByRole).map((S) => {
            const T = i.resetDetail.beforeByRole[S] ?? 0, A = i.resetDetail.afterByRole[S] ?? 0;
            return T === A ? null : `${S} ${T}→${A}`;
          }).filter(Boolean).join(" · ") || "-"
        }
      ),
      i.resetDetail.changes.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ a.createElement(V, { strong: !0, style: { fontSize: 12 } }, f(r, "resetChanges")), i.resetDetail.changes.slice(0, 20).map((S, T) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: T,
          style: {
            display: "flex",
            gap: 6,
            alignItems: "baseline"
          }
        },
        /* @__PURE__ */ a.createElement(
          zt,
          {
            color: S.status === "kept" ? "default" : S.status === "rewritten" ? "orange" : S.status === "removed" ? "red" : "green",
            style: { marginInlineEnd: 0, fontSize: 10 }
          },
          f(r, Ks[S.status])
        ),
        /* @__PURE__ */ a.createElement(V, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, S.role),
        S.status === "rewritten" ? /* @__PURE__ */ a.createElement(
          V,
          {
            type: "secondary",
            style: { fontSize: 11, minWidth: 0 },
            ellipsis: !0
          },
          `${f(r, "resetOldPrefix")}${(S.oldText ?? "").slice(0, 40)} → ${f(
            r,
            "resetNewPrefix"
          )}${(S.newText ?? "").slice(0, 40)}`
        ) : /* @__PURE__ */ a.createElement(
          V,
          {
            type: "secondary",
            style: { fontSize: 11, minWidth: 0 },
            ellipsis: !0
          },
          `${S.status === "removed" ? f(r, "resetOldPrefix") : f(r, "resetNewPrefix")}${(S.oldText ?? S.newText ?? "").slice(
            0,
            60
          )}`
        )
      ))) : null
    ) : null, i.messagesMeta ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(r, "inputTotal"),
        value: `${i.messagesMeta.count} · ${Z(
          i.messagesMeta.totalChars
        )} ${f(r, "charUnit")}`
      }
    ) : null, i.inputNew.length > 0 ? /* @__PURE__ */ a.createElement(
      Pn,
      {
        size: "small",
        defaultActiveKey: i.inputNew.length <= 5 ? ["messages"] : [],
        items: [
          {
            key: "messages",
            label: `${f(r, "inputMessages")} (${i.inputNew.length})`,
            children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.inputNew.map((S, T) => /* @__PURE__ */ a.createElement(
              Vs,
              {
                key: T,
                message: S,
                locale: r
              }
            )))
          }
        ]
      }
    ) : null)
  }), u.push({
    key: "raw",
    label: f(r, "output"),
    children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.inboundParts && i.inboundParts.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 12 } }, `${f(r, "inboundParts")} (${i.inboundParts.length})`), i.inboundParts.map((S, T) => /* @__PURE__ */ a.createElement(
      "div",
      {
        key: T,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ a.createElement(V, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, S.type.replace("Content", "")),
      /* @__PURE__ */ a.createElement(
        V,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        S.text ?? "-"
      )
    ))) : null, i.marker ? /* @__PURE__ */ a.createElement(be, { value: i.marker }) : null, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 12 } }, `${f(r, "toolCall")} (${i.toolCalls.length})`), i.toolCalls.map((S, T) => /* @__PURE__ */ a.createElement("div", { key: S.id || T, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ a.createElement(V, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", S.name), /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 11 } }, S.id)))) : null, i.note ? /* @__PURE__ */ a.createElement(V, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.messages && i.messages.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 12 } }, `${f(r, "query")} (${i.messages.length})`), i.messages.map((S, T) => /* @__PURE__ */ a.createElement(
      "div",
      {
        key: T,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ a.createElement(V, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, S.role),
      /* @__PURE__ */ a.createElement(
        V,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        S.text
      )
    ))) : null, i.thinkingText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 12 } }, f(r, "thinking")), /* @__PURE__ */ a.createElement(be, { value: i.thinkingText })) : null, i.outputText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 12 } }, f(r, "output")), /* @__PURE__ */ a.createElement(be, { value: i.outputText })) : null)
  })), (i.startedAt !== null || p || y) && u.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "Started", value: Ce(i.startedAt) }), /* @__PURE__ */ a.createElement(M, { label: "Total", value: ve(i.timeSeconds) }), y ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      M,
      {
        label: "TTFT",
        value: ve(y.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      M,
      {
        label: "Decoding",
        value: ve(y.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(r, "throughput"),
        value: Rt(
          p == null ? void 0 : p.output_tokens,
          y.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 12 } }, f(r, "noTiming")))
  }), p && u.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "Input", value: Z(p.input_tokens) }), /* @__PURE__ */ a.createElement(M, { label: "Output", value: Z(p.output_tokens) }), p.cache_creation_input_tokens ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: "Cache write",
        value: Z(p.cache_creation_input_tokens)
      }
    ) : null, p.cache_input_tokens ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: "Cache read",
        value: Z(p.cache_input_tokens)
      }
    ) : null, p.total_tokens !== void 0 ? /* @__PURE__ */ a.createElement(M, { label: "Total", value: Z(p.total_tokens) }) : null, p.time !== void 0 ? /* @__PURE__ */ a.createElement(M, { label: "API time", value: ve(p.time) }) : null)
  }), u.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ a.createElement(be, { value: i.raw })
  }), /* @__PURE__ */ a.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: c,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative"
      }
    },
    /* @__PURE__ */ a.createElement(St, { dragRef: g, width: c }),
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: o }), /* @__PURE__ */ a.createElement(Lt, { size: "small", items: u, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Ks = {
  kept: "resetKept",
  removed: "resetRemoved",
  rewritten: "resetRewritten",
  added: "resetAdded"
};
function Vs({
  message: e,
  locale: n
}) {
  const [t, s] = a.useState(!1), l = e.text ?? "";
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ a.createElement(V, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 11 } }, Z(e.chars), " ", f(n, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), l.length > 200 ? /* @__PURE__ */ a.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => s((o) => !o)
    },
    t ? f(n, "inputCollapseText") : f(n, "inputExpand")
  ) : null), l ? /* @__PURE__ */ a.createElement(
    "div",
    {
      style: t ? void 0 : {
        maxHeight: 57,
        overflow: "hidden",
        position: "relative"
      }
    },
    /* @__PURE__ */ a.createElement(be, { value: l })
  ) : null);
}
const Gs = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource"
}, Xs = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast"
};
function qs({
  span: e,
  records: n,
  onJumpRecord: t,
  onClose: s
}) {
  const l = ie(), o = e.endKind ? f(l, Xs[e.endKind]) : f(l, "spanOpen"), r = Es(e);
  return new Map(n.map((c) => [c.index, c])), /* @__PURE__ */ a.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: 380,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative",
        background: "inherit"
      }
    },
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: s }), /* @__PURE__ */ a.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ a.createElement(
      "span",
      {
        style: {
          width: 12,
          height: 12,
          borderRadius: 3,
          flexShrink: 0,
          background: `hsl(${e.colorHue}, 65%, 55%)`,
          border: e.bypass ? "1px dashed rgba(250,140,22,0.9)" : void 0
        }
      }
    ), /* @__PURE__ */ a.createElement(V, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ a.createElement(
      zt,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      f(l, Gs[e.trigger])
    )), /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(l, "spanStart"),
        value: Ce(e.startT)
      }
    ), /* @__PURE__ */ a.createElement(M, { label: f(l, "spanEnd"), value: o }), e.endT !== null ? /* @__PURE__ */ a.createElement(M, { label: " ", value: Ce(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(l, "spanLastActivity"),
        value: Ce(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(l, "spanDuration"),
        value: r === null ? "-" : ve(r / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ a.createElement(
      M,
      {
        label: f(l, "spanLoadState"),
        value: e.bypass ? f(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ a.createElement(V, { strong: !0, style: { fontSize: 12 } }, f(l, "spanEvidence")), e.evidences.slice(0, 30).map((c, h) => /* @__PURE__ */ a.createElement(
      "div",
      {
        key: h,
        style: {
          display: "flex",
          gap: 6,
          alignItems: "baseline",
          padding: "2px 0"
        }
      },
      /* @__PURE__ */ a.createElement(
        zt,
        {
          color: c.kind === "path" ? "geekblue" : c.kind === "content" ? "blue" : "default",
          style: { marginInlineEnd: 0, fontSize: 10 }
        },
        c.kind
      ),
      /* @__PURE__ */ a.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => t(c.recordIndex)
        },
        "#",
        c.recordIndex
      ),
      /* @__PURE__ */ a.createElement(V, { type: "secondary", style: { fontSize: 11 } }, c.detail)
    ))) : /* @__PURE__ */ a.createElement(
      V,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      f(l, "spanNoActivity")
    ))
  );
}
const de = window.QwenPaw.host.React, Js = de.useRef, Qs = de.useState;
de.useCallback;
de.useMemo;
const Ys = de.useEffect, Zs = de.useLayoutEffect, el = de.useReducer;
de.createContext;
de.useContext;
de.createElement;
de.cloneElement;
de.isValidElement;
de.memo;
de.forwardRef;
de.Fragment;
de.StrictMode;
de.version;
function tl(e) {
  return e ? e() : void 0;
}
function nl(e, n, t) {
  const s = new Array(e);
  return new Proxy(s, {
    get(l, o, r) {
      if (typeof o == "string") {
        const c = o.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const h = +o;
          if (Number.isInteger(h) && h >= 0 && h < e) {
            let g = l[h];
            if (!g) {
              const i = n[h * 2];
              g = l[h] = {
                index: h,
                key: t(h),
                start: i,
                size: n[h * 2 + 1],
                end: i + n[h * 2 + 1],
                lane: 0
              };
            }
            return g;
          }
        }
        if (o === "length") return e;
      }
      return Reflect.get(l, o, r);
    }
  });
}
function De(e, n, t) {
  let s = t.initialDeps ?? [], l, o = !0;
  function r() {
    var c;
    const h = process.env.NODE_ENV !== "production" && !!t.key && !!((c = t.debug) != null && c.call(t));
    let g = 0;
    h && (g = Date.now());
    const i = e();
    if (!(i.length !== s.length || i.some((u, S) => s[S] !== u)))
      return l;
    s = i;
    let y = 0;
    if (h && (y = Date.now()), l = n(...i), h) {
      const u = Math.round((Date.now() - g) * 100) / 100, S = Math.round((Date.now() - y) * 100) / 100, T = S / 16, A = (k, w) => {
        for (k = String(k); k.length < w; )
          k = " " + k;
        return k;
      };
      console.info(
        `%c⏱ ${A(S, 5)} /${A(u, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * T, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(o && t.skipInitialOnChange) && t.onChange(l), o = !1, l;
  }
  return r.updateDeps = (c) => {
    s = c;
  }, r;
}
function Yt(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const sl = (e, n) => Math.abs(e - n) < 1.01, ll = (e, n, t) => {
  let s;
  return function(...l) {
    e.clearTimeout(s), s = e.setTimeout(() => n.apply(this, l), t);
  };
};
let Ue;
const Et = () => {
  if (Ue !== void 0) return Ue;
  if (typeof navigator > "u") return Ue = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Ue = !0;
  const e = navigator.maxTouchPoints;
  return Ue = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Zt = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, ol = (e) => e, il = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - n + 1, l = new Array(s);
  for (let o = 0; o < s; o++)
    l[o] = n + o;
  return l;
}, rl = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const l = (r) => {
    const { width: c, height: h } = r;
    n({ width: Math.round(c), height: Math.round(h) });
  };
  if (l(Zt(t)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((r) => {
    const c = () => {
      const h = r[0];
      if (h != null && h.borderBoxSize) {
        const g = h.borderBoxSize[0];
        if (g) {
          l({ width: g.inlineSize, height: g.blockSize });
          return;
        }
      }
      l(Zt(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, lt = {
  passive: !0
}, al = typeof window > "u" ? !0 : "onscrollend" in window, cl = (e, n, t) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && al;
  let r = 0;
  const c = o ? null : ll(
    l,
    () => n(r, !1),
    e.options.isScrollingResetDelay
  ), h = (p) => () => {
    r = t(s), c == null || c(), n(r, p);
  }, g = h(!0), i = h(!1);
  return s.addEventListener("scroll", g, lt), o && s.addEventListener("scrollend", i, lt), () => {
    s.removeEventListener("scroll", g), o && s.removeEventListener("scrollend", i);
  };
}, ul = (e, n) => cl(e, n, (t) => {
  const { horizontal: s, isRtl: l } = e.options;
  return s ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), dl = (e, n, t) => {
  if (t.options.useCachedMeasurements) {
    const s = t.indexFromElement(e), l = t.options.getItemKey(s);
    return t.itemSizeCache.get(l) ?? t.options.estimateSize(s);
  }
  if (n != null && n.borderBoxSize) {
    const s = n.borderBoxSize[0];
    if (s)
      return Math.round(
        s[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!n) {
    const s = t.indexFromElement(e), l = t.options.getItemKey(s), o = t.itemSizeCache.get(l);
    if (o !== void 0)
      return o;
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, hl = (e, {
  adjustments: n = 0,
  behavior: t
}, s) => {
  var l, o;
  (o = (l = s.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [s.options.horizontal ? "left" : "top"]: e + n,
    behavior: t
  });
}, pl = hl;
class fl {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, s, l;
      return ((l = (s = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : s.now) == null ? void 0 : l.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const s = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const r = () => {
            const c = o.target, h = this.indexFromElement(c);
            if (!c.isConnected) {
              this.observer.unobserve(c);
              for (const [g, i] of this.elementsCache)
                if (i === c) {
                  this.elementsCache.delete(g);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(h) && this.resizeItem(
              h,
              this.options.measureElement(c, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = s()) == null || l.disconnect(), t = null;
        },
        observe: (l) => {
          var o;
          return (o = s()) == null ? void 0 : o.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var o;
          return (o = s()) == null ? void 0 : o.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var s, l;
      const o = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: ol,
        rangeExtractor: il,
        onChange: () => {
        },
        measureElement: dl,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        anchorTo: "start",
        followOnAppend: !1,
        scrollEndThreshold: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        laneAssignmentMode: "estimate",
        useCachedMeasurements: !1
      };
      for (const y in t) {
        const u = t[y];
        u !== void 0 && (o[y] = u);
      }
      const r = this.options;
      let c = null, h = null, g = !1;
      if (r !== void 0 && r.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const y = r.count, u = o.count, S = this.getMeasurements(), T = y > 0 ? ((s = S[0]) == null ? void 0 : s.key) ?? r.getItemKey(0) : null, A = y > 0 ? ((l = S[y - 1]) == null ? void 0 : l.key) ?? r.getItemKey(y - 1) : null;
        if (u !== y || y > 0 && u > 0 && (o.getItemKey(0) !== T || o.getItemKey(u - 1) !== A)) {
          g = !0;
          const H = y > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? S[0] : null;
          H && (c = [H.key, this.getScrollOffset() - H.start]);
          const R = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          R && u > y && this.isAtEnd(r.scrollEndThreshold) && (y === 0 || o.getItemKey(u - 1) !== A) && (h = R);
        }
      }
      this.options = o, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let i = !1, p = 0;
      if (c && this.scrollOffset !== null) {
        const [y, u] = c, S = this.getMeasurements(), { count: T, getItemKey: A } = this.options;
        let k = 0;
        for (; k < T && A(k) !== y; )
          k++;
        if (k < T) {
          const w = S[k];
          if (w) {
            const H = Math.max(0, w.start + u);
            H !== this.scrollOffset && (p = H - this.scrollOffset, this.scrollOffset = H, i = !0);
          }
        }
      }
      (i || h) && (this.pendingScrollAnchor = [
        i ? c[0] : null,
        i ? c[1] : 0,
        h,
        p
      ]);
    }, this.notify = (t) => {
      var s, l;
      (l = (s = this.options).onChange) == null || l.call(s, this, t);
    }, this.maybeNotify = De(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (t) => {
        this.notify(t);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const s = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s) {
        if (this.cleanup(), !s) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, r) => {
            if (r && this._intendedScrollOffset === null && o === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(o - this._intendedScrollOffset) < 1.5 && (o = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const c = this.getScrollOffset();
            this.scrollDirection = r ? c === o ? this.scrollDirection : c < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = r, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, r = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, c = () => {
            this._iosTouching = !1, !(!Et() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            r,
            lt
          ), o.addEventListener(
            "touchend",
            c,
            lt
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", r), o.removeEventListener("touchend", c), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, r, c, h] = l;
        o !== null && !c && (Et() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? h !== 0 && (this._iosDeferredAdjustment += h) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), c && this.scrollToEnd({ behavior: c });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      const t = this.getScrollOffset(), s = this.getMaxScrollOffset();
      if (t < 0 || t > s) return;
      if (this._iosDeferredAdjustment < 0 && t >= s - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const l = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = De(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode,
        this.options.gap
      ],
      (t, s, l, o, r, c, h, g) => (this.prevLanes !== void 0 && this.prevLanes !== c && (this.lanesChangedFlag = !0), this.prevLanes = c, this.pendingMin = null, {
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: c,
        laneAssignmentMode: h,
        gap: g
      }),
      {
        key: !1
      }
    ), this.getMeasurements = De(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: c,
        laneAssignmentMode: h,
        gap: g
      }, i) => {
        const p = this.itemSizeCache;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const k of this.laneAssignments.keys())
            k >= t && this.laneAssignments.delete(k);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((k) => {
          this.itemSizeCache.set(k.key, k.size);
        }));
        const y = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), c === 1) {
          const k = t * 2;
          let w = this._flatMeasurements;
          if (!w || w.length < k) {
            const F = new Float64Array(k);
            w && y > 0 && F.set(w.subarray(0, y * 2)), w = F, this._flatMeasurements = w;
          }
          let H;
          if (y === 0)
            H = s + l;
          else {
            const F = y - 1;
            H = w[F * 2] + w[F * 2 + 1] + g;
          }
          for (let F = y; F < t; F++) {
            const Y = o(F), z = p.get(Y), $ = typeof z == "number" ? z : this.options.estimateSize(F);
            w[F * 2] = H, w[F * 2 + 1] = $, H += $ + g;
          }
          const R = nl(t, w, o);
          return this.measurementsCache = R, R;
        }
        const u = this.measurementsCache.slice(0, y), S = new Array(c).fill(
          void 0
        ), T = new Float64Array(c);
        let A = 0;
        for (let k = 0; k < y; k++) {
          const w = u[k];
          w && (S[w.lane] === void 0 && A++, S[w.lane] = k, T[w.lane] = w.end);
        }
        for (let k = y; k < t; k++) {
          const w = o(k), H = this.laneAssignments.get(k);
          let R, F;
          const Y = h === "estimate" || p.has(w);
          if (H !== void 0 && this.options.lanes > 1) {
            R = H;
            const W = S[R], ne = W !== void 0 ? u[W] : void 0;
            F = ne ? ne.end + g : s + l;
          } else if (A === c) {
            let W = 0, ne = T[0], ue = S[0];
            for (let oe = 1; oe < c; oe++) {
              const le = T[oe];
              (le < ne || le === ne && S[oe] < ue) && (W = oe, ne = le, ue = S[oe]);
            }
            R = W, F = ne + g, Y && this.laneAssignments.set(k, R);
          } else
            R = k % this.options.lanes, F = s + l, Y && this.laneAssignments.set(k, R);
          const z = p.get(w), $ = typeof z == "number" ? z : this.options.estimateSize(k), ee = F + $;
          u[k] = {
            index: k,
            start: F,
            size: $,
            end: ee,
            key: w,
            lane: R
          }, S[R] === void 0 && A++, S[R] = k, T[R] = ee;
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = De(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, s, l, o) => t.length === 0 || s === 0 ? (this.range = null, null) : (this.range = gl(
        t,
        s,
        l,
        o,
        // Pass the typed array so binary search + forward-walk can read
        // start/end directly from Float64Array, skipping the Proxy traps.
        o === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
      ), this.range),
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = De(
      () => {
        let t = null, s = null;
        const l = this.calculateRange();
        return l && (t = l.startIndex, s = l.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, s]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          s
        ];
      },
      (t, s, l, o, r) => o === null || r === null ? [] : t({
        startIndex: o,
        endIndex: r,
        overscan: s,
        count: l
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const s = this.options.indexAttribute, l = t.getAttribute(s);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${s}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var s;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const l = this.scrollState.index ?? ((s = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : s.index);
      if (l !== void 0 && this.range) {
        const o = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), r = Math.max(0, l - o), c = Math.min(
          this.options.count - 1,
          l + o
        );
        return t >= r && t <= c;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((r, c) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(c));
        });
        return;
      }
      const s = this.indexFromElement(t), l = this.options.getItemKey(s), o = this.elementsCache.get(l);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, s) => {
      var l, o;
      if (t < 0 || t >= this.options.count) return;
      let r, c, h;
      const g = this._flatMeasurements;
      if (this.options.lanes === 1 && g !== null)
        h = this.options.getItemKey(t), c = g[t * 2], r = g[t * 2 + 1];
      else {
        const y = this.measurementsCache[t];
        if (!y) return;
        h = y.key, c = y.start, r = y.size;
      }
      const i = this.itemSizeCache.get(h) ?? r, p = s - i;
      if (p !== 0) {
        const y = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, u = y ? this.getTotalSize() : 0, S = this.getScrollOffset() + this.scrollAdjustments, A = !this.itemSizeCache.has(h) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          c < S
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          c + i <= S && this.scrollDirection !== "backward"
        ), k = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: h,
            start: c,
            size: r,
            end: c + r,
            lane: 0
          },
          p,
          this
        ) : A);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(h, s), this.itemSizeCacheVersion++;
        let w = !1;
        y ? w = this.applyScrollAdjustment(
          this.getTotalSize() - u
        ) : k && (w = this.applyScrollAdjustment(p)), this.notify(w);
      }
    }, this.getVirtualItems = De(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, s) => {
        const l = [];
        for (let o = 0, r = t.length; o < r; o++) {
          const c = t[o], h = s[c];
          l.push(h);
        }
        return l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const s = this.getMeasurements();
      if (s.length === 0)
        return;
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, r = Bn(
        0,
        s.length - 1,
        o ? (c) => l[c * 2] : (c) => Yt(s[c]).start,
        t
      );
      return Yt(s[r]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const t = this.scrollElement.document.documentElement;
        return this.options.horizontal ? t.scrollWidth - this.scrollElement.innerWidth : t.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getVirtualDistanceFromEnd = () => Math.max(
      this.getTotalSize() - this.getSize() - this.getScrollOffset(),
      0
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (t = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= t, this.getOffsetForAlignment = (t, s, l = 0) => {
      if (!this.scrollElement) return 0;
      const o = this.getSize(), r = this.getScrollOffset();
      s === "auto" && (s = t >= r + o ? "end" : "start"), s === "center" ? t += (l - o) / 2 : s === "end" && (t -= o);
      const c = this.getMaxScrollOffset();
      return Math.max(Math.min(c, t), 0);
    }, this.getOffsetForIndex = (t, s = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getSize(), o = this.getScrollOffset(), r = this.measurementsCache[t];
      if (!r) return;
      if (s === "auto")
        if (r.end >= o + l - this.options.scrollPaddingEnd)
          s = "end";
        else if (r.start <= o + this.options.scrollPaddingStart)
          s = "start";
        else
          return [o, s];
      if (s === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const c = s === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(c, s, r.size),
        s
      ];
    }, this.scrollToOffset = (t, { align: s = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(t, s), r = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: l,
        startedAt: r,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: s = "auto",
      behavior: l = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const o = this.getOffsetForIndex(t, s);
      if (!o)
        return;
      const [r, c] = o, h = this.now();
      this.scrollState = {
        index: t,
        align: c,
        behavior: l,
        startedAt: h,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: s = "auto" } = {}) => {
      const l = this.getScrollOffset() + t, o = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: s,
        startedAt: o,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToEnd = ({ behavior: t = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior: t
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior: t
      });
    }, this.getTotalSize = () => {
      var t;
      const s = this.getMeasurements();
      let l;
      if (s.length === 0)
        l = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const o = s.length - 1, r = this._flatMeasurements;
        r != null ? l = r[o * 2] + r[o * 2 + 1] : l = ((t = s[o]) == null ? void 0 : t.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let r = s.length - 1;
        for (; r >= 0 && o.some((c) => c === null); ) {
          const c = s[r];
          o[c.lane] === null && (o[c.lane] = c.end), r--;
        }
        l = Math.max(...o.filter((c) => c !== null));
      }
      return Math.max(
        l - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const t = [];
      if (this.itemSizeCache.size === 0) return t;
      const s = this.getMeasurements();
      for (const l of s)
        l && this.itemSizeCache.has(l.key) && t.push({
          index: l.index,
          key: l.key,
          start: l.start,
          size: l.size,
          end: l.end,
          lane: l.lane
        });
      return t;
    }, this._scrollToOffset = (t, {
      adjustments: s,
      behavior: l
    }) => {
      this._intendedScrollOffset = t + (s ?? 0), this.options.scrollToFn(t, { behavior: l, adjustments: s }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(n);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(n, t) {
    return n === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", n), Et() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += n, !1) : (this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += n,
      behavior: t
    }), this.scrollOffset !== null && (this.scrollOffset += this.scrollAdjustments, this.scrollOffset < 0 && (this.scrollOffset = 0), this.scrollAdjustments = 0), !0));
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = s ? s[0] : this.scrollState.lastTargetOffset, o = 1, r = l !== this.scrollState.lastTargetOffset;
    if (!r && sl(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, r) {
      const c = this.getSize() || 600, h = Math.abs(l - this.getScrollOffset()), g = this.scrollState.behavior === "smooth" && h > c;
      this.scrollState.lastTargetOffset = l, g || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: g ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const Bn = (e, n, t, s) => {
  for (; e <= n; ) {
    const l = (e + n) / 2 | 0, o = t(l);
    if (o < s)
      e = l + 1;
    else if (o > s)
      n = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function ml(e, n, t) {
  let s = 0;
  for (; s <= n; ) {
    const l = (s + n) / 2 | 0, o = e[l * 2];
    if (o < t)
      s = l + 1;
    else if (o > t)
      n = l - 1;
    else
      return l;
  }
  return s > 0 ? s - 1 : 0;
}
function gl(e, n, t, s, l) {
  const o = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: o };
  if (s === 1 && l !== null) {
    const g = ml(
      l,
      o,
      t
    );
    let i = g;
    const p = t + n;
    for (; i < o && l[i * 2] + l[i * 2 + 1] < p; )
      i++;
    return { startIndex: g, endIndex: i };
  }
  let c = Bn(0, o, (g) => e[g].start, t), h = c;
  if (s === 1)
    for (; h < o && e[h].end < t + n; )
      h++;
  else if (s > 1) {
    const g = Array(s).fill(0);
    for (; h < o && g.some((p) => p < t + n); ) {
      const p = e[h];
      g[p.lane] = p.end, h++;
    }
    const i = Array(s).fill(t + n);
    for (; c >= 0 && i.some((p) => p >= t); ) {
      const p = e[c];
      i[p.lane] = p.start, c--;
    }
    c = Math.max(0, c - c % s), h = Math.min(o, h + (s - 1 - h % s));
  }
  return { startIndex: c, endIndex: h };
}
const xt = typeof document < "u" ? Zs : Ys;
function yl({
  useFlushSync: e = !0,
  directDomUpdates: n = !1,
  directDomUpdatesMode: t = "transform",
  ...s
}) {
  const l = el((i) => i + 1, 0)[1], o = Js({
    enabled: n,
    mode: t,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  o.current.enabled = n, o.current.mode = t;
  const r = (i) => {
    const p = o.current;
    if (!p.enabled || !p.container) return;
    const y = i.getTotalSize();
    if (y !== p.lastSize) {
      p.lastSize = y;
      const u = i.options.horizontal ? "width" : "height";
      p.container.style[u] = `${y}px`;
    }
  }, c = (i) => {
    const p = o.current;
    if (!p.enabled || !p.container) return;
    r(i);
    const y = !!i.options.horizontal, u = p.mode === "transform", S = y ? "left" : "top", T = i.options.scrollMargin, A = i.getVirtualItems();
    for (const k of A) {
      const w = k.start - T, H = i.elementsCache.get(k.key);
      H && p.lastPositions.get(H) !== w && (p.lastPositions.set(H, w), u ? H.style.transform = y ? `translate3d(${w}px, 0, 0)` : `translate3d(0, ${w}px, 0)` : H.style[S] = `${w}px`);
    }
  }, h = {
    ...s,
    onChange: (i, p) => {
      var y;
      const u = o.current;
      let S = !0;
      if (u.enabled) {
        c(i);
        const T = i.range, A = u.prevRange;
        S = !A || A.isScrolling !== i.isScrolling || A.startIndex !== (T == null ? void 0 : T.startIndex) || A.endIndex !== (T == null ? void 0 : T.endIndex), S && (u.prevRange = T ? {
          startIndex: T.startIndex,
          endIndex: T.endIndex,
          isScrolling: i.isScrolling
        } : null);
      }
      S && (e && p ? tl(l) : l()), (y = s.onChange) == null || y.call(s, i, p);
    }
  }, [g] = Qs(() => {
    const i = new fl(h);
    return Object.assign(i, {
      containerRef: (p) => {
        const y = o.current;
        if (y.container = p, y.lastSize = null, p && y.enabled) {
          const u = i.getTotalSize();
          y.lastSize = u;
          const S = i.options.horizontal ? "width" : "height";
          p.style[S] = `${u}px`;
        }
      }
    });
  });
  return g.setOptions(h), xt(() => g._didMount(), []), xt(() => (r(g), g._willUpdate())), xt(() => {
    c(g);
  }), g;
}
function vl(e) {
  return yl({
    observeElementRect: rl,
    observeElementOffset: ul,
    scrollToFn: pl,
    ...e
  });
}
const rt = window.QwenPaw.host, I = rt.React, { useRef: Sl } = I, { Tag: je, Tooltip: El } = rt.antd, { Text: ye } = rt.antd.Typography, {
  CaretRightOutlined: xl,
  CloseCircleOutlined: bl,
  FileTextOutlined: kl,
  RobotOutlined: wl,
  RocketOutlined: Tl,
  SafetyOutlined: _l,
  SendOutlined: Il,
  SettingOutlined: Ml,
  ToolOutlined: Cl,
  UserOutlined: zl
} = rt.antdIcons, $l = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Ol = {
  user: /* @__PURE__ */ I.createElement(zl, null),
  message: /* @__PURE__ */ I.createElement(wl, null),
  tool: /* @__PURE__ */ I.createElement(Cl, null),
  system: /* @__PURE__ */ I.createElement(Ml, null)
}, en = {
  approval: { color: "volcano", icon: /* @__PURE__ */ I.createElement(_l, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ I.createElement(Il, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ I.createElement(Tl, null) },
  header: { color: "green", icon: /* @__PURE__ */ I.createElement(kl, null) },
  error: { color: "red", icon: /* @__PURE__ */ I.createElement(bl, null) }
}, Al = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, tn = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, Rl = 150, $t = 26, Fn = 34, nn = 9, sn = 30;
function Ll(e) {
  const n = ie(), t = tn[e] ?? tn.unknown;
  return n === "zh-CN" ? t.zh : t.en;
}
const Nl = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Dl(e, n) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e.inboundParts ?? []) {
    const l = Nl[s.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([s, l]) => `${f(n, s)}×${l}`).join(" ");
}
function jl(e, n) {
  const t = e.receipt, s = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${f(n, "replySent")}${s} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${f(n, "chars")}`;
}
function ln({
  record: e,
  selected: n,
  dimmed: t,
  multiRequest: s,
  onSelect: l
}) {
  var c, h;
  const o = e.usage, r = o && (o.input_tokens || o.output_tokens) ? `${Z(o.input_tokens)}→${Z(
    o.output_tokens
  )}` : null;
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      className: "at-ledger-row",
      "data-kind": e.kind,
      "data-error": e.isError || void 0,
      "data-running": e.running || void 0,
      "data-selected": n || void 0,
      "data-dimmed": t || void 0,
      onClick: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: $t,
        cursor: "pointer",
        background: n ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1,
        borderLeft: e.skillSpanHue !== void 0 ? `3px solid ${e.skillSpanBypass ? "rgba(250,140,22,0.9)" : `hsl(${e.skillSpanHue}, 65%, 55%)`}` : "3px solid transparent"
      }
    },
    /* @__PURE__ */ I.createElement(
      "span",
      {
        style: {
          flexShrink: 0,
          width: 68,
          color: "rgba(128,128,128,1)",
          fontSize: 11,
          textAlign: "right"
        }
      },
      s && /* @__PURE__ */ I.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ I.createElement(
      je,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((c = en[e.markerKind]) == null ? void 0 : c.color) || $l[e.kind] || "default",
        icon: e.markerKind && ((h = en[e.markerKind]) == null ? void 0 : h.icon) || Ol[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? f(ie(), "skillLoadKind") : On(e, ie())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ I.createElement(
      je,
      {
        title: e.model,
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0,
          maxWidth: 160,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      },
      e.model
    ) : null,
    e.inSkill ? /* @__PURE__ */ I.createElement(
      je,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${f(ie(), "skillBypass")}`,
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0,
          maxWidth: 160,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      },
      "⚡",
      e.inSkill
    ) : e.guidedSkill ? /* @__PURE__ */ I.createElement(
      El,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? f(ie(), "guidedBySlash") : f(ie(), "guidedByLoad")}`
      },
      /* @__PURE__ */ I.createElement(
        ye,
        {
          style: {
            fontSize: 10,
            flexShrink: 0,
            maxWidth: 160,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "#2f54eb"
          }
        },
        "∈",
        e.guidedSkill
      )
    ) : null,
    e.kind === "user" && e.skillName ? /* @__PURE__ */ I.createElement(
      je,
      {
        color: "geekblue",
        title: e.skillName,
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0,
          maxWidth: 160,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      },
      "/",
      e.skillName
    ) : null,
    /* @__PURE__ */ I.createElement(
      "span",
      {
        style: {
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          fontSize: 12
        }
      },
      e.receipt ? /* @__PURE__ */ I.createElement(ye, { type: "secondary", style: { fontSize: 12 } }, jl(e, ie())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(ye, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ I.createElement(ye, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ I.createElement(ye, { type: "secondary", style: { fontSize: 12 } }, ` · ${f(ie(), "skillLoaded")} ${Z(
        e.toolOutputChars
      )} ${f(ie(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(ye, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ I.createElement(ye, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ I.createElement(
        ye,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(
        ye,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(ye, { type: "secondary", style: { fontSize: 11 } }, ` ${Dl(e, ie()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ I.createElement(ye, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
    ),
    /* @__PURE__ */ I.createElement(
      "span",
      {
        style: {
          flexShrink: 0,
          whiteSpace: "nowrap",
          fontSize: 11,
          color: "rgba(128,128,128,1)",
          textAlign: "right"
        }
      },
      r ? /* @__PURE__ */ I.createElement("span", { style: { color: "#1677ff" } }, r) : null,
      r ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && ve(e.timeSeconds)
    )
  );
}
function Pl({
  turn: e,
  collapsed: n,
  selected: t,
  cellCount: s,
  onToggle: l,
  onSelect: o,
  onSkillSpanOpen: r
}) {
  const c = ie();
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Fn }
    },
    /* @__PURE__ */ I.createElement(
      "span",
      {
        onClick: (h) => {
          h.stopPropagation(), o();
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "1px 10px",
          borderRadius: 999,
          background: t ? "rgba(22,119,255,0.16)" : "rgba(22,119,255,0.08)",
          border: "1px solid rgba(22,119,255,0.25)",
          fontSize: 11,
          cursor: "pointer",
          userSelect: "none"
        }
      },
      /* @__PURE__ */ I.createElement(
        xl,
        {
          onClick: (h) => {
            h.stopPropagation(), l();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: n ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ I.createElement(ye, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ I.createElement(ye, { type: "secondary", style: { fontSize: 11 } }, ve(e.durationMs / 1e3)),
      /* @__PURE__ */ I.createElement(ye, { type: "secondary", style: { fontSize: 11 } }, s, " ", f(c, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ I.createElement(
          "span",
          {
            onClick: (h) => {
              r && (h.stopPropagation(), r(e.skillsUsed[0], e.turn));
            },
            style: {
              display: "inline-flex",
              cursor: r ? "pointer" : void 0
            }
          },
          /* @__PURE__ */ I.createElement(
            je,
            {
              color: "geekblue",
              title: e.skillsUsed.join(", "),
              style: {
                marginInlineEnd: 0,
                fontSize: 10,
                lineHeight: "16px",
                cursor: "inherit"
              }
            },
            "📚 ",
            e.skillsUsed.slice(0, 2).join(" "),
            e.skillsUsed.length > 2 ? ` +${e.skillsUsed.length - 2}` : ""
          )
        )
      ) : null,
      /* @__PURE__ */ I.createElement(
        je,
        {
          color: Al[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Ll(e.status)
      )
    )
  );
}
function Bl({
  turns: e,
  selectedIndex: n,
  selectedTurn: t,
  collapsedTurns: s,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: r,
  onSelectedTurnChange: c,
  onToggleTurn: h,
  callsCollapsed: g,
  hasOlderRecords: i,
  loadingOlder: p,
  onLoadOlder: y,
  initialRecord: u,
  emptyText: S,
  onSkillSpanOpen: T
}) {
  const A = ie(), k = Sl(null), w = e.filter(($) => $.turn !== null), H = w.length > 1, R = I.useMemo(() => {
    var ee;
    const $ = [];
    i && $.push({
      key: "load-older",
      height: sn,
      type: "load-older"
    }), u && ($.push({
      key: "initial",
      height: $t,
      type: "initial",
      record: u
    }), $.push({
      key: "initial-divider",
      height: nn,
      type: "divider"
    }));
    for (const W of w) {
      const ne = W.turn;
      if ($.push({
        key: `turn-${ne}`,
        height: Fn,
        type: "boundary",
        turn: W
      }), !s.has(ne))
        for (const ue of ((ee = W.groups[0]) == null ? void 0 : ee.cells) ?? [])
          g && ue.kind === "tool" || $.push({
            key: `rec-${ue.index}`,
            height: $t,
            type: "record",
            record: ue
          });
    }
    return $;
  }, [
    w,
    s,
    g,
    i,
    u
  ]), F = I.useCallback(
    ($) => l !== null && !l.has($.index) || o !== null && !o.has($.index),
    [l, o]
  ), Y = ($) => {
    var ee;
    switch ($.type) {
      case "load-older":
        return /* @__PURE__ */ I.createElement("div", { style: { textAlign: "center", height: sn } }, /* @__PURE__ */ I.createElement(
          "button",
          {
            type: "button",
            onClick: y,
            disabled: p,
            style: {
              border: "1px solid rgba(128,128,128,0.3)",
              borderRadius: 10,
              background: "transparent",
              padding: "1px 12px",
              fontSize: 11,
              cursor: p ? "default" : "pointer",
              color: "rgba(128,128,128,1)"
            }
          },
          p ? "…" : `⋯ ${f(A, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ I.createElement(
          "div",
          {
            style: {
              height: nn,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const W = $.record;
        return /* @__PURE__ */ I.createElement(
          ln,
          {
            record: W,
            selected: n === W.index,
            dimmed: F(W),
            multiRequest: H,
            onSelect: () => r(W.index)
          }
        );
      }
      case "boundary": {
        const W = $.turn, ne = W.turn;
        return /* @__PURE__ */ I.createElement(
          Pl,
          {
            turn: W,
            collapsed: s.has(ne),
            selected: t === ne,
            cellCount: ((ee = W.groups[0]) == null ? void 0 : ee.cells.length) ?? 0,
            onToggle: () => h(ne),
            onSelect: () => c(ne),
            onSkillSpanOpen: T ? (ue, oe) => T(ue, oe) : void 0
          }
        );
      }
      case "record":
      default: {
        const W = $.record;
        return /* @__PURE__ */ I.createElement(
          ln,
          {
            record: W,
            selected: n === W.index,
            dimmed: F(W),
            multiRequest: H,
            onSelect: () => r(W.index)
          }
        );
      }
    }
  };
  if (R.length === 0)
    return /* @__PURE__ */ I.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ I.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        S ?? f(A, "noSessions")
      )
    );
  const z = R.length <= Rl ? /* @__PURE__ */ I.createElement("div", null, R.map(($) => Y($))) : /* @__PURE__ */ I.createElement(
    Fl,
    {
      rows: R,
      scrollRef: k,
      renderRow: Y
    }
  );
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      ref: k,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    z
  );
}
function Fl({
  rows: e,
  scrollRef: n,
  renderRow: t
}) {
  const s = vl({
    count: e.length,
    getScrollElement: () => n.current,
    estimateSize: (l) => e[l].height,
    overscan: 12
  });
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      style: {
        height: s.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    s.getVirtualItems().map((l) => /* @__PURE__ */ I.createElement(
      "div",
      {
        key: e[l.index].key,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: l.size,
          transform: `translateY(${l.start}px)`
        }
      },
      t(e[l.index])
    ))
  );
}
function bt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function on(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (n) => typeof n == "number" && Number.isFinite(n)
  );
}
function Hl(e) {
  if (!Array.isArray(e) || e.length === 0) return;
  const n = [];
  for (const t of e) {
    if (!t || typeof t != "object") continue;
    const s = t;
    n.push({
      role: typeof s.role == "string" ? s.role : "?",
      chars: typeof s.chars == "number" ? s.chars : 0,
      text: typeof s.text == "string" ? s.text : void 0,
      toolCallId: typeof s.tool_call_id == "string" ? s.tool_call_id : void 0
    });
  }
  return n.length > 0 ? n : void 0;
}
function Ul(e) {
  if (!(typeof e != "string" || !e))
    try {
      const n = JSON.parse(e);
      if (typeof n.skill == "string" && n.skill)
        return n.skill;
    } catch {
    }
}
function Hn(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function Wl(e) {
  const n = [];
  for (const t of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const s = t[1].match(/<name>([^<]+)<\/name>/), l = t[1].match(/<dir>([^<]+)<\/dir>/);
    s && l && l[1].trim() && n.push([Hn(l[1].trim()), s[1].trim()]);
  }
  return n.sort((t, s) => s[0].length - t[0].length), n;
}
function rn(e) {
  const n = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return n ? n[1].trim() : null;
}
function _e(e, n = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Kl(e) {
  var oe, le;
  const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = [];
  let c = "";
  const h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  let p = [];
  const y = /* @__PURE__ */ new Set(), u = [], S = new vs(), T = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let w = [], H = [], R = 0, F = 0;
  const Y = (m) => m.groups[0].cells, z = (m, v) => {
    const E = o.get(m);
    E ? E.push(v) : o.set(m, [v]);
  }, $ = (m, v) => {
    if (!m)
      if (c)
        m = c;
      else {
        r.push(v);
        return;
      }
    const E = t.get(m);
    if (E)
      v.runIndex = E.turn ?? 0, Y(E).push(v);
    else if (c) {
      const b = t.get(c);
      b ? (v.runIndex = b.turn ?? 0, Y(b).push(v)) : z(m, v);
    } else
      z(m, v);
  }, ee = (m, v) => {
    const E = o.get(v);
    if (E) {
      for (const b of E) Y(m).push(b);
      o.delete(v);
    }
  };
  for (const m of e) {
    const v = bt(m);
    switch (m.type) {
      case "run/start": {
        F += 1, u.length = 0, h.set(
          m.run_id,
          typeof v.channel == "string" ? v.channel : ""
        );
        const E = {
          turn: F,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${F}`, cells: [] }]
        };
        t.set(m.run_id, E), n.push(E), c = m.run_id, ee(E, m.run_id);
        for (const N of r.splice(0))
          N.runIndex = F, Y(E).push(N);
        const b = Array.isArray(v.messages) ? v.messages : [], C = String(v.query ?? "");
        let j = typeof v.slash_skill == "string" && v.slash_skill ? v.slash_skill : rn(C);
        !j && b.length > 0 && (j = rn(String(((oe = b[0]) == null ? void 0 : oe.text) ?? ""))), j && (y.add(j), u.push([j, "slash"]), S.onRunStart(), S.onSlashSkill(
          j,
          m.seq,
          pe(m.t) ?? 0
        ), T.set(`${j}#${m.seq}`, E));
        const O = {
          index: ++R,
          runIndex: F,
          runId: m.run_id,
          kind: "user",
          text: _e(C) || _e((le = b.at(-1)) == null ? void 0 : le.text),
          messages: b,
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: j ?? void 0,
          model: void 0
        };
        g.set(m.run_id, O), Y(E).push(O);
        break;
      }
      case "run/end": {
        const E = t.get(m.run_id);
        c === m.run_id && (c = ""), u.length = 0, S.onRunEnd(m.seq, pe(m.t) ?? 0), h.delete(m.run_id), g.delete(m.run_id);
        const b = String(v.status ?? "unknown");
        if (E && (E.status = b, E.durationMs = typeof v.duration_ms == "number" ? v.duration_ms : null), b === "error" && v.error) {
          const C = E ?? {
            turn: null,
            status: b,
            durationMs: typeof v.duration_ms == "number" ? v.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          E || n.push(C), C.groups[0].cells.push({
            index: ++R,
            runIndex: F,
            runId: m.run_id,
            kind: "system",
            markerKind: "error",
            text: _e(String(v.error)) || "run failed",
            marker: String(v.error ?? "run failed"),
            timeSeconds: typeof v.duration_ms == "number" ? v.duration_ms / 1e3 : null,
            startedAt: pe(m.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [m]
          });
        }
        break;
      }
      case "agent/spawn": {
        const E = typeof v.child_session_id == "string" ? v.child_session_id : void 0, b = typeof v.child_agent_id == "string" ? v.child_agent_id : "?";
        $(m.run_id, {
          index: ++R,
          runIndex: 0,
          runId: m.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${b} → ${E ?? "?"}`,
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: E,
          spawnAgent: b,
          raw: [m]
        });
        break;
      }
      case "message/inbound": {
        const E = Array.isArray(v.parts) ? v.parts : [], b = v.channel_meta && typeof v.channel_meta == "object" ? v.channel_meta : void 0, C = E.map((D) => ({
          type: String(D.type ?? "?"),
          text: typeof D.text == "string" ? D.text : void 0
        })), j = h.get(m.run_id) ?? "", O = b && typeof b.user_id == "string" && b.user_id ? b.user_id : void 0, N = _e(
          C.map((D) => D.text ?? "").filter(Boolean).join(`
`)
        ), G = g.get(m.run_id);
        G && !G.inboundParts ? (G.inboundParts = C, G.channel = j || void 0, G.userId = O, G.raw = [
          ...G.raw ?? [],
          m
        ], G.text || (G.text = N)) : $(m.run_id, {
          index: ++R,
          runIndex: 0,
          runId: m.run_id,
          kind: "user",
          text: N || "📥",
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          channel: j || void 0,
          userId: O,
          inboundParts: C,
          raw: [m]
        });
        break;
      }
      case "message/outbound": {
        const E = typeof v.text == "string" ? v.text : "";
        $(m.run_id, {
          index: ++R,
          runIndex: 0,
          runId: m.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: E || void 0,
          receipt: {
            channel: h.get(m.run_id) || void 0,
            chars: E.length
          },
          raw: [m]
        });
        break;
      }
      case "approval/asked": {
        $(m.run_id, {
          index: ++R,
          runIndex: 0,
          runId: m.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(v.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [m]
        });
        break;
      }
      case "approval/decided": {
        const E = String(v.decision ?? "?"), b = v.tool_name ? String(v.tool_name) : "";
        $(m.run_id, {
          index: ++R,
          runIndex: 0,
          runId: m.run_id,
          kind: "system",
          markerKind: "approval",
          text: b ? `${b} → ${E}` : E,
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: E === "denied",
          running: !1,
          raw: [m]
        });
        break;
      }
      case "llm/header": {
        const E = typeof v.sha256 == "string" ? v.sha256 : "", b = typeof v.prev_sha256 == "string" ? v.prev_sha256 : void 0, C = v.reason === "changed" ? "changed" : "initial", j = typeof v.system_prompt == "string" ? v.system_prompt : "", O = Array.isArray(v.tools) ? v.tools : [], N = Array.isArray(v.schemas) ? v.schemas : void 0;
        $(m.run_id, {
          index: ++R,
          runIndex: 0,
          runId: m.run_id,
          kind: "system",
          markerKind: "header",
          text: C === "initial" ? `⚙ ${j ? `System Prompt (${j.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: j,
          prevPrompt: i.get(b ?? ""),
          headerTools: O,
          headerReason: C,
          sha: E,
          prevSha: b,
          schemas: N,
          raw: [m]
        }), E && i.set(E, j), j && (p = Wl(j));
        break;
      }
      case "llm/call": {
        const E = bt(m), b = E.options && typeof E.options == "object" && Object.keys(E.options).length > 0 ? E.options : void 0, C = E.messages_meta, j = C && typeof C == "object" ? {
          count: typeof C.count == "number" ? C.count : 0,
          totalChars: typeof C.total_chars == "number" ? C.total_chars : 0,
          charsByRole: on(C.chars_by_role) ? C.chars_by_role : {},
          countByRole: on(C.count_by_role) ? C.count_by_role : {},
          maxToolChars: typeof C.max_tool_chars == "number" ? C.max_tool_chars : 0
        } : void 0, O = Hl(E.messages_new);
        let N;
        if (E.context_reset === !0) {
          const J = (O ?? []).map(
            (ge) => ({
              role: ge.role,
              chars: ge.chars,
              text: ge.text
            })
          );
          let re;
          w.length > 0 || J.length === 0 ? re = w : re = H.map((ge) => ({
            role: ge.role,
            text: ge.text
          })), N = _s(re, J), j && (N.afterChars = j.totalChars);
        }
        if (O) {
          const J = O.map((re) => ({
            role: re.role,
            chars: re.chars,
            text: re.text
          }));
          E.context_reset === !0 ? w = J : E.tail_update === !0 ? w = [...w.slice(0, -1), ...J] : typeof E.messages_count == "number" && O.length >= E.messages_count && w.length > 0 ? w = J : w = [...w, ...J];
        }
        H = Array.isArray(E.messages) ? E.messages.map((J) => ({
          role: J.role,
          text: J.text
        })) : [];
        const G = {
          index: ++R,
          runIndex: 0,
          runId: m.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(E.model ?? "unknown"),
          provider: typeof E.provider == "string" && E.provider ? E.provider : void 0,
          messagesMeta: j,
          inputNew: O,
          contextReset: E.context_reset === !0,
          resetDetail: N,
          options: b
        };
        $(m.run_id, G);
        const D = s.get(m.run_id) ?? [];
        D.push({ cell: G, callData: E, call: m }), s.set(m.run_id, D);
        break;
      }
      case "llm/result": {
        const E = s.get(m.run_id), b = E == null ? void 0 : E.shift(), C = (b == null ? void 0 : b.callData) ?? {}, j = typeof v.duration_ms == "number" ? v.duration_ms : null, O = v.usage ?? void 0, N = v.timing, G = Array.isArray(v.tool_calls) ? v.tool_calls : void 0, re = {
          text: (v.error ? _e(String(v.error)) : _e(String(v.text ?? ""))) || (G && G.length > 0 ? `🛠 ${G.map((ge) => ge.name).join(", ")}` : ""),
          timeSeconds: j === null ? null : j / 1e3,
          isError: !!v.error,
          running: !1,
          outputText: v.text ? String(v.text) : void 0,
          thinkingText: v.thinking ? String(v.thinking) : void 0,
          usage: O,
          timing: N,
          toolCalls: G,
          note: v.note ? String(v.note) : void 0
        };
        b ? (Object.assign(b.cell, re), b.cell.model = String(
          v.model ?? C.model ?? b.cell.model
        ), b.cell.raw = [
          ...b.call ? [b.call] : [],
          m
        ]) : $(m.run_id, {
          index: ++R,
          runIndex: 0,
          runId: m.run_id,
          kind: "message",
          startedAt: pe(m.t) ?? 0,
          model: String(v.model ?? C.model ?? "unknown"),
          ...re
        });
        break;
      }
      case "tool/call": {
        const E = bt(m), b = String(E.name ?? "?"), C = b === "Skill" ? Ul(E.input) : void 0;
        if (C) {
          y.add(C), u.push([C, "load"]);
          const ae = S.onSkillLoad(
            C,
            m.seq,
            pe(m.t) ?? 0
          ), Ee = t.get(m.run_id);
          Ee && T.set(ae, Ee);
        }
        const j = E.input ? String(E.input) : void 0;
        let O;
        if (!C && j) {
          const ae = typeof E.skill_resource == "string" ? E.skill_resource : void 0;
          ae && (O = ae);
        }
        if (!C && !O && j && p.length > 0) {
          const ae = Hn(j);
          for (const [Ee, Te] of p)
            if (ae.includes(Ee)) {
              O = Te;
              break;
            }
        }
        let N, G;
        if (!C && !O && j && A.size > 0) {
          const ae = ks(j, A);
          ae && (N = ae.skill, G = ae.feature);
        }
        let D, J;
        if (!C && !O && !N && u.length > 0) {
          const [ae, Ee] = u[u.length - 1];
          D = ae, J = Ee;
        }
        const re = S.onToolCall({
          attribution: O ? { skill: O, kind: "path", detail: "skill dir in input" } : N ? {
            skill: N,
            kind: "content",
            detail: `“${G}” in input (skill doc)`
          } : D ? {
            skill: D,
            kind: "temporal",
            detail: J === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: R + 1,
          seq: m.seq,
          t: pe(m.t) ?? 0
        });
        if (re && !T.has(re)) {
          const ae = t.get(m.run_id);
          ae && T.set(re, ae);
        }
        const ge = {
          index: ++R,
          runIndex: 0,
          runId: m.run_id,
          kind: "tool",
          text: C ? `📚 ${C}` : `${b}(${_e(String(E.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: b,
          skillName: C,
          inSkill: O,
          inSkillLoaded: O ? y.has(O) : void 0,
          guidedSkill: D ?? N,
          guidedReason: J ?? (N ? "load" : void 0),
          skillSpanId: re ?? void 0,
          toolInput: E.input ? String(E.input) : void 0
        };
        $(m.run_id, ge);
        const Se = l.get(m.run_id) ?? [];
        Se.push({ cell: ge, callData: E, call: m }), l.set(m.run_id, Se);
        break;
      }
      case "tool/result": {
        const E = l.get(m.run_id), b = typeof v.tool_call_id == "string" ? v.tool_call_id : null;
        let C;
        if (E) {
          const J = b ? E.findIndex(
            (re) => re.callData.tool_call_id === b
          ) : -1;
          J >= 0 ? C = E.splice(J, 1)[0] : C = E.shift();
        }
        const j = typeof v.duration_ms == "number" ? v.duration_ms : null, O = v.ok !== !1 && !v.error, N = v.output ? String(v.output) : void 0, G = N ? ` → ${_e(N, 60)}` : "", D = {
          timeSeconds: j === null ? null : j / 1e3,
          isError: !O,
          running: !1,
          toolOutput: N,
          toolOutputChars: typeof v.output_chars == "number" ? v.output_chars : void 0,
          toolOutputBytes: typeof v.output_bytes == "number" ? v.output_bytes : void 0,
          toolError: v.error ? String(v.error) : void 0,
          note: v.note ? String(v.note) : void 0
        };
        if (C) {
          if (Object.assign(C.cell, D), !C.cell.skillName)
            C.cell.text = `${C.cell.text}${G}`;
          else if (N) {
            const J = typeof v.skill_sha == "string" ? v.skill_sha : null;
            J && k.get(C.cell.skillName) === J || (A.set(
              C.cell.skillName,
              bs(N)
            ), J && k.set(C.cell.skillName, J));
          }
          C.cell.raw = [
            ...C.call ? [C.call] : [],
            m
          ];
        } else
          $(m.run_id, {
            index: ++R,
            runIndex: 0,
            runId: m.run_id,
            kind: "tool",
            text: `?${G}`,
            startedAt: pe(m.t) ?? 0,
            ...D
          });
        break;
      }
    }
  }
  for (const [m, v] of o) {
    const E = t.get(m);
    if (E) {
      for (const b of v) Y(E).push(b);
      o.delete(m);
    }
  }
  for (const m of n) {
    const v = [];
    for (const E of m.groups)
      for (const b of E.cells)
        b.skillName && !v.includes(b.skillName) && v.push(b.skillName);
    v.length > 0 && (m.skillsUsed = v);
  }
  const W = S.spans(), ne = new Set(W.map((m) => m.skill)).size, ue = /* @__PURE__ */ new Map();
  for (const m of n)
    for (const v of m.groups)
      for (const E of v.cells) ue.set(E.index, E);
  for (const m of W) {
    const v = T.get(m.id);
    v && (v.skillSpans ?? (v.skillSpans = [])).push(m);
    for (const E of m.attributedIndexes) {
      const b = ue.get(E);
      b && (b.skillSpanId = m.id, b.skillSpanHue = ne > 1 ? m.colorHue : void 0, b.skillSpanBypass = m.bypass);
    }
  }
  return n;
}
function an(e) {
  return e.flatMap((n) => n.groups.flatMap((t) => t.cells));
}
function Vl(e) {
  var r;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const n = e[0], t = ((r = n.groups[0]) == null ? void 0 : r.cells) ?? [], s = t.findIndex(
    (c) => c.kind === "system" && c.headerReason === "initial" && c.prompt !== void 0
  );
  if (s < 0) return { initial: null, turns: [...e] };
  const l = t[s], o = {
    ...n,
    groups: [
      {
        ...n.groups[0],
        cells: t.filter((c, h) => h !== s)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const fe = {
  root: "at-tl-root",
  plot: "at-tl-plot",
  labels: "at-tl-labels",
  track: "at-tl-track",
  earlierHistory: "at-tl-earlier-history",
  empty: "at-tl-empty",
  lanes: "at-tl-lanes",
  turnBoundaries: "at-tl-turn-boundaries",
  turnBoundary: "at-tl-turn-boundary",
  span: "at-tl-span",
  selection: "at-tl-selection",
  selectionEdges: "at-tl-selection-edges",
  hoverLine: "at-tl-hover-line"
}, cn = "agent-trace-timeline-styles", Gl = `
.at-tl-root {
  --at-border-l1: rgba(128, 128, 128, 0.18);
  --at-border-l2: rgba(128, 128, 128, 0.28);
  --at-bg-l1: rgba(255, 255, 255, 0.92);
  --at-bg-l2: rgba(0, 0, 0, 0.025);
  --at-label-caption: rgba(128, 128, 128, 0.95);
  --at-label-secondary: rgba(128, 128, 128, 1);
  --at-primary: #1677ff;
  --at-success: #52c41a;
  --at-warn: #faad14;
  --at-error: #ff4d4f;
  --at-decode: color-mix(in srgb, #722ed1 60%, #ff4d4f);
  --at-ttft: color-mix(in srgb, var(--at-decode) 54%, var(--at-bg-l2));

  position: relative;
  z-index: 1;
  isolation: isolate;
  flex: none;
  border-bottom: 1px solid var(--at-border-l2);
  user-select: none;
  font-size: 12px;
}

@media (prefers-color-scheme: dark) {
  .at-tl-root {
    --at-border-l1: rgba(200, 200, 200, 0.16);
    --at-border-l2: rgba(200, 200, 200, 0.24);
    --at-bg-l1: rgba(20, 20, 20, 0.92);
    --at-bg-l2: rgba(255, 255, 255, 0.045);
    --at-label-caption: rgba(180, 180, 180, 0.9);
    --at-label-secondary: rgba(190, 190, 190, 1);
    --at-primary: #3c89e8;
  }
}

/* Host-driven dark mode (Console theme toggle) — overrides the OS
   media query when the plugin host reports its own theme. */
.at-tl-root[data-theme="dark"] {
  --at-border-l1: rgba(200, 200, 200, 0.16);
  --at-border-l2: rgba(200, 200, 200, 0.24);
  --at-bg-l1: rgba(20, 20, 20, 0.92);
  --at-bg-l2: rgba(255, 255, 255, 0.045);
  --at-label-caption: rgba(180, 180, 180, 0.9);
  --at-label-secondary: rgba(190, 190, 190, 1);
  --at-primary: #3c89e8;
}

/* Ledger row hover affordance */
.at-ledger-row:hover {
  background: rgba(22, 119, 255, 0.05);
}

.at-tl-plot {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  height: 50px;
  overflow: hidden;
  background: var(--at-bg-l2);
}

.at-tl-labels {
  position: relative;
  border-right: 1px solid var(--at-border-l1);
  color: var(--at-label-caption);
  font-size: 10px;
  line-height: 1;
}

.at-tl-labels span {
  position: absolute;
  right: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 8px;
  text-align: right;
}

.at-tl-labels span:nth-child(1) { top: 7px; }
.at-tl-labels span:nth-child(2) { top: 21px; }
.at-tl-labels span:nth-child(3) { top: 35px; }

.at-tl-track {
  position: relative;
  overflow: hidden;
  cursor: crosshair;
  touch-action: none;
}

.at-tl-track[data-panning='true'] {
  cursor: grabbing;
}

.at-tl-track:focus-visible {
  outline: 1px solid var(--at-primary);
  outline-offset: -1px;
}

.at-tl-earlier-history {
  position: absolute;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  width: 28px;
  align-items: center;
  justify-content: flex-start;
  appearance: none;
  box-sizing: border-box;
  padding-left: 3px;
  border: 0;
  outline: none;
  background: linear-gradient(
    to right,
    var(--at-bg-l2) 0,
    var(--at-bg-l2) 38%,
    transparent 100%
  );
  color: var(--at-label-secondary);
  font-size: 13px;
  line-height: 1;
  opacity: 0.72;
  cursor: pointer;
}

.at-tl-earlier-history:hover { opacity: 1; }
.at-tl-earlier-history[aria-disabled='true'] { cursor: default; }
.at-tl-earlier-history:focus-visible {
  box-shadow: inset 0 0 0 1px var(--at-border-l2);
}

.at-tl-empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--at-label-caption);
  font-size: 12px;
}

.at-tl-lanes {
  position: absolute;
  z-index: 2;
  top: 7px;
  bottom: 7px;
  left: var(--trajectory-domain-left);
  width: var(--trajectory-domain-width);
}

.at-tl-turn-boundaries {
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: var(--trajectory-domain-left);
  width: var(--trajectory-domain-width);
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .at-tl-lanes[data-animate-viewport='true'],
  .at-tl-turn-boundaries[data-animate-viewport='true'] {
    transition: left 180ms ease-out;
  }
}

.at-tl-turn-boundary {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--trajectory-turn-left);
  width: 1px;
  background: var(--at-border-l2);
}

.at-tl-span {
  position: absolute;
  top: calc(var(--trajectory-span-lane) * 14px);
  left: calc(var(--trajectory-span-left) + var(--trajectory-span-gap));
  width: max(
    2px,
    calc(
      var(--trajectory-span-width)
      - var(--trajectory-span-gap)
      - var(--trajectory-span-gap)
    )
  );
  height: 8px;
  min-width: 2px;
  border-radius: 1px;
  background: var(--at-label-secondary);
  opacity: 0.78;
}

.at-tl-span[data-timeline-span='user'] {
  background: var(--at-primary);
}

.at-tl-span[data-timeline-span='system'] {
  background: var(--at-success);
}

.at-tl-span[data-timeline-span='message'] {
  --trajectory-assistant-decoding-color: var(--at-decode);
  --trajectory-assistant-ttft-color: var(--at-ttft);
  background: var(--trajectory-assistant-decoding-color);
  opacity: 1;
}

.at-tl-span[data-timeline-span='message'][data-assistant-timing='true'] {
  background: linear-gradient(
    to right,
    var(--trajectory-assistant-ttft-color) 0,
    var(--trajectory-assistant-ttft-color) var(--trajectory-assistant-ttft),
    var(--trajectory-assistant-decoding-color) var(--trajectory-assistant-ttft),
    var(--trajectory-assistant-decoding-color) 100%
  );
}

.at-tl-span[data-timeline-span='tool'] {
  background: var(--at-warn);
  opacity: 1;
}

.at-tl-span[data-error='true'] {
  background: var(--at-error);
}

.at-tl-span[data-equal-duration='true'] {
  width: 8px;
  min-width: 8px;
}

.at-tl-span[data-selected='false'] {
  opacity: 0.2;
}

.at-tl-span[data-hovered='true']:not([data-current='true']) {
  z-index: 1;
  opacity: 1;
  box-shadow:
    0 0 0 1px var(--at-bg-l2),
    0 0 0 2px color-mix(in srgb, var(--at-primary) 80%, transparent);
}

.at-tl-span[data-current='true'] {
  z-index: 1;
  opacity: 1;
  box-shadow:
    0 0 0 1px var(--at-bg-l2),
    0 0 0 2px var(--at-primary);
}

.at-tl-span[data-search-match='false'] {
  opacity: 0.14;
}

.at-tl-selection {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: var(--trajectory-selection-left);
  width: var(--trajectory-selection-width);
  min-width: 1px;
  background: color-mix(in srgb, var(--at-primary) 12%, transparent);
  box-shadow:
    -100vw 0 0 100vw color-mix(in srgb, var(--at-bg-l1) 58%, transparent),
    100vw 0 0 100vw color-mix(in srgb, var(--at-bg-l1) 58%, transparent);
  pointer-events: none;
}

.at-tl-selection-edges {
  position: absolute;
  z-index: 4;
  top: 0;
  bottom: 0;
  left: var(--trajectory-selection-left);
  width: var(--trajectory-selection-width);
  min-width: 1px;
  pointer-events: none;
}

.at-tl-selection-edges::before,
.at-tl-selection-edges::after {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--at-primary);
  content: '';
}

.at-tl-selection-edges::before { left: 0; }
.at-tl-selection-edges::after { right: 0; }

.at-tl-selection-edges[data-dragging='true']::before,
.at-tl-selection-edges[data-dragging='true']::after {
  width: 2px;
}

.at-tl-selection[data-dragging='true'] {
  background: color-mix(in srgb, var(--at-primary) 18%, transparent);
}

.at-tl-hover-line {
  position: absolute;
  z-index: 4;
  top: 0;
  bottom: 0;
  left: clamp(
    0px,
    calc(var(--trajectory-hover-left) - 1px),
    calc(100% - 2px)
  );
  width: 2px;
  background: var(--at-primary);
  pointer-events: none;
}
`;
let kt = !1;
function Xl() {
  if (kt || typeof document > "u") return;
  if (document.getElementById(cn)) {
    kt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = cn, e.textContent = Gl, document.head.appendChild(e), kt = !0;
}
function wt(e) {
  return Is(e);
}
function Un(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function un(e) {
  return e != null && Number.isFinite(e);
}
function Wn(e) {
  if (!un(e.startedAt)) return null;
  const n = un(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + n };
}
function Kn(e, n = "sequence") {
  if (n !== "sequence")
    return ql(
      e,
      n === "duration" || n === "actual",
      n === "duration"
    );
  const t = [], s = [];
  for (const l of e) {
    const o = l.groups.flatMap((r) => r.cells);
    o.length !== 0 && (l.turn !== null && s.push({
      turn: l.turn,
      time: t.length
    }), t.push(
      ...o.map(
        (r, c) => ({
          start: t.length + c,
          end: t.length + c + 1,
          index: r.index,
          isError: r.isError === !0,
          kind: r.kind,
          label: r.text,
          lane: Un(r.kind)
        })
      )
    ));
  }
  return t.length === 0 ? null : {
    start: 0,
    end: t.length,
    spans: t,
    turnBoundaries: s
  };
}
function ql(e, n, t) {
  const s = e.flatMap((i) => {
    const p = i.groups.flatMap(
      (y) => y.cells.flatMap((u) => {
        const S = Wn(u);
        return S === null ? [] : [
          {
            ...S,
            index: u.index,
            isError: u.isError === !0,
            kind: u.kind,
            label: u.text,
            lane: Un(u.kind)
          }
        ];
      })
    );
    return p.length === 0 ? [] : [{ turn: i.turn, rawSpans: p }];
  }), l = s.flatMap((i) => i.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let r = 0, c = null;
  for (const i of [...l].sort(
    (p, y) => p.start - y.start || p.end - y.end
  ))
    t && c !== null && i.start > c && (r += i.start - c), o.set(i, r), c = c === null ? i.end : Math.max(c, i.end);
  const h = [], g = [];
  for (const i of s) {
    const p = i.rawSpans.map((y) => {
      const u = o.get(y) ?? 0;
      return {
        ...y,
        start: y.start - u,
        end: (n ? y.end : y.start) - u
      };
    });
    h.push(...p), i.turn !== null && g.push({
      turn: i.turn,
      time: Math.min(...p.map((y) => y.start))
    });
  }
  return {
    start: Math.min(...h.map((i) => i.start)),
    end: Math.max(...h.map((i) => i.end)),
    spans: h,
    turnBoundaries: g
  };
}
function Jl(e, n = "sequence") {
  const t = (c) => c.skillSpans ?? [];
  if (e.every((c) => t(c).length === 0)) return null;
  if (n === "sequence") {
    const c = /* @__PURE__ */ new Map();
    let h = 0;
    for (const i of e)
      for (const p of i.groups.flatMap((y) => y.cells))
        c.set(p.index, h), h += 1;
    const g = [];
    for (const i of e)
      for (const p of t(i)) {
        const y = p.attributedIndexes.map((T) => c.get(T)).filter((T) => T !== void 0);
        let u = y.length ? Math.min(...y) : void 0;
        if (u === void 0) {
          const T = i.groups.flatMap((A) => A.cells).find(
            (A) => A.kind !== "system" && A.skillName === p.skill
          );
          u = T ? c.get(T.index) : void 0;
        }
        if (u === void 0) continue;
        const S = y.length ? Math.max(...y) : u;
        g.push(dn(p, u, S + 1));
      }
    return g;
  }
  const s = e.flatMap(
    (c) => c.groups.flatMap(
      (h) => h.cells.flatMap((g) => {
        const i = Wn(g);
        return i === null ? [] : [i];
      })
    )
  );
  s.sort((c, h) => c.start - h.start || c.end - h.end);
  const l = n === "duration", o = (c) => {
    let h = 0, g = null;
    for (const i of s) {
      if (i.start >= c) break;
      if (l && g !== null && i.start > g) {
        const p = Math.min(i.start, c);
        p > g && (h += p - g);
      }
      g = g === null ? i.end : Math.max(g, i.end);
    }
    return h;
  }, r = [];
  for (const c of e)
    for (const h of t(c)) {
      const g = h.startT, i = Math.max(Ss(h), g + 1), p = o(g), y = o(i);
      r.push(
        dn(
          h,
          g - p,
          Math.max(g - p + 1, i - y)
        )
      );
    }
  return r;
}
function dn(e, n, t) {
  return {
    spanId: e.id,
    skill: e.skill,
    hue: e.colorHue,
    bypass: e.bypass,
    trigger: e.trigger,
    open: e.endKind === null,
    start: n,
    end: t
  };
}
function Ql(e, n, t = "sequence") {
  const s = Kn(e, t);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= n.end && l.end >= n.start).map((l) => l.index)
  );
}
Xl();
const ot = window.QwenPaw.host, K = ot.React, { useEffect: Je, useMemo: Tt, useRef: Qe, useState: $e } = K, { Tooltip: Vn } = ot.antd, _t = 3, Yl = 4, Zl = 0.08, eo = 0.025, to = 32, no = 0.5;
function so(e) {
  const n = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, o = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...n === void 0 ? {} : { durationMs: n },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function lo(e) {
  switch (e) {
    case "system":
      return "SYSTEM";
    case "user":
      return "USER";
    case "message":
      return "ASSISTANT";
    case "tool":
      return "TOOL";
  }
}
function oo(e, n) {
  const t = lo(e);
  if (n === void 0) return t;
  const s = n.durationMs === void 0 ? null : `Total ${wt(n.durationMs)}`, l = n.startedAt === void 0 ? null : n.durationMs === void 0 ? `Started ${Ce(n.startedAt)}` : `${Ce(n.startedAt)} → ${Ce(
    n.startedAt + n.durationMs
  )}`, o = n.ttftMs === void 0 || n.decodingMs === void 0 ? null : `TTFT ${wt(
    n.ttftMs
  )} · Decoding ${wt(n.decodingMs)}`, r = [s, o].filter((c) => c !== null).join(" · ");
  return [t, l, r].filter((c) => c !== null && c !== "").join(`
`);
}
function Ot(e, n) {
  return e <= n ? { start: e, end: n } : { start: n, end: e };
}
function It(e) {
  return Math.min(1, Math.max(0, e));
}
function io(e, n, t, s) {
  const l = Math.min(s - t, Math.max(0, n)), o = Math.min(
    Math.max(e - l / 2, t),
    s - l
  );
  return { start: o, end: o + l };
}
function hn(e, n, t, s, l) {
  const o = Ot(
    Math.min(l, Math.max(s, e.start)),
    Math.min(l, Math.max(s, e.end))
  );
  return {
    start: (o.start - n) / t,
    end: (o.end - n) / t
  };
}
function Gn({
  label: e,
  placement: n,
  children: t,
  ...s
}) {
  return /* @__PURE__ */ K.createElement(
    Vn,
    {
      title: /* @__PURE__ */ K.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: no,
      ...s
    },
    t
  );
}
function pn() {
  return /* @__PURE__ */ K.createElement("div", { className: fe.labels, "aria-hidden": "true" }, /* @__PURE__ */ K.createElement("span", null, "Input"), /* @__PURE__ */ K.createElement("span", null, "Model"), /* @__PURE__ */ K.createElement("span", null, "Tools"));
}
function fn({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ K.createElement(
    Gn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ K.createElement(
      "button",
      {
        type: "button",
        className: fe.earlierHistory,
        "data-earlier-history": !0,
        "data-loading": e || void 0,
        "aria-label": e ? "Loading earlier history" : "Load earlier history",
        "aria-disabled": e || t === void 0,
        onClick: t,
        onPointerEnter: (s) => {
          s.stopPropagation(), n();
        },
        onPointerMove: (s) => {
          s.stopPropagation();
        },
        onPointerDown: (s) => {
          s.stopPropagation();
        }
      },
      "…"
    )
  );
}
const ro = K.memo(function({
  turns: n,
  mode: t,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: r = null,
  searchMatchIndexes: c = null,
  onRangeChange: h,
  onRecordSelect: g,
  onRecordFocus: i,
  onSkillSpanSelect: p
}) {
  const y = typeof ot.useTheme == "function" ? ot.useTheme() : void 0, u = Tt(
    () => Kn(n, t),
    [t, n]
  ), S = Tt(
    () => Jl(n, t),
    [t, n]
  ), T = Tt(
    () => new Map(
      n.flatMap(
        (d) => d.groups.flatMap(
          (x) => x.cells.map(
            (_) => [_.index, so(_)]
          )
        )
      )
    ),
    [n]
  ), A = Qe(null), k = Qe(null), w = Qe(null), H = Qe(null), [R, F] = $e(null), [Y, z] = $e(null), [$, ee] = $e(null), [W, ne] = $e(!1), [ue, oe] = $e(!1), [le, m] = $e(null), [v, E] = $e(!1);
  Je(() => {
    u !== null && s !== null && (s.end < u.start || s.start > u.end) && h(null);
  }, [u, h, s]), Je(() => {
    u !== null && (E(!1), m(
      (d) => d !== null && (d.end < u.start || d.start > u.end) ? null : d
    ));
  }, [u]), Je(() => {
    if (u === null || r === null) return;
    const d = u.spans.find(
      (x) => x.index === r
    );
    d !== void 0 && (E(!0), m((x) => {
      if (x === null || d.end > x.start && d.start < x.end)
        return x;
      const _ = Math.max(1, x.end - x.start), U = d.end <= x.start ? d.start : d.end - _, X = Math.min(
        Math.max(U, u.start),
        Math.max(u.start, u.end - _)
      );
      return X === x.start ? x : { start: X, end: X + _ };
    }));
  }, [u, r]);
  const b = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), C = Math.min(
    b,
    Math.max(1, ((le == null ? void 0 : le.end) ?? 0) - ((le == null ? void 0 : le.start) ?? 0))
  ), j = u === null || le === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(le.start, u.start),
    u.end - C
  ), O = le === null ? b : C, N = le === null ? (u == null ? void 0 : u.start) ?? 0 : j, G = l && u !== null && N === u.start, D = o === void 0 || W ? void 0 : () => {
    ne(!0), o().finally(() => {
      ne(!1);
    });
  }, J = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(N - u.start) / O * 100}%`,
    "--trajectory-domain-width": `${b / O * 100}%`
  }, re = u === null || s === null ? null : hn(
    s,
    N,
    O,
    u.start,
    u.end
  ), Se = (u === null || R === null ? null : hn(
    R,
    N,
    O,
    u.start,
    u.end
  )) ?? re, ae = R ?? s;
  if (Je(() => {
    const d = w.current;
    if (d === null) return;
    const x = (_) => {
      _.preventDefault();
      const U = H.current;
      if (U === null || u === null) return;
      E(!1);
      const X = U.getBoundingClientRect(), Q = It(
        (_.clientX - X.left) / Math.max(1, X.width)
      ), q = Math.min(
        b,
        Math.max(
          Math.min(
            t === "sequence" ? Yl : 20,
            b
          ),
          O * Math.exp(_.deltaY * 15e-4)
        )
      );
      if (q >= b * 0.999) {
        m(null);
        return;
      }
      const se = N + Q * O, he = Math.min(
        Math.max(se - Q * q, u.start),
        u.end - q
      );
      m({ start: he, end: he + q });
    };
    return d.addEventListener("wheel", x, { passive: !1 }), () => {
      d.removeEventListener("wheel", x);
    };
  }, [O, N, b, t, u]), u === null)
    return /* @__PURE__ */ K.createElement(
      "section",
      {
        ref: w,
        className: fe.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ K.createElement("div", { className: fe.plot }, /* @__PURE__ */ K.createElement(pn, null), /* @__PURE__ */ K.createElement("div", { className: fe.track }, /* @__PURE__ */ K.createElement("span", { className: fe.empty }, "No timing data"), l && /* @__PURE__ */ K.createElement(
        fn,
        {
          loading: W,
          onHover: () => {
            z(null);
          },
          onLoad: D
        }
      )))
    );
  const Ee = Math.min(
    O,
    b / u.spans.length
  ), Te = (d) => {
    const x = d.currentTarget.getBoundingClientRect();
    return It((d.clientX - x.left) / Math.max(1, x.width));
  }, Re = (d) => {
    var X;
    const x = d.target instanceof HTMLElement ? d.target : null, _ = (X = x == null ? void 0 : x.closest("[data-timeline-record-index]")) == null ? void 0 : X.dataset.timelineRecordIndex;
    if (_ === void 0) return null;
    const U = Number(_);
    return Number.isFinite(U) ? U : null;
  }, ct = (d) => {
    h(d);
  }, ut = (d) => {
    if (d.button === 2) {
      k.current = {
        anchorClientX: d.clientX,
        anchorStart: N,
        moved: !1,
        pannable: le !== null,
        pointerId: d.pointerId
      }, le !== null && E(!1), oe(!0), typeof d.currentTarget.setPointerCapture == "function" && d.currentTarget.setPointerCapture(d.pointerId);
      return;
    }
    if (d.button !== 0) return;
    const x = Te(d), _ = N + x * O, U = Re(d);
    z({ fraction: x, recordIndex: U }), A.current = {
      pointerId: d.pointerId,
      anchorTime: _,
      anchorClientX: d.clientX,
      recordIndex: U
    }, typeof d.currentTarget.setPointerCapture == "function" && d.currentTarget.setPointerCapture(d.pointerId), F({ start: _, end: _ });
  }, dt = (d) => {
    const x = d.currentTarget.getBoundingClientRect(), _ = Te(d);
    z({ fraction: _, recordIndex: Re(d) });
    const U = k.current;
    if (U !== null && U.pointerId === d.pointerId) {
      if (Math.abs(d.clientX - U.anchorClientX) >= _t && (U.moved = !0), !U.pannable) return;
      const se = (d.clientX - U.anchorClientX) / Math.max(1, x.width), he = Math.min(
        Math.max(U.anchorStart - se * O, u.start),
        u.end - O
      );
      m({ start: he, end: he + O });
      return;
    }
    const X = A.current;
    if (X === null || X.pointerId !== d.pointerId) return;
    let Q = N;
    if (le !== null) {
      const se = d.clientX - x.left, he = Math.min(
        to,
        Math.max(1, x.width * Zl)
      ), ce = se < he ? -1 : se > x.width - he ? 1 : 0;
      if (ce !== 0) {
        const Le = ce < 0 ? he - se : se - (x.width - he), xe = It(Le / he), ke = N + ce * O * eo * Math.max(0.2, xe);
        Q = Math.min(
          Math.max(ke, u.start),
          u.end - O
        ), Q !== N && (E(!1), m({
          start: Q,
          end: Q + O
        }));
      }
    }
    const q = Q + _ * O;
    F(Ot(X.anchorTime, q));
  }, Ve = (d) => {
    const x = k.current;
    if (x !== null && x.pointerId === d.pointerId) {
      const ce = x.moved || Math.abs(d.clientX - x.anchorClientX) >= _t;
      k.current = null, oe(!1), ce || h(null);
      return;
    }
    const _ = A.current;
    if (_ === null || _.pointerId !== d.pointerId) return;
    const U = Te(d), X = N + U * O, Q = Ot(_.anchorTime, X);
    z({ fraction: U, recordIndex: Re(d) }), A.current = null, F(null);
    const q = Math.abs(d.clientX - _.anchorClientX) < _t, se = q && _.recordIndex !== null ? u.spans.find((ce) => ce.index === _.recordIndex) : void 0;
    if (se !== void 0) {
      h(null), g == null || g(se.index);
      return;
    }
    const he = Q.end - Q.start < Ee ? io(
      q ? Q.start : (Q.start + Q.end) / 2,
      Ee,
      u.start,
      u.end
    ) : Q;
    if (ct(he), q) {
      const ce = Q.start, Le = u.spans.reduce((xe, ke) => {
        const Xe = ce < xe.start ? xe.start - ce : ce > xe.end ? ce - xe.end : 0;
        return (ce < ke.start ? ke.start - ce : ce > ke.end ? ce - ke.end : 0) < Xe ? ke : xe;
      });
      i == null || i(Le.index);
    }
  }, Ge = (d) => {
    d.key !== "Escape" || s === null || (d.preventDefault(), h(null));
  }, ht = () => {
    A.current = null, k.current = null, F(null), z(null), oe(!1);
  };
  return /* @__PURE__ */ K.createElement(
    "section",
    {
      ref: w,
      className: fe.root,
      "data-theme": y || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ K.createElement("div", { className: fe.plot }, /* @__PURE__ */ K.createElement(pn, null), /* @__PURE__ */ K.createElement(
      "div",
      {
        ref: H,
        className: fe.track,
        "data-panning": ue || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: Ge,
        onPointerDown: ut,
        onPointerMove: dt,
        onPointerUp: Ve,
        onPointerCancel: ht,
        onPointerLeave: () => {
          A.current === null && k.current === null && z(null);
        },
        onDoubleClick: (d) => {
          d.preventDefault(), h(null);
        },
        onContextMenu: (d) => {
          d.preventDefault();
        }
      },
      G && /* @__PURE__ */ K.createElement(
        fn,
        {
          loading: W,
          onHover: () => {
            z(null);
          },
          onLoad: D
        }
      ),
      Y !== null && Y.recordIndex === null && R === null && /* @__PURE__ */ K.createElement(
        "div",
        {
          className: fe.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${Y.fraction * 100}%`
          }
        }
      ),
      Se !== null && /* @__PURE__ */ K.createElement(K.Fragment, null, /* @__PURE__ */ K.createElement(
        "div",
        {
          className: fe.selection,
          "data-dragging": R === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${Se.start * 100}%`,
            "--trajectory-selection-width": `${(Se.end - Se.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ K.createElement(
        "div",
        {
          className: fe.selectionEdges,
          "data-dragging": R === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${Se.start * 100}%`,
            "--trajectory-selection-width": `${(Se.end - Se.start) * 100}%`
          }
        }
      )),
      S !== null && u !== null && /* @__PURE__ */ K.createElement(
        "div",
        {
          "aria-label": "Skill bands",
          style: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 2,
            height: 10,
            pointerEvents: "none",
            zIndex: 3
          }
        },
        S.map((d) => {
          const x = (d.start - u.start) / b, _ = Math.max(
            (d.end - d.start) / b,
            4e-3
          ), U = ie(), X = `${d.bypass ? "⚠ " : ""}${d.skill} · ${d.trigger}${d.open ? ` · ${f(U, "spanOpen")}` : ""}`, Q = $ === d.spanId, q = _ > 0.14 && !d.bypass;
          return /* @__PURE__ */ K.createElement(Vn, { title: X, key: d.spanId }, /* @__PURE__ */ K.createElement(
            "span",
            {
              onPointerDown: (se) => {
                se.stopPropagation();
              },
              onClick: p ? (se) => {
                se.stopPropagation(), p(d.spanId);
              } : void 0,
              onMouseEnter: () => ee(d.spanId),
              onMouseLeave: () => ee(
                (se) => se === d.spanId ? null : se
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, x) * 100}%`,
                width: `${_ * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${d.hue}, 65%, ${Q ? 62 : 55}%, ${Q ? 0.85 : 0.55})`,
                border: d.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${d.hue}, 55%, 45%, 0.8)`,
                pointerEvents: p ? "auto" : "none",
                cursor: p ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            q ? /* @__PURE__ */ K.createElement(
              "span",
              {
                style: {
                  fontSize: 9,
                  lineHeight: "10px",
                  color: "rgba(255,255,255,0.92)",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  textShadow: "0 0 2px rgba(0,0,0,0.4)"
                }
              },
              d.skill
            ) : null
          ));
        })
      ),
      /* @__PURE__ */ K.createElement(
        "div",
        {
          className: fe.turnBoundaries,
          "data-animate-viewport": v || void 0,
          "aria-hidden": "true",
          style: J
        },
        u.turnBoundaries.filter(
          (d) => d.time > u.start && d.time >= N && d.time <= N + O
        ).map((d) => /* @__PURE__ */ K.createElement(
          "span",
          {
            className: fe.turnBoundary,
            "data-turn": d.turn,
            key: d.turn,
            style: {
              "--trajectory-turn-left": `${(d.time - u.start) / b * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ K.createElement(
        "div",
        {
          className: fe.lanes,
          "data-animate-viewport": v || void 0,
          "data-timeline-domain": !0,
          style: J
        },
        u.spans.filter(
          (d) => d.index === r || d.end >= N && d.start <= N + O
        ).map((d) => {
          const x = (d.start - u.start) / b, U = (d.end - d.start) / b * 100, X = T.get(d.index), Q = X == null ? void 0 : X.ttftMs, q = X == null ? void 0 : X.decodingMs, se = Q === void 0 || q === void 0 || Q + q <= 0 ? null : Q / (Q + q);
          return /* @__PURE__ */ K.createElement(
            Gn,
            {
              key: d.index,
              label: oo(d.kind, X),
              placement: "bottom"
            },
            /* @__PURE__ */ K.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: fe.span,
                "data-timeline-span": d.kind,
                "data-timeline-record-index": d.index,
                "data-assistant-timing": se === null ? void 0 : "true",
                "data-error": d.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": d.index === r || void 0,
                "data-hovered": (Y == null ? void 0 : Y.recordIndex) === d.index || void 0,
                "data-search-match": c === null ? void 0 : c.has(d.index) ? "true" : "false",
                "data-selected": ae === null ? void 0 : d.start <= ae.end && d.end >= ae.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${x * 100}%`,
                  "--trajectory-span-width": `${U}%`,
                  "--trajectory-span-gap": `min(${U * 0.08}%, 1px)`,
                  "--trajectory-span-lane": d.lane,
                  ...se === null ? {} : {
                    "--trajectory-assistant-ttft": `${se * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), Nt = window.QwenPaw.host, te = Nt.React, { Button: ao, Input: co, Popover: uo, Segmented: ho, Tooltip: mn } = Nt.antd, {
  MenuFoldOutlined: po,
  MenuUnfoldOutlined: fo,
  QuestionCircleOutlined: mo,
  ReloadOutlined: go,
  SearchOutlined: yo
} = Nt.antdIcons;
function vo({
  mode: e,
  onModeChange: n,
  search: t,
  onSearchChange: s,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: r,
  hasRequests: c,
  onToggleCollapseAll: h,
  callsCollapsed: g,
  onToggleCallsCollapsed: i
}) {
  const p = ie();
  return /* @__PURE__ */ te.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "6px 12px",
        borderBottom: "1px solid rgba(128,128,128,0.15)",
        flexWrap: "wrap"
      }
    },
    /* @__PURE__ */ te.createElement(mn, { title: f(p, "projectionHint") }, /* @__PURE__ */ te.createElement(
      ho,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (y) => n(y)
      }
    )),
    /* @__PURE__ */ te.createElement(
      co,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ te.createElement(yo, null),
        placeholder: f(p, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (y) => s(y.target.value)
      }
    ),
    c && /* @__PURE__ */ te.createElement(
      mn,
      {
        title: r ? f(p, "expandAll") : f(p, "collapseAll")
      },
      /* @__PURE__ */ te.createElement(
        ao,
        {
          size: "small",
          type: "text",
          icon: r ? /* @__PURE__ */ te.createElement(fo, null) : /* @__PURE__ */ te.createElement(po, null),
          onClick: h
        }
      )
    ),
    /* @__PURE__ */ te.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ te.createElement(
      uo,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ te.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ te.createElement("div", null, /* @__PURE__ */ te.createElement("strong", null, "📚"), " ", f(p, "legendLoad")), /* @__PURE__ */ te.createElement("div", null, /* @__PURE__ */ te.createElement("strong", null, "⚡"), " ", f(p, "legendResource")), /* @__PURE__ */ te.createElement("div", null, /* @__PURE__ */ te.createElement("strong", null, "∈"), " ", f(p, "legendGuided")), /* @__PURE__ */ te.createElement("div", null, /* @__PURE__ */ te.createElement("strong", null, f(p, "legendStripTitle")), " ", f(p, "legendStrip")), /* @__PURE__ */ te.createElement("div", null, /* @__PURE__ */ te.createElement("strong", null, f(p, "legendBandTitle")), " ", f(p, "legendBand")))
      },
      /* @__PURE__ */ te.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ te.createElement(mo, null), " ", f(p, "legendTitle"))
    ), /* @__PURE__ */ te.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ te.createElement(go, null),
      " ",
      f(p, "refresh")
    ))
  );
}
const at = window.QwenPaw.host, L = at.React, { useCallback: gn, useEffect: Ye, useMemo: we, useRef: So, useState: me } = L, {
  Button: Ze,
  Empty: yn,
  Popconfirm: Eo,
  Popover: xo,
  Space: bo,
  Spin: Xn,
  Switch: ko,
  Tag: wo,
  Tooltip: To,
  message: We
} = at.antd, { DeleteOutlined: _o, DownloadOutlined: Io, SettingOutlined: vn } = at.antdIcons, { Text: Me } = at.antd.Typography;
function Sn({
  config: e,
  onChange: n,
  children: t
}) {
  const s = ie(), l = (r, c, h) => /* @__PURE__ */ L.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        padding: "4px 0"
      }
    },
    /* @__PURE__ */ L.createElement(Me, { style: { fontSize: 13 } }, r),
    /* @__PURE__ */ L.createElement(
      ko,
      {
        size: "small",
        checked: !!c,
        onChange: (g) => n({ [h]: g })
      }
    )
  ), o = /* @__PURE__ */ L.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ L.createElement(Me, { strong: !0, style: { fontSize: 13 } }, f(s, "settings")), /* @__PURE__ */ L.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(f(s, "enabled"), e.enabled, "enabled"),
    l(f(s, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      f(s, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      f(s, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ L.createElement(Xn, { size: "small" })));
  return /* @__PURE__ */ L.createElement(xo, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function Mo({
  sessionId: e,
  summary: n,
  locale: t,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  const [o, r] = me(null), [c, h] = me(!1), [g, i] = me(!1), [p, y] = me(""), [u, S] = me("sequence"), [T, A] = me(null), [k, w] = me(null), [H, R] = me(null), [F, Y] = me(null), [z, $] = me(
    /* @__PURE__ */ new Set()
  ), [ee, W] = me(!1), [ne, ue] = me(null), [oe, le] = me(null), [m, v] = me(null), [E, b] = me(null), C = So(null);
  C.current = e, Ye(() => {
    ls().then(ue).catch(() => ue(null));
  }, []);
  const j = gn(async (d, x) => {
    x || h(!0);
    try {
      const _ = await ss(d, {
        beforeSeq: x,
        limit: 200
      });
      b(null), r((U) => x && U ? {
        ..._,
        events: [..._.events, ...U.events]
      } : _);
    } catch (_) {
      b({
        message: String(_.message),
        status: _ instanceof zn ? _.status : null
      });
    } finally {
      x || h(!1);
    }
  }, []), O = gn(async (d) => {
    try {
      const x = await ns(d);
      v(x), le({
        sessionId: d,
        inputTokens: x.input_tokens,
        outputTokens: x.output_tokens,
        totalTokens: x.total_tokens,
        reasoningTokens: Number(x.reasoning_tokens ?? 0)
      });
    } catch {
      v(null), le(null);
    }
  }, []);
  Ye(() => {
    e ? (A(null), w(null), R(null), $(/* @__PURE__ */ new Set()), y(""), j(e), O(e)) : (r(null), v(null), le(null));
  }, [e, j, O]);
  const N = we(
    () => o ? Kl(o.events) : [],
    [o]
  ), { initial: G, turns: D } = we(
    () => Vl(N),
    [N]
  ), J = we(
    () => G ? [G, ...an(D)] : an(D),
    [G, D]
  ), re = we(
    () => D.some((d) => d.status === "running"),
    [D]
  );
  Ye(() => {
    if (!e || !re) return;
    const d = setInterval(() => {
      document.visibilityState === "visible" && C.current && j(C.current);
    }, 5e3);
    return () => clearInterval(d);
  }, [e, re, j]);
  const ge = we(
    () => T === null ? null : Ql(D, T, u),
    [T, D, u]
  ), Se = we(() => {
    const d = p.trim().toLowerCase();
    return d ? new Set(
      J.filter(
        (x) => [
          x.text,
          x.outputText,
          x.thinkingText,
          x.toolName,
          x.toolInput,
          x.toolOutput,
          x.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(d)
      ).map((x) => x.index)
    ) : null;
  }, [p, J]), ae = we(
    () => k === null ? null : J.find((d) => d.index === k) ?? null,
    [J, k]
  ), Ee = we(() => {
    var Bt, Ft;
    if (H === null) return null;
    const d = D.find((P) => P.turn === H);
    if (!d) return null;
    const x = ((Bt = d.groups[0]) == null ? void 0 : Bt.cells) ?? [], _ = x.filter((P) => P.kind === "message"), U = x.filter((P) => P.kind === "tool"), X = [
      ...new Set(
        _.map((P) => P.model).filter((P) => !!P)
      )
    ], Q = [
      ...new Set(
        _.map((P) => P.provider).filter((P) => !!P)
      )
    ];
    let q = 0, se = 0, he = 0, ce = 0, Le = 0, xe = null, ke = 0;
    const Xe = [];
    for (const P of x)
      P.usage && (q += P.usage.input_tokens ?? 0, se += P.usage.output_tokens ?? 0, he += P.usage.cache_input_tokens ?? 0, ce += P.usage.cache_creation_input_tokens ?? 0, Le += P.usage.reasoning_tokens ?? 0), P.timing && (xe = xe === null ? P.timing.ttft_ms : Math.min(xe, P.timing.ttft_ms), ke = (ke ?? 0) + P.timing.decode_ms), P.isError && Xe.push(P.toolError ?? P.text ?? "error");
    const ze = x.find((P) => P.kind === "user"), qn = (Ft = [..._].reverse().find((P) => P.options)) == null ? void 0 : Ft.options, pt = [..._].reverse().find((P) => P.outputText);
    let Dt;
    const jt = _.filter((P) => P.messagesMeta);
    if (jt.length > 0) {
      const P = {};
      let Ne = 0, mt = 0;
      for (const Qn of jt) {
        const gt = Qn.messagesMeta;
        for (const [Ht, Yn] of Object.entries(gt.charsByRole))
          P[Ht] = (P[Ht] ?? 0) + Yn;
        Ne += gt.totalChars, mt = Math.max(mt, gt.maxToolChars);
      }
      Dt = { charsByRole: P, totalChars: Ne, maxToolChars: mt };
    }
    const ft = D.findIndex((P) => P.turn === H), Pt = ft > 0 ? D[ft - 1] : null;
    let Be = null;
    if (Pt) {
      Be = 0;
      for (const P of Pt.groups)
        for (const Ne of P.cells)
          Ne.kind === "message" && Ne.usage && (Be += Ne.usage.input_tokens ?? 0);
    }
    const Jn = Be === null && ft !== 0 ? void 0 : {
      prevInputTokens: Be,
      deltaTokens: q - (Be ?? 0)
    };
    return {
      turn: H,
      status: d.status,
      durationMs: d.durationMs,
      startedAt: (ze == null ? void 0 : ze.startedAt) ?? null,
      query: (ze == null ? void 0 : ze.text) ?? "",
      llmCalls: _.length,
      toolCalls: U.length,
      models: X,
      providers: Q,
      inputTokens: q,
      outputTokens: se,
      cacheReadTokens: he,
      cacheWriteTokens: ce,
      reasoningTokens: Le,
      inputComposition: Dt,
      growth: Jn,
      resultIndex: pt == null ? void 0 : pt.index,
      ttftMs: xe,
      decodeMs: ke,
      errors: Xe,
      options: qn,
      sessionTotals: oe && oe.sessionId === e ? {
        inputTokens: oe.inputTokens,
        outputTokens: oe.outputTokens,
        totalTokens: oe.totalTokens,
        reasoningTokens: oe.reasoningTokens
      } : void 0
    };
  }, [H, D, oe, e]), Te = !!(o && o.events.length > 0 && o.events[0].seq > 1), Re = async (d) => {
    try {
      ue(await os(d));
    } catch (x) {
      We.error(String(x.message));
    }
  }, ct = we(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), ut = we(() => {
    if (!m) return null;
    const d = [
      `${m.runs} ${f(t, "statRounds")} · ${m.llm_calls} ${f(t, "statSteps")}`,
      `LLM ${ve(m.llm_ms_total / 1e3)} · ${f(
        t,
        "toolCalls"
      )} ${ve(m.tool_ms_total / 1e3)}`,
      `${f(t, "statTtftAvg")} ${m.ttft_ms_avg === null ? "-" : ve(m.ttft_ms_avg / 1e3)} · ${Rt(
        m.output_tokens,
        m.decode_ms_total / 1e3
      )}`
    ];
    if (m.cache_read_tokens > 0 || m.cache_write_tokens > 0) {
      const x = m.cache_read_tokens + m.input_tokens, _ = x > 0 ? Math.round(m.cache_read_tokens / x * 100) : 0;
      d.push(`${f(t, "statCacheHit")} ${_}%`);
    }
    if (d.push(
      `${f(t, "statInput")} ${Z(
        m.input_tokens
      )} tok · ${f(t, "statOutput")} ${Z(
        m.output_tokens
      )} tok`
    ), n && d.push(Ct(n.size_bytes)), m.skills) {
      const x = Object.entries(m.skills).sort((_, U) => U[1] - _[1]).map(([_, U]) => `${_} ×${U}`).join(" · ");
      x && d.push(`📚 ${x}`);
    }
    if (G != null && G.prompt) {
      const x = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
      for (const X of D)
        for (const Q of X.groups)
          for (const q of Q.cells)
            q.skillName ? _.add(q.skillName) : q.inSkill && x.add(q.inSkill);
      const U = [...x].filter((X) => !_.has(X));
      U.length > 0 && d.push(
        `⚡ ${f(t, "skillBypassStrip")}: ${U.join(" · ")}`
      );
    }
    return d.join(" | ");
  }, [m, n, t, D, G]), dt = () => {
    w(null), R(null);
  };
  Ye(() => {
    k !== null && Y(null);
  }, [k]);
  const Ve = we(
    () => F === null ? null : D.flatMap((d) => d.skillSpans ?? []).find((d) => d.id === F) ?? null,
    [F, D]
  ), Ge = (E == null ? void 0 : E.status) === 404, ht = ae !== null || Ee !== null;
  return /* @__PURE__ */ L.createElement(
    "div",
    {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: 0
      }
    },
    /* @__PURE__ */ L.createElement(
      "div",
      {
        style: {
          padding: "8px 12px",
          borderBottom: "1px solid rgba(128,128,128,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: 4
        }
      },
      e ? /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ L.createElement(
          Me,
          {
            strong: !0,
            ellipsis: {
              tooltip: (n == null ? void 0 : n.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (n == null ? void 0 : n.title) || (n == null ? void 0 : n.agent_id) || An(e)
        ),
        /* @__PURE__ */ L.createElement(
          wo,
          {
            color: Ln[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Nn((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ L.createElement(Me, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ L.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ L.createElement(bo, null, /* @__PURE__ */ L.createElement(Sn, { config: ne, onChange: Re }, /* @__PURE__ */ L.createElement(Ze, { size: "small", icon: /* @__PURE__ */ L.createElement(vn, null) })), /* @__PURE__ */ L.createElement(To, { title: f(t, "export") }, /* @__PURE__ */ L.createElement(
          Ze,
          {
            size: "small",
            icon: /* @__PURE__ */ L.createElement(Io, null),
            onClick: () => {
              is(e).then(() => We.success(f(t, "exported"))).catch(
                (d) => We.error(String(d.message))
              );
            }
          },
          f(t, "export")
        )), /* @__PURE__ */ L.createElement(
          Eo,
          {
            title: f(t, "deleteConfirm"),
            onConfirm: () => {
              rs(e).then(() => {
                We.success(f(t, "deleted")), l == null || l();
              }).catch(
                (d) => We.error(String(d.message))
              );
            }
          },
          /* @__PURE__ */ L.createElement(Ze, { size: "small", danger: !0, icon: /* @__PURE__ */ L.createElement(_o, null) }, f(t, "delete"))
        )))
      ), /* @__PURE__ */ L.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ L.createElement(
          Me,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          ut ?? // Transient line while the stats endpoint responds.
          (n ? `${n.runs} ${f(t, "statRounds")} · ${n.llm_calls} ${f(t, "statSteps")} · ${Rn(
            n.total_tokens
          )} ${f(t, "tokens")} · ${Ct(
            n.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ L.createElement(
          Me,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                f(t, "copySessionId"),
                f(t, "copiedSessionId")
              ]
            },
            style: {
              fontSize: 11,
              marginLeft: "auto",
              flexShrink: 0
            }
          },
          e
        )
      )) : /* @__PURE__ */ L.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ L.createElement(Me, { type: "secondary", style: { fontSize: 13 } }, f(t, "selectSession")),
        /* @__PURE__ */ L.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ L.createElement(Sn, { config: ne, onChange: Re }, /* @__PURE__ */ L.createElement(Ze, { size: "small", icon: /* @__PURE__ */ L.createElement(vn, null) })))
      )
    ),
    E && !Ge && /* @__PURE__ */ L.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ L.createElement(Me, { type: "danger", style: { fontSize: 12 } }, `${f(t, "loadFailed")}: ${E.message}`)),
    /* @__PURE__ */ L.createElement(
      vo,
      {
        mode: u,
        onModeChange: S,
        search: p,
        onSearchChange: y,
        onRefresh: () => {
          e && (j(e), O(e)), l == null || l();
        },
        modeOptions: ct,
        allCollapsed: D.length > 0 && D.every((d) => z.has(d.turn ?? -1)),
        hasRequests: D.some((d) => d.turn !== null),
        callsCollapsed: ee,
        onToggleCallsCollapsed: () => W((d) => !d),
        onToggleCollapseAll: () => {
          $((d) => D.some(
            (_) => _.turn !== null && !d.has(_.turn)
          ) ? new Set(
            D.map((_) => _.turn).filter((_) => _ !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ L.createElement(
      ro,
      {
        turns: D,
        mode: u,
        range: T,
        hasEarlierRecords: Te,
        onLoadEarlier: async () => {
          var d;
          return !o || o.events.length === 0 ? !1 : (await j(e, (d = o.events[0]) == null ? void 0 : d.seq), !0);
        },
        selectedIndex: k,
        searchMatchIndexes: Se,
        onRangeChange: A,
        onRecordSelect: w,
        onRecordFocus: w,
        onSkillSpanSelect: Y
      }
    ),
    c && !o ? /* @__PURE__ */ L.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ L.createElement(Xn, null)) : o ? /* @__PURE__ */ L.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ L.createElement(
      "div",
      {
        style: {
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: 0
        }
      },
      /* @__PURE__ */ L.createElement(
        Bl,
        {
          turns: D,
          selectedIndex: k,
          selectedTurn: H,
          collapsedTurns: z,
          focusIndexes: ge,
          searchMatchIndexes: Se,
          onSelectedIndexChange: (d) => {
            if (d === k) {
              w(null);
              return;
            }
            w(d), R(null);
          },
          onSkillSpanOpen: (d, x) => {
            var Q;
            const _ = D.flatMap((q) => q.skillSpans ?? []), X = (x !== null ? (((Q = D.find((q) => q.turn === x)) == null ? void 0 : Q.skillSpans) ?? []).find((q) => q.skill === d) : void 0) ?? _.find((q) => q.skill === d);
            X && Y(X.id);
          },
          onSelectedTurnChange: (d) => {
            R(d), w(null);
          },
          callsCollapsed: ee,
          onToggleTurn: (d) => {
            $((x) => {
              const _ = new Set(x);
              return _.has(d) ? _.delete(d) : _.add(d), _;
            });
          },
          hasOlderRecords: Te,
          loadingOlder: g,
          onLoadOlder: () => {
            var d;
            !o || o.events.length === 0 || (i(!0), j(
              e,
              (d = o.events[0]) == null ? void 0 : d.seq
            ).finally(() => i(!1)));
          },
          emptyText: f(t, "noSessions"),
          initialRecord: G
        }
      )
    ), Ve ? /* @__PURE__ */ L.createElement(
      qs,
      {
        span: Ve,
        records: J,
        onJumpRecord: (d) => {
          Y(null), w(d);
        },
        onClose: () => Y(null)
      }
    ) : ht ? /* @__PURE__ */ L.createElement(
      Ws,
      {
        record: ae,
        request: Ee,
        onJumpSession: s,
        onSelectTurn: (d) => {
          R(d), w(null);
        },
        onClose: dt
      }
    ) : null) : /* @__PURE__ */ L.createElement(
      yn,
      {
        image: yn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: Ge && e ? f(t, "noTraceForSession") : f(t, "selectSession")
      }
    )
  );
}
const Pe = window.QwenPaw.host, B = Pe.React, { useCallback: En, useEffect: Mt, useMemo: et, useState: Ie } = B, { Button: xn, Empty: bn, Input: Co, Spin: zo, Tag: kn, Tooltip: wn } = Pe.antd, {
  CaretRightOutlined: $o,
  MenuFoldOutlined: Oo,
  MenuUnfoldOutlined: Ao,
  SearchOutlined: Ro
} = Pe.antdIcons, { Text: Ke } = Pe.antd.Typography;
function Lo({
  groups: e,
  collapsedAgents: n,
  onToggleAgent: t,
  searching: s,
  selected: l,
  onSelect: o,
  locale: r
}) {
  const c = e.length > 1;
  return /* @__PURE__ */ B.createElement(B.Fragment, null, e.map(([h, g]) => {
    const i = c && !s && n.has(h);
    return /* @__PURE__ */ B.createElement("div", { key: h }, c && /* @__PURE__ */ B.createElement(
      "div",
      {
        onClick: () => t(h),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 6px 4px",
          cursor: "pointer",
          userSelect: "none",
          color: "rgba(128,128,128,1)",
          fontSize: 12
        }
      },
      /* @__PURE__ */ B.createElement(
        $o,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: i ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ B.createElement(Ke, { strong: !0, style: { fontSize: 12 } }, h),
      /* @__PURE__ */ B.createElement(Ke, { type: "secondary", style: { fontSize: 11 } }, g.length)
    ), !i && g.map((p) => {
      const y = p.session_id === l;
      return /* @__PURE__ */ B.createElement(
        "div",
        {
          key: p.session_id,
          onClick: () => o(p.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: y ? "rgba(22,119,255,0.10)" : "transparent",
            border: y ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ B.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ B.createElement(
            Ke,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${p.title ? `${p.title}
` : ""}${p.session_id}`
              }
            },
            p.title || p.agent_id || An(p.session_id)
          ),
          c ? null : p.agent_id ? /* @__PURE__ */ B.createElement(
            kn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            p.agent_id
          ) : null,
          /* @__PURE__ */ B.createElement(
            kn,
            {
              color: Ln[p.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Nn(p.status)
          )
        ),
        /* @__PURE__ */ B.createElement(
          "div",
          {
            style: {
              display: "flex",
              gap: 8,
              marginTop: 2,
              fontSize: 12,
              color: "rgba(128,128,128,1)"
            }
          },
          /* @__PURE__ */ B.createElement("span", null, p.channel || "-"),
          /* @__PURE__ */ B.createElement("span", null, p.runs, " ", f(r, "runs")),
          /* @__PURE__ */ B.createElement("span", null, Rn(p.total_tokens), " tok"),
          p.skills ? /* @__PURE__ */ B.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(p.skills).sort((u, S) => S[1] - u[1]).map(([u, S]) => `${u} ×${S}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(p.skills).sort((u, S) => S[1] - u[1]).slice(0, 2).map(([u]) => u).join(" ")
          ) : null,
          /* @__PURE__ */ B.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Ms(p.last_event_t)
            },
            Cs(p.last_event_t)
          )
        )
      );
    }));
  }));
}
function No() {
  const e = typeof Pe.useLocale == "function" ? Pe.useLocale() : void 0, n = et(
    () => At(e ?? ie()),
    [e]
  ), [t, s] = Ie(null), [l, o] = Ie(!1), [r, c] = Ie(
    /* @__PURE__ */ new Set()
  ), [h, g] = Ie(!1), [i, p] = Ie(!1), [y, u] = Ie(null), [S, T] = Ie(""), [A, k] = Ie(null), w = En(async () => {
    try {
      const z = await Ut({ limit: 100, offset: 0 });
      s(z.sessions), o(z.has_more), k(null);
    } catch (z) {
      k(String(z.message));
    }
  }, []), H = En(async () => {
    p(!0);
    try {
      const z = await Ut({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      s(($) => {
        const ee = $ ?? [];
        return [
          ...ee,
          ...z.sessions.filter(
            (W) => !ee.some((ne) => ne.session_id === W.session_id)
          )
        ];
      }), o(z.has_more);
    } catch (z) {
      k(String(z.message));
    } finally {
      p(!1);
    }
  }, [t]);
  Mt(() => {
    w();
    try {
      const z = new URLSearchParams(window.location.search).get("session");
      z && $n(z).then(($) => {
        u($ ?? z);
      });
    } catch {
    }
  }, [w]), Mt(() => {
    try {
      const z = new URL(window.location.href);
      y ? z.searchParams.set("session", y) : z.searchParams.delete("session"), window.history.replaceState(window.history.state, "", z);
    } catch {
    }
  }, [y]), Mt(() => {
    const z = setInterval(() => {
      document.visibilityState === "visible" && w();
    }, 15e3);
    return () => clearInterval(z);
  }, [w]);
  const R = et(
    () => (t == null ? void 0 : t.find((z) => z.session_id === y)) ?? null,
    [t, y]
  ), F = et(() => {
    if (!t) return [];
    const z = S.trim().toLowerCase();
    return z ? t.filter(
      ($) => [$.session_id, $.title ?? "", $.agent_id, $.channel].join(" ").toLowerCase().includes(z)
    ) : t;
  }, [t, S]), Y = et(() => {
    const z = /* @__PURE__ */ new Map();
    for (const $ of F) {
      const ee = $.agent_id || "(unknown)", W = z.get(ee);
      W ? W.push($) : z.set(ee, [$]);
    }
    return [...z.entries()];
  }, [F]);
  return /* @__PURE__ */ B.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, h ? /* @__PURE__ */ B.createElement(
    "div",
    {
      style: {
        width: 32,
        flexShrink: 0,
        borderRight: "1px solid rgba(128,128,128,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 8
      }
    },
    /* @__PURE__ */ B.createElement(wn, { title: f(n, "expandSidebar"), placement: "right" }, /* @__PURE__ */ B.createElement(
      xn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ B.createElement(Ao, null),
        onClick: () => g(!1)
      }
    ))
  ) : /* @__PURE__ */ B.createElement(
    "div",
    {
      style: {
        width: 300,
        flexShrink: 0,
        borderRight: "1px solid rgba(128,128,128,0.15)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0
      }
    },
    /* @__PURE__ */ B.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ B.createElement(
        Co,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ B.createElement(Ro, null),
          placeholder: f(n, "searchPlaceholder"),
          value: S,
          style: { flex: 1, minWidth: 0 },
          onChange: (z) => T(z.target.value)
        }
      ),
      /* @__PURE__ */ B.createElement(wn, { title: f(n, "collapseSidebar") }, /* @__PURE__ */ B.createElement(
        xn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ B.createElement(Oo, null),
          onClick: () => g(!0)
        }
      ))
    ),
    A ? /* @__PURE__ */ B.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ B.createElement(Ke, { type: "danger", style: { fontSize: 12 } }, `${f(n, "loadFailed")}: ${A}`)) : null,
    /* @__PURE__ */ B.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ B.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ B.createElement(zo, null)) : F.length === 0 ? /* @__PURE__ */ B.createElement(
      bn,
      {
        image: bn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ B.createElement("span", { style: { fontSize: 12 } }, f(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ B.createElement(
        Ke,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        f(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ B.createElement(
      Lo,
      {
        groups: Y,
        collapsedAgents: r,
        onToggleAgent: (z) => {
          c(($) => {
            const ee = new Set($);
            return ee.has(z) ? ee.delete(z) : ee.add(z), ee;
          });
        },
        searching: !!S.trim(),
        selected: y,
        onSelect: u,
        locale: n
      }
    ), t !== null && l && !S.trim() && /* @__PURE__ */ B.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ B.createElement(
      "a",
      {
        onClick: () => void H(),
        style: { fontSize: 12 }
      },
      i ? "…" : `⋯ ${f(n, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ B.createElement(
    Mo,
    {
      sessionId: y,
      summary: R,
      locale: n,
      onJumpSession: u,
      onRefreshSessions: () => void w()
    }
  ));
}
const Do = window.QwenPaw.host.React;
var Tn, _n;
(_n = (Tn = window.QwenPaw).registerRoutes) == null || _n.call(Tn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: No,
    label: f(ie(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var In, tt, Mn;
(Mn = (tt = (In = window.QwenPaw.chat) == null ? void 0 : In.rightHeader) == null ? void 0 : tt.add) == null || Mn.call(
  tt,
  "agent-trace",
  Do.createElement(ps),
  { id: "agent-trace-jump" }
);

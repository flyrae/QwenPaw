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
    deltaKind: "增量类型",
    deltaReset: "全量重记",
    deltaNoChange: "无变化（与上次调用相同）",
    deltaTailUpdate: "末条更新（运行时改写模型自己的尾随叙述）",
    deltaAppend: "新增",
    assistantInputNote: "assistant 角色的输入消息 = 模型自己先前的回复，随上下文进入下一次调用",
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
    deltaKind: "Delta kind",
    deltaReset: "Full re-record",
    deltaNoChange: "No change (identical to the previous call)",
    deltaTailUpdate: "Tail update (runtime rewrote the model's trailing narration)",
    deltaAppend: "Appended",
    assistantInputNote: "assistant-role input messages are the model's own prior replies, re-entering context for the next call",
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
function Ot(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ie() {
  try {
    return Ot(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function h(e, n) {
  return ts[e][n];
}
const Fe = window.QwenPaw.host;
async function ns(e) {
  return Oe(
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
async function Oe(e, n) {
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
  return n.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && n.set("offset", String(e.offset)), Oe(
    `/agent-trace/sessions?${n.toString()}`
  );
}
async function ss(e, n) {
  const t = new URLSearchParams();
  n != null && n.beforeSeq && t.set("before_seq", String(n.beforeSeq)), t.set("limit", String(n == null ? void 0 : n.limit));
  const s = t.toString();
  return Oe(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function ls() {
  return Oe("/agent-trace/config");
}
async function os(e) {
  return Oe("/agent-trace/config", {
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
  await Oe(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function $n(e) {
  if (!e) return null;
  try {
    return (await Oe(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Ae = window.QwenPaw.host, nt = Ae.React, { useMemo: as } = nt, { Button: cs, Tooltip: ds } = Ae.antd, { CompassOutlined: us } = Ae.antdIcons;
function hs(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function ps() {
  const e = typeof Ae.useLocale == "function" ? Ae.useLocale() : void 0, n = as(
    () => Ot(e ?? ie()),
    [e]
  );
  return /* @__PURE__ */ nt.createElement(ds, { title: h(n, "viewCurrentTrace") }, /* @__PURE__ */ nt.createElement(
    cs,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ nt.createElement(us, null),
      "aria-label": h(n, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof Ae.getCurrentSessionId == "function" ? Ae.getCurrentSessionId() : null;
        $n(t).then((s) => {
          window.location.href = hs(s ?? t);
        });
      }
    }
  ));
}
const Kt = 3e3;
function Wt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function fs(e, n) {
  const t = Wt(e ?? ""), s = Wt(n ?? "");
  if (t.length > Kt || s.length > Kt)
    return [
      ...t.map((f) => ({ kind: "del", text: f })),
      ...s.map((f) => ({ kind: "add", text: f }))
    ];
  const l = t.length, o = s.length, r = new Int32Array((l + 1) * (o + 1)), c = (f, y) => f * (o + 1) + y;
  for (let f = l - 1; f >= 0; f -= 1)
    for (let y = o - 1; y >= 0; y -= 1)
      r[c(f, y)] = t[f] === s[y] ? r[c(f + 1, y + 1)] + 1 : Math.max(r[c(f + 1, y)], r[c(f, y + 1)]);
  const p = [];
  let g = 0, i = 0;
  for (; g < l && i < o; )
    t[g] === s[i] ? (p.push({ kind: "same", text: t[g] }), g += 1, i += 1) : r[c(g + 1, i)] >= r[c(g, i + 1)] ? (p.push({ kind: "del", text: t[g] }), g += 1) : (p.push({ kind: "add", text: s[i] }), i += 1);
  for (; g < l; )
    p.push({ kind: "del", text: t[g] }), g += 1;
  for (; i < o; )
    p.push({ kind: "add", text: s[i] }), i += 1;
  return p;
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
function An(e, n) {
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
  for (const d of l) {
    const E = He(d);
    o.set(E, (o.get(E) ?? 0) + 1);
  }
  const r = [], c = [], p = [];
  for (let d = 0; d < Math.min(t, Vt); d += 1)
    p.push({ status: "kept", role: e[d].role });
  for (const d of s) {
    const E = He(d), A = o.get(E) ?? 0;
    A > 0 ? (o.set(E, A - 1), p.push({ status: "kept", role: d.role })) : r.push(d);
  }
  for (const d of l) {
    const E = He(d), A = o.get(E) ?? 0;
    A > 0 && (o.set(E, A - 1), c.push(d));
  }
  const g = /* @__PURE__ */ new Map();
  for (const d of c) {
    const E = g.get(d.role);
    E ? E.push(d) : g.set(d.role, [d]);
  }
  const i = [], f = [];
  for (const d of r) {
    const E = g.get(d.role);
    E && E.length > 0 ? i.push([d, E.shift()]) : f.push(d);
  }
  const y = [...g.values()].flat();
  for (const [d, E] of i)
    p.push({
      status: "rewritten",
      role: d.role,
      oldText: d.text,
      newText: E.text
    });
  for (const d of f)
    p.push({
      status: "removed",
      role: d.role,
      oldText: d.text
    });
  for (const d of y)
    p.push({
      status: "added",
      role: d.role,
      newText: d.text
    });
  return {
    breakAt: t,
    beforeCount: e.length,
    afterCount: n.length,
    beforeChars: e.reduce((d, E) => d + Gt(E), 0),
    afterChars: n.reduce((d, E) => d + Gt(E), 0),
    beforeByRole: Xt(e),
    afterByRole: Xt(n),
    changes: p.slice(0, Vt)
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
function On(e) {
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
const it = window.QwenPaw.host, a = it.React, { useEffect: zs, useRef: $s, useState: Dn } = a, { Button: jn, Collapse: Pn, Empty: qt, Tabs: Lt, Tag: zt } = it.antd, { Text: W } = it.antd.Typography, { CopyOutlined: As, CloseOutlined: Os } = it.antdIcons, Rs = 320, Ls = 720, qe = {
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
    t ? "✓" : /* @__PURE__ */ a.createElement(As, null)
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
function I({
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
    /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ a.createElement(
      W,
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
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Input", value: `${Z(e)} tok` }), t ? /* @__PURE__ */ a.createElement(I, { label: "Cached", value: `${Z(t)} tok` }) : null, s ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: "Cache created",
      value: `${Z(s)} tok`
    }
  ) : null, t || s ? /* @__PURE__ */ a.createElement(I, { label: "Other", value: `${Z(o)} tok` }) : null, /* @__PURE__ */ a.createElement(I, { label: "Output", value: `${Z(n)} tok` }), l ? /* @__PURE__ */ a.createElement(I, { label: "Reasoning", value: `${Z(l)} tok` }) : null, l ? /* @__PURE__ */ a.createElement(I, { label: "Content", value: `${Z(r)} tok` }) : null);
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
    const p = t.charsByRole[c], g = js[c] ?? "roleOther", i = Math.round(p / r * 100);
    s.push(
      /* @__PURE__ */ a.createElement(
        I,
        {
          key: c,
          label: h(n, g),
          value: `${Z(p)} ${h(n, "charUnit")} · ${i}%`
        }
      )
    );
  }
  return t.maxToolChars > 0 && s.push(
    /* @__PURE__ */ a.createElement(
      I,
      {
        key: "max-tool",
        label: h(n, "maxToolMsg"),
        value: `${Z(t.maxToolChars)} ${h(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(W, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, h(n, "inputComposition")), s, e.inputTokens > 0 ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: h(n, "realInputTokens"),
      value: `${Z(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ a.createElement(
    W,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    h(n, "compositionNote")
  ), e.growth ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: h(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? h(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${Z(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: h(n, "cacheAbsorbed"),
      value: `${Z(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Bs({
  request: e,
  onJumpRecord: n
}) {
  const t = ie(), [s, l] = a.useState("summary"), o = /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Started", value: Ce(e.startedAt) }), /* @__PURE__ */ a.createElement(
    I,
    {
      label: "Total",
      value: ve(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: "First TTFT",
      value: ve(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: "Total decoding",
      value: ve(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: h(t, "throughput"),
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
      label: h(t, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ a.createElement(
        I,
        {
          label: h(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ a.createElement(I, { label: "Query", value: Fs(e.query) }), /* @__PURE__ */ a.createElement(
        I,
        {
          label: h(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ a.createElement(I, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ a.createElement(
        I,
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
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(W, { strong: !0, style: { fontSize: 12 } }, h(t, "thisRequest")), r, /* @__PURE__ */ a.createElement(Ps, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        W,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        h(t, "sessionTotal")
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
      onChange: (p) => l(p),
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
  return e === void 0 ? /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 12 } }, h(o, "noPrevPrompt")) : /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ a.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ a.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ a.createElement(
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
      const p = r;
      return /* @__PURE__ */ a.createElement(
        "div",
        {
          key: c,
          style: {
            padding: "0 8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            background: p.kind === "add" ? "rgba(82,196,26,0.12)" : p.kind === "del" ? "rgba(255,77,79,0.10)" : void 0,
            color: p.kind === "del" ? "rgba(255,77,79,0.9)" : void 0
          }
        },
        p.kind === "add" ? "+ " : p.kind === "del" ? "− " : "  ",
        p.text || " "
      );
    })
  ));
}
function Us({ record: e }) {
  var o;
  const n = ie(), t = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: h(n, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "#", value: String(e.index) }), /* @__PURE__ */ a.createElement(
        I,
        {
          label: h(n, "status"),
          value: s ? h(n, "promptChanged") : h(n, "promptInitial")
        }
      ), /* @__PURE__ */ a.createElement(I, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ a.createElement(I, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ a.createElement(I, { label: "Tools", value: String(t.length) }))
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
      label: h(n, "prompt"),
      children: /* @__PURE__ */ a.createElement(be, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 4 } }, t.map((r) => /* @__PURE__ */ a.createElement(W, { key: r, code: !0, style: { fontSize: 11 } }, r)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ a.createElement(
          Pn,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((r, c) => {
              var g;
              const p = typeof r.name == "string" && r.name || typeof ((g = r.function) == null ? void 0 : g.name) == "string" && r.function.name || `tool-${c + 1}`;
              return {
                key: String(c),
                label: /* @__PURE__ */ a.createElement(W, { code: !0, style: { fontSize: 11 } }, p),
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
      icon: /* @__PURE__ */ a.createElement(Os, null),
      onClick: e
    }
  )) : null;
}
function Ks({
  record: e,
  request: n,
  onJumpSession: t,
  onJumpRecord: s,
  onSelectTurn: l,
  onClose: o
}) {
  var E, A;
  const r = ie(), [c, p] = Dn(400), g = $s(null);
  if (zs(() => {
    const C = (k) => {
      const M = g.current;
      if (M === null) return;
      const $ = M.anchorX - k.clientX;
      p(
        Math.min(Ls, Math.max(Rs, M.anchorWidth + $))
      );
    }, b = () => {
      g.current = null;
    };
    return window.addEventListener("pointermove", C), window.addEventListener("pointerup", b), () => {
      window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", b);
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
          description: h(r, "selectRecord")
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
  const f = i.usage, y = i.timing, d = [];
  if (d.push({
    key: "summary",
    label: h(r, "summary"),
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "#", value: String(i.index) }), /* @__PURE__ */ a.createElement(I, { label: "Kind", value: An(i, r) }), i.runIndex > 0 && l ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(i.runIndex)
      },
      "Request #",
      i.runIndex,
      " →"
    )) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(r, "status"),
        value: i.running ? h(r, "running") : i.isError ? h(r, "error") : h(r, "success"),
        danger: i.isError
      }
    ), i.provider ? /* @__PURE__ */ a.createElement(I, { label: "Provider", value: i.provider }) : null, i.model ? /* @__PURE__ */ a.createElement(I, { label: h(r, "model"), value: i.model }) : null, i.toolName ? /* @__PURE__ */ a.createElement(I, { label: "Tool", value: i.toolName }) : null, i.inSkill ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(r, "skillResource"),
        value: i.inSkillLoaded ? `⚡ ${i.inSkill}` : `⚡ ${i.inSkill}（${h(r, "skillBypass")}）`
      }
    ) : null, i.guidedSkill ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(r, "skillGuided"),
        value: `∈ ${i.guidedSkill}（${i.guidedReason === "slash" ? h(r, "guidedBySlash") : h(r, "guidedByLoad")}）`
      }
    ) : null, i.toolOutputChars ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(r, "outputSize"),
        value: i.toolOutputBytes ? `${Z(i.toolOutputChars)} ${h(
          r,
          "charUnit"
        )} · ${Ct(i.toolOutputBytes)} (${h(
          r,
          "beforeTruncation"
        )})` : `${Z(i.toolOutputChars)} ${h(
          r,
          "charUnit"
        )}`
      }
    ) : null, i.kind === "user" && (i.channel || i.userId) ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(r, "source"),
        value: [i.channel, i.userId].filter(Boolean).join(" · ")
      }
    ) : null, i.receipt ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(r, "channel"),
        value: i.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(r, "duration"),
        value: ve(i.timeSeconds)
      }
    ), i.note ? /* @__PURE__ */ a.createElement(W, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.spawnSession ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(r, "spawnedAgent"),
        value: i.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ a.createElement(
      jn,
      {
        size: "small",
        onClick: () => i.spawnSession && t(i.spawnSession),
        style: { marginTop: 4 }
      },
      h(r, "openChildSession")
    ) : null) : null)
  }), i.kind === "tool")
    i.toolInput && d.push({
      key: "payload",
      label: h(r, "input"),
      children: /* @__PURE__ */ a.createElement(be, { value: i.toolInput, json: !0 })
    }), (i.toolOutput || i.toolError) && d.push({
      key: "result",
      label: h(r, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolError ? /* @__PURE__ */ a.createElement(W, { type: "danger", style: { fontSize: 12 } }, i.toolError) : null, i.toolOutput ? /* @__PURE__ */ a.createElement(be, { value: i.toolOutput }) : null)
    });
  else if (i.outputText || i.thinkingText || i.messages || i.marker || i.toolCalls && i.toolCalls.length > 0) {
    if (i.inputNew || i.messagesMeta) {
      const C = ((E = i.inputNew) == null ? void 0 : E.length) ?? 0, b = ((A = i.messagesMeta) == null ? void 0 : A.count) ?? 0;
      let k;
      i.contextReset ? k = `${h(r, "deltaReset")} (${b})` : C === 0 ? k = h(r, "deltaNoChange") : i.inputNew && i.inputNew.length === 1 && i.inputNew[0].role === "assistant" && b > 1 ? k = h(r, "deltaTailUpdate") : k = `${h(r, "deltaAppend")} (${C})`, d.push({
        key: "input",
        label: h(r, "inputTab"),
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(
          I,
          {
            label: h(r, "deltaKind"),
            value: k
          }
        ), i.contextReset ? /* @__PURE__ */ a.createElement(W, { type: "warning", style: { fontSize: 12 } }, h(r, "contextReset")) : null, i.resetDetail ? /* @__PURE__ */ a.createElement(
          "div",
          {
            style: {
              border: "1px solid rgba(250,173,20,0.4)",
              borderRadius: 6,
              padding: "6px 8px"
            }
          },
          /* @__PURE__ */ a.createElement(
            I,
            {
              label: h(r, "resetBreakAt"),
              value: `#${i.resetDetail.breakAt + 1}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            I,
            {
              label: h(r, "resetSizes"),
              value: `${i.resetDetail.beforeCount} ${h(
                r,
                "resetMsgs"
              )} · ${Z(i.resetDetail.beforeChars)} ${h(
                r,
                "charUnit"
              )} → ${i.resetDetail.afterCount} ${h(
                r,
                "resetMsgs"
              )} · ${Z(i.resetDetail.afterChars)} ${h(
                r,
                "charUnit"
              )}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            I,
            {
              label: h(r, "resetRoles"),
              value: Object.keys(i.resetDetail.afterByRole).map((M) => {
                const $ = i.resetDetail.beforeByRole[M] ?? 0, P = i.resetDetail.afterByRole[M] ?? 0;
                return $ === P ? null : `${M} ${$}→${P}`;
              }).filter(Boolean).join(" · ") || "-"
            }
          ),
          i.resetDetail.changes.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ a.createElement(W, { strong: !0, style: { fontSize: 12 } }, h(r, "resetChanges")), i.resetDetail.changes.slice(0, 20).map((M, $) => /* @__PURE__ */ a.createElement(
            "div",
            {
              key: $,
              style: {
                display: "flex",
                gap: 6,
                alignItems: "baseline"
              }
            },
            /* @__PURE__ */ a.createElement(
              zt,
              {
                color: M.status === "kept" ? "default" : M.status === "rewritten" ? "orange" : M.status === "removed" ? "red" : "green",
                style: { marginInlineEnd: 0, fontSize: 10 }
              },
              h(r, Ws[M.status])
            ),
            /* @__PURE__ */ a.createElement(W, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, M.role),
            M.status === "rewritten" ? /* @__PURE__ */ a.createElement(
              W,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${h(r, "resetOldPrefix")}${(M.oldText ?? "").slice(0, 40)} → ${h(
                r,
                "resetNewPrefix"
              )}${(M.newText ?? "").slice(0, 40)}`
            ) : /* @__PURE__ */ a.createElement(
              W,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${M.status === "removed" ? h(r, "resetOldPrefix") : h(r, "resetNewPrefix")}${(M.oldText ?? M.newText ?? "").slice(
                0,
                60
              )}`
            )
          ))) : null
        ) : null, i.messagesMeta ? /* @__PURE__ */ a.createElement(
          I,
          {
            label: h(r, "inputTotal"),
            value: `${i.messagesMeta.count} · ${Z(
              i.messagesMeta.totalChars
            )} ${h(r, "charUnit")}`
          }
        ) : null, i.inputNew && i.inputNew.length > 0 ? /* @__PURE__ */ a.createElement(a.Fragment, null, i.inputNew.some((M) => M.role === "assistant") ? /* @__PURE__ */ a.createElement(
          W,
          {
            type: "secondary",
            style: { fontSize: 11, display: "block" }
          },
          h(r, "assistantInputNote")
        ) : null, /* @__PURE__ */ a.createElement(
          Pn,
          {
            size: "small",
            defaultActiveKey: i.inputNew.length <= 5 ? ["messages"] : [],
            items: [
              {
                key: "messages",
                label: `${h(r, "inputMessages")} (${i.inputNew.length})`,
                children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.inputNew.map((M, $) => /* @__PURE__ */ a.createElement(
                  Vs,
                  {
                    key: $,
                    message: M,
                    locale: r
                  }
                )))
              }
            ]
          }
        )) : null)
      });
    }
    d.push({
      key: "raw",
      label: h(r, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.inboundParts && i.inboundParts.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 12 } }, `${h(r, "inboundParts")} (${i.inboundParts.length})`), i.inboundParts.map((C, b) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: b,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(W, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, C.type.replace("Content", "")),
        /* @__PURE__ */ a.createElement(
          W,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          C.text ?? "-"
        )
      ))) : null, i.marker ? /* @__PURE__ */ a.createElement(be, { value: i.marker }) : null, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 12 } }, `${h(r, "toolCall")} (${i.toolCalls.length})`), i.toolCalls.map((C, b) => /* @__PURE__ */ a.createElement("div", { key: C.id || b, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ a.createElement(W, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", C.name), /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 11 } }, C.id)))) : null, i.note ? /* @__PURE__ */ a.createElement(W, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.messages && i.messages.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 12 } }, `${h(r, "query")} (${i.messages.length})`), i.messages.map((C, b) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: b,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(W, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, C.role),
        /* @__PURE__ */ a.createElement(
          W,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          C.text
        )
      ))) : null, i.thinkingText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 12 } }, h(r, "thinking")), /* @__PURE__ */ a.createElement(be, { value: i.thinkingText })) : null, i.outputText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 12 } }, h(r, "output")), /* @__PURE__ */ a.createElement(be, { value: i.outputText })) : null)
    });
  }
  return (i.startedAt !== null || f || y) && d.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Started", value: Ce(i.startedAt) }), /* @__PURE__ */ a.createElement(I, { label: "Total", value: ve(i.timeSeconds) }), y ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: "TTFT",
        value: ve(y.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: "Decoding",
        value: ve(y.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(r, "throughput"),
        value: Rt(
          f == null ? void 0 : f.output_tokens,
          y.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 12 } }, h(r, "noTiming")))
  }), f && d.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Input", value: Z(f.input_tokens) }), /* @__PURE__ */ a.createElement(I, { label: "Output", value: Z(f.output_tokens) }), f.cache_creation_input_tokens ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: "Cache write",
        value: Z(f.cache_creation_input_tokens)
      }
    ) : null, f.cache_input_tokens ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: "Cache read",
        value: Z(f.cache_input_tokens)
      }
    ) : null, f.total_tokens !== void 0 ? /* @__PURE__ */ a.createElement(I, { label: "Total", value: Z(f.total_tokens) }) : null, f.time !== void 0 ? /* @__PURE__ */ a.createElement(I, { label: "API time", value: ve(f.time) }) : null)
  }), d.push({
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
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: o }), /* @__PURE__ */ a.createElement(Lt, { size: "small", items: d, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Ws = {
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
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ a.createElement(W, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 11 } }, Z(e.chars), " ", h(n, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), l.length > 200 ? /* @__PURE__ */ a.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => s((o) => !o)
    },
    t ? h(n, "inputCollapseText") : h(n, "inputExpand")
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
  const l = ie(), o = e.endKind ? h(l, Xs[e.endKind]) : h(l, "spanOpen"), r = Es(e);
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
    ), /* @__PURE__ */ a.createElement(W, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ a.createElement(
      zt,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      h(l, Gs[e.trigger])
    )), /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(l, "spanStart"),
        value: Ce(e.startT)
      }
    ), /* @__PURE__ */ a.createElement(I, { label: h(l, "spanEnd"), value: o }), e.endT !== null ? /* @__PURE__ */ a.createElement(I, { label: " ", value: Ce(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(l, "spanLastActivity"),
        value: Ce(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(l, "spanDuration"),
        value: r === null ? "-" : ve(r / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: h(l, "spanLoadState"),
        value: e.bypass ? h(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ a.createElement(W, { strong: !0, style: { fontSize: 12 } }, h(l, "spanEvidence")), e.evidences.slice(0, 30).map((c, p) => /* @__PURE__ */ a.createElement(
      "div",
      {
        key: p,
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
      /* @__PURE__ */ a.createElement(W, { type: "secondary", style: { fontSize: 11 } }, c.detail)
    ))) : /* @__PURE__ */ a.createElement(
      W,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      h(l, "spanNoActivity")
    ))
  );
}
const ue = window.QwenPaw.host.React, Js = ue.useRef, Qs = ue.useState;
ue.useCallback;
ue.useMemo;
const Ys = ue.useEffect, Zs = ue.useLayoutEffect, el = ue.useReducer;
ue.createContext;
ue.useContext;
ue.createElement;
ue.cloneElement;
ue.isValidElement;
ue.memo;
ue.forwardRef;
ue.Fragment;
ue.StrictMode;
ue.version;
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
          const p = +o;
          if (Number.isInteger(p) && p >= 0 && p < e) {
            let g = l[p];
            if (!g) {
              const i = n[p * 2];
              g = l[p] = {
                index: p,
                key: t(p),
                start: i,
                size: n[p * 2 + 1],
                end: i + n[p * 2 + 1],
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
    const p = process.env.NODE_ENV !== "production" && !!t.key && !!((c = t.debug) != null && c.call(t));
    let g = 0;
    p && (g = Date.now());
    const i = e();
    if (!(i.length !== s.length || i.some((d, E) => s[E] !== d)))
      return l;
    s = i;
    let y = 0;
    if (p && (y = Date.now()), l = n(...i), p) {
      const d = Math.round((Date.now() - g) * 100) / 100, E = Math.round((Date.now() - y) * 100) / 100, A = E / 16, C = (b, k) => {
        for (b = String(b); b.length < k; )
          b = " " + b;
        return b;
      };
      console.info(
        `%c⏱ ${C(E, 5)} /${C(d, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * A, 120)
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
    const { width: c, height: p } = r;
    n({ width: Math.round(c), height: Math.round(p) });
  };
  if (l(Zt(t)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((r) => {
    const c = () => {
      const p = r[0];
      if (p != null && p.borderBoxSize) {
        const g = p.borderBoxSize[0];
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
  ), p = (f) => () => {
    r = t(s), c == null || c(), n(r, f);
  }, g = p(!0), i = p(!1);
  return s.addEventListener("scroll", g, lt), o && s.addEventListener("scrollend", i, lt), () => {
    s.removeEventListener("scroll", g), o && s.removeEventListener("scrollend", i);
  };
}, dl = (e, n) => cl(e, n, (t) => {
  const { horizontal: s, isRtl: l } = e.options;
  return s ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), ul = (e, n, t) => {
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
            const c = o.target, p = this.indexFromElement(c);
            if (!c.isConnected) {
              this.observer.unobserve(c);
              for (const [g, i] of this.elementsCache)
                if (i === c) {
                  this.elementsCache.delete(g);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(p) && this.resizeItem(
              p,
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
        measureElement: ul,
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
        const d = t[y];
        d !== void 0 && (o[y] = d);
      }
      const r = this.options;
      let c = null, p = null, g = !1;
      if (r !== void 0 && r.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const y = r.count, d = o.count, E = this.getMeasurements(), A = y > 0 ? ((s = E[0]) == null ? void 0 : s.key) ?? r.getItemKey(0) : null, C = y > 0 ? ((l = E[y - 1]) == null ? void 0 : l.key) ?? r.getItemKey(y - 1) : null;
        if (d !== y || y > 0 && d > 0 && (o.getItemKey(0) !== A || o.getItemKey(d - 1) !== C)) {
          g = !0;
          const M = y > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? E[0] : null;
          M && (c = [M.key, this.getScrollOffset() - M.start]);
          const $ = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          $ && d > y && this.isAtEnd(r.scrollEndThreshold) && (y === 0 || o.getItemKey(d - 1) !== C) && (p = $);
        }
      }
      this.options = o, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let i = !1, f = 0;
      if (c && this.scrollOffset !== null) {
        const [y, d] = c, E = this.getMeasurements(), { count: A, getItemKey: C } = this.options;
        let b = 0;
        for (; b < A && C(b) !== y; )
          b++;
        if (b < A) {
          const k = E[b];
          if (k) {
            const M = Math.max(0, k.start + d);
            M !== this.scrollOffset && (f = M - this.scrollOffset, this.scrollOffset = M, i = !0);
          }
        }
      }
      (i || p) && (this.pendingScrollAnchor = [
        i ? c[0] : null,
        i ? c[1] : 0,
        p,
        f
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
        const [o, r, c, p] = l;
        o !== null && !c && (Et() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? p !== 0 && (this._iosDeferredAdjustment += p) : this._scrollToOffset(this.getScrollOffset(), {
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
      (t, s, l, o, r, c, p, g) => (this.prevLanes !== void 0 && this.prevLanes !== c && (this.lanesChangedFlag = !0), this.prevLanes = c, this.pendingMin = null, {
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: c,
        laneAssignmentMode: p,
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
        laneAssignmentMode: p,
        gap: g
      }, i) => {
        const f = this.itemSizeCache;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const b of this.laneAssignments.keys())
            b >= t && this.laneAssignments.delete(b);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((b) => {
          this.itemSizeCache.set(b.key, b.size);
        }));
        const y = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), c === 1) {
          const b = t * 2;
          let k = this._flatMeasurements;
          if (!k || k.length < b) {
            const P = new Float64Array(b);
            k && y > 0 && P.set(k.subarray(0, y * 2)), k = P, this._flatMeasurements = k;
          }
          let M;
          if (y === 0)
            M = s + l;
          else {
            const P = y - 1;
            M = k[P * 2] + k[P * 2 + 1] + g;
          }
          for (let P = y; P < t; P++) {
            const Y = o(P), O = f.get(Y), R = typeof O == "number" ? O : this.options.estimateSize(P);
            k[P * 2] = M, k[P * 2 + 1] = R, M += R + g;
          }
          const $ = nl(t, k, o);
          return this.measurementsCache = $, $;
        }
        const d = this.measurementsCache.slice(0, y), E = new Array(c).fill(
          void 0
        ), A = new Float64Array(c);
        let C = 0;
        for (let b = 0; b < y; b++) {
          const k = d[b];
          k && (E[k.lane] === void 0 && C++, E[k.lane] = b, A[k.lane] = k.end);
        }
        for (let b = y; b < t; b++) {
          const k = o(b), M = this.laneAssignments.get(b);
          let $, P;
          const Y = p === "estimate" || f.has(k);
          if (M !== void 0 && this.options.lanes > 1) {
            $ = M;
            const K = E[$], ne = K !== void 0 ? d[K] : void 0;
            P = ne ? ne.end + g : s + l;
          } else if (C === c) {
            let K = 0, ne = A[0], de = E[0];
            for (let oe = 1; oe < c; oe++) {
              const le = A[oe];
              (le < ne || le === ne && E[oe] < de) && (K = oe, ne = le, de = E[oe]);
            }
            $ = K, P = ne + g, Y && this.laneAssignments.set(b, $);
          } else
            $ = b % this.options.lanes, P = s + l, Y && this.laneAssignments.set(b, $);
          const O = f.get(k), R = typeof O == "number" ? O : this.options.estimateSize(b), ee = P + R;
          d[b] = {
            index: b,
            start: P,
            size: R,
            end: ee,
            key: k,
            lane: $
          }, E[$] === void 0 && C++, E[$] = b, A[$] = ee;
        }
        return this.measurementsCache = d, d;
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
      let r, c, p;
      const g = this._flatMeasurements;
      if (this.options.lanes === 1 && g !== null)
        p = this.options.getItemKey(t), c = g[t * 2], r = g[t * 2 + 1];
      else {
        const y = this.measurementsCache[t];
        if (!y) return;
        p = y.key, c = y.start, r = y.size;
      }
      const i = this.itemSizeCache.get(p) ?? r, f = s - i;
      if (f !== 0) {
        const y = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, d = y ? this.getTotalSize() : 0, E = this.getScrollOffset() + this.scrollAdjustments, C = !this.itemSizeCache.has(p) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          c < E
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          c + i <= E && this.scrollDirection !== "backward"
        ), b = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: p,
            start: c,
            size: r,
            end: c + r,
            lane: 0
          },
          f,
          this
        ) : C);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(p, s), this.itemSizeCacheVersion++;
        let k = !1;
        y ? k = this.applyScrollAdjustment(
          this.getTotalSize() - d
        ) : b && (k = this.applyScrollAdjustment(f)), this.notify(k);
      }
    }, this.getVirtualItems = De(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, s) => {
        const l = [];
        for (let o = 0, r = t.length; o < r; o++) {
          const c = t[o], p = s[c];
          l.push(p);
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
      const [r, c] = o, p = this.now();
      this.scrollState = {
        index: t,
        align: c,
        behavior: l,
        startedAt: p,
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
      const c = this.getSize() || 600, p = Math.abs(l - this.getScrollOffset()), g = this.scrollState.behavior === "smooth" && p > c;
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
    const f = t + n;
    for (; i < o && l[i * 2] + l[i * 2 + 1] < f; )
      i++;
    return { startIndex: g, endIndex: i };
  }
  let c = Bn(0, o, (g) => e[g].start, t), p = c;
  if (s === 1)
    for (; p < o && e[p].end < t + n; )
      p++;
  else if (s > 1) {
    const g = Array(s).fill(0);
    for (; p < o && g.some((f) => f < t + n); ) {
      const f = e[p];
      g[f.lane] = f.end, p++;
    }
    const i = Array(s).fill(t + n);
    for (; c >= 0 && i.some((f) => f >= t); ) {
      const f = e[c];
      i[f.lane] = f.start, c--;
    }
    c = Math.max(0, c - c % s), p = Math.min(o, p + (s - 1 - p % s));
  }
  return { startIndex: c, endIndex: p };
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
    const f = o.current;
    if (!f.enabled || !f.container) return;
    const y = i.getTotalSize();
    if (y !== f.lastSize) {
      f.lastSize = y;
      const d = i.options.horizontal ? "width" : "height";
      f.container.style[d] = `${y}px`;
    }
  }, c = (i) => {
    const f = o.current;
    if (!f.enabled || !f.container) return;
    r(i);
    const y = !!i.options.horizontal, d = f.mode === "transform", E = y ? "left" : "top", A = i.options.scrollMargin, C = i.getVirtualItems();
    for (const b of C) {
      const k = b.start - A, M = i.elementsCache.get(b.key);
      M && f.lastPositions.get(M) !== k && (f.lastPositions.set(M, k), d ? M.style.transform = y ? `translate3d(${k}px, 0, 0)` : `translate3d(0, ${k}px, 0)` : M.style[E] = `${k}px`);
    }
  }, p = {
    ...s,
    onChange: (i, f) => {
      var y;
      const d = o.current;
      let E = !0;
      if (d.enabled) {
        c(i);
        const A = i.range, C = d.prevRange;
        E = !C || C.isScrolling !== i.isScrolling || C.startIndex !== (A == null ? void 0 : A.startIndex) || C.endIndex !== (A == null ? void 0 : A.endIndex), E && (d.prevRange = A ? {
          startIndex: A.startIndex,
          endIndex: A.endIndex,
          isScrolling: i.isScrolling
        } : null);
      }
      E && (e && f ? tl(l) : l()), (y = s.onChange) == null || y.call(s, i, f);
    }
  }, [g] = Qs(() => {
    const i = new fl(p);
    return Object.assign(i, {
      containerRef: (f) => {
        const y = o.current;
        if (y.container = f, y.lastSize = null, f && y.enabled) {
          const d = i.getTotalSize();
          y.lastSize = d;
          const E = i.options.horizontal ? "width" : "height";
          f.style[E] = `${d}px`;
        }
      }
    });
  });
  return g.setOptions(p), xt(() => g._didMount(), []), xt(() => (r(g), g._willUpdate())), xt(() => {
    c(g);
  }), g;
}
function vl(e) {
  return yl({
    observeElementRect: rl,
    observeElementOffset: dl,
    scrollToFn: pl,
    ...e
  });
}
const rt = window.QwenPaw.host, _ = rt.React, { useRef: Sl } = _, { Tag: je, Tooltip: El } = rt.antd, { Text: ye } = rt.antd.Typography, {
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
}, Al = {
  user: /* @__PURE__ */ _.createElement(zl, null),
  message: /* @__PURE__ */ _.createElement(wl, null),
  tool: /* @__PURE__ */ _.createElement(Cl, null),
  system: /* @__PURE__ */ _.createElement(Ml, null)
}, en = {
  approval: { color: "volcano", icon: /* @__PURE__ */ _.createElement(_l, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ _.createElement(Il, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ _.createElement(Tl, null) },
  header: { color: "green", icon: /* @__PURE__ */ _.createElement(kl, null) },
  error: { color: "red", icon: /* @__PURE__ */ _.createElement(bl, null) }
}, Ol = {
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
  return t.size === 0 ? null : [...t.entries()].map(([s, l]) => `${h(n, s)}×${l}`).join(" ");
}
function jl(e, n) {
  const t = e.receipt, s = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${h(n, "replySent")}${s} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${h(n, "chars")}`;
}
function ln({
  record: e,
  selected: n,
  dimmed: t,
  multiRequest: s,
  onSelect: l
}) {
  var c, p;
  const o = e.usage, r = o && (o.input_tokens || o.output_tokens) ? `${Z(o.input_tokens)}→${Z(
    o.output_tokens
  )}` : null;
  return /* @__PURE__ */ _.createElement(
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
    /* @__PURE__ */ _.createElement(
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
      s && /* @__PURE__ */ _.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ _.createElement(
      je,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((c = en[e.markerKind]) == null ? void 0 : c.color) || $l[e.kind] || "default",
        icon: e.markerKind && ((p = en[e.markerKind]) == null ? void 0 : p.icon) || Al[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? h(ie(), "skillLoadKind") : An(e, ie())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ _.createElement(
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
    e.inSkill ? /* @__PURE__ */ _.createElement(
      je,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${h(ie(), "skillBypass")}`,
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
    ) : e.guidedSkill ? /* @__PURE__ */ _.createElement(
      El,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? h(ie(), "guidedBySlash") : h(ie(), "guidedByLoad")}`
      },
      /* @__PURE__ */ _.createElement(
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
    e.kind === "user" && e.skillName ? /* @__PURE__ */ _.createElement(
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
    /* @__PURE__ */ _.createElement(
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
      e.receipt ? /* @__PURE__ */ _.createElement(ye, { type: "secondary", style: { fontSize: 12 } }, jl(e, ie())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(ye, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ _.createElement(ye, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ _.createElement(ye, { type: "secondary", style: { fontSize: 12 } }, ` · ${h(ie(), "skillLoaded")} ${Z(
        e.toolOutputChars
      )} ${h(ie(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(ye, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ _.createElement(ye, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ _.createElement(
        ye,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(
        ye,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(ye, { type: "secondary", style: { fontSize: 11 } }, ` ${Dl(e, ie()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ _.createElement(ye, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
    ),
    /* @__PURE__ */ _.createElement(
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
      r ? /* @__PURE__ */ _.createElement("span", { style: { color: "#1677ff" } }, r) : null,
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
  return /* @__PURE__ */ _.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Fn }
    },
    /* @__PURE__ */ _.createElement(
      "span",
      {
        onClick: (p) => {
          p.stopPropagation(), o();
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
      /* @__PURE__ */ _.createElement(
        xl,
        {
          onClick: (p) => {
            p.stopPropagation(), l();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: n ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ _.createElement(ye, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ _.createElement(ye, { type: "secondary", style: { fontSize: 11 } }, ve(e.durationMs / 1e3)),
      /* @__PURE__ */ _.createElement(ye, { type: "secondary", style: { fontSize: 11 } }, s, " ", h(c, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ _.createElement(
          "span",
          {
            onClick: (p) => {
              r && (p.stopPropagation(), r(e.skillsUsed[0], e.turn));
            },
            style: {
              display: "inline-flex",
              cursor: r ? "pointer" : void 0
            }
          },
          /* @__PURE__ */ _.createElement(
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
      /* @__PURE__ */ _.createElement(
        je,
        {
          color: Ol[e.status] ?? "default",
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
  onToggleTurn: p,
  callsCollapsed: g,
  hasOlderRecords: i,
  loadingOlder: f,
  onLoadOlder: y,
  initialRecord: d,
  emptyText: E,
  onSkillSpanOpen: A
}) {
  const C = ie(), b = Sl(null), k = e.filter((R) => R.turn !== null), M = k.length > 1, $ = _.useMemo(() => {
    var ee;
    const R = [];
    i && R.push({
      key: "load-older",
      height: sn,
      type: "load-older"
    }), d && (R.push({
      key: "initial",
      height: $t,
      type: "initial",
      record: d
    }), R.push({
      key: "initial-divider",
      height: nn,
      type: "divider"
    }));
    for (const K of k) {
      const ne = K.turn;
      if (R.push({
        key: `turn-${ne}`,
        height: Fn,
        type: "boundary",
        turn: K
      }), !s.has(ne))
        for (const de of ((ee = K.groups[0]) == null ? void 0 : ee.cells) ?? [])
          g && de.kind === "tool" || R.push({
            key: `rec-${de.index}`,
            height: $t,
            type: "record",
            record: de
          });
    }
    return R;
  }, [
    k,
    s,
    g,
    i,
    d
  ]), P = _.useCallback(
    (R) => l !== null && !l.has(R.index) || o !== null && !o.has(R.index),
    [l, o]
  ), Y = (R) => {
    var ee;
    switch (R.type) {
      case "load-older":
        return /* @__PURE__ */ _.createElement("div", { style: { textAlign: "center", height: sn } }, /* @__PURE__ */ _.createElement(
          "button",
          {
            type: "button",
            onClick: y,
            disabled: f,
            style: {
              border: "1px solid rgba(128,128,128,0.3)",
              borderRadius: 10,
              background: "transparent",
              padding: "1px 12px",
              fontSize: 11,
              cursor: f ? "default" : "pointer",
              color: "rgba(128,128,128,1)"
            }
          },
          f ? "…" : `⋯ ${h(C, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ _.createElement(
          "div",
          {
            style: {
              height: nn,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const K = R.record;
        return /* @__PURE__ */ _.createElement(
          ln,
          {
            record: K,
            selected: n === K.index,
            dimmed: P(K),
            multiRequest: M,
            onSelect: () => r(K.index)
          }
        );
      }
      case "boundary": {
        const K = R.turn, ne = K.turn;
        return /* @__PURE__ */ _.createElement(
          Pl,
          {
            turn: K,
            collapsed: s.has(ne),
            selected: t === ne,
            cellCount: ((ee = K.groups[0]) == null ? void 0 : ee.cells.length) ?? 0,
            onToggle: () => p(ne),
            onSelect: () => c(ne),
            onSkillSpanOpen: A ? (de, oe) => A(de, oe) : void 0
          }
        );
      }
      case "record":
      default: {
        const K = R.record;
        return /* @__PURE__ */ _.createElement(
          ln,
          {
            record: K,
            selected: n === K.index,
            dimmed: P(K),
            multiRequest: M,
            onSelect: () => r(K.index)
          }
        );
      }
    }
  };
  if ($.length === 0)
    return /* @__PURE__ */ _.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ _.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        E ?? h(C, "noSessions")
      )
    );
  const O = $.length <= Rl ? /* @__PURE__ */ _.createElement("div", null, $.map((R) => Y(R))) : /* @__PURE__ */ _.createElement(
    Fl,
    {
      rows: $,
      scrollRef: b,
      renderRow: Y
    }
  );
  return /* @__PURE__ */ _.createElement(
    "div",
    {
      ref: b,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    O
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
  return /* @__PURE__ */ _.createElement(
    "div",
    {
      style: {
        height: s.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    s.getVirtualItems().map((l) => /* @__PURE__ */ _.createElement(
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
function Kl(e) {
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
function Wl(e) {
  var oe, le;
  const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = [];
  let c = "";
  const p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  let f = [];
  const y = /* @__PURE__ */ new Set(), d = [], E = new vs(), A = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
  let k = [], M = [], $ = 0, P = 0;
  const Y = (m) => m.groups[0].cells, O = (m, v) => {
    const S = o.get(m);
    S ? S.push(v) : o.set(m, [v]);
  }, R = (m, v) => {
    if (!m)
      if (c)
        m = c;
      else {
        r.push(v);
        return;
      }
    const S = t.get(m);
    if (S)
      v.runIndex = S.turn ?? 0, Y(S).push(v);
    else if (c) {
      const w = t.get(c);
      w ? (v.runIndex = w.turn ?? 0, Y(w).push(v)) : O(m, v);
    } else
      O(m, v);
  }, ee = (m, v) => {
    const S = o.get(v);
    if (S) {
      for (const w of S) Y(m).push(w);
      o.delete(v);
    }
  };
  for (const m of e) {
    const v = bt(m);
    switch (m.type) {
      case "run/start": {
        P += 1, d.length = 0, p.set(
          m.run_id,
          typeof v.channel == "string" ? v.channel : ""
        );
        const S = {
          turn: P,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${P}`, cells: [] }]
        };
        t.set(m.run_id, S), n.push(S), c = m.run_id, ee(S, m.run_id);
        for (const D of r.splice(0))
          D.runIndex = P, Y(S).push(D);
        const w = Array.isArray(v.messages) ? v.messages : [], z = String(v.query ?? "");
        let B = typeof v.slash_skill == "string" && v.slash_skill ? v.slash_skill : rn(z);
        !B && w.length > 0 && (B = rn(String(((oe = w[0]) == null ? void 0 : oe.text) ?? ""))), B && (y.add(B), d.push([B, "slash"]), E.onRunStart(), E.onSlashSkill(
          B,
          m.seq,
          pe(m.t) ?? 0
        ), A.set(`${B}#${m.seq}`, S));
        const L = {
          index: ++$,
          runIndex: P,
          runId: m.run_id,
          kind: "user",
          text: _e(z) || _e((le = w.at(-1)) == null ? void 0 : le.text),
          messages: w,
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: B ?? void 0,
          model: void 0
        };
        g.set(m.run_id, L), Y(S).push(L);
        break;
      }
      case "run/end": {
        const S = t.get(m.run_id);
        c === m.run_id && (c = ""), d.length = 0, E.onRunEnd(m.seq, pe(m.t) ?? 0), p.delete(m.run_id), g.delete(m.run_id);
        const w = String(v.status ?? "unknown");
        if (S && (S.status = w, S.durationMs = typeof v.duration_ms == "number" ? v.duration_ms : null), w === "error" && v.error) {
          const z = S ?? {
            turn: null,
            status: w,
            durationMs: typeof v.duration_ms == "number" ? v.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || n.push(z), z.groups[0].cells.push({
            index: ++$,
            runIndex: P,
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
        const S = typeof v.child_session_id == "string" ? v.child_session_id : void 0, w = typeof v.child_agent_id == "string" ? v.child_agent_id : "?";
        R(m.run_id, {
          index: ++$,
          runIndex: 0,
          runId: m.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${w} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: w,
          raw: [m]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(v.parts) ? v.parts : [], w = v.channel_meta && typeof v.channel_meta == "object" ? v.channel_meta : void 0, z = S.map((j) => ({
          type: String(j.type ?? "?"),
          text: typeof j.text == "string" ? j.text : void 0
        })), B = p.get(m.run_id) ?? "", L = w && typeof w.user_id == "string" && w.user_id ? w.user_id : void 0, D = _e(
          z.map((j) => j.text ?? "").filter(Boolean).join(`
`)
        ), G = g.get(m.run_id);
        G && !G.inboundParts ? (G.inboundParts = z, G.channel = B || void 0, G.userId = L, G.raw = [
          ...G.raw ?? [],
          m
        ], G.text || (G.text = D)) : R(m.run_id, {
          index: ++$,
          runIndex: 0,
          runId: m.run_id,
          kind: "user",
          text: D || "📥",
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          channel: B || void 0,
          userId: L,
          inboundParts: z,
          raw: [m]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof v.text == "string" ? v.text : "";
        R(m.run_id, {
          index: ++$,
          runIndex: 0,
          runId: m.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: S || void 0,
          receipt: {
            channel: p.get(m.run_id) || void 0,
            chars: S.length
          },
          raw: [m]
        });
        break;
      }
      case "approval/asked": {
        R(m.run_id, {
          index: ++$,
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
        const S = String(v.decision ?? "?"), w = v.tool_name ? String(v.tool_name) : "";
        R(m.run_id, {
          index: ++$,
          runIndex: 0,
          runId: m.run_id,
          kind: "system",
          markerKind: "approval",
          text: w ? `${w} → ${S}` : S,
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [m]
        });
        break;
      }
      case "llm/header": {
        const S = typeof v.sha256 == "string" ? v.sha256 : "", w = typeof v.prev_sha256 == "string" ? v.prev_sha256 : void 0, z = v.reason === "changed" ? "changed" : "initial", B = typeof v.system_prompt == "string" ? v.system_prompt : "", L = Array.isArray(v.tools) ? v.tools : [], D = Array.isArray(v.schemas) ? v.schemas : void 0;
        R(m.run_id, {
          index: ++$,
          runIndex: 0,
          runId: m.run_id,
          kind: "system",
          markerKind: "header",
          text: z === "initial" ? `⚙ ${B ? `System Prompt (${B.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: B,
          prevPrompt: i.get(w ?? ""),
          headerTools: L,
          headerReason: z,
          sha: S,
          prevSha: w,
          schemas: D,
          raw: [m]
        }), S && i.set(S, B), B && (f = Kl(B));
        break;
      }
      case "llm/call": {
        const S = bt(m), w = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, z = S.messages_meta, B = z && typeof z == "object" ? {
          count: typeof z.count == "number" ? z.count : 0,
          totalChars: typeof z.total_chars == "number" ? z.total_chars : 0,
          charsByRole: on(z.chars_by_role) ? z.chars_by_role : {},
          countByRole: on(z.count_by_role) ? z.count_by_role : {},
          maxToolChars: typeof z.max_tool_chars == "number" ? z.max_tool_chars : 0
        } : void 0, L = Hl(S.messages_new);
        let D;
        if (S.context_reset === !0) {
          const J = (L ?? []).map(
            (ge) => ({
              role: ge.role,
              chars: ge.chars,
              text: ge.text
            })
          );
          let re;
          k.length > 0 || J.length === 0 ? re = k : re = M.map((ge) => ({
            role: ge.role,
            text: ge.text
          })), D = _s(re, J), B && (D.afterChars = B.totalChars);
        }
        if (L) {
          const J = L.map((re) => ({
            role: re.role,
            chars: re.chars,
            text: re.text
          }));
          S.context_reset === !0 ? k = J : S.tail_update === !0 ? k = [...k.slice(0, -1), ...J] : typeof S.messages_count == "number" && L.length >= S.messages_count && k.length > 0 ? k = J : k = [...k, ...J];
        }
        M = Array.isArray(S.messages) ? S.messages.map((J) => ({
          role: J.role,
          text: J.text
        })) : [];
        const G = {
          index: ++$,
          runIndex: 0,
          runId: m.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: B,
          inputNew: L,
          contextReset: S.context_reset === !0,
          resetDetail: D,
          options: w
        };
        R(m.run_id, G);
        const j = s.get(m.run_id) ?? [];
        j.push({ cell: G, callData: S, call: m }), s.set(m.run_id, j);
        break;
      }
      case "llm/result": {
        const S = s.get(m.run_id), w = S == null ? void 0 : S.shift(), z = (w == null ? void 0 : w.callData) ?? {}, B = typeof v.duration_ms == "number" ? v.duration_ms : null, L = v.usage ?? void 0, D = v.timing, G = Array.isArray(v.tool_calls) ? v.tool_calls : void 0, re = {
          text: (v.error ? _e(String(v.error)) : _e(String(v.text ?? ""))) || (G && G.length > 0 ? `🛠 ${G.map((ge) => ge.name).join(", ")}` : ""),
          timeSeconds: B === null ? null : B / 1e3,
          isError: !!v.error,
          running: !1,
          outputText: v.text ? String(v.text) : void 0,
          thinkingText: v.thinking ? String(v.thinking) : void 0,
          usage: L,
          timing: D,
          toolCalls: G,
          note: v.note ? String(v.note) : void 0
        };
        w ? (Object.assign(w.cell, re), w.cell.model = String(
          v.model ?? z.model ?? w.cell.model
        ), w.cell.raw = [
          ...w.call ? [w.call] : [],
          m
        ]) : R(m.run_id, {
          index: ++$,
          runIndex: 0,
          runId: m.run_id,
          kind: "message",
          startedAt: pe(m.t) ?? 0,
          model: String(v.model ?? z.model ?? "unknown"),
          ...re
        });
        break;
      }
      case "tool/call": {
        const S = bt(m), w = String(S.name ?? "?"), z = w === "Skill" ? Ul(S.input) : void 0;
        if (z) {
          y.add(z), d.push([z, "load"]);
          const ae = E.onSkillLoad(
            z,
            m.seq,
            pe(m.t) ?? 0
          ), Ee = t.get(m.run_id);
          Ee && A.set(ae, Ee);
        }
        const B = S.input ? String(S.input) : void 0;
        let L;
        if (!z && B) {
          const ae = typeof S.skill_resource == "string" ? S.skill_resource : void 0;
          ae && (L = ae);
        }
        if (!z && !L && B && f.length > 0) {
          const ae = Hn(B);
          for (const [Ee, Te] of f)
            if (ae.includes(Ee)) {
              L = Te;
              break;
            }
        }
        let D, G;
        if (!z && !L && B && C.size > 0) {
          const ae = ks(B, C);
          ae && (D = ae.skill, G = ae.feature);
        }
        let j, J;
        if (!z && !L && !D && d.length > 0) {
          const [ae, Ee] = d[d.length - 1];
          j = ae, J = Ee;
        }
        const re = E.onToolCall({
          attribution: L ? { skill: L, kind: "path", detail: "skill dir in input" } : D ? {
            skill: D,
            kind: "content",
            detail: `“${G}” in input (skill doc)`
          } : j ? {
            skill: j,
            kind: "temporal",
            detail: J === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: $ + 1,
          seq: m.seq,
          t: pe(m.t) ?? 0
        });
        if (re && !A.has(re)) {
          const ae = t.get(m.run_id);
          ae && A.set(re, ae);
        }
        const ge = {
          index: ++$,
          runIndex: 0,
          runId: m.run_id,
          kind: "tool",
          text: z ? `📚 ${z}` : `${w}(${_e(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: pe(m.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: w,
          skillName: z,
          inSkill: L,
          inSkillLoaded: L ? y.has(L) : void 0,
          guidedSkill: j ?? D,
          guidedReason: J ?? (D ? "load" : void 0),
          skillSpanId: re ?? void 0,
          toolInput: S.input ? String(S.input) : void 0
        };
        R(m.run_id, ge);
        const Se = l.get(m.run_id) ?? [];
        Se.push({ cell: ge, callData: S, call: m }), l.set(m.run_id, Se);
        break;
      }
      case "tool/result": {
        const S = l.get(m.run_id), w = typeof v.tool_call_id == "string" ? v.tool_call_id : null;
        let z;
        if (S) {
          const J = w ? S.findIndex(
            (re) => re.callData.tool_call_id === w
          ) : -1;
          J >= 0 ? z = S.splice(J, 1)[0] : z = S.shift();
        }
        const B = typeof v.duration_ms == "number" ? v.duration_ms : null, L = v.ok !== !1 && !v.error, D = v.output ? String(v.output) : void 0, G = D ? ` → ${_e(D, 60)}` : "", j = {
          timeSeconds: B === null ? null : B / 1e3,
          isError: !L,
          running: !1,
          toolOutput: D,
          toolOutputChars: typeof v.output_chars == "number" ? v.output_chars : void 0,
          toolOutputBytes: typeof v.output_bytes == "number" ? v.output_bytes : void 0,
          toolError: v.error ? String(v.error) : void 0,
          note: v.note ? String(v.note) : void 0
        };
        if (z) {
          if (Object.assign(z.cell, j), !z.cell.skillName)
            z.cell.text = `${z.cell.text}${G}`;
          else if (D) {
            const J = typeof v.skill_sha == "string" ? v.skill_sha : null;
            J && b.get(z.cell.skillName) === J || (C.set(
              z.cell.skillName,
              bs(D)
            ), J && b.set(z.cell.skillName, J));
          }
          z.cell.raw = [
            ...z.call ? [z.call] : [],
            m
          ];
        } else
          R(m.run_id, {
            index: ++$,
            runIndex: 0,
            runId: m.run_id,
            kind: "tool",
            text: `?${G}`,
            startedAt: pe(m.t) ?? 0,
            ...j
          });
        break;
      }
    }
  }
  for (const [m, v] of o) {
    const S = t.get(m);
    if (S) {
      for (const w of v) Y(S).push(w);
      o.delete(m);
    }
  }
  for (const m of n) {
    const v = [];
    for (const S of m.groups)
      for (const w of S.cells)
        w.skillName && !v.includes(w.skillName) && v.push(w.skillName);
    v.length > 0 && (m.skillsUsed = v);
  }
  const K = E.spans(), ne = new Set(K.map((m) => m.skill)).size, de = /* @__PURE__ */ new Map();
  for (const m of n)
    for (const v of m.groups)
      for (const S of v.cells) de.set(S.index, S);
  for (const m of K) {
    const v = A.get(m.id);
    v && (v.skillSpans ?? (v.skillSpans = [])).push(m);
    for (const S of m.attributedIndexes) {
      const w = de.get(S);
      w && (w.skillSpanId = m.id, w.skillSpanHue = ne > 1 ? m.colorHue : void 0, w.skillSpanBypass = m.bypass);
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
        cells: t.filter((c, p) => p !== s)
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
function dn(e) {
  return e != null && Number.isFinite(e);
}
function Kn(e) {
  if (!dn(e.startedAt)) return null;
  const n = dn(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + n };
}
function Wn(e, n = "sequence") {
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
    const f = i.groups.flatMap(
      (y) => y.cells.flatMap((d) => {
        const E = Kn(d);
        return E === null ? [] : [
          {
            ...E,
            index: d.index,
            isError: d.isError === !0,
            kind: d.kind,
            label: d.text,
            lane: Un(d.kind)
          }
        ];
      })
    );
    return f.length === 0 ? [] : [{ turn: i.turn, rawSpans: f }];
  }), l = s.flatMap((i) => i.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let r = 0, c = null;
  for (const i of [...l].sort(
    (f, y) => f.start - y.start || f.end - y.end
  ))
    t && c !== null && i.start > c && (r += i.start - c), o.set(i, r), c = c === null ? i.end : Math.max(c, i.end);
  const p = [], g = [];
  for (const i of s) {
    const f = i.rawSpans.map((y) => {
      const d = o.get(y) ?? 0;
      return {
        ...y,
        start: y.start - d,
        end: (n ? y.end : y.start) - d
      };
    });
    p.push(...f), i.turn !== null && g.push({
      turn: i.turn,
      time: Math.min(...f.map((y) => y.start))
    });
  }
  return {
    start: Math.min(...p.map((i) => i.start)),
    end: Math.max(...p.map((i) => i.end)),
    spans: p,
    turnBoundaries: g
  };
}
function Jl(e, n = "sequence") {
  const t = (c) => c.skillSpans ?? [];
  if (e.every((c) => t(c).length === 0)) return null;
  if (n === "sequence") {
    const c = /* @__PURE__ */ new Map();
    let p = 0;
    for (const i of e)
      for (const f of i.groups.flatMap((y) => y.cells))
        c.set(f.index, p), p += 1;
    const g = [];
    for (const i of e)
      for (const f of t(i)) {
        const y = f.attributedIndexes.map((A) => c.get(A)).filter((A) => A !== void 0);
        let d = y.length ? Math.min(...y) : void 0;
        if (d === void 0) {
          const A = i.groups.flatMap((C) => C.cells).find(
            (C) => C.kind !== "system" && C.skillName === f.skill
          );
          d = A ? c.get(A.index) : void 0;
        }
        if (d === void 0) continue;
        const E = y.length ? Math.max(...y) : d;
        g.push(un(f, d, E + 1));
      }
    return g;
  }
  const s = e.flatMap(
    (c) => c.groups.flatMap(
      (p) => p.cells.flatMap((g) => {
        const i = Kn(g);
        return i === null ? [] : [i];
      })
    )
  );
  s.sort((c, p) => c.start - p.start || c.end - p.end);
  const l = n === "duration", o = (c) => {
    let p = 0, g = null;
    for (const i of s) {
      if (i.start >= c) break;
      if (l && g !== null && i.start > g) {
        const f = Math.min(i.start, c);
        f > g && (p += f - g);
      }
      g = g === null ? i.end : Math.max(g, i.end);
    }
    return p;
  }, r = [];
  for (const c of e)
    for (const p of t(c)) {
      const g = p.startT, i = Math.max(Ss(p), g + 1), f = o(g), y = o(i);
      r.push(
        un(
          p,
          g - f,
          Math.max(g - f + 1, i - y)
        )
      );
    }
  return r;
}
function un(e, n, t) {
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
  const s = Wn(e, t);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= n.end && l.end >= n.start).map((l) => l.index)
  );
}
Xl();
const ot = window.QwenPaw.host, V = ot.React, { useEffect: Je, useMemo: Tt, useRef: Qe, useState: $e } = V, { Tooltip: Vn } = ot.antd, _t = 3, Yl = 4, Zl = 0.08, eo = 0.025, to = 32, no = 0.5;
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
function At(e, n) {
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
  const o = At(
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
  return /* @__PURE__ */ V.createElement(
    Vn,
    {
      title: /* @__PURE__ */ V.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: no,
      ...s
    },
    t
  );
}
function pn() {
  return /* @__PURE__ */ V.createElement("div", { className: fe.labels, "aria-hidden": "true" }, /* @__PURE__ */ V.createElement("span", null, "Input"), /* @__PURE__ */ V.createElement("span", null, "Model"), /* @__PURE__ */ V.createElement("span", null, "Tools"));
}
function fn({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ V.createElement(
    Gn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ V.createElement(
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
const ro = V.memo(function({
  turns: n,
  mode: t,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: r = null,
  searchMatchIndexes: c = null,
  onRangeChange: p,
  onRecordSelect: g,
  onRecordFocus: i,
  onSkillSpanSelect: f
}) {
  const y = typeof ot.useTheme == "function" ? ot.useTheme() : void 0, d = Tt(
    () => Wn(n, t),
    [t, n]
  ), E = Tt(
    () => Jl(n, t),
    [t, n]
  ), A = Tt(
    () => new Map(
      n.flatMap(
        (u) => u.groups.flatMap(
          (x) => x.cells.map(
            (T) => [T.index, so(T)]
          )
        )
      )
    ),
    [n]
  ), C = Qe(null), b = Qe(null), k = Qe(null), M = Qe(null), [$, P] = $e(null), [Y, O] = $e(null), [R, ee] = $e(null), [K, ne] = $e(!1), [de, oe] = $e(!1), [le, m] = $e(null), [v, S] = $e(!1);
  Je(() => {
    d !== null && s !== null && (s.end < d.start || s.start > d.end) && p(null);
  }, [d, p, s]), Je(() => {
    d !== null && (S(!1), m(
      (u) => u !== null && (u.end < d.start || u.start > d.end) ? null : u
    ));
  }, [d]), Je(() => {
    if (d === null || r === null) return;
    const u = d.spans.find(
      (x) => x.index === r
    );
    u !== void 0 && (S(!0), m((x) => {
      if (x === null || u.end > x.start && u.start < x.end)
        return x;
      const T = Math.max(1, x.end - x.start), U = u.end <= x.start ? u.start : u.end - T, X = Math.min(
        Math.max(U, d.start),
        Math.max(d.start, d.end - T)
      );
      return X === x.start ? x : { start: X, end: X + T };
    }));
  }, [d, r]);
  const w = Math.max(1, ((d == null ? void 0 : d.end) ?? 0) - ((d == null ? void 0 : d.start) ?? 0)), z = Math.min(
    w,
    Math.max(1, ((le == null ? void 0 : le.end) ?? 0) - ((le == null ? void 0 : le.start) ?? 0))
  ), B = d === null || le === null ? (d == null ? void 0 : d.start) ?? 0 : Math.min(
    Math.max(le.start, d.start),
    d.end - z
  ), L = le === null ? w : z, D = le === null ? (d == null ? void 0 : d.start) ?? 0 : B, G = l && d !== null && D === d.start, j = o === void 0 || K ? void 0 : () => {
    ne(!0), o().finally(() => {
      ne(!1);
    });
  }, J = d === null ? void 0 : {
    "--trajectory-domain-left": `${-(D - d.start) / L * 100}%`,
    "--trajectory-domain-width": `${w / L * 100}%`
  }, re = d === null || s === null ? null : hn(
    s,
    D,
    L,
    d.start,
    d.end
  ), Se = (d === null || $ === null ? null : hn(
    $,
    D,
    L,
    d.start,
    d.end
  )) ?? re, ae = $ ?? s;
  if (Je(() => {
    const u = k.current;
    if (u === null) return;
    const x = (T) => {
      T.preventDefault();
      const U = M.current;
      if (U === null || d === null) return;
      S(!1);
      const X = U.getBoundingClientRect(), Q = It(
        (T.clientX - X.left) / Math.max(1, X.width)
      ), q = Math.min(
        w,
        Math.max(
          Math.min(
            t === "sequence" ? Yl : 20,
            w
          ),
          L * Math.exp(T.deltaY * 15e-4)
        )
      );
      if (q >= w * 0.999) {
        m(null);
        return;
      }
      const se = D + Q * L, he = Math.min(
        Math.max(se - Q * q, d.start),
        d.end - q
      );
      m({ start: he, end: he + q });
    };
    return u.addEventListener("wheel", x, { passive: !1 }), () => {
      u.removeEventListener("wheel", x);
    };
  }, [L, D, w, t, d]), d === null)
    return /* @__PURE__ */ V.createElement(
      "section",
      {
        ref: k,
        className: fe.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ V.createElement("div", { className: fe.plot }, /* @__PURE__ */ V.createElement(pn, null), /* @__PURE__ */ V.createElement("div", { className: fe.track }, /* @__PURE__ */ V.createElement("span", { className: fe.empty }, "No timing data"), l && /* @__PURE__ */ V.createElement(
        fn,
        {
          loading: K,
          onHover: () => {
            O(null);
          },
          onLoad: j
        }
      )))
    );
  const Ee = Math.min(
    L,
    w / d.spans.length
  ), Te = (u) => {
    const x = u.currentTarget.getBoundingClientRect();
    return It((u.clientX - x.left) / Math.max(1, x.width));
  }, Re = (u) => {
    var X;
    const x = u.target instanceof HTMLElement ? u.target : null, T = (X = x == null ? void 0 : x.closest("[data-timeline-record-index]")) == null ? void 0 : X.dataset.timelineRecordIndex;
    if (T === void 0) return null;
    const U = Number(T);
    return Number.isFinite(U) ? U : null;
  }, ct = (u) => {
    p(u);
  }, dt = (u) => {
    if (u.button === 2) {
      b.current = {
        anchorClientX: u.clientX,
        anchorStart: D,
        moved: !1,
        pannable: le !== null,
        pointerId: u.pointerId
      }, le !== null && S(!1), oe(!0), typeof u.currentTarget.setPointerCapture == "function" && u.currentTarget.setPointerCapture(u.pointerId);
      return;
    }
    if (u.button !== 0) return;
    const x = Te(u), T = D + x * L, U = Re(u);
    O({ fraction: x, recordIndex: U }), C.current = {
      pointerId: u.pointerId,
      anchorTime: T,
      anchorClientX: u.clientX,
      recordIndex: U
    }, typeof u.currentTarget.setPointerCapture == "function" && u.currentTarget.setPointerCapture(u.pointerId), P({ start: T, end: T });
  }, ut = (u) => {
    const x = u.currentTarget.getBoundingClientRect(), T = Te(u);
    O({ fraction: T, recordIndex: Re(u) });
    const U = b.current;
    if (U !== null && U.pointerId === u.pointerId) {
      if (Math.abs(u.clientX - U.anchorClientX) >= _t && (U.moved = !0), !U.pannable) return;
      const se = (u.clientX - U.anchorClientX) / Math.max(1, x.width), he = Math.min(
        Math.max(U.anchorStart - se * L, d.start),
        d.end - L
      );
      m({ start: he, end: he + L });
      return;
    }
    const X = C.current;
    if (X === null || X.pointerId !== u.pointerId) return;
    let Q = D;
    if (le !== null) {
      const se = u.clientX - x.left, he = Math.min(
        to,
        Math.max(1, x.width * Zl)
      ), ce = se < he ? -1 : se > x.width - he ? 1 : 0;
      if (ce !== 0) {
        const Le = ce < 0 ? he - se : se - (x.width - he), xe = It(Le / he), ke = D + ce * L * eo * Math.max(0.2, xe);
        Q = Math.min(
          Math.max(ke, d.start),
          d.end - L
        ), Q !== D && (S(!1), m({
          start: Q,
          end: Q + L
        }));
      }
    }
    const q = Q + T * L;
    P(At(X.anchorTime, q));
  }, Ve = (u) => {
    const x = b.current;
    if (x !== null && x.pointerId === u.pointerId) {
      const ce = x.moved || Math.abs(u.clientX - x.anchorClientX) >= _t;
      b.current = null, oe(!1), ce || p(null);
      return;
    }
    const T = C.current;
    if (T === null || T.pointerId !== u.pointerId) return;
    const U = Te(u), X = D + U * L, Q = At(T.anchorTime, X);
    O({ fraction: U, recordIndex: Re(u) }), C.current = null, P(null);
    const q = Math.abs(u.clientX - T.anchorClientX) < _t, se = q && T.recordIndex !== null ? d.spans.find((ce) => ce.index === T.recordIndex) : void 0;
    if (se !== void 0) {
      p(null), g == null || g(se.index);
      return;
    }
    const he = Q.end - Q.start < Ee ? io(
      q ? Q.start : (Q.start + Q.end) / 2,
      Ee,
      d.start,
      d.end
    ) : Q;
    if (ct(he), q) {
      const ce = Q.start, Le = d.spans.reduce((xe, ke) => {
        const Xe = ce < xe.start ? xe.start - ce : ce > xe.end ? ce - xe.end : 0;
        return (ce < ke.start ? ke.start - ce : ce > ke.end ? ce - ke.end : 0) < Xe ? ke : xe;
      });
      i == null || i(Le.index);
    }
  }, Ge = (u) => {
    u.key !== "Escape" || s === null || (u.preventDefault(), p(null));
  }, ht = () => {
    C.current = null, b.current = null, P(null), O(null), oe(!1);
  };
  return /* @__PURE__ */ V.createElement(
    "section",
    {
      ref: k,
      className: fe.root,
      "data-theme": y || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ V.createElement("div", { className: fe.plot }, /* @__PURE__ */ V.createElement(pn, null), /* @__PURE__ */ V.createElement(
      "div",
      {
        ref: M,
        className: fe.track,
        "data-panning": de || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: Ge,
        onPointerDown: dt,
        onPointerMove: ut,
        onPointerUp: Ve,
        onPointerCancel: ht,
        onPointerLeave: () => {
          C.current === null && b.current === null && O(null);
        },
        onDoubleClick: (u) => {
          u.preventDefault(), p(null);
        },
        onContextMenu: (u) => {
          u.preventDefault();
        }
      },
      G && /* @__PURE__ */ V.createElement(
        fn,
        {
          loading: K,
          onHover: () => {
            O(null);
          },
          onLoad: j
        }
      ),
      Y !== null && Y.recordIndex === null && $ === null && /* @__PURE__ */ V.createElement(
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
      Se !== null && /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement(
        "div",
        {
          className: fe.selection,
          "data-dragging": $ === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${Se.start * 100}%`,
            "--trajectory-selection-width": `${(Se.end - Se.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ V.createElement(
        "div",
        {
          className: fe.selectionEdges,
          "data-dragging": $ === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${Se.start * 100}%`,
            "--trajectory-selection-width": `${(Se.end - Se.start) * 100}%`
          }
        }
      )),
      E !== null && d !== null && /* @__PURE__ */ V.createElement(
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
        E.map((u) => {
          const x = (u.start - d.start) / w, T = Math.max(
            (u.end - u.start) / w,
            4e-3
          ), U = ie(), X = `${u.bypass ? "⚠ " : ""}${u.skill} · ${u.trigger}${u.open ? ` · ${h(U, "spanOpen")}` : ""}`, Q = R === u.spanId, q = T > 0.14 && !u.bypass;
          return /* @__PURE__ */ V.createElement(Vn, { title: X, key: u.spanId }, /* @__PURE__ */ V.createElement(
            "span",
            {
              onPointerDown: (se) => {
                se.stopPropagation();
              },
              onClick: f ? (se) => {
                se.stopPropagation(), f(u.spanId);
              } : void 0,
              onMouseEnter: () => ee(u.spanId),
              onMouseLeave: () => ee(
                (se) => se === u.spanId ? null : se
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, x) * 100}%`,
                width: `${T * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${u.hue}, 65%, ${Q ? 62 : 55}%, ${Q ? 0.85 : 0.55})`,
                border: u.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${u.hue}, 55%, 45%, 0.8)`,
                pointerEvents: f ? "auto" : "none",
                cursor: f ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            q ? /* @__PURE__ */ V.createElement(
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
              u.skill
            ) : null
          ));
        })
      ),
      /* @__PURE__ */ V.createElement(
        "div",
        {
          className: fe.turnBoundaries,
          "data-animate-viewport": v || void 0,
          "aria-hidden": "true",
          style: J
        },
        d.turnBoundaries.filter(
          (u) => u.time > d.start && u.time >= D && u.time <= D + L
        ).map((u) => /* @__PURE__ */ V.createElement(
          "span",
          {
            className: fe.turnBoundary,
            "data-turn": u.turn,
            key: u.turn,
            style: {
              "--trajectory-turn-left": `${(u.time - d.start) / w * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ V.createElement(
        "div",
        {
          className: fe.lanes,
          "data-animate-viewport": v || void 0,
          "data-timeline-domain": !0,
          style: J
        },
        d.spans.filter(
          (u) => u.index === r || u.end >= D && u.start <= D + L
        ).map((u) => {
          const x = (u.start - d.start) / w, U = (u.end - u.start) / w * 100, X = A.get(u.index), Q = X == null ? void 0 : X.ttftMs, q = X == null ? void 0 : X.decodingMs, se = Q === void 0 || q === void 0 || Q + q <= 0 ? null : Q / (Q + q);
          return /* @__PURE__ */ V.createElement(
            Gn,
            {
              key: u.index,
              label: oo(u.kind, X),
              placement: "bottom"
            },
            /* @__PURE__ */ V.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: fe.span,
                "data-timeline-span": u.kind,
                "data-timeline-record-index": u.index,
                "data-assistant-timing": se === null ? void 0 : "true",
                "data-error": u.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": u.index === r || void 0,
                "data-hovered": (Y == null ? void 0 : Y.recordIndex) === u.index || void 0,
                "data-search-match": c === null ? void 0 : c.has(u.index) ? "true" : "false",
                "data-selected": ae === null ? void 0 : u.start <= ae.end && u.end >= ae.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${x * 100}%`,
                  "--trajectory-span-width": `${U}%`,
                  "--trajectory-span-gap": `min(${U * 0.08}%, 1px)`,
                  "--trajectory-span-lane": u.lane,
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
  onToggleCollapseAll: p,
  callsCollapsed: g,
  onToggleCallsCollapsed: i
}) {
  const f = ie();
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
    /* @__PURE__ */ te.createElement(mn, { title: h(f, "projectionHint") }, /* @__PURE__ */ te.createElement(
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
        placeholder: h(f, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (y) => s(y.target.value)
      }
    ),
    c && /* @__PURE__ */ te.createElement(
      mn,
      {
        title: r ? h(f, "expandAll") : h(f, "collapseAll")
      },
      /* @__PURE__ */ te.createElement(
        ao,
        {
          size: "small",
          type: "text",
          icon: r ? /* @__PURE__ */ te.createElement(fo, null) : /* @__PURE__ */ te.createElement(po, null),
          onClick: p
        }
      )
    ),
    /* @__PURE__ */ te.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ te.createElement(
      uo,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ te.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ te.createElement("div", null, /* @__PURE__ */ te.createElement("strong", null, "📚"), " ", h(f, "legendLoad")), /* @__PURE__ */ te.createElement("div", null, /* @__PURE__ */ te.createElement("strong", null, "⚡"), " ", h(f, "legendResource")), /* @__PURE__ */ te.createElement("div", null, /* @__PURE__ */ te.createElement("strong", null, "∈"), " ", h(f, "legendGuided")), /* @__PURE__ */ te.createElement("div", null, /* @__PURE__ */ te.createElement("strong", null, h(f, "legendStripTitle")), " ", h(f, "legendStrip")), /* @__PURE__ */ te.createElement("div", null, /* @__PURE__ */ te.createElement("strong", null, h(f, "legendBandTitle")), " ", h(f, "legendBand")))
      },
      /* @__PURE__ */ te.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ te.createElement(mo, null), " ", h(f, "legendTitle"))
    ), /* @__PURE__ */ te.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ te.createElement(go, null),
      " ",
      h(f, "refresh")
    ))
  );
}
const at = window.QwenPaw.host, N = at.React, { useCallback: gn, useEffect: Ye, useMemo: we, useRef: So, useState: me } = N, {
  Button: Ze,
  Empty: yn,
  Popconfirm: Eo,
  Popover: xo,
  Space: bo,
  Spin: Xn,
  Switch: ko,
  Tag: wo,
  Tooltip: To,
  message: Ke
} = at.antd, { DeleteOutlined: _o, DownloadOutlined: Io, SettingOutlined: vn } = at.antdIcons, { Text: Me } = at.antd.Typography;
function Sn({
  config: e,
  onChange: n,
  children: t
}) {
  const s = ie(), l = (r, c, p) => /* @__PURE__ */ N.createElement(
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
    /* @__PURE__ */ N.createElement(Me, { style: { fontSize: 13 } }, r),
    /* @__PURE__ */ N.createElement(
      ko,
      {
        size: "small",
        checked: !!c,
        onChange: (g) => n({ [p]: g })
      }
    )
  ), o = /* @__PURE__ */ N.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ N.createElement(Me, { strong: !0, style: { fontSize: 13 } }, h(s, "settings")), /* @__PURE__ */ N.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(h(s, "enabled"), e.enabled, "enabled"),
    l(h(s, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      h(s, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      h(s, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ N.createElement(Xn, { size: "small" })));
  return /* @__PURE__ */ N.createElement(xo, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function Mo({
  sessionId: e,
  summary: n,
  locale: t,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  const [o, r] = me(null), [c, p] = me(!1), [g, i] = me(!1), [f, y] = me(""), [d, E] = me("sequence"), [A, C] = me(null), [b, k] = me(null), [M, $] = me(null), [P, Y] = me(null), [O, R] = me(
    /* @__PURE__ */ new Set()
  ), [ee, K] = me(!1), [ne, de] = me(null), [oe, le] = me(null), [m, v] = me(null), [S, w] = me(null), z = So(null);
  z.current = e, Ye(() => {
    ls().then(de).catch(() => de(null));
  }, []);
  const B = gn(async (u, x) => {
    x || p(!0);
    try {
      const T = await ss(u, {
        beforeSeq: x,
        limit: 200
      });
      w(null), r((U) => x && U ? {
        ...T,
        events: [...T.events, ...U.events]
      } : T);
    } catch (T) {
      w({
        message: String(T.message),
        status: T instanceof zn ? T.status : null
      });
    } finally {
      x || p(!1);
    }
  }, []), L = gn(async (u) => {
    try {
      const x = await ns(u);
      v(x), le({
        sessionId: u,
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
    e ? (C(null), k(null), $(null), R(/* @__PURE__ */ new Set()), y(""), B(e), L(e)) : (r(null), v(null), le(null));
  }, [e, B, L]);
  const D = we(
    () => o ? Wl(o.events) : [],
    [o]
  ), { initial: G, turns: j } = we(
    () => Vl(D),
    [D]
  ), J = we(
    () => G ? [G, ...an(j)] : an(j),
    [G, j]
  ), re = we(
    () => j.some((u) => u.status === "running"),
    [j]
  );
  Ye(() => {
    if (!e || !re) return;
    const u = setInterval(() => {
      document.visibilityState === "visible" && z.current && B(z.current);
    }, 5e3);
    return () => clearInterval(u);
  }, [e, re, B]);
  const ge = we(
    () => A === null ? null : Ql(j, A, d),
    [A, j, d]
  ), Se = we(() => {
    const u = f.trim().toLowerCase();
    return u ? new Set(
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
`).toLowerCase().includes(u)
      ).map((x) => x.index)
    ) : null;
  }, [f, J]), ae = we(
    () => b === null ? null : J.find((u) => u.index === b) ?? null,
    [J, b]
  ), Ee = we(() => {
    var Bt, Ft;
    if (M === null) return null;
    const u = j.find((F) => F.turn === M);
    if (!u) return null;
    const x = ((Bt = u.groups[0]) == null ? void 0 : Bt.cells) ?? [], T = x.filter((F) => F.kind === "message"), U = x.filter((F) => F.kind === "tool"), X = [
      ...new Set(
        T.map((F) => F.model).filter((F) => !!F)
      )
    ], Q = [
      ...new Set(
        T.map((F) => F.provider).filter((F) => !!F)
      )
    ];
    let q = 0, se = 0, he = 0, ce = 0, Le = 0, xe = null, ke = 0;
    const Xe = [];
    for (const F of x)
      F.usage && (q += F.usage.input_tokens ?? 0, se += F.usage.output_tokens ?? 0, he += F.usage.cache_input_tokens ?? 0, ce += F.usage.cache_creation_input_tokens ?? 0, Le += F.usage.reasoning_tokens ?? 0), F.timing && (xe = xe === null ? F.timing.ttft_ms : Math.min(xe, F.timing.ttft_ms), ke = (ke ?? 0) + F.timing.decode_ms), F.isError && Xe.push(F.toolError ?? F.text ?? "error");
    const ze = x.find((F) => F.kind === "user"), qn = (Ft = [...T].reverse().find((F) => F.options)) == null ? void 0 : Ft.options, pt = [...T].reverse().find((F) => F.outputText);
    let Dt;
    const jt = T.filter((F) => F.messagesMeta);
    if (jt.length > 0) {
      const F = {};
      let Ne = 0, mt = 0;
      for (const Qn of jt) {
        const gt = Qn.messagesMeta;
        for (const [Ht, Yn] of Object.entries(gt.charsByRole))
          F[Ht] = (F[Ht] ?? 0) + Yn;
        Ne += gt.totalChars, mt = Math.max(mt, gt.maxToolChars);
      }
      Dt = { charsByRole: F, totalChars: Ne, maxToolChars: mt };
    }
    const ft = j.findIndex((F) => F.turn === M), Pt = ft > 0 ? j[ft - 1] : null;
    let Be = null;
    if (Pt) {
      Be = 0;
      for (const F of Pt.groups)
        for (const Ne of F.cells)
          Ne.kind === "message" && Ne.usage && (Be += Ne.usage.input_tokens ?? 0);
    }
    const Jn = Be === null && ft !== 0 ? void 0 : {
      prevInputTokens: Be,
      deltaTokens: q - (Be ?? 0)
    };
    return {
      turn: M,
      status: u.status,
      durationMs: u.durationMs,
      startedAt: (ze == null ? void 0 : ze.startedAt) ?? null,
      query: (ze == null ? void 0 : ze.text) ?? "",
      llmCalls: T.length,
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
  }, [M, j, oe, e]), Te = !!(o && o.events.length > 0 && o.events[0].seq > 1), Re = async (u) => {
    try {
      de(await os(u));
    } catch (x) {
      Ke.error(String(x.message));
    }
  }, ct = we(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), dt = we(() => {
    if (!m) return null;
    const u = [
      `${m.runs} ${h(t, "statRounds")} · ${m.llm_calls} ${h(t, "statSteps")}`,
      `LLM ${ve(m.llm_ms_total / 1e3)} · ${h(
        t,
        "toolCalls"
      )} ${ve(m.tool_ms_total / 1e3)}`,
      `${h(t, "statTtftAvg")} ${m.ttft_ms_avg === null ? "-" : ve(m.ttft_ms_avg / 1e3)} · ${Rt(
        m.output_tokens,
        m.decode_ms_total / 1e3
      )}`
    ];
    if (m.cache_read_tokens > 0 || m.cache_write_tokens > 0) {
      const x = m.cache_read_tokens + m.input_tokens, T = x > 0 ? Math.round(m.cache_read_tokens / x * 100) : 0;
      u.push(`${h(t, "statCacheHit")} ${T}%`);
    }
    if (u.push(
      `${h(t, "statInput")} ${Z(
        m.input_tokens
      )} tok · ${h(t, "statOutput")} ${Z(
        m.output_tokens
      )} tok`
    ), n && u.push(Ct(n.size_bytes)), m.skills) {
      const x = Object.entries(m.skills).sort((T, U) => U[1] - T[1]).map(([T, U]) => `${T} ×${U}`).join(" · ");
      x && u.push(`📚 ${x}`);
    }
    if (G != null && G.prompt) {
      const x = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
      for (const X of j)
        for (const Q of X.groups)
          for (const q of Q.cells)
            q.skillName ? T.add(q.skillName) : q.inSkill && x.add(q.inSkill);
      const U = [...x].filter((X) => !T.has(X));
      U.length > 0 && u.push(
        `⚡ ${h(t, "skillBypassStrip")}: ${U.join(" · ")}`
      );
    }
    return u.join(" | ");
  }, [m, n, t, j, G]), ut = () => {
    k(null), $(null);
  };
  Ye(() => {
    b !== null && Y(null);
  }, [b]);
  const Ve = we(
    () => P === null ? null : j.flatMap((u) => u.skillSpans ?? []).find((u) => u.id === P) ?? null,
    [P, j]
  ), Ge = (S == null ? void 0 : S.status) === 404, ht = ae !== null || Ee !== null;
  return /* @__PURE__ */ N.createElement(
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
    /* @__PURE__ */ N.createElement(
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
      e ? /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ N.createElement(
          Me,
          {
            strong: !0,
            ellipsis: {
              tooltip: (n == null ? void 0 : n.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (n == null ? void 0 : n.title) || (n == null ? void 0 : n.agent_id) || On(e)
        ),
        /* @__PURE__ */ N.createElement(
          wo,
          {
            color: Ln[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Nn((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ N.createElement(Me, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ N.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ N.createElement(bo, null, /* @__PURE__ */ N.createElement(Sn, { config: ne, onChange: Re }, /* @__PURE__ */ N.createElement(Ze, { size: "small", icon: /* @__PURE__ */ N.createElement(vn, null) })), /* @__PURE__ */ N.createElement(To, { title: h(t, "export") }, /* @__PURE__ */ N.createElement(
          Ze,
          {
            size: "small",
            icon: /* @__PURE__ */ N.createElement(Io, null),
            onClick: () => {
              is(e).then(() => Ke.success(h(t, "exported"))).catch(
                (u) => Ke.error(String(u.message))
              );
            }
          },
          h(t, "export")
        )), /* @__PURE__ */ N.createElement(
          Eo,
          {
            title: h(t, "deleteConfirm"),
            onConfirm: () => {
              rs(e).then(() => {
                Ke.success(h(t, "deleted")), l == null || l();
              }).catch(
                (u) => Ke.error(String(u.message))
              );
            }
          },
          /* @__PURE__ */ N.createElement(Ze, { size: "small", danger: !0, icon: /* @__PURE__ */ N.createElement(_o, null) }, h(t, "delete"))
        )))
      ), /* @__PURE__ */ N.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ N.createElement(
          Me,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          dt ?? // Transient line while the stats endpoint responds.
          (n ? `${n.runs} ${h(t, "statRounds")} · ${n.llm_calls} ${h(t, "statSteps")} · ${Rn(
            n.total_tokens
          )} ${h(t, "tokens")} · ${Ct(
            n.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ N.createElement(
          Me,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                h(t, "copySessionId"),
                h(t, "copiedSessionId")
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
      )) : /* @__PURE__ */ N.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ N.createElement(Me, { type: "secondary", style: { fontSize: 13 } }, h(t, "selectSession")),
        /* @__PURE__ */ N.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ N.createElement(Sn, { config: ne, onChange: Re }, /* @__PURE__ */ N.createElement(Ze, { size: "small", icon: /* @__PURE__ */ N.createElement(vn, null) })))
      )
    ),
    S && !Ge && /* @__PURE__ */ N.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ N.createElement(Me, { type: "danger", style: { fontSize: 12 } }, `${h(t, "loadFailed")}: ${S.message}`)),
    /* @__PURE__ */ N.createElement(
      vo,
      {
        mode: d,
        onModeChange: E,
        search: f,
        onSearchChange: y,
        onRefresh: () => {
          e && (B(e), L(e)), l == null || l();
        },
        modeOptions: ct,
        allCollapsed: j.length > 0 && j.every((u) => O.has(u.turn ?? -1)),
        hasRequests: j.some((u) => u.turn !== null),
        callsCollapsed: ee,
        onToggleCallsCollapsed: () => K((u) => !u),
        onToggleCollapseAll: () => {
          R((u) => j.some(
            (T) => T.turn !== null && !u.has(T.turn)
          ) ? new Set(
            j.map((T) => T.turn).filter((T) => T !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ N.createElement(
      ro,
      {
        turns: j,
        mode: d,
        range: A,
        hasEarlierRecords: Te,
        onLoadEarlier: async () => {
          var u;
          return !o || o.events.length === 0 ? !1 : (await B(e, (u = o.events[0]) == null ? void 0 : u.seq), !0);
        },
        selectedIndex: b,
        searchMatchIndexes: Se,
        onRangeChange: C,
        onRecordSelect: k,
        onRecordFocus: k,
        onSkillSpanSelect: Y
      }
    ),
    c && !o ? /* @__PURE__ */ N.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ N.createElement(Xn, null)) : o ? /* @__PURE__ */ N.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ N.createElement(
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
      /* @__PURE__ */ N.createElement(
        Bl,
        {
          turns: j,
          selectedIndex: b,
          selectedTurn: M,
          collapsedTurns: O,
          focusIndexes: ge,
          searchMatchIndexes: Se,
          onSelectedIndexChange: (u) => {
            if (u === b) {
              k(null);
              return;
            }
            k(u), $(null);
          },
          onSkillSpanOpen: (u, x) => {
            var Q;
            const T = j.flatMap((q) => q.skillSpans ?? []), X = (x !== null ? (((Q = j.find((q) => q.turn === x)) == null ? void 0 : Q.skillSpans) ?? []).find((q) => q.skill === u) : void 0) ?? T.find((q) => q.skill === u);
            X && Y(X.id);
          },
          onSelectedTurnChange: (u) => {
            $(u), k(null);
          },
          callsCollapsed: ee,
          onToggleTurn: (u) => {
            R((x) => {
              const T = new Set(x);
              return T.has(u) ? T.delete(u) : T.add(u), T;
            });
          },
          hasOlderRecords: Te,
          loadingOlder: g,
          onLoadOlder: () => {
            var u;
            !o || o.events.length === 0 || (i(!0), B(
              e,
              (u = o.events[0]) == null ? void 0 : u.seq
            ).finally(() => i(!1)));
          },
          emptyText: h(t, "noSessions"),
          initialRecord: G
        }
      )
    ), Ve ? /* @__PURE__ */ N.createElement(
      qs,
      {
        span: Ve,
        records: J,
        onJumpRecord: (u) => {
          Y(null), k(u);
        },
        onClose: () => Y(null)
      }
    ) : ht ? /* @__PURE__ */ N.createElement(
      Ks,
      {
        record: ae,
        request: Ee,
        onJumpSession: s,
        onSelectTurn: (u) => {
          $(u), k(null);
        },
        onClose: ut
      }
    ) : null) : /* @__PURE__ */ N.createElement(
      yn,
      {
        image: yn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: Ge && e ? h(t, "noTraceForSession") : h(t, "selectSession")
      }
    )
  );
}
const Pe = window.QwenPaw.host, H = Pe.React, { useCallback: En, useEffect: Mt, useMemo: et, useState: Ie } = H, { Button: xn, Empty: bn, Input: Co, Spin: zo, Tag: kn, Tooltip: wn } = Pe.antd, {
  CaretRightOutlined: $o,
  MenuFoldOutlined: Ao,
  MenuUnfoldOutlined: Oo,
  SearchOutlined: Ro
} = Pe.antdIcons, { Text: We } = Pe.antd.Typography;
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
  return /* @__PURE__ */ H.createElement(H.Fragment, null, e.map(([p, g]) => {
    const i = c && !s && n.has(p);
    return /* @__PURE__ */ H.createElement("div", { key: p }, c && /* @__PURE__ */ H.createElement(
      "div",
      {
        onClick: () => t(p),
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
      /* @__PURE__ */ H.createElement(
        $o,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: i ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ H.createElement(We, { strong: !0, style: { fontSize: 12 } }, p),
      /* @__PURE__ */ H.createElement(We, { type: "secondary", style: { fontSize: 11 } }, g.length)
    ), !i && g.map((f) => {
      const y = f.session_id === l;
      return /* @__PURE__ */ H.createElement(
        "div",
        {
          key: f.session_id,
          onClick: () => o(f.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: y ? "rgba(22,119,255,0.10)" : "transparent",
            border: y ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ H.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ H.createElement(
            We,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${f.title ? `${f.title}
` : ""}${f.session_id}`
              }
            },
            f.title || f.agent_id || On(f.session_id)
          ),
          c ? null : f.agent_id ? /* @__PURE__ */ H.createElement(
            kn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            f.agent_id
          ) : null,
          /* @__PURE__ */ H.createElement(
            kn,
            {
              color: Ln[f.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Nn(f.status)
          )
        ),
        /* @__PURE__ */ H.createElement(
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
          /* @__PURE__ */ H.createElement("span", null, f.channel || "-"),
          /* @__PURE__ */ H.createElement("span", null, f.runs, " ", h(r, "runs")),
          /* @__PURE__ */ H.createElement("span", null, Rn(f.total_tokens), " tok"),
          f.skills ? /* @__PURE__ */ H.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(f.skills).sort((d, E) => E[1] - d[1]).map(([d, E]) => `${d} ×${E}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(f.skills).sort((d, E) => E[1] - d[1]).slice(0, 2).map(([d]) => d).join(" ")
          ) : null,
          /* @__PURE__ */ H.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Ms(f.last_event_t)
            },
            Cs(f.last_event_t)
          )
        )
      );
    }));
  }));
}
function No() {
  const e = typeof Pe.useLocale == "function" ? Pe.useLocale() : void 0, n = et(
    () => Ot(e ?? ie()),
    [e]
  ), [t, s] = Ie(null), [l, o] = Ie(!1), [r, c] = Ie(
    /* @__PURE__ */ new Set()
  ), [p, g] = Ie(!1), [i, f] = Ie(!1), [y, d] = Ie(null), [E, A] = Ie(""), [C, b] = Ie(null), k = En(async () => {
    try {
      const O = await Ut({ limit: 100, offset: 0 });
      s(O.sessions), o(O.has_more), b(null);
    } catch (O) {
      b(String(O.message));
    }
  }, []), M = En(async () => {
    f(!0);
    try {
      const O = await Ut({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      s((R) => {
        const ee = R ?? [];
        return [
          ...ee,
          ...O.sessions.filter(
            (K) => !ee.some((ne) => ne.session_id === K.session_id)
          )
        ];
      }), o(O.has_more);
    } catch (O) {
      b(String(O.message));
    } finally {
      f(!1);
    }
  }, [t]);
  Mt(() => {
    k();
    try {
      const O = new URLSearchParams(window.location.search).get("session");
      O && $n(O).then((R) => {
        d(R ?? O);
      });
    } catch {
    }
  }, [k]), Mt(() => {
    try {
      const O = new URL(window.location.href);
      y ? O.searchParams.set("session", y) : O.searchParams.delete("session"), window.history.replaceState(window.history.state, "", O);
    } catch {
    }
  }, [y]), Mt(() => {
    const O = setInterval(() => {
      document.visibilityState === "visible" && k();
    }, 15e3);
    return () => clearInterval(O);
  }, [k]);
  const $ = et(
    () => (t == null ? void 0 : t.find((O) => O.session_id === y)) ?? null,
    [t, y]
  ), P = et(() => {
    if (!t) return [];
    const O = E.trim().toLowerCase();
    return O ? t.filter(
      (R) => [R.session_id, R.title ?? "", R.agent_id, R.channel].join(" ").toLowerCase().includes(O)
    ) : t;
  }, [t, E]), Y = et(() => {
    const O = /* @__PURE__ */ new Map();
    for (const R of P) {
      const ee = R.agent_id || "(unknown)", K = O.get(ee);
      K ? K.push(R) : O.set(ee, [R]);
    }
    return [...O.entries()];
  }, [P]);
  return /* @__PURE__ */ H.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, p ? /* @__PURE__ */ H.createElement(
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
    /* @__PURE__ */ H.createElement(wn, { title: h(n, "expandSidebar"), placement: "right" }, /* @__PURE__ */ H.createElement(
      xn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ H.createElement(Oo, null),
        onClick: () => g(!1)
      }
    ))
  ) : /* @__PURE__ */ H.createElement(
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
    /* @__PURE__ */ H.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ H.createElement(
        Co,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ H.createElement(Ro, null),
          placeholder: h(n, "searchPlaceholder"),
          value: E,
          style: { flex: 1, minWidth: 0 },
          onChange: (O) => A(O.target.value)
        }
      ),
      /* @__PURE__ */ H.createElement(wn, { title: h(n, "collapseSidebar") }, /* @__PURE__ */ H.createElement(
        xn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ H.createElement(Ao, null),
          onClick: () => g(!0)
        }
      ))
    ),
    C ? /* @__PURE__ */ H.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ H.createElement(We, { type: "danger", style: { fontSize: 12 } }, `${h(n, "loadFailed")}: ${C}`)) : null,
    /* @__PURE__ */ H.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ H.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ H.createElement(zo, null)) : P.length === 0 ? /* @__PURE__ */ H.createElement(
      bn,
      {
        image: bn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ H.createElement("span", { style: { fontSize: 12 } }, h(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ H.createElement(
        We,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        h(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ H.createElement(
      Lo,
      {
        groups: Y,
        collapsedAgents: r,
        onToggleAgent: (O) => {
          c((R) => {
            const ee = new Set(R);
            return ee.has(O) ? ee.delete(O) : ee.add(O), ee;
          });
        },
        searching: !!E.trim(),
        selected: y,
        onSelect: d,
        locale: n
      }
    ), t !== null && l && !E.trim() && /* @__PURE__ */ H.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ H.createElement(
      "a",
      {
        onClick: () => void M(),
        style: { fontSize: 12 }
      },
      i ? "…" : `⋯ ${h(n, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ H.createElement(
    Mo,
    {
      sessionId: y,
      summary: $,
      locale: n,
      onJumpSession: d,
      onRefreshSessions: () => void k()
    }
  ));
}
const Do = window.QwenPaw.host.React;
var Tn, _n;
(_n = (Tn = window.QwenPaw).registerRoutes) == null || _n.call(Tn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: No,
    label: h(ie(), "routeLabel"),
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

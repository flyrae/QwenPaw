var Zn = Object.defineProperty;
var es = (e, n, t) => n in e ? Zn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Et = (e, n, t) => es(e, typeof n != "symbol" ? n + "" : n, t);
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
    apiPayloadNote: "OpenAI SDK 层拦截的实际 API 消息（formatter 之后，含 role=tool 结果）",
    apiMsgCount: "API 消息数",
    apiMessages: "API 消息",
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
    inputCollapseText: "收起",
    requestTab: "请求",
    timing: "计时",
    generationOptions: "生成参数",
    wireParams: "线级参数（SDK 拦截）",
    callOptionsDigest: "调用参数（中间件）",
    toolCallsEmitted: "本次发起工具调用",
    ttftLabel: "首 token 延迟",
    decodeLabel: "生成耗时",
    startedAt: "开始时间",
    runViewHint: "查看该请求视图",
    reasoningShort: "推理"
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
    apiPayloadNote: "Actual API messages intercepted at the OpenAI SDK layer (post-formatter, includes role=tool results)",
    apiMsgCount: "API message count",
    apiMessages: "API messages",
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
    inputCollapseText: "collapse",
    requestTab: "Request",
    timing: "Timing",
    generationOptions: "Generation options",
    wireParams: "Wire params (SDK interception)",
    callOptionsDigest: "Call options (middleware)",
    toolCallsEmitted: "Tool calls emitted",
    ttftLabel: "TTFT",
    decodeLabel: "Decoding",
    startedAt: "Started",
    runViewHint: "Open this request's view",
    reasoningShort: "Reasoning"
  }
};
function Nt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function oe() {
  try {
    return Nt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function d(e, n) {
  return ts[e][n];
}
const Fe = window.QwenPaw.host;
async function ns(e) {
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function $n(e, n) {
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
async function Re(e, n) {
  const t = await $n(e, n), s = await t.text();
  let l = null;
  try {
    l = s ? JSON.parse(s) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const r = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new zn(
      t.status,
      typeof r == "string" ? r : `HTTP ${t.status}`
    );
  }
  return l;
}
async function Wt(e) {
  const n = new URLSearchParams();
  return n.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && n.set("offset", String(e.offset)), Re(
    `/agent-trace/sessions?${n.toString()}`
  );
}
async function ss(e, n) {
  const t = new URLSearchParams();
  n != null && n.beforeSeq && t.set("before_seq", String(n.beforeSeq)), t.set("limit", String(n == null ? void 0 : n.limit));
  const s = t.toString();
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function ls() {
  return Re("/agent-trace/config");
}
async function os(e) {
  return Re("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function is(e) {
  const n = await $n(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!n.ok) throw new Error(`HTTP ${n.status}`);
  const t = await n.blob(), s = URL.createObjectURL(t), l = document.createElement("a");
  l.href = s, l.download = `${e}.jsonl`, l.click(), URL.revokeObjectURL(s);
}
async function rs(e) {
  await Re(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function An(e) {
  if (!e) return null;
  try {
    return (await Re(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Oe = window.QwenPaw.host, nt = Oe.React, { useMemo: as } = nt, { Button: cs, Tooltip: us } = Oe.antd, { CompassOutlined: ds } = Oe.antdIcons;
function ps(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function hs() {
  const e = typeof Oe.useLocale == "function" ? Oe.useLocale() : void 0, n = as(
    () => Nt(e ?? oe()),
    [e]
  );
  return /* @__PURE__ */ nt.createElement(us, { title: d(n, "viewCurrentTrace") }, /* @__PURE__ */ nt.createElement(
    cs,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ nt.createElement(ds, null),
      "aria-label": d(n, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof Oe.getCurrentSessionId == "function" ? Oe.getCurrentSessionId() : null;
        An(t).then((s) => {
          window.location.href = ps(s ?? t);
        });
      }
    }
  ));
}
const Vt = 3e3;
function Gt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function fs(e, n) {
  const t = Gt(e ?? ""), s = Gt(n ?? "");
  if (t.length > Vt || s.length > Vt)
    return [
      ...t.map((f) => ({ kind: "del", text: f })),
      ...s.map((f) => ({ kind: "add", text: f }))
    ];
  const l = t.length, r = s.length, i = new Int32Array((l + 1) * (r + 1)), c = (f, v) => f * (r + 1) + v;
  for (let f = l - 1; f >= 0; f -= 1)
    for (let v = r - 1; v >= 0; v -= 1)
      i[c(f, v)] = t[f] === s[v] ? i[c(f + 1, v + 1)] + 1 : Math.max(i[c(f + 1, v)], i[c(f, v + 1)]);
  const h = [];
  let g = 0, o = 0;
  for (; g < l && o < r; )
    t[g] === s[o] ? (h.push({ kind: "same", text: t[g] }), g += 1, o += 1) : i[c(g + 1, o)] >= i[c(g, o + 1)] ? (h.push({ kind: "del", text: t[g] }), g += 1) : (h.push({ kind: "add", text: s[o] }), o += 1);
  for (; g < l; )
    h.push({ kind: "del", text: t[g] }), g += 1;
  for (; o < r; )
    h.push({ kind: "add", text: s[o] }), o += 1;
  return h;
}
function ms(e, n = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((r, i) => {
    if (r.kind !== "same")
      for (let c = Math.max(0, i - n); c <= Math.min(e.length - 1, i + n); c += 1)
        t[c] = !0;
  });
  const s = [];
  let l = 0;
  return e.forEach((r, i) => {
    t[i] ? (l > 0 && (s.push({ kind: "gap", count: l }), l = 0), s.push(r)) : l += 1;
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
    Et(this, "open", /* @__PURE__ */ new Map());
    Et(this, "finished", []);
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
    let r = this.open.get(t);
    return r || (r = this.openSpan(
      t,
      s === "path" ? "resource" : "load",
      n.seq,
      n.t
    ), s === "temporal" && (r.trigger = "resource")), r.attributedIndexes.push(n.recordIndex), r.evidences.push({
      kind: s,
      detail: l,
      recordIndex: n.recordIndex
    }), r.lastActivitySeq = n.seq, r.lastActivityT = n.t, r.id;
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
    const r = {
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
    return this.open.set(n, r), r;
  }
  closeAll(n, t, s) {
    for (const l of this.open.values())
      l.endSeq = n, l.endT = t, l.endKind = s, this.finished.push(l);
    this.open.clear();
  }
}
function Es(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function Ss(e) {
  const n = e.lastActivityT ?? e.endT;
  return n === null ? null : Math.max(0, n - e.startT);
}
const bs = /* @__PURE__ */ new Set([
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
function xs(e) {
  const n = /* @__PURE__ */ new Set();
  for (const t of e.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi
  ))
    n.add(t[1].toLowerCase());
  for (const t of e.matchAll(/```[a-z]*\n([\s\S]*?)```/g))
    for (const s of t[1].matchAll(/[\w./=\-]{6,}/g)) {
      const l = s[0].toLowerCase();
      bs.has(l) || n.add(l);
    }
  return [...n];
}
function ks(e, n) {
  const t = e.toLowerCase();
  let s = null, l = !1;
  for (const [r, i] of n)
    for (const c of i)
      if (t.includes(c)) {
        s === null ? s = { skill: r, feature: c } : s.skill !== r && (l = !0);
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
const Xt = 60;
function He(e) {
  return `${e.role}|${e.text ?? `#${e.chars ?? 0}`}`;
}
function qt(e) {
  return e.chars ?? (e.text ? e.text.length : 0);
}
function Jt(e) {
  const n = {};
  for (const t of e)
    n[t.role] = (n[t.role] ?? 0) + 1;
  return n;
}
function _s(e, n) {
  let t = 0;
  for (; t < e.length && t < n.length && He(e[t]) === He(n[t]); )
    t += 1;
  const s = e.slice(t), l = n.slice(t), r = /* @__PURE__ */ new Map();
  for (const u of l) {
    const b = He(u);
    r.set(b, (r.get(b) ?? 0) + 1);
  }
  const i = [], c = [], h = [];
  for (let u = 0; u < Math.min(t, Xt); u += 1)
    h.push({ status: "kept", role: e[u].role });
  for (const u of s) {
    const b = He(u), R = r.get(b) ?? 0;
    R > 0 ? (r.set(b, R - 1), h.push({ status: "kept", role: u.role })) : i.push(u);
  }
  for (const u of l) {
    const b = He(u), R = r.get(b) ?? 0;
    R > 0 && (r.set(b, R - 1), c.push(u));
  }
  const g = /* @__PURE__ */ new Map();
  for (const u of c) {
    const b = g.get(u.role);
    b ? b.push(u) : g.set(u.role, [u]);
  }
  const o = [], f = [];
  for (const u of i) {
    const b = g.get(u.role);
    b && b.length > 0 ? o.push([u, b.shift()]) : f.push(u);
  }
  const v = [...g.values()].flat();
  for (const [u, b] of o)
    h.push({
      status: "rewritten",
      role: u.role,
      oldText: u.text,
      newText: b.text
    });
  for (const u of f)
    h.push({
      status: "removed",
      role: u.role,
      oldText: u.text
    });
  for (const u of v)
    h.push({
      status: "added",
      role: u.role,
      newText: u.text
    });
  return {
    breakAt: t,
    beforeCount: e.length,
    afterCount: n.length,
    beforeChars: e.reduce((u, b) => u + qt(b), 0),
    afterChars: n.reduce((u, b) => u + qt(b), 0),
    beforeByRole: Jt(e),
    afterByRole: Jt(n),
    changes: h.slice(0, Xt)
  };
}
function Is(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function pe(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const n = e * 1e3;
  return n < 1e3 ? `${Math.round(n)}ms` : n < 6e4 ? `${(n / 1e3).toFixed(1)}s` : `${Math.floor(n / 6e4)}m${Math.round(n % 6e4 / 1e3)}s`;
}
function Y(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function lt(e, n) {
  return e === void 0 || !Number.isFinite(e) || n === null || n === void 0 || n <= 0 ? "-" : `${(e / n).toFixed(1)} tok/s`;
}
function _e(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ge(e) {
  if (!e) return null;
  const n = Date.parse(e);
  return Number.isFinite(n) ? n : null;
}
function Rn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function Cs(e) {
  if (!e) return "-";
  const n = new Date(e);
  return Number.isNaN(n.getTime()) ? e : n.toLocaleString();
}
function Ms(e) {
  if (!e) return "-";
  const n = Date.parse(e);
  if (!Number.isFinite(n)) return e;
  const t = Date.now() - n;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(n).toLocaleString();
}
function Ln(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function zt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Nn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function Pn(e) {
  return e || "unknown";
}
const at = window.QwenPaw.host, a = at.React, { useEffect: $s, useRef: zs, useState: Dn } = a, { Button: jn, Collapse: At, Empty: Qt, Tabs: Pt, Tag: ot } = at.antd, { Text: F } = at.antd.Typography, { CopyOutlined: As, CloseOutlined: Os } = at.antdIcons, Rs = 320, Ls = 720, qe = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Ns = 2e4;
function Ps(e) {
  if (e.length > Ns) return e;
  const n = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let s = 0, l, r = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > s && n.push(e.slice(s, l.index));
    const i = l[0];
    let c = "rgba(128,128,128,1)";
    l[1] !== void 0 ? c = qe.key : l[2] !== void 0 ? c = qe.string : l[3] !== void 0 ? c = qe.number : c = qe.literal, n.push(
      /* @__PURE__ */ a.createElement("span", { key: r++, style: { color: c } }, i)
    ), s = l.index + i.length;
  }
  return s < e.length && n.push(e.slice(s)), n;
}
function be({ value: e, json: n = !1 }) {
  const [t, s] = Dn(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const r = async () => {
    try {
      await navigator.clipboard.writeText(l), s(!0), window.setTimeout(() => s(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ a.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ a.createElement(
    "a",
    {
      onClick: () => void r(),
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
    n ? Ps(l) : l
  ));
}
function T({
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
    /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ a.createElement(
      F,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      n
    )
  );
}
function Ot({
  input: e,
  output: n,
  cacheRead: t,
  cacheWrite: s,
  reasoning: l
}) {
  const r = Math.max(0, e - t - s), i = Math.max(0, n - l);
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "Input", value: `${Y(e)} tok` }), t ? /* @__PURE__ */ a.createElement(T, { label: "Cached", value: `${Y(t)} tok` }) : null, s ? /* @__PURE__ */ a.createElement(
    T,
    {
      label: "Cache created",
      value: `${Y(s)} tok`
    }
  ) : null, t || s ? /* @__PURE__ */ a.createElement(T, { label: "Other", value: `${Y(r)} tok` }) : null, /* @__PURE__ */ a.createElement(T, { label: "Output", value: `${Y(n)} tok` }), l ? /* @__PURE__ */ a.createElement(T, { label: "Reasoning", value: `${Y(l)} tok` }) : null, l ? /* @__PURE__ */ a.createElement(T, { label: "Content", value: `${Y(i)} tok` }) : null);
}
function St({
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
const Yt = ["system", "user", "assistant", "tool"], Ds = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function js({
  request: e,
  locale: n
}) {
  const t = e.inputComposition;
  if (!t) return null;
  const s = [], l = new Set(Yt), r = [
    ...Yt.filter((c) => t.charsByRole[c]),
    ...Object.keys(t.charsByRole).filter(
      (c) => !l.has(c) && t.charsByRole[c]
    )
  ], i = t.totalChars || 1;
  for (const c of r) {
    const h = t.charsByRole[c], g = Ds[c] ?? "roleOther", o = Math.round(h / i * 100);
    s.push(
      /* @__PURE__ */ a.createElement(
        T,
        {
          key: c,
          label: d(n, g),
          value: `${Y(h)} ${d(n, "charUnit")} · ${o}%`
        }
      )
    );
  }
  return t.maxToolChars > 0 && s.push(
    /* @__PURE__ */ a.createElement(
      T,
      {
        key: "max-tool",
        label: d(n, "maxToolMsg"),
        value: `${Y(t.maxToolChars)} ${d(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(F, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, d(n, "inputComposition")), s, e.inputTokens > 0 ? /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(n, "realInputTokens"),
      value: `${Y(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ a.createElement(
    F,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    d(n, "compositionNote")
  ), e.growth ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? d(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${Y(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(n, "cacheAbsorbed"),
      value: `${Y(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Bs({
  request: e,
  onJumpRecord: n
}) {
  const t = oe(), [s, l] = a.useState("summary"), r = /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(t, "startedAt"),
      value: _e(e.startedAt)
    }
  ), /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(t, "duration"),
      value: pe(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(t, "ttftLabel"),
      value: pe(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(t, "decodeLabel"),
      value: pe(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(t, "throughput"),
      value: lt(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), i = /* @__PURE__ */ a.createElement(
    Ot,
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
      label: d(t, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ a.createElement(T, { label: "Query", value: Fs(e.query) }), e.providers.length > 0 ? /* @__PURE__ */ a.createElement(T, { label: "Provider", value: e.providers.join(" · ") }) : null, /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ a.createElement(T, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ a.createElement(
        T,
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
      )) : null, e.options ? /* @__PURE__ */ a.createElement(St, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ a.createElement(be, { value: e.options, json: !0 })) : null, /* @__PURE__ */ a.createElement(St, { label: "Usage", onOpen: () => l("usage") }, i), /* @__PURE__ */ a.createElement(St, { label: "Timing", onOpen: () => l("timing") }, r))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(F, { strong: !0, style: { fontSize: 12 } }, d(t, "thisRequest")), i, /* @__PURE__ */ a.createElement(js, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        F,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        d(t, "sessionTotal")
      ), /* @__PURE__ */ a.createElement(
        Ot,
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
      children: r
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
    Pt,
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
  ), s = a.useMemo(() => gs(t), [t]), l = a.useMemo(() => ms(t), [t]), r = oe();
  return e === void 0 ? /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 12 } }, d(r, "noPrevPrompt")) : /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ a.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ a.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ a.createElement(
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
    l.map((i, c) => {
      if (i.kind === "gap")
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
          i.count
        );
      const h = i;
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
  var r;
  const n = oe(), t = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: d(n, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "#", value: String(e.index) }), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(n, "status"),
          value: s ? d(n, "promptChanged") : d(n, "promptInitial")
        }
      ), /* @__PURE__ */ a.createElement(T, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ a.createElement(T, { label: "Chars", value: String(((r = e.prompt) == null ? void 0 : r.length) ?? 0) }), /* @__PURE__ */ a.createElement(T, { label: "Tools", value: String(t.length) }))
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
      label: d(n, "prompt"),
      children: /* @__PURE__ */ a.createElement(be, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 4 } }, t.map((i) => /* @__PURE__ */ a.createElement(F, { key: i, code: !0, style: { fontSize: 11 } }, i)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ a.createElement(
          At,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((i, c) => {
              var g;
              const h = typeof i.name == "string" && i.name || typeof ((g = i.function) == null ? void 0 : g.name) == "string" && i.function.name || `tool-${c + 1}`;
              return {
                key: String(c),
                label: /* @__PURE__ */ a.createElement(F, { code: !0, style: { fontSize: 11 } }, h),
                children: /* @__PURE__ */ a.createElement(be, { value: i })
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
  return /* @__PURE__ */ a.createElement(Pt, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function bt({ dragRef: e, width: n }) {
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
  onClose: r
}) {
  var b, R, D, w, C;
  const i = oe(), [c, h] = Dn(400), g = zs(null);
  if ($s(() => {
    const k = (A) => {
      const L = g.current;
      if (L === null) return;
      const I = L.anchorX - A.clientX;
      h(
        Math.min(Ls, Math.max(Rs, L.anchorWidth + I))
      );
    }, O = () => {
      g.current = null;
    };
    return window.addEventListener("pointermove", k), window.addEventListener("pointerup", O), () => {
      window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", O);
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
        Qt,
        {
          image: Qt.PRESENTED_IMAGE_SIMPLE,
          description: d(i, "selectRecord")
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
      /* @__PURE__ */ a.createElement(bt, { dragRef: g, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: r }), /* @__PURE__ */ a.createElement(Bs, { request: n, onJumpRecord: s }))
    );
  const o = e;
  if (o.kind === "system" && o.prompt !== void 0)
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
      /* @__PURE__ */ a.createElement(bt, { dragRef: g, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: r }), /* @__PURE__ */ a.createElement(Us, { record: o }))
    );
  const f = o.usage, v = o.timing, u = [];
  if (u.push({
    key: "summary",
    label: d(i, "summary"),
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "#", value: String(o.index) }), /* @__PURE__ */ a.createElement(T, { label: "Kind", value: On(o, i) }), o.runIndex > 0 && l ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(o.runIndex)
      },
      "Request #",
      o.runIndex,
      " →"
    )) : null, /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(i, "status"),
        value: o.running ? d(i, "running") : o.isError ? d(i, "error") : d(i, "success"),
        danger: o.isError
      }
    ), o.provider ? /* @__PURE__ */ a.createElement(T, { label: "Provider", value: o.provider }) : null, o.model ? /* @__PURE__ */ a.createElement(T, { label: d(i, "model"), value: o.model }) : null, o.toolName ? /* @__PURE__ */ a.createElement(T, { label: "Tool", value: o.toolName }) : null, o.inSkill ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(i, "skillResource"),
        value: o.inSkillLoaded ? `⚡ ${o.inSkill}` : `⚡ ${o.inSkill}（${d(i, "skillBypass")}）`
      }
    ) : null, o.guidedSkill ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(i, "skillGuided"),
        value: `∈ ${o.guidedSkill}（${o.guidedReason === "slash" ? d(i, "guidedBySlash") : d(i, "guidedByLoad")}）`
      }
    ) : null, o.toolOutputChars ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(i, "outputSize"),
        value: o.toolOutputBytes ? `${Y(o.toolOutputChars)} ${d(
          i,
          "charUnit"
        )} · ${zt(o.toolOutputBytes)} (${d(
          i,
          "beforeTruncation"
        )})` : `${Y(o.toolOutputChars)} ${d(
          i,
          "charUnit"
        )}`
      }
    ) : null, o.kind === "user" && (o.channel || o.userId) ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(i, "source"),
        value: [o.channel, o.userId].filter(Boolean).join(" · ")
      }
    ) : null, o.receipt ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(i, "channel"),
        value: o.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(i, "duration"),
        value: pe(o.timeSeconds)
      }
    ), o.note ? /* @__PURE__ */ a.createElement(F, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.spawnSession ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(i, "spawnedAgent"),
        value: o.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ a.createElement(
      jn,
      {
        size: "small",
        onClick: () => o.spawnSession && t(o.spawnSession),
        style: { marginTop: 4 }
      },
      d(i, "openChildSession")
    ) : null) : null)
  }), o.kind === "message" && (o.usage || o.timing || o.options || (b = o.apiPayload) != null && b.params || o.toolCalls && o.toolCalls.length > 0)) {
    const k = (R = o.apiPayload) == null ? void 0 : R.params, O = k !== void 0 && o.options !== void 0;
    u.push({
      key: "request",
      label: d(i, "requestTab"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(F, { strong: !0, style: { fontSize: 12 } }, d(i, "toolCallsEmitted"), " (", o.toolCalls.length, ")"), o.toolCalls.map((A, L) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: A.id || L,
          style: { display: "flex", gap: 6, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(F, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, A.name),
        A.id ? /* @__PURE__ */ a.createElement(
          F,
          {
            type: "secondary",
            style: { fontSize: 10, flexShrink: 0 }
          },
          "…",
          A.id.slice(-8)
        ) : null
      ))) : null, k || o.options ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(F, { strong: !0, style: { fontSize: 12 } }, d(i, "generationOptions")), O ? /* @__PURE__ */ a.createElement(
        F,
        {
          type: "secondary",
          style: { fontSize: 11, display: "block" }
        },
        `${d(i, "wireParams")} + ${d(
          i,
          "callOptionsDigest"
        )}`
      ) : null, /* @__PURE__ */ a.createElement(
        be,
        {
          value: { ...o.options ?? {}, ...k ?? {} },
          json: !0
        }
      )) : null, o.usage ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(F, { strong: !0, style: { fontSize: 12 } }, d(i, "usage")), /* @__PURE__ */ a.createElement(
        Ot,
        {
          input: o.usage.input_tokens ?? 0,
          output: o.usage.output_tokens ?? 0,
          cacheRead: o.usage.cache_input_tokens ?? 0,
          cacheWrite: o.usage.cache_creation_input_tokens ?? 0,
          reasoning: o.usage.reasoning_tokens ?? 0
        }
      )) : null, /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(F, { strong: !0, style: { fontSize: 12 } }, d(i, "timing")), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(i, "startedAt"),
          value: _e(o.startedAt)
        }
      ), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(i, "duration"),
          value: pe(o.timeSeconds)
        }
      ), o.timing ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(i, "ttftLabel"),
          value: pe(o.timing.ttft_ms / 1e3)
        }
      ), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(i, "decodeLabel"),
          value: pe(o.timing.decode_ms / 1e3)
        }
      ), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(i, "throughput"),
          value: lt(
            (D = o.usage) == null ? void 0 : D.output_tokens,
            o.timing.decode_ms / 1e3
          )
        }
      )) : /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 11 } }, d(i, "noTiming"))))
    });
  }
  if (o.kind === "tool")
    o.toolInput && u.push({
      key: "payload",
      label: d(i, "input"),
      children: /* @__PURE__ */ a.createElement(be, { value: o.toolInput, json: !0 })
    }), (o.toolOutput || o.toolError) && u.push({
      key: "result",
      label: d(i, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolError ? /* @__PURE__ */ a.createElement(F, { type: "danger", style: { fontSize: 12 } }, o.toolError) : null, o.toolOutput ? /* @__PURE__ */ a.createElement(be, { value: o.toolOutput }) : null)
    });
  else if (o.outputText || o.thinkingText || o.messages || o.marker || o.toolCalls && o.toolCalls.length > 0) {
    if (o.inputNew || o.messagesMeta) {
      const k = ((w = o.inputNew) == null ? void 0 : w.length) ?? 0, O = ((C = o.messagesMeta) == null ? void 0 : C.count) ?? 0;
      let A;
      o.contextReset ? A = `${d(i, "deltaReset")} (${O})` : k === 0 ? A = d(i, "deltaNoChange") : o.inputNew && o.inputNew.length === 1 && o.inputNew[0].role === "assistant" && O > 1 ? A = d(i, "deltaTailUpdate") : A = `${d(i, "deltaAppend")} (${k})`, u.push({
        key: "input",
        label: d(i, "inputTab"),
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(T, { label: d(i, "deltaKind"), value: A }), o.contextReset ? /* @__PURE__ */ a.createElement(F, { type: "warning", style: { fontSize: 12 } }, d(i, "contextReset")) : null, o.resetDetail ? /* @__PURE__ */ a.createElement(
          "div",
          {
            style: {
              border: "1px solid rgba(250,173,20,0.4)",
              borderRadius: 6,
              padding: "6px 8px"
            }
          },
          /* @__PURE__ */ a.createElement(
            T,
            {
              label: d(i, "resetBreakAt"),
              value: `#${o.resetDetail.breakAt + 1}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            T,
            {
              label: d(i, "resetSizes"),
              value: `${o.resetDetail.beforeCount} ${d(
                i,
                "resetMsgs"
              )} · ${Y(o.resetDetail.beforeChars)} ${d(
                i,
                "charUnit"
              )} → ${o.resetDetail.afterCount} ${d(
                i,
                "resetMsgs"
              )} · ${Y(o.resetDetail.afterChars)} ${d(
                i,
                "charUnit"
              )}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            T,
            {
              label: d(i, "resetRoles"),
              value: Object.keys(o.resetDetail.afterByRole).map((L) => {
                const I = o.resetDetail.beforeByRole[L] ?? 0, N = o.resetDetail.afterByRole[L] ?? 0;
                return I === N ? null : `${L} ${I}→${N}`;
              }).filter(Boolean).join(" · ") || "-"
            }
          ),
          o.resetDetail.changes.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ a.createElement(F, { strong: !0, style: { fontSize: 12 } }, d(i, "resetChanges")), o.resetDetail.changes.slice(0, 20).map((L, I) => /* @__PURE__ */ a.createElement(
            "div",
            {
              key: I,
              style: {
                display: "flex",
                gap: 6,
                alignItems: "baseline"
              }
            },
            /* @__PURE__ */ a.createElement(
              ot,
              {
                color: L.status === "kept" ? "default" : L.status === "rewritten" ? "orange" : L.status === "removed" ? "red" : "green",
                style: { marginInlineEnd: 0, fontSize: 10 }
              },
              d(i, Ws[L.status])
            ),
            /* @__PURE__ */ a.createElement(F, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, L.role),
            L.status === "rewritten" ? /* @__PURE__ */ a.createElement(
              F,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${d(i, "resetOldPrefix")}${(L.oldText ?? "").slice(0, 40)} → ${d(
                i,
                "resetNewPrefix"
              )}${(L.newText ?? "").slice(0, 40)}`
            ) : /* @__PURE__ */ a.createElement(
              F,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${L.status === "removed" ? d(i, "resetOldPrefix") : d(i, "resetNewPrefix")}${(L.oldText ?? L.newText ?? "").slice(
                0,
                60
              )}`
            )
          ))) : null
        ) : null, o.messagesMeta ? /* @__PURE__ */ a.createElement(
          T,
          {
            label: d(i, "inputTotal"),
            value: `${o.messagesMeta.count} · ${Y(
              o.messagesMeta.totalChars
            )} ${d(i, "charUnit")}`
          }
        ) : null, o.inputNew && o.inputNew.length > 0 ? /* @__PURE__ */ a.createElement(a.Fragment, null, o.inputNew.some((L) => L.role === "assistant") ? /* @__PURE__ */ a.createElement(
          F,
          {
            type: "secondary",
            style: { fontSize: 11, display: "block" }
          },
          d(i, "assistantInputNote")
        ) : null, /* @__PURE__ */ a.createElement(
          At,
          {
            size: "small",
            defaultActiveKey: o.inputNew.length <= 5 ? ["messages"] : [],
            items: [
              {
                key: "messages",
                label: `${d(i, "inputMessages")} (${o.inputNew.length})`,
                children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.inputNew.map((L, I) => /* @__PURE__ */ a.createElement(
                  Vs,
                  {
                    key: I,
                    message: L,
                    locale: i
                  }
                )))
              }
            ]
          }
        )) : null)
      });
    }
    if (o.apiPayload && o.apiPayload.messages.length > 0) {
      const k = o.apiPayload;
      u.push({
        key: "api",
        label: "API",
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 11 } }, d(i, "apiPayloadNote")), /* @__PURE__ */ a.createElement(T, { label: "Model", value: k.model }), /* @__PURE__ */ a.createElement(
          T,
          {
            label: d(i, "apiMsgCount"),
            value: String(k.messages.length)
          }
        ), k.usage ? /* @__PURE__ */ a.createElement(
          T,
          {
            label: "Usage",
            value: `in ${k.usage.input_tokens ?? 0} · out ${k.usage.output_tokens ?? 0} tok`
          }
        ) : null, k.durationMs !== void 0 ? /* @__PURE__ */ a.createElement(
          T,
          {
            label: d(i, "duration"),
            value: pe(k.durationMs / 1e3)
          }
        ) : null, /* @__PURE__ */ a.createElement(
          At,
          {
            size: "small",
            items: [
              {
                key: "api-msgs",
                label: `${d(i, "apiMessages")} (${k.messages.length})`,
                children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 4 } }, k.messages.map((O, A) => /* @__PURE__ */ a.createElement(
                  "div",
                  {
                    key: A,
                    style: {
                      display: "flex",
                      gap: 6,
                      alignItems: "baseline"
                    }
                  },
                  /* @__PURE__ */ a.createElement(
                    ot,
                    {
                      color: O.role === "tool" ? "gold" : O.role === "system" ? "green" : O.role === "user" ? "blue" : "purple",
                      style: {
                        marginInlineEnd: 0,
                        fontSize: 9,
                        lineHeight: "14px",
                        flexShrink: 0
                      }
                    },
                    O.role
                  ),
                  O.toolCallId ? /* @__PURE__ */ a.createElement(F, { code: !0, style: { fontSize: 9, flexShrink: 0 } }, O.toolCallId.slice(-8)) : null,
                  /* @__PURE__ */ a.createElement(
                    F,
                    {
                      type: "secondary",
                      style: {
                        fontSize: 11,
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }
                    },
                    O.content.slice(0, 80)
                  )
                )))
              }
            ]
          }
        ))
      });
    }
    u.push({
      key: "raw",
      label: d(i, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.inboundParts && o.inboundParts.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 12 } }, `${d(i, "inboundParts")} (${o.inboundParts.length})`), o.inboundParts.map((k, O) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: O,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(F, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.type.replace("Content", "")),
        /* @__PURE__ */ a.createElement(
          F,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          k.text ?? "-"
        )
      ))) : null, o.marker ? /* @__PURE__ */ a.createElement(be, { value: o.marker }) : null, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 12 } }, `${d(i, "toolCall")} (${o.toolCalls.length})`), o.toolCalls.map((k, O) => /* @__PURE__ */ a.createElement("div", { key: k.id || O, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ a.createElement(F, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", k.name), /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 11 } }, k.id)))) : null, o.note ? /* @__PURE__ */ a.createElement(F, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.messages && o.messages.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 12 } }, `${d(i, "query")} (${o.messages.length})`), o.messages.map((k, O) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: O,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(F, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.role),
        /* @__PURE__ */ a.createElement(
          F,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          k.text
        )
      ))) : null, o.thinkingText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 12 } }, d(i, "thinking")), /* @__PURE__ */ a.createElement(be, { value: o.thinkingText })) : null, o.outputText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 12 } }, d(i, "output")), /* @__PURE__ */ a.createElement(be, { value: o.outputText })) : null)
    });
  }
  return (o.startedAt !== null || f || v) && u.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "Started", value: _e(o.startedAt) }), /* @__PURE__ */ a.createElement(T, { label: "Total", value: pe(o.timeSeconds) }), v ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      T,
      {
        label: "TTFT",
        value: pe(v.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      T,
      {
        label: "Decoding",
        value: pe(v.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(i, "throughput"),
        value: lt(
          f == null ? void 0 : f.output_tokens,
          v.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 12 } }, d(i, "noTiming")))
  }), f && u.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "Input", value: Y(f.input_tokens) }), /* @__PURE__ */ a.createElement(T, { label: "Output", value: Y(f.output_tokens) }), f.cache_creation_input_tokens ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: "Cache write",
        value: Y(f.cache_creation_input_tokens)
      }
    ) : null, f.cache_input_tokens ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: "Cache read",
        value: Y(f.cache_input_tokens)
      }
    ) : null, f.total_tokens !== void 0 ? /* @__PURE__ */ a.createElement(T, { label: "Total", value: Y(f.total_tokens) }) : null, f.time !== void 0 ? /* @__PURE__ */ a.createElement(T, { label: "API time", value: pe(f.time) }) : null)
  }), u.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ a.createElement(be, { value: o.raw })
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
    /* @__PURE__ */ a.createElement(bt, { dragRef: g, width: c }),
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: r }), /* @__PURE__ */ a.createElement(Pt, { size: "small", items: u, tabBarStyle: { marginBottom: 8 } }))
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
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ a.createElement(F, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 11 } }, Y(e.chars), " ", d(n, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), l.length > 200 ? /* @__PURE__ */ a.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => s((r) => !r)
    },
    t ? d(n, "inputCollapseText") : d(n, "inputExpand")
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
  const l = oe(), r = e.endKind ? d(l, Xs[e.endKind]) : d(l, "spanOpen"), i = Ss(e);
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
    ), /* @__PURE__ */ a.createElement(F, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ a.createElement(
      ot,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      d(l, Gs[e.trigger])
    )), /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(l, "spanStart"),
        value: _e(e.startT)
      }
    ), /* @__PURE__ */ a.createElement(T, { label: d(l, "spanEnd"), value: r }), e.endT !== null ? /* @__PURE__ */ a.createElement(T, { label: " ", value: _e(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(l, "spanLastActivity"),
        value: _e(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(l, "spanDuration"),
        value: i === null ? "-" : pe(i / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(l, "spanLoadState"),
        value: e.bypass ? d(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ a.createElement(F, { strong: !0, style: { fontSize: 12 } }, d(l, "spanEvidence")), e.evidences.slice(0, 30).map((c, h) => /* @__PURE__ */ a.createElement(
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
        ot,
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
      /* @__PURE__ */ a.createElement(F, { type: "secondary", style: { fontSize: 11 } }, c.detail)
    ))) : /* @__PURE__ */ a.createElement(
      F,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      d(l, "spanNoActivity")
    ))
  );
}
const he = window.QwenPaw.host.React, Js = he.useRef, Qs = he.useState;
he.useCallback;
he.useMemo;
const Ys = he.useEffect, Zs = he.useLayoutEffect, el = he.useReducer;
he.createContext;
he.useContext;
he.createElement;
he.cloneElement;
he.isValidElement;
he.memo;
he.forwardRef;
he.Fragment;
he.StrictMode;
he.version;
function tl(e) {
  return e ? e() : void 0;
}
function nl(e, n, t) {
  const s = new Array(e);
  return new Proxy(s, {
    get(l, r, i) {
      if (typeof r == "string") {
        const c = r.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const h = +r;
          if (Number.isInteger(h) && h >= 0 && h < e) {
            let g = l[h];
            if (!g) {
              const o = n[h * 2];
              g = l[h] = {
                index: h,
                key: t(h),
                start: o,
                size: n[h * 2 + 1],
                end: o + n[h * 2 + 1],
                lane: 0
              };
            }
            return g;
          }
        }
        if (r === "length") return e;
      }
      return Reflect.get(l, r, i);
    }
  });
}
function Pe(e, n, t) {
  let s = t.initialDeps ?? [], l, r = !0;
  function i() {
    var c;
    const h = process.env.NODE_ENV !== "production" && !!t.key && !!((c = t.debug) != null && c.call(t));
    let g = 0;
    h && (g = Date.now());
    const o = e();
    if (!(o.length !== s.length || o.some((u, b) => s[b] !== u)))
      return l;
    s = o;
    let v = 0;
    if (h && (v = Date.now()), l = n(...o), h) {
      const u = Math.round((Date.now() - g) * 100) / 100, b = Math.round((Date.now() - v) * 100) / 100, R = b / 16, D = (w, C) => {
        for (w = String(w); w.length < C; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${D(b, 5)} /${D(u, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * R, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(r && t.skipInitialOnChange) && t.onChange(l), r = !1, l;
  }
  return i.updateDeps = (c) => {
    s = c;
  }, i;
}
function Zt(e, n) {
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
const xt = () => {
  if (Ue !== void 0) return Ue;
  if (typeof navigator > "u") return Ue = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Ue = !0;
  const e = navigator.maxTouchPoints;
  return Ue = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, en = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, ol = (e) => e, il = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - n + 1, l = new Array(s);
  for (let r = 0; r < s; r++)
    l[r] = n + r;
  return l;
}, rl = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const l = (i) => {
    const { width: c, height: h } = i;
    n({ width: Math.round(c), height: Math.round(h) });
  };
  if (l(en(t)), !s.ResizeObserver)
    return () => {
    };
  const r = new s.ResizeObserver((i) => {
    const c = () => {
      const h = i[0];
      if (h != null && h.borderBoxSize) {
        const g = h.borderBoxSize[0];
        if (g) {
          l({ width: g.inlineSize, height: g.blockSize });
          return;
        }
      }
      l(en(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, it = {
  passive: !0
}, al = typeof window > "u" ? !0 : "onscrollend" in window, cl = (e, n, t) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const r = e.options.useScrollendEvent && al;
  let i = 0;
  const c = r ? null : ll(
    l,
    () => n(i, !1),
    e.options.isScrollingResetDelay
  ), h = (f) => () => {
    i = t(s), c == null || c(), n(i, f);
  }, g = h(!0), o = h(!1);
  return s.addEventListener("scroll", g, it), r && s.addEventListener("scrollend", o, it), () => {
    s.removeEventListener("scroll", g), r && s.removeEventListener("scrollend", o);
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
    const s = t.indexFromElement(e), l = t.options.getItemKey(s), r = t.itemSizeCache.get(l);
    if (r !== void 0)
      return r;
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, pl = (e, {
  adjustments: n = 0,
  behavior: t
}, s) => {
  var l, r;
  (r = (l = s.scrollElement) == null ? void 0 : l.scrollTo) == null || r.call(l, {
    [s.options.horizontal ? "left" : "top"]: e + n,
    behavior: t
  });
}, hl = pl;
class fl {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, s, l;
      return ((l = (s = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : s.now) == null ? void 0 : l.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const s = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((r) => {
          const i = () => {
            const c = r.target, h = this.indexFromElement(c);
            if (!c.isConnected) {
              this.observer.unobserve(c);
              for (const [g, o] of this.elementsCache)
                if (o === c) {
                  this.elementsCache.delete(g);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(h) && this.resizeItem(
              h,
              this.options.measureElement(c, r, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = s()) == null || l.disconnect(), t = null;
        },
        observe: (l) => {
          var r;
          return (r = s()) == null ? void 0 : r.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var r;
          return (r = s()) == null ? void 0 : r.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var s, l;
      const r = {
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
      for (const v in t) {
        const u = t[v];
        u !== void 0 && (r[v] = u);
      }
      const i = this.options;
      let c = null, h = null, g = !1;
      if (i !== void 0 && i.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const v = i.count, u = r.count, b = this.getMeasurements(), R = v > 0 ? ((s = b[0]) == null ? void 0 : s.key) ?? i.getItemKey(0) : null, D = v > 0 ? ((l = b[v - 1]) == null ? void 0 : l.key) ?? i.getItemKey(v - 1) : null;
        if (u !== v || v > 0 && u > 0 && (r.getItemKey(0) !== R || r.getItemKey(u - 1) !== D)) {
          g = !0;
          const k = v > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? b[0] : null;
          k && (c = [k.key, this.getScrollOffset() - k.start]);
          const O = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          O && u > v && this.isAtEnd(i.scrollEndThreshold) && (v === 0 || r.getItemKey(u - 1) !== D) && (h = O);
        }
      }
      this.options = r, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let o = !1, f = 0;
      if (c && this.scrollOffset !== null) {
        const [v, u] = c, b = this.getMeasurements(), { count: R, getItemKey: D } = this.options;
        let w = 0;
        for (; w < R && D(w) !== v; )
          w++;
        if (w < R) {
          const C = b[w];
          if (C) {
            const k = Math.max(0, C.start + u);
            k !== this.scrollOffset && (f = k - this.scrollOffset, this.scrollOffset = k, o = !0);
          }
        }
      }
      (o || h) && (this.pendingScrollAnchor = [
        o ? c[0] : null,
        o ? c[1] : 0,
        h,
        f
      ]);
    }, this.notify = (t) => {
      var s, l;
      (l = (s = this.options).onChange) == null || l.call(s, this, t);
    }, this.maybeNotify = Pe(
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
        if (this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((r) => {
          this.observer.observe(r);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (r) => {
            this.scrollRect = r, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (r, i) => {
            if (i && this._intendedScrollOffset === null && r === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(r - this._intendedScrollOffset) < 1.5 && (r = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const c = this.getScrollOffset();
            this.scrollDirection = i ? c === r ? this.scrollDirection : c < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = i, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const r = this.scrollElement, i = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, c = () => {
            this._iosTouching = !1, !(!xt() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            i,
            it
          ), r.addEventListener(
            "touchend",
            c,
            it
          ), this.unsubs.push(() => {
            r.removeEventListener("touchstart", i), r.removeEventListener("touchend", c), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [r, i, c, h] = l;
        r !== null && !c && (xt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? h !== 0 && (this._iosDeferredAdjustment += h) : this._scrollToOffset(this.getScrollOffset(), {
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
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Pe(
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
      (t, s, l, r, i, c, h, g) => (this.prevLanes !== void 0 && this.prevLanes !== c && (this.lanesChangedFlag = !0), this.prevLanes = c, this.pendingMin = null, {
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: r,
        enabled: i,
        lanes: c,
        laneAssignmentMode: h,
        gap: g
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Pe(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: r,
        enabled: i,
        lanes: c,
        laneAssignmentMode: h,
        gap: g
      }, o) => {
        const f = this.itemSizeCache;
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const w of this.laneAssignments.keys())
            w >= t && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const v = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), c === 1) {
          const w = t * 2;
          let C = this._flatMeasurements;
          if (!C || C.length < w) {
            const A = new Float64Array(w);
            C && v > 0 && A.set(C.subarray(0, v * 2)), C = A, this._flatMeasurements = C;
          }
          let k;
          if (v === 0)
            k = s + l;
          else {
            const A = v - 1;
            k = C[A * 2] + C[A * 2 + 1] + g;
          }
          for (let A = v; A < t; A++) {
            const L = r(A), I = f.get(L), N = typeof I == "number" ? I : this.options.estimateSize(A);
            C[A * 2] = k, C[A * 2 + 1] = N, k += N + g;
          }
          const O = nl(t, C, r);
          return this.measurementsCache = O, O;
        }
        const u = this.measurementsCache.slice(0, v), b = new Array(c).fill(
          void 0
        ), R = new Float64Array(c);
        let D = 0;
        for (let w = 0; w < v; w++) {
          const C = u[w];
          C && (b[C.lane] === void 0 && D++, b[C.lane] = w, R[C.lane] = C.end);
        }
        for (let w = v; w < t; w++) {
          const C = r(w), k = this.laneAssignments.get(w);
          let O, A;
          const L = h === "estimate" || f.has(C);
          if (k !== void 0 && this.options.lanes > 1) {
            O = k;
            const q = b[O], te = q !== void 0 ? u[q] : void 0;
            A = te ? te.end + g : s + l;
          } else if (D === c) {
            let q = 0, te = R[0], fe = b[0];
            for (let re = 1; re < c; re++) {
              const ie = R[re];
              (ie < te || ie === te && b[re] < fe) && (q = re, te = ie, fe = b[re]);
            }
            O = q, A = te + g, L && this.laneAssignments.set(w, O);
          } else
            O = w % this.options.lanes, A = s + l, L && this.laneAssignments.set(w, O);
          const I = f.get(C), N = typeof I == "number" ? I : this.options.estimateSize(w), X = A + N;
          u[w] = {
            index: w,
            start: A,
            size: N,
            end: X,
            key: C,
            lane: O
          }, b[O] === void 0 && D++, b[O] = w, R[O] = X;
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Pe(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, s, l, r) => t.length === 0 || s === 0 ? (this.range = null, null) : (this.range = gl(
        t,
        s,
        l,
        r,
        // Pass the typed array so binary search + forward-walk can read
        // start/end directly from Float64Array, skipping the Proxy traps.
        r === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
      ), this.range),
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Pe(
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
      (t, s, l, r, i) => r === null || i === null ? [] : t({
        startIndex: r,
        endIndex: i,
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
        const r = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), i = Math.max(0, l - r), c = Math.min(
          this.options.count - 1,
          l + r
        );
        return t >= i && t <= c;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((i, c) => {
          i.isConnected || (this.observer.unobserve(i), this.elementsCache.delete(c));
        });
        return;
      }
      const s = this.indexFromElement(t), l = this.options.getItemKey(s), r = this.elementsCache.get(l);
      r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, s) => {
      var l, r;
      if (t < 0 || t >= this.options.count) return;
      let i, c, h;
      const g = this._flatMeasurements;
      if (this.options.lanes === 1 && g !== null)
        h = this.options.getItemKey(t), c = g[t * 2], i = g[t * 2 + 1];
      else {
        const v = this.measurementsCache[t];
        if (!v) return;
        h = v.key, c = v.start, i = v.size;
      }
      const o = this.itemSizeCache.get(h) ?? i, f = s - o;
      if (f !== 0) {
        const v = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, u = v ? this.getTotalSize() : 0, b = this.getScrollOffset() + this.scrollAdjustments, D = !this.itemSizeCache.has(h) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          c < b
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          c + o <= b && this.scrollDirection !== "backward"
        ), w = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: h,
            start: c,
            size: i,
            end: c + i,
            lane: 0
          },
          f,
          this
        ) : D);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(h, s), this.itemSizeCacheVersion++;
        let C = !1;
        v ? C = this.applyScrollAdjustment(
          this.getTotalSize() - u
        ) : w && (C = this.applyScrollAdjustment(f)), this.notify(C);
      }
    }, this.getVirtualItems = Pe(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, s) => {
        const l = [];
        for (let r = 0, i = t.length; r < i; r++) {
          const c = t[r], h = s[c];
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
      const l = this._flatMeasurements, r = this.options.lanes === 1 && l != null, i = Bn(
        0,
        s.length - 1,
        r ? (c) => l[c * 2] : (c) => Zt(s[c]).start,
        t
      );
      return Zt(s[i]);
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
      const r = this.getSize(), i = this.getScrollOffset();
      s === "auto" && (s = t >= i + r ? "end" : "start"), s === "center" ? t += (l - r) / 2 : s === "end" && (t -= r);
      const c = this.getMaxScrollOffset();
      return Math.max(Math.min(c, t), 0);
    }, this.getOffsetForIndex = (t, s = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getSize(), r = this.getScrollOffset(), i = this.measurementsCache[t];
      if (!i) return;
      if (s === "auto")
        if (i.end >= r + l - this.options.scrollPaddingEnd)
          s = "end";
        else if (i.start <= r + this.options.scrollPaddingStart)
          s = "start";
        else
          return [r, s];
      if (s === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const c = s === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(c, s, i.size),
        s
      ];
    }, this.scrollToOffset = (t, { align: s = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const r = this.getOffsetForAlignment(t, s), i = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: l,
        startedAt: i,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: s = "auto",
      behavior: l = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const r = this.getOffsetForIndex(t, s);
      if (!r)
        return;
      const [i, c] = r, h = this.now();
      this.scrollState = {
        index: t,
        align: c,
        behavior: l,
        startedAt: h,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: s = "auto" } = {}) => {
      const l = this.getScrollOffset() + t, r = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: s,
        startedAt: r,
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
        const r = s.length - 1, i = this._flatMeasurements;
        i != null ? l = i[r * 2] + i[r * 2 + 1] : l = ((t = s[r]) == null ? void 0 : t.end) ?? 0;
      } else {
        const r = Array(this.options.lanes).fill(null);
        let i = s.length - 1;
        for (; i >= 0 && r.some((c) => c === null); ) {
          const c = s[i];
          r[c.lane] === null && (r[c.lane] = c.end), i--;
        }
        l = Math.max(...r.filter((c) => c !== null));
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
    return n === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", n), xt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += n, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = s ? s[0] : this.scrollState.lastTargetOffset, r = 1, i = l !== this.scrollState.lastTargetOffset;
    if (!i && sl(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, i) {
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
    const l = (e + n) / 2 | 0, r = t(l);
    if (r < s)
      e = l + 1;
    else if (r > s)
      n = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function ml(e, n, t) {
  let s = 0;
  for (; s <= n; ) {
    const l = (s + n) / 2 | 0, r = e[l * 2];
    if (r < t)
      s = l + 1;
    else if (r > t)
      n = l - 1;
    else
      return l;
  }
  return s > 0 ? s - 1 : 0;
}
function gl(e, n, t, s, l) {
  const r = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: r };
  if (s === 1 && l !== null) {
    const g = ml(
      l,
      r,
      t
    );
    let o = g;
    const f = t + n;
    for (; o < r && l[o * 2] + l[o * 2 + 1] < f; )
      o++;
    return { startIndex: g, endIndex: o };
  }
  let c = Bn(0, r, (g) => e[g].start, t), h = c;
  if (s === 1)
    for (; h < r && e[h].end < t + n; )
      h++;
  else if (s > 1) {
    const g = Array(s).fill(0);
    for (; h < r && g.some((f) => f < t + n); ) {
      const f = e[h];
      g[f.lane] = f.end, h++;
    }
    const o = Array(s).fill(t + n);
    for (; c >= 0 && o.some((f) => f >= t); ) {
      const f = e[c];
      o[f.lane] = f.start, c--;
    }
    c = Math.max(0, c - c % s), h = Math.min(r, h + (s - 1 - h % s));
  }
  return { startIndex: c, endIndex: h };
}
const kt = typeof document < "u" ? Zs : Ys;
function yl({
  useFlushSync: e = !0,
  directDomUpdates: n = !1,
  directDomUpdatesMode: t = "transform",
  ...s
}) {
  const l = el((o) => o + 1, 0)[1], r = Js({
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
  r.current.enabled = n, r.current.mode = t;
  const i = (o) => {
    const f = r.current;
    if (!f.enabled || !f.container) return;
    const v = o.getTotalSize();
    if (v !== f.lastSize) {
      f.lastSize = v;
      const u = o.options.horizontal ? "width" : "height";
      f.container.style[u] = `${v}px`;
    }
  }, c = (o) => {
    const f = r.current;
    if (!f.enabled || !f.container) return;
    i(o);
    const v = !!o.options.horizontal, u = f.mode === "transform", b = v ? "left" : "top", R = o.options.scrollMargin, D = o.getVirtualItems();
    for (const w of D) {
      const C = w.start - R, k = o.elementsCache.get(w.key);
      k && f.lastPositions.get(k) !== C && (f.lastPositions.set(k, C), u ? k.style.transform = v ? `translate3d(${C}px, 0, 0)` : `translate3d(0, ${C}px, 0)` : k.style[b] = `${C}px`);
    }
  }, h = {
    ...s,
    onChange: (o, f) => {
      var v;
      const u = r.current;
      let b = !0;
      if (u.enabled) {
        c(o);
        const R = o.range, D = u.prevRange;
        b = !D || D.isScrolling !== o.isScrolling || D.startIndex !== (R == null ? void 0 : R.startIndex) || D.endIndex !== (R == null ? void 0 : R.endIndex), b && (u.prevRange = R ? {
          startIndex: R.startIndex,
          endIndex: R.endIndex,
          isScrolling: o.isScrolling
        } : null);
      }
      b && (e && f ? tl(l) : l()), (v = s.onChange) == null || v.call(s, o, f);
    }
  }, [g] = Qs(() => {
    const o = new fl(h);
    return Object.assign(o, {
      containerRef: (f) => {
        const v = r.current;
        if (v.container = f, v.lastSize = null, f && v.enabled) {
          const u = o.getTotalSize();
          v.lastSize = u;
          const b = o.options.horizontal ? "width" : "height";
          f.style[b] = `${u}px`;
        }
      }
    });
  });
  return g.setOptions(h), kt(() => g._didMount(), []), kt(() => (i(g), g._willUpdate())), kt(() => {
    c(g);
  }), g;
}
function vl(e) {
  return yl({
    observeElementRect: rl,
    observeElementOffset: ul,
    scrollToFn: hl,
    ...e
  });
}
const ct = window.QwenPaw.host, M = ct.React, { useRef: El } = M, { Tag: De, Tooltip: Sl } = ct.antd, { Text: Ee } = ct.antd.Typography, {
  CaretRightOutlined: bl,
  CloseCircleOutlined: xl,
  FileTextOutlined: kl,
  RobotOutlined: wl,
  RocketOutlined: Tl,
  SafetyOutlined: _l,
  SendOutlined: Il,
  SettingOutlined: Cl,
  ToolOutlined: Ml,
  UserOutlined: $l
} = ct.antdIcons, zl = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Al = {
  user: /* @__PURE__ */ M.createElement($l, null),
  message: /* @__PURE__ */ M.createElement(wl, null),
  tool: /* @__PURE__ */ M.createElement(Ml, null),
  system: /* @__PURE__ */ M.createElement(Cl, null)
}, tn = {
  approval: { color: "volcano", icon: /* @__PURE__ */ M.createElement(_l, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ M.createElement(Il, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ M.createElement(Tl, null) },
  header: { color: "green", icon: /* @__PURE__ */ M.createElement(kl, null) },
  error: { color: "red", icon: /* @__PURE__ */ M.createElement(xl, null) }
}, Ol = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, nn = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, Rl = 150, Rt = 26, Fn = 34, sn = 9, ln = 30;
function Ll(e) {
  const n = oe(), t = nn[e] ?? nn.unknown;
  return n === "zh-CN" ? t.zh : t.en;
}
const Nl = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Pl(e, n) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e.inboundParts ?? []) {
    const l = Nl[s.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([s, l]) => `${d(n, s)}×${l}`).join(" ");
}
function Dl(e, n) {
  const t = e.receipt, s = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${d(n, "replySent")}${s} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${d(n, "chars")}`;
}
function on({
  record: e,
  selected: n,
  dimmed: t,
  multiRequest: s,
  onSelect: l,
  onOpenRun: r
}) {
  var o, f;
  const i = e.usage, c = i && (i.input_tokens || i.output_tokens) ? `${Y(i.input_tokens)}→${Y(
    i.output_tokens
  )}` : null, h = i && i.reasoning_tokens ? i.reasoning_tokens : null, g = i && c ? [
    `Input ${Y(i.input_tokens)} tok`,
    i.cache_input_tokens ? `Cached ${Y(i.cache_input_tokens)} tok` : null,
    i.cache_creation_input_tokens ? `Cache created ${Y(
      i.cache_creation_input_tokens
    )} tok` : null,
    `Output ${Y(i.output_tokens)} tok`,
    h ? `${d(oe(), "reasoningShort")} ${Y(
      h
    )} tok` : null
  ].filter(Boolean).join(" · ") : void 0;
  return /* @__PURE__ */ M.createElement(
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
        height: Rt,
        cursor: "pointer",
        background: n ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1,
        borderLeft: e.skillSpanHue !== void 0 ? `3px solid ${e.skillSpanBypass ? "rgba(250,140,22,0.9)" : `hsl(${e.skillSpanHue}, 65%, 55%)`}` : "3px solid transparent"
      }
    },
    /* @__PURE__ */ M.createElement(
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
      s && r ? /* @__PURE__ */ M.createElement(
        "span",
        {
          title: d(oe(), "runViewHint"),
          onClick: (v) => {
            v.stopPropagation(), r(e.runIndex);
          },
          style: {
            opacity: 0.75,
            marginRight: 3,
            cursor: "pointer",
            textDecoration: "underline dotted",
            textUnderlineOffset: 2
          }
        },
        "R",
        e.runIndex
      ) : s ? /* @__PURE__ */ M.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex) : null,
      "#",
      e.index
    ),
    /* @__PURE__ */ M.createElement(
      De,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((o = tn[e.markerKind]) == null ? void 0 : o.color) || zl[e.kind] || "default",
        icon: e.markerKind && ((f = tn[e.markerKind]) == null ? void 0 : f.icon) || Al[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? d(oe(), "skillLoadKind") : On(e, oe())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ M.createElement(
      De,
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
    e.inSkill ? /* @__PURE__ */ M.createElement(
      De,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${d(oe(), "skillBypass")}`,
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
    ) : e.guidedSkill ? /* @__PURE__ */ M.createElement(
      Sl,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? d(oe(), "guidedBySlash") : d(oe(), "guidedByLoad")}`
      },
      /* @__PURE__ */ M.createElement(
        Ee,
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
    e.kind === "user" && e.skillName ? /* @__PURE__ */ M.createElement(
      De,
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
    /* @__PURE__ */ M.createElement(
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
      e.receipt ? /* @__PURE__ */ M.createElement(Ee, { type: "secondary", style: { fontSize: 12 } }, Dl(e, oe())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(Ee, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ M.createElement(Ee, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ M.createElement(Ee, { type: "secondary", style: { fontSize: 12 } }, ` · ${d(oe(), "skillLoaded")} ${Y(
        e.toolOutputChars
      )} ${d(oe(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(Ee, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ M.createElement(Ee, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ M.createElement(
        Ee,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(
        Ee,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(Ee, { type: "secondary", style: { fontSize: 11 } }, ` ${Pl(e, oe()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ M.createElement(Ee, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
    ),
    /* @__PURE__ */ M.createElement(
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
      c ? /* @__PURE__ */ M.createElement("span", { title: g }, /* @__PURE__ */ M.createElement("span", { style: { color: "#1677ff" } }, c), h ? /* @__PURE__ */ M.createElement("span", { style: { color: "#722ed1" } }, ` · ${Y(h)}`) : null) : null,
      c ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && pe(e.timeSeconds)
    )
  );
}
function jl({
  turn: e,
  collapsed: n,
  selected: t,
  cellCount: s,
  onToggle: l,
  onSelect: r,
  onSkillSpanOpen: i
}) {
  const c = oe();
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Fn }
    },
    /* @__PURE__ */ M.createElement(
      "span",
      {
        onClick: (h) => {
          h.stopPropagation(), r();
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
      /* @__PURE__ */ M.createElement(
        bl,
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
      /* @__PURE__ */ M.createElement(Ee, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ M.createElement(Ee, { type: "secondary", style: { fontSize: 11 } }, pe(e.durationMs / 1e3)),
      /* @__PURE__ */ M.createElement(Ee, { type: "secondary", style: { fontSize: 11 } }, s, " ", d(c, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ M.createElement(
          "span",
          {
            onClick: (h) => {
              i && (h.stopPropagation(), i(e.skillsUsed[0], e.turn));
            },
            style: {
              display: "inline-flex",
              cursor: i ? "pointer" : void 0
            }
          },
          /* @__PURE__ */ M.createElement(
            De,
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
      /* @__PURE__ */ M.createElement(
        De,
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
  searchMatchIndexes: r,
  onSelectedIndexChange: i,
  onSelectedTurnChange: c,
  onToggleTurn: h,
  callsCollapsed: g,
  hasOlderRecords: o,
  loadingOlder: f,
  onLoadOlder: v,
  initialRecord: u,
  emptyText: b,
  onSkillSpanOpen: R
}) {
  const D = oe(), w = El(null), C = e.filter((N) => N.turn !== null), k = C.length > 1, O = M.useMemo(() => {
    var X;
    const N = [];
    o && N.push({
      key: "load-older",
      height: ln,
      type: "load-older"
    }), u && (N.push({
      key: "initial",
      height: Rt,
      type: "initial",
      record: u
    }), N.push({
      key: "initial-divider",
      height: sn,
      type: "divider"
    }));
    for (const q of C) {
      const te = q.turn;
      if (N.push({
        key: `turn-${te}`,
        height: Fn,
        type: "boundary",
        turn: q
      }), !s.has(te))
        for (const fe of ((X = q.groups[0]) == null ? void 0 : X.cells) ?? [])
          g && fe.kind === "tool" || N.push({
            key: `rec-${fe.index}`,
            height: Rt,
            type: "record",
            record: fe
          });
    }
    return N;
  }, [
    C,
    s,
    g,
    o,
    u
  ]), A = M.useCallback(
    (N) => l !== null && !l.has(N.index) || r !== null && !r.has(N.index),
    [l, r]
  ), L = (N) => {
    var X;
    switch (N.type) {
      case "load-older":
        return /* @__PURE__ */ M.createElement("div", { style: { textAlign: "center", height: ln } }, /* @__PURE__ */ M.createElement(
          "button",
          {
            type: "button",
            onClick: v,
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
          f ? "…" : `⋯ ${d(D, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ M.createElement(
          "div",
          {
            style: {
              height: sn,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const q = N.record;
        return /* @__PURE__ */ M.createElement(
          on,
          {
            record: q,
            selected: n === q.index,
            dimmed: A(q),
            multiRequest: k,
            onSelect: () => i(q.index),
            onOpenRun: c
          }
        );
      }
      case "boundary": {
        const q = N.turn, te = q.turn;
        return /* @__PURE__ */ M.createElement(
          jl,
          {
            turn: q,
            collapsed: s.has(te),
            selected: t === te,
            cellCount: ((X = q.groups[0]) == null ? void 0 : X.cells.length) ?? 0,
            onToggle: () => h(te),
            onSelect: () => c(te),
            onSkillSpanOpen: R ? (fe, re) => R(fe, re) : void 0
          }
        );
      }
      case "record":
      default: {
        const q = N.record;
        return /* @__PURE__ */ M.createElement(
          on,
          {
            record: q,
            selected: n === q.index,
            dimmed: A(q),
            multiRequest: k,
            onSelect: () => i(q.index),
            onOpenRun: c
          }
        );
      }
    }
  };
  if (O.length === 0)
    return /* @__PURE__ */ M.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ M.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        b ?? d(D, "noSessions")
      )
    );
  const I = O.length <= Rl ? /* @__PURE__ */ M.createElement("div", null, O.map((N) => L(N))) : /* @__PURE__ */ M.createElement(
    Fl,
    {
      rows: O,
      scrollRef: w,
      renderRow: L
    }
  );
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      ref: w,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    I
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
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      style: {
        height: s.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    s.getVirtualItems().map((l) => /* @__PURE__ */ M.createElement(
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
function wt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function rn(e) {
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
function an(e) {
  const n = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return n ? n[1].trim() : null;
}
function Ce(e, n = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Wl(e) {
  var ie, Z;
  const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), c = [];
  let h = "";
  const g = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  let v = [];
  const u = /* @__PURE__ */ new Set(), b = [], R = new vs(), D = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
  let k = [], O = [], A = 0, L = 0;
  const I = (y) => y.groups[0].cells, N = (y, m) => {
    const E = i.get(y);
    E ? E.push(m) : i.set(y, [m]);
  }, X = (y, m) => {
    if (!y)
      if (h)
        y = h;
      else {
        c.push(m);
        return;
      }
    const E = t.get(y);
    if (E)
      m.runIndex = E.turn ?? 0, I(E).push(m);
    else if (h) {
      const _ = t.get(h);
      _ ? (m.runIndex = _.turn ?? 0, I(_).push(m)) : N(y, m);
    } else
      N(y, m);
  }, q = (y, m) => {
    const E = i.get(m);
    if (E) {
      for (const _ of E) I(y).push(_);
      i.delete(m);
    }
  };
  for (const y of e) {
    const m = wt(y);
    switch (y.type) {
      case "run/start": {
        L += 1, b.length = 0, g.set(
          y.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const E = {
          turn: L,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${L}`, cells: [] }]
        };
        t.set(y.run_id, E), n.push(E), h = y.run_id, q(E, y.run_id);
        for (const G of c.splice(0))
          G.runIndex = L, I(E).push(G);
        const _ = Array.isArray(m.messages) ? m.messages : [], $ = String(m.query ?? "");
        let z = typeof m.slash_skill == "string" && m.slash_skill ? m.slash_skill : an($);
        !z && _.length > 0 && (z = an(String(((ie = _[0]) == null ? void 0 : ie.text) ?? ""))), z && (u.add(z), b.push([z, "slash"]), R.onRunStart(), R.onSlashSkill(
          z,
          y.seq,
          ge(y.t) ?? 0
        ), D.set(`${z}#${y.seq}`, E));
        const B = {
          index: ++A,
          runIndex: L,
          runId: y.run_id,
          kind: "user",
          text: Ce($) || Ce((Z = _.at(-1)) == null ? void 0 : Z.text),
          messages: _,
          timeSeconds: 0,
          startedAt: ge(y.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: z ?? void 0,
          model: void 0
        };
        o.set(y.run_id, B), I(E).push(B);
        break;
      }
      case "run/end": {
        const E = t.get(y.run_id);
        h === y.run_id && (h = ""), b.length = 0, R.onRunEnd(y.seq, ge(y.t) ?? 0), g.delete(y.run_id), o.delete(y.run_id);
        const _ = String(m.status ?? "unknown");
        if (E && (E.status = _, E.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), _ === "error" && m.error) {
          const $ = E ?? {
            turn: null,
            status: _,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          E || n.push($), $.groups[0].cells.push({
            index: ++A,
            runIndex: L,
            runId: y.run_id,
            kind: "system",
            markerKind: "error",
            text: Ce(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: ge(y.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [y]
          });
        }
        break;
      }
      case "agent/spawn": {
        const E = typeof m.child_session_id == "string" ? m.child_session_id : void 0, _ = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        X(y.run_id, {
          index: ++A,
          runIndex: 0,
          runId: y.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${_} → ${E ?? "?"}`,
          timeSeconds: 0,
          startedAt: ge(y.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: E,
          spawnAgent: _,
          raw: [y]
        });
        break;
      }
      case "message/inbound": {
        const E = Array.isArray(m.parts) ? m.parts : [], _ = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, $ = E.map((ne) => ({
          type: String(ne.type ?? "?"),
          text: typeof ne.text == "string" ? ne.text : void 0
        })), z = g.get(y.run_id) ?? "", B = _ && typeof _.user_id == "string" && _.user_id ? _.user_id : void 0, G = Ce(
          $.map((ne) => ne.text ?? "").filter(Boolean).join(`
`)
        ), P = o.get(y.run_id);
        P && !P.inboundParts ? (P.inboundParts = $, P.channel = z || void 0, P.userId = B, P.raw = [
          ...P.raw ?? [],
          y
        ], P.text || (P.text = G)) : X(y.run_id, {
          index: ++A,
          runIndex: 0,
          runId: y.run_id,
          kind: "user",
          text: G || "📥",
          timeSeconds: 0,
          startedAt: ge(y.t) ?? 0,
          isError: !1,
          running: !1,
          channel: z || void 0,
          userId: B,
          inboundParts: $,
          raw: [y]
        });
        break;
      }
      case "message/outbound": {
        const E = typeof m.text == "string" ? m.text : "";
        X(y.run_id, {
          index: ++A,
          runIndex: 0,
          runId: y.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: ge(y.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: E || void 0,
          receipt: {
            channel: g.get(y.run_id) || void 0,
            chars: E.length
          },
          raw: [y]
        });
        break;
      }
      case "approval/asked": {
        X(y.run_id, {
          index: ++A,
          runIndex: 0,
          runId: y.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(m.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: ge(y.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [y]
        });
        break;
      }
      case "approval/decided": {
        const E = String(m.decision ?? "?"), _ = m.tool_name ? String(m.tool_name) : "";
        X(y.run_id, {
          index: ++A,
          runIndex: 0,
          runId: y.run_id,
          kind: "system",
          markerKind: "approval",
          text: _ ? `${_} → ${E}` : E,
          timeSeconds: 0,
          startedAt: ge(y.t) ?? 0,
          isError: E === "denied",
          running: !1,
          raw: [y]
        });
        break;
      }
      case "llm/header": {
        const E = typeof m.sha256 == "string" ? m.sha256 : "", _ = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, $ = m.reason === "changed" ? "changed" : "initial", z = typeof m.system_prompt == "string" ? m.system_prompt : "", B = Array.isArray(m.tools) ? m.tools : [], G = Array.isArray(m.schemas) ? m.schemas : void 0;
        X(y.run_id, {
          index: ++A,
          runIndex: 0,
          runId: y.run_id,
          kind: "system",
          markerKind: "header",
          text: $ === "initial" ? `⚙ ${z ? `System Prompt (${z.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ge(y.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: z,
          prevPrompt: f.get(_ ?? ""),
          headerTools: B,
          headerReason: $,
          sha: E,
          prevSha: _,
          schemas: G,
          raw: [y]
        }), E && f.set(E, z), z && (v = Kl(z));
        break;
      }
      case "llm/call": {
        const E = wt(y), _ = E.options && typeof E.options == "object" && Object.keys(E.options).length > 0 ? E.options : void 0, $ = E.messages_meta, z = $ && typeof $ == "object" ? {
          count: typeof $.count == "number" ? $.count : 0,
          totalChars: typeof $.total_chars == "number" ? $.total_chars : 0,
          charsByRole: rn($.chars_by_role) ? $.chars_by_role : {},
          countByRole: rn($.count_by_role) ? $.count_by_role : {},
          maxToolChars: typeof $.max_tool_chars == "number" ? $.max_tool_chars : 0
        } : void 0, B = Hl(E.messages_new);
        let G;
        if (E.context_reset === !0) {
          const ee = (B ?? []).map(
            (ae) => ({
              role: ae.role,
              chars: ae.chars,
              text: ae.text
            })
          );
          let ue;
          k.length > 0 || ee.length === 0 ? ue = k : ue = O.map((ae) => ({
            role: ae.role,
            text: ae.text
          })), G = _s(ue, ee), z && (G.afterChars = z.totalChars);
        }
        if (B) {
          const ee = B.map((ue) => ({
            role: ue.role,
            chars: ue.chars,
            text: ue.text
          }));
          E.context_reset === !0 ? k = ee : E.tail_update === !0 ? k = [...k.slice(0, -1), ...ee] : typeof E.messages_count == "number" && B.length >= E.messages_count && k.length > 0 ? k = ee : k = [...k, ...ee];
        }
        O = Array.isArray(E.messages) ? E.messages.map((ee) => ({
          role: ee.role,
          text: ee.text
        })) : [];
        const P = {
          index: ++A,
          runIndex: 0,
          runId: y.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ge(y.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(E.model ?? "unknown"),
          provider: typeof E.provider == "string" && E.provider ? E.provider : void 0,
          messagesMeta: z,
          inputNew: B,
          contextReset: E.context_reset === !0,
          resetDetail: G,
          options: _
        };
        X(y.run_id, P);
        const ne = s.get(y.run_id) ?? [];
        ne.push({ cell: P, callData: E, call: y }), s.set(y.run_id, ne);
        break;
      }
      case "llm/api_request": {
        const E = s.get(y.run_id), _ = E && E.length > 0 ? E[E.length - 1].cell : l.get(y.run_id);
        if (_) {
          const $ = Array.isArray(m.messages) ? m.messages : [];
          _.apiPayload = {
            model: String(m.model ?? "unknown"),
            messages: $.map((z) => ({
              role: String(z.role ?? "?"),
              content: typeof z.content == "string" ? z.content : JSON.stringify(z.content ?? ""),
              toolCallId: typeof z.tool_call_id == "string" ? z.tool_call_id : void 0
            })),
            params: m.params && typeof m.params == "object" ? m.params : void 0,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : void 0
          }, _.raw = [
            ..._.raw ?? [],
            y
          ];
        }
        break;
      }
      case "llm/api_response": {
        const E = l.get(y.run_id);
        E && E.apiPayload && (m.usage && typeof m.usage == "object" && (E.apiPayload.usage = m.usage), typeof m.duration_ms == "number" && (E.apiPayload.durationMs = m.duration_ms));
        break;
      }
      case "llm/result": {
        const E = s.get(y.run_id), _ = E == null ? void 0 : E.shift(), $ = (_ == null ? void 0 : _.callData) ?? {}, z = typeof m.duration_ms == "number" ? m.duration_ms : null, B = m.usage ?? void 0, G = m.timing, P = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, ue = {
          text: (m.error ? Ce(String(m.error)) : Ce(String(m.text ?? ""))) || (P && P.length > 0 ? `🛠 ${P.map((ae) => ae.name).join(", ")}` : ""),
          timeSeconds: z === null ? null : z / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: B,
          timing: G,
          toolCalls: P,
          note: m.note ? String(m.note) : void 0
        };
        _ ? (Object.assign(_.cell, ue), l.set(y.run_id, _.cell), _.cell.model = String(
          m.model ?? $.model ?? _.cell.model
        ), _.cell.raw = [
          ..._.call ? [_.call] : [],
          y
        ]) : X(y.run_id, {
          index: ++A,
          runIndex: 0,
          runId: y.run_id,
          kind: "message",
          startedAt: ge(y.t) ?? 0,
          model: String(m.model ?? $.model ?? "unknown"),
          ...ue
        });
        break;
      }
      case "tool/call": {
        const E = wt(y), _ = String(E.name ?? "?"), $ = _ === "Skill" ? Ul(E.input) : void 0;
        if ($) {
          u.add($), b.push([$, "load"]);
          const ce = R.onSkillLoad(
            $,
            y.seq,
            ge(y.t) ?? 0
          ), Se = t.get(y.run_id);
          Se && D.set(ce, Se);
        }
        const z = E.input ? String(E.input) : void 0;
        let B;
        if (!$ && z) {
          const ce = typeof E.skill_resource == "string" ? E.skill_resource : void 0;
          ce && (B = ce);
        }
        if (!$ && !B && z && v.length > 0) {
          const ce = Hn(z);
          for (const [Se, Ie] of v)
            if (ce.includes(Se)) {
              B = Ie;
              break;
            }
        }
        let G, P;
        if (!$ && !B && z && w.size > 0) {
          const ce = ks(z, w);
          ce && (G = ce.skill, P = ce.feature);
        }
        let ne, ee;
        if (!$ && !B && !G && b.length > 0) {
          const [ce, Se] = b[b.length - 1];
          ne = ce, ee = Se;
        }
        const ue = R.onToolCall({
          attribution: B ? { skill: B, kind: "path", detail: "skill dir in input" } : G ? {
            skill: G,
            kind: "content",
            detail: `“${P}” in input (skill doc)`
          } : ne ? {
            skill: ne,
            kind: "temporal",
            detail: ee === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: A + 1,
          seq: y.seq,
          t: ge(y.t) ?? 0
        });
        if (ue && !D.has(ue)) {
          const ce = t.get(y.run_id);
          ce && D.set(ue, ce);
        }
        const ae = {
          index: ++A,
          runIndex: 0,
          runId: y.run_id,
          kind: "tool",
          text: $ ? `📚 ${$}` : `${_}(${Ce(String(E.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: ge(y.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: _,
          skillName: $,
          inSkill: B,
          inSkillLoaded: B ? u.has(B) : void 0,
          guidedSkill: ne ?? G,
          guidedReason: ee ?? (G ? "load" : void 0),
          skillSpanId: ue ?? void 0,
          toolInput: E.input ? String(E.input) : void 0
        };
        X(y.run_id, ae);
        const Te = r.get(y.run_id) ?? [];
        Te.push({ cell: ae, callData: E, call: y }), r.set(y.run_id, Te);
        break;
      }
      case "tool/result": {
        const E = r.get(y.run_id), _ = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let $;
        if (E) {
          const ee = _ ? E.findIndex(
            (ue) => ue.callData.tool_call_id === _
          ) : -1;
          ee >= 0 ? $ = E.splice(ee, 1)[0] : $ = E.shift();
        }
        const z = typeof m.duration_ms == "number" ? m.duration_ms : null, B = m.ok !== !1 && !m.error, G = m.output ? String(m.output) : void 0, P = G ? ` → ${Ce(G, 60)}` : "", ne = {
          timeSeconds: z === null ? null : z / 1e3,
          isError: !B,
          running: !1,
          toolOutput: G,
          toolOutputChars: typeof m.output_chars == "number" ? m.output_chars : void 0,
          toolOutputBytes: typeof m.output_bytes == "number" ? m.output_bytes : void 0,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        if ($) {
          if (Object.assign($.cell, ne), !$.cell.skillName)
            $.cell.text = `${$.cell.text}${P}`;
          else if (G) {
            const ee = typeof m.skill_sha == "string" ? m.skill_sha : null;
            ee && C.get($.cell.skillName) === ee || (w.set(
              $.cell.skillName,
              xs(G)
            ), ee && C.set($.cell.skillName, ee));
          }
          $.cell.raw = [
            ...$.call ? [$.call] : [],
            y
          ];
        } else
          X(y.run_id, {
            index: ++A,
            runIndex: 0,
            runId: y.run_id,
            kind: "tool",
            text: `?${P}`,
            startedAt: ge(y.t) ?? 0,
            ...ne
          });
        break;
      }
    }
  }
  for (const [y, m] of i) {
    const E = t.get(y);
    if (E) {
      for (const _ of m) I(E).push(_);
      i.delete(y);
    }
  }
  for (const y of n) {
    const m = [];
    for (const E of y.groups)
      for (const _ of E.cells)
        _.skillName && !m.includes(_.skillName) && m.push(_.skillName);
    m.length > 0 && (y.skillsUsed = m);
  }
  const te = R.spans(), fe = new Set(te.map((y) => y.skill)).size, re = /* @__PURE__ */ new Map();
  for (const y of n)
    for (const m of y.groups)
      for (const E of m.cells) re.set(E.index, E);
  for (const y of te) {
    const m = D.get(y.id);
    m && (m.skillSpans ?? (m.skillSpans = [])).push(y);
    for (const E of y.attributedIndexes) {
      const _ = re.get(E);
      _ && (_.skillSpanId = y.id, _.skillSpanHue = fe > 1 ? y.colorHue : void 0, _.skillSpanBypass = y.bypass);
    }
  }
  return n;
}
function cn(e) {
  return e.flatMap((n) => n.groups.flatMap((t) => t.cells));
}
function Vl(e) {
  var i;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const n = e[0], t = ((i = n.groups[0]) == null ? void 0 : i.cells) ?? [], s = t.findIndex(
    (c) => c.kind === "system" && c.headerReason === "initial" && c.prompt !== void 0
  );
  if (s < 0) return { initial: null, turns: [...e] };
  const l = t[s], r = {
    ...n,
    groups: [
      {
        ...n.groups[0],
        cells: t.filter((c, h) => h !== s)
      }
    ]
  };
  return { initial: l, turns: [r, ...e.slice(1)] };
}
const ye = {
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
}, un = "agent-trace-timeline-styles", Gl = `
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
let Tt = !1;
function Xl() {
  if (Tt || typeof document > "u") return;
  if (document.getElementById(un)) {
    Tt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = un, e.textContent = Gl, document.head.appendChild(e), Tt = !0;
}
function _t(e) {
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
    const r = l.groups.flatMap((i) => i.cells);
    r.length !== 0 && (l.turn !== null && s.push({
      turn: l.turn,
      time: t.length
    }), t.push(
      ...r.map(
        (i, c) => ({
          start: t.length + c,
          end: t.length + c + 1,
          index: i.index,
          isError: i.isError === !0,
          kind: i.kind,
          label: i.text,
          lane: Un(i.kind)
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
  const s = e.flatMap((o) => {
    const f = o.groups.flatMap(
      (v) => v.cells.flatMap((u) => {
        const b = Kn(u);
        return b === null ? [] : [
          {
            ...b,
            index: u.index,
            isError: u.isError === !0,
            kind: u.kind,
            label: u.text,
            lane: Un(u.kind)
          }
        ];
      })
    );
    return f.length === 0 ? [] : [{ turn: o.turn, rawSpans: f }];
  }), l = s.flatMap((o) => o.rawSpans);
  if (l.length === 0) return null;
  const r = /* @__PURE__ */ new Map();
  let i = 0, c = null;
  for (const o of [...l].sort(
    (f, v) => f.start - v.start || f.end - v.end
  ))
    t && c !== null && o.start > c && (i += o.start - c), r.set(o, i), c = c === null ? o.end : Math.max(c, o.end);
  const h = [], g = [];
  for (const o of s) {
    const f = o.rawSpans.map((v) => {
      const u = r.get(v) ?? 0;
      return {
        ...v,
        start: v.start - u,
        end: (n ? v.end : v.start) - u
      };
    });
    h.push(...f), o.turn !== null && g.push({
      turn: o.turn,
      time: Math.min(...f.map((v) => v.start))
    });
  }
  return {
    start: Math.min(...h.map((o) => o.start)),
    end: Math.max(...h.map((o) => o.end)),
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
    for (const o of e)
      for (const f of o.groups.flatMap((v) => v.cells))
        c.set(f.index, h), h += 1;
    const g = [];
    for (const o of e)
      for (const f of t(o)) {
        const v = f.attributedIndexes.map((R) => c.get(R)).filter((R) => R !== void 0);
        let u = v.length ? Math.min(...v) : void 0;
        if (u === void 0) {
          const R = o.groups.flatMap((D) => D.cells).find(
            (D) => D.kind !== "system" && D.skillName === f.skill
          );
          u = R ? c.get(R.index) : void 0;
        }
        if (u === void 0) continue;
        const b = v.length ? Math.max(...v) : u;
        g.push(pn(f, u, b + 1));
      }
    return g;
  }
  const s = e.flatMap(
    (c) => c.groups.flatMap(
      (h) => h.cells.flatMap((g) => {
        const o = Kn(g);
        return o === null ? [] : [o];
      })
    )
  );
  s.sort((c, h) => c.start - h.start || c.end - h.end);
  const l = n === "duration", r = (c) => {
    let h = 0, g = null;
    for (const o of s) {
      if (o.start >= c) break;
      if (l && g !== null && o.start > g) {
        const f = Math.min(o.start, c);
        f > g && (h += f - g);
      }
      g = g === null ? o.end : Math.max(g, o.end);
    }
    return h;
  }, i = [];
  for (const c of e)
    for (const h of t(c)) {
      const g = h.startT, o = Math.max(Es(h), g + 1), f = r(g), v = r(o);
      i.push(
        pn(
          h,
          g - f,
          Math.max(g - f + 1, o - v)
        )
      );
    }
  return i;
}
function pn(e, n, t) {
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
const rt = window.QwenPaw.host, J = rt.React, { useEffect: Je, useMemo: It, useRef: Qe, useState: Ae } = J, { Tooltip: Vn } = rt.antd, Ct = 3, Yl = 4, Zl = 0.08, eo = 0.025, to = 32, no = 0.5;
function so(e) {
  const n = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, r = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...n === void 0 ? {} : { durationMs: n },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || r === void 0 ? {} : { ttftMs: l, decodingMs: r }
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
  const s = n.durationMs === void 0 ? null : `Total ${_t(n.durationMs)}`, l = n.startedAt === void 0 ? null : n.durationMs === void 0 ? `Started ${_e(n.startedAt)}` : `${_e(n.startedAt)} → ${_e(
    n.startedAt + n.durationMs
  )}`, r = n.ttftMs === void 0 || n.decodingMs === void 0 ? null : `TTFT ${_t(
    n.ttftMs
  )} · Decoding ${_t(n.decodingMs)}`, i = [s, r].filter((c) => c !== null).join(" · ");
  return [t, l, i].filter((c) => c !== null && c !== "").join(`
`);
}
function Lt(e, n) {
  return e <= n ? { start: e, end: n } : { start: n, end: e };
}
function Mt(e) {
  return Math.min(1, Math.max(0, e));
}
function io(e, n, t, s) {
  const l = Math.min(s - t, Math.max(0, n)), r = Math.min(
    Math.max(e - l / 2, t),
    s - l
  );
  return { start: r, end: r + l };
}
function hn(e, n, t, s, l) {
  const r = Lt(
    Math.min(l, Math.max(s, e.start)),
    Math.min(l, Math.max(s, e.end))
  );
  return {
    start: (r.start - n) / t,
    end: (r.end - n) / t
  };
}
function Gn({
  label: e,
  placement: n,
  children: t,
  ...s
}) {
  return /* @__PURE__ */ J.createElement(
    Vn,
    {
      title: /* @__PURE__ */ J.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: no,
      ...s
    },
    t
  );
}
function fn() {
  return /* @__PURE__ */ J.createElement("div", { className: ye.labels, "aria-hidden": "true" }, /* @__PURE__ */ J.createElement("span", null, "Input"), /* @__PURE__ */ J.createElement("span", null, "Model"), /* @__PURE__ */ J.createElement("span", null, "Tools"));
}
function mn({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ J.createElement(
    Gn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ J.createElement(
      "button",
      {
        type: "button",
        className: ye.earlierHistory,
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
const ro = J.memo(function({
  turns: n,
  mode: t,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: r,
  selectedIndex: i = null,
  searchMatchIndexes: c = null,
  onRangeChange: h,
  onRecordSelect: g,
  onRecordFocus: o,
  onSkillSpanSelect: f
}) {
  const v = typeof rt.useTheme == "function" ? rt.useTheme() : void 0, u = It(
    () => Wn(n, t),
    [t, n]
  ), b = It(
    () => Jl(n, t),
    [t, n]
  ), R = It(
    () => new Map(
      n.flatMap(
        (p) => p.groups.flatMap(
          (x) => x.cells.map(
            (S) => [S.index, so(S)]
          )
        )
      )
    ),
    [n]
  ), D = Qe(null), w = Qe(null), C = Qe(null), k = Qe(null), [O, A] = Ae(null), [L, I] = Ae(null), [N, X] = Ae(null), [q, te] = Ae(!1), [fe, re] = Ae(!1), [ie, Z] = Ae(null), [y, m] = Ae(!1);
  Je(() => {
    u !== null && s !== null && (s.end < u.start || s.start > u.end) && h(null);
  }, [u, h, s]), Je(() => {
    u !== null && (m(!1), Z(
      (p) => p !== null && (p.end < u.start || p.start > u.end) ? null : p
    ));
  }, [u]), Je(() => {
    if (u === null || i === null) return;
    const p = u.spans.find(
      (x) => x.index === i
    );
    p !== void 0 && (m(!0), Z((x) => {
      if (x === null || p.end > x.start && p.start < x.end)
        return x;
      const S = Math.max(1, x.end - x.start), H = p.end <= x.start ? p.start : p.end - S, V = Math.min(
        Math.max(H, u.start),
        Math.max(u.start, u.end - S)
      );
      return V === x.start ? x : { start: V, end: V + S };
    }));
  }, [u, i]);
  const E = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), _ = Math.min(
    E,
    Math.max(1, ((ie == null ? void 0 : ie.end) ?? 0) - ((ie == null ? void 0 : ie.start) ?? 0))
  ), $ = u === null || ie === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(ie.start, u.start),
    u.end - _
  ), z = ie === null ? E : _, B = ie === null ? (u == null ? void 0 : u.start) ?? 0 : $, G = l && u !== null && B === u.start, P = r === void 0 || q ? void 0 : () => {
    te(!0), r().finally(() => {
      te(!1);
    });
  }, ne = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(B - u.start) / z * 100}%`,
    "--trajectory-domain-width": `${E / z * 100}%`
  }, ee = u === null || s === null ? null : hn(
    s,
    B,
    z,
    u.start,
    u.end
  ), ae = (u === null || O === null ? null : hn(
    O,
    B,
    z,
    u.start,
    u.end
  )) ?? ee, Te = O ?? s;
  if (Je(() => {
    const p = C.current;
    if (p === null) return;
    const x = (S) => {
      S.preventDefault();
      const H = k.current;
      if (H === null || u === null) return;
      m(!1);
      const V = H.getBoundingClientRect(), Q = Mt(
        (S.clientX - V.left) / Math.max(1, V.width)
      ), W = Math.min(
        E,
        Math.max(
          Math.min(
            t === "sequence" ? Yl : 20,
            E
          ),
          z * Math.exp(S.deltaY * 15e-4)
        )
      );
      if (W >= E * 0.999) {
        Z(null);
        return;
      }
      const le = B + Q * z, me = Math.min(
        Math.max(le - Q * W, u.start),
        u.end - W
      );
      Z({ start: me, end: me + W });
    };
    return p.addEventListener("wheel", x, { passive: !1 }), () => {
      p.removeEventListener("wheel", x);
    };
  }, [z, B, E, t, u]), u === null)
    return /* @__PURE__ */ J.createElement(
      "section",
      {
        ref: C,
        className: ye.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ J.createElement("div", { className: ye.plot }, /* @__PURE__ */ J.createElement(fn, null), /* @__PURE__ */ J.createElement("div", { className: ye.track }, /* @__PURE__ */ J.createElement("span", { className: ye.empty }, "No timing data"), l && /* @__PURE__ */ J.createElement(
        mn,
        {
          loading: q,
          onHover: () => {
            I(null);
          },
          onLoad: P
        }
      )))
    );
  const ce = Math.min(
    z,
    E / u.spans.length
  ), Se = (p) => {
    const x = p.currentTarget.getBoundingClientRect();
    return Mt((p.clientX - x.left) / Math.max(1, x.width));
  }, Ie = (p) => {
    var V;
    const x = p.target instanceof HTMLElement ? p.target : null, S = (V = x == null ? void 0 : x.closest("[data-timeline-record-index]")) == null ? void 0 : V.dataset.timelineRecordIndex;
    if (S === void 0) return null;
    const H = Number(S);
    return Number.isFinite(H) ? H : null;
  }, dt = (p) => {
    h(p);
  }, pt = (p) => {
    if (p.button === 2) {
      w.current = {
        anchorClientX: p.clientX,
        anchorStart: B,
        moved: !1,
        pannable: ie !== null,
        pointerId: p.pointerId
      }, ie !== null && m(!1), re(!0), typeof p.currentTarget.setPointerCapture == "function" && p.currentTarget.setPointerCapture(p.pointerId);
      return;
    }
    if (p.button !== 0) return;
    const x = Se(p), S = B + x * z, H = Ie(p);
    I({ fraction: x, recordIndex: H }), D.current = {
      pointerId: p.pointerId,
      anchorTime: S,
      anchorClientX: p.clientX,
      recordIndex: H
    }, typeof p.currentTarget.setPointerCapture == "function" && p.currentTarget.setPointerCapture(p.pointerId), A({ start: S, end: S });
  }, ht = (p) => {
    const x = p.currentTarget.getBoundingClientRect(), S = Se(p);
    I({ fraction: S, recordIndex: Ie(p) });
    const H = w.current;
    if (H !== null && H.pointerId === p.pointerId) {
      if (Math.abs(p.clientX - H.anchorClientX) >= Ct && (H.moved = !0), !H.pannable) return;
      const le = (p.clientX - H.anchorClientX) / Math.max(1, x.width), me = Math.min(
        Math.max(H.anchorStart - le * z, u.start),
        u.end - z
      );
      Z({ start: me, end: me + z });
      return;
    }
    const V = D.current;
    if (V === null || V.pointerId !== p.pointerId) return;
    let Q = B;
    if (ie !== null) {
      const le = p.clientX - x.left, me = Math.min(
        to,
        Math.max(1, x.width * Zl)
      ), de = le < me ? -1 : le > x.width - me ? 1 : 0;
      if (de !== 0) {
        const Le = de < 0 ? me - le : le - (x.width - me), xe = Mt(Le / me), ke = B + de * z * eo * Math.max(0.2, xe);
        Q = Math.min(
          Math.max(ke, u.start),
          u.end - z
        ), Q !== B && (m(!1), Z({
          start: Q,
          end: Q + z
        }));
      }
    }
    const W = Q + S * z;
    A(Lt(V.anchorTime, W));
  }, Ve = (p) => {
    const x = w.current;
    if (x !== null && x.pointerId === p.pointerId) {
      const de = x.moved || Math.abs(p.clientX - x.anchorClientX) >= Ct;
      w.current = null, re(!1), de || h(null);
      return;
    }
    const S = D.current;
    if (S === null || S.pointerId !== p.pointerId) return;
    const H = Se(p), V = B + H * z, Q = Lt(S.anchorTime, V);
    I({ fraction: H, recordIndex: Ie(p) }), D.current = null, A(null);
    const W = Math.abs(p.clientX - S.anchorClientX) < Ct, le = W && S.recordIndex !== null ? u.spans.find((de) => de.index === S.recordIndex) : void 0;
    if (le !== void 0) {
      h(null), g == null || g(le.index);
      return;
    }
    const me = Q.end - Q.start < ce ? io(
      W ? Q.start : (Q.start + Q.end) / 2,
      ce,
      u.start,
      u.end
    ) : Q;
    if (dt(me), W) {
      const de = Q.start, Le = u.spans.reduce((xe, ke) => {
        const Xe = de < xe.start ? xe.start - de : de > xe.end ? de - xe.end : 0;
        return (de < ke.start ? ke.start - de : de > ke.end ? de - ke.end : 0) < Xe ? ke : xe;
      });
      o == null || o(Le.index);
    }
  }, Ge = (p) => {
    p.key !== "Escape" || s === null || (p.preventDefault(), h(null));
  }, ft = () => {
    D.current = null, w.current = null, A(null), I(null), re(!1);
  };
  return /* @__PURE__ */ J.createElement(
    "section",
    {
      ref: C,
      className: ye.root,
      "data-theme": v || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ J.createElement("div", { className: ye.plot }, /* @__PURE__ */ J.createElement(fn, null), /* @__PURE__ */ J.createElement(
      "div",
      {
        ref: k,
        className: ye.track,
        "data-panning": fe || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: Ge,
        onPointerDown: pt,
        onPointerMove: ht,
        onPointerUp: Ve,
        onPointerCancel: ft,
        onPointerLeave: () => {
          D.current === null && w.current === null && I(null);
        },
        onDoubleClick: (p) => {
          p.preventDefault(), h(null);
        },
        onContextMenu: (p) => {
          p.preventDefault();
        }
      },
      G && /* @__PURE__ */ J.createElement(
        mn,
        {
          loading: q,
          onHover: () => {
            I(null);
          },
          onLoad: P
        }
      ),
      L !== null && L.recordIndex === null && O === null && /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ye.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${L.fraction * 100}%`
          }
        }
      ),
      ae !== null && /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ye.selection,
          "data-dragging": O === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ae.start * 100}%`,
            "--trajectory-selection-width": `${(ae.end - ae.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ye.selectionEdges,
          "data-dragging": O === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ae.start * 100}%`,
            "--trajectory-selection-width": `${(ae.end - ae.start) * 100}%`
          }
        }
      )),
      b !== null && u !== null && /* @__PURE__ */ J.createElement(
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
        b.map((p) => {
          const x = (p.start - u.start) / E, S = Math.max(
            (p.end - p.start) / E,
            4e-3
          ), H = oe(), V = `${p.bypass ? "⚠ " : ""}${p.skill} · ${p.trigger}${p.open ? ` · ${d(H, "spanOpen")}` : ""}`, Q = N === p.spanId, W = S > 0.14 && !p.bypass;
          return /* @__PURE__ */ J.createElement(Vn, { title: V, key: p.spanId }, /* @__PURE__ */ J.createElement(
            "span",
            {
              onPointerDown: (le) => {
                le.stopPropagation();
              },
              onClick: f ? (le) => {
                le.stopPropagation(), f(p.spanId);
              } : void 0,
              onMouseEnter: () => X(p.spanId),
              onMouseLeave: () => X(
                (le) => le === p.spanId ? null : le
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, x) * 100}%`,
                width: `${S * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${p.hue}, 65%, ${Q ? 62 : 55}%, ${Q ? 0.85 : 0.55})`,
                border: p.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${p.hue}, 55%, 45%, 0.8)`,
                pointerEvents: f ? "auto" : "none",
                cursor: f ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            W ? /* @__PURE__ */ J.createElement(
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
              p.skill
            ) : null
          ));
        })
      ),
      /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ye.turnBoundaries,
          "data-animate-viewport": y || void 0,
          "aria-hidden": "true",
          style: ne
        },
        u.turnBoundaries.filter(
          (p) => p.time > u.start && p.time >= B && p.time <= B + z
        ).map((p) => /* @__PURE__ */ J.createElement(
          "span",
          {
            className: ye.turnBoundary,
            "data-turn": p.turn,
            key: p.turn,
            style: {
              "--trajectory-turn-left": `${(p.time - u.start) / E * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ye.lanes,
          "data-animate-viewport": y || void 0,
          "data-timeline-domain": !0,
          style: ne
        },
        u.spans.filter(
          (p) => p.index === i || p.end >= B && p.start <= B + z
        ).map((p) => {
          const x = (p.start - u.start) / E, H = (p.end - p.start) / E * 100, V = R.get(p.index), Q = V == null ? void 0 : V.ttftMs, W = V == null ? void 0 : V.decodingMs, le = Q === void 0 || W === void 0 || Q + W <= 0 ? null : Q / (Q + W);
          return /* @__PURE__ */ J.createElement(
            Gn,
            {
              key: p.index,
              label: oo(p.kind, V),
              placement: "bottom"
            },
            /* @__PURE__ */ J.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: ye.span,
                "data-timeline-span": p.kind,
                "data-timeline-record-index": p.index,
                "data-assistant-timing": le === null ? void 0 : "true",
                "data-error": p.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": p.index === i || void 0,
                "data-hovered": (L == null ? void 0 : L.recordIndex) === p.index || void 0,
                "data-search-match": c === null ? void 0 : c.has(p.index) ? "true" : "false",
                "data-selected": Te === null ? void 0 : p.start <= Te.end && p.end >= Te.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${x * 100}%`,
                  "--trajectory-span-width": `${H}%`,
                  "--trajectory-span-gap": `min(${H * 0.08}%, 1px)`,
                  "--trajectory-span-lane": p.lane,
                  ...le === null ? {} : {
                    "--trajectory-assistant-ttft": `${le * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), Dt = window.QwenPaw.host, se = Dt.React, { Button: ao, Input: co, Popover: uo, Segmented: po, Tooltip: gn } = Dt.antd, {
  MenuFoldOutlined: ho,
  MenuUnfoldOutlined: fo,
  QuestionCircleOutlined: mo,
  ReloadOutlined: go,
  SearchOutlined: yo
} = Dt.antdIcons;
function vo({
  mode: e,
  onModeChange: n,
  search: t,
  onSearchChange: s,
  onRefresh: l,
  modeOptions: r,
  allCollapsed: i,
  hasRequests: c,
  onToggleCollapseAll: h,
  callsCollapsed: g,
  onToggleCallsCollapsed: o
}) {
  const f = oe();
  return /* @__PURE__ */ se.createElement(
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
    /* @__PURE__ */ se.createElement(gn, { title: d(f, "projectionHint") }, /* @__PURE__ */ se.createElement(
      po,
      {
        size: "small",
        value: e,
        options: r,
        onChange: (v) => n(v)
      }
    )),
    /* @__PURE__ */ se.createElement(
      co,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ se.createElement(yo, null),
        placeholder: d(f, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (v) => s(v.target.value)
      }
    ),
    c && /* @__PURE__ */ se.createElement(
      gn,
      {
        title: i ? d(f, "expandAll") : d(f, "collapseAll")
      },
      /* @__PURE__ */ se.createElement(
        ao,
        {
          size: "small",
          type: "text",
          icon: i ? /* @__PURE__ */ se.createElement(fo, null) : /* @__PURE__ */ se.createElement(ho, null),
          onClick: h
        }
      )
    ),
    /* @__PURE__ */ se.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ se.createElement(
      uo,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ se.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ se.createElement("div", null, /* @__PURE__ */ se.createElement("strong", null, "📚"), " ", d(f, "legendLoad")), /* @__PURE__ */ se.createElement("div", null, /* @__PURE__ */ se.createElement("strong", null, "⚡"), " ", d(f, "legendResource")), /* @__PURE__ */ se.createElement("div", null, /* @__PURE__ */ se.createElement("strong", null, "∈"), " ", d(f, "legendGuided")), /* @__PURE__ */ se.createElement("div", null, /* @__PURE__ */ se.createElement("strong", null, d(f, "legendStripTitle")), " ", d(f, "legendStrip")), /* @__PURE__ */ se.createElement("div", null, /* @__PURE__ */ se.createElement("strong", null, d(f, "legendBandTitle")), " ", d(f, "legendBand")))
      },
      /* @__PURE__ */ se.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ se.createElement(mo, null), " ", d(f, "legendTitle"))
    ), /* @__PURE__ */ se.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ se.createElement(go, null),
      " ",
      d(f, "refresh")
    ))
  );
}
const ut = window.QwenPaw.host, j = ut.React, { useCallback: yn, useEffect: Ye, useMemo: we, useRef: Eo, useState: ve } = j, {
  Button: Ze,
  Empty: vn,
  Popconfirm: So,
  Popover: bo,
  Space: xo,
  Spin: Xn,
  Switch: ko,
  Tag: wo,
  Tooltip: To,
  message: Ke
} = ut.antd, { DeleteOutlined: _o, DownloadOutlined: Io, SettingOutlined: En } = ut.antdIcons, { Text: $e } = ut.antd.Typography;
function Sn({
  config: e,
  onChange: n,
  children: t
}) {
  const s = oe(), l = (i, c, h) => /* @__PURE__ */ j.createElement(
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
    /* @__PURE__ */ j.createElement($e, { style: { fontSize: 13 } }, i),
    /* @__PURE__ */ j.createElement(
      ko,
      {
        size: "small",
        checked: !!c,
        onChange: (g) => n({ [h]: g })
      }
    )
  ), r = /* @__PURE__ */ j.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ j.createElement($e, { strong: !0, style: { fontSize: 13 } }, d(s, "settings")), /* @__PURE__ */ j.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(d(s, "enabled"), e.enabled, "enabled"),
    l(d(s, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      d(s, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      d(s, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ j.createElement(Xn, { size: "small" })));
  return /* @__PURE__ */ j.createElement(bo, { content: r, trigger: "click", placement: "bottomRight" }, t);
}
function Co({
  sessionId: e,
  summary: n,
  locale: t,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  const [r, i] = ve(null), [c, h] = ve(!1), [g, o] = ve(!1), [f, v] = ve(""), [u, b] = ve("sequence"), [R, D] = ve(null), [w, C] = ve(null), [k, O] = ve(null), [A, L] = ve(null), [I, N] = ve(
    /* @__PURE__ */ new Set()
  ), [X, q] = ve(!1), [te, fe] = ve(null), [re, ie] = ve(null), [Z, y] = ve(null), [m, E] = ve(null), _ = Eo(null);
  _.current = e, Ye(() => {
    ls().then(fe).catch(() => fe(null));
  }, []);
  const $ = yn(async (p, x) => {
    x || h(!0);
    try {
      const S = await ss(p, {
        beforeSeq: x,
        limit: 200
      });
      E(null), i((H) => x && H ? {
        ...S,
        events: [...S.events, ...H.events]
      } : S);
    } catch (S) {
      E({
        message: String(S.message),
        status: S instanceof zn ? S.status : null
      });
    } finally {
      x || h(!1);
    }
  }, []), z = yn(async (p) => {
    try {
      const x = await ns(p);
      y(x), ie({
        sessionId: p,
        inputTokens: x.input_tokens,
        outputTokens: x.output_tokens,
        totalTokens: x.total_tokens,
        reasoningTokens: Number(x.reasoning_tokens ?? 0)
      });
    } catch {
      y(null), ie(null);
    }
  }, []);
  Ye(() => {
    e ? (D(null), C(null), O(null), N(/* @__PURE__ */ new Set()), v(""), $(e), z(e)) : (i(null), y(null), ie(null));
  }, [e, $, z]);
  const B = we(
    () => r ? Wl(r.events) : [],
    [r]
  ), { initial: G, turns: P } = we(
    () => Vl(B),
    [B]
  ), ne = we(
    () => G ? [G, ...cn(P)] : cn(P),
    [G, P]
  ), ee = we(
    () => P.some((p) => p.status === "running"),
    [P]
  );
  Ye(() => {
    if (!e || !ee) return;
    const p = setInterval(() => {
      document.visibilityState === "visible" && _.current && $(_.current);
    }, 5e3);
    return () => clearInterval(p);
  }, [e, ee, $]);
  const ue = we(
    () => R === null ? null : Ql(P, R, u),
    [R, P, u]
  ), ae = we(() => {
    const p = f.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (p.length === 0) return null;
    const x = (S) => {
      var H, V, Q;
      return [
        S.text,
        S.outputText,
        S.thinkingText,
        S.toolName,
        S.toolInput,
        S.toolOutput,
        S.toolError,
        S.model,
        S.provider,
        S.marker,
        S.skillName,
        S.inSkill,
        S.guidedSkill,
        S.channel,
        (H = S.messages) == null ? void 0 : H.map((W) => `${W.role} ${W.text}`).join(`
`),
        (V = S.inputNew) == null ? void 0 : V.map((W) => `${W.role} ${W.text ?? ""}`).join(`
`),
        S.apiPayload ? [
          S.apiPayload.model,
          ...S.apiPayload.messages.map(
            (W) => `${W.role} ${W.content}`
          )
        ].join(`
`) : "",
        S.options ? JSON.stringify(S.options) : "",
        (Q = S.headerTools) == null ? void 0 : Q.join(" "),
        S.prompt ?? ""
      ].filter(Boolean).join(`
`).toLowerCase();
    };
    return new Set(
      ne.filter((S) => {
        const H = x(S);
        return p.every((V) => H.includes(V));
      }).map((S) => S.index)
    );
  }, [f, ne]), Te = we(
    () => w === null ? null : ne.find((p) => p.index === w) ?? null,
    [ne, w]
  ), ce = we(() => {
    var Ht, Ut;
    if (k === null) return null;
    const p = P.find((U) => U.turn === k);
    if (!p) return null;
    const x = ((Ht = p.groups[0]) == null ? void 0 : Ht.cells) ?? [], S = x.filter((U) => U.kind === "message"), H = x.filter((U) => U.kind === "tool"), V = [
      ...new Set(
        S.map((U) => U.model).filter((U) => !!U)
      )
    ], Q = [
      ...new Set(
        S.map((U) => U.provider).filter((U) => !!U)
      )
    ];
    let W = 0, le = 0, me = 0, de = 0, Le = 0, xe = null, ke = 0;
    const Xe = [];
    for (const U of x)
      U.usage && (W += U.usage.input_tokens ?? 0, le += U.usage.output_tokens ?? 0, me += U.usage.cache_input_tokens ?? 0, de += U.usage.cache_creation_input_tokens ?? 0, Le += U.usage.reasoning_tokens ?? 0), U.timing && (xe = xe === null ? U.timing.ttft_ms : Math.min(xe, U.timing.ttft_ms), ke = (ke ?? 0) + U.timing.decode_ms), U.isError && Xe.push(U.toolError ?? U.text ?? "error");
    const ze = x.find((U) => U.kind === "user"), qn = (Ut = [...S].reverse().find((U) => U.options)) == null ? void 0 : Ut.options, mt = [...S].reverse().find((U) => U.outputText);
    let jt;
    const Bt = S.filter((U) => U.messagesMeta);
    if (Bt.length > 0) {
      const U = {};
      let Ne = 0, yt = 0;
      for (const Qn of Bt) {
        const vt = Qn.messagesMeta;
        for (const [Kt, Yn] of Object.entries(vt.charsByRole))
          U[Kt] = (U[Kt] ?? 0) + Yn;
        Ne += vt.totalChars, yt = Math.max(yt, vt.maxToolChars);
      }
      jt = { charsByRole: U, totalChars: Ne, maxToolChars: yt };
    }
    const gt = P.findIndex((U) => U.turn === k), Ft = gt > 0 ? P[gt - 1] : null;
    let Be = null;
    if (Ft) {
      Be = 0;
      for (const U of Ft.groups)
        for (const Ne of U.cells)
          Ne.kind === "message" && Ne.usage && (Be += Ne.usage.input_tokens ?? 0);
    }
    const Jn = Be === null && gt !== 0 ? void 0 : {
      prevInputTokens: Be,
      deltaTokens: W - (Be ?? 0)
    };
    return {
      turn: k,
      status: p.status,
      durationMs: p.durationMs,
      startedAt: (ze == null ? void 0 : ze.startedAt) ?? null,
      query: (ze == null ? void 0 : ze.text) ?? "",
      llmCalls: S.length,
      toolCalls: H.length,
      models: V,
      providers: Q,
      inputTokens: W,
      outputTokens: le,
      cacheReadTokens: me,
      cacheWriteTokens: de,
      reasoningTokens: Le,
      inputComposition: jt,
      growth: Jn,
      resultIndex: mt == null ? void 0 : mt.index,
      ttftMs: xe,
      decodeMs: ke,
      errors: Xe,
      options: qn,
      sessionTotals: re && re.sessionId === e ? {
        inputTokens: re.inputTokens,
        outputTokens: re.outputTokens,
        totalTokens: re.totalTokens,
        reasoningTokens: re.reasoningTokens
      } : void 0
    };
  }, [k, P, re, e]), Se = !!(r && r.events.length > 0 && r.events[0].seq > 1), Ie = async (p) => {
    try {
      fe(await os(p));
    } catch (x) {
      Ke.error(String(x.message));
    }
  }, dt = we(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), pt = we(() => {
    if (!Z) return null;
    const p = [
      `${Z.runs} ${d(t, "statRounds")} · ${Z.llm_calls} ${d(t, "statSteps")}`,
      `LLM ${pe(Z.llm_ms_total / 1e3)} · ${d(
        t,
        "toolCalls"
      )} ${pe(Z.tool_ms_total / 1e3)}`,
      `${d(t, "statTtftAvg")} ${Z.ttft_ms_avg === null ? "-" : pe(Z.ttft_ms_avg / 1e3)} · ${lt(
        Z.output_tokens,
        Z.decode_ms_total / 1e3
      )}`
    ];
    if (Z.cache_read_tokens > 0 || Z.cache_write_tokens > 0) {
      const x = Z.cache_read_tokens + Z.input_tokens, S = x > 0 ? Math.round(Z.cache_read_tokens / x * 100) : 0;
      p.push(`${d(t, "statCacheHit")} ${S}%`);
    }
    if (p.push(
      `${d(t, "statInput")} ${Y(
        Z.input_tokens
      )} tok · ${d(t, "statOutput")} ${Y(
        Z.output_tokens
      )} tok`
    ), n && p.push(zt(n.size_bytes)), Z.skills) {
      const x = Object.entries(Z.skills).sort((S, H) => H[1] - S[1]).map(([S, H]) => `${S} ×${H}`).join(" · ");
      x && p.push(`📚 ${x}`);
    }
    if (G != null && G.prompt) {
      const x = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set();
      for (const V of P)
        for (const Q of V.groups)
          for (const W of Q.cells)
            W.skillName ? S.add(W.skillName) : W.inSkill && x.add(W.inSkill);
      const H = [...x].filter((V) => !S.has(V));
      H.length > 0 && p.push(
        `⚡ ${d(t, "skillBypassStrip")}: ${H.join(" · ")}`
      );
    }
    return p.join(" | ");
  }, [Z, n, t, P, G]), ht = () => {
    C(null), O(null);
  };
  Ye(() => {
    w !== null && L(null);
  }, [w]);
  const Ve = we(
    () => A === null ? null : P.flatMap((p) => p.skillSpans ?? []).find((p) => p.id === A) ?? null,
    [A, P]
  ), Ge = (m == null ? void 0 : m.status) === 404, ft = Te !== null || ce !== null;
  return /* @__PURE__ */ j.createElement(
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
    /* @__PURE__ */ j.createElement(
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
      e ? /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ j.createElement(
          $e,
          {
            strong: !0,
            ellipsis: {
              tooltip: (n == null ? void 0 : n.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (n == null ? void 0 : n.title) || (n == null ? void 0 : n.agent_id) || Rn(e)
        ),
        /* @__PURE__ */ j.createElement(
          wo,
          {
            color: Nn[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Pn((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ j.createElement($e, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ j.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ j.createElement(xo, null, /* @__PURE__ */ j.createElement(Sn, { config: te, onChange: Ie }, /* @__PURE__ */ j.createElement(Ze, { size: "small", icon: /* @__PURE__ */ j.createElement(En, null) })), /* @__PURE__ */ j.createElement(To, { title: d(t, "export") }, /* @__PURE__ */ j.createElement(
          Ze,
          {
            size: "small",
            icon: /* @__PURE__ */ j.createElement(Io, null),
            onClick: () => {
              is(e).then(() => Ke.success(d(t, "exported"))).catch(
                (p) => Ke.error(String(p.message))
              );
            }
          },
          d(t, "export")
        )), /* @__PURE__ */ j.createElement(
          So,
          {
            title: d(t, "deleteConfirm"),
            onConfirm: () => {
              rs(e).then(() => {
                Ke.success(d(t, "deleted")), l == null || l();
              }).catch(
                (p) => Ke.error(String(p.message))
              );
            }
          },
          /* @__PURE__ */ j.createElement(Ze, { size: "small", danger: !0, icon: /* @__PURE__ */ j.createElement(_o, null) }, d(t, "delete"))
        )))
      ), /* @__PURE__ */ j.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ j.createElement(
          $e,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          pt ?? // Transient line while the stats endpoint responds.
          (n ? `${n.runs} ${d(t, "statRounds")} · ${n.llm_calls} ${d(t, "statSteps")} · ${Ln(
            n.total_tokens
          )} ${d(t, "tokens")} · ${zt(
            n.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ j.createElement(
          $e,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                d(t, "copySessionId"),
                d(t, "copiedSessionId")
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
      )) : /* @__PURE__ */ j.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ j.createElement($e, { type: "secondary", style: { fontSize: 13 } }, d(t, "selectSession")),
        /* @__PURE__ */ j.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ j.createElement(Sn, { config: te, onChange: Ie }, /* @__PURE__ */ j.createElement(Ze, { size: "small", icon: /* @__PURE__ */ j.createElement(En, null) })))
      )
    ),
    m && !Ge && /* @__PURE__ */ j.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ j.createElement($e, { type: "danger", style: { fontSize: 12 } }, `${d(t, "loadFailed")}: ${m.message}`)),
    /* @__PURE__ */ j.createElement(
      vo,
      {
        mode: u,
        onModeChange: b,
        search: f,
        onSearchChange: v,
        onRefresh: () => {
          e && ($(e), z(e)), l == null || l();
        },
        modeOptions: dt,
        allCollapsed: P.length > 0 && P.every((p) => I.has(p.turn ?? -1)),
        hasRequests: P.some((p) => p.turn !== null),
        callsCollapsed: X,
        onToggleCallsCollapsed: () => q((p) => !p),
        onToggleCollapseAll: () => {
          N((p) => P.some(
            (S) => S.turn !== null && !p.has(S.turn)
          ) ? new Set(
            P.map((S) => S.turn).filter((S) => S !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ j.createElement(
      ro,
      {
        turns: P,
        mode: u,
        range: R,
        hasEarlierRecords: Se,
        onLoadEarlier: async () => {
          var p;
          return !r || r.events.length === 0 ? !1 : (await $(e, (p = r.events[0]) == null ? void 0 : p.seq), !0);
        },
        selectedIndex: w,
        searchMatchIndexes: ae,
        onRangeChange: D,
        onRecordSelect: C,
        onRecordFocus: C,
        onSkillSpanSelect: L
      }
    ),
    c && !r ? /* @__PURE__ */ j.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ j.createElement(Xn, null)) : r ? /* @__PURE__ */ j.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ j.createElement(
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
      /* @__PURE__ */ j.createElement(
        Bl,
        {
          turns: P,
          selectedIndex: w,
          selectedTurn: k,
          collapsedTurns: I,
          focusIndexes: ue,
          searchMatchIndexes: ae,
          onSelectedIndexChange: (p) => {
            if (p === w) {
              C(null);
              return;
            }
            C(p), O(null);
          },
          onSkillSpanOpen: (p, x) => {
            var Q;
            const S = P.flatMap((W) => W.skillSpans ?? []), V = (x !== null ? (((Q = P.find((W) => W.turn === x)) == null ? void 0 : Q.skillSpans) ?? []).find((W) => W.skill === p) : void 0) ?? S.find((W) => W.skill === p);
            V && L(V.id);
          },
          onSelectedTurnChange: (p) => {
            O(p), C(null);
          },
          callsCollapsed: X,
          onToggleTurn: (p) => {
            N((x) => {
              const S = new Set(x);
              return S.has(p) ? S.delete(p) : S.add(p), S;
            });
          },
          hasOlderRecords: Se,
          loadingOlder: g,
          onLoadOlder: () => {
            var p;
            !r || r.events.length === 0 || (o(!0), $(
              e,
              (p = r.events[0]) == null ? void 0 : p.seq
            ).finally(() => o(!1)));
          },
          emptyText: d(t, "noSessions"),
          initialRecord: G
        }
      )
    ), Ve ? /* @__PURE__ */ j.createElement(
      qs,
      {
        span: Ve,
        records: ne,
        onJumpRecord: (p) => {
          L(null), C(p);
        },
        onClose: () => L(null)
      }
    ) : ft ? /* @__PURE__ */ j.createElement(
      Ks,
      {
        record: Te,
        request: ce,
        onJumpSession: s,
        onSelectTurn: (p) => {
          O(p), C(null);
        },
        onClose: ht
      }
    ) : null) : /* @__PURE__ */ j.createElement(
      vn,
      {
        image: vn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: Ge && e ? d(t, "noTraceForSession") : d(t, "selectSession")
      }
    )
  );
}
const je = window.QwenPaw.host, K = je.React, { useCallback: bn, useEffect: $t, useMemo: et, useState: Me } = K, { Button: xn, Empty: kn, Input: Mo, Spin: $o, Tag: wn, Tooltip: Tn } = je.antd, {
  CaretRightOutlined: zo,
  MenuFoldOutlined: Ao,
  MenuUnfoldOutlined: Oo,
  SearchOutlined: Ro
} = je.antdIcons, { Text: We } = je.antd.Typography;
function Lo({
  groups: e,
  collapsedAgents: n,
  onToggleAgent: t,
  searching: s,
  selected: l,
  onSelect: r,
  locale: i
}) {
  const c = e.length > 1;
  return /* @__PURE__ */ K.createElement(K.Fragment, null, e.map(([h, g]) => {
    const o = c && !s && n.has(h);
    return /* @__PURE__ */ K.createElement("div", { key: h }, c && /* @__PURE__ */ K.createElement(
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
      /* @__PURE__ */ K.createElement(
        zo,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: o ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ K.createElement(We, { strong: !0, style: { fontSize: 12 } }, h),
      /* @__PURE__ */ K.createElement(We, { type: "secondary", style: { fontSize: 11 } }, g.length)
    ), !o && g.map((f) => {
      const v = f.session_id === l;
      return /* @__PURE__ */ K.createElement(
        "div",
        {
          key: f.session_id,
          onClick: () => r(f.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: v ? "rgba(22,119,255,0.10)" : "transparent",
            border: v ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ K.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ K.createElement(
            We,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${f.title ? `${f.title}
` : ""}${f.session_id}`
              }
            },
            f.title || f.agent_id || Rn(f.session_id)
          ),
          c ? null : f.agent_id ? /* @__PURE__ */ K.createElement(
            wn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            f.agent_id
          ) : null,
          /* @__PURE__ */ K.createElement(
            wn,
            {
              color: Nn[f.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Pn(f.status)
          )
        ),
        /* @__PURE__ */ K.createElement(
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
          /* @__PURE__ */ K.createElement("span", null, f.channel || "-"),
          /* @__PURE__ */ K.createElement("span", null, f.runs, " ", d(i, "runs")),
          /* @__PURE__ */ K.createElement("span", null, Ln(f.total_tokens), " tok"),
          f.skills ? /* @__PURE__ */ K.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(f.skills).sort((u, b) => b[1] - u[1]).map(([u, b]) => `${u} ×${b}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(f.skills).sort((u, b) => b[1] - u[1]).slice(0, 2).map(([u]) => u).join(" ")
          ) : null,
          /* @__PURE__ */ K.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Cs(f.last_event_t)
            },
            Ms(f.last_event_t)
          )
        )
      );
    }));
  }));
}
function No() {
  const e = typeof je.useLocale == "function" ? je.useLocale() : void 0, n = et(
    () => Nt(e ?? oe()),
    [e]
  ), [t, s] = Me(null), [l, r] = Me(!1), [i, c] = Me(
    /* @__PURE__ */ new Set()
  ), [h, g] = Me(!1), [o, f] = Me(!1), [v, u] = Me(null), [b, R] = Me(""), [D, w] = Me(null), C = bn(async () => {
    try {
      const I = await Wt({ limit: 100, offset: 0 });
      s(I.sessions), r(I.has_more), w(null);
    } catch (I) {
      w(String(I.message));
    }
  }, []), k = bn(async () => {
    f(!0);
    try {
      const I = await Wt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      s((N) => {
        const X = N ?? [];
        return [
          ...X,
          ...I.sessions.filter(
            (q) => !X.some((te) => te.session_id === q.session_id)
          )
        ];
      }), r(I.has_more);
    } catch (I) {
      w(String(I.message));
    } finally {
      f(!1);
    }
  }, [t]);
  $t(() => {
    C();
    try {
      const I = new URLSearchParams(window.location.search).get("session");
      I && An(I).then((N) => {
        u(N ?? I);
      });
    } catch {
    }
  }, [C]), $t(() => {
    try {
      const I = new URL(window.location.href);
      v ? I.searchParams.set("session", v) : I.searchParams.delete("session"), window.history.replaceState(window.history.state, "", I);
    } catch {
    }
  }, [v]), $t(() => {
    const I = setInterval(() => {
      document.visibilityState === "visible" && C();
    }, 15e3);
    return () => clearInterval(I);
  }, [C]);
  const O = et(
    () => (t == null ? void 0 : t.find((I) => I.session_id === v)) ?? null,
    [t, v]
  ), A = et(() => {
    if (!t) return [];
    const I = b.trim().toLowerCase();
    return I ? t.filter(
      (N) => [N.session_id, N.title ?? "", N.agent_id, N.channel].join(" ").toLowerCase().includes(I)
    ) : t;
  }, [t, b]), L = et(() => {
    const I = /* @__PURE__ */ new Map();
    for (const N of A) {
      const X = N.agent_id || "(unknown)", q = I.get(X);
      q ? q.push(N) : I.set(X, [N]);
    }
    return [...I.entries()];
  }, [A]);
  return /* @__PURE__ */ K.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, h ? /* @__PURE__ */ K.createElement(
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
    /* @__PURE__ */ K.createElement(Tn, { title: d(n, "expandSidebar"), placement: "right" }, /* @__PURE__ */ K.createElement(
      xn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ K.createElement(Oo, null),
        onClick: () => g(!1)
      }
    ))
  ) : /* @__PURE__ */ K.createElement(
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
    /* @__PURE__ */ K.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ K.createElement(
        Mo,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ K.createElement(Ro, null),
          placeholder: d(n, "searchPlaceholder"),
          value: b,
          style: { flex: 1, minWidth: 0 },
          onChange: (I) => R(I.target.value)
        }
      ),
      /* @__PURE__ */ K.createElement(Tn, { title: d(n, "collapseSidebar") }, /* @__PURE__ */ K.createElement(
        xn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ K.createElement(Ao, null),
          onClick: () => g(!0)
        }
      ))
    ),
    D ? /* @__PURE__ */ K.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ K.createElement(We, { type: "danger", style: { fontSize: 12 } }, `${d(n, "loadFailed")}: ${D}`)) : null,
    /* @__PURE__ */ K.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ K.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ K.createElement($o, null)) : A.length === 0 ? /* @__PURE__ */ K.createElement(
      kn,
      {
        image: kn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ K.createElement("span", { style: { fontSize: 12 } }, d(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ K.createElement(
        We,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        d(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ K.createElement(
      Lo,
      {
        groups: L,
        collapsedAgents: i,
        onToggleAgent: (I) => {
          c((N) => {
            const X = new Set(N);
            return X.has(I) ? X.delete(I) : X.add(I), X;
          });
        },
        searching: !!b.trim(),
        selected: v,
        onSelect: u,
        locale: n
      }
    ), t !== null && l && !b.trim() && /* @__PURE__ */ K.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ K.createElement(
      "a",
      {
        onClick: () => void k(),
        style: { fontSize: 12 }
      },
      o ? "…" : `⋯ ${d(n, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ K.createElement(
    Co,
    {
      sessionId: v,
      summary: O,
      locale: n,
      onJumpSession: u,
      onRefreshSessions: () => void C()
    }
  ));
}
const Po = window.QwenPaw.host.React;
var _n, In;
(In = (_n = window.QwenPaw).registerRoutes) == null || In.call(_n, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: No,
    label: d(oe(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var Cn, tt, Mn;
(Mn = (tt = (Cn = window.QwenPaw.chat) == null ? void 0 : Cn.rightHeader) == null ? void 0 : tt.add) == null || Mn.call(
  tt,
  "agent-trace",
  Po.createElement(hs),
  { id: "agent-trace-jump" }
);

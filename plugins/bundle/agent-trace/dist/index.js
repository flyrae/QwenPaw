var js = Object.defineProperty;
var Bs = (e, t, n) => t in e ? js(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Pt = (e, t, n) => Bs(e, typeof t != "symbol" ? t + "" : t, n);
const Fs = {
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
    toolSchemaNote: "调用时模型可见的工具定义（来自当前提示词快照）",
    apiFilterAll: "全部",
    apiShowEarlier: "显示更早的消息",
    apiCollapseEarlier: "收起，只看最近",
    reasoningShort: "推理",
    interrupted: "已中断",
    justNow: "刚刚",
    minutesAgo: "{n} 分钟前",
    hoursAgo: "{n} 小时前",
    searchMatches: "{n} 条匹配",
    searchNoMatch: "无匹配",
    prevMatch: "上一个匹配（Shift+Enter）",
    nextMatch: "下一个匹配（Enter）",
    legendKeysTitle: "快捷键：",
    legendKeys: "↑/↓ 切换记录 · Esc 关闭检查器 · 搜索框内 Enter / Shift+Enter 跳到下一个 / 上一个匹配",
    copy: "复制",
    rawTab: "原始",
    kind: "类型",
    total: "合计",
    cached: "缓存命中",
    cacheCreated: "缓存写入",
    apiTime: "API 耗时",
    tools: "工具",
    noTimingData: "暂无时序数据",
    loadEarlierHistory: "点击加载更早的记录",
    loadingEarlierHistory: "正在加载更早的记录…",
    contentTokens: "正文",
    provider: "提供商",
    tool: "工具",
    charCount: "字符数",
    optionsTab: "参数",
    jumpToResult: "查看最终回复 →"
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
    toolSchemaNote: "The model-visible tool definition at call time (from the active prompt snapshot)",
    apiFilterAll: "All",
    apiShowEarlier: "Show earlier messages",
    apiCollapseEarlier: "Collapse to recent only",
    reasoningShort: "Reasoning",
    interrupted: "Interrupted",
    justNow: "just now",
    minutesAgo: "{n} min ago",
    hoursAgo: "{n} h ago",
    searchMatches: "{n} matches",
    searchNoMatch: "No matches",
    prevMatch: "Previous match (Shift+Enter)",
    nextMatch: "Next match (Enter)",
    legendKeysTitle: "Shortcuts: ",
    legendKeys: "↑/↓ move between records · Esc closes the inspector · Enter / Shift+Enter in search jumps to the next / previous match",
    copy: "Copy",
    rawTab: "Raw",
    kind: "Kind",
    total: "Total",
    cached: "Cached",
    cacheCreated: "Cache created",
    apiTime: "API time",
    tools: "Tools",
    noTimingData: "No timing data",
    loadEarlierHistory: "Click to load earlier history",
    loadingEarlierHistory: "Loading earlier history…",
    contentTokens: "Content",
    provider: "Provider",
    tool: "Tool",
    charCount: "Chars",
    optionsTab: "Options",
    jumpToResult: "Result: Assistant Message →"
  }
};
function cn(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
let en = null;
function Hs(e) {
  en = e;
}
function Me() {
  if (en !== null) return en;
  try {
    return cn(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function c(e, t) {
  return Fs[e][t];
}
function tn(e, t, n) {
  return c(e, t).replace(
    /\{(\w+)\}/g,
    (s, l) => l in n ? String(n[l]) : s
  );
}
function Mt(e, t) {
  switch (t) {
    case "running":
    case "success":
    case "error":
    case "cancelled":
    case "interrupted":
      return c(e, t);
    default:
      return c(e, "unknown");
  }
}
const ot = window.QwenPaw.host;
function Oe(e) {
  return e.instance_id ? `${e.instance_id}~${e.session_id}` : e.session_id;
}
function jt(e) {
  const t = e.indexOf("~");
  return t <= 0 ? { sessionId: e } : {
    instance: e.slice(0, t),
    sessionId: e.slice(t + 1)
  };
}
function Ks(e, t) {
  if (!e || e.events.length === 0) return t;
  const n = /* @__PURE__ */ new Map();
  for (const l of e.events) n.set(l.seq, l);
  if (t.events.every((l) => n.has(l.seq))) return e;
  for (const l of t.events) n.set(l.seq, l);
  const s = [...n.values()].sort((l, o) => l.seq - o.seq);
  return {
    header: t.header ?? e.header,
    events: s,
    total_events: Math.max(t.total_events, e.total_events, s.length),
    size_bytes: Math.max(t.size_bytes, e.size_bytes),
    mtime: Math.max(t.mtime, e.mtime)
  };
}
async function Us(e, t) {
  const n = t ? `?instance=${encodeURIComponent(t)}` : "";
  return qe(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats${n}`
  );
}
async function cs(e, t) {
  return ot.fetch ? ot.fetch(e, t) : fetch(ot.getApiUrl(e), {
    ...t,
    headers: {
      ...(t == null ? void 0 : t.headers) || {},
      ...ot.getApiToken() ? { Authorization: `Bearer ${ot.getApiToken()}` } : {}
    }
  });
}
class us extends Error {
  constructor(t, n) {
    super(n), this.status = t, this.name = "ApiError";
  }
}
async function qe(e, t) {
  const n = await cs(e, t), s = await n.text();
  let l = null;
  try {
    l = s ? JSON.parse(s) : null;
  } catch {
    l = null;
  }
  if (!n.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new us(
      n.status,
      typeof o == "string" ? o : `HTTP ${n.status}`
    );
  }
  return l;
}
async function wn(e) {
  const t = new URLSearchParams();
  return t.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && t.set("offset", String(e.offset)), e != null && e.instance && t.set("instance", e.instance), e != null && e.user && t.set("user", e.user), e != null && e.q && t.set("q", e.q), qe(
    `/agent-trace/sessions?${t.toString()}`
  );
}
async function Ws(e, t) {
  const n = new URLSearchParams();
  t != null && t.beforeSeq && n.set("before_seq", String(t.beforeSeq)), n.set("limit", String(t == null ? void 0 : t.limit)), t != null && t.instance && n.set("instance", t.instance);
  const s = n.toString();
  return qe(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function Vs() {
  return qe("/agent-trace/config");
}
async function qs(e) {
  return qe("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function Gs(e, t) {
  const n = t ? `?instance=${encodeURIComponent(t)}` : "", s = await cs(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export${n}`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const l = await s.blob(), o = URL.createObjectURL(l), r = document.createElement("a");
  r.href = o, r.download = `${e}.jsonl`, r.click(), URL.revokeObjectURL(o);
}
async function Xs(e) {
  await qe(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function ds(e) {
  if (!e) return null;
  try {
    return (await qe(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Ve = window.QwenPaw.host, xt = Ve.React, { useMemo: Js } = xt, { Button: Qs, Tooltip: Ys } = Ve.antd, { CompassOutlined: Zs } = Ve.antdIcons;
function el(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function tl() {
  const e = typeof Ve.useLocale == "function" ? Ve.useLocale() : void 0, t = Js(
    () => cn(e ?? Me()),
    [e]
  );
  return /* @__PURE__ */ xt.createElement(Ys, { title: c(t, "viewCurrentTrace") }, /* @__PURE__ */ xt.createElement(
    Qs,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ xt.createElement(Zs, null),
      "aria-label": c(t, "viewCurrentTrace"),
      onClick: () => {
        const n = typeof Ve.getCurrentSessionId == "function" ? Ve.getCurrentSessionId() : null;
        ds(n).then((s) => {
          window.location.href = el(s ?? n);
        });
      }
    }
  ));
}
const Tn = 3e3;
function _n(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function nl(e, t) {
  const n = _n(e ?? ""), s = _n(t ?? "");
  if (n.length > Tn || s.length > Tn)
    return [
      ...n.map((E) => ({ kind: "del", text: E })),
      ...s.map((E) => ({ kind: "add", text: E }))
    ];
  const l = n.length, o = s.length, r = new Int32Array((l + 1) * (o + 1)), u = (E, p) => E * (o + 1) + p;
  for (let E = l - 1; E >= 0; E -= 1)
    for (let p = o - 1; p >= 0; p -= 1)
      r[u(E, p)] = n[E] === s[p] ? r[u(E + 1, p + 1)] + 1 : Math.max(r[u(E + 1, p)], r[u(E, p + 1)]);
  const d = [];
  let i = 0, m = 0;
  for (; i < l && m < o; )
    n[i] === s[m] ? (d.push({ kind: "same", text: n[i] }), i += 1, m += 1) : r[u(i + 1, m)] >= r[u(i, m + 1)] ? (d.push({ kind: "del", text: n[i] }), i += 1) : (d.push({ kind: "add", text: s[m] }), m += 1);
  for (; i < l; )
    d.push({ kind: "del", text: n[i] }), i += 1;
  for (; m < o; )
    d.push({ kind: "add", text: s[m] }), m += 1;
  return d;
}
function sl(e, t = 3) {
  const n = new Array(e.length).fill(!1);
  e.forEach((o, r) => {
    if (o.kind !== "same")
      for (let u = Math.max(0, r - t); u <= Math.min(e.length - 1, r + t); u += 1)
        n[u] = !0;
  });
  const s = [];
  let l = 0;
  return e.forEach((o, r) => {
    n[r] ? (l > 0 && (s.push({ kind: "gap", count: l }), l = 0), s.push(o)) : l += 1;
  }), l > 0 && s.push({ kind: "gap", count: l }), s;
}
function ll(e) {
  let t = 0, n = 0;
  for (const s of e)
    s.kind === "add" ? t += 1 : s.kind === "del" && (n += 1);
  return { added: t, removed: n };
}
function ol(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = (t * 31 + e.charCodeAt(n)) % 100003;
  return t % 360;
}
class rl {
  constructor() {
    Pt(this, "open", /* @__PURE__ */ new Map());
    Pt(this, "finished", []);
  }
  /** A run opens: any still-open spans are hard-closed first (crashed
   * runs without run/end must not leak attribution — same semantics as
   * Kimi's run/start reset for activeRunSkills). */
  onRunStart() {
    this.closeAll(null, null, null);
  }
  onSlashSkill(t, n, s) {
    this.onRunStart(), this.openSpan(t, "slash", n, s);
  }
  onSkillLoad(t, n, s) {
    let l = this.open.get(t);
    return l || (l = this.openSpan(t, "load", n, s)), l.loadSeq = n, l.bypass && (l.bypass = !1), l.id;
  }
  onToolCall(t) {
    if (!t.attribution) return null;
    const { skill: n, kind: s, detail: l } = t.attribution;
    let o = this.open.get(n);
    return o || (o = this.openSpan(
      n,
      s === "path" ? "resource" : "load",
      t.seq,
      t.t
    ), s === "temporal" && (o.trigger = "resource")), o.attributedIndexes.push(t.recordIndex), o.evidences.push({
      kind: s,
      detail: l,
      recordIndex: t.recordIndex
    }), o.lastActivitySeq = t.seq, o.lastActivityT = t.t, o.id;
  }
  onRunEnd(t, n) {
    this.closeAll(t, n, "run_end");
  }
  /** All spans (open + finished) in start order. */
  spans() {
    const t = [...this.open.values()];
    return [...this.finished, ...t].sort((n, s) => n.startSeq - s.startSeq);
  }
  openSpan(t, n, s, l) {
    const o = {
      id: `${t}#${s}`,
      skill: t,
      trigger: n,
      startSeq: s,
      startT: l,
      endSeq: null,
      endT: null,
      endKind: null,
      lastActivitySeq: null,
      lastActivityT: null,
      attributedIndexes: [],
      evidences: [],
      bypass: n === "resource",
      loadSeq: n === "load" ? s : null,
      colorHue: ol(t)
    };
    return this.open.set(t, o), o;
  }
  closeAll(t, n, s) {
    for (const l of this.open.values())
      l.endSeq = t, l.endT = n, l.endKind = s, this.finished.push(l);
    this.open.clear();
  }
}
function il(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function al(e) {
  const t = e.lastActivityT ?? e.endT;
  return t === null ? null : Math.max(0, t - e.startT);
}
const cl = /* @__PURE__ */ new Set([
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
function ul(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi
  ))
    t.add(n[1].toLowerCase());
  for (const n of e.matchAll(/```[a-z]*\n([\s\S]*?)```/g))
    for (const s of n[1].matchAll(/[\w./=\-]{6,}/g)) {
      const l = s[0].toLowerCase();
      cl.has(l) || t.add(l);
    }
  return [...t];
}
function dl(e, t) {
  const n = e.toLowerCase();
  let s = null, l = !1;
  for (const [o, r] of t)
    for (const u of r)
      if (n.includes(u)) {
        s === null ? s = { skill: o, feature: u } : s.skill !== o && (l = !0);
        break;
      }
  return l ? null : s;
}
const hl = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, pl = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function hs(e, t) {
  const n = e.markerKind ? hl[e.markerKind] : void 0;
  if (n) return t === "zh-CN" ? n.zh : n.en;
  const s = pl[e.kind];
  return s ? t === "zh-CN" ? s.zh : s.en : e.kind;
}
const In = 60;
function rt(e) {
  return `${e.role}|${e.text ?? `#${e.chars ?? 0}`}`;
}
function Mn(e) {
  return e.chars ?? (e.text ? e.text.length : 0);
}
function Cn(e) {
  const t = {};
  for (const n of e)
    t[n.role] = (t[n.role] ?? 0) + 1;
  return t;
}
function fl(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length && rt(e[n]) === rt(t[n]); )
    n += 1;
  const s = e.slice(n), l = t.slice(n), o = /* @__PURE__ */ new Map();
  for (const g of l) {
    const h = rt(g);
    o.set(h, (o.get(h) ?? 0) + 1);
  }
  const r = [], u = [], d = [];
  for (let g = 0; g < Math.min(n, In); g += 1)
    d.push({ status: "kept", role: e[g].role });
  for (const g of s) {
    const h = rt(g), b = o.get(h) ?? 0;
    b > 0 ? (o.set(h, b - 1), d.push({ status: "kept", role: g.role })) : r.push(g);
  }
  for (const g of l) {
    const h = rt(g), b = o.get(h) ?? 0;
    b > 0 && (o.set(h, b - 1), u.push(g));
  }
  const i = /* @__PURE__ */ new Map();
  for (const g of u) {
    const h = i.get(g.role);
    h ? h.push(g) : i.set(g.role, [g]);
  }
  const m = [], E = [];
  for (const g of r) {
    const h = i.get(g.role);
    h && h.length > 0 ? m.push([g, h.shift()]) : E.push(g);
  }
  const p = [...i.values()].flat();
  for (const [g, h] of m)
    d.push({
      status: "rewritten",
      role: g.role,
      oldText: g.text,
      newText: h.text
    });
  for (const g of E)
    d.push({
      status: "removed",
      role: g.role,
      oldText: g.text
    });
  for (const g of p)
    d.push({
      status: "added",
      role: g.role,
      newText: g.text
    });
  return {
    breakAt: n,
    beforeCount: e.length,
    afterCount: t.length,
    beforeChars: e.reduce((g, h) => g + Mn(h), 0),
    afterChars: t.reduce((g, h) => g + Mn(h), 0),
    beforeByRole: Cn(e),
    afterByRole: Cn(t),
    changes: d.slice(0, In)
  };
}
function ml(e) {
  const t = e.trim();
  if (!t.startsWith("[") && !t.startsWith("{")) return e;
  let n;
  try {
    n = JSON.parse(t);
  } catch {
    return e;
  }
  const s = Array.isArray(n) ? n : [n], l = [];
  for (const o of s)
    if (o && typeof o == "object" && typeof o.text == "string") {
      const r = o.text;
      r && l.push(r);
    } else o && typeof o == "object" && typeof o.type == "string" ? l.push(`[${o.type}]`) : typeof o == "string" && o && l.push(o);
  return l.length > 0 ? l.join(`
`) : e;
}
function gl(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function ye(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const t = e * 1e3;
  return t < 1e3 ? `${Math.round(t)}ms` : t < 6e4 ? `${(t / 1e3).toFixed(1)}s` : `${Math.floor(t / 6e4)}m${Math.round(t % 6e4 / 1e3)}s`;
}
function Y(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function wt(e, t) {
  return e === void 0 || !Number.isFinite(e) || t === null || t === void 0 || t <= 0 ? "-" : `${(e / t).toFixed(1)} tok/s`;
}
function Le(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function be(e) {
  if (!e) return null;
  const t = Date.parse(e);
  return Number.isFinite(t) ? t : null;
}
const nn = window.QwenPaw.host, yl = nn.React, { useEffect: El, useState: Sl } = yl, ps = "(prefers-color-scheme: dark)";
function vl() {
  try {
    return window.matchMedia(ps).matches;
  } catch {
    return !1;
  }
}
function bl() {
  const [e, t] = Sl(vl);
  return El(() => {
    let n;
    try {
      n = window.matchMedia(ps);
    } catch {
      return;
    }
    const s = () => t(n.matches);
    return n.addEventListener("change", s), () => n.removeEventListener("change", s);
  }, []), e;
}
const $n = typeof nn.useTheme == "function" ? nn.useTheme : void 0;
function un() {
  return $n ? $n() === "dark" ? "dark" : "light" : bl() ? "dark" : "light";
}
const fs = {
  light: { tokens: "#1677ff", reasoning: "#722ed1", skill: "#2f54eb" },
  dark: { tokens: "#69b1ff", reasoning: "#b37feb", skill: "#85a5ff" }
}, xl = {
  light: {
    key: "#8250df",
    string: "#0a6e3d",
    number: "#0550ae",
    literal: "#cf222e"
  },
  dark: {
    key: "#d2a8ff",
    string: "#7ee787",
    number: "#79c0ff",
    literal: "#ff7b72"
  }
};
function ms(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function kl(e) {
  if (!e) return "-";
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? e : t.toLocaleString();
}
function wl(e, t) {
  if (!e) return "-";
  const n = Date.parse(e);
  if (!Number.isFinite(n)) return e;
  const s = Date.now() - n;
  return s < 6e4 ? c(t, "justNow") : s < 36e5 ? tn(t, "minutesAgo", { n: Math.floor(s / 6e4) }) : s < 864e5 ? tn(t, "hoursAgo", { n: Math.floor(s / 36e5) }) : new Date(n).toLocaleString(t);
}
function gs(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function sn(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const ys = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Ct = window.QwenPaw.host, a = Ct.React, { useEffect: Tl, useRef: _l, useState: ut } = a, { Button: Es, Collapse: ln, Empty: An, Tabs: dn, Tag: Tt } = Ct.antd, { Text: B } = Ct.antd.Typography, { CopyOutlined: Il, CloseOutlined: Ml } = Ct.antdIcons, Cl = 320, $l = 720, zn = 400, Ss = "agent-trace:inspector-width";
function vs(e) {
  return Math.min($l, Math.max(Cl, e));
}
function Al() {
  try {
    const e = Number(window.localStorage.getItem(Ss));
    return Number.isFinite(e) && e > 0 ? vs(e) : zn;
  } catch {
    return zn;
  }
}
function zl() {
  const [e, t] = ut(Al), n = _l(null);
  return Tl(() => {
    let s = null, l = null, o = null;
    const r = (d) => {
      const i = n.current;
      i !== null && (l = vs(i.anchorWidth + i.anchorX - d.clientX), o = l, s === null && (s = window.requestAnimationFrame(() => {
        s = null, l !== null && t(l), l = null;
      })));
    }, u = () => {
      if (n.current !== null && (n.current = null, o !== null)) {
        try {
          window.localStorage.setItem(Ss, String(o));
        } catch {
        }
        o = null;
      }
    };
    return window.addEventListener("pointermove", r), window.addEventListener("pointerup", u), () => {
      s !== null && window.cancelAnimationFrame(s), window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", u);
    };
  }, []), { width: e, dragRef: n };
}
const Rl = 2e4;
function Ol(e, t) {
  if (e.length > Rl) return e;
  const n = [], s = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let l = 0, o, r = 0;
  for (; (o = s.exec(e)) !== null; ) {
    o.index > l && n.push(e.slice(l, o.index));
    const u = o[0];
    let d = "rgba(128,128,128,1)";
    o[1] !== void 0 ? d = t.key : o[2] !== void 0 ? d = t.string : o[3] !== void 0 ? d = t.number : d = t.literal, n.push(
      /* @__PURE__ */ a.createElement("span", { key: r++, style: { color: d } }, u)
    ), l = o.index + u.length;
  }
  return l < e.length && n.push(e.slice(l)), n;
}
function we({ value: e, json: t = !1 }) {
  const [n, s] = ut(!1), l = xl[un()], o = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!o) return null;
  const r = async () => {
    try {
      await navigator.clipboard.writeText(o), s(!0), window.setTimeout(() => s(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ a.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ a.createElement(
    "a",
    {
      onClick: () => void r(),
      title: c(Me(), "copy"),
      style: {
        position: "absolute",
        top: 4,
        right: 6,
        fontSize: 11,
        color: n ? "#52c41a" : "rgba(128,128,128,1)",
        zIndex: 1
      }
    },
    n ? "✓" : /* @__PURE__ */ a.createElement(Il, null)
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
    t ? Ol(o, l) : o
  ));
}
function I({
  label: e,
  value: t,
  danger: n = !1
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
    /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ a.createElement(
      B,
      {
        type: n ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      t
    )
  );
}
function on({
  input: e,
  output: t,
  cacheRead: n,
  cacheWrite: s,
  reasoning: l
}) {
  const o = Me(), r = Math.max(0, e - n - s), u = Math.max(0, t - l);
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(o, "input"),
      value: `${Y(e)} tok`
    }
  ), n ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(o, "cached"),
      value: `${Y(n)} tok`
    }
  ) : null, s ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(o, "cacheCreated"),
      value: `${Y(s)} tok`
    }
  ) : null, n || s ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(o, "roleOther"),
      value: `${Y(r)} tok`
    }
  ) : null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(o, "output"),
      value: `${Y(t)} tok`
    }
  ), l ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(o, "reasoningShort"),
      value: `${Y(l)} tok`
    }
  ) : null, l ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(o, "contentTokens"),
      value: `${Y(u)} tok`
    }
  ) : null);
}
function Bt({
  label: e,
  onOpen: t,
  children: n
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
    /* @__PURE__ */ a.createElement("a", { onClick: t, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 2 } }, n)
  );
}
const Rn = ["system", "user", "assistant", "tool"], Ll = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function Nl({
  request: e,
  locale: t
}) {
  const n = e.inputComposition;
  if (!n) return null;
  const s = [], l = new Set(Rn), o = [
    ...Rn.filter((u) => n.charsByRole[u]),
    ...Object.keys(n.charsByRole).filter(
      (u) => !l.has(u) && n.charsByRole[u]
    )
  ], r = n.totalChars || 1;
  for (const u of o) {
    const d = n.charsByRole[u], i = Ll[u] ?? "roleOther", m = Math.round(d / r * 100);
    s.push(
      /* @__PURE__ */ a.createElement(
        I,
        {
          key: u,
          label: c(t, i),
          value: `${Y(d)} ${c(t, "charUnit")} · ${m}%`
        }
      )
    );
  }
  return n.maxToolChars > 0 && s.push(
    /* @__PURE__ */ a.createElement(
      I,
      {
        key: "max-tool",
        label: c(t, "maxToolMsg"),
        value: `${Y(n.maxToolChars)} ${c(
          t,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, c(t, "inputComposition")), s, e.inputTokens > 0 ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(t, "realInputTokens"),
      value: `${Y(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ a.createElement(
    B,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    c(t, "compositionNote")
  ), e.growth ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(t, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? c(t, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${Y(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(t, "cacheAbsorbed"),
      value: `${Y(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Dl({
  request: e,
  onJumpRecord: t
}) {
  const n = Me(), [s, l] = a.useState("summary"), o = /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(n, "startedAt"),
      value: Le(e.startedAt)
    }
  ), /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(n, "duration"),
      value: ye(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(n, "ttftLabel"),
      value: ye(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(n, "decodeLabel"),
      value: ye(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: c(n, "throughput"),
      value: wt(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), r = /* @__PURE__ */ a.createElement(
    on,
    {
      input: e.inputTokens,
      output: e.outputTokens,
      cacheRead: e.cacheReadTokens,
      cacheWrite: e.cacheWriteTokens,
      reasoning: e.reasoningTokens
    }
  ), u = [
    {
      key: "summary",
      label: c(n, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(n, "requestTab"),
          value: `#${e.turn}`
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(n, "status"),
          value: Mt(n, e.status),
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(n, "query"),
          value: Pl(e.query)
        }
      ), e.providers.length > 0 ? /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(n, "provider"),
          value: e.providers.join(" · ")
        }
      ) : null, /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(n, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(n, "toolCalls"),
          value: String(e.toolCalls)
        }
      ), e.errors.length > 0 ? /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(n, "error"),
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && t ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => t(e.resultIndex)
        },
        c(n, "jumpToResult")
      )) : null, e.options ? /* @__PURE__ */ a.createElement(
        Bt,
        {
          label: c(n, "optionsTab"),
          onOpen: () => l("options")
        },
        /* @__PURE__ */ a.createElement(we, { value: e.options, json: !0 })
      ) : null, /* @__PURE__ */ a.createElement(
        Bt,
        {
          label: c(n, "usage"),
          onOpen: () => l("usage")
        },
        r
      ), /* @__PURE__ */ a.createElement(
        Bt,
        {
          label: c(n, "timing"),
          onOpen: () => l("timing")
        },
        o
      ))
    },
    {
      key: "usage",
      label: c(n, "usage"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, c(n, "thisRequest")), r, /* @__PURE__ */ a.createElement(Nl, { request: e, locale: n }), e.sessionTotals ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        B,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        c(n, "sessionTotal")
      ), /* @__PURE__ */ a.createElement(
        on,
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
      label: c(n, "timing"),
      children: o
    },
    ...e.options ? [
      {
        key: "options",
        label: c(n, "optionsTab"),
        children: /* @__PURE__ */ a.createElement(we, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ a.createElement(
    dn,
    {
      size: "small",
      activeKey: s,
      onChange: (d) => l(d),
      items: u,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Pl(e, t = 200) {
  const n = e.split(`
`, 1)[0].trim();
  return n.length > t ? `${n.slice(0, t)}…` : n;
}
function jl({
  oldText: e,
  newText: t
}) {
  const n = a.useMemo(
    () => nl(e, t),
    [e, t]
  ), s = a.useMemo(() => ll(n), [n]), l = a.useMemo(() => sl(n), [n]), o = Me();
  return e === void 0 ? /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, c(o, "noPrevPrompt")) : /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ a.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ a.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ a.createElement(
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
    l.map((r, u) => {
      if (r.kind === "gap")
        return /* @__PURE__ */ a.createElement(
          "div",
          {
            key: u,
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
      const d = r;
      return /* @__PURE__ */ a.createElement(
        "div",
        {
          key: u,
          style: {
            padding: "0 8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            background: d.kind === "add" ? "rgba(82,196,26,0.12)" : d.kind === "del" ? "rgba(255,77,79,0.10)" : void 0,
            color: d.kind === "del" ? "rgba(255,77,79,0.9)" : void 0
          }
        },
        d.kind === "add" ? "+ " : d.kind === "del" ? "− " : "  ",
        d.text || " "
      );
    })
  ));
}
function Bl({ record: e }) {
  var o;
  const t = Me(), n = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: c(t, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "#", value: String(e.index) }), /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(t, "status"),
          value: s ? c(t, "promptChanged") : c(t, "promptInitial")
        }
      ), /* @__PURE__ */ a.createElement(I, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(t, "charCount"),
          value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0)
        }
      ), /* @__PURE__ */ a.createElement(I, { label: c(t, "tools"), value: String(n.length) }))
    },
    ...s ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ a.createElement(
          jl,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: c(t, "prompt"),
      children: /* @__PURE__ */ a.createElement(we, { value: e.prompt })
    },
    ...n.length > 0 ? [
      {
        key: "tools",
        label: c(t, "tools"),
        children: /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 4 } }, n.map((r) => /* @__PURE__ */ a.createElement(B, { key: r, code: !0, style: { fontSize: 11 } }, r)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ a.createElement(
          ln,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((r, u) => {
              var i;
              const d = typeof r.name == "string" && r.name || typeof ((i = r.function) == null ? void 0 : i.name) == "string" && r.function.name || `tool-${u + 1}`;
              return {
                key: String(u),
                label: /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11 } }, d),
                children: /* @__PURE__ */ a.createElement(we, { value: r })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: c(t, "rawTab"),
      children: /* @__PURE__ */ a.createElement(we, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ a.createElement(dn, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function Ft({ dragRef: e, width: t }) {
  return /* @__PURE__ */ a.createElement(
    "div",
    {
      onPointerDown: (n) => {
        e.current = {
          anchorX: n.clientX,
          anchorWidth: t
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
function kt({ onClose: e }) {
  return e ? /* @__PURE__ */ a.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ a.createElement(
    Es,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ a.createElement(Ml, null),
      onClick: e
    }
  )) : null;
}
function Fl({
  record: e,
  request: t,
  onJumpSession: n,
  onJumpRecord: s,
  onSelectTurn: l,
  onClose: o
}) {
  var g, h, b, z, T;
  const r = Me(), { width: u, dragRef: d } = zl();
  if (e === null && t === null)
    return /* @__PURE__ */ a.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: u,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ a.createElement(
        An,
        {
          image: An.PRESENTED_IMAGE_SIMPLE,
          description: c(r, "selectRecord")
        }
      )
    );
  if (e === null && t !== null)
    return /* @__PURE__ */ a.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: u,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ a.createElement(Ft, { dragRef: d, width: u }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(kt, { onClose: o }), /* @__PURE__ */ a.createElement(Dl, { request: t, onJumpRecord: s }))
    );
  const i = e;
  if (i.kind === "system" && i.prompt !== void 0)
    return /* @__PURE__ */ a.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: u,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ a.createElement(Ft, { dragRef: d, width: u }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(kt, { onClose: o }), /* @__PURE__ */ a.createElement(Bl, { record: i }))
    );
  const m = i.usage, E = i.timing, p = [];
  if (p.push({
    key: "summary",
    label: c(r, "summary"),
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "#", value: String(i.index) }), /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "kind"),
        value: hs(i, r)
      }
    ), i.runIndex > 0 && l ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
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
        label: c(r, "status"),
        value: i.running ? c(r, "running") : i.isError ? c(r, "error") : c(r, "success"),
        danger: i.isError
      }
    ), i.provider ? /* @__PURE__ */ a.createElement(I, { label: c(r, "provider"), value: i.provider }) : null, i.model ? /* @__PURE__ */ a.createElement(I, { label: c(r, "model"), value: i.model }) : null, i.toolName ? /* @__PURE__ */ a.createElement(I, { label: c(r, "tool"), value: i.toolName }) : null, i.inSkill ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "skillResource"),
        value: i.inSkillLoaded ? `⚡ ${i.inSkill}` : `⚡ ${i.inSkill}（${c(r, "skillBypass")}）`
      }
    ) : null, i.guidedSkill ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "skillGuided"),
        value: `∈ ${i.guidedSkill}（${i.guidedReason === "slash" ? c(r, "guidedBySlash") : c(r, "guidedByLoad")}）`
      }
    ) : null, i.toolOutputChars ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "outputSize"),
        value: i.toolOutputBytes ? `${Y(i.toolOutputChars)} ${c(
          r,
          "charUnit"
        )} · ${sn(i.toolOutputBytes)} (${c(
          r,
          "beforeTruncation"
        )})` : `${Y(i.toolOutputChars)} ${c(
          r,
          "charUnit"
        )}`
      }
    ) : null, i.kind === "user" && (i.channel || i.userId) ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "source"),
        value: [i.channel, i.userId].filter(Boolean).join(" · ")
      }
    ) : null, i.receipt ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "channel"),
        value: i.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "duration"),
        value: ye(i.timeSeconds)
      }
    ), i.note ? /* @__PURE__ */ a.createElement(B, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.spawnSession ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "spawnedAgent"),
        value: i.spawnAgent ?? "?"
      }
    ), n ? /* @__PURE__ */ a.createElement(
      Es,
      {
        size: "small",
        onClick: () => i.spawnSession && n(i.spawnSession),
        style: { marginTop: 4 }
      },
      c(r, "openChildSession")
    ) : null) : null)
  }), i.kind === "message" && (i.usage || i.timing || i.options || (g = i.apiPayload) != null && g.params || i.toolCalls && i.toolCalls.length > 0)) {
    const v = (h = i.apiPayload) == null ? void 0 : h.params, O = v !== void 0 && i.options !== void 0;
    p.push({
      key: "request",
      label: c(r, "requestTab"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, c(r, "toolCallsEmitted"), " (", i.toolCalls.length, ")"), i.toolCalls.map((A, M) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: A.id || M,
          style: { display: "flex", gap: 6, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, A.name),
        A.id ? /* @__PURE__ */ a.createElement(
          B,
          {
            type: "secondary",
            style: { fontSize: 10, flexShrink: 0 }
          },
          "…",
          A.id.slice(-8)
        ) : null
      ))) : null, v || i.options ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, c(r, "generationOptions")), O ? /* @__PURE__ */ a.createElement(
        B,
        {
          type: "secondary",
          style: { fontSize: 11, display: "block" }
        },
        `${c(r, "wireParams")} + ${c(
          r,
          "callOptionsDigest"
        )}`
      ) : null, /* @__PURE__ */ a.createElement(
        we,
        {
          value: { ...i.options ?? {}, ...v ?? {} },
          json: !0
        }
      )) : null, i.usage ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, c(r, "usage")), /* @__PURE__ */ a.createElement(
        on,
        {
          input: i.usage.input_tokens ?? 0,
          output: i.usage.output_tokens ?? 0,
          cacheRead: i.usage.cache_input_tokens ?? 0,
          cacheWrite: i.usage.cache_creation_input_tokens ?? 0,
          reasoning: i.usage.reasoning_tokens ?? 0
        }
      )) : null, /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, c(r, "timing")), /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(r, "startedAt"),
          value: Le(i.startedAt)
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(r, "duration"),
          value: ye(i.timeSeconds)
        }
      ), i.timing ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(r, "ttftLabel"),
          value: ye(i.timing.ttft_ms / 1e3)
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(r, "decodeLabel"),
          value: ye(i.timing.decode_ms / 1e3)
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: c(r, "throughput"),
          value: wt(
            (b = i.usage) == null ? void 0 : b.output_tokens,
            i.timing.decode_ms / 1e3
          )
        }
      )) : /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, c(r, "noTiming"))))
    });
  }
  if (i.kind === "tool") {
    if (i.toolInput && p.push({
      key: "payload",
      label: c(r, "input"),
      children: /* @__PURE__ */ a.createElement(we, { value: i.toolInput, json: !0 })
    }), (i.toolOutput || i.toolError) && p.push({
      key: "result",
      label: c(r, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolError ? /* @__PURE__ */ a.createElement(B, { type: "danger", style: { fontSize: 12 } }, i.toolError) : null, i.toolOutput ? /* @__PURE__ */ a.createElement(we, { value: i.toolOutput }) : null)
    }), i.toolSchema) {
      const v = i.toolSchema.function, O = i.toolSchema, A = typeof (v == null ? void 0 : v.description) == "string" ? v.description : typeof O.description == "string" ? O.description : void 0, M = (v == null ? void 0 : v.parameters) !== void 0 ? v.parameters : O.parameters;
      p.push({
        key: "schema",
        label: "Schema",
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, c(r, "toolSchemaNote")), A ? /* @__PURE__ */ a.createElement(
          B,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          A
        ) : null, M !== void 0 ? /* @__PURE__ */ a.createElement(we, { value: M, json: !0 }) : null)
      });
    }
  } else if (i.outputText || i.thinkingText || i.messages || i.marker || i.toolCalls && i.toolCalls.length > 0) {
    if (i.inputNew || i.messagesMeta) {
      const v = ((z = i.inputNew) == null ? void 0 : z.length) ?? 0, O = ((T = i.messagesMeta) == null ? void 0 : T.count) ?? 0;
      let A;
      i.contextReset ? A = `${c(r, "deltaReset")} (${O})` : v === 0 ? A = c(r, "deltaNoChange") : i.inputNew && i.inputNew.length === 1 && i.inputNew[0].role === "assistant" && O > 1 ? A = c(r, "deltaTailUpdate") : A = `${c(r, "deltaAppend")} (${v})`, p.push({
        key: "input",
        label: c(r, "inputTab"),
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(I, { label: c(r, "deltaKind"), value: A }), i.contextReset ? /* @__PURE__ */ a.createElement(B, { type: "warning", style: { fontSize: 12 } }, c(r, "contextReset")) : null, i.resetDetail ? /* @__PURE__ */ a.createElement(
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
              label: c(r, "resetBreakAt"),
              value: `#${i.resetDetail.breakAt + 1}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            I,
            {
              label: c(r, "resetSizes"),
              value: `${i.resetDetail.beforeCount} ${c(
                r,
                "resetMsgs"
              )} · ${Y(i.resetDetail.beforeChars)} ${c(
                r,
                "charUnit"
              )} → ${i.resetDetail.afterCount} ${c(
                r,
                "resetMsgs"
              )} · ${Y(i.resetDetail.afterChars)} ${c(
                r,
                "charUnit"
              )}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            I,
            {
              label: c(r, "resetRoles"),
              value: Object.keys(i.resetDetail.afterByRole).map((M) => {
                const F = i.resetDetail.beforeByRole[M] ?? 0, G = i.resetDetail.afterByRole[M] ?? 0;
                return F === G ? null : `${M} ${F}→${G}`;
              }).filter(Boolean).join(" · ") || "-"
            }
          ),
          i.resetDetail.changes.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, c(r, "resetChanges")), i.resetDetail.changes.slice(0, 20).map((M, F) => /* @__PURE__ */ a.createElement(
            "div",
            {
              key: F,
              style: {
                display: "flex",
                gap: 6,
                alignItems: "baseline"
              }
            },
            /* @__PURE__ */ a.createElement(
              Tt,
              {
                color: M.status === "kept" ? "default" : M.status === "rewritten" ? "orange" : M.status === "removed" ? "red" : "green",
                style: { marginInlineEnd: 0, fontSize: 10 }
              },
              c(r, Hl[M.status])
            ),
            /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, M.role),
            M.status === "rewritten" ? /* @__PURE__ */ a.createElement(
              B,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${c(r, "resetOldPrefix")}${(M.oldText ?? "").slice(0, 40)} → ${c(
                r,
                "resetNewPrefix"
              )}${(M.newText ?? "").slice(0, 40)}`
            ) : /* @__PURE__ */ a.createElement(
              B,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${M.status === "removed" ? c(r, "resetOldPrefix") : c(r, "resetNewPrefix")}${(M.oldText ?? M.newText ?? "").slice(
                0,
                60
              )}`
            )
          ))) : null
        ) : null, i.messagesMeta ? /* @__PURE__ */ a.createElement(
          I,
          {
            label: c(r, "inputTotal"),
            value: `${i.messagesMeta.count} · ${Y(
              i.messagesMeta.totalChars
            )} ${c(r, "charUnit")}`
          }
        ) : null, i.inputNew && i.inputNew.length > 0 ? /* @__PURE__ */ a.createElement(a.Fragment, null, i.inputNew.some((M) => M.role === "assistant") ? /* @__PURE__ */ a.createElement(
          B,
          {
            type: "secondary",
            style: { fontSize: 11, display: "block" }
          },
          c(r, "assistantInputNote")
        ) : null, /* @__PURE__ */ a.createElement(
          ln,
          {
            size: "small",
            defaultActiveKey: i.inputNew.length <= 5 ? ["messages"] : [],
            items: [
              {
                key: "messages",
                label: `${c(r, "inputMessages")} (${i.inputNew.length})`,
                children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.inputNew.map((M, F) => /* @__PURE__ */ a.createElement(
                  Wl,
                  {
                    key: F,
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
    if (i.apiPayload && i.apiPayload.messages.length > 0) {
      const v = i.apiPayload;
      p.push({
        key: "api",
        label: "API",
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, c(r, "apiPayloadNote")), /* @__PURE__ */ a.createElement(I, { label: c(r, "model"), value: v.model }), /* @__PURE__ */ a.createElement(
          I,
          {
            label: c(r, "apiMsgCount"),
            value: String(v.messages.length)
          }
        ), v.usage ? /* @__PURE__ */ a.createElement(
          I,
          {
            label: c(r, "usage"),
            value: `in ${v.usage.input_tokens ?? 0} · out ${v.usage.output_tokens ?? 0} tok`
          }
        ) : null, v.durationMs !== void 0 ? /* @__PURE__ */ a.createElement(
          I,
          {
            label: c(r, "duration"),
            value: ye(v.durationMs / 1e3)
          }
        ) : null, /* @__PURE__ */ a.createElement(
          ln,
          {
            size: "small",
            items: [
              {
                key: "api-msgs",
                label: `${c(r, "apiMessages")} (${v.messages.length})`,
                children: /* @__PURE__ */ a.createElement(
                  Ul,
                  {
                    messages: v.messages,
                    locale: r
                  }
                )
              }
            ]
          }
        ))
      });
    }
    p.push({
      key: "raw",
      label: c(r, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.inboundParts && i.inboundParts.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, `${c(r, "inboundParts")} (${i.inboundParts.length})`), i.inboundParts.map((v, O) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: O,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, v.type.replace("Content", "")),
        /* @__PURE__ */ a.createElement(
          B,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          v.text ?? "-"
        )
      ))) : null, i.marker ? /* @__PURE__ */ a.createElement(we, { value: i.marker }) : null, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, `${c(r, "toolCall")} (${i.toolCalls.length})`), i.toolCalls.map((v, O) => /* @__PURE__ */ a.createElement("div", { key: v.id || O, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", v.name), /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, v.id)))) : null, i.note ? /* @__PURE__ */ a.createElement(B, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.messages && i.messages.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, `${c(r, "query")} (${i.messages.length})`), i.messages.map((v, O) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: O,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, v.role),
        /* @__PURE__ */ a.createElement(
          B,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          v.text
        )
      ))) : null, i.thinkingText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, c(r, "thinking")), /* @__PURE__ */ a.createElement(we, { value: i.thinkingText })) : null, i.outputText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, c(r, "output")), /* @__PURE__ */ a.createElement(we, { value: i.outputText })) : null)
    });
  }
  return (i.startedAt !== null || m || E) && p.push({
    key: "timing",
    label: c(r, "timing"),
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "startedAt"),
        value: Le(i.startedAt)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "duration"),
        value: ye(i.timeSeconds)
      }
    ), E ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "ttftLabel"),
        value: ye(E.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "decodeLabel"),
        value: ye(E.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "throughput"),
        value: wt(
          m == null ? void 0 : m.output_tokens,
          E.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, c(r, "noTiming")))
  }), m && p.push({
    key: "usage",
    label: c(r, "usage"),
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "input"),
        value: Y(m.input_tokens)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "output"),
        value: Y(m.output_tokens)
      }
    ), m.cache_creation_input_tokens ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "cacheCreated"),
        value: Y(m.cache_creation_input_tokens)
      }
    ) : null, m.cache_input_tokens ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "cached"),
        value: Y(m.cache_input_tokens)
      }
    ) : null, m.total_tokens !== void 0 ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "total"),
        value: Y(m.total_tokens)
      }
    ) : null, m.time !== void 0 ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(r, "apiTime"),
        value: ye(m.time)
      }
    ) : null)
  }), p.push({
    key: "rawjson",
    label: c(r, "rawTab"),
    children: /* @__PURE__ */ a.createElement(we, { value: i.raw })
  }), /* @__PURE__ */ a.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: u,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative"
      }
    },
    /* @__PURE__ */ a.createElement(Ft, { dragRef: d, width: u }),
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(kt, { onClose: o }), /* @__PURE__ */ a.createElement(dn, { size: "small", items: p, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Hl = {
  kept: "resetKept",
  removed: "resetRemoved",
  rewritten: "resetRewritten",
  added: "resetAdded"
}, On = 8, Kl = {
  system: "green",
  user: "blue",
  tool: "gold"
};
function Ul({
  messages: e,
  locale: t
}) {
  const [n, s] = ut(null), [l, o] = ut(null), [r, u] = ut(!1), d = /* @__PURE__ */ new Map();
  for (const g of e)
    d.set(g.role, (d.get(g.role) ?? 0) + 1);
  const i = n === null ? e.map((g, h) => h) : e.flatMap(
    (g, h) => g.role === n ? [h] : []
  ), m = !r && n === null && e.length > On + 4 ? e.length - On : 0, E = i.filter((g) => g >= m), p = (g, h, b) => /* @__PURE__ */ a.createElement(
    "span",
    {
      onClick: b,
      style: {
        display: "inline-flex",
        alignItems: "center",
        padding: "0 8px",
        borderRadius: 999,
        fontSize: 10,
        lineHeight: "18px",
        cursor: "pointer",
        userSelect: "none",
        border: `1px solid ${h ? "rgba(22,119,255,0.6)" : "rgba(128,128,128,0.35)"}`,
        background: h ? "rgba(22,119,255,0.10)" : "transparent",
        color: h ? "#1677ff" : "rgba(128,128,128,1)"
      }
    },
    g
  );
  return /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, p(
    `${c(t, "apiFilterAll")} ${e.length}`,
    n === null,
    () => s(null)
  ), [...d.entries()].map(
    ([g, h]) => p(
      `${g} ${h}`,
      n === g,
      () => s(n === g ? null : g)
    )
  )), m > 0 ? /* @__PURE__ */ a.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => u(!0)
    },
    `⋯ ${c(t, "apiShowEarlier")} (${m})`
  ) : null, r && n === null && m === 0 ? /* @__PURE__ */ a.createElement("a", { style: { fontSize: 11 }, onClick: () => u(!1) }, c(t, "apiCollapseEarlier")) : null, /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 4 } }, E.map((g) => {
    const h = e[g], b = l === g;
    return /* @__PURE__ */ a.createElement(
      "div",
      {
        key: g,
        style: {
          borderRadius: 6,
          border: `1px solid ${b ? "rgba(22,119,255,0.35)" : "rgba(128,128,128,0.18)"}`,
          padding: b ? "4px 8px" : "2px 8px",
          background: b ? "rgba(22,119,255,0.04)" : "transparent"
        }
      },
      /* @__PURE__ */ a.createElement(
        "div",
        {
          onClick: () => o(b ? null : g),
          style: {
            display: "flex",
            gap: 6,
            alignItems: "center",
            cursor: "pointer",
            minWidth: 0
          }
        },
        /* @__PURE__ */ a.createElement(
          Tt,
          {
            color: Kl[h.role] ?? "purple",
            style: {
              marginInlineEnd: 0,
              fontSize: 10,
              lineHeight: "16px",
              flexShrink: 0
            }
          },
          h.role
        ),
        /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, "#", g + 1),
        h.toolCallId ? /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 9, flexShrink: 0 } }, "…", h.toolCallId.slice(-8)) : null,
        /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, Y(h.content.length), " ", c(t, "charUnit")),
        b ? null : /* @__PURE__ */ a.createElement(
          B,
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
          h.content.split(`
`, 1)[0].slice(0, 120) || "—"
        )
      ),
      b ? /* @__PURE__ */ a.createElement(
        "div",
        {
          style: {
            marginTop: 4,
            maxHeight: 260,
            overflowY: "auto"
          }
        },
        /* @__PURE__ */ a.createElement(we, { value: h.content })
      ) : null
    );
  })));
}
function Wl({
  message: e,
  locale: t
}) {
  const [n, s] = a.useState(!1), l = e.text ?? "";
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, Y(e.chars), " ", c(t, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), l.length > 200 ? /* @__PURE__ */ a.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => s((o) => !o)
    },
    n ? c(t, "inputCollapseText") : c(t, "inputExpand")
  ) : null), l ? /* @__PURE__ */ a.createElement(
    "div",
    {
      style: n ? void 0 : {
        maxHeight: 57,
        overflow: "hidden",
        position: "relative"
      }
    },
    /* @__PURE__ */ a.createElement(we, { value: l })
  ) : null);
}
const Vl = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource"
}, ql = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast"
};
function Gl({
  span: e,
  records: t,
  onJumpRecord: n,
  onClose: s
}) {
  const l = Me(), o = e.endKind ? c(l, ql[e.endKind]) : c(l, "spanOpen"), r = al(e);
  return new Map(t.map((u) => [u.index, u])), /* @__PURE__ */ a.createElement(
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
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(kt, { onClose: s }), /* @__PURE__ */ a.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ a.createElement(
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
    ), /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ a.createElement(
      Tt,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      c(l, Vl[e.trigger])
    )), /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(l, "spanStart"),
        value: Le(e.startT)
      }
    ), /* @__PURE__ */ a.createElement(I, { label: c(l, "spanEnd"), value: o }), e.endT !== null ? /* @__PURE__ */ a.createElement(I, { label: " ", value: Le(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(l, "spanLastActivity"),
        value: Le(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(l, "spanDuration"),
        value: r === null ? "-" : ye(r / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: c(l, "spanLoadState"),
        value: e.bypass ? c(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, c(l, "spanEvidence")), e.evidences.slice(0, 30).map((u, d) => /* @__PURE__ */ a.createElement(
      "div",
      {
        key: d,
        style: {
          display: "flex",
          gap: 6,
          alignItems: "baseline",
          padding: "2px 0"
        }
      },
      /* @__PURE__ */ a.createElement(
        Tt,
        {
          color: u.kind === "path" ? "geekblue" : u.kind === "content" ? "blue" : "default",
          style: { marginInlineEnd: 0, fontSize: 10 }
        },
        u.kind
      ),
      /* @__PURE__ */ a.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => n(u.recordIndex)
        },
        "#",
        u.recordIndex
      ),
      /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, u.detail)
    ))) : /* @__PURE__ */ a.createElement(
      B,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      c(l, "spanNoActivity")
    ))
  );
}
const ve = window.QwenPaw.host.React, Xl = ve.useRef, Jl = ve.useState;
ve.useCallback;
ve.useMemo;
const Ql = ve.useEffect, Yl = ve.useLayoutEffect, Zl = ve.useReducer;
ve.createContext;
ve.useContext;
ve.createElement;
ve.cloneElement;
ve.isValidElement;
ve.memo;
ve.forwardRef;
ve.Fragment;
ve.StrictMode;
ve.version;
function eo(e) {
  return e ? e() : void 0;
}
function to(e, t, n) {
  const s = new Array(e);
  return new Proxy(s, {
    get(l, o, r) {
      if (typeof o == "string") {
        const u = o.charCodeAt(0);
        if (u >= 48 && u <= 57) {
          const d = +o;
          if (Number.isInteger(d) && d >= 0 && d < e) {
            let i = l[d];
            if (!i) {
              const m = t[d * 2];
              i = l[d] = {
                index: d,
                key: n(d),
                start: m,
                size: t[d * 2 + 1],
                end: m + t[d * 2 + 1],
                lane: 0
              };
            }
            return i;
          }
        }
        if (o === "length") return e;
      }
      return Reflect.get(l, o, r);
    }
  });
}
function Ze(e, t, n) {
  let s = n.initialDeps ?? [], l, o = !0;
  function r() {
    var u;
    const d = process.env.NODE_ENV !== "production" && !!n.key && !!((u = n.debug) != null && u.call(n));
    let i = 0;
    d && (i = Date.now());
    const m = e();
    if (!(m.length !== s.length || m.some((g, h) => s[h] !== g)))
      return l;
    s = m;
    let p = 0;
    if (d && (p = Date.now()), l = t(...m), d) {
      const g = Math.round((Date.now() - i) * 100) / 100, h = Math.round((Date.now() - p) * 100) / 100, b = h / 16, z = (T, v) => {
        for (T = String(T); T.length < v; )
          T = " " + T;
        return T;
      };
      console.info(
        `%c⏱ ${z(h, 5)} /${z(g, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * b, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return n != null && n.onChange && !(o && n.skipInitialOnChange) && n.onChange(l), o = !1, l;
  }
  return r.updateDeps = (u) => {
    s = u;
  }, r;
}
function Ln(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const no = (e, t) => Math.abs(e - t) < 1.01, so = (e, t, n) => {
  let s;
  return function(...l) {
    e.clearTimeout(s), s = e.setTimeout(() => t.apply(this, l), n);
  };
};
let it;
const Ht = () => {
  if (it !== void 0) return it;
  if (typeof navigator > "u") return it = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return it = !0;
  const e = navigator.maxTouchPoints;
  return it = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Nn = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, lo = (e) => e, oo = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1, l = new Array(s);
  for (let o = 0; o < s; o++)
    l[o] = t + o;
  return l;
}, ro = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const l = (r) => {
    const { width: u, height: d } = r;
    t({ width: Math.round(u), height: Math.round(d) });
  };
  if (l(Nn(n)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((r) => {
    const u = () => {
      const d = r[0];
      if (d != null && d.borderBoxSize) {
        const i = d.borderBoxSize[0];
        if (i) {
          l({ width: i.inlineSize, height: i.blockSize });
          return;
        }
      }
      l(Nn(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(u) : u();
  });
  return o.observe(n, { box: "border-box" }), () => {
    o.unobserve(n);
  };
}, _t = {
  passive: !0
}, io = typeof window > "u" ? !0 : "onscrollend" in window, ao = (e, t, n) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && io;
  let r = 0;
  const u = o ? null : so(
    l,
    () => t(r, !1),
    e.options.isScrollingResetDelay
  ), d = (E) => () => {
    r = n(s), u == null || u(), t(r, E);
  }, i = d(!0), m = d(!1);
  return s.addEventListener("scroll", i, _t), o && s.addEventListener("scrollend", m, _t), () => {
    s.removeEventListener("scroll", i), o && s.removeEventListener("scrollend", m);
  };
}, co = (e, t) => ao(e, t, (n) => {
  const { horizontal: s, isRtl: l } = e.options;
  return s ? n.scrollLeft * (l && -1 || 1) : n.scrollTop;
}), uo = (e, t, n) => {
  if (n.options.useCachedMeasurements) {
    const s = n.indexFromElement(e), l = n.options.getItemKey(s);
    return n.itemSizeCache.get(l) ?? n.options.estimateSize(s);
  }
  if (t != null && t.borderBoxSize) {
    const s = t.borderBoxSize[0];
    if (s)
      return Math.round(
        s[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!t) {
    const s = n.indexFromElement(e), l = n.options.getItemKey(s), o = n.itemSizeCache.get(l);
    if (o !== void 0)
      return o;
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, ho = (e, {
  adjustments: t = 0,
  behavior: n
}, s) => {
  var l, o;
  (o = (l = s.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [s.options.horizontal ? "left" : "top"]: e + t,
    behavior: n
  });
}, po = ho;
class fo {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var n, s, l;
      return ((l = (s = (n = this.targetWindow) == null ? void 0 : n.performance) == null ? void 0 : s.now) == null ? void 0 : l.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const s = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const r = () => {
            const u = o.target, d = this.indexFromElement(u);
            if (!u.isConnected) {
              this.observer.unobserve(u);
              for (const [i, m] of this.elementsCache)
                if (m === u) {
                  this.elementsCache.delete(i);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(d) && this.resizeItem(
              d,
              this.options.measureElement(u, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = s()) == null || l.disconnect(), n = null;
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
    })(), this.range = null, this.setOptions = (n) => {
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
        getItemKey: lo,
        rangeExtractor: oo,
        onChange: () => {
        },
        measureElement: uo,
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
      for (const p in n) {
        const g = n[p];
        g !== void 0 && (o[p] = g);
      }
      const r = this.options;
      let u = null, d = null, i = !1;
      if (r !== void 0 && r.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const p = r.count, g = o.count, h = this.getMeasurements(), b = p > 0 ? ((s = h[0]) == null ? void 0 : s.key) ?? r.getItemKey(0) : null, z = p > 0 ? ((l = h[p - 1]) == null ? void 0 : l.key) ?? r.getItemKey(p - 1) : null;
        if (g !== p || p > 0 && g > 0 && (o.getItemKey(0) !== b || o.getItemKey(g - 1) !== z)) {
          i = !0;
          const O = p > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? h[0] : null;
          O && (u = [O.key, this.getScrollOffset() - O.start]);
          const A = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          A && g > p && this.isAtEnd(r.scrollEndThreshold) && (p === 0 || o.getItemKey(g - 1) !== z) && (d = A);
        }
      }
      this.options = o, i && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let m = !1, E = 0;
      if (u && this.scrollOffset !== null) {
        const [p, g] = u, h = this.getMeasurements(), { count: b, getItemKey: z } = this.options;
        let T = 0;
        for (; T < b && z(T) !== p; )
          T++;
        if (T < b) {
          const v = h[T];
          if (v) {
            const O = Math.max(0, v.start + g);
            O !== this.scrollOffset && (E = O - this.scrollOffset, this.scrollOffset = O, m = !0);
          }
        }
      }
      (m || d) && (this.pendingScrollAnchor = [
        m ? u[0] : null,
        m ? u[1] : 0,
        d,
        E
      ]);
    }, this.notify = (n) => {
      var s, l;
      (l = (s = this.options).onChange) == null || l.call(s, this, n);
    }, this.maybeNotify = Ze(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
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
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const s = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s) {
        if (this.cleanup(), !s) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((o) => {
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
            const u = this.getScrollOffset();
            this.scrollDirection = r ? u === o ? this.scrollDirection : u < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = r, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, r = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, u = () => {
            this._iosTouching = !1, !(!Ht() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            r,
            _t
          ), o.addEventListener(
            "touchend",
            u,
            _t
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", r), o.removeEventListener("touchend", u), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, r, u, d] = l;
        o !== null && !u && (Ht() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? d !== 0 && (this._iosDeferredAdjustment += d) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), u && this.scrollToEnd({ behavior: u });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      const n = this.getScrollOffset(), s = this.getMaxScrollOffset();
      if (n < 0 || n > s) return;
      if (this._iosDeferredAdjustment < 0 && n >= s - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const l = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(n, {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Ze(
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
      (n, s, l, o, r, u, d, i) => (this.prevLanes !== void 0 && this.prevLanes !== u && (this.lanesChangedFlag = !0), this.prevLanes = u, this.pendingMin = null, {
        count: n,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: u,
        laneAssignmentMode: d,
        gap: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ze(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: n,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: u,
        laneAssignmentMode: d,
        gap: i
      }, m) => {
        const E = this.itemSizeCache;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const T of this.laneAssignments.keys())
            T >= n && this.laneAssignments.delete(T);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((T) => {
          this.itemSizeCache.set(T.key, T.size);
        }));
        const p = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1), u === 1) {
          const T = n * 2;
          let v = this._flatMeasurements;
          if (!v || v.length < T) {
            const M = new Float64Array(T);
            v && p > 0 && M.set(v.subarray(0, p * 2)), v = M, this._flatMeasurements = v;
          }
          let O;
          if (p === 0)
            O = s + l;
          else {
            const M = p - 1;
            O = v[M * 2] + v[M * 2 + 1] + i;
          }
          for (let M = p; M < n; M++) {
            const F = o(M), G = E.get(F), se = typeof G == "number" ? G : this.options.estimateSize(M);
            v[M * 2] = O, v[M * 2 + 1] = se, O += se + i;
          }
          const A = to(n, v, o);
          return this.measurementsCache = A, A;
        }
        const g = this.measurementsCache.slice(0, p), h = new Array(u).fill(
          void 0
        ), b = new Float64Array(u);
        let z = 0;
        for (let T = 0; T < p; T++) {
          const v = g[T];
          v && (h[v.lane] === void 0 && z++, h[v.lane] = T, b[v.lane] = v.end);
        }
        for (let T = p; T < n; T++) {
          const v = o(T), O = this.laneAssignments.get(T);
          let A, M;
          const F = d === "estimate" || E.has(v);
          if (O !== void 0 && this.options.lanes > 1) {
            A = O;
            const le = h[A], ce = le !== void 0 ? g[le] : void 0;
            M = ce ? ce.end + i : s + l;
          } else if (z === u) {
            let le = 0, ce = b[0], P = h[0];
            for (let w = 1; w < u; w++) {
              const U = b[w];
              (U < ce || U === ce && h[w] < P) && (le = w, ce = U, P = h[w]);
            }
            A = le, M = ce + i, F && this.laneAssignments.set(T, A);
          } else
            A = T % this.options.lanes, M = s + l, F && this.laneAssignments.set(T, A);
          const G = E.get(v), se = typeof G == "number" ? G : this.options.estimateSize(T), pe = M + se;
          g[T] = {
            index: T,
            start: M,
            size: se,
            end: pe,
            key: v,
            lane: A
          }, h[A] === void 0 && z++, h[A] = T, b[A] = pe;
        }
        return this.measurementsCache = g, g;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ze(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, s, l, o) => n.length === 0 || s === 0 ? (this.range = null, null) : (this.range = go(
        n,
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
    ), this.getVirtualIndexes = Ze(
      () => {
        let n = null, s = null;
        const l = this.calculateRange();
        return l && (n = l.startIndex, s = l.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, s]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          s
        ];
      },
      (n, s, l, o, r) => o === null || r === null ? [] : n({
        startIndex: o,
        endIndex: r,
        overscan: s,
        count: l
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const s = this.options.indexAttribute, l = n.getAttribute(s);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${s}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (n) => {
      var s;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const l = this.scrollState.index ?? ((s = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : s.index);
      if (l !== void 0 && this.range) {
        const o = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), r = Math.max(0, l - o), u = Math.min(
          this.options.count - 1,
          l + o
        );
        return n >= r && n <= u;
      }
      return !0;
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, u) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(u));
        });
        return;
      }
      const s = this.indexFromElement(n), l = this.options.getItemKey(s), o = this.elementsCache.get(l);
      o !== n && (o && this.observer.unobserve(o), this.observer.observe(n), this.elementsCache.set(l, n)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(n, void 0, this));
    }, this.resizeItem = (n, s) => {
      var l, o;
      if (n < 0 || n >= this.options.count) return;
      let r, u, d;
      const i = this._flatMeasurements;
      if (this.options.lanes === 1 && i !== null)
        d = this.options.getItemKey(n), u = i[n * 2], r = i[n * 2 + 1];
      else {
        const p = this.measurementsCache[n];
        if (!p) return;
        d = p.key, u = p.start, r = p.size;
      }
      const m = this.itemSizeCache.get(d) ?? r, E = s - m;
      if (E !== 0) {
        const p = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, g = p ? this.getTotalSize() : 0, h = this.getScrollOffset() + this.scrollAdjustments, z = !this.itemSizeCache.has(d) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          u < h
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          u + m <= h && this.scrollDirection !== "backward"
        ), T = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[n] ?? {
            index: n,
            key: d,
            start: u,
            size: r,
            end: u + r,
            lane: 0
          },
          E,
          this
        ) : z);
        (this.pendingMin === null || n < this.pendingMin) && (this.pendingMin = n), this.itemSizeCache.set(d, s), this.itemSizeCacheVersion++;
        let v = !1;
        p ? v = this.applyScrollAdjustment(
          this.getTotalSize() - g
        ) : T && (v = this.applyScrollAdjustment(E)), this.notify(v);
      }
    }, this.getVirtualItems = Ze(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, s) => {
        const l = [];
        for (let o = 0, r = n.length; o < r; o++) {
          const u = n[o], d = s[u];
          l.push(d);
        }
        return l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const s = this.getMeasurements();
      if (s.length === 0)
        return;
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, r = bs(
        0,
        s.length - 1,
        o ? (u) => l[u * 2] : (u) => Ln(s[u]).start,
        n
      );
      return Ln(s[r]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const n = this.scrollElement.document.documentElement;
        return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getVirtualDistanceFromEnd = () => Math.max(
      this.getTotalSize() - this.getSize() - this.getScrollOffset(),
      0
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (n = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= n, this.getOffsetForAlignment = (n, s, l = 0) => {
      if (!this.scrollElement) return 0;
      const o = this.getSize(), r = this.getScrollOffset();
      s === "auto" && (s = n >= r + o ? "end" : "start"), s === "center" ? n += (l - o) / 2 : s === "end" && (n -= o);
      const u = this.getMaxScrollOffset();
      return Math.max(Math.min(u, n), 0);
    }, this.getOffsetForIndex = (n, s = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const l = this.getSize(), o = this.getScrollOffset(), r = this.measurementsCache[n];
      if (!r) return;
      if (s === "auto")
        if (r.end >= o + l - this.options.scrollPaddingEnd)
          s = "end";
        else if (r.start <= o + this.options.scrollPaddingStart)
          s = "start";
        else
          return [o, s];
      if (s === "end" && n === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const u = s === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(u, s, r.size),
        s
      ];
    }, this.scrollToOffset = (n, { align: s = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(n, s), r = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: l,
        startedAt: r,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (n, {
      align: s = "auto",
      behavior: l = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, n = Math.max(0, Math.min(n, this.options.count - 1));
      const o = this.getOffsetForIndex(n, s);
      if (!o)
        return;
      const [r, u] = o, d = this.now();
      this.scrollState = {
        index: n,
        align: u,
        behavior: l,
        startedAt: d,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollBy = (n, { behavior: s = "auto" } = {}) => {
      const l = this.getScrollOffset() + n, o = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: s,
        startedAt: o,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToEnd = ({ behavior: n = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior: n
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior: n
      });
    }, this.getTotalSize = () => {
      var n;
      const s = this.getMeasurements();
      let l;
      if (s.length === 0)
        l = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const o = s.length - 1, r = this._flatMeasurements;
        r != null ? l = r[o * 2] + r[o * 2 + 1] : l = ((n = s[o]) == null ? void 0 : n.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let r = s.length - 1;
        for (; r >= 0 && o.some((u) => u === null); ) {
          const u = s[r];
          o[u.lane] === null && (o[u.lane] = u.end), r--;
        }
        l = Math.max(...o.filter((u) => u !== null));
      }
      return Math.max(
        l - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const n = [];
      if (this.itemSizeCache.size === 0) return n;
      const s = this.getMeasurements();
      for (const l of s)
        l && this.itemSizeCache.has(l.key) && n.push({
          index: l.index,
          key: l.key,
          start: l.start,
          size: l.size,
          end: l.end,
          lane: l.lane
        });
      return n;
    }, this._scrollToOffset = (n, {
      adjustments: s,
      behavior: l
    }) => {
      this._intendedScrollOffset = n + (s ?? 0), this.options.scrollToFn(n, { behavior: l, adjustments: s }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(t);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(t, n) {
    return t === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", t), Ht() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += t, !1) : (this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += t,
      behavior: n
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
    if (!r && no(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, r) {
      const u = this.getSize() || 600, d = Math.abs(l - this.getScrollOffset()), i = this.scrollState.behavior === "smooth" && d > u;
      this.scrollState.lastTargetOffset = l, i || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: i ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const bs = (e, t, n, s) => {
  for (; e <= t; ) {
    const l = (e + t) / 2 | 0, o = n(l);
    if (o < s)
      e = l + 1;
    else if (o > s)
      t = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function mo(e, t, n) {
  let s = 0;
  for (; s <= t; ) {
    const l = (s + t) / 2 | 0, o = e[l * 2];
    if (o < n)
      s = l + 1;
    else if (o > n)
      t = l - 1;
    else
      return l;
  }
  return s > 0 ? s - 1 : 0;
}
function go(e, t, n, s, l) {
  const o = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: o };
  if (s === 1 && l !== null) {
    const i = mo(
      l,
      o,
      n
    );
    let m = i;
    const E = n + t;
    for (; m < o && l[m * 2] + l[m * 2 + 1] < E; )
      m++;
    return { startIndex: i, endIndex: m };
  }
  let u = bs(0, o, (i) => e[i].start, n), d = u;
  if (s === 1)
    for (; d < o && e[d].end < n + t; )
      d++;
  else if (s > 1) {
    const i = Array(s).fill(0);
    for (; d < o && i.some((E) => E < n + t); ) {
      const E = e[d];
      i[E.lane] = E.end, d++;
    }
    const m = Array(s).fill(n + t);
    for (; u >= 0 && m.some((E) => E >= n); ) {
      const E = e[u];
      m[E.lane] = E.start, u--;
    }
    u = Math.max(0, u - u % s), d = Math.min(o, d + (s - 1 - d % s));
  }
  return { startIndex: u, endIndex: d };
}
const Kt = typeof document < "u" ? Yl : Ql;
function yo({
  useFlushSync: e = !0,
  directDomUpdates: t = !1,
  directDomUpdatesMode: n = "transform",
  ...s
}) {
  const l = Zl((m) => m + 1, 0)[1], o = Xl({
    enabled: t,
    mode: n,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  o.current.enabled = t, o.current.mode = n;
  const r = (m) => {
    const E = o.current;
    if (!E.enabled || !E.container) return;
    const p = m.getTotalSize();
    if (p !== E.lastSize) {
      E.lastSize = p;
      const g = m.options.horizontal ? "width" : "height";
      E.container.style[g] = `${p}px`;
    }
  }, u = (m) => {
    const E = o.current;
    if (!E.enabled || !E.container) return;
    r(m);
    const p = !!m.options.horizontal, g = E.mode === "transform", h = p ? "left" : "top", b = m.options.scrollMargin, z = m.getVirtualItems();
    for (const T of z) {
      const v = T.start - b, O = m.elementsCache.get(T.key);
      O && E.lastPositions.get(O) !== v && (E.lastPositions.set(O, v), g ? O.style.transform = p ? `translate3d(${v}px, 0, 0)` : `translate3d(0, ${v}px, 0)` : O.style[h] = `${v}px`);
    }
  }, d = {
    ...s,
    onChange: (m, E) => {
      var p;
      const g = o.current;
      let h = !0;
      if (g.enabled) {
        u(m);
        const b = m.range, z = g.prevRange;
        h = !z || z.isScrolling !== m.isScrolling || z.startIndex !== (b == null ? void 0 : b.startIndex) || z.endIndex !== (b == null ? void 0 : b.endIndex), h && (g.prevRange = b ? {
          startIndex: b.startIndex,
          endIndex: b.endIndex,
          isScrolling: m.isScrolling
        } : null);
      }
      h && (e && E ? eo(l) : l()), (p = s.onChange) == null || p.call(s, m, E);
    }
  }, [i] = Jl(() => {
    const m = new fo(d);
    return Object.assign(m, {
      containerRef: (E) => {
        const p = o.current;
        if (p.container = E, p.lastSize = null, E && p.enabled) {
          const g = m.getTotalSize();
          p.lastSize = g;
          const h = m.options.horizontal ? "width" : "height";
          E.style[h] = `${g}px`;
        }
      }
    });
  });
  return i.setOptions(d), Kt(() => i._didMount(), []), Kt(() => (r(i), i._willUpdate())), Kt(() => {
    u(i);
  }), i;
}
function Eo(e) {
  return yo({
    observeElementRect: ro,
    observeElementOffset: co,
    scrollToFn: po,
    ...e
  });
}
const $t = window.QwenPaw.host, $ = $t.React, { useCallback: So, useEffect: Dn, useRef: Ut } = $, { Tag: et, Tooltip: vo } = $t.antd, { Text: _e } = $t.antd.Typography, {
  CaretRightOutlined: bo,
  CloseCircleOutlined: xo,
  FileTextOutlined: ko,
  RobotOutlined: wo,
  RocketOutlined: To,
  SafetyOutlined: _o,
  SendOutlined: Io,
  SettingOutlined: Mo,
  ToolOutlined: Co,
  UserOutlined: $o
} = $t.antdIcons, Ao = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, zo = {
  user: /* @__PURE__ */ $.createElement($o, null),
  message: /* @__PURE__ */ $.createElement(wo, null),
  tool: /* @__PURE__ */ $.createElement(Co, null),
  system: /* @__PURE__ */ $.createElement(Mo, null)
}, Pn = {
  approval: { color: "volcano", icon: /* @__PURE__ */ $.createElement(_o, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ $.createElement(Io, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ $.createElement(To, null) },
  header: { color: "green", icon: /* @__PURE__ */ $.createElement(ko, null) },
  error: { color: "red", icon: /* @__PURE__ */ $.createElement(xo, null) }
}, Ro = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Oo = 80, rn = 26, xs = 34, jn = 9, Bn = 30, Lo = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function No(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const s of e.inboundParts ?? []) {
    const l = Lo[s.type];
    l && n.set(l, (n.get(l) ?? 0) + 1);
  }
  return n.size === 0 ? null : [...n.entries()].map(([s, l]) => `${c(t, s)}×${l}`).join(" ");
}
function Do(e, t) {
  const n = e.receipt, s = n != null && n.channel ? ` · ${n.channel}` : "";
  return `📤 ${c(t, "replySent")}${s} · ${((n == null ? void 0 : n.chars) ?? 0).toLocaleString()} ${c(t, "chars")}`;
}
const Fn = $.memo(function({
  record: t,
  selected: n,
  dimmed: s,
  multiRequest: l,
  locale: o,
  onSelectRecord: r,
  onOpenRun: u
}) {
  var g, h;
  const d = fs[un()], i = t.usage, m = i && (i.input_tokens || i.output_tokens) ? `${Y(i.input_tokens)}→${Y(
    i.output_tokens
  )}` : null, E = i && i.reasoning_tokens ? i.reasoning_tokens : null, p = i && m ? [
    `Input ${Y(i.input_tokens)} tok`,
    i.cache_input_tokens ? `Cached ${Y(i.cache_input_tokens)} tok` : null,
    i.cache_creation_input_tokens ? `Cache created ${Y(
      i.cache_creation_input_tokens
    )} tok` : null,
    `Output ${Y(i.output_tokens)} tok`,
    E ? `${c(o, "reasoningShort")} ${Y(E)} tok` : null
  ].filter(Boolean).join(" · ") : void 0;
  return /* @__PURE__ */ $.createElement(
    "div",
    {
      className: "at-ledger-row",
      "data-kind": t.kind,
      "data-error": t.isError || void 0,
      "data-running": t.running || void 0,
      "data-selected": n || void 0,
      "data-dimmed": s || void 0,
      onClick: () => r(t.index),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: rn,
        cursor: "pointer",
        background: n ? "rgba(22,119,255,0.08)" : void 0,
        opacity: s ? 0.35 : 1,
        borderLeft: t.skillSpanHue !== void 0 ? `3px solid ${t.skillSpanBypass ? "rgba(250,140,22,0.9)" : `hsl(${t.skillSpanHue}, 65%, 55%)`}` : "3px solid transparent"
      }
    },
    /* @__PURE__ */ $.createElement(
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
      l && u ? /* @__PURE__ */ $.createElement(
        "span",
        {
          title: c(o, "runViewHint"),
          onClick: (b) => {
            b.stopPropagation(), u(t.runIndex);
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
        t.runIndex
      ) : l ? /* @__PURE__ */ $.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", t.runIndex) : null,
      "#",
      t.index
    ),
    /* @__PURE__ */ $.createElement(
      et,
      {
        color: t.kind === "tool" && t.skillName ? "geekblue" : t.markerKind && ((g = Pn[t.markerKind]) == null ? void 0 : g.color) || Ao[t.kind] || "default",
        icon: t.markerKind && ((h = Pn[t.markerKind]) == null ? void 0 : h.icon) || zo[t.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      t.kind === "tool" && t.skillName ? c(o, "skillLoadKind") : hs(t, o)
    ),
    t.kind === "message" && t.model && t.model !== "unknown" ? /* @__PURE__ */ $.createElement(
      et,
      {
        title: t.model,
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
      t.model
    ) : null,
    t.inSkill ? /* @__PURE__ */ $.createElement(
      et,
      {
        color: t.inSkillLoaded ? "geekblue" : "orange",
        title: t.inSkillLoaded ? t.inSkill : `${t.inSkill} — ${c(o, "skillBypass")}`,
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
      t.inSkill
    ) : t.guidedSkill ? /* @__PURE__ */ $.createElement(
      vo,
      {
        title: `${t.guidedSkill} — ${t.guidedReason === "slash" ? c(o, "guidedBySlash") : c(o, "guidedByLoad")}`
      },
      /* @__PURE__ */ $.createElement(
        _e,
        {
          style: {
            fontSize: 10,
            flexShrink: 0,
            maxWidth: 160,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: d.skill
          }
        },
        "∈",
        t.guidedSkill
      )
    ) : null,
    t.kind === "user" && t.skillName ? /* @__PURE__ */ $.createElement(
      et,
      {
        color: "geekblue",
        title: t.skillName,
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
      t.skillName
    ) : null,
    /* @__PURE__ */ $.createElement(
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
      t.receipt ? /* @__PURE__ */ $.createElement(_e, { type: "secondary", style: { fontSize: 12 } }, Do(t, o)) : t.kind === "tool" && t.skillName ? /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(_e, { strong: !0, style: { fontSize: 12 } }, t.skillName), t.toolError ? /* @__PURE__ */ $.createElement(_e, { type: "danger", style: { fontSize: 12 } }, ` → ${t.toolError}`) : t.toolOutputChars ? /* @__PURE__ */ $.createElement(_e, { type: "secondary", style: { fontSize: 12 } }, ` · ${c(o, "skillLoaded")} ${Y(
        t.toolOutputChars
      )} ${c(o, "charUnit")}`) : null) : t.kind === "tool" && t.toolName ? /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(_e, { strong: !0, style: { fontSize: 12 } }, t.toolName), /* @__PURE__ */ $.createElement(_e, { type: "secondary", style: { fontSize: 12 } }, ` ${t.toolInput ?? ""}`), t.toolOutput ? /* @__PURE__ */ $.createElement(
        _e,
        {
          type: t.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${t.toolOutput}`
      ) : null) : /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(
        _e,
        {
          type: t.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        t.running ? `⏳ ${t.text || "…"}` : t.text || "—"
      ), t.kind === "user" ? /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(_e, { type: "secondary", style: { fontSize: 11 } }, ` ${No(t, o) ?? ""}`), t.channel && t.channel !== "console" ? /* @__PURE__ */ $.createElement(_e, { code: !0, style: { fontSize: 10 } }, ` @${t.channel}`) : null) : null)
    ),
    /* @__PURE__ */ $.createElement(
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
      m ? /* @__PURE__ */ $.createElement("span", { title: p }, /* @__PURE__ */ $.createElement("span", { style: { color: d.tokens } }, m), E ? /* @__PURE__ */ $.createElement("span", { style: { color: d.reasoning } }, ` · ${Y(E)}`) : null) : null,
      m ? " · " : "",
      (t.kind === "message" || t.kind === "tool") && ye(t.timeSeconds)
    )
  );
}), Po = $.memo(function({
  turn: t,
  collapsed: n,
  selected: s,
  cellCount: l,
  onToggleTurn: o,
  onSelectTurn: r,
  onSkillSpanOpen: u,
  locale: d
}) {
  return /* @__PURE__ */ $.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: xs }
    },
    /* @__PURE__ */ $.createElement(
      "span",
      {
        onClick: (i) => {
          i.stopPropagation(), t.turn !== null && r(t.turn);
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "1px 10px",
          borderRadius: 999,
          background: s ? "rgba(22,119,255,0.16)" : "rgba(22,119,255,0.08)",
          border: "1px solid rgba(22,119,255,0.25)",
          fontSize: 11,
          cursor: "pointer",
          userSelect: "none"
        }
      },
      /* @__PURE__ */ $.createElement(
        bo,
        {
          onClick: (i) => {
            i.stopPropagation(), t.turn !== null && o(t.turn);
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: n ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ $.createElement(_e, { strong: !0, style: { fontSize: 11 } }, "Request #", t.turn),
      t.durationMs !== null && /* @__PURE__ */ $.createElement(_e, { type: "secondary", style: { fontSize: 11 } }, ye(t.durationMs / 1e3)),
      /* @__PURE__ */ $.createElement(_e, { type: "secondary", style: { fontSize: 11 } }, l, " ", c(d, "events")),
      t.skillsUsed && t.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ $.createElement(
          "span",
          {
            onClick: (i) => {
              u && (i.stopPropagation(), u(t.skillsUsed[0], t.turn));
            },
            style: {
              display: "inline-flex",
              cursor: u ? "pointer" : void 0
            }
          },
          /* @__PURE__ */ $.createElement(
            et,
            {
              color: "geekblue",
              title: t.skillsUsed.join(", "),
              style: {
                marginInlineEnd: 0,
                fontSize: 10,
                lineHeight: "16px",
                cursor: "inherit"
              }
            },
            "📚 ",
            t.skillsUsed.slice(0, 2).join(" "),
            t.skillsUsed.length > 2 ? ` +${t.skillsUsed.length - 2}` : ""
          )
        )
      ) : null,
      /* @__PURE__ */ $.createElement(
        et,
        {
          color: Ro[t.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Mt(d, t.status)
      )
    )
  );
});
function jo({
  turns: e,
  selectedIndex: t,
  selectedTurn: n,
  collapsedTurns: s,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: r,
  onSelectedTurnChange: u,
  onToggleTurn: d,
  callsCollapsed: i,
  hasOlderRecords: m,
  loadingOlder: E,
  onLoadOlder: p,
  initialRecord: g,
  emptyText: h,
  onSkillSpanOpen: b,
  locale: z,
  onEscape: T
}) {
  const v = Ut(null), O = Ut(null), A = Ut(null), M = $.useMemo(
    () => e.filter((w) => w.turn !== null),
    [e]
  ), F = M.length > 1, G = $.useMemo(() => {
    var U;
    const w = [];
    m && w.push({
      key: "load-older",
      height: Bn,
      type: "load-older"
    }), g && (w.push({
      key: "initial",
      height: rn,
      type: "initial",
      record: g
    }), w.push({
      key: "initial-divider",
      height: jn,
      type: "divider"
    }));
    for (const N of M) {
      const X = N.turn;
      if (w.push({
        key: `turn-${X}`,
        height: xs,
        type: "boundary",
        turn: N
      }), !s.has(X))
        for (const y of ((U = N.groups[0]) == null ? void 0 : U.cells) ?? [])
          i && y.kind === "tool" || w.push({
            key: `rec-${y.index}`,
            height: rn,
            type: "record",
            record: y
          });
    }
    return w;
  }, [
    M,
    s,
    i,
    m,
    g
  ]), se = $.useCallback(
    (w) => l !== null && !l.has(w.index) || o !== null && !o.has(w.index),
    [l, o]
  ), pe = So(
    (w) => {
      var U;
      switch (w.type) {
        case "load-older":
          return /* @__PURE__ */ $.createElement("div", { style: { textAlign: "center", height: Bn } }, /* @__PURE__ */ $.createElement(
            "button",
            {
              type: "button",
              onClick: p,
              disabled: E,
              style: {
                border: "1px solid rgba(128,128,128,0.3)",
                borderRadius: 10,
                background: "transparent",
                padding: "1px 12px",
                fontSize: 11,
                cursor: E ? "default" : "pointer",
                color: "rgba(128,128,128,1)"
              }
            },
            E ? "…" : `⋯ ${c(z, "loadOlder")}`
          ));
        case "divider":
          return /* @__PURE__ */ $.createElement(
            "div",
            {
              style: {
                height: jn,
                borderBottom: "1px dashed rgba(128,128,128,0.25)"
              }
            }
          );
        case "initial": {
          const N = w.record;
          return /* @__PURE__ */ $.createElement(
            Fn,
            {
              record: N,
              selected: t === N.index,
              dimmed: se(N),
              multiRequest: F,
              locale: z,
              onSelectRecord: r,
              onOpenRun: u
            }
          );
        }
        case "boundary": {
          const N = w.turn, X = N.turn;
          return /* @__PURE__ */ $.createElement(
            Po,
            {
              turn: N,
              collapsed: s.has(X),
              selected: n === X,
              cellCount: ((U = N.groups[0]) == null ? void 0 : U.cells.length) ?? 0,
              onToggleTurn: d,
              onSelectTurn: u,
              onSkillSpanOpen: b,
              locale: z
            }
          );
        }
        case "record":
        default: {
          const N = w.record;
          return /* @__PURE__ */ $.createElement(
            Fn,
            {
              record: N,
              selected: t === N.index,
              dimmed: se(N),
              multiRequest: F,
              locale: z,
              onSelectRecord: r,
              onOpenRun: u
            }
          );
        }
      }
    },
    [
      s,
      se,
      E,
      z,
      F,
      p,
      r,
      u,
      b,
      d,
      t,
      n
    ]
  ), le = G.length > Oo;
  Dn(() => {
    A.current = t;
  }, [t]), Dn(() => {
    var N, X, y;
    const w = A.current;
    if (w === null) return;
    const U = G.findIndex((f) => {
      var S;
      return ((S = f.record) == null ? void 0 : S.index) === w;
    });
    if (!(U < 0)) {
      if (A.current = null, le) {
        (N = O.current) == null || N.call(O, U);
        return;
      }
      (y = (X = v.current) == null ? void 0 : X.querySelector(`[data-row-key="${G[U].key}"]`)) == null || y.scrollIntoView({ block: "nearest" });
    }
  }, [G, t, le]);
  const ce = (w) => {
    if (w.altKey || w.ctrlKey || w.metaKey) return;
    if (w.key === "Escape") {
      T && (w.preventDefault(), T());
      return;
    }
    if (w.key !== "ArrowDown" && w.key !== "ArrowUp") return;
    const U = G.filter((f) => f.record !== void 0);
    if (U.length === 0) return;
    w.preventDefault();
    const N = w.key === "ArrowDown" ? 1 : -1, X = U.findIndex(
      (f) => {
        var S;
        return ((S = f.record) == null ? void 0 : S.index) === t;
      }
    ), y = X < 0 ? N > 0 ? 0 : U.length - 1 : Math.min(U.length - 1, Math.max(0, X + N));
    y !== X && r(U[y].record.index);
  };
  if (G.length === 0)
    return /* @__PURE__ */ $.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ $.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        h ?? c(z, "noSessions")
      )
    );
  const P = le ? /* @__PURE__ */ $.createElement(
    Bo,
    {
      rows: G,
      scrollRef: v,
      scrollToRowRef: O,
      renderRow: pe
    }
  ) : /* @__PURE__ */ $.createElement("div", null, G.map((w) => /* @__PURE__ */ $.createElement("div", { key: w.key, "data-row-key": w.key }, pe(w))));
  return /* @__PURE__ */ $.createElement(
    "div",
    {
      ref: v,
      tabIndex: 0,
      onKeyDown: ce,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px",
        outline: "none"
      }
    },
    P
  );
}
function Bo({
  rows: e,
  scrollRef: t,
  scrollToRowRef: n,
  renderRow: s
}) {
  const l = Eo({
    count: e.length,
    getScrollElement: () => t.current,
    estimateSize: (o) => e[o].height,
    overscan: 12
  });
  return n.current = (o) => l.scrollToIndex(o, { align: "auto" }), /* @__PURE__ */ $.createElement(
    "div",
    {
      style: {
        height: l.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    l.getVirtualItems().map((o) => /* @__PURE__ */ $.createElement(
      "div",
      {
        key: e[o.index].key,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: o.size,
          transform: `translateY(${o.start}px)`
        }
      },
      s(e[o.index])
    ))
  );
}
function Wt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function Hn(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (t) => typeof t == "number" && Number.isFinite(t)
  );
}
function Fo(e) {
  if (!Array.isArray(e) || e.length === 0) return;
  const t = [];
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const s = n;
    t.push({
      role: typeof s.role == "string" ? s.role : "?",
      chars: typeof s.chars == "number" ? s.chars : 0,
      text: typeof s.text == "string" ? s.text : void 0,
      toolCallId: typeof s.tool_call_id == "string" ? s.tool_call_id : void 0
    });
  }
  return t.length > 0 ? t : void 0;
}
function Ho(e) {
  if (!(typeof e != "string" || !e))
    try {
      const t = JSON.parse(e);
      if (typeof t.skill == "string" && t.skill)
        return t.skill;
    } catch {
    }
}
function ks(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function Ko(e) {
  if (typeof e.name == "string" && e.name) return e.name;
  const t = e.function;
  if (t && typeof t == "object" && typeof t.name == "string")
    return t.name;
}
function Uo(e) {
  const t = [];
  for (const n of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const s = n[1].match(/<name>([^<]+)<\/name>/), l = n[1].match(/<dir>([^<]+)<\/dir>/);
    s && l && l[1].trim() && t.push([ks(l[1].trim()), s[1].trim()]);
  }
  return t.sort((n, s) => s[0].length - n[0].length), t;
}
function Kn(e) {
  const t = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return t ? t[1].trim() : null;
}
function Fe(e, t = 160) {
  if (!e) return "";
  const n = e.split(`
`, 1)[0].trim();
  return n.length > t ? `${n.slice(0, t)}…` : n;
}
function Wo(e) {
  var N, X;
  const t = [], n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), u = [];
  let d = "";
  const i = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
  let g = [];
  const h = /* @__PURE__ */ new Set(), b = [], z = new rl(), T = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
  let A = [], M = [], F = 0, G = 0;
  const se = (y) => y.groups[0].cells, pe = (y, f) => {
    const S = r.get(y);
    S ? S.push(f) : r.set(y, [f]);
  }, le = (y, f) => {
    if (!y)
      if (d)
        y = d;
      else {
        u.push(f);
        return;
      }
    const S = n.get(y);
    if (S)
      f.runIndex = S.turn ?? 0, se(S).push(f);
    else if (d) {
      const _ = n.get(d);
      _ ? (f.runIndex = _.turn ?? 0, se(_).push(f)) : pe(y, f);
    } else
      pe(y, f);
  }, ce = (y, f) => {
    const S = r.get(f);
    if (S) {
      for (const _ of S) se(y).push(_);
      r.delete(f);
    }
  };
  for (const y of e) {
    const f = Wt(y);
    switch (y.type) {
      case "run/start": {
        G += 1, b.length = 0, i.set(
          y.run_id,
          typeof f.channel == "string" ? f.channel : ""
        );
        const S = {
          turn: G,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${G}`, cells: [] }]
        };
        n.set(y.run_id, S), t.push(S), d = y.run_id, ce(S, y.run_id);
        for (const Z of u.splice(0))
          Z.runIndex = G, se(S).push(Z);
        const _ = Array.isArray(f.messages) ? f.messages : [], R = String(f.query ?? "");
        let C = typeof f.slash_skill == "string" && f.slash_skill ? f.slash_skill : Kn(R);
        !C && _.length > 0 && (C = Kn(String(((N = _[0]) == null ? void 0 : N.text) ?? ""))), C && (h.add(C), b.push([C, "slash"]), z.onRunStart(), z.onSlashSkill(
          C,
          y.seq,
          be(y.t) ?? 0
        ), T.set(`${C}#${y.seq}`, S));
        const D = {
          index: ++F,
          runIndex: G,
          runId: y.run_id,
          kind: "user",
          text: Fe(R) || Fe((X = _.at(-1)) == null ? void 0 : X.text),
          messages: _,
          timeSeconds: 0,
          startedAt: be(y.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: C ?? void 0,
          model: void 0
        };
        m.set(y.run_id, D), se(S).push(D);
        break;
      }
      case "run/end": {
        const S = n.get(y.run_id);
        d === y.run_id && (d = ""), b.length = 0, z.onRunEnd(y.seq, be(y.t) ?? 0), i.delete(y.run_id), m.delete(y.run_id);
        const _ = String(f.status ?? "unknown");
        if (S && (S.status = _, S.durationMs = typeof f.duration_ms == "number" ? f.duration_ms : null), _ === "error" && f.error) {
          const R = S ?? {
            turn: null,
            status: _,
            durationMs: typeof f.duration_ms == "number" ? f.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || t.push(R), R.groups[0].cells.push({
            index: ++F,
            runIndex: G,
            runId: y.run_id,
            kind: "system",
            markerKind: "error",
            text: Fe(String(f.error)) || "run failed",
            marker: String(f.error ?? "run failed"),
            timeSeconds: typeof f.duration_ms == "number" ? f.duration_ms / 1e3 : null,
            startedAt: be(y.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [y]
          });
        }
        break;
      }
      case "agent/spawn": {
        const S = typeof f.child_session_id == "string" ? f.child_session_id : void 0, _ = typeof f.child_agent_id == "string" ? f.child_agent_id : "?";
        le(y.run_id, {
          index: ++F,
          runIndex: 0,
          runId: y.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${_} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: be(y.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: _,
          raw: [y]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(f.parts) ? f.parts : [], _ = f.channel_meta && typeof f.channel_meta == "object" ? f.channel_meta : void 0, R = S.map((ne) => ({
          type: String(ne.type ?? "?"),
          text: typeof ne.text == "string" ? ne.text : void 0
        })), C = i.get(y.run_id) ?? "", D = _ && typeof _.user_id == "string" && _.user_id ? _.user_id : void 0, Z = Fe(
          R.map((ne) => ne.text ?? "").filter(Boolean).join(`
`)
        ), te = m.get(y.run_id);
        te && !te.inboundParts ? (te.inboundParts = R, te.channel = C || void 0, te.userId = D, te.raw = [
          ...te.raw ?? [],
          y
        ], te.text || (te.text = Z)) : le(y.run_id, {
          index: ++F,
          runIndex: 0,
          runId: y.run_id,
          kind: "user",
          text: Z || "📥",
          timeSeconds: 0,
          startedAt: be(y.t) ?? 0,
          isError: !1,
          running: !1,
          channel: C || void 0,
          userId: D,
          inboundParts: R,
          raw: [y]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof f.text == "string" ? f.text : "";
        le(y.run_id, {
          index: ++F,
          runIndex: 0,
          runId: y.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: be(y.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: S || void 0,
          receipt: {
            channel: i.get(y.run_id) || void 0,
            chars: S.length
          },
          raw: [y]
        });
        break;
      }
      case "approval/asked": {
        le(y.run_id, {
          index: ++F,
          runIndex: 0,
          runId: y.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(f.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: be(y.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [y]
        });
        break;
      }
      case "approval/decided": {
        const S = String(f.decision ?? "?"), _ = f.tool_name ? String(f.tool_name) : "";
        le(y.run_id, {
          index: ++F,
          runIndex: 0,
          runId: y.run_id,
          kind: "system",
          markerKind: "approval",
          text: _ ? `${_} → ${S}` : S,
          timeSeconds: 0,
          startedAt: be(y.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [y]
        });
        break;
      }
      case "llm/header": {
        const S = typeof f.sha256 == "string" ? f.sha256 : "", _ = typeof f.prev_sha256 == "string" ? f.prev_sha256 : void 0, R = f.reason === "changed" ? "changed" : "initial", C = typeof f.system_prompt == "string" ? f.system_prompt : "", D = Array.isArray(f.tools) ? f.tools : [], Z = Array.isArray(f.schemas) ? f.schemas : void 0;
        if (le(y.run_id, {
          index: ++F,
          runIndex: 0,
          runId: y.run_id,
          kind: "system",
          markerKind: "header",
          text: R === "initial" ? `⚙ ${C ? `System Prompt (${C.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: be(y.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: C,
          prevPrompt: E.get(_ ?? ""),
          headerTools: D,
          headerReason: R,
          sha: S,
          prevSha: _,
          schemas: Z,
          raw: [y]
        }), S && E.set(S, C), Array.isArray(Z)) {
          p.clear();
          for (const te of Z) {
            const ne = Ko(te);
            ne && p.set(ne, te);
          }
        }
        C && (g = Uo(C));
        break;
      }
      case "llm/call": {
        const S = Wt(y), _ = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, R = S.messages_meta, C = R && typeof R == "object" ? {
          count: typeof R.count == "number" ? R.count : 0,
          totalChars: typeof R.total_chars == "number" ? R.total_chars : 0,
          charsByRole: Hn(R.chars_by_role) ? R.chars_by_role : {},
          countByRole: Hn(R.count_by_role) ? R.count_by_role : {},
          maxToolChars: typeof R.max_tool_chars == "number" ? R.max_tool_chars : 0
        } : void 0, D = Fo(S.messages_new);
        let Z;
        if (S.context_reset === !0) {
          const j = (D ?? []).map(
            (ue) => ({
              role: ue.role,
              chars: ue.chars,
              text: ue.text
            })
          );
          let oe;
          A.length > 0 || j.length === 0 ? oe = A : oe = M.map((ue) => ({
            role: ue.role,
            text: ue.text
          })), Z = fl(oe, j), C && (Z.afterChars = C.totalChars);
        }
        if (D) {
          const j = D.map((oe) => ({
            role: oe.role,
            chars: oe.chars,
            text: oe.text
          }));
          S.context_reset === !0 ? A = j : S.tail_update === !0 ? A = [...A.slice(0, -1), ...j] : typeof S.messages_count == "number" && D.length >= S.messages_count && A.length > 0 ? A = j : A = [...A, ...j];
        }
        M = Array.isArray(S.messages) ? S.messages.map((j) => ({
          role: j.role,
          text: j.text
        })) : [];
        const te = {
          index: ++F,
          runIndex: 0,
          runId: y.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: be(y.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: C,
          inputNew: D,
          contextReset: S.context_reset === !0,
          resetDetail: Z,
          options: _
        };
        le(y.run_id, te);
        const ne = s.get(y.run_id) ?? [];
        ne.push({ cell: te, callData: S, call: y }), s.set(y.run_id, ne);
        break;
      }
      case "llm/api_request": {
        const S = s.get(y.run_id), _ = S && S.length > 0 ? S[S.length - 1].cell : l.get(y.run_id);
        if (_) {
          const R = Array.isArray(f.messages) ? f.messages : [];
          _.apiPayload = {
            model: String(f.model ?? "unknown"),
            messages: R.map((C) => ({
              role: String(C.role ?? "?"),
              // Provider formatters may leave the block array as a
              // JSON string — decode it into readable text.
              content: ml(
                typeof C.content == "string" ? C.content : JSON.stringify(C.content ?? "")
              ),
              toolCallId: typeof C.tool_call_id == "string" ? C.tool_call_id : void 0
            })),
            params: f.params && typeof f.params == "object" ? f.params : void 0,
            durationMs: typeof f.duration_ms == "number" ? f.duration_ms : void 0
          }, _.raw = [
            ..._.raw ?? [],
            y
          ];
        }
        break;
      }
      case "llm/api_response": {
        const S = l.get(y.run_id);
        S && S.apiPayload && (f.usage && typeof f.usage == "object" && (S.apiPayload.usage = f.usage), typeof f.duration_ms == "number" && (S.apiPayload.durationMs = f.duration_ms));
        break;
      }
      case "llm/result": {
        const S = s.get(y.run_id), _ = S == null ? void 0 : S.shift(), R = (_ == null ? void 0 : _.callData) ?? {}, C = typeof f.duration_ms == "number" ? f.duration_ms : null, D = f.usage ?? void 0, Z = f.timing, te = Array.isArray(f.tool_calls) ? f.tool_calls : void 0, oe = {
          text: (f.error ? Fe(String(f.error)) : Fe(String(f.text ?? ""))) || (te && te.length > 0 ? `🛠 ${te.map((ue) => ue.name).join(", ")}` : ""),
          timeSeconds: C === null ? null : C / 1e3,
          isError: !!f.error,
          running: !1,
          outputText: f.text ? String(f.text) : void 0,
          thinkingText: f.thinking ? String(f.thinking) : void 0,
          usage: D,
          timing: Z,
          toolCalls: te,
          note: f.note ? String(f.note) : void 0
        };
        _ ? (Object.assign(_.cell, oe), l.set(y.run_id, _.cell), _.cell.model = String(
          f.model ?? R.model ?? _.cell.model
        ), _.cell.raw = [
          ..._.call ? [_.call] : [],
          y
        ]) : le(y.run_id, {
          index: ++F,
          runIndex: 0,
          runId: y.run_id,
          kind: "message",
          startedAt: be(y.t) ?? 0,
          model: String(f.model ?? R.model ?? "unknown"),
          ...oe
        });
        break;
      }
      case "tool/call": {
        const S = Wt(y), _ = String(S.name ?? "?"), R = _ === "Skill" ? Ho(S.input) : void 0;
        if (R) {
          h.add(R), b.push([R, "load"]);
          const fe = z.onSkillLoad(
            R,
            y.seq,
            be(y.t) ?? 0
          ), Ee = n.get(y.run_id);
          Ee && T.set(fe, Ee);
        }
        const C = S.input ? String(S.input) : void 0;
        let D;
        if (!R && C) {
          const fe = typeof S.skill_resource == "string" ? S.skill_resource : void 0;
          fe && (D = fe);
        }
        if (!R && !D && C && g.length > 0) {
          const fe = ks(C);
          for (const [Ee, Ne] of g)
            if (fe.includes(Ee)) {
              D = Ne;
              break;
            }
        }
        let Z, te;
        if (!R && !D && C && v.size > 0) {
          const fe = dl(C, v);
          fe && (Z = fe.skill, te = fe.feature);
        }
        let ne, j;
        if (!R && !D && !Z && b.length > 0) {
          const [fe, Ee] = b[b.length - 1];
          ne = fe, j = Ee;
        }
        const oe = z.onToolCall({
          attribution: D ? { skill: D, kind: "path", detail: "skill dir in input" } : Z ? {
            skill: Z,
            kind: "content",
            detail: `“${te}” in input (skill doc)`
          } : ne ? {
            skill: ne,
            kind: "temporal",
            detail: j === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: F + 1,
          seq: y.seq,
          t: be(y.t) ?? 0
        });
        if (oe && !T.has(oe)) {
          const fe = n.get(y.run_id);
          fe && T.set(oe, fe);
        }
        const ue = {
          index: ++F,
          runIndex: 0,
          runId: y.run_id,
          kind: "tool",
          text: R ? `📚 ${R}` : `${_}(${Fe(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: be(y.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: _,
          skillName: R,
          inSkill: D,
          inSkillLoaded: D ? h.has(D) : void 0,
          guidedSkill: ne ?? Z,
          guidedReason: j ?? (Z ? "load" : void 0),
          skillSpanId: oe ?? void 0,
          toolInput: S.input ? String(S.input) : void 0,
          toolSchema: p.get(_)
        };
        le(y.run_id, ue);
        const Ge = o.get(y.run_id) ?? [];
        Ge.push({ cell: ue, callData: S, call: y }), o.set(y.run_id, Ge);
        break;
      }
      case "tool/result": {
        const S = o.get(y.run_id), _ = typeof f.tool_call_id == "string" ? f.tool_call_id : null;
        let R;
        if (S) {
          const j = _ ? S.findIndex(
            (oe) => oe.callData.tool_call_id === _
          ) : -1;
          j >= 0 ? R = S.splice(j, 1)[0] : R = S.shift();
        }
        const C = typeof f.duration_ms == "number" ? f.duration_ms : null, D = f.ok !== !1 && !f.error, Z = f.output ? String(f.output) : void 0, te = Z ? ` → ${Fe(Z, 60)}` : "", ne = {
          timeSeconds: C === null ? null : C / 1e3,
          isError: !D,
          running: !1,
          toolOutput: Z,
          toolOutputChars: typeof f.output_chars == "number" ? f.output_chars : void 0,
          toolOutputBytes: typeof f.output_bytes == "number" ? f.output_bytes : void 0,
          toolError: f.error ? String(f.error) : void 0,
          note: f.note ? String(f.note) : void 0
        };
        if (R) {
          if (Object.assign(R.cell, ne), !R.cell.skillName)
            R.cell.text = `${R.cell.text}${te}`;
          else if (Z) {
            const j = typeof f.skill_sha == "string" ? f.skill_sha : null;
            j && O.get(R.cell.skillName) === j || (v.set(
              R.cell.skillName,
              ul(Z)
            ), j && O.set(R.cell.skillName, j));
          }
          R.cell.raw = [
            ...R.call ? [R.call] : [],
            y
          ];
        } else
          le(y.run_id, {
            index: ++F,
            runIndex: 0,
            runId: y.run_id,
            kind: "tool",
            text: `?${te}`,
            startedAt: be(y.t) ?? 0,
            ...ne
          });
        break;
      }
    }
  }
  for (const [y, f] of r) {
    const S = n.get(y);
    if (S) {
      for (const _ of f) se(S).push(_);
      r.delete(y);
    }
  }
  for (const y of t) {
    const f = [];
    for (const S of y.groups)
      for (const _ of S.cells)
        _.skillName && !f.includes(_.skillName) && f.push(_.skillName);
    f.length > 0 && (y.skillsUsed = f);
  }
  const P = z.spans(), w = new Set(P.map((y) => y.skill)).size, U = /* @__PURE__ */ new Map();
  for (const y of t)
    for (const f of y.groups)
      for (const S of f.cells) U.set(S.index, S);
  for (const y of P) {
    const f = T.get(y.id);
    f && (f.skillSpans ?? (f.skillSpans = [])).push(y);
    for (const S of y.attributedIndexes) {
      const _ = U.get(S);
      _ && (_.skillSpanId = y.id, _.skillSpanHue = w > 1 ? y.colorHue : void 0, _.skillSpanBypass = y.bypass);
    }
  }
  return t;
}
function Un(e) {
  return e.flatMap((t) => t.groups.flatMap((n) => n.cells));
}
function Vo(e) {
  var r;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const t = e[0], n = ((r = t.groups[0]) == null ? void 0 : r.cells) ?? [], s = n.findIndex(
    (u) => u.kind === "system" && u.headerReason === "initial" && u.prompt !== void 0
  );
  if (s < 0) return { initial: null, turns: [...e] };
  const l = n[s], o = {
    ...t,
    groups: [
      {
        ...t.groups[0],
        cells: n.filter((u, d) => d !== s)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const ke = {
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
}, Wn = "agent-trace-timeline-styles", qo = `
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
let Vt = !1;
function Go() {
  if (Vt || typeof document > "u") return;
  if (document.getElementById(Wn)) {
    Vt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Wn, e.textContent = qo, document.head.appendChild(e), Vt = !0;
}
function qt(e) {
  return gl(e);
}
function ws(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Vn(e) {
  return e != null && Number.isFinite(e);
}
function Ts(e) {
  if (!Vn(e.startedAt)) return null;
  const t = Vn(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + t };
}
function _s(e, t = "sequence") {
  if (t !== "sequence")
    return Xo(
      e,
      t === "duration" || t === "actual",
      t === "duration"
    );
  const n = [], s = [];
  for (const l of e) {
    const o = l.groups.flatMap((r) => r.cells);
    o.length !== 0 && (l.turn !== null && s.push({
      turn: l.turn,
      time: n.length
    }), n.push(
      ...o.map(
        (r, u) => ({
          start: n.length + u,
          end: n.length + u + 1,
          index: r.index,
          isError: r.isError === !0,
          kind: r.kind,
          label: r.text,
          lane: ws(r.kind)
        })
      )
    ));
  }
  return n.length === 0 ? null : {
    start: 0,
    end: n.length,
    spans: n,
    turnBoundaries: s
  };
}
function Xo(e, t, n) {
  const s = e.flatMap((m) => {
    const E = m.groups.flatMap(
      (p) => p.cells.flatMap((g) => {
        const h = Ts(g);
        return h === null ? [] : [
          {
            ...h,
            index: g.index,
            isError: g.isError === !0,
            kind: g.kind,
            label: g.text,
            lane: ws(g.kind)
          }
        ];
      })
    );
    return E.length === 0 ? [] : [{ turn: m.turn, rawSpans: E }];
  }), l = s.flatMap((m) => m.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let r = 0, u = null;
  for (const m of [...l].sort(
    (E, p) => E.start - p.start || E.end - p.end
  ))
    n && u !== null && m.start > u && (r += m.start - u), o.set(m, r), u = u === null ? m.end : Math.max(u, m.end);
  const d = [], i = [];
  for (const m of s) {
    const E = m.rawSpans.map((p) => {
      const g = o.get(p) ?? 0;
      return {
        ...p,
        start: p.start - g,
        end: (t ? p.end : p.start) - g
      };
    });
    d.push(...E), m.turn !== null && i.push({
      turn: m.turn,
      time: Math.min(...E.map((p) => p.start))
    });
  }
  return {
    start: Math.min(...d.map((m) => m.start)),
    end: Math.max(...d.map((m) => m.end)),
    spans: d,
    turnBoundaries: i
  };
}
function Jo(e, t = "sequence") {
  const n = (u) => u.skillSpans ?? [];
  if (e.every((u) => n(u).length === 0)) return null;
  if (t === "sequence") {
    const u = /* @__PURE__ */ new Map();
    let d = 0;
    for (const m of e)
      for (const E of m.groups.flatMap((p) => p.cells))
        u.set(E.index, d), d += 1;
    const i = [];
    for (const m of e)
      for (const E of n(m)) {
        const p = E.attributedIndexes.map((b) => u.get(b)).filter((b) => b !== void 0);
        let g = p.length ? Math.min(...p) : void 0;
        if (g === void 0) {
          const b = m.groups.flatMap((z) => z.cells).find(
            (z) => z.kind !== "system" && z.skillName === E.skill
          );
          g = b ? u.get(b.index) : void 0;
        }
        if (g === void 0) continue;
        const h = p.length ? Math.max(...p) : g;
        i.push(qn(E, g, h + 1));
      }
    return i;
  }
  const s = e.flatMap(
    (u) => u.groups.flatMap(
      (d) => d.cells.flatMap((i) => {
        const m = Ts(i);
        return m === null ? [] : [m];
      })
    )
  );
  s.sort((u, d) => u.start - d.start || u.end - d.end);
  const l = t === "duration", o = (u) => {
    let d = 0, i = null;
    for (const m of s) {
      if (m.start >= u) break;
      if (l && i !== null && m.start > i) {
        const E = Math.min(m.start, u);
        E > i && (d += E - i);
      }
      i = i === null ? m.end : Math.max(i, m.end);
    }
    return d;
  }, r = [];
  for (const u of e)
    for (const d of n(u)) {
      const i = d.startT, m = Math.max(il(d), i + 1), E = o(i), p = o(m);
      r.push(
        qn(
          d,
          i - E,
          Math.max(i - E + 1, m - p)
        )
      );
    }
  return r;
}
function qn(e, t, n) {
  return {
    spanId: e.id,
    skill: e.skill,
    hue: e.colorHue,
    bypass: e.bypass,
    trigger: e.trigger,
    open: e.endKind === null,
    start: t,
    end: n
  };
}
function Qo(e, t, n = "sequence") {
  const s = _s(e, n);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= t.end && l.end >= t.start).map((l) => l.index)
  );
}
Go();
const It = window.QwenPaw.host, J = It.React, { useEffect: gt, useMemo: Gt, useRef: yt, useState: Ue } = J, { Tooltip: Is } = It.antd, Xt = 3, Yo = 4, Zo = 0.08, er = 0.025, tr = 32, nr = 0.5;
function sr(e) {
  const t = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), n = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, o = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...t === void 0 ? {} : { durationMs: t },
    ...n === void 0 ? {} : { startedAt: n },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function lr(e) {
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
function or(e, t, n) {
  const s = lr(e);
  if (t === void 0) return s;
  const l = t.durationMs === void 0 ? null : `${c(n, "duration")} ${qt(t.durationMs)}`, o = t.startedAt === void 0 ? null : t.durationMs === void 0 ? `${c(n, "startedAt")} ${Le(t.startedAt)}` : `${Le(t.startedAt)} → ${Le(
    t.startedAt + t.durationMs
  )}`, r = t.ttftMs === void 0 || t.decodingMs === void 0 ? null : `${c(n, "ttftLabel")} ${qt(t.ttftMs)} · ${c(
    n,
    "decodeLabel"
  )} ${qt(t.decodingMs)}`, u = [l, r].filter((d) => d !== null).join(" · ");
  return [s, o, u].filter((d) => d !== null && d !== "").join(`
`);
}
function an(e, t) {
  return e <= t ? { start: e, end: t } : { start: t, end: e };
}
function Jt(e) {
  return Math.min(1, Math.max(0, e));
}
function rr(e, t, n, s) {
  const l = Math.min(s - n, Math.max(0, t)), o = Math.min(
    Math.max(e - l / 2, n),
    s - l
  );
  return { start: o, end: o + l };
}
function Gn(e, t, n, s, l) {
  const o = an(
    Math.min(l, Math.max(s, e.start)),
    Math.min(l, Math.max(s, e.end))
  );
  return {
    start: (o.start - t) / n,
    end: (o.end - t) / n
  };
}
function Ms({
  label: e,
  placement: t,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ J.createElement(
    Is,
    {
      title: /* @__PURE__ */ J.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: t,
      mouseEnterDelay: nr,
      ...s
    },
    n
  );
}
function Xn() {
  return /* @__PURE__ */ J.createElement("div", { className: ke.labels, "aria-hidden": "true" }, /* @__PURE__ */ J.createElement("span", null, "Input"), /* @__PURE__ */ J.createElement("span", null, "Model"), /* @__PURE__ */ J.createElement("span", null, "Tools"));
}
function Jn({
  loading: e,
  onHover: t,
  onLoad: n,
  locale: s
}) {
  const l = c(
    s,
    e ? "loadingEarlierHistory" : "loadEarlierHistory"
  );
  return /* @__PURE__ */ J.createElement(Ms, { label: l, placement: "right" }, /* @__PURE__ */ J.createElement(
    "button",
    {
      type: "button",
      className: ke.earlierHistory,
      "data-earlier-history": !0,
      "data-loading": e || void 0,
      "aria-label": l,
      "aria-disabled": e || n === void 0,
      onClick: n,
      onPointerEnter: (o) => {
        o.stopPropagation(), t();
      },
      onPointerMove: (o) => {
        o.stopPropagation();
      },
      onPointerDown: (o) => {
        o.stopPropagation();
      }
    },
    "…"
  ));
}
const ir = J.memo(function({
  spans: t,
  modelStart: n,
  fullDuration: s,
  domainStart: l,
  domainDuration: o,
  mode: r,
  selectedIndex: u,
  hoveredIndex: d,
  searchMatchIndexes: i,
  activeRange: m,
  detailByIndex: E,
  locale: p
}) {
  return /* @__PURE__ */ J.createElement(J.Fragment, null, t.filter(
    (g) => g.index === u || g.end >= l && g.start <= l + o
  ).map((g) => {
    const h = (g.start - n) / s, z = (g.end - g.start) / s * 100, T = E.get(g.index), v = T == null ? void 0 : T.ttftMs, O = T == null ? void 0 : T.decodingMs, A = v === void 0 || O === void 0 || v + O <= 0 ? null : v / (v + O);
    return /* @__PURE__ */ J.createElement(
      Ms,
      {
        key: g.index,
        label: or(g.kind, T, p),
        placement: "bottom"
      },
      /* @__PURE__ */ J.createElement(
        "span",
        {
          "aria-hidden": "true",
          className: ke.span,
          "data-timeline-span": g.kind,
          "data-timeline-record-index": g.index,
          "data-assistant-timing": A === null ? void 0 : "true",
          "data-error": g.isError || void 0,
          "data-equal-duration": r === "time" || void 0,
          "data-current": g.index === u || void 0,
          "data-hovered": d === g.index || void 0,
          "data-search-match": i === null ? void 0 : i.has(g.index) ? "true" : "false",
          "data-selected": m === null ? void 0 : g.start <= m.end && g.end >= m.start ? "true" : "false",
          style: {
            "--trajectory-span-left": `${h * 100}%`,
            "--trajectory-span-width": `${z}%`,
            "--trajectory-span-gap": `min(${z * 0.08}%, 1px)`,
            "--trajectory-span-lane": g.lane,
            ...A === null ? {} : {
              "--trajectory-assistant-ttft": `${A * 100}%`
            }
          }
        }
      )
    );
  }));
}), ar = J.memo(function({
  turns: t,
  mode: n,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: r = null,
  searchMatchIndexes: u = null,
  onRangeChange: d,
  onRecordSelect: i,
  onRecordFocus: m,
  onSkillSpanSelect: E,
  locale: p
}) {
  const g = typeof It.useTheme == "function" ? It.useTheme() : void 0, h = Gt(
    () => _s(t, n),
    [n, t]
  ), b = Gt(
    () => Jo(t, n),
    [n, t]
  ), z = Gt(
    () => new Map(
      t.flatMap(
        (x) => x.groups.flatMap(
          (V) => V.cells.map(
            (ee) => [ee.index, sr(ee)]
          )
        )
      )
    ),
    [t]
  ), T = yt(null), v = yt(null), O = yt(null), A = yt(null), [M, F] = Ue(null), [G, se] = Ue(null), [pe, le] = Ue(null), [ce, P] = Ue(!1), [w, U] = Ue(!1), [N, X] = Ue(null), [y, f] = Ue(!1);
  gt(() => {
    h !== null && s !== null && (s.end < h.start || s.start > h.end) && d(null);
  }, [h, d, s]), gt(() => {
    h !== null && (f(!1), X(
      (x) => x !== null && (x.end < h.start || x.start > h.end) ? null : x
    ));
  }, [h]), gt(() => {
    if (h === null || r === null) return;
    const x = h.spans.find(
      (V) => V.index === r
    );
    x !== void 0 && (f(!0), X((V) => {
      if (V === null || x.end > V.start && x.start < V.end)
        return V;
      const ee = Math.max(1, V.end - V.start), de = x.end <= V.start ? x.start : x.end - ee, re = Math.min(
        Math.max(de, h.start),
        Math.max(h.start, h.end - ee)
      );
      return re === V.start ? V : { start: re, end: re + ee };
    }));
  }, [h, r]);
  const S = Math.max(1, ((h == null ? void 0 : h.end) ?? 0) - ((h == null ? void 0 : h.start) ?? 0)), _ = Math.min(
    S,
    Math.max(1, ((N == null ? void 0 : N.end) ?? 0) - ((N == null ? void 0 : N.start) ?? 0))
  ), R = h === null || N === null ? (h == null ? void 0 : h.start) ?? 0 : Math.min(
    Math.max(N.start, h.start),
    h.end - _
  ), C = N === null ? S : _, D = N === null ? (h == null ? void 0 : h.start) ?? 0 : R, Z = l && h !== null && D === h.start, te = o === void 0 || ce ? void 0 : () => {
    P(!0), o().finally(() => {
      P(!1);
    });
  }, ne = h === null ? void 0 : {
    "--trajectory-domain-left": `${-(D - h.start) / C * 100}%`,
    "--trajectory-domain-width": `${S / C * 100}%`
  }, j = h === null || s === null ? null : Gn(
    s,
    D,
    C,
    h.start,
    h.end
  ), ue = (h === null || M === null ? null : Gn(
    M,
    D,
    C,
    h.start,
    h.end
  )) ?? j, Ge = M ?? s;
  if (gt(() => {
    const x = O.current;
    if (x === null) return;
    const V = (ee) => {
      ee.preventDefault();
      const de = A.current;
      if (de === null || h === null) return;
      f(!1);
      const re = de.getBoundingClientRect(), me = Jt(
        (ee.clientX - re.left) / Math.max(1, re.width)
      ), ie = Math.min(
        S,
        Math.max(
          Math.min(
            n === "sequence" ? Yo : 20,
            S
          ),
          C * Math.exp(ee.deltaY * 15e-4)
        )
      );
      if (ie >= S * 0.999) {
        X(null);
        return;
      }
      const Pe = D + me * C, ge = Math.min(
        Math.max(Pe - me * ie, h.start),
        h.end - ie
      );
      X({ start: ge, end: ge + ie });
    };
    return x.addEventListener("wheel", V, { passive: !1 }), () => {
      x.removeEventListener("wheel", V);
    };
  }, [C, D, S, n, h]), h === null)
    return /* @__PURE__ */ J.createElement(
      "section",
      {
        ref: O,
        className: ke.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ J.createElement("div", { className: ke.plot }, /* @__PURE__ */ J.createElement(Xn, null), /* @__PURE__ */ J.createElement("div", { className: ke.track }, /* @__PURE__ */ J.createElement("span", { className: ke.empty }, c(p, "noTimingData")), l && /* @__PURE__ */ J.createElement(
        Jn,
        {
          loading: ce,
          onHover: () => {
            se(null);
          },
          onLoad: te,
          locale: p
        }
      )))
    );
  const fe = Math.min(
    C,
    S / h.spans.length
  ), Ee = (x) => {
    const V = x.currentTarget.getBoundingClientRect();
    return Jt((x.clientX - V.left) / Math.max(1, V.width));
  }, Ne = (x) => {
    var re;
    const V = x.target instanceof HTMLElement ? x.target : null, ee = (re = V == null ? void 0 : V.closest("[data-timeline-record-index]")) == null ? void 0 : re.dataset.timelineRecordIndex;
    if (ee === void 0) return null;
    const de = Number(ee);
    return Number.isFinite(de) ? de : null;
  }, nt = (x) => {
    d(x);
  }, De = (x) => {
    if (x.button === 2) {
      v.current = {
        anchorClientX: x.clientX,
        anchorStart: D,
        moved: !1,
        pannable: N !== null,
        pointerId: x.pointerId
      }, N !== null && f(!1), U(!0), typeof x.currentTarget.setPointerCapture == "function" && x.currentTarget.setPointerCapture(x.pointerId);
      return;
    }
    if (x.button !== 0) return;
    const V = Ee(x), ee = D + V * C, de = Ne(x);
    se({ fraction: V, recordIndex: de }), T.current = {
      pointerId: x.pointerId,
      anchorTime: ee,
      anchorClientX: x.clientX,
      recordIndex: de
    }, typeof x.currentTarget.setPointerCapture == "function" && x.currentTarget.setPointerCapture(x.pointerId), F({ start: ee, end: ee });
  }, zt = (x) => {
    const V = x.currentTarget.getBoundingClientRect(), ee = Ee(x), de = Ne(x);
    se(
      (ge) => de !== null && (ge == null ? void 0 : ge.recordIndex) === de ? ge : { fraction: ee, recordIndex: de }
    );
    const re = v.current;
    if (re !== null && re.pointerId === x.pointerId) {
      if (Math.abs(x.clientX - re.anchorClientX) >= Xt && (re.moved = !0), !re.pannable) return;
      const ge = (x.clientX - re.anchorClientX) / Math.max(1, V.width), ae = Math.min(
        Math.max(re.anchorStart - ge * C, h.start),
        h.end - C
      );
      X({ start: ae, end: ae + C });
      return;
    }
    const me = T.current;
    if (me === null || me.pointerId !== x.pointerId) return;
    let ie = D;
    if (N !== null) {
      const ge = x.clientX - V.left, ae = Math.min(
        tr,
        Math.max(1, V.width * Zo)
      ), je = ge < ae ? -1 : ge > V.width - ae ? 1 : 0;
      if (je !== 0) {
        const Ae = je < 0 ? ae - ge : ge - (V.width - ae), ze = Jt(Ae / ae), Je = D + je * C * er * Math.max(0.2, ze);
        ie = Math.min(
          Math.max(Je, h.start),
          h.end - C
        ), ie !== D && (f(!1), X({
          start: ie,
          end: ie + C
        }));
      }
    }
    const Pe = ie + ee * C;
    F(an(me.anchorTime, Pe));
  }, ht = (x) => {
    const V = v.current;
    if (V !== null && V.pointerId === x.pointerId) {
      const ae = V.moved || Math.abs(x.clientX - V.anchorClientX) >= Xt;
      v.current = null, U(!1), ae || d(null);
      return;
    }
    const ee = T.current;
    if (ee === null || ee.pointerId !== x.pointerId) return;
    const de = Ee(x), re = D + de * C, me = an(ee.anchorTime, re);
    se({ fraction: de, recordIndex: Ne(x) }), T.current = null, F(null);
    const ie = Math.abs(x.clientX - ee.anchorClientX) < Xt, Pe = ie && ee.recordIndex !== null ? h.spans.find((ae) => ae.index === ee.recordIndex) : void 0;
    if (Pe !== void 0) {
      d(null), i == null || i(Pe.index);
      return;
    }
    const ge = me.end - me.start < fe ? rr(
      ie ? me.start : (me.start + me.end) / 2,
      fe,
      h.start,
      h.end
    ) : me;
    if (nt(ge), ie) {
      const ae = me.start, je = h.spans.reduce((Ae, ze) => {
        const Je = ae < Ae.start ? Ae.start - ae : ae > Ae.end ? ae - Ae.end : 0;
        return (ae < ze.start ? ze.start - ae : ae > ze.end ? ae - ze.end : 0) < Je ? ze : Ae;
      });
      m == null || m(je.index);
    }
  }, st = (x) => {
    x.key !== "Escape" || s === null || (x.preventDefault(), d(null));
  }, Xe = () => {
    T.current = null, v.current = null, F(null), se(null), U(!1);
  };
  return /* @__PURE__ */ J.createElement(
    "section",
    {
      ref: O,
      className: ke.root,
      "data-theme": g || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ J.createElement("div", { className: ke.plot }, /* @__PURE__ */ J.createElement(Xn, null), /* @__PURE__ */ J.createElement(
      "div",
      {
        ref: A,
        className: ke.track,
        "data-panning": w || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: st,
        onPointerDown: De,
        onPointerMove: zt,
        onPointerUp: ht,
        onPointerCancel: Xe,
        onPointerLeave: () => {
          T.current === null && v.current === null && se(null);
        },
        onDoubleClick: (x) => {
          x.preventDefault(), d(null);
        },
        onContextMenu: (x) => {
          x.preventDefault();
        }
      },
      Z && /* @__PURE__ */ J.createElement(
        Jn,
        {
          loading: ce,
          onHover: () => {
            se(null);
          },
          onLoad: te,
          locale: p
        }
      ),
      G !== null && G.recordIndex === null && M === null && /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ke.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${G.fraction * 100}%`
          }
        }
      ),
      ue !== null && /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ke.selection,
          "data-dragging": M === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ue.start * 100}%`,
            "--trajectory-selection-width": `${(ue.end - ue.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ke.selectionEdges,
          "data-dragging": M === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ue.start * 100}%`,
            "--trajectory-selection-width": `${(ue.end - ue.start) * 100}%`
          }
        }
      )),
      b !== null && h !== null && /* @__PURE__ */ J.createElement(
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
        b.map((x) => {
          const V = (x.start - h.start) / S, ee = Math.max(
            (x.end - x.start) / S,
            4e-3
          ), de = `${x.bypass ? "⚠ " : ""}${x.skill} · ${x.trigger}${x.open ? ` · ${c(p, "spanOpen")}` : ""}`, re = pe === x.spanId, me = ee > 0.14 && !x.bypass;
          return /* @__PURE__ */ J.createElement(Is, { title: de, key: x.spanId }, /* @__PURE__ */ J.createElement(
            "span",
            {
              onPointerDown: (ie) => {
                ie.stopPropagation();
              },
              onClick: E ? (ie) => {
                ie.stopPropagation(), E(x.spanId);
              } : void 0,
              onMouseEnter: () => le(x.spanId),
              onMouseLeave: () => le(
                (ie) => ie === x.spanId ? null : ie
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, V) * 100}%`,
                width: `${ee * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${x.hue}, 65%, ${re ? 62 : 55}%, ${re ? 0.85 : 0.55})`,
                border: x.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${x.hue}, 55%, 45%, 0.8)`,
                pointerEvents: E ? "auto" : "none",
                cursor: E ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            me ? /* @__PURE__ */ J.createElement(
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
              x.skill
            ) : null
          ));
        })
      ),
      /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ke.turnBoundaries,
          "data-animate-viewport": y || void 0,
          "aria-hidden": "true",
          style: ne
        },
        h.turnBoundaries.filter(
          (x) => x.time > h.start && x.time >= D && x.time <= D + C
        ).map((x) => /* @__PURE__ */ J.createElement(
          "span",
          {
            className: ke.turnBoundary,
            "data-turn": x.turn,
            key: x.turn,
            style: {
              "--trajectory-turn-left": `${(x.time - h.start) / S * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ J.createElement(
        "div",
        {
          className: ke.lanes,
          "data-animate-viewport": y || void 0,
          "data-timeline-domain": !0,
          style: ne
        },
        /* @__PURE__ */ J.createElement(
          ir,
          {
            spans: h.spans,
            modelStart: h.start,
            fullDuration: S,
            domainStart: D,
            domainDuration: C,
            mode: n,
            selectedIndex: r,
            hoveredIndex: (G == null ? void 0 : G.recordIndex) ?? null,
            searchMatchIndexes: u,
            activeRange: Ge,
            detailByIndex: z,
            locale: p
          }
        )
      )
    ))
  );
}), hn = window.QwenPaw.host, Q = hn.React, { Button: Qt, Input: cr, Popover: ur, Segmented: dr, Tooltip: Et } = hn.antd, {
  DownOutlined: hr,
  MenuFoldOutlined: pr,
  MenuUnfoldOutlined: fr,
  QuestionCircleOutlined: mr,
  ReloadOutlined: gr,
  SearchOutlined: yr,
  UpOutlined: Er
} = hn.antdIcons;
function Sr({
  mode: e,
  onModeChange: t,
  search: n,
  onSearchChange: s,
  matchCount: l,
  matchPosition: o,
  onNextMatch: r,
  onPrevMatch: u,
  onRefresh: d,
  modeOptions: i,
  allCollapsed: m,
  hasRequests: E,
  onToggleCollapseAll: p,
  callsCollapsed: g,
  onToggleCallsCollapsed: h
}) {
  const b = Me();
  return /* @__PURE__ */ Q.createElement(
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
    /* @__PURE__ */ Q.createElement(Et, { title: c(b, "projectionHint") }, /* @__PURE__ */ Q.createElement(
      dr,
      {
        size: "small",
        value: e,
        options: i,
        onChange: (z) => t(z)
      }
    )),
    /* @__PURE__ */ Q.createElement(
      cr,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ Q.createElement(yr, null),
        placeholder: c(b, "searchEvents"),
        value: n,
        style: { width: 220 },
        onChange: (z) => s(z.target.value),
        onKeyDown: (z) => {
          z.key !== "Enter" || !n.trim() || (z.preventDefault(), z.shiftKey ? u() : r());
        }
      }
    ),
    l !== null && /* @__PURE__ */ Q.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 2,
          fontSize: 12,
          color: l === 0 ? "rgba(255,77,79,1)" : "rgba(128,128,128,1)",
          whiteSpace: "nowrap"
        }
      },
      l === 0 ? c(b, "searchNoMatch") : o >= 0 ? `${o + 1} / ${l}` : tn(b, "searchMatches", { n: l }),
      l > 0 && /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(Et, { title: c(b, "prevMatch") }, /* @__PURE__ */ Q.createElement(
        Qt,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ Q.createElement(Er, null),
          onClick: u
        }
      )), /* @__PURE__ */ Q.createElement(Et, { title: c(b, "nextMatch") }, /* @__PURE__ */ Q.createElement(
        Qt,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ Q.createElement(hr, null),
          onClick: r
        }
      )))
    ),
    E && /* @__PURE__ */ Q.createElement(
      Et,
      {
        title: m ? c(b, "expandAll") : c(b, "collapseAll")
      },
      /* @__PURE__ */ Q.createElement(
        Qt,
        {
          size: "small",
          type: "text",
          icon: m ? /* @__PURE__ */ Q.createElement(fr, null) : /* @__PURE__ */ Q.createElement(pr, null),
          onClick: p
        }
      )
    ),
    /* @__PURE__ */ Q.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ Q.createElement(
      ur,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ Q.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement("strong", null, "📚"), " ", c(b, "legendLoad")), /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement("strong", null, "⚡"), " ", c(b, "legendResource")), /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement("strong", null, "∈"), " ", c(b, "legendGuided")), /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement("strong", null, c(b, "legendStripTitle")), " ", c(b, "legendStrip")), /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement("strong", null, c(b, "legendBandTitle")), " ", c(b, "legendBand")), /* @__PURE__ */ Q.createElement("div", null, /* @__PURE__ */ Q.createElement("strong", null, c(b, "legendKeysTitle")), " ", c(b, "legendKeys")))
      },
      /* @__PURE__ */ Q.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ Q.createElement(mr, null), " ", c(b, "legendTitle"))
    ), /* @__PURE__ */ Q.createElement(
      "a",
      {
        onClick: d,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ Q.createElement(gr, null),
      " ",
      c(b, "refresh")
    ))
  );
}
function vr(e) {
  var t, n, s;
  return [
    e.text,
    e.outputText,
    e.thinkingText,
    e.toolName,
    e.toolInput,
    e.toolOutput,
    e.toolError,
    e.model,
    e.provider,
    e.marker,
    e.skillName,
    e.inSkill,
    e.guidedSkill,
    e.channel,
    (t = e.messages) == null ? void 0 : t.map((l) => `${l.role} ${l.text}`).join(`
`),
    (n = e.inputNew) == null ? void 0 : n.map((l) => `${l.role} ${l.text ?? ""}`).join(`
`),
    e.apiPayload ? [
      e.apiPayload.model,
      ...e.apiPayload.messages.map(
        (l) => `${l.role} ${l.content}`
      )
    ].join(`
`) : "",
    e.options ? JSON.stringify(e.options) : "",
    e.toolSchema ? JSON.stringify(e.toolSchema) : "",
    (s = e.headerTools) == null ? void 0 : s.join(" "),
    e.prompt ?? ""
  ].filter(Boolean).join(`
`).toLowerCase();
}
const At = window.QwenPaw.host, H = At.React, { useCallback: $e, useEffect: We, useMemo: Ie, useRef: He, useState: xe } = H, {
  Button: St,
  Empty: Qn,
  Popconfirm: br,
  Popover: xr,
  Space: kr,
  Spin: Cs,
  Switch: wr,
  Tag: Tr,
  Tooltip: _r,
  message: at
} = At.antd, { DeleteOutlined: Ir, DownloadOutlined: Mr, SettingOutlined: Yn } = At.antdIcons, { Text: Ke } = At.antd.Typography;
function Zn({
  config: e,
  onChange: t,
  children: n
}) {
  const s = Me(), l = (r, u, d) => /* @__PURE__ */ H.createElement(
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
    /* @__PURE__ */ H.createElement(Ke, { style: { fontSize: 13 } }, r),
    /* @__PURE__ */ H.createElement(
      wr,
      {
        size: "small",
        checked: !!u,
        onChange: (i) => t({ [d]: i })
      }
    )
  ), o = /* @__PURE__ */ H.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ H.createElement(Ke, { strong: !0, style: { fontSize: 13 } }, c(s, "settings")), /* @__PURE__ */ H.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(c(s, "enabled"), e.enabled, "enabled"),
    l(c(s, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      c(s, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      c(s, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ H.createElement(Cs, { size: "small" })));
  return /* @__PURE__ */ H.createElement(xr, { content: o, trigger: "click", placement: "bottomRight" }, n);
}
function Cr({
  sessionId: e,
  summary: t,
  locale: n,
  onJumpSession: s,
  onRefreshSessions: l,
  onDeleted: o
}) {
  var fn;
  const [r, u] = xe(null), [d, i] = xe(!1), [m, E] = xe(!1), [p, g] = xe(""), [h, b] = xe(""), [z, T] = xe("sequence"), [v, O] = xe(null), [A, M] = xe(null), [F, G] = xe(null), [se, pe] = xe(null), [le, ce] = xe(
    /* @__PURE__ */ new Set()
  ), [P, w] = xe(!1), [U, N] = xe(null), [X, y] = xe(null), [f, S] = xe(null), [_, R] = xe(null), C = He(null);
  C.current = e, We(() => {
    Vs().then(N).catch(() => N(null));
  }, []);
  const D = $e(async (k, L) => {
    L || i(!0);
    try {
      const { sessionId: K, instance: he } = jt(k), Te = await Ws(K, {
        beforeSeq: L,
        limit: 200,
        instance: he
      });
      if (C.current !== k) return;
      R(null), u((Se) => Ks(Se, Te));
    } catch (K) {
      if (C.current !== k) return;
      R({
        message: String(K.message),
        status: K instanceof us ? K.status : null
      });
    } finally {
      C.current === k && !L && i(!1);
    }
  }, []), Z = $e(async (k) => {
    try {
      const { sessionId: L, instance: K } = jt(k), he = await Us(L, K);
      if (C.current !== k) return;
      S(he), y({
        sessionId: k,
        inputTokens: he.input_tokens,
        outputTokens: he.output_tokens,
        totalTokens: he.total_tokens,
        reasoningTokens: Number(he.reasoning_tokens ?? 0)
      });
    } catch {
      if (C.current !== k) return;
      S(null), y(null);
    }
  }, []);
  We(() => {
    e ? (O(null), M(null), G(null), ce(/* @__PURE__ */ new Set()), g(""), b(""), u(null), R(null), D(e), Z(e)) : (u(null), S(null), y(null));
  }, [e, D, Z]), We(() => {
    const k = window.setTimeout(() => b(p), 180);
    return () => window.clearTimeout(k);
  }, [p]);
  const te = Ie(
    () => r ? Wo(r.events) : [],
    [r]
  ), { initial: ne, turns: j } = Ie(
    () => Vo(te),
    [te]
  ), oe = Ie(
    () => ne ? [ne, ...Un(j)] : Un(j),
    [ne, j]
  ), ue = Ie(
    () => j.some((k) => k.status === "running"),
    [j]
  );
  We(() => {
    if (!e || !ue) return;
    const k = setInterval(() => {
      document.visibilityState === "visible" && C.current && D(C.current);
    }, 5e3);
    return () => clearInterval(k);
  }, [e, ue, D]);
  const Ge = Ie(
    () => v === null ? null : Qo(j, v, z),
    [v, j, z]
  ), fe = Ie(
    () => oe.map((k) => ({
      index: k.index,
      haystack: vr(k)
    })),
    [oe]
  ), Ee = Ie(() => {
    const k = h.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return k.length === 0 ? null : new Set(
      fe.filter((L) => k.every((K) => L.haystack.includes(K))).map((L) => L.index)
    );
  }, [h, fe]), Ne = Ie(
    () => A === null ? null : oe.find((k) => k.index === A) ?? null,
    [oe, A]
  ), nt = He(oe);
  nt.current = oe, We(() => {
    if (A === null) return;
    const k = nt.current.find(
      (L) => L.index === A
    );
    k && (ce((L) => {
      if (!L.has(k.runIndex)) return L;
      const K = new Set(L);
      return K.delete(k.runIndex), K;
    }), k.kind === "tool" && w(!1));
  }, [A]);
  const De = Ie(
    () => Ee === null ? [] : oe.filter((k) => Ee.has(k.index)).map((k) => k.index),
    [oe, Ee]
  ), zt = A === null ? -1 : De.indexOf(A), ht = He(A);
  ht.current = A;
  const st = He(null), Xe = $e((k, L) => {
    if (L.length === 0) return;
    const K = ht.current, he = K === null ? -1 : L.indexOf(K);
    let Te;
    if (he >= 0)
      Te = L[(he + k + L.length) % L.length];
    else {
      const Se = new Map(
        nt.current.map((Be, ft) => [Be.index, ft])
      ), Ce = K === null ? -1 : Se.get(K) ?? -1;
      Te = k > 0 ? L.find((Be) => (Se.get(Be) ?? 0) > Ce) ?? L[0] : [...L].reverse().find((Be) => (Se.get(Be) ?? 0) < Ce) ?? L[L.length - 1];
    }
    M(Te), G(null);
  }, []), x = He(p);
  x.current = p;
  const V = He(h);
  V.current = h;
  const ee = He(De);
  ee.current = De;
  const de = $e(
    (k) => {
      const L = x.current;
      if (L.trim() !== V.current.trim()) {
        st.current = k, b(L);
        return;
      }
      Xe(k, ee.current);
    },
    [Xe]
  );
  We(() => {
    const k = st.current;
    k !== null && (st.current = null, Xe(k, De));
  }, [Xe, De]);
  const re = Ie(() => {
    var bn, xn;
    if (F === null) return null;
    const k = j.find((q) => q.turn === F);
    if (!k) return null;
    const L = ((bn = k.groups[0]) == null ? void 0 : bn.cells) ?? [], K = L.filter((q) => q.kind === "message"), he = L.filter((q) => q.kind === "tool"), Te = [
      ...new Set(
        K.map((q) => q.model).filter((q) => !!q)
      )
    ], Se = [
      ...new Set(
        K.map((q) => q.provider).filter((q) => !!q)
      )
    ];
    let Ce = 0, Be = 0, ft = 0, mn = 0, gn = 0, mt = null, Rt = 0;
    const yn = [];
    for (const q of L)
      q.usage && (Ce += q.usage.input_tokens ?? 0, Be += q.usage.output_tokens ?? 0, ft += q.usage.cache_input_tokens ?? 0, mn += q.usage.cache_creation_input_tokens ?? 0, gn += q.usage.reasoning_tokens ?? 0), q.timing && (mt = mt === null ? q.timing.ttft_ms : Math.min(mt, q.timing.ttft_ms), Rt = (Rt ?? 0) + q.timing.decode_ms), q.isError && yn.push(q.toolError ?? q.text ?? "error");
    const Qe = L.find((q) => q.kind === "user"), Ls = (xn = [...K].reverse().find((q) => q.options)) == null ? void 0 : xn.options, Ot = [...K].reverse().find((q) => q.outputText);
    let En;
    const Sn = K.filter((q) => q.messagesMeta);
    if (Sn.length > 0) {
      const q = {};
      let Ye = 0, Nt = 0;
      for (const Ds of Sn) {
        const Dt = Ds.messagesMeta;
        for (const [kn, Ps] of Object.entries(Dt.charsByRole))
          q[kn] = (q[kn] ?? 0) + Ps;
        Ye += Dt.totalChars, Nt = Math.max(Nt, Dt.maxToolChars);
      }
      En = { charsByRole: q, totalChars: Ye, maxToolChars: Nt };
    }
    const Lt = j.findIndex((q) => q.turn === F), vn = Lt > 0 ? j[Lt - 1] : null;
    let lt = null;
    if (vn) {
      lt = 0;
      for (const q of vn.groups)
        for (const Ye of q.cells)
          Ye.kind === "message" && Ye.usage && (lt += Ye.usage.input_tokens ?? 0);
    }
    const Ns = lt === null && Lt !== 0 ? void 0 : {
      prevInputTokens: lt,
      deltaTokens: Ce - (lt ?? 0)
    };
    return {
      turn: F,
      status: k.status,
      durationMs: k.durationMs,
      startedAt: (Qe == null ? void 0 : Qe.startedAt) ?? null,
      query: (Qe == null ? void 0 : Qe.text) ?? "",
      llmCalls: K.length,
      toolCalls: he.length,
      models: Te,
      providers: Se,
      inputTokens: Ce,
      outputTokens: Be,
      cacheReadTokens: ft,
      cacheWriteTokens: mn,
      reasoningTokens: gn,
      inputComposition: En,
      growth: Ns,
      resultIndex: Ot == null ? void 0 : Ot.index,
      ttftMs: mt,
      decodeMs: Rt,
      errors: yn,
      options: Ls,
      sessionTotals: X && X.sessionId === e ? {
        inputTokens: X.inputTokens,
        outputTokens: X.outputTokens,
        totalTokens: X.totalTokens,
        reasoningTokens: X.reasoningTokens
      } : void 0
    };
  }, [F, j, X, e]), me = !!(r && r.events.length > 0 && r.events[0].seq > 1), ie = async (k) => {
    try {
      N(await qs(k));
    } catch (L) {
      at.error(String(L.message));
    }
  }, Pe = Ie(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), ge = Ie(() => {
    if (!f) return null;
    const k = [
      `${f.runs} ${c(n, "statRounds")} · ${f.llm_calls} ${c(n, "statSteps")}`,
      `LLM ${ye(f.llm_ms_total / 1e3)} · ${c(
        n,
        "toolCalls"
      )} ${ye(f.tool_ms_total / 1e3)}`,
      `${c(n, "statTtftAvg")} ${f.ttft_ms_avg === null ? "-" : ye(f.ttft_ms_avg / 1e3)} · ${wt(
        f.output_tokens,
        f.decode_ms_total / 1e3
      )}`
    ];
    if (f.cache_read_tokens > 0 || f.cache_write_tokens > 0) {
      const L = f.cache_read_tokens + f.input_tokens, K = L > 0 ? Math.round(f.cache_read_tokens / L * 100) : 0;
      k.push(`${c(n, "statCacheHit")} ${K}%`);
    }
    if (k.push(
      `${c(n, "statInput")} ${Y(
        f.input_tokens
      )} tok · ${c(n, "statOutput")} ${Y(
        f.output_tokens
      )} tok`
    ), t && k.push(sn(t.size_bytes)), f.skills) {
      const L = Object.entries(f.skills).sort((K, he) => he[1] - K[1]).map(([K, he]) => `${K} ×${he}`).join(" · ");
      L && k.push(`📚 ${L}`);
    }
    if (ne != null && ne.prompt) {
      const L = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set();
      for (const Te of j)
        for (const Se of Te.groups)
          for (const Ce of Se.cells)
            Ce.skillName ? K.add(Ce.skillName) : Ce.inSkill && L.add(Ce.inSkill);
      const he = [...L].filter((Te) => !K.has(Te));
      he.length > 0 && k.push(
        `⚡ ${c(n, "skillBypassStrip")}: ${he.join(" · ")}`
      );
    }
    return k.join(" | ");
  }, [f, t, n, j, ne]), ae = () => {
    M(null), G(null);
  };
  We(() => {
    A !== null && pe(null);
  }, [A]);
  const je = Ie(
    () => se === null ? null : j.flatMap((k) => k.skillSpans ?? []).find((k) => k.id === se) ?? null,
    [se, j]
  ), Ae = (_ == null ? void 0 : _.status) === 404, ze = Ne !== null || re !== null, Je = He(null);
  Je.current = ((fn = r == null ? void 0 : r.events[0]) == null ? void 0 : fn.seq) ?? null;
  const pt = $e(async () => {
    const k = C.current, L = Je.current;
    return !k || L === null ? !1 : (await D(k, L), !0);
  }, [D]), $s = $e(() => {
    E(!0), pt().finally(() => E(!1));
  }, [pt]), As = $e((k) => {
    M((L) => L === k ? null : k), G(null);
  }, []), pn = $e((k) => {
    G(k), M(null);
  }, []), zs = $e((k) => {
    ce((L) => {
      const K = new Set(L);
      return K.has(k) ? K.delete(k) : K.add(k), K;
    });
  }, []), Rs = $e(
    (k, L) => {
      var Te;
      const he = (L !== null ? (((Te = j.find((Se) => Se.turn === L)) == null ? void 0 : Te.skillSpans) ?? []).find(
        (Se) => Se.skill === k
      ) : void 0) ?? j.flatMap((Se) => Se.skillSpans ?? []).find((Se) => Se.skill === k);
      he && pe(he.id);
    },
    [j]
  ), Os = $e(() => {
    pe(null), M(null), G(null);
  }, []);
  return /* @__PURE__ */ H.createElement(
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
    /* @__PURE__ */ H.createElement(
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
      e ? /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ H.createElement(
          Ke,
          {
            strong: !0,
            ellipsis: {
              tooltip: (t == null ? void 0 : t.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (t == null ? void 0 : t.title) || (t == null ? void 0 : t.agent_id) || ms(e)
        ),
        /* @__PURE__ */ H.createElement(
          Tr,
          {
            color: ys[(t == null ? void 0 : t.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Mt(n, (t == null ? void 0 : t.status) ?? "unknown")
        ),
        t != null && t.channel ? /* @__PURE__ */ H.createElement(Ke, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, t.channel) : null,
        /* @__PURE__ */ H.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ H.createElement(kr, null, /* @__PURE__ */ H.createElement(Zn, { config: U, onChange: ie }, /* @__PURE__ */ H.createElement(St, { size: "small", icon: /* @__PURE__ */ H.createElement(Yn, null) })), /* @__PURE__ */ H.createElement(_r, { title: c(n, "export") }, /* @__PURE__ */ H.createElement(
          St,
          {
            size: "small",
            icon: /* @__PURE__ */ H.createElement(Mr, null),
            onClick: () => {
              const { sessionId: k, instance: L } = jt(e);
              Gs(k, L).then(() => at.success(c(n, "exported"))).catch(
                (K) => at.error(String(K.message))
              );
            }
          },
          c(n, "export")
        )), e.includes("~") ? null : /* @__PURE__ */ H.createElement(
          br,
          {
            title: c(n, "deleteConfirm"),
            onConfirm: () => {
              Xs(e).then(() => {
                at.success(c(n, "deleted")), o ? o(e) : l == null || l();
              }).catch(
                (k) => at.error(String(k.message))
              );
            }
          },
          /* @__PURE__ */ H.createElement(St, { size: "small", danger: !0, icon: /* @__PURE__ */ H.createElement(Ir, null) }, c(n, "delete"))
        )))
      ), /* @__PURE__ */ H.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ H.createElement(
          Ke,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          ge ?? // Transient line while the stats endpoint responds.
          (t ? `${t.runs} ${c(n, "statRounds")} · ${t.llm_calls} ${c(n, "statSteps")} · ${gs(
            t.total_tokens
          )} ${c(n, "tokens")} · ${sn(
            t.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ H.createElement(
          Ke,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                c(n, "copySessionId"),
                c(n, "copiedSessionId")
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
      )) : /* @__PURE__ */ H.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ H.createElement(Ke, { type: "secondary", style: { fontSize: 13 } }, c(n, "selectSession")),
        /* @__PURE__ */ H.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ H.createElement(Zn, { config: U, onChange: ie }, /* @__PURE__ */ H.createElement(St, { size: "small", icon: /* @__PURE__ */ H.createElement(Yn, null) })))
      )
    ),
    _ && !Ae && /* @__PURE__ */ H.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ H.createElement(Ke, { type: "danger", style: { fontSize: 12 } }, `${c(n, "loadFailed")}: ${_.message}`)),
    /* @__PURE__ */ H.createElement(
      Sr,
      {
        mode: z,
        onModeChange: T,
        search: p,
        onSearchChange: g,
        matchCount: Ee === null ? null : De.length,
        matchPosition: zt,
        onNextMatch: () => de(1),
        onPrevMatch: () => de(-1),
        onRefresh: () => {
          e && (D(e), Z(e)), l == null || l();
        },
        modeOptions: Pe,
        allCollapsed: j.length > 0 && j.every((k) => le.has(k.turn ?? -1)),
        hasRequests: j.some((k) => k.turn !== null),
        callsCollapsed: P,
        onToggleCallsCollapsed: () => w((k) => !k),
        onToggleCollapseAll: () => {
          ce((k) => j.some(
            (K) => K.turn !== null && !k.has(K.turn)
          ) ? new Set(
            j.map((K) => K.turn).filter((K) => K !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ H.createElement(
      ar,
      {
        turns: j,
        mode: z,
        range: v,
        hasEarlierRecords: me,
        onLoadEarlier: pt,
        selectedIndex: A,
        searchMatchIndexes: Ee,
        onRangeChange: O,
        onRecordSelect: M,
        onRecordFocus: M,
        onSkillSpanSelect: pe,
        locale: n
      }
    ),
    d && !r ? /* @__PURE__ */ H.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ H.createElement(Cs, null)) : r ? /* @__PURE__ */ H.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ H.createElement(
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
      /* @__PURE__ */ H.createElement(
        jo,
        {
          turns: j,
          selectedIndex: A,
          selectedTurn: F,
          collapsedTurns: le,
          focusIndexes: Ge,
          searchMatchIndexes: Ee,
          onSelectedIndexChange: As,
          onSkillSpanOpen: Rs,
          onSelectedTurnChange: pn,
          callsCollapsed: P,
          onToggleTurn: zs,
          hasOlderRecords: me,
          loadingOlder: m,
          onLoadOlder: $s,
          emptyText: c(n, "noSessions"),
          initialRecord: ne,
          locale: n,
          onEscape: Os
        }
      )
    ), je ? /* @__PURE__ */ H.createElement(
      Gl,
      {
        span: je,
        records: oe,
        onJumpRecord: (k) => {
          pe(null), M(k);
        },
        onClose: () => pe(null)
      }
    ) : ze ? /* @__PURE__ */ H.createElement(
      Fl,
      {
        record: Ne,
        request: re,
        onJumpSession: s,
        onSelectTurn: pn,
        onClose: ae
      }
    ) : null) : /* @__PURE__ */ H.createElement(
      Qn,
      {
        image: Qn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: Ae && e ? c(n, "noTraceForSession") : c(n, "selectSession")
      }
    )
  );
}
function es(e) {
  return (t) => {
    t.key !== "Enter" && t.key !== " " || (t.preventDefault(), e());
  };
}
const tt = window.QwenPaw.host, W = tt.React, { useCallback: Yt, useEffect: ct, useMemo: vt, useRef: ts, useState: Re } = W, { Button: ns, Empty: ss, Input: $r, Spin: Ar, Tag: Zt, Tooltip: ls } = tt.antd, {
  CaretRightOutlined: zr,
  MenuFoldOutlined: Rr,
  MenuUnfoldOutlined: Or,
  SearchOutlined: Lr
} = tt.antdIcons, { Text: dt } = tt.antd.Typography;
function Nr({
  groups: e,
  collapsedAgents: t,
  onToggleAgent: n,
  searching: s,
  selected: l,
  onSelect: o,
  locale: r
}) {
  const u = fs[un()], d = e.length > 1;
  return /* @__PURE__ */ W.createElement(W.Fragment, null, e.map(([i, m]) => {
    const E = d && !s && t.has(i);
    return /* @__PURE__ */ W.createElement("div", { key: i }, d && /* @__PURE__ */ W.createElement(
      "div",
      {
        role: "button",
        tabIndex: 0,
        "aria-expanded": !E,
        onClick: () => n(i),
        onKeyDown: es(() => n(i)),
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
      /* @__PURE__ */ W.createElement(
        zr,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: E ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ W.createElement(dt, { strong: !0, style: { fontSize: 12 } }, i),
      /* @__PURE__ */ W.createElement(dt, { type: "secondary", style: { fontSize: 11 } }, m.length)
    ), !E && m.map((p) => {
      const g = Oe(p) === l;
      return /* @__PURE__ */ W.createElement(
        "div",
        {
          key: Oe(p),
          role: "button",
          tabIndex: 0,
          "aria-pressed": g,
          onClick: () => o(Oe(p)),
          onKeyDown: es(() => o(Oe(p))),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: g ? "rgba(22,119,255,0.10)" : "transparent",
            border: g ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ W.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ W.createElement(
            dt,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${p.title ? `${p.title}
` : ""}${p.session_id}`
              }
            },
            p.title || p.agent_id || ms(p.session_id)
          ),
          d ? null : p.agent_id ? /* @__PURE__ */ W.createElement(
            Zt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            p.agent_id
          ) : null,
          p.user_id ? /* @__PURE__ */ W.createElement(
            Zt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "cyan",
              title: p.user_id
            },
            "👤 ",
            p.user_id
          ) : null,
          /* @__PURE__ */ W.createElement(
            Zt,
            {
              color: ys[p.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Mt(r, p.status)
          )
        ),
        /* @__PURE__ */ W.createElement(
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
          /* @__PURE__ */ W.createElement("span", null, p.channel || "-"),
          p.instance_id ? /* @__PURE__ */ W.createElement(
            "span",
            {
              title: `${p.instance_id}${p.hostname ? ` (${p.hostname})` : ""}`
            },
            "🖥 ",
            p.hostname || p.instance_id
          ) : null,
          /* @__PURE__ */ W.createElement("span", null, p.runs, " ", c(r, "runs")),
          /* @__PURE__ */ W.createElement("span", null, gs(p.total_tokens), " tok"),
          p.skills ? /* @__PURE__ */ W.createElement(
            "span",
            {
              style: { color: u.skill },
              title: Object.entries(p.skills).sort((h, b) => b[1] - h[1]).map(([h, b]) => `${h} ×${b}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(p.skills).sort((h, b) => b[1] - h[1]).slice(0, 2).map(([h]) => h).join(" ")
          ) : null,
          /* @__PURE__ */ W.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: kl(p.last_event_t)
            },
            wl(p.last_event_t, r)
          )
        )
      );
    }));
  }));
}
function Dr() {
  const e = typeof tt.useLocale == "function" ? tt.useLocale() : void 0, t = vt(
    () => cn(e ?? Me()),
    [e]
  );
  Hs(t);
  const [n, s] = Re(null), [l, o] = Re(!1), [r, u] = Re(
    /* @__PURE__ */ new Set()
  ), [d, i] = Re(!1), [m, E] = Re(!1), [p, g] = Re(null), [h, b] = Re(""), [z, T] = Re(""), [v, O] = Re(null), A = ts(n);
  A.current = n;
  const M = ts(z);
  M.current = z, ct(() => {
    const P = window.setTimeout(
      () => T(h.trim()),
      200
    );
    return () => window.clearTimeout(P);
  }, [h]);
  const F = Yt(async () => {
    var P;
    try {
      const w = M.current, U = w ? 0 : ((P = A.current) == null ? void 0 : P.length) ?? 0, N = await wn({
        limit: w ? 100 : Math.min(500, Math.max(100, U)),
        offset: 0,
        q: w || void 0
      });
      s(N.sessions), o(N.has_more), O(null);
    } catch (w) {
      O(String(w.message));
    }
  }, []), G = Yt(async () => {
    var P;
    E(!0);
    try {
      const w = M.current, U = await wn({
        limit: 100,
        offset: ((P = A.current) == null ? void 0 : P.length) ?? 0,
        q: w || void 0
      });
      s((N) => {
        const X = N ?? [], y = new Set(X.map((f) => Oe(f)));
        return [
          ...X,
          ...U.sessions.filter((f) => !y.has(Oe(f)))
        ];
      }), o(U.has_more);
    } catch (w) {
      O(String(w.message));
    } finally {
      E(!1);
    }
  }, []);
  ct(() => {
    F();
  }, [F, z]), ct(() => {
    try {
      const P = new URLSearchParams(window.location.search).get("session");
      P && (P.includes("~") ? g(P) : ds(P).then((w) => {
        g(w ?? P);
      }));
    } catch {
    }
  }, []), ct(() => {
    try {
      const P = new URL(window.location.href);
      p ? P.searchParams.set("session", p) : P.searchParams.delete("session"), window.history.replaceState(window.history.state, "", P);
    } catch {
    }
  }, [p]), ct(() => {
    const P = setInterval(() => {
      document.visibilityState === "visible" && F();
    }, 15e3);
    return () => clearInterval(P);
  }, [F]);
  const se = vt(
    () => (n == null ? void 0 : n.find((P) => Oe(P) === p)) ?? null,
    [n, p]
  ), pe = vt(() => {
    if (!n) return [];
    const P = h.trim().toLowerCase();
    return P ? n.filter(
      (w) => [
        w.session_id,
        w.title ?? "",
        w.agent_id,
        w.channel,
        w.user_id ?? "",
        w.instance_id ?? "",
        w.hostname ?? ""
      ].join(" ").toLowerCase().includes(P)
    ) : n;
  }, [n, h]), le = vt(() => {
    const P = /* @__PURE__ */ new Map();
    for (const w of pe) {
      const U = w.agent_id || "(unknown)", N = P.get(U);
      N ? N.push(w) : P.set(U, [w]);
    }
    return [...P.entries()];
  }, [pe]), ce = Yt(
    (P) => {
      const w = le.flatMap(([, X]) => X.map(Oe)), U = w.indexOf(P), N = U < 0 ? null : w[U + 1] ?? w[U - 1] ?? null;
      s(
        (X) => (X == null ? void 0 : X.filter((y) => Oe(y) !== P)) ?? X
      ), g(N), F();
    },
    [le, F]
  );
  return /* @__PURE__ */ W.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, d ? /* @__PURE__ */ W.createElement(
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
    /* @__PURE__ */ W.createElement(ls, { title: c(t, "expandSidebar"), placement: "right" }, /* @__PURE__ */ W.createElement(
      ns,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ W.createElement(Or, null),
        onClick: () => i(!1)
      }
    ))
  ) : /* @__PURE__ */ W.createElement(
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
    /* @__PURE__ */ W.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ W.createElement(
        $r,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ W.createElement(Lr, null),
          placeholder: c(t, "searchPlaceholder"),
          value: h,
          style: { flex: 1, minWidth: 0 },
          onChange: (P) => b(P.target.value)
        }
      ),
      /* @__PURE__ */ W.createElement(ls, { title: c(t, "collapseSidebar") }, /* @__PURE__ */ W.createElement(
        ns,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ W.createElement(Rr, null),
          onClick: () => i(!0)
        }
      ))
    ),
    v ? /* @__PURE__ */ W.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ W.createElement(dt, { type: "danger", style: { fontSize: 12 } }, `${c(t, "loadFailed")}: ${v}`)) : null,
    /* @__PURE__ */ W.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, n === null ? /* @__PURE__ */ W.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ W.createElement(Ar, null)) : pe.length === 0 ? /* @__PURE__ */ W.createElement(
      ss,
      {
        image: ss.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ W.createElement("span", { style: { fontSize: 12 } }, c(t, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ W.createElement(
        dt,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        c(t, "noSessionsHint")
      )
    ) : /* @__PURE__ */ W.createElement(
      Nr,
      {
        groups: le,
        collapsedAgents: r,
        onToggleAgent: (P) => {
          u((w) => {
            const U = new Set(w);
            return U.has(P) ? U.delete(P) : U.add(P), U;
          });
        },
        searching: !!h.trim(),
        selected: p,
        onSelect: g,
        locale: t
      }
    ), n !== null && l && /* @__PURE__ */ W.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ W.createElement(
      "a",
      {
        onClick: () => void G(),
        style: { fontSize: 12 }
      },
      m ? "…" : `⋯ ${c(t, "loadOlder")} (${(n == null ? void 0 : n.length) ?? 0})`
    )))
  ), /* @__PURE__ */ W.createElement(
    Cr,
    {
      sessionId: p,
      summary: se,
      locale: t,
      onJumpSession: g,
      onRefreshSessions: () => void F(),
      onDeleted: ce
    }
  ));
}
const Pr = window.QwenPaw.host.React;
var os, rs;
(rs = (os = window.QwenPaw).registerRoutes) == null || rs.call(os, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Dr,
    label: c(Me(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var is, bt, as;
(as = (bt = (is = window.QwenPaw.chat) == null ? void 0 : is.rightHeader) == null ? void 0 : bt.add) == null || as.call(
  bt,
  "agent-trace",
  Pr.createElement(tl),
  { id: "agent-trace-jump" }
);

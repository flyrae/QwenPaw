var os = Object.defineProperty;
var is = (e, n, t) => n in e ? os(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var kt = (e, n, t) => is(e, typeof n != "symbol" ? n + "" : n, t);
const rs = {
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
    toolSchemaNote: "The model-visible tool definition at call time (from the active prompt snapshot)",
    apiFilterAll: "All",
    apiShowEarlier: "Show earlier messages",
    apiCollapseEarlier: "Collapse to recent only",
    reasoningShort: "Reasoning"
  }
};
function Ht(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ie() {
  try {
    return Ht(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function d(e, n) {
  return rs[e][n];
}
const We = window.QwenPaw.host;
function Be(e) {
  return e.instance_id ? `${e.instance_id}~${e.session_id}` : e.session_id;
}
function wt(e) {
  const n = e.indexOf("~");
  return n <= 0 ? { sessionId: e } : {
    instance: e.slice(0, n),
    sessionId: e.slice(n + 1)
  };
}
function as(e, n) {
  if (!e || e.events.length === 0) return n;
  const t = /* @__PURE__ */ new Map();
  for (const l of e.events) t.set(l.seq, l);
  for (const l of n.events) t.set(l.seq, l);
  const s = [...t.values()].sort((l, o) => l.seq - o.seq);
  return {
    header: n.header ?? e.header,
    events: s,
    total_events: Math.max(
      n.total_events,
      e.total_events,
      s.length
    ),
    size_bytes: Math.max(n.size_bytes, e.size_bytes),
    mtime: Math.max(n.mtime, e.mtime)
  };
}
async function cs(e, n) {
  const t = n ? `?instance=${encodeURIComponent(n)}` : "";
  return Oe(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats${t}`
  );
}
async function Pn(e, n) {
  return We.fetch ? We.fetch(e, n) : fetch(We.getApiUrl(e), {
    ...n,
    headers: {
      ...(n == null ? void 0 : n.headers) || {},
      ...We.getApiToken() ? { Authorization: `Bearer ${We.getApiToken()}` } : {}
    }
  });
}
class Dn extends Error {
  constructor(n, t) {
    super(t), this.status = n, this.name = "ApiError";
  }
}
async function Oe(e, n) {
  const t = await Pn(e, n), s = await t.text();
  let l = null;
  try {
    l = s ? JSON.parse(s) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new Dn(
      t.status,
      typeof o == "string" ? o : `HTTP ${t.status}`
    );
  }
  return l;
}
async function Yt(e) {
  const n = new URLSearchParams();
  return n.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && n.set("offset", String(e.offset)), e != null && e.instance && n.set("instance", e.instance), e != null && e.user && n.set("user", e.user), e != null && e.q && n.set("q", e.q), Oe(
    `/agent-trace/sessions?${n.toString()}`
  );
}
async function us(e, n) {
  const t = new URLSearchParams();
  n != null && n.beforeSeq && t.set("before_seq", String(n.beforeSeq)), t.set("limit", String(n == null ? void 0 : n.limit)), n != null && n.instance && t.set("instance", n.instance);
  const s = t.toString();
  return Oe(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function ds() {
  return Oe("/agent-trace/config");
}
async function ps(e) {
  return Oe("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function hs(e, n) {
  const t = n ? `?instance=${encodeURIComponent(n)}` : "", s = await Pn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export${t}`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const l = await s.blob(), o = URL.createObjectURL(l), r = document.createElement("a");
  r.href = o, r.download = `${e}.jsonl`, r.click(), URL.revokeObjectURL(o);
}
async function fs(e) {
  await Oe(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function jn(e) {
  if (!e) return null;
  try {
    return (await Oe(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Ae = window.QwenPaw.host, it = Ae.React, { useMemo: ms } = it, { Button: gs, Tooltip: ys } = Ae.antd, { CompassOutlined: Es } = Ae.antdIcons;
function Ss(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function vs() {
  const e = typeof Ae.useLocale == "function" ? Ae.useLocale() : void 0, n = ms(
    () => Ht(e ?? ie()),
    [e]
  );
  return /* @__PURE__ */ it.createElement(ys, { title: d(n, "viewCurrentTrace") }, /* @__PURE__ */ it.createElement(
    gs,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ it.createElement(Es, null),
      "aria-label": d(n, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof Ae.getCurrentSessionId == "function" ? Ae.getCurrentSessionId() : null;
        jn(t).then((s) => {
          window.location.href = Ss(s ?? t);
        });
      }
    }
  ));
}
const Zt = 3e3;
function en(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function bs(e, n) {
  const t = en(e ?? ""), s = en(n ?? "");
  if (t.length > Zt || s.length > Zt)
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
function xs(e, n = 3) {
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
function ks(e) {
  let n = 0, t = 0;
  for (const s of e)
    s.kind === "add" ? n += 1 : s.kind === "del" && (t += 1);
  return { added: n, removed: t };
}
function ws(e) {
  let n = 0;
  for (let t = 0; t < e.length; t += 1)
    n = (n * 31 + e.charCodeAt(t)) % 100003;
  return n % 360;
}
class Ts {
  constructor() {
    kt(this, "open", /* @__PURE__ */ new Map());
    kt(this, "finished", []);
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
      colorHue: ws(n)
    };
    return this.open.set(n, o), o;
  }
  closeAll(n, t, s) {
    for (const l of this.open.values())
      l.endSeq = n, l.endT = t, l.endKind = s, this.finished.push(l);
    this.open.clear();
  }
}
function _s(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function Is(e) {
  const n = e.lastActivityT ?? e.endT;
  return n === null ? null : Math.max(0, n - e.startT);
}
const Cs = /* @__PURE__ */ new Set([
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
function Ms(e) {
  const n = /* @__PURE__ */ new Set();
  for (const t of e.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi
  ))
    n.add(t[1].toLowerCase());
  for (const t of e.matchAll(/```[a-z]*\n([\s\S]*?)```/g))
    for (const s of t[1].matchAll(/[\w./=\-]{6,}/g)) {
      const l = s[0].toLowerCase();
      Cs.has(l) || n.add(l);
    }
  return [...n];
}
function $s(e, n) {
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
const zs = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, As = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function Bn(e, n) {
  const t = e.markerKind ? zs[e.markerKind] : void 0;
  if (t) return n === "zh-CN" ? t.zh : t.en;
  const s = As[e.kind];
  return s ? n === "zh-CN" ? s.zh : s.en : e.kind;
}
const tn = 60;
function Ke(e) {
  return `${e.role}|${e.text ?? `#${e.chars ?? 0}`}`;
}
function nn(e) {
  return e.chars ?? (e.text ? e.text.length : 0);
}
function sn(e) {
  const n = {};
  for (const t of e)
    n[t.role] = (n[t.role] ?? 0) + 1;
  return n;
}
function Os(e, n) {
  let t = 0;
  for (; t < e.length && t < n.length && Ke(e[t]) === Ke(n[t]); )
    t += 1;
  const s = e.slice(t), l = n.slice(t), o = /* @__PURE__ */ new Map();
  for (const u of l) {
    const v = Ke(u);
    o.set(v, (o.get(v) ?? 0) + 1);
  }
  const r = [], c = [], h = [];
  for (let u = 0; u < Math.min(t, tn); u += 1)
    h.push({ status: "kept", role: e[u].role });
  for (const u of s) {
    const v = Ke(u), $ = o.get(v) ?? 0;
    $ > 0 ? (o.set(v, $ - 1), h.push({ status: "kept", role: u.role })) : r.push(u);
  }
  for (const u of l) {
    const v = Ke(u), $ = o.get(v) ?? 0;
    $ > 0 && (o.set(v, $ - 1), c.push(u));
  }
  const g = /* @__PURE__ */ new Map();
  for (const u of c) {
    const v = g.get(u.role);
    v ? v.push(u) : g.set(u.role, [u]);
  }
  const i = [], p = [];
  for (const u of r) {
    const v = g.get(u.role);
    v && v.length > 0 ? i.push([u, v.shift()]) : p.push(u);
  }
  const y = [...g.values()].flat();
  for (const [u, v] of i)
    h.push({
      status: "rewritten",
      role: u.role,
      oldText: u.text,
      newText: v.text
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
    beforeChars: e.reduce((u, v) => u + nn(v), 0),
    afterChars: n.reduce((u, v) => u + nn(v), 0),
    beforeByRole: sn(e),
    afterByRole: sn(n),
    changes: h.slice(0, tn)
  };
}
function Rs(e) {
  const n = e.trim();
  if (!n.startsWith("[") && !n.startsWith("{")) return e;
  let t;
  try {
    t = JSON.parse(n);
  } catch {
    return e;
  }
  const s = Array.isArray(t) ? t : [t], l = [];
  for (const o of s)
    if (o && typeof o == "object" && typeof o.text == "string") {
      const r = o.text;
      r && l.push(r);
    } else o && typeof o == "object" && typeof o.type == "string" ? l.push(`[${o.type}]`) : typeof o == "string" && o && l.push(o);
  return l.length > 0 ? l.join(`
`) : e;
}
function Ls(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function de(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const n = e * 1e3;
  return n < 1e3 ? `${Math.round(n)}ms` : n < 6e4 ? `${(n / 1e3).toFixed(1)}s` : `${Math.floor(n / 6e4)}m${Math.round(n % 6e4 / 1e3)}s`;
}
function X(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function at(e, n) {
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
function Fn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function Ns(e) {
  if (!e) return "-";
  const n = new Date(e);
  return Number.isNaN(n.getTime()) ? e : n.toLocaleString();
}
function Ps(e) {
  if (!e) return "-";
  const n = Date.parse(e);
  if (!Number.isFinite(n)) return e;
  const t = Date.now() - n;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(n).toLocaleString();
}
function Hn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Pt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Un = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function Wn(e) {
  return e || "unknown";
}
const pt = window.QwenPaw.host, a = pt.React, { useEffect: Ds, useRef: js, useState: Xe } = a, { Button: Kn, Collapse: Dt, Empty: ln, Tabs: Ut, Tag: ct } = pt.antd, { Text: D } = pt.antd.Typography, { CopyOutlined: Bs, CloseOutlined: Fs } = pt.antdIcons, Hs = 320, Us = 720, et = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Ws = 2e4;
function Ks(e) {
  if (e.length > Ws) return e;
  const n = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let s = 0, l, o = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > s && n.push(e.slice(s, l.index));
    const r = l[0];
    let c = "rgba(128,128,128,1)";
    l[1] !== void 0 ? c = et.key : l[2] !== void 0 ? c = et.string : l[3] !== void 0 ? c = et.number : c = et.literal, n.push(
      /* @__PURE__ */ a.createElement("span", { key: o++, style: { color: c } }, r)
    ), s = l.index + r.length;
  }
  return s < e.length && n.push(e.slice(s)), n;
}
function Se({ value: e, json: n = !1 }) {
  const [t, s] = Xe(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
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
    t ? "✓" : /* @__PURE__ */ a.createElement(Bs, null)
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
    n ? Ks(l) : l
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
    /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ a.createElement(
      D,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      n
    )
  );
}
function jt({
  input: e,
  output: n,
  cacheRead: t,
  cacheWrite: s,
  reasoning: l
}) {
  const o = Math.max(0, e - t - s), r = Math.max(0, n - l);
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "Input", value: `${X(e)} tok` }), t ? /* @__PURE__ */ a.createElement(T, { label: "Cached", value: `${X(t)} tok` }) : null, s ? /* @__PURE__ */ a.createElement(
    T,
    {
      label: "Cache created",
      value: `${X(s)} tok`
    }
  ) : null, t || s ? /* @__PURE__ */ a.createElement(T, { label: "Other", value: `${X(o)} tok` }) : null, /* @__PURE__ */ a.createElement(T, { label: "Output", value: `${X(n)} tok` }), l ? /* @__PURE__ */ a.createElement(T, { label: "Reasoning", value: `${X(l)} tok` }) : null, l ? /* @__PURE__ */ a.createElement(T, { label: "Content", value: `${X(r)} tok` }) : null);
}
function Tt({
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
const on = ["system", "user", "assistant", "tool"], Vs = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function qs({
  request: e,
  locale: n
}) {
  const t = e.inputComposition;
  if (!t) return null;
  const s = [], l = new Set(on), o = [
    ...on.filter((c) => t.charsByRole[c]),
    ...Object.keys(t.charsByRole).filter(
      (c) => !l.has(c) && t.charsByRole[c]
    )
  ], r = t.totalChars || 1;
  for (const c of o) {
    const h = t.charsByRole[c], g = Vs[c] ?? "roleOther", i = Math.round(h / r * 100);
    s.push(
      /* @__PURE__ */ a.createElement(
        T,
        {
          key: c,
          label: d(n, g),
          value: `${X(h)} ${d(n, "charUnit")} · ${i}%`
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
        value: `${X(t.maxToolChars)} ${d(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(D, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, d(n, "inputComposition")), s, e.inputTokens > 0 ? /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(n, "realInputTokens"),
      value: `${X(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ a.createElement(
    D,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    d(n, "compositionNote")
  ), e.growth ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? d(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${X(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(n, "cacheAbsorbed"),
      value: `${X(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Gs({
  request: e,
  onJumpRecord: n
}) {
  const t = ie(), [s, l] = a.useState("summary"), o = /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(t, "startedAt"),
      value: _e(e.startedAt)
    }
  ), /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(t, "duration"),
      value: de(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(t, "ttftLabel"),
      value: de(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(t, "decodeLabel"),
      value: de(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ a.createElement(
    T,
    {
      label: d(t, "throughput"),
      value: at(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), r = /* @__PURE__ */ a.createElement(
    jt,
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
      ), /* @__PURE__ */ a.createElement(T, { label: "Query", value: Xs(e.query) }), e.providers.length > 0 ? /* @__PURE__ */ a.createElement(T, { label: "Provider", value: e.providers.join(" · ") }) : null, /* @__PURE__ */ a.createElement(
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
      )) : null, e.options ? /* @__PURE__ */ a.createElement(Tt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ a.createElement(Se, { value: e.options, json: !0 })) : null, /* @__PURE__ */ a.createElement(Tt, { label: "Usage", onOpen: () => l("usage") }, r), /* @__PURE__ */ a.createElement(Tt, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(t, "thisRequest")), r, /* @__PURE__ */ a.createElement(qs, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        D,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        d(t, "sessionTotal")
      ), /* @__PURE__ */ a.createElement(
        jt,
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
        children: /* @__PURE__ */ a.createElement(Se, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ a.createElement(
    Ut,
    {
      size: "small",
      activeKey: s,
      onChange: (h) => l(h),
      items: c,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Xs(e, n = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Js({
  oldText: e,
  newText: n
}) {
  const t = a.useMemo(
    () => bs(e, n),
    [e, n]
  ), s = a.useMemo(() => ks(t), [t]), l = a.useMemo(() => xs(t), [t]), o = ie();
  return e === void 0 ? /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 12 } }, d(o, "noPrevPrompt")) : /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ a.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ a.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ a.createElement(
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
function Qs({ record: e }) {
  var o;
  const n = ie(), t = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: d(n, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "#", value: String(e.index) }), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(n, "status"),
          value: s ? d(n, "promptChanged") : d(n, "promptInitial")
        }
      ), /* @__PURE__ */ a.createElement(T, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ a.createElement(T, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ a.createElement(T, { label: "Tools", value: String(t.length) }))
    },
    ...s ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ a.createElement(
          Js,
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
      children: /* @__PURE__ */ a.createElement(Se, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 4 } }, t.map((r) => /* @__PURE__ */ a.createElement(D, { key: r, code: !0, style: { fontSize: 11 } }, r)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ a.createElement(
          Dt,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((r, c) => {
              var g;
              const h = typeof r.name == "string" && r.name || typeof ((g = r.function) == null ? void 0 : g.name) == "string" && r.function.name || `tool-${c + 1}`;
              return {
                key: String(c),
                label: /* @__PURE__ */ a.createElement(D, { code: !0, style: { fontSize: 11 } }, h),
                children: /* @__PURE__ */ a.createElement(Se, { value: r })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ a.createElement(Se, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ a.createElement(Ut, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function _t({ dragRef: e, width: n }) {
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
function rt({ onClose: e }) {
  return e ? /* @__PURE__ */ a.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ a.createElement(
    Kn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ a.createElement(Fs, null),
      onClick: e
    }
  )) : null;
}
function Ys({
  record: e,
  request: n,
  onJumpSession: t,
  onJumpRecord: s,
  onSelectTurn: l,
  onClose: o
}) {
  var v, $, j, _, R;
  const r = ie(), [c, h] = Xe(400), g = js(null);
  if (Ds(() => {
    const k = (P) => {
      const z = g.current;
      if (z === null) return;
      const q = z.anchorX - P.clientX;
      h(
        Math.min(Us, Math.max(Hs, z.anchorWidth + q))
      );
    }, C = () => {
      g.current = null;
    };
    return window.addEventListener("pointermove", k), window.addEventListener("pointerup", C), () => {
      window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", C);
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
        ln,
        {
          image: ln.PRESENTED_IMAGE_SIMPLE,
          description: d(r, "selectRecord")
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
      /* @__PURE__ */ a.createElement(_t, { dragRef: g, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(rt, { onClose: o }), /* @__PURE__ */ a.createElement(Gs, { request: n, onJumpRecord: s }))
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
      /* @__PURE__ */ a.createElement(_t, { dragRef: g, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(rt, { onClose: o }), /* @__PURE__ */ a.createElement(Qs, { record: i }))
    );
  const p = i.usage, y = i.timing, u = [];
  if (u.push({
    key: "summary",
    label: d(r, "summary"),
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "#", value: String(i.index) }), /* @__PURE__ */ a.createElement(T, { label: "Kind", value: Bn(i, r) }), i.runIndex > 0 && l ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(i.runIndex)
      },
      "Request #",
      i.runIndex,
      " →"
    )) : null, /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(r, "status"),
        value: i.running ? d(r, "running") : i.isError ? d(r, "error") : d(r, "success"),
        danger: i.isError
      }
    ), i.provider ? /* @__PURE__ */ a.createElement(T, { label: "Provider", value: i.provider }) : null, i.model ? /* @__PURE__ */ a.createElement(T, { label: d(r, "model"), value: i.model }) : null, i.toolName ? /* @__PURE__ */ a.createElement(T, { label: "Tool", value: i.toolName }) : null, i.inSkill ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(r, "skillResource"),
        value: i.inSkillLoaded ? `⚡ ${i.inSkill}` : `⚡ ${i.inSkill}（${d(r, "skillBypass")}）`
      }
    ) : null, i.guidedSkill ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(r, "skillGuided"),
        value: `∈ ${i.guidedSkill}（${i.guidedReason === "slash" ? d(r, "guidedBySlash") : d(r, "guidedByLoad")}）`
      }
    ) : null, i.toolOutputChars ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(r, "outputSize"),
        value: i.toolOutputBytes ? `${X(i.toolOutputChars)} ${d(
          r,
          "charUnit"
        )} · ${Pt(i.toolOutputBytes)} (${d(
          r,
          "beforeTruncation"
        )})` : `${X(i.toolOutputChars)} ${d(
          r,
          "charUnit"
        )}`
      }
    ) : null, i.kind === "user" && (i.channel || i.userId) ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(r, "source"),
        value: [i.channel, i.userId].filter(Boolean).join(" · ")
      }
    ) : null, i.receipt ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(r, "channel"),
        value: i.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(r, "duration"),
        value: de(i.timeSeconds)
      }
    ), i.note ? /* @__PURE__ */ a.createElement(D, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.spawnSession ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(r, "spawnedAgent"),
        value: i.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ a.createElement(
      Kn,
      {
        size: "small",
        onClick: () => i.spawnSession && t(i.spawnSession),
        style: { marginTop: 4 }
      },
      d(r, "openChildSession")
    ) : null) : null)
  }), i.kind === "message" && (i.usage || i.timing || i.options || (v = i.apiPayload) != null && v.params || i.toolCalls && i.toolCalls.length > 0)) {
    const k = ($ = i.apiPayload) == null ? void 0 : $.params, C = k !== void 0 && i.options !== void 0;
    u.push({
      key: "request",
      label: d(r, "requestTab"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(r, "toolCallsEmitted"), " (", i.toolCalls.length, ")"), i.toolCalls.map((P, z) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: P.id || z,
          style: { display: "flex", gap: 6, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, P.name),
        P.id ? /* @__PURE__ */ a.createElement(
          D,
          {
            type: "secondary",
            style: { fontSize: 10, flexShrink: 0 }
          },
          "…",
          P.id.slice(-8)
        ) : null
      ))) : null, k || i.options ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(r, "generationOptions")), C ? /* @__PURE__ */ a.createElement(
        D,
        {
          type: "secondary",
          style: { fontSize: 11, display: "block" }
        },
        `${d(r, "wireParams")} + ${d(
          r,
          "callOptionsDigest"
        )}`
      ) : null, /* @__PURE__ */ a.createElement(
        Se,
        {
          value: { ...i.options ?? {}, ...k ?? {} },
          json: !0
        }
      )) : null, i.usage ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(r, "usage")), /* @__PURE__ */ a.createElement(
        jt,
        {
          input: i.usage.input_tokens ?? 0,
          output: i.usage.output_tokens ?? 0,
          cacheRead: i.usage.cache_input_tokens ?? 0,
          cacheWrite: i.usage.cache_creation_input_tokens ?? 0,
          reasoning: i.usage.reasoning_tokens ?? 0
        }
      )) : null, /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(r, "timing")), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(r, "startedAt"),
          value: _e(i.startedAt)
        }
      ), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(r, "duration"),
          value: de(i.timeSeconds)
        }
      ), i.timing ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(r, "ttftLabel"),
          value: de(i.timing.ttft_ms / 1e3)
        }
      ), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(r, "decodeLabel"),
          value: de(i.timing.decode_ms / 1e3)
        }
      ), /* @__PURE__ */ a.createElement(
        T,
        {
          label: d(r, "throughput"),
          value: at(
            (j = i.usage) == null ? void 0 : j.output_tokens,
            i.timing.decode_ms / 1e3
          )
        }
      )) : /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 11 } }, d(r, "noTiming"))))
    });
  }
  if (i.kind === "tool") {
    if (i.toolInput && u.push({
      key: "payload",
      label: d(r, "input"),
      children: /* @__PURE__ */ a.createElement(Se, { value: i.toolInput, json: !0 })
    }), (i.toolOutput || i.toolError) && u.push({
      key: "result",
      label: d(r, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolError ? /* @__PURE__ */ a.createElement(D, { type: "danger", style: { fontSize: 12 } }, i.toolError) : null, i.toolOutput ? /* @__PURE__ */ a.createElement(Se, { value: i.toolOutput }) : null)
    }), i.toolSchema) {
      const k = i.toolSchema.function, C = i.toolSchema, P = typeof (k == null ? void 0 : k.description) == "string" ? k.description : typeof C.description == "string" ? C.description : void 0, z = (k == null ? void 0 : k.parameters) !== void 0 ? k.parameters : C.parameters;
      u.push({
        key: "schema",
        label: "Schema",
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 11 } }, d(r, "toolSchemaNote")), P ? /* @__PURE__ */ a.createElement(
          D,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          P
        ) : null, z !== void 0 ? /* @__PURE__ */ a.createElement(Se, { value: z, json: !0 }) : null)
      });
    }
  } else if (i.outputText || i.thinkingText || i.messages || i.marker || i.toolCalls && i.toolCalls.length > 0) {
    if (i.inputNew || i.messagesMeta) {
      const k = ((_ = i.inputNew) == null ? void 0 : _.length) ?? 0, C = ((R = i.messagesMeta) == null ? void 0 : R.count) ?? 0;
      let P;
      i.contextReset ? P = `${d(r, "deltaReset")} (${C})` : k === 0 ? P = d(r, "deltaNoChange") : i.inputNew && i.inputNew.length === 1 && i.inputNew[0].role === "assistant" && C > 1 ? P = d(r, "deltaTailUpdate") : P = `${d(r, "deltaAppend")} (${k})`, u.push({
        key: "input",
        label: d(r, "inputTab"),
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(T, { label: d(r, "deltaKind"), value: P }), i.contextReset ? /* @__PURE__ */ a.createElement(D, { type: "warning", style: { fontSize: 12 } }, d(r, "contextReset")) : null, i.resetDetail ? /* @__PURE__ */ a.createElement(
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
              label: d(r, "resetBreakAt"),
              value: `#${i.resetDetail.breakAt + 1}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            T,
            {
              label: d(r, "resetSizes"),
              value: `${i.resetDetail.beforeCount} ${d(
                r,
                "resetMsgs"
              )} · ${X(i.resetDetail.beforeChars)} ${d(
                r,
                "charUnit"
              )} → ${i.resetDetail.afterCount} ${d(
                r,
                "resetMsgs"
              )} · ${X(i.resetDetail.afterChars)} ${d(
                r,
                "charUnit"
              )}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            T,
            {
              label: d(r, "resetRoles"),
              value: Object.keys(i.resetDetail.afterByRole).map((z) => {
                const q = i.resetDetail.beforeByRole[z] ?? 0, w = i.resetDetail.afterByRole[z] ?? 0;
                return q === w ? null : `${z} ${q}→${w}`;
              }).filter(Boolean).join(" · ") || "-"
            }
          ),
          i.resetDetail.changes.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ a.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(r, "resetChanges")), i.resetDetail.changes.slice(0, 20).map((z, q) => /* @__PURE__ */ a.createElement(
            "div",
            {
              key: q,
              style: {
                display: "flex",
                gap: 6,
                alignItems: "baseline"
              }
            },
            /* @__PURE__ */ a.createElement(
              ct,
              {
                color: z.status === "kept" ? "default" : z.status === "rewritten" ? "orange" : z.status === "removed" ? "red" : "green",
                style: { marginInlineEnd: 0, fontSize: 10 }
              },
              d(r, Zs[z.status])
            ),
            /* @__PURE__ */ a.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, z.role),
            z.status === "rewritten" ? /* @__PURE__ */ a.createElement(
              D,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${d(r, "resetOldPrefix")}${(z.oldText ?? "").slice(0, 40)} → ${d(
                r,
                "resetNewPrefix"
              )}${(z.newText ?? "").slice(0, 40)}`
            ) : /* @__PURE__ */ a.createElement(
              D,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${z.status === "removed" ? d(r, "resetOldPrefix") : d(r, "resetNewPrefix")}${(z.oldText ?? z.newText ?? "").slice(
                0,
                60
              )}`
            )
          ))) : null
        ) : null, i.messagesMeta ? /* @__PURE__ */ a.createElement(
          T,
          {
            label: d(r, "inputTotal"),
            value: `${i.messagesMeta.count} · ${X(
              i.messagesMeta.totalChars
            )} ${d(r, "charUnit")}`
          }
        ) : null, i.inputNew && i.inputNew.length > 0 ? /* @__PURE__ */ a.createElement(a.Fragment, null, i.inputNew.some((z) => z.role === "assistant") ? /* @__PURE__ */ a.createElement(
          D,
          {
            type: "secondary",
            style: { fontSize: 11, display: "block" }
          },
          d(r, "assistantInputNote")
        ) : null, /* @__PURE__ */ a.createElement(
          Dt,
          {
            size: "small",
            defaultActiveKey: i.inputNew.length <= 5 ? ["messages"] : [],
            items: [
              {
                key: "messages",
                label: `${d(r, "inputMessages")} (${i.inputNew.length})`,
                children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.inputNew.map((z, q) => /* @__PURE__ */ a.createElement(
                  nl,
                  {
                    key: q,
                    message: z,
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
      const k = i.apiPayload;
      u.push({
        key: "api",
        label: "API",
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 11 } }, d(r, "apiPayloadNote")), /* @__PURE__ */ a.createElement(T, { label: "Model", value: k.model }), /* @__PURE__ */ a.createElement(
          T,
          {
            label: d(r, "apiMsgCount"),
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
            label: d(r, "duration"),
            value: de(k.durationMs / 1e3)
          }
        ) : null, /* @__PURE__ */ a.createElement(
          Dt,
          {
            size: "small",
            items: [
              {
                key: "api-msgs",
                label: `${d(r, "apiMessages")} (${k.messages.length})`,
                children: /* @__PURE__ */ a.createElement(
                  tl,
                  {
                    messages: k.messages,
                    locale: r
                  }
                )
              }
            ]
          }
        ))
      });
    }
    u.push({
      key: "raw",
      label: d(r, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, i.inboundParts && i.inboundParts.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 12 } }, `${d(r, "inboundParts")} (${i.inboundParts.length})`), i.inboundParts.map((k, C) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: C,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.type.replace("Content", "")),
        /* @__PURE__ */ a.createElement(
          D,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          k.text ?? "-"
        )
      ))) : null, i.marker ? /* @__PURE__ */ a.createElement(Se, { value: i.marker }) : null, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 12 } }, `${d(r, "toolCall")} (${i.toolCalls.length})`), i.toolCalls.map((k, C) => /* @__PURE__ */ a.createElement("div", { key: k.id || C, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ a.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", k.name), /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 11 } }, k.id)))) : null, i.note ? /* @__PURE__ */ a.createElement(D, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.messages && i.messages.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 12 } }, `${d(r, "query")} (${i.messages.length})`), i.messages.map((k, C) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: C,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.role),
        /* @__PURE__ */ a.createElement(
          D,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          k.text
        )
      ))) : null, i.thinkingText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 12 } }, d(r, "thinking")), /* @__PURE__ */ a.createElement(Se, { value: i.thinkingText })) : null, i.outputText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 12 } }, d(r, "output")), /* @__PURE__ */ a.createElement(Se, { value: i.outputText })) : null)
    });
  }
  return (i.startedAt !== null || p || y) && u.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "Started", value: _e(i.startedAt) }), /* @__PURE__ */ a.createElement(T, { label: "Total", value: de(i.timeSeconds) }), y ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      T,
      {
        label: "TTFT",
        value: de(y.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      T,
      {
        label: "Decoding",
        value: de(y.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(r, "throughput"),
        value: at(
          p == null ? void 0 : p.output_tokens,
          y.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 12 } }, d(r, "noTiming")))
  }), p && u.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(T, { label: "Input", value: X(p.input_tokens) }), /* @__PURE__ */ a.createElement(T, { label: "Output", value: X(p.output_tokens) }), p.cache_creation_input_tokens ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: "Cache write",
        value: X(p.cache_creation_input_tokens)
      }
    ) : null, p.cache_input_tokens ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: "Cache read",
        value: X(p.cache_input_tokens)
      }
    ) : null, p.total_tokens !== void 0 ? /* @__PURE__ */ a.createElement(T, { label: "Total", value: X(p.total_tokens) }) : null, p.time !== void 0 ? /* @__PURE__ */ a.createElement(T, { label: "API time", value: de(p.time) }) : null)
  }), u.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ a.createElement(Se, { value: i.raw })
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
    /* @__PURE__ */ a.createElement(_t, { dragRef: g, width: c }),
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(rt, { onClose: o }), /* @__PURE__ */ a.createElement(Ut, { size: "small", items: u, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Zs = {
  kept: "resetKept",
  removed: "resetRemoved",
  rewritten: "resetRewritten",
  added: "resetAdded"
}, rn = 8, el = {
  system: "green",
  user: "blue",
  tool: "gold"
};
function tl({
  messages: e,
  locale: n
}) {
  const [t, s] = Xe(null), [l, o] = Xe(null), [r, c] = Xe(!1), h = /* @__PURE__ */ new Map();
  for (const u of e)
    h.set(u.role, (h.get(u.role) ?? 0) + 1);
  const g = t === null ? e.map((u, v) => v) : e.flatMap(
    (u, v) => u.role === t ? [v] : []
  ), i = !r && t === null && e.length > rn + 4 ? e.length - rn : 0, p = g.filter((u) => u >= i), y = (u, v, $) => /* @__PURE__ */ a.createElement(
    "span",
    {
      onClick: $,
      style: {
        display: "inline-flex",
        alignItems: "center",
        padding: "0 8px",
        borderRadius: 999,
        fontSize: 10,
        lineHeight: "18px",
        cursor: "pointer",
        userSelect: "none",
        border: `1px solid ${v ? "rgba(22,119,255,0.6)" : "rgba(128,128,128,0.35)"}`,
        background: v ? "rgba(22,119,255,0.10)" : "transparent",
        color: v ? "#1677ff" : "rgba(128,128,128,1)"
      }
    },
    u
  );
  return /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, y(
    `${d(n, "apiFilterAll")} ${e.length}`,
    t === null,
    () => s(null)
  ), [...h.entries()].map(
    ([u, v]) => y(
      `${u} ${v}`,
      t === u,
      () => s(t === u ? null : u)
    )
  )), i > 0 ? /* @__PURE__ */ a.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => c(!0)
    },
    `⋯ ${d(n, "apiShowEarlier")} (${i})`
  ) : null, r && t === null && i === 0 ? /* @__PURE__ */ a.createElement("a", { style: { fontSize: 11 }, onClick: () => c(!1) }, d(n, "apiCollapseEarlier")) : null, /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 4 } }, p.map((u) => {
    const v = e[u], $ = l === u;
    return /* @__PURE__ */ a.createElement(
      "div",
      {
        key: u,
        style: {
          borderRadius: 6,
          border: `1px solid ${$ ? "rgba(22,119,255,0.35)" : "rgba(128,128,128,0.18)"}`,
          padding: $ ? "4px 8px" : "2px 8px",
          background: $ ? "rgba(22,119,255,0.04)" : "transparent"
        }
      },
      /* @__PURE__ */ a.createElement(
        "div",
        {
          onClick: () => o($ ? null : u),
          style: {
            display: "flex",
            gap: 6,
            alignItems: "center",
            cursor: "pointer",
            minWidth: 0
          }
        },
        /* @__PURE__ */ a.createElement(
          ct,
          {
            color: el[v.role] ?? "purple",
            style: {
              marginInlineEnd: 0,
              fontSize: 10,
              lineHeight: "16px",
              flexShrink: 0
            }
          },
          v.role
        ),
        /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, "#", u + 1),
        v.toolCallId ? /* @__PURE__ */ a.createElement(D, { code: !0, style: { fontSize: 9, flexShrink: 0 } }, "…", v.toolCallId.slice(-8)) : null,
        /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, X(v.content.length), " ", d(n, "charUnit")),
        $ ? null : /* @__PURE__ */ a.createElement(
          D,
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
          v.content.split(`
`, 1)[0].slice(0, 120) || "—"
        )
      ),
      $ ? /* @__PURE__ */ a.createElement(
        "div",
        {
          style: {
            marginTop: 4,
            maxHeight: 260,
            overflowY: "auto"
          }
        },
        /* @__PURE__ */ a.createElement(Se, { value: v.content })
      ) : null
    );
  })));
}
function nl({
  message: e,
  locale: n
}) {
  const [t, s] = a.useState(!1), l = e.text ?? "";
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ a.createElement(D, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 11 } }, X(e.chars), " ", d(n, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), l.length > 200 ? /* @__PURE__ */ a.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => s((o) => !o)
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
    /* @__PURE__ */ a.createElement(Se, { value: l })
  ) : null);
}
const sl = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource"
}, ll = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast"
};
function ol({
  span: e,
  records: n,
  onJumpRecord: t,
  onClose: s
}) {
  const l = ie(), o = e.endKind ? d(l, ll[e.endKind]) : d(l, "spanOpen"), r = Is(e);
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
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(rt, { onClose: s }), /* @__PURE__ */ a.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ a.createElement(
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
    ), /* @__PURE__ */ a.createElement(D, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ a.createElement(
      ct,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      d(l, sl[e.trigger])
    )), /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(l, "spanStart"),
        value: _e(e.startT)
      }
    ), /* @__PURE__ */ a.createElement(T, { label: d(l, "spanEnd"), value: o }), e.endT !== null ? /* @__PURE__ */ a.createElement(T, { label: " ", value: _e(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(l, "spanLastActivity"),
        value: _e(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ a.createElement(
      T,
      {
        label: d(l, "spanDuration"),
        value: r === null ? "-" : de(r / 1e3)
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
    )), e.evidences.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ a.createElement(D, { strong: !0, style: { fontSize: 12 } }, d(l, "spanEvidence")), e.evidences.slice(0, 30).map((c, h) => /* @__PURE__ */ a.createElement(
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
        ct,
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
      /* @__PURE__ */ a.createElement(D, { type: "secondary", style: { fontSize: 11 } }, c.detail)
    ))) : /* @__PURE__ */ a.createElement(
      D,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      d(l, "spanNoActivity")
    ))
  );
}
const me = window.QwenPaw.host.React, il = me.useRef, rl = me.useState;
me.useCallback;
me.useMemo;
const al = me.useEffect, cl = me.useLayoutEffect, ul = me.useReducer;
me.createContext;
me.useContext;
me.createElement;
me.cloneElement;
me.isValidElement;
me.memo;
me.forwardRef;
me.Fragment;
me.StrictMode;
me.version;
function dl(e) {
  return e ? e() : void 0;
}
function pl(e, n, t) {
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
    if (!(i.length !== s.length || i.some((u, v) => s[v] !== u)))
      return l;
    s = i;
    let y = 0;
    if (h && (y = Date.now()), l = n(...i), h) {
      const u = Math.round((Date.now() - g) * 100) / 100, v = Math.round((Date.now() - y) * 100) / 100, $ = v / 16, j = (_, R) => {
        for (_ = String(_); _.length < R; )
          _ = " " + _;
        return _;
      };
      console.info(
        `%c⏱ ${j(v, 5)} /${j(u, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * $, 120)
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
function an(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const hl = (e, n) => Math.abs(e - n) < 1.01, fl = (e, n, t) => {
  let s;
  return function(...l) {
    e.clearTimeout(s), s = e.setTimeout(() => n.apply(this, l), t);
  };
};
let Ve;
const It = () => {
  if (Ve !== void 0) return Ve;
  if (typeof navigator > "u") return Ve = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Ve = !0;
  const e = navigator.maxTouchPoints;
  return Ve = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, cn = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, ml = (e) => e, gl = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - n + 1, l = new Array(s);
  for (let o = 0; o < s; o++)
    l[o] = n + o;
  return l;
}, yl = (e, n) => {
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
  if (l(cn(t)), !s.ResizeObserver)
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
      l(cn(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, ut = {
  passive: !0
}, El = typeof window > "u" ? !0 : "onscrollend" in window, Sl = (e, n, t) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && El;
  let r = 0;
  const c = o ? null : fl(
    l,
    () => n(r, !1),
    e.options.isScrollingResetDelay
  ), h = (p) => () => {
    r = t(s), c == null || c(), n(r, p);
  }, g = h(!0), i = h(!1);
  return s.addEventListener("scroll", g, ut), o && s.addEventListener("scrollend", i, ut), () => {
    s.removeEventListener("scroll", g), o && s.removeEventListener("scrollend", i);
  };
}, vl = (e, n) => Sl(e, n, (t) => {
  const { horizontal: s, isRtl: l } = e.options;
  return s ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), bl = (e, n, t) => {
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
}, xl = (e, {
  adjustments: n = 0,
  behavior: t
}, s) => {
  var l, o;
  (o = (l = s.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [s.options.horizontal ? "left" : "top"]: e + n,
    behavior: t
  });
}, kl = xl;
class wl {
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
        getItemKey: ml,
        rangeExtractor: gl,
        onChange: () => {
        },
        measureElement: bl,
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
        const y = r.count, u = o.count, v = this.getMeasurements(), $ = y > 0 ? ((s = v[0]) == null ? void 0 : s.key) ?? r.getItemKey(0) : null, j = y > 0 ? ((l = v[y - 1]) == null ? void 0 : l.key) ?? r.getItemKey(y - 1) : null;
        if (u !== y || y > 0 && u > 0 && (o.getItemKey(0) !== $ || o.getItemKey(u - 1) !== j)) {
          g = !0;
          const k = y > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? v[0] : null;
          k && (c = [k.key, this.getScrollOffset() - k.start]);
          const C = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          C && u > y && this.isAtEnd(r.scrollEndThreshold) && (y === 0 || o.getItemKey(u - 1) !== j) && (h = C);
        }
      }
      this.options = o, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let i = !1, p = 0;
      if (c && this.scrollOffset !== null) {
        const [y, u] = c, v = this.getMeasurements(), { count: $, getItemKey: j } = this.options;
        let _ = 0;
        for (; _ < $ && j(_) !== y; )
          _++;
        if (_ < $) {
          const R = v[_];
          if (R) {
            const k = Math.max(0, R.start + u);
            k !== this.scrollOffset && (p = k - this.scrollOffset, this.scrollOffset = k, i = !0);
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
            this._iosTouching = !1, !(!It() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            r,
            ut
          ), o.addEventListener(
            "touchend",
            c,
            ut
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
        o !== null && !c && (It() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? h !== 0 && (this._iosDeferredAdjustment += h) : this._scrollToOffset(this.getScrollOffset(), {
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
          for (const _ of this.laneAssignments.keys())
            _ >= t && this.laneAssignments.delete(_);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((_) => {
          this.itemSizeCache.set(_.key, _.size);
        }));
        const y = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), c === 1) {
          const _ = t * 2;
          let R = this._flatMeasurements;
          if (!R || R.length < _) {
            const P = new Float64Array(_);
            R && y > 0 && P.set(R.subarray(0, y * 2)), R = P, this._flatMeasurements = R;
          }
          let k;
          if (y === 0)
            k = s + l;
          else {
            const P = y - 1;
            k = R[P * 2] + R[P * 2 + 1] + g;
          }
          for (let P = y; P < t; P++) {
            const z = o(P), q = p.get(z), w = typeof q == "number" ? q : this.options.estimateSize(P);
            R[P * 2] = k, R[P * 2 + 1] = w, k += w + g;
          }
          const C = pl(t, R, o);
          return this.measurementsCache = C, C;
        }
        const u = this.measurementsCache.slice(0, y), v = new Array(c).fill(
          void 0
        ), $ = new Float64Array(c);
        let j = 0;
        for (let _ = 0; _ < y; _++) {
          const R = u[_];
          R && (v[R.lane] === void 0 && j++, v[R.lane] = _, $[R.lane] = R.end);
        }
        for (let _ = y; _ < t; _++) {
          const R = o(_), k = this.laneAssignments.get(_);
          let C, P;
          const z = h === "estimate" || p.has(R);
          if (k !== void 0 && this.options.lanes > 1) {
            C = k;
            const N = v[C], se = N !== void 0 ? u[N] : void 0;
            P = se ? se.end + g : s + l;
          } else if (j === c) {
            let N = 0, se = $[0], pe = v[0];
            for (let ue = 1; ue < c; ue++) {
              const re = $[ue];
              (re < se || re === se && v[ue] < pe) && (N = ue, se = re, pe = v[ue]);
            }
            C = N, P = se + g, z && this.laneAssignments.set(_, C);
          } else
            C = _ % this.options.lanes, P = s + l, z && this.laneAssignments.set(_, C);
          const q = p.get(R), w = typeof q == "number" ? q : this.options.estimateSize(_), K = P + w;
          u[_] = {
            index: _,
            start: P,
            size: w,
            end: K,
            key: R,
            lane: C
          }, v[C] === void 0 && j++, v[C] = _, $[C] = K;
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
      (t, s, l, o) => t.length === 0 || s === 0 ? (this.range = null, null) : (this.range = _l(
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
        const y = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, u = y ? this.getTotalSize() : 0, v = this.getScrollOffset() + this.scrollAdjustments, j = !this.itemSizeCache.has(h) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          c < v
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          c + i <= v && this.scrollDirection !== "backward"
        ), _ = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
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
        ) : j);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(h, s), this.itemSizeCacheVersion++;
        let R = !1;
        y ? R = this.applyScrollAdjustment(
          this.getTotalSize() - u
        ) : _ && (R = this.applyScrollAdjustment(p)), this.notify(R);
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
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, r = Vn(
        0,
        s.length - 1,
        o ? (c) => l[c * 2] : (c) => an(s[c]).start,
        t
      );
      return an(s[r]);
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
    return n === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", n), It() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += n, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    if (!r && hl(l, this.getScrollOffset())) {
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
const Vn = (e, n, t, s) => {
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
function Tl(e, n, t) {
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
function _l(e, n, t, s, l) {
  const o = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: o };
  if (s === 1 && l !== null) {
    const g = Tl(
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
  let c = Vn(0, o, (g) => e[g].start, t), h = c;
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
const Ct = typeof document < "u" ? cl : al;
function Il({
  useFlushSync: e = !0,
  directDomUpdates: n = !1,
  directDomUpdatesMode: t = "transform",
  ...s
}) {
  const l = ul((i) => i + 1, 0)[1], o = il({
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
    const y = !!i.options.horizontal, u = p.mode === "transform", v = y ? "left" : "top", $ = i.options.scrollMargin, j = i.getVirtualItems();
    for (const _ of j) {
      const R = _.start - $, k = i.elementsCache.get(_.key);
      k && p.lastPositions.get(k) !== R && (p.lastPositions.set(k, R), u ? k.style.transform = y ? `translate3d(${R}px, 0, 0)` : `translate3d(0, ${R}px, 0)` : k.style[v] = `${R}px`);
    }
  }, h = {
    ...s,
    onChange: (i, p) => {
      var y;
      const u = o.current;
      let v = !0;
      if (u.enabled) {
        c(i);
        const $ = i.range, j = u.prevRange;
        v = !j || j.isScrolling !== i.isScrolling || j.startIndex !== ($ == null ? void 0 : $.startIndex) || j.endIndex !== ($ == null ? void 0 : $.endIndex), v && (u.prevRange = $ ? {
          startIndex: $.startIndex,
          endIndex: $.endIndex,
          isScrolling: i.isScrolling
        } : null);
      }
      v && (e && p ? dl(l) : l()), (y = s.onChange) == null || y.call(s, i, p);
    }
  }, [g] = rl(() => {
    const i = new wl(h);
    return Object.assign(i, {
      containerRef: (p) => {
        const y = o.current;
        if (y.container = p, y.lastSize = null, p && y.enabled) {
          const u = i.getTotalSize();
          y.lastSize = u;
          const v = i.options.horizontal ? "width" : "height";
          p.style[v] = `${u}px`;
        }
      }
    });
  });
  return g.setOptions(h), Ct(() => g._didMount(), []), Ct(() => (r(g), g._willUpdate())), Ct(() => {
    c(g);
  }), g;
}
function Cl(e) {
  return Il({
    observeElementRect: yl,
    observeElementOffset: vl,
    scrollToFn: kl,
    ...e
  });
}
const ht = window.QwenPaw.host, M = ht.React, { useRef: Ml } = M, { Tag: je, Tooltip: $l } = ht.antd, { Text: ve } = ht.antd.Typography, {
  CaretRightOutlined: zl,
  CloseCircleOutlined: Al,
  FileTextOutlined: Ol,
  RobotOutlined: Rl,
  RocketOutlined: Ll,
  SafetyOutlined: Nl,
  SendOutlined: Pl,
  SettingOutlined: Dl,
  ToolOutlined: jl,
  UserOutlined: Bl
} = ht.antdIcons, Fl = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Hl = {
  user: /* @__PURE__ */ M.createElement(Bl, null),
  message: /* @__PURE__ */ M.createElement(Rl, null),
  tool: /* @__PURE__ */ M.createElement(jl, null),
  system: /* @__PURE__ */ M.createElement(Dl, null)
}, un = {
  approval: { color: "volcano", icon: /* @__PURE__ */ M.createElement(Nl, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ M.createElement(Pl, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ M.createElement(Ll, null) },
  header: { color: "green", icon: /* @__PURE__ */ M.createElement(Ol, null) },
  error: { color: "red", icon: /* @__PURE__ */ M.createElement(Al, null) }
}, Ul = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, dn = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, Wl = 150, Bt = 26, qn = 34, pn = 9, hn = 30;
function Kl(e) {
  const n = ie(), t = dn[e] ?? dn.unknown;
  return n === "zh-CN" ? t.zh : t.en;
}
const Vl = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function ql(e, n) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e.inboundParts ?? []) {
    const l = Vl[s.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([s, l]) => `${d(n, s)}×${l}`).join(" ");
}
function Gl(e, n) {
  const t = e.receipt, s = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${d(n, "replySent")}${s} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${d(n, "chars")}`;
}
function fn({
  record: e,
  selected: n,
  dimmed: t,
  multiRequest: s,
  onSelect: l,
  onOpenRun: o
}) {
  var i, p;
  const r = e.usage, c = r && (r.input_tokens || r.output_tokens) ? `${X(r.input_tokens)}→${X(
    r.output_tokens
  )}` : null, h = r && r.reasoning_tokens ? r.reasoning_tokens : null, g = r && c ? [
    `Input ${X(r.input_tokens)} tok`,
    r.cache_input_tokens ? `Cached ${X(r.cache_input_tokens)} tok` : null,
    r.cache_creation_input_tokens ? `Cache created ${X(
      r.cache_creation_input_tokens
    )} tok` : null,
    `Output ${X(r.output_tokens)} tok`,
    h ? `${d(ie(), "reasoningShort")} ${X(
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
        height: Bt,
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
      s && o ? /* @__PURE__ */ M.createElement(
        "span",
        {
          title: d(ie(), "runViewHint"),
          onClick: (y) => {
            y.stopPropagation(), o(e.runIndex);
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
      je,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((i = un[e.markerKind]) == null ? void 0 : i.color) || Fl[e.kind] || "default",
        icon: e.markerKind && ((p = un[e.markerKind]) == null ? void 0 : p.icon) || Hl[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? d(ie(), "skillLoadKind") : Bn(e, ie())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ M.createElement(
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
    e.inSkill ? /* @__PURE__ */ M.createElement(
      je,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${d(ie(), "skillBypass")}`,
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
      $l,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? d(ie(), "guidedBySlash") : d(ie(), "guidedByLoad")}`
      },
      /* @__PURE__ */ M.createElement(
        ve,
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
      e.receipt ? /* @__PURE__ */ M.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, Gl(e, ie())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(ve, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ M.createElement(ve, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ M.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, ` · ${d(ie(), "skillLoaded")} ${X(
        e.toolOutputChars
      )} ${d(ie(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(ve, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ M.createElement(ve, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ M.createElement(
        ve,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(
        ve,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, ` ${ql(e, ie()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ M.createElement(ve, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
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
      c ? /* @__PURE__ */ M.createElement("span", { title: g }, /* @__PURE__ */ M.createElement("span", { style: { color: "#1677ff" } }, c), h ? /* @__PURE__ */ M.createElement("span", { style: { color: "#722ed1" } }, ` · ${X(h)}`) : null) : null,
      c ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && de(e.timeSeconds)
    )
  );
}
function Xl({
  turn: e,
  collapsed: n,
  selected: t,
  cellCount: s,
  onToggle: l,
  onSelect: o,
  onSkillSpanOpen: r
}) {
  const c = ie();
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: qn }
    },
    /* @__PURE__ */ M.createElement(
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
      /* @__PURE__ */ M.createElement(
        zl,
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
      /* @__PURE__ */ M.createElement(ve, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ M.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, de(e.durationMs / 1e3)),
      /* @__PURE__ */ M.createElement(ve, { type: "secondary", style: { fontSize: 11 } }, s, " ", d(c, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ M.createElement(
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
          /* @__PURE__ */ M.createElement(
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
      /* @__PURE__ */ M.createElement(
        je,
        {
          color: Ul[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Kl(e.status)
      )
    )
  );
}
function Jl({
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
  emptyText: v,
  onSkillSpanOpen: $
}) {
  const j = ie(), _ = Ml(null), R = M.useMemo(
    () => e.filter((w) => w.turn !== null),
    [e]
  ), k = R.length > 1, C = M.useMemo(() => {
    var K;
    const w = [];
    i && w.push({
      key: "load-older",
      height: hn,
      type: "load-older"
    }), u && (w.push({
      key: "initial",
      height: Bt,
      type: "initial",
      record: u
    }), w.push({
      key: "initial-divider",
      height: pn,
      type: "divider"
    }));
    for (const N of R) {
      const se = N.turn;
      if (w.push({
        key: `turn-${se}`,
        height: qn,
        type: "boundary",
        turn: N
      }), !s.has(se))
        for (const pe of ((K = N.groups[0]) == null ? void 0 : K.cells) ?? [])
          g && pe.kind === "tool" || w.push({
            key: `rec-${pe.index}`,
            height: Bt,
            type: "record",
            record: pe
          });
    }
    return w;
  }, [
    R,
    s,
    g,
    i,
    u
  ]), P = M.useCallback(
    (w) => l !== null && !l.has(w.index) || o !== null && !o.has(w.index),
    [l, o]
  ), z = (w) => {
    var K;
    switch (w.type) {
      case "load-older":
        return /* @__PURE__ */ M.createElement("div", { style: { textAlign: "center", height: hn } }, /* @__PURE__ */ M.createElement(
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
          p ? "…" : `⋯ ${d(j, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ M.createElement(
          "div",
          {
            style: {
              height: pn,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const N = w.record;
        return /* @__PURE__ */ M.createElement(
          fn,
          {
            record: N,
            selected: n === N.index,
            dimmed: P(N),
            multiRequest: k,
            onSelect: () => r(N.index),
            onOpenRun: c
          }
        );
      }
      case "boundary": {
        const N = w.turn, se = N.turn;
        return /* @__PURE__ */ M.createElement(
          Xl,
          {
            turn: N,
            collapsed: s.has(se),
            selected: t === se,
            cellCount: ((K = N.groups[0]) == null ? void 0 : K.cells.length) ?? 0,
            onToggle: () => h(se),
            onSelect: () => c(se),
            onSkillSpanOpen: $ ? (pe, ue) => $(pe, ue) : void 0
          }
        );
      }
      case "record":
      default: {
        const N = w.record;
        return /* @__PURE__ */ M.createElement(
          fn,
          {
            record: N,
            selected: n === N.index,
            dimmed: P(N),
            multiRequest: k,
            onSelect: () => r(N.index),
            onOpenRun: c
          }
        );
      }
    }
  };
  if (C.length === 0)
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
        v ?? d(j, "noSessions")
      )
    );
  const q = C.length <= Wl ? /* @__PURE__ */ M.createElement("div", null, C.map((w) => z(w))) : /* @__PURE__ */ M.createElement(
    Ql,
    {
      rows: C,
      scrollRef: _,
      renderRow: z
    }
  );
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      ref: _,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    q
  );
}
function Ql({
  rows: e,
  scrollRef: n,
  renderRow: t
}) {
  const s = Cl({
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
function Mt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function mn(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (n) => typeof n == "number" && Number.isFinite(n)
  );
}
function Yl(e) {
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
function Zl(e) {
  if (!(typeof e != "string" || !e))
    try {
      const n = JSON.parse(e);
      if (typeof n.skill == "string" && n.skill)
        return n.skill;
    } catch {
    }
}
function Gn(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function eo(e) {
  if (typeof e.name == "string" && e.name) return e.name;
  const n = e.function;
  if (n && typeof n == "object" && typeof n.name == "string")
    return n.name;
}
function to(e) {
  const n = [];
  for (const t of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const s = t[1].match(/<name>([^<]+)<\/name>/), l = t[1].match(/<dir>([^<]+)<\/dir>/);
    s && l && l[1].trim() && n.push([Gn(l[1].trim()), s[1].trim()]);
  }
  return n.sort((t, s) => s[0].length - t[0].length), n;
}
function gn(e) {
  const n = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return n ? n[1].trim() : null;
}
function Ce(e, n = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function no(e) {
  var he, Te;
  const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), c = [];
  let h = "";
  const g = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  let u = [];
  const v = /* @__PURE__ */ new Set(), $ = [], j = new Ts(), _ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let C = [], P = [], z = 0, q = 0;
  const w = (f) => f.groups[0].cells, K = (f, m) => {
    const S = r.get(f);
    S ? S.push(m) : r.set(f, [m]);
  }, N = (f, m) => {
    if (!f)
      if (h)
        f = h;
      else {
        c.push(m);
        return;
      }
    const S = t.get(f);
    if (S)
      m.runIndex = S.turn ?? 0, w(S).push(m);
    else if (h) {
      const I = t.get(h);
      I ? (m.runIndex = I.turn ?? 0, w(I).push(m)) : K(f, m);
    } else
      K(f, m);
  }, se = (f, m) => {
    const S = r.get(m);
    if (S) {
      for (const I of S) w(f).push(I);
      r.delete(m);
    }
  };
  for (const f of e) {
    const m = Mt(f);
    switch (f.type) {
      case "run/start": {
        q += 1, $.length = 0, g.set(
          f.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const S = {
          turn: q,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${q}`, cells: [] }]
        };
        t.set(f.run_id, S), n.push(S), h = f.run_id, se(S, f.run_id);
        for (const Q of c.splice(0))
          Q.runIndex = q, w(S).push(Q);
        const I = Array.isArray(m.messages) ? m.messages : [], x = String(m.query ?? "");
        let A = typeof m.slash_skill == "string" && m.slash_skill ? m.slash_skill : gn(x);
        !A && I.length > 0 && (A = gn(String(((he = I[0]) == null ? void 0 : he.text) ?? ""))), A && (v.add(A), $.push([A, "slash"]), j.onRunStart(), j.onSlashSkill(
          A,
          f.seq,
          ge(f.t) ?? 0
        ), _.set(`${A}#${f.seq}`, S));
        const J = {
          index: ++z,
          runIndex: q,
          runId: f.run_id,
          kind: "user",
          text: Ce(x) || Ce((Te = I.at(-1)) == null ? void 0 : Te.text),
          messages: I,
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: A ?? void 0,
          model: void 0
        };
        i.set(f.run_id, J), w(S).push(J);
        break;
      }
      case "run/end": {
        const S = t.get(f.run_id);
        h === f.run_id && (h = ""), $.length = 0, j.onRunEnd(f.seq, ge(f.t) ?? 0), g.delete(f.run_id), i.delete(f.run_id);
        const I = String(m.status ?? "unknown");
        if (S && (S.status = I, S.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), I === "error" && m.error) {
          const x = S ?? {
            turn: null,
            status: I,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || n.push(x), x.groups[0].cells.push({
            index: ++z,
            runIndex: q,
            runId: f.run_id,
            kind: "system",
            markerKind: "error",
            text: Ce(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: ge(f.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [f]
          });
        }
        break;
      }
      case "agent/spawn": {
        const S = typeof m.child_session_id == "string" ? m.child_session_id : void 0, I = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        N(f.run_id, {
          index: ++z,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${I} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: I,
          raw: [f]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(m.parts) ? m.parts : [], I = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, x = S.map((F) => ({
          type: String(F.type ?? "?"),
          text: typeof F.text == "string" ? F.text : void 0
        })), A = g.get(f.run_id) ?? "", J = I && typeof I.user_id == "string" && I.user_id ? I.user_id : void 0, Q = Ce(
          x.map((F) => F.text ?? "").filter(Boolean).join(`
`)
        ), V = i.get(f.run_id);
        V && !V.inboundParts ? (V.inboundParts = x, V.channel = A || void 0, V.userId = J, V.raw = [
          ...V.raw ?? [],
          f
        ], V.text || (V.text = Q)) : N(f.run_id, {
          index: ++z,
          runIndex: 0,
          runId: f.run_id,
          kind: "user",
          text: Q || "📥",
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          channel: A || void 0,
          userId: J,
          inboundParts: x,
          raw: [f]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof m.text == "string" ? m.text : "";
        N(f.run_id, {
          index: ++z,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: S || void 0,
          receipt: {
            channel: g.get(f.run_id) || void 0,
            chars: S.length
          },
          raw: [f]
        });
        break;
      }
      case "approval/asked": {
        N(f.run_id, {
          index: ++z,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(m.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [f]
        });
        break;
      }
      case "approval/decided": {
        const S = String(m.decision ?? "?"), I = m.tool_name ? String(m.tool_name) : "";
        N(f.run_id, {
          index: ++z,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "approval",
          text: I ? `${I} → ${S}` : S,
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [f]
        });
        break;
      }
      case "llm/header": {
        const S = typeof m.sha256 == "string" ? m.sha256 : "", I = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, x = m.reason === "changed" ? "changed" : "initial", A = typeof m.system_prompt == "string" ? m.system_prompt : "", J = Array.isArray(m.tools) ? m.tools : [], Q = Array.isArray(m.schemas) ? m.schemas : void 0;
        if (N(f.run_id, {
          index: ++z,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "header",
          text: x === "initial" ? `⚙ ${A ? `System Prompt (${A.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: A,
          prevPrompt: p.get(I ?? ""),
          headerTools: J,
          headerReason: x,
          sha: S,
          prevSha: I,
          schemas: Q,
          raw: [f]
        }), S && p.set(S, A), Array.isArray(Q)) {
          y.clear();
          for (const V of Q) {
            const F = eo(V);
            F && y.set(F, V);
          }
        }
        A && (u = to(A));
        break;
      }
      case "llm/call": {
        const S = Mt(f), I = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, x = S.messages_meta, A = x && typeof x == "object" ? {
          count: typeof x.count == "number" ? x.count : 0,
          totalChars: typeof x.total_chars == "number" ? x.total_chars : 0,
          charsByRole: mn(x.chars_by_role) ? x.chars_by_role : {},
          countByRole: mn(x.count_by_role) ? x.count_by_role : {},
          maxToolChars: typeof x.max_tool_chars == "number" ? x.max_tool_chars : 0
        } : void 0, J = Yl(S.messages_new);
        let Q;
        if (S.context_reset === !0) {
          const ne = (J ?? []).map(
            (fe) => ({
              role: fe.role,
              chars: fe.chars,
              text: fe.text
            })
          );
          let le;
          C.length > 0 || ne.length === 0 ? le = C : le = P.map((fe) => ({
            role: fe.role,
            text: fe.text
          })), Q = Os(le, ne), A && (Q.afterChars = A.totalChars);
        }
        if (J) {
          const ne = J.map((le) => ({
            role: le.role,
            chars: le.chars,
            text: le.text
          }));
          S.context_reset === !0 ? C = ne : S.tail_update === !0 ? C = [...C.slice(0, -1), ...ne] : typeof S.messages_count == "number" && J.length >= S.messages_count && C.length > 0 ? C = ne : C = [...C, ...ne];
        }
        P = Array.isArray(S.messages) ? S.messages.map((ne) => ({
          role: ne.role,
          text: ne.text
        })) : [];
        const V = {
          index: ++z,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: A,
          inputNew: J,
          contextReset: S.context_reset === !0,
          resetDetail: Q,
          options: I
        };
        N(f.run_id, V);
        const F = s.get(f.run_id) ?? [];
        F.push({ cell: V, callData: S, call: f }), s.set(f.run_id, F);
        break;
      }
      case "llm/api_request": {
        const S = s.get(f.run_id), I = S && S.length > 0 ? S[S.length - 1].cell : l.get(f.run_id);
        if (I) {
          const x = Array.isArray(m.messages) ? m.messages : [];
          I.apiPayload = {
            model: String(m.model ?? "unknown"),
            messages: x.map((A) => ({
              role: String(A.role ?? "?"),
              // Provider formatters may leave the block array as a
              // JSON string — decode it into readable text.
              content: Rs(
                typeof A.content == "string" ? A.content : JSON.stringify(A.content ?? "")
              ),
              toolCallId: typeof A.tool_call_id == "string" ? A.tool_call_id : void 0
            })),
            params: m.params && typeof m.params == "object" ? m.params : void 0,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : void 0
          }, I.raw = [
            ...I.raw ?? [],
            f
          ];
        }
        break;
      }
      case "llm/api_response": {
        const S = l.get(f.run_id);
        S && S.apiPayload && (m.usage && typeof m.usage == "object" && (S.apiPayload.usage = m.usage), typeof m.duration_ms == "number" && (S.apiPayload.durationMs = m.duration_ms));
        break;
      }
      case "llm/result": {
        const S = s.get(f.run_id), I = S == null ? void 0 : S.shift(), x = (I == null ? void 0 : I.callData) ?? {}, A = typeof m.duration_ms == "number" ? m.duration_ms : null, J = m.usage ?? void 0, Q = m.timing, V = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, le = {
          text: (m.error ? Ce(String(m.error)) : Ce(String(m.text ?? ""))) || (V && V.length > 0 ? `🛠 ${V.map((fe) => fe.name).join(", ")}` : ""),
          timeSeconds: A === null ? null : A / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: J,
          timing: Q,
          toolCalls: V,
          note: m.note ? String(m.note) : void 0
        };
        I ? (Object.assign(I.cell, le), l.set(f.run_id, I.cell), I.cell.model = String(
          m.model ?? x.model ?? I.cell.model
        ), I.cell.raw = [
          ...I.call ? [I.call] : [],
          f
        ]) : N(f.run_id, {
          index: ++z,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          startedAt: ge(f.t) ?? 0,
          model: String(m.model ?? x.model ?? "unknown"),
          ...le
        });
        break;
      }
      case "tool/call": {
        const S = Mt(f), I = String(S.name ?? "?"), x = I === "Skill" ? Zl(S.input) : void 0;
        if (x) {
          v.add(x), $.push([x, "load"]);
          const ae = j.onSkillLoad(
            x,
            f.seq,
            ge(f.t) ?? 0
          ), be = t.get(f.run_id);
          be && _.set(ae, be);
        }
        const A = S.input ? String(S.input) : void 0;
        let J;
        if (!x && A) {
          const ae = typeof S.skill_resource == "string" ? S.skill_resource : void 0;
          ae && (J = ae);
        }
        if (!x && !J && A && u.length > 0) {
          const ae = Gn(A);
          for (const [be, Re] of u)
            if (ae.includes(be)) {
              J = Re;
              break;
            }
        }
        let Q, V;
        if (!x && !J && A && R.size > 0) {
          const ae = $s(A, R);
          ae && (Q = ae.skill, V = ae.feature);
        }
        let F, ne;
        if (!x && !J && !Q && $.length > 0) {
          const [ae, be] = $[$.length - 1];
          F = ae, ne = be;
        }
        const le = j.onToolCall({
          attribution: J ? { skill: J, kind: "path", detail: "skill dir in input" } : Q ? {
            skill: Q,
            kind: "content",
            detail: `“${V}” in input (skill doc)`
          } : F ? {
            skill: F,
            kind: "temporal",
            detail: ne === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: z + 1,
          seq: f.seq,
          t: ge(f.t) ?? 0
        });
        if (le && !_.has(le)) {
          const ae = t.get(f.run_id);
          ae && _.set(le, ae);
        }
        const fe = {
          index: ++z,
          runIndex: 0,
          runId: f.run_id,
          kind: "tool",
          text: x ? `📚 ${x}` : `${I}(${Ce(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: ge(f.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: I,
          skillName: x,
          inSkill: J,
          inSkillLoaded: J ? v.has(J) : void 0,
          guidedSkill: F ?? Q,
          guidedReason: ne ?? (Q ? "load" : void 0),
          skillSpanId: le ?? void 0,
          toolInput: S.input ? String(S.input) : void 0,
          toolSchema: y.get(I)
        };
        N(f.run_id, fe);
        const Ie = o.get(f.run_id) ?? [];
        Ie.push({ cell: fe, callData: S, call: f }), o.set(f.run_id, Ie);
        break;
      }
      case "tool/result": {
        const S = o.get(f.run_id), I = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let x;
        if (S) {
          const ne = I ? S.findIndex(
            (le) => le.callData.tool_call_id === I
          ) : -1;
          ne >= 0 ? x = S.splice(ne, 1)[0] : x = S.shift();
        }
        const A = typeof m.duration_ms == "number" ? m.duration_ms : null, J = m.ok !== !1 && !m.error, Q = m.output ? String(m.output) : void 0, V = Q ? ` → ${Ce(Q, 60)}` : "", F = {
          timeSeconds: A === null ? null : A / 1e3,
          isError: !J,
          running: !1,
          toolOutput: Q,
          toolOutputChars: typeof m.output_chars == "number" ? m.output_chars : void 0,
          toolOutputBytes: typeof m.output_bytes == "number" ? m.output_bytes : void 0,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        if (x) {
          if (Object.assign(x.cell, F), !x.cell.skillName)
            x.cell.text = `${x.cell.text}${V}`;
          else if (Q) {
            const ne = typeof m.skill_sha == "string" ? m.skill_sha : null;
            ne && k.get(x.cell.skillName) === ne || (R.set(
              x.cell.skillName,
              Ms(Q)
            ), ne && k.set(x.cell.skillName, ne));
          }
          x.cell.raw = [
            ...x.call ? [x.call] : [],
            f
          ];
        } else
          N(f.run_id, {
            index: ++z,
            runIndex: 0,
            runId: f.run_id,
            kind: "tool",
            text: `?${V}`,
            startedAt: ge(f.t) ?? 0,
            ...F
          });
        break;
      }
    }
  }
  for (const [f, m] of r) {
    const S = t.get(f);
    if (S) {
      for (const I of m) w(S).push(I);
      r.delete(f);
    }
  }
  for (const f of n) {
    const m = [];
    for (const S of f.groups)
      for (const I of S.cells)
        I.skillName && !m.includes(I.skillName) && m.push(I.skillName);
    m.length > 0 && (f.skillsUsed = m);
  }
  const pe = j.spans(), ue = new Set(pe.map((f) => f.skill)).size, re = /* @__PURE__ */ new Map();
  for (const f of n)
    for (const m of f.groups)
      for (const S of m.cells) re.set(S.index, S);
  for (const f of pe) {
    const m = _.get(f.id);
    m && (m.skillSpans ?? (m.skillSpans = [])).push(f);
    for (const S of f.attributedIndexes) {
      const I = re.get(S);
      I && (I.skillSpanId = f.id, I.skillSpanHue = ue > 1 ? f.colorHue : void 0, I.skillSpanBypass = f.bypass);
    }
  }
  return n;
}
function yn(e) {
  return e.flatMap((n) => n.groups.flatMap((t) => t.cells));
}
function so(e) {
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
const Ee = {
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
}, En = "agent-trace-timeline-styles", lo = `
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
let $t = !1;
function oo() {
  if ($t || typeof document > "u") return;
  if (document.getElementById(En)) {
    $t = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = En, e.textContent = lo, document.head.appendChild(e), $t = !0;
}
function zt(e) {
  return Ls(e);
}
function Xn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Sn(e) {
  return e != null && Number.isFinite(e);
}
function Jn(e) {
  if (!Sn(e.startedAt)) return null;
  const n = Sn(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + n };
}
function Qn(e, n = "sequence") {
  if (n !== "sequence")
    return io(
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
          lane: Xn(r.kind)
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
function io(e, n, t) {
  const s = e.flatMap((i) => {
    const p = i.groups.flatMap(
      (y) => y.cells.flatMap((u) => {
        const v = Jn(u);
        return v === null ? [] : [
          {
            ...v,
            index: u.index,
            isError: u.isError === !0,
            kind: u.kind,
            label: u.text,
            lane: Xn(u.kind)
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
function ro(e, n = "sequence") {
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
        const y = p.attributedIndexes.map(($) => c.get($)).filter(($) => $ !== void 0);
        let u = y.length ? Math.min(...y) : void 0;
        if (u === void 0) {
          const $ = i.groups.flatMap((j) => j.cells).find(
            (j) => j.kind !== "system" && j.skillName === p.skill
          );
          u = $ ? c.get($.index) : void 0;
        }
        if (u === void 0) continue;
        const v = y.length ? Math.max(...y) : u;
        g.push(vn(p, u, v + 1));
      }
    return g;
  }
  const s = e.flatMap(
    (c) => c.groups.flatMap(
      (h) => h.cells.flatMap((g) => {
        const i = Jn(g);
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
      const g = h.startT, i = Math.max(_s(h), g + 1), p = o(g), y = o(i);
      r.push(
        vn(
          h,
          g - p,
          Math.max(g - p + 1, i - y)
        )
      );
    }
  return r;
}
function vn(e, n, t) {
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
function ao(e, n, t = "sequence") {
  const s = Qn(e, t);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= n.end && l.end >= n.start).map((l) => l.index)
  );
}
oo();
const dt = window.QwenPaw.host, G = dt.React, { useEffect: tt, useMemo: At, useRef: nt, useState: ze } = G, { Tooltip: Yn } = dt.antd, Ot = 3, co = 4, uo = 0.08, po = 0.025, ho = 32, fo = 0.5;
function mo(e) {
  const n = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, o = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...n === void 0 ? {} : { durationMs: n },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function go(e) {
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
function yo(e, n) {
  const t = go(e);
  if (n === void 0) return t;
  const s = n.durationMs === void 0 ? null : `Total ${zt(n.durationMs)}`, l = n.startedAt === void 0 ? null : n.durationMs === void 0 ? `Started ${_e(n.startedAt)}` : `${_e(n.startedAt)} → ${_e(
    n.startedAt + n.durationMs
  )}`, o = n.ttftMs === void 0 || n.decodingMs === void 0 ? null : `TTFT ${zt(
    n.ttftMs
  )} · Decoding ${zt(n.decodingMs)}`, r = [s, o].filter((c) => c !== null).join(" · ");
  return [t, l, r].filter((c) => c !== null && c !== "").join(`
`);
}
function Ft(e, n) {
  return e <= n ? { start: e, end: n } : { start: n, end: e };
}
function Rt(e) {
  return Math.min(1, Math.max(0, e));
}
function Eo(e, n, t, s) {
  const l = Math.min(s - t, Math.max(0, n)), o = Math.min(
    Math.max(e - l / 2, t),
    s - l
  );
  return { start: o, end: o + l };
}
function bn(e, n, t, s, l) {
  const o = Ft(
    Math.min(l, Math.max(s, e.start)),
    Math.min(l, Math.max(s, e.end))
  );
  return {
    start: (o.start - n) / t,
    end: (o.end - n) / t
  };
}
function Zn({
  label: e,
  placement: n,
  children: t,
  ...s
}) {
  return /* @__PURE__ */ G.createElement(
    Yn,
    {
      title: /* @__PURE__ */ G.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: fo,
      ...s
    },
    t
  );
}
function xn() {
  return /* @__PURE__ */ G.createElement("div", { className: Ee.labels, "aria-hidden": "true" }, /* @__PURE__ */ G.createElement("span", null, "Input"), /* @__PURE__ */ G.createElement("span", null, "Model"), /* @__PURE__ */ G.createElement("span", null, "Tools"));
}
function kn({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ G.createElement(
    Zn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ G.createElement(
      "button",
      {
        type: "button",
        className: Ee.earlierHistory,
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
const So = G.memo(function({
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
  const y = typeof dt.useTheme == "function" ? dt.useTheme() : void 0, u = At(
    () => Qn(n, t),
    [t, n]
  ), v = At(
    () => ro(n, t),
    [t, n]
  ), $ = At(
    () => new Map(
      n.flatMap(
        (E) => E.groups.flatMap(
          (H) => H.cells.map(
            (Z) => [Z.index, mo(Z)]
          )
        )
      )
    ),
    [n]
  ), j = nt(null), _ = nt(null), R = nt(null), k = nt(null), [C, P] = ze(null), [z, q] = ze(null), [w, K] = ze(null), [N, se] = ze(!1), [pe, ue] = ze(!1), [re, he] = ze(null), [Te, f] = ze(!1);
  tt(() => {
    u !== null && s !== null && (s.end < u.start || s.start > u.end) && h(null);
  }, [u, h, s]), tt(() => {
    u !== null && (f(!1), he(
      (E) => E !== null && (E.end < u.start || E.start > u.end) ? null : E
    ));
  }, [u]), tt(() => {
    if (u === null || r === null) return;
    const E = u.spans.find(
      (H) => H.index === r
    );
    E !== void 0 && (f(!0), he((H) => {
      if (H === null || E.end > H.start && E.start < H.end)
        return H;
      const Z = Math.max(1, H.end - H.start), b = E.end <= H.start ? E.start : E.end - Z, L = Math.min(
        Math.max(b, u.start),
        Math.max(u.start, u.end - Z)
      );
      return L === H.start ? H : { start: L, end: L + Z };
    }));
  }, [u, r]);
  const m = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), S = Math.min(
    m,
    Math.max(1, ((re == null ? void 0 : re.end) ?? 0) - ((re == null ? void 0 : re.start) ?? 0))
  ), I = u === null || re === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(re.start, u.start),
    u.end - S
  ), x = re === null ? m : S, A = re === null ? (u == null ? void 0 : u.start) ?? 0 : I, J = l && u !== null && A === u.start, Q = o === void 0 || N ? void 0 : () => {
    se(!0), o().finally(() => {
      se(!1);
    });
  }, V = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(A - u.start) / x * 100}%`,
    "--trajectory-domain-width": `${m / x * 100}%`
  }, F = u === null || s === null ? null : bn(
    s,
    A,
    x,
    u.start,
    u.end
  ), le = (u === null || C === null ? null : bn(
    C,
    A,
    x,
    u.start,
    u.end
  )) ?? F, fe = C ?? s;
  if (tt(() => {
    const E = R.current;
    if (E === null) return;
    const H = (Z) => {
      Z.preventDefault();
      const b = k.current;
      if (b === null || u === null) return;
      f(!1);
      const L = b.getBoundingClientRect(), O = Rt(
        (Z.clientX - L.left) / Math.max(1, L.width)
      ), Y = Math.min(
        m,
        Math.max(
          Math.min(
            t === "sequence" ? co : 20,
            m
          ),
          x * Math.exp(Z.deltaY * 15e-4)
        )
      );
      if (Y >= m * 0.999) {
        he(null);
        return;
      }
      const ee = A + O * x, ce = Math.min(
        Math.max(ee - O * Y, u.start),
        u.end - Y
      );
      he({ start: ce, end: ce + Y });
    };
    return E.addEventListener("wheel", H, { passive: !1 }), () => {
      E.removeEventListener("wheel", H);
    };
  }, [x, A, m, t, u]), u === null)
    return /* @__PURE__ */ G.createElement(
      "section",
      {
        ref: R,
        className: Ee.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ G.createElement("div", { className: Ee.plot }, /* @__PURE__ */ G.createElement(xn, null), /* @__PURE__ */ G.createElement("div", { className: Ee.track }, /* @__PURE__ */ G.createElement("span", { className: Ee.empty }, "No timing data"), l && /* @__PURE__ */ G.createElement(
        kn,
        {
          loading: N,
          onHover: () => {
            q(null);
          },
          onLoad: Q
        }
      )))
    );
  const Ie = Math.min(
    x,
    m / u.spans.length
  ), ae = (E) => {
    const H = E.currentTarget.getBoundingClientRect();
    return Rt((E.clientX - H.left) / Math.max(1, H.width));
  }, be = (E) => {
    var L;
    const H = E.target instanceof HTMLElement ? E.target : null, Z = (L = H == null ? void 0 : H.closest("[data-timeline-record-index]")) == null ? void 0 : L.dataset.timelineRecordIndex;
    if (Z === void 0) return null;
    const b = Number(Z);
    return Number.isFinite(b) ? b : null;
  }, Re = (E) => {
    h(E);
  }, Qe = (E) => {
    if (E.button === 2) {
      _.current = {
        anchorClientX: E.clientX,
        anchorStart: A,
        moved: !1,
        pannable: re !== null,
        pointerId: E.pointerId
      }, re !== null && f(!1), ue(!0), typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId);
      return;
    }
    if (E.button !== 0) return;
    const H = ae(E), Z = A + H * x, b = be(E);
    q({ fraction: H, recordIndex: b }), j.current = {
      pointerId: E.pointerId,
      anchorTime: Z,
      anchorClientX: E.clientX,
      recordIndex: b
    }, typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId), P({ start: Z, end: Z });
  }, Ye = (E) => {
    const H = E.currentTarget.getBoundingClientRect(), Z = ae(E);
    q({ fraction: Z, recordIndex: be(E) });
    const b = _.current;
    if (b !== null && b.pointerId === E.pointerId) {
      if (Math.abs(E.clientX - b.anchorClientX) >= Ot && (b.moved = !0), !b.pannable) return;
      const ee = (E.clientX - b.anchorClientX) / Math.max(1, H.width), ce = Math.min(
        Math.max(b.anchorStart - ee * x, u.start),
        u.end - x
      );
      he({ start: ce, end: ce + x });
      return;
    }
    const L = j.current;
    if (L === null || L.pointerId !== E.pointerId) return;
    let O = A;
    if (re !== null) {
      const ee = E.clientX - H.left, ce = Math.min(
        ho,
        Math.max(1, H.width * uo)
      ), te = ee < ce ? -1 : ee > H.width - ce ? 1 : 0;
      if (te !== 0) {
        const Le = te < 0 ? ce - ee : ee - (H.width - ce), ke = Rt(Le / ce), we = A + te * x * po * Math.max(0.2, ke);
        O = Math.min(
          Math.max(we, u.start),
          u.end - x
        ), O !== A && (f(!1), he({
          start: O,
          end: O + x
        }));
      }
    }
    const Y = O + Z * x;
    P(Ft(L.anchorTime, Y));
  }, mt = (E) => {
    const H = _.current;
    if (H !== null && H.pointerId === E.pointerId) {
      const te = H.moved || Math.abs(E.clientX - H.anchorClientX) >= Ot;
      _.current = null, ue(!1), te || h(null);
      return;
    }
    const Z = j.current;
    if (Z === null || Z.pointerId !== E.pointerId) return;
    const b = ae(E), L = A + b * x, O = Ft(Z.anchorTime, L);
    q({ fraction: b, recordIndex: be(E) }), j.current = null, P(null);
    const Y = Math.abs(E.clientX - Z.anchorClientX) < Ot, ee = Y && Z.recordIndex !== null ? u.spans.find((te) => te.index === Z.recordIndex) : void 0;
    if (ee !== void 0) {
      h(null), g == null || g(ee.index);
      return;
    }
    const ce = O.end - O.start < Ie ? Eo(
      Y ? O.start : (O.start + O.end) / 2,
      Ie,
      u.start,
      u.end
    ) : O;
    if (Re(ce), Y) {
      const te = O.start, Le = u.spans.reduce((ke, we) => {
        const Ze = te < ke.start ? ke.start - te : te > ke.end ? te - ke.end : 0;
        return (te < we.start ? we.start - te : te > we.end ? te - we.end : 0) < Ze ? we : ke;
      });
      i == null || i(Le.index);
    }
  }, gt = (E) => {
    E.key !== "Escape" || s === null || (E.preventDefault(), h(null));
  }, yt = () => {
    j.current = null, _.current = null, P(null), q(null), ue(!1);
  };
  return /* @__PURE__ */ G.createElement(
    "section",
    {
      ref: R,
      className: Ee.root,
      "data-theme": y || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ G.createElement("div", { className: Ee.plot }, /* @__PURE__ */ G.createElement(xn, null), /* @__PURE__ */ G.createElement(
      "div",
      {
        ref: k,
        className: Ee.track,
        "data-panning": pe || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: gt,
        onPointerDown: Qe,
        onPointerMove: Ye,
        onPointerUp: mt,
        onPointerCancel: yt,
        onPointerLeave: () => {
          j.current === null && _.current === null && q(null);
        },
        onDoubleClick: (E) => {
          E.preventDefault(), h(null);
        },
        onContextMenu: (E) => {
          E.preventDefault();
        }
      },
      J && /* @__PURE__ */ G.createElement(
        kn,
        {
          loading: N,
          onHover: () => {
            q(null);
          },
          onLoad: Q
        }
      ),
      z !== null && z.recordIndex === null && C === null && /* @__PURE__ */ G.createElement(
        "div",
        {
          className: Ee.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${z.fraction * 100}%`
          }
        }
      ),
      le !== null && /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(
        "div",
        {
          className: Ee.selection,
          "data-dragging": C === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${le.start * 100}%`,
            "--trajectory-selection-width": `${(le.end - le.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ G.createElement(
        "div",
        {
          className: Ee.selectionEdges,
          "data-dragging": C === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${le.start * 100}%`,
            "--trajectory-selection-width": `${(le.end - le.start) * 100}%`
          }
        }
      )),
      v !== null && u !== null && /* @__PURE__ */ G.createElement(
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
        v.map((E) => {
          const H = (E.start - u.start) / m, Z = Math.max(
            (E.end - E.start) / m,
            4e-3
          ), b = ie(), L = `${E.bypass ? "⚠ " : ""}${E.skill} · ${E.trigger}${E.open ? ` · ${d(b, "spanOpen")}` : ""}`, O = w === E.spanId, Y = Z > 0.14 && !E.bypass;
          return /* @__PURE__ */ G.createElement(Yn, { title: L, key: E.spanId }, /* @__PURE__ */ G.createElement(
            "span",
            {
              onPointerDown: (ee) => {
                ee.stopPropagation();
              },
              onClick: p ? (ee) => {
                ee.stopPropagation(), p(E.spanId);
              } : void 0,
              onMouseEnter: () => K(E.spanId),
              onMouseLeave: () => K(
                (ee) => ee === E.spanId ? null : ee
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, H) * 100}%`,
                width: `${Z * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${E.hue}, 65%, ${O ? 62 : 55}%, ${O ? 0.85 : 0.55})`,
                border: E.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${E.hue}, 55%, 45%, 0.8)`,
                pointerEvents: p ? "auto" : "none",
                cursor: p ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            Y ? /* @__PURE__ */ G.createElement(
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
              E.skill
            ) : null
          ));
        })
      ),
      /* @__PURE__ */ G.createElement(
        "div",
        {
          className: Ee.turnBoundaries,
          "data-animate-viewport": Te || void 0,
          "aria-hidden": "true",
          style: V
        },
        u.turnBoundaries.filter(
          (E) => E.time > u.start && E.time >= A && E.time <= A + x
        ).map((E) => /* @__PURE__ */ G.createElement(
          "span",
          {
            className: Ee.turnBoundary,
            "data-turn": E.turn,
            key: E.turn,
            style: {
              "--trajectory-turn-left": `${(E.time - u.start) / m * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ G.createElement(
        "div",
        {
          className: Ee.lanes,
          "data-animate-viewport": Te || void 0,
          "data-timeline-domain": !0,
          style: V
        },
        u.spans.filter(
          (E) => E.index === r || E.end >= A && E.start <= A + x
        ).map((E) => {
          const H = (E.start - u.start) / m, b = (E.end - E.start) / m * 100, L = $.get(E.index), O = L == null ? void 0 : L.ttftMs, Y = L == null ? void 0 : L.decodingMs, ee = O === void 0 || Y === void 0 || O + Y <= 0 ? null : O / (O + Y);
          return /* @__PURE__ */ G.createElement(
            Zn,
            {
              key: E.index,
              label: yo(E.kind, L),
              placement: "bottom"
            },
            /* @__PURE__ */ G.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: Ee.span,
                "data-timeline-span": E.kind,
                "data-timeline-record-index": E.index,
                "data-assistant-timing": ee === null ? void 0 : "true",
                "data-error": E.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": E.index === r || void 0,
                "data-hovered": (z == null ? void 0 : z.recordIndex) === E.index || void 0,
                "data-search-match": c === null ? void 0 : c.has(E.index) ? "true" : "false",
                "data-selected": fe === null ? void 0 : E.start <= fe.end && E.end >= fe.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${H * 100}%`,
                  "--trajectory-span-width": `${b}%`,
                  "--trajectory-span-gap": `min(${b * 0.08}%, 1px)`,
                  "--trajectory-span-lane": E.lane,
                  ...ee === null ? {} : {
                    "--trajectory-assistant-ttft": `${ee * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), Wt = window.QwenPaw.host, oe = Wt.React, { Button: vo, Input: bo, Popover: xo, Segmented: ko, Tooltip: wn } = Wt.antd, {
  MenuFoldOutlined: wo,
  MenuUnfoldOutlined: To,
  QuestionCircleOutlined: _o,
  ReloadOutlined: Io,
  SearchOutlined: Co
} = Wt.antdIcons;
function Mo({
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
  return /* @__PURE__ */ oe.createElement(
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
    /* @__PURE__ */ oe.createElement(wn, { title: d(p, "projectionHint") }, /* @__PURE__ */ oe.createElement(
      ko,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (y) => n(y)
      }
    )),
    /* @__PURE__ */ oe.createElement(
      bo,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ oe.createElement(Co, null),
        placeholder: d(p, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (y) => s(y.target.value)
      }
    ),
    c && /* @__PURE__ */ oe.createElement(
      wn,
      {
        title: r ? d(p, "expandAll") : d(p, "collapseAll")
      },
      /* @__PURE__ */ oe.createElement(
        vo,
        {
          size: "small",
          type: "text",
          icon: r ? /* @__PURE__ */ oe.createElement(To, null) : /* @__PURE__ */ oe.createElement(wo, null),
          onClick: h
        }
      )
    ),
    /* @__PURE__ */ oe.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ oe.createElement(
      xo,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ oe.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ oe.createElement("div", null, /* @__PURE__ */ oe.createElement("strong", null, "📚"), " ", d(p, "legendLoad")), /* @__PURE__ */ oe.createElement("div", null, /* @__PURE__ */ oe.createElement("strong", null, "⚡"), " ", d(p, "legendResource")), /* @__PURE__ */ oe.createElement("div", null, /* @__PURE__ */ oe.createElement("strong", null, "∈"), " ", d(p, "legendGuided")), /* @__PURE__ */ oe.createElement("div", null, /* @__PURE__ */ oe.createElement("strong", null, d(p, "legendStripTitle")), " ", d(p, "legendStrip")), /* @__PURE__ */ oe.createElement("div", null, /* @__PURE__ */ oe.createElement("strong", null, d(p, "legendBandTitle")), " ", d(p, "legendBand")))
      },
      /* @__PURE__ */ oe.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ oe.createElement(_o, null), " ", d(p, "legendTitle"))
    ), /* @__PURE__ */ oe.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ oe.createElement(Io, null),
      " ",
      d(p, "refresh")
    ))
  );
}
function $o(e) {
  var n, t, s;
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
    (n = e.messages) == null ? void 0 : n.map((l) => `${l.role} ${l.text}`).join(`
`),
    (t = e.inputNew) == null ? void 0 : t.map((l) => `${l.role} ${l.text ?? ""}`).join(`
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
const ft = window.QwenPaw.host, B = ft.React, { useCallback: Tn, useEffect: qe, useMemo: xe, useRef: zo, useState: ye } = B, {
  Button: st,
  Empty: _n,
  Popconfirm: Ao,
  Popover: Oo,
  Space: Ro,
  Spin: es,
  Switch: Lo,
  Tag: No,
  Tooltip: Po,
  message: Ge
} = ft.antd, { DeleteOutlined: Do, DownloadOutlined: jo, SettingOutlined: In } = ft.antdIcons, { Text: $e } = ft.antd.Typography;
function Cn({
  config: e,
  onChange: n,
  children: t
}) {
  const s = ie(), l = (r, c, h) => /* @__PURE__ */ B.createElement(
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
    /* @__PURE__ */ B.createElement($e, { style: { fontSize: 13 } }, r),
    /* @__PURE__ */ B.createElement(
      Lo,
      {
        size: "small",
        checked: !!c,
        onChange: (g) => n({ [h]: g })
      }
    )
  ), o = /* @__PURE__ */ B.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ B.createElement($e, { strong: !0, style: { fontSize: 13 } }, d(s, "settings")), /* @__PURE__ */ B.createElement("div", { style: { marginTop: 8 } }, e ? [
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
  ] : /* @__PURE__ */ B.createElement(es, { size: "small" })));
  return /* @__PURE__ */ B.createElement(Oo, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function Bo({
  sessionId: e,
  summary: n,
  locale: t,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  const [o, r] = ye(null), [c, h] = ye(!1), [g, i] = ye(!1), [p, y] = ye(""), [u, v] = ye(""), [$, j] = ye("sequence"), [_, R] = ye(null), [k, C] = ye(null), [P, z] = ye(null), [q, w] = ye(null), [K, N] = ye(
    /* @__PURE__ */ new Set()
  ), [se, pe] = ye(!1), [ue, re] = ye(null), [he, Te] = ye(null), [f, m] = ye(null), [S, I] = ye(null), x = zo(null);
  x.current = e, qe(() => {
    ds().then(re).catch(() => re(null));
  }, []);
  const A = Tn(
    async (b, L) => {
      L || h(!0);
      try {
        const { sessionId: O, instance: Y } = wt(b), ee = await us(O, {
          beforeSeq: L,
          limit: 200,
          instance: Y
        });
        if (x.current !== b) return;
        I(null), r((ce) => as(ce, ee));
      } catch (O) {
        if (x.current !== b) return;
        I({
          message: String(O.message),
          status: O instanceof Dn ? O.status : null
        });
      } finally {
        x.current === b && !L && h(!1);
      }
    },
    []
  ), J = Tn(async (b) => {
    try {
      const { sessionId: L, instance: O } = wt(b), Y = await cs(L, O);
      if (x.current !== b) return;
      m(Y), Te({
        sessionId: b,
        inputTokens: Y.input_tokens,
        outputTokens: Y.output_tokens,
        totalTokens: Y.total_tokens,
        reasoningTokens: Number(Y.reasoning_tokens ?? 0)
      });
    } catch {
      if (x.current !== b) return;
      m(null), Te(null);
    }
  }, []);
  qe(() => {
    e ? (R(null), C(null), z(null), N(/* @__PURE__ */ new Set()), y(""), v(""), r(null), I(null), A(e), J(e)) : (r(null), m(null), Te(null));
  }, [e, A, J]), qe(() => {
    const b = window.setTimeout(() => v(p), 180);
    return () => window.clearTimeout(b);
  }, [p]);
  const Q = xe(
    () => o ? no(o.events) : [],
    [o]
  ), { initial: V, turns: F } = xe(
    () => so(Q),
    [Q]
  ), ne = xe(
    () => V ? [V, ...yn(F)] : yn(F),
    [V, F]
  ), le = xe(
    () => F.some((b) => b.status === "running"),
    [F]
  );
  qe(() => {
    if (!e || !le) return;
    const b = setInterval(() => {
      document.visibilityState === "visible" && x.current && A(x.current);
    }, 5e3);
    return () => clearInterval(b);
  }, [e, le, A]);
  const fe = xe(
    () => _ === null ? null : ao(F, _, $),
    [_, F, $]
  ), Ie = xe(
    () => ne.map((b) => ({
      index: b.index,
      haystack: $o(b)
    })),
    [ne]
  ), ae = xe(() => {
    const b = u.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return b.length === 0 ? null : new Set(
      Ie.filter((L) => b.every((O) => L.haystack.includes(O))).map((L) => L.index)
    );
  }, [u, Ie]), be = xe(
    () => k === null ? null : ne.find((b) => b.index === k) ?? null,
    [ne, k]
  ), Re = xe(() => {
    var Xt, Jt;
    if (P === null) return null;
    const b = F.find((W) => W.turn === P);
    if (!b) return null;
    const L = ((Xt = b.groups[0]) == null ? void 0 : Xt.cells) ?? [], O = L.filter((W) => W.kind === "message"), Y = L.filter((W) => W.kind === "tool"), ee = [
      ...new Set(
        O.map((W) => W.model).filter((W) => !!W)
      )
    ], ce = [
      ...new Set(
        O.map((W) => W.provider).filter((W) => !!W)
      )
    ];
    let te = 0, Le = 0, ke = 0, we = 0, Ze = 0, He = null, Et = 0;
    const Kt = [];
    for (const W of L)
      W.usage && (te += W.usage.input_tokens ?? 0, Le += W.usage.output_tokens ?? 0, ke += W.usage.cache_input_tokens ?? 0, we += W.usage.cache_creation_input_tokens ?? 0, Ze += W.usage.reasoning_tokens ?? 0), W.timing && (He = He === null ? W.timing.ttft_ms : Math.min(He, W.timing.ttft_ms), Et = (Et ?? 0) + W.timing.decode_ms), W.isError && Kt.push(W.toolError ?? W.text ?? "error");
    const Ne = L.find((W) => W.kind === "user"), ts = (Jt = [...O].reverse().find((W) => W.options)) == null ? void 0 : Jt.options, St = [...O].reverse().find((W) => W.outputText);
    let Vt;
    const qt = O.filter((W) => W.messagesMeta);
    if (qt.length > 0) {
      const W = {};
      let Pe = 0, bt = 0;
      for (const ss of qt) {
        const xt = ss.messagesMeta;
        for (const [Qt, ls] of Object.entries(xt.charsByRole))
          W[Qt] = (W[Qt] ?? 0) + ls;
        Pe += xt.totalChars, bt = Math.max(bt, xt.maxToolChars);
      }
      Vt = { charsByRole: W, totalChars: Pe, maxToolChars: bt };
    }
    const vt = F.findIndex((W) => W.turn === P), Gt = vt > 0 ? F[vt - 1] : null;
    let Ue = null;
    if (Gt) {
      Ue = 0;
      for (const W of Gt.groups)
        for (const Pe of W.cells)
          Pe.kind === "message" && Pe.usage && (Ue += Pe.usage.input_tokens ?? 0);
    }
    const ns = Ue === null && vt !== 0 ? void 0 : {
      prevInputTokens: Ue,
      deltaTokens: te - (Ue ?? 0)
    };
    return {
      turn: P,
      status: b.status,
      durationMs: b.durationMs,
      startedAt: (Ne == null ? void 0 : Ne.startedAt) ?? null,
      query: (Ne == null ? void 0 : Ne.text) ?? "",
      llmCalls: O.length,
      toolCalls: Y.length,
      models: ee,
      providers: ce,
      inputTokens: te,
      outputTokens: Le,
      cacheReadTokens: ke,
      cacheWriteTokens: we,
      reasoningTokens: Ze,
      inputComposition: Vt,
      growth: ns,
      resultIndex: St == null ? void 0 : St.index,
      ttftMs: He,
      decodeMs: Et,
      errors: Kt,
      options: ts,
      sessionTotals: he && he.sessionId === e ? {
        inputTokens: he.inputTokens,
        outputTokens: he.outputTokens,
        totalTokens: he.totalTokens,
        reasoningTokens: he.reasoningTokens
      } : void 0
    };
  }, [P, F, he, e]), Qe = !!(o && o.events.length > 0 && o.events[0].seq > 1), Ye = async (b) => {
    try {
      re(await ps(b));
    } catch (L) {
      Ge.error(String(L.message));
    }
  }, mt = xe(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), gt = xe(() => {
    if (!f) return null;
    const b = [
      `${f.runs} ${d(t, "statRounds")} · ${f.llm_calls} ${d(t, "statSteps")}`,
      `LLM ${de(f.llm_ms_total / 1e3)} · ${d(
        t,
        "toolCalls"
      )} ${de(f.tool_ms_total / 1e3)}`,
      `${d(t, "statTtftAvg")} ${f.ttft_ms_avg === null ? "-" : de(f.ttft_ms_avg / 1e3)} · ${at(
        f.output_tokens,
        f.decode_ms_total / 1e3
      )}`
    ];
    if (f.cache_read_tokens > 0 || f.cache_write_tokens > 0) {
      const L = f.cache_read_tokens + f.input_tokens, O = L > 0 ? Math.round(f.cache_read_tokens / L * 100) : 0;
      b.push(`${d(t, "statCacheHit")} ${O}%`);
    }
    if (b.push(
      `${d(t, "statInput")} ${X(
        f.input_tokens
      )} tok · ${d(t, "statOutput")} ${X(
        f.output_tokens
      )} tok`
    ), n && b.push(Pt(n.size_bytes)), f.skills) {
      const L = Object.entries(f.skills).sort((O, Y) => Y[1] - O[1]).map(([O, Y]) => `${O} ×${Y}`).join(" · ");
      L && b.push(`📚 ${L}`);
    }
    if (V != null && V.prompt) {
      const L = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set();
      for (const ee of F)
        for (const ce of ee.groups)
          for (const te of ce.cells)
            te.skillName ? O.add(te.skillName) : te.inSkill && L.add(te.inSkill);
      const Y = [...L].filter((ee) => !O.has(ee));
      Y.length > 0 && b.push(
        `⚡ ${d(t, "skillBypassStrip")}: ${Y.join(" · ")}`
      );
    }
    return b.join(" | ");
  }, [f, n, t, F, V]), yt = () => {
    C(null), z(null);
  };
  qe(() => {
    k !== null && w(null);
  }, [k]);
  const E = xe(
    () => q === null ? null : F.flatMap((b) => b.skillSpans ?? []).find((b) => b.id === q) ?? null,
    [q, F]
  ), H = (S == null ? void 0 : S.status) === 404, Z = be !== null || Re !== null;
  return /* @__PURE__ */ B.createElement(
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
    /* @__PURE__ */ B.createElement(
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
      e ? /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ B.createElement(
          $e,
          {
            strong: !0,
            ellipsis: {
              tooltip: (n == null ? void 0 : n.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (n == null ? void 0 : n.title) || (n == null ? void 0 : n.agent_id) || Fn(e)
        ),
        /* @__PURE__ */ B.createElement(
          No,
          {
            color: Un[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Wn((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ B.createElement($e, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ B.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ B.createElement(Ro, null, /* @__PURE__ */ B.createElement(Cn, { config: ue, onChange: Ye }, /* @__PURE__ */ B.createElement(st, { size: "small", icon: /* @__PURE__ */ B.createElement(In, null) })), /* @__PURE__ */ B.createElement(Po, { title: d(t, "export") }, /* @__PURE__ */ B.createElement(
          st,
          {
            size: "small",
            icon: /* @__PURE__ */ B.createElement(jo, null),
            onClick: () => {
              const { sessionId: b, instance: L } = wt(e);
              hs(
                b,
                L
              ).then(() => Ge.success(d(t, "exported"))).catch(
                (O) => Ge.error(String(O.message))
              );
            }
          },
          d(t, "export")
        )), e.includes("~") ? null : /* @__PURE__ */ B.createElement(
          Ao,
          {
            title: d(t, "deleteConfirm"),
            onConfirm: () => {
              fs(e).then(() => {
                Ge.success(d(t, "deleted")), l == null || l();
              }).catch(
                (b) => Ge.error(String(b.message))
              );
            }
          },
          /* @__PURE__ */ B.createElement(st, { size: "small", danger: !0, icon: /* @__PURE__ */ B.createElement(Do, null) }, d(t, "delete"))
        )))
      ), /* @__PURE__ */ B.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ B.createElement(
          $e,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          gt ?? // Transient line while the stats endpoint responds.
          (n ? `${n.runs} ${d(t, "statRounds")} · ${n.llm_calls} ${d(t, "statSteps")} · ${Hn(
            n.total_tokens
          )} ${d(t, "tokens")} · ${Pt(
            n.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ B.createElement(
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
      )) : /* @__PURE__ */ B.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ B.createElement($e, { type: "secondary", style: { fontSize: 13 } }, d(t, "selectSession")),
        /* @__PURE__ */ B.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ B.createElement(Cn, { config: ue, onChange: Ye }, /* @__PURE__ */ B.createElement(st, { size: "small", icon: /* @__PURE__ */ B.createElement(In, null) })))
      )
    ),
    S && !H && /* @__PURE__ */ B.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ B.createElement($e, { type: "danger", style: { fontSize: 12 } }, `${d(t, "loadFailed")}: ${S.message}`)),
    /* @__PURE__ */ B.createElement(
      Mo,
      {
        mode: $,
        onModeChange: j,
        search: p,
        onSearchChange: y,
        onRefresh: () => {
          e && (A(e), J(e)), l == null || l();
        },
        modeOptions: mt,
        allCollapsed: F.length > 0 && F.every((b) => K.has(b.turn ?? -1)),
        hasRequests: F.some((b) => b.turn !== null),
        callsCollapsed: se,
        onToggleCallsCollapsed: () => pe((b) => !b),
        onToggleCollapseAll: () => {
          N((b) => F.some(
            (O) => O.turn !== null && !b.has(O.turn)
          ) ? new Set(
            F.map((O) => O.turn).filter((O) => O !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ B.createElement(
      So,
      {
        turns: F,
        mode: $,
        range: _,
        hasEarlierRecords: Qe,
        onLoadEarlier: async () => {
          var b;
          return !o || o.events.length === 0 ? !1 : (await A(e, (b = o.events[0]) == null ? void 0 : b.seq), !0);
        },
        selectedIndex: k,
        searchMatchIndexes: ae,
        onRangeChange: R,
        onRecordSelect: C,
        onRecordFocus: C,
        onSkillSpanSelect: w
      }
    ),
    c && !o ? /* @__PURE__ */ B.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ B.createElement(es, null)) : o ? /* @__PURE__ */ B.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ B.createElement(
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
      /* @__PURE__ */ B.createElement(
        Jl,
        {
          turns: F,
          selectedIndex: k,
          selectedTurn: P,
          collapsedTurns: K,
          focusIndexes: fe,
          searchMatchIndexes: ae,
          onSelectedIndexChange: (b) => {
            if (b === k) {
              C(null);
              return;
            }
            C(b), z(null);
          },
          onSkillSpanOpen: (b, L) => {
            var ce;
            const O = F.flatMap((te) => te.skillSpans ?? []), ee = (L !== null ? (((ce = F.find((te) => te.turn === L)) == null ? void 0 : ce.skillSpans) ?? []).find((te) => te.skill === b) : void 0) ?? O.find((te) => te.skill === b);
            ee && w(ee.id);
          },
          onSelectedTurnChange: (b) => {
            z(b), C(null);
          },
          callsCollapsed: se,
          onToggleTurn: (b) => {
            N((L) => {
              const O = new Set(L);
              return O.has(b) ? O.delete(b) : O.add(b), O;
            });
          },
          hasOlderRecords: Qe,
          loadingOlder: g,
          onLoadOlder: () => {
            var b;
            !o || o.events.length === 0 || (i(!0), A(
              e,
              (b = o.events[0]) == null ? void 0 : b.seq
            ).finally(() => i(!1)));
          },
          emptyText: d(t, "noSessions"),
          initialRecord: V
        }
      )
    ), E ? /* @__PURE__ */ B.createElement(
      ol,
      {
        span: E,
        records: ne,
        onJumpRecord: (b) => {
          w(null), C(b);
        },
        onClose: () => w(null)
      }
    ) : Z ? /* @__PURE__ */ B.createElement(
      Ys,
      {
        record: be,
        request: Re,
        onJumpSession: s,
        onSelectTurn: (b) => {
          z(b), C(null);
        },
        onClose: yt
      }
    ) : null) : /* @__PURE__ */ B.createElement(
      _n,
      {
        image: _n.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: H && e ? d(t, "noTraceForSession") : d(t, "selectSession")
      }
    )
  );
}
const Fe = window.QwenPaw.host, U = Fe.React, { useCallback: Mn, useEffect: Lt, useMemo: lt, useRef: Fo, useState: Me } = U, { Button: $n, Empty: zn, Input: Ho, Spin: Uo, Tag: Nt, Tooltip: An } = Fe.antd, {
  CaretRightOutlined: Wo,
  MenuFoldOutlined: Ko,
  MenuUnfoldOutlined: Vo,
  SearchOutlined: qo
} = Fe.antdIcons, { Text: Je } = Fe.antd.Typography;
function Go({
  groups: e,
  collapsedAgents: n,
  onToggleAgent: t,
  searching: s,
  selected: l,
  onSelect: o,
  locale: r
}) {
  const c = e.length > 1;
  return /* @__PURE__ */ U.createElement(U.Fragment, null, e.map(([h, g]) => {
    const i = c && !s && n.has(h);
    return /* @__PURE__ */ U.createElement("div", { key: h }, c && /* @__PURE__ */ U.createElement(
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
      /* @__PURE__ */ U.createElement(
        Wo,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: i ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ U.createElement(Je, { strong: !0, style: { fontSize: 12 } }, h),
      /* @__PURE__ */ U.createElement(Je, { type: "secondary", style: { fontSize: 11 } }, g.length)
    ), !i && g.map((p) => {
      const y = Be(p) === l;
      return /* @__PURE__ */ U.createElement(
        "div",
        {
          key: Be(p),
          onClick: () => o(Be(p)),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: y ? "rgba(22,119,255,0.10)" : "transparent",
            border: y ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ U.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ U.createElement(
            Je,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${p.title ? `${p.title}
` : ""}${p.session_id}`
              }
            },
            p.title || p.agent_id || Fn(p.session_id)
          ),
          c ? null : p.agent_id ? /* @__PURE__ */ U.createElement(
            Nt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            p.agent_id
          ) : null,
          p.user_id ? /* @__PURE__ */ U.createElement(
            Nt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "cyan",
              title: p.user_id
            },
            "👤 ",
            p.user_id
          ) : null,
          /* @__PURE__ */ U.createElement(
            Nt,
            {
              color: Un[p.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Wn(p.status)
          )
        ),
        /* @__PURE__ */ U.createElement(
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
          /* @__PURE__ */ U.createElement("span", null, p.channel || "-"),
          p.instance_id ? /* @__PURE__ */ U.createElement(
            "span",
            {
              title: `${p.instance_id}${p.hostname ? ` (${p.hostname})` : ""}`
            },
            "🖥 ",
            p.hostname || p.instance_id
          ) : null,
          /* @__PURE__ */ U.createElement("span", null, p.runs, " ", d(r, "runs")),
          /* @__PURE__ */ U.createElement("span", null, Hn(p.total_tokens), " tok"),
          p.skills ? /* @__PURE__ */ U.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(p.skills).sort((u, v) => v[1] - u[1]).map(([u, v]) => `${u} ×${v}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(p.skills).sort((u, v) => v[1] - u[1]).slice(0, 2).map(([u]) => u).join(" ")
          ) : null,
          /* @__PURE__ */ U.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Ns(p.last_event_t)
            },
            Ps(p.last_event_t)
          )
        )
      );
    }));
  }));
}
function Xo() {
  const e = typeof Fe.useLocale == "function" ? Fe.useLocale() : void 0, n = lt(
    () => Ht(e ?? ie()),
    [e]
  ), [t, s] = Me(null), [l, o] = Me(!1), [r, c] = Me(
    /* @__PURE__ */ new Set()
  ), [h, g] = Me(!1), [i, p] = Me(!1), [y, u] = Me(null), [v, $] = Me(""), [j, _] = Me(null), R = Fo(t);
  R.current = t;
  const k = Mn(async () => {
    var w;
    try {
      const K = ((w = R.current) == null ? void 0 : w.length) ?? 0, N = await Yt({
        limit: Math.min(500, Math.max(100, K)),
        offset: 0
      });
      s(N.sessions), o(N.has_more), _(null);
    } catch (K) {
      _(String(K.message));
    }
  }, []), C = Mn(async () => {
    var w;
    p(!0);
    try {
      const K = await Yt({
        limit: 100,
        offset: ((w = R.current) == null ? void 0 : w.length) ?? 0
      });
      s((N) => {
        const se = N ?? [], pe = new Set(se.map((ue) => Be(ue)));
        return [
          ...se,
          ...K.sessions.filter((ue) => !pe.has(Be(ue)))
        ];
      }), o(K.has_more);
    } catch (K) {
      _(String(K.message));
    } finally {
      p(!1);
    }
  }, []);
  Lt(() => {
    k();
    try {
      const w = new URLSearchParams(window.location.search).get("session");
      w && (w.includes("~") ? u(w) : jn(w).then((K) => {
        u(K ?? w);
      }));
    } catch {
    }
  }, [k]), Lt(() => {
    try {
      const w = new URL(window.location.href);
      y ? w.searchParams.set("session", y) : w.searchParams.delete("session"), window.history.replaceState(window.history.state, "", w);
    } catch {
    }
  }, [y]), Lt(() => {
    const w = setInterval(() => {
      document.visibilityState === "visible" && k();
    }, 15e3);
    return () => clearInterval(w);
  }, [k]);
  const P = lt(
    () => (t == null ? void 0 : t.find((w) => Be(w) === y)) ?? null,
    [t, y]
  ), z = lt(() => {
    if (!t) return [];
    const w = v.trim().toLowerCase();
    return w ? t.filter(
      (K) => [
        K.session_id,
        K.title ?? "",
        K.agent_id,
        K.channel,
        K.user_id ?? "",
        K.instance_id ?? "",
        K.hostname ?? ""
      ].join(" ").toLowerCase().includes(w)
    ) : t;
  }, [t, v]), q = lt(() => {
    const w = /* @__PURE__ */ new Map();
    for (const K of z) {
      const N = K.agent_id || "(unknown)", se = w.get(N);
      se ? se.push(K) : w.set(N, [K]);
    }
    return [...w.entries()];
  }, [z]);
  return /* @__PURE__ */ U.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, h ? /* @__PURE__ */ U.createElement(
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
    /* @__PURE__ */ U.createElement(An, { title: d(n, "expandSidebar"), placement: "right" }, /* @__PURE__ */ U.createElement(
      $n,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ U.createElement(Vo, null),
        onClick: () => g(!1)
      }
    ))
  ) : /* @__PURE__ */ U.createElement(
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
    /* @__PURE__ */ U.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ U.createElement(
        Ho,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ U.createElement(qo, null),
          placeholder: d(n, "searchPlaceholder"),
          value: v,
          style: { flex: 1, minWidth: 0 },
          onChange: (w) => $(w.target.value)
        }
      ),
      /* @__PURE__ */ U.createElement(An, { title: d(n, "collapseSidebar") }, /* @__PURE__ */ U.createElement(
        $n,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ U.createElement(Ko, null),
          onClick: () => g(!0)
        }
      ))
    ),
    j ? /* @__PURE__ */ U.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ U.createElement(Je, { type: "danger", style: { fontSize: 12 } }, `${d(n, "loadFailed")}: ${j}`)) : null,
    /* @__PURE__ */ U.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ U.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ U.createElement(Uo, null)) : z.length === 0 ? /* @__PURE__ */ U.createElement(
      zn,
      {
        image: zn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ U.createElement("span", { style: { fontSize: 12 } }, d(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ U.createElement(
        Je,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        d(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ U.createElement(
      Go,
      {
        groups: q,
        collapsedAgents: r,
        onToggleAgent: (w) => {
          c((K) => {
            const N = new Set(K);
            return N.has(w) ? N.delete(w) : N.add(w), N;
          });
        },
        searching: !!v.trim(),
        selected: y,
        onSelect: u,
        locale: n
      }
    ), t !== null && l && !v.trim() && /* @__PURE__ */ U.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ U.createElement(
      "a",
      {
        onClick: () => void C(),
        style: { fontSize: 12 }
      },
      i ? "…" : `⋯ ${d(n, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ U.createElement(
    Bo,
    {
      sessionId: y,
      summary: P,
      locale: n,
      onJumpSession: u,
      onRefreshSessions: () => void k()
    }
  ));
}
const Jo = window.QwenPaw.host.React;
var On, Rn;
(Rn = (On = window.QwenPaw).registerRoutes) == null || Rn.call(On, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Xo,
    label: d(ie(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var Ln, ot, Nn;
(Nn = (ot = (Ln = window.QwenPaw.chat) == null ? void 0 : Ln.rightHeader) == null ? void 0 : ot.add) == null || Nn.call(
  ot,
  "agent-trace",
  Jo.createElement(vs),
  { id: "agent-trace-jump" }
);

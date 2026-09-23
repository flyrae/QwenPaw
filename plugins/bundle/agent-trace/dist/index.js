var Ss = Object.defineProperty;
var Es = (e, t, n) => t in e ? Ss(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Mt = (e, t, n) => Es(e, typeof t != "symbol" ? t + "" : t, n);
const vs = {
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
function qt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ie() {
  try {
    return qt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function d(e, t) {
  return vs[e][t];
}
const Xe = window.QwenPaw.host;
function Ve(e) {
  return e.instance_id ? `${e.instance_id}~${e.session_id}` : e.session_id;
}
function $t(e) {
  const t = e.indexOf("~");
  return t <= 0 ? { sessionId: e } : {
    instance: e.slice(0, t),
    sessionId: e.slice(t + 1)
  };
}
function bs(e, t) {
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
async function xs(e, t) {
  const n = t ? `?instance=${encodeURIComponent(t)}` : "";
  return Be(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats${n}`
  );
}
async function Gn(e, t) {
  return Xe.fetch ? Xe.fetch(e, t) : fetch(Xe.getApiUrl(e), {
    ...t,
    headers: {
      ...(t == null ? void 0 : t.headers) || {},
      ...Xe.getApiToken() ? { Authorization: `Bearer ${Xe.getApiToken()}` } : {}
    }
  });
}
class Xn extends Error {
  constructor(t, n) {
    super(n), this.status = t, this.name = "ApiError";
  }
}
async function Be(e, t) {
  const n = await Gn(e, t), s = await n.text();
  let l = null;
  try {
    l = s ? JSON.parse(s) : null;
  } catch {
    l = null;
  }
  if (!n.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new Xn(
      n.status,
      typeof o == "string" ? o : `HTTP ${n.status}`
    );
  }
  return l;
}
async function an(e) {
  const t = new URLSearchParams();
  return t.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && t.set("offset", String(e.offset)), e != null && e.instance && t.set("instance", e.instance), e != null && e.user && t.set("user", e.user), e != null && e.q && t.set("q", e.q), Be(
    `/agent-trace/sessions?${t.toString()}`
  );
}
async function ks(e, t) {
  const n = new URLSearchParams();
  t != null && t.beforeSeq && n.set("before_seq", String(t.beforeSeq)), n.set("limit", String(t == null ? void 0 : t.limit)), t != null && t.instance && n.set("instance", t.instance);
  const s = n.toString();
  return Be(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function ws() {
  return Be("/agent-trace/config");
}
async function Ts(e) {
  return Be("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function _s(e, t) {
  const n = t ? `?instance=${encodeURIComponent(t)}` : "", s = await Gn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export${n}`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const l = await s.blob(), o = URL.createObjectURL(l), a = document.createElement("a");
  a.href = o, a.download = `${e}.jsonl`, a.click(), URL.revokeObjectURL(o);
}
async function Is(e) {
  await Be(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function Jn(e) {
  if (!e) return null;
  try {
    return (await Be(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const je = window.QwenPaw.host, pt = je.React, { useMemo: Cs } = pt, { Button: Ms, Tooltip: $s } = je.antd, { CompassOutlined: zs } = je.antdIcons;
function As(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function Rs() {
  const e = typeof je.useLocale == "function" ? je.useLocale() : void 0, t = Cs(
    () => qt(e ?? ie()),
    [e]
  );
  return /* @__PURE__ */ pt.createElement($s, { title: d(t, "viewCurrentTrace") }, /* @__PURE__ */ pt.createElement(
    Ms,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ pt.createElement(zs, null),
      "aria-label": d(t, "viewCurrentTrace"),
      onClick: () => {
        const n = typeof je.getCurrentSessionId == "function" ? je.getCurrentSessionId() : null;
        Jn(n).then((s) => {
          window.location.href = As(s ?? n);
        });
      }
    }
  ));
}
const cn = 3e3;
function un(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function Os(e, t) {
  const n = un(e ?? ""), s = un(t ?? "");
  if (n.length > cn || s.length > cn)
    return [
      ...n.map((h) => ({ kind: "del", text: h })),
      ...s.map((h) => ({ kind: "add", text: h }))
    ];
  const l = n.length, o = s.length, a = new Int32Array((l + 1) * (o + 1)), c = (h, m) => h * (o + 1) + m;
  for (let h = l - 1; h >= 0; h -= 1)
    for (let m = o - 1; m >= 0; m -= 1)
      a[c(h, m)] = n[h] === s[m] ? a[c(h + 1, m + 1)] + 1 : Math.max(a[c(h + 1, m)], a[c(h, m + 1)]);
  const p = [];
  let i = 0, f = 0;
  for (; i < l && f < o; )
    n[i] === s[f] ? (p.push({ kind: "same", text: n[i] }), i += 1, f += 1) : a[c(i + 1, f)] >= a[c(i, f + 1)] ? (p.push({ kind: "del", text: n[i] }), i += 1) : (p.push({ kind: "add", text: s[f] }), f += 1);
  for (; i < l; )
    p.push({ kind: "del", text: n[i] }), i += 1;
  for (; f < o; )
    p.push({ kind: "add", text: s[f] }), f += 1;
  return p;
}
function Ls(e, t = 3) {
  const n = new Array(e.length).fill(!1);
  e.forEach((o, a) => {
    if (o.kind !== "same")
      for (let c = Math.max(0, a - t); c <= Math.min(e.length - 1, a + t); c += 1)
        n[c] = !0;
  });
  const s = [];
  let l = 0;
  return e.forEach((o, a) => {
    n[a] ? (l > 0 && (s.push({ kind: "gap", count: l }), l = 0), s.push(o)) : l += 1;
  }), l > 0 && s.push({ kind: "gap", count: l }), s;
}
function Ns(e) {
  let t = 0, n = 0;
  for (const s of e)
    s.kind === "add" ? t += 1 : s.kind === "del" && (n += 1);
  return { added: t, removed: n };
}
function Ps(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = (t * 31 + e.charCodeAt(n)) % 100003;
  return t % 360;
}
class Ds {
  constructor() {
    Mt(this, "open", /* @__PURE__ */ new Map());
    Mt(this, "finished", []);
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
      colorHue: Ps(t)
    };
    return this.open.set(t, o), o;
  }
  closeAll(t, n, s) {
    for (const l of this.open.values())
      l.endSeq = t, l.endT = n, l.endKind = s, this.finished.push(l);
    this.open.clear();
  }
}
function js(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function Bs(e) {
  const t = e.lastActivityT ?? e.endT;
  return t === null ? null : Math.max(0, t - e.startT);
}
const Fs = /* @__PURE__ */ new Set([
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
function Hs(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi
  ))
    t.add(n[1].toLowerCase());
  for (const n of e.matchAll(/```[a-z]*\n([\s\S]*?)```/g))
    for (const s of n[1].matchAll(/[\w./=\-]{6,}/g)) {
      const l = s[0].toLowerCase();
      Fs.has(l) || t.add(l);
    }
  return [...t];
}
function Us(e, t) {
  const n = e.toLowerCase();
  let s = null, l = !1;
  for (const [o, a] of t)
    for (const c of a)
      if (n.includes(c)) {
        s === null ? s = { skill: o, feature: c } : s.skill !== o && (l = !0);
        break;
      }
  return l ? null : s;
}
const Ws = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, Ks = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function Qn(e, t) {
  const n = e.markerKind ? Ws[e.markerKind] : void 0;
  if (n) return t === "zh-CN" ? n.zh : n.en;
  const s = Ks[e.kind];
  return s ? t === "zh-CN" ? s.zh : s.en : e.kind;
}
const dn = 60;
function Je(e) {
  return `${e.role}|${e.text ?? `#${e.chars ?? 0}`}`;
}
function pn(e) {
  return e.chars ?? (e.text ? e.text.length : 0);
}
function hn(e) {
  const t = {};
  for (const n of e)
    t[n.role] = (t[n.role] ?? 0) + 1;
  return t;
}
function Vs(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length && Je(e[n]) === Je(t[n]); )
    n += 1;
  const s = e.slice(n), l = t.slice(n), o = /* @__PURE__ */ new Map();
  for (const u of l) {
    const E = Je(u);
    o.set(E, (o.get(E) ?? 0) + 1);
  }
  const a = [], c = [], p = [];
  for (let u = 0; u < Math.min(n, dn); u += 1)
    p.push({ status: "kept", role: e[u].role });
  for (const u of s) {
    const E = Je(u), I = o.get(E) ?? 0;
    I > 0 ? (o.set(E, I - 1), p.push({ status: "kept", role: u.role })) : a.push(u);
  }
  for (const u of l) {
    const E = Je(u), I = o.get(E) ?? 0;
    I > 0 && (o.set(E, I - 1), c.push(u));
  }
  const i = /* @__PURE__ */ new Map();
  for (const u of c) {
    const E = i.get(u.role);
    E ? E.push(u) : i.set(u.role, [u]);
  }
  const f = [], h = [];
  for (const u of a) {
    const E = i.get(u.role);
    E && E.length > 0 ? f.push([u, E.shift()]) : h.push(u);
  }
  const m = [...i.values()].flat();
  for (const [u, E] of f)
    p.push({
      status: "rewritten",
      role: u.role,
      oldText: u.text,
      newText: E.text
    });
  for (const u of h)
    p.push({
      status: "removed",
      role: u.role,
      oldText: u.text
    });
  for (const u of m)
    p.push({
      status: "added",
      role: u.role,
      newText: u.text
    });
  return {
    breakAt: n,
    beforeCount: e.length,
    afterCount: t.length,
    beforeChars: e.reduce((u, E) => u + pn(E), 0),
    afterChars: t.reduce((u, E) => u + pn(E), 0),
    beforeByRole: hn(e),
    afterByRole: hn(t),
    changes: p.slice(0, dn)
  };
}
function qs(e) {
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
      const a = o.text;
      a && l.push(a);
    } else o && typeof o == "object" && typeof o.type == "string" ? l.push(`[${o.type}]`) : typeof o == "string" && o && l.push(o);
  return l.length > 0 ? l.join(`
`) : e;
}
function Gs(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function ge(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const t = e * 1e3;
  return t < 1e3 ? `${Math.round(t)}ms` : t < 6e4 ? `${(t / 1e3).toFixed(1)}s` : `${Math.floor(t / 6e4)}m${Math.round(t % 6e4 / 1e3)}s`;
}
function X(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function ft(e, t) {
  return e === void 0 || !Number.isFinite(e) || t === null || t === void 0 || t <= 0 ? "-" : `${(e / t).toFixed(1)} tok/s`;
}
function ze(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function Ee(e) {
  if (!e) return null;
  const t = Date.parse(e);
  return Number.isFinite(t) ? t : null;
}
function Yn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function Xs(e) {
  if (!e) return "-";
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? e : t.toLocaleString();
}
function Js(e) {
  if (!e) return "-";
  const t = Date.parse(e);
  if (!Number.isFinite(t)) return e;
  const n = Date.now() - t;
  return n < 6e4 ? "刚刚" : n < 36e5 ? `${Math.floor(n / 6e4)} 分钟前` : n < 864e5 ? `${Math.floor(n / 36e5)} 小时前` : new Date(t).toLocaleString();
}
function Zn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Ht(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const es = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function ts(e) {
  return e || "unknown";
}
const St = window.QwenPaw.host, r = St.React, { useEffect: Qs, useRef: Ys, useState: tt } = r, { Button: ns, Collapse: Ut, Empty: fn, Tabs: Gt, Tag: mt } = St.antd, { Text: L } = St.antd.Typography, { CopyOutlined: Zs, CloseOutlined: el } = St.antdIcons, tl = 320, nl = 720, mn = 400, ss = "agent-trace:inspector-width";
function ls(e) {
  return Math.min(nl, Math.max(tl, e));
}
function sl() {
  try {
    const e = Number(window.localStorage.getItem(ss));
    return Number.isFinite(e) && e > 0 ? ls(e) : mn;
  } catch {
    return mn;
  }
}
function ll() {
  const [e, t] = tt(sl), n = Ys(null);
  return Qs(() => {
    let s = null, l = null, o = null;
    const a = (p) => {
      const i = n.current;
      i !== null && (l = ls(i.anchorWidth + i.anchorX - p.clientX), o = l, s === null && (s = window.requestAnimationFrame(() => {
        s = null, l !== null && t(l), l = null;
      })));
    }, c = () => {
      if (n.current !== null && (n.current = null, o !== null)) {
        try {
          window.localStorage.setItem(ss, String(o));
        } catch {
        }
        o = null;
      }
    };
    return window.addEventListener("pointermove", a), window.addEventListener("pointerup", c), () => {
      s !== null && window.cancelAnimationFrame(s), window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", c);
    };
  }, []), { width: e, dragRef: n };
}
const it = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, ol = 2e4;
function il(e) {
  if (e.length > ol) return e;
  const t = [], n = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let s = 0, l, o = 0;
  for (; (l = n.exec(e)) !== null; ) {
    l.index > s && t.push(e.slice(s, l.index));
    const a = l[0];
    let c = "rgba(128,128,128,1)";
    l[1] !== void 0 ? c = it.key : l[2] !== void 0 ? c = it.string : l[3] !== void 0 ? c = it.number : c = it.literal, t.push(
      /* @__PURE__ */ r.createElement("span", { key: o++, style: { color: c } }, a)
    ), s = l.index + a.length;
  }
  return s < e.length && t.push(e.slice(s)), t;
}
function ke({ value: e, json: t = !1 }) {
  const [n, s] = tt(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const o = async () => {
    try {
      await navigator.clipboard.writeText(l), s(!0), window.setTimeout(() => s(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ r.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ r.createElement(
    "a",
    {
      onClick: () => void o(),
      title: "Copy",
      style: {
        position: "absolute",
        top: 4,
        right: 6,
        fontSize: 11,
        color: n ? "#52c41a" : "rgba(128,128,128,1)",
        zIndex: 1
      }
    },
    n ? "✓" : /* @__PURE__ */ r.createElement(Zs, null)
  ), /* @__PURE__ */ r.createElement(
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
    t ? il(l) : l
  ));
}
function T({
  label: e,
  value: t,
  danger: n = !1
}) {
  return /* @__PURE__ */ r.createElement(
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
    /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ r.createElement(
      L,
      {
        type: n ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      t
    )
  );
}
function Wt({
  input: e,
  output: t,
  cacheRead: n,
  cacheWrite: s,
  reasoning: l
}) {
  const o = Math.max(0, e - n - s), a = Math.max(0, t - l);
  return /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(T, { label: "Input", value: `${X(e)} tok` }), n ? /* @__PURE__ */ r.createElement(T, { label: "Cached", value: `${X(n)} tok` }) : null, s ? /* @__PURE__ */ r.createElement(
    T,
    {
      label: "Cache created",
      value: `${X(s)} tok`
    }
  ) : null, n || s ? /* @__PURE__ */ r.createElement(T, { label: "Other", value: `${X(o)} tok` }) : null, /* @__PURE__ */ r.createElement(T, { label: "Output", value: `${X(t)} tok` }), l ? /* @__PURE__ */ r.createElement(T, { label: "Reasoning", value: `${X(l)} tok` }) : null, l ? /* @__PURE__ */ r.createElement(T, { label: "Content", value: `${X(a)} tok` }) : null);
}
function zt({
  label: e,
  onOpen: t,
  children: n
}) {
  return /* @__PURE__ */ r.createElement(
    "div",
    {
      style: {
        marginTop: 8,
        borderTop: "1px solid rgba(128,128,128,0.15)",
        paddingTop: 6
      }
    },
    /* @__PURE__ */ r.createElement("a", { onClick: t, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ r.createElement("div", { style: { paddingTop: 2 } }, n)
  );
}
const gn = ["system", "user", "assistant", "tool"], rl = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function al({
  request: e,
  locale: t
}) {
  const n = e.inputComposition;
  if (!n) return null;
  const s = [], l = new Set(gn), o = [
    ...gn.filter((c) => n.charsByRole[c]),
    ...Object.keys(n.charsByRole).filter(
      (c) => !l.has(c) && n.charsByRole[c]
    )
  ], a = n.totalChars || 1;
  for (const c of o) {
    const p = n.charsByRole[c], i = rl[c] ?? "roleOther", f = Math.round(p / a * 100);
    s.push(
      /* @__PURE__ */ r.createElement(
        T,
        {
          key: c,
          label: d(t, i),
          value: `${X(p)} ${d(t, "charUnit")} · ${f}%`
        }
      )
    );
  }
  return n.maxToolChars > 0 && s.push(
    /* @__PURE__ */ r.createElement(
      T,
      {
        key: "max-tool",
        label: d(t, "maxToolMsg"),
        value: `${X(n.maxToolChars)} ${d(
          t,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(L, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, d(t, "inputComposition")), s, e.inputTokens > 0 ? /* @__PURE__ */ r.createElement(
    T,
    {
      label: d(t, "realInputTokens"),
      value: `${X(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ r.createElement(
    L,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    d(t, "compositionNote")
  ), e.growth ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    T,
    {
      label: d(t, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? d(t, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${X(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ r.createElement(
    T,
    {
      label: d(t, "cacheAbsorbed"),
      value: `${X(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function cl({
  request: e,
  onJumpRecord: t
}) {
  const n = ie(), [s, l] = r.useState("summary"), o = /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(
    T,
    {
      label: d(n, "startedAt"),
      value: ze(e.startedAt)
    }
  ), /* @__PURE__ */ r.createElement(
    T,
    {
      label: d(n, "duration"),
      value: ge(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ r.createElement(
    T,
    {
      label: d(n, "ttftLabel"),
      value: ge(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ r.createElement(
    T,
    {
      label: d(n, "decodeLabel"),
      value: ge(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ r.createElement(
    T,
    {
      label: d(n, "throughput"),
      value: ft(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), a = /* @__PURE__ */ r.createElement(
    Wt,
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
      label: d(n, "summary"),
      children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(T, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ r.createElement(
        T,
        {
          label: d(n, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ r.createElement(T, { label: "Query", value: ul(e.query) }), e.providers.length > 0 ? /* @__PURE__ */ r.createElement(T, { label: "Provider", value: e.providers.join(" · ") }) : null, /* @__PURE__ */ r.createElement(
        T,
        {
          label: d(n, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ r.createElement(T, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ r.createElement(
        T,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && t ? /* @__PURE__ */ r.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ r.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => t(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ r.createElement(zt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ r.createElement(ke, { value: e.options, json: !0 })) : null, /* @__PURE__ */ r.createElement(zt, { label: "Usage", onOpen: () => l("usage") }, a), /* @__PURE__ */ r.createElement(zt, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(L, { strong: !0, style: { fontSize: 12 } }, d(n, "thisRequest")), a, /* @__PURE__ */ r.createElement(al, { request: e, locale: n }), e.sessionTotals ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        L,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        d(n, "sessionTotal")
      ), /* @__PURE__ */ r.createElement(
        Wt,
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
        children: /* @__PURE__ */ r.createElement(ke, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ r.createElement(
    Gt,
    {
      size: "small",
      activeKey: s,
      onChange: (p) => l(p),
      items: c,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function ul(e, t = 200) {
  const n = e.split(`
`, 1)[0].trim();
  return n.length > t ? `${n.slice(0, t)}…` : n;
}
function dl({
  oldText: e,
  newText: t
}) {
  const n = r.useMemo(
    () => Os(e, t),
    [e, t]
  ), s = r.useMemo(() => Ns(n), [n]), l = r.useMemo(() => Ls(n), [n]), o = ie();
  return e === void 0 ? /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 12 } }, d(o, "noPrevPrompt")) : /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ r.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ r.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ r.createElement(
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
    l.map((a, c) => {
      if (a.kind === "gap")
        return /* @__PURE__ */ r.createElement(
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
          a.count
        );
      const p = a;
      return /* @__PURE__ */ r.createElement(
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
function pl({ record: e }) {
  var o;
  const t = ie(), n = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: d(t, "summary"),
      children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(T, { label: "#", value: String(e.index) }), /* @__PURE__ */ r.createElement(
        T,
        {
          label: d(t, "status"),
          value: s ? d(t, "promptChanged") : d(t, "promptInitial")
        }
      ), /* @__PURE__ */ r.createElement(T, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ r.createElement(T, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ r.createElement(T, { label: "Tools", value: String(n.length) }))
    },
    ...s ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ r.createElement(
          dl,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: d(t, "prompt"),
      children: /* @__PURE__ */ r.createElement(ke, { value: e.prompt })
    },
    ...n.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ r.createElement("div", { style: { paddingTop: 4 } }, n.map((a) => /* @__PURE__ */ r.createElement(L, { key: a, code: !0, style: { fontSize: 11 } }, a)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ r.createElement(
          Ut,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((a, c) => {
              var i;
              const p = typeof a.name == "string" && a.name || typeof ((i = a.function) == null ? void 0 : i.name) == "string" && a.function.name || `tool-${c + 1}`;
              return {
                key: String(c),
                label: /* @__PURE__ */ r.createElement(L, { code: !0, style: { fontSize: 11 } }, p),
                children: /* @__PURE__ */ r.createElement(ke, { value: a })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ r.createElement(ke, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ r.createElement(Gt, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function At({ dragRef: e, width: t }) {
  return /* @__PURE__ */ r.createElement(
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
function ht({ onClose: e }) {
  return e ? /* @__PURE__ */ r.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ r.createElement(
    ns,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ r.createElement(el, null),
      onClick: e
    }
  )) : null;
}
function hl({
  record: e,
  request: t,
  onJumpSession: n,
  onJumpRecord: s,
  onSelectTurn: l,
  onClose: o
}) {
  var u, E, I, R, w;
  const a = ie(), { width: c, dragRef: p } = ll();
  if (e === null && t === null)
    return /* @__PURE__ */ r.createElement(
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
      /* @__PURE__ */ r.createElement(
        fn,
        {
          image: fn.PRESENTED_IMAGE_SIMPLE,
          description: d(a, "selectRecord")
        }
      )
    );
  if (e === null && t !== null)
    return /* @__PURE__ */ r.createElement(
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
      /* @__PURE__ */ r.createElement(At, { dragRef: p, width: c }),
      /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(ht, { onClose: o }), /* @__PURE__ */ r.createElement(cl, { request: t, onJumpRecord: s }))
    );
  const i = e;
  if (i.kind === "system" && i.prompt !== void 0)
    return /* @__PURE__ */ r.createElement(
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
      /* @__PURE__ */ r.createElement(At, { dragRef: p, width: c }),
      /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(ht, { onClose: o }), /* @__PURE__ */ r.createElement(pl, { record: i }))
    );
  const f = i.usage, h = i.timing, m = [];
  if (m.push({
    key: "summary",
    label: d(a, "summary"),
    children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(T, { label: "#", value: String(i.index) }), /* @__PURE__ */ r.createElement(T, { label: "Kind", value: Qn(i, a) }), i.runIndex > 0 && l ? /* @__PURE__ */ r.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ r.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(i.runIndex)
      },
      "Request #",
      i.runIndex,
      " →"
    )) : null, /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(a, "status"),
        value: i.running ? d(a, "running") : i.isError ? d(a, "error") : d(a, "success"),
        danger: i.isError
      }
    ), i.provider ? /* @__PURE__ */ r.createElement(T, { label: "Provider", value: i.provider }) : null, i.model ? /* @__PURE__ */ r.createElement(T, { label: d(a, "model"), value: i.model }) : null, i.toolName ? /* @__PURE__ */ r.createElement(T, { label: "Tool", value: i.toolName }) : null, i.inSkill ? /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(a, "skillResource"),
        value: i.inSkillLoaded ? `⚡ ${i.inSkill}` : `⚡ ${i.inSkill}（${d(a, "skillBypass")}）`
      }
    ) : null, i.guidedSkill ? /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(a, "skillGuided"),
        value: `∈ ${i.guidedSkill}（${i.guidedReason === "slash" ? d(a, "guidedBySlash") : d(a, "guidedByLoad")}）`
      }
    ) : null, i.toolOutputChars ? /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(a, "outputSize"),
        value: i.toolOutputBytes ? `${X(i.toolOutputChars)} ${d(
          a,
          "charUnit"
        )} · ${Ht(i.toolOutputBytes)} (${d(
          a,
          "beforeTruncation"
        )})` : `${X(i.toolOutputChars)} ${d(
          a,
          "charUnit"
        )}`
      }
    ) : null, i.kind === "user" && (i.channel || i.userId) ? /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(a, "source"),
        value: [i.channel, i.userId].filter(Boolean).join(" · ")
      }
    ) : null, i.receipt ? /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(a, "channel"),
        value: i.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(a, "duration"),
        value: ge(i.timeSeconds)
      }
    ), i.note ? /* @__PURE__ */ r.createElement(L, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.spawnSession ? /* @__PURE__ */ r.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(a, "spawnedAgent"),
        value: i.spawnAgent ?? "?"
      }
    ), n ? /* @__PURE__ */ r.createElement(
      ns,
      {
        size: "small",
        onClick: () => i.spawnSession && n(i.spawnSession),
        style: { marginTop: 4 }
      },
      d(a, "openChildSession")
    ) : null) : null)
  }), i.kind === "message" && (i.usage || i.timing || i.options || (u = i.apiPayload) != null && u.params || i.toolCalls && i.toolCalls.length > 0)) {
    const v = (E = i.apiPayload) == null ? void 0 : E.params, A = v !== void 0 && i.options !== void 0;
    m.push({
      key: "request",
      label: d(a, "requestTab"),
      children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(L, { strong: !0, style: { fontSize: 12 } }, d(a, "toolCallsEmitted"), " (", i.toolCalls.length, ")"), i.toolCalls.map((z, M) => /* @__PURE__ */ r.createElement(
        "div",
        {
          key: z.id || M,
          style: { display: "flex", gap: 6, alignItems: "baseline" }
        },
        /* @__PURE__ */ r.createElement(L, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, z.name),
        z.id ? /* @__PURE__ */ r.createElement(
          L,
          {
            type: "secondary",
            style: { fontSize: 10, flexShrink: 0 }
          },
          "…",
          z.id.slice(-8)
        ) : null
      ))) : null, v || i.options ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(L, { strong: !0, style: { fontSize: 12 } }, d(a, "generationOptions")), A ? /* @__PURE__ */ r.createElement(
        L,
        {
          type: "secondary",
          style: { fontSize: 11, display: "block" }
        },
        `${d(a, "wireParams")} + ${d(
          a,
          "callOptionsDigest"
        )}`
      ) : null, /* @__PURE__ */ r.createElement(
        ke,
        {
          value: { ...i.options ?? {}, ...v ?? {} },
          json: !0
        }
      )) : null, i.usage ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(L, { strong: !0, style: { fontSize: 12 } }, d(a, "usage")), /* @__PURE__ */ r.createElement(
        Wt,
        {
          input: i.usage.input_tokens ?? 0,
          output: i.usage.output_tokens ?? 0,
          cacheRead: i.usage.cache_input_tokens ?? 0,
          cacheWrite: i.usage.cache_creation_input_tokens ?? 0,
          reasoning: i.usage.reasoning_tokens ?? 0
        }
      )) : null, /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(L, { strong: !0, style: { fontSize: 12 } }, d(a, "timing")), /* @__PURE__ */ r.createElement(
        T,
        {
          label: d(a, "startedAt"),
          value: ze(i.startedAt)
        }
      ), /* @__PURE__ */ r.createElement(
        T,
        {
          label: d(a, "duration"),
          value: ge(i.timeSeconds)
        }
      ), i.timing ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        T,
        {
          label: d(a, "ttftLabel"),
          value: ge(i.timing.ttft_ms / 1e3)
        }
      ), /* @__PURE__ */ r.createElement(
        T,
        {
          label: d(a, "decodeLabel"),
          value: ge(i.timing.decode_ms / 1e3)
        }
      ), /* @__PURE__ */ r.createElement(
        T,
        {
          label: d(a, "throughput"),
          value: ft(
            (I = i.usage) == null ? void 0 : I.output_tokens,
            i.timing.decode_ms / 1e3
          )
        }
      )) : /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 11 } }, d(a, "noTiming"))))
    });
  }
  if (i.kind === "tool") {
    if (i.toolInput && m.push({
      key: "payload",
      label: d(a, "input"),
      children: /* @__PURE__ */ r.createElement(ke, { value: i.toolInput, json: !0 })
    }), (i.toolOutput || i.toolError) && m.push({
      key: "result",
      label: d(a, "output"),
      children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolError ? /* @__PURE__ */ r.createElement(L, { type: "danger", style: { fontSize: 12 } }, i.toolError) : null, i.toolOutput ? /* @__PURE__ */ r.createElement(ke, { value: i.toolOutput }) : null)
    }), i.toolSchema) {
      const v = i.toolSchema.function, A = i.toolSchema, z = typeof (v == null ? void 0 : v.description) == "string" ? v.description : typeof A.description == "string" ? A.description : void 0, M = (v == null ? void 0 : v.parameters) !== void 0 ? v.parameters : A.parameters;
      m.push({
        key: "schema",
        label: "Schema",
        children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 11 } }, d(a, "toolSchemaNote")), z ? /* @__PURE__ */ r.createElement(
          L,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          z
        ) : null, M !== void 0 ? /* @__PURE__ */ r.createElement(ke, { value: M, json: !0 }) : null)
      });
    }
  } else if (i.outputText || i.thinkingText || i.messages || i.marker || i.toolCalls && i.toolCalls.length > 0) {
    if (i.inputNew || i.messagesMeta) {
      const v = ((R = i.inputNew) == null ? void 0 : R.length) ?? 0, A = ((w = i.messagesMeta) == null ? void 0 : w.count) ?? 0;
      let z;
      i.contextReset ? z = `${d(a, "deltaReset")} (${A})` : v === 0 ? z = d(a, "deltaNoChange") : i.inputNew && i.inputNew.length === 1 && i.inputNew[0].role === "assistant" && A > 1 ? z = d(a, "deltaTailUpdate") : z = `${d(a, "deltaAppend")} (${v})`, m.push({
        key: "input",
        label: d(a, "inputTab"),
        children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement(T, { label: d(a, "deltaKind"), value: z }), i.contextReset ? /* @__PURE__ */ r.createElement(L, { type: "warning", style: { fontSize: 12 } }, d(a, "contextReset")) : null, i.resetDetail ? /* @__PURE__ */ r.createElement(
          "div",
          {
            style: {
              border: "1px solid rgba(250,173,20,0.4)",
              borderRadius: 6,
              padding: "6px 8px"
            }
          },
          /* @__PURE__ */ r.createElement(
            T,
            {
              label: d(a, "resetBreakAt"),
              value: `#${i.resetDetail.breakAt + 1}`
            }
          ),
          /* @__PURE__ */ r.createElement(
            T,
            {
              label: d(a, "resetSizes"),
              value: `${i.resetDetail.beforeCount} ${d(
                a,
                "resetMsgs"
              )} · ${X(i.resetDetail.beforeChars)} ${d(
                a,
                "charUnit"
              )} → ${i.resetDetail.afterCount} ${d(
                a,
                "resetMsgs"
              )} · ${X(i.resetDetail.afterChars)} ${d(
                a,
                "charUnit"
              )}`
            }
          ),
          /* @__PURE__ */ r.createElement(
            T,
            {
              label: d(a, "resetRoles"),
              value: Object.keys(i.resetDetail.afterByRole).map((M) => {
                const D = i.resetDetail.beforeByRole[M] ?? 0, ee = i.resetDetail.afterByRole[M] ?? 0;
                return D === ee ? null : `${M} ${D}→${ee}`;
              }).filter(Boolean).join(" · ") || "-"
            }
          ),
          i.resetDetail.changes.length > 0 ? /* @__PURE__ */ r.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ r.createElement(L, { strong: !0, style: { fontSize: 12 } }, d(a, "resetChanges")), i.resetDetail.changes.slice(0, 20).map((M, D) => /* @__PURE__ */ r.createElement(
            "div",
            {
              key: D,
              style: {
                display: "flex",
                gap: 6,
                alignItems: "baseline"
              }
            },
            /* @__PURE__ */ r.createElement(
              mt,
              {
                color: M.status === "kept" ? "default" : M.status === "rewritten" ? "orange" : M.status === "removed" ? "red" : "green",
                style: { marginInlineEnd: 0, fontSize: 10 }
              },
              d(a, fl[M.status])
            ),
            /* @__PURE__ */ r.createElement(L, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, M.role),
            M.status === "rewritten" ? /* @__PURE__ */ r.createElement(
              L,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${d(a, "resetOldPrefix")}${(M.oldText ?? "").slice(0, 40)} → ${d(
                a,
                "resetNewPrefix"
              )}${(M.newText ?? "").slice(0, 40)}`
            ) : /* @__PURE__ */ r.createElement(
              L,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${M.status === "removed" ? d(a, "resetOldPrefix") : d(a, "resetNewPrefix")}${(M.oldText ?? M.newText ?? "").slice(
                0,
                60
              )}`
            )
          ))) : null
        ) : null, i.messagesMeta ? /* @__PURE__ */ r.createElement(
          T,
          {
            label: d(a, "inputTotal"),
            value: `${i.messagesMeta.count} · ${X(
              i.messagesMeta.totalChars
            )} ${d(a, "charUnit")}`
          }
        ) : null, i.inputNew && i.inputNew.length > 0 ? /* @__PURE__ */ r.createElement(r.Fragment, null, i.inputNew.some((M) => M.role === "assistant") ? /* @__PURE__ */ r.createElement(
          L,
          {
            type: "secondary",
            style: { fontSize: 11, display: "block" }
          },
          d(a, "assistantInputNote")
        ) : null, /* @__PURE__ */ r.createElement(
          Ut,
          {
            size: "small",
            defaultActiveKey: i.inputNew.length <= 5 ? ["messages"] : [],
            items: [
              {
                key: "messages",
                label: `${d(a, "inputMessages")} (${i.inputNew.length})`,
                children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, i.inputNew.map((M, D) => /* @__PURE__ */ r.createElement(
                  yl,
                  {
                    key: D,
                    message: M,
                    locale: a
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
      m.push({
        key: "api",
        label: "API",
        children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 11 } }, d(a, "apiPayloadNote")), /* @__PURE__ */ r.createElement(T, { label: "Model", value: v.model }), /* @__PURE__ */ r.createElement(
          T,
          {
            label: d(a, "apiMsgCount"),
            value: String(v.messages.length)
          }
        ), v.usage ? /* @__PURE__ */ r.createElement(
          T,
          {
            label: "Usage",
            value: `in ${v.usage.input_tokens ?? 0} · out ${v.usage.output_tokens ?? 0} tok`
          }
        ) : null, v.durationMs !== void 0 ? /* @__PURE__ */ r.createElement(
          T,
          {
            label: d(a, "duration"),
            value: ge(v.durationMs / 1e3)
          }
        ) : null, /* @__PURE__ */ r.createElement(
          Ut,
          {
            size: "small",
            items: [
              {
                key: "api-msgs",
                label: `${d(a, "apiMessages")} (${v.messages.length})`,
                children: /* @__PURE__ */ r.createElement(
                  gl,
                  {
                    messages: v.messages,
                    locale: a
                  }
                )
              }
            ]
          }
        ))
      });
    }
    m.push({
      key: "raw",
      label: d(a, "output"),
      children: /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, i.inboundParts && i.inboundParts.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 12 } }, `${d(a, "inboundParts")} (${i.inboundParts.length})`), i.inboundParts.map((v, A) => /* @__PURE__ */ r.createElement(
        "div",
        {
          key: A,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ r.createElement(L, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, v.type.replace("Content", "")),
        /* @__PURE__ */ r.createElement(
          L,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          v.text ?? "-"
        )
      ))) : null, i.marker ? /* @__PURE__ */ r.createElement(ke, { value: i.marker }) : null, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 12 } }, `${d(a, "toolCall")} (${i.toolCalls.length})`), i.toolCalls.map((v, A) => /* @__PURE__ */ r.createElement("div", { key: v.id || A, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ r.createElement(L, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", v.name), /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 11 } }, v.id)))) : null, i.note ? /* @__PURE__ */ r.createElement(L, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.messages && i.messages.length > 0 ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 12 } }, `${d(a, "query")} (${i.messages.length})`), i.messages.map((v, A) => /* @__PURE__ */ r.createElement(
        "div",
        {
          key: A,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ r.createElement(L, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, v.role),
        /* @__PURE__ */ r.createElement(
          L,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          v.text
        )
      ))) : null, i.thinkingText ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 12 } }, d(a, "thinking")), /* @__PURE__ */ r.createElement(ke, { value: i.thinkingText })) : null, i.outputText ? /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 12 } }, d(a, "output")), /* @__PURE__ */ r.createElement(ke, { value: i.outputText })) : null)
    });
  }
  return (i.startedAt !== null || f || h) && m.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(T, { label: "Started", value: ze(i.startedAt) }), /* @__PURE__ */ r.createElement(T, { label: "Total", value: ge(i.timeSeconds) }), h ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      T,
      {
        label: "TTFT",
        value: ge(h.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ r.createElement(
      T,
      {
        label: "Decoding",
        value: ge(h.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(a, "throughput"),
        value: ft(
          f == null ? void 0 : f.output_tokens,
          h.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 12 } }, d(a, "noTiming")))
  }), f && m.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(T, { label: "Input", value: X(f.input_tokens) }), /* @__PURE__ */ r.createElement(T, { label: "Output", value: X(f.output_tokens) }), f.cache_creation_input_tokens ? /* @__PURE__ */ r.createElement(
      T,
      {
        label: "Cache write",
        value: X(f.cache_creation_input_tokens)
      }
    ) : null, f.cache_input_tokens ? /* @__PURE__ */ r.createElement(
      T,
      {
        label: "Cache read",
        value: X(f.cache_input_tokens)
      }
    ) : null, f.total_tokens !== void 0 ? /* @__PURE__ */ r.createElement(T, { label: "Total", value: X(f.total_tokens) }) : null, f.time !== void 0 ? /* @__PURE__ */ r.createElement(T, { label: "API time", value: ge(f.time) }) : null)
  }), m.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ r.createElement(ke, { value: i.raw })
  }), /* @__PURE__ */ r.createElement(
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
    /* @__PURE__ */ r.createElement(At, { dragRef: p, width: c }),
    /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(ht, { onClose: o }), /* @__PURE__ */ r.createElement(Gt, { size: "small", items: m, tabBarStyle: { marginBottom: 8 } }))
  );
}
const fl = {
  kept: "resetKept",
  removed: "resetRemoved",
  rewritten: "resetRewritten",
  added: "resetAdded"
}, yn = 8, ml = {
  system: "green",
  user: "blue",
  tool: "gold"
};
function gl({
  messages: e,
  locale: t
}) {
  const [n, s] = tt(null), [l, o] = tt(null), [a, c] = tt(!1), p = /* @__PURE__ */ new Map();
  for (const u of e)
    p.set(u.role, (p.get(u.role) ?? 0) + 1);
  const i = n === null ? e.map((u, E) => E) : e.flatMap(
    (u, E) => u.role === n ? [E] : []
  ), f = !a && n === null && e.length > yn + 4 ? e.length - yn : 0, h = i.filter((u) => u >= f), m = (u, E, I) => /* @__PURE__ */ r.createElement(
    "span",
    {
      onClick: I,
      style: {
        display: "inline-flex",
        alignItems: "center",
        padding: "0 8px",
        borderRadius: 999,
        fontSize: 10,
        lineHeight: "18px",
        cursor: "pointer",
        userSelect: "none",
        border: `1px solid ${E ? "rgba(22,119,255,0.6)" : "rgba(128,128,128,0.35)"}`,
        background: E ? "rgba(22,119,255,0.10)" : "transparent",
        color: E ? "#1677ff" : "rgba(128,128,128,1)"
      }
    },
    u
  );
  return /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ r.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, m(
    `${d(t, "apiFilterAll")} ${e.length}`,
    n === null,
    () => s(null)
  ), [...p.entries()].map(
    ([u, E]) => m(
      `${u} ${E}`,
      n === u,
      () => s(n === u ? null : u)
    )
  )), f > 0 ? /* @__PURE__ */ r.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => c(!0)
    },
    `⋯ ${d(t, "apiShowEarlier")} (${f})`
  ) : null, a && n === null && f === 0 ? /* @__PURE__ */ r.createElement("a", { style: { fontSize: 11 }, onClick: () => c(!1) }, d(t, "apiCollapseEarlier")) : null, /* @__PURE__ */ r.createElement("div", { style: { display: "grid", gap: 4 } }, h.map((u) => {
    const E = e[u], I = l === u;
    return /* @__PURE__ */ r.createElement(
      "div",
      {
        key: u,
        style: {
          borderRadius: 6,
          border: `1px solid ${I ? "rgba(22,119,255,0.35)" : "rgba(128,128,128,0.18)"}`,
          padding: I ? "4px 8px" : "2px 8px",
          background: I ? "rgba(22,119,255,0.04)" : "transparent"
        }
      },
      /* @__PURE__ */ r.createElement(
        "div",
        {
          onClick: () => o(I ? null : u),
          style: {
            display: "flex",
            gap: 6,
            alignItems: "center",
            cursor: "pointer",
            minWidth: 0
          }
        },
        /* @__PURE__ */ r.createElement(
          mt,
          {
            color: ml[E.role] ?? "purple",
            style: {
              marginInlineEnd: 0,
              fontSize: 10,
              lineHeight: "16px",
              flexShrink: 0
            }
          },
          E.role
        ),
        /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, "#", u + 1),
        E.toolCallId ? /* @__PURE__ */ r.createElement(L, { code: !0, style: { fontSize: 9, flexShrink: 0 } }, "…", E.toolCallId.slice(-8)) : null,
        /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 10, flexShrink: 0 } }, X(E.content.length), " ", d(t, "charUnit")),
        I ? null : /* @__PURE__ */ r.createElement(
          L,
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
          E.content.split(`
`, 1)[0].slice(0, 120) || "—"
        )
      ),
      I ? /* @__PURE__ */ r.createElement(
        "div",
        {
          style: {
            marginTop: 4,
            maxHeight: 260,
            overflowY: "auto"
          }
        },
        /* @__PURE__ */ r.createElement(ke, { value: E.content })
      ) : null
    );
  })));
}
function yl({
  message: e,
  locale: t
}) {
  const [n, s] = r.useState(!1), l = e.text ?? "";
  return /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ r.createElement(L, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 11 } }, X(e.chars), " ", d(t, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), l.length > 200 ? /* @__PURE__ */ r.createElement(
    "a",
    {
      style: { fontSize: 11 },
      onClick: () => s((o) => !o)
    },
    n ? d(t, "inputCollapseText") : d(t, "inputExpand")
  ) : null), l ? /* @__PURE__ */ r.createElement(
    "div",
    {
      style: n ? void 0 : {
        maxHeight: 57,
        overflow: "hidden",
        position: "relative"
      }
    },
    /* @__PURE__ */ r.createElement(ke, { value: l })
  ) : null);
}
const Sl = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource"
}, El = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast"
};
function vl({
  span: e,
  records: t,
  onJumpRecord: n,
  onClose: s
}) {
  const l = ie(), o = e.endKind ? d(l, El[e.endKind]) : d(l, "spanOpen"), a = Bs(e);
  return new Map(t.map((c) => [c.index, c])), /* @__PURE__ */ r.createElement(
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
    /* @__PURE__ */ r.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ r.createElement(ht, { onClose: s }), /* @__PURE__ */ r.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ r.createElement(
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
    ), /* @__PURE__ */ r.createElement(L, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ r.createElement(
      mt,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      d(l, Sl[e.trigger])
    )), /* @__PURE__ */ r.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(l, "spanStart"),
        value: ze(e.startT)
      }
    ), /* @__PURE__ */ r.createElement(T, { label: d(l, "spanEnd"), value: o }), e.endT !== null ? /* @__PURE__ */ r.createElement(T, { label: " ", value: ze(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(l, "spanLastActivity"),
        value: ze(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(l, "spanDuration"),
        value: a === null ? "-" : ge(a / 1e3)
      }
    ), /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ r.createElement(
      T,
      {
        label: d(l, "spanLoadState"),
        value: e.bypass ? d(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ r.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ r.createElement(L, { strong: !0, style: { fontSize: 12 } }, d(l, "spanEvidence")), e.evidences.slice(0, 30).map((c, p) => /* @__PURE__ */ r.createElement(
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
      /* @__PURE__ */ r.createElement(
        mt,
        {
          color: c.kind === "path" ? "geekblue" : c.kind === "content" ? "blue" : "default",
          style: { marginInlineEnd: 0, fontSize: 10 }
        },
        c.kind
      ),
      /* @__PURE__ */ r.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => n(c.recordIndex)
        },
        "#",
        c.recordIndex
      ),
      /* @__PURE__ */ r.createElement(L, { type: "secondary", style: { fontSize: 11 } }, c.detail)
    ))) : /* @__PURE__ */ r.createElement(
      L,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      d(l, "spanNoActivity")
    ))
  );
}
const ye = window.QwenPaw.host.React, bl = ye.useRef, xl = ye.useState;
ye.useCallback;
ye.useMemo;
const kl = ye.useEffect, wl = ye.useLayoutEffect, Tl = ye.useReducer;
ye.createContext;
ye.useContext;
ye.createElement;
ye.cloneElement;
ye.isValidElement;
ye.memo;
ye.forwardRef;
ye.Fragment;
ye.StrictMode;
ye.version;
function _l(e) {
  return e ? e() : void 0;
}
function Il(e, t, n) {
  const s = new Array(e);
  return new Proxy(s, {
    get(l, o, a) {
      if (typeof o == "string") {
        const c = o.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const p = +o;
          if (Number.isInteger(p) && p >= 0 && p < e) {
            let i = l[p];
            if (!i) {
              const f = t[p * 2];
              i = l[p] = {
                index: p,
                key: n(p),
                start: f,
                size: t[p * 2 + 1],
                end: f + t[p * 2 + 1],
                lane: 0
              };
            }
            return i;
          }
        }
        if (o === "length") return e;
      }
      return Reflect.get(l, o, a);
    }
  });
}
function We(e, t, n) {
  let s = n.initialDeps ?? [], l, o = !0;
  function a() {
    var c;
    const p = process.env.NODE_ENV !== "production" && !!n.key && !!((c = n.debug) != null && c.call(n));
    let i = 0;
    p && (i = Date.now());
    const f = e();
    if (!(f.length !== s.length || f.some((u, E) => s[E] !== u)))
      return l;
    s = f;
    let m = 0;
    if (p && (m = Date.now()), l = t(...f), p) {
      const u = Math.round((Date.now() - i) * 100) / 100, E = Math.round((Date.now() - m) * 100) / 100, I = E / 16, R = (w, v) => {
        for (w = String(w); w.length < v; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${R(E, 5)} /${R(u, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * I, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return n != null && n.onChange && !(o && n.skipInitialOnChange) && n.onChange(l), o = !1, l;
  }
  return a.updateDeps = (c) => {
    s = c;
  }, a;
}
function Sn(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Cl = (e, t) => Math.abs(e - t) < 1.01, Ml = (e, t, n) => {
  let s;
  return function(...l) {
    e.clearTimeout(s), s = e.setTimeout(() => t.apply(this, l), n);
  };
};
let Qe;
const Rt = () => {
  if (Qe !== void 0) return Qe;
  if (typeof navigator > "u") return Qe = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Qe = !0;
  const e = navigator.maxTouchPoints;
  return Qe = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, En = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, $l = (e) => e, zl = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1, l = new Array(s);
  for (let o = 0; o < s; o++)
    l[o] = t + o;
  return l;
}, Al = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const l = (a) => {
    const { width: c, height: p } = a;
    t({ width: Math.round(c), height: Math.round(p) });
  };
  if (l(En(n)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((a) => {
    const c = () => {
      const p = a[0];
      if (p != null && p.borderBoxSize) {
        const i = p.borderBoxSize[0];
        if (i) {
          l({ width: i.inlineSize, height: i.blockSize });
          return;
        }
      }
      l(En(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return o.observe(n, { box: "border-box" }), () => {
    o.unobserve(n);
  };
}, gt = {
  passive: !0
}, Rl = typeof window > "u" ? !0 : "onscrollend" in window, Ol = (e, t, n) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && Rl;
  let a = 0;
  const c = o ? null : Ml(
    l,
    () => t(a, !1),
    e.options.isScrollingResetDelay
  ), p = (h) => () => {
    a = n(s), c == null || c(), t(a, h);
  }, i = p(!0), f = p(!1);
  return s.addEventListener("scroll", i, gt), o && s.addEventListener("scrollend", f, gt), () => {
    s.removeEventListener("scroll", i), o && s.removeEventListener("scrollend", f);
  };
}, Ll = (e, t) => Ol(e, t, (n) => {
  const { horizontal: s, isRtl: l } = e.options;
  return s ? n.scrollLeft * (l && -1 || 1) : n.scrollTop;
}), Nl = (e, t, n) => {
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
}, Pl = (e, {
  adjustments: t = 0,
  behavior: n
}, s) => {
  var l, o;
  (o = (l = s.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [s.options.horizontal ? "left" : "top"]: e + t,
    behavior: n
  });
}, Dl = Pl;
class jl {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var n, s, l;
      return ((l = (s = (n = this.targetWindow) == null ? void 0 : n.performance) == null ? void 0 : s.now) == null ? void 0 : l.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const s = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const a = () => {
            const c = o.target, p = this.indexFromElement(c);
            if (!c.isConnected) {
              this.observer.unobserve(c);
              for (const [i, f] of this.elementsCache)
                if (f === c) {
                  this.elementsCache.delete(i);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(p) && this.resizeItem(
              p,
              this.options.measureElement(c, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
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
        getItemKey: $l,
        rangeExtractor: zl,
        onChange: () => {
        },
        measureElement: Nl,
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
      for (const m in n) {
        const u = n[m];
        u !== void 0 && (o[m] = u);
      }
      const a = this.options;
      let c = null, p = null, i = !1;
      if (a !== void 0 && a.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const m = a.count, u = o.count, E = this.getMeasurements(), I = m > 0 ? ((s = E[0]) == null ? void 0 : s.key) ?? a.getItemKey(0) : null, R = m > 0 ? ((l = E[m - 1]) == null ? void 0 : l.key) ?? a.getItemKey(m - 1) : null;
        if (u !== m || m > 0 && u > 0 && (o.getItemKey(0) !== I || o.getItemKey(u - 1) !== R)) {
          i = !0;
          const A = m > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? E[0] : null;
          A && (c = [A.key, this.getScrollOffset() - A.start]);
          const z = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          z && u > m && this.isAtEnd(a.scrollEndThreshold) && (m === 0 || o.getItemKey(u - 1) !== R) && (p = z);
        }
      }
      this.options = o, i && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let f = !1, h = 0;
      if (c && this.scrollOffset !== null) {
        const [m, u] = c, E = this.getMeasurements(), { count: I, getItemKey: R } = this.options;
        let w = 0;
        for (; w < I && R(w) !== m; )
          w++;
        if (w < I) {
          const v = E[w];
          if (v) {
            const A = Math.max(0, v.start + u);
            A !== this.scrollOffset && (h = A - this.scrollOffset, this.scrollOffset = A, f = !0);
          }
        }
      }
      (f || p) && (this.pendingScrollAnchor = [
        f ? c[0] : null,
        f ? c[1] : 0,
        p,
        h
      ]);
    }, this.notify = (n) => {
      var s, l;
      (l = (s = this.options).onChange) == null || l.call(s, this, n);
    }, this.maybeNotify = We(
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
          this.options.observeElementOffset(this, (o, a) => {
            if (a && this._intendedScrollOffset === null && o === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(o - this._intendedScrollOffset) < 1.5 && (o = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const c = this.getScrollOffset();
            this.scrollDirection = a ? c === o ? this.scrollDirection : c < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = a, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, a = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, c = () => {
            this._iosTouching = !1, !(!Rt() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            a,
            gt
          ), o.addEventListener(
            "touchend",
            c,
            gt
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", a), o.removeEventListener("touchend", c), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, a, c, p] = l;
        o !== null && !c && (Rt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? p !== 0 && (this._iosDeferredAdjustment += p) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), c && this.scrollToEnd({ behavior: c });
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
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = We(
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
      (n, s, l, o, a, c, p, i) => (this.prevLanes !== void 0 && this.prevLanes !== c && (this.lanesChangedFlag = !0), this.prevLanes = c, this.pendingMin = null, {
        count: n,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: a,
        lanes: c,
        laneAssignmentMode: p,
        gap: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = We(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: n,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: a,
        lanes: c,
        laneAssignmentMode: p,
        gap: i
      }, f) => {
        const h = this.itemSizeCache;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const w of this.laneAssignments.keys())
            w >= n && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const m = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1), c === 1) {
          const w = n * 2;
          let v = this._flatMeasurements;
          if (!v || v.length < w) {
            const M = new Float64Array(w);
            v && m > 0 && M.set(v.subarray(0, m * 2)), v = M, this._flatMeasurements = v;
          }
          let A;
          if (m === 0)
            A = s + l;
          else {
            const M = m - 1;
            A = v[M * 2] + v[M * 2 + 1] + i;
          }
          for (let M = m; M < n; M++) {
            const D = o(M), ee = h.get(D), K = typeof ee == "number" ? ee : this.options.estimateSize(M);
            v[M * 2] = A, v[M * 2 + 1] = K, A += K + i;
          }
          const z = Il(n, v, o);
          return this.measurementsCache = z, z;
        }
        const u = this.measurementsCache.slice(0, m), E = new Array(c).fill(
          void 0
        ), I = new Float64Array(c);
        let R = 0;
        for (let w = 0; w < m; w++) {
          const v = u[w];
          v && (E[v.lane] === void 0 && R++, E[v.lane] = w, I[v.lane] = v.end);
        }
        for (let w = m; w < n; w++) {
          const v = o(w), A = this.laneAssignments.get(w);
          let z, M;
          const D = p === "estimate" || h.has(v);
          if (A !== void 0 && this.options.lanes > 1) {
            z = A;
            const W = E[z], O = W !== void 0 ? u[W] : void 0;
            M = O ? O.end + i : s + l;
          } else if (R === c) {
            let W = 0, O = I[0], V = E[0];
            for (let ne = 1; ne < c; ne++) {
              const Y = I[ne];
              (Y < O || Y === O && E[ne] < V) && (W = ne, O = Y, V = E[ne]);
            }
            z = W, M = O + i, D && this.laneAssignments.set(w, z);
          } else
            z = w % this.options.lanes, M = s + l, D && this.laneAssignments.set(w, z);
          const ee = h.get(v), K = typeof ee == "number" ? ee : this.options.estimateSize(w), ue = M + K;
          u[w] = {
            index: w,
            start: M,
            size: K,
            end: ue,
            key: v,
            lane: z
          }, E[z] === void 0 && R++, E[z] = w, I[z] = ue;
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = We(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, s, l, o) => n.length === 0 || s === 0 ? (this.range = null, null) : (this.range = Fl(
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
    ), this.getVirtualIndexes = We(
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
      (n, s, l, o, a) => o === null || a === null ? [] : n({
        startIndex: o,
        endIndex: a,
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
        ), a = Math.max(0, l - o), c = Math.min(
          this.options.count - 1,
          l + o
        );
        return n >= a && n <= c;
      }
      return !0;
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((a, c) => {
          a.isConnected || (this.observer.unobserve(a), this.elementsCache.delete(c));
        });
        return;
      }
      const s = this.indexFromElement(n), l = this.options.getItemKey(s), o = this.elementsCache.get(l);
      o !== n && (o && this.observer.unobserve(o), this.observer.observe(n), this.elementsCache.set(l, n)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(n, void 0, this));
    }, this.resizeItem = (n, s) => {
      var l, o;
      if (n < 0 || n >= this.options.count) return;
      let a, c, p;
      const i = this._flatMeasurements;
      if (this.options.lanes === 1 && i !== null)
        p = this.options.getItemKey(n), c = i[n * 2], a = i[n * 2 + 1];
      else {
        const m = this.measurementsCache[n];
        if (!m) return;
        p = m.key, c = m.start, a = m.size;
      }
      const f = this.itemSizeCache.get(p) ?? a, h = s - f;
      if (h !== 0) {
        const m = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, u = m ? this.getTotalSize() : 0, E = this.getScrollOffset() + this.scrollAdjustments, R = !this.itemSizeCache.has(p) ? (
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
          c + f <= E && this.scrollDirection !== "backward"
        ), w = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[n] ?? {
            index: n,
            key: p,
            start: c,
            size: a,
            end: c + a,
            lane: 0
          },
          h,
          this
        ) : R);
        (this.pendingMin === null || n < this.pendingMin) && (this.pendingMin = n), this.itemSizeCache.set(p, s), this.itemSizeCacheVersion++;
        let v = !1;
        m ? v = this.applyScrollAdjustment(
          this.getTotalSize() - u
        ) : w && (v = this.applyScrollAdjustment(h)), this.notify(v);
      }
    }, this.getVirtualItems = We(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, s) => {
        const l = [];
        for (let o = 0, a = n.length; o < a; o++) {
          const c = n[o], p = s[c];
          l.push(p);
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
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, a = os(
        0,
        s.length - 1,
        o ? (c) => l[c * 2] : (c) => Sn(s[c]).start,
        n
      );
      return Sn(s[a]);
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
      const o = this.getSize(), a = this.getScrollOffset();
      s === "auto" && (s = n >= a + o ? "end" : "start"), s === "center" ? n += (l - o) / 2 : s === "end" && (n -= o);
      const c = this.getMaxScrollOffset();
      return Math.max(Math.min(c, n), 0);
    }, this.getOffsetForIndex = (n, s = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const l = this.getSize(), o = this.getScrollOffset(), a = this.measurementsCache[n];
      if (!a) return;
      if (s === "auto")
        if (a.end >= o + l - this.options.scrollPaddingEnd)
          s = "end";
        else if (a.start <= o + this.options.scrollPaddingStart)
          s = "start";
        else
          return [o, s];
      if (s === "end" && n === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const c = s === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(c, s, a.size),
        s
      ];
    }, this.scrollToOffset = (n, { align: s = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(n, s), a = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: l,
        startedAt: a,
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
      const [a, c] = o, p = this.now();
      this.scrollState = {
        index: n,
        align: c,
        behavior: l,
        startedAt: p,
        lastTargetOffset: a,
        stableFrames: 0
      }, this._scrollToOffset(a, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
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
        const o = s.length - 1, a = this._flatMeasurements;
        a != null ? l = a[o * 2] + a[o * 2 + 1] : l = ((n = s[o]) == null ? void 0 : n.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let a = s.length - 1;
        for (; a >= 0 && o.some((c) => c === null); ) {
          const c = s[a];
          o[c.lane] === null && (o[c.lane] = c.end), a--;
        }
        l = Math.max(...o.filter((c) => c !== null));
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
    return t === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", t), Rt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += t, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = s ? s[0] : this.scrollState.lastTargetOffset, o = 1, a = l !== this.scrollState.lastTargetOffset;
    if (!a && Cl(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, a) {
      const c = this.getSize() || 600, p = Math.abs(l - this.getScrollOffset()), i = this.scrollState.behavior === "smooth" && p > c;
      this.scrollState.lastTargetOffset = l, i || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: i ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const os = (e, t, n, s) => {
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
function Bl(e, t, n) {
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
function Fl(e, t, n, s, l) {
  const o = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: o };
  if (s === 1 && l !== null) {
    const i = Bl(
      l,
      o,
      n
    );
    let f = i;
    const h = n + t;
    for (; f < o && l[f * 2] + l[f * 2 + 1] < h; )
      f++;
    return { startIndex: i, endIndex: f };
  }
  let c = os(0, o, (i) => e[i].start, n), p = c;
  if (s === 1)
    for (; p < o && e[p].end < n + t; )
      p++;
  else if (s > 1) {
    const i = Array(s).fill(0);
    for (; p < o && i.some((h) => h < n + t); ) {
      const h = e[p];
      i[h.lane] = h.end, p++;
    }
    const f = Array(s).fill(n + t);
    for (; c >= 0 && f.some((h) => h >= n); ) {
      const h = e[c];
      f[h.lane] = h.start, c--;
    }
    c = Math.max(0, c - c % s), p = Math.min(o, p + (s - 1 - p % s));
  }
  return { startIndex: c, endIndex: p };
}
const Ot = typeof document < "u" ? wl : kl;
function Hl({
  useFlushSync: e = !0,
  directDomUpdates: t = !1,
  directDomUpdatesMode: n = "transform",
  ...s
}) {
  const l = Tl((f) => f + 1, 0)[1], o = bl({
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
  const a = (f) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    const m = f.getTotalSize();
    if (m !== h.lastSize) {
      h.lastSize = m;
      const u = f.options.horizontal ? "width" : "height";
      h.container.style[u] = `${m}px`;
    }
  }, c = (f) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    a(f);
    const m = !!f.options.horizontal, u = h.mode === "transform", E = m ? "left" : "top", I = f.options.scrollMargin, R = f.getVirtualItems();
    for (const w of R) {
      const v = w.start - I, A = f.elementsCache.get(w.key);
      A && h.lastPositions.get(A) !== v && (h.lastPositions.set(A, v), u ? A.style.transform = m ? `translate3d(${v}px, 0, 0)` : `translate3d(0, ${v}px, 0)` : A.style[E] = `${v}px`);
    }
  }, p = {
    ...s,
    onChange: (f, h) => {
      var m;
      const u = o.current;
      let E = !0;
      if (u.enabled) {
        c(f);
        const I = f.range, R = u.prevRange;
        E = !R || R.isScrolling !== f.isScrolling || R.startIndex !== (I == null ? void 0 : I.startIndex) || R.endIndex !== (I == null ? void 0 : I.endIndex), E && (u.prevRange = I ? {
          startIndex: I.startIndex,
          endIndex: I.endIndex,
          isScrolling: f.isScrolling
        } : null);
      }
      E && (e && h ? _l(l) : l()), (m = s.onChange) == null || m.call(s, f, h);
    }
  }, [i] = xl(() => {
    const f = new jl(p);
    return Object.assign(f, {
      containerRef: (h) => {
        const m = o.current;
        if (m.container = h, m.lastSize = null, h && m.enabled) {
          const u = f.getTotalSize();
          m.lastSize = u;
          const E = f.options.horizontal ? "width" : "height";
          h.style[E] = `${u}px`;
        }
      }
    });
  });
  return i.setOptions(p), Ot(() => i._didMount(), []), Ot(() => (a(i), i._willUpdate())), Ot(() => {
    c(i);
  }), i;
}
function Ul(e) {
  return Hl({
    observeElementRect: Al,
    observeElementOffset: Ll,
    scrollToFn: Dl,
    ...e
  });
}
const Et = window.QwenPaw.host, C = Et.React, { useCallback: Wl, useRef: Kl } = C, { Tag: Ke, Tooltip: Vl } = Et.antd, { Text: we } = Et.antd.Typography, {
  CaretRightOutlined: ql,
  CloseCircleOutlined: Gl,
  FileTextOutlined: Xl,
  RobotOutlined: Jl,
  RocketOutlined: Ql,
  SafetyOutlined: Yl,
  SendOutlined: Zl,
  SettingOutlined: eo,
  ToolOutlined: to,
  UserOutlined: no
} = Et.antdIcons, so = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, lo = {
  user: /* @__PURE__ */ C.createElement(no, null),
  message: /* @__PURE__ */ C.createElement(Jl, null),
  tool: /* @__PURE__ */ C.createElement(to, null),
  system: /* @__PURE__ */ C.createElement(eo, null)
}, vn = {
  approval: { color: "volcano", icon: /* @__PURE__ */ C.createElement(Yl, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ C.createElement(Zl, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ C.createElement(Ql, null) },
  header: { color: "green", icon: /* @__PURE__ */ C.createElement(Xl, null) },
  error: { color: "red", icon: /* @__PURE__ */ C.createElement(Gl, null) }
}, oo = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, bn = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, io = 80, Kt = 26, is = 34, xn = 9, kn = 30;
function ro(e) {
  const t = ie(), n = bn[e] ?? bn.unknown;
  return t === "zh-CN" ? n.zh : n.en;
}
const ao = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function co(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const s of e.inboundParts ?? []) {
    const l = ao[s.type];
    l && n.set(l, (n.get(l) ?? 0) + 1);
  }
  return n.size === 0 ? null : [...n.entries()].map(([s, l]) => `${d(t, s)}×${l}`).join(" ");
}
function uo(e, t) {
  const n = e.receipt, s = n != null && n.channel ? ` · ${n.channel}` : "";
  return `📤 ${d(t, "replySent")}${s} · ${((n == null ? void 0 : n.chars) ?? 0).toLocaleString()} ${d(t, "chars")}`;
}
const wn = C.memo(function({
  record: t,
  selected: n,
  dimmed: s,
  multiRequest: l,
  onSelectRecord: o,
  onOpenRun: a
}) {
  var h, m;
  const c = t.usage, p = c && (c.input_tokens || c.output_tokens) ? `${X(c.input_tokens)}→${X(
    c.output_tokens
  )}` : null, i = c && c.reasoning_tokens ? c.reasoning_tokens : null, f = c && p ? [
    `Input ${X(c.input_tokens)} tok`,
    c.cache_input_tokens ? `Cached ${X(c.cache_input_tokens)} tok` : null,
    c.cache_creation_input_tokens ? `Cache created ${X(
      c.cache_creation_input_tokens
    )} tok` : null,
    `Output ${X(c.output_tokens)} tok`,
    i ? `${d(ie(), "reasoningShort")} ${X(
      i
    )} tok` : null
  ].filter(Boolean).join(" · ") : void 0;
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      className: "at-ledger-row",
      "data-kind": t.kind,
      "data-error": t.isError || void 0,
      "data-running": t.running || void 0,
      "data-selected": n || void 0,
      "data-dimmed": s || void 0,
      onClick: () => o(t.index),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: Kt,
        cursor: "pointer",
        background: n ? "rgba(22,119,255,0.08)" : void 0,
        opacity: s ? 0.35 : 1,
        borderLeft: t.skillSpanHue !== void 0 ? `3px solid ${t.skillSpanBypass ? "rgba(250,140,22,0.9)" : `hsl(${t.skillSpanHue}, 65%, 55%)`}` : "3px solid transparent"
      }
    },
    /* @__PURE__ */ C.createElement(
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
      l && a ? /* @__PURE__ */ C.createElement(
        "span",
        {
          title: d(ie(), "runViewHint"),
          onClick: (u) => {
            u.stopPropagation(), a(t.runIndex);
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
      ) : l ? /* @__PURE__ */ C.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", t.runIndex) : null,
      "#",
      t.index
    ),
    /* @__PURE__ */ C.createElement(
      Ke,
      {
        color: t.kind === "tool" && t.skillName ? "geekblue" : t.markerKind && ((h = vn[t.markerKind]) == null ? void 0 : h.color) || so[t.kind] || "default",
        icon: t.markerKind && ((m = vn[t.markerKind]) == null ? void 0 : m.icon) || lo[t.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      t.kind === "tool" && t.skillName ? d(ie(), "skillLoadKind") : Qn(t, ie())
    ),
    t.kind === "message" && t.model && t.model !== "unknown" ? /* @__PURE__ */ C.createElement(
      Ke,
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
    t.inSkill ? /* @__PURE__ */ C.createElement(
      Ke,
      {
        color: t.inSkillLoaded ? "geekblue" : "orange",
        title: t.inSkillLoaded ? t.inSkill : `${t.inSkill} — ${d(ie(), "skillBypass")}`,
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
    ) : t.guidedSkill ? /* @__PURE__ */ C.createElement(
      Vl,
      {
        title: `${t.guidedSkill} — ${t.guidedReason === "slash" ? d(ie(), "guidedBySlash") : d(ie(), "guidedByLoad")}`
      },
      /* @__PURE__ */ C.createElement(
        we,
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
        t.guidedSkill
      )
    ) : null,
    t.kind === "user" && t.skillName ? /* @__PURE__ */ C.createElement(
      Ke,
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
    /* @__PURE__ */ C.createElement(
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
      t.receipt ? /* @__PURE__ */ C.createElement(we, { type: "secondary", style: { fontSize: 12 } }, uo(t, ie())) : t.kind === "tool" && t.skillName ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(we, { strong: !0, style: { fontSize: 12 } }, t.skillName), t.toolError ? /* @__PURE__ */ C.createElement(we, { type: "danger", style: { fontSize: 12 } }, ` → ${t.toolError}`) : t.toolOutputChars ? /* @__PURE__ */ C.createElement(we, { type: "secondary", style: { fontSize: 12 } }, ` · ${d(ie(), "skillLoaded")} ${X(
        t.toolOutputChars
      )} ${d(ie(), "charUnit")}`) : null) : t.kind === "tool" && t.toolName ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(we, { strong: !0, style: { fontSize: 12 } }, t.toolName), /* @__PURE__ */ C.createElement(we, { type: "secondary", style: { fontSize: 12 } }, ` ${t.toolInput ?? ""}`), t.toolOutput ? /* @__PURE__ */ C.createElement(
        we,
        {
          type: t.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${t.toolOutput}`
      ) : null) : /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(
        we,
        {
          type: t.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        t.running ? `⏳ ${t.text || "…"}` : t.text || "—"
      ), t.kind === "user" ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(we, { type: "secondary", style: { fontSize: 11 } }, ` ${co(t, ie()) ?? ""}`), t.channel && t.channel !== "console" ? /* @__PURE__ */ C.createElement(we, { code: !0, style: { fontSize: 10 } }, ` @${t.channel}`) : null) : null)
    ),
    /* @__PURE__ */ C.createElement(
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
      p ? /* @__PURE__ */ C.createElement("span", { title: f }, /* @__PURE__ */ C.createElement("span", { style: { color: "#1677ff" } }, p), i ? /* @__PURE__ */ C.createElement("span", { style: { color: "#722ed1" } }, ` · ${X(i)}`) : null) : null,
      p ? " · " : "",
      (t.kind === "message" || t.kind === "tool") && ge(t.timeSeconds)
    )
  );
}), po = C.memo(function({
  turn: t,
  collapsed: n,
  selected: s,
  cellCount: l,
  onToggleTurn: o,
  onSelectTurn: a,
  onSkillSpanOpen: c
}) {
  const p = ie();
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: is }
    },
    /* @__PURE__ */ C.createElement(
      "span",
      {
        onClick: (i) => {
          i.stopPropagation(), t.turn !== null && a(t.turn);
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
      /* @__PURE__ */ C.createElement(
        ql,
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
      /* @__PURE__ */ C.createElement(we, { strong: !0, style: { fontSize: 11 } }, "Request #", t.turn),
      t.durationMs !== null && /* @__PURE__ */ C.createElement(we, { type: "secondary", style: { fontSize: 11 } }, ge(t.durationMs / 1e3)),
      /* @__PURE__ */ C.createElement(we, { type: "secondary", style: { fontSize: 11 } }, l, " ", d(p, "events")),
      t.skillsUsed && t.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ C.createElement(
          "span",
          {
            onClick: (i) => {
              c && (i.stopPropagation(), c(t.skillsUsed[0], t.turn));
            },
            style: {
              display: "inline-flex",
              cursor: c ? "pointer" : void 0
            }
          },
          /* @__PURE__ */ C.createElement(
            Ke,
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
      /* @__PURE__ */ C.createElement(
        Ke,
        {
          color: oo[t.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        ro(t.status)
      )
    )
  );
});
function ho({
  turns: e,
  selectedIndex: t,
  selectedTurn: n,
  collapsedTurns: s,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: a,
  onSelectedTurnChange: c,
  onToggleTurn: p,
  callsCollapsed: i,
  hasOlderRecords: f,
  loadingOlder: h,
  onLoadOlder: m,
  initialRecord: u,
  emptyText: E,
  onSkillSpanOpen: I
}) {
  const R = ie(), w = Kl(null), v = C.useMemo(
    () => e.filter((K) => K.turn !== null),
    [e]
  ), A = v.length > 1, z = C.useMemo(() => {
    var ue;
    const K = [];
    f && K.push({
      key: "load-older",
      height: kn,
      type: "load-older"
    }), u && (K.push({
      key: "initial",
      height: Kt,
      type: "initial",
      record: u
    }), K.push({
      key: "initial-divider",
      height: xn,
      type: "divider"
    }));
    for (const W of v) {
      const O = W.turn;
      if (K.push({
        key: `turn-${O}`,
        height: is,
        type: "boundary",
        turn: W
      }), !s.has(O))
        for (const V of ((ue = W.groups[0]) == null ? void 0 : ue.cells) ?? [])
          i && V.kind === "tool" || K.push({
            key: `rec-${V.index}`,
            height: Kt,
            type: "record",
            record: V
          });
    }
    return K;
  }, [
    v,
    s,
    i,
    f,
    u
  ]), M = C.useCallback(
    (K) => l !== null && !l.has(K.index) || o !== null && !o.has(K.index),
    [l, o]
  ), D = Wl(
    (K) => {
      var ue;
      switch (K.type) {
        case "load-older":
          return /* @__PURE__ */ C.createElement("div", { style: { textAlign: "center", height: kn } }, /* @__PURE__ */ C.createElement(
            "button",
            {
              type: "button",
              onClick: m,
              disabled: h,
              style: {
                border: "1px solid rgba(128,128,128,0.3)",
                borderRadius: 10,
                background: "transparent",
                padding: "1px 12px",
                fontSize: 11,
                cursor: h ? "default" : "pointer",
                color: "rgba(128,128,128,1)"
              }
            },
            h ? "…" : `⋯ ${d(R, "loadOlder")}`
          ));
        case "divider":
          return /* @__PURE__ */ C.createElement(
            "div",
            {
              style: {
                height: xn,
                borderBottom: "1px dashed rgba(128,128,128,0.25)"
              }
            }
          );
        case "initial": {
          const W = K.record;
          return /* @__PURE__ */ C.createElement(
            wn,
            {
              record: W,
              selected: t === W.index,
              dimmed: M(W),
              multiRequest: A,
              onSelectRecord: a,
              onOpenRun: c
            }
          );
        }
        case "boundary": {
          const W = K.turn, O = W.turn;
          return /* @__PURE__ */ C.createElement(
            po,
            {
              turn: W,
              collapsed: s.has(O),
              selected: n === O,
              cellCount: ((ue = W.groups[0]) == null ? void 0 : ue.cells.length) ?? 0,
              onToggleTurn: p,
              onSelectTurn: c,
              onSkillSpanOpen: I
            }
          );
        }
        case "record":
        default: {
          const W = K.record;
          return /* @__PURE__ */ C.createElement(
            wn,
            {
              record: W,
              selected: t === W.index,
              dimmed: M(W),
              multiRequest: A,
              onSelectRecord: a,
              onOpenRun: c
            }
          );
        }
      }
    },
    [
      s,
      M,
      h,
      R,
      A,
      m,
      a,
      c,
      I,
      p,
      t,
      n
    ]
  );
  if (z.length === 0)
    return /* @__PURE__ */ C.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ C.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        E ?? d(R, "noSessions")
      )
    );
  const ee = z.length <= io ? /* @__PURE__ */ C.createElement("div", null, z.map((K) => D(K))) : /* @__PURE__ */ C.createElement(
    fo,
    {
      rows: z,
      scrollRef: w,
      renderRow: D
    }
  );
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      ref: w,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    ee
  );
}
function fo({
  rows: e,
  scrollRef: t,
  renderRow: n
}) {
  const s = Ul({
    count: e.length,
    getScrollElement: () => t.current,
    estimateSize: (l) => e[l].height,
    overscan: 12
  });
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: {
        height: s.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    s.getVirtualItems().map((l) => /* @__PURE__ */ C.createElement(
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
      n(e[l.index])
    ))
  );
}
function Lt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function Tn(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (t) => typeof t == "number" && Number.isFinite(t)
  );
}
function mo(e) {
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
function go(e) {
  if (!(typeof e != "string" || !e))
    try {
      const t = JSON.parse(e);
      if (typeof t.skill == "string" && t.skill)
        return t.skill;
    } catch {
    }
}
function rs(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function yo(e) {
  if (typeof e.name == "string" && e.name) return e.name;
  const t = e.function;
  if (t && typeof t == "object" && typeof t.name == "string")
    return t.name;
}
function So(e) {
  const t = [];
  for (const n of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const s = n[1].match(/<name>([^<]+)<\/name>/), l = n[1].match(/<dir>([^<]+)<\/dir>/);
    s && l && l[1].trim() && t.push([rs(l[1].trim()), s[1].trim()]);
  }
  return t.sort((n, s) => s[0].length - n[0].length), t;
}
function _n(e) {
  const t = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return t ? t[1].trim() : null;
}
function Le(e, t = 160) {
  if (!e) return "";
  const n = e.split(`
`, 1)[0].trim();
  return n.length > t ? `${n.slice(0, t)}…` : n;
}
function Eo(e) {
  var de, Ce;
  const t = [], n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = [];
  let p = "";
  const i = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
  let u = [];
  const E = /* @__PURE__ */ new Set(), I = [], R = new Ds(), w = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
  let z = [], M = [], D = 0, ee = 0;
  const K = (g) => g.groups[0].cells, ue = (g, y) => {
    const S = a.get(g);
    S ? S.push(y) : a.set(g, [y]);
  }, W = (g, y) => {
    if (!g)
      if (p)
        g = p;
      else {
        c.push(y);
        return;
      }
    const S = n.get(g);
    if (S)
      y.runIndex = S.turn ?? 0, K(S).push(y);
    else if (p) {
      const _ = n.get(p);
      _ ? (y.runIndex = _.turn ?? 0, K(_).push(y)) : ue(g, y);
    } else
      ue(g, y);
  }, O = (g, y) => {
    const S = a.get(y);
    if (S) {
      for (const _ of S) K(g).push(_);
      a.delete(y);
    }
  };
  for (const g of e) {
    const y = Lt(g);
    switch (g.type) {
      case "run/start": {
        ee += 1, I.length = 0, i.set(
          g.run_id,
          typeof y.channel == "string" ? y.channel : ""
        );
        const S = {
          turn: ee,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${ee}`, cells: [] }]
        };
        n.set(g.run_id, S), t.push(S), p = g.run_id, O(S, g.run_id);
        for (const Q of c.splice(0))
          Q.runIndex = ee, K(S).push(Q);
        const _ = Array.isArray(y.messages) ? y.messages : [], x = String(y.query ?? "");
        let $ = typeof y.slash_skill == "string" && y.slash_skill ? y.slash_skill : _n(x);
        !$ && _.length > 0 && ($ = _n(String(((de = _[0]) == null ? void 0 : de.text) ?? ""))), $ && (E.add($), I.push([$, "slash"]), R.onRunStart(), R.onSlashSkill(
          $,
          g.seq,
          Ee(g.t) ?? 0
        ), w.set(`${$}#${g.seq}`, S));
        const J = {
          index: ++D,
          runIndex: ee,
          runId: g.run_id,
          kind: "user",
          text: Le(x) || Le((Ce = _.at(-1)) == null ? void 0 : Ce.text),
          messages: _,
          timeSeconds: 0,
          startedAt: Ee(g.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: $ ?? void 0,
          model: void 0
        };
        f.set(g.run_id, J), K(S).push(J);
        break;
      }
      case "run/end": {
        const S = n.get(g.run_id);
        p === g.run_id && (p = ""), I.length = 0, R.onRunEnd(g.seq, Ee(g.t) ?? 0), i.delete(g.run_id), f.delete(g.run_id);
        const _ = String(y.status ?? "unknown");
        if (S && (S.status = _, S.durationMs = typeof y.duration_ms == "number" ? y.duration_ms : null), _ === "error" && y.error) {
          const x = S ?? {
            turn: null,
            status: _,
            durationMs: typeof y.duration_ms == "number" ? y.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || t.push(x), x.groups[0].cells.push({
            index: ++D,
            runIndex: ee,
            runId: g.run_id,
            kind: "system",
            markerKind: "error",
            text: Le(String(y.error)) || "run failed",
            marker: String(y.error ?? "run failed"),
            timeSeconds: typeof y.duration_ms == "number" ? y.duration_ms / 1e3 : null,
            startedAt: Ee(g.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [g]
          });
        }
        break;
      }
      case "agent/spawn": {
        const S = typeof y.child_session_id == "string" ? y.child_session_id : void 0, _ = typeof y.child_agent_id == "string" ? y.child_agent_id : "?";
        W(g.run_id, {
          index: ++D,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${_} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: Ee(g.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: _,
          raw: [g]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(y.parts) ? y.parts : [], _ = y.channel_meta && typeof y.channel_meta == "object" ? y.channel_meta : void 0, x = S.map((P) => ({
          type: String(P.type ?? "?"),
          text: typeof P.text == "string" ? P.text : void 0
        })), $ = i.get(g.run_id) ?? "", J = _ && typeof _.user_id == "string" && _.user_id ? _.user_id : void 0, Q = Le(
          x.map((P) => P.text ?? "").filter(Boolean).join(`
`)
        ), G = f.get(g.run_id);
        G && !G.inboundParts ? (G.inboundParts = x, G.channel = $ || void 0, G.userId = J, G.raw = [
          ...G.raw ?? [],
          g
        ], G.text || (G.text = Q)) : W(g.run_id, {
          index: ++D,
          runIndex: 0,
          runId: g.run_id,
          kind: "user",
          text: Q || "📥",
          timeSeconds: 0,
          startedAt: Ee(g.t) ?? 0,
          isError: !1,
          running: !1,
          channel: $ || void 0,
          userId: J,
          inboundParts: x,
          raw: [g]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof y.text == "string" ? y.text : "";
        W(g.run_id, {
          index: ++D,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: Ee(g.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: S || void 0,
          receipt: {
            channel: i.get(g.run_id) || void 0,
            chars: S.length
          },
          raw: [g]
        });
        break;
      }
      case "approval/asked": {
        W(g.run_id, {
          index: ++D,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(y.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: Ee(g.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [g]
        });
        break;
      }
      case "approval/decided": {
        const S = String(y.decision ?? "?"), _ = y.tool_name ? String(y.tool_name) : "";
        W(g.run_id, {
          index: ++D,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "approval",
          text: _ ? `${_} → ${S}` : S,
          timeSeconds: 0,
          startedAt: Ee(g.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [g]
        });
        break;
      }
      case "llm/header": {
        const S = typeof y.sha256 == "string" ? y.sha256 : "", _ = typeof y.prev_sha256 == "string" ? y.prev_sha256 : void 0, x = y.reason === "changed" ? "changed" : "initial", $ = typeof y.system_prompt == "string" ? y.system_prompt : "", J = Array.isArray(y.tools) ? y.tools : [], Q = Array.isArray(y.schemas) ? y.schemas : void 0;
        if (W(g.run_id, {
          index: ++D,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "header",
          text: x === "initial" ? `⚙ ${$ ? `System Prompt (${$.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: Ee(g.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: $,
          prevPrompt: h.get(_ ?? ""),
          headerTools: J,
          headerReason: x,
          sha: S,
          prevSha: _,
          schemas: Q,
          raw: [g]
        }), S && h.set(S, $), Array.isArray(Q)) {
          m.clear();
          for (const G of Q) {
            const P = yo(G);
            P && m.set(P, G);
          }
        }
        $ && (u = So($));
        break;
      }
      case "llm/call": {
        const S = Lt(g), _ = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, x = S.messages_meta, $ = x && typeof x == "object" ? {
          count: typeof x.count == "number" ? x.count : 0,
          totalChars: typeof x.total_chars == "number" ? x.total_chars : 0,
          charsByRole: Tn(x.chars_by_role) ? x.chars_by_role : {},
          countByRole: Tn(x.count_by_role) ? x.count_by_role : {},
          maxToolChars: typeof x.max_tool_chars == "number" ? x.max_tool_chars : 0
        } : void 0, J = mo(S.messages_new);
        let Q;
        if (S.context_reset === !0) {
          const te = (J ?? []).map(
            (xe) => ({
              role: xe.role,
              chars: xe.chars,
              text: xe.text
            })
          );
          let se;
          z.length > 0 || te.length === 0 ? se = z : se = M.map((xe) => ({
            role: xe.role,
            text: xe.text
          })), Q = Vs(se, te), $ && (Q.afterChars = $.totalChars);
        }
        if (J) {
          const te = J.map((se) => ({
            role: se.role,
            chars: se.chars,
            text: se.text
          }));
          S.context_reset === !0 ? z = te : S.tail_update === !0 ? z = [...z.slice(0, -1), ...te] : typeof S.messages_count == "number" && J.length >= S.messages_count && z.length > 0 ? z = te : z = [...z, ...te];
        }
        M = Array.isArray(S.messages) ? S.messages.map((te) => ({
          role: te.role,
          text: te.text
        })) : [];
        const G = {
          index: ++D,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: Ee(g.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: $,
          inputNew: J,
          contextReset: S.context_reset === !0,
          resetDetail: Q,
          options: _
        };
        W(g.run_id, G);
        const P = s.get(g.run_id) ?? [];
        P.push({ cell: G, callData: S, call: g }), s.set(g.run_id, P);
        break;
      }
      case "llm/api_request": {
        const S = s.get(g.run_id), _ = S && S.length > 0 ? S[S.length - 1].cell : l.get(g.run_id);
        if (_) {
          const x = Array.isArray(y.messages) ? y.messages : [];
          _.apiPayload = {
            model: String(y.model ?? "unknown"),
            messages: x.map(($) => ({
              role: String($.role ?? "?"),
              // Provider formatters may leave the block array as a
              // JSON string — decode it into readable text.
              content: qs(
                typeof $.content == "string" ? $.content : JSON.stringify($.content ?? "")
              ),
              toolCallId: typeof $.tool_call_id == "string" ? $.tool_call_id : void 0
            })),
            params: y.params && typeof y.params == "object" ? y.params : void 0,
            durationMs: typeof y.duration_ms == "number" ? y.duration_ms : void 0
          }, _.raw = [
            ..._.raw ?? [],
            g
          ];
        }
        break;
      }
      case "llm/api_response": {
        const S = l.get(g.run_id);
        S && S.apiPayload && (y.usage && typeof y.usage == "object" && (S.apiPayload.usage = y.usage), typeof y.duration_ms == "number" && (S.apiPayload.durationMs = y.duration_ms));
        break;
      }
      case "llm/result": {
        const S = s.get(g.run_id), _ = S == null ? void 0 : S.shift(), x = (_ == null ? void 0 : _.callData) ?? {}, $ = typeof y.duration_ms == "number" ? y.duration_ms : null, J = y.usage ?? void 0, Q = y.timing, G = Array.isArray(y.tool_calls) ? y.tool_calls : void 0, se = {
          text: (y.error ? Le(String(y.error)) : Le(String(y.text ?? ""))) || (G && G.length > 0 ? `🛠 ${G.map((xe) => xe.name).join(", ")}` : ""),
          timeSeconds: $ === null ? null : $ / 1e3,
          isError: !!y.error,
          running: !1,
          outputText: y.text ? String(y.text) : void 0,
          thinkingText: y.thinking ? String(y.thinking) : void 0,
          usage: J,
          timing: Q,
          toolCalls: G,
          note: y.note ? String(y.note) : void 0
        };
        _ ? (Object.assign(_.cell, se), l.set(g.run_id, _.cell), _.cell.model = String(
          y.model ?? x.model ?? _.cell.model
        ), _.cell.raw = [
          ..._.call ? [_.call] : [],
          g
        ]) : W(g.run_id, {
          index: ++D,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          startedAt: Ee(g.t) ?? 0,
          model: String(y.model ?? x.model ?? "unknown"),
          ...se
        });
        break;
      }
      case "tool/call": {
        const S = Lt(g), _ = String(S.name ?? "?"), x = _ === "Skill" ? go(S.input) : void 0;
        if (x) {
          E.add(x), I.push([x, "load"]);
          const ae = R.onSkillLoad(
            x,
            g.seq,
            Ee(g.t) ?? 0
          ), Te = n.get(g.run_id);
          Te && w.set(ae, Te);
        }
        const $ = S.input ? String(S.input) : void 0;
        let J;
        if (!x && $) {
          const ae = typeof S.skill_resource == "string" ? S.skill_resource : void 0;
          ae && (J = ae);
        }
        if (!x && !J && $ && u.length > 0) {
          const ae = rs($);
          for (const [Te, Fe] of u)
            if (ae.includes(Te)) {
              J = Fe;
              break;
            }
        }
        let Q, G;
        if (!x && !J && $ && v.size > 0) {
          const ae = Us($, v);
          ae && (Q = ae.skill, G = ae.feature);
        }
        let P, te;
        if (!x && !J && !Q && I.length > 0) {
          const [ae, Te] = I[I.length - 1];
          P = ae, te = Te;
        }
        const se = R.onToolCall({
          attribution: J ? { skill: J, kind: "path", detail: "skill dir in input" } : Q ? {
            skill: Q,
            kind: "content",
            detail: `“${G}” in input (skill doc)`
          } : P ? {
            skill: P,
            kind: "temporal",
            detail: te === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: D + 1,
          seq: g.seq,
          t: Ee(g.t) ?? 0
        });
        if (se && !w.has(se)) {
          const ae = n.get(g.run_id);
          ae && w.set(se, ae);
        }
        const xe = {
          index: ++D,
          runIndex: 0,
          runId: g.run_id,
          kind: "tool",
          text: x ? `📚 ${x}` : `${_}(${Le(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: Ee(g.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: _,
          skillName: x,
          inSkill: J,
          inSkillLoaded: J ? E.has(J) : void 0,
          guidedSkill: P ?? Q,
          guidedReason: te ?? (Q ? "load" : void 0),
          skillSpanId: se ?? void 0,
          toolInput: S.input ? String(S.input) : void 0,
          toolSchema: m.get(_)
        };
        W(g.run_id, xe);
        const Ae = o.get(g.run_id) ?? [];
        Ae.push({ cell: xe, callData: S, call: g }), o.set(g.run_id, Ae);
        break;
      }
      case "tool/result": {
        const S = o.get(g.run_id), _ = typeof y.tool_call_id == "string" ? y.tool_call_id : null;
        let x;
        if (S) {
          const te = _ ? S.findIndex(
            (se) => se.callData.tool_call_id === _
          ) : -1;
          te >= 0 ? x = S.splice(te, 1)[0] : x = S.shift();
        }
        const $ = typeof y.duration_ms == "number" ? y.duration_ms : null, J = y.ok !== !1 && !y.error, Q = y.output ? String(y.output) : void 0, G = Q ? ` → ${Le(Q, 60)}` : "", P = {
          timeSeconds: $ === null ? null : $ / 1e3,
          isError: !J,
          running: !1,
          toolOutput: Q,
          toolOutputChars: typeof y.output_chars == "number" ? y.output_chars : void 0,
          toolOutputBytes: typeof y.output_bytes == "number" ? y.output_bytes : void 0,
          toolError: y.error ? String(y.error) : void 0,
          note: y.note ? String(y.note) : void 0
        };
        if (x) {
          if (Object.assign(x.cell, P), !x.cell.skillName)
            x.cell.text = `${x.cell.text}${G}`;
          else if (Q) {
            const te = typeof y.skill_sha == "string" ? y.skill_sha : null;
            te && A.get(x.cell.skillName) === te || (v.set(
              x.cell.skillName,
              Hs(Q)
            ), te && A.set(x.cell.skillName, te));
          }
          x.cell.raw = [
            ...x.call ? [x.call] : [],
            g
          ];
        } else
          W(g.run_id, {
            index: ++D,
            runIndex: 0,
            runId: g.run_id,
            kind: "tool",
            text: `?${G}`,
            startedAt: Ee(g.t) ?? 0,
            ...P
          });
        break;
      }
    }
  }
  for (const [g, y] of a) {
    const S = n.get(g);
    if (S) {
      for (const _ of y) K(S).push(_);
      a.delete(g);
    }
  }
  for (const g of t) {
    const y = [];
    for (const S of g.groups)
      for (const _ of S.cells)
        _.skillName && !y.includes(_.skillName) && y.push(_.skillName);
    y.length > 0 && (g.skillsUsed = y);
  }
  const V = R.spans(), ne = new Set(V.map((g) => g.skill)).size, Y = /* @__PURE__ */ new Map();
  for (const g of t)
    for (const y of g.groups)
      for (const S of y.cells) Y.set(S.index, S);
  for (const g of V) {
    const y = w.get(g.id);
    y && (y.skillSpans ?? (y.skillSpans = [])).push(g);
    for (const S of g.attributedIndexes) {
      const _ = Y.get(S);
      _ && (_.skillSpanId = g.id, _.skillSpanHue = ne > 1 ? g.colorHue : void 0, _.skillSpanBypass = g.bypass);
    }
  }
  return t;
}
function In(e) {
  return e.flatMap((t) => t.groups.flatMap((n) => n.cells));
}
function vo(e) {
  var a;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const t = e[0], n = ((a = t.groups[0]) == null ? void 0 : a.cells) ?? [], s = n.findIndex(
    (c) => c.kind === "system" && c.headerReason === "initial" && c.prompt !== void 0
  );
  if (s < 0) return { initial: null, turns: [...e] };
  const l = n[s], o = {
    ...t,
    groups: [
      {
        ...t.groups[0],
        cells: n.filter((c, p) => p !== s)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const be = {
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
}, Cn = "agent-trace-timeline-styles", bo = `
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
let Nt = !1;
function xo() {
  if (Nt || typeof document > "u") return;
  if (document.getElementById(Cn)) {
    Nt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Cn, e.textContent = bo, document.head.appendChild(e), Nt = !0;
}
function Pt(e) {
  return Gs(e);
}
function as(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Mn(e) {
  return e != null && Number.isFinite(e);
}
function cs(e) {
  if (!Mn(e.startedAt)) return null;
  const t = Mn(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + t };
}
function us(e, t = "sequence") {
  if (t !== "sequence")
    return ko(
      e,
      t === "duration" || t === "actual",
      t === "duration"
    );
  const n = [], s = [];
  for (const l of e) {
    const o = l.groups.flatMap((a) => a.cells);
    o.length !== 0 && (l.turn !== null && s.push({
      turn: l.turn,
      time: n.length
    }), n.push(
      ...o.map(
        (a, c) => ({
          start: n.length + c,
          end: n.length + c + 1,
          index: a.index,
          isError: a.isError === !0,
          kind: a.kind,
          label: a.text,
          lane: as(a.kind)
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
function ko(e, t, n) {
  const s = e.flatMap((f) => {
    const h = f.groups.flatMap(
      (m) => m.cells.flatMap((u) => {
        const E = cs(u);
        return E === null ? [] : [
          {
            ...E,
            index: u.index,
            isError: u.isError === !0,
            kind: u.kind,
            label: u.text,
            lane: as(u.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: f.turn, rawSpans: h }];
  }), l = s.flatMap((f) => f.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let a = 0, c = null;
  for (const f of [...l].sort(
    (h, m) => h.start - m.start || h.end - m.end
  ))
    n && c !== null && f.start > c && (a += f.start - c), o.set(f, a), c = c === null ? f.end : Math.max(c, f.end);
  const p = [], i = [];
  for (const f of s) {
    const h = f.rawSpans.map((m) => {
      const u = o.get(m) ?? 0;
      return {
        ...m,
        start: m.start - u,
        end: (t ? m.end : m.start) - u
      };
    });
    p.push(...h), f.turn !== null && i.push({
      turn: f.turn,
      time: Math.min(...h.map((m) => m.start))
    });
  }
  return {
    start: Math.min(...p.map((f) => f.start)),
    end: Math.max(...p.map((f) => f.end)),
    spans: p,
    turnBoundaries: i
  };
}
function wo(e, t = "sequence") {
  const n = (c) => c.skillSpans ?? [];
  if (e.every((c) => n(c).length === 0)) return null;
  if (t === "sequence") {
    const c = /* @__PURE__ */ new Map();
    let p = 0;
    for (const f of e)
      for (const h of f.groups.flatMap((m) => m.cells))
        c.set(h.index, p), p += 1;
    const i = [];
    for (const f of e)
      for (const h of n(f)) {
        const m = h.attributedIndexes.map((I) => c.get(I)).filter((I) => I !== void 0);
        let u = m.length ? Math.min(...m) : void 0;
        if (u === void 0) {
          const I = f.groups.flatMap((R) => R.cells).find(
            (R) => R.kind !== "system" && R.skillName === h.skill
          );
          u = I ? c.get(I.index) : void 0;
        }
        if (u === void 0) continue;
        const E = m.length ? Math.max(...m) : u;
        i.push($n(h, u, E + 1));
      }
    return i;
  }
  const s = e.flatMap(
    (c) => c.groups.flatMap(
      (p) => p.cells.flatMap((i) => {
        const f = cs(i);
        return f === null ? [] : [f];
      })
    )
  );
  s.sort((c, p) => c.start - p.start || c.end - p.end);
  const l = t === "duration", o = (c) => {
    let p = 0, i = null;
    for (const f of s) {
      if (f.start >= c) break;
      if (l && i !== null && f.start > i) {
        const h = Math.min(f.start, c);
        h > i && (p += h - i);
      }
      i = i === null ? f.end : Math.max(i, f.end);
    }
    return p;
  }, a = [];
  for (const c of e)
    for (const p of n(c)) {
      const i = p.startT, f = Math.max(js(p), i + 1), h = o(i), m = o(f);
      a.push(
        $n(
          p,
          i - h,
          Math.max(i - h + 1, f - m)
        )
      );
    }
  return a;
}
function $n(e, t, n) {
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
function To(e, t, n = "sequence") {
  const s = us(e, n);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= t.end && l.end >= t.start).map((l) => l.index)
  );
}
xo();
const yt = window.QwenPaw.host, q = yt.React, { useEffect: rt, useMemo: Dt, useRef: at, useState: De } = q, { Tooltip: ds } = yt.antd, jt = 3, _o = 4, Io = 0.08, Co = 0.025, Mo = 32, $o = 0.5;
function zo(e) {
  const t = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), n = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, o = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...t === void 0 ? {} : { durationMs: t },
    ...n === void 0 ? {} : { startedAt: n },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function Ao(e) {
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
function Ro(e, t) {
  const n = Ao(e);
  if (t === void 0) return n;
  const s = t.durationMs === void 0 ? null : `Total ${Pt(t.durationMs)}`, l = t.startedAt === void 0 ? null : t.durationMs === void 0 ? `Started ${ze(t.startedAt)}` : `${ze(t.startedAt)} → ${ze(
    t.startedAt + t.durationMs
  )}`, o = t.ttftMs === void 0 || t.decodingMs === void 0 ? null : `TTFT ${Pt(
    t.ttftMs
  )} · Decoding ${Pt(t.decodingMs)}`, a = [s, o].filter((c) => c !== null).join(" · ");
  return [n, l, a].filter((c) => c !== null && c !== "").join(`
`);
}
function Vt(e, t) {
  return e <= t ? { start: e, end: t } : { start: t, end: e };
}
function Bt(e) {
  return Math.min(1, Math.max(0, e));
}
function Oo(e, t, n, s) {
  const l = Math.min(s - n, Math.max(0, t)), o = Math.min(
    Math.max(e - l / 2, n),
    s - l
  );
  return { start: o, end: o + l };
}
function zn(e, t, n, s, l) {
  const o = Vt(
    Math.min(l, Math.max(s, e.start)),
    Math.min(l, Math.max(s, e.end))
  );
  return {
    start: (o.start - t) / n,
    end: (o.end - t) / n
  };
}
function ps({
  label: e,
  placement: t,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ q.createElement(
    ds,
    {
      title: /* @__PURE__ */ q.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: t,
      mouseEnterDelay: $o,
      ...s
    },
    n
  );
}
function An() {
  return /* @__PURE__ */ q.createElement("div", { className: be.labels, "aria-hidden": "true" }, /* @__PURE__ */ q.createElement("span", null, "Input"), /* @__PURE__ */ q.createElement("span", null, "Model"), /* @__PURE__ */ q.createElement("span", null, "Tools"));
}
function Rn({
  loading: e,
  onHover: t,
  onLoad: n
}) {
  return /* @__PURE__ */ q.createElement(
    ps,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ q.createElement(
      "button",
      {
        type: "button",
        className: be.earlierHistory,
        "data-earlier-history": !0,
        "data-loading": e || void 0,
        "aria-label": e ? "Loading earlier history" : "Load earlier history",
        "aria-disabled": e || n === void 0,
        onClick: n,
        onPointerEnter: (s) => {
          s.stopPropagation(), t();
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
const Lo = q.memo(function({
  spans: t,
  modelStart: n,
  fullDuration: s,
  domainStart: l,
  domainDuration: o,
  mode: a,
  selectedIndex: c,
  hoveredIndex: p,
  searchMatchIndexes: i,
  activeRange: f,
  detailByIndex: h
}) {
  return /* @__PURE__ */ q.createElement(q.Fragment, null, t.filter(
    (m) => m.index === c || m.end >= l && m.start <= l + o
  ).map((m) => {
    const u = (m.start - n) / s, I = (m.end - m.start) / s * 100, R = h.get(m.index), w = R == null ? void 0 : R.ttftMs, v = R == null ? void 0 : R.decodingMs, A = w === void 0 || v === void 0 || w + v <= 0 ? null : w / (w + v);
    return /* @__PURE__ */ q.createElement(
      ps,
      {
        key: m.index,
        label: Ro(m.kind, R),
        placement: "bottom"
      },
      /* @__PURE__ */ q.createElement(
        "span",
        {
          "aria-hidden": "true",
          className: be.span,
          "data-timeline-span": m.kind,
          "data-timeline-record-index": m.index,
          "data-assistant-timing": A === null ? void 0 : "true",
          "data-error": m.isError || void 0,
          "data-equal-duration": a === "time" || void 0,
          "data-current": m.index === c || void 0,
          "data-hovered": p === m.index || void 0,
          "data-search-match": i === null ? void 0 : i.has(m.index) ? "true" : "false",
          "data-selected": f === null ? void 0 : m.start <= f.end && m.end >= f.start ? "true" : "false",
          style: {
            "--trajectory-span-left": `${u * 100}%`,
            "--trajectory-span-width": `${I}%`,
            "--trajectory-span-gap": `min(${I * 0.08}%, 1px)`,
            "--trajectory-span-lane": m.lane,
            ...A === null ? {} : {
              "--trajectory-assistant-ttft": `${A * 100}%`
            }
          }
        }
      )
    );
  }));
}), No = q.memo(function({
  turns: t,
  mode: n,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: a = null,
  searchMatchIndexes: c = null,
  onRangeChange: p,
  onRecordSelect: i,
  onRecordFocus: f,
  onSkillSpanSelect: h
}) {
  const m = typeof yt.useTheme == "function" ? yt.useTheme() : void 0, u = Dt(
    () => us(t, n),
    [n, t]
  ), E = Dt(
    () => wo(t, n),
    [n, t]
  ), I = Dt(
    () => new Map(
      t.flatMap(
        (b) => b.groups.flatMap(
          (H) => H.cells.map(
            (Z) => [Z.index, zo(Z)]
          )
        )
      )
    ),
    [t]
  ), R = at(null), w = at(null), v = at(null), A = at(null), [z, M] = De(null), [D, ee] = De(null), [K, ue] = De(null), [W, O] = De(!1), [V, ne] = De(!1), [Y, de] = De(null), [Ce, g] = De(!1);
  rt(() => {
    u !== null && s !== null && (s.end < u.start || s.start > u.end) && p(null);
  }, [u, p, s]), rt(() => {
    u !== null && (g(!1), de(
      (b) => b !== null && (b.end < u.start || b.start > u.end) ? null : b
    ));
  }, [u]), rt(() => {
    if (u === null || a === null) return;
    const b = u.spans.find(
      (H) => H.index === a
    );
    b !== void 0 && (g(!0), de((H) => {
      if (H === null || b.end > H.start && b.start < H.end)
        return H;
      const Z = Math.max(1, H.end - H.start), ce = b.end <= H.start ? b.start : b.end - Z, oe = Math.min(
        Math.max(ce, u.start),
        Math.max(u.start, u.end - Z)
      );
      return oe === H.start ? H : { start: oe, end: oe + Z };
    }));
  }, [u, a]);
  const y = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), S = Math.min(
    y,
    Math.max(1, ((Y == null ? void 0 : Y.end) ?? 0) - ((Y == null ? void 0 : Y.start) ?? 0))
  ), _ = u === null || Y === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(Y.start, u.start),
    u.end - S
  ), x = Y === null ? y : S, $ = Y === null ? (u == null ? void 0 : u.start) ?? 0 : _, J = l && u !== null && $ === u.start, Q = o === void 0 || W ? void 0 : () => {
    O(!0), o().finally(() => {
      O(!1);
    });
  }, G = u === null ? void 0 : {
    "--trajectory-domain-left": `${-($ - u.start) / x * 100}%`,
    "--trajectory-domain-width": `${y / x * 100}%`
  }, P = u === null || s === null ? null : zn(
    s,
    $,
    x,
    u.start,
    u.end
  ), se = (u === null || z === null ? null : zn(
    z,
    $,
    x,
    u.start,
    u.end
  )) ?? P, xe = z ?? s;
  if (rt(() => {
    const b = v.current;
    if (b === null) return;
    const H = (Z) => {
      Z.preventDefault();
      const ce = A.current;
      if (ce === null || u === null) return;
      g(!1);
      const oe = ce.getBoundingClientRect(), he = Bt(
        (Z.clientX - oe.left) / Math.max(1, oe.width)
      ), fe = Math.min(
        y,
        Math.max(
          Math.min(
            n === "sequence" ? _o : 20,
            y
          ),
          x * Math.exp(Z.deltaY * 15e-4)
        )
      );
      if (fe >= y * 0.999) {
        de(null);
        return;
      }
      const Se = $ + he * x, me = Math.min(
        Math.max(Se - he * fe, u.start),
        u.end - fe
      );
      de({ start: me, end: me + fe });
    };
    return b.addEventListener("wheel", H, { passive: !1 }), () => {
      b.removeEventListener("wheel", H);
    };
  }, [x, $, y, n, u]), u === null)
    return /* @__PURE__ */ q.createElement(
      "section",
      {
        ref: v,
        className: be.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ q.createElement("div", { className: be.plot }, /* @__PURE__ */ q.createElement(An, null), /* @__PURE__ */ q.createElement("div", { className: be.track }, /* @__PURE__ */ q.createElement("span", { className: be.empty }, "No timing data"), l && /* @__PURE__ */ q.createElement(
        Rn,
        {
          loading: W,
          onHover: () => {
            ee(null);
          },
          onLoad: Q
        }
      )))
    );
  const Ae = Math.min(
    x,
    y / u.spans.length
  ), ae = (b) => {
    const H = b.currentTarget.getBoundingClientRect();
    return Bt((b.clientX - H.left) / Math.max(1, H.width));
  }, Te = (b) => {
    var oe;
    const H = b.target instanceof HTMLElement ? b.target : null, Z = (oe = H == null ? void 0 : H.closest("[data-timeline-record-index]")) == null ? void 0 : oe.dataset.timelineRecordIndex;
    if (Z === void 0) return null;
    const ce = Number(Z);
    return Number.isFinite(ce) ? ce : null;
  }, Fe = (b) => {
    p(b);
  }, st = (b) => {
    if (b.button === 2) {
      w.current = {
        anchorClientX: b.clientX,
        anchorStart: $,
        moved: !1,
        pannable: Y !== null,
        pointerId: b.pointerId
      }, Y !== null && g(!1), ne(!0), typeof b.currentTarget.setPointerCapture == "function" && b.currentTarget.setPointerCapture(b.pointerId);
      return;
    }
    if (b.button !== 0) return;
    const H = ae(b), Z = $ + H * x, ce = Te(b);
    ee({ fraction: H, recordIndex: ce }), R.current = {
      pointerId: b.pointerId,
      anchorTime: Z,
      anchorClientX: b.clientX,
      recordIndex: ce
    }, typeof b.currentTarget.setPointerCapture == "function" && b.currentTarget.setPointerCapture(b.pointerId), M({ start: Z, end: Z });
  }, lt = (b) => {
    const H = b.currentTarget.getBoundingClientRect(), Z = ae(b), ce = Te(b);
    ee(
      (me) => ce !== null && (me == null ? void 0 : me.recordIndex) === ce ? me : { fraction: Z, recordIndex: ce }
    );
    const oe = w.current;
    if (oe !== null && oe.pointerId === b.pointerId) {
      if (Math.abs(b.clientX - oe.anchorClientX) >= jt && (oe.moved = !0), !oe.pannable) return;
      const me = (b.clientX - oe.anchorClientX) / Math.max(1, H.width), re = Math.min(
        Math.max(oe.anchorStart - me * x, u.start),
        u.end - x
      );
      de({ start: re, end: re + x });
      return;
    }
    const he = R.current;
    if (he === null || he.pointerId !== b.pointerId) return;
    let fe = $;
    if (Y !== null) {
      const me = b.clientX - H.left, re = Math.min(
        Mo,
        Math.max(1, H.width * Io)
      ), Re = me < re ? -1 : me > H.width - re ? 1 : 0;
      if (Re !== 0) {
        const k = Re < 0 ? re - me : me - (H.width - re), j = Bt(k / re), F = $ + Re * x * Co * Math.max(0.2, j);
        fe = Math.min(
          Math.max(F, u.start),
          u.end - x
        ), fe !== $ && (g(!1), de({
          start: fe,
          end: fe + x
        }));
      }
    }
    const Se = fe + Z * x;
    M(Vt(he.anchorTime, Se));
  }, bt = (b) => {
    const H = w.current;
    if (H !== null && H.pointerId === b.pointerId) {
      const re = H.moved || Math.abs(b.clientX - H.anchorClientX) >= jt;
      w.current = null, ne(!1), re || p(null);
      return;
    }
    const Z = R.current;
    if (Z === null || Z.pointerId !== b.pointerId) return;
    const ce = ae(b), oe = $ + ce * x, he = Vt(Z.anchorTime, oe);
    ee({ fraction: ce, recordIndex: Te(b) }), R.current = null, M(null);
    const fe = Math.abs(b.clientX - Z.anchorClientX) < jt, Se = fe && Z.recordIndex !== null ? u.spans.find((re) => re.index === Z.recordIndex) : void 0;
    if (Se !== void 0) {
      p(null), i == null || i(Se.index);
      return;
    }
    const me = he.end - he.start < Ae ? Oo(
      fe ? he.start : (he.start + he.end) / 2,
      Ae,
      u.start,
      u.end
    ) : he;
    if (Fe(me), fe) {
      const re = he.start, Re = u.spans.reduce((k, j) => {
        const F = re < k.start ? k.start - re : re > k.end ? re - k.end : 0;
        return (re < j.start ? j.start - re : re > j.end ? re - j.end : 0) < F ? j : k;
      });
      f == null || f(Re.index);
    }
  }, xt = (b) => {
    b.key !== "Escape" || s === null || (b.preventDefault(), p(null));
  }, kt = () => {
    R.current = null, w.current = null, M(null), ee(null), ne(!1);
  };
  return /* @__PURE__ */ q.createElement(
    "section",
    {
      ref: v,
      className: be.root,
      "data-theme": m || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ q.createElement("div", { className: be.plot }, /* @__PURE__ */ q.createElement(An, null), /* @__PURE__ */ q.createElement(
      "div",
      {
        ref: A,
        className: be.track,
        "data-panning": V || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: xt,
        onPointerDown: st,
        onPointerMove: lt,
        onPointerUp: bt,
        onPointerCancel: kt,
        onPointerLeave: () => {
          R.current === null && w.current === null && ee(null);
        },
        onDoubleClick: (b) => {
          b.preventDefault(), p(null);
        },
        onContextMenu: (b) => {
          b.preventDefault();
        }
      },
      J && /* @__PURE__ */ q.createElement(
        Rn,
        {
          loading: W,
          onHover: () => {
            ee(null);
          },
          onLoad: Q
        }
      ),
      D !== null && D.recordIndex === null && z === null && /* @__PURE__ */ q.createElement(
        "div",
        {
          className: be.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${D.fraction * 100}%`
          }
        }
      ),
      se !== null && /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(
        "div",
        {
          className: be.selection,
          "data-dragging": z === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${se.start * 100}%`,
            "--trajectory-selection-width": `${(se.end - se.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ q.createElement(
        "div",
        {
          className: be.selectionEdges,
          "data-dragging": z === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${se.start * 100}%`,
            "--trajectory-selection-width": `${(se.end - se.start) * 100}%`
          }
        }
      )),
      E !== null && u !== null && /* @__PURE__ */ q.createElement(
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
        E.map((b) => {
          const H = (b.start - u.start) / y, Z = Math.max(
            (b.end - b.start) / y,
            4e-3
          ), ce = ie(), oe = `${b.bypass ? "⚠ " : ""}${b.skill} · ${b.trigger}${b.open ? ` · ${d(ce, "spanOpen")}` : ""}`, he = K === b.spanId, fe = Z > 0.14 && !b.bypass;
          return /* @__PURE__ */ q.createElement(ds, { title: oe, key: b.spanId }, /* @__PURE__ */ q.createElement(
            "span",
            {
              onPointerDown: (Se) => {
                Se.stopPropagation();
              },
              onClick: h ? (Se) => {
                Se.stopPropagation(), h(b.spanId);
              } : void 0,
              onMouseEnter: () => ue(b.spanId),
              onMouseLeave: () => ue(
                (Se) => Se === b.spanId ? null : Se
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, H) * 100}%`,
                width: `${Z * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${b.hue}, 65%, ${he ? 62 : 55}%, ${he ? 0.85 : 0.55})`,
                border: b.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${b.hue}, 55%, 45%, 0.8)`,
                pointerEvents: h ? "auto" : "none",
                cursor: h ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            fe ? /* @__PURE__ */ q.createElement(
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
              b.skill
            ) : null
          ));
        })
      ),
      /* @__PURE__ */ q.createElement(
        "div",
        {
          className: be.turnBoundaries,
          "data-animate-viewport": Ce || void 0,
          "aria-hidden": "true",
          style: G
        },
        u.turnBoundaries.filter(
          (b) => b.time > u.start && b.time >= $ && b.time <= $ + x
        ).map((b) => /* @__PURE__ */ q.createElement(
          "span",
          {
            className: be.turnBoundary,
            "data-turn": b.turn,
            key: b.turn,
            style: {
              "--trajectory-turn-left": `${(b.time - u.start) / y * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ q.createElement(
        "div",
        {
          className: be.lanes,
          "data-animate-viewport": Ce || void 0,
          "data-timeline-domain": !0,
          style: G
        },
        /* @__PURE__ */ q.createElement(
          Lo,
          {
            spans: u.spans,
            modelStart: u.start,
            fullDuration: y,
            domainStart: $,
            domainDuration: x,
            mode: n,
            selectedIndex: a,
            hoveredIndex: (D == null ? void 0 : D.recordIndex) ?? null,
            searchMatchIndexes: c,
            activeRange: xe,
            detailByIndex: I
          }
        )
      )
    ))
  );
}), Xt = window.QwenPaw.host, le = Xt.React, { Button: Po, Input: Do, Popover: jo, Segmented: Bo, Tooltip: On } = Xt.antd, {
  MenuFoldOutlined: Fo,
  MenuUnfoldOutlined: Ho,
  QuestionCircleOutlined: Uo,
  ReloadOutlined: Wo,
  SearchOutlined: Ko
} = Xt.antdIcons;
function Vo({
  mode: e,
  onModeChange: t,
  search: n,
  onSearchChange: s,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: a,
  hasRequests: c,
  onToggleCollapseAll: p,
  callsCollapsed: i,
  onToggleCallsCollapsed: f
}) {
  const h = ie();
  return /* @__PURE__ */ le.createElement(
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
    /* @__PURE__ */ le.createElement(On, { title: d(h, "projectionHint") }, /* @__PURE__ */ le.createElement(
      Bo,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (m) => t(m)
      }
    )),
    /* @__PURE__ */ le.createElement(
      Do,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ le.createElement(Ko, null),
        placeholder: d(h, "searchEvents"),
        value: n,
        style: { width: 220 },
        onChange: (m) => s(m.target.value)
      }
    ),
    c && /* @__PURE__ */ le.createElement(
      On,
      {
        title: a ? d(h, "expandAll") : d(h, "collapseAll")
      },
      /* @__PURE__ */ le.createElement(
        Po,
        {
          size: "small",
          type: "text",
          icon: a ? /* @__PURE__ */ le.createElement(Ho, null) : /* @__PURE__ */ le.createElement(Fo, null),
          onClick: p
        }
      )
    ),
    /* @__PURE__ */ le.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ le.createElement(
      jo,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ le.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ le.createElement("div", null, /* @__PURE__ */ le.createElement("strong", null, "📚"), " ", d(h, "legendLoad")), /* @__PURE__ */ le.createElement("div", null, /* @__PURE__ */ le.createElement("strong", null, "⚡"), " ", d(h, "legendResource")), /* @__PURE__ */ le.createElement("div", null, /* @__PURE__ */ le.createElement("strong", null, "∈"), " ", d(h, "legendGuided")), /* @__PURE__ */ le.createElement("div", null, /* @__PURE__ */ le.createElement("strong", null, d(h, "legendStripTitle")), " ", d(h, "legendStrip")), /* @__PURE__ */ le.createElement("div", null, /* @__PURE__ */ le.createElement("strong", null, d(h, "legendBandTitle")), " ", d(h, "legendBand")))
      },
      /* @__PURE__ */ le.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ le.createElement(Uo, null), " ", d(h, "legendTitle"))
    ), /* @__PURE__ */ le.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ le.createElement(Wo, null),
      " ",
      d(h, "refresh")
    ))
  );
}
function qo(e) {
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
const vt = window.QwenPaw.host, N = vt.React, { useCallback: Ne, useEffect: Ye, useMemo: Ie, useRef: Ln, useState: ve } = N, {
  Button: ct,
  Empty: Nn,
  Popconfirm: Go,
  Popover: Xo,
  Space: Jo,
  Spin: hs,
  Switch: Qo,
  Tag: Yo,
  Tooltip: Zo,
  message: Ze
} = vt.antd, { DeleteOutlined: ei, DownloadOutlined: ti, SettingOutlined: Pn } = vt.antdIcons, { Text: Pe } = vt.antd.Typography;
function Dn({
  config: e,
  onChange: t,
  children: n
}) {
  const s = ie(), l = (a, c, p) => /* @__PURE__ */ N.createElement(
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
    /* @__PURE__ */ N.createElement(Pe, { style: { fontSize: 13 } }, a),
    /* @__PURE__ */ N.createElement(
      Qo,
      {
        size: "small",
        checked: !!c,
        onChange: (i) => t({ [p]: i })
      }
    )
  ), o = /* @__PURE__ */ N.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ N.createElement(Pe, { strong: !0, style: { fontSize: 13 } }, d(s, "settings")), /* @__PURE__ */ N.createElement("div", { style: { marginTop: 8 } }, e ? [
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
  ] : /* @__PURE__ */ N.createElement(hs, { size: "small" })));
  return /* @__PURE__ */ N.createElement(Xo, { content: o, trigger: "click", placement: "bottomRight" }, n);
}
function ni({
  sessionId: e,
  summary: t,
  locale: n,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  var Re;
  const [o, a] = ve(null), [c, p] = ve(!1), [i, f] = ve(!1), [h, m] = ve(""), [u, E] = ve(""), [I, R] = ve("sequence"), [w, v] = ve(null), [A, z] = ve(null), [M, D] = ve(null), [ee, K] = ve(null), [ue, W] = ve(
    /* @__PURE__ */ new Set()
  ), [O, V] = ve(!1), [ne, Y] = ve(null), [de, Ce] = ve(null), [g, y] = ve(null), [S, _] = ve(null), x = Ln(null);
  x.current = e, Ye(() => {
    ws().then(Y).catch(() => Y(null));
  }, []);
  const $ = Ne(async (k, j) => {
    j || p(!0);
    try {
      const { sessionId: F, instance: pe } = $t(k), Me = await ks(F, {
        beforeSeq: j,
        limit: 200,
        instance: pe
      });
      if (x.current !== k) return;
      _(null), a((_e) => bs(_e, Me));
    } catch (F) {
      if (x.current !== k) return;
      _({
        message: String(F.message),
        status: F instanceof Xn ? F.status : null
      });
    } finally {
      x.current === k && !j && p(!1);
    }
  }, []), J = Ne(async (k) => {
    try {
      const { sessionId: j, instance: F } = $t(k), pe = await xs(j, F);
      if (x.current !== k) return;
      y(pe), Ce({
        sessionId: k,
        inputTokens: pe.input_tokens,
        outputTokens: pe.output_tokens,
        totalTokens: pe.total_tokens,
        reasoningTokens: Number(pe.reasoning_tokens ?? 0)
      });
    } catch {
      if (x.current !== k) return;
      y(null), Ce(null);
    }
  }, []);
  Ye(() => {
    e ? (v(null), z(null), D(null), W(/* @__PURE__ */ new Set()), m(""), E(""), a(null), _(null), $(e), J(e)) : (a(null), y(null), Ce(null));
  }, [e, $, J]), Ye(() => {
    const k = window.setTimeout(() => E(h), 180);
    return () => window.clearTimeout(k);
  }, [h]);
  const Q = Ie(
    () => o ? Eo(o.events) : [],
    [o]
  ), { initial: G, turns: P } = Ie(
    () => vo(Q),
    [Q]
  ), te = Ie(
    () => G ? [G, ...In(P)] : In(P),
    [G, P]
  ), se = Ie(
    () => P.some((k) => k.status === "running"),
    [P]
  );
  Ye(() => {
    if (!e || !se) return;
    const k = setInterval(() => {
      document.visibilityState === "visible" && x.current && $(x.current);
    }, 5e3);
    return () => clearInterval(k);
  }, [e, se, $]);
  const xe = Ie(
    () => w === null ? null : To(P, w, I),
    [w, P, I]
  ), Ae = Ie(
    () => te.map((k) => ({
      index: k.index,
      haystack: qo(k)
    })),
    [te]
  ), ae = Ie(() => {
    const k = u.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return k.length === 0 ? null : new Set(
      Ae.filter((j) => k.every((F) => j.haystack.includes(F))).map((j) => j.index)
    );
  }, [u, Ae]), Te = Ie(
    () => A === null ? null : te.find((k) => k.index === A) ?? null,
    [te, A]
  ), Fe = Ie(() => {
    var ln, on;
    if (M === null) return null;
    const k = P.find((U) => U.turn === M);
    if (!k) return null;
    const j = ((ln = k.groups[0]) == null ? void 0 : ln.cells) ?? [], F = j.filter((U) => U.kind === "message"), pe = j.filter((U) => U.kind === "tool"), Me = [
      ...new Set(
        F.map((U) => U.model).filter((U) => !!U)
      )
    ], _e = [
      ...new Set(
        F.map((U) => U.provider).filter((U) => !!U)
      )
    ];
    let Oe = 0, Jt = 0, Qt = 0, Yt = 0, Zt = 0, ot = null, wt = 0;
    const en = [];
    for (const U of j)
      U.usage && (Oe += U.usage.input_tokens ?? 0, Jt += U.usage.output_tokens ?? 0, Qt += U.usage.cache_input_tokens ?? 0, Yt += U.usage.cache_creation_input_tokens ?? 0, Zt += U.usage.reasoning_tokens ?? 0), U.timing && (ot = ot === null ? U.timing.ttft_ms : Math.min(ot, U.timing.ttft_ms), wt = (wt ?? 0) + U.timing.decode_ms), U.isError && en.push(U.toolError ?? U.text ?? "error");
    const He = j.find((U) => U.kind === "user"), fs = (on = [...F].reverse().find((U) => U.options)) == null ? void 0 : on.options, Tt = [...F].reverse().find((U) => U.outputText);
    let tn;
    const nn = F.filter((U) => U.messagesMeta);
    if (nn.length > 0) {
      const U = {};
      let Ue = 0, It = 0;
      for (const gs of nn) {
        const Ct = gs.messagesMeta;
        for (const [rn, ys] of Object.entries(Ct.charsByRole))
          U[rn] = (U[rn] ?? 0) + ys;
        Ue += Ct.totalChars, It = Math.max(It, Ct.maxToolChars);
      }
      tn = { charsByRole: U, totalChars: Ue, maxToolChars: It };
    }
    const _t = P.findIndex((U) => U.turn === M), sn = _t > 0 ? P[_t - 1] : null;
    let Ge = null;
    if (sn) {
      Ge = 0;
      for (const U of sn.groups)
        for (const Ue of U.cells)
          Ue.kind === "message" && Ue.usage && (Ge += Ue.usage.input_tokens ?? 0);
    }
    const ms = Ge === null && _t !== 0 ? void 0 : {
      prevInputTokens: Ge,
      deltaTokens: Oe - (Ge ?? 0)
    };
    return {
      turn: M,
      status: k.status,
      durationMs: k.durationMs,
      startedAt: (He == null ? void 0 : He.startedAt) ?? null,
      query: (He == null ? void 0 : He.text) ?? "",
      llmCalls: F.length,
      toolCalls: pe.length,
      models: Me,
      providers: _e,
      inputTokens: Oe,
      outputTokens: Jt,
      cacheReadTokens: Qt,
      cacheWriteTokens: Yt,
      reasoningTokens: Zt,
      inputComposition: tn,
      growth: ms,
      resultIndex: Tt == null ? void 0 : Tt.index,
      ttftMs: ot,
      decodeMs: wt,
      errors: en,
      options: fs,
      sessionTotals: de && de.sessionId === e ? {
        inputTokens: de.inputTokens,
        outputTokens: de.outputTokens,
        totalTokens: de.totalTokens,
        reasoningTokens: de.reasoningTokens
      } : void 0
    };
  }, [M, P, de, e]), st = !!(o && o.events.length > 0 && o.events[0].seq > 1), lt = async (k) => {
    try {
      Y(await Ts(k));
    } catch (j) {
      Ze.error(String(j.message));
    }
  }, bt = Ie(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), xt = Ie(() => {
    if (!g) return null;
    const k = [
      `${g.runs} ${d(n, "statRounds")} · ${g.llm_calls} ${d(n, "statSteps")}`,
      `LLM ${ge(g.llm_ms_total / 1e3)} · ${d(
        n,
        "toolCalls"
      )} ${ge(g.tool_ms_total / 1e3)}`,
      `${d(n, "statTtftAvg")} ${g.ttft_ms_avg === null ? "-" : ge(g.ttft_ms_avg / 1e3)} · ${ft(
        g.output_tokens,
        g.decode_ms_total / 1e3
      )}`
    ];
    if (g.cache_read_tokens > 0 || g.cache_write_tokens > 0) {
      const j = g.cache_read_tokens + g.input_tokens, F = j > 0 ? Math.round(g.cache_read_tokens / j * 100) : 0;
      k.push(`${d(n, "statCacheHit")} ${F}%`);
    }
    if (k.push(
      `${d(n, "statInput")} ${X(
        g.input_tokens
      )} tok · ${d(n, "statOutput")} ${X(
        g.output_tokens
      )} tok`
    ), t && k.push(Ht(t.size_bytes)), g.skills) {
      const j = Object.entries(g.skills).sort((F, pe) => pe[1] - F[1]).map(([F, pe]) => `${F} ×${pe}`).join(" · ");
      j && k.push(`📚 ${j}`);
    }
    if (G != null && G.prompt) {
      const j = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set();
      for (const Me of P)
        for (const _e of Me.groups)
          for (const Oe of _e.cells)
            Oe.skillName ? F.add(Oe.skillName) : Oe.inSkill && j.add(Oe.inSkill);
      const pe = [...j].filter((Me) => !F.has(Me));
      pe.length > 0 && k.push(
        `⚡ ${d(n, "skillBypassStrip")}: ${pe.join(" · ")}`
      );
    }
    return k.join(" | ");
  }, [g, t, n, P, G]), kt = () => {
    z(null), D(null);
  };
  Ye(() => {
    A !== null && K(null);
  }, [A]);
  const b = Ie(
    () => ee === null ? null : P.flatMap((k) => k.skillSpans ?? []).find((k) => k.id === ee) ?? null,
    [ee, P]
  ), H = (S == null ? void 0 : S.status) === 404, Z = Te !== null || Fe !== null, ce = Ln(null);
  ce.current = ((Re = o == null ? void 0 : o.events[0]) == null ? void 0 : Re.seq) ?? null;
  const oe = Ne(async () => {
    const k = x.current, j = ce.current;
    return !k || j === null ? !1 : (await $(k, j), !0);
  }, [$]), he = Ne(() => {
    f(!0), oe().finally(() => f(!1));
  }, [oe]), fe = Ne((k) => {
    z((j) => j === k ? null : k), D(null);
  }, []), Se = Ne((k) => {
    D(k), z(null);
  }, []), me = Ne((k) => {
    W((j) => {
      const F = new Set(j);
      return F.has(k) ? F.delete(k) : F.add(k), F;
    });
  }, []), re = Ne(
    (k, j) => {
      var Me;
      const pe = (j !== null ? (((Me = P.find((_e) => _e.turn === j)) == null ? void 0 : Me.skillSpans) ?? []).find(
        (_e) => _e.skill === k
      ) : void 0) ?? P.flatMap((_e) => _e.skillSpans ?? []).find((_e) => _e.skill === k);
      pe && K(pe.id);
    },
    [P]
  );
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
          Pe,
          {
            strong: !0,
            ellipsis: {
              tooltip: (t == null ? void 0 : t.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (t == null ? void 0 : t.title) || (t == null ? void 0 : t.agent_id) || Yn(e)
        ),
        /* @__PURE__ */ N.createElement(
          Yo,
          {
            color: es[(t == null ? void 0 : t.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          ts((t == null ? void 0 : t.status) ?? "unknown")
        ),
        t != null && t.channel ? /* @__PURE__ */ N.createElement(Pe, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, t.channel) : null,
        /* @__PURE__ */ N.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ N.createElement(Jo, null, /* @__PURE__ */ N.createElement(Dn, { config: ne, onChange: lt }, /* @__PURE__ */ N.createElement(ct, { size: "small", icon: /* @__PURE__ */ N.createElement(Pn, null) })), /* @__PURE__ */ N.createElement(Zo, { title: d(n, "export") }, /* @__PURE__ */ N.createElement(
          ct,
          {
            size: "small",
            icon: /* @__PURE__ */ N.createElement(ti, null),
            onClick: () => {
              const { sessionId: k, instance: j } = $t(e);
              _s(k, j).then(() => Ze.success(d(n, "exported"))).catch(
                (F) => Ze.error(String(F.message))
              );
            }
          },
          d(n, "export")
        )), e.includes("~") ? null : /* @__PURE__ */ N.createElement(
          Go,
          {
            title: d(n, "deleteConfirm"),
            onConfirm: () => {
              Is(e).then(() => {
                Ze.success(d(n, "deleted")), l == null || l();
              }).catch(
                (k) => Ze.error(String(k.message))
              );
            }
          },
          /* @__PURE__ */ N.createElement(ct, { size: "small", danger: !0, icon: /* @__PURE__ */ N.createElement(ei, null) }, d(n, "delete"))
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
          Pe,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          xt ?? // Transient line while the stats endpoint responds.
          (t ? `${t.runs} ${d(n, "statRounds")} · ${t.llm_calls} ${d(n, "statSteps")} · ${Zn(
            t.total_tokens
          )} ${d(n, "tokens")} · ${Ht(
            t.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ N.createElement(
          Pe,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                d(n, "copySessionId"),
                d(n, "copiedSessionId")
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
        /* @__PURE__ */ N.createElement(Pe, { type: "secondary", style: { fontSize: 13 } }, d(n, "selectSession")),
        /* @__PURE__ */ N.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ N.createElement(Dn, { config: ne, onChange: lt }, /* @__PURE__ */ N.createElement(ct, { size: "small", icon: /* @__PURE__ */ N.createElement(Pn, null) })))
      )
    ),
    S && !H && /* @__PURE__ */ N.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ N.createElement(Pe, { type: "danger", style: { fontSize: 12 } }, `${d(n, "loadFailed")}: ${S.message}`)),
    /* @__PURE__ */ N.createElement(
      Vo,
      {
        mode: I,
        onModeChange: R,
        search: h,
        onSearchChange: m,
        onRefresh: () => {
          e && ($(e), J(e)), l == null || l();
        },
        modeOptions: bt,
        allCollapsed: P.length > 0 && P.every((k) => ue.has(k.turn ?? -1)),
        hasRequests: P.some((k) => k.turn !== null),
        callsCollapsed: O,
        onToggleCallsCollapsed: () => V((k) => !k),
        onToggleCollapseAll: () => {
          W((k) => P.some(
            (F) => F.turn !== null && !k.has(F.turn)
          ) ? new Set(
            P.map((F) => F.turn).filter((F) => F !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ N.createElement(
      No,
      {
        turns: P,
        mode: I,
        range: w,
        hasEarlierRecords: st,
        onLoadEarlier: oe,
        selectedIndex: A,
        searchMatchIndexes: ae,
        onRangeChange: v,
        onRecordSelect: z,
        onRecordFocus: z,
        onSkillSpanSelect: K
      }
    ),
    c && !o ? /* @__PURE__ */ N.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ N.createElement(hs, null)) : o ? /* @__PURE__ */ N.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ N.createElement(
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
        ho,
        {
          turns: P,
          selectedIndex: A,
          selectedTurn: M,
          collapsedTurns: ue,
          focusIndexes: xe,
          searchMatchIndexes: ae,
          onSelectedIndexChange: fe,
          onSkillSpanOpen: re,
          onSelectedTurnChange: Se,
          callsCollapsed: O,
          onToggleTurn: me,
          hasOlderRecords: st,
          loadingOlder: i,
          onLoadOlder: he,
          emptyText: d(n, "noSessions"),
          initialRecord: G
        }
      )
    ), b ? /* @__PURE__ */ N.createElement(
      vl,
      {
        span: b,
        records: te,
        onJumpRecord: (k) => {
          K(null), z(k);
        },
        onClose: () => K(null)
      }
    ) : Z ? /* @__PURE__ */ N.createElement(
      hl,
      {
        record: Te,
        request: Fe,
        onJumpSession: s,
        onSelectTurn: Se,
        onClose: kt
      }
    ) : null) : /* @__PURE__ */ N.createElement(
      Nn,
      {
        image: Nn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: H && e ? d(n, "noTraceForSession") : d(n, "selectSession")
      }
    )
  );
}
const qe = window.QwenPaw.host, B = qe.React, { useCallback: jn, useEffect: et, useMemo: ut, useRef: Bn, useState: $e } = B, { Button: Fn, Empty: Hn, Input: si, Spin: li, Tag: Ft, Tooltip: Un } = qe.antd, {
  CaretRightOutlined: oi,
  MenuFoldOutlined: ii,
  MenuUnfoldOutlined: ri,
  SearchOutlined: ai
} = qe.antdIcons, { Text: nt } = qe.antd.Typography;
function ci({
  groups: e,
  collapsedAgents: t,
  onToggleAgent: n,
  searching: s,
  selected: l,
  onSelect: o,
  locale: a
}) {
  const c = e.length > 1;
  return /* @__PURE__ */ B.createElement(B.Fragment, null, e.map(([p, i]) => {
    const f = c && !s && t.has(p);
    return /* @__PURE__ */ B.createElement("div", { key: p }, c && /* @__PURE__ */ B.createElement(
      "div",
      {
        onClick: () => n(p),
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
        oi,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: f ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ B.createElement(nt, { strong: !0, style: { fontSize: 12 } }, p),
      /* @__PURE__ */ B.createElement(nt, { type: "secondary", style: { fontSize: 11 } }, i.length)
    ), !f && i.map((h) => {
      const m = Ve(h) === l;
      return /* @__PURE__ */ B.createElement(
        "div",
        {
          key: Ve(h),
          onClick: () => o(Ve(h)),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: m ? "rgba(22,119,255,0.10)" : "transparent",
            border: m ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ B.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ B.createElement(
            nt,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || Yn(h.session_id)
          ),
          c ? null : h.agent_id ? /* @__PURE__ */ B.createElement(
            Ft,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          h.user_id ? /* @__PURE__ */ B.createElement(
            Ft,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "cyan",
              title: h.user_id
            },
            "👤 ",
            h.user_id
          ) : null,
          /* @__PURE__ */ B.createElement(
            Ft,
            {
              color: es[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            ts(h.status)
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
          /* @__PURE__ */ B.createElement("span", null, h.channel || "-"),
          h.instance_id ? /* @__PURE__ */ B.createElement(
            "span",
            {
              title: `${h.instance_id}${h.hostname ? ` (${h.hostname})` : ""}`
            },
            "🖥 ",
            h.hostname || h.instance_id
          ) : null,
          /* @__PURE__ */ B.createElement("span", null, h.runs, " ", d(a, "runs")),
          /* @__PURE__ */ B.createElement("span", null, Zn(h.total_tokens), " tok"),
          h.skills ? /* @__PURE__ */ B.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(h.skills).sort((u, E) => E[1] - u[1]).map(([u, E]) => `${u} ×${E}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(h.skills).sort((u, E) => E[1] - u[1]).slice(0, 2).map(([u]) => u).join(" ")
          ) : null,
          /* @__PURE__ */ B.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Xs(h.last_event_t)
            },
            Js(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function ui() {
  const e = typeof qe.useLocale == "function" ? qe.useLocale() : void 0, t = ut(
    () => qt(e ?? ie()),
    [e]
  ), [n, s] = $e(null), [l, o] = $e(!1), [a, c] = $e(
    /* @__PURE__ */ new Set()
  ), [p, i] = $e(!1), [f, h] = $e(!1), [m, u] = $e(null), [E, I] = $e(""), [R, w] = $e(""), [v, A] = $e(null), z = Bn(n);
  z.current = n;
  const M = Bn(R);
  M.current = R, et(() => {
    const O = window.setTimeout(
      () => w(E.trim()),
      200
    );
    return () => window.clearTimeout(O);
  }, [E]);
  const D = jn(async () => {
    var O;
    try {
      const V = M.current, ne = V ? 0 : ((O = z.current) == null ? void 0 : O.length) ?? 0, Y = await an({
        limit: V ? 100 : Math.min(500, Math.max(100, ne)),
        offset: 0,
        q: V || void 0
      });
      s(Y.sessions), o(Y.has_more), A(null);
    } catch (V) {
      A(String(V.message));
    }
  }, []), ee = jn(async () => {
    var O;
    h(!0);
    try {
      const V = M.current, ne = await an({
        limit: 100,
        offset: ((O = z.current) == null ? void 0 : O.length) ?? 0,
        q: V || void 0
      });
      s((Y) => {
        const de = Y ?? [], Ce = new Set(de.map((g) => Ve(g)));
        return [
          ...de,
          ...ne.sessions.filter((g) => !Ce.has(Ve(g)))
        ];
      }), o(ne.has_more);
    } catch (V) {
      A(String(V.message));
    } finally {
      h(!1);
    }
  }, []);
  et(() => {
    D();
  }, [D, R]), et(() => {
    try {
      const O = new URLSearchParams(window.location.search).get("session");
      O && (O.includes("~") ? u(O) : Jn(O).then((V) => {
        u(V ?? O);
      }));
    } catch {
    }
  }, []), et(() => {
    try {
      const O = new URL(window.location.href);
      m ? O.searchParams.set("session", m) : O.searchParams.delete("session"), window.history.replaceState(window.history.state, "", O);
    } catch {
    }
  }, [m]), et(() => {
    const O = setInterval(() => {
      document.visibilityState === "visible" && D();
    }, 15e3);
    return () => clearInterval(O);
  }, [D]);
  const K = ut(
    () => (n == null ? void 0 : n.find((O) => Ve(O) === m)) ?? null,
    [n, m]
  ), ue = ut(() => {
    if (!n) return [];
    const O = E.trim().toLowerCase();
    return O ? n.filter(
      (V) => [
        V.session_id,
        V.title ?? "",
        V.agent_id,
        V.channel,
        V.user_id ?? "",
        V.instance_id ?? "",
        V.hostname ?? ""
      ].join(" ").toLowerCase().includes(O)
    ) : n;
  }, [n, E]), W = ut(() => {
    const O = /* @__PURE__ */ new Map();
    for (const V of ue) {
      const ne = V.agent_id || "(unknown)", Y = O.get(ne);
      Y ? Y.push(V) : O.set(ne, [V]);
    }
    return [...O.entries()];
  }, [ue]);
  return /* @__PURE__ */ B.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, p ? /* @__PURE__ */ B.createElement(
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
    /* @__PURE__ */ B.createElement(Un, { title: d(t, "expandSidebar"), placement: "right" }, /* @__PURE__ */ B.createElement(
      Fn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ B.createElement(ri, null),
        onClick: () => i(!1)
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
        si,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ B.createElement(ai, null),
          placeholder: d(t, "searchPlaceholder"),
          value: E,
          style: { flex: 1, minWidth: 0 },
          onChange: (O) => I(O.target.value)
        }
      ),
      /* @__PURE__ */ B.createElement(Un, { title: d(t, "collapseSidebar") }, /* @__PURE__ */ B.createElement(
        Fn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ B.createElement(ii, null),
          onClick: () => i(!0)
        }
      ))
    ),
    v ? /* @__PURE__ */ B.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ B.createElement(nt, { type: "danger", style: { fontSize: 12 } }, `${d(t, "loadFailed")}: ${v}`)) : null,
    /* @__PURE__ */ B.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, n === null ? /* @__PURE__ */ B.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ B.createElement(li, null)) : ue.length === 0 ? /* @__PURE__ */ B.createElement(
      Hn,
      {
        image: Hn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ B.createElement("span", { style: { fontSize: 12 } }, d(t, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ B.createElement(
        nt,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        d(t, "noSessionsHint")
      )
    ) : /* @__PURE__ */ B.createElement(
      ci,
      {
        groups: W,
        collapsedAgents: a,
        onToggleAgent: (O) => {
          c((V) => {
            const ne = new Set(V);
            return ne.has(O) ? ne.delete(O) : ne.add(O), ne;
          });
        },
        searching: !!E.trim(),
        selected: m,
        onSelect: u,
        locale: t
      }
    ), n !== null && l && /* @__PURE__ */ B.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ B.createElement(
      "a",
      {
        onClick: () => void ee(),
        style: { fontSize: 12 }
      },
      f ? "…" : `⋯ ${d(t, "loadOlder")} (${(n == null ? void 0 : n.length) ?? 0})`
    )))
  ), /* @__PURE__ */ B.createElement(
    ni,
    {
      sessionId: m,
      summary: K,
      locale: t,
      onJumpSession: u,
      onRefreshSessions: () => void D()
    }
  ));
}
const di = window.QwenPaw.host.React;
var Wn, Kn;
(Kn = (Wn = window.QwenPaw).registerRoutes) == null || Kn.call(Wn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: ui,
    label: d(ie(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var Vn, dt, qn;
(qn = (dt = (Vn = window.QwenPaw.chat) == null ? void 0 : Vn.rightHeader) == null ? void 0 : dt.add) == null || qn.call(
  dt,
  "agent-trace",
  di.createElement(Rs),
  { id: "agent-trace-jump" }
);

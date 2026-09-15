var Zn = Object.defineProperty;
var es = (e, n, t) => n in e ? Zn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var St = (e, n, t) => es(e, typeof n != "symbol" ? n + "" : n, t);
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
    toolSchemaNote: "调用时模型可见的工具定义（来自当前提示词快照）",
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
    reasoningShort: "Reasoning"
  }
};
function Nt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ie() {
  try {
    return Nt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function d(e, n) {
  return ts[e][n];
}
const He = window.QwenPaw.host;
async function ns(e) {
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function $n(e, n) {
  return He.fetch ? He.fetch(e, n) : fetch(He.getApiUrl(e), {
    ...n,
    headers: {
      ...(n == null ? void 0 : n.headers) || {},
      ...He.getApiToken() ? { Authorization: `Bearer ${He.getApiToken()}` } : {}
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
async function as(e) {
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
const Oe = window.QwenPaw.host, st = Oe.React, { useMemo: rs } = st, { Button: cs, Tooltip: us } = Oe.antd, { CompassOutlined: ds } = Oe.antdIcons;
function ps(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function hs() {
  const e = typeof Oe.useLocale == "function" ? Oe.useLocale() : void 0, n = rs(
    () => Nt(e ?? ie()),
    [e]
  );
  return /* @__PURE__ */ st.createElement(us, { title: d(n, "viewCurrentTrace") }, /* @__PURE__ */ st.createElement(
    cs,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ st.createElement(ds, null),
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
function ms(e, n) {
  const t = Gt(e ?? ""), s = Gt(n ?? "");
  if (t.length > Vt || s.length > Vt)
    return [
      ...t.map((m) => ({ kind: "del", text: m })),
      ...s.map((m) => ({ kind: "add", text: m }))
    ];
  const l = t.length, r = s.length, i = new Int32Array((l + 1) * (r + 1)), c = (m, v) => m * (r + 1) + v;
  for (let m = l - 1; m >= 0; m -= 1)
    for (let v = r - 1; v >= 0; v -= 1)
      i[c(m, v)] = t[m] === s[v] ? i[c(m + 1, v + 1)] + 1 : Math.max(i[c(m + 1, v)], i[c(m, v + 1)]);
  const h = [];
  let y = 0, o = 0;
  for (; y < l && o < r; )
    t[y] === s[o] ? (h.push({ kind: "same", text: t[y] }), y += 1, o += 1) : i[c(y + 1, o)] >= i[c(y, o + 1)] ? (h.push({ kind: "del", text: t[y] }), y += 1) : (h.push({ kind: "add", text: s[o] }), o += 1);
  for (; y < l; )
    h.push({ kind: "del", text: t[y] }), y += 1;
  for (; o < r; )
    h.push({ kind: "add", text: s[o] }), o += 1;
  return h;
}
function fs(e, n = 3) {
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
    St(this, "open", /* @__PURE__ */ new Map());
    St(this, "finished", []);
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
function Ss(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function Es(e) {
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
function Ue(e) {
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
  for (; t < e.length && t < n.length && Ue(e[t]) === Ue(n[t]); )
    t += 1;
  const s = e.slice(t), l = n.slice(t), r = /* @__PURE__ */ new Map();
  for (const u of l) {
    const b = Ue(u);
    r.set(b, (r.get(b) ?? 0) + 1);
  }
  const i = [], c = [], h = [];
  for (let u = 0; u < Math.min(t, Xt); u += 1)
    h.push({ status: "kept", role: e[u].role });
  for (const u of s) {
    const b = Ue(u), R = r.get(b) ?? 0;
    R > 0 ? (r.set(b, R - 1), h.push({ status: "kept", role: u.role })) : i.push(u);
  }
  for (const u of l) {
    const b = Ue(u), R = r.get(b) ?? 0;
    R > 0 && (r.set(b, R - 1), c.push(u));
  }
  const y = /* @__PURE__ */ new Map();
  for (const u of c) {
    const b = y.get(u.role);
    b ? b.push(u) : y.set(u.role, [u]);
  }
  const o = [], m = [];
  for (const u of i) {
    const b = y.get(u.role);
    b && b.length > 0 ? o.push([u, b.shift()]) : m.push(u);
  }
  const v = [...y.values()].flat();
  for (const [u, b] of o)
    h.push({
      status: "rewritten",
      role: u.role,
      oldText: u.text,
      newText: b.text
    });
  for (const u of m)
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
function Q(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function ot(e, n) {
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
const ct = window.QwenPaw.host, a = ct.React, { useEffect: $s, useRef: zs, useState: Dn } = a, { Button: jn, Collapse: At, Empty: Qt, Tabs: Pt, Tag: it } = ct.antd, { Text: B } = ct.antd.Typography, { CopyOutlined: As, CloseOutlined: Os } = ct.antdIcons, Rs = 320, Ls = 720, Je = {
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
    l[1] !== void 0 ? c = Je.key : l[2] !== void 0 ? c = Je.string : l[3] !== void 0 ? c = Je.number : c = Je.literal, n.push(
      /* @__PURE__ */ a.createElement("span", { key: r++, style: { color: c } }, i)
    ), s = l.index + i.length;
  }
  return s < e.length && n.push(e.slice(s)), n;
}
function Ee({ value: e, json: n = !1 }) {
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
    /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ a.createElement(
      B,
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
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Input", value: `${Q(e)} tok` }), t ? /* @__PURE__ */ a.createElement(I, { label: "Cached", value: `${Q(t)} tok` }) : null, s ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: "Cache created",
      value: `${Q(s)} tok`
    }
  ) : null, t || s ? /* @__PURE__ */ a.createElement(I, { label: "Other", value: `${Q(r)} tok` }) : null, /* @__PURE__ */ a.createElement(I, { label: "Output", value: `${Q(n)} tok` }), l ? /* @__PURE__ */ a.createElement(I, { label: "Reasoning", value: `${Q(l)} tok` }) : null, l ? /* @__PURE__ */ a.createElement(I, { label: "Content", value: `${Q(i)} tok` }) : null);
}
function Et({
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
    const h = t.charsByRole[c], y = Ds[c] ?? "roleOther", o = Math.round(h / i * 100);
    s.push(
      /* @__PURE__ */ a.createElement(
        I,
        {
          key: c,
          label: d(n, y),
          value: `${Q(h)} ${d(n, "charUnit")} · ${o}%`
        }
      )
    );
  }
  return t.maxToolChars > 0 && s.push(
    /* @__PURE__ */ a.createElement(
      I,
      {
        key: "max-tool",
        label: d(n, "maxToolMsg"),
        value: `${Q(t.maxToolChars)} ${d(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, d(n, "inputComposition")), s, e.inputTokens > 0 ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: d(n, "realInputTokens"),
      value: `${Q(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ a.createElement(
    B,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    d(n, "compositionNote")
  ), e.growth ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: d(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? d(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${Q(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: d(n, "cacheAbsorbed"),
      value: `${Q(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Bs({
  request: e,
  onJumpRecord: n
}) {
  const t = ie(), [s, l] = a.useState("summary"), r = /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: d(t, "startedAt"),
      value: _e(e.startedAt)
    }
  ), /* @__PURE__ */ a.createElement(
    I,
    {
      label: d(t, "duration"),
      value: pe(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: d(t, "ttftLabel"),
      value: pe(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ a.createElement(
    I,
    {
      label: d(t, "decodeLabel"),
      value: pe(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ a.createElement(
    I,
    {
      label: d(t, "throughput"),
      value: ot(
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
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ a.createElement(
        I,
        {
          label: d(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ a.createElement(I, { label: "Query", value: Fs(e.query) }), e.providers.length > 0 ? /* @__PURE__ */ a.createElement(I, { label: "Provider", value: e.providers.join(" · ") }) : null, /* @__PURE__ */ a.createElement(
        I,
        {
          label: d(t, "model"),
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
      )) : null, e.options ? /* @__PURE__ */ a.createElement(Et, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ a.createElement(Ee, { value: e.options, json: !0 })) : null, /* @__PURE__ */ a.createElement(Et, { label: "Usage", onOpen: () => l("usage") }, i), /* @__PURE__ */ a.createElement(Et, { label: "Timing", onOpen: () => l("timing") }, r))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, d(t, "thisRequest")), i, /* @__PURE__ */ a.createElement(js, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        B,
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
        children: /* @__PURE__ */ a.createElement(Ee, { value: e.options, json: !0 })
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
    () => ms(e, n),
    [e, n]
  ), s = a.useMemo(() => gs(t), [t]), l = a.useMemo(() => fs(t), [t]), r = ie();
  return e === void 0 ? /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, d(r, "noPrevPrompt")) : /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ a.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ a.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ a.createElement(
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
  const n = ie(), t = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: d(n, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "#", value: String(e.index) }), /* @__PURE__ */ a.createElement(
        I,
        {
          label: d(n, "status"),
          value: s ? d(n, "promptChanged") : d(n, "promptInitial")
        }
      ), /* @__PURE__ */ a.createElement(I, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ a.createElement(I, { label: "Chars", value: String(((r = e.prompt) == null ? void 0 : r.length) ?? 0) }), /* @__PURE__ */ a.createElement(I, { label: "Tools", value: String(t.length) }))
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
      children: /* @__PURE__ */ a.createElement(Ee, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 4 } }, t.map((i) => /* @__PURE__ */ a.createElement(B, { key: i, code: !0, style: { fontSize: 11 } }, i)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ a.createElement(
          At,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((i, c) => {
              var y;
              const h = typeof i.name == "string" && i.name || typeof ((y = i.function) == null ? void 0 : y.name) == "string" && i.function.name || `tool-${c + 1}`;
              return {
                key: String(c),
                label: /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11 } }, h),
                children: /* @__PURE__ */ a.createElement(Ee, { value: i })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ a.createElement(Ee, { value: e.raw })
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
function lt({ onClose: e }) {
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
  var b, R, D, T, $;
  const i = ie(), [c, h] = Dn(400), y = zs(null);
  if ($s(() => {
    const k = (N) => {
      const A = y.current;
      if (A === null) return;
      const M = A.anchorX - N.clientX;
      h(
        Math.min(Ls, Math.max(Rs, A.anchorWidth + M))
      );
    }, C = () => {
      y.current = null;
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
      /* @__PURE__ */ a.createElement(bt, { dragRef: y, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(lt, { onClose: r }), /* @__PURE__ */ a.createElement(Bs, { request: n, onJumpRecord: s }))
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
      /* @__PURE__ */ a.createElement(bt, { dragRef: y, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(lt, { onClose: r }), /* @__PURE__ */ a.createElement(Us, { record: o }))
    );
  const m = o.usage, v = o.timing, u = [];
  if (u.push({
    key: "summary",
    label: d(i, "summary"),
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "#", value: String(o.index) }), /* @__PURE__ */ a.createElement(I, { label: "Kind", value: On(o, i) }), o.runIndex > 0 && l ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(o.runIndex)
      },
      "Request #",
      o.runIndex,
      " →"
    )) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(i, "status"),
        value: o.running ? d(i, "running") : o.isError ? d(i, "error") : d(i, "success"),
        danger: o.isError
      }
    ), o.provider ? /* @__PURE__ */ a.createElement(I, { label: "Provider", value: o.provider }) : null, o.model ? /* @__PURE__ */ a.createElement(I, { label: d(i, "model"), value: o.model }) : null, o.toolName ? /* @__PURE__ */ a.createElement(I, { label: "Tool", value: o.toolName }) : null, o.inSkill ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(i, "skillResource"),
        value: o.inSkillLoaded ? `⚡ ${o.inSkill}` : `⚡ ${o.inSkill}（${d(i, "skillBypass")}）`
      }
    ) : null, o.guidedSkill ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(i, "skillGuided"),
        value: `∈ ${o.guidedSkill}（${o.guidedReason === "slash" ? d(i, "guidedBySlash") : d(i, "guidedByLoad")}）`
      }
    ) : null, o.toolOutputChars ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(i, "outputSize"),
        value: o.toolOutputBytes ? `${Q(o.toolOutputChars)} ${d(
          i,
          "charUnit"
        )} · ${zt(o.toolOutputBytes)} (${d(
          i,
          "beforeTruncation"
        )})` : `${Q(o.toolOutputChars)} ${d(
          i,
          "charUnit"
        )}`
      }
    ) : null, o.kind === "user" && (o.channel || o.userId) ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(i, "source"),
        value: [o.channel, o.userId].filter(Boolean).join(" · ")
      }
    ) : null, o.receipt ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(i, "channel"),
        value: o.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(i, "duration"),
        value: pe(o.timeSeconds)
      }
    ), o.note ? /* @__PURE__ */ a.createElement(B, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.spawnSession ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      I,
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
    const k = (R = o.apiPayload) == null ? void 0 : R.params, C = k !== void 0 && o.options !== void 0;
    u.push({
      key: "request",
      label: d(i, "requestTab"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, d(i, "toolCallsEmitted"), " (", o.toolCalls.length, ")"), o.toolCalls.map((N, A) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: N.id || A,
          style: { display: "flex", gap: 6, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, N.name),
        N.id ? /* @__PURE__ */ a.createElement(
          B,
          {
            type: "secondary",
            style: { fontSize: 10, flexShrink: 0 }
          },
          "…",
          N.id.slice(-8)
        ) : null
      ))) : null, k || o.options ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, d(i, "generationOptions")), C ? /* @__PURE__ */ a.createElement(
        B,
        {
          type: "secondary",
          style: { fontSize: 11, display: "block" }
        },
        `${d(i, "wireParams")} + ${d(
          i,
          "callOptionsDigest"
        )}`
      ) : null, /* @__PURE__ */ a.createElement(
        Ee,
        {
          value: { ...o.options ?? {}, ...k ?? {} },
          json: !0
        }
      )) : null, o.usage ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, d(i, "usage")), /* @__PURE__ */ a.createElement(
        Ot,
        {
          input: o.usage.input_tokens ?? 0,
          output: o.usage.output_tokens ?? 0,
          cacheRead: o.usage.cache_input_tokens ?? 0,
          cacheWrite: o.usage.cache_creation_input_tokens ?? 0,
          reasoning: o.usage.reasoning_tokens ?? 0
        }
      )) : null, /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, d(i, "timing")), /* @__PURE__ */ a.createElement(
        I,
        {
          label: d(i, "startedAt"),
          value: _e(o.startedAt)
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: d(i, "duration"),
          value: pe(o.timeSeconds)
        }
      ), o.timing ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        I,
        {
          label: d(i, "ttftLabel"),
          value: pe(o.timing.ttft_ms / 1e3)
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: d(i, "decodeLabel"),
          value: pe(o.timing.decode_ms / 1e3)
        }
      ), /* @__PURE__ */ a.createElement(
        I,
        {
          label: d(i, "throughput"),
          value: ot(
            (D = o.usage) == null ? void 0 : D.output_tokens,
            o.timing.decode_ms / 1e3
          )
        }
      )) : /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, d(i, "noTiming"))))
    });
  }
  if (o.kind === "tool") {
    if (o.toolInput && u.push({
      key: "payload",
      label: d(i, "input"),
      children: /* @__PURE__ */ a.createElement(Ee, { value: o.toolInput, json: !0 })
    }), (o.toolOutput || o.toolError) && u.push({
      key: "result",
      label: d(i, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolError ? /* @__PURE__ */ a.createElement(B, { type: "danger", style: { fontSize: 12 } }, o.toolError) : null, o.toolOutput ? /* @__PURE__ */ a.createElement(Ee, { value: o.toolOutput }) : null)
    }), o.toolSchema) {
      const k = o.toolSchema.function, C = o.toolSchema, N = typeof (k == null ? void 0 : k.description) == "string" ? k.description : typeof C.description == "string" ? C.description : void 0, A = (k == null ? void 0 : k.parameters) !== void 0 ? k.parameters : C.parameters;
      u.push({
        key: "schema",
        label: "Schema",
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, d(i, "toolSchemaNote")), N ? /* @__PURE__ */ a.createElement(
          B,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          N
        ) : null, A !== void 0 ? /* @__PURE__ */ a.createElement(Ee, { value: A, json: !0 }) : null)
      });
    }
  } else if (o.outputText || o.thinkingText || o.messages || o.marker || o.toolCalls && o.toolCalls.length > 0) {
    if (o.inputNew || o.messagesMeta) {
      const k = ((T = o.inputNew) == null ? void 0 : T.length) ?? 0, C = (($ = o.messagesMeta) == null ? void 0 : $.count) ?? 0;
      let N;
      o.contextReset ? N = `${d(i, "deltaReset")} (${C})` : k === 0 ? N = d(i, "deltaNoChange") : o.inputNew && o.inputNew.length === 1 && o.inputNew[0].role === "assistant" && C > 1 ? N = d(i, "deltaTailUpdate") : N = `${d(i, "deltaAppend")} (${k})`, u.push({
        key: "input",
        label: d(i, "inputTab"),
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(I, { label: d(i, "deltaKind"), value: N }), o.contextReset ? /* @__PURE__ */ a.createElement(B, { type: "warning", style: { fontSize: 12 } }, d(i, "contextReset")) : null, o.resetDetail ? /* @__PURE__ */ a.createElement(
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
              label: d(i, "resetBreakAt"),
              value: `#${o.resetDetail.breakAt + 1}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            I,
            {
              label: d(i, "resetSizes"),
              value: `${o.resetDetail.beforeCount} ${d(
                i,
                "resetMsgs"
              )} · ${Q(o.resetDetail.beforeChars)} ${d(
                i,
                "charUnit"
              )} → ${o.resetDetail.afterCount} ${d(
                i,
                "resetMsgs"
              )} · ${Q(o.resetDetail.afterChars)} ${d(
                i,
                "charUnit"
              )}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            I,
            {
              label: d(i, "resetRoles"),
              value: Object.keys(o.resetDetail.afterByRole).map((A) => {
                const M = o.resetDetail.beforeByRole[A] ?? 0, P = o.resetDetail.afterByRole[A] ?? 0;
                return M === P ? null : `${A} ${M}→${P}`;
              }).filter(Boolean).join(" · ") || "-"
            }
          ),
          o.resetDetail.changes.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, d(i, "resetChanges")), o.resetDetail.changes.slice(0, 20).map((A, M) => /* @__PURE__ */ a.createElement(
            "div",
            {
              key: M,
              style: {
                display: "flex",
                gap: 6,
                alignItems: "baseline"
              }
            },
            /* @__PURE__ */ a.createElement(
              it,
              {
                color: A.status === "kept" ? "default" : A.status === "rewritten" ? "orange" : A.status === "removed" ? "red" : "green",
                style: { marginInlineEnd: 0, fontSize: 10 }
              },
              d(i, Ws[A.status])
            ),
            /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, A.role),
            A.status === "rewritten" ? /* @__PURE__ */ a.createElement(
              B,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${d(i, "resetOldPrefix")}${(A.oldText ?? "").slice(0, 40)} → ${d(
                i,
                "resetNewPrefix"
              )}${(A.newText ?? "").slice(0, 40)}`
            ) : /* @__PURE__ */ a.createElement(
              B,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${A.status === "removed" ? d(i, "resetOldPrefix") : d(i, "resetNewPrefix")}${(A.oldText ?? A.newText ?? "").slice(
                0,
                60
              )}`
            )
          ))) : null
        ) : null, o.messagesMeta ? /* @__PURE__ */ a.createElement(
          I,
          {
            label: d(i, "inputTotal"),
            value: `${o.messagesMeta.count} · ${Q(
              o.messagesMeta.totalChars
            )} ${d(i, "charUnit")}`
          }
        ) : null, o.inputNew && o.inputNew.length > 0 ? /* @__PURE__ */ a.createElement(a.Fragment, null, o.inputNew.some((A) => A.role === "assistant") ? /* @__PURE__ */ a.createElement(
          B,
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
                children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.inputNew.map((A, M) => /* @__PURE__ */ a.createElement(
                  Vs,
                  {
                    key: M,
                    message: A,
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
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, d(i, "apiPayloadNote")), /* @__PURE__ */ a.createElement(I, { label: "Model", value: k.model }), /* @__PURE__ */ a.createElement(
          I,
          {
            label: d(i, "apiMsgCount"),
            value: String(k.messages.length)
          }
        ), k.usage ? /* @__PURE__ */ a.createElement(
          I,
          {
            label: "Usage",
            value: `in ${k.usage.input_tokens ?? 0} · out ${k.usage.output_tokens ?? 0} tok`
          }
        ) : null, k.durationMs !== void 0 ? /* @__PURE__ */ a.createElement(
          I,
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
                children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 4 } }, k.messages.map((C, N) => /* @__PURE__ */ a.createElement(
                  "div",
                  {
                    key: N,
                    style: {
                      display: "flex",
                      gap: 6,
                      alignItems: "baseline"
                    }
                  },
                  /* @__PURE__ */ a.createElement(
                    it,
                    {
                      color: C.role === "tool" ? "gold" : C.role === "system" ? "green" : C.role === "user" ? "blue" : "purple",
                      style: {
                        marginInlineEnd: 0,
                        fontSize: 9,
                        lineHeight: "14px",
                        flexShrink: 0
                      }
                    },
                    C.role
                  ),
                  C.toolCallId ? /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 9, flexShrink: 0 } }, C.toolCallId.slice(-8)) : null,
                  /* @__PURE__ */ a.createElement(
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
                    C.content.slice(0, 80)
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
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, o.inboundParts && o.inboundParts.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, `${d(i, "inboundParts")} (${o.inboundParts.length})`), o.inboundParts.map((k, C) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: C,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.type.replace("Content", "")),
        /* @__PURE__ */ a.createElement(
          B,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          k.text ?? "-"
        )
      ))) : null, o.marker ? /* @__PURE__ */ a.createElement(Ee, { value: o.marker }) : null, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, `${d(i, "toolCall")} (${o.toolCalls.length})`), o.toolCalls.map((k, C) => /* @__PURE__ */ a.createElement("div", { key: k.id || C, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", k.name), /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, k.id)))) : null, o.note ? /* @__PURE__ */ a.createElement(B, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.messages && o.messages.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, `${d(i, "query")} (${o.messages.length})`), o.messages.map((k, C) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: C,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.role),
        /* @__PURE__ */ a.createElement(
          B,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          k.text
        )
      ))) : null, o.thinkingText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, d(i, "thinking")), /* @__PURE__ */ a.createElement(Ee, { value: o.thinkingText })) : null, o.outputText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, d(i, "output")), /* @__PURE__ */ a.createElement(Ee, { value: o.outputText })) : null)
    });
  }
  return (o.startedAt !== null || m || v) && u.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Started", value: _e(o.startedAt) }), /* @__PURE__ */ a.createElement(I, { label: "Total", value: pe(o.timeSeconds) }), v ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: "TTFT",
        value: pe(v.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: "Decoding",
        value: pe(v.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(i, "throughput"),
        value: ot(
          m == null ? void 0 : m.output_tokens,
          v.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 12 } }, d(i, "noTiming")))
  }), m && u.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(I, { label: "Input", value: Q(m.input_tokens) }), /* @__PURE__ */ a.createElement(I, { label: "Output", value: Q(m.output_tokens) }), m.cache_creation_input_tokens ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: "Cache write",
        value: Q(m.cache_creation_input_tokens)
      }
    ) : null, m.cache_input_tokens ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: "Cache read",
        value: Q(m.cache_input_tokens)
      }
    ) : null, m.total_tokens !== void 0 ? /* @__PURE__ */ a.createElement(I, { label: "Total", value: Q(m.total_tokens) }) : null, m.time !== void 0 ? /* @__PURE__ */ a.createElement(I, { label: "API time", value: pe(m.time) }) : null)
  }), u.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ a.createElement(Ee, { value: o.raw })
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
    /* @__PURE__ */ a.createElement(bt, { dragRef: y, width: c }),
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(lt, { onClose: r }), /* @__PURE__ */ a.createElement(Pt, { size: "small", items: u, tabBarStyle: { marginBottom: 8 } }))
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
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ a.createElement(B, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, Q(e.chars), " ", d(n, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), l.length > 200 ? /* @__PURE__ */ a.createElement(
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
    /* @__PURE__ */ a.createElement(Ee, { value: l })
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
  const l = ie(), r = e.endKind ? d(l, Xs[e.endKind]) : d(l, "spanOpen"), i = Es(e);
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
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(lt, { onClose: s }), /* @__PURE__ */ a.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ a.createElement(
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
      it,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      d(l, Gs[e.trigger])
    )), /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(l, "spanStart"),
        value: _e(e.startT)
      }
    ), /* @__PURE__ */ a.createElement(I, { label: d(l, "spanEnd"), value: r }), e.endT !== null ? /* @__PURE__ */ a.createElement(I, { label: " ", value: _e(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(l, "spanLastActivity"),
        value: _e(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(l, "spanDuration"),
        value: i === null ? "-" : pe(i / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ a.createElement(
      I,
      {
        label: d(l, "spanLoadState"),
        value: e.bypass ? d(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ a.createElement(B, { strong: !0, style: { fontSize: 12 } }, d(l, "spanEvidence")), e.evidences.slice(0, 30).map((c, h) => /* @__PURE__ */ a.createElement(
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
        it,
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
      /* @__PURE__ */ a.createElement(B, { type: "secondary", style: { fontSize: 11 } }, c.detail)
    ))) : /* @__PURE__ */ a.createElement(
      B,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      d(l, "spanNoActivity")
    ))
  );
}
const me = window.QwenPaw.host.React, Js = me.useRef, Qs = me.useState;
me.useCallback;
me.useMemo;
const Ys = me.useEffect, Zs = me.useLayoutEffect, el = me.useReducer;
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
            let y = l[h];
            if (!y) {
              const o = n[h * 2];
              y = l[h] = {
                index: h,
                key: t(h),
                start: o,
                size: n[h * 2 + 1],
                end: o + n[h * 2 + 1],
                lane: 0
              };
            }
            return y;
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
    let y = 0;
    h && (y = Date.now());
    const o = e();
    if (!(o.length !== s.length || o.some((u, b) => s[b] !== u)))
      return l;
    s = o;
    let v = 0;
    if (h && (v = Date.now()), l = n(...o), h) {
      const u = Math.round((Date.now() - y) * 100) / 100, b = Math.round((Date.now() - v) * 100) / 100, R = b / 16, D = (T, $) => {
        for (T = String(T); T.length < $; )
          T = " " + T;
        return T;
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
let Ke;
const xt = () => {
  if (Ke !== void 0) return Ke;
  if (typeof navigator > "u") return Ke = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Ke = !0;
  const e = navigator.maxTouchPoints;
  return Ke = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, en = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, ol = (e) => e, il = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - n + 1, l = new Array(s);
  for (let r = 0; r < s; r++)
    l[r] = n + r;
  return l;
}, al = (e, n) => {
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
        const y = h.borderBoxSize[0];
        if (y) {
          l({ width: y.inlineSize, height: y.blockSize });
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
}, at = {
  passive: !0
}, rl = typeof window > "u" ? !0 : "onscrollend" in window, cl = (e, n, t) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const r = e.options.useScrollendEvent && rl;
  let i = 0;
  const c = r ? null : ll(
    l,
    () => n(i, !1),
    e.options.isScrollingResetDelay
  ), h = (m) => () => {
    i = t(s), c == null || c(), n(i, m);
  }, y = h(!0), o = h(!1);
  return s.addEventListener("scroll", y, at), r && s.addEventListener("scrollend", o, at), () => {
    s.removeEventListener("scroll", y), r && s.removeEventListener("scrollend", o);
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
class ml {
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
              for (const [y, o] of this.elementsCache)
                if (o === c) {
                  this.elementsCache.delete(y);
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
      let c = null, h = null, y = !1;
      if (i !== void 0 && i.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const v = i.count, u = r.count, b = this.getMeasurements(), R = v > 0 ? ((s = b[0]) == null ? void 0 : s.key) ?? i.getItemKey(0) : null, D = v > 0 ? ((l = b[v - 1]) == null ? void 0 : l.key) ?? i.getItemKey(v - 1) : null;
        if (u !== v || v > 0 && u > 0 && (r.getItemKey(0) !== R || r.getItemKey(u - 1) !== D)) {
          y = !0;
          const k = v > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? b[0] : null;
          k && (c = [k.key, this.getScrollOffset() - k.start]);
          const C = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          C && u > v && this.isAtEnd(i.scrollEndThreshold) && (v === 0 || r.getItemKey(u - 1) !== D) && (h = C);
        }
      }
      this.options = r, y && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let o = !1, m = 0;
      if (c && this.scrollOffset !== null) {
        const [v, u] = c, b = this.getMeasurements(), { count: R, getItemKey: D } = this.options;
        let T = 0;
        for (; T < R && D(T) !== v; )
          T++;
        if (T < R) {
          const $ = b[T];
          if ($) {
            const k = Math.max(0, $.start + u);
            k !== this.scrollOffset && (m = k - this.scrollOffset, this.scrollOffset = k, o = !0);
          }
        }
      }
      (o || h) && (this.pendingScrollAnchor = [
        o ? c[0] : null,
        o ? c[1] : 0,
        h,
        m
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
            at
          ), r.addEventListener(
            "touchend",
            c,
            at
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
      (t, s, l, r, i, c, h, y) => (this.prevLanes !== void 0 && this.prevLanes !== c && (this.lanesChangedFlag = !0), this.prevLanes = c, this.pendingMin = null, {
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: r,
        enabled: i,
        lanes: c,
        laneAssignmentMode: h,
        gap: y
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
        gap: y
      }, o) => {
        const m = this.itemSizeCache;
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const T of this.laneAssignments.keys())
            T >= t && this.laneAssignments.delete(T);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((T) => {
          this.itemSizeCache.set(T.key, T.size);
        }));
        const v = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), c === 1) {
          const T = t * 2;
          let $ = this._flatMeasurements;
          if (!$ || $.length < T) {
            const N = new Float64Array(T);
            $ && v > 0 && N.set($.subarray(0, v * 2)), $ = N, this._flatMeasurements = $;
          }
          let k;
          if (v === 0)
            k = s + l;
          else {
            const N = v - 1;
            k = $[N * 2] + $[N * 2 + 1] + y;
          }
          for (let N = v; N < t; N++) {
            const A = r(N), M = m.get(A), P = typeof M == "number" ? M : this.options.estimateSize(N);
            $[N * 2] = k, $[N * 2 + 1] = P, k += P + y;
          }
          const C = nl(t, $, r);
          return this.measurementsCache = C, C;
        }
        const u = this.measurementsCache.slice(0, v), b = new Array(c).fill(
          void 0
        ), R = new Float64Array(c);
        let D = 0;
        for (let T = 0; T < v; T++) {
          const $ = u[T];
          $ && (b[$.lane] === void 0 && D++, b[$.lane] = T, R[$.lane] = $.end);
        }
        for (let T = v; T < t; T++) {
          const $ = r(T), k = this.laneAssignments.get(T);
          let C, N;
          const A = h === "estimate" || m.has($);
          if (k !== void 0 && this.options.lanes > 1) {
            C = k;
            const F = b[C], se = F !== void 0 ? u[F] : void 0;
            N = se ? se.end + y : s + l;
          } else if (D === c) {
            let F = 0, se = R[0], he = b[0];
            for (let re = 1; re < c; re++) {
              const ae = R[re];
              (ae < se || ae === se && b[re] < he) && (F = re, se = ae, he = b[re]);
            }
            C = F, N = se + y, A && this.laneAssignments.set(T, C);
          } else
            C = T % this.options.lanes, N = s + l, A && this.laneAssignments.set(T, C);
          const M = m.get($), P = typeof M == "number" ? M : this.options.estimateSize(T), Z = N + P;
          u[T] = {
            index: T,
            start: N,
            size: P,
            end: Z,
            key: $,
            lane: C
          }, b[C] === void 0 && D++, b[C] = T, R[C] = Z;
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
      const y = this._flatMeasurements;
      if (this.options.lanes === 1 && y !== null)
        h = this.options.getItemKey(t), c = y[t * 2], i = y[t * 2 + 1];
      else {
        const v = this.measurementsCache[t];
        if (!v) return;
        h = v.key, c = v.start, i = v.size;
      }
      const o = this.itemSizeCache.get(h) ?? i, m = s - o;
      if (m !== 0) {
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
        ), T = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
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
          m,
          this
        ) : D);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(h, s), this.itemSizeCacheVersion++;
        let $ = !1;
        v ? $ = this.applyScrollAdjustment(
          this.getTotalSize() - u
        ) : T && ($ = this.applyScrollAdjustment(m)), this.notify($);
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
      const c = this.getSize() || 600, h = Math.abs(l - this.getScrollOffset()), y = this.scrollState.behavior === "smooth" && h > c;
      this.scrollState.lastTargetOffset = l, y || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: y ? "smooth" : "auto"
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
function fl(e, n, t) {
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
    const y = fl(
      l,
      r,
      t
    );
    let o = y;
    const m = t + n;
    for (; o < r && l[o * 2] + l[o * 2 + 1] < m; )
      o++;
    return { startIndex: y, endIndex: o };
  }
  let c = Bn(0, r, (y) => e[y].start, t), h = c;
  if (s === 1)
    for (; h < r && e[h].end < t + n; )
      h++;
  else if (s > 1) {
    const y = Array(s).fill(0);
    for (; h < r && y.some((m) => m < t + n); ) {
      const m = e[h];
      y[m.lane] = m.end, h++;
    }
    const o = Array(s).fill(t + n);
    for (; c >= 0 && o.some((m) => m >= t); ) {
      const m = e[c];
      o[m.lane] = m.start, c--;
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
    const m = r.current;
    if (!m.enabled || !m.container) return;
    const v = o.getTotalSize();
    if (v !== m.lastSize) {
      m.lastSize = v;
      const u = o.options.horizontal ? "width" : "height";
      m.container.style[u] = `${v}px`;
    }
  }, c = (o) => {
    const m = r.current;
    if (!m.enabled || !m.container) return;
    i(o);
    const v = !!o.options.horizontal, u = m.mode === "transform", b = v ? "left" : "top", R = o.options.scrollMargin, D = o.getVirtualItems();
    for (const T of D) {
      const $ = T.start - R, k = o.elementsCache.get(T.key);
      k && m.lastPositions.get(k) !== $ && (m.lastPositions.set(k, $), u ? k.style.transform = v ? `translate3d(${$}px, 0, 0)` : `translate3d(0, ${$}px, 0)` : k.style[b] = `${$}px`);
    }
  }, h = {
    ...s,
    onChange: (o, m) => {
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
      b && (e && m ? tl(l) : l()), (v = s.onChange) == null || v.call(s, o, m);
    }
  }, [y] = Qs(() => {
    const o = new ml(h);
    return Object.assign(o, {
      containerRef: (m) => {
        const v = r.current;
        if (v.container = m, v.lastSize = null, m && v.enabled) {
          const u = o.getTotalSize();
          v.lastSize = u;
          const b = o.options.horizontal ? "width" : "height";
          m.style[b] = `${u}px`;
        }
      }
    });
  });
  return y.setOptions(h), kt(() => y._didMount(), []), kt(() => (i(y), y._willUpdate())), kt(() => {
    c(y);
  }), y;
}
function vl(e) {
  return yl({
    observeElementRect: al,
    observeElementOffset: ul,
    scrollToFn: hl,
    ...e
  });
}
const ut = window.QwenPaw.host, z = ut.React, { useRef: Sl } = z, { Tag: De, Tooltip: El } = ut.antd, { Text: Se } = ut.antd.Typography, {
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
} = ut.antdIcons, zl = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Al = {
  user: /* @__PURE__ */ z.createElement($l, null),
  message: /* @__PURE__ */ z.createElement(wl, null),
  tool: /* @__PURE__ */ z.createElement(Ml, null),
  system: /* @__PURE__ */ z.createElement(Cl, null)
}, tn = {
  approval: { color: "volcano", icon: /* @__PURE__ */ z.createElement(_l, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ z.createElement(Il, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ z.createElement(Tl, null) },
  header: { color: "green", icon: /* @__PURE__ */ z.createElement(kl, null) },
  error: { color: "red", icon: /* @__PURE__ */ z.createElement(xl, null) }
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
  const n = ie(), t = nn[e] ?? nn.unknown;
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
  var o, m;
  const i = e.usage, c = i && (i.input_tokens || i.output_tokens) ? `${Q(i.input_tokens)}→${Q(
    i.output_tokens
  )}` : null, h = i && i.reasoning_tokens ? i.reasoning_tokens : null, y = i && c ? [
    `Input ${Q(i.input_tokens)} tok`,
    i.cache_input_tokens ? `Cached ${Q(i.cache_input_tokens)} tok` : null,
    i.cache_creation_input_tokens ? `Cache created ${Q(
      i.cache_creation_input_tokens
    )} tok` : null,
    `Output ${Q(i.output_tokens)} tok`,
    h ? `${d(ie(), "reasoningShort")} ${Q(
      h
    )} tok` : null
  ].filter(Boolean).join(" · ") : void 0;
  return /* @__PURE__ */ z.createElement(
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
    /* @__PURE__ */ z.createElement(
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
      s && r ? /* @__PURE__ */ z.createElement(
        "span",
        {
          title: d(ie(), "runViewHint"),
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
      ) : s ? /* @__PURE__ */ z.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex) : null,
      "#",
      e.index
    ),
    /* @__PURE__ */ z.createElement(
      De,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((o = tn[e.markerKind]) == null ? void 0 : o.color) || zl[e.kind] || "default",
        icon: e.markerKind && ((m = tn[e.markerKind]) == null ? void 0 : m.icon) || Al[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? d(ie(), "skillLoadKind") : On(e, ie())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ z.createElement(
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
    e.inSkill ? /* @__PURE__ */ z.createElement(
      De,
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
    ) : e.guidedSkill ? /* @__PURE__ */ z.createElement(
      El,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? d(ie(), "guidedBySlash") : d(ie(), "guidedByLoad")}`
      },
      /* @__PURE__ */ z.createElement(
        Se,
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
    e.kind === "user" && e.skillName ? /* @__PURE__ */ z.createElement(
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
    /* @__PURE__ */ z.createElement(
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
      e.receipt ? /* @__PURE__ */ z.createElement(Se, { type: "secondary", style: { fontSize: 12 } }, Dl(e, ie())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(Se, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ z.createElement(Se, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ z.createElement(Se, { type: "secondary", style: { fontSize: 12 } }, ` · ${d(ie(), "skillLoaded")} ${Q(
        e.toolOutputChars
      )} ${d(ie(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(Se, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ z.createElement(Se, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ z.createElement(
        Se,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(
        Se,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(Se, { type: "secondary", style: { fontSize: 11 } }, ` ${Pl(e, ie()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ z.createElement(Se, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
    ),
    /* @__PURE__ */ z.createElement(
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
      c ? /* @__PURE__ */ z.createElement("span", { title: y }, /* @__PURE__ */ z.createElement("span", { style: { color: "#1677ff" } }, c), h ? /* @__PURE__ */ z.createElement("span", { style: { color: "#722ed1" } }, ` · ${Q(h)}`) : null) : null,
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
  const c = ie();
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Fn }
    },
    /* @__PURE__ */ z.createElement(
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
      /* @__PURE__ */ z.createElement(
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
      /* @__PURE__ */ z.createElement(Se, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ z.createElement(Se, { type: "secondary", style: { fontSize: 11 } }, pe(e.durationMs / 1e3)),
      /* @__PURE__ */ z.createElement(Se, { type: "secondary", style: { fontSize: 11 } }, s, " ", d(c, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ z.createElement(
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
          /* @__PURE__ */ z.createElement(
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
      /* @__PURE__ */ z.createElement(
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
  callsCollapsed: y,
  hasOlderRecords: o,
  loadingOlder: m,
  onLoadOlder: v,
  initialRecord: u,
  emptyText: b,
  onSkillSpanOpen: R
}) {
  const D = ie(), T = Sl(null), $ = e.filter((P) => P.turn !== null), k = $.length > 1, C = z.useMemo(() => {
    var Z;
    const P = [];
    o && P.push({
      key: "load-older",
      height: ln,
      type: "load-older"
    }), u && (P.push({
      key: "initial",
      height: Rt,
      type: "initial",
      record: u
    }), P.push({
      key: "initial-divider",
      height: sn,
      type: "divider"
    }));
    for (const F of $) {
      const se = F.turn;
      if (P.push({
        key: `turn-${se}`,
        height: Fn,
        type: "boundary",
        turn: F
      }), !s.has(se))
        for (const he of ((Z = F.groups[0]) == null ? void 0 : Z.cells) ?? [])
          y && he.kind === "tool" || P.push({
            key: `rec-${he.index}`,
            height: Rt,
            type: "record",
            record: he
          });
    }
    return P;
  }, [
    $,
    s,
    y,
    o,
    u
  ]), N = z.useCallback(
    (P) => l !== null && !l.has(P.index) || r !== null && !r.has(P.index),
    [l, r]
  ), A = (P) => {
    var Z;
    switch (P.type) {
      case "load-older":
        return /* @__PURE__ */ z.createElement("div", { style: { textAlign: "center", height: ln } }, /* @__PURE__ */ z.createElement(
          "button",
          {
            type: "button",
            onClick: v,
            disabled: m,
            style: {
              border: "1px solid rgba(128,128,128,0.3)",
              borderRadius: 10,
              background: "transparent",
              padding: "1px 12px",
              fontSize: 11,
              cursor: m ? "default" : "pointer",
              color: "rgba(128,128,128,1)"
            }
          },
          m ? "…" : `⋯ ${d(D, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ z.createElement(
          "div",
          {
            style: {
              height: sn,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const F = P.record;
        return /* @__PURE__ */ z.createElement(
          on,
          {
            record: F,
            selected: n === F.index,
            dimmed: N(F),
            multiRequest: k,
            onSelect: () => i(F.index),
            onOpenRun: c
          }
        );
      }
      case "boundary": {
        const F = P.turn, se = F.turn;
        return /* @__PURE__ */ z.createElement(
          jl,
          {
            turn: F,
            collapsed: s.has(se),
            selected: t === se,
            cellCount: ((Z = F.groups[0]) == null ? void 0 : Z.cells.length) ?? 0,
            onToggle: () => h(se),
            onSelect: () => c(se),
            onSkillSpanOpen: R ? (he, re) => R(he, re) : void 0
          }
        );
      }
      case "record":
      default: {
        const F = P.record;
        return /* @__PURE__ */ z.createElement(
          on,
          {
            record: F,
            selected: n === F.index,
            dimmed: N(F),
            multiRequest: k,
            onSelect: () => i(F.index),
            onOpenRun: c
          }
        );
      }
    }
  };
  if (C.length === 0)
    return /* @__PURE__ */ z.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ z.createElement(
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
  const M = C.length <= Rl ? /* @__PURE__ */ z.createElement("div", null, C.map((P) => A(P))) : /* @__PURE__ */ z.createElement(
    Fl,
    {
      rows: C,
      scrollRef: T,
      renderRow: A
    }
  );
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      ref: T,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    M
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
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      style: {
        height: s.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    s.getVirtualItems().map((l) => /* @__PURE__ */ z.createElement(
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
function an(e) {
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
  if (typeof e.name == "string" && e.name) return e.name;
  const n = e.function;
  if (n && typeof n == "object" && typeof n.name == "string")
    return n.name;
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
function Ce(e, n = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Vl(e) {
  var Y, Te;
  const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), c = [];
  let h = "";
  const y = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  let u = [];
  const b = /* @__PURE__ */ new Set(), R = [], D = new vs(), T = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let C = [], N = [], A = 0, M = 0;
  const P = (g) => g.groups[0].cells, Z = (g, f) => {
    const S = i.get(g);
    S ? S.push(f) : i.set(g, [f]);
  }, F = (g, f) => {
    if (!g)
      if (h)
        g = h;
      else {
        c.push(f);
        return;
      }
    const S = t.get(g);
    if (S)
      f.runIndex = S.turn ?? 0, P(S).push(f);
    else if (h) {
      const _ = t.get(h);
      _ ? (f.runIndex = _.turn ?? 0, P(_).push(f)) : Z(g, f);
    } else
      Z(g, f);
  }, se = (g, f) => {
    const S = i.get(f);
    if (S) {
      for (const _ of S) P(g).push(_);
      i.delete(f);
    }
  };
  for (const g of e) {
    const f = wt(g);
    switch (g.type) {
      case "run/start": {
        M += 1, R.length = 0, y.set(
          g.run_id,
          typeof f.channel == "string" ? f.channel : ""
        );
        const S = {
          turn: M,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${M}`, cells: [] }]
        };
        t.set(g.run_id, S), n.push(S), h = g.run_id, se(S, g.run_id);
        for (const L of c.splice(0))
          L.runIndex = M, P(S).push(L);
        const _ = Array.isArray(f.messages) ? f.messages : [], x = String(f.query ?? "");
        let O = typeof f.slash_skill == "string" && f.slash_skill ? f.slash_skill : rn(x);
        !O && _.length > 0 && (O = rn(String(((Y = _[0]) == null ? void 0 : Y.text) ?? ""))), O && (b.add(O), R.push([O, "slash"]), D.onRunStart(), D.onSlashSkill(
          O,
          g.seq,
          ge(g.t) ?? 0
        ), T.set(`${O}#${g.seq}`, S));
        const V = {
          index: ++A,
          runIndex: M,
          runId: g.run_id,
          kind: "user",
          text: Ce(x) || Ce((Te = _.at(-1)) == null ? void 0 : Te.text),
          messages: _,
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: O ?? void 0,
          model: void 0
        };
        o.set(g.run_id, V), P(S).push(V);
        break;
      }
      case "run/end": {
        const S = t.get(g.run_id);
        h === g.run_id && (h = ""), R.length = 0, D.onRunEnd(g.seq, ge(g.t) ?? 0), y.delete(g.run_id), o.delete(g.run_id);
        const _ = String(f.status ?? "unknown");
        if (S && (S.status = _, S.durationMs = typeof f.duration_ms == "number" ? f.duration_ms : null), _ === "error" && f.error) {
          const x = S ?? {
            turn: null,
            status: _,
            durationMs: typeof f.duration_ms == "number" ? f.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || n.push(x), x.groups[0].cells.push({
            index: ++A,
            runIndex: M,
            runId: g.run_id,
            kind: "system",
            markerKind: "error",
            text: Ce(String(f.error)) || "run failed",
            marker: String(f.error ?? "run failed"),
            timeSeconds: typeof f.duration_ms == "number" ? f.duration_ms / 1e3 : null,
            startedAt: ge(g.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [g]
          });
        }
        break;
      }
      case "agent/spawn": {
        const S = typeof f.child_session_id == "string" ? f.child_session_id : void 0, _ = typeof f.child_agent_id == "string" ? f.child_agent_id : "?";
        F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${_} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: _,
          raw: [g]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(f.parts) ? f.parts : [], _ = f.channel_meta && typeof f.channel_meta == "object" ? f.channel_meta : void 0, x = S.map((le) => ({
          type: String(le.type ?? "?"),
          text: typeof le.text == "string" ? le.text : void 0
        })), O = y.get(g.run_id) ?? "", V = _ && typeof _.user_id == "string" && _.user_id ? _.user_id : void 0, L = Ce(
          x.map((le) => le.text ?? "").filter(Boolean).join(`
`)
        ), X = o.get(g.run_id);
        X && !X.inboundParts ? (X.inboundParts = x, X.channel = O || void 0, X.userId = V, X.raw = [
          ...X.raw ?? [],
          g
        ], X.text || (X.text = L)) : F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "user",
          text: L || "📥",
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          channel: O || void 0,
          userId: V,
          inboundParts: x,
          raw: [g]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof f.text == "string" ? f.text : "";
        F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: S || void 0,
          receipt: {
            channel: y.get(g.run_id) || void 0,
            chars: S.length
          },
          raw: [g]
        });
        break;
      }
      case "approval/asked": {
        F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(f.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [g]
        });
        break;
      }
      case "approval/decided": {
        const S = String(f.decision ?? "?"), _ = f.tool_name ? String(f.tool_name) : "";
        F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "approval",
          text: _ ? `${_} → ${S}` : S,
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [g]
        });
        break;
      }
      case "llm/header": {
        const S = typeof f.sha256 == "string" ? f.sha256 : "", _ = typeof f.prev_sha256 == "string" ? f.prev_sha256 : void 0, x = f.reason === "changed" ? "changed" : "initial", O = typeof f.system_prompt == "string" ? f.system_prompt : "", V = Array.isArray(f.tools) ? f.tools : [], L = Array.isArray(f.schemas) ? f.schemas : void 0;
        if (F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "header",
          text: x === "initial" ? `⚙ ${O ? `System Prompt (${O.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: O,
          prevPrompt: m.get(_ ?? ""),
          headerTools: V,
          headerReason: x,
          sha: S,
          prevSha: _,
          schemas: L,
          raw: [g]
        }), S && m.set(S, O), Array.isArray(L)) {
          v.clear();
          for (const X of L) {
            const le = Kl(X);
            le && v.set(le, X);
          }
        }
        O && (u = Wl(O));
        break;
      }
      case "llm/call": {
        const S = wt(g), _ = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, x = S.messages_meta, O = x && typeof x == "object" ? {
          count: typeof x.count == "number" ? x.count : 0,
          totalChars: typeof x.total_chars == "number" ? x.total_chars : 0,
          charsByRole: an(x.chars_by_role) ? x.chars_by_role : {},
          countByRole: an(x.count_by_role) ? x.count_by_role : {},
          maxToolChars: typeof x.max_tool_chars == "number" ? x.max_tool_chars : 0
        } : void 0, V = Hl(S.messages_new);
        let L;
        if (S.context_reset === !0) {
          const te = (V ?? []).map(
            (de) => ({
              role: de.role,
              chars: de.chars,
              text: de.text
            })
          );
          let ee;
          C.length > 0 || te.length === 0 ? ee = C : ee = N.map((de) => ({
            role: de.role,
            text: de.text
          })), L = _s(ee, te), O && (L.afterChars = O.totalChars);
        }
        if (V) {
          const te = V.map((ee) => ({
            role: ee.role,
            chars: ee.chars,
            text: ee.text
          }));
          S.context_reset === !0 ? C = te : S.tail_update === !0 ? C = [...C.slice(0, -1), ...te] : typeof S.messages_count == "number" && V.length >= S.messages_count && C.length > 0 ? C = te : C = [...C, ...te];
        }
        N = Array.isArray(S.messages) ? S.messages.map((te) => ({
          role: te.role,
          text: te.text
        })) : [];
        const X = {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: O,
          inputNew: V,
          contextReset: S.context_reset === !0,
          resetDetail: L,
          options: _
        };
        F(g.run_id, X);
        const le = s.get(g.run_id) ?? [];
        le.push({ cell: X, callData: S, call: g }), s.set(g.run_id, le);
        break;
      }
      case "llm/api_request": {
        const S = s.get(g.run_id), _ = S && S.length > 0 ? S[S.length - 1].cell : l.get(g.run_id);
        if (_) {
          const x = Array.isArray(f.messages) ? f.messages : [];
          _.apiPayload = {
            model: String(f.model ?? "unknown"),
            messages: x.map((O) => ({
              role: String(O.role ?? "?"),
              content: typeof O.content == "string" ? O.content : JSON.stringify(O.content ?? ""),
              toolCallId: typeof O.tool_call_id == "string" ? O.tool_call_id : void 0
            })),
            params: f.params && typeof f.params == "object" ? f.params : void 0,
            durationMs: typeof f.duration_ms == "number" ? f.duration_ms : void 0
          }, _.raw = [
            ..._.raw ?? [],
            g
          ];
        }
        break;
      }
      case "llm/api_response": {
        const S = l.get(g.run_id);
        S && S.apiPayload && (f.usage && typeof f.usage == "object" && (S.apiPayload.usage = f.usage), typeof f.duration_ms == "number" && (S.apiPayload.durationMs = f.duration_ms));
        break;
      }
      case "llm/result": {
        const S = s.get(g.run_id), _ = S == null ? void 0 : S.shift(), x = (_ == null ? void 0 : _.callData) ?? {}, O = typeof f.duration_ms == "number" ? f.duration_ms : null, V = f.usage ?? void 0, L = f.timing, X = Array.isArray(f.tool_calls) ? f.tool_calls : void 0, ee = {
          text: (f.error ? Ce(String(f.error)) : Ce(String(f.text ?? ""))) || (X && X.length > 0 ? `🛠 ${X.map((de) => de.name).join(", ")}` : ""),
          timeSeconds: O === null ? null : O / 1e3,
          isError: !!f.error,
          running: !1,
          outputText: f.text ? String(f.text) : void 0,
          thinkingText: f.thinking ? String(f.thinking) : void 0,
          usage: V,
          timing: L,
          toolCalls: X,
          note: f.note ? String(f.note) : void 0
        };
        _ ? (Object.assign(_.cell, ee), l.set(g.run_id, _.cell), _.cell.model = String(
          f.model ?? x.model ?? _.cell.model
        ), _.cell.raw = [
          ..._.call ? [_.call] : [],
          g
        ]) : F(g.run_id, {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          startedAt: ge(g.t) ?? 0,
          model: String(f.model ?? x.model ?? "unknown"),
          ...ee
        });
        break;
      }
      case "tool/call": {
        const S = wt(g), _ = String(S.name ?? "?"), x = _ === "Skill" ? Ul(S.input) : void 0;
        if (x) {
          b.add(x), R.push([x, "load"]);
          const ce = D.onSkillLoad(
            x,
            g.seq,
            ge(g.t) ?? 0
          ), be = t.get(g.run_id);
          be && T.set(ce, be);
        }
        const O = S.input ? String(S.input) : void 0;
        let V;
        if (!x && O) {
          const ce = typeof S.skill_resource == "string" ? S.skill_resource : void 0;
          ce && (V = ce);
        }
        if (!x && !V && O && u.length > 0) {
          const ce = Hn(O);
          for (const [be, Be] of u)
            if (ce.includes(be)) {
              V = Be;
              break;
            }
        }
        let L, X;
        if (!x && !V && O && $.size > 0) {
          const ce = ks(O, $);
          ce && (L = ce.skill, X = ce.feature);
        }
        let le, te;
        if (!x && !V && !L && R.length > 0) {
          const [ce, be] = R[R.length - 1];
          le = ce, te = be;
        }
        const ee = D.onToolCall({
          attribution: V ? { skill: V, kind: "path", detail: "skill dir in input" } : L ? {
            skill: L,
            kind: "content",
            detail: `“${X}” in input (skill doc)`
          } : le ? {
            skill: le,
            kind: "temporal",
            detail: te === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: A + 1,
          seq: g.seq,
          t: ge(g.t) ?? 0
        });
        if (ee && !T.has(ee)) {
          const ce = t.get(g.run_id);
          ce && T.set(ee, ce);
        }
        const de = {
          index: ++A,
          runIndex: 0,
          runId: g.run_id,
          kind: "tool",
          text: x ? `📚 ${x}` : `${_}(${Ce(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: ge(g.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: _,
          skillName: x,
          inSkill: V,
          inSkillLoaded: V ? b.has(V) : void 0,
          guidedSkill: le ?? L,
          guidedReason: te ?? (L ? "load" : void 0),
          skillSpanId: ee ?? void 0,
          toolInput: S.input ? String(S.input) : void 0,
          toolSchema: v.get(_)
        };
        F(g.run_id, de);
        const Ie = r.get(g.run_id) ?? [];
        Ie.push({ cell: de, callData: S, call: g }), r.set(g.run_id, Ie);
        break;
      }
      case "tool/result": {
        const S = r.get(g.run_id), _ = typeof f.tool_call_id == "string" ? f.tool_call_id : null;
        let x;
        if (S) {
          const te = _ ? S.findIndex(
            (ee) => ee.callData.tool_call_id === _
          ) : -1;
          te >= 0 ? x = S.splice(te, 1)[0] : x = S.shift();
        }
        const O = typeof f.duration_ms == "number" ? f.duration_ms : null, V = f.ok !== !1 && !f.error, L = f.output ? String(f.output) : void 0, X = L ? ` → ${Ce(L, 60)}` : "", le = {
          timeSeconds: O === null ? null : O / 1e3,
          isError: !V,
          running: !1,
          toolOutput: L,
          toolOutputChars: typeof f.output_chars == "number" ? f.output_chars : void 0,
          toolOutputBytes: typeof f.output_bytes == "number" ? f.output_bytes : void 0,
          toolError: f.error ? String(f.error) : void 0,
          note: f.note ? String(f.note) : void 0
        };
        if (x) {
          if (Object.assign(x.cell, le), !x.cell.skillName)
            x.cell.text = `${x.cell.text}${X}`;
          else if (L) {
            const te = typeof f.skill_sha == "string" ? f.skill_sha : null;
            te && k.get(x.cell.skillName) === te || ($.set(
              x.cell.skillName,
              xs(L)
            ), te && k.set(x.cell.skillName, te));
          }
          x.cell.raw = [
            ...x.call ? [x.call] : [],
            g
          ];
        } else
          F(g.run_id, {
            index: ++A,
            runIndex: 0,
            runId: g.run_id,
            kind: "tool",
            text: `?${X}`,
            startedAt: ge(g.t) ?? 0,
            ...le
          });
        break;
      }
    }
  }
  for (const [g, f] of i) {
    const S = t.get(g);
    if (S) {
      for (const _ of f) P(S).push(_);
      i.delete(g);
    }
  }
  for (const g of n) {
    const f = [];
    for (const S of g.groups)
      for (const _ of S.cells)
        _.skillName && !f.includes(_.skillName) && f.push(_.skillName);
    f.length > 0 && (g.skillsUsed = f);
  }
  const he = D.spans(), re = new Set(he.map((g) => g.skill)).size, ae = /* @__PURE__ */ new Map();
  for (const g of n)
    for (const f of g.groups)
      for (const S of f.cells) ae.set(S.index, S);
  for (const g of he) {
    const f = T.get(g.id);
    f && (f.skillSpans ?? (f.skillSpans = [])).push(g);
    for (const S of g.attributedIndexes) {
      const _ = ae.get(S);
      _ && (_.skillSpanId = g.id, _.skillSpanHue = re > 1 ? g.colorHue : void 0, _.skillSpanBypass = g.bypass);
    }
  }
  return n;
}
function cn(e) {
  return e.flatMap((n) => n.groups.flatMap((t) => t.cells));
}
function Gl(e) {
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
}, un = "agent-trace-timeline-styles", Xl = `
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
function ql() {
  if (Tt || typeof document > "u") return;
  if (document.getElementById(un)) {
    Tt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = un, e.textContent = Xl, document.head.appendChild(e), Tt = !0;
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
    return Jl(
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
function Jl(e, n, t) {
  const s = e.flatMap((o) => {
    const m = o.groups.flatMap(
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
    return m.length === 0 ? [] : [{ turn: o.turn, rawSpans: m }];
  }), l = s.flatMap((o) => o.rawSpans);
  if (l.length === 0) return null;
  const r = /* @__PURE__ */ new Map();
  let i = 0, c = null;
  for (const o of [...l].sort(
    (m, v) => m.start - v.start || m.end - v.end
  ))
    t && c !== null && o.start > c && (i += o.start - c), r.set(o, i), c = c === null ? o.end : Math.max(c, o.end);
  const h = [], y = [];
  for (const o of s) {
    const m = o.rawSpans.map((v) => {
      const u = r.get(v) ?? 0;
      return {
        ...v,
        start: v.start - u,
        end: (n ? v.end : v.start) - u
      };
    });
    h.push(...m), o.turn !== null && y.push({
      turn: o.turn,
      time: Math.min(...m.map((v) => v.start))
    });
  }
  return {
    start: Math.min(...h.map((o) => o.start)),
    end: Math.max(...h.map((o) => o.end)),
    spans: h,
    turnBoundaries: y
  };
}
function Ql(e, n = "sequence") {
  const t = (c) => c.skillSpans ?? [];
  if (e.every((c) => t(c).length === 0)) return null;
  if (n === "sequence") {
    const c = /* @__PURE__ */ new Map();
    let h = 0;
    for (const o of e)
      for (const m of o.groups.flatMap((v) => v.cells))
        c.set(m.index, h), h += 1;
    const y = [];
    for (const o of e)
      for (const m of t(o)) {
        const v = m.attributedIndexes.map((R) => c.get(R)).filter((R) => R !== void 0);
        let u = v.length ? Math.min(...v) : void 0;
        if (u === void 0) {
          const R = o.groups.flatMap((D) => D.cells).find(
            (D) => D.kind !== "system" && D.skillName === m.skill
          );
          u = R ? c.get(R.index) : void 0;
        }
        if (u === void 0) continue;
        const b = v.length ? Math.max(...v) : u;
        y.push(pn(m, u, b + 1));
      }
    return y;
  }
  const s = e.flatMap(
    (c) => c.groups.flatMap(
      (h) => h.cells.flatMap((y) => {
        const o = Kn(y);
        return o === null ? [] : [o];
      })
    )
  );
  s.sort((c, h) => c.start - h.start || c.end - h.end);
  const l = n === "duration", r = (c) => {
    let h = 0, y = null;
    for (const o of s) {
      if (o.start >= c) break;
      if (l && y !== null && o.start > y) {
        const m = Math.min(o.start, c);
        m > y && (h += m - y);
      }
      y = y === null ? o.end : Math.max(y, o.end);
    }
    return h;
  }, i = [];
  for (const c of e)
    for (const h of t(c)) {
      const y = h.startT, o = Math.max(Ss(h), y + 1), m = r(y), v = r(o);
      i.push(
        pn(
          h,
          y - m,
          Math.max(y - m + 1, o - v)
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
function Yl(e, n, t = "sequence") {
  const s = Wn(e, t);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= n.end && l.end >= n.start).map((l) => l.index)
  );
}
ql();
const rt = window.QwenPaw.host, q = rt.React, { useEffect: Qe, useMemo: It, useRef: Ye, useState: Ae } = q, { Tooltip: Vn } = rt.antd, Ct = 3, Zl = 4, eo = 0.08, to = 0.025, no = 32, so = 0.5;
function lo(e) {
  const n = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, r = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...n === void 0 ? {} : { durationMs: n },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || r === void 0 ? {} : { ttftMs: l, decodingMs: r }
  };
}
function oo(e) {
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
function io(e, n) {
  const t = oo(e);
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
function ao(e, n, t, s) {
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
  return /* @__PURE__ */ q.createElement(
    Vn,
    {
      title: /* @__PURE__ */ q.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: so,
      ...s
    },
    t
  );
}
function mn() {
  return /* @__PURE__ */ q.createElement("div", { className: ye.labels, "aria-hidden": "true" }, /* @__PURE__ */ q.createElement("span", null, "Input"), /* @__PURE__ */ q.createElement("span", null, "Model"), /* @__PURE__ */ q.createElement("span", null, "Tools"));
}
function fn({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ q.createElement(
    Gn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ q.createElement(
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
const ro = q.memo(function({
  turns: n,
  mode: t,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: r,
  selectedIndex: i = null,
  searchMatchIndexes: c = null,
  onRangeChange: h,
  onRecordSelect: y,
  onRecordFocus: o,
  onSkillSpanSelect: m
}) {
  const v = typeof rt.useTheme == "function" ? rt.useTheme() : void 0, u = It(
    () => Wn(n, t),
    [t, n]
  ), b = It(
    () => Ql(n, t),
    [t, n]
  ), R = It(
    () => new Map(
      n.flatMap(
        (p) => p.groups.flatMap(
          (w) => w.cells.map(
            (E) => [E.index, lo(E)]
          )
        )
      )
    ),
    [n]
  ), D = Ye(null), T = Ye(null), $ = Ye(null), k = Ye(null), [C, N] = Ae(null), [A, M] = Ae(null), [P, Z] = Ae(null), [F, se] = Ae(!1), [he, re] = Ae(!1), [ae, Y] = Ae(null), [Te, g] = Ae(!1);
  Qe(() => {
    u !== null && s !== null && (s.end < u.start || s.start > u.end) && h(null);
  }, [u, h, s]), Qe(() => {
    u !== null && (g(!1), Y(
      (p) => p !== null && (p.end < u.start || p.start > u.end) ? null : p
    ));
  }, [u]), Qe(() => {
    if (u === null || i === null) return;
    const p = u.spans.find(
      (w) => w.index === i
    );
    p !== void 0 && (g(!0), Y((w) => {
      if (w === null || p.end > w.start && p.start < w.end)
        return w;
      const E = Math.max(1, w.end - w.start), H = p.end <= w.start ? p.start : p.end - E, G = Math.min(
        Math.max(H, u.start),
        Math.max(u.start, u.end - E)
      );
      return G === w.start ? w : { start: G, end: G + E };
    }));
  }, [u, i]);
  const f = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), S = Math.min(
    f,
    Math.max(1, ((ae == null ? void 0 : ae.end) ?? 0) - ((ae == null ? void 0 : ae.start) ?? 0))
  ), _ = u === null || ae === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(ae.start, u.start),
    u.end - S
  ), x = ae === null ? f : S, O = ae === null ? (u == null ? void 0 : u.start) ?? 0 : _, V = l && u !== null && O === u.start, L = r === void 0 || F ? void 0 : () => {
    se(!0), r().finally(() => {
      se(!1);
    });
  }, X = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(O - u.start) / x * 100}%`,
    "--trajectory-domain-width": `${f / x * 100}%`
  }, le = u === null || s === null ? null : hn(
    s,
    O,
    x,
    u.start,
    u.end
  ), ee = (u === null || C === null ? null : hn(
    C,
    O,
    x,
    u.start,
    u.end
  )) ?? le, de = C ?? s;
  if (Qe(() => {
    const p = $.current;
    if (p === null) return;
    const w = (E) => {
      E.preventDefault();
      const H = k.current;
      if (H === null || u === null) return;
      g(!1);
      const G = H.getBoundingClientRect(), J = Mt(
        (E.clientX - G.left) / Math.max(1, G.width)
      ), W = Math.min(
        f,
        Math.max(
          Math.min(
            t === "sequence" ? Zl : 20,
            f
          ),
          x * Math.exp(E.deltaY * 15e-4)
        )
      );
      if (W >= f * 0.999) {
        Y(null);
        return;
      }
      const oe = O + J * x, fe = Math.min(
        Math.max(oe - J * W, u.start),
        u.end - W
      );
      Y({ start: fe, end: fe + W });
    };
    return p.addEventListener("wheel", w, { passive: !1 }), () => {
      p.removeEventListener("wheel", w);
    };
  }, [x, O, f, t, u]), u === null)
    return /* @__PURE__ */ q.createElement(
      "section",
      {
        ref: $,
        className: ye.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ q.createElement("div", { className: ye.plot }, /* @__PURE__ */ q.createElement(mn, null), /* @__PURE__ */ q.createElement("div", { className: ye.track }, /* @__PURE__ */ q.createElement("span", { className: ye.empty }, "No timing data"), l && /* @__PURE__ */ q.createElement(
        fn,
        {
          loading: F,
          onHover: () => {
            M(null);
          },
          onLoad: L
        }
      )))
    );
  const Ie = Math.min(
    x,
    f / u.spans.length
  ), ce = (p) => {
    const w = p.currentTarget.getBoundingClientRect();
    return Mt((p.clientX - w.left) / Math.max(1, w.width));
  }, be = (p) => {
    var G;
    const w = p.target instanceof HTMLElement ? p.target : null, E = (G = w == null ? void 0 : w.closest("[data-timeline-record-index]")) == null ? void 0 : G.dataset.timelineRecordIndex;
    if (E === void 0) return null;
    const H = Number(E);
    return Number.isFinite(H) ? H : null;
  }, Be = (p) => {
    h(p);
  }, pt = (p) => {
    if (p.button === 2) {
      T.current = {
        anchorClientX: p.clientX,
        anchorStart: O,
        moved: !1,
        pannable: ae !== null,
        pointerId: p.pointerId
      }, ae !== null && g(!1), re(!0), typeof p.currentTarget.setPointerCapture == "function" && p.currentTarget.setPointerCapture(p.pointerId);
      return;
    }
    if (p.button !== 0) return;
    const w = ce(p), E = O + w * x, H = be(p);
    M({ fraction: w, recordIndex: H }), D.current = {
      pointerId: p.pointerId,
      anchorTime: E,
      anchorClientX: p.clientX,
      recordIndex: H
    }, typeof p.currentTarget.setPointerCapture == "function" && p.currentTarget.setPointerCapture(p.pointerId), N({ start: E, end: E });
  }, ht = (p) => {
    const w = p.currentTarget.getBoundingClientRect(), E = ce(p);
    M({ fraction: E, recordIndex: be(p) });
    const H = T.current;
    if (H !== null && H.pointerId === p.pointerId) {
      if (Math.abs(p.clientX - H.anchorClientX) >= Ct && (H.moved = !0), !H.pannable) return;
      const oe = (p.clientX - H.anchorClientX) / Math.max(1, w.width), fe = Math.min(
        Math.max(H.anchorStart - oe * x, u.start),
        u.end - x
      );
      Y({ start: fe, end: fe + x });
      return;
    }
    const G = D.current;
    if (G === null || G.pointerId !== p.pointerId) return;
    let J = O;
    if (ae !== null) {
      const oe = p.clientX - w.left, fe = Math.min(
        no,
        Math.max(1, w.width * eo)
      ), ue = oe < fe ? -1 : oe > w.width - fe ? 1 : 0;
      if (ue !== 0) {
        const Le = ue < 0 ? fe - oe : oe - (w.width - fe), xe = Mt(Le / fe), ke = O + ue * x * to * Math.max(0.2, xe);
        J = Math.min(
          Math.max(ke, u.start),
          u.end - x
        ), J !== O && (g(!1), Y({
          start: J,
          end: J + x
        }));
      }
    }
    const W = J + E * x;
    N(Lt(G.anchorTime, W));
  }, Ge = (p) => {
    const w = T.current;
    if (w !== null && w.pointerId === p.pointerId) {
      const ue = w.moved || Math.abs(p.clientX - w.anchorClientX) >= Ct;
      T.current = null, re(!1), ue || h(null);
      return;
    }
    const E = D.current;
    if (E === null || E.pointerId !== p.pointerId) return;
    const H = ce(p), G = O + H * x, J = Lt(E.anchorTime, G);
    M({ fraction: H, recordIndex: be(p) }), D.current = null, N(null);
    const W = Math.abs(p.clientX - E.anchorClientX) < Ct, oe = W && E.recordIndex !== null ? u.spans.find((ue) => ue.index === E.recordIndex) : void 0;
    if (oe !== void 0) {
      h(null), y == null || y(oe.index);
      return;
    }
    const fe = J.end - J.start < Ie ? ao(
      W ? J.start : (J.start + J.end) / 2,
      Ie,
      u.start,
      u.end
    ) : J;
    if (Be(fe), W) {
      const ue = J.start, Le = u.spans.reduce((xe, ke) => {
        const qe = ue < xe.start ? xe.start - ue : ue > xe.end ? ue - xe.end : 0;
        return (ue < ke.start ? ke.start - ue : ue > ke.end ? ue - ke.end : 0) < qe ? ke : xe;
      });
      o == null || o(Le.index);
    }
  }, Xe = (p) => {
    p.key !== "Escape" || s === null || (p.preventDefault(), h(null));
  }, mt = () => {
    D.current = null, T.current = null, N(null), M(null), re(!1);
  };
  return /* @__PURE__ */ q.createElement(
    "section",
    {
      ref: $,
      className: ye.root,
      "data-theme": v || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ q.createElement("div", { className: ye.plot }, /* @__PURE__ */ q.createElement(mn, null), /* @__PURE__ */ q.createElement(
      "div",
      {
        ref: k,
        className: ye.track,
        "data-panning": he || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: Xe,
        onPointerDown: pt,
        onPointerMove: ht,
        onPointerUp: Ge,
        onPointerCancel: mt,
        onPointerLeave: () => {
          D.current === null && T.current === null && M(null);
        },
        onDoubleClick: (p) => {
          p.preventDefault(), h(null);
        },
        onContextMenu: (p) => {
          p.preventDefault();
        }
      },
      V && /* @__PURE__ */ q.createElement(
        fn,
        {
          loading: F,
          onHover: () => {
            M(null);
          },
          onLoad: L
        }
      ),
      A !== null && A.recordIndex === null && C === null && /* @__PURE__ */ q.createElement(
        "div",
        {
          className: ye.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${A.fraction * 100}%`
          }
        }
      ),
      ee !== null && /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(
        "div",
        {
          className: ye.selection,
          "data-dragging": C === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ee.start * 100}%`,
            "--trajectory-selection-width": `${(ee.end - ee.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ q.createElement(
        "div",
        {
          className: ye.selectionEdges,
          "data-dragging": C === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ee.start * 100}%`,
            "--trajectory-selection-width": `${(ee.end - ee.start) * 100}%`
          }
        }
      )),
      b !== null && u !== null && /* @__PURE__ */ q.createElement(
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
          const w = (p.start - u.start) / f, E = Math.max(
            (p.end - p.start) / f,
            4e-3
          ), H = ie(), G = `${p.bypass ? "⚠ " : ""}${p.skill} · ${p.trigger}${p.open ? ` · ${d(H, "spanOpen")}` : ""}`, J = P === p.spanId, W = E > 0.14 && !p.bypass;
          return /* @__PURE__ */ q.createElement(Vn, { title: G, key: p.spanId }, /* @__PURE__ */ q.createElement(
            "span",
            {
              onPointerDown: (oe) => {
                oe.stopPropagation();
              },
              onClick: m ? (oe) => {
                oe.stopPropagation(), m(p.spanId);
              } : void 0,
              onMouseEnter: () => Z(p.spanId),
              onMouseLeave: () => Z(
                (oe) => oe === p.spanId ? null : oe
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, w) * 100}%`,
                width: `${E * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${p.hue}, 65%, ${J ? 62 : 55}%, ${J ? 0.85 : 0.55})`,
                border: p.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${p.hue}, 55%, 45%, 0.8)`,
                pointerEvents: m ? "auto" : "none",
                cursor: m ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            W ? /* @__PURE__ */ q.createElement(
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
      /* @__PURE__ */ q.createElement(
        "div",
        {
          className: ye.turnBoundaries,
          "data-animate-viewport": Te || void 0,
          "aria-hidden": "true",
          style: X
        },
        u.turnBoundaries.filter(
          (p) => p.time > u.start && p.time >= O && p.time <= O + x
        ).map((p) => /* @__PURE__ */ q.createElement(
          "span",
          {
            className: ye.turnBoundary,
            "data-turn": p.turn,
            key: p.turn,
            style: {
              "--trajectory-turn-left": `${(p.time - u.start) / f * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ q.createElement(
        "div",
        {
          className: ye.lanes,
          "data-animate-viewport": Te || void 0,
          "data-timeline-domain": !0,
          style: X
        },
        u.spans.filter(
          (p) => p.index === i || p.end >= O && p.start <= O + x
        ).map((p) => {
          const w = (p.start - u.start) / f, H = (p.end - p.start) / f * 100, G = R.get(p.index), J = G == null ? void 0 : G.ttftMs, W = G == null ? void 0 : G.decodingMs, oe = J === void 0 || W === void 0 || J + W <= 0 ? null : J / (J + W);
          return /* @__PURE__ */ q.createElement(
            Gn,
            {
              key: p.index,
              label: io(p.kind, G),
              placement: "bottom"
            },
            /* @__PURE__ */ q.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: ye.span,
                "data-timeline-span": p.kind,
                "data-timeline-record-index": p.index,
                "data-assistant-timing": oe === null ? void 0 : "true",
                "data-error": p.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": p.index === i || void 0,
                "data-hovered": (A == null ? void 0 : A.recordIndex) === p.index || void 0,
                "data-search-match": c === null ? void 0 : c.has(p.index) ? "true" : "false",
                "data-selected": de === null ? void 0 : p.start <= de.end && p.end >= de.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${w * 100}%`,
                  "--trajectory-span-width": `${H}%`,
                  "--trajectory-span-gap": `min(${H * 0.08}%, 1px)`,
                  "--trajectory-span-lane": p.lane,
                  ...oe === null ? {} : {
                    "--trajectory-assistant-ttft": `${oe * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), Dt = window.QwenPaw.host, ne = Dt.React, { Button: co, Input: uo, Popover: po, Segmented: ho, Tooltip: gn } = Dt.antd, {
  MenuFoldOutlined: mo,
  MenuUnfoldOutlined: fo,
  QuestionCircleOutlined: go,
  ReloadOutlined: yo,
  SearchOutlined: vo
} = Dt.antdIcons;
function So({
  mode: e,
  onModeChange: n,
  search: t,
  onSearchChange: s,
  onRefresh: l,
  modeOptions: r,
  allCollapsed: i,
  hasRequests: c,
  onToggleCollapseAll: h,
  callsCollapsed: y,
  onToggleCallsCollapsed: o
}) {
  const m = ie();
  return /* @__PURE__ */ ne.createElement(
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
    /* @__PURE__ */ ne.createElement(gn, { title: d(m, "projectionHint") }, /* @__PURE__ */ ne.createElement(
      ho,
      {
        size: "small",
        value: e,
        options: r,
        onChange: (v) => n(v)
      }
    )),
    /* @__PURE__ */ ne.createElement(
      uo,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ne.createElement(vo, null),
        placeholder: d(m, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (v) => s(v.target.value)
      }
    ),
    c && /* @__PURE__ */ ne.createElement(
      gn,
      {
        title: i ? d(m, "expandAll") : d(m, "collapseAll")
      },
      /* @__PURE__ */ ne.createElement(
        co,
        {
          size: "small",
          type: "text",
          icon: i ? /* @__PURE__ */ ne.createElement(fo, null) : /* @__PURE__ */ ne.createElement(mo, null),
          onClick: h
        }
      )
    ),
    /* @__PURE__ */ ne.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ ne.createElement(
      po,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ ne.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, "📚"), " ", d(m, "legendLoad")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, "⚡"), " ", d(m, "legendResource")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, "∈"), " ", d(m, "legendGuided")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, d(m, "legendStripTitle")), " ", d(m, "legendStrip")), /* @__PURE__ */ ne.createElement("div", null, /* @__PURE__ */ ne.createElement("strong", null, d(m, "legendBandTitle")), " ", d(m, "legendBand")))
      },
      /* @__PURE__ */ ne.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ ne.createElement(go, null), " ", d(m, "legendTitle"))
    ), /* @__PURE__ */ ne.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ne.createElement(yo, null),
      " ",
      d(m, "refresh")
    ))
  );
}
const dt = window.QwenPaw.host, j = dt.React, { useCallback: yn, useEffect: Ze, useMemo: we, useRef: Eo, useState: ve } = j, {
  Button: et,
  Empty: vn,
  Popconfirm: bo,
  Popover: xo,
  Space: ko,
  Spin: Xn,
  Switch: wo,
  Tag: To,
  Tooltip: _o,
  message: We
} = dt.antd, { DeleteOutlined: Io, DownloadOutlined: Co, SettingOutlined: Sn } = dt.antdIcons, { Text: $e } = dt.antd.Typography;
function En({
  config: e,
  onChange: n,
  children: t
}) {
  const s = ie(), l = (i, c, h) => /* @__PURE__ */ j.createElement(
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
      wo,
      {
        size: "small",
        checked: !!c,
        onChange: (y) => n({ [h]: y })
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
  return /* @__PURE__ */ j.createElement(xo, { content: r, trigger: "click", placement: "bottomRight" }, t);
}
function Mo({
  sessionId: e,
  summary: n,
  locale: t,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  const [r, i] = ve(null), [c, h] = ve(!1), [y, o] = ve(!1), [m, v] = ve(""), [u, b] = ve("sequence"), [R, D] = ve(null), [T, $] = ve(null), [k, C] = ve(null), [N, A] = ve(null), [M, P] = ve(
    /* @__PURE__ */ new Set()
  ), [Z, F] = ve(!1), [se, he] = ve(null), [re, ae] = ve(null), [Y, Te] = ve(null), [g, f] = ve(null), S = Eo(null);
  S.current = e, Ze(() => {
    ls().then(he).catch(() => he(null));
  }, []);
  const _ = yn(async (p, w) => {
    w || h(!0);
    try {
      const E = await ss(p, {
        beforeSeq: w,
        limit: 200
      });
      f(null), i((H) => w && H ? {
        ...E,
        events: [...E.events, ...H.events]
      } : E);
    } catch (E) {
      f({
        message: String(E.message),
        status: E instanceof zn ? E.status : null
      });
    } finally {
      w || h(!1);
    }
  }, []), x = yn(async (p) => {
    try {
      const w = await ns(p);
      Te(w), ae({
        sessionId: p,
        inputTokens: w.input_tokens,
        outputTokens: w.output_tokens,
        totalTokens: w.total_tokens,
        reasoningTokens: Number(w.reasoning_tokens ?? 0)
      });
    } catch {
      Te(null), ae(null);
    }
  }, []);
  Ze(() => {
    e ? (D(null), $(null), C(null), P(/* @__PURE__ */ new Set()), v(""), _(e), x(e)) : (i(null), Te(null), ae(null));
  }, [e, _, x]);
  const O = we(
    () => r ? Vl(r.events) : [],
    [r]
  ), { initial: V, turns: L } = we(
    () => Gl(O),
    [O]
  ), X = we(
    () => V ? [V, ...cn(L)] : cn(L),
    [V, L]
  ), le = we(
    () => L.some((p) => p.status === "running"),
    [L]
  );
  Ze(() => {
    if (!e || !le) return;
    const p = setInterval(() => {
      document.visibilityState === "visible" && S.current && _(S.current);
    }, 5e3);
    return () => clearInterval(p);
  }, [e, le, _]);
  const te = we(
    () => R === null ? null : Yl(L, R, u),
    [R, L, u]
  ), ee = we(() => {
    const p = m.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (p.length === 0) return null;
    const w = (E) => {
      var H, G, J;
      return [
        E.text,
        E.outputText,
        E.thinkingText,
        E.toolName,
        E.toolInput,
        E.toolOutput,
        E.toolError,
        E.model,
        E.provider,
        E.marker,
        E.skillName,
        E.inSkill,
        E.guidedSkill,
        E.channel,
        (H = E.messages) == null ? void 0 : H.map((W) => `${W.role} ${W.text}`).join(`
`),
        (G = E.inputNew) == null ? void 0 : G.map((W) => `${W.role} ${W.text ?? ""}`).join(`
`),
        E.apiPayload ? [
          E.apiPayload.model,
          ...E.apiPayload.messages.map(
            (W) => `${W.role} ${W.content}`
          )
        ].join(`
`) : "",
        E.options ? JSON.stringify(E.options) : "",
        E.toolSchema ? JSON.stringify(E.toolSchema) : "",
        (J = E.headerTools) == null ? void 0 : J.join(" "),
        E.prompt ?? ""
      ].filter(Boolean).join(`
`).toLowerCase();
    };
    return new Set(
      X.filter((E) => {
        const H = w(E);
        return p.every((G) => H.includes(G));
      }).map((E) => E.index)
    );
  }, [m, X]), de = we(
    () => T === null ? null : X.find((p) => p.index === T) ?? null,
    [X, T]
  ), Ie = we(() => {
    var Ht, Ut;
    if (k === null) return null;
    const p = L.find((U) => U.turn === k);
    if (!p) return null;
    const w = ((Ht = p.groups[0]) == null ? void 0 : Ht.cells) ?? [], E = w.filter((U) => U.kind === "message"), H = w.filter((U) => U.kind === "tool"), G = [
      ...new Set(
        E.map((U) => U.model).filter((U) => !!U)
      )
    ], J = [
      ...new Set(
        E.map((U) => U.provider).filter((U) => !!U)
      )
    ];
    let W = 0, oe = 0, fe = 0, ue = 0, Le = 0, xe = null, ke = 0;
    const qe = [];
    for (const U of w)
      U.usage && (W += U.usage.input_tokens ?? 0, oe += U.usage.output_tokens ?? 0, fe += U.usage.cache_input_tokens ?? 0, ue += U.usage.cache_creation_input_tokens ?? 0, Le += U.usage.reasoning_tokens ?? 0), U.timing && (xe = xe === null ? U.timing.ttft_ms : Math.min(xe, U.timing.ttft_ms), ke = (ke ?? 0) + U.timing.decode_ms), U.isError && qe.push(U.toolError ?? U.text ?? "error");
    const ze = w.find((U) => U.kind === "user"), qn = (Ut = [...E].reverse().find((U) => U.options)) == null ? void 0 : Ut.options, ft = [...E].reverse().find((U) => U.outputText);
    let jt;
    const Bt = E.filter((U) => U.messagesMeta);
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
    const gt = L.findIndex((U) => U.turn === k), Ft = gt > 0 ? L[gt - 1] : null;
    let Fe = null;
    if (Ft) {
      Fe = 0;
      for (const U of Ft.groups)
        for (const Ne of U.cells)
          Ne.kind === "message" && Ne.usage && (Fe += Ne.usage.input_tokens ?? 0);
    }
    const Jn = Fe === null && gt !== 0 ? void 0 : {
      prevInputTokens: Fe,
      deltaTokens: W - (Fe ?? 0)
    };
    return {
      turn: k,
      status: p.status,
      durationMs: p.durationMs,
      startedAt: (ze == null ? void 0 : ze.startedAt) ?? null,
      query: (ze == null ? void 0 : ze.text) ?? "",
      llmCalls: E.length,
      toolCalls: H.length,
      models: G,
      providers: J,
      inputTokens: W,
      outputTokens: oe,
      cacheReadTokens: fe,
      cacheWriteTokens: ue,
      reasoningTokens: Le,
      inputComposition: jt,
      growth: Jn,
      resultIndex: ft == null ? void 0 : ft.index,
      ttftMs: xe,
      decodeMs: ke,
      errors: qe,
      options: qn,
      sessionTotals: re && re.sessionId === e ? {
        inputTokens: re.inputTokens,
        outputTokens: re.outputTokens,
        totalTokens: re.totalTokens,
        reasoningTokens: re.reasoningTokens
      } : void 0
    };
  }, [k, L, re, e]), ce = !!(r && r.events.length > 0 && r.events[0].seq > 1), be = async (p) => {
    try {
      he(await os(p));
    } catch (w) {
      We.error(String(w.message));
    }
  }, Be = we(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), pt = we(() => {
    if (!Y) return null;
    const p = [
      `${Y.runs} ${d(t, "statRounds")} · ${Y.llm_calls} ${d(t, "statSteps")}`,
      `LLM ${pe(Y.llm_ms_total / 1e3)} · ${d(
        t,
        "toolCalls"
      )} ${pe(Y.tool_ms_total / 1e3)}`,
      `${d(t, "statTtftAvg")} ${Y.ttft_ms_avg === null ? "-" : pe(Y.ttft_ms_avg / 1e3)} · ${ot(
        Y.output_tokens,
        Y.decode_ms_total / 1e3
      )}`
    ];
    if (Y.cache_read_tokens > 0 || Y.cache_write_tokens > 0) {
      const w = Y.cache_read_tokens + Y.input_tokens, E = w > 0 ? Math.round(Y.cache_read_tokens / w * 100) : 0;
      p.push(`${d(t, "statCacheHit")} ${E}%`);
    }
    if (p.push(
      `${d(t, "statInput")} ${Q(
        Y.input_tokens
      )} tok · ${d(t, "statOutput")} ${Q(
        Y.output_tokens
      )} tok`
    ), n && p.push(zt(n.size_bytes)), Y.skills) {
      const w = Object.entries(Y.skills).sort((E, H) => H[1] - E[1]).map(([E, H]) => `${E} ×${H}`).join(" · ");
      w && p.push(`📚 ${w}`);
    }
    if (V != null && V.prompt) {
      const w = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set();
      for (const G of L)
        for (const J of G.groups)
          for (const W of J.cells)
            W.skillName ? E.add(W.skillName) : W.inSkill && w.add(W.inSkill);
      const H = [...w].filter((G) => !E.has(G));
      H.length > 0 && p.push(
        `⚡ ${d(t, "skillBypassStrip")}: ${H.join(" · ")}`
      );
    }
    return p.join(" | ");
  }, [Y, n, t, L, V]), ht = () => {
    $(null), C(null);
  };
  Ze(() => {
    T !== null && A(null);
  }, [T]);
  const Ge = we(
    () => N === null ? null : L.flatMap((p) => p.skillSpans ?? []).find((p) => p.id === N) ?? null,
    [N, L]
  ), Xe = (g == null ? void 0 : g.status) === 404, mt = de !== null || Ie !== null;
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
          To,
          {
            color: Nn[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Pn((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ j.createElement($e, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ j.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ j.createElement(ko, null, /* @__PURE__ */ j.createElement(En, { config: se, onChange: be }, /* @__PURE__ */ j.createElement(et, { size: "small", icon: /* @__PURE__ */ j.createElement(Sn, null) })), /* @__PURE__ */ j.createElement(_o, { title: d(t, "export") }, /* @__PURE__ */ j.createElement(
          et,
          {
            size: "small",
            icon: /* @__PURE__ */ j.createElement(Co, null),
            onClick: () => {
              is(e).then(() => We.success(d(t, "exported"))).catch(
                (p) => We.error(String(p.message))
              );
            }
          },
          d(t, "export")
        )), /* @__PURE__ */ j.createElement(
          bo,
          {
            title: d(t, "deleteConfirm"),
            onConfirm: () => {
              as(e).then(() => {
                We.success(d(t, "deleted")), l == null || l();
              }).catch(
                (p) => We.error(String(p.message))
              );
            }
          },
          /* @__PURE__ */ j.createElement(et, { size: "small", danger: !0, icon: /* @__PURE__ */ j.createElement(Io, null) }, d(t, "delete"))
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
        /* @__PURE__ */ j.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ j.createElement(En, { config: se, onChange: be }, /* @__PURE__ */ j.createElement(et, { size: "small", icon: /* @__PURE__ */ j.createElement(Sn, null) })))
      )
    ),
    g && !Xe && /* @__PURE__ */ j.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ j.createElement($e, { type: "danger", style: { fontSize: 12 } }, `${d(t, "loadFailed")}: ${g.message}`)),
    /* @__PURE__ */ j.createElement(
      So,
      {
        mode: u,
        onModeChange: b,
        search: m,
        onSearchChange: v,
        onRefresh: () => {
          e && (_(e), x(e)), l == null || l();
        },
        modeOptions: Be,
        allCollapsed: L.length > 0 && L.every((p) => M.has(p.turn ?? -1)),
        hasRequests: L.some((p) => p.turn !== null),
        callsCollapsed: Z,
        onToggleCallsCollapsed: () => F((p) => !p),
        onToggleCollapseAll: () => {
          P((p) => L.some(
            (E) => E.turn !== null && !p.has(E.turn)
          ) ? new Set(
            L.map((E) => E.turn).filter((E) => E !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ j.createElement(
      ro,
      {
        turns: L,
        mode: u,
        range: R,
        hasEarlierRecords: ce,
        onLoadEarlier: async () => {
          var p;
          return !r || r.events.length === 0 ? !1 : (await _(e, (p = r.events[0]) == null ? void 0 : p.seq), !0);
        },
        selectedIndex: T,
        searchMatchIndexes: ee,
        onRangeChange: D,
        onRecordSelect: $,
        onRecordFocus: $,
        onSkillSpanSelect: A
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
          turns: L,
          selectedIndex: T,
          selectedTurn: k,
          collapsedTurns: M,
          focusIndexes: te,
          searchMatchIndexes: ee,
          onSelectedIndexChange: (p) => {
            if (p === T) {
              $(null);
              return;
            }
            $(p), C(null);
          },
          onSkillSpanOpen: (p, w) => {
            var J;
            const E = L.flatMap((W) => W.skillSpans ?? []), G = (w !== null ? (((J = L.find((W) => W.turn === w)) == null ? void 0 : J.skillSpans) ?? []).find((W) => W.skill === p) : void 0) ?? E.find((W) => W.skill === p);
            G && A(G.id);
          },
          onSelectedTurnChange: (p) => {
            C(p), $(null);
          },
          callsCollapsed: Z,
          onToggleTurn: (p) => {
            P((w) => {
              const E = new Set(w);
              return E.has(p) ? E.delete(p) : E.add(p), E;
            });
          },
          hasOlderRecords: ce,
          loadingOlder: y,
          onLoadOlder: () => {
            var p;
            !r || r.events.length === 0 || (o(!0), _(
              e,
              (p = r.events[0]) == null ? void 0 : p.seq
            ).finally(() => o(!1)));
          },
          emptyText: d(t, "noSessions"),
          initialRecord: V
        }
      )
    ), Ge ? /* @__PURE__ */ j.createElement(
      qs,
      {
        span: Ge,
        records: X,
        onJumpRecord: (p) => {
          A(null), $(p);
        },
        onClose: () => A(null)
      }
    ) : mt ? /* @__PURE__ */ j.createElement(
      Ks,
      {
        record: de,
        request: Ie,
        onJumpSession: s,
        onSelectTurn: (p) => {
          C(p), $(null);
        },
        onClose: ht
      }
    ) : null) : /* @__PURE__ */ j.createElement(
      vn,
      {
        image: vn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: Xe && e ? d(t, "noTraceForSession") : d(t, "selectSession")
      }
    )
  );
}
const je = window.QwenPaw.host, K = je.React, { useCallback: bn, useEffect: $t, useMemo: tt, useState: Me } = K, { Button: xn, Empty: kn, Input: $o, Spin: zo, Tag: wn, Tooltip: Tn } = je.antd, {
  CaretRightOutlined: Ao,
  MenuFoldOutlined: Oo,
  MenuUnfoldOutlined: Ro,
  SearchOutlined: Lo
} = je.antdIcons, { Text: Ve } = je.antd.Typography;
function No({
  groups: e,
  collapsedAgents: n,
  onToggleAgent: t,
  searching: s,
  selected: l,
  onSelect: r,
  locale: i
}) {
  const c = e.length > 1;
  return /* @__PURE__ */ K.createElement(K.Fragment, null, e.map(([h, y]) => {
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
        Ao,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: o ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ K.createElement(Ve, { strong: !0, style: { fontSize: 12 } }, h),
      /* @__PURE__ */ K.createElement(Ve, { type: "secondary", style: { fontSize: 11 } }, y.length)
    ), !o && y.map((m) => {
      const v = m.session_id === l;
      return /* @__PURE__ */ K.createElement(
        "div",
        {
          key: m.session_id,
          onClick: () => r(m.session_id),
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
            Ve,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${m.title ? `${m.title}
` : ""}${m.session_id}`
              }
            },
            m.title || m.agent_id || Rn(m.session_id)
          ),
          c ? null : m.agent_id ? /* @__PURE__ */ K.createElement(
            wn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            m.agent_id
          ) : null,
          /* @__PURE__ */ K.createElement(
            wn,
            {
              color: Nn[m.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Pn(m.status)
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
          /* @__PURE__ */ K.createElement("span", null, m.channel || "-"),
          /* @__PURE__ */ K.createElement("span", null, m.runs, " ", d(i, "runs")),
          /* @__PURE__ */ K.createElement("span", null, Ln(m.total_tokens), " tok"),
          m.skills ? /* @__PURE__ */ K.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(m.skills).sort((u, b) => b[1] - u[1]).map(([u, b]) => `${u} ×${b}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(m.skills).sort((u, b) => b[1] - u[1]).slice(0, 2).map(([u]) => u).join(" ")
          ) : null,
          /* @__PURE__ */ K.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Cs(m.last_event_t)
            },
            Ms(m.last_event_t)
          )
        )
      );
    }));
  }));
}
function Po() {
  const e = typeof je.useLocale == "function" ? je.useLocale() : void 0, n = tt(
    () => Nt(e ?? ie()),
    [e]
  ), [t, s] = Me(null), [l, r] = Me(!1), [i, c] = Me(
    /* @__PURE__ */ new Set()
  ), [h, y] = Me(!1), [o, m] = Me(!1), [v, u] = Me(null), [b, R] = Me(""), [D, T] = Me(null), $ = bn(async () => {
    try {
      const M = await Wt({ limit: 100, offset: 0 });
      s(M.sessions), r(M.has_more), T(null);
    } catch (M) {
      T(String(M.message));
    }
  }, []), k = bn(async () => {
    m(!0);
    try {
      const M = await Wt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      s((P) => {
        const Z = P ?? [];
        return [
          ...Z,
          ...M.sessions.filter(
            (F) => !Z.some((se) => se.session_id === F.session_id)
          )
        ];
      }), r(M.has_more);
    } catch (M) {
      T(String(M.message));
    } finally {
      m(!1);
    }
  }, [t]);
  $t(() => {
    $();
    try {
      const M = new URLSearchParams(window.location.search).get("session");
      M && An(M).then((P) => {
        u(P ?? M);
      });
    } catch {
    }
  }, [$]), $t(() => {
    try {
      const M = new URL(window.location.href);
      v ? M.searchParams.set("session", v) : M.searchParams.delete("session"), window.history.replaceState(window.history.state, "", M);
    } catch {
    }
  }, [v]), $t(() => {
    const M = setInterval(() => {
      document.visibilityState === "visible" && $();
    }, 15e3);
    return () => clearInterval(M);
  }, [$]);
  const C = tt(
    () => (t == null ? void 0 : t.find((M) => M.session_id === v)) ?? null,
    [t, v]
  ), N = tt(() => {
    if (!t) return [];
    const M = b.trim().toLowerCase();
    return M ? t.filter(
      (P) => [P.session_id, P.title ?? "", P.agent_id, P.channel].join(" ").toLowerCase().includes(M)
    ) : t;
  }, [t, b]), A = tt(() => {
    const M = /* @__PURE__ */ new Map();
    for (const P of N) {
      const Z = P.agent_id || "(unknown)", F = M.get(Z);
      F ? F.push(P) : M.set(Z, [P]);
    }
    return [...M.entries()];
  }, [N]);
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
        icon: /* @__PURE__ */ K.createElement(Ro, null),
        onClick: () => y(!1)
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
        $o,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ K.createElement(Lo, null),
          placeholder: d(n, "searchPlaceholder"),
          value: b,
          style: { flex: 1, minWidth: 0 },
          onChange: (M) => R(M.target.value)
        }
      ),
      /* @__PURE__ */ K.createElement(Tn, { title: d(n, "collapseSidebar") }, /* @__PURE__ */ K.createElement(
        xn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ K.createElement(Oo, null),
          onClick: () => y(!0)
        }
      ))
    ),
    D ? /* @__PURE__ */ K.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ K.createElement(Ve, { type: "danger", style: { fontSize: 12 } }, `${d(n, "loadFailed")}: ${D}`)) : null,
    /* @__PURE__ */ K.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ K.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ K.createElement(zo, null)) : N.length === 0 ? /* @__PURE__ */ K.createElement(
      kn,
      {
        image: kn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ K.createElement("span", { style: { fontSize: 12 } }, d(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ K.createElement(
        Ve,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        d(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ K.createElement(
      No,
      {
        groups: A,
        collapsedAgents: i,
        onToggleAgent: (M) => {
          c((P) => {
            const Z = new Set(P);
            return Z.has(M) ? Z.delete(M) : Z.add(M), Z;
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
    Mo,
    {
      sessionId: v,
      summary: C,
      locale: n,
      onJumpSession: u,
      onRefreshSessions: () => void $()
    }
  ));
}
const Do = window.QwenPaw.host.React;
var _n, In;
(In = (_n = window.QwenPaw).registerRoutes) == null || In.call(_n, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Po,
    label: d(ie(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var Cn, nt, Mn;
(Mn = (nt = (Cn = window.QwenPaw.chat) == null ? void 0 : Cn.rightHeader) == null ? void 0 : nt.add) == null || Mn.call(
  nt,
  "agent-trace",
  Do.createElement(hs),
  { id: "agent-trace-jump" }
);

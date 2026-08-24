var Zn = Object.defineProperty;
var es = (e, n, t) => n in e ? Zn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var vt = (e, n, t) => es(e, typeof n != "symbol" ? n + "" : n, t);
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
    inputCollapseText: "collapse"
  }
};
function Rt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function re() {
  try {
    return Rt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function h(e, n) {
  return ts[e][n];
}
const Fe = window.QwenPaw.host;
async function ns(e) {
  return Re(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function zn(e, n) {
  return Fe.fetch ? Fe.fetch(e, n) : fetch(Fe.getApiUrl(e), {
    ...n,
    headers: {
      ...(n == null ? void 0 : n.headers) || {},
      ...Fe.getApiToken() ? { Authorization: `Bearer ${Fe.getApiToken()}` } : {}
    }
  });
}
class $n extends Error {
  constructor(n, t) {
    super(t), this.status = n, this.name = "ApiError";
  }
}
async function Re(e, n) {
  const t = await zn(e, n), s = await t.text();
  let l = null;
  try {
    l = s ? JSON.parse(s) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new $n(
      t.status,
      typeof o == "string" ? o : `HTTP ${t.status}`
    );
  }
  return l;
}
async function Kt(e) {
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
  const n = await zn(
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
const Oe = window.QwenPaw.host, nt = Oe.React, { useMemo: as } = nt, { Button: cs, Tooltip: ds } = Oe.antd, { CompassOutlined: us } = Oe.antdIcons;
function hs(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function ps() {
  const e = typeof Oe.useLocale == "function" ? Oe.useLocale() : void 0, n = as(
    () => Rt(e ?? re()),
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
        const t = typeof Oe.getCurrentSessionId == "function" ? Oe.getCurrentSessionId() : null;
        An(t).then((s) => {
          window.location.href = hs(s ?? t);
        });
      }
    }
  ));
}
const Wt = 3e3;
function Vt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function fs(e, n) {
  const t = Vt(e ?? ""), s = Vt(n ?? "");
  if (t.length > Wt || s.length > Wt)
    return [
      ...t.map((f) => ({ kind: "del", text: f })),
      ...s.map((f) => ({ kind: "add", text: f }))
    ];
  const l = t.length, o = s.length, i = new Int32Array((l + 1) * (o + 1)), c = (f, v) => f * (o + 1) + v;
  for (let f = l - 1; f >= 0; f -= 1)
    for (let v = o - 1; v >= 0; v -= 1)
      i[c(f, v)] = t[f] === s[v] ? i[c(f + 1, v + 1)] + 1 : Math.max(i[c(f + 1, v)], i[c(f, v + 1)]);
  const p = [];
  let y = 0, r = 0;
  for (; y < l && r < o; )
    t[y] === s[r] ? (p.push({ kind: "same", text: t[y] }), y += 1, r += 1) : i[c(y + 1, r)] >= i[c(y, r + 1)] ? (p.push({ kind: "del", text: t[y] }), y += 1) : (p.push({ kind: "add", text: s[r] }), r += 1);
  for (; y < l; )
    p.push({ kind: "del", text: t[y] }), y += 1;
  for (; r < o; )
    p.push({ kind: "add", text: s[r] }), r += 1;
  return p;
}
function ms(e, n = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((o, i) => {
    if (o.kind !== "same")
      for (let c = Math.max(0, i - n); c <= Math.min(e.length - 1, i + n); c += 1)
        t[c] = !0;
  });
  const s = [];
  let l = 0;
  return e.forEach((o, i) => {
    t[i] ? (l > 0 && (s.push({ kind: "gap", count: l }), l = 0), s.push(o)) : l += 1;
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
    vt(this, "open", /* @__PURE__ */ new Map());
    vt(this, "finished", []);
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
  for (const [o, i] of n)
    for (const c of i)
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
const Gt = 60;
function He(e) {
  return `${e.role}|${e.text ?? `#${e.chars ?? 0}`}`;
}
function Xt(e) {
  return e.chars ?? (e.text ? e.text.length : 0);
}
function qt(e) {
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
    const x = He(d);
    o.set(x, (o.get(x) ?? 0) + 1);
  }
  const i = [], c = [], p = [];
  for (let d = 0; d < Math.min(t, Gt); d += 1)
    p.push({ status: "kept", role: e[d].role });
  for (const d of s) {
    const x = He(d), O = o.get(x) ?? 0;
    O > 0 ? (o.set(x, O - 1), p.push({ status: "kept", role: d.role })) : i.push(d);
  }
  for (const d of l) {
    const x = He(d), O = o.get(x) ?? 0;
    O > 0 && (o.set(x, O - 1), c.push(d));
  }
  const y = /* @__PURE__ */ new Map();
  for (const d of c) {
    const x = y.get(d.role);
    x ? x.push(d) : y.set(d.role, [d]);
  }
  const r = [], f = [];
  for (const d of i) {
    const x = y.get(d.role);
    x && x.length > 0 ? r.push([d, x.shift()]) : f.push(d);
  }
  const v = [...y.values()].flat();
  for (const [d, x] of r)
    p.push({
      status: "rewritten",
      role: d.role,
      oldText: d.text,
      newText: x.text
    });
  for (const d of f)
    p.push({
      status: "removed",
      role: d.role,
      oldText: d.text
    });
  for (const d of v)
    p.push({
      status: "added",
      role: d.role,
      newText: d.text
    });
  return {
    breakAt: t,
    beforeCount: e.length,
    afterCount: n.length,
    beforeChars: e.reduce((d, x) => d + Xt(x), 0),
    afterChars: n.reduce((d, x) => d + Xt(x), 0),
    beforeByRole: qt(e),
    afterByRole: qt(n),
    changes: p.slice(0, Gt)
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
function ee(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function Lt(e, n) {
  return e === void 0 || !Number.isFinite(e) || n === null || n === void 0 || n <= 0 ? "-" : `${(e / n).toFixed(1)} tok/s`;
}
function ze(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function me(e) {
  if (!e) return null;
  const n = Date.parse(e);
  return Number.isFinite(n) ? n : null;
}
function Rn(e) {
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
function Dn(e) {
  return e || "unknown";
}
const rt = window.QwenPaw.host, a = rt.React, { useEffect: zs, useRef: $s, useState: Pn } = a, { Button: jn, Collapse: $t, Empty: Jt, Tabs: Nt, Tag: lt } = rt.antd, { Text: U } = rt.antd.Typography, { CopyOutlined: As, CloseOutlined: Os } = rt.antdIcons, Rs = 320, Ls = 720, qe = {
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
    const i = l[0];
    let c = "rgba(128,128,128,1)";
    l[1] !== void 0 ? c = qe.key : l[2] !== void 0 ? c = qe.string : l[3] !== void 0 ? c = qe.number : c = qe.literal, n.push(
      /* @__PURE__ */ a.createElement("span", { key: o++, style: { color: c } }, i)
    ), s = l.index + i.length;
  }
  return s < e.length && n.push(e.slice(s)), n;
}
function be({ value: e, json: n = !1 }) {
  const [t, s] = Pn(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
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
    /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ a.createElement(
      U,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      n
    )
  );
}
function Qt({
  input: e,
  output: n,
  cacheRead: t,
  cacheWrite: s,
  reasoning: l
}) {
  const o = Math.max(0, e - t - s), i = Math.max(0, n - l);
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "Input", value: `${ee(e)} tok` }), t ? /* @__PURE__ */ a.createElement(M, { label: "Cached", value: `${ee(t)} tok` }) : null, s ? /* @__PURE__ */ a.createElement(
    M,
    {
      label: "Cache created",
      value: `${ee(s)} tok`
    }
  ) : null, t || s ? /* @__PURE__ */ a.createElement(M, { label: "Other", value: `${ee(o)} tok` }) : null, /* @__PURE__ */ a.createElement(M, { label: "Output", value: `${ee(n)} tok` }), l ? /* @__PURE__ */ a.createElement(M, { label: "Reasoning", value: `${ee(l)} tok` }) : null, l ? /* @__PURE__ */ a.createElement(M, { label: "Content", value: `${ee(i)} tok` }) : null);
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
const Yt = ["system", "user", "assistant", "tool"], Ps = {
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
  const s = [], l = new Set(Yt), o = [
    ...Yt.filter((c) => t.charsByRole[c]),
    ...Object.keys(t.charsByRole).filter(
      (c) => !l.has(c) && t.charsByRole[c]
    )
  ], i = t.totalChars || 1;
  for (const c of o) {
    const p = t.charsByRole[c], y = Ps[c] ?? "roleOther", r = Math.round(p / i * 100);
    s.push(
      /* @__PURE__ */ a.createElement(
        M,
        {
          key: c,
          label: h(n, y),
          value: `${ee(p)} ${h(n, "charUnit")} · ${r}%`
        }
      )
    );
  }
  return t.maxToolChars > 0 && s.push(
    /* @__PURE__ */ a.createElement(
      M,
      {
        key: "max-tool",
        label: h(n, "maxToolMsg"),
        value: `${ee(t.maxToolChars)} ${h(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(U, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, h(n, "inputComposition")), s, e.inputTokens > 0 ? /* @__PURE__ */ a.createElement(
    M,
    {
      label: h(n, "realInputTokens"),
      value: `${ee(e.inputTokens)} tok`
    }
  ) : null, /* @__PURE__ */ a.createElement(
    U,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    h(n, "compositionNote")
  ), e.growth ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    M,
    {
      label: h(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? h(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${ee(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ a.createElement(
    M,
    {
      label: h(n, "cacheAbsorbed"),
      value: `${ee(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Bs({
  request: e,
  onJumpRecord: n
}) {
  const t = re(), [s, l] = a.useState("summary"), o = /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "Started", value: ze(e.startedAt) }), /* @__PURE__ */ a.createElement(
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
      label: h(t, "throughput"),
      value: Lt(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), i = /* @__PURE__ */ a.createElement(
    Qt,
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
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ a.createElement(
        M,
        {
          label: h(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ a.createElement(M, { label: "Query", value: Fs(e.query) }), /* @__PURE__ */ a.createElement(
        M,
        {
          label: h(t, "model"),
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
      )) : null, e.options ? /* @__PURE__ */ a.createElement(St, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ a.createElement(be, { value: e.options, json: !0 })) : null, /* @__PURE__ */ a.createElement(St, { label: "Usage", onOpen: () => l("usage") }, i), /* @__PURE__ */ a.createElement(St, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(U, { strong: !0, style: { fontSize: 12 } }, h(t, "thisRequest")), i, /* @__PURE__ */ a.createElement(js, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        U,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        h(t, "sessionTotal")
      ), /* @__PURE__ */ a.createElement(
        Qt,
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
    Nt,
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
  ), s = a.useMemo(() => gs(t), [t]), l = a.useMemo(() => ms(t), [t]), o = re();
  return e === void 0 ? /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 12 } }, h(o, "noPrevPrompt")) : /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ a.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ a.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ a.createElement(
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
      const p = i;
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
  const n = re(), t = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: h(n, "summary"),
      children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "#", value: String(e.index) }), /* @__PURE__ */ a.createElement(
        M,
        {
          label: h(n, "status"),
          value: s ? h(n, "promptChanged") : h(n, "promptInitial")
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
      label: h(n, "prompt"),
      children: /* @__PURE__ */ a.createElement(be, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ a.createElement("div", { style: { paddingTop: 4 } }, t.map((i) => /* @__PURE__ */ a.createElement(U, { key: i, code: !0, style: { fontSize: 11 } }, i)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ a.createElement(
          $t,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((i, c) => {
              var y;
              const p = typeof i.name == "string" && i.name || typeof ((y = i.function) == null ? void 0 : y.name) == "string" && i.function.name || `tool-${c + 1}`;
              return {
                key: String(c),
                label: /* @__PURE__ */ a.createElement(U, { code: !0, style: { fontSize: 11 } }, p),
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
  return /* @__PURE__ */ a.createElement(Nt, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function Et({ dragRef: e, width: n }) {
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
  var x, O;
  const i = re(), [c, p] = Pn(400), y = $s(null);
  if (zs(() => {
    const w = (k) => {
      const _ = y.current;
      if (_ === null) return;
      const D = _.anchorX - k.clientX;
      p(
        Math.min(Ls, Math.max(Rs, _.anchorWidth + D))
      );
    }, E = () => {
      y.current = null;
    };
    return window.addEventListener("pointermove", w), window.addEventListener("pointerup", E), () => {
      window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", E);
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
        Jt,
        {
          image: Jt.PRESENTED_IMAGE_SIMPLE,
          description: h(i, "selectRecord")
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
      /* @__PURE__ */ a.createElement(Et, { dragRef: y, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: o }), /* @__PURE__ */ a.createElement(Bs, { request: n, onJumpRecord: s }))
    );
  const r = e;
  if (r.kind === "system" && r.prompt !== void 0)
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
      /* @__PURE__ */ a.createElement(Et, { dragRef: y, width: c }),
      /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: o }), /* @__PURE__ */ a.createElement(Us, { record: r }))
    );
  const f = r.usage, v = r.timing, d = [];
  if (d.push({
    key: "summary",
    label: h(i, "summary"),
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "#", value: String(r.index) }), /* @__PURE__ */ a.createElement(M, { label: "Kind", value: On(r, i) }), r.runIndex > 0 && l ? /* @__PURE__ */ a.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ a.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(r.runIndex)
      },
      "Request #",
      r.runIndex,
      " →"
    )) : null, /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(i, "status"),
        value: r.running ? h(i, "running") : r.isError ? h(i, "error") : h(i, "success"),
        danger: r.isError
      }
    ), r.provider ? /* @__PURE__ */ a.createElement(M, { label: "Provider", value: r.provider }) : null, r.model ? /* @__PURE__ */ a.createElement(M, { label: h(i, "model"), value: r.model }) : null, r.toolName ? /* @__PURE__ */ a.createElement(M, { label: "Tool", value: r.toolName }) : null, r.inSkill ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(i, "skillResource"),
        value: r.inSkillLoaded ? `⚡ ${r.inSkill}` : `⚡ ${r.inSkill}（${h(i, "skillBypass")}）`
      }
    ) : null, r.guidedSkill ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(i, "skillGuided"),
        value: `∈ ${r.guidedSkill}（${r.guidedReason === "slash" ? h(i, "guidedBySlash") : h(i, "guidedByLoad")}）`
      }
    ) : null, r.toolOutputChars ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(i, "outputSize"),
        value: r.toolOutputBytes ? `${ee(r.toolOutputChars)} ${h(
          i,
          "charUnit"
        )} · ${zt(r.toolOutputBytes)} (${h(
          i,
          "beforeTruncation"
        )})` : `${ee(r.toolOutputChars)} ${h(
          i,
          "charUnit"
        )}`
      }
    ) : null, r.kind === "user" && (r.channel || r.userId) ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(i, "source"),
        value: [r.channel, r.userId].filter(Boolean).join(" · ")
      }
    ) : null, r.receipt ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(i, "channel"),
        value: r.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(i, "duration"),
        value: ve(r.timeSeconds)
      }
    ), r.note ? /* @__PURE__ */ a.createElement(U, { type: "warning", style: { fontSize: 12 } }, r.note) : null, r.spawnSession ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(i, "spawnedAgent"),
        value: r.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ a.createElement(
      jn,
      {
        size: "small",
        onClick: () => r.spawnSession && t(r.spawnSession),
        style: { marginTop: 4 }
      },
      h(i, "openChildSession")
    ) : null) : null)
  }), r.kind === "tool")
    r.toolInput && d.push({
      key: "payload",
      label: h(i, "input"),
      children: /* @__PURE__ */ a.createElement(be, { value: r.toolInput, json: !0 })
    }), (r.toolOutput || r.toolError) && d.push({
      key: "result",
      label: h(i, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, r.toolError ? /* @__PURE__ */ a.createElement(U, { type: "danger", style: { fontSize: 12 } }, r.toolError) : null, r.toolOutput ? /* @__PURE__ */ a.createElement(be, { value: r.toolOutput }) : null)
    });
  else if (r.outputText || r.thinkingText || r.messages || r.marker || r.toolCalls && r.toolCalls.length > 0) {
    if (r.inputNew || r.messagesMeta) {
      const w = ((x = r.inputNew) == null ? void 0 : x.length) ?? 0, E = ((O = r.messagesMeta) == null ? void 0 : O.count) ?? 0;
      let k;
      r.contextReset ? k = `${h(i, "deltaReset")} (${E})` : w === 0 ? k = h(i, "deltaNoChange") : r.inputNew && r.inputNew.length === 1 && r.inputNew[0].role === "assistant" && E > 1 ? k = h(i, "deltaTailUpdate") : k = `${h(i, "deltaAppend")} (${w})`, d.push({
        key: "input",
        label: h(i, "inputTab"),
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(M, { label: h(i, "deltaKind"), value: k }), r.contextReset ? /* @__PURE__ */ a.createElement(U, { type: "warning", style: { fontSize: 12 } }, h(i, "contextReset")) : null, r.resetDetail ? /* @__PURE__ */ a.createElement(
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
              label: h(i, "resetBreakAt"),
              value: `#${r.resetDetail.breakAt + 1}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            M,
            {
              label: h(i, "resetSizes"),
              value: `${r.resetDetail.beforeCount} ${h(
                i,
                "resetMsgs"
              )} · ${ee(r.resetDetail.beforeChars)} ${h(
                i,
                "charUnit"
              )} → ${r.resetDetail.afterCount} ${h(
                i,
                "resetMsgs"
              )} · ${ee(r.resetDetail.afterChars)} ${h(
                i,
                "charUnit"
              )}`
            }
          ),
          /* @__PURE__ */ a.createElement(
            M,
            {
              label: h(i, "resetRoles"),
              value: Object.keys(r.resetDetail.afterByRole).map((_) => {
                const D = r.resetDetail.beforeByRole[_] ?? 0, R = r.resetDetail.afterByRole[_] ?? 0;
                return D === R ? null : `${_} ${D}→${R}`;
              }).filter(Boolean).join(" · ") || "-"
            }
          ),
          r.resetDetail.changes.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ a.createElement(U, { strong: !0, style: { fontSize: 12 } }, h(i, "resetChanges")), r.resetDetail.changes.slice(0, 20).map((_, D) => /* @__PURE__ */ a.createElement(
            "div",
            {
              key: D,
              style: {
                display: "flex",
                gap: 6,
                alignItems: "baseline"
              }
            },
            /* @__PURE__ */ a.createElement(
              lt,
              {
                color: _.status === "kept" ? "default" : _.status === "rewritten" ? "orange" : _.status === "removed" ? "red" : "green",
                style: { marginInlineEnd: 0, fontSize: 10 }
              },
              h(i, Ws[_.status])
            ),
            /* @__PURE__ */ a.createElement(U, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, _.role),
            _.status === "rewritten" ? /* @__PURE__ */ a.createElement(
              U,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${h(i, "resetOldPrefix")}${(_.oldText ?? "").slice(0, 40)} → ${h(
                i,
                "resetNewPrefix"
              )}${(_.newText ?? "").slice(0, 40)}`
            ) : /* @__PURE__ */ a.createElement(
              U,
              {
                type: "secondary",
                style: { fontSize: 11, minWidth: 0 },
                ellipsis: !0
              },
              `${_.status === "removed" ? h(i, "resetOldPrefix") : h(i, "resetNewPrefix")}${(_.oldText ?? _.newText ?? "").slice(
                0,
                60
              )}`
            )
          ))) : null
        ) : null, r.messagesMeta ? /* @__PURE__ */ a.createElement(
          M,
          {
            label: h(i, "inputTotal"),
            value: `${r.messagesMeta.count} · ${ee(
              r.messagesMeta.totalChars
            )} ${h(i, "charUnit")}`
          }
        ) : null, r.inputNew && r.inputNew.length > 0 ? /* @__PURE__ */ a.createElement(a.Fragment, null, r.inputNew.some((_) => _.role === "assistant") ? /* @__PURE__ */ a.createElement(
          U,
          {
            type: "secondary",
            style: { fontSize: 11, display: "block" }
          },
          h(i, "assistantInputNote")
        ) : null, /* @__PURE__ */ a.createElement(
          $t,
          {
            size: "small",
            defaultActiveKey: r.inputNew.length <= 5 ? ["messages"] : [],
            items: [
              {
                key: "messages",
                label: `${h(i, "inputMessages")} (${r.inputNew.length})`,
                children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, r.inputNew.map((_, D) => /* @__PURE__ */ a.createElement(
                  Vs,
                  {
                    key: D,
                    message: _,
                    locale: i
                  }
                )))
              }
            ]
          }
        )) : null)
      });
    }
    if (r.apiPayload && r.apiPayload.messages.length > 0) {
      const w = r.apiPayload;
      d.push({
        key: "api",
        label: "API",
        children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 11 } }, h(i, "apiPayloadNote")), /* @__PURE__ */ a.createElement(M, { label: "Model", value: w.model }), /* @__PURE__ */ a.createElement(
          M,
          {
            label: h(i, "apiMsgCount"),
            value: String(w.messages.length)
          }
        ), w.usage ? /* @__PURE__ */ a.createElement(
          M,
          {
            label: "Usage",
            value: `in ${w.usage.input_tokens ?? 0} · out ${w.usage.output_tokens ?? 0} tok`
          }
        ) : null, w.durationMs !== void 0 ? /* @__PURE__ */ a.createElement(
          M,
          {
            label: h(i, "duration"),
            value: ve(w.durationMs / 1e3)
          }
        ) : null, /* @__PURE__ */ a.createElement(
          $t,
          {
            size: "small",
            items: [
              {
                key: "api-msgs",
                label: `${h(i, "apiMessages")} (${w.messages.length})`,
                children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 4 } }, w.messages.map((E, k) => /* @__PURE__ */ a.createElement(
                  "div",
                  {
                    key: k,
                    style: {
                      display: "flex",
                      gap: 6,
                      alignItems: "baseline"
                    }
                  },
                  /* @__PURE__ */ a.createElement(
                    lt,
                    {
                      color: E.role === "tool" ? "gold" : E.role === "system" ? "green" : E.role === "user" ? "blue" : "purple",
                      style: {
                        marginInlineEnd: 0,
                        fontSize: 9,
                        lineHeight: "14px",
                        flexShrink: 0
                      }
                    },
                    E.role
                  ),
                  E.toolCallId ? /* @__PURE__ */ a.createElement(U, { code: !0, style: { fontSize: 9, flexShrink: 0 } }, E.toolCallId.slice(-8)) : null,
                  /* @__PURE__ */ a.createElement(
                    U,
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
                    E.content.slice(0, 80)
                  )
                )))
              }
            ]
          }
        ))
      });
    }
    d.push({
      key: "raw",
      label: h(i, "output"),
      children: /* @__PURE__ */ a.createElement("div", { style: { display: "grid", gap: 8 } }, r.inboundParts && r.inboundParts.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 12 } }, `${h(i, "inboundParts")} (${r.inboundParts.length})`), r.inboundParts.map((w, E) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: E,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(U, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, w.type.replace("Content", "")),
        /* @__PURE__ */ a.createElement(
          U,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          w.text ?? "-"
        )
      ))) : null, r.marker ? /* @__PURE__ */ a.createElement(be, { value: r.marker }) : null, r.toolCalls && r.toolCalls.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 12 } }, `${h(i, "toolCall")} (${r.toolCalls.length})`), r.toolCalls.map((w, E) => /* @__PURE__ */ a.createElement("div", { key: w.id || E, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ a.createElement(U, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", w.name), /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 11 } }, w.id)))) : null, r.note ? /* @__PURE__ */ a.createElement(U, { type: "warning", style: { fontSize: 12 } }, r.note) : null, r.messages && r.messages.length > 0 ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 12 } }, `${h(i, "query")} (${r.messages.length})`), r.messages.map((w, E) => /* @__PURE__ */ a.createElement(
        "div",
        {
          key: E,
          style: { display: "flex", gap: 8, alignItems: "baseline" }
        },
        /* @__PURE__ */ a.createElement(U, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, w.role),
        /* @__PURE__ */ a.createElement(
          U,
          {
            style: {
              fontSize: 12,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word"
            }
          },
          w.text
        )
      ))) : null, r.thinkingText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 12 } }, h(i, "thinking")), /* @__PURE__ */ a.createElement(be, { value: r.thinkingText })) : null, r.outputText ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 12 } }, h(i, "output")), /* @__PURE__ */ a.createElement(be, { value: r.outputText })) : null)
    });
  }
  return (r.startedAt !== null || f || v) && d.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "Started", value: ze(r.startedAt) }), /* @__PURE__ */ a.createElement(M, { label: "Total", value: ve(r.timeSeconds) }), v ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      M,
      {
        label: "TTFT",
        value: ve(v.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      M,
      {
        label: "Decoding",
        value: ve(v.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(i, "throughput"),
        value: Lt(
          f == null ? void 0 : f.output_tokens,
          v.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 12 } }, h(i, "noTiming")))
  }), f && d.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement(M, { label: "Input", value: ee(f.input_tokens) }), /* @__PURE__ */ a.createElement(M, { label: "Output", value: ee(f.output_tokens) }), f.cache_creation_input_tokens ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: "Cache write",
        value: ee(f.cache_creation_input_tokens)
      }
    ) : null, f.cache_input_tokens ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: "Cache read",
        value: ee(f.cache_input_tokens)
      }
    ) : null, f.total_tokens !== void 0 ? /* @__PURE__ */ a.createElement(M, { label: "Total", value: ee(f.total_tokens) }) : null, f.time !== void 0 ? /* @__PURE__ */ a.createElement(M, { label: "API time", value: ve(f.time) }) : null)
  }), d.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ a.createElement(be, { value: r.raw })
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
    /* @__PURE__ */ a.createElement(Et, { dragRef: y, width: c }),
    /* @__PURE__ */ a.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ a.createElement(st, { onClose: o }), /* @__PURE__ */ a.createElement(Nt, { size: "small", items: d, tabBarStyle: { marginBottom: 8 } }))
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
  return /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("div", { style: { display: "flex", gap: 8, alignItems: "baseline" } }, /* @__PURE__ */ a.createElement(U, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, e.role), /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 11 } }, ee(e.chars), " ", h(n, "charUnit"), e.toolCallId ? ` · ${e.toolCallId}` : ""), l.length > 200 ? /* @__PURE__ */ a.createElement(
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
  const l = re(), o = e.endKind ? h(l, Xs[e.endKind]) : h(l, "spanOpen"), i = Es(e);
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
    ), /* @__PURE__ */ a.createElement(U, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ a.createElement(
      lt,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      h(l, Gs[e.trigger])
    )), /* @__PURE__ */ a.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(l, "spanStart"),
        value: ze(e.startT)
      }
    ), /* @__PURE__ */ a.createElement(M, { label: h(l, "spanEnd"), value: o }), e.endT !== null ? /* @__PURE__ */ a.createElement(M, { label: " ", value: ze(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(l, "spanLastActivity"),
        value: ze(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(l, "spanDuration"),
        value: i === null ? "-" : ve(i / 1e3)
      }
    ), /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ a.createElement(
      M,
      {
        label: h(l, "spanLoadState"),
        value: e.bypass ? h(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ a.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ a.createElement(U, { strong: !0, style: { fontSize: 12 } }, h(l, "spanEvidence")), e.evidences.slice(0, 30).map((c, p) => /* @__PURE__ */ a.createElement(
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
        lt,
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
      /* @__PURE__ */ a.createElement(U, { type: "secondary", style: { fontSize: 11 } }, c.detail)
    ))) : /* @__PURE__ */ a.createElement(
      U,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      h(l, "spanNoActivity")
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
    get(l, o, i) {
      if (typeof o == "string") {
        const c = o.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const p = +o;
          if (Number.isInteger(p) && p >= 0 && p < e) {
            let y = l[p];
            if (!y) {
              const r = n[p * 2];
              y = l[p] = {
                index: p,
                key: t(p),
                start: r,
                size: n[p * 2 + 1],
                end: r + n[p * 2 + 1],
                lane: 0
              };
            }
            return y;
          }
        }
        if (o === "length") return e;
      }
      return Reflect.get(l, o, i);
    }
  });
}
function De(e, n, t) {
  let s = t.initialDeps ?? [], l, o = !0;
  function i() {
    var c;
    const p = process.env.NODE_ENV !== "production" && !!t.key && !!((c = t.debug) != null && c.call(t));
    let y = 0;
    p && (y = Date.now());
    const r = e();
    if (!(r.length !== s.length || r.some((d, x) => s[x] !== d)))
      return l;
    s = r;
    let v = 0;
    if (p && (v = Date.now()), l = n(...r), p) {
      const d = Math.round((Date.now() - y) * 100) / 100, x = Math.round((Date.now() - v) * 100) / 100, O = x / 16, w = (E, k) => {
        for (E = String(E); E.length < k; )
          E = " " + E;
        return E;
      };
      console.info(
        `%c⏱ ${w(x, 5)} /${w(d, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * O, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(o && t.skipInitialOnChange) && t.onChange(l), o = !1, l;
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
  const l = (i) => {
    const { width: c, height: p } = i;
    n({ width: Math.round(c), height: Math.round(p) });
  };
  if (l(en(t)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((i) => {
    const c = () => {
      const p = i[0];
      if (p != null && p.borderBoxSize) {
        const y = p.borderBoxSize[0];
        if (y) {
          l({ width: y.inlineSize, height: y.blockSize });
          return;
        }
      }
      l(en(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, ot = {
  passive: !0
}, al = typeof window > "u" ? !0 : "onscrollend" in window, cl = (e, n, t) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && al;
  let i = 0;
  const c = o ? null : ll(
    l,
    () => n(i, !1),
    e.options.isScrollingResetDelay
  ), p = (f) => () => {
    i = t(s), c == null || c(), n(i, f);
  }, y = p(!0), r = p(!1);
  return s.addEventListener("scroll", y, ot), o && s.addEventListener("scrollend", r, ot), () => {
    s.removeEventListener("scroll", y), o && s.removeEventListener("scrollend", r);
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
          const i = () => {
            const c = o.target, p = this.indexFromElement(c);
            if (!c.isConnected) {
              this.observer.unobserve(c);
              for (const [y, r] of this.elementsCache)
                if (r === c) {
                  this.elementsCache.delete(y);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(p) && this.resizeItem(
              p,
              this.options.measureElement(c, o, this)
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
      for (const v in t) {
        const d = t[v];
        d !== void 0 && (o[v] = d);
      }
      const i = this.options;
      let c = null, p = null, y = !1;
      if (i !== void 0 && i.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const v = i.count, d = o.count, x = this.getMeasurements(), O = v > 0 ? ((s = x[0]) == null ? void 0 : s.key) ?? i.getItemKey(0) : null, w = v > 0 ? ((l = x[v - 1]) == null ? void 0 : l.key) ?? i.getItemKey(v - 1) : null;
        if (d !== v || v > 0 && d > 0 && (o.getItemKey(0) !== O || o.getItemKey(d - 1) !== w)) {
          y = !0;
          const _ = v > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? x[0] : null;
          _ && (c = [_.key, this.getScrollOffset() - _.start]);
          const D = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          D && d > v && this.isAtEnd(i.scrollEndThreshold) && (v === 0 || o.getItemKey(d - 1) !== w) && (p = D);
        }
      }
      this.options = o, y && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let r = !1, f = 0;
      if (c && this.scrollOffset !== null) {
        const [v, d] = c, x = this.getMeasurements(), { count: O, getItemKey: w } = this.options;
        let E = 0;
        for (; E < O && w(E) !== v; )
          E++;
        if (E < O) {
          const k = x[E];
          if (k) {
            const _ = Math.max(0, k.start + d);
            _ !== this.scrollOffset && (f = _ - this.scrollOffset, this.scrollOffset = _, r = !0);
          }
        }
      }
      (r || p) && (this.pendingScrollAnchor = [
        r ? c[0] : null,
        r ? c[1] : 0,
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
          this.options.observeElementOffset(this, (o, i) => {
            if (i && this._intendedScrollOffset === null && o === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(o - this._intendedScrollOffset) < 1.5 && (o = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const c = this.getScrollOffset();
            this.scrollDirection = i ? c === o ? this.scrollDirection : c < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = i, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, i = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, c = () => {
            this._iosTouching = !1, !(!xt() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            i,
            ot
          ), o.addEventListener(
            "touchend",
            c,
            ot
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", i), o.removeEventListener("touchend", c), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, i, c, p] = l;
        o !== null && !c && (xt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? p !== 0 && (this._iosDeferredAdjustment += p) : this._scrollToOffset(this.getScrollOffset(), {
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
      (t, s, l, o, i, c, p, y) => (this.prevLanes !== void 0 && this.prevLanes !== c && (this.lanesChangedFlag = !0), this.prevLanes = c, this.pendingMin = null, {
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: i,
        lanes: c,
        laneAssignmentMode: p,
        gap: y
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
        enabled: i,
        lanes: c,
        laneAssignmentMode: p,
        gap: y
      }, r) => {
        const f = this.itemSizeCache;
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const E of this.laneAssignments.keys())
            E >= t && this.laneAssignments.delete(E);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((E) => {
          this.itemSizeCache.set(E.key, E.size);
        }));
        const v = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), c === 1) {
          const E = t * 2;
          let k = this._flatMeasurements;
          if (!k || k.length < E) {
            const R = new Float64Array(E);
            k && v > 0 && R.set(k.subarray(0, v * 2)), k = R, this._flatMeasurements = k;
          }
          let _;
          if (v === 0)
            _ = s + l;
          else {
            const R = v - 1;
            _ = k[R * 2] + k[R * 2 + 1] + y;
          }
          for (let R = v; R < t; R++) {
            const Q = o(R), A = f.get(Q), P = typeof A == "number" ? A : this.options.estimateSize(R);
            k[R * 2] = _, k[R * 2 + 1] = P, _ += P + y;
          }
          const D = nl(t, k, o);
          return this.measurementsCache = D, D;
        }
        const d = this.measurementsCache.slice(0, v), x = new Array(c).fill(
          void 0
        ), O = new Float64Array(c);
        let w = 0;
        for (let E = 0; E < v; E++) {
          const k = d[E];
          k && (x[k.lane] === void 0 && w++, x[k.lane] = E, O[k.lane] = k.end);
        }
        for (let E = v; E < t; E++) {
          const k = o(E), _ = this.laneAssignments.get(E);
          let D, R;
          const Q = p === "estimate" || f.has(k);
          if (_ !== void 0 && this.options.lanes > 1) {
            D = _;
            const V = x[D], te = V !== void 0 ? d[V] : void 0;
            R = te ? te.end + y : s + l;
          } else if (w === c) {
            let V = 0, te = O[0], pe = x[0];
            for (let ie = 1; ie < c; ie++) {
              const oe = O[ie];
              (oe < te || oe === te && x[ie] < pe) && (V = ie, te = oe, pe = x[ie]);
            }
            D = V, R = te + y, Q && this.laneAssignments.set(E, D);
          } else
            D = E % this.options.lanes, R = s + l, Q && this.laneAssignments.set(E, D);
          const A = f.get(k), P = typeof A == "number" ? A : this.options.estimateSize(E), W = R + P;
          d[E] = {
            index: E,
            start: R,
            size: P,
            end: W,
            key: k,
            lane: D
          }, x[D] === void 0 && w++, x[D] = E, O[D] = W;
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
      (t, s, l, o, i) => o === null || i === null ? [] : t({
        startIndex: o,
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
        const o = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), i = Math.max(0, l - o), c = Math.min(
          this.options.count - 1,
          l + o
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
      const s = this.indexFromElement(t), l = this.options.getItemKey(s), o = this.elementsCache.get(l);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, s) => {
      var l, o;
      if (t < 0 || t >= this.options.count) return;
      let i, c, p;
      const y = this._flatMeasurements;
      if (this.options.lanes === 1 && y !== null)
        p = this.options.getItemKey(t), c = y[t * 2], i = y[t * 2 + 1];
      else {
        const v = this.measurementsCache[t];
        if (!v) return;
        p = v.key, c = v.start, i = v.size;
      }
      const r = this.itemSizeCache.get(p) ?? i, f = s - r;
      if (f !== 0) {
        const v = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, d = v ? this.getTotalSize() : 0, x = this.getScrollOffset() + this.scrollAdjustments, w = !this.itemSizeCache.has(p) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          c < x
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          c + r <= x && this.scrollDirection !== "backward"
        ), E = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: p,
            start: c,
            size: i,
            end: c + i,
            lane: 0
          },
          f,
          this
        ) : w);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(p, s), this.itemSizeCacheVersion++;
        let k = !1;
        v ? k = this.applyScrollAdjustment(
          this.getTotalSize() - d
        ) : E && (k = this.applyScrollAdjustment(f)), this.notify(k);
      }
    }, this.getVirtualItems = De(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, s) => {
        const l = [];
        for (let o = 0, i = t.length; o < i; o++) {
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
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, i = Bn(
        0,
        s.length - 1,
        o ? (c) => l[c * 2] : (c) => Zt(s[c]).start,
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
      const o = this.getSize(), i = this.getScrollOffset();
      s === "auto" && (s = t >= i + o ? "end" : "start"), s === "center" ? t += (l - o) / 2 : s === "end" && (t -= o);
      const c = this.getMaxScrollOffset();
      return Math.max(Math.min(c, t), 0);
    }, this.getOffsetForIndex = (t, s = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getSize(), o = this.getScrollOffset(), i = this.measurementsCache[t];
      if (!i) return;
      if (s === "auto")
        if (i.end >= o + l - this.options.scrollPaddingEnd)
          s = "end";
        else if (i.start <= o + this.options.scrollPaddingStart)
          s = "start";
        else
          return [o, s];
      if (s === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const c = s === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(c, s, i.size),
        s
      ];
    }, this.scrollToOffset = (t, { align: s = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(t, s), i = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: l,
        startedAt: i,
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
      const [i, c] = o, p = this.now();
      this.scrollState = {
        index: t,
        align: c,
        behavior: l,
        startedAt: p,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
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
        const o = s.length - 1, i = this._flatMeasurements;
        i != null ? l = i[o * 2] + i[o * 2 + 1] : l = ((t = s[o]) == null ? void 0 : t.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let i = s.length - 1;
        for (; i >= 0 && o.some((c) => c === null); ) {
          const c = s[i];
          o[c.lane] === null && (o[c.lane] = c.end), i--;
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
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = s ? s[0] : this.scrollState.lastTargetOffset, o = 1, i = l !== this.scrollState.lastTargetOffset;
    if (!i && sl(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, i) {
      const c = this.getSize() || 600, p = Math.abs(l - this.getScrollOffset()), y = this.scrollState.behavior === "smooth" && p > c;
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
    const y = ml(
      l,
      o,
      t
    );
    let r = y;
    const f = t + n;
    for (; r < o && l[r * 2] + l[r * 2 + 1] < f; )
      r++;
    return { startIndex: y, endIndex: r };
  }
  let c = Bn(0, o, (y) => e[y].start, t), p = c;
  if (s === 1)
    for (; p < o && e[p].end < t + n; )
      p++;
  else if (s > 1) {
    const y = Array(s).fill(0);
    for (; p < o && y.some((f) => f < t + n); ) {
      const f = e[p];
      y[f.lane] = f.end, p++;
    }
    const r = Array(s).fill(t + n);
    for (; c >= 0 && r.some((f) => f >= t); ) {
      const f = e[c];
      r[f.lane] = f.start, c--;
    }
    c = Math.max(0, c - c % s), p = Math.min(o, p + (s - 1 - p % s));
  }
  return { startIndex: c, endIndex: p };
}
const bt = typeof document < "u" ? Zs : Ys;
function yl({
  useFlushSync: e = !0,
  directDomUpdates: n = !1,
  directDomUpdatesMode: t = "transform",
  ...s
}) {
  const l = el((r) => r + 1, 0)[1], o = Js({
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
  const i = (r) => {
    const f = o.current;
    if (!f.enabled || !f.container) return;
    const v = r.getTotalSize();
    if (v !== f.lastSize) {
      f.lastSize = v;
      const d = r.options.horizontal ? "width" : "height";
      f.container.style[d] = `${v}px`;
    }
  }, c = (r) => {
    const f = o.current;
    if (!f.enabled || !f.container) return;
    i(r);
    const v = !!r.options.horizontal, d = f.mode === "transform", x = v ? "left" : "top", O = r.options.scrollMargin, w = r.getVirtualItems();
    for (const E of w) {
      const k = E.start - O, _ = r.elementsCache.get(E.key);
      _ && f.lastPositions.get(_) !== k && (f.lastPositions.set(_, k), d ? _.style.transform = v ? `translate3d(${k}px, 0, 0)` : `translate3d(0, ${k}px, 0)` : _.style[x] = `${k}px`);
    }
  }, p = {
    ...s,
    onChange: (r, f) => {
      var v;
      const d = o.current;
      let x = !0;
      if (d.enabled) {
        c(r);
        const O = r.range, w = d.prevRange;
        x = !w || w.isScrolling !== r.isScrolling || w.startIndex !== (O == null ? void 0 : O.startIndex) || w.endIndex !== (O == null ? void 0 : O.endIndex), x && (d.prevRange = O ? {
          startIndex: O.startIndex,
          endIndex: O.endIndex,
          isScrolling: r.isScrolling
        } : null);
      }
      x && (e && f ? tl(l) : l()), (v = s.onChange) == null || v.call(s, r, f);
    }
  }, [y] = Qs(() => {
    const r = new fl(p);
    return Object.assign(r, {
      containerRef: (f) => {
        const v = o.current;
        if (v.container = f, v.lastSize = null, f && v.enabled) {
          const d = r.getTotalSize();
          v.lastSize = d;
          const x = r.options.horizontal ? "width" : "height";
          f.style[x] = `${d}px`;
        }
      }
    });
  });
  return y.setOptions(p), bt(() => y._didMount(), []), bt(() => (i(y), y._willUpdate())), bt(() => {
    c(y);
  }), y;
}
function vl(e) {
  return yl({
    observeElementRect: rl,
    observeElementOffset: dl,
    scrollToFn: pl,
    ...e
  });
}
const at = window.QwenPaw.host, $ = at.React, { useRef: Sl } = $, { Tag: Pe, Tooltip: El } = at.antd, { Text: Se } = at.antd.Typography, {
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
} = at.antdIcons, $l = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Al = {
  user: /* @__PURE__ */ $.createElement(zl, null),
  message: /* @__PURE__ */ $.createElement(wl, null),
  tool: /* @__PURE__ */ $.createElement(Cl, null),
  system: /* @__PURE__ */ $.createElement(Ml, null)
}, tn = {
  approval: { color: "volcano", icon: /* @__PURE__ */ $.createElement(_l, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ $.createElement(Il, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ $.createElement(Tl, null) },
  header: { color: "green", icon: /* @__PURE__ */ $.createElement(kl, null) },
  error: { color: "red", icon: /* @__PURE__ */ $.createElement(bl, null) }
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
}, Rl = 150, At = 26, Fn = 34, sn = 9, ln = 30;
function Ll(e) {
  const n = re(), t = nn[e] ?? nn.unknown;
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
function Pl(e, n) {
  const t = e.receipt, s = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${h(n, "replySent")}${s} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${h(n, "chars")}`;
}
function on({
  record: e,
  selected: n,
  dimmed: t,
  multiRequest: s,
  onSelect: l
}) {
  var c, p;
  const o = e.usage, i = o && (o.input_tokens || o.output_tokens) ? `${ee(o.input_tokens)}→${ee(
    o.output_tokens
  )}` : null;
  return /* @__PURE__ */ $.createElement(
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
        height: At,
        cursor: "pointer",
        background: n ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1,
        borderLeft: e.skillSpanHue !== void 0 ? `3px solid ${e.skillSpanBypass ? "rgba(250,140,22,0.9)" : `hsl(${e.skillSpanHue}, 65%, 55%)`}` : "3px solid transparent"
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
      s && /* @__PURE__ */ $.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ $.createElement(
      Pe,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((c = tn[e.markerKind]) == null ? void 0 : c.color) || $l[e.kind] || "default",
        icon: e.markerKind && ((p = tn[e.markerKind]) == null ? void 0 : p.icon) || Al[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? h(re(), "skillLoadKind") : On(e, re())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ $.createElement(
      Pe,
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
    e.inSkill ? /* @__PURE__ */ $.createElement(
      Pe,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${h(re(), "skillBypass")}`,
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
    ) : e.guidedSkill ? /* @__PURE__ */ $.createElement(
      El,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? h(re(), "guidedBySlash") : h(re(), "guidedByLoad")}`
      },
      /* @__PURE__ */ $.createElement(
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
    e.kind === "user" && e.skillName ? /* @__PURE__ */ $.createElement(
      Pe,
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
      e.receipt ? /* @__PURE__ */ $.createElement(Se, { type: "secondary", style: { fontSize: 12 } }, Pl(e, re())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(Se, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ $.createElement(Se, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ $.createElement(Se, { type: "secondary", style: { fontSize: 12 } }, ` · ${h(re(), "skillLoaded")} ${ee(
        e.toolOutputChars
      )} ${h(re(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(Se, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ $.createElement(Se, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ $.createElement(
        Se,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(
        Se,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(Se, { type: "secondary", style: { fontSize: 11 } }, ` ${Dl(e, re()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ $.createElement(Se, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
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
      i ? /* @__PURE__ */ $.createElement("span", { style: { color: "#1677ff" } }, i) : null,
      i ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && ve(e.timeSeconds)
    )
  );
}
function jl({
  turn: e,
  collapsed: n,
  selected: t,
  cellCount: s,
  onToggle: l,
  onSelect: o,
  onSkillSpanOpen: i
}) {
  const c = re();
  return /* @__PURE__ */ $.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Fn }
    },
    /* @__PURE__ */ $.createElement(
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
      /* @__PURE__ */ $.createElement(
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
      /* @__PURE__ */ $.createElement(Se, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ $.createElement(Se, { type: "secondary", style: { fontSize: 11 } }, ve(e.durationMs / 1e3)),
      /* @__PURE__ */ $.createElement(Se, { type: "secondary", style: { fontSize: 11 } }, s, " ", h(c, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? (
        /* Wrapper span keeps the click working even if the host's
         * antd Tag version does not forward onClick (idempotent). */
        /* @__PURE__ */ $.createElement(
          "span",
          {
            onClick: (p) => {
              i && (p.stopPropagation(), i(e.skillsUsed[0], e.turn));
            },
            style: {
              display: "inline-flex",
              cursor: i ? "pointer" : void 0
            }
          },
          /* @__PURE__ */ $.createElement(
            Pe,
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
      /* @__PURE__ */ $.createElement(
        Pe,
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
  onSelectedIndexChange: i,
  onSelectedTurnChange: c,
  onToggleTurn: p,
  callsCollapsed: y,
  hasOlderRecords: r,
  loadingOlder: f,
  onLoadOlder: v,
  initialRecord: d,
  emptyText: x,
  onSkillSpanOpen: O
}) {
  const w = re(), E = Sl(null), k = e.filter((P) => P.turn !== null), _ = k.length > 1, D = $.useMemo(() => {
    var W;
    const P = [];
    r && P.push({
      key: "load-older",
      height: ln,
      type: "load-older"
    }), d && (P.push({
      key: "initial",
      height: At,
      type: "initial",
      record: d
    }), P.push({
      key: "initial-divider",
      height: sn,
      type: "divider"
    }));
    for (const V of k) {
      const te = V.turn;
      if (P.push({
        key: `turn-${te}`,
        height: Fn,
        type: "boundary",
        turn: V
      }), !s.has(te))
        for (const pe of ((W = V.groups[0]) == null ? void 0 : W.cells) ?? [])
          y && pe.kind === "tool" || P.push({
            key: `rec-${pe.index}`,
            height: At,
            type: "record",
            record: pe
          });
    }
    return P;
  }, [
    k,
    s,
    y,
    r,
    d
  ]), R = $.useCallback(
    (P) => l !== null && !l.has(P.index) || o !== null && !o.has(P.index),
    [l, o]
  ), Q = (P) => {
    var W;
    switch (P.type) {
      case "load-older":
        return /* @__PURE__ */ $.createElement("div", { style: { textAlign: "center", height: ln } }, /* @__PURE__ */ $.createElement(
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
          f ? "…" : `⋯ ${h(w, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ $.createElement(
          "div",
          {
            style: {
              height: sn,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const V = P.record;
        return /* @__PURE__ */ $.createElement(
          on,
          {
            record: V,
            selected: n === V.index,
            dimmed: R(V),
            multiRequest: _,
            onSelect: () => i(V.index)
          }
        );
      }
      case "boundary": {
        const V = P.turn, te = V.turn;
        return /* @__PURE__ */ $.createElement(
          jl,
          {
            turn: V,
            collapsed: s.has(te),
            selected: t === te,
            cellCount: ((W = V.groups[0]) == null ? void 0 : W.cells.length) ?? 0,
            onToggle: () => p(te),
            onSelect: () => c(te),
            onSkillSpanOpen: O ? (pe, ie) => O(pe, ie) : void 0
          }
        );
      }
      case "record":
      default: {
        const V = P.record;
        return /* @__PURE__ */ $.createElement(
          on,
          {
            record: V,
            selected: n === V.index,
            dimmed: R(V),
            multiRequest: _,
            onSelect: () => i(V.index)
          }
        );
      }
    }
  };
  if (D.length === 0)
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
        x ?? h(w, "noSessions")
      )
    );
  const A = D.length <= Rl ? /* @__PURE__ */ $.createElement("div", null, D.map((P) => Q(P))) : /* @__PURE__ */ $.createElement(
    Fl,
    {
      rows: D,
      scrollRef: E,
      renderRow: Q
    }
  );
  return /* @__PURE__ */ $.createElement(
    "div",
    {
      ref: E,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    A
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
  return /* @__PURE__ */ $.createElement(
    "div",
    {
      style: {
        height: s.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    s.getVirtualItems().map((l) => /* @__PURE__ */ $.createElement(
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
function kt(e) {
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
function Ie(e, n = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Wl(e) {
  var oe, Y;
  const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), c = [];
  let p = "";
  const y = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  let v = [];
  const d = /* @__PURE__ */ new Set(), x = [], O = new vs(), w = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let _ = [], D = [], R = 0, Q = 0;
  const A = (g) => g.groups[0].cells, P = (g, m) => {
    const S = i.get(g);
    S ? S.push(m) : i.set(g, [m]);
  }, W = (g, m) => {
    if (!g)
      if (p)
        g = p;
      else {
        c.push(m);
        return;
      }
    const S = t.get(g);
    if (S)
      m.runIndex = S.turn ?? 0, A(S).push(m);
    else if (p) {
      const T = t.get(p);
      T ? (m.runIndex = T.turn ?? 0, A(T).push(m)) : P(g, m);
    } else
      P(g, m);
  }, V = (g, m) => {
    const S = i.get(m);
    if (S) {
      for (const T of S) A(g).push(T);
      i.delete(m);
    }
  };
  for (const g of e) {
    const m = kt(g);
    switch (g.type) {
      case "run/start": {
        Q += 1, x.length = 0, y.set(
          g.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const S = {
          turn: Q,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${Q}`, cells: [] }]
        };
        t.set(g.run_id, S), n.push(S), p = g.run_id, V(S, g.run_id);
        for (const K of c.splice(0))
          K.runIndex = Q, A(S).push(K);
        const T = Array.isArray(m.messages) ? m.messages : [], C = String(m.query ?? "");
        let z = typeof m.slash_skill == "string" && m.slash_skill ? m.slash_skill : an(C);
        !z && T.length > 0 && (z = an(String(((oe = T[0]) == null ? void 0 : oe.text) ?? ""))), z && (d.add(z), x.push([z, "slash"]), O.onRunStart(), O.onSlashSkill(
          z,
          g.seq,
          me(g.t) ?? 0
        ), w.set(`${z}#${g.seq}`, S));
        const j = {
          index: ++R,
          runIndex: Q,
          runId: g.run_id,
          kind: "user",
          text: Ie(C) || Ie((Y = T.at(-1)) == null ? void 0 : Y.text),
          messages: T,
          timeSeconds: 0,
          startedAt: me(g.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: z ?? void 0,
          model: void 0
        };
        r.set(g.run_id, j), A(S).push(j);
        break;
      }
      case "run/end": {
        const S = t.get(g.run_id);
        p === g.run_id && (p = ""), x.length = 0, O.onRunEnd(g.seq, me(g.t) ?? 0), y.delete(g.run_id), r.delete(g.run_id);
        const T = String(m.status ?? "unknown");
        if (S && (S.status = T, S.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), T === "error" && m.error) {
          const C = S ?? {
            turn: null,
            status: T,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || n.push(C), C.groups[0].cells.push({
            index: ++R,
            runIndex: Q,
            runId: g.run_id,
            kind: "system",
            markerKind: "error",
            text: Ie(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: me(g.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [g]
          });
        }
        break;
      }
      case "agent/spawn": {
        const S = typeof m.child_session_id == "string" ? m.child_session_id : void 0, T = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        W(g.run_id, {
          index: ++R,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${T} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: me(g.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: T,
          raw: [g]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(m.parts) ? m.parts : [], T = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, C = S.map((ne) => ({
          type: String(ne.type ?? "?"),
          text: typeof ne.text == "string" ? ne.text : void 0
        })), z = y.get(g.run_id) ?? "", j = T && typeof T.user_id == "string" && T.user_id ? T.user_id : void 0, K = Ie(
          C.map((ne) => ne.text ?? "").filter(Boolean).join(`
`)
        ), L = r.get(g.run_id);
        L && !L.inboundParts ? (L.inboundParts = C, L.channel = z || void 0, L.userId = j, L.raw = [
          ...L.raw ?? [],
          g
        ], L.text || (L.text = K)) : W(g.run_id, {
          index: ++R,
          runIndex: 0,
          runId: g.run_id,
          kind: "user",
          text: K || "📥",
          timeSeconds: 0,
          startedAt: me(g.t) ?? 0,
          isError: !1,
          running: !1,
          channel: z || void 0,
          userId: j,
          inboundParts: C,
          raw: [g]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof m.text == "string" ? m.text : "";
        W(g.run_id, {
          index: ++R,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: me(g.t) ?? 0,
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
        W(g.run_id, {
          index: ++R,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(m.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: me(g.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [g]
        });
        break;
      }
      case "approval/decided": {
        const S = String(m.decision ?? "?"), T = m.tool_name ? String(m.tool_name) : "";
        W(g.run_id, {
          index: ++R,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "approval",
          text: T ? `${T} → ${S}` : S,
          timeSeconds: 0,
          startedAt: me(g.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [g]
        });
        break;
      }
      case "llm/header": {
        const S = typeof m.sha256 == "string" ? m.sha256 : "", T = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, C = m.reason === "changed" ? "changed" : "initial", z = typeof m.system_prompt == "string" ? m.system_prompt : "", j = Array.isArray(m.tools) ? m.tools : [], K = Array.isArray(m.schemas) ? m.schemas : void 0;
        W(g.run_id, {
          index: ++R,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          markerKind: "header",
          text: C === "initial" ? `⚙ ${z ? `System Prompt (${z.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: me(g.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: z,
          prevPrompt: f.get(T ?? ""),
          headerTools: j,
          headerReason: C,
          sha: S,
          prevSha: T,
          schemas: K,
          raw: [g]
        }), S && f.set(S, z), z && (v = Kl(z));
        break;
      }
      case "llm/call": {
        const S = kt(g), T = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, C = S.messages_meta, z = C && typeof C == "object" ? {
          count: typeof C.count == "number" ? C.count : 0,
          totalChars: typeof C.total_chars == "number" ? C.total_chars : 0,
          charsByRole: rn(C.chars_by_role) ? C.chars_by_role : {},
          countByRole: rn(C.count_by_role) ? C.count_by_role : {},
          maxToolChars: typeof C.max_tool_chars == "number" ? C.max_tool_chars : 0
        } : void 0, j = Hl(S.messages_new);
        let K;
        if (S.context_reset === !0) {
          const Z = (j ?? []).map(
            (ae) => ({
              role: ae.role,
              chars: ae.chars,
              text: ae.text
            })
          );
          let de;
          _.length > 0 || Z.length === 0 ? de = _ : de = D.map((ae) => ({
            role: ae.role,
            text: ae.text
          })), K = _s(de, Z), z && (K.afterChars = z.totalChars);
        }
        if (j) {
          const Z = j.map((de) => ({
            role: de.role,
            chars: de.chars,
            text: de.text
          }));
          S.context_reset === !0 ? _ = Z : S.tail_update === !0 ? _ = [..._.slice(0, -1), ...Z] : typeof S.messages_count == "number" && j.length >= S.messages_count && _.length > 0 ? _ = Z : _ = [..._, ...Z];
        }
        D = Array.isArray(S.messages) ? S.messages.map((Z) => ({
          role: Z.role,
          text: Z.text
        })) : [];
        const L = {
          index: ++R,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: me(g.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: z,
          inputNew: j,
          contextReset: S.context_reset === !0,
          resetDetail: K,
          options: T
        };
        W(g.run_id, L);
        const ne = s.get(g.run_id) ?? [];
        ne.push({ cell: L, callData: S, call: g }), s.set(g.run_id, ne);
        break;
      }
      case "llm/api_request": {
        const S = s.get(g.run_id), T = S && S.length > 0 ? S[S.length - 1].cell : l.get(g.run_id);
        if (T) {
          const C = Array.isArray(m.messages) ? m.messages : [];
          T.apiPayload = {
            model: String(m.model ?? "unknown"),
            messages: C.map((z) => ({
              role: String(z.role ?? "?"),
              content: typeof z.content == "string" ? z.content : JSON.stringify(z.content ?? ""),
              toolCallId: typeof z.tool_call_id == "string" ? z.tool_call_id : void 0
            })),
            params: m.params && typeof m.params == "object" ? m.params : void 0,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : void 0
          }, T.raw = [
            ...T.raw ?? [],
            g
          ];
        }
        break;
      }
      case "llm/api_response": {
        const S = l.get(g.run_id);
        S && S.apiPayload && (m.usage && typeof m.usage == "object" && (S.apiPayload.usage = m.usage), typeof m.duration_ms == "number" && (S.apiPayload.durationMs = m.duration_ms));
        break;
      }
      case "llm/result": {
        const S = s.get(g.run_id), T = S == null ? void 0 : S.shift(), C = (T == null ? void 0 : T.callData) ?? {}, z = typeof m.duration_ms == "number" ? m.duration_ms : null, j = m.usage ?? void 0, K = m.timing, L = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, de = {
          text: (m.error ? Ie(String(m.error)) : Ie(String(m.text ?? ""))) || (L && L.length > 0 ? `🛠 ${L.map((ae) => ae.name).join(", ")}` : ""),
          timeSeconds: z === null ? null : z / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: j,
          timing: K,
          toolCalls: L,
          note: m.note ? String(m.note) : void 0
        };
        T ? (Object.assign(T.cell, de), l.set(g.run_id, T.cell), T.cell.model = String(
          m.model ?? C.model ?? T.cell.model
        ), T.cell.raw = [
          ...T.call ? [T.call] : [],
          g
        ]) : W(g.run_id, {
          index: ++R,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          startedAt: me(g.t) ?? 0,
          model: String(m.model ?? C.model ?? "unknown"),
          ...de
        });
        break;
      }
      case "tool/call": {
        const S = kt(g), T = String(S.name ?? "?"), C = T === "Skill" ? Ul(S.input) : void 0;
        if (C) {
          d.add(C), x.push([C, "load"]);
          const ce = O.onSkillLoad(
            C,
            g.seq,
            me(g.t) ?? 0
          ), Ee = t.get(g.run_id);
          Ee && w.set(ce, Ee);
        }
        const z = S.input ? String(S.input) : void 0;
        let j;
        if (!C && z) {
          const ce = typeof S.skill_resource == "string" ? S.skill_resource : void 0;
          ce && (j = ce);
        }
        if (!C && !j && z && v.length > 0) {
          const ce = Hn(z);
          for (const [Ee, _e] of v)
            if (ce.includes(Ee)) {
              j = _e;
              break;
            }
        }
        let K, L;
        if (!C && !j && z && E.size > 0) {
          const ce = ks(z, E);
          ce && (K = ce.skill, L = ce.feature);
        }
        let ne, Z;
        if (!C && !j && !K && x.length > 0) {
          const [ce, Ee] = x[x.length - 1];
          ne = ce, Z = Ee;
        }
        const de = O.onToolCall({
          attribution: j ? { skill: j, kind: "path", detail: "skill dir in input" } : K ? {
            skill: K,
            kind: "content",
            detail: `“${L}” in input (skill doc)`
          } : ne ? {
            skill: ne,
            kind: "temporal",
            detail: Z === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: R + 1,
          seq: g.seq,
          t: me(g.t) ?? 0
        });
        if (de && !w.has(de)) {
          const ce = t.get(g.run_id);
          ce && w.set(de, ce);
        }
        const ae = {
          index: ++R,
          runIndex: 0,
          runId: g.run_id,
          kind: "tool",
          text: C ? `📚 ${C}` : `${T}(${Ie(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: me(g.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: T,
          skillName: C,
          inSkill: j,
          inSkillLoaded: j ? d.has(j) : void 0,
          guidedSkill: ne ?? K,
          guidedReason: Z ?? (K ? "load" : void 0),
          skillSpanId: de ?? void 0,
          toolInput: S.input ? String(S.input) : void 0
        };
        W(g.run_id, ae);
        const Te = o.get(g.run_id) ?? [];
        Te.push({ cell: ae, callData: S, call: g }), o.set(g.run_id, Te);
        break;
      }
      case "tool/result": {
        const S = o.get(g.run_id), T = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let C;
        if (S) {
          const Z = T ? S.findIndex(
            (de) => de.callData.tool_call_id === T
          ) : -1;
          Z >= 0 ? C = S.splice(Z, 1)[0] : C = S.shift();
        }
        const z = typeof m.duration_ms == "number" ? m.duration_ms : null, j = m.ok !== !1 && !m.error, K = m.output ? String(m.output) : void 0, L = K ? ` → ${Ie(K, 60)}` : "", ne = {
          timeSeconds: z === null ? null : z / 1e3,
          isError: !j,
          running: !1,
          toolOutput: K,
          toolOutputChars: typeof m.output_chars == "number" ? m.output_chars : void 0,
          toolOutputBytes: typeof m.output_bytes == "number" ? m.output_bytes : void 0,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        if (C) {
          if (Object.assign(C.cell, ne), !C.cell.skillName)
            C.cell.text = `${C.cell.text}${L}`;
          else if (K) {
            const Z = typeof m.skill_sha == "string" ? m.skill_sha : null;
            Z && k.get(C.cell.skillName) === Z || (E.set(
              C.cell.skillName,
              bs(K)
            ), Z && k.set(C.cell.skillName, Z));
          }
          C.cell.raw = [
            ...C.call ? [C.call] : [],
            g
          ];
        } else
          W(g.run_id, {
            index: ++R,
            runIndex: 0,
            runId: g.run_id,
            kind: "tool",
            text: `?${L}`,
            startedAt: me(g.t) ?? 0,
            ...ne
          });
        break;
      }
    }
  }
  for (const [g, m] of i) {
    const S = t.get(g);
    if (S) {
      for (const T of m) A(S).push(T);
      i.delete(g);
    }
  }
  for (const g of n) {
    const m = [];
    for (const S of g.groups)
      for (const T of S.cells)
        T.skillName && !m.includes(T.skillName) && m.push(T.skillName);
    m.length > 0 && (g.skillsUsed = m);
  }
  const te = O.spans(), pe = new Set(te.map((g) => g.skill)).size, ie = /* @__PURE__ */ new Map();
  for (const g of n)
    for (const m of g.groups)
      for (const S of m.cells) ie.set(S.index, S);
  for (const g of te) {
    const m = w.get(g.id);
    m && (m.skillSpans ?? (m.skillSpans = [])).push(g);
    for (const S of g.attributedIndexes) {
      const T = ie.get(S);
      T && (T.skillSpanId = g.id, T.skillSpanHue = pe > 1 ? g.colorHue : void 0, T.skillSpanBypass = g.bypass);
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
const ge = {
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
}, dn = "agent-trace-timeline-styles", Gl = `
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
let wt = !1;
function Xl() {
  if (wt || typeof document > "u") return;
  if (document.getElementById(dn)) {
    wt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = dn, e.textContent = Gl, document.head.appendChild(e), wt = !0;
}
function Tt(e) {
  return Is(e);
}
function Un(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function un(e) {
  return e != null && Number.isFinite(e);
}
function Kn(e) {
  if (!un(e.startedAt)) return null;
  const n = un(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
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
    const o = l.groups.flatMap((i) => i.cells);
    o.length !== 0 && (l.turn !== null && s.push({
      turn: l.turn,
      time: t.length
    }), t.push(
      ...o.map(
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
  const s = e.flatMap((r) => {
    const f = r.groups.flatMap(
      (v) => v.cells.flatMap((d) => {
        const x = Kn(d);
        return x === null ? [] : [
          {
            ...x,
            index: d.index,
            isError: d.isError === !0,
            kind: d.kind,
            label: d.text,
            lane: Un(d.kind)
          }
        ];
      })
    );
    return f.length === 0 ? [] : [{ turn: r.turn, rawSpans: f }];
  }), l = s.flatMap((r) => r.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let i = 0, c = null;
  for (const r of [...l].sort(
    (f, v) => f.start - v.start || f.end - v.end
  ))
    t && c !== null && r.start > c && (i += r.start - c), o.set(r, i), c = c === null ? r.end : Math.max(c, r.end);
  const p = [], y = [];
  for (const r of s) {
    const f = r.rawSpans.map((v) => {
      const d = o.get(v) ?? 0;
      return {
        ...v,
        start: v.start - d,
        end: (n ? v.end : v.start) - d
      };
    });
    p.push(...f), r.turn !== null && y.push({
      turn: r.turn,
      time: Math.min(...f.map((v) => v.start))
    });
  }
  return {
    start: Math.min(...p.map((r) => r.start)),
    end: Math.max(...p.map((r) => r.end)),
    spans: p,
    turnBoundaries: y
  };
}
function Jl(e, n = "sequence") {
  const t = (c) => c.skillSpans ?? [];
  if (e.every((c) => t(c).length === 0)) return null;
  if (n === "sequence") {
    const c = /* @__PURE__ */ new Map();
    let p = 0;
    for (const r of e)
      for (const f of r.groups.flatMap((v) => v.cells))
        c.set(f.index, p), p += 1;
    const y = [];
    for (const r of e)
      for (const f of t(r)) {
        const v = f.attributedIndexes.map((O) => c.get(O)).filter((O) => O !== void 0);
        let d = v.length ? Math.min(...v) : void 0;
        if (d === void 0) {
          const O = r.groups.flatMap((w) => w.cells).find(
            (w) => w.kind !== "system" && w.skillName === f.skill
          );
          d = O ? c.get(O.index) : void 0;
        }
        if (d === void 0) continue;
        const x = v.length ? Math.max(...v) : d;
        y.push(hn(f, d, x + 1));
      }
    return y;
  }
  const s = e.flatMap(
    (c) => c.groups.flatMap(
      (p) => p.cells.flatMap((y) => {
        const r = Kn(y);
        return r === null ? [] : [r];
      })
    )
  );
  s.sort((c, p) => c.start - p.start || c.end - p.end);
  const l = n === "duration", o = (c) => {
    let p = 0, y = null;
    for (const r of s) {
      if (r.start >= c) break;
      if (l && y !== null && r.start > y) {
        const f = Math.min(r.start, c);
        f > y && (p += f - y);
      }
      y = y === null ? r.end : Math.max(y, r.end);
    }
    return p;
  }, i = [];
  for (const c of e)
    for (const p of t(c)) {
      const y = p.startT, r = Math.max(Ss(p), y + 1), f = o(y), v = o(r);
      i.push(
        hn(
          p,
          y - f,
          Math.max(y - f + 1, r - v)
        )
      );
    }
  return i;
}
function hn(e, n, t) {
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
const it = window.QwenPaw.host, G = it.React, { useEffect: Je, useMemo: _t, useRef: Qe, useState: Ae } = G, { Tooltip: Vn } = it.antd, It = 3, Yl = 4, Zl = 0.08, eo = 0.025, to = 32, no = 0.5;
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
  const s = n.durationMs === void 0 ? null : `Total ${Tt(n.durationMs)}`, l = n.startedAt === void 0 ? null : n.durationMs === void 0 ? `Started ${ze(n.startedAt)}` : `${ze(n.startedAt)} → ${ze(
    n.startedAt + n.durationMs
  )}`, o = n.ttftMs === void 0 || n.decodingMs === void 0 ? null : `TTFT ${Tt(
    n.ttftMs
  )} · Decoding ${Tt(n.decodingMs)}`, i = [s, o].filter((c) => c !== null).join(" · ");
  return [t, l, i].filter((c) => c !== null && c !== "").join(`
`);
}
function Ot(e, n) {
  return e <= n ? { start: e, end: n } : { start: n, end: e };
}
function Mt(e) {
  return Math.min(1, Math.max(0, e));
}
function io(e, n, t, s) {
  const l = Math.min(s - t, Math.max(0, n)), o = Math.min(
    Math.max(e - l / 2, t),
    s - l
  );
  return { start: o, end: o + l };
}
function pn(e, n, t, s, l) {
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
  return /* @__PURE__ */ G.createElement(
    Vn,
    {
      title: /* @__PURE__ */ G.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: no,
      ...s
    },
    t
  );
}
function fn() {
  return /* @__PURE__ */ G.createElement("div", { className: ge.labels, "aria-hidden": "true" }, /* @__PURE__ */ G.createElement("span", null, "Input"), /* @__PURE__ */ G.createElement("span", null, "Model"), /* @__PURE__ */ G.createElement("span", null, "Tools"));
}
function mn({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ G.createElement(
    Gn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ G.createElement(
      "button",
      {
        type: "button",
        className: ge.earlierHistory,
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
const ro = G.memo(function({
  turns: n,
  mode: t,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: i = null,
  searchMatchIndexes: c = null,
  onRangeChange: p,
  onRecordSelect: y,
  onRecordFocus: r,
  onSkillSpanSelect: f
}) {
  const v = typeof it.useTheme == "function" ? it.useTheme() : void 0, d = _t(
    () => Wn(n, t),
    [t, n]
  ), x = _t(
    () => Jl(n, t),
    [t, n]
  ), O = _t(
    () => new Map(
      n.flatMap(
        (u) => u.groups.flatMap(
          (b) => b.cells.map(
            (I) => [I.index, so(I)]
          )
        )
      )
    ),
    [n]
  ), w = Qe(null), E = Qe(null), k = Qe(null), _ = Qe(null), [D, R] = Ae(null), [Q, A] = Ae(null), [P, W] = Ae(null), [V, te] = Ae(!1), [pe, ie] = Ae(!1), [oe, Y] = Ae(null), [g, m] = Ae(!1);
  Je(() => {
    d !== null && s !== null && (s.end < d.start || s.start > d.end) && p(null);
  }, [d, p, s]), Je(() => {
    d !== null && (m(!1), Y(
      (u) => u !== null && (u.end < d.start || u.start > d.end) ? null : u
    ));
  }, [d]), Je(() => {
    if (d === null || i === null) return;
    const u = d.spans.find(
      (b) => b.index === i
    );
    u !== void 0 && (m(!0), Y((b) => {
      if (b === null || u.end > b.start && u.start < b.end)
        return b;
      const I = Math.max(1, b.end - b.start), H = u.end <= b.start ? u.start : u.end - I, X = Math.min(
        Math.max(H, d.start),
        Math.max(d.start, d.end - I)
      );
      return X === b.start ? b : { start: X, end: X + I };
    }));
  }, [d, i]);
  const S = Math.max(1, ((d == null ? void 0 : d.end) ?? 0) - ((d == null ? void 0 : d.start) ?? 0)), T = Math.min(
    S,
    Math.max(1, ((oe == null ? void 0 : oe.end) ?? 0) - ((oe == null ? void 0 : oe.start) ?? 0))
  ), C = d === null || oe === null ? (d == null ? void 0 : d.start) ?? 0 : Math.min(
    Math.max(oe.start, d.start),
    d.end - T
  ), z = oe === null ? S : T, j = oe === null ? (d == null ? void 0 : d.start) ?? 0 : C, K = l && d !== null && j === d.start, L = o === void 0 || V ? void 0 : () => {
    te(!0), o().finally(() => {
      te(!1);
    });
  }, ne = d === null ? void 0 : {
    "--trajectory-domain-left": `${-(j - d.start) / z * 100}%`,
    "--trajectory-domain-width": `${S / z * 100}%`
  }, Z = d === null || s === null ? null : pn(
    s,
    j,
    z,
    d.start,
    d.end
  ), ae = (d === null || D === null ? null : pn(
    D,
    j,
    z,
    d.start,
    d.end
  )) ?? Z, Te = D ?? s;
  if (Je(() => {
    const u = k.current;
    if (u === null) return;
    const b = (I) => {
      I.preventDefault();
      const H = _.current;
      if (H === null || d === null) return;
      m(!1);
      const X = H.getBoundingClientRect(), J = Mt(
        (I.clientX - X.left) / Math.max(1, X.width)
      ), q = Math.min(
        S,
        Math.max(
          Math.min(
            t === "sequence" ? Yl : 20,
            S
          ),
          z * Math.exp(I.deltaY * 15e-4)
        )
      );
      if (q >= S * 0.999) {
        Y(null);
        return;
      }
      const le = j + J * z, fe = Math.min(
        Math.max(le - J * q, d.start),
        d.end - q
      );
      Y({ start: fe, end: fe + q });
    };
    return u.addEventListener("wheel", b, { passive: !1 }), () => {
      u.removeEventListener("wheel", b);
    };
  }, [z, j, S, t, d]), d === null)
    return /* @__PURE__ */ G.createElement(
      "section",
      {
        ref: k,
        className: ge.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ G.createElement("div", { className: ge.plot }, /* @__PURE__ */ G.createElement(fn, null), /* @__PURE__ */ G.createElement("div", { className: ge.track }, /* @__PURE__ */ G.createElement("span", { className: ge.empty }, "No timing data"), l && /* @__PURE__ */ G.createElement(
        mn,
        {
          loading: V,
          onHover: () => {
            A(null);
          },
          onLoad: L
        }
      )))
    );
  const ce = Math.min(
    z,
    S / d.spans.length
  ), Ee = (u) => {
    const b = u.currentTarget.getBoundingClientRect();
    return Mt((u.clientX - b.left) / Math.max(1, b.width));
  }, _e = (u) => {
    var X;
    const b = u.target instanceof HTMLElement ? u.target : null, I = (X = b == null ? void 0 : b.closest("[data-timeline-record-index]")) == null ? void 0 : X.dataset.timelineRecordIndex;
    if (I === void 0) return null;
    const H = Number(I);
    return Number.isFinite(H) ? H : null;
  }, dt = (u) => {
    p(u);
  }, ut = (u) => {
    if (u.button === 2) {
      E.current = {
        anchorClientX: u.clientX,
        anchorStart: j,
        moved: !1,
        pannable: oe !== null,
        pointerId: u.pointerId
      }, oe !== null && m(!1), ie(!0), typeof u.currentTarget.setPointerCapture == "function" && u.currentTarget.setPointerCapture(u.pointerId);
      return;
    }
    if (u.button !== 0) return;
    const b = Ee(u), I = j + b * z, H = _e(u);
    A({ fraction: b, recordIndex: H }), w.current = {
      pointerId: u.pointerId,
      anchorTime: I,
      anchorClientX: u.clientX,
      recordIndex: H
    }, typeof u.currentTarget.setPointerCapture == "function" && u.currentTarget.setPointerCapture(u.pointerId), R({ start: I, end: I });
  }, ht = (u) => {
    const b = u.currentTarget.getBoundingClientRect(), I = Ee(u);
    A({ fraction: I, recordIndex: _e(u) });
    const H = E.current;
    if (H !== null && H.pointerId === u.pointerId) {
      if (Math.abs(u.clientX - H.anchorClientX) >= It && (H.moved = !0), !H.pannable) return;
      const le = (u.clientX - H.anchorClientX) / Math.max(1, b.width), fe = Math.min(
        Math.max(H.anchorStart - le * z, d.start),
        d.end - z
      );
      Y({ start: fe, end: fe + z });
      return;
    }
    const X = w.current;
    if (X === null || X.pointerId !== u.pointerId) return;
    let J = j;
    if (oe !== null) {
      const le = u.clientX - b.left, fe = Math.min(
        to,
        Math.max(1, b.width * Zl)
      ), ue = le < fe ? -1 : le > b.width - fe ? 1 : 0;
      if (ue !== 0) {
        const Le = ue < 0 ? fe - le : le - (b.width - fe), xe = Mt(Le / fe), ke = j + ue * z * eo * Math.max(0.2, xe);
        J = Math.min(
          Math.max(ke, d.start),
          d.end - z
        ), J !== j && (m(!1), Y({
          start: J,
          end: J + z
        }));
      }
    }
    const q = J + I * z;
    R(Ot(X.anchorTime, q));
  }, Ve = (u) => {
    const b = E.current;
    if (b !== null && b.pointerId === u.pointerId) {
      const ue = b.moved || Math.abs(u.clientX - b.anchorClientX) >= It;
      E.current = null, ie(!1), ue || p(null);
      return;
    }
    const I = w.current;
    if (I === null || I.pointerId !== u.pointerId) return;
    const H = Ee(u), X = j + H * z, J = Ot(I.anchorTime, X);
    A({ fraction: H, recordIndex: _e(u) }), w.current = null, R(null);
    const q = Math.abs(u.clientX - I.anchorClientX) < It, le = q && I.recordIndex !== null ? d.spans.find((ue) => ue.index === I.recordIndex) : void 0;
    if (le !== void 0) {
      p(null), y == null || y(le.index);
      return;
    }
    const fe = J.end - J.start < ce ? io(
      q ? J.start : (J.start + J.end) / 2,
      ce,
      d.start,
      d.end
    ) : J;
    if (dt(fe), q) {
      const ue = J.start, Le = d.spans.reduce((xe, ke) => {
        const Xe = ue < xe.start ? xe.start - ue : ue > xe.end ? ue - xe.end : 0;
        return (ue < ke.start ? ke.start - ue : ue > ke.end ? ue - ke.end : 0) < Xe ? ke : xe;
      });
      r == null || r(Le.index);
    }
  }, Ge = (u) => {
    u.key !== "Escape" || s === null || (u.preventDefault(), p(null));
  }, pt = () => {
    w.current = null, E.current = null, R(null), A(null), ie(!1);
  };
  return /* @__PURE__ */ G.createElement(
    "section",
    {
      ref: k,
      className: ge.root,
      "data-theme": v || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ G.createElement("div", { className: ge.plot }, /* @__PURE__ */ G.createElement(fn, null), /* @__PURE__ */ G.createElement(
      "div",
      {
        ref: _,
        className: ge.track,
        "data-panning": pe || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: Ge,
        onPointerDown: ut,
        onPointerMove: ht,
        onPointerUp: Ve,
        onPointerCancel: pt,
        onPointerLeave: () => {
          w.current === null && E.current === null && A(null);
        },
        onDoubleClick: (u) => {
          u.preventDefault(), p(null);
        },
        onContextMenu: (u) => {
          u.preventDefault();
        }
      },
      K && /* @__PURE__ */ G.createElement(
        mn,
        {
          loading: V,
          onHover: () => {
            A(null);
          },
          onLoad: L
        }
      ),
      Q !== null && Q.recordIndex === null && D === null && /* @__PURE__ */ G.createElement(
        "div",
        {
          className: ge.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${Q.fraction * 100}%`
          }
        }
      ),
      ae !== null && /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(
        "div",
        {
          className: ge.selection,
          "data-dragging": D === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ae.start * 100}%`,
            "--trajectory-selection-width": `${(ae.end - ae.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ G.createElement(
        "div",
        {
          className: ge.selectionEdges,
          "data-dragging": D === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ae.start * 100}%`,
            "--trajectory-selection-width": `${(ae.end - ae.start) * 100}%`
          }
        }
      )),
      x !== null && d !== null && /* @__PURE__ */ G.createElement(
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
        x.map((u) => {
          const b = (u.start - d.start) / S, I = Math.max(
            (u.end - u.start) / S,
            4e-3
          ), H = re(), X = `${u.bypass ? "⚠ " : ""}${u.skill} · ${u.trigger}${u.open ? ` · ${h(H, "spanOpen")}` : ""}`, J = P === u.spanId, q = I > 0.14 && !u.bypass;
          return /* @__PURE__ */ G.createElement(Vn, { title: X, key: u.spanId }, /* @__PURE__ */ G.createElement(
            "span",
            {
              onPointerDown: (le) => {
                le.stopPropagation();
              },
              onClick: f ? (le) => {
                le.stopPropagation(), f(u.spanId);
              } : void 0,
              onMouseEnter: () => W(u.spanId),
              onMouseLeave: () => W(
                (le) => le === u.spanId ? null : le
              ),
              style: {
                position: "absolute",
                left: `${Math.max(0, b) * 100}%`,
                width: `${I * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${u.hue}, 65%, ${J ? 62 : 55}%, ${J ? 0.85 : 0.55})`,
                border: u.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${u.hue}, 55%, 45%, 0.8)`,
                pointerEvents: f ? "auto" : "none",
                cursor: f ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }
            },
            q ? /* @__PURE__ */ G.createElement(
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
      /* @__PURE__ */ G.createElement(
        "div",
        {
          className: ge.turnBoundaries,
          "data-animate-viewport": g || void 0,
          "aria-hidden": "true",
          style: ne
        },
        d.turnBoundaries.filter(
          (u) => u.time > d.start && u.time >= j && u.time <= j + z
        ).map((u) => /* @__PURE__ */ G.createElement(
          "span",
          {
            className: ge.turnBoundary,
            "data-turn": u.turn,
            key: u.turn,
            style: {
              "--trajectory-turn-left": `${(u.time - d.start) / S * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ G.createElement(
        "div",
        {
          className: ge.lanes,
          "data-animate-viewport": g || void 0,
          "data-timeline-domain": !0,
          style: ne
        },
        d.spans.filter(
          (u) => u.index === i || u.end >= j && u.start <= j + z
        ).map((u) => {
          const b = (u.start - d.start) / S, H = (u.end - u.start) / S * 100, X = O.get(u.index), J = X == null ? void 0 : X.ttftMs, q = X == null ? void 0 : X.decodingMs, le = J === void 0 || q === void 0 || J + q <= 0 ? null : J / (J + q);
          return /* @__PURE__ */ G.createElement(
            Gn,
            {
              key: u.index,
              label: oo(u.kind, X),
              placement: "bottom"
            },
            /* @__PURE__ */ G.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: ge.span,
                "data-timeline-span": u.kind,
                "data-timeline-record-index": u.index,
                "data-assistant-timing": le === null ? void 0 : "true",
                "data-error": u.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": u.index === i || void 0,
                "data-hovered": (Q == null ? void 0 : Q.recordIndex) === u.index || void 0,
                "data-search-match": c === null ? void 0 : c.has(u.index) ? "true" : "false",
                "data-selected": Te === null ? void 0 : u.start <= Te.end && u.end >= Te.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${b * 100}%`,
                  "--trajectory-span-width": `${H}%`,
                  "--trajectory-span-gap": `min(${H * 0.08}%, 1px)`,
                  "--trajectory-span-lane": u.lane,
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
}), Dt = window.QwenPaw.host, se = Dt.React, { Button: ao, Input: co, Popover: uo, Segmented: ho, Tooltip: gn } = Dt.antd, {
  MenuFoldOutlined: po,
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
  modeOptions: o,
  allCollapsed: i,
  hasRequests: c,
  onToggleCollapseAll: p,
  callsCollapsed: y,
  onToggleCallsCollapsed: r
}) {
  const f = re();
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
    /* @__PURE__ */ se.createElement(gn, { title: h(f, "projectionHint") }, /* @__PURE__ */ se.createElement(
      ho,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (v) => n(v)
      }
    )),
    /* @__PURE__ */ se.createElement(
      co,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ se.createElement(yo, null),
        placeholder: h(f, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (v) => s(v.target.value)
      }
    ),
    c && /* @__PURE__ */ se.createElement(
      gn,
      {
        title: i ? h(f, "expandAll") : h(f, "collapseAll")
      },
      /* @__PURE__ */ se.createElement(
        ao,
        {
          size: "small",
          type: "text",
          icon: i ? /* @__PURE__ */ se.createElement(fo, null) : /* @__PURE__ */ se.createElement(po, null),
          onClick: p
        }
      )
    ),
    /* @__PURE__ */ se.createElement("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 10 } }, /* @__PURE__ */ se.createElement(
      uo,
      {
        trigger: "click",
        placement: "bottomRight",
        content: /* @__PURE__ */ se.createElement("div", { style: { maxWidth: 340, fontSize: 12, lineHeight: "20px" } }, /* @__PURE__ */ se.createElement("div", null, /* @__PURE__ */ se.createElement("strong", null, "📚"), " ", h(f, "legendLoad")), /* @__PURE__ */ se.createElement("div", null, /* @__PURE__ */ se.createElement("strong", null, "⚡"), " ", h(f, "legendResource")), /* @__PURE__ */ se.createElement("div", null, /* @__PURE__ */ se.createElement("strong", null, "∈"), " ", h(f, "legendGuided")), /* @__PURE__ */ se.createElement("div", null, /* @__PURE__ */ se.createElement("strong", null, h(f, "legendStripTitle")), " ", h(f, "legendStrip")), /* @__PURE__ */ se.createElement("div", null, /* @__PURE__ */ se.createElement("strong", null, h(f, "legendBandTitle")), " ", h(f, "legendBand")))
      },
      /* @__PURE__ */ se.createElement("a", { style: { fontSize: 12, color: "rgba(128,128,128,1)" } }, /* @__PURE__ */ se.createElement(mo, null), " ", h(f, "legendTitle"))
    ), /* @__PURE__ */ se.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ se.createElement(go, null),
      " ",
      h(f, "refresh")
    ))
  );
}
const ct = window.QwenPaw.host, N = ct.React, { useCallback: yn, useEffect: Ye, useMemo: we, useRef: So, useState: ye } = N, {
  Button: Ze,
  Empty: vn,
  Popconfirm: Eo,
  Popover: xo,
  Space: bo,
  Spin: Xn,
  Switch: ko,
  Tag: wo,
  Tooltip: To,
  message: Ke
} = ct.antd, { DeleteOutlined: _o, DownloadOutlined: Io, SettingOutlined: Sn } = ct.antdIcons, { Text: Ce } = ct.antd.Typography;
function En({
  config: e,
  onChange: n,
  children: t
}) {
  const s = re(), l = (i, c, p) => /* @__PURE__ */ N.createElement(
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
    /* @__PURE__ */ N.createElement(Ce, { style: { fontSize: 13 } }, i),
    /* @__PURE__ */ N.createElement(
      ko,
      {
        size: "small",
        checked: !!c,
        onChange: (y) => n({ [p]: y })
      }
    )
  ), o = /* @__PURE__ */ N.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ N.createElement(Ce, { strong: !0, style: { fontSize: 13 } }, h(s, "settings")), /* @__PURE__ */ N.createElement("div", { style: { marginTop: 8 } }, e ? [
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
  const [o, i] = ye(null), [c, p] = ye(!1), [y, r] = ye(!1), [f, v] = ye(""), [d, x] = ye("sequence"), [O, w] = ye(null), [E, k] = ye(null), [_, D] = ye(null), [R, Q] = ye(null), [A, P] = ye(
    /* @__PURE__ */ new Set()
  ), [W, V] = ye(!1), [te, pe] = ye(null), [ie, oe] = ye(null), [Y, g] = ye(null), [m, S] = ye(null), T = So(null);
  T.current = e, Ye(() => {
    ls().then(pe).catch(() => pe(null));
  }, []);
  const C = yn(async (u, b) => {
    b || p(!0);
    try {
      const I = await ss(u, {
        beforeSeq: b,
        limit: 200
      });
      S(null), i((H) => b && H ? {
        ...I,
        events: [...I.events, ...H.events]
      } : I);
    } catch (I) {
      S({
        message: String(I.message),
        status: I instanceof $n ? I.status : null
      });
    } finally {
      b || p(!1);
    }
  }, []), z = yn(async (u) => {
    try {
      const b = await ns(u);
      g(b), oe({
        sessionId: u,
        inputTokens: b.input_tokens,
        outputTokens: b.output_tokens,
        totalTokens: b.total_tokens,
        reasoningTokens: Number(b.reasoning_tokens ?? 0)
      });
    } catch {
      g(null), oe(null);
    }
  }, []);
  Ye(() => {
    e ? (w(null), k(null), D(null), P(/* @__PURE__ */ new Set()), v(""), C(e), z(e)) : (i(null), g(null), oe(null));
  }, [e, C, z]);
  const j = we(
    () => o ? Wl(o.events) : [],
    [o]
  ), { initial: K, turns: L } = we(
    () => Vl(j),
    [j]
  ), ne = we(
    () => K ? [K, ...cn(L)] : cn(L),
    [K, L]
  ), Z = we(
    () => L.some((u) => u.status === "running"),
    [L]
  );
  Ye(() => {
    if (!e || !Z) return;
    const u = setInterval(() => {
      document.visibilityState === "visible" && T.current && C(T.current);
    }, 5e3);
    return () => clearInterval(u);
  }, [e, Z, C]);
  const de = we(
    () => O === null ? null : Ql(L, O, d),
    [O, L, d]
  ), ae = we(() => {
    const u = f.trim().toLowerCase();
    return u ? new Set(
      ne.filter(
        (b) => [
          b.text,
          b.outputText,
          b.thinkingText,
          b.toolName,
          b.toolInput,
          b.toolOutput,
          b.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(u)
      ).map((b) => b.index)
    ) : null;
  }, [f, ne]), Te = we(
    () => E === null ? null : ne.find((u) => u.index === E) ?? null,
    [ne, E]
  ), ce = we(() => {
    var Ft, Ht;
    if (_ === null) return null;
    const u = L.find((B) => B.turn === _);
    if (!u) return null;
    const b = ((Ft = u.groups[0]) == null ? void 0 : Ft.cells) ?? [], I = b.filter((B) => B.kind === "message"), H = b.filter((B) => B.kind === "tool"), X = [
      ...new Set(
        I.map((B) => B.model).filter((B) => !!B)
      )
    ], J = [
      ...new Set(
        I.map((B) => B.provider).filter((B) => !!B)
      )
    ];
    let q = 0, le = 0, fe = 0, ue = 0, Le = 0, xe = null, ke = 0;
    const Xe = [];
    for (const B of b)
      B.usage && (q += B.usage.input_tokens ?? 0, le += B.usage.output_tokens ?? 0, fe += B.usage.cache_input_tokens ?? 0, ue += B.usage.cache_creation_input_tokens ?? 0, Le += B.usage.reasoning_tokens ?? 0), B.timing && (xe = xe === null ? B.timing.ttft_ms : Math.min(xe, B.timing.ttft_ms), ke = (ke ?? 0) + B.timing.decode_ms), B.isError && Xe.push(B.toolError ?? B.text ?? "error");
    const $e = b.find((B) => B.kind === "user"), qn = (Ht = [...I].reverse().find((B) => B.options)) == null ? void 0 : Ht.options, ft = [...I].reverse().find((B) => B.outputText);
    let Pt;
    const jt = I.filter((B) => B.messagesMeta);
    if (jt.length > 0) {
      const B = {};
      let Ne = 0, gt = 0;
      for (const Qn of jt) {
        const yt = Qn.messagesMeta;
        for (const [Ut, Yn] of Object.entries(yt.charsByRole))
          B[Ut] = (B[Ut] ?? 0) + Yn;
        Ne += yt.totalChars, gt = Math.max(gt, yt.maxToolChars);
      }
      Pt = { charsByRole: B, totalChars: Ne, maxToolChars: gt };
    }
    const mt = L.findIndex((B) => B.turn === _), Bt = mt > 0 ? L[mt - 1] : null;
    let Be = null;
    if (Bt) {
      Be = 0;
      for (const B of Bt.groups)
        for (const Ne of B.cells)
          Ne.kind === "message" && Ne.usage && (Be += Ne.usage.input_tokens ?? 0);
    }
    const Jn = Be === null && mt !== 0 ? void 0 : {
      prevInputTokens: Be,
      deltaTokens: q - (Be ?? 0)
    };
    return {
      turn: _,
      status: u.status,
      durationMs: u.durationMs,
      startedAt: ($e == null ? void 0 : $e.startedAt) ?? null,
      query: ($e == null ? void 0 : $e.text) ?? "",
      llmCalls: I.length,
      toolCalls: H.length,
      models: X,
      providers: J,
      inputTokens: q,
      outputTokens: le,
      cacheReadTokens: fe,
      cacheWriteTokens: ue,
      reasoningTokens: Le,
      inputComposition: Pt,
      growth: Jn,
      resultIndex: ft == null ? void 0 : ft.index,
      ttftMs: xe,
      decodeMs: ke,
      errors: Xe,
      options: qn,
      sessionTotals: ie && ie.sessionId === e ? {
        inputTokens: ie.inputTokens,
        outputTokens: ie.outputTokens,
        totalTokens: ie.totalTokens,
        reasoningTokens: ie.reasoningTokens
      } : void 0
    };
  }, [_, L, ie, e]), Ee = !!(o && o.events.length > 0 && o.events[0].seq > 1), _e = async (u) => {
    try {
      pe(await os(u));
    } catch (b) {
      Ke.error(String(b.message));
    }
  }, dt = we(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), ut = we(() => {
    if (!Y) return null;
    const u = [
      `${Y.runs} ${h(t, "statRounds")} · ${Y.llm_calls} ${h(t, "statSteps")}`,
      `LLM ${ve(Y.llm_ms_total / 1e3)} · ${h(
        t,
        "toolCalls"
      )} ${ve(Y.tool_ms_total / 1e3)}`,
      `${h(t, "statTtftAvg")} ${Y.ttft_ms_avg === null ? "-" : ve(Y.ttft_ms_avg / 1e3)} · ${Lt(
        Y.output_tokens,
        Y.decode_ms_total / 1e3
      )}`
    ];
    if (Y.cache_read_tokens > 0 || Y.cache_write_tokens > 0) {
      const b = Y.cache_read_tokens + Y.input_tokens, I = b > 0 ? Math.round(Y.cache_read_tokens / b * 100) : 0;
      u.push(`${h(t, "statCacheHit")} ${I}%`);
    }
    if (u.push(
      `${h(t, "statInput")} ${ee(
        Y.input_tokens
      )} tok · ${h(t, "statOutput")} ${ee(
        Y.output_tokens
      )} tok`
    ), n && u.push(zt(n.size_bytes)), Y.skills) {
      const b = Object.entries(Y.skills).sort((I, H) => H[1] - I[1]).map(([I, H]) => `${I} ×${H}`).join(" · ");
      b && u.push(`📚 ${b}`);
    }
    if (K != null && K.prompt) {
      const b = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
      for (const X of L)
        for (const J of X.groups)
          for (const q of J.cells)
            q.skillName ? I.add(q.skillName) : q.inSkill && b.add(q.inSkill);
      const H = [...b].filter((X) => !I.has(X));
      H.length > 0 && u.push(
        `⚡ ${h(t, "skillBypassStrip")}: ${H.join(" · ")}`
      );
    }
    return u.join(" | ");
  }, [Y, n, t, L, K]), ht = () => {
    k(null), D(null);
  };
  Ye(() => {
    E !== null && Q(null);
  }, [E]);
  const Ve = we(
    () => R === null ? null : L.flatMap((u) => u.skillSpans ?? []).find((u) => u.id === R) ?? null,
    [R, L]
  ), Ge = (m == null ? void 0 : m.status) === 404, pt = Te !== null || ce !== null;
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
          Ce,
          {
            strong: !0,
            ellipsis: {
              tooltip: (n == null ? void 0 : n.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (n == null ? void 0 : n.title) || (n == null ? void 0 : n.agent_id) || Rn(e)
        ),
        /* @__PURE__ */ N.createElement(
          wo,
          {
            color: Nn[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Dn((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ N.createElement(Ce, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ N.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ N.createElement(bo, null, /* @__PURE__ */ N.createElement(En, { config: te, onChange: _e }, /* @__PURE__ */ N.createElement(Ze, { size: "small", icon: /* @__PURE__ */ N.createElement(Sn, null) })), /* @__PURE__ */ N.createElement(To, { title: h(t, "export") }, /* @__PURE__ */ N.createElement(
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
          Ce,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          ut ?? // Transient line while the stats endpoint responds.
          (n ? `${n.runs} ${h(t, "statRounds")} · ${n.llm_calls} ${h(t, "statSteps")} · ${Ln(
            n.total_tokens
          )} ${h(t, "tokens")} · ${zt(
            n.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ N.createElement(
          Ce,
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
        /* @__PURE__ */ N.createElement(Ce, { type: "secondary", style: { fontSize: 13 } }, h(t, "selectSession")),
        /* @__PURE__ */ N.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ N.createElement(En, { config: te, onChange: _e }, /* @__PURE__ */ N.createElement(Ze, { size: "small", icon: /* @__PURE__ */ N.createElement(Sn, null) })))
      )
    ),
    m && !Ge && /* @__PURE__ */ N.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ N.createElement(Ce, { type: "danger", style: { fontSize: 12 } }, `${h(t, "loadFailed")}: ${m.message}`)),
    /* @__PURE__ */ N.createElement(
      vo,
      {
        mode: d,
        onModeChange: x,
        search: f,
        onSearchChange: v,
        onRefresh: () => {
          e && (C(e), z(e)), l == null || l();
        },
        modeOptions: dt,
        allCollapsed: L.length > 0 && L.every((u) => A.has(u.turn ?? -1)),
        hasRequests: L.some((u) => u.turn !== null),
        callsCollapsed: W,
        onToggleCallsCollapsed: () => V((u) => !u),
        onToggleCollapseAll: () => {
          P((u) => L.some(
            (I) => I.turn !== null && !u.has(I.turn)
          ) ? new Set(
            L.map((I) => I.turn).filter((I) => I !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ N.createElement(
      ro,
      {
        turns: L,
        mode: d,
        range: O,
        hasEarlierRecords: Ee,
        onLoadEarlier: async () => {
          var u;
          return !o || o.events.length === 0 ? !1 : (await C(e, (u = o.events[0]) == null ? void 0 : u.seq), !0);
        },
        selectedIndex: E,
        searchMatchIndexes: ae,
        onRangeChange: w,
        onRecordSelect: k,
        onRecordFocus: k,
        onSkillSpanSelect: Q
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
          turns: L,
          selectedIndex: E,
          selectedTurn: _,
          collapsedTurns: A,
          focusIndexes: de,
          searchMatchIndexes: ae,
          onSelectedIndexChange: (u) => {
            if (u === E) {
              k(null);
              return;
            }
            k(u), D(null);
          },
          onSkillSpanOpen: (u, b) => {
            var J;
            const I = L.flatMap((q) => q.skillSpans ?? []), X = (b !== null ? (((J = L.find((q) => q.turn === b)) == null ? void 0 : J.skillSpans) ?? []).find((q) => q.skill === u) : void 0) ?? I.find((q) => q.skill === u);
            X && Q(X.id);
          },
          onSelectedTurnChange: (u) => {
            D(u), k(null);
          },
          callsCollapsed: W,
          onToggleTurn: (u) => {
            P((b) => {
              const I = new Set(b);
              return I.has(u) ? I.delete(u) : I.add(u), I;
            });
          },
          hasOlderRecords: Ee,
          loadingOlder: y,
          onLoadOlder: () => {
            var u;
            !o || o.events.length === 0 || (r(!0), C(
              e,
              (u = o.events[0]) == null ? void 0 : u.seq
            ).finally(() => r(!1)));
          },
          emptyText: h(t, "noSessions"),
          initialRecord: K
        }
      )
    ), Ve ? /* @__PURE__ */ N.createElement(
      qs,
      {
        span: Ve,
        records: ne,
        onJumpRecord: (u) => {
          Q(null), k(u);
        },
        onClose: () => Q(null)
      }
    ) : pt ? /* @__PURE__ */ N.createElement(
      Ks,
      {
        record: Te,
        request: ce,
        onJumpSession: s,
        onSelectTurn: (u) => {
          D(u), k(null);
        },
        onClose: ht
      }
    ) : null) : /* @__PURE__ */ N.createElement(
      vn,
      {
        image: vn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: Ge && e ? h(t, "noTraceForSession") : h(t, "selectSession")
      }
    )
  );
}
const je = window.QwenPaw.host, F = je.React, { useCallback: xn, useEffect: Ct, useMemo: et, useState: Me } = F, { Button: bn, Empty: kn, Input: Co, Spin: zo, Tag: wn, Tooltip: Tn } = je.antd, {
  CaretRightOutlined: $o,
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
  onSelect: o,
  locale: i
}) {
  const c = e.length > 1;
  return /* @__PURE__ */ F.createElement(F.Fragment, null, e.map(([p, y]) => {
    const r = c && !s && n.has(p);
    return /* @__PURE__ */ F.createElement("div", { key: p }, c && /* @__PURE__ */ F.createElement(
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
      /* @__PURE__ */ F.createElement(
        $o,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: r ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ F.createElement(We, { strong: !0, style: { fontSize: 12 } }, p),
      /* @__PURE__ */ F.createElement(We, { type: "secondary", style: { fontSize: 11 } }, y.length)
    ), !r && y.map((f) => {
      const v = f.session_id === l;
      return /* @__PURE__ */ F.createElement(
        "div",
        {
          key: f.session_id,
          onClick: () => o(f.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: v ? "rgba(22,119,255,0.10)" : "transparent",
            border: v ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ F.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ F.createElement(
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
          c ? null : f.agent_id ? /* @__PURE__ */ F.createElement(
            wn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            f.agent_id
          ) : null,
          /* @__PURE__ */ F.createElement(
            wn,
            {
              color: Nn[f.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Dn(f.status)
          )
        ),
        /* @__PURE__ */ F.createElement(
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
          /* @__PURE__ */ F.createElement("span", null, f.channel || "-"),
          /* @__PURE__ */ F.createElement("span", null, f.runs, " ", h(i, "runs")),
          /* @__PURE__ */ F.createElement("span", null, Ln(f.total_tokens), " tok"),
          f.skills ? /* @__PURE__ */ F.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(f.skills).sort((d, x) => x[1] - d[1]).map(([d, x]) => `${d} ×${x}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(f.skills).sort((d, x) => x[1] - d[1]).slice(0, 2).map(([d]) => d).join(" ")
          ) : null,
          /* @__PURE__ */ F.createElement(
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
  const e = typeof je.useLocale == "function" ? je.useLocale() : void 0, n = et(
    () => Rt(e ?? re()),
    [e]
  ), [t, s] = Me(null), [l, o] = Me(!1), [i, c] = Me(
    /* @__PURE__ */ new Set()
  ), [p, y] = Me(!1), [r, f] = Me(!1), [v, d] = Me(null), [x, O] = Me(""), [w, E] = Me(null), k = xn(async () => {
    try {
      const A = await Kt({ limit: 100, offset: 0 });
      s(A.sessions), o(A.has_more), E(null);
    } catch (A) {
      E(String(A.message));
    }
  }, []), _ = xn(async () => {
    f(!0);
    try {
      const A = await Kt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      s((P) => {
        const W = P ?? [];
        return [
          ...W,
          ...A.sessions.filter(
            (V) => !W.some((te) => te.session_id === V.session_id)
          )
        ];
      }), o(A.has_more);
    } catch (A) {
      E(String(A.message));
    } finally {
      f(!1);
    }
  }, [t]);
  Ct(() => {
    k();
    try {
      const A = new URLSearchParams(window.location.search).get("session");
      A && An(A).then((P) => {
        d(P ?? A);
      });
    } catch {
    }
  }, [k]), Ct(() => {
    try {
      const A = new URL(window.location.href);
      v ? A.searchParams.set("session", v) : A.searchParams.delete("session"), window.history.replaceState(window.history.state, "", A);
    } catch {
    }
  }, [v]), Ct(() => {
    const A = setInterval(() => {
      document.visibilityState === "visible" && k();
    }, 15e3);
    return () => clearInterval(A);
  }, [k]);
  const D = et(
    () => (t == null ? void 0 : t.find((A) => A.session_id === v)) ?? null,
    [t, v]
  ), R = et(() => {
    if (!t) return [];
    const A = x.trim().toLowerCase();
    return A ? t.filter(
      (P) => [P.session_id, P.title ?? "", P.agent_id, P.channel].join(" ").toLowerCase().includes(A)
    ) : t;
  }, [t, x]), Q = et(() => {
    const A = /* @__PURE__ */ new Map();
    for (const P of R) {
      const W = P.agent_id || "(unknown)", V = A.get(W);
      V ? V.push(P) : A.set(W, [P]);
    }
    return [...A.entries()];
  }, [R]);
  return /* @__PURE__ */ F.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, p ? /* @__PURE__ */ F.createElement(
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
    /* @__PURE__ */ F.createElement(Tn, { title: h(n, "expandSidebar"), placement: "right" }, /* @__PURE__ */ F.createElement(
      bn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ F.createElement(Oo, null),
        onClick: () => y(!1)
      }
    ))
  ) : /* @__PURE__ */ F.createElement(
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
    /* @__PURE__ */ F.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ F.createElement(
        Co,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ F.createElement(Ro, null),
          placeholder: h(n, "searchPlaceholder"),
          value: x,
          style: { flex: 1, minWidth: 0 },
          onChange: (A) => O(A.target.value)
        }
      ),
      /* @__PURE__ */ F.createElement(Tn, { title: h(n, "collapseSidebar") }, /* @__PURE__ */ F.createElement(
        bn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ F.createElement(Ao, null),
          onClick: () => y(!0)
        }
      ))
    ),
    w ? /* @__PURE__ */ F.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ F.createElement(We, { type: "danger", style: { fontSize: 12 } }, `${h(n, "loadFailed")}: ${w}`)) : null,
    /* @__PURE__ */ F.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ F.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ F.createElement(zo, null)) : R.length === 0 ? /* @__PURE__ */ F.createElement(
      kn,
      {
        image: kn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ F.createElement("span", { style: { fontSize: 12 } }, h(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ F.createElement(
        We,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        h(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ F.createElement(
      Lo,
      {
        groups: Q,
        collapsedAgents: i,
        onToggleAgent: (A) => {
          c((P) => {
            const W = new Set(P);
            return W.has(A) ? W.delete(A) : W.add(A), W;
          });
        },
        searching: !!x.trim(),
        selected: v,
        onSelect: d,
        locale: n
      }
    ), t !== null && l && !x.trim() && /* @__PURE__ */ F.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ F.createElement(
      "a",
      {
        onClick: () => void _(),
        style: { fontSize: 12 }
      },
      r ? "…" : `⋯ ${h(n, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ F.createElement(
    Mo,
    {
      sessionId: v,
      summary: D,
      locale: n,
      onJumpSession: d,
      onRefreshSessions: () => void k()
    }
  ));
}
const Do = window.QwenPaw.host.React;
var _n, In;
(In = (_n = window.QwenPaw).registerRoutes) == null || In.call(_n, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: No,
    label: h(re(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var Mn, tt, Cn;
(Cn = (tt = (Mn = window.QwenPaw.chat) == null ? void 0 : Mn.rightHeader) == null ? void 0 : tt.add) == null || Cn.call(
  tt,
  "agent-trace",
  Do.createElement(ps),
  { id: "agent-trace-jump" }
);

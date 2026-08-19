var Qn = Object.defineProperty;
var Yn = (e, n, t) => n in e ? Qn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var gt = (e, n, t) => Yn(e, typeof n != "symbol" ? n + "" : n, t);
const Zn = {
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
    resetChanges: "逐条变化"
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
    resetChanges: "Per-message changes"
  }
};
function Ot(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function se() {
  try {
    return Ot(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function p(e, n) {
  return Zn[e][n];
}
const Pe = window.QwenPaw.host;
async function es(e) {
  return ze(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function Cn(e, n) {
  return Pe.fetch ? Pe.fetch(e, n) : fetch(Pe.getApiUrl(e), {
    ...n,
    headers: {
      ...(n == null ? void 0 : n.headers) || {},
      ...Pe.getApiToken() ? { Authorization: `Bearer ${Pe.getApiToken()}` } : {}
    }
  });
}
class zn extends Error {
  constructor(n, t) {
    super(t), this.status = n, this.name = "ApiError";
  }
}
async function ze(e, n) {
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
  return n.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && n.set("offset", String(e.offset)), ze(
    `/agent-trace/sessions?${n.toString()}`
  );
}
async function ts(e, n) {
  const t = new URLSearchParams();
  n != null && n.beforeSeq && t.set("before_seq", String(n.beforeSeq)), t.set("limit", String(n == null ? void 0 : n.limit));
  const s = t.toString();
  return ze(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function ns() {
  return ze("/agent-trace/config");
}
async function ss(e) {
  return ze("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function ls(e) {
  const n = await Cn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!n.ok) throw new Error(`HTTP ${n.status}`);
  const t = await n.blob(), s = URL.createObjectURL(t), l = document.createElement("a");
  l.href = s, l.download = `${e}.jsonl`, l.click(), URL.revokeObjectURL(s);
}
async function os(e) {
  await ze(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function $n(e) {
  if (!e) return null;
  try {
    return (await ze(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Ce = window.QwenPaw.host, nt = Ce.React, { useMemo: is } = nt, { Button: rs, Tooltip: as } = Ce.antd, { CompassOutlined: cs } = Ce.antdIcons;
function us(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function ds() {
  const e = typeof Ce.useLocale == "function" ? Ce.useLocale() : void 0, n = is(
    () => Ot(e ?? se()),
    [e]
  );
  return /* @__PURE__ */ nt.createElement(as, { title: p(n, "viewCurrentTrace") }, /* @__PURE__ */ nt.createElement(
    rs,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ nt.createElement(cs, null),
      "aria-label": p(n, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof Ce.getCurrentSessionId == "function" ? Ce.getCurrentSessionId() : null;
        $n(t).then((s) => {
          window.location.href = us(s ?? t);
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
function hs(e, n) {
  const t = Kt(e ?? ""), s = Kt(n ?? "");
  if (t.length > Wt || s.length > Wt)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...s.map((h) => ({ kind: "add", text: h }))
    ];
  const l = t.length, o = s.length, a = new Int32Array((l + 1) * (o + 1)), r = (h, v) => h * (o + 1) + v;
  for (let h = l - 1; h >= 0; h -= 1)
    for (let v = o - 1; v >= 0; v -= 1)
      a[r(h, v)] = t[h] === s[v] ? a[r(h + 1, v + 1)] + 1 : Math.max(a[r(h + 1, v)], a[r(h, v + 1)]);
  const d = [];
  let g = 0, i = 0;
  for (; g < l && i < o; )
    t[g] === s[i] ? (d.push({ kind: "same", text: t[g] }), g += 1, i += 1) : a[r(g + 1, i)] >= a[r(g, i + 1)] ? (d.push({ kind: "del", text: t[g] }), g += 1) : (d.push({ kind: "add", text: s[i] }), i += 1);
  for (; g < l; )
    d.push({ kind: "del", text: t[g] }), g += 1;
  for (; i < o; )
    d.push({ kind: "add", text: s[i] }), i += 1;
  return d;
}
function ps(e, n = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((o, a) => {
    if (o.kind !== "same")
      for (let r = Math.max(0, a - n); r <= Math.min(e.length - 1, a + n); r += 1)
        t[r] = !0;
  });
  const s = [];
  let l = 0;
  return e.forEach((o, a) => {
    t[a] ? (l > 0 && (s.push({ kind: "gap", count: l }), l = 0), s.push(o)) : l += 1;
  }), l > 0 && s.push({ kind: "gap", count: l }), s;
}
function fs(e) {
  let n = 0, t = 0;
  for (const s of e)
    s.kind === "add" ? n += 1 : s.kind === "del" && (t += 1);
  return { added: n, removed: t };
}
function ms(e) {
  let n = 0;
  for (let t = 0; t < e.length; t += 1)
    n = (n * 31 + e.charCodeAt(t)) % 100003;
  return n % 360;
}
class gs {
  constructor() {
    gt(this, "open", /* @__PURE__ */ new Map());
    gt(this, "finished", []);
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
      colorHue: ms(n)
    };
    return this.open.set(n, o), o;
  }
  closeAll(n, t, s) {
    for (const l of this.open.values())
      l.endSeq = n, l.endT = t, l.endKind = s, this.finished.push(l);
    this.open.clear();
  }
}
function ys(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function vs(e) {
  const n = e.lastActivityT ?? e.endT;
  return n === null ? null : Math.max(0, n - e.startT);
}
const Ss = /* @__PURE__ */ new Set([
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
function Es(e) {
  const n = /* @__PURE__ */ new Set();
  for (const t of e.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi
  ))
    n.add(t[1].toLowerCase());
  for (const t of e.matchAll(/```[a-z]*\n([\s\S]*?)```/g))
    for (const s of t[1].matchAll(/[\w./=\-]{6,}/g)) {
      const l = s[0].toLowerCase();
      Ss.has(l) || n.add(l);
    }
  return [...n];
}
function bs(e, n) {
  const t = e.toLowerCase();
  let s = null, l = !1;
  for (const [o, a] of n)
    for (const r of a)
      if (t.includes(r)) {
        s === null ? s = { skill: o, feature: r } : s.skill !== o && (l = !0);
        break;
      }
  return l ? null : s;
}
const xs = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, ks = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function On(e, n) {
  const t = e.markerKind ? xs[e.markerKind] : void 0;
  if (t) return n === "zh-CN" ? t.zh : t.en;
  const s = ks[e.kind];
  return s ? n === "zh-CN" ? s.zh : s.en : e.kind;
}
function ws(e, n) {
  const t = (n ?? "").toLowerCase();
  let s = 4;
  return t.includes("qwen") ? s = 2.2 : t.includes("deepseek") ? s = 2.5 : t.includes("claude") && (s = 3.6), Math.round(e / s);
}
const Vt = 60;
function Fe(e) {
  return `${e.role}|${e.text ?? `#${e.chars ?? 0}`}`;
}
function Xt(e) {
  return e.chars ?? (e.text ? e.text.length : 0);
}
function Gt(e) {
  const n = {};
  for (const t of e)
    n[t.role] = (n[t.role] ?? 0) + 1;
  return n;
}
function Ts(e, n) {
  let t = 0;
  for (; t < e.length && t < n.length && Fe(e[t]) === Fe(n[t]); )
    t += 1;
  const s = e.slice(t), l = n.slice(t), o = /* @__PURE__ */ new Map();
  for (const u of l) {
    const y = Fe(u);
    o.set(y, (o.get(y) ?? 0) + 1);
  }
  const a = [], r = [], d = [];
  for (let u = 0; u < Math.min(t, Vt); u += 1)
    d.push({ status: "kept", role: e[u].role });
  for (const u of s) {
    const y = Fe(u), T = o.get(y) ?? 0;
    T > 0 ? (o.set(y, T - 1), d.push({ status: "kept", role: u.role })) : a.push(u);
  }
  for (const u of l) {
    const y = Fe(u), T = o.get(y) ?? 0;
    T > 0 && (o.set(y, T - 1), r.push(u));
  }
  const g = /* @__PURE__ */ new Map();
  for (const u of r) {
    const y = g.get(u.role);
    y ? y.push(u) : g.set(u.role, [u]);
  }
  const i = [], h = [];
  for (const u of a) {
    const y = g.get(u.role);
    y && y.length > 0 ? i.push([u, y.shift()]) : h.push(u);
  }
  const v = [...g.values()].flat();
  for (const [u, y] of i)
    d.push({
      status: "rewritten",
      role: u.role,
      oldText: u.text,
      newText: y.text
    });
  for (const u of h)
    d.push({
      status: "removed",
      role: u.role,
      oldText: u.text
    });
  for (const u of v)
    d.push({
      status: "added",
      role: u.role,
      newText: u.text
    });
  return {
    breakAt: t,
    beforeCount: e.length,
    afterCount: n.length,
    beforeChars: e.reduce((u, y) => u + Xt(y), 0),
    afterChars: n.reduce((u, y) => u + Xt(y), 0),
    beforeByRole: Gt(e),
    afterByRole: Gt(n),
    changes: d.slice(0, Vt)
  };
}
function _s(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function fe(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const n = e * 1e3;
  return n < 1e3 ? `${Math.round(n)}ms` : n < 6e4 ? `${(n / 1e3).toFixed(1)}s` : `${Math.floor(n / 6e4)}m${Math.round(n % 6e4 / 1e3)}s`;
}
function Q(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function At(e, n) {
  return e === void 0 || !Number.isFinite(e) || n === null || n === void 0 || n <= 0 ? "-" : `${(e / n).toFixed(1)} tok/s`;
}
function Ie(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function de(e) {
  if (!e) return null;
  const n = Date.parse(e);
  return Number.isFinite(n) ? n : null;
}
function An(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function Is(e) {
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
function Rn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Mt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Ln = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function Dn(e) {
  return e || "unknown";
}
const it = window.QwenPaw.host, c = it.React, { useEffect: Cs, useRef: zs, useState: Nn } = c, { Button: jn, Collapse: $s, Empty: qt, Tabs: Rt, Tag: Ct } = it.antd, { Text: G } = it.antd.Typography, { CopyOutlined: Os, CloseOutlined: As } = it.antdIcons, Rs = 320, Ls = 720, qe = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Ds = 2e4;
function Ns(e) {
  if (e.length > Ds) return e;
  const n = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let s = 0, l, o = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > s && n.push(e.slice(s, l.index));
    const a = l[0];
    let r = "rgba(128,128,128,1)";
    l[1] !== void 0 ? r = qe.key : l[2] !== void 0 ? r = qe.string : l[3] !== void 0 ? r = qe.number : r = qe.literal, n.push(
      /* @__PURE__ */ c.createElement("span", { key: o++, style: { color: r } }, a)
    ), s = l.index + a.length;
  }
  return s < e.length && n.push(e.slice(s)), n;
}
function Se({ value: e, json: n = !1 }) {
  const [t, s] = Nn(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const o = async () => {
    try {
      await navigator.clipboard.writeText(l), s(!0), window.setTimeout(() => s(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ c.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ c.createElement(
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
    t ? "✓" : /* @__PURE__ */ c.createElement(Os, null)
  ), /* @__PURE__ */ c.createElement(
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
    n ? Ns(l) : l
  ));
}
function z({
  label: e,
  value: n,
  danger: t = !1
}) {
  return /* @__PURE__ */ c.createElement(
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
    /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ c.createElement(
      G,
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
  const o = Math.max(0, e - t - s), a = Math.max(0, n - l);
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Input", value: `${Q(e)} tok` }), t ? /* @__PURE__ */ c.createElement(z, { label: "Cached", value: `${Q(t)} tok` }) : null, s ? /* @__PURE__ */ c.createElement(
    z,
    {
      label: "Cache created",
      value: `${Q(s)} tok`
    }
  ) : null, t || s ? /* @__PURE__ */ c.createElement(z, { label: "Other", value: `${Q(o)} tok` }) : null, /* @__PURE__ */ c.createElement(z, { label: "Output", value: `${Q(n)} tok` }), l ? /* @__PURE__ */ c.createElement(z, { label: "Reasoning", value: `${Q(l)} tok` }) : null, l ? /* @__PURE__ */ c.createElement(z, { label: "Content", value: `${Q(a)} tok` }) : null);
}
function yt({
  label: e,
  onOpen: n,
  children: t
}) {
  return /* @__PURE__ */ c.createElement(
    "div",
    {
      style: {
        marginTop: 8,
        borderTop: "1px solid rgba(128,128,128,0.15)",
        paddingTop: 6
      }
    },
    /* @__PURE__ */ c.createElement("a", { onClick: n, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 2 } }, t)
  );
}
const Qt = ["system", "user", "assistant", "tool"], js = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function Bs({
  request: e,
  locale: n
}) {
  const t = e.inputComposition;
  if (!t) return null;
  const s = e.models[0], l = [], o = new Set(Qt), a = [
    ...Qt.filter((r) => t.charsByRole[r]),
    ...Object.keys(t.charsByRole).filter(
      (r) => !o.has(r) && t.charsByRole[r]
    )
  ];
  for (const r of a) {
    const d = t.charsByRole[r], g = js[r] ?? "roleOther";
    l.push(
      /* @__PURE__ */ c.createElement(
        z,
        {
          key: r,
          label: p(n, g),
          value: `${Q(d)} ${p(
            n,
            "charUnit"
          )} · ~${Q(ws(d, s))} tok ${p(
            n,
            "estimatedTag"
          )}`
        }
      )
    );
  }
  return t.maxToolChars > 0 && l.push(
    /* @__PURE__ */ c.createElement(
      z,
      {
        key: "max-tool",
        label: p(n, "maxToolMsg"),
        value: `${Q(t.maxToolChars)} ${p(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(G, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, p(n, "inputComposition")), l, /* @__PURE__ */ c.createElement(
    G,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    p(n, "estimateNote")
  ), e.growth ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    z,
    {
      label: p(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? p(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${Q(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ c.createElement(
    z,
    {
      label: p(n, "cacheAbsorbed"),
      value: `${Q(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Ps({
  request: e,
  onJumpRecord: n
}) {
  const t = se(), [s, l] = c.useState("summary"), o = /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Started", value: Ie(e.startedAt) }), /* @__PURE__ */ c.createElement(
    z,
    {
      label: "Total",
      value: fe(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ c.createElement(
    z,
    {
      label: "First TTFT",
      value: fe(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ c.createElement(
    z,
    {
      label: "Total decoding",
      value: fe(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ c.createElement(
    z,
    {
      label: p(t, "throughput"),
      value: At(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), a = /* @__PURE__ */ c.createElement(
    Jt,
    {
      input: e.inputTokens,
      output: e.outputTokens,
      cacheRead: e.cacheReadTokens,
      cacheWrite: e.cacheWriteTokens,
      reasoning: e.reasoningTokens
    }
  ), r = [
    {
      key: "summary",
      label: p(t, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ c.createElement(
        z,
        {
          label: p(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ c.createElement(z, { label: "Query", value: Fs(e.query) }), /* @__PURE__ */ c.createElement(
        z,
        {
          label: p(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ c.createElement(z, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ c.createElement(
        z,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && n ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => n(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ c.createElement(yt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ c.createElement(Se, { value: e.options, json: !0 })) : null, /* @__PURE__ */ c.createElement(yt, { label: "Usage", onOpen: () => l("usage") }, a), /* @__PURE__ */ c.createElement(yt, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(G, { strong: !0, style: { fontSize: 12 } }, p(t, "thisRequest")), a, /* @__PURE__ */ c.createElement(Bs, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
        G,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        p(t, "sessionTotal")
      ), /* @__PURE__ */ c.createElement(
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
        children: /* @__PURE__ */ c.createElement(Se, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ c.createElement(
    Rt,
    {
      size: "small",
      activeKey: s,
      onChange: (d) => l(d),
      items: r,
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
  const t = c.useMemo(
    () => hs(e, n),
    [e, n]
  ), s = c.useMemo(() => fs(t), [t]), l = c.useMemo(() => ps(t), [t]), o = se();
  return e === void 0 ? /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 12 } }, p(o, "noPrevPrompt")) : /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ c.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ c.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ c.createElement(
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
    l.map((a, r) => {
      if (a.kind === "gap")
        return /* @__PURE__ */ c.createElement(
          "div",
          {
            key: r,
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
      const d = a;
      return /* @__PURE__ */ c.createElement(
        "div",
        {
          key: r,
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
function Us({ record: e }) {
  var o;
  const n = se(), t = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: p(n, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "#", value: String(e.index) }), /* @__PURE__ */ c.createElement(
        z,
        {
          label: p(n, "status"),
          value: s ? p(n, "promptChanged") : p(n, "promptInitial")
        }
      ), /* @__PURE__ */ c.createElement(z, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ c.createElement(z, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ c.createElement(z, { label: "Tools", value: String(t.length) }))
    },
    ...s ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ c.createElement(
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
      label: p(n, "prompt"),
      children: /* @__PURE__ */ c.createElement(Se, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 4 } }, t.map((a) => /* @__PURE__ */ c.createElement(G, { key: a, code: !0, style: { fontSize: 11 } }, a)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ c.createElement(
          $s,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((a, r) => {
              var g;
              const d = typeof a.name == "string" && a.name || typeof ((g = a.function) == null ? void 0 : g.name) == "string" && a.function.name || `tool-${r + 1}`;
              return {
                key: String(r),
                label: /* @__PURE__ */ c.createElement(G, { code: !0, style: { fontSize: 11 } }, d),
                children: /* @__PURE__ */ c.createElement(Se, { value: a })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ c.createElement(Se, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ c.createElement(Rt, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function vt({ dragRef: e, width: n }) {
  return /* @__PURE__ */ c.createElement(
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
  return e ? /* @__PURE__ */ c.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ c.createElement(
    jn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ c.createElement(As, null),
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
  const a = se(), [r, d] = Nn(400), g = zs(null);
  if (Cs(() => {
    const y = (R) => {
      const k = g.current;
      if (k === null) return;
      const _ = k.anchorX - R.clientX;
      d(
        Math.min(Ls, Math.max(Rs, k.anchorWidth + _))
      );
    }, T = () => {
      g.current = null;
    };
    return window.addEventListener("pointermove", y), window.addEventListener("pointerup", T), () => {
      window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", T);
    };
  }, []), e === null && n === null)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: r,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ c.createElement(
        qt,
        {
          image: qt.PRESENTED_IMAGE_SIMPLE,
          description: p(a, "selectRecord")
        }
      )
    );
  if (e === null && n !== null)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: r,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ c.createElement(vt, { dragRef: g, width: r }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(st, { onClose: o }), /* @__PURE__ */ c.createElement(Ps, { request: n, onJumpRecord: s }))
    );
  const i = e;
  if (i.kind === "system" && i.prompt !== void 0)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: r,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ c.createElement(vt, { dragRef: g, width: r }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(st, { onClose: o }), /* @__PURE__ */ c.createElement(Us, { record: i }))
    );
  const h = i.usage, v = i.timing, u = [];
  return u.push({
    key: "summary",
    label: p(a, "summary"),
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "#", value: String(i.index) }), /* @__PURE__ */ c.createElement(z, { label: "Kind", value: On(i, a) }), i.runIndex > 0 && l ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(i.runIndex)
      },
      "Request #",
      i.runIndex,
      " →"
    )) : null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(a, "status"),
        value: i.running ? p(a, "running") : i.isError ? p(a, "error") : p(a, "success"),
        danger: i.isError
      }
    ), i.provider ? /* @__PURE__ */ c.createElement(z, { label: "Provider", value: i.provider }) : null, i.model ? /* @__PURE__ */ c.createElement(z, { label: p(a, "model"), value: i.model }) : null, i.toolName ? /* @__PURE__ */ c.createElement(z, { label: "Tool", value: i.toolName }) : null, i.inSkill ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(a, "skillResource"),
        value: i.inSkillLoaded ? `⚡ ${i.inSkill}` : `⚡ ${i.inSkill}（${p(a, "skillBypass")}）`
      }
    ) : null, i.guidedSkill ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(a, "skillGuided"),
        value: `∈ ${i.guidedSkill}（${i.guidedReason === "slash" ? p(a, "guidedBySlash") : p(a, "guidedByLoad")}）`
      }
    ) : null, i.toolOutputChars ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(a, "outputSize"),
        value: i.toolOutputBytes ? `${Q(i.toolOutputChars)} ${p(
          a,
          "charUnit"
        )} · ${Mt(i.toolOutputBytes)} (${p(
          a,
          "beforeTruncation"
        )})` : `${Q(i.toolOutputChars)} ${p(
          a,
          "charUnit"
        )}`
      }
    ) : null, i.kind === "user" && (i.channel || i.userId) ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(a, "source"),
        value: [i.channel, i.userId].filter(Boolean).join(" · ")
      }
    ) : null, i.receipt ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(a, "channel"),
        value: i.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(a, "duration"),
        value: fe(i.timeSeconds)
      }
    ), i.note ? /* @__PURE__ */ c.createElement(G, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.spawnSession ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(a, "spawnedAgent"),
        value: i.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ c.createElement(
      jn,
      {
        size: "small",
        onClick: () => i.spawnSession && t(i.spawnSession),
        style: { marginTop: 4 }
      },
      p(a, "openChildSession")
    ) : null) : null)
  }), i.kind === "tool" ? (i.toolInput && u.push({
    key: "payload",
    label: p(a, "input"),
    children: /* @__PURE__ */ c.createElement(Se, { value: i.toolInput, json: !0 })
  }), (i.toolOutput || i.toolError) && u.push({
    key: "result",
    label: p(a, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolError ? /* @__PURE__ */ c.createElement(G, { type: "danger", style: { fontSize: 12 } }, i.toolError) : null, i.toolOutput ? /* @__PURE__ */ c.createElement(Se, { value: i.toolOutput }) : null)
  })) : (i.outputText || i.thinkingText || i.messages || i.marker || i.toolCalls && i.toolCalls.length > 0) && (i.inputNew && i.inputNew.length > 0 && u.push({
    key: "input",
    label: p(a, "inputTab"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, i.contextReset ? /* @__PURE__ */ c.createElement(G, { type: "warning", style: { fontSize: 12 } }, p(a, "contextReset")) : null, i.resetDetail ? /* @__PURE__ */ c.createElement(
      "div",
      {
        style: {
          border: "1px solid rgba(250,173,20,0.4)",
          borderRadius: 6,
          padding: "6px 8px"
        }
      },
      /* @__PURE__ */ c.createElement(
        z,
        {
          label: p(a, "resetBreakAt"),
          value: `#${i.resetDetail.breakAt + 1}`
        }
      ),
      /* @__PURE__ */ c.createElement(
        z,
        {
          label: p(a, "resetSizes"),
          value: `${i.resetDetail.beforeCount} ${p(
            a,
            "resetMsgs"
          )} · ${Q(i.resetDetail.beforeChars)} ${p(
            a,
            "charUnit"
          )} → ${i.resetDetail.afterCount} ${p(
            a,
            "resetMsgs"
          )} · ${Q(i.resetDetail.afterChars)} ${p(
            a,
            "charUnit"
          )}`
        }
      ),
      /* @__PURE__ */ c.createElement(
        z,
        {
          label: p(a, "resetRoles"),
          value: Object.keys(i.resetDetail.afterByRole).map((y) => {
            const T = i.resetDetail.beforeByRole[y] ?? 0, R = i.resetDetail.afterByRole[y] ?? 0;
            return T === R ? null : `${y} ${T}→${R}`;
          }).filter(Boolean).join(" · ") || "-"
        }
      ),
      i.resetDetail.changes.length > 0 ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ c.createElement(G, { strong: !0, style: { fontSize: 12 } }, p(a, "resetChanges")), i.resetDetail.changes.slice(0, 20).map((y, T) => /* @__PURE__ */ c.createElement(
        "div",
        {
          key: T,
          style: {
            display: "flex",
            gap: 6,
            alignItems: "baseline"
          }
        },
        /* @__PURE__ */ c.createElement(
          Ct,
          {
            color: y.status === "kept" ? "default" : y.status === "rewritten" ? "orange" : y.status === "removed" ? "red" : "green",
            style: { marginInlineEnd: 0, fontSize: 10 }
          },
          y.status
        ),
        /* @__PURE__ */ c.createElement(G, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, y.role),
        y.status === "rewritten" ? /* @__PURE__ */ c.createElement(
          G,
          {
            type: "secondary",
            style: { fontSize: 11, minWidth: 0 },
            ellipsis: !0
          },
          `${(y.oldText ?? "").slice(0, 40)} → ${(y.newText ?? "").slice(0, 40)}`
        ) : /* @__PURE__ */ c.createElement(
          G,
          {
            type: "secondary",
            style: { fontSize: 11, minWidth: 0 },
            ellipsis: !0
          },
          (y.oldText ?? y.newText ?? "").slice(
            0,
            60
          )
        )
      ))) : null
    ) : null, i.messagesMeta ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(a, "inputTotal"),
        value: `${i.messagesMeta.count} · ${Q(
          i.messagesMeta.totalChars
        )} ${p(a, "charUnit")}`
      }
    ) : null, i.inputNew.map((y, T) => /* @__PURE__ */ c.createElement("div", { key: T }, /* @__PURE__ */ c.createElement(
      "div",
      {
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(G, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, y.role),
      /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 11 } }, Q(y.chars), " ", p(a, "charUnit"), y.toolCallId ? ` · ${y.toolCallId}` : "")
    ), y.text ? /* @__PURE__ */ c.createElement(Se, { value: y.text }) : null)))
  }), u.push({
    key: "raw",
    label: p(a, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, i.inboundParts && i.inboundParts.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 12 } }, `${p(a, "inboundParts")} (${i.inboundParts.length})`), i.inboundParts.map((y, T) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: T,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(G, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, y.type.replace("Content", "")),
      /* @__PURE__ */ c.createElement(
        G,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        y.text ?? "-"
      )
    ))) : null, i.marker ? /* @__PURE__ */ c.createElement(Se, { value: i.marker }) : null, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 12 } }, `${p(a, "toolCall")} (${i.toolCalls.length})`), i.toolCalls.map((y, T) => /* @__PURE__ */ c.createElement("div", { key: y.id || T, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ c.createElement(G, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", y.name), /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 11 } }, y.id)))) : null, i.note ? /* @__PURE__ */ c.createElement(G, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.messages && i.messages.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 12 } }, `${p(a, "query")} (${i.messages.length})`), i.messages.map((y, T) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: T,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(G, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, y.role),
      /* @__PURE__ */ c.createElement(
        G,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        y.text
      )
    ))) : null, i.thinkingText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 12 } }, p(a, "thinking")), /* @__PURE__ */ c.createElement(Se, { value: i.thinkingText })) : null, i.outputText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 12 } }, p(a, "output")), /* @__PURE__ */ c.createElement(Se, { value: i.outputText })) : null)
  })), (i.startedAt !== null || h || v) && u.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Started", value: Ie(i.startedAt) }), /* @__PURE__ */ c.createElement(z, { label: "Total", value: fe(i.timeSeconds) }), v ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: "TTFT",
        value: fe(v.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: "Decoding",
        value: fe(v.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(a, "throughput"),
        value: At(
          h == null ? void 0 : h.output_tokens,
          v.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 12 } }, p(a, "noTiming")))
  }), h && u.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Input", value: Q(h.input_tokens) }), /* @__PURE__ */ c.createElement(z, { label: "Output", value: Q(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: "Cache write",
        value: Q(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: "Cache read",
        value: Q(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ c.createElement(z, { label: "Total", value: Q(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ c.createElement(z, { label: "API time", value: fe(h.time) }) : null)
  }), u.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ c.createElement(Se, { value: i.raw })
  }), /* @__PURE__ */ c.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: r,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative"
      }
    },
    /* @__PURE__ */ c.createElement(vt, { dragRef: g, width: r }),
    /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(st, { onClose: o }), /* @__PURE__ */ c.createElement(Rt, { size: "small", items: u, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Ks = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource"
}, Vs = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast"
};
function Xs({
  span: e,
  records: n,
  onJumpRecord: t,
  onClose: s
}) {
  const l = se(), o = e.endKind ? p(l, Vs[e.endKind]) : p(l, "spanOpen"), a = vs(e);
  return new Map(n.map((r) => [r.index, r])), /* @__PURE__ */ c.createElement(
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
    /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(st, { onClose: s }), /* @__PURE__ */ c.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ c.createElement(
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
    ), /* @__PURE__ */ c.createElement(G, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ c.createElement(
      Ct,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      p(l, Ks[e.trigger])
    )), /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(l, "spanStart"),
        value: Ie(e.startT)
      }
    ), /* @__PURE__ */ c.createElement(z, { label: p(l, "spanEnd"), value: o }), e.endT !== null ? /* @__PURE__ */ c.createElement(z, { label: " ", value: Ie(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(l, "spanLastActivity"),
        value: Ie(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(l, "spanDuration"),
        value: a === null ? "-" : fe(a / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: p(l, "spanLoadState"),
        value: e.bypass ? p(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ c.createElement(G, { strong: !0, style: { fontSize: 12 } }, p(l, "spanEvidence")), e.evidences.slice(0, 30).map((r, d) => /* @__PURE__ */ c.createElement(
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
      /* @__PURE__ */ c.createElement(
        Ct,
        {
          color: r.kind === "path" ? "geekblue" : r.kind === "content" ? "blue" : "default",
          style: { marginInlineEnd: 0, fontSize: 10 }
        },
        r.kind
      ),
      /* @__PURE__ */ c.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => t(r.recordIndex)
        },
        "#",
        r.recordIndex
      ),
      /* @__PURE__ */ c.createElement(G, { type: "secondary", style: { fontSize: 11 } }, r.detail)
    ))) : /* @__PURE__ */ c.createElement(
      G,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      p(l, "spanNoActivity")
    ))
  );
}
const ue = window.QwenPaw.host.React, Gs = ue.useRef, qs = ue.useState;
ue.useCallback;
ue.useMemo;
const Js = ue.useEffect, Qs = ue.useLayoutEffect, Ys = ue.useReducer;
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
function Zs(e) {
  return e ? e() : void 0;
}
function el(e, n, t) {
  const s = new Array(e);
  return new Proxy(s, {
    get(l, o, a) {
      if (typeof o == "string") {
        const r = o.charCodeAt(0);
        if (r >= 48 && r <= 57) {
          const d = +o;
          if (Number.isInteger(d) && d >= 0 && d < e) {
            let g = l[d];
            if (!g) {
              const i = n[d * 2];
              g = l[d] = {
                index: d,
                key: t(d),
                start: i,
                size: n[d * 2 + 1],
                end: i + n[d * 2 + 1],
                lane: 0
              };
            }
            return g;
          }
        }
        if (o === "length") return e;
      }
      return Reflect.get(l, o, a);
    }
  });
}
function De(e, n, t) {
  let s = t.initialDeps ?? [], l, o = !0;
  function a() {
    var r;
    const d = process.env.NODE_ENV !== "production" && !!t.key && !!((r = t.debug) != null && r.call(t));
    let g = 0;
    d && (g = Date.now());
    const i = e();
    if (!(i.length !== s.length || i.some((u, y) => s[y] !== u)))
      return l;
    s = i;
    let v = 0;
    if (d && (v = Date.now()), l = n(...i), d) {
      const u = Math.round((Date.now() - g) * 100) / 100, y = Math.round((Date.now() - v) * 100) / 100, T = y / 16, R = (k, _) => {
        for (k = String(k); k.length < _; )
          k = " " + k;
        return k;
      };
      console.info(
        `%c⏱ ${R(y, 5)} /${R(u, 5)} ms`,
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
  return a.updateDeps = (r) => {
    s = r;
  }, a;
}
function Yt(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const tl = (e, n) => Math.abs(e - n) < 1.01, nl = (e, n, t) => {
  let s;
  return function(...l) {
    e.clearTimeout(s), s = e.setTimeout(() => n.apply(this, l), t);
  };
};
let He;
const St = () => {
  if (He !== void 0) return He;
  if (typeof navigator > "u") return He = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return He = !0;
  const e = navigator.maxTouchPoints;
  return He = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Zt = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, sl = (e) => e, ll = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - n + 1, l = new Array(s);
  for (let o = 0; o < s; o++)
    l[o] = n + o;
  return l;
}, ol = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const l = (a) => {
    const { width: r, height: d } = a;
    n({ width: Math.round(r), height: Math.round(d) });
  };
  if (l(Zt(t)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((a) => {
    const r = () => {
      const d = a[0];
      if (d != null && d.borderBoxSize) {
        const g = d.borderBoxSize[0];
        if (g) {
          l({ width: g.inlineSize, height: g.blockSize });
          return;
        }
      }
      l(Zt(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, lt = {
  passive: !0
}, il = typeof window > "u" ? !0 : "onscrollend" in window, rl = (e, n, t) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && il;
  let a = 0;
  const r = o ? null : nl(
    l,
    () => n(a, !1),
    e.options.isScrollingResetDelay
  ), d = (h) => () => {
    a = t(s), r == null || r(), n(a, h);
  }, g = d(!0), i = d(!1);
  return s.addEventListener("scroll", g, lt), o && s.addEventListener("scrollend", i, lt), () => {
    s.removeEventListener("scroll", g), o && s.removeEventListener("scrollend", i);
  };
}, al = (e, n) => rl(e, n, (t) => {
  const { horizontal: s, isRtl: l } = e.options;
  return s ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), cl = (e, n, t) => {
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
}, ul = (e, {
  adjustments: n = 0,
  behavior: t
}, s) => {
  var l, o;
  (o = (l = s.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [s.options.horizontal ? "left" : "top"]: e + n,
    behavior: t
  });
}, dl = ul;
class hl {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, s, l;
      return ((l = (s = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : s.now) == null ? void 0 : l.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const s = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const a = () => {
            const r = o.target, d = this.indexFromElement(r);
            if (!r.isConnected) {
              this.observer.unobserve(r);
              for (const [g, i] of this.elementsCache)
                if (i === r) {
                  this.elementsCache.delete(g);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(d) && this.resizeItem(
              d,
              this.options.measureElement(r, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
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
        getItemKey: sl,
        rangeExtractor: ll,
        onChange: () => {
        },
        measureElement: cl,
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
        u !== void 0 && (o[v] = u);
      }
      const a = this.options;
      let r = null, d = null, g = !1;
      if (a !== void 0 && a.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const v = a.count, u = o.count, y = this.getMeasurements(), T = v > 0 ? ((s = y[0]) == null ? void 0 : s.key) ?? a.getItemKey(0) : null, R = v > 0 ? ((l = y[v - 1]) == null ? void 0 : l.key) ?? a.getItemKey(v - 1) : null;
        if (u !== v || v > 0 && u > 0 && (o.getItemKey(0) !== T || o.getItemKey(u - 1) !== R)) {
          g = !0;
          const F = v > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? y[0] : null;
          F && (r = [F.key, this.getScrollOffset() - F.start]);
          const D = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          D && u > v && this.isAtEnd(a.scrollEndThreshold) && (v === 0 || o.getItemKey(u - 1) !== R) && (d = D);
        }
      }
      this.options = o, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let i = !1, h = 0;
      if (r && this.scrollOffset !== null) {
        const [v, u] = r, y = this.getMeasurements(), { count: T, getItemKey: R } = this.options;
        let k = 0;
        for (; k < T && R(k) !== v; )
          k++;
        if (k < T) {
          const _ = y[k];
          if (_) {
            const F = Math.max(0, _.start + u);
            F !== this.scrollOffset && (h = F - this.scrollOffset, this.scrollOffset = F, i = !0);
          }
        }
      }
      (i || d) && (this.pendingScrollAnchor = [
        i ? r[0] : null,
        i ? r[1] : 0,
        d,
        h
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
          this.options.observeElementOffset(this, (o, a) => {
            if (a && this._intendedScrollOffset === null && o === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(o - this._intendedScrollOffset) < 1.5 && (o = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const r = this.getScrollOffset();
            this.scrollDirection = a ? r === o ? this.scrollDirection : r < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = a, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, a = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, r = () => {
            this._iosTouching = !1, !(!St() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            a,
            lt
          ), o.addEventListener(
            "touchend",
            r,
            lt
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", a), o.removeEventListener("touchend", r), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, a, r, d] = l;
        o !== null && !r && (St() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? d !== 0 && (this._iosDeferredAdjustment += d) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), r && this.scrollToEnd({ behavior: r });
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
      (t, s, l, o, a, r, d, g) => (this.prevLanes !== void 0 && this.prevLanes !== r && (this.lanesChangedFlag = !0), this.prevLanes = r, this.pendingMin = null, {
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: a,
        lanes: r,
        laneAssignmentMode: d,
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
        enabled: a,
        lanes: r,
        laneAssignmentMode: d,
        gap: g
      }, i) => {
        const h = this.itemSizeCache;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const k of this.laneAssignments.keys())
            k >= t && this.laneAssignments.delete(k);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((k) => {
          this.itemSizeCache.set(k.key, k.size);
        }));
        const v = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), r === 1) {
          const k = t * 2;
          let _ = this._flatMeasurements;
          if (!_ || _.length < k) {
            const H = new Float64Array(k);
            _ && v > 0 && H.set(_.subarray(0, v * 2)), _ = H, this._flatMeasurements = _;
          }
          let F;
          if (v === 0)
            F = s + l;
          else {
            const H = v - 1;
            F = _[H * 2] + _[H * 2 + 1] + g;
          }
          for (let H = v; H < t; H++) {
            const Y = o(H), w = h.get(Y), N = typeof w == "number" ? w : this.options.estimateSize(H);
            _[H * 2] = F, _[H * 2 + 1] = N, F += N + g;
          }
          const D = el(t, _, o);
          return this.measurementsCache = D, D;
        }
        const u = this.measurementsCache.slice(0, v), y = new Array(r).fill(
          void 0
        ), T = new Float64Array(r);
        let R = 0;
        for (let k = 0; k < v; k++) {
          const _ = u[k];
          _ && (y[_.lane] === void 0 && R++, y[_.lane] = k, T[_.lane] = _.end);
        }
        for (let k = v; k < t; k++) {
          const _ = o(k), F = this.laneAssignments.get(k);
          let D, H;
          const Y = d === "estimate" || h.has(_);
          if (F !== void 0 && this.options.lanes > 1) {
            D = F;
            const Z = y[D], ee = Z !== void 0 ? u[Z] : void 0;
            H = ee ? ee.end + g : s + l;
          } else if (R === r) {
            let Z = 0, ee = T[0], te = y[0];
            for (let f = 1; f < r; f++) {
              const m = T[f];
              (m < ee || m === ee && y[f] < te) && (Z = f, ee = m, te = y[f]);
            }
            D = Z, H = ee + g, Y && this.laneAssignments.set(k, D);
          } else
            D = k % this.options.lanes, H = s + l, Y && this.laneAssignments.set(k, D);
          const w = h.get(_), N = typeof w == "number" ? w : this.options.estimateSize(k), U = H + N;
          u[k] = {
            index: k,
            start: H,
            size: N,
            end: U,
            key: _,
            lane: D
          }, y[D] === void 0 && R++, y[D] = k, T[D] = U;
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
      (t, s, l, o) => t.length === 0 || s === 0 ? (this.range = null, null) : (this.range = fl(
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
      (t, s, l, o, a) => o === null || a === null ? [] : t({
        startIndex: o,
        endIndex: a,
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
        ), a = Math.max(0, l - o), r = Math.min(
          this.options.count - 1,
          l + o
        );
        return t >= a && t <= r;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((a, r) => {
          a.isConnected || (this.observer.unobserve(a), this.elementsCache.delete(r));
        });
        return;
      }
      const s = this.indexFromElement(t), l = this.options.getItemKey(s), o = this.elementsCache.get(l);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, s) => {
      var l, o;
      if (t < 0 || t >= this.options.count) return;
      let a, r, d;
      const g = this._flatMeasurements;
      if (this.options.lanes === 1 && g !== null)
        d = this.options.getItemKey(t), r = g[t * 2], a = g[t * 2 + 1];
      else {
        const v = this.measurementsCache[t];
        if (!v) return;
        d = v.key, r = v.start, a = v.size;
      }
      const i = this.itemSizeCache.get(d) ?? a, h = s - i;
      if (h !== 0) {
        const v = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, u = v ? this.getTotalSize() : 0, y = this.getScrollOffset() + this.scrollAdjustments, R = !this.itemSizeCache.has(d) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          r < y
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          r + i <= y && this.scrollDirection !== "backward"
        ), k = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: d,
            start: r,
            size: a,
            end: r + a,
            lane: 0
          },
          h,
          this
        ) : R);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(d, s), this.itemSizeCacheVersion++;
        let _ = !1;
        v ? _ = this.applyScrollAdjustment(
          this.getTotalSize() - u
        ) : k && (_ = this.applyScrollAdjustment(h)), this.notify(_);
      }
    }, this.getVirtualItems = De(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, s) => {
        const l = [];
        for (let o = 0, a = t.length; o < a; o++) {
          const r = t[o], d = s[r];
          l.push(d);
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
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, a = Bn(
        0,
        s.length - 1,
        o ? (r) => l[r * 2] : (r) => Yt(s[r]).start,
        t
      );
      return Yt(s[a]);
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
      const o = this.getSize(), a = this.getScrollOffset();
      s === "auto" && (s = t >= a + o ? "end" : "start"), s === "center" ? t += (l - o) / 2 : s === "end" && (t -= o);
      const r = this.getMaxScrollOffset();
      return Math.max(Math.min(r, t), 0);
    }, this.getOffsetForIndex = (t, s = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getSize(), o = this.getScrollOffset(), a = this.measurementsCache[t];
      if (!a) return;
      if (s === "auto")
        if (a.end >= o + l - this.options.scrollPaddingEnd)
          s = "end";
        else if (a.start <= o + this.options.scrollPaddingStart)
          s = "start";
        else
          return [o, s];
      if (s === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), s];
      const r = s === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(r, s, a.size),
        s
      ];
    }, this.scrollToOffset = (t, { align: s = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(t, s), a = this.now();
      this.scrollState = {
        index: null,
        align: s,
        behavior: l,
        startedAt: a,
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
      const [a, r] = o, d = this.now();
      this.scrollState = {
        index: t,
        align: r,
        behavior: l,
        startedAt: d,
        lastTargetOffset: a,
        stableFrames: 0
      }, this._scrollToOffset(a, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
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
        const o = s.length - 1, a = this._flatMeasurements;
        a != null ? l = a[o * 2] + a[o * 2 + 1] : l = ((t = s[o]) == null ? void 0 : t.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let a = s.length - 1;
        for (; a >= 0 && o.some((r) => r === null); ) {
          const r = s[a];
          o[r.lane] === null && (o[r.lane] = r.end), a--;
        }
        l = Math.max(...o.filter((r) => r !== null));
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
    return n === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", n), St() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += n, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = s ? s[0] : this.scrollState.lastTargetOffset, o = 1, a = l !== this.scrollState.lastTargetOffset;
    if (!a && tl(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, a) {
      const r = this.getSize() || 600, d = Math.abs(l - this.getScrollOffset()), g = this.scrollState.behavior === "smooth" && d > r;
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
function pl(e, n, t) {
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
function fl(e, n, t, s, l) {
  const o = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: o };
  if (s === 1 && l !== null) {
    const g = pl(
      l,
      o,
      t
    );
    let i = g;
    const h = t + n;
    for (; i < o && l[i * 2] + l[i * 2 + 1] < h; )
      i++;
    return { startIndex: g, endIndex: i };
  }
  let r = Bn(0, o, (g) => e[g].start, t), d = r;
  if (s === 1)
    for (; d < o && e[d].end < t + n; )
      d++;
  else if (s > 1) {
    const g = Array(s).fill(0);
    for (; d < o && g.some((h) => h < t + n); ) {
      const h = e[d];
      g[h.lane] = h.end, d++;
    }
    const i = Array(s).fill(t + n);
    for (; r >= 0 && i.some((h) => h >= t); ) {
      const h = e[r];
      i[h.lane] = h.start, r--;
    }
    r = Math.max(0, r - r % s), d = Math.min(o, d + (s - 1 - d % s));
  }
  return { startIndex: r, endIndex: d };
}
const Et = typeof document < "u" ? Qs : Js;
function ml({
  useFlushSync: e = !0,
  directDomUpdates: n = !1,
  directDomUpdatesMode: t = "transform",
  ...s
}) {
  const l = Ys((i) => i + 1, 0)[1], o = Gs({
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
  const a = (i) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    const v = i.getTotalSize();
    if (v !== h.lastSize) {
      h.lastSize = v;
      const u = i.options.horizontal ? "width" : "height";
      h.container.style[u] = `${v}px`;
    }
  }, r = (i) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    a(i);
    const v = !!i.options.horizontal, u = h.mode === "transform", y = v ? "left" : "top", T = i.options.scrollMargin, R = i.getVirtualItems();
    for (const k of R) {
      const _ = k.start - T, F = i.elementsCache.get(k.key);
      F && h.lastPositions.get(F) !== _ && (h.lastPositions.set(F, _), u ? F.style.transform = v ? `translate3d(${_}px, 0, 0)` : `translate3d(0, ${_}px, 0)` : F.style[y] = `${_}px`);
    }
  }, d = {
    ...s,
    onChange: (i, h) => {
      var v;
      const u = o.current;
      let y = !0;
      if (u.enabled) {
        r(i);
        const T = i.range, R = u.prevRange;
        y = !R || R.isScrolling !== i.isScrolling || R.startIndex !== (T == null ? void 0 : T.startIndex) || R.endIndex !== (T == null ? void 0 : T.endIndex), y && (u.prevRange = T ? {
          startIndex: T.startIndex,
          endIndex: T.endIndex,
          isScrolling: i.isScrolling
        } : null);
      }
      y && (e && h ? Zs(l) : l()), (v = s.onChange) == null || v.call(s, i, h);
    }
  }, [g] = qs(() => {
    const i = new hl(d);
    return Object.assign(i, {
      containerRef: (h) => {
        const v = o.current;
        if (v.container = h, v.lastSize = null, h && v.enabled) {
          const u = i.getTotalSize();
          v.lastSize = u;
          const y = i.options.horizontal ? "width" : "height";
          h.style[y] = `${u}px`;
        }
      }
    });
  });
  return g.setOptions(d), Et(() => g._didMount(), []), Et(() => (a(g), g._willUpdate())), Et(() => {
    r(g);
  }), g;
}
function gl(e) {
  return ml({
    observeElementRect: ol,
    observeElementOffset: al,
    scrollToFn: dl,
    ...e
  });
}
const rt = window.QwenPaw.host, C = rt.React, { useRef: yl } = C, { Tag: Me } = rt.antd, { Text: ge } = rt.antd.Typography, {
  CaretRightOutlined: vl,
  CloseCircleOutlined: Sl,
  FileTextOutlined: El,
  RobotOutlined: bl,
  RocketOutlined: xl,
  SafetyOutlined: kl,
  SendOutlined: wl,
  SettingOutlined: Tl,
  ToolOutlined: _l,
  UserOutlined: Il
} = rt.antdIcons, Ml = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Cl = {
  user: /* @__PURE__ */ C.createElement(Il, null),
  message: /* @__PURE__ */ C.createElement(bl, null),
  tool: /* @__PURE__ */ C.createElement(_l, null),
  system: /* @__PURE__ */ C.createElement(Tl, null)
}, en = {
  approval: { color: "volcano", icon: /* @__PURE__ */ C.createElement(kl, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ C.createElement(wl, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ C.createElement(xl, null) },
  header: { color: "green", icon: /* @__PURE__ */ C.createElement(El, null) },
  error: { color: "red", icon: /* @__PURE__ */ C.createElement(Sl, null) }
}, zl = {
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
}, $l = 150, zt = 26, Pn = 34, nn = 9, sn = 30;
function Ol(e) {
  const n = se(), t = tn[e] ?? tn.unknown;
  return n === "zh-CN" ? t.zh : t.en;
}
const Al = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Rl(e, n) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e.inboundParts ?? []) {
    const l = Al[s.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([s, l]) => `${p(n, s)}×${l}`).join(" ");
}
function Ll(e, n) {
  const t = e.receipt, s = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${p(n, "replySent")}${s} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${p(n, "chars")}`;
}
function ln({
  record: e,
  selected: n,
  dimmed: t,
  multiRequest: s,
  onSelect: l
}) {
  var r, d;
  const o = e.usage, a = o && (o.input_tokens || o.output_tokens) ? `${Q(o.input_tokens)}→${Q(
    o.output_tokens
  )}` : null;
  return /* @__PURE__ */ C.createElement(
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
        height: zt,
        cursor: "pointer",
        background: n ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1,
        borderLeft: e.skillSpanHue !== void 0 ? `3px solid ${e.skillSpanBypass ? "rgba(250,140,22,0.9)" : `hsl(${e.skillSpanHue}, 65%, 55%)`}` : "3px solid transparent"
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
      s && /* @__PURE__ */ C.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ C.createElement(
      Me,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((r = en[e.markerKind]) == null ? void 0 : r.color) || Ml[e.kind] || "default",
        icon: e.markerKind && ((d = en[e.markerKind]) == null ? void 0 : d.icon) || Cl[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? p(se(), "skillLoadKind") : On(e, se())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ C.createElement(
      Me,
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
    e.inSkill ? /* @__PURE__ */ C.createElement(
      Me,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${p(se(), "skillBypass")}`,
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
    ) : e.guidedSkill ? /* @__PURE__ */ C.createElement(
      Me,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? p(se(), "guidedBySlash") : p(se(), "guidedByLoad")}`,
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0,
          maxWidth: 160,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: "#2f54eb",
          background: "rgba(47,84,235,0.06)",
          borderColor: "rgba(47,84,235,0.25)"
        }
      },
      "∈",
      e.guidedSkill
    ) : null,
    e.kind === "user" && e.skillName ? /* @__PURE__ */ C.createElement(
      Me,
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
      e.receipt ? /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 12 } }, Ll(e, se())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ge, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ C.createElement(ge, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 12 } }, ` · ${p(se(), "skillLoaded")} ${Q(
        e.toolOutputChars
      )} ${p(se(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ge, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ C.createElement(
        ge,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(
        ge,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 11 } }, ` ${Rl(e, se()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ C.createElement(ge, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
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
      a ? /* @__PURE__ */ C.createElement("span", { style: { color: "#1677ff" } }, a) : null,
      a ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && fe(e.timeSeconds)
    )
  );
}
function Dl({
  turn: e,
  collapsed: n,
  selected: t,
  cellCount: s,
  onToggle: l,
  onSelect: o
}) {
  const a = se();
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Pn }
    },
    /* @__PURE__ */ C.createElement(
      "span",
      {
        onClick: (r) => {
          r.stopPropagation(), o();
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
      /* @__PURE__ */ C.createElement(
        vl,
        {
          onClick: (r) => {
            r.stopPropagation(), l();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: n ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ C.createElement(ge, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 11 } }, fe(e.durationMs / 1e3)),
      /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 11 } }, s, " ", p(a, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? /* @__PURE__ */ C.createElement(
        Me,
        {
          color: "geekblue",
          title: e.skillsUsed.join(", "),
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        "📚 ",
        e.skillsUsed.slice(0, 2).join(" "),
        e.skillsUsed.length > 2 ? ` +${e.skillsUsed.length - 2}` : ""
      ) : null,
      /* @__PURE__ */ C.createElement(
        Me,
        {
          color: zl[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Ol(e.status)
      )
    )
  );
}
function Nl({
  turns: e,
  selectedIndex: n,
  selectedTurn: t,
  collapsedTurns: s,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: a,
  onSelectedTurnChange: r,
  onToggleTurn: d,
  callsCollapsed: g,
  hasOlderRecords: i,
  loadingOlder: h,
  onLoadOlder: v,
  initialRecord: u,
  emptyText: y
}) {
  const T = se(), R = yl(null), k = e.filter((w) => w.turn !== null), _ = k.length > 1, F = C.useMemo(() => {
    var N;
    const w = [];
    i && w.push({
      key: "load-older",
      height: sn,
      type: "load-older"
    }), u && (w.push({
      key: "initial",
      height: zt,
      type: "initial",
      record: u
    }), w.push({
      key: "initial-divider",
      height: nn,
      type: "divider"
    }));
    for (const U of k) {
      const Z = U.turn;
      if (w.push({
        key: `turn-${Z}`,
        height: Pn,
        type: "boundary",
        turn: U
      }), !s.has(Z))
        for (const ee of ((N = U.groups[0]) == null ? void 0 : N.cells) ?? [])
          g && ee.kind === "tool" || w.push({
            key: `rec-${ee.index}`,
            height: zt,
            type: "record",
            record: ee
          });
    }
    return w;
  }, [
    k,
    s,
    g,
    i,
    u
  ]), D = C.useCallback(
    (w) => l !== null && !l.has(w.index) || o !== null && !o.has(w.index),
    [l, o]
  ), H = (w) => {
    var N;
    switch (w.type) {
      case "load-older":
        return /* @__PURE__ */ C.createElement("div", { style: { textAlign: "center", height: sn } }, /* @__PURE__ */ C.createElement(
          "button",
          {
            type: "button",
            onClick: v,
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
          h ? "…" : `⋯ ${p(T, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ C.createElement(
          "div",
          {
            style: {
              height: nn,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const U = w.record;
        return /* @__PURE__ */ C.createElement(
          ln,
          {
            record: U,
            selected: n === U.index,
            dimmed: D(U),
            multiRequest: _,
            onSelect: () => a(U.index)
          }
        );
      }
      case "boundary": {
        const U = w.turn, Z = U.turn;
        return /* @__PURE__ */ C.createElement(
          Dl,
          {
            turn: U,
            collapsed: s.has(Z),
            selected: t === Z,
            cellCount: ((N = U.groups[0]) == null ? void 0 : N.cells.length) ?? 0,
            onToggle: () => d(Z),
            onSelect: () => r(Z)
          }
        );
      }
      case "record":
      default: {
        const U = w.record;
        return /* @__PURE__ */ C.createElement(
          ln,
          {
            record: U,
            selected: n === U.index,
            dimmed: D(U),
            multiRequest: _,
            onSelect: () => a(U.index)
          }
        );
      }
    }
  };
  if (F.length === 0)
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
        y ?? p(T, "noSessions")
      )
    );
  const Y = F.length <= $l ? /* @__PURE__ */ C.createElement("div", null, F.map((w) => H(w))) : /* @__PURE__ */ C.createElement(
    jl,
    {
      rows: F,
      scrollRef: R,
      renderRow: H
    }
  );
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      ref: R,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    Y
  );
}
function jl({
  rows: e,
  scrollRef: n,
  renderRow: t
}) {
  const s = gl({
    count: e.length,
    getScrollElement: () => n.current,
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
function Bl(e) {
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
function Pl(e) {
  if (!(typeof e != "string" || !e))
    try {
      const n = JSON.parse(e);
      if (typeof n.skill == "string" && n.skill)
        return n.skill;
    } catch {
    }
}
function Fn(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function Fl(e) {
  const n = [];
  for (const t of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const s = t[1].match(/<name>([^<]+)<\/name>/), l = t[1].match(/<dir>([^<]+)<\/dir>/);
    s && l && l[1].trim() && n.push([Fn(l[1].trim()), s[1].trim()]);
  }
  return n.sort((t, s) => s[0].length - t[0].length), n;
}
function rn(e) {
  const n = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return n ? n[1].trim() : null;
}
function we(e, n = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Hl(e) {
  var ee, te;
  const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = [];
  let r = "";
  const d = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  let h = [];
  const v = /* @__PURE__ */ new Set(), u = [], y = new gs(), T = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  let _ = [], F = [], D = 0, H = 0;
  const Y = (f) => f.groups[0].cells, w = (f, m) => {
    const S = o.get(f);
    S ? S.push(m) : o.set(f, [m]);
  }, N = (f, m) => {
    if (!f)
      if (r)
        f = r;
      else {
        a.push(m);
        return;
      }
    const S = t.get(f);
    if (S)
      m.runIndex = S.turn ?? 0, Y(S).push(m);
    else if (r) {
      const x = t.get(r);
      x ? (m.runIndex = x.turn ?? 0, Y(x).push(m)) : w(f, m);
    } else
      w(f, m);
  }, U = (f, m) => {
    const S = o.get(m);
    if (S) {
      for (const x of S) Y(f).push(x);
      o.delete(m);
    }
  };
  for (const f of e) {
    const m = bt(f);
    switch (f.type) {
      case "run/start": {
        H += 1, u.length = 0, d.set(
          f.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const S = {
          turn: H,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${H}`, cells: [] }]
        };
        t.set(f.run_id, S), n.push(S), r = f.run_id, U(S, f.run_id);
        for (const A of a.splice(0))
          A.runIndex = H, Y(S).push(A);
        const x = Array.isArray(m.messages) ? m.messages : [], M = String(m.query ?? "");
        let W = typeof m.slash_skill == "string" && m.slash_skill ? m.slash_skill : rn(M);
        !W && x.length > 0 && (W = rn(String(((ee = x[0]) == null ? void 0 : ee.text) ?? ""))), W && (v.add(W), u.push([W, "slash"]), y.onRunStart(), y.onSlashSkill(
          W,
          f.seq,
          de(f.t) ?? 0
        ), T.set(`${W}#${f.seq}`, S));
        const O = {
          index: ++D,
          runIndex: H,
          runId: f.run_id,
          kind: "user",
          text: we(M) || we((te = x.at(-1)) == null ? void 0 : te.text),
          messages: x,
          timeSeconds: 0,
          startedAt: de(f.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: W ?? void 0,
          model: void 0
        };
        g.set(f.run_id, O), Y(S).push(O);
        break;
      }
      case "run/end": {
        const S = t.get(f.run_id);
        r === f.run_id && (r = ""), u.length = 0, y.onRunEnd(f.seq, de(f.t) ?? 0), d.delete(f.run_id), g.delete(f.run_id);
        const x = String(m.status ?? "unknown");
        if (S && (S.status = x, S.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), x === "error" && m.error) {
          const M = S ?? {
            turn: null,
            status: x,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || n.push(M), M.groups[0].cells.push({
            index: ++D,
            runIndex: H,
            runId: f.run_id,
            kind: "system",
            markerKind: "error",
            text: we(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: de(f.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [f]
          });
        }
        break;
      }
      case "agent/spawn": {
        const S = typeof m.child_session_id == "string" ? m.child_session_id : void 0, x = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        N(f.run_id, {
          index: ++D,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${x} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: de(f.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: x,
          raw: [f]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(m.parts) ? m.parts : [], x = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, M = S.map((ne) => ({
          type: String(ne.type ?? "?"),
          text: typeof ne.text == "string" ? ne.text : void 0
        })), W = d.get(f.run_id) ?? "", O = x && typeof x.user_id == "string" && x.user_id ? x.user_id : void 0, A = we(
          M.map((ne) => ne.text ?? "").filter(Boolean).join(`
`)
        ), J = g.get(f.run_id);
        J && !J.inboundParts ? (J.inboundParts = M, J.channel = W || void 0, J.userId = O, J.raw = [
          ...J.raw ?? [],
          f
        ], J.text || (J.text = A)) : N(f.run_id, {
          index: ++D,
          runIndex: 0,
          runId: f.run_id,
          kind: "user",
          text: A || "📥",
          timeSeconds: 0,
          startedAt: de(f.t) ?? 0,
          isError: !1,
          running: !1,
          channel: W || void 0,
          userId: O,
          inboundParts: M,
          raw: [f]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof m.text == "string" ? m.text : "";
        N(f.run_id, {
          index: ++D,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: de(f.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: S || void 0,
          receipt: {
            channel: d.get(f.run_id) || void 0,
            chars: S.length
          },
          raw: [f]
        });
        break;
      }
      case "approval/asked": {
        N(f.run_id, {
          index: ++D,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(m.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: de(f.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [f]
        });
        break;
      }
      case "approval/decided": {
        const S = String(m.decision ?? "?"), x = m.tool_name ? String(m.tool_name) : "";
        N(f.run_id, {
          index: ++D,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "approval",
          text: x ? `${x} → ${S}` : S,
          timeSeconds: 0,
          startedAt: de(f.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [f]
        });
        break;
      }
      case "llm/header": {
        const S = typeof m.sha256 == "string" ? m.sha256 : "", x = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, M = m.reason === "changed" ? "changed" : "initial", W = typeof m.system_prompt == "string" ? m.system_prompt : "", O = Array.isArray(m.tools) ? m.tools : [], A = Array.isArray(m.schemas) ? m.schemas : void 0;
        N(f.run_id, {
          index: ++D,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "header",
          text: M === "initial" ? `⚙ ${W ? `System Prompt (${W.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: de(f.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: W,
          prevPrompt: i.get(x ?? ""),
          headerTools: O,
          headerReason: M,
          sha: S,
          prevSha: x,
          schemas: A,
          raw: [f]
        }), S && i.set(S, W), W && (h = Fl(W));
        break;
      }
      case "llm/call": {
        const S = bt(f), x = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, M = S.messages_meta, W = M && typeof M == "object" ? {
          count: typeof M.count == "number" ? M.count : 0,
          totalChars: typeof M.total_chars == "number" ? M.total_chars : 0,
          charsByRole: on(M.chars_by_role) ? M.chars_by_role : {},
          countByRole: on(M.count_by_role) ? M.count_by_role : {},
          maxToolChars: typeof M.max_tool_chars == "number" ? M.max_tool_chars : 0
        } : void 0, O = Bl(S.messages_new);
        let A;
        if (S.context_reset === !0) {
          const K = (O ?? []).map(
            (ce) => ({
              role: ce.role,
              chars: ce.chars,
              text: ce.text
            })
          );
          let V;
          _.length > 0 || K.length === 0 ? V = _ : V = F.map((ce) => ({
            role: ce.role,
            text: ce.text
          })), A = Ts(V, K), W && (A.afterChars = W.totalChars);
        }
        O && (_ = S.context_reset === !0 ? O.map((K) => ({
          role: K.role,
          chars: K.chars,
          text: K.text
        })) : [
          ..._,
          ...O.map((K) => ({
            role: K.role,
            chars: K.chars,
            text: K.text
          }))
        ]), F = Array.isArray(S.messages) ? S.messages.map((K) => ({
          role: K.role,
          text: K.text
        })) : [];
        const J = {
          index: ++D,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: de(f.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: W,
          inputNew: O,
          contextReset: S.context_reset === !0,
          resetDetail: A,
          options: x
        };
        N(f.run_id, J);
        const ne = s.get(f.run_id) ?? [];
        ne.push({ cell: J, callData: S, call: f }), s.set(f.run_id, ne);
        break;
      }
      case "llm/result": {
        const S = s.get(f.run_id), x = S == null ? void 0 : S.shift(), M = (x == null ? void 0 : x.callData) ?? {}, W = typeof m.duration_ms == "number" ? m.duration_ms : null, O = m.usage ?? void 0, A = m.timing, J = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, V = {
          text: (m.error ? we(String(m.error)) : we(String(m.text ?? ""))) || (J && J.length > 0 ? `🛠 ${J.map((ce) => ce.name).join(", ")}` : ""),
          timeSeconds: W === null ? null : W / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: O,
          timing: A,
          toolCalls: J,
          note: m.note ? String(m.note) : void 0
        };
        x ? (Object.assign(x.cell, V), x.cell.model = String(
          m.model ?? M.model ?? x.cell.model
        ), x.cell.raw = [
          ...x.call ? [x.call] : [],
          f
        ]) : N(f.run_id, {
          index: ++D,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          startedAt: de(f.t) ?? 0,
          model: String(m.model ?? M.model ?? "unknown"),
          ...V
        });
        break;
      }
      case "tool/call": {
        const S = bt(f), x = String(S.name ?? "?"), M = x === "Skill" ? Pl(S.input) : void 0;
        if (M) {
          v.add(M), u.push([M, "load"]);
          const oe = y.onSkillLoad(
            M,
            f.seq,
            de(f.t) ?? 0
          ), ye = t.get(f.run_id);
          ye && T.set(oe, ye);
        }
        const W = S.input ? String(S.input) : void 0;
        let O;
        if (!M && W) {
          const oe = typeof S.skill_resource == "string" ? S.skill_resource : void 0;
          oe && (O = oe);
        }
        if (!M && !O && W && h.length > 0) {
          const oe = Fn(W);
          for (const [ye, ke] of h)
            if (oe.includes(ye)) {
              O = ke;
              break;
            }
        }
        let A, J;
        if (!M && !O && W && R.size > 0) {
          const oe = bs(W, R);
          oe && (A = oe.skill, J = oe.feature);
        }
        let ne, K;
        if (!M && !O && !A && u.length > 0) {
          const [oe, ye] = u[u.length - 1];
          ne = oe, K = ye;
        }
        const V = y.onToolCall({
          attribution: O ? { skill: O, kind: "path", detail: "skill dir in input" } : A ? {
            skill: A,
            kind: "content",
            detail: `“${J}” in input (skill doc)`
          } : ne ? {
            skill: ne,
            kind: "temporal",
            detail: K === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: D + 1,
          seq: f.seq,
          t: de(f.t) ?? 0
        });
        if (V && !T.has(V)) {
          const oe = t.get(f.run_id);
          oe && T.set(V, oe);
        }
        const ce = {
          index: ++D,
          runIndex: 0,
          runId: f.run_id,
          kind: "tool",
          text: M ? `📚 ${M}` : `${x}(${we(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: de(f.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: x,
          skillName: M,
          inSkill: O,
          inSkillLoaded: O ? v.has(O) : void 0,
          guidedSkill: ne ?? A,
          guidedReason: K ?? (A ? "load" : void 0),
          skillSpanId: V ?? void 0,
          toolInput: S.input ? String(S.input) : void 0
        };
        N(f.run_id, ce);
        const me = l.get(f.run_id) ?? [];
        me.push({ cell: ce, callData: S, call: f }), l.set(f.run_id, me);
        break;
      }
      case "tool/result": {
        const S = l.get(f.run_id), x = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let M;
        if (S) {
          const K = x ? S.findIndex(
            (V) => V.callData.tool_call_id === x
          ) : -1;
          K >= 0 ? M = S.splice(K, 1)[0] : M = S.shift();
        }
        const W = typeof m.duration_ms == "number" ? m.duration_ms : null, O = m.ok !== !1 && !m.error, A = m.output ? String(m.output) : void 0, J = A ? ` → ${we(A, 60)}` : "", ne = {
          timeSeconds: W === null ? null : W / 1e3,
          isError: !O,
          running: !1,
          toolOutput: A,
          toolOutputChars: typeof m.output_chars == "number" ? m.output_chars : void 0,
          toolOutputBytes: typeof m.output_bytes == "number" ? m.output_bytes : void 0,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        if (M) {
          if (Object.assign(M.cell, ne), !M.cell.skillName)
            M.cell.text = `${M.cell.text}${J}`;
          else if (A) {
            const K = typeof m.skill_sha == "string" ? m.skill_sha : null;
            K && k.get(M.cell.skillName) === K || (R.set(
              M.cell.skillName,
              Es(A)
            ), K && k.set(M.cell.skillName, K));
          }
          M.cell.raw = [
            ...M.call ? [M.call] : [],
            f
          ];
        } else
          N(f.run_id, {
            index: ++D,
            runIndex: 0,
            runId: f.run_id,
            kind: "tool",
            text: `?${J}`,
            startedAt: de(f.t) ?? 0,
            ...ne
          });
        break;
      }
    }
  }
  for (const [f, m] of o) {
    const S = t.get(f);
    if (S) {
      for (const x of m) Y(S).push(x);
      o.delete(f);
    }
  }
  for (const f of n) {
    const m = [];
    for (const S of f.groups)
      for (const x of S.cells)
        x.skillName && !m.includes(x.skillName) && m.push(x.skillName);
    m.length > 0 && (f.skillsUsed = m);
  }
  const Z = /* @__PURE__ */ new Map();
  for (const f of n)
    for (const m of f.groups)
      for (const S of m.cells) Z.set(S.index, S);
  for (const f of y.spans()) {
    const m = T.get(f.id);
    m && (m.skillSpans ?? (m.skillSpans = [])).push(f);
    for (const S of f.attributedIndexes) {
      const x = Z.get(S);
      x && (x.skillSpanId = f.id, x.skillSpanHue = f.colorHue, x.skillSpanBypass = f.bypass);
    }
  }
  return n;
}
function an(e) {
  return e.flatMap((n) => n.groups.flatMap((t) => t.cells));
}
function Ul(e) {
  var a;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const n = e[0], t = ((a = n.groups[0]) == null ? void 0 : a.cells) ?? [], s = t.findIndex(
    (r) => r.kind === "system" && r.headerReason === "initial" && r.prompt !== void 0
  );
  if (s < 0) return { initial: null, turns: [...e] };
  const l = t[s], o = {
    ...n,
    groups: [
      {
        ...n.groups[0],
        cells: t.filter((r, d) => d !== s)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const he = {
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
}, cn = "agent-trace-timeline-styles", Wl = `
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
let xt = !1;
function Kl() {
  if (xt || typeof document > "u") return;
  if (document.getElementById(cn)) {
    xt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = cn, e.textContent = Wl, document.head.appendChild(e), xt = !0;
}
function kt(e) {
  return _s(e);
}
function Hn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function un(e) {
  return e != null && Number.isFinite(e);
}
function Un(e) {
  if (!un(e.startedAt)) return null;
  const n = un(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + n };
}
function Wn(e, n = "sequence") {
  if (n !== "sequence")
    return Vl(
      e,
      n === "duration" || n === "actual",
      n === "duration"
    );
  const t = [], s = [];
  for (const l of e) {
    const o = l.groups.flatMap((a) => a.cells);
    o.length !== 0 && (l.turn !== null && s.push({
      turn: l.turn,
      time: t.length
    }), t.push(
      ...o.map(
        (a, r) => ({
          start: t.length + r,
          end: t.length + r + 1,
          index: a.index,
          isError: a.isError === !0,
          kind: a.kind,
          label: a.text,
          lane: Hn(a.kind)
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
function Vl(e, n, t) {
  const s = e.flatMap((i) => {
    const h = i.groups.flatMap(
      (v) => v.cells.flatMap((u) => {
        const y = Un(u);
        return y === null ? [] : [
          {
            ...y,
            index: u.index,
            isError: u.isError === !0,
            kind: u.kind,
            label: u.text,
            lane: Hn(u.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: i.turn, rawSpans: h }];
  }), l = s.flatMap((i) => i.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let a = 0, r = null;
  for (const i of [...l].sort(
    (h, v) => h.start - v.start || h.end - v.end
  ))
    t && r !== null && i.start > r && (a += i.start - r), o.set(i, a), r = r === null ? i.end : Math.max(r, i.end);
  const d = [], g = [];
  for (const i of s) {
    const h = i.rawSpans.map((v) => {
      const u = o.get(v) ?? 0;
      return {
        ...v,
        start: v.start - u,
        end: (n ? v.end : v.start) - u
      };
    });
    d.push(...h), i.turn !== null && g.push({
      turn: i.turn,
      time: Math.min(...h.map((v) => v.start))
    });
  }
  return {
    start: Math.min(...d.map((i) => i.start)),
    end: Math.max(...d.map((i) => i.end)),
    spans: d,
    turnBoundaries: g
  };
}
function Xl(e, n = "sequence") {
  const t = (r) => r.skillSpans ?? [];
  if (e.every((r) => t(r).length === 0)) return null;
  if (n === "sequence") {
    const r = /* @__PURE__ */ new Map();
    let d = 0;
    for (const i of e)
      for (const h of i.groups.flatMap((v) => v.cells))
        r.set(h.index, d), d += 1;
    const g = [];
    for (const i of e)
      for (const h of t(i)) {
        const v = h.attributedIndexes.map((T) => r.get(T)).filter((T) => T !== void 0);
        let u = v.length ? Math.min(...v) : void 0;
        if (u === void 0) {
          const T = i.groups.flatMap((R) => R.cells).find(
            (R) => R.kind !== "system" && R.skillName === h.skill
          );
          u = T ? r.get(T.index) : void 0;
        }
        if (u === void 0) continue;
        const y = v.length ? Math.max(...v) : u;
        g.push(dn(h, u, y + 1));
      }
    return g;
  }
  const s = e.flatMap(
    (r) => r.groups.flatMap(
      (d) => d.cells.flatMap((g) => {
        const i = Un(g);
        return i === null ? [] : [i];
      })
    )
  );
  s.sort((r, d) => r.start - d.start || r.end - d.end);
  const l = n === "duration", o = (r) => {
    let d = 0, g = null;
    for (const i of s) {
      if (i.start >= r) break;
      if (l && g !== null && i.start > g) {
        const h = Math.min(i.start, r);
        h > g && (d += h - g);
      }
      g = g === null ? i.end : Math.max(g, i.end);
    }
    return d;
  }, a = [];
  for (const r of e)
    for (const d of t(r)) {
      const g = d.startT, i = Math.max(ys(d), g + 1), h = o(g), v = o(i);
      a.push(
        dn(
          d,
          g - h,
          Math.max(g - h + 1, i - v)
        )
      );
    }
  return a;
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
function Gl(e, n, t = "sequence") {
  const s = Wn(e, t);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= n.end && l.end >= n.start).map((l) => l.index)
  );
}
Kl();
const ot = window.QwenPaw.host, q = ot.React, { useEffect: Je, useMemo: wt, useRef: Qe, useState: Ne } = q, { Tooltip: ql } = ot.antd, Tt = 3, Jl = 4, Ql = 0.08, Yl = 0.025, Zl = 32, eo = 0.5;
function to(e) {
  const n = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, o = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...n === void 0 ? {} : { durationMs: n },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function no(e) {
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
function so(e, n) {
  const t = no(e);
  if (n === void 0) return t;
  const s = n.durationMs === void 0 ? null : `Total ${kt(n.durationMs)}`, l = n.startedAt === void 0 ? null : n.durationMs === void 0 ? `Started ${Ie(n.startedAt)}` : `${Ie(n.startedAt)} → ${Ie(
    n.startedAt + n.durationMs
  )}`, o = n.ttftMs === void 0 || n.decodingMs === void 0 ? null : `TTFT ${kt(
    n.ttftMs
  )} · Decoding ${kt(n.decodingMs)}`, a = [s, o].filter((r) => r !== null).join(" · ");
  return [t, l, a].filter((r) => r !== null && r !== "").join(`
`);
}
function $t(e, n) {
  return e <= n ? { start: e, end: n } : { start: n, end: e };
}
function _t(e) {
  return Math.min(1, Math.max(0, e));
}
function lo(e, n, t, s) {
  const l = Math.min(s - t, Math.max(0, n)), o = Math.min(
    Math.max(e - l / 2, t),
    s - l
  );
  return { start: o, end: o + l };
}
function hn(e, n, t, s, l) {
  const o = $t(
    Math.min(l, Math.max(s, e.start)),
    Math.min(l, Math.max(s, e.end))
  );
  return {
    start: (o.start - n) / t,
    end: (o.end - n) / t
  };
}
function Kn({
  label: e,
  placement: n,
  children: t,
  ...s
}) {
  return /* @__PURE__ */ q.createElement(
    ql,
    {
      title: /* @__PURE__ */ q.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: eo,
      ...s
    },
    t
  );
}
function pn() {
  return /* @__PURE__ */ q.createElement("div", { className: he.labels, "aria-hidden": "true" }, /* @__PURE__ */ q.createElement("span", null, "Input"), /* @__PURE__ */ q.createElement("span", null, "Model"), /* @__PURE__ */ q.createElement("span", null, "Tools"));
}
function fn({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ q.createElement(
    Kn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ q.createElement(
      "button",
      {
        type: "button",
        className: he.earlierHistory,
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
const oo = q.memo(function({
  turns: n,
  mode: t,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: a = null,
  searchMatchIndexes: r = null,
  onRangeChange: d,
  onRecordSelect: g,
  onRecordFocus: i,
  onSkillSpanSelect: h
}) {
  const v = typeof ot.useTheme == "function" ? ot.useTheme() : void 0, u = wt(
    () => Wn(n, t),
    [t, n]
  ), y = wt(
    () => Xl(n, t),
    [t, n]
  ), T = wt(
    () => new Map(
      n.flatMap(
        (E) => E.groups.flatMap(
          (j) => j.cells.map(
            (b) => [b.index, to(b)]
          )
        )
      )
    ),
    [n]
  ), R = Qe(null), k = Qe(null), _ = Qe(null), F = Qe(null), [D, H] = Ne(null), [Y, w] = Ne(null), [N, U] = Ne(!1), [Z, ee] = Ne(!1), [te, f] = Ne(null), [m, S] = Ne(!1);
  Je(() => {
    u !== null && s !== null && (s.end < u.start || s.start > u.end) && d(null);
  }, [u, d, s]), Je(() => {
    u !== null && (S(!1), f(
      (E) => E !== null && (E.end < u.start || E.start > u.end) ? null : E
    ));
  }, [u]), Je(() => {
    if (u === null || a === null) return;
    const E = u.spans.find(
      (j) => j.index === a
    );
    E !== void 0 && (S(!0), f((j) => {
      if (j === null || E.end > j.start && E.start < j.end)
        return j;
      const b = Math.max(1, j.end - j.start), I = E.end <= j.start ? E.start : E.end - b, $ = Math.min(
        Math.max(I, u.start),
        Math.max(u.start, u.end - b)
      );
      return $ === j.start ? j : { start: $, end: $ + b };
    }));
  }, [u, a]);
  const x = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), M = Math.min(
    x,
    Math.max(1, ((te == null ? void 0 : te.end) ?? 0) - ((te == null ? void 0 : te.start) ?? 0))
  ), W = u === null || te === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(te.start, u.start),
    u.end - M
  ), O = te === null ? x : M, A = te === null ? (u == null ? void 0 : u.start) ?? 0 : W, J = l && u !== null && A === u.start, ne = o === void 0 || N ? void 0 : () => {
    U(!0), o().finally(() => {
      U(!1);
    });
  }, K = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(A - u.start) / O * 100}%`,
    "--trajectory-domain-width": `${x / O * 100}%`
  }, V = u === null || s === null ? null : hn(
    s,
    A,
    O,
    u.start,
    u.end
  ), me = (u === null || D === null ? null : hn(
    D,
    A,
    O,
    u.start,
    u.end
  )) ?? V, oe = D ?? s;
  if (Je(() => {
    const E = _.current;
    if (E === null) return;
    const j = (b) => {
      b.preventDefault();
      const I = F.current;
      if (I === null || u === null) return;
      S(!1);
      const $ = I.getBoundingClientRect(), X = _t(
        (b.clientX - $.left) / Math.max(1, $.width)
      ), ie = Math.min(
        x,
        Math.max(
          Math.min(
            t === "sequence" ? Jl : 20,
            x
          ),
          O * Math.exp(b.deltaY * 15e-4)
        )
      );
      if (ie >= x * 0.999) {
        f(null);
        return;
      }
      const re = A + X * O, le = Math.min(
        Math.max(re - X * ie, u.start),
        u.end - ie
      );
      f({ start: le, end: le + ie });
    };
    return E.addEventListener("wheel", j, { passive: !1 }), () => {
      E.removeEventListener("wheel", j);
    };
  }, [O, A, x, t, u]), u === null)
    return /* @__PURE__ */ q.createElement(
      "section",
      {
        ref: _,
        className: he.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ q.createElement("div", { className: he.plot }, /* @__PURE__ */ q.createElement(pn, null), /* @__PURE__ */ q.createElement("div", { className: he.track }, /* @__PURE__ */ q.createElement("span", { className: he.empty }, "No timing data"), l && /* @__PURE__ */ q.createElement(
        fn,
        {
          loading: N,
          onHover: () => {
            w(null);
          },
          onLoad: ne
        }
      )))
    );
  const ye = Math.min(
    O,
    x / u.spans.length
  ), ke = (E) => {
    const j = E.currentTarget.getBoundingClientRect();
    return _t((E.clientX - j.left) / Math.max(1, j.width));
  }, $e = (E) => {
    var $;
    const j = E.target instanceof HTMLElement ? E.target : null, b = ($ = j == null ? void 0 : j.closest("[data-timeline-record-index]")) == null ? void 0 : $.dataset.timelineRecordIndex;
    if (b === void 0) return null;
    const I = Number(b);
    return Number.isFinite(I) ? I : null;
  }, Ke = (E) => {
    d(E);
  }, Ve = (E) => {
    if (E.button === 2) {
      k.current = {
        anchorClientX: E.clientX,
        anchorStart: A,
        moved: !1,
        pannable: te !== null,
        pointerId: E.pointerId
      }, te !== null && S(!1), ee(!0), typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId);
      return;
    }
    if (E.button !== 0) return;
    const j = ke(E), b = A + j * O, I = $e(E);
    w({ fraction: j, recordIndex: I }), R.current = {
      pointerId: E.pointerId,
      anchorTime: b,
      anchorClientX: E.clientX,
      recordIndex: I
    }, typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId), H({ start: b, end: b });
  }, ct = (E) => {
    const j = E.currentTarget.getBoundingClientRect(), b = ke(E);
    w({ fraction: b, recordIndex: $e(E) });
    const I = k.current;
    if (I !== null && I.pointerId === E.pointerId) {
      if (Math.abs(E.clientX - I.anchorClientX) >= Tt && (I.moved = !0), !I.pannable) return;
      const re = (E.clientX - I.anchorClientX) / Math.max(1, j.width), le = Math.min(
        Math.max(I.anchorStart - re * O, u.start),
        u.end - O
      );
      f({ start: le, end: le + O });
      return;
    }
    const $ = R.current;
    if ($ === null || $.pointerId !== E.pointerId) return;
    let X = A;
    if (te !== null) {
      const re = E.clientX - j.left, le = Math.min(
        Zl,
        Math.max(1, j.width * Ql)
      ), ae = re < le ? -1 : re > j.width - le ? 1 : 0;
      if (ae !== 0) {
        const Oe = ae < 0 ? le - re : re - (j.width - le), be = _t(Oe / le), xe = A + ae * O * Yl * Math.max(0.2, be);
        X = Math.min(
          Math.max(xe, u.start),
          u.end - O
        ), X !== A && (S(!1), f({
          start: X,
          end: X + O
        }));
      }
    }
    const ie = X + b * O;
    H($t($.anchorTime, ie));
  }, ut = (E) => {
    const j = k.current;
    if (j !== null && j.pointerId === E.pointerId) {
      const ae = j.moved || Math.abs(E.clientX - j.anchorClientX) >= Tt;
      k.current = null, ee(!1), ae || d(null);
      return;
    }
    const b = R.current;
    if (b === null || b.pointerId !== E.pointerId) return;
    const I = ke(E), $ = A + I * O, X = $t(b.anchorTime, $);
    w({ fraction: I, recordIndex: $e(E) }), R.current = null, H(null);
    const ie = Math.abs(E.clientX - b.anchorClientX) < Tt, re = ie && b.recordIndex !== null ? u.spans.find((ae) => ae.index === b.recordIndex) : void 0;
    if (re !== void 0) {
      d(null), g == null || g(re.index);
      return;
    }
    const le = X.end - X.start < ye ? lo(
      ie ? X.start : (X.start + X.end) / 2,
      ye,
      u.start,
      u.end
    ) : X;
    if (Ke(le), ie) {
      const ae = X.start, Oe = u.spans.reduce((be, xe) => {
        const Ae = ae < be.start ? be.start - ae : ae > be.end ? ae - be.end : 0;
        return (ae < xe.start ? xe.start - ae : ae > xe.end ? ae - xe.end : 0) < Ae ? xe : be;
      });
      i == null || i(Oe.index);
    }
  }, dt = (E) => {
    E.key !== "Escape" || s === null || (E.preventDefault(), d(null));
  }, Xe = () => {
    R.current = null, k.current = null, H(null), w(null), ee(!1);
  };
  return /* @__PURE__ */ q.createElement(
    "section",
    {
      ref: _,
      className: he.root,
      "data-theme": v || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ q.createElement("div", { className: he.plot }, /* @__PURE__ */ q.createElement(pn, null), /* @__PURE__ */ q.createElement(
      "div",
      {
        ref: F,
        className: he.track,
        "data-panning": Z || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: dt,
        onPointerDown: Ve,
        onPointerMove: ct,
        onPointerUp: ut,
        onPointerCancel: Xe,
        onPointerLeave: () => {
          R.current === null && k.current === null && w(null);
        },
        onDoubleClick: (E) => {
          E.preventDefault(), d(null);
        },
        onContextMenu: (E) => {
          E.preventDefault();
        }
      },
      J && /* @__PURE__ */ q.createElement(
        fn,
        {
          loading: N,
          onHover: () => {
            w(null);
          },
          onLoad: ne
        }
      ),
      Y !== null && Y.recordIndex === null && D === null && /* @__PURE__ */ q.createElement(
        "div",
        {
          className: he.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${Y.fraction * 100}%`
          }
        }
      ),
      me !== null && /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(
        "div",
        {
          className: he.selection,
          "data-dragging": D === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${me.start * 100}%`,
            "--trajectory-selection-width": `${(me.end - me.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ q.createElement(
        "div",
        {
          className: he.selectionEdges,
          "data-dragging": D === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${me.start * 100}%`,
            "--trajectory-selection-width": `${(me.end - me.start) * 100}%`
          }
        }
      )),
      y !== null && u !== null && /* @__PURE__ */ q.createElement(
        "div",
        {
          "aria-label": "Skill bands",
          style: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 2,
            height: 6,
            pointerEvents: "none",
            zIndex: 3
          }
        },
        y.map((E) => {
          const j = (E.start - u.start) / x, b = Math.max(
            (E.end - E.start) / x,
            4e-3
          ), I = se(), $ = `${E.bypass ? "⚠ " : ""}${E.skill} · ${E.trigger}${E.open ? ` · ${p(I, "spanOpen")}` : ""}`;
          return /* @__PURE__ */ q.createElement(
            "span",
            {
              key: E.spanId,
              title: $,
              onClick: h ? (X) => {
                X.stopPropagation(), h(E.spanId);
              } : void 0,
              style: {
                position: "absolute",
                left: `${Math.max(0, j) * 100}%`,
                width: `${b * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${E.hue}, 65%, 55%, 0.55)`,
                border: E.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${E.hue}, 55%, 45%, 0.8)`,
                pointerEvents: h ? "auto" : "none",
                cursor: h ? "pointer" : "default"
              }
            }
          );
        })
      ),
      /* @__PURE__ */ q.createElement(
        "div",
        {
          className: he.turnBoundaries,
          "data-animate-viewport": m || void 0,
          "aria-hidden": "true",
          style: K
        },
        u.turnBoundaries.filter(
          (E) => E.time > u.start && E.time >= A && E.time <= A + O
        ).map((E) => /* @__PURE__ */ q.createElement(
          "span",
          {
            className: he.turnBoundary,
            "data-turn": E.turn,
            key: E.turn,
            style: {
              "--trajectory-turn-left": `${(E.time - u.start) / x * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ q.createElement(
        "div",
        {
          className: he.lanes,
          "data-animate-viewport": m || void 0,
          "data-timeline-domain": !0,
          style: K
        },
        u.spans.filter(
          (E) => E.index === a || E.end >= A && E.start <= A + O
        ).map((E) => {
          const j = (E.start - u.start) / x, I = (E.end - E.start) / x * 100, $ = T.get(E.index), X = $ == null ? void 0 : $.ttftMs, ie = $ == null ? void 0 : $.decodingMs, re = X === void 0 || ie === void 0 || X + ie <= 0 ? null : X / (X + ie);
          return /* @__PURE__ */ q.createElement(
            Kn,
            {
              key: E.index,
              label: so(E.kind, $),
              placement: "bottom"
            },
            /* @__PURE__ */ q.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: he.span,
                "data-timeline-span": E.kind,
                "data-timeline-record-index": E.index,
                "data-assistant-timing": re === null ? void 0 : "true",
                "data-error": E.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": E.index === a || void 0,
                "data-hovered": (Y == null ? void 0 : Y.recordIndex) === E.index || void 0,
                "data-search-match": r === null ? void 0 : r.has(E.index) ? "true" : "false",
                "data-selected": oe === null ? void 0 : E.start <= oe.end && E.end >= oe.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${j * 100}%`,
                  "--trajectory-span-width": `${I}%`,
                  "--trajectory-span-gap": `min(${I * 0.08}%, 1px)`,
                  "--trajectory-span-lane": E.lane,
                  ...re === null ? {} : {
                    "--trajectory-assistant-ttft": `${re * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), Lt = window.QwenPaw.host, ve = Lt.React, { Button: io, Input: ro, Segmented: ao, Tooltip: mn } = Lt.antd, { MenuFoldOutlined: co, MenuUnfoldOutlined: uo, ReloadOutlined: ho, SearchOutlined: po } = Lt.antdIcons;
function fo({
  mode: e,
  onModeChange: n,
  search: t,
  onSearchChange: s,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: a,
  hasRequests: r,
  onToggleCollapseAll: d,
  callsCollapsed: g,
  onToggleCallsCollapsed: i
}) {
  const h = se();
  return /* @__PURE__ */ ve.createElement(
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
    /* @__PURE__ */ ve.createElement(mn, { title: p(h, "projectionHint") }, /* @__PURE__ */ ve.createElement(
      ao,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (v) => n(v)
      }
    )),
    /* @__PURE__ */ ve.createElement(
      ro,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ve.createElement(po, null),
        placeholder: p(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (v) => s(v.target.value)
      }
    ),
    r && /* @__PURE__ */ ve.createElement(
      mn,
      {
        title: a ? p(h, "expandAll") : p(h, "collapseAll")
      },
      /* @__PURE__ */ ve.createElement(
        io,
        {
          size: "small",
          type: "text",
          icon: a ? /* @__PURE__ */ ve.createElement(uo, null) : /* @__PURE__ */ ve.createElement(co, null),
          onClick: d
        }
      )
    ),
    /* @__PURE__ */ ve.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ve.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ve.createElement(ho, null),
      " ",
      p(h, "refresh")
    ))
  );
}
const at = window.QwenPaw.host, L = at.React, { useCallback: gn, useEffect: Ye, useMemo: Ee, useRef: mo, useState: pe } = L, {
  Button: Ze,
  Empty: yn,
  Popconfirm: go,
  Popover: yo,
  Space: vo,
  Spin: Vn,
  Switch: So,
  Tag: Eo,
  Tooltip: bo,
  message: Ue
} = at.antd, { DeleteOutlined: xo, DownloadOutlined: ko, SettingOutlined: vn } = at.antdIcons, { Text: _e } = at.antd.Typography;
function Sn({
  config: e,
  onChange: n,
  children: t
}) {
  const s = se(), l = (a, r, d) => /* @__PURE__ */ L.createElement(
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
    /* @__PURE__ */ L.createElement(_e, { style: { fontSize: 13 } }, a),
    /* @__PURE__ */ L.createElement(
      So,
      {
        size: "small",
        checked: !!r,
        onChange: (g) => n({ [d]: g })
      }
    )
  ), o = /* @__PURE__ */ L.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ L.createElement(_e, { strong: !0, style: { fontSize: 13 } }, p(s, "settings")), /* @__PURE__ */ L.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(p(s, "enabled"), e.enabled, "enabled"),
    l(p(s, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      p(s, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      p(s, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ L.createElement(Vn, { size: "small" })));
  return /* @__PURE__ */ L.createElement(yo, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function wo({
  sessionId: e,
  summary: n,
  locale: t,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  const [o, a] = pe(null), [r, d] = pe(!1), [g, i] = pe(!1), [h, v] = pe(""), [u, y] = pe("sequence"), [T, R] = pe(null), [k, _] = pe(null), [F, D] = pe(null), [H, Y] = pe(null), [w, N] = pe(
    /* @__PURE__ */ new Set()
  ), [U, Z] = pe(!1), [ee, te] = pe(null), [f, m] = pe(null), [S, x] = pe(null), [M, W] = pe(null), O = mo(null);
  O.current = e, Ye(() => {
    ns().then(te).catch(() => te(null));
  }, []);
  const A = gn(async (b, I) => {
    I || d(!0);
    try {
      const $ = await ts(b, {
        beforeSeq: I,
        limit: 200
      });
      W(null), a((X) => I && X ? {
        ...$,
        events: [...$.events, ...X.events]
      } : $);
    } catch ($) {
      W({
        message: String($.message),
        status: $ instanceof zn ? $.status : null
      });
    } finally {
      I || d(!1);
    }
  }, []), J = gn(async (b) => {
    try {
      const I = await es(b);
      x(I), m({
        sessionId: b,
        inputTokens: I.input_tokens,
        outputTokens: I.output_tokens,
        totalTokens: I.total_tokens,
        reasoningTokens: Number(I.reasoning_tokens ?? 0)
      });
    } catch {
      x(null), m(null);
    }
  }, []);
  Ye(() => {
    e ? (R(null), _(null), D(null), N(/* @__PURE__ */ new Set()), v(""), A(e), J(e)) : (a(null), x(null), m(null));
  }, [e, A, J]);
  const ne = Ee(
    () => o ? Hl(o.events) : [],
    [o]
  ), { initial: K, turns: V } = Ee(
    () => Ul(ne),
    [ne]
  ), ce = Ee(
    () => K ? [K, ...an(V)] : an(V),
    [K, V]
  ), me = Ee(
    () => V.some((b) => b.status === "running"),
    [V]
  );
  Ye(() => {
    if (!e || !me) return;
    const b = setInterval(() => {
      document.visibilityState === "visible" && O.current && A(O.current);
    }, 5e3);
    return () => clearInterval(b);
  }, [e, me, A]);
  const oe = Ee(
    () => T === null ? null : Gl(V, T, u),
    [T, V, u]
  ), ye = Ee(() => {
    const b = h.trim().toLowerCase();
    return b ? new Set(
      ce.filter(
        (I) => [
          I.text,
          I.outputText,
          I.thinkingText,
          I.toolName,
          I.toolInput,
          I.toolOutput,
          I.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(b)
      ).map((I) => I.index)
    ) : null;
  }, [h, ce]), ke = Ee(
    () => k === null ? null : ce.find((b) => b.index === k) ?? null,
    [ce, k]
  ), $e = Ee(() => {
    var Pt, Ft;
    if (F === null) return null;
    const b = V.find((B) => B.turn === F);
    if (!b) return null;
    const I = ((Pt = b.groups[0]) == null ? void 0 : Pt.cells) ?? [], $ = I.filter((B) => B.kind === "message"), X = I.filter((B) => B.kind === "tool"), ie = [
      ...new Set(
        $.map((B) => B.model).filter((B) => !!B)
      )
    ], re = [
      ...new Set(
        $.map((B) => B.provider).filter((B) => !!B)
      )
    ];
    let le = 0, ae = 0, Oe = 0, be = 0, xe = 0, Ae = null, Ge = 0;
    const Dt = [];
    for (const B of I)
      B.usage && (le += B.usage.input_tokens ?? 0, ae += B.usage.output_tokens ?? 0, Oe += B.usage.cache_input_tokens ?? 0, be += B.usage.cache_creation_input_tokens ?? 0, xe += B.usage.reasoning_tokens ?? 0), B.timing && (Ae = Ae === null ? B.timing.ttft_ms : Math.min(Ae, B.timing.ttft_ms), Ge = (Ge ?? 0) + B.timing.decode_ms), B.isError && Dt.push(B.toolError ?? B.text ?? "error");
    const Re = I.find((B) => B.kind === "user"), Xn = (Ft = [...$].reverse().find((B) => B.options)) == null ? void 0 : Ft.options, ht = [...$].reverse().find((B) => B.outputText);
    let Nt;
    const jt = $.filter((B) => B.messagesMeta);
    if (jt.length > 0) {
      const B = {};
      let Le = 0, ft = 0;
      for (const qn of jt) {
        const mt = qn.messagesMeta;
        for (const [Ht, Jn] of Object.entries(mt.charsByRole))
          B[Ht] = (B[Ht] ?? 0) + Jn;
        Le += mt.totalChars, ft = Math.max(ft, mt.maxToolChars);
      }
      Nt = { charsByRole: B, totalChars: Le, maxToolChars: ft };
    }
    const pt = V.findIndex((B) => B.turn === F), Bt = pt > 0 ? V[pt - 1] : null;
    let Be = null;
    if (Bt) {
      Be = 0;
      for (const B of Bt.groups)
        for (const Le of B.cells)
          Le.kind === "message" && Le.usage && (Be += Le.usage.input_tokens ?? 0);
    }
    const Gn = Be === null && pt !== 0 ? void 0 : {
      prevInputTokens: Be,
      deltaTokens: le - (Be ?? 0)
    };
    return {
      turn: F,
      status: b.status,
      durationMs: b.durationMs,
      startedAt: (Re == null ? void 0 : Re.startedAt) ?? null,
      query: (Re == null ? void 0 : Re.text) ?? "",
      llmCalls: $.length,
      toolCalls: X.length,
      models: ie,
      providers: re,
      inputTokens: le,
      outputTokens: ae,
      cacheReadTokens: Oe,
      cacheWriteTokens: be,
      reasoningTokens: xe,
      inputComposition: Nt,
      growth: Gn,
      resultIndex: ht == null ? void 0 : ht.index,
      ttftMs: Ae,
      decodeMs: Ge,
      errors: Dt,
      options: Xn,
      sessionTotals: f && f.sessionId === e ? {
        inputTokens: f.inputTokens,
        outputTokens: f.outputTokens,
        totalTokens: f.totalTokens,
        reasoningTokens: f.reasoningTokens
      } : void 0
    };
  }, [F, V, f, e]), Ke = !!(o && o.events.length > 0 && o.events[0].seq > 1), Ve = async (b) => {
    try {
      te(await ss(b));
    } catch (I) {
      Ue.error(String(I.message));
    }
  }, ct = Ee(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), ut = Ee(() => {
    if (!S) return null;
    const b = [
      `${S.runs} ${p(t, "statRounds")} · ${S.llm_calls} ${p(t, "statSteps")}`,
      `LLM ${fe(S.llm_ms_total / 1e3)} · ${p(
        t,
        "toolCalls"
      )} ${fe(S.tool_ms_total / 1e3)}`,
      `${p(t, "statTtftAvg")} ${S.ttft_ms_avg === null ? "-" : fe(S.ttft_ms_avg / 1e3)} · ${At(
        S.output_tokens,
        S.decode_ms_total / 1e3
      )}`
    ];
    if (S.cache_read_tokens > 0 || S.cache_write_tokens > 0) {
      const I = S.cache_read_tokens + S.input_tokens, $ = I > 0 ? Math.round(S.cache_read_tokens / I * 100) : 0;
      b.push(`${p(t, "statCacheHit")} ${$}%`);
    }
    if (b.push(
      `${p(t, "statInput")} ${Q(
        S.input_tokens
      )} tok · ${p(t, "statOutput")} ${Q(
        S.output_tokens
      )} tok`
    ), n && b.push(Mt(n.size_bytes)), S.skills) {
      const I = Object.entries(S.skills).sort(($, X) => X[1] - $[1]).map(([$, X]) => `${$} ×${X}`).join(" · ");
      I && b.push(`📚 ${I}`);
    }
    if (K != null && K.prompt) {
      const I = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set();
      for (const ie of V)
        for (const re of ie.groups)
          for (const le of re.cells)
            le.skillName ? $.add(le.skillName) : le.inSkill && I.add(le.inSkill);
      const X = [...I].filter((ie) => !$.has(ie));
      X.length > 0 && b.push(
        `⚡ ${p(t, "skillBypassStrip")}: ${X.join(" · ")}`
      );
    }
    return b.join(" | ");
  }, [S, n, t, V, K]), dt = () => {
    _(null), D(null);
  };
  Ye(() => {
    k !== null && Y(null);
  }, [k]);
  const Xe = Ee(
    () => H === null ? null : V.flatMap((b) => b.skillSpans ?? []).find((b) => b.id === H) ?? null,
    [H, V]
  ), E = (M == null ? void 0 : M.status) === 404, j = ke !== null || $e !== null;
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
          _e,
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
          Eo,
          {
            color: Ln[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Dn((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ L.createElement(_e, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ L.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ L.createElement(vo, null, /* @__PURE__ */ L.createElement(Sn, { config: ee, onChange: Ve }, /* @__PURE__ */ L.createElement(Ze, { size: "small", icon: /* @__PURE__ */ L.createElement(vn, null) })), /* @__PURE__ */ L.createElement(bo, { title: p(t, "export") }, /* @__PURE__ */ L.createElement(
          Ze,
          {
            size: "small",
            icon: /* @__PURE__ */ L.createElement(ko, null),
            onClick: () => {
              ls(e).then(() => Ue.success(p(t, "exported"))).catch(
                (b) => Ue.error(String(b.message))
              );
            }
          },
          p(t, "export")
        )), /* @__PURE__ */ L.createElement(
          go,
          {
            title: p(t, "deleteConfirm"),
            onConfirm: () => {
              os(e).then(() => {
                Ue.success(p(t, "deleted")), l == null || l();
              }).catch(
                (b) => Ue.error(String(b.message))
              );
            }
          },
          /* @__PURE__ */ L.createElement(Ze, { size: "small", danger: !0, icon: /* @__PURE__ */ L.createElement(xo, null) }, p(t, "delete"))
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
          _e,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          ut ?? // Transient line while the stats endpoint responds.
          (n ? `${n.runs} ${p(t, "statRounds")} · ${n.llm_calls} ${p(t, "statSteps")} · ${Rn(
            n.total_tokens
          )} ${p(t, "tokens")} · ${Mt(
            n.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ L.createElement(
          _e,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                p(t, "copySessionId"),
                p(t, "copiedSessionId")
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
        /* @__PURE__ */ L.createElement(_e, { type: "secondary", style: { fontSize: 13 } }, p(t, "selectSession")),
        /* @__PURE__ */ L.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ L.createElement(Sn, { config: ee, onChange: Ve }, /* @__PURE__ */ L.createElement(Ze, { size: "small", icon: /* @__PURE__ */ L.createElement(vn, null) })))
      )
    ),
    M && !E && /* @__PURE__ */ L.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ L.createElement(_e, { type: "danger", style: { fontSize: 12 } }, `${p(t, "loadFailed")}: ${M.message}`)),
    /* @__PURE__ */ L.createElement(
      fo,
      {
        mode: u,
        onModeChange: y,
        search: h,
        onSearchChange: v,
        onRefresh: () => {
          e && (A(e), J(e)), l == null || l();
        },
        modeOptions: ct,
        allCollapsed: V.length > 0 && V.every((b) => w.has(b.turn ?? -1)),
        hasRequests: V.some((b) => b.turn !== null),
        callsCollapsed: U,
        onToggleCallsCollapsed: () => Z((b) => !b),
        onToggleCollapseAll: () => {
          N((b) => V.some(
            ($) => $.turn !== null && !b.has($.turn)
          ) ? new Set(
            V.map(($) => $.turn).filter(($) => $ !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ L.createElement(
      oo,
      {
        turns: V,
        mode: u,
        range: T,
        hasEarlierRecords: Ke,
        onLoadEarlier: async () => {
          var b;
          return !o || o.events.length === 0 ? !1 : (await A(e, (b = o.events[0]) == null ? void 0 : b.seq), !0);
        },
        selectedIndex: k,
        searchMatchIndexes: ye,
        onRangeChange: R,
        onRecordSelect: _,
        onRecordFocus: _,
        onSkillSpanSelect: Y
      }
    ),
    r && !o ? /* @__PURE__ */ L.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ L.createElement(Vn, null)) : o ? /* @__PURE__ */ L.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ L.createElement(
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
        Nl,
        {
          turns: V,
          selectedIndex: k,
          selectedTurn: F,
          collapsedTurns: w,
          focusIndexes: oe,
          searchMatchIndexes: ye,
          onSelectedIndexChange: (b) => {
            if (b === k) {
              _(null);
              return;
            }
            _(b), D(null);
          },
          onSelectedTurnChange: (b) => {
            D(b), _(null);
          },
          callsCollapsed: U,
          onToggleTurn: (b) => {
            N((I) => {
              const $ = new Set(I);
              return $.has(b) ? $.delete(b) : $.add(b), $;
            });
          },
          hasOlderRecords: Ke,
          loadingOlder: g,
          onLoadOlder: () => {
            var b;
            !o || o.events.length === 0 || (i(!0), A(
              e,
              (b = o.events[0]) == null ? void 0 : b.seq
            ).finally(() => i(!1)));
          },
          emptyText: p(t, "noSessions"),
          initialRecord: K
        }
      )
    ), Xe ? /* @__PURE__ */ L.createElement(
      Xs,
      {
        span: Xe,
        records: ce,
        onJumpRecord: (b) => {
          Y(null), _(b);
        },
        onClose: () => Y(null)
      }
    ) : j ? /* @__PURE__ */ L.createElement(
      Ws,
      {
        record: ke,
        request: $e,
        onJumpSession: s,
        onSelectTurn: (b) => {
          D(b), _(null);
        },
        onClose: dt
      }
    ) : null) : /* @__PURE__ */ L.createElement(
      yn,
      {
        image: yn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: E && e ? p(t, "noTraceForSession") : p(t, "selectSession")
      }
    )
  );
}
const je = window.QwenPaw.host, P = je.React, { useCallback: En, useEffect: It, useMemo: et, useState: Te } = P, { Button: bn, Empty: xn, Input: To, Spin: _o, Tag: kn, Tooltip: wn } = je.antd, {
  CaretRightOutlined: Io,
  MenuFoldOutlined: Mo,
  MenuUnfoldOutlined: Co,
  SearchOutlined: zo
} = je.antdIcons, { Text: We } = je.antd.Typography;
function $o({
  groups: e,
  collapsedAgents: n,
  onToggleAgent: t,
  searching: s,
  selected: l,
  onSelect: o,
  locale: a
}) {
  const r = e.length > 1;
  return /* @__PURE__ */ P.createElement(P.Fragment, null, e.map(([d, g]) => {
    const i = r && !s && n.has(d);
    return /* @__PURE__ */ P.createElement("div", { key: d }, r && /* @__PURE__ */ P.createElement(
      "div",
      {
        onClick: () => t(d),
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
      /* @__PURE__ */ P.createElement(
        Io,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: i ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ P.createElement(We, { strong: !0, style: { fontSize: 12 } }, d),
      /* @__PURE__ */ P.createElement(We, { type: "secondary", style: { fontSize: 11 } }, g.length)
    ), !i && g.map((h) => {
      const v = h.session_id === l;
      return /* @__PURE__ */ P.createElement(
        "div",
        {
          key: h.session_id,
          onClick: () => o(h.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: v ? "rgba(22,119,255,0.10)" : "transparent",
            border: v ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ P.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ P.createElement(
            We,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || An(h.session_id)
          ),
          r ? null : h.agent_id ? /* @__PURE__ */ P.createElement(
            kn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          /* @__PURE__ */ P.createElement(
            kn,
            {
              color: Ln[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Dn(h.status)
          )
        ),
        /* @__PURE__ */ P.createElement(
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
          /* @__PURE__ */ P.createElement("span", null, h.channel || "-"),
          /* @__PURE__ */ P.createElement("span", null, h.runs, " ", p(a, "runs")),
          /* @__PURE__ */ P.createElement("span", null, Rn(h.total_tokens), " tok"),
          h.skills ? /* @__PURE__ */ P.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(h.skills).sort((u, y) => y[1] - u[1]).map(([u, y]) => `${u} ×${y}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(h.skills).sort((u, y) => y[1] - u[1]).slice(0, 2).map(([u]) => u).join(" ")
          ) : null,
          /* @__PURE__ */ P.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Is(h.last_event_t)
            },
            Ms(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function Oo() {
  const e = typeof je.useLocale == "function" ? je.useLocale() : void 0, n = et(
    () => Ot(e ?? se()),
    [e]
  ), [t, s] = Te(null), [l, o] = Te(!1), [a, r] = Te(
    /* @__PURE__ */ new Set()
  ), [d, g] = Te(!1), [i, h] = Te(!1), [v, u] = Te(null), [y, T] = Te(""), [R, k] = Te(null), _ = En(async () => {
    try {
      const w = await Ut({ limit: 100, offset: 0 });
      s(w.sessions), o(w.has_more), k(null);
    } catch (w) {
      k(String(w.message));
    }
  }, []), F = En(async () => {
    h(!0);
    try {
      const w = await Ut({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      s((N) => {
        const U = N ?? [];
        return [
          ...U,
          ...w.sessions.filter(
            (Z) => !U.some((ee) => ee.session_id === Z.session_id)
          )
        ];
      }), o(w.has_more);
    } catch (w) {
      k(String(w.message));
    } finally {
      h(!1);
    }
  }, [t]);
  It(() => {
    _();
    try {
      const w = new URLSearchParams(window.location.search).get("session");
      w && $n(w).then((N) => {
        u(N ?? w);
      });
    } catch {
    }
  }, [_]), It(() => {
    try {
      const w = new URL(window.location.href);
      v ? w.searchParams.set("session", v) : w.searchParams.delete("session"), window.history.replaceState(window.history.state, "", w);
    } catch {
    }
  }, [v]), It(() => {
    const w = setInterval(() => {
      document.visibilityState === "visible" && _();
    }, 15e3);
    return () => clearInterval(w);
  }, [_]);
  const D = et(
    () => (t == null ? void 0 : t.find((w) => w.session_id === v)) ?? null,
    [t, v]
  ), H = et(() => {
    if (!t) return [];
    const w = y.trim().toLowerCase();
    return w ? t.filter(
      (N) => [N.session_id, N.title ?? "", N.agent_id, N.channel].join(" ").toLowerCase().includes(w)
    ) : t;
  }, [t, y]), Y = et(() => {
    const w = /* @__PURE__ */ new Map();
    for (const N of H) {
      const U = N.agent_id || "(unknown)", Z = w.get(U);
      Z ? Z.push(N) : w.set(U, [N]);
    }
    return [...w.entries()];
  }, [H]);
  return /* @__PURE__ */ P.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, d ? /* @__PURE__ */ P.createElement(
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
    /* @__PURE__ */ P.createElement(wn, { title: p(n, "expandSidebar"), placement: "right" }, /* @__PURE__ */ P.createElement(
      bn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ P.createElement(Co, null),
        onClick: () => g(!1)
      }
    ))
  ) : /* @__PURE__ */ P.createElement(
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
    /* @__PURE__ */ P.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ P.createElement(
        To,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ P.createElement(zo, null),
          placeholder: p(n, "searchPlaceholder"),
          value: y,
          style: { flex: 1, minWidth: 0 },
          onChange: (w) => T(w.target.value)
        }
      ),
      /* @__PURE__ */ P.createElement(wn, { title: p(n, "collapseSidebar") }, /* @__PURE__ */ P.createElement(
        bn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ P.createElement(Mo, null),
          onClick: () => g(!0)
        }
      ))
    ),
    R ? /* @__PURE__ */ P.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ P.createElement(We, { type: "danger", style: { fontSize: 12 } }, `${p(n, "loadFailed")}: ${R}`)) : null,
    /* @__PURE__ */ P.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ P.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ P.createElement(_o, null)) : H.length === 0 ? /* @__PURE__ */ P.createElement(
      xn,
      {
        image: xn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ P.createElement("span", { style: { fontSize: 12 } }, p(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ P.createElement(
        We,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        p(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ P.createElement(
      $o,
      {
        groups: Y,
        collapsedAgents: a,
        onToggleAgent: (w) => {
          r((N) => {
            const U = new Set(N);
            return U.has(w) ? U.delete(w) : U.add(w), U;
          });
        },
        searching: !!y.trim(),
        selected: v,
        onSelect: u,
        locale: n
      }
    ), t !== null && l && !y.trim() && /* @__PURE__ */ P.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ P.createElement(
      "a",
      {
        onClick: () => void F(),
        style: { fontSize: 12 }
      },
      i ? "…" : `⋯ ${p(n, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ P.createElement(
    wo,
    {
      sessionId: v,
      summary: D,
      locale: n,
      onJumpSession: u,
      onRefreshSessions: () => void _()
    }
  ));
}
const Ao = window.QwenPaw.host.React;
var Tn, _n;
(_n = (Tn = window.QwenPaw).registerRoutes) == null || _n.call(Tn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Oo,
    label: p(se(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var In, tt, Mn;
(Mn = (tt = (In = window.QwenPaw.chat) == null ? void 0 : In.rightHeader) == null ? void 0 : tt.add) == null || Mn.call(
  tt,
  "agent-trace",
  Ao.createElement(ds),
  { id: "agent-trace-jump" }
);

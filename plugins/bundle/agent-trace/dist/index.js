var Xn = Object.defineProperty;
var Gn = (e, n, t) => n in e ? Xn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var mt = (e, n, t) => Gn(e, typeof n != "symbol" ? n + "" : n, t);
const qn = {
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
    spanNoActivity: "加载后无归属活动"
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
    spanNoActivity: "No attributed activity after load"
  }
};
function zt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ee() {
  try {
    return zt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function m(e, n) {
  return qn[e][n];
}
const Fe = window.QwenPaw.host;
async function Jn(e) {
  return Me(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function Tn(e, n) {
  return Fe.fetch ? Fe.fetch(e, n) : fetch(Fe.getApiUrl(e), {
    ...n,
    headers: {
      ...(n == null ? void 0 : n.headers) || {},
      ...Fe.getApiToken() ? { Authorization: `Bearer ${Fe.getApiToken()}` } : {}
    }
  });
}
class _n extends Error {
  constructor(n, t) {
    super(t), this.status = n, this.name = "ApiError";
  }
}
async function Me(e, n) {
  const t = await Tn(e, n), s = await t.text();
  let l = null;
  try {
    l = s ? JSON.parse(s) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new _n(
      t.status,
      typeof o == "string" ? o : `HTTP ${t.status}`
    );
  }
  return l;
}
async function Bt(e) {
  const n = new URLSearchParams();
  return n.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && n.set("offset", String(e.offset)), Me(
    `/agent-trace/sessions?${n.toString()}`
  );
}
async function Qn(e, n) {
  const t = new URLSearchParams();
  n != null && n.beforeSeq && t.set("before_seq", String(n.beforeSeq)), t.set("limit", String(n == null ? void 0 : n.limit));
  const s = t.toString();
  return Me(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function Yn() {
  return Me("/agent-trace/config");
}
async function Zn(e) {
  return Me("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function es(e) {
  const n = await Tn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!n.ok) throw new Error(`HTTP ${n.status}`);
  const t = await n.blob(), s = URL.createObjectURL(t), l = document.createElement("a");
  l.href = s, l.download = `${e}.jsonl`, l.click(), URL.revokeObjectURL(s);
}
async function ts(e) {
  await Me(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function In(e) {
  if (!e) return null;
  try {
    return (await Me(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Ie = window.QwenPaw.host, tt = Ie.React, { useMemo: ns } = tt, { Button: ss, Tooltip: ls } = Ie.antd, { CompassOutlined: os } = Ie.antdIcons;
function is(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function rs() {
  const e = typeof Ie.useLocale == "function" ? Ie.useLocale() : void 0, n = ns(
    () => zt(e ?? ee()),
    [e]
  );
  return /* @__PURE__ */ tt.createElement(ls, { title: m(n, "viewCurrentTrace") }, /* @__PURE__ */ tt.createElement(
    ss,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ tt.createElement(os, null),
      "aria-label": m(n, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof Ie.getCurrentSessionId == "function" ? Ie.getCurrentSessionId() : null;
        In(t).then((s) => {
          window.location.href = is(s ?? t);
        });
      }
    }
  ));
}
const Ht = 3e3;
function Ut(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function as(e, n) {
  const t = Ut(e ?? ""), s = Ut(n ?? "");
  if (t.length > Ht || s.length > Ht)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...s.map((h) => ({ kind: "add", text: h }))
    ];
  const l = t.length, o = s.length, a = new Int32Array((l + 1) * (o + 1)), i = (h, y) => h * (o + 1) + y;
  for (let h = l - 1; h >= 0; h -= 1)
    for (let y = o - 1; y >= 0; y -= 1)
      a[i(h, y)] = t[h] === s[y] ? a[i(h + 1, y + 1)] + 1 : Math.max(a[i(h + 1, y)], a[i(h, y + 1)]);
  const d = [];
  let g = 0, r = 0;
  for (; g < l && r < o; )
    t[g] === s[r] ? (d.push({ kind: "same", text: t[g] }), g += 1, r += 1) : a[i(g + 1, r)] >= a[i(g, r + 1)] ? (d.push({ kind: "del", text: t[g] }), g += 1) : (d.push({ kind: "add", text: s[r] }), r += 1);
  for (; g < l; )
    d.push({ kind: "del", text: t[g] }), g += 1;
  for (; r < o; )
    d.push({ kind: "add", text: s[r] }), r += 1;
  return d;
}
function cs(e, n = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((o, a) => {
    if (o.kind !== "same")
      for (let i = Math.max(0, a - n); i <= Math.min(e.length - 1, a + n); i += 1)
        t[i] = !0;
  });
  const s = [];
  let l = 0;
  return e.forEach((o, a) => {
    t[a] ? (l > 0 && (s.push({ kind: "gap", count: l }), l = 0), s.push(o)) : l += 1;
  }), l > 0 && s.push({ kind: "gap", count: l }), s;
}
function us(e) {
  let n = 0, t = 0;
  for (const s of e)
    s.kind === "add" ? n += 1 : s.kind === "del" && (t += 1);
  return { added: n, removed: t };
}
function ds(e) {
  let n = 0;
  for (let t = 0; t < e.length; t += 1)
    n = (n * 31 + e.charCodeAt(t)) % 100003;
  return n % 360;
}
class hs {
  constructor() {
    mt(this, "open", /* @__PURE__ */ new Map());
    mt(this, "finished", []);
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
      colorHue: ds(n)
    };
    return this.open.set(n, o), o;
  }
  closeAll(n, t, s) {
    for (const l of this.open.values())
      l.endSeq = n, l.endT = t, l.endKind = s, this.finished.push(l);
    this.open.clear();
  }
}
function ps(e) {
  return e.endT !== null ? e.endT : e.lastActivityT !== null ? e.lastActivityT : e.startT;
}
function fs(e) {
  const n = e.lastActivityT ?? e.endT;
  return n === null ? null : Math.max(0, n - e.startT);
}
const ms = /* @__PURE__ */ new Set([
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
function gs(e) {
  const n = /* @__PURE__ */ new Set();
  for (const t of e.matchAll(
    /(?:scripts[/\\])([\w.\-]+\.(?:py|js|mjs|sh|json|ts))/gi
  ))
    n.add(t[1].toLowerCase());
  for (const t of e.matchAll(/```[a-z]*\n([\s\S]*?)```/g))
    for (const s of t[1].matchAll(/[\w./=\-]{6,}/g)) {
      const l = s[0].toLowerCase();
      ms.has(l) || n.add(l);
    }
  return [...n];
}
function ys(e, n) {
  const t = e.toLowerCase();
  let s = null, l = !1;
  for (const [o, a] of n)
    for (const i of a)
      if (t.includes(i)) {
        s === null ? s = { skill: o, feature: i } : s.skill !== o && (l = !0);
        break;
      }
  return l ? null : s;
}
const Ss = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, vs = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function Mn(e, n) {
  const t = e.markerKind ? Ss[e.markerKind] : void 0;
  if (t) return n === "zh-CN" ? t.zh : t.en;
  const s = vs[e.kind];
  return s ? n === "zh-CN" ? s.zh : s.en : e.kind;
}
function Es(e, n) {
  const t = (n ?? "").toLowerCase();
  let s = 4;
  return t.includes("qwen") ? s = 2.2 : t.includes("deepseek") ? s = 2.5 : t.includes("claude") && (s = 3.6), Math.round(e / s);
}
function bs(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function fe(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const n = e * 1e3;
  return n < 1e3 ? `${Math.round(n)}ms` : n < 6e4 ? `${(n / 1e3).toFixed(1)}s` : `${Math.floor(n / 6e4)}m${Math.round(n % 6e4 / 1e3)}s`;
}
function Y(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function Ot(e, n) {
  return e === void 0 || !Number.isFinite(e) || n === null || n === void 0 || n <= 0 ? "-" : `${(e / n).toFixed(1)} tok/s`;
}
function we(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ue(e) {
  if (!e) return null;
  const n = Date.parse(e);
  return Number.isFinite(n) ? n : null;
}
function Cn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function xs(e) {
  if (!e) return "-";
  const n = new Date(e);
  return Number.isNaN(n.getTime()) ? e : n.toLocaleString();
}
function ks(e) {
  if (!e) return "-";
  const n = Date.parse(e);
  if (!Number.isFinite(n)) return e;
  const t = Date.now() - n;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(n).toLocaleString();
}
function zn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function It(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const On = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function $n(e) {
  return e || "unknown";
}
const ot = window.QwenPaw.host, c = ot.React, { useEffect: ws, useRef: Ts, useState: An } = c, { Button: Rn, Collapse: _s, Empty: Wt, Tabs: $t, Tag: Kt } = ot.antd, { Text: q } = ot.antd.Typography, { CopyOutlined: Is, CloseOutlined: Ms } = ot.antdIcons, Cs = 320, zs = 720, Ge = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Os = 2e4;
function $s(e) {
  if (e.length > Os) return e;
  const n = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let s = 0, l, o = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > s && n.push(e.slice(s, l.index));
    const a = l[0];
    let i = "rgba(128,128,128,1)";
    l[1] !== void 0 ? i = Ge.key : l[2] !== void 0 ? i = Ge.string : l[3] !== void 0 ? i = Ge.number : i = Ge.literal, n.push(
      /* @__PURE__ */ c.createElement("span", { key: o++, style: { color: i } }, a)
    ), s = l.index + a.length;
  }
  return s < e.length && n.push(e.slice(s)), n;
}
function ye({ value: e, json: n = !1 }) {
  const [t, s] = An(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
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
    t ? "✓" : /* @__PURE__ */ c.createElement(Is, null)
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
    n ? $s(l) : l
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
    /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ c.createElement(
      q,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      n
    )
  );
}
function Vt({
  input: e,
  output: n,
  cacheRead: t,
  cacheWrite: s,
  reasoning: l
}) {
  const o = Math.max(0, e - t - s), a = Math.max(0, n - l);
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Input", value: `${Y(e)} tok` }), t ? /* @__PURE__ */ c.createElement(z, { label: "Cached", value: `${Y(t)} tok` }) : null, s ? /* @__PURE__ */ c.createElement(
    z,
    {
      label: "Cache created",
      value: `${Y(s)} tok`
    }
  ) : null, t || s ? /* @__PURE__ */ c.createElement(z, { label: "Other", value: `${Y(o)} tok` }) : null, /* @__PURE__ */ c.createElement(z, { label: "Output", value: `${Y(n)} tok` }), l ? /* @__PURE__ */ c.createElement(z, { label: "Reasoning", value: `${Y(l)} tok` }) : null, l ? /* @__PURE__ */ c.createElement(z, { label: "Content", value: `${Y(a)} tok` }) : null);
}
function gt({
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
const Xt = ["system", "user", "assistant", "tool"], As = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function Rs({
  request: e,
  locale: n
}) {
  const t = e.inputComposition;
  if (!t) return null;
  const s = e.models[0], l = [], o = new Set(Xt), a = [
    ...Xt.filter((i) => t.charsByRole[i]),
    ...Object.keys(t.charsByRole).filter(
      (i) => !o.has(i) && t.charsByRole[i]
    )
  ];
  for (const i of a) {
    const d = t.charsByRole[i], g = As[i] ?? "roleOther";
    l.push(
      /* @__PURE__ */ c.createElement(
        z,
        {
          key: i,
          label: m(n, g),
          value: `${Y(d)} ${m(
            n,
            "charUnit"
          )} · ~${Y(Es(d, s))} tok ${m(
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
        label: m(n, "maxToolMsg"),
        value: `${Y(t.maxToolChars)} ${m(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(q, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, m(n, "inputComposition")), l, /* @__PURE__ */ c.createElement(
    q,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    m(n, "estimateNote")
  ), e.growth ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    z,
    {
      label: m(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? m(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${Y(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ c.createElement(
    z,
    {
      label: m(n, "cacheAbsorbed"),
      value: `${Y(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function Ls({
  request: e,
  onJumpRecord: n
}) {
  const t = ee(), [s, l] = c.useState("summary"), o = /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Started", value: we(e.startedAt) }), /* @__PURE__ */ c.createElement(
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
      label: m(t, "throughput"),
      value: Ot(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), a = /* @__PURE__ */ c.createElement(
    Vt,
    {
      input: e.inputTokens,
      output: e.outputTokens,
      cacheRead: e.cacheReadTokens,
      cacheWrite: e.cacheWriteTokens,
      reasoning: e.reasoningTokens
    }
  ), i = [
    {
      key: "summary",
      label: m(t, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ c.createElement(
        z,
        {
          label: m(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ c.createElement(z, { label: "Query", value: Ns(e.query) }), /* @__PURE__ */ c.createElement(
        z,
        {
          label: m(t, "model"),
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
      )) : null, e.options ? /* @__PURE__ */ c.createElement(gt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ c.createElement(ye, { value: e.options, json: !0 })) : null, /* @__PURE__ */ c.createElement(gt, { label: "Usage", onOpen: () => l("usage") }, a), /* @__PURE__ */ c.createElement(gt, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(q, { strong: !0, style: { fontSize: 12 } }, m(t, "thisRequest")), a, /* @__PURE__ */ c.createElement(Rs, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
        q,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        m(t, "sessionTotal")
      ), /* @__PURE__ */ c.createElement(
        Vt,
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
        children: /* @__PURE__ */ c.createElement(ye, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ c.createElement(
    $t,
    {
      size: "small",
      activeKey: s,
      onChange: (d) => l(d),
      items: i,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Ns(e, n = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Ds({
  oldText: e,
  newText: n
}) {
  const t = c.useMemo(
    () => as(e, n),
    [e, n]
  ), s = c.useMemo(() => us(t), [t]), l = c.useMemo(() => cs(t), [t]), o = ee();
  return e === void 0 ? /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 12 } }, m(o, "noPrevPrompt")) : /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ c.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ c.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ c.createElement(
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
    l.map((a, i) => {
      if (a.kind === "gap")
        return /* @__PURE__ */ c.createElement(
          "div",
          {
            key: i,
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
          key: i,
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
function js({ record: e }) {
  var o;
  const n = ee(), t = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: m(n, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "#", value: String(e.index) }), /* @__PURE__ */ c.createElement(
        z,
        {
          label: m(n, "status"),
          value: s ? m(n, "promptChanged") : m(n, "promptInitial")
        }
      ), /* @__PURE__ */ c.createElement(z, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ c.createElement(z, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ c.createElement(z, { label: "Tools", value: String(t.length) }))
    },
    ...s ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ c.createElement(
          Ds,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: m(n, "prompt"),
      children: /* @__PURE__ */ c.createElement(ye, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 4 } }, t.map((a) => /* @__PURE__ */ c.createElement(q, { key: a, code: !0, style: { fontSize: 11 } }, a)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ c.createElement(
          _s,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((a, i) => {
              var g;
              const d = typeof a.name == "string" && a.name || typeof ((g = a.function) == null ? void 0 : g.name) == "string" && a.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ c.createElement(q, { code: !0, style: { fontSize: 11 } }, d),
                children: /* @__PURE__ */ c.createElement(ye, { value: a })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ c.createElement(ye, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ c.createElement($t, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function yt({ dragRef: e, width: n }) {
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
function nt({ onClose: e }) {
  return e ? /* @__PURE__ */ c.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ c.createElement(
    Rn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ c.createElement(Ms, null),
      onClick: e
    }
  )) : null;
}
function Ps({
  record: e,
  request: n,
  onJumpSession: t,
  onJumpRecord: s,
  onSelectTurn: l,
  onClose: o
}) {
  const a = ee(), [i, d] = An(400), g = Ts(null);
  if (ws(() => {
    const b = (R) => {
      const w = g.current;
      if (w === null) return;
      const k = w.anchorX - R.clientX;
      d(
        Math.min(zs, Math.max(Cs, w.anchorWidth + k))
      );
    }, O = () => {
      g.current = null;
    };
    return window.addEventListener("pointermove", b), window.addEventListener("pointerup", O), () => {
      window.removeEventListener("pointermove", b), window.removeEventListener("pointerup", O);
    };
  }, []), e === null && n === null)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: i,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ c.createElement(
        Wt,
        {
          image: Wt.PRESENTED_IMAGE_SIMPLE,
          description: m(a, "selectRecord")
        }
      )
    );
  if (e === null && n !== null)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: i,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ c.createElement(yt, { dragRef: g, width: i }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(nt, { onClose: o }), /* @__PURE__ */ c.createElement(Ls, { request: n, onJumpRecord: s }))
    );
  const r = e;
  if (r.kind === "system" && r.prompt !== void 0)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: i,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ c.createElement(yt, { dragRef: g, width: i }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(nt, { onClose: o }), /* @__PURE__ */ c.createElement(js, { record: r }))
    );
  const h = r.usage, y = r.timing, u = [];
  return u.push({
    key: "summary",
    label: m(a, "summary"),
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "#", value: String(r.index) }), /* @__PURE__ */ c.createElement(z, { label: "Kind", value: Mn(r, a) }), r.runIndex > 0 && l ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(r.runIndex)
      },
      "Request #",
      r.runIndex,
      " →"
    )) : null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(a, "status"),
        value: r.running ? m(a, "running") : r.isError ? m(a, "error") : m(a, "success"),
        danger: r.isError
      }
    ), r.provider ? /* @__PURE__ */ c.createElement(z, { label: "Provider", value: r.provider }) : null, r.model ? /* @__PURE__ */ c.createElement(z, { label: m(a, "model"), value: r.model }) : null, r.toolName ? /* @__PURE__ */ c.createElement(z, { label: "Tool", value: r.toolName }) : null, r.inSkill ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(a, "skillResource"),
        value: r.inSkillLoaded ? `⚡ ${r.inSkill}` : `⚡ ${r.inSkill}（${m(a, "skillBypass")}）`
      }
    ) : null, r.guidedSkill ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(a, "skillGuided"),
        value: `∈ ${r.guidedSkill}（${r.guidedReason === "slash" ? m(a, "guidedBySlash") : m(a, "guidedByLoad")}）`
      }
    ) : null, r.toolOutputChars ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(a, "outputSize"),
        value: r.toolOutputBytes ? `${Y(r.toolOutputChars)} ${m(
          a,
          "charUnit"
        )} · ${It(r.toolOutputBytes)} (${m(
          a,
          "beforeTruncation"
        )})` : `${Y(r.toolOutputChars)} ${m(
          a,
          "charUnit"
        )}`
      }
    ) : null, r.kind === "user" && (r.channel || r.userId) ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(a, "source"),
        value: [r.channel, r.userId].filter(Boolean).join(" · ")
      }
    ) : null, r.receipt ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(a, "channel"),
        value: r.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(a, "duration"),
        value: fe(r.timeSeconds)
      }
    ), r.note ? /* @__PURE__ */ c.createElement(q, { type: "warning", style: { fontSize: 12 } }, r.note) : null, r.spawnSession ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(a, "spawnedAgent"),
        value: r.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ c.createElement(
      Rn,
      {
        size: "small",
        onClick: () => r.spawnSession && t(r.spawnSession),
        style: { marginTop: 4 }
      },
      m(a, "openChildSession")
    ) : null) : null)
  }), r.kind === "tool" ? (r.toolInput && u.push({
    key: "payload",
    label: m(a, "input"),
    children: /* @__PURE__ */ c.createElement(ye, { value: r.toolInput, json: !0 })
  }), (r.toolOutput || r.toolError) && u.push({
    key: "result",
    label: m(a, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.toolError ? /* @__PURE__ */ c.createElement(q, { type: "danger", style: { fontSize: 12 } }, r.toolError) : null, r.toolOutput ? /* @__PURE__ */ c.createElement(ye, { value: r.toolOutput }) : null)
  })) : (r.outputText || r.thinkingText || r.messages || r.marker || r.toolCalls && r.toolCalls.length > 0) && (r.inputNew && r.inputNew.length > 0 && u.push({
    key: "input",
    label: m(a, "inputTab"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.contextReset ? /* @__PURE__ */ c.createElement(q, { type: "warning", style: { fontSize: 12 } }, m(a, "contextReset")) : null, r.messagesMeta ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(a, "inputTotal"),
        value: `${r.messagesMeta.count} · ${Y(
          r.messagesMeta.totalChars
        )} ${m(a, "charUnit")}`
      }
    ) : null, r.inputNew.map((b, O) => /* @__PURE__ */ c.createElement("div", { key: O }, /* @__PURE__ */ c.createElement(
      "div",
      {
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(q, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.role),
      /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 11 } }, Y(b.chars), " ", m(a, "charUnit"), b.toolCallId ? ` · ${b.toolCallId}` : "")
    ), b.text ? /* @__PURE__ */ c.createElement(ye, { value: b.text }) : null)))
  }), u.push({
    key: "raw",
    label: m(a, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.inboundParts && r.inboundParts.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 12 } }, `${m(a, "inboundParts")} (${r.inboundParts.length})`), r.inboundParts.map((b, O) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: O,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(q, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.type.replace("Content", "")),
      /* @__PURE__ */ c.createElement(
        q,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        b.text ?? "-"
      )
    ))) : null, r.marker ? /* @__PURE__ */ c.createElement(ye, { value: r.marker }) : null, r.toolCalls && r.toolCalls.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 12 } }, `${m(a, "toolCall")} (${r.toolCalls.length})`), r.toolCalls.map((b, O) => /* @__PURE__ */ c.createElement("div", { key: b.id || O, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ c.createElement(q, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", b.name), /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 11 } }, b.id)))) : null, r.note ? /* @__PURE__ */ c.createElement(q, { type: "warning", style: { fontSize: 12 } }, r.note) : null, r.messages && r.messages.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 12 } }, `${m(a, "query")} (${r.messages.length})`), r.messages.map((b, O) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: O,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(q, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.role),
      /* @__PURE__ */ c.createElement(
        q,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        b.text
      )
    ))) : null, r.thinkingText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 12 } }, m(a, "thinking")), /* @__PURE__ */ c.createElement(ye, { value: r.thinkingText })) : null, r.outputText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 12 } }, m(a, "output")), /* @__PURE__ */ c.createElement(ye, { value: r.outputText })) : null)
  })), (r.startedAt !== null || h || y) && u.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Started", value: we(r.startedAt) }), /* @__PURE__ */ c.createElement(z, { label: "Total", value: fe(r.timeSeconds) }), y ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: "TTFT",
        value: fe(y.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: "Decoding",
        value: fe(y.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(a, "throughput"),
        value: Ot(
          h == null ? void 0 : h.output_tokens,
          y.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 12 } }, m(a, "noTiming")))
  }), h && u.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Input", value: Y(h.input_tokens) }), /* @__PURE__ */ c.createElement(z, { label: "Output", value: Y(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: "Cache write",
        value: Y(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: "Cache read",
        value: Y(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ c.createElement(z, { label: "Total", value: Y(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ c.createElement(z, { label: "API time", value: fe(h.time) }) : null)
  }), u.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ c.createElement(ye, { value: r.raw })
  }), /* @__PURE__ */ c.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: i,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative"
      }
    },
    /* @__PURE__ */ c.createElement(yt, { dragRef: g, width: i }),
    /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(nt, { onClose: o }), /* @__PURE__ */ c.createElement($t, { size: "small", items: u, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Fs = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource"
}, Bs = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast"
};
function Hs({
  span: e,
  records: n,
  onJumpRecord: t,
  onClose: s
}) {
  const l = ee(), o = e.endKind ? m(l, Bs[e.endKind]) : m(l, "spanOpen"), a = fs(e);
  return new Map(n.map((i) => [i.index, i])), /* @__PURE__ */ c.createElement(
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
    /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(nt, { onClose: s }), /* @__PURE__ */ c.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ c.createElement(
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
    ), /* @__PURE__ */ c.createElement(q, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ c.createElement(
      Kt,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      m(l, Fs[e.trigger])
    )), /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(l, "spanStart"),
        value: we(e.startT)
      }
    ), /* @__PURE__ */ c.createElement(z, { label: m(l, "spanEnd"), value: o }), e.endT !== null ? /* @__PURE__ */ c.createElement(z, { label: " ", value: we(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(l, "spanLastActivity"),
        value: we(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(l, "spanDuration"),
        value: a === null ? "-" : fe(a / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: m(l, "spanLoadState"),
        value: e.bypass ? m(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ c.createElement(q, { strong: !0, style: { fontSize: 12 } }, m(l, "spanEvidence")), e.evidences.slice(0, 30).map((i, d) => /* @__PURE__ */ c.createElement(
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
        Kt,
        {
          color: i.kind === "path" ? "geekblue" : i.kind === "content" ? "blue" : "default",
          style: { marginInlineEnd: 0, fontSize: 10 }
        },
        i.kind
      ),
      /* @__PURE__ */ c.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => t(i.recordIndex)
        },
        "#",
        i.recordIndex
      ),
      /* @__PURE__ */ c.createElement(q, { type: "secondary", style: { fontSize: 11 } }, i.detail)
    ))) : /* @__PURE__ */ c.createElement(
      q,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      m(l, "spanNoActivity")
    ))
  );
}
const ae = window.QwenPaw.host.React, Us = ae.useRef, Ws = ae.useState;
ae.useCallback;
ae.useMemo;
const Ks = ae.useEffect, Vs = ae.useLayoutEffect, Xs = ae.useReducer;
ae.createContext;
ae.useContext;
ae.createElement;
ae.cloneElement;
ae.isValidElement;
ae.memo;
ae.forwardRef;
ae.Fragment;
ae.StrictMode;
ae.version;
function Gs(e) {
  return e ? e() : void 0;
}
function qs(e, n, t) {
  const s = new Array(e);
  return new Proxy(s, {
    get(l, o, a) {
      if (typeof o == "string") {
        const i = o.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const d = +o;
          if (Number.isInteger(d) && d >= 0 && d < e) {
            let g = l[d];
            if (!g) {
              const r = n[d * 2];
              g = l[d] = {
                index: d,
                key: t(d),
                start: r,
                size: n[d * 2 + 1],
                end: r + n[d * 2 + 1],
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
function Le(e, n, t) {
  let s = t.initialDeps ?? [], l, o = !0;
  function a() {
    var i;
    const d = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let g = 0;
    d && (g = Date.now());
    const r = e();
    if (!(r.length !== s.length || r.some((u, b) => s[b] !== u)))
      return l;
    s = r;
    let y = 0;
    if (d && (y = Date.now()), l = n(...r), d) {
      const u = Math.round((Date.now() - g) * 100) / 100, b = Math.round((Date.now() - y) * 100) / 100, O = b / 16, R = (w, k) => {
        for (w = String(w); w.length < k; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${R(b, 5)} /${R(u, 5)} ms`,
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
  return a.updateDeps = (i) => {
    s = i;
  }, a;
}
function Gt(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Js = (e, n) => Math.abs(e - n) < 1.01, Qs = (e, n, t) => {
  let s;
  return function(...l) {
    e.clearTimeout(s), s = e.setTimeout(() => n.apply(this, l), t);
  };
};
let Be;
const St = () => {
  if (Be !== void 0) return Be;
  if (typeof navigator > "u") return Be = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Be = !0;
  const e = navigator.maxTouchPoints;
  return Be = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, qt = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, Ys = (e) => e, Zs = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - n + 1, l = new Array(s);
  for (let o = 0; o < s; o++)
    l[o] = n + o;
  return l;
}, el = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const l = (a) => {
    const { width: i, height: d } = a;
    n({ width: Math.round(i), height: Math.round(d) });
  };
  if (l(qt(t)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((a) => {
    const i = () => {
      const d = a[0];
      if (d != null && d.borderBoxSize) {
        const g = d.borderBoxSize[0];
        if (g) {
          l({ width: g.inlineSize, height: g.blockSize });
          return;
        }
      }
      l(qt(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, st = {
  passive: !0
}, tl = typeof window > "u" ? !0 : "onscrollend" in window, nl = (e, n, t) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && tl;
  let a = 0;
  const i = o ? null : Qs(
    l,
    () => n(a, !1),
    e.options.isScrollingResetDelay
  ), d = (h) => () => {
    a = t(s), i == null || i(), n(a, h);
  }, g = d(!0), r = d(!1);
  return s.addEventListener("scroll", g, st), o && s.addEventListener("scrollend", r, st), () => {
    s.removeEventListener("scroll", g), o && s.removeEventListener("scrollend", r);
  };
}, sl = (e, n) => nl(e, n, (t) => {
  const { horizontal: s, isRtl: l } = e.options;
  return s ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), ll = (e, n, t) => {
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
}, ol = (e, {
  adjustments: n = 0,
  behavior: t
}, s) => {
  var l, o;
  (o = (l = s.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [s.options.horizontal ? "left" : "top"]: e + n,
    behavior: t
  });
}, il = ol;
class rl {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, s, l;
      return ((l = (s = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : s.now) == null ? void 0 : l.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const s = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const a = () => {
            const i = o.target, d = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [g, r] of this.elementsCache)
                if (r === i) {
                  this.elementsCache.delete(g);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(d) && this.resizeItem(
              d,
              this.options.measureElement(i, o, this)
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
        getItemKey: Ys,
        rangeExtractor: Zs,
        onChange: () => {
        },
        measureElement: ll,
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
      const a = this.options;
      let i = null, d = null, g = !1;
      if (a !== void 0 && a.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const y = a.count, u = o.count, b = this.getMeasurements(), O = y > 0 ? ((s = b[0]) == null ? void 0 : s.key) ?? a.getItemKey(0) : null, R = y > 0 ? ((l = b[y - 1]) == null ? void 0 : l.key) ?? a.getItemKey(y - 1) : null;
        if (u !== y || y > 0 && u > 0 && (o.getItemKey(0) !== O || o.getItemKey(u - 1) !== R)) {
          g = !0;
          const L = y > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? b[0] : null;
          L && (i = [L.key, this.getScrollOffset() - L.start]);
          const F = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          F && u > y && this.isAtEnd(a.scrollEndThreshold) && (y === 0 || o.getItemKey(u - 1) !== R) && (d = F);
        }
      }
      this.options = o, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let r = !1, h = 0;
      if (i && this.scrollOffset !== null) {
        const [y, u] = i, b = this.getMeasurements(), { count: O, getItemKey: R } = this.options;
        let w = 0;
        for (; w < O && R(w) !== y; )
          w++;
        if (w < O) {
          const k = b[w];
          if (k) {
            const L = Math.max(0, k.start + u);
            L !== this.scrollOffset && (h = L - this.scrollOffset, this.scrollOffset = L, r = !0);
          }
        }
      }
      (r || d) && (this.pendingScrollAnchor = [
        r ? i[0] : null,
        r ? i[1] : 0,
        d,
        h
      ]);
    }, this.notify = (t) => {
      var s, l;
      (l = (s = this.options).onChange) == null || l.call(s, this, t);
    }, this.maybeNotify = Le(
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
            const i = this.getScrollOffset();
            this.scrollDirection = a ? i === o ? this.scrollDirection : i < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = a, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, a = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, i = () => {
            this._iosTouching = !1, !(!St() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            a,
            st
          ), o.addEventListener(
            "touchend",
            i,
            st
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", a), o.removeEventListener("touchend", i), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, a, i, d] = l;
        o !== null && !i && (St() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? d !== 0 && (this._iosDeferredAdjustment += d) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), i && this.scrollToEnd({ behavior: i });
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
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Le(
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
      (t, s, l, o, a, i, d, g) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: a,
        lanes: i,
        laneAssignmentMode: d,
        gap: g
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Le(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: a,
        lanes: i,
        laneAssignmentMode: d,
        gap: g
      }, r) => {
        const h = this.itemSizeCache;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const w of this.laneAssignments.keys())
            w >= t && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const y = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const w = t * 2;
          let k = this._flatMeasurements;
          if (!k || k.length < w) {
            const U = new Float64Array(w);
            k && y > 0 && U.set(k.subarray(0, y * 2)), k = U, this._flatMeasurements = k;
          }
          let L;
          if (y === 0)
            L = s + l;
          else {
            const U = y - 1;
            L = k[U * 2] + k[U * 2 + 1] + g;
          }
          for (let U = y; U < t; U++) {
            const G = o(U), T = h.get(G), W = typeof T == "number" ? T : this.options.estimateSize(U);
            k[U * 2] = L, k[U * 2 + 1] = W, L += W + g;
          }
          const F = qs(t, k, o);
          return this.measurementsCache = F, F;
        }
        const u = this.measurementsCache.slice(0, y), b = new Array(i).fill(
          void 0
        ), O = new Float64Array(i);
        let R = 0;
        for (let w = 0; w < y; w++) {
          const k = u[w];
          k && (b[k.lane] === void 0 && R++, b[k.lane] = w, O[k.lane] = k.end);
        }
        for (let w = y; w < t; w++) {
          const k = o(w), L = this.laneAssignments.get(w);
          let F, U;
          const G = d === "estimate" || h.has(k);
          if (L !== void 0 && this.options.lanes > 1) {
            F = L;
            const Z = b[F], f = Z !== void 0 ? u[Z] : void 0;
            U = f ? f.end + g : s + l;
          } else if (R === i) {
            let Z = 0, f = O[0], p = b[0];
            for (let v = 1; v < i; v++) {
              const _ = O[v];
              (_ < f || _ === f && b[v] < p) && (Z = v, f = _, p = b[v]);
            }
            F = Z, U = f + g, G && this.laneAssignments.set(w, F);
          } else
            F = w % this.options.lanes, U = s + l, G && this.laneAssignments.set(w, F);
          const T = h.get(k), W = typeof T == "number" ? T : this.options.estimateSize(w), B = U + W;
          u[w] = {
            index: w,
            start: U,
            size: W,
            end: B,
            key: k,
            lane: F
          }, b[F] === void 0 && R++, b[F] = w, O[F] = B;
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Le(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, s, l, o) => t.length === 0 || s === 0 ? (this.range = null, null) : (this.range = cl(
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
    ), this.getVirtualIndexes = Le(
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
        ), a = Math.max(0, l - o), i = Math.min(
          this.options.count - 1,
          l + o
        );
        return t >= a && t <= i;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((a, i) => {
          a.isConnected || (this.observer.unobserve(a), this.elementsCache.delete(i));
        });
        return;
      }
      const s = this.indexFromElement(t), l = this.options.getItemKey(s), o = this.elementsCache.get(l);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, s) => {
      var l, o;
      if (t < 0 || t >= this.options.count) return;
      let a, i, d;
      const g = this._flatMeasurements;
      if (this.options.lanes === 1 && g !== null)
        d = this.options.getItemKey(t), i = g[t * 2], a = g[t * 2 + 1];
      else {
        const y = this.measurementsCache[t];
        if (!y) return;
        d = y.key, i = y.start, a = y.size;
      }
      const r = this.itemSizeCache.get(d) ?? a, h = s - r;
      if (h !== 0) {
        const y = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, u = y ? this.getTotalSize() : 0, b = this.getScrollOffset() + this.scrollAdjustments, R = !this.itemSizeCache.has(d) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          i < b
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          i + r <= b && this.scrollDirection !== "backward"
        ), w = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: d,
            start: i,
            size: a,
            end: i + a,
            lane: 0
          },
          h,
          this
        ) : R);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(d, s), this.itemSizeCacheVersion++;
        let k = !1;
        y ? k = this.applyScrollAdjustment(
          this.getTotalSize() - u
        ) : w && (k = this.applyScrollAdjustment(h)), this.notify(k);
      }
    }, this.getVirtualItems = Le(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, s) => {
        const l = [];
        for (let o = 0, a = t.length; o < a; o++) {
          const i = t[o], d = s[i];
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
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, a = Ln(
        0,
        s.length - 1,
        o ? (i) => l[i * 2] : (i) => Gt(s[i]).start,
        t
      );
      return Gt(s[a]);
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
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, t), 0);
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
      const i = s === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, s, a.size),
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
      const [a, i] = o, d = this.now();
      this.scrollState = {
        index: t,
        align: i,
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
        for (; a >= 0 && o.some((i) => i === null); ) {
          const i = s[a];
          o[i.lane] === null && (o[i.lane] = i.end), a--;
        }
        l = Math.max(...o.filter((i) => i !== null));
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
    if (!a && Js(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, a) {
      const i = this.getSize() || 600, d = Math.abs(l - this.getScrollOffset()), g = this.scrollState.behavior === "smooth" && d > i;
      this.scrollState.lastTargetOffset = l, g || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: g ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const Ln = (e, n, t, s) => {
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
function al(e, n, t) {
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
function cl(e, n, t, s, l) {
  const o = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: o };
  if (s === 1 && l !== null) {
    const g = al(
      l,
      o,
      t
    );
    let r = g;
    const h = t + n;
    for (; r < o && l[r * 2] + l[r * 2 + 1] < h; )
      r++;
    return { startIndex: g, endIndex: r };
  }
  let i = Ln(0, o, (g) => e[g].start, t), d = i;
  if (s === 1)
    for (; d < o && e[d].end < t + n; )
      d++;
  else if (s > 1) {
    const g = Array(s).fill(0);
    for (; d < o && g.some((h) => h < t + n); ) {
      const h = e[d];
      g[h.lane] = h.end, d++;
    }
    const r = Array(s).fill(t + n);
    for (; i >= 0 && r.some((h) => h >= t); ) {
      const h = e[i];
      r[h.lane] = h.start, i--;
    }
    i = Math.max(0, i - i % s), d = Math.min(o, d + (s - 1 - d % s));
  }
  return { startIndex: i, endIndex: d };
}
const vt = typeof document < "u" ? Vs : Ks;
function ul({
  useFlushSync: e = !0,
  directDomUpdates: n = !1,
  directDomUpdatesMode: t = "transform",
  ...s
}) {
  const l = Xs((r) => r + 1, 0)[1], o = Us({
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
  const a = (r) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    const y = r.getTotalSize();
    if (y !== h.lastSize) {
      h.lastSize = y;
      const u = r.options.horizontal ? "width" : "height";
      h.container.style[u] = `${y}px`;
    }
  }, i = (r) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    a(r);
    const y = !!r.options.horizontal, u = h.mode === "transform", b = y ? "left" : "top", O = r.options.scrollMargin, R = r.getVirtualItems();
    for (const w of R) {
      const k = w.start - O, L = r.elementsCache.get(w.key);
      L && h.lastPositions.get(L) !== k && (h.lastPositions.set(L, k), u ? L.style.transform = y ? `translate3d(${k}px, 0, 0)` : `translate3d(0, ${k}px, 0)` : L.style[b] = `${k}px`);
    }
  }, d = {
    ...s,
    onChange: (r, h) => {
      var y;
      const u = o.current;
      let b = !0;
      if (u.enabled) {
        i(r);
        const O = r.range, R = u.prevRange;
        b = !R || R.isScrolling !== r.isScrolling || R.startIndex !== (O == null ? void 0 : O.startIndex) || R.endIndex !== (O == null ? void 0 : O.endIndex), b && (u.prevRange = O ? {
          startIndex: O.startIndex,
          endIndex: O.endIndex,
          isScrolling: r.isScrolling
        } : null);
      }
      b && (e && h ? Gs(l) : l()), (y = s.onChange) == null || y.call(s, r, h);
    }
  }, [g] = Ws(() => {
    const r = new rl(d);
    return Object.assign(r, {
      containerRef: (h) => {
        const y = o.current;
        if (y.container = h, y.lastSize = null, h && y.enabled) {
          const u = r.getTotalSize();
          y.lastSize = u;
          const b = r.options.horizontal ? "width" : "height";
          h.style[b] = `${u}px`;
        }
      }
    });
  });
  return g.setOptions(d), vt(() => g._didMount(), []), vt(() => (a(g), g._willUpdate())), vt(() => {
    i(g);
  }), g;
}
function dl(e) {
  return ul({
    observeElementRect: el,
    observeElementOffset: sl,
    scrollToFn: il,
    ...e
  });
}
const it = window.QwenPaw.host, M = it.React, { useRef: hl } = M, { Tag: _e } = it.antd, { Text: me } = it.antd.Typography, {
  CaretRightOutlined: pl,
  CloseCircleOutlined: fl,
  FileTextOutlined: ml,
  RobotOutlined: gl,
  RocketOutlined: yl,
  SafetyOutlined: Sl,
  SendOutlined: vl,
  SettingOutlined: El,
  ToolOutlined: bl,
  UserOutlined: xl
} = it.antdIcons, kl = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, wl = {
  user: /* @__PURE__ */ M.createElement(xl, null),
  message: /* @__PURE__ */ M.createElement(gl, null),
  tool: /* @__PURE__ */ M.createElement(bl, null),
  system: /* @__PURE__ */ M.createElement(El, null)
}, Jt = {
  approval: { color: "volcano", icon: /* @__PURE__ */ M.createElement(Sl, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ M.createElement(vl, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ M.createElement(yl, null) },
  header: { color: "green", icon: /* @__PURE__ */ M.createElement(ml, null) },
  error: { color: "red", icon: /* @__PURE__ */ M.createElement(fl, null) }
}, Tl = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Qt = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, _l = 150, Mt = 26, Nn = 34, Yt = 9, Zt = 30;
function Il(e) {
  const n = ee(), t = Qt[e] ?? Qt.unknown;
  return n === "zh-CN" ? t.zh : t.en;
}
const Ml = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Cl(e, n) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e.inboundParts ?? []) {
    const l = Ml[s.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([s, l]) => `${m(n, s)}×${l}`).join(" ");
}
function zl(e, n) {
  const t = e.receipt, s = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${m(n, "replySent")}${s} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${m(n, "chars")}`;
}
function en({
  record: e,
  selected: n,
  dimmed: t,
  multiRequest: s,
  onSelect: l
}) {
  var i, d;
  const o = e.usage, a = o && (o.input_tokens || o.output_tokens) ? `${Y(o.input_tokens)}→${Y(
    o.output_tokens
  )}` : null;
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
        height: Mt,
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
      s && /* @__PURE__ */ M.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ M.createElement(
      _e,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((i = Jt[e.markerKind]) == null ? void 0 : i.color) || kl[e.kind] || "default",
        icon: e.markerKind && ((d = Jt[e.markerKind]) == null ? void 0 : d.icon) || wl[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? m(ee(), "skillLoadKind") : Mn(e, ee())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ M.createElement(
      _e,
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
      _e,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${m(ee(), "skillBypass")}`,
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
      _e,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? m(ee(), "guidedBySlash") : m(ee(), "guidedByLoad")}`,
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
    e.kind === "user" && e.skillName ? /* @__PURE__ */ M.createElement(
      _e,
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
      e.receipt ? /* @__PURE__ */ M.createElement(me, { type: "secondary", style: { fontSize: 12 } }, zl(e, ee())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(me, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ M.createElement(me, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ M.createElement(me, { type: "secondary", style: { fontSize: 12 } }, ` · ${m(ee(), "skillLoaded")} ${Y(
        e.toolOutputChars
      )} ${m(ee(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(me, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ M.createElement(me, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ M.createElement(
        me,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(
        me,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(me, { type: "secondary", style: { fontSize: 11 } }, ` ${Cl(e, ee()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ M.createElement(me, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
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
      a ? /* @__PURE__ */ M.createElement("span", { style: { color: "#1677ff" } }, a) : null,
      a ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && fe(e.timeSeconds)
    )
  );
}
function Ol({
  turn: e,
  collapsed: n,
  selected: t,
  cellCount: s,
  onToggle: l,
  onSelect: o
}) {
  const a = ee();
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Nn }
    },
    /* @__PURE__ */ M.createElement(
      "span",
      {
        onClick: (i) => {
          i.stopPropagation(), o();
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
        pl,
        {
          onClick: (i) => {
            i.stopPropagation(), l();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: n ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ M.createElement(me, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ M.createElement(me, { type: "secondary", style: { fontSize: 11 } }, fe(e.durationMs / 1e3)),
      /* @__PURE__ */ M.createElement(me, { type: "secondary", style: { fontSize: 11 } }, s, " ", m(a, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? /* @__PURE__ */ M.createElement(
        _e,
        {
          color: "geekblue",
          title: e.skillsUsed.join(", "),
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        "📚 ",
        e.skillsUsed.slice(0, 2).join(" "),
        e.skillsUsed.length > 2 ? ` +${e.skillsUsed.length - 2}` : ""
      ) : null,
      /* @__PURE__ */ M.createElement(
        _e,
        {
          color: Tl[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Il(e.status)
      )
    )
  );
}
function $l({
  turns: e,
  selectedIndex: n,
  selectedTurn: t,
  collapsedTurns: s,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: a,
  onSelectedTurnChange: i,
  onToggleTurn: d,
  callsCollapsed: g,
  hasOlderRecords: r,
  loadingOlder: h,
  onLoadOlder: y,
  initialRecord: u,
  emptyText: b
}) {
  const O = ee(), R = hl(null), w = e.filter((T) => T.turn !== null), k = w.length > 1, L = M.useMemo(() => {
    var W;
    const T = [];
    r && T.push({
      key: "load-older",
      height: Zt,
      type: "load-older"
    }), u && (T.push({
      key: "initial",
      height: Mt,
      type: "initial",
      record: u
    }), T.push({
      key: "initial-divider",
      height: Yt,
      type: "divider"
    }));
    for (const B of w) {
      const Z = B.turn;
      if (T.push({
        key: `turn-${Z}`,
        height: Nn,
        type: "boundary",
        turn: B
      }), !s.has(Z))
        for (const f of ((W = B.groups[0]) == null ? void 0 : W.cells) ?? [])
          g && f.kind === "tool" || T.push({
            key: `rec-${f.index}`,
            height: Mt,
            type: "record",
            record: f
          });
    }
    return T;
  }, [
    w,
    s,
    g,
    r,
    u
  ]), F = M.useCallback(
    (T) => l !== null && !l.has(T.index) || o !== null && !o.has(T.index),
    [l, o]
  ), U = (T) => {
    var W;
    switch (T.type) {
      case "load-older":
        return /* @__PURE__ */ M.createElement("div", { style: { textAlign: "center", height: Zt } }, /* @__PURE__ */ M.createElement(
          "button",
          {
            type: "button",
            onClick: y,
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
          h ? "…" : `⋯ ${m(O, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ M.createElement(
          "div",
          {
            style: {
              height: Yt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const B = T.record;
        return /* @__PURE__ */ M.createElement(
          en,
          {
            record: B,
            selected: n === B.index,
            dimmed: F(B),
            multiRequest: k,
            onSelect: () => a(B.index)
          }
        );
      }
      case "boundary": {
        const B = T.turn, Z = B.turn;
        return /* @__PURE__ */ M.createElement(
          Ol,
          {
            turn: B,
            collapsed: s.has(Z),
            selected: t === Z,
            cellCount: ((W = B.groups[0]) == null ? void 0 : W.cells.length) ?? 0,
            onToggle: () => d(Z),
            onSelect: () => i(Z)
          }
        );
      }
      case "record":
      default: {
        const B = T.record;
        return /* @__PURE__ */ M.createElement(
          en,
          {
            record: B,
            selected: n === B.index,
            dimmed: F(B),
            multiRequest: k,
            onSelect: () => a(B.index)
          }
        );
      }
    }
  };
  if (L.length === 0)
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
        b ?? m(O, "noSessions")
      )
    );
  const G = L.length <= _l ? /* @__PURE__ */ M.createElement("div", null, L.map((T) => U(T))) : /* @__PURE__ */ M.createElement(
    Al,
    {
      rows: L,
      scrollRef: R,
      renderRow: U
    }
  );
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      ref: R,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    G
  );
}
function Al({
  rows: e,
  scrollRef: n,
  renderRow: t
}) {
  const s = dl({
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
function Et(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function tn(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (n) => typeof n == "number" && Number.isFinite(n)
  );
}
function Rl(e) {
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
function Ll(e) {
  if (!(typeof e != "string" || !e))
    try {
      const n = JSON.parse(e);
      if (typeof n.skill == "string" && n.skill)
        return n.skill;
    } catch {
    }
}
function Dn(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function Nl(e) {
  const n = [];
  for (const t of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const s = t[1].match(/<name>([^<]+)<\/name>/), l = t[1].match(/<dir>([^<]+)<\/dir>/);
    s && l && l[1].trim() && n.push([Dn(l[1].trim()), s[1].trim()]);
  }
  return n.sort((t, s) => s[0].length - t[0].length), n;
}
function nn(e) {
  const n = e.match(/<skill>\s*<name>([^<]+)<\/name>/);
  return n ? n[1].trim() : null;
}
function be(e, n = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Dl(e) {
  var B, Z;
  const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = [];
  let i = "";
  const d = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  let h = [];
  const y = /* @__PURE__ */ new Set(), u = [], b = new hs(), O = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  let k = 0, L = 0;
  const F = (f) => f.groups[0].cells, U = (f, p) => {
    const v = o.get(f);
    v ? v.push(p) : o.set(f, [p]);
  }, G = (f, p) => {
    if (!f)
      if (i)
        f = i;
      else {
        a.push(p);
        return;
      }
    const v = t.get(f);
    if (v)
      p.runIndex = v.turn ?? 0, F(v).push(p);
    else if (i) {
      const _ = t.get(i);
      _ ? (p.runIndex = _.turn ?? 0, F(_).push(p)) : U(f, p);
    } else
      U(f, p);
  }, T = (f, p) => {
    const v = o.get(p);
    if (v) {
      for (const _ of v) F(f).push(_);
      o.delete(p);
    }
  };
  for (const f of e) {
    const p = Et(f);
    switch (f.type) {
      case "run/start": {
        L += 1, u.length = 0, d.set(
          f.run_id,
          typeof p.channel == "string" ? p.channel : ""
        );
        const v = {
          turn: L,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${L}`, cells: [] }]
        };
        t.set(f.run_id, v), n.push(v), i = f.run_id, T(v, f.run_id);
        for (const J of a.splice(0))
          J.runIndex = L, F(v).push(J);
        const _ = Array.isArray(p.messages) ? p.messages : [], x = String(p.query ?? "");
        let $ = typeof p.slash_skill == "string" && p.slash_skill ? p.slash_skill : nn(x);
        !$ && _.length > 0 && ($ = nn(String(((B = _[0]) == null ? void 0 : B.text) ?? ""))), $ && (y.add($), u.push([$, "slash"]), b.onRunStart(), b.onSlashSkill(
          $,
          f.seq,
          ue(f.t) ?? 0
        ), O.set(`${$}#${f.seq}`, v));
        const V = {
          index: ++k,
          runIndex: L,
          runId: f.run_id,
          kind: "user",
          text: be(x) || be((Z = _.at(-1)) == null ? void 0 : Z.text),
          messages: _,
          timeSeconds: 0,
          startedAt: ue(f.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: $ ?? void 0,
          model: void 0
        };
        g.set(f.run_id, V), F(v).push(V);
        break;
      }
      case "run/end": {
        const v = t.get(f.run_id);
        i === f.run_id && (i = ""), u.length = 0, b.onRunEnd(f.seq, ue(f.t) ?? 0), d.delete(f.run_id), g.delete(f.run_id);
        const _ = String(p.status ?? "unknown");
        if (v && (v.status = _, v.durationMs = typeof p.duration_ms == "number" ? p.duration_ms : null), _ === "error" && p.error) {
          const x = v ?? {
            turn: null,
            status: _,
            durationMs: typeof p.duration_ms == "number" ? p.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          v || n.push(x), x.groups[0].cells.push({
            index: ++k,
            runIndex: L,
            runId: f.run_id,
            kind: "system",
            markerKind: "error",
            text: be(String(p.error)) || "run failed",
            marker: String(p.error ?? "run failed"),
            timeSeconds: typeof p.duration_ms == "number" ? p.duration_ms / 1e3 : null,
            startedAt: ue(f.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [f]
          });
        }
        break;
      }
      case "agent/spawn": {
        const v = typeof p.child_session_id == "string" ? p.child_session_id : void 0, _ = typeof p.child_agent_id == "string" ? p.child_agent_id : "?";
        G(f.run_id, {
          index: ++k,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${_} → ${v ?? "?"}`,
          timeSeconds: 0,
          startedAt: ue(f.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: v,
          spawnAgent: _,
          raw: [f]
        });
        break;
      }
      case "message/inbound": {
        const v = Array.isArray(p.parts) ? p.parts : [], _ = p.channel_meta && typeof p.channel_meta == "object" ? p.channel_meta : void 0, x = v.map((H) => ({
          type: String(H.type ?? "?"),
          text: typeof H.text == "string" ? H.text : void 0
        })), $ = d.get(f.run_id) ?? "", V = _ && typeof _.user_id == "string" && _.user_id ? _.user_id : void 0, J = be(
          x.map((H) => H.text ?? "").filter(Boolean).join(`
`)
        ), N = g.get(f.run_id);
        N && !N.inboundParts ? (N.inboundParts = x, N.channel = $ || void 0, N.userId = V, N.raw = [
          ...N.raw ?? [],
          f
        ], N.text || (N.text = J)) : G(f.run_id, {
          index: ++k,
          runIndex: 0,
          runId: f.run_id,
          kind: "user",
          text: J || "📥",
          timeSeconds: 0,
          startedAt: ue(f.t) ?? 0,
          isError: !1,
          running: !1,
          channel: $ || void 0,
          userId: V,
          inboundParts: x,
          raw: [f]
        });
        break;
      }
      case "message/outbound": {
        const v = typeof p.text == "string" ? p.text : "";
        G(f.run_id, {
          index: ++k,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: ue(f.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: v || void 0,
          receipt: {
            channel: d.get(f.run_id) || void 0,
            chars: v.length
          },
          raw: [f]
        });
        break;
      }
      case "approval/asked": {
        G(f.run_id, {
          index: ++k,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(p.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: ue(f.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [f]
        });
        break;
      }
      case "approval/decided": {
        const v = String(p.decision ?? "?"), _ = p.tool_name ? String(p.tool_name) : "";
        G(f.run_id, {
          index: ++k,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "approval",
          text: _ ? `${_} → ${v}` : v,
          timeSeconds: 0,
          startedAt: ue(f.t) ?? 0,
          isError: v === "denied",
          running: !1,
          raw: [f]
        });
        break;
      }
      case "llm/header": {
        const v = typeof p.sha256 == "string" ? p.sha256 : "", _ = typeof p.prev_sha256 == "string" ? p.prev_sha256 : void 0, x = p.reason === "changed" ? "changed" : "initial", $ = typeof p.system_prompt == "string" ? p.system_prompt : "", V = Array.isArray(p.tools) ? p.tools : [], J = Array.isArray(p.schemas) ? p.schemas : void 0;
        G(f.run_id, {
          index: ++k,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "header",
          text: x === "initial" ? `⚙ ${$ ? `System Prompt (${$.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ue(f.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: $,
          prevPrompt: r.get(_ ?? ""),
          headerTools: V,
          headerReason: x,
          sha: v,
          prevSha: _,
          schemas: J,
          raw: [f]
        }), v && r.set(v, $), $ && (h = Nl($));
        break;
      }
      case "llm/call": {
        const v = Et(f), _ = v.options && typeof v.options == "object" && Object.keys(v.options).length > 0 ? v.options : void 0, x = v.messages_meta, $ = x && typeof x == "object" ? {
          count: typeof x.count == "number" ? x.count : 0,
          totalChars: typeof x.total_chars == "number" ? x.total_chars : 0,
          charsByRole: tn(x.chars_by_role) ? x.chars_by_role : {},
          countByRole: tn(x.count_by_role) ? x.count_by_role : {},
          maxToolChars: typeof x.max_tool_chars == "number" ? x.max_tool_chars : 0
        } : void 0, V = {
          index: ++k,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ue(f.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(v.model ?? "unknown"),
          provider: typeof v.provider == "string" && v.provider ? v.provider : void 0,
          messagesMeta: $,
          inputNew: Rl(v.messages_new),
          contextReset: v.context_reset === !0,
          options: _
        };
        G(f.run_id, V);
        const J = s.get(f.run_id) ?? [];
        J.push({ cell: V, callData: v, call: f }), s.set(f.run_id, J);
        break;
      }
      case "llm/result": {
        const v = s.get(f.run_id), _ = v == null ? void 0 : v.shift(), x = (_ == null ? void 0 : _.callData) ?? {}, $ = typeof p.duration_ms == "number" ? p.duration_ms : null, V = p.usage ?? void 0, J = p.timing, N = Array.isArray(p.tool_calls) ? p.tool_calls : void 0, he = {
          text: (p.error ? be(String(p.error)) : be(String(p.text ?? ""))) || (N && N.length > 0 ? `🛠 ${N.map((ce) => ce.name).join(", ")}` : ""),
          timeSeconds: $ === null ? null : $ / 1e3,
          isError: !!p.error,
          running: !1,
          outputText: p.text ? String(p.text) : void 0,
          thinkingText: p.thinking ? String(p.thinking) : void 0,
          usage: V,
          timing: J,
          toolCalls: N,
          note: p.note ? String(p.note) : void 0
        };
        _ ? (Object.assign(_.cell, he), _.cell.model = String(
          p.model ?? x.model ?? _.cell.model
        ), _.cell.raw = [
          ..._.call ? [_.call] : [],
          f
        ]) : G(f.run_id, {
          index: ++k,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          startedAt: ue(f.t) ?? 0,
          model: String(p.model ?? x.model ?? "unknown"),
          ...he
        });
        break;
      }
      case "tool/call": {
        const v = Et(f), _ = String(v.name ?? "?"), x = _ === "Skill" ? Ll(v.input) : void 0;
        if (x) {
          y.add(x), u.push([x, "load"]);
          const te = b.onSkillLoad(
            x,
            f.seq,
            ue(f.t) ?? 0
          ), re = t.get(f.run_id);
          re && O.set(te, re);
        }
        const $ = v.input ? String(v.input) : void 0;
        let V;
        if (!x && $) {
          const te = typeof v.skill_resource == "string" ? v.skill_resource : void 0;
          te && (V = te);
        }
        if (!x && !V && $ && h.length > 0) {
          const te = Dn($);
          for (const [re, Te] of h)
            if (te.includes(re)) {
              V = Te;
              break;
            }
        }
        let J, N;
        if (!x && !V && $ && R.size > 0) {
          const te = ys($, R);
          te && (J = te.skill, N = te.feature);
        }
        let H, ie;
        if (!x && !V && !J && u.length > 0) {
          const [te, re] = u[u.length - 1];
          H = te, ie = re;
        }
        const he = b.onToolCall({
          attribution: V ? { skill: V, kind: "path", detail: "skill dir in input" } : J ? {
            skill: J,
            kind: "content",
            detail: `“${N}” in input (skill doc)`
          } : H ? {
            skill: H,
            kind: "temporal",
            detail: ie === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: k + 1,
          seq: f.seq,
          t: ue(f.t) ?? 0
        });
        if (he && !O.has(he)) {
          const te = t.get(f.run_id);
          te && O.set(he, te);
        }
        const ce = {
          index: ++k,
          runIndex: 0,
          runId: f.run_id,
          kind: "tool",
          text: x ? `📚 ${x}` : `${_}(${be(String(v.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: ue(f.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: _,
          skillName: x,
          inSkill: V,
          inSkillLoaded: V ? y.has(V) : void 0,
          guidedSkill: H ?? J,
          guidedReason: ie ?? (J ? "load" : void 0),
          skillSpanId: he ?? void 0,
          toolInput: v.input ? String(v.input) : void 0
        };
        G(f.run_id, ce);
        const Q = l.get(f.run_id) ?? [];
        Q.push({ cell: ce, callData: v, call: f }), l.set(f.run_id, Q);
        break;
      }
      case "tool/result": {
        const v = l.get(f.run_id), _ = typeof p.tool_call_id == "string" ? p.tool_call_id : null;
        let x;
        if (v) {
          const ie = _ ? v.findIndex(
            (he) => he.callData.tool_call_id === _
          ) : -1;
          ie >= 0 ? x = v.splice(ie, 1)[0] : x = v.shift();
        }
        const $ = typeof p.duration_ms == "number" ? p.duration_ms : null, V = p.ok !== !1 && !p.error, J = p.output ? String(p.output) : void 0, N = J ? ` → ${be(J, 60)}` : "", H = {
          timeSeconds: $ === null ? null : $ / 1e3,
          isError: !V,
          running: !1,
          toolOutput: J,
          toolOutputChars: typeof p.output_chars == "number" ? p.output_chars : void 0,
          toolOutputBytes: typeof p.output_bytes == "number" ? p.output_bytes : void 0,
          toolError: p.error ? String(p.error) : void 0,
          note: p.note ? String(p.note) : void 0
        };
        if (x) {
          if (Object.assign(x.cell, H), !x.cell.skillName)
            x.cell.text = `${x.cell.text}${N}`;
          else if (J) {
            const ie = typeof p.skill_sha == "string" ? p.skill_sha : null;
            ie && w.get(x.cell.skillName) === ie || (R.set(
              x.cell.skillName,
              gs(J)
            ), ie && w.set(x.cell.skillName, ie));
          }
          x.cell.raw = [
            ...x.call ? [x.call] : [],
            f
          ];
        } else
          G(f.run_id, {
            index: ++k,
            runIndex: 0,
            runId: f.run_id,
            kind: "tool",
            text: `?${N}`,
            startedAt: ue(f.t) ?? 0,
            ...H
          });
        break;
      }
    }
  }
  for (const [f, p] of o) {
    const v = t.get(f);
    if (v) {
      for (const _ of p) F(v).push(_);
      o.delete(f);
    }
  }
  for (const f of n) {
    const p = [];
    for (const v of f.groups)
      for (const _ of v.cells)
        _.skillName && !p.includes(_.skillName) && p.push(_.skillName);
    p.length > 0 && (f.skillsUsed = p);
  }
  const W = /* @__PURE__ */ new Map();
  for (const f of n)
    for (const p of f.groups)
      for (const v of p.cells) W.set(v.index, v);
  for (const f of b.spans()) {
    const p = O.get(f.id);
    p && (p.skillSpans ?? (p.skillSpans = [])).push(f);
    for (const v of f.attributedIndexes) {
      const _ = W.get(v);
      _ && (_.skillSpanId = f.id, _.skillSpanHue = f.colorHue, _.skillSpanBypass = f.bypass);
    }
  }
  return n;
}
function sn(e) {
  return e.flatMap((n) => n.groups.flatMap((t) => t.cells));
}
function jl(e) {
  var a;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const n = e[0], t = ((a = n.groups[0]) == null ? void 0 : a.cells) ?? [], s = t.findIndex(
    (i) => i.kind === "system" && i.headerReason === "initial" && i.prompt !== void 0
  );
  if (s < 0) return { initial: null, turns: [...e] };
  const l = t[s], o = {
    ...n,
    groups: [
      {
        ...n.groups[0],
        cells: t.filter((i, d) => d !== s)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const de = {
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
}, ln = "agent-trace-timeline-styles", Pl = `
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
let bt = !1;
function Fl() {
  if (bt || typeof document > "u") return;
  if (document.getElementById(ln)) {
    bt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = ln, e.textContent = Pl, document.head.appendChild(e), bt = !0;
}
function xt(e) {
  return bs(e);
}
function jn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function on(e) {
  return e != null && Number.isFinite(e);
}
function Pn(e) {
  if (!on(e.startedAt)) return null;
  const n = on(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + n };
}
function Fn(e, n = "sequence") {
  if (n !== "sequence")
    return Bl(
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
        (a, i) => ({
          start: t.length + i,
          end: t.length + i + 1,
          index: a.index,
          isError: a.isError === !0,
          kind: a.kind,
          label: a.text,
          lane: jn(a.kind)
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
function Bl(e, n, t) {
  const s = e.flatMap((r) => {
    const h = r.groups.flatMap(
      (y) => y.cells.flatMap((u) => {
        const b = Pn(u);
        return b === null ? [] : [
          {
            ...b,
            index: u.index,
            isError: u.isError === !0,
            kind: u.kind,
            label: u.text,
            lane: jn(u.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: r.turn, rawSpans: h }];
  }), l = s.flatMap((r) => r.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let a = 0, i = null;
  for (const r of [...l].sort(
    (h, y) => h.start - y.start || h.end - y.end
  ))
    t && i !== null && r.start > i && (a += r.start - i), o.set(r, a), i = i === null ? r.end : Math.max(i, r.end);
  const d = [], g = [];
  for (const r of s) {
    const h = r.rawSpans.map((y) => {
      const u = o.get(y) ?? 0;
      return {
        ...y,
        start: y.start - u,
        end: (n ? y.end : y.start) - u
      };
    });
    d.push(...h), r.turn !== null && g.push({
      turn: r.turn,
      time: Math.min(...h.map((y) => y.start))
    });
  }
  return {
    start: Math.min(...d.map((r) => r.start)),
    end: Math.max(...d.map((r) => r.end)),
    spans: d,
    turnBoundaries: g
  };
}
function Hl(e, n = "sequence") {
  const t = (i) => i.skillSpans ?? [];
  if (e.every((i) => t(i).length === 0)) return null;
  if (n === "sequence") {
    const i = /* @__PURE__ */ new Map();
    let d = 0;
    for (const r of e)
      for (const h of r.groups.flatMap((y) => y.cells))
        i.set(h.index, d), d += 1;
    const g = [];
    for (const r of e)
      for (const h of t(r)) {
        const y = h.attributedIndexes.map((O) => i.get(O)).filter((O) => O !== void 0);
        let u = y.length ? Math.min(...y) : void 0;
        if (u === void 0) {
          const O = r.groups.flatMap((R) => R.cells).find(
            (R) => R.kind !== "system" && R.skillName === h.skill
          );
          u = O ? i.get(O.index) : void 0;
        }
        if (u === void 0) continue;
        const b = y.length ? Math.max(...y) : u;
        g.push(rn(h, u, b + 1));
      }
    return g;
  }
  const s = e.flatMap(
    (i) => i.groups.flatMap(
      (d) => d.cells.flatMap((g) => {
        const r = Pn(g);
        return r === null ? [] : [r];
      })
    )
  );
  s.sort((i, d) => i.start - d.start || i.end - d.end);
  const l = n === "duration", o = (i) => {
    let d = 0, g = null;
    for (const r of s) {
      if (r.start >= i) break;
      if (l && g !== null && r.start > g) {
        const h = Math.min(r.start, i);
        h > g && (d += h - g);
      }
      g = g === null ? r.end : Math.max(g, r.end);
    }
    return d;
  }, a = [];
  for (const i of e)
    for (const d of t(i)) {
      const g = d.startT, r = Math.max(ps(d), g + 1), h = o(g), y = o(r);
      a.push(
        rn(
          d,
          g - h,
          Math.max(g - h + 1, r - y)
        )
      );
    }
  return a;
}
function rn(e, n, t) {
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
function Ul(e, n, t = "sequence") {
  const s = Fn(e, t);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= n.end && l.end >= n.start).map((l) => l.index)
  );
}
Fl();
const lt = window.QwenPaw.host, X = lt.React, { useEffect: qe, useMemo: kt, useRef: Je, useState: Ne } = X, { Tooltip: Wl } = lt.antd, wt = 3, Kl = 4, Vl = 0.08, Xl = 0.025, Gl = 32, ql = 0.5;
function Jl(e) {
  const n = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, o = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...n === void 0 ? {} : { durationMs: n },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function Ql(e) {
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
function Yl(e, n) {
  const t = Ql(e);
  if (n === void 0) return t;
  const s = n.durationMs === void 0 ? null : `Total ${xt(n.durationMs)}`, l = n.startedAt === void 0 ? null : n.durationMs === void 0 ? `Started ${we(n.startedAt)}` : `${we(n.startedAt)} → ${we(
    n.startedAt + n.durationMs
  )}`, o = n.ttftMs === void 0 || n.decodingMs === void 0 ? null : `TTFT ${xt(
    n.ttftMs
  )} · Decoding ${xt(n.decodingMs)}`, a = [s, o].filter((i) => i !== null).join(" · ");
  return [t, l, a].filter((i) => i !== null && i !== "").join(`
`);
}
function Ct(e, n) {
  return e <= n ? { start: e, end: n } : { start: n, end: e };
}
function Tt(e) {
  return Math.min(1, Math.max(0, e));
}
function Zl(e, n, t, s) {
  const l = Math.min(s - t, Math.max(0, n)), o = Math.min(
    Math.max(e - l / 2, t),
    s - l
  );
  return { start: o, end: o + l };
}
function an(e, n, t, s, l) {
  const o = Ct(
    Math.min(l, Math.max(s, e.start)),
    Math.min(l, Math.max(s, e.end))
  );
  return {
    start: (o.start - n) / t,
    end: (o.end - n) / t
  };
}
function Bn({
  label: e,
  placement: n,
  children: t,
  ...s
}) {
  return /* @__PURE__ */ X.createElement(
    Wl,
    {
      title: /* @__PURE__ */ X.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: ql,
      ...s
    },
    t
  );
}
function cn() {
  return /* @__PURE__ */ X.createElement("div", { className: de.labels, "aria-hidden": "true" }, /* @__PURE__ */ X.createElement("span", null, "Input"), /* @__PURE__ */ X.createElement("span", null, "Model"), /* @__PURE__ */ X.createElement("span", null, "Tools"));
}
function un({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ X.createElement(
    Bn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ X.createElement(
      "button",
      {
        type: "button",
        className: de.earlierHistory,
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
const eo = X.memo(function({
  turns: n,
  mode: t,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: a = null,
  searchMatchIndexes: i = null,
  onRangeChange: d,
  onRecordSelect: g,
  onRecordFocus: r,
  onSkillSpanSelect: h
}) {
  const y = typeof lt.useTheme == "function" ? lt.useTheme() : void 0, u = kt(
    () => Fn(n, t),
    [t, n]
  ), b = kt(
    () => Hl(n, t),
    [t, n]
  ), O = kt(
    () => new Map(
      n.flatMap(
        (S) => S.groups.flatMap(
          (D) => D.cells.map(
            (E) => [E.index, Jl(E)]
          )
        )
      )
    ),
    [n]
  ), R = Je(null), w = Je(null), k = Je(null), L = Je(null), [F, U] = Ne(null), [G, T] = Ne(null), [W, B] = Ne(!1), [Z, f] = Ne(!1), [p, v] = Ne(null), [_, x] = Ne(!1);
  qe(() => {
    u !== null && s !== null && (s.end < u.start || s.start > u.end) && d(null);
  }, [u, d, s]), qe(() => {
    u !== null && (x(!1), v(
      (S) => S !== null && (S.end < u.start || S.start > u.end) ? null : S
    ));
  }, [u]), qe(() => {
    if (u === null || a === null) return;
    const S = u.spans.find(
      (D) => D.index === a
    );
    S !== void 0 && (x(!0), v((D) => {
      if (D === null || S.end > D.start && S.start < D.end)
        return D;
      const E = Math.max(1, D.end - D.start), I = S.end <= D.start ? S.start : S.end - E, C = Math.min(
        Math.max(I, u.start),
        Math.max(u.start, u.end - E)
      );
      return C === D.start ? D : { start: C, end: C + E };
    }));
  }, [u, a]);
  const $ = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), V = Math.min(
    $,
    Math.max(1, ((p == null ? void 0 : p.end) ?? 0) - ((p == null ? void 0 : p.start) ?? 0))
  ), J = u === null || p === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(p.start, u.start),
    u.end - V
  ), N = p === null ? $ : V, H = p === null ? (u == null ? void 0 : u.start) ?? 0 : J, ie = l && u !== null && H === u.start, he = o === void 0 || W ? void 0 : () => {
    B(!0), o().finally(() => {
      B(!1);
    });
  }, ce = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(H - u.start) / N * 100}%`,
    "--trajectory-domain-width": `${$ / N * 100}%`
  }, Q = u === null || s === null ? null : an(
    s,
    H,
    N,
    u.start,
    u.end
  ), re = (u === null || F === null ? null : an(
    F,
    H,
    N,
    u.start,
    u.end
  )) ?? Q, Te = F ?? s;
  if (qe(() => {
    const S = k.current;
    if (S === null) return;
    const D = (E) => {
      E.preventDefault();
      const I = L.current;
      if (I === null || u === null) return;
      x(!1);
      const C = I.getBoundingClientRect(), K = Tt(
        (E.clientX - C.left) / Math.max(1, C.width)
      ), se = Math.min(
        $,
        Math.max(
          Math.min(
            t === "sequence" ? Kl : 20,
            $
          ),
          N * Math.exp(E.deltaY * 15e-4)
        )
      );
      if (se >= $ * 0.999) {
        v(null);
        return;
      }
      const le = H + K * N, ne = Math.min(
        Math.max(le - K * se, u.start),
        u.end - se
      );
      v({ start: ne, end: ne + se });
    };
    return S.addEventListener("wheel", D, { passive: !1 }), () => {
      S.removeEventListener("wheel", D);
    };
  }, [N, H, $, t, u]), u === null)
    return /* @__PURE__ */ X.createElement(
      "section",
      {
        ref: k,
        className: de.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ X.createElement("div", { className: de.plot }, /* @__PURE__ */ X.createElement(cn, null), /* @__PURE__ */ X.createElement("div", { className: de.track }, /* @__PURE__ */ X.createElement("span", { className: de.empty }, "No timing data"), l && /* @__PURE__ */ X.createElement(
        un,
        {
          loading: W,
          onHover: () => {
            T(null);
          },
          onLoad: he
        }
      )))
    );
  const je = Math.min(
    N,
    $ / u.spans.length
  ), Ce = (S) => {
    const D = S.currentTarget.getBoundingClientRect();
    return Tt((S.clientX - D.left) / Math.max(1, D.width));
  }, ze = (S) => {
    var C;
    const D = S.target instanceof HTMLElement ? S.target : null, E = (C = D == null ? void 0 : D.closest("[data-timeline-record-index]")) == null ? void 0 : C.dataset.timelineRecordIndex;
    if (E === void 0) return null;
    const I = Number(E);
    return Number.isFinite(I) ? I : null;
  }, We = (S) => {
    d(S);
  }, Ke = (S) => {
    if (S.button === 2) {
      w.current = {
        anchorClientX: S.clientX,
        anchorStart: H,
        moved: !1,
        pannable: p !== null,
        pointerId: S.pointerId
      }, p !== null && x(!1), f(!0), typeof S.currentTarget.setPointerCapture == "function" && S.currentTarget.setPointerCapture(S.pointerId);
      return;
    }
    if (S.button !== 0) return;
    const D = Ce(S), E = H + D * N, I = ze(S);
    T({ fraction: D, recordIndex: I }), R.current = {
      pointerId: S.pointerId,
      anchorTime: E,
      anchorClientX: S.clientX,
      recordIndex: I
    }, typeof S.currentTarget.setPointerCapture == "function" && S.currentTarget.setPointerCapture(S.pointerId), U({ start: E, end: E });
  }, at = (S) => {
    const D = S.currentTarget.getBoundingClientRect(), E = Ce(S);
    T({ fraction: E, recordIndex: ze(S) });
    const I = w.current;
    if (I !== null && I.pointerId === S.pointerId) {
      if (Math.abs(S.clientX - I.anchorClientX) >= wt && (I.moved = !0), !I.pannable) return;
      const le = (S.clientX - I.anchorClientX) / Math.max(1, D.width), ne = Math.min(
        Math.max(I.anchorStart - le * N, u.start),
        u.end - N
      );
      v({ start: ne, end: ne + N });
      return;
    }
    const C = R.current;
    if (C === null || C.pointerId !== S.pointerId) return;
    let K = H;
    if (p !== null) {
      const le = S.clientX - D.left, ne = Math.min(
        Gl,
        Math.max(1, D.width * Vl)
      ), oe = le < ne ? -1 : le > D.width - ne ? 1 : 0;
      if (oe !== 0) {
        const Oe = oe < 0 ? ne - le : le - (D.width - ne), ve = Tt(Oe / ne), Ee = H + oe * N * Xl * Math.max(0.2, ve);
        K = Math.min(
          Math.max(Ee, u.start),
          u.end - N
        ), K !== H && (x(!1), v({
          start: K,
          end: K + N
        }));
      }
    }
    const se = K + E * N;
    U(Ct(C.anchorTime, se));
  }, ct = (S) => {
    const D = w.current;
    if (D !== null && D.pointerId === S.pointerId) {
      const oe = D.moved || Math.abs(S.clientX - D.anchorClientX) >= wt;
      w.current = null, f(!1), oe || d(null);
      return;
    }
    const E = R.current;
    if (E === null || E.pointerId !== S.pointerId) return;
    const I = Ce(S), C = H + I * N, K = Ct(E.anchorTime, C);
    T({ fraction: I, recordIndex: ze(S) }), R.current = null, U(null);
    const se = Math.abs(S.clientX - E.anchorClientX) < wt, le = se && E.recordIndex !== null ? u.spans.find((oe) => oe.index === E.recordIndex) : void 0;
    if (le !== void 0) {
      d(null), g == null || g(le.index);
      return;
    }
    const ne = K.end - K.start < je ? Zl(
      se ? K.start : (K.start + K.end) / 2,
      je,
      u.start,
      u.end
    ) : K;
    if (We(ne), se) {
      const oe = K.start, Oe = u.spans.reduce((ve, Ee) => {
        const $e = oe < ve.start ? ve.start - oe : oe > ve.end ? oe - ve.end : 0;
        return (oe < Ee.start ? Ee.start - oe : oe > Ee.end ? oe - Ee.end : 0) < $e ? Ee : ve;
      });
      r == null || r(Oe.index);
    }
  }, ut = (S) => {
    S.key !== "Escape" || s === null || (S.preventDefault(), d(null));
  }, Ve = () => {
    R.current = null, w.current = null, U(null), T(null), f(!1);
  };
  return /* @__PURE__ */ X.createElement(
    "section",
    {
      ref: k,
      className: de.root,
      "data-theme": y || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ X.createElement("div", { className: de.plot }, /* @__PURE__ */ X.createElement(cn, null), /* @__PURE__ */ X.createElement(
      "div",
      {
        ref: L,
        className: de.track,
        "data-panning": Z || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: ut,
        onPointerDown: Ke,
        onPointerMove: at,
        onPointerUp: ct,
        onPointerCancel: Ve,
        onPointerLeave: () => {
          R.current === null && w.current === null && T(null);
        },
        onDoubleClick: (S) => {
          S.preventDefault(), d(null);
        },
        onContextMenu: (S) => {
          S.preventDefault();
        }
      },
      ie && /* @__PURE__ */ X.createElement(
        un,
        {
          loading: W,
          onHover: () => {
            T(null);
          },
          onLoad: he
        }
      ),
      G !== null && G.recordIndex === null && F === null && /* @__PURE__ */ X.createElement(
        "div",
        {
          className: de.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${G.fraction * 100}%`
          }
        }
      ),
      re !== null && /* @__PURE__ */ X.createElement(X.Fragment, null, /* @__PURE__ */ X.createElement(
        "div",
        {
          className: de.selection,
          "data-dragging": F === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${re.start * 100}%`,
            "--trajectory-selection-width": `${(re.end - re.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ X.createElement(
        "div",
        {
          className: de.selectionEdges,
          "data-dragging": F === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${re.start * 100}%`,
            "--trajectory-selection-width": `${(re.end - re.start) * 100}%`
          }
        }
      )),
      b !== null && u !== null && /* @__PURE__ */ X.createElement(
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
        b.map((S) => {
          const D = (S.start - u.start) / $, E = Math.max(
            (S.end - S.start) / $,
            4e-3
          ), I = ee(), C = `${S.bypass ? "⚠ " : ""}${S.skill} · ${S.trigger}${S.open ? ` · ${m(I, "spanOpen")}` : ""}`;
          return /* @__PURE__ */ X.createElement(
            "span",
            {
              key: S.spanId,
              title: C,
              onClick: h ? (K) => {
                K.stopPropagation(), h(S.spanId);
              } : void 0,
              style: {
                position: "absolute",
                left: `${Math.max(0, D) * 100}%`,
                width: `${E * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${S.hue}, 65%, 55%, 0.55)`,
                border: S.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${S.hue}, 55%, 45%, 0.8)`,
                pointerEvents: h ? "auto" : "none",
                cursor: h ? "pointer" : "default"
              }
            }
          );
        })
      ),
      /* @__PURE__ */ X.createElement(
        "div",
        {
          className: de.turnBoundaries,
          "data-animate-viewport": _ || void 0,
          "aria-hidden": "true",
          style: ce
        },
        u.turnBoundaries.filter(
          (S) => S.time > u.start && S.time >= H && S.time <= H + N
        ).map((S) => /* @__PURE__ */ X.createElement(
          "span",
          {
            className: de.turnBoundary,
            "data-turn": S.turn,
            key: S.turn,
            style: {
              "--trajectory-turn-left": `${(S.time - u.start) / $ * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ X.createElement(
        "div",
        {
          className: de.lanes,
          "data-animate-viewport": _ || void 0,
          "data-timeline-domain": !0,
          style: ce
        },
        u.spans.filter(
          (S) => S.index === a || S.end >= H && S.start <= H + N
        ).map((S) => {
          const D = (S.start - u.start) / $, I = (S.end - S.start) / $ * 100, C = O.get(S.index), K = C == null ? void 0 : C.ttftMs, se = C == null ? void 0 : C.decodingMs, le = K === void 0 || se === void 0 || K + se <= 0 ? null : K / (K + se);
          return /* @__PURE__ */ X.createElement(
            Bn,
            {
              key: S.index,
              label: Yl(S.kind, C),
              placement: "bottom"
            },
            /* @__PURE__ */ X.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: de.span,
                "data-timeline-span": S.kind,
                "data-timeline-record-index": S.index,
                "data-assistant-timing": le === null ? void 0 : "true",
                "data-error": S.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": S.index === a || void 0,
                "data-hovered": (G == null ? void 0 : G.recordIndex) === S.index || void 0,
                "data-search-match": i === null ? void 0 : i.has(S.index) ? "true" : "false",
                "data-selected": Te === null ? void 0 : S.start <= Te.end && S.end >= Te.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${D * 100}%`,
                  "--trajectory-span-width": `${I}%`,
                  "--trajectory-span-gap": `min(${I * 0.08}%, 1px)`,
                  "--trajectory-span-lane": S.lane,
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
}), At = window.QwenPaw.host, ge = At.React, { Button: to, Input: no, Segmented: so, Tooltip: dn } = At.antd, { MenuFoldOutlined: lo, MenuUnfoldOutlined: oo, ReloadOutlined: io, SearchOutlined: ro } = At.antdIcons;
function ao({
  mode: e,
  onModeChange: n,
  search: t,
  onSearchChange: s,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: a,
  hasRequests: i,
  onToggleCollapseAll: d,
  callsCollapsed: g,
  onToggleCallsCollapsed: r
}) {
  const h = ee();
  return /* @__PURE__ */ ge.createElement(
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
    /* @__PURE__ */ ge.createElement(dn, { title: m(h, "projectionHint") }, /* @__PURE__ */ ge.createElement(
      so,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (y) => n(y)
      }
    )),
    /* @__PURE__ */ ge.createElement(
      no,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ge.createElement(ro, null),
        placeholder: m(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (y) => s(y.target.value)
      }
    ),
    i && /* @__PURE__ */ ge.createElement(
      dn,
      {
        title: a ? m(h, "expandAll") : m(h, "collapseAll")
      },
      /* @__PURE__ */ ge.createElement(
        to,
        {
          size: "small",
          type: "text",
          icon: a ? /* @__PURE__ */ ge.createElement(oo, null) : /* @__PURE__ */ ge.createElement(lo, null),
          onClick: d
        }
      )
    ),
    /* @__PURE__ */ ge.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ge.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ge.createElement(io, null),
      " ",
      m(h, "refresh")
    ))
  );
}
const rt = window.QwenPaw.host, A = rt.React, { useCallback: hn, useEffect: Qe, useMemo: Se, useRef: co, useState: pe } = A, {
  Button: Ye,
  Empty: pn,
  Popconfirm: uo,
  Popover: ho,
  Space: po,
  Spin: Hn,
  Switch: fo,
  Tag: mo,
  Tooltip: go,
  message: He
} = rt.antd, { DeleteOutlined: yo, DownloadOutlined: So, SettingOutlined: fn } = rt.antdIcons, { Text: ke } = rt.antd.Typography;
function mn({
  config: e,
  onChange: n,
  children: t
}) {
  const s = ee(), l = (a, i, d) => /* @__PURE__ */ A.createElement(
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
    /* @__PURE__ */ A.createElement(ke, { style: { fontSize: 13 } }, a),
    /* @__PURE__ */ A.createElement(
      fo,
      {
        size: "small",
        checked: !!i,
        onChange: (g) => n({ [d]: g })
      }
    )
  ), o = /* @__PURE__ */ A.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ A.createElement(ke, { strong: !0, style: { fontSize: 13 } }, m(s, "settings")), /* @__PURE__ */ A.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(m(s, "enabled"), e.enabled, "enabled"),
    l(m(s, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      m(s, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      m(s, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ A.createElement(Hn, { size: "small" })));
  return /* @__PURE__ */ A.createElement(ho, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function vo({
  sessionId: e,
  summary: n,
  locale: t,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  const [o, a] = pe(null), [i, d] = pe(!1), [g, r] = pe(!1), [h, y] = pe(""), [u, b] = pe("sequence"), [O, R] = pe(null), [w, k] = pe(null), [L, F] = pe(null), [U, G] = pe(null), [T, W] = pe(
    /* @__PURE__ */ new Set()
  ), [B, Z] = pe(!1), [f, p] = pe(null), [v, _] = pe(null), [x, $] = pe(null), [V, J] = pe(null), N = co(null);
  N.current = e, Qe(() => {
    Yn().then(p).catch(() => p(null));
  }, []);
  const H = hn(async (E, I) => {
    I || d(!0);
    try {
      const C = await Qn(E, {
        beforeSeq: I,
        limit: 200
      });
      J(null), a((K) => I && K ? {
        ...C,
        events: [...C.events, ...K.events]
      } : C);
    } catch (C) {
      J({
        message: String(C.message),
        status: C instanceof _n ? C.status : null
      });
    } finally {
      I || d(!1);
    }
  }, []), ie = hn(async (E) => {
    try {
      const I = await Jn(E);
      $(I), _({
        sessionId: E,
        inputTokens: I.input_tokens,
        outputTokens: I.output_tokens,
        totalTokens: I.total_tokens,
        reasoningTokens: Number(I.reasoning_tokens ?? 0)
      });
    } catch {
      $(null), _(null);
    }
  }, []);
  Qe(() => {
    e ? (R(null), k(null), F(null), W(/* @__PURE__ */ new Set()), y(""), H(e), ie(e)) : (a(null), $(null), _(null));
  }, [e, H, ie]);
  const he = Se(
    () => o ? Dl(o.events) : [],
    [o]
  ), { initial: ce, turns: Q } = Se(
    () => jl(he),
    [he]
  ), te = Se(
    () => ce ? [ce, ...sn(Q)] : sn(Q),
    [ce, Q]
  ), re = Se(
    () => Q.some((E) => E.status === "running"),
    [Q]
  );
  Qe(() => {
    if (!e || !re) return;
    const E = setInterval(() => {
      document.visibilityState === "visible" && N.current && H(N.current);
    }, 5e3);
    return () => clearInterval(E);
  }, [e, re, H]);
  const Te = Se(
    () => O === null ? null : Ul(Q, O, u),
    [O, Q, u]
  ), je = Se(() => {
    const E = h.trim().toLowerCase();
    return E ? new Set(
      te.filter(
        (I) => [
          I.text,
          I.outputText,
          I.thinkingText,
          I.toolName,
          I.toolInput,
          I.toolOutput,
          I.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(E)
      ).map((I) => I.index)
    ) : null;
  }, [h, te]), Ce = Se(
    () => w === null ? null : te.find((E) => E.index === w) ?? null,
    [te, w]
  ), ze = Se(() => {
    var jt, Pt;
    if (L === null) return null;
    const E = Q.find((j) => j.turn === L);
    if (!E) return null;
    const I = ((jt = E.groups[0]) == null ? void 0 : jt.cells) ?? [], C = I.filter((j) => j.kind === "message"), K = I.filter((j) => j.kind === "tool"), se = [
      ...new Set(
        C.map((j) => j.model).filter((j) => !!j)
      )
    ], le = [
      ...new Set(
        C.map((j) => j.provider).filter((j) => !!j)
      )
    ];
    let ne = 0, oe = 0, Oe = 0, ve = 0, Ee = 0, $e = null, Xe = 0;
    const Rt = [];
    for (const j of I)
      j.usage && (ne += j.usage.input_tokens ?? 0, oe += j.usage.output_tokens ?? 0, Oe += j.usage.cache_input_tokens ?? 0, ve += j.usage.cache_creation_input_tokens ?? 0, Ee += j.usage.reasoning_tokens ?? 0), j.timing && ($e = $e === null ? j.timing.ttft_ms : Math.min($e, j.timing.ttft_ms), Xe = (Xe ?? 0) + j.timing.decode_ms), j.isError && Rt.push(j.toolError ?? j.text ?? "error");
    const Ae = I.find((j) => j.kind === "user"), Un = (Pt = [...C].reverse().find((j) => j.options)) == null ? void 0 : Pt.options, dt = [...C].reverse().find((j) => j.outputText);
    let Lt;
    const Nt = C.filter((j) => j.messagesMeta);
    if (Nt.length > 0) {
      const j = {};
      let Re = 0, pt = 0;
      for (const Kn of Nt) {
        const ft = Kn.messagesMeta;
        for (const [Ft, Vn] of Object.entries(ft.charsByRole))
          j[Ft] = (j[Ft] ?? 0) + Vn;
        Re += ft.totalChars, pt = Math.max(pt, ft.maxToolChars);
      }
      Lt = { charsByRole: j, totalChars: Re, maxToolChars: pt };
    }
    const ht = Q.findIndex((j) => j.turn === L), Dt = ht > 0 ? Q[ht - 1] : null;
    let Pe = null;
    if (Dt) {
      Pe = 0;
      for (const j of Dt.groups)
        for (const Re of j.cells)
          Re.kind === "message" && Re.usage && (Pe += Re.usage.input_tokens ?? 0);
    }
    const Wn = Pe === null && ht !== 0 ? void 0 : {
      prevInputTokens: Pe,
      deltaTokens: ne - (Pe ?? 0)
    };
    return {
      turn: L,
      status: E.status,
      durationMs: E.durationMs,
      startedAt: (Ae == null ? void 0 : Ae.startedAt) ?? null,
      query: (Ae == null ? void 0 : Ae.text) ?? "",
      llmCalls: C.length,
      toolCalls: K.length,
      models: se,
      providers: le,
      inputTokens: ne,
      outputTokens: oe,
      cacheReadTokens: Oe,
      cacheWriteTokens: ve,
      reasoningTokens: Ee,
      inputComposition: Lt,
      growth: Wn,
      resultIndex: dt == null ? void 0 : dt.index,
      ttftMs: $e,
      decodeMs: Xe,
      errors: Rt,
      options: Un,
      sessionTotals: v && v.sessionId === e ? {
        inputTokens: v.inputTokens,
        outputTokens: v.outputTokens,
        totalTokens: v.totalTokens,
        reasoningTokens: v.reasoningTokens
      } : void 0
    };
  }, [L, Q, v, e]), We = !!(o && o.events.length > 0 && o.events[0].seq > 1), Ke = async (E) => {
    try {
      p(await Zn(E));
    } catch (I) {
      He.error(String(I.message));
    }
  }, at = Se(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), ct = Se(() => {
    if (!x) return null;
    const E = [
      `${x.runs} ${m(t, "statRounds")} · ${x.llm_calls} ${m(t, "statSteps")}`,
      `LLM ${fe(x.llm_ms_total / 1e3)} · ${m(
        t,
        "toolCalls"
      )} ${fe(x.tool_ms_total / 1e3)}`,
      `${m(t, "statTtftAvg")} ${x.ttft_ms_avg === null ? "-" : fe(x.ttft_ms_avg / 1e3)} · ${Ot(
        x.output_tokens,
        x.decode_ms_total / 1e3
      )}`
    ];
    if (x.cache_read_tokens > 0 || x.cache_write_tokens > 0) {
      const I = x.cache_read_tokens + x.input_tokens, C = I > 0 ? Math.round(x.cache_read_tokens / I * 100) : 0;
      E.push(`${m(t, "statCacheHit")} ${C}%`);
    }
    if (E.push(
      `${m(t, "statInput")} ${Y(
        x.input_tokens
      )} tok · ${m(t, "statOutput")} ${Y(
        x.output_tokens
      )} tok`
    ), n && E.push(It(n.size_bytes)), x.skills) {
      const I = Object.entries(x.skills).sort((C, K) => K[1] - C[1]).map(([C, K]) => `${C} ×${K}`).join(" · ");
      I && E.push(`📚 ${I}`);
    }
    if (ce != null && ce.prompt) {
      const I = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
      for (const se of Q)
        for (const le of se.groups)
          for (const ne of le.cells)
            ne.skillName ? C.add(ne.skillName) : ne.inSkill && I.add(ne.inSkill);
      const K = [...I].filter((se) => !C.has(se));
      K.length > 0 && E.push(
        `⚡ ${m(t, "skillBypassStrip")}: ${K.join(" · ")}`
      );
    }
    return E.join(" | ");
  }, [x, n, t, Q, ce]), ut = () => {
    k(null), F(null);
  };
  Qe(() => {
    w !== null && G(null);
  }, [w]);
  const Ve = Se(
    () => U === null ? null : Q.flatMap((E) => E.skillSpans ?? []).find((E) => E.id === U) ?? null,
    [U, Q]
  ), S = (V == null ? void 0 : V.status) === 404, D = Ce !== null || ze !== null;
  return /* @__PURE__ */ A.createElement(
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
    /* @__PURE__ */ A.createElement(
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
      e ? /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ A.createElement(
          ke,
          {
            strong: !0,
            ellipsis: {
              tooltip: (n == null ? void 0 : n.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (n == null ? void 0 : n.title) || (n == null ? void 0 : n.agent_id) || Cn(e)
        ),
        /* @__PURE__ */ A.createElement(
          mo,
          {
            color: On[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          $n((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ A.createElement(ke, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ A.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ A.createElement(po, null, /* @__PURE__ */ A.createElement(mn, { config: f, onChange: Ke }, /* @__PURE__ */ A.createElement(Ye, { size: "small", icon: /* @__PURE__ */ A.createElement(fn, null) })), /* @__PURE__ */ A.createElement(go, { title: m(t, "export") }, /* @__PURE__ */ A.createElement(
          Ye,
          {
            size: "small",
            icon: /* @__PURE__ */ A.createElement(So, null),
            onClick: () => {
              es(e).then(() => He.success(m(t, "exported"))).catch(
                (E) => He.error(String(E.message))
              );
            }
          },
          m(t, "export")
        )), /* @__PURE__ */ A.createElement(
          uo,
          {
            title: m(t, "deleteConfirm"),
            onConfirm: () => {
              ts(e).then(() => {
                He.success(m(t, "deleted")), l == null || l();
              }).catch(
                (E) => He.error(String(E.message))
              );
            }
          },
          /* @__PURE__ */ A.createElement(Ye, { size: "small", danger: !0, icon: /* @__PURE__ */ A.createElement(yo, null) }, m(t, "delete"))
        )))
      ), /* @__PURE__ */ A.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ A.createElement(
          ke,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          ct ?? // Transient line while the stats endpoint responds.
          (n ? `${n.runs} ${m(t, "statRounds")} · ${n.llm_calls} ${m(t, "statSteps")} · ${zn(
            n.total_tokens
          )} ${m(t, "tokens")} · ${It(
            n.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ A.createElement(
          ke,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                m(t, "copySessionId"),
                m(t, "copiedSessionId")
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
      )) : /* @__PURE__ */ A.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ A.createElement(ke, { type: "secondary", style: { fontSize: 13 } }, m(t, "selectSession")),
        /* @__PURE__ */ A.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ A.createElement(mn, { config: f, onChange: Ke }, /* @__PURE__ */ A.createElement(Ye, { size: "small", icon: /* @__PURE__ */ A.createElement(fn, null) })))
      )
    ),
    V && !S && /* @__PURE__ */ A.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ A.createElement(ke, { type: "danger", style: { fontSize: 12 } }, `${m(t, "loadFailed")}: ${V.message}`)),
    /* @__PURE__ */ A.createElement(
      ao,
      {
        mode: u,
        onModeChange: b,
        search: h,
        onSearchChange: y,
        onRefresh: () => {
          e && (H(e), ie(e)), l == null || l();
        },
        modeOptions: at,
        allCollapsed: Q.length > 0 && Q.every((E) => T.has(E.turn ?? -1)),
        hasRequests: Q.some((E) => E.turn !== null),
        callsCollapsed: B,
        onToggleCallsCollapsed: () => Z((E) => !E),
        onToggleCollapseAll: () => {
          W((E) => Q.some(
            (C) => C.turn !== null && !E.has(C.turn)
          ) ? new Set(
            Q.map((C) => C.turn).filter((C) => C !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ A.createElement(
      eo,
      {
        turns: Q,
        mode: u,
        range: O,
        hasEarlierRecords: We,
        onLoadEarlier: async () => {
          var E;
          return !o || o.events.length === 0 ? !1 : (await H(e, (E = o.events[0]) == null ? void 0 : E.seq), !0);
        },
        selectedIndex: w,
        searchMatchIndexes: je,
        onRangeChange: R,
        onRecordSelect: k,
        onRecordFocus: k,
        onSkillSpanSelect: G
      }
    ),
    i && !o ? /* @__PURE__ */ A.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ A.createElement(Hn, null)) : o ? /* @__PURE__ */ A.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ A.createElement(
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
      /* @__PURE__ */ A.createElement(
        $l,
        {
          turns: Q,
          selectedIndex: w,
          selectedTurn: L,
          collapsedTurns: T,
          focusIndexes: Te,
          searchMatchIndexes: je,
          onSelectedIndexChange: (E) => {
            if (E === w) {
              k(null);
              return;
            }
            k(E), F(null);
          },
          onSelectedTurnChange: (E) => {
            F(E), k(null);
          },
          callsCollapsed: B,
          onToggleTurn: (E) => {
            W((I) => {
              const C = new Set(I);
              return C.has(E) ? C.delete(E) : C.add(E), C;
            });
          },
          hasOlderRecords: We,
          loadingOlder: g,
          onLoadOlder: () => {
            var E;
            !o || o.events.length === 0 || (r(!0), H(
              e,
              (E = o.events[0]) == null ? void 0 : E.seq
            ).finally(() => r(!1)));
          },
          emptyText: m(t, "noSessions"),
          initialRecord: ce
        }
      )
    ), Ve ? /* @__PURE__ */ A.createElement(
      Hs,
      {
        span: Ve,
        records: te,
        onJumpRecord: (E) => {
          G(null), k(E);
        },
        onClose: () => G(null)
      }
    ) : D ? /* @__PURE__ */ A.createElement(
      Ps,
      {
        record: Ce,
        request: ze,
        onJumpSession: s,
        onSelectTurn: (E) => {
          F(E), k(null);
        },
        onClose: ut
      }
    ) : null) : /* @__PURE__ */ A.createElement(
      pn,
      {
        image: pn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: S && e ? m(t, "noTraceForSession") : m(t, "selectSession")
      }
    )
  );
}
const De = window.QwenPaw.host, P = De.React, { useCallback: gn, useEffect: _t, useMemo: Ze, useState: xe } = P, { Button: yn, Empty: Sn, Input: Eo, Spin: bo, Tag: vn, Tooltip: En } = De.antd, {
  CaretRightOutlined: xo,
  MenuFoldOutlined: ko,
  MenuUnfoldOutlined: wo,
  SearchOutlined: To
} = De.antdIcons, { Text: Ue } = De.antd.Typography;
function _o({
  groups: e,
  collapsedAgents: n,
  onToggleAgent: t,
  searching: s,
  selected: l,
  onSelect: o,
  locale: a
}) {
  const i = e.length > 1;
  return /* @__PURE__ */ P.createElement(P.Fragment, null, e.map(([d, g]) => {
    const r = i && !s && n.has(d);
    return /* @__PURE__ */ P.createElement("div", { key: d }, i && /* @__PURE__ */ P.createElement(
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
        xo,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: r ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ P.createElement(Ue, { strong: !0, style: { fontSize: 12 } }, d),
      /* @__PURE__ */ P.createElement(Ue, { type: "secondary", style: { fontSize: 11 } }, g.length)
    ), !r && g.map((h) => {
      const y = h.session_id === l;
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
            background: y ? "rgba(22,119,255,0.10)" : "transparent",
            border: y ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ P.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ P.createElement(
            Ue,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || Cn(h.session_id)
          ),
          i ? null : h.agent_id ? /* @__PURE__ */ P.createElement(
            vn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          /* @__PURE__ */ P.createElement(
            vn,
            {
              color: On[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            $n(h.status)
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
          /* @__PURE__ */ P.createElement("span", null, h.runs, " ", m(a, "runs")),
          /* @__PURE__ */ P.createElement("span", null, zn(h.total_tokens), " tok"),
          h.skills ? /* @__PURE__ */ P.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(h.skills).sort((u, b) => b[1] - u[1]).map(([u, b]) => `${u} ×${b}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(h.skills).sort((u, b) => b[1] - u[1]).slice(0, 2).map(([u]) => u).join(" ")
          ) : null,
          /* @__PURE__ */ P.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: xs(h.last_event_t)
            },
            ks(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function Io() {
  const e = typeof De.useLocale == "function" ? De.useLocale() : void 0, n = Ze(
    () => zt(e ?? ee()),
    [e]
  ), [t, s] = xe(null), [l, o] = xe(!1), [a, i] = xe(
    /* @__PURE__ */ new Set()
  ), [d, g] = xe(!1), [r, h] = xe(!1), [y, u] = xe(null), [b, O] = xe(""), [R, w] = xe(null), k = gn(async () => {
    try {
      const T = await Bt({ limit: 100, offset: 0 });
      s(T.sessions), o(T.has_more), w(null);
    } catch (T) {
      w(String(T.message));
    }
  }, []), L = gn(async () => {
    h(!0);
    try {
      const T = await Bt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      s((W) => {
        const B = W ?? [];
        return [
          ...B,
          ...T.sessions.filter(
            (Z) => !B.some((f) => f.session_id === Z.session_id)
          )
        ];
      }), o(T.has_more);
    } catch (T) {
      w(String(T.message));
    } finally {
      h(!1);
    }
  }, [t]);
  _t(() => {
    k();
    try {
      const T = new URLSearchParams(window.location.search).get("session");
      T && In(T).then((W) => {
        u(W ?? T);
      });
    } catch {
    }
  }, [k]), _t(() => {
    try {
      const T = new URL(window.location.href);
      y ? T.searchParams.set("session", y) : T.searchParams.delete("session"), window.history.replaceState(window.history.state, "", T);
    } catch {
    }
  }, [y]), _t(() => {
    const T = setInterval(() => {
      document.visibilityState === "visible" && k();
    }, 15e3);
    return () => clearInterval(T);
  }, [k]);
  const F = Ze(
    () => (t == null ? void 0 : t.find((T) => T.session_id === y)) ?? null,
    [t, y]
  ), U = Ze(() => {
    if (!t) return [];
    const T = b.trim().toLowerCase();
    return T ? t.filter(
      (W) => [W.session_id, W.title ?? "", W.agent_id, W.channel].join(" ").toLowerCase().includes(T)
    ) : t;
  }, [t, b]), G = Ze(() => {
    const T = /* @__PURE__ */ new Map();
    for (const W of U) {
      const B = W.agent_id || "(unknown)", Z = T.get(B);
      Z ? Z.push(W) : T.set(B, [W]);
    }
    return [...T.entries()];
  }, [U]);
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
    /* @__PURE__ */ P.createElement(En, { title: m(n, "expandSidebar"), placement: "right" }, /* @__PURE__ */ P.createElement(
      yn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ P.createElement(wo, null),
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
        Eo,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ P.createElement(To, null),
          placeholder: m(n, "searchPlaceholder"),
          value: b,
          style: { flex: 1, minWidth: 0 },
          onChange: (T) => O(T.target.value)
        }
      ),
      /* @__PURE__ */ P.createElement(En, { title: m(n, "collapseSidebar") }, /* @__PURE__ */ P.createElement(
        yn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ P.createElement(ko, null),
          onClick: () => g(!0)
        }
      ))
    ),
    R ? /* @__PURE__ */ P.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ P.createElement(Ue, { type: "danger", style: { fontSize: 12 } }, `${m(n, "loadFailed")}: ${R}`)) : null,
    /* @__PURE__ */ P.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ P.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ P.createElement(bo, null)) : U.length === 0 ? /* @__PURE__ */ P.createElement(
      Sn,
      {
        image: Sn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ P.createElement("span", { style: { fontSize: 12 } }, m(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ P.createElement(
        Ue,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        m(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ P.createElement(
      _o,
      {
        groups: G,
        collapsedAgents: a,
        onToggleAgent: (T) => {
          i((W) => {
            const B = new Set(W);
            return B.has(T) ? B.delete(T) : B.add(T), B;
          });
        },
        searching: !!b.trim(),
        selected: y,
        onSelect: u,
        locale: n
      }
    ), t !== null && l && !b.trim() && /* @__PURE__ */ P.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ P.createElement(
      "a",
      {
        onClick: () => void L(),
        style: { fontSize: 12 }
      },
      r ? "…" : `⋯ ${m(n, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ P.createElement(
    vo,
    {
      sessionId: y,
      summary: F,
      locale: n,
      onJumpSession: u,
      onRefreshSessions: () => void k()
    }
  ));
}
const Mo = window.QwenPaw.host.React;
var bn, xn;
(xn = (bn = window.QwenPaw).registerRoutes) == null || xn.call(bn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Io,
    label: m(ee(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var kn, et, wn;
(wn = (et = (kn = window.QwenPaw.chat) == null ? void 0 : kn.rightHeader) == null ? void 0 : et.add) == null || wn.call(
  et,
  "agent-trace",
  Mo.createElement(rs),
  { id: "agent-trace-jump" }
);

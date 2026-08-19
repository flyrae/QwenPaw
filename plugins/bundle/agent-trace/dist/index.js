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
function Z() {
  try {
    return zt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function f(e, n) {
  return qn[e][n];
}
const Be = window.QwenPaw.host;
async function Jn(e) {
  return _e(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function Tn(e, n) {
  return Be.fetch ? Be.fetch(e, n) : fetch(Be.getApiUrl(e), {
    ...n,
    headers: {
      ...(n == null ? void 0 : n.headers) || {},
      ...Be.getApiToken() ? { Authorization: `Bearer ${Be.getApiToken()}` } : {}
    }
  });
}
class _n extends Error {
  constructor(n, t) {
    super(t), this.status = n, this.name = "ApiError";
  }
}
async function _e(e, n) {
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
async function Ft(e) {
  const n = new URLSearchParams();
  return n.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && n.set("offset", String(e.offset)), _e(
    `/agent-trace/sessions?${n.toString()}`
  );
}
async function Qn(e, n) {
  const t = new URLSearchParams();
  n != null && n.beforeSeq && t.set("before_seq", String(n.beforeSeq)), t.set("limit", String(n == null ? void 0 : n.limit));
  const s = t.toString();
  return _e(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${s}`
  );
}
async function Yn() {
  return _e("/agent-trace/config");
}
async function Zn(e) {
  return _e("/agent-trace/config", {
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
  await _e(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function In(e) {
  if (!e) return null;
  try {
    return (await _e(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const Te = window.QwenPaw.host, tt = Te.React, { useMemo: ns } = tt, { Button: ss, Tooltip: ls } = Te.antd, { CompassOutlined: os } = Te.antdIcons;
function is(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function rs() {
  const e = typeof Te.useLocale == "function" ? Te.useLocale() : void 0, n = ns(
    () => zt(e ?? Z()),
    [e]
  );
  return /* @__PURE__ */ tt.createElement(ls, { title: f(n, "viewCurrentTrace") }, /* @__PURE__ */ tt.createElement(
    ss,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ tt.createElement(os, null),
      "aria-label": f(n, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof Te.getCurrentSessionId == "function" ? Te.getCurrentSessionId() : null;
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
      ...t.map((p) => ({ kind: "del", text: p })),
      ...s.map((p) => ({ kind: "add", text: p }))
    ];
  const l = t.length, o = s.length, a = new Int32Array((l + 1) * (o + 1)), i = (p, y) => p * (o + 1) + y;
  for (let p = l - 1; p >= 0; p -= 1)
    for (let y = o - 1; y >= 0; y -= 1)
      a[i(p, y)] = t[p] === s[y] ? a[i(p + 1, y + 1)] + 1 : Math.max(a[i(p + 1, y)], a[i(p, y + 1)]);
  const h = [];
  let g = 0, r = 0;
  for (; g < l && r < o; )
    t[g] === s[r] ? (h.push({ kind: "same", text: t[g] }), g += 1, r += 1) : a[i(g + 1, r)] >= a[i(g, r + 1)] ? (h.push({ kind: "del", text: t[g] }), g += 1) : (h.push({ kind: "add", text: s[r] }), r += 1);
  for (; g < l; )
    h.push({ kind: "del", text: t[g] }), g += 1;
  for (; r < o; )
    h.push({ kind: "add", text: s[r] }), r += 1;
  return h;
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
const ms = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, gs = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function Mn(e, n) {
  const t = e.markerKind ? ms[e.markerKind] : void 0;
  if (t) return n === "zh-CN" ? t.zh : t.en;
  const s = gs[e.kind];
  return s ? n === "zh-CN" ? s.zh : s.en : e.kind;
}
function ys(e, n) {
  const t = (n ?? "").toLowerCase();
  let s = 4;
  return t.includes("qwen") ? s = 2.2 : t.includes("deepseek") ? s = 2.5 : t.includes("claude") && (s = 3.6), Math.round(e / s);
}
function vs(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function ue(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const n = e * 1e3;
  return n < 1e3 ? `${Math.round(n)}ms` : n < 6e4 ? `${(n / 1e3).toFixed(1)}s` : `${Math.floor(n / 6e4)}m${Math.round(n % 6e4 / 1e3)}s`;
}
function J(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function Ot(e, n) {
  return e === void 0 || !Number.isFinite(e) || n === null || n === void 0 || n <= 0 ? "-" : `${(e / n).toFixed(1)} tok/s`;
}
function ke(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function re(e) {
  if (!e) return null;
  const n = Date.parse(e);
  return Number.isFinite(n) ? n : null;
}
function Cn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function Ss(e) {
  if (!e) return "-";
  const n = new Date(e);
  return Number.isNaN(n.getTime()) ? e : n.toLocaleString();
}
function Es(e) {
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
const ot = window.QwenPaw.host, c = ot.React, { useEffect: bs, useRef: xs, useState: An } = c, { Button: Rn, Collapse: ks, Empty: Wt, Tabs: $t, Tag: Kt } = ot.antd, { Text: X } = ot.antd.Typography, { CopyOutlined: ws, CloseOutlined: Ts } = ot.antdIcons, _s = 320, Is = 720, Ge = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Ms = 2e4;
function Cs(e) {
  if (e.length > Ms) return e;
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
function me({ value: e, json: n = !1 }) {
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
    t ? "✓" : /* @__PURE__ */ c.createElement(ws, null)
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
    n ? Cs(l) : l
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
    /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ c.createElement(
      X,
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
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Input", value: `${J(e)} tok` }), t ? /* @__PURE__ */ c.createElement(z, { label: "Cached", value: `${J(t)} tok` }) : null, s ? /* @__PURE__ */ c.createElement(
    z,
    {
      label: "Cache created",
      value: `${J(s)} tok`
    }
  ) : null, t || s ? /* @__PURE__ */ c.createElement(z, { label: "Other", value: `${J(o)} tok` }) : null, /* @__PURE__ */ c.createElement(z, { label: "Output", value: `${J(n)} tok` }), l ? /* @__PURE__ */ c.createElement(z, { label: "Reasoning", value: `${J(l)} tok` }) : null, l ? /* @__PURE__ */ c.createElement(z, { label: "Content", value: `${J(a)} tok` }) : null);
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
const Xt = ["system", "user", "assistant", "tool"], zs = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function Os({
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
    const h = t.charsByRole[i], g = zs[i] ?? "roleOther";
    l.push(
      /* @__PURE__ */ c.createElement(
        z,
        {
          key: i,
          label: f(n, g),
          value: `${J(h)} ${f(
            n,
            "charUnit"
          )} · ~${J(ys(h, s))} tok ${f(
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
        label: f(n, "maxToolMsg"),
        value: `${J(t.maxToolChars)} ${f(
          n,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(X, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, f(n, "inputComposition")), l, /* @__PURE__ */ c.createElement(
    X,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    f(n, "estimateNote")
  ), e.growth ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    z,
    {
      label: f(n, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? f(n, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${J(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ c.createElement(
    z,
    {
      label: f(n, "cacheAbsorbed"),
      value: `${J(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function $s({
  request: e,
  onJumpRecord: n
}) {
  const t = Z(), [s, l] = c.useState("summary"), o = /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Started", value: ke(e.startedAt) }), /* @__PURE__ */ c.createElement(
    z,
    {
      label: "Total",
      value: ue(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ c.createElement(
    z,
    {
      label: "First TTFT",
      value: ue(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ c.createElement(
    z,
    {
      label: "Total decoding",
      value: ue(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ c.createElement(
    z,
    {
      label: f(t, "throughput"),
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
      label: f(t, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ c.createElement(
        z,
        {
          label: f(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ c.createElement(z, { label: "Query", value: As(e.query) }), /* @__PURE__ */ c.createElement(
        z,
        {
          label: f(t, "model"),
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
      )) : null, e.options ? /* @__PURE__ */ c.createElement(gt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ c.createElement(me, { value: e.options, json: !0 })) : null, /* @__PURE__ */ c.createElement(gt, { label: "Usage", onOpen: () => l("usage") }, a), /* @__PURE__ */ c.createElement(gt, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { strong: !0, style: { fontSize: 12 } }, f(t, "thisRequest")), a, /* @__PURE__ */ c.createElement(Os, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
        X,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        f(t, "sessionTotal")
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
        children: /* @__PURE__ */ c.createElement(me, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ c.createElement(
    $t,
    {
      size: "small",
      activeKey: s,
      onChange: (h) => l(h),
      items: i,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function As(e, n = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Rs({
  oldText: e,
  newText: n
}) {
  const t = c.useMemo(
    () => as(e, n),
    [e, n]
  ), s = c.useMemo(() => us(t), [t]), l = c.useMemo(() => cs(t), [t]), o = Z();
  return e === void 0 ? /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, f(o, "noPrevPrompt")) : /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ c.createElement("span", { style: { color: "#52c41a" } }, "+", s.added), " ", /* @__PURE__ */ c.createElement("span", { style: { color: "#ff4d4f" } }, "−", s.removed)), /* @__PURE__ */ c.createElement(
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
      const h = a;
      return /* @__PURE__ */ c.createElement(
        "div",
        {
          key: i,
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
function Ls({ record: e }) {
  var o;
  const n = Z(), t = e.headerTools ?? [], s = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: f(n, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "#", value: String(e.index) }), /* @__PURE__ */ c.createElement(
        z,
        {
          label: f(n, "status"),
          value: s ? f(n, "promptChanged") : f(n, "promptInitial")
        }
      ), /* @__PURE__ */ c.createElement(z, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ c.createElement(z, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ c.createElement(z, { label: "Tools", value: String(t.length) }))
    },
    ...s ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ c.createElement(
          Rs,
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
      children: /* @__PURE__ */ c.createElement(me, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 4 } }, t.map((a) => /* @__PURE__ */ c.createElement(X, { key: a, code: !0, style: { fontSize: 11 } }, a)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ c.createElement(
          ks,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((a, i) => {
              var g;
              const h = typeof a.name == "string" && a.name || typeof ((g = a.function) == null ? void 0 : g.name) == "string" && a.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ c.createElement(X, { code: !0, style: { fontSize: 11 } }, h),
                children: /* @__PURE__ */ c.createElement(me, { value: a })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ c.createElement(me, { value: e.raw })
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
      icon: /* @__PURE__ */ c.createElement(Ts, null),
      onClick: e
    }
  )) : null;
}
function Ns({
  record: e,
  request: n,
  onJumpSession: t,
  onJumpRecord: s,
  onSelectTurn: l,
  onClose: o
}) {
  const a = Z(), [i, h] = An(400), g = xs(null);
  if (bs(() => {
    const b = ($) => {
      const k = g.current;
      if (k === null) return;
      const _ = k.anchorX - $.clientX;
      h(
        Math.min(Is, Math.max(_s, k.anchorWidth + _))
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
          description: f(a, "selectRecord")
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
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(nt, { onClose: o }), /* @__PURE__ */ c.createElement($s, { request: n, onJumpRecord: s }))
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
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(nt, { onClose: o }), /* @__PURE__ */ c.createElement(Ls, { record: r }))
    );
  const p = r.usage, y = r.timing, u = [];
  return u.push({
    key: "summary",
    label: f(a, "summary"),
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
        label: f(a, "status"),
        value: r.running ? f(a, "running") : r.isError ? f(a, "error") : f(a, "success"),
        danger: r.isError
      }
    ), r.provider ? /* @__PURE__ */ c.createElement(z, { label: "Provider", value: r.provider }) : null, r.model ? /* @__PURE__ */ c.createElement(z, { label: f(a, "model"), value: r.model }) : null, r.toolName ? /* @__PURE__ */ c.createElement(z, { label: "Tool", value: r.toolName }) : null, r.inSkill ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(a, "skillResource"),
        value: r.inSkillLoaded ? `⚡ ${r.inSkill}` : `⚡ ${r.inSkill}（${f(a, "skillBypass")}）`
      }
    ) : null, r.guidedSkill ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(a, "skillGuided"),
        value: `∈ ${r.guidedSkill}（${r.guidedReason === "slash" ? f(a, "guidedBySlash") : f(a, "guidedByLoad")}）`
      }
    ) : null, r.toolOutputChars ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(a, "outputSize"),
        value: r.toolOutputBytes ? `${J(r.toolOutputChars)} ${f(
          a,
          "charUnit"
        )} · ${It(r.toolOutputBytes)} (${f(
          a,
          "beforeTruncation"
        )})` : `${J(r.toolOutputChars)} ${f(
          a,
          "charUnit"
        )}`
      }
    ) : null, r.kind === "user" && (r.channel || r.userId) ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(a, "source"),
        value: [r.channel, r.userId].filter(Boolean).join(" · ")
      }
    ) : null, r.receipt ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(a, "channel"),
        value: r.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(a, "duration"),
        value: ue(r.timeSeconds)
      }
    ), r.note ? /* @__PURE__ */ c.createElement(X, { type: "warning", style: { fontSize: 12 } }, r.note) : null, r.spawnSession ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(a, "spawnedAgent"),
        value: r.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ c.createElement(
      Rn,
      {
        size: "small",
        onClick: () => r.spawnSession && t(r.spawnSession),
        style: { marginTop: 4 }
      },
      f(a, "openChildSession")
    ) : null) : null)
  }), r.kind === "tool" ? (r.toolInput && u.push({
    key: "payload",
    label: f(a, "input"),
    children: /* @__PURE__ */ c.createElement(me, { value: r.toolInput, json: !0 })
  }), (r.toolOutput || r.toolError) && u.push({
    key: "result",
    label: f(a, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.toolError ? /* @__PURE__ */ c.createElement(X, { type: "danger", style: { fontSize: 12 } }, r.toolError) : null, r.toolOutput ? /* @__PURE__ */ c.createElement(me, { value: r.toolOutput }) : null)
  })) : (r.outputText || r.thinkingText || r.messages || r.marker || r.toolCalls && r.toolCalls.length > 0) && (r.inputNew && r.inputNew.length > 0 && u.push({
    key: "input",
    label: f(a, "inputTab"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.contextReset ? /* @__PURE__ */ c.createElement(X, { type: "warning", style: { fontSize: 12 } }, f(a, "contextReset")) : null, r.messagesMeta ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(a, "inputTotal"),
        value: `${r.messagesMeta.count} · ${J(
          r.messagesMeta.totalChars
        )} ${f(a, "charUnit")}`
      }
    ) : null, r.inputNew.map((b, O) => /* @__PURE__ */ c.createElement("div", { key: O }, /* @__PURE__ */ c.createElement(
      "div",
      {
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(X, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.role),
      /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 11 } }, J(b.chars), " ", f(a, "charUnit"), b.toolCallId ? ` · ${b.toolCallId}` : "")
    ), b.text ? /* @__PURE__ */ c.createElement(me, { value: b.text }) : null)))
  }), u.push({
    key: "raw",
    label: f(a, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.inboundParts && r.inboundParts.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, `${f(a, "inboundParts")} (${r.inboundParts.length})`), r.inboundParts.map((b, O) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: O,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(X, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.type.replace("Content", "")),
      /* @__PURE__ */ c.createElement(
        X,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        b.text ?? "-"
      )
    ))) : null, r.marker ? /* @__PURE__ */ c.createElement(me, { value: r.marker }) : null, r.toolCalls && r.toolCalls.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, `${f(a, "toolCall")} (${r.toolCalls.length})`), r.toolCalls.map((b, O) => /* @__PURE__ */ c.createElement("div", { key: b.id || O, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ c.createElement(X, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", b.name), /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 11 } }, b.id)))) : null, r.note ? /* @__PURE__ */ c.createElement(X, { type: "warning", style: { fontSize: 12 } }, r.note) : null, r.messages && r.messages.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, `${f(a, "query")} (${r.messages.length})`), r.messages.map((b, O) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: O,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(X, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, b.role),
      /* @__PURE__ */ c.createElement(
        X,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        b.text
      )
    ))) : null, r.thinkingText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, f(a, "thinking")), /* @__PURE__ */ c.createElement(me, { value: r.thinkingText })) : null, r.outputText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, f(a, "output")), /* @__PURE__ */ c.createElement(me, { value: r.outputText })) : null)
  })), (r.startedAt !== null || p || y) && u.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Started", value: ke(r.startedAt) }), /* @__PURE__ */ c.createElement(z, { label: "Total", value: ue(r.timeSeconds) }), y ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: "TTFT",
        value: ue(y.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: "Decoding",
        value: ue(y.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(a, "throughput"),
        value: Ot(
          p == null ? void 0 : p.output_tokens,
          y.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 12 } }, f(a, "noTiming")))
  }), p && u.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(z, { label: "Input", value: J(p.input_tokens) }), /* @__PURE__ */ c.createElement(z, { label: "Output", value: J(p.output_tokens) }), p.cache_creation_input_tokens ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: "Cache write",
        value: J(p.cache_creation_input_tokens)
      }
    ) : null, p.cache_input_tokens ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: "Cache read",
        value: J(p.cache_input_tokens)
      }
    ) : null, p.total_tokens !== void 0 ? /* @__PURE__ */ c.createElement(z, { label: "Total", value: J(p.total_tokens) }) : null, p.time !== void 0 ? /* @__PURE__ */ c.createElement(z, { label: "API time", value: ue(p.time) }) : null)
  }), u.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ c.createElement(me, { value: r.raw })
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
const Ds = {
  slash: "spanTriggerSlash",
  load: "spanTriggerLoad",
  resource: "spanTriggerResource"
}, js = {
  run_end: "spanEndRun",
  last_activity: "spanEndLast"
};
function Ps({
  span: e,
  records: n,
  onJumpRecord: t,
  onClose: s
}) {
  const l = Z(), o = e.endKind ? f(l, js[e.endKind]) : f(l, "spanOpen"), a = fs(e);
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
    ), /* @__PURE__ */ c.createElement(X, { strong: !0, style: { fontSize: 13 } }, e.skill), /* @__PURE__ */ c.createElement(
      Kt,
      {
        color: e.bypass ? "orange" : "geekblue",
        style: { marginInlineEnd: 0, fontSize: 10 }
      },
      f(l, Ds[e.trigger])
    )), /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(l, "spanStart"),
        value: ke(e.startT)
      }
    ), /* @__PURE__ */ c.createElement(z, { label: f(l, "spanEnd"), value: o }), e.endT !== null ? /* @__PURE__ */ c.createElement(z, { label: " ", value: ke(e.endT) }) : null, e.lastActivityT !== null ? /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(l, "spanLastActivity"),
        value: ke(e.lastActivityT)
      }
    ) : null, /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(l, "spanDuration"),
        value: a === null ? "-" : ue(a / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(l, "spanAttributed"),
        value: String(e.attributedIndexes.length)
      }
    ), /* @__PURE__ */ c.createElement(
      z,
      {
        label: f(l, "spanLoadState"),
        value: e.bypass ? f(l, "skillBypass") : e.loadSeq !== null ? `seq ${e.loadSeq}` : "-",
        danger: e.bypass
      }
    )), e.evidences.length > 0 ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ c.createElement(X, { strong: !0, style: { fontSize: 12 } }, f(l, "spanEvidence")), e.evidences.slice(0, 30).map((i, h) => /* @__PURE__ */ c.createElement(
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
      /* @__PURE__ */ c.createElement(
        Kt,
        {
          color: i.kind === "path" ? "geekblue" : "default",
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
      /* @__PURE__ */ c.createElement(X, { type: "secondary", style: { fontSize: 11 } }, i.detail)
    ))) : /* @__PURE__ */ c.createElement(
      X,
      {
        type: "secondary",
        style: { fontSize: 12, display: "block", marginTop: 10 }
      },
      f(l, "spanNoActivity")
    ))
  );
}
const oe = window.QwenPaw.host.React, Bs = oe.useRef, Fs = oe.useState;
oe.useCallback;
oe.useMemo;
const Hs = oe.useEffect, Us = oe.useLayoutEffect, Ws = oe.useReducer;
oe.createContext;
oe.useContext;
oe.createElement;
oe.cloneElement;
oe.isValidElement;
oe.memo;
oe.forwardRef;
oe.Fragment;
oe.StrictMode;
oe.version;
function Ks(e) {
  return e ? e() : void 0;
}
function Vs(e, n, t) {
  const s = new Array(e);
  return new Proxy(s, {
    get(l, o, a) {
      if (typeof o == "string") {
        const i = o.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const h = +o;
          if (Number.isInteger(h) && h >= 0 && h < e) {
            let g = l[h];
            if (!g) {
              const r = n[h * 2];
              g = l[h] = {
                index: h,
                key: t(h),
                start: r,
                size: n[h * 2 + 1],
                end: r + n[h * 2 + 1],
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
function Re(e, n, t) {
  let s = t.initialDeps ?? [], l, o = !0;
  function a() {
    var i;
    const h = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let g = 0;
    h && (g = Date.now());
    const r = e();
    if (!(r.length !== s.length || r.some((u, b) => s[b] !== u)))
      return l;
    s = r;
    let y = 0;
    if (h && (y = Date.now()), l = n(...r), h) {
      const u = Math.round((Date.now() - g) * 100) / 100, b = Math.round((Date.now() - y) * 100) / 100, O = b / 16, $ = (k, _) => {
        for (k = String(k); k.length < _; )
          k = " " + k;
        return k;
      };
      console.info(
        `%c⏱ ${$(b, 5)} /${$(u, 5)} ms`,
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
const Xs = (e, n) => Math.abs(e - n) < 1.01, Gs = (e, n, t) => {
  let s;
  return function(...l) {
    e.clearTimeout(s), s = e.setTimeout(() => n.apply(this, l), t);
  };
};
let Fe;
const vt = () => {
  if (Fe !== void 0) return Fe;
  if (typeof navigator > "u") return Fe = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Fe = !0;
  const e = navigator.maxTouchPoints;
  return Fe = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, qt = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, qs = (e) => e, Js = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), s = Math.min(e.endIndex + e.overscan, e.count - 1) - n + 1, l = new Array(s);
  for (let o = 0; o < s; o++)
    l[o] = n + o;
  return l;
}, Qs = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const l = (a) => {
    const { width: i, height: h } = a;
    n({ width: Math.round(i), height: Math.round(h) });
  };
  if (l(qt(t)), !s.ResizeObserver)
    return () => {
    };
  const o = new s.ResizeObserver((a) => {
    const i = () => {
      const h = a[0];
      if (h != null && h.borderBoxSize) {
        const g = h.borderBoxSize[0];
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
}, Ys = typeof window > "u" ? !0 : "onscrollend" in window, Zs = (e, n, t) => {
  const s = e.scrollElement;
  if (!s)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && Ys;
  let a = 0;
  const i = o ? null : Gs(
    l,
    () => n(a, !1),
    e.options.isScrollingResetDelay
  ), h = (p) => () => {
    a = t(s), i == null || i(), n(a, p);
  }, g = h(!0), r = h(!1);
  return s.addEventListener("scroll", g, st), o && s.addEventListener("scrollend", r, st), () => {
    s.removeEventListener("scroll", g), o && s.removeEventListener("scrollend", r);
  };
}, el = (e, n) => Zs(e, n, (t) => {
  const { horizontal: s, isRtl: l } = e.options;
  return s ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), tl = (e, n, t) => {
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
}, nl = (e, {
  adjustments: n = 0,
  behavior: t
}, s) => {
  var l, o;
  (o = (l = s.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [s.options.horizontal ? "left" : "top"]: e + n,
    behavior: t
  });
}, sl = nl;
class ll {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, s, l;
      return ((l = (s = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : s.now) == null ? void 0 : l.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const s = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const a = () => {
            const i = o.target, h = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [g, r] of this.elementsCache)
                if (r === i) {
                  this.elementsCache.delete(g);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(h) && this.resizeItem(
              h,
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
        getItemKey: qs,
        rangeExtractor: Js,
        onChange: () => {
        },
        measureElement: tl,
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
      let i = null, h = null, g = !1;
      if (a !== void 0 && a.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const y = a.count, u = o.count, b = this.getMeasurements(), O = y > 0 ? ((s = b[0]) == null ? void 0 : s.key) ?? a.getItemKey(0) : null, $ = y > 0 ? ((l = b[y - 1]) == null ? void 0 : l.key) ?? a.getItemKey(y - 1) : null;
        if (u !== y || y > 0 && u > 0 && (o.getItemKey(0) !== O || o.getItemKey(u - 1) !== $)) {
          g = !0;
          const P = y > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? b[0] : null;
          P && (i = [P.key, this.getScrollOffset() - P.start]);
          const L = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          L && u > y && this.isAtEnd(a.scrollEndThreshold) && (y === 0 || o.getItemKey(u - 1) !== $) && (h = L);
        }
      }
      this.options = o, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let r = !1, p = 0;
      if (i && this.scrollOffset !== null) {
        const [y, u] = i, b = this.getMeasurements(), { count: O, getItemKey: $ } = this.options;
        let k = 0;
        for (; k < O && $(k) !== y; )
          k++;
        if (k < O) {
          const _ = b[k];
          if (_) {
            const P = Math.max(0, _.start + u);
            P !== this.scrollOffset && (p = P - this.scrollOffset, this.scrollOffset = P, r = !0);
          }
        }
      }
      (r || h) && (this.pendingScrollAnchor = [
        r ? i[0] : null,
        r ? i[1] : 0,
        h,
        p
      ]);
    }, this.notify = (t) => {
      var s, l;
      (l = (s = this.options).onChange) == null || l.call(s, this, t);
    }, this.maybeNotify = Re(
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
            this._iosTouching = !1, !(!vt() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
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
        const [o, a, i, h] = l;
        o !== null && !i && (vt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? h !== 0 && (this._iosDeferredAdjustment += h) : this._scrollToOffset(this.getScrollOffset(), {
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
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Re(
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
      (t, s, l, o, a, i, h, g) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: a,
        lanes: i,
        laneAssignmentMode: h,
        gap: g
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Re(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: s,
        scrollMargin: l,
        getItemKey: o,
        enabled: a,
        lanes: i,
        laneAssignmentMode: h,
        gap: g
      }, r) => {
        const p = this.itemSizeCache;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const k of this.laneAssignments.keys())
            k >= t && this.laneAssignments.delete(k);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((k) => {
          this.itemSizeCache.set(k.key, k.size);
        }));
        const y = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const k = t * 2;
          let _ = this._flatMeasurements;
          if (!_ || _.length < k) {
            const U = new Float64Array(k);
            _ && y > 0 && U.set(_.subarray(0, y * 2)), _ = U, this._flatMeasurements = _;
          }
          let P;
          if (y === 0)
            P = s + l;
          else {
            const U = y - 1;
            P = _[U * 2] + _[U * 2 + 1] + g;
          }
          for (let U = y; U < t; U++) {
            const Y = o(U), w = p.get(Y), H = typeof w == "number" ? w : this.options.estimateSize(U);
            _[U * 2] = P, _[U * 2 + 1] = H, P += H + g;
          }
          const L = Vs(t, _, o);
          return this.measurementsCache = L, L;
        }
        const u = this.measurementsCache.slice(0, y), b = new Array(i).fill(
          void 0
        ), O = new Float64Array(i);
        let $ = 0;
        for (let k = 0; k < y; k++) {
          const _ = u[k];
          _ && (b[_.lane] === void 0 && $++, b[_.lane] = k, O[_.lane] = _.end);
        }
        for (let k = y; k < t; k++) {
          const _ = o(k), P = this.laneAssignments.get(k);
          let L, U;
          const Y = h === "estimate" || p.has(_);
          if (P !== void 0 && this.options.lanes > 1) {
            L = P;
            const m = b[L], S = m !== void 0 ? u[m] : void 0;
            U = S ? S.end + g : s + l;
          } else if ($ === i) {
            let m = 0, S = O[0], x = b[0];
            for (let T = 1; T < i; T++) {
              const B = O[T];
              (B < S || B === S && b[T] < x) && (m = T, S = B, x = b[T]);
            }
            L = m, U = S + g, Y && this.laneAssignments.set(k, L);
          } else
            L = k % this.options.lanes, U = s + l, Y && this.laneAssignments.set(k, L);
          const w = p.get(_), H = typeof w == "number" ? w : this.options.estimateSize(k), d = U + H;
          u[k] = {
            index: k,
            start: U,
            size: H,
            end: d,
            key: _,
            lane: L
          }, b[L] === void 0 && $++, b[L] = k, O[L] = d;
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Re(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, s, l, o) => t.length === 0 || s === 0 ? (this.range = null, null) : (this.range = il(
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
    ), this.getVirtualIndexes = Re(
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
      let a, i, h;
      const g = this._flatMeasurements;
      if (this.options.lanes === 1 && g !== null)
        h = this.options.getItemKey(t), i = g[t * 2], a = g[t * 2 + 1];
      else {
        const y = this.measurementsCache[t];
        if (!y) return;
        h = y.key, i = y.start, a = y.size;
      }
      const r = this.itemSizeCache.get(h) ?? a, p = s - r;
      if (p !== 0) {
        const y = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, u = y ? this.getTotalSize() : 0, b = this.getScrollOffset() + this.scrollAdjustments, $ = !this.itemSizeCache.has(h) ? (
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
        ), k = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: h,
            start: i,
            size: a,
            end: i + a,
            lane: 0
          },
          p,
          this
        ) : $);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(h, s), this.itemSizeCacheVersion++;
        let _ = !1;
        y ? _ = this.applyScrollAdjustment(
          this.getTotalSize() - u
        ) : k && (_ = this.applyScrollAdjustment(p)), this.notify(_);
      }
    }, this.getVirtualItems = Re(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, s) => {
        const l = [];
        for (let o = 0, a = t.length; o < a; o++) {
          const i = t[o], h = s[i];
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
      const [a, i] = o, h = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: l,
        startedAt: h,
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
    return n === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", n), vt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += n, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    if (!a && Xs(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, a) {
      const i = this.getSize() || 600, h = Math.abs(l - this.getScrollOffset()), g = this.scrollState.behavior === "smooth" && h > i;
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
function ol(e, n, t) {
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
function il(e, n, t, s, l) {
  const o = e.length - 1;
  if (e.length <= s)
    return { startIndex: 0, endIndex: o };
  if (s === 1 && l !== null) {
    const g = ol(
      l,
      o,
      t
    );
    let r = g;
    const p = t + n;
    for (; r < o && l[r * 2] + l[r * 2 + 1] < p; )
      r++;
    return { startIndex: g, endIndex: r };
  }
  let i = Ln(0, o, (g) => e[g].start, t), h = i;
  if (s === 1)
    for (; h < o && e[h].end < t + n; )
      h++;
  else if (s > 1) {
    const g = Array(s).fill(0);
    for (; h < o && g.some((p) => p < t + n); ) {
      const p = e[h];
      g[p.lane] = p.end, h++;
    }
    const r = Array(s).fill(t + n);
    for (; i >= 0 && r.some((p) => p >= t); ) {
      const p = e[i];
      r[p.lane] = p.start, i--;
    }
    i = Math.max(0, i - i % s), h = Math.min(o, h + (s - 1 - h % s));
  }
  return { startIndex: i, endIndex: h };
}
const St = typeof document < "u" ? Us : Hs;
function rl({
  useFlushSync: e = !0,
  directDomUpdates: n = !1,
  directDomUpdatesMode: t = "transform",
  ...s
}) {
  const l = Ws((r) => r + 1, 0)[1], o = Bs({
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
    const p = o.current;
    if (!p.enabled || !p.container) return;
    const y = r.getTotalSize();
    if (y !== p.lastSize) {
      p.lastSize = y;
      const u = r.options.horizontal ? "width" : "height";
      p.container.style[u] = `${y}px`;
    }
  }, i = (r) => {
    const p = o.current;
    if (!p.enabled || !p.container) return;
    a(r);
    const y = !!r.options.horizontal, u = p.mode === "transform", b = y ? "left" : "top", O = r.options.scrollMargin, $ = r.getVirtualItems();
    for (const k of $) {
      const _ = k.start - O, P = r.elementsCache.get(k.key);
      P && p.lastPositions.get(P) !== _ && (p.lastPositions.set(P, _), u ? P.style.transform = y ? `translate3d(${_}px, 0, 0)` : `translate3d(0, ${_}px, 0)` : P.style[b] = `${_}px`);
    }
  }, h = {
    ...s,
    onChange: (r, p) => {
      var y;
      const u = o.current;
      let b = !0;
      if (u.enabled) {
        i(r);
        const O = r.range, $ = u.prevRange;
        b = !$ || $.isScrolling !== r.isScrolling || $.startIndex !== (O == null ? void 0 : O.startIndex) || $.endIndex !== (O == null ? void 0 : O.endIndex), b && (u.prevRange = O ? {
          startIndex: O.startIndex,
          endIndex: O.endIndex,
          isScrolling: r.isScrolling
        } : null);
      }
      b && (e && p ? Ks(l) : l()), (y = s.onChange) == null || y.call(s, r, p);
    }
  }, [g] = Fs(() => {
    const r = new ll(h);
    return Object.assign(r, {
      containerRef: (p) => {
        const y = o.current;
        if (y.container = p, y.lastSize = null, p && y.enabled) {
          const u = r.getTotalSize();
          y.lastSize = u;
          const b = r.options.horizontal ? "width" : "height";
          p.style[b] = `${u}px`;
        }
      }
    });
  });
  return g.setOptions(h), St(() => g._didMount(), []), St(() => (a(g), g._willUpdate())), St(() => {
    i(g);
  }), g;
}
function al(e) {
  return rl({
    observeElementRect: Qs,
    observeElementOffset: el,
    scrollToFn: sl,
    ...e
  });
}
const it = window.QwenPaw.host, M = it.React, { useRef: cl } = M, { Tag: we } = it.antd, { Text: he } = it.antd.Typography, {
  CaretRightOutlined: ul,
  CloseCircleOutlined: dl,
  FileTextOutlined: hl,
  RobotOutlined: pl,
  RocketOutlined: fl,
  SafetyOutlined: ml,
  SendOutlined: gl,
  SettingOutlined: yl,
  ToolOutlined: vl,
  UserOutlined: Sl
} = it.antdIcons, El = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, bl = {
  user: /* @__PURE__ */ M.createElement(Sl, null),
  message: /* @__PURE__ */ M.createElement(pl, null),
  tool: /* @__PURE__ */ M.createElement(vl, null),
  system: /* @__PURE__ */ M.createElement(yl, null)
}, Jt = {
  approval: { color: "volcano", icon: /* @__PURE__ */ M.createElement(ml, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ M.createElement(gl, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ M.createElement(fl, null) },
  header: { color: "green", icon: /* @__PURE__ */ M.createElement(hl, null) },
  error: { color: "red", icon: /* @__PURE__ */ M.createElement(dl, null) }
}, xl = {
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
}, kl = 150, Mt = 26, Nn = 34, Yt = 9, Zt = 30;
function wl(e) {
  const n = Z(), t = Qt[e] ?? Qt.unknown;
  return n === "zh-CN" ? t.zh : t.en;
}
const Tl = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function _l(e, n) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e.inboundParts ?? []) {
    const l = Tl[s.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([s, l]) => `${f(n, s)}×${l}`).join(" ");
}
function Il(e, n) {
  const t = e.receipt, s = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${f(n, "replySent")}${s} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${f(n, "chars")}`;
}
function en({
  record: e,
  selected: n,
  dimmed: t,
  multiRequest: s,
  onSelect: l
}) {
  var i, h;
  const o = e.usage, a = o && (o.input_tokens || o.output_tokens) ? `${J(o.input_tokens)}→${J(
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
      we,
      {
        color: e.kind === "tool" && e.skillName ? "geekblue" : e.markerKind && ((i = Jt[e.markerKind]) == null ? void 0 : i.color) || El[e.kind] || "default",
        icon: e.markerKind && ((h = Jt[e.markerKind]) == null ? void 0 : h.icon) || bl[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.kind === "tool" && e.skillName ? f(Z(), "skillLoadKind") : Mn(e, Z())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ M.createElement(
      we,
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
      we,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${f(Z(), "skillBypass")}`,
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
      we,
      {
        title: `${e.guidedSkill} — ${e.guidedReason === "slash" ? f(Z(), "guidedBySlash") : f(Z(), "guidedByLoad")}`,
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
      we,
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
      e.receipt ? /* @__PURE__ */ M.createElement(he, { type: "secondary", style: { fontSize: 12 } }, Il(e, Z())) : e.kind === "tool" && e.skillName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(he, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ M.createElement(he, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ M.createElement(he, { type: "secondary", style: { fontSize: 12 } }, ` · ${f(Z(), "skillLoaded")} ${J(
        e.toolOutputChars
      )} ${f(Z(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(he, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ M.createElement(he, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ M.createElement(
        he,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(
        he,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(he, { type: "secondary", style: { fontSize: 11 } }, ` ${_l(e, Z()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ M.createElement(he, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
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
      (e.kind === "message" || e.kind === "tool") && ue(e.timeSeconds)
    )
  );
}
function Ml({
  turn: e,
  collapsed: n,
  selected: t,
  cellCount: s,
  onToggle: l,
  onSelect: o
}) {
  const a = Z();
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
        ul,
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
      /* @__PURE__ */ M.createElement(he, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ M.createElement(he, { type: "secondary", style: { fontSize: 11 } }, ue(e.durationMs / 1e3)),
      /* @__PURE__ */ M.createElement(he, { type: "secondary", style: { fontSize: 11 } }, s, " ", f(a, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? /* @__PURE__ */ M.createElement(
        we,
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
        we,
        {
          color: xl[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        wl(e.status)
      )
    )
  );
}
function Cl({
  turns: e,
  selectedIndex: n,
  selectedTurn: t,
  collapsedTurns: s,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: a,
  onSelectedTurnChange: i,
  onToggleTurn: h,
  callsCollapsed: g,
  hasOlderRecords: r,
  loadingOlder: p,
  onLoadOlder: y,
  initialRecord: u,
  emptyText: b
}) {
  const O = Z(), $ = cl(null), k = e.filter((w) => w.turn !== null), _ = k.length > 1, P = M.useMemo(() => {
    var H;
    const w = [];
    r && w.push({
      key: "load-older",
      height: Zt,
      type: "load-older"
    }), u && (w.push({
      key: "initial",
      height: Mt,
      type: "initial",
      record: u
    }), w.push({
      key: "initial-divider",
      height: Yt,
      type: "divider"
    }));
    for (const d of k) {
      const m = d.turn;
      if (w.push({
        key: `turn-${m}`,
        height: Nn,
        type: "boundary",
        turn: d
      }), !s.has(m))
        for (const S of ((H = d.groups[0]) == null ? void 0 : H.cells) ?? [])
          g && S.kind === "tool" || w.push({
            key: `rec-${S.index}`,
            height: Mt,
            type: "record",
            record: S
          });
    }
    return w;
  }, [
    k,
    s,
    g,
    r,
    u
  ]), L = M.useCallback(
    (w) => l !== null && !l.has(w.index) || o !== null && !o.has(w.index),
    [l, o]
  ), U = (w) => {
    var H;
    switch (w.type) {
      case "load-older":
        return /* @__PURE__ */ M.createElement("div", { style: { textAlign: "center", height: Zt } }, /* @__PURE__ */ M.createElement(
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
          p ? "…" : `⋯ ${f(O, "loadOlder")}`
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
        const d = w.record;
        return /* @__PURE__ */ M.createElement(
          en,
          {
            record: d,
            selected: n === d.index,
            dimmed: L(d),
            multiRequest: _,
            onSelect: () => a(d.index)
          }
        );
      }
      case "boundary": {
        const d = w.turn, m = d.turn;
        return /* @__PURE__ */ M.createElement(
          Ml,
          {
            turn: d,
            collapsed: s.has(m),
            selected: t === m,
            cellCount: ((H = d.groups[0]) == null ? void 0 : H.cells.length) ?? 0,
            onToggle: () => h(m),
            onSelect: () => i(m)
          }
        );
      }
      case "record":
      default: {
        const d = w.record;
        return /* @__PURE__ */ M.createElement(
          en,
          {
            record: d,
            selected: n === d.index,
            dimmed: L(d),
            multiRequest: _,
            onSelect: () => a(d.index)
          }
        );
      }
    }
  };
  if (P.length === 0)
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
        b ?? f(O, "noSessions")
      )
    );
  const Y = P.length <= kl ? /* @__PURE__ */ M.createElement("div", null, P.map((w) => U(w))) : /* @__PURE__ */ M.createElement(
    zl,
    {
      rows: P,
      scrollRef: $,
      renderRow: U
    }
  );
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      ref: $,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    Y
  );
}
function zl({
  rows: e,
  scrollRef: n,
  renderRow: t
}) {
  const s = al({
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
function Ol(e) {
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
function $l(e) {
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
function Al(e) {
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
function Ee(e, n = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > n ? `${t.slice(0, n)}…` : t;
}
function Rl(e) {
  var w, H;
  const n = [], t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = [];
  let i = "";
  const h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  let p = [];
  const y = /* @__PURE__ */ new Set(), u = [], b = new hs(), O = /* @__PURE__ */ new Map();
  let $ = 0, k = 0;
  const _ = (d) => d.groups[0].cells, P = (d, m) => {
    const S = o.get(d);
    S ? S.push(m) : o.set(d, [m]);
  }, L = (d, m) => {
    if (!d)
      if (i)
        d = i;
      else {
        a.push(m);
        return;
      }
    const S = t.get(d);
    if (S)
      m.runIndex = S.turn ?? 0, _(S).push(m);
    else if (i) {
      const x = t.get(i);
      x ? (m.runIndex = x.turn ?? 0, _(x).push(m)) : P(d, m);
    } else
      P(d, m);
  }, U = (d, m) => {
    const S = o.get(m);
    if (S) {
      for (const x of S) _(d).push(x);
      o.delete(m);
    }
  };
  for (const d of e) {
    const m = Et(d);
    switch (d.type) {
      case "run/start": {
        k += 1, u.length = 0, h.set(
          d.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const S = {
          turn: k,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${k}`, cells: [] }]
        };
        t.set(d.run_id, S), n.push(S), i = d.run_id, U(S, d.run_id);
        for (const F of a.splice(0))
          F.runIndex = k, _(S).push(F);
        const x = Array.isArray(m.messages) ? m.messages : [], T = String(m.query ?? "");
        let B = nn(T);
        !B && x.length > 0 && (B = nn(String(((w = x[0]) == null ? void 0 : w.text) ?? ""))), B && (y.add(B), u.push([B, "slash"]), b.onRunStart(), b.onSlashSkill(
          B,
          d.seq,
          re(d.t) ?? 0
        ), O.set(`${B}#${d.seq}`, S));
        const R = {
          index: ++$,
          runIndex: k,
          runId: d.run_id,
          kind: "user",
          text: Ee(T) || Ee((H = x.at(-1)) == null ? void 0 : H.text),
          messages: x,
          timeSeconds: 0,
          startedAt: re(d.t) ?? 0,
          isError: !1,
          running: !1,
          skillName: B ?? void 0,
          model: void 0
        };
        g.set(d.run_id, R), _(S).push(R);
        break;
      }
      case "run/end": {
        const S = t.get(d.run_id);
        i === d.run_id && (i = ""), u.length = 0, b.onRunEnd(d.seq, re(d.t) ?? 0), h.delete(d.run_id), g.delete(d.run_id);
        const x = String(m.status ?? "unknown");
        if (S && (S.status = x, S.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), x === "error" && m.error) {
          const T = S ?? {
            turn: null,
            status: x,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || n.push(T), T.groups[0].cells.push({
            index: ++$,
            runIndex: k,
            runId: d.run_id,
            kind: "system",
            markerKind: "error",
            text: Ee(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: re(d.t) ?? 0,
            isError: !0,
            running: !1,
            raw: [d]
          });
        }
        break;
      }
      case "agent/spawn": {
        const S = typeof m.child_session_id == "string" ? m.child_session_id : void 0, x = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        L(d.run_id, {
          index: ++$,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${x} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: re(d.t) ?? 0,
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: x,
          raw: [d]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(m.parts) ? m.parts : [], x = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, T = S.map((ne) => ({
          type: String(ne.type ?? "?"),
          text: typeof ne.text == "string" ? ne.text : void 0
        })), B = h.get(d.run_id) ?? "", R = x && typeof x.user_id == "string" && x.user_id ? x.user_id : void 0, F = Ee(
          T.map((ne) => ne.text ?? "").filter(Boolean).join(`
`)
        ), G = g.get(d.run_id);
        G && !G.inboundParts ? (G.inboundParts = T, G.channel = B || void 0, G.userId = R, G.raw = [
          ...G.raw ?? [],
          d
        ], G.text || (G.text = F)) : L(d.run_id, {
          index: ++$,
          runIndex: 0,
          runId: d.run_id,
          kind: "user",
          text: F || "📥",
          timeSeconds: 0,
          startedAt: re(d.t) ?? 0,
          isError: !1,
          running: !1,
          channel: B || void 0,
          userId: R,
          inboundParts: T,
          raw: [d]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof m.text == "string" ? m.text : "";
        L(d.run_id, {
          index: ++$,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: re(d.t) ?? 0,
          isError: !1,
          running: !1,
          outputText: S || void 0,
          receipt: {
            channel: h.get(d.run_id) || void 0,
            chars: S.length
          },
          raw: [d]
        });
        break;
      }
      case "approval/asked": {
        L(d.run_id, {
          index: ++$,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(m.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: re(d.t) ?? 0,
          isError: !1,
          running: !1,
          raw: [d]
        });
        break;
      }
      case "approval/decided": {
        const S = String(m.decision ?? "?"), x = m.tool_name ? String(m.tool_name) : "";
        L(d.run_id, {
          index: ++$,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: x ? `${x} → ${S}` : S,
          timeSeconds: 0,
          startedAt: re(d.t) ?? 0,
          isError: S === "denied",
          running: !1,
          raw: [d]
        });
        break;
      }
      case "llm/header": {
        const S = typeof m.sha256 == "string" ? m.sha256 : "", x = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, T = m.reason === "changed" ? "changed" : "initial", B = typeof m.system_prompt == "string" ? m.system_prompt : "", R = Array.isArray(m.tools) ? m.tools : [], F = Array.isArray(m.schemas) ? m.schemas : void 0;
        L(d.run_id, {
          index: ++$,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "header",
          text: T === "initial" ? `⚙ ${B ? `System Prompt (${B.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: re(d.t) ?? 0,
          isError: !1,
          running: !1,
          prompt: B,
          prevPrompt: r.get(x ?? ""),
          headerTools: R,
          headerReason: T,
          sha: S,
          prevSha: x,
          schemas: F,
          raw: [d]
        }), S && r.set(S, B), B && (p = Al(B));
        break;
      }
      case "llm/call": {
        const S = Et(d), x = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, T = S.messages_meta, B = T && typeof T == "object" ? {
          count: typeof T.count == "number" ? T.count : 0,
          totalChars: typeof T.total_chars == "number" ? T.total_chars : 0,
          charsByRole: tn(T.chars_by_role) ? T.chars_by_role : {},
          countByRole: tn(T.count_by_role) ? T.count_by_role : {},
          maxToolChars: typeof T.max_tool_chars == "number" ? T.max_tool_chars : 0
        } : void 0, R = {
          index: ++$,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: re(d.t) ?? 0,
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: B,
          inputNew: Ol(S.messages_new),
          contextReset: S.context_reset === !0,
          options: x
        };
        L(d.run_id, R);
        const F = s.get(d.run_id) ?? [];
        F.push({ cell: R, callData: S, call: d }), s.set(d.run_id, F);
        break;
      }
      case "llm/result": {
        const S = s.get(d.run_id), x = S == null ? void 0 : S.shift(), T = (x == null ? void 0 : x.callData) ?? {}, B = typeof m.duration_ms == "number" ? m.duration_ms : null, R = m.usage ?? void 0, F = m.timing, G = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, V = {
          text: (m.error ? Ee(String(m.error)) : Ee(String(m.text ?? ""))) || (G && G.length > 0 ? `🛠 ${G.map((ie) => ie.name).join(", ")}` : ""),
          timeSeconds: B === null ? null : B / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: R,
          timing: F,
          toolCalls: G,
          note: m.note ? String(m.note) : void 0
        };
        x ? (Object.assign(x.cell, V), x.cell.model = String(
          m.model ?? T.model ?? x.cell.model
        ), x.cell.raw = [
          ...x.call ? [x.call] : [],
          d
        ]) : L(d.run_id, {
          index: ++$,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          startedAt: re(d.t) ?? 0,
          model: String(m.model ?? T.model ?? "unknown"),
          ...V
        });
        break;
      }
      case "tool/call": {
        const S = Et(d), x = String(S.name ?? "?"), T = x === "Skill" ? $l(S.input) : void 0;
        if (T) {
          y.add(T), u.push([T, "load"]);
          const ie = b.onSkillLoad(
            T,
            d.seq,
            re(d.t) ?? 0
          ), pe = t.get(d.run_id);
          pe && O.set(ie, pe);
        }
        const B = S.input ? String(S.input) : void 0;
        let R;
        if (!T && B && p.length > 0) {
          const ie = Dn(B);
          for (const [pe, de] of p)
            if (ie.includes(pe)) {
              R = de;
              break;
            }
        }
        let F, G;
        if (!T && !R && u.length > 0) {
          const [ie, pe] = u[u.length - 1];
          F = ie, G = pe;
        }
        const ne = b.onToolCall({
          attribution: R ? { skill: R, kind: "path", detail: "skill dir in input" } : F ? {
            skill: F,
            kind: "temporal",
            detail: G === "slash" ? "after slash invocation" : "after skill load"
          } : null,
          recordIndex: $ + 1,
          seq: d.seq,
          t: re(d.t) ?? 0
        });
        if (ne && !O.has(ne)) {
          const ie = t.get(d.run_id);
          ie && O.set(ne, ie);
        }
        const q = {
          index: ++$,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: T ? `📚 ${T}` : `${x}(${Ee(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: re(d.t) ?? 0,
          isError: !1,
          running: !0,
          toolName: x,
          skillName: T,
          inSkill: R,
          inSkillLoaded: R ? y.has(R) : void 0,
          guidedSkill: F,
          guidedReason: G,
          skillSpanId: ne ?? void 0,
          toolInput: S.input ? String(S.input) : void 0
        };
        L(d.run_id, q);
        const V = l.get(d.run_id) ?? [];
        V.push({ cell: q, callData: S, call: d }), l.set(d.run_id, V);
        break;
      }
      case "tool/result": {
        const S = l.get(d.run_id), x = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let T;
        if (S) {
          const q = x ? S.findIndex(
            (V) => V.callData.tool_call_id === x
          ) : -1;
          q >= 0 ? T = S.splice(q, 1)[0] : T = S.shift();
        }
        const B = typeof m.duration_ms == "number" ? m.duration_ms : null, R = m.ok !== !1 && !m.error, F = m.output ? String(m.output) : void 0, G = F ? ` → ${Ee(F, 60)}` : "", ne = {
          timeSeconds: B === null ? null : B / 1e3,
          isError: !R,
          running: !1,
          toolOutput: F,
          toolOutputChars: typeof m.output_chars == "number" ? m.output_chars : void 0,
          toolOutputBytes: typeof m.output_bytes == "number" ? m.output_bytes : void 0,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        T ? (Object.assign(T.cell, ne), T.cell.skillName || (T.cell.text = `${T.cell.text}${G}`), T.cell.raw = [
          ...T.call ? [T.call] : [],
          d
        ]) : L(d.run_id, {
          index: ++$,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `?${G}`,
          startedAt: re(d.t) ?? 0,
          ...ne
        });
        break;
      }
    }
  }
  for (const [d, m] of o) {
    const S = t.get(d);
    if (S) {
      for (const x of m) _(S).push(x);
      o.delete(d);
    }
  }
  for (const d of n) {
    const m = [];
    for (const S of d.groups)
      for (const x of S.cells)
        x.skillName && !m.includes(x.skillName) && m.push(x.skillName);
    m.length > 0 && (d.skillsUsed = m);
  }
  const Y = /* @__PURE__ */ new Map();
  for (const d of n)
    for (const m of d.groups)
      for (const S of m.cells) Y.set(S.index, S);
  for (const d of b.spans()) {
    const m = O.get(d.id);
    m && (m.skillSpans ?? (m.skillSpans = [])).push(d);
    for (const S of d.attributedIndexes) {
      const x = Y.get(S);
      x && (x.skillSpanId = d.id, x.skillSpanHue = d.colorHue, x.skillSpanBypass = d.bypass);
    }
  }
  return n;
}
function sn(e) {
  return e.flatMap((n) => n.groups.flatMap((t) => t.cells));
}
function Ll(e) {
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
        cells: t.filter((i, h) => h !== s)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const ae = {
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
}, ln = "agent-trace-timeline-styles", Nl = `
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
function Dl() {
  if (bt || typeof document > "u") return;
  if (document.getElementById(ln)) {
    bt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = ln, e.textContent = Nl, document.head.appendChild(e), bt = !0;
}
function xt(e) {
  return vs(e);
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
function Bn(e, n = "sequence") {
  if (n !== "sequence")
    return jl(
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
function jl(e, n, t) {
  const s = e.flatMap((r) => {
    const p = r.groups.flatMap(
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
    return p.length === 0 ? [] : [{ turn: r.turn, rawSpans: p }];
  }), l = s.flatMap((r) => r.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let a = 0, i = null;
  for (const r of [...l].sort(
    (p, y) => p.start - y.start || p.end - y.end
  ))
    t && i !== null && r.start > i && (a += r.start - i), o.set(r, a), i = i === null ? r.end : Math.max(i, r.end);
  const h = [], g = [];
  for (const r of s) {
    const p = r.rawSpans.map((y) => {
      const u = o.get(y) ?? 0;
      return {
        ...y,
        start: y.start - u,
        end: (n ? y.end : y.start) - u
      };
    });
    h.push(...p), r.turn !== null && g.push({
      turn: r.turn,
      time: Math.min(...p.map((y) => y.start))
    });
  }
  return {
    start: Math.min(...h.map((r) => r.start)),
    end: Math.max(...h.map((r) => r.end)),
    spans: h,
    turnBoundaries: g
  };
}
function Pl(e, n = "sequence") {
  const t = (i) => i.skillSpans ?? [];
  if (e.every((i) => t(i).length === 0)) return null;
  if (n === "sequence") {
    const i = /* @__PURE__ */ new Map();
    let h = 0;
    for (const r of e)
      for (const p of r.groups.flatMap((y) => y.cells))
        i.set(p.index, h), h += 1;
    const g = [];
    for (const r of e)
      for (const p of t(r)) {
        const y = p.attributedIndexes.map((O) => i.get(O)).filter((O) => O !== void 0);
        let u = y.length ? Math.min(...y) : void 0;
        if (u === void 0) {
          const O = r.groups.flatMap(($) => $.cells).find(
            ($) => $.kind !== "system" && $.skillName === p.skill
          );
          u = O ? i.get(O.index) : void 0;
        }
        if (u === void 0) continue;
        const b = y.length ? Math.max(...y) : u;
        g.push(rn(p, u, b + 1));
      }
    return g;
  }
  const s = e.flatMap(
    (i) => i.groups.flatMap(
      (h) => h.cells.flatMap((g) => {
        const r = Pn(g);
        return r === null ? [] : [r];
      })
    )
  );
  s.sort((i, h) => i.start - h.start || i.end - h.end);
  const l = n === "duration", o = (i) => {
    let h = 0, g = null;
    for (const r of s) {
      if (r.start >= i) break;
      if (l && g !== null && r.start > g) {
        const p = Math.min(r.start, i);
        p > g && (h += p - g);
      }
      g = g === null ? r.end : Math.max(g, r.end);
    }
    return h;
  }, a = [];
  for (const i of e)
    for (const h of t(i)) {
      const g = h.startT, r = Math.max(ps(h), g + 1), p = o(g), y = o(r);
      a.push(
        rn(
          h,
          g - p,
          Math.max(g - p + 1, r - y)
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
function Bl(e, n, t = "sequence") {
  const s = Bn(e, t);
  return new Set(
    s == null ? void 0 : s.spans.filter((l) => l.start <= n.end && l.end >= n.start).map((l) => l.index)
  );
}
Dl();
const lt = window.QwenPaw.host, K = lt.React, { useEffect: qe, useMemo: kt, useRef: Je, useState: Le } = K, { Tooltip: Fl } = lt.antd, wt = 3, Hl = 4, Ul = 0.08, Wl = 0.025, Kl = 32, Vl = 0.5;
function Xl(e) {
  const n = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, s = e.timing, l = s && Number.isFinite(s.ttft_ms) ? s.ttft_ms : void 0, o = s && Number.isFinite(s.decode_ms) ? s.decode_ms : void 0;
  return {
    ...n === void 0 ? {} : { durationMs: n },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function Gl(e) {
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
function ql(e, n) {
  const t = Gl(e);
  if (n === void 0) return t;
  const s = n.durationMs === void 0 ? null : `Total ${xt(n.durationMs)}`, l = n.startedAt === void 0 ? null : n.durationMs === void 0 ? `Started ${ke(n.startedAt)}` : `${ke(n.startedAt)} → ${ke(
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
function Jl(e, n, t, s) {
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
function Fn({
  label: e,
  placement: n,
  children: t,
  ...s
}) {
  return /* @__PURE__ */ K.createElement(
    Fl,
    {
      title: /* @__PURE__ */ K.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: n,
      mouseEnterDelay: Vl,
      ...s
    },
    t
  );
}
function cn() {
  return /* @__PURE__ */ K.createElement("div", { className: ae.labels, "aria-hidden": "true" }, /* @__PURE__ */ K.createElement("span", null, "Input"), /* @__PURE__ */ K.createElement("span", null, "Model"), /* @__PURE__ */ K.createElement("span", null, "Tools"));
}
function un({
  loading: e,
  onHover: n,
  onLoad: t
}) {
  return /* @__PURE__ */ K.createElement(
    Fn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ K.createElement(
      "button",
      {
        type: "button",
        className: ae.earlierHistory,
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
const Ql = K.memo(function({
  turns: n,
  mode: t,
  range: s,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: a = null,
  searchMatchIndexes: i = null,
  onRangeChange: h,
  onRecordSelect: g,
  onRecordFocus: r,
  onSkillSpanSelect: p
}) {
  const y = typeof lt.useTheme == "function" ? lt.useTheme() : void 0, u = kt(
    () => Bn(n, t),
    [t, n]
  ), b = kt(
    () => Pl(n, t),
    [t, n]
  ), O = kt(
    () => new Map(
      n.flatMap(
        (v) => v.groups.flatMap(
          (N) => N.cells.map(
            (E) => [E.index, Xl(E)]
          )
        )
      )
    ),
    [n]
  ), $ = Je(null), k = Je(null), _ = Je(null), P = Je(null), [L, U] = Le(null), [Y, w] = Le(null), [H, d] = Le(!1), [m, S] = Le(!1), [x, T] = Le(null), [B, R] = Le(!1);
  qe(() => {
    u !== null && s !== null && (s.end < u.start || s.start > u.end) && h(null);
  }, [u, h, s]), qe(() => {
    u !== null && (R(!1), T(
      (v) => v !== null && (v.end < u.start || v.start > u.end) ? null : v
    ));
  }, [u]), qe(() => {
    if (u === null || a === null) return;
    const v = u.spans.find(
      (N) => N.index === a
    );
    v !== void 0 && (R(!0), T((N) => {
      if (N === null || v.end > N.start && v.start < N.end)
        return N;
      const E = Math.max(1, N.end - N.start), I = v.end <= N.start ? v.start : v.end - E, C = Math.min(
        Math.max(I, u.start),
        Math.max(u.start, u.end - E)
      );
      return C === N.start ? N : { start: C, end: C + E };
    }));
  }, [u, a]);
  const F = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), G = Math.min(
    F,
    Math.max(1, ((x == null ? void 0 : x.end) ?? 0) - ((x == null ? void 0 : x.start) ?? 0))
  ), ne = u === null || x === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(x.start, u.start),
    u.end - G
  ), q = x === null ? F : G, V = x === null ? (u == null ? void 0 : u.start) ?? 0 : ne, ie = l && u !== null && V === u.start, pe = o === void 0 || H ? void 0 : () => {
    d(!0), o().finally(() => {
      d(!1);
    });
  }, de = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(V - u.start) / q * 100}%`,
    "--trajectory-domain-width": `${F / q * 100}%`
  }, Q = u === null || s === null ? null : an(
    s,
    V,
    q,
    u.start,
    u.end
  ), ye = (u === null || L === null ? null : an(
    L,
    V,
    q,
    u.start,
    u.end
  )) ?? Q, De = L ?? s;
  if (qe(() => {
    const v = _.current;
    if (v === null) return;
    const N = (E) => {
      E.preventDefault();
      const I = P.current;
      if (I === null || u === null) return;
      R(!1);
      const C = I.getBoundingClientRect(), W = Tt(
        (E.clientX - C.left) / Math.max(1, C.width)
      ), te = Math.min(
        F,
        Math.max(
          Math.min(
            t === "sequence" ? Hl : 20,
            F
          ),
          q * Math.exp(E.deltaY * 15e-4)
        )
      );
      if (te >= F * 0.999) {
        T(null);
        return;
      }
      const se = V + W * q, ee = Math.min(
        Math.max(se - W * te, u.start),
        u.end - te
      );
      T({ start: ee, end: ee + te });
    };
    return v.addEventListener("wheel", N, { passive: !1 }), () => {
      v.removeEventListener("wheel", N);
    };
  }, [q, V, F, t, u]), u === null)
    return /* @__PURE__ */ K.createElement(
      "section",
      {
        ref: _,
        className: ae.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ K.createElement("div", { className: ae.plot }, /* @__PURE__ */ K.createElement(cn, null), /* @__PURE__ */ K.createElement("div", { className: ae.track }, /* @__PURE__ */ K.createElement("span", { className: ae.empty }, "No timing data"), l && /* @__PURE__ */ K.createElement(
        un,
        {
          loading: H,
          onHover: () => {
            w(null);
          },
          onLoad: pe
        }
      )))
    );
  const je = Math.min(
    q,
    F / u.spans.length
  ), Me = (v) => {
    const N = v.currentTarget.getBoundingClientRect();
    return Tt((v.clientX - N.left) / Math.max(1, N.width));
  }, Ce = (v) => {
    var C;
    const N = v.target instanceof HTMLElement ? v.target : null, E = (C = N == null ? void 0 : N.closest("[data-timeline-record-index]")) == null ? void 0 : C.dataset.timelineRecordIndex;
    if (E === void 0) return null;
    const I = Number(E);
    return Number.isFinite(I) ? I : null;
  }, We = (v) => {
    h(v);
  }, Ke = (v) => {
    if (v.button === 2) {
      k.current = {
        anchorClientX: v.clientX,
        anchorStart: V,
        moved: !1,
        pannable: x !== null,
        pointerId: v.pointerId
      }, x !== null && R(!1), S(!0), typeof v.currentTarget.setPointerCapture == "function" && v.currentTarget.setPointerCapture(v.pointerId);
      return;
    }
    if (v.button !== 0) return;
    const N = Me(v), E = V + N * q, I = Ce(v);
    w({ fraction: N, recordIndex: I }), $.current = {
      pointerId: v.pointerId,
      anchorTime: E,
      anchorClientX: v.clientX,
      recordIndex: I
    }, typeof v.currentTarget.setPointerCapture == "function" && v.currentTarget.setPointerCapture(v.pointerId), U({ start: E, end: E });
  }, at = (v) => {
    const N = v.currentTarget.getBoundingClientRect(), E = Me(v);
    w({ fraction: E, recordIndex: Ce(v) });
    const I = k.current;
    if (I !== null && I.pointerId === v.pointerId) {
      if (Math.abs(v.clientX - I.anchorClientX) >= wt && (I.moved = !0), !I.pannable) return;
      const se = (v.clientX - I.anchorClientX) / Math.max(1, N.width), ee = Math.min(
        Math.max(I.anchorStart - se * q, u.start),
        u.end - q
      );
      T({ start: ee, end: ee + q });
      return;
    }
    const C = $.current;
    if (C === null || C.pointerId !== v.pointerId) return;
    let W = V;
    if (x !== null) {
      const se = v.clientX - N.left, ee = Math.min(
        Kl,
        Math.max(1, N.width * Ul)
      ), le = se < ee ? -1 : se > N.width - ee ? 1 : 0;
      if (le !== 0) {
        const ze = le < 0 ? ee - se : se - (N.width - ee), ve = Tt(ze / ee), Se = V + le * q * Wl * Math.max(0.2, ve);
        W = Math.min(
          Math.max(Se, u.start),
          u.end - q
        ), W !== V && (R(!1), T({
          start: W,
          end: W + q
        }));
      }
    }
    const te = W + E * q;
    U(Ct(C.anchorTime, te));
  }, ct = (v) => {
    const N = k.current;
    if (N !== null && N.pointerId === v.pointerId) {
      const le = N.moved || Math.abs(v.clientX - N.anchorClientX) >= wt;
      k.current = null, S(!1), le || h(null);
      return;
    }
    const E = $.current;
    if (E === null || E.pointerId !== v.pointerId) return;
    const I = Me(v), C = V + I * q, W = Ct(E.anchorTime, C);
    w({ fraction: I, recordIndex: Ce(v) }), $.current = null, U(null);
    const te = Math.abs(v.clientX - E.anchorClientX) < wt, se = te && E.recordIndex !== null ? u.spans.find((le) => le.index === E.recordIndex) : void 0;
    if (se !== void 0) {
      h(null), g == null || g(se.index);
      return;
    }
    const ee = W.end - W.start < je ? Jl(
      te ? W.start : (W.start + W.end) / 2,
      je,
      u.start,
      u.end
    ) : W;
    if (We(ee), te) {
      const le = W.start, ze = u.spans.reduce((ve, Se) => {
        const Oe = le < ve.start ? ve.start - le : le > ve.end ? le - ve.end : 0;
        return (le < Se.start ? Se.start - le : le > Se.end ? le - Se.end : 0) < Oe ? Se : ve;
      });
      r == null || r(ze.index);
    }
  }, ut = (v) => {
    v.key !== "Escape" || s === null || (v.preventDefault(), h(null));
  }, Ve = () => {
    $.current = null, k.current = null, U(null), w(null), S(!1);
  };
  return /* @__PURE__ */ K.createElement(
    "section",
    {
      ref: _,
      className: ae.root,
      "data-theme": y || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ K.createElement("div", { className: ae.plot }, /* @__PURE__ */ K.createElement(cn, null), /* @__PURE__ */ K.createElement(
      "div",
      {
        ref: P,
        className: ae.track,
        "data-panning": m || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: ut,
        onPointerDown: Ke,
        onPointerMove: at,
        onPointerUp: ct,
        onPointerCancel: Ve,
        onPointerLeave: () => {
          $.current === null && k.current === null && w(null);
        },
        onDoubleClick: (v) => {
          v.preventDefault(), h(null);
        },
        onContextMenu: (v) => {
          v.preventDefault();
        }
      },
      ie && /* @__PURE__ */ K.createElement(
        un,
        {
          loading: H,
          onHover: () => {
            w(null);
          },
          onLoad: pe
        }
      ),
      Y !== null && Y.recordIndex === null && L === null && /* @__PURE__ */ K.createElement(
        "div",
        {
          className: ae.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${Y.fraction * 100}%`
          }
        }
      ),
      ye !== null && /* @__PURE__ */ K.createElement(K.Fragment, null, /* @__PURE__ */ K.createElement(
        "div",
        {
          className: ae.selection,
          "data-dragging": L === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ye.start * 100}%`,
            "--trajectory-selection-width": `${(ye.end - ye.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ K.createElement(
        "div",
        {
          className: ae.selectionEdges,
          "data-dragging": L === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ye.start * 100}%`,
            "--trajectory-selection-width": `${(ye.end - ye.start) * 100}%`
          }
        }
      )),
      b !== null && u !== null && /* @__PURE__ */ K.createElement(
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
        b.map((v) => {
          const N = (v.start - u.start) / F, E = Math.max(
            (v.end - v.start) / F,
            4e-3
          ), I = Z(), C = `${v.bypass ? "⚠ " : ""}${v.skill} · ${v.trigger}${v.open ? ` · ${f(I, "spanOpen")}` : ""}`;
          return /* @__PURE__ */ K.createElement(
            "span",
            {
              key: v.spanId,
              title: C,
              onClick: p ? (W) => {
                W.stopPropagation(), p(v.spanId);
              } : void 0,
              style: {
                position: "absolute",
                left: `${Math.max(0, N) * 100}%`,
                width: `${E * 100}%`,
                top: 0,
                bottom: 0,
                borderRadius: 3,
                background: `hsla(${v.hue}, 65%, 55%, 0.55)`,
                border: v.bypass ? "1px dashed rgba(250,140,22,0.9)" : `1px solid hsla(${v.hue}, 55%, 45%, 0.8)`,
                pointerEvents: p ? "auto" : "none",
                cursor: p ? "pointer" : "default"
              }
            }
          );
        })
      ),
      /* @__PURE__ */ K.createElement(
        "div",
        {
          className: ae.turnBoundaries,
          "data-animate-viewport": B || void 0,
          "aria-hidden": "true",
          style: de
        },
        u.turnBoundaries.filter(
          (v) => v.time > u.start && v.time >= V && v.time <= V + q
        ).map((v) => /* @__PURE__ */ K.createElement(
          "span",
          {
            className: ae.turnBoundary,
            "data-turn": v.turn,
            key: v.turn,
            style: {
              "--trajectory-turn-left": `${(v.time - u.start) / F * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ K.createElement(
        "div",
        {
          className: ae.lanes,
          "data-animate-viewport": B || void 0,
          "data-timeline-domain": !0,
          style: de
        },
        u.spans.filter(
          (v) => v.index === a || v.end >= V && v.start <= V + q
        ).map((v) => {
          const N = (v.start - u.start) / F, I = (v.end - v.start) / F * 100, C = O.get(v.index), W = C == null ? void 0 : C.ttftMs, te = C == null ? void 0 : C.decodingMs, se = W === void 0 || te === void 0 || W + te <= 0 ? null : W / (W + te);
          return /* @__PURE__ */ K.createElement(
            Fn,
            {
              key: v.index,
              label: ql(v.kind, C),
              placement: "bottom"
            },
            /* @__PURE__ */ K.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: ae.span,
                "data-timeline-span": v.kind,
                "data-timeline-record-index": v.index,
                "data-assistant-timing": se === null ? void 0 : "true",
                "data-error": v.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": v.index === a || void 0,
                "data-hovered": (Y == null ? void 0 : Y.recordIndex) === v.index || void 0,
                "data-search-match": i === null ? void 0 : i.has(v.index) ? "true" : "false",
                "data-selected": De === null ? void 0 : v.start <= De.end && v.end >= De.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${N * 100}%`,
                  "--trajectory-span-width": `${I}%`,
                  "--trajectory-span-gap": `min(${I * 0.08}%, 1px)`,
                  "--trajectory-span-lane": v.lane,
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
}), At = window.QwenPaw.host, fe = At.React, { Button: Yl, Input: Zl, Segmented: eo, Tooltip: dn } = At.antd, { MenuFoldOutlined: to, MenuUnfoldOutlined: no, ReloadOutlined: so, SearchOutlined: lo } = At.antdIcons;
function oo({
  mode: e,
  onModeChange: n,
  search: t,
  onSearchChange: s,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: a,
  hasRequests: i,
  onToggleCollapseAll: h,
  callsCollapsed: g,
  onToggleCallsCollapsed: r
}) {
  const p = Z();
  return /* @__PURE__ */ fe.createElement(
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
    /* @__PURE__ */ fe.createElement(dn, { title: f(p, "projectionHint") }, /* @__PURE__ */ fe.createElement(
      eo,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (y) => n(y)
      }
    )),
    /* @__PURE__ */ fe.createElement(
      Zl,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ fe.createElement(lo, null),
        placeholder: f(p, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (y) => s(y.target.value)
      }
    ),
    i && /* @__PURE__ */ fe.createElement(
      dn,
      {
        title: a ? f(p, "expandAll") : f(p, "collapseAll")
      },
      /* @__PURE__ */ fe.createElement(
        Yl,
        {
          size: "small",
          type: "text",
          icon: a ? /* @__PURE__ */ fe.createElement(no, null) : /* @__PURE__ */ fe.createElement(to, null),
          onClick: h
        }
      )
    ),
    /* @__PURE__ */ fe.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ fe.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ fe.createElement(so, null),
      " ",
      f(p, "refresh")
    ))
  );
}
const rt = window.QwenPaw.host, A = rt.React, { useCallback: hn, useEffect: Qe, useMemo: ge, useRef: io, useState: ce } = A, {
  Button: Ye,
  Empty: pn,
  Popconfirm: ro,
  Popover: ao,
  Space: co,
  Spin: Hn,
  Switch: uo,
  Tag: ho,
  Tooltip: po,
  message: He
} = rt.antd, { DeleteOutlined: fo, DownloadOutlined: mo, SettingOutlined: fn } = rt.antdIcons, { Text: xe } = rt.antd.Typography;
function mn({
  config: e,
  onChange: n,
  children: t
}) {
  const s = Z(), l = (a, i, h) => /* @__PURE__ */ A.createElement(
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
    /* @__PURE__ */ A.createElement(xe, { style: { fontSize: 13 } }, a),
    /* @__PURE__ */ A.createElement(
      uo,
      {
        size: "small",
        checked: !!i,
        onChange: (g) => n({ [h]: g })
      }
    )
  ), o = /* @__PURE__ */ A.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ A.createElement(xe, { strong: !0, style: { fontSize: 13 } }, f(s, "settings")), /* @__PURE__ */ A.createElement("div", { style: { marginTop: 8 } }, e ? [
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
  ] : /* @__PURE__ */ A.createElement(Hn, { size: "small" })));
  return /* @__PURE__ */ A.createElement(ao, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function go({
  sessionId: e,
  summary: n,
  locale: t,
  onJumpSession: s,
  onRefreshSessions: l
}) {
  const [o, a] = ce(null), [i, h] = ce(!1), [g, r] = ce(!1), [p, y] = ce(""), [u, b] = ce("sequence"), [O, $] = ce(null), [k, _] = ce(null), [P, L] = ce(null), [U, Y] = ce(null), [w, H] = ce(
    /* @__PURE__ */ new Set()
  ), [d, m] = ce(!1), [S, x] = ce(null), [T, B] = ce(null), [R, F] = ce(null), [G, ne] = ce(null), q = io(null);
  q.current = e, Qe(() => {
    Yn().then(x).catch(() => x(null));
  }, []);
  const V = hn(async (E, I) => {
    I || h(!0);
    try {
      const C = await Qn(E, {
        beforeSeq: I,
        limit: 200
      });
      ne(null), a((W) => I && W ? {
        ...C,
        events: [...C.events, ...W.events]
      } : C);
    } catch (C) {
      ne({
        message: String(C.message),
        status: C instanceof _n ? C.status : null
      });
    } finally {
      I || h(!1);
    }
  }, []), ie = hn(async (E) => {
    try {
      const I = await Jn(E);
      F(I), B({
        sessionId: E,
        inputTokens: I.input_tokens,
        outputTokens: I.output_tokens,
        totalTokens: I.total_tokens,
        reasoningTokens: Number(I.reasoning_tokens ?? 0)
      });
    } catch {
      F(null), B(null);
    }
  }, []);
  Qe(() => {
    e ? ($(null), _(null), L(null), H(/* @__PURE__ */ new Set()), y(""), V(e), ie(e)) : (a(null), F(null), B(null));
  }, [e, V, ie]);
  const pe = ge(
    () => o ? Rl(o.events) : [],
    [o]
  ), { initial: de, turns: Q } = ge(
    () => Ll(pe),
    [pe]
  ), Ie = ge(
    () => de ? [de, ...sn(Q)] : sn(Q),
    [de, Q]
  ), ye = ge(
    () => Q.some((E) => E.status === "running"),
    [Q]
  );
  Qe(() => {
    if (!e || !ye) return;
    const E = setInterval(() => {
      document.visibilityState === "visible" && q.current && V(q.current);
    }, 5e3);
    return () => clearInterval(E);
  }, [e, ye, V]);
  const De = ge(
    () => O === null ? null : Bl(Q, O, u),
    [O, Q, u]
  ), je = ge(() => {
    const E = p.trim().toLowerCase();
    return E ? new Set(
      Ie.filter(
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
  }, [p, Ie]), Me = ge(
    () => k === null ? null : Ie.find((E) => E.index === k) ?? null,
    [Ie, k]
  ), Ce = ge(() => {
    var jt, Pt;
    if (P === null) return null;
    const E = Q.find((D) => D.turn === P);
    if (!E) return null;
    const I = ((jt = E.groups[0]) == null ? void 0 : jt.cells) ?? [], C = I.filter((D) => D.kind === "message"), W = I.filter((D) => D.kind === "tool"), te = [
      ...new Set(
        C.map((D) => D.model).filter((D) => !!D)
      )
    ], se = [
      ...new Set(
        C.map((D) => D.provider).filter((D) => !!D)
      )
    ];
    let ee = 0, le = 0, ze = 0, ve = 0, Se = 0, Oe = null, Xe = 0;
    const Rt = [];
    for (const D of I)
      D.usage && (ee += D.usage.input_tokens ?? 0, le += D.usage.output_tokens ?? 0, ze += D.usage.cache_input_tokens ?? 0, ve += D.usage.cache_creation_input_tokens ?? 0, Se += D.usage.reasoning_tokens ?? 0), D.timing && (Oe = Oe === null ? D.timing.ttft_ms : Math.min(Oe, D.timing.ttft_ms), Xe = (Xe ?? 0) + D.timing.decode_ms), D.isError && Rt.push(D.toolError ?? D.text ?? "error");
    const $e = I.find((D) => D.kind === "user"), Un = (Pt = [...C].reverse().find((D) => D.options)) == null ? void 0 : Pt.options, dt = [...C].reverse().find((D) => D.outputText);
    let Lt;
    const Nt = C.filter((D) => D.messagesMeta);
    if (Nt.length > 0) {
      const D = {};
      let Ae = 0, pt = 0;
      for (const Kn of Nt) {
        const ft = Kn.messagesMeta;
        for (const [Bt, Vn] of Object.entries(ft.charsByRole))
          D[Bt] = (D[Bt] ?? 0) + Vn;
        Ae += ft.totalChars, pt = Math.max(pt, ft.maxToolChars);
      }
      Lt = { charsByRole: D, totalChars: Ae, maxToolChars: pt };
    }
    const ht = Q.findIndex((D) => D.turn === P), Dt = ht > 0 ? Q[ht - 1] : null;
    let Pe = null;
    if (Dt) {
      Pe = 0;
      for (const D of Dt.groups)
        for (const Ae of D.cells)
          Ae.kind === "message" && Ae.usage && (Pe += Ae.usage.input_tokens ?? 0);
    }
    const Wn = Pe === null && ht !== 0 ? void 0 : {
      prevInputTokens: Pe,
      deltaTokens: ee - (Pe ?? 0)
    };
    return {
      turn: P,
      status: E.status,
      durationMs: E.durationMs,
      startedAt: ($e == null ? void 0 : $e.startedAt) ?? null,
      query: ($e == null ? void 0 : $e.text) ?? "",
      llmCalls: C.length,
      toolCalls: W.length,
      models: te,
      providers: se,
      inputTokens: ee,
      outputTokens: le,
      cacheReadTokens: ze,
      cacheWriteTokens: ve,
      reasoningTokens: Se,
      inputComposition: Lt,
      growth: Wn,
      resultIndex: dt == null ? void 0 : dt.index,
      ttftMs: Oe,
      decodeMs: Xe,
      errors: Rt,
      options: Un,
      sessionTotals: T && T.sessionId === e ? {
        inputTokens: T.inputTokens,
        outputTokens: T.outputTokens,
        totalTokens: T.totalTokens,
        reasoningTokens: T.reasoningTokens
      } : void 0
    };
  }, [P, Q, T, e]), We = !!(o && o.events.length > 0 && o.events[0].seq > 1), Ke = async (E) => {
    try {
      x(await Zn(E));
    } catch (I) {
      He.error(String(I.message));
    }
  }, at = ge(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), ct = ge(() => {
    if (!R) return null;
    const E = [
      `${R.runs} ${f(t, "statRounds")} · ${R.llm_calls} ${f(t, "statSteps")}`,
      `LLM ${ue(R.llm_ms_total / 1e3)} · ${f(
        t,
        "toolCalls"
      )} ${ue(R.tool_ms_total / 1e3)}`,
      `${f(t, "statTtftAvg")} ${R.ttft_ms_avg === null ? "-" : ue(R.ttft_ms_avg / 1e3)} · ${Ot(
        R.output_tokens,
        R.decode_ms_total / 1e3
      )}`
    ];
    if (R.cache_read_tokens > 0 || R.cache_write_tokens > 0) {
      const I = R.cache_read_tokens + R.input_tokens, C = I > 0 ? Math.round(R.cache_read_tokens / I * 100) : 0;
      E.push(`${f(t, "statCacheHit")} ${C}%`);
    }
    if (E.push(
      `${f(t, "statInput")} ${J(
        R.input_tokens
      )} tok · ${f(t, "statOutput")} ${J(
        R.output_tokens
      )} tok`
    ), n && E.push(It(n.size_bytes)), R.skills) {
      const I = Object.entries(R.skills).sort((C, W) => W[1] - C[1]).map(([C, W]) => `${C} ×${W}`).join(" · ");
      I && E.push(`📚 ${I}`);
    }
    if (de != null && de.prompt) {
      const I = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
      for (const te of Q)
        for (const se of te.groups)
          for (const ee of se.cells)
            ee.skillName ? C.add(ee.skillName) : ee.inSkill && I.add(ee.inSkill);
      const W = [...I].filter((te) => !C.has(te));
      W.length > 0 && E.push(
        `⚡ ${f(t, "skillBypassStrip")}: ${W.join(" · ")}`
      );
    }
    return E.join(" | ");
  }, [R, n, t, Q, de]), ut = () => {
    _(null), L(null);
  };
  Qe(() => {
    k !== null && Y(null);
  }, [k]);
  const Ve = ge(
    () => U === null ? null : Q.flatMap((E) => E.skillSpans ?? []).find((E) => E.id === U) ?? null,
    [U, Q]
  ), v = (G == null ? void 0 : G.status) === 404, N = Me !== null || Ce !== null;
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
          xe,
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
          ho,
          {
            color: On[(n == null ? void 0 : n.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          $n((n == null ? void 0 : n.status) ?? "unknown")
        ),
        n != null && n.channel ? /* @__PURE__ */ A.createElement(xe, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, n.channel) : null,
        /* @__PURE__ */ A.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ A.createElement(co, null, /* @__PURE__ */ A.createElement(mn, { config: S, onChange: Ke }, /* @__PURE__ */ A.createElement(Ye, { size: "small", icon: /* @__PURE__ */ A.createElement(fn, null) })), /* @__PURE__ */ A.createElement(po, { title: f(t, "export") }, /* @__PURE__ */ A.createElement(
          Ye,
          {
            size: "small",
            icon: /* @__PURE__ */ A.createElement(mo, null),
            onClick: () => {
              es(e).then(() => He.success(f(t, "exported"))).catch(
                (E) => He.error(String(E.message))
              );
            }
          },
          f(t, "export")
        )), /* @__PURE__ */ A.createElement(
          ro,
          {
            title: f(t, "deleteConfirm"),
            onConfirm: () => {
              ts(e).then(() => {
                He.success(f(t, "deleted")), l == null || l();
              }).catch(
                (E) => He.error(String(E.message))
              );
            }
          },
          /* @__PURE__ */ A.createElement(Ye, { size: "small", danger: !0, icon: /* @__PURE__ */ A.createElement(fo, null) }, f(t, "delete"))
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
          xe,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          ct ?? // Transient line while the stats endpoint responds.
          (n ? `${n.runs} ${f(t, "statRounds")} · ${n.llm_calls} ${f(t, "statSteps")} · ${zn(
            n.total_tokens
          )} ${f(t, "tokens")} · ${It(
            n.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ A.createElement(
          xe,
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
      )) : /* @__PURE__ */ A.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ A.createElement(xe, { type: "secondary", style: { fontSize: 13 } }, f(t, "selectSession")),
        /* @__PURE__ */ A.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ A.createElement(mn, { config: S, onChange: Ke }, /* @__PURE__ */ A.createElement(Ye, { size: "small", icon: /* @__PURE__ */ A.createElement(fn, null) })))
      )
    ),
    G && !v && /* @__PURE__ */ A.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ A.createElement(xe, { type: "danger", style: { fontSize: 12 } }, `${f(t, "loadFailed")}: ${G.message}`)),
    /* @__PURE__ */ A.createElement(
      oo,
      {
        mode: u,
        onModeChange: b,
        search: p,
        onSearchChange: y,
        onRefresh: () => {
          e && (V(e), ie(e)), l == null || l();
        },
        modeOptions: at,
        allCollapsed: Q.length > 0 && Q.every((E) => w.has(E.turn ?? -1)),
        hasRequests: Q.some((E) => E.turn !== null),
        callsCollapsed: d,
        onToggleCallsCollapsed: () => m((E) => !E),
        onToggleCollapseAll: () => {
          H((E) => Q.some(
            (C) => C.turn !== null && !E.has(C.turn)
          ) ? new Set(
            Q.map((C) => C.turn).filter((C) => C !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ A.createElement(
      Ql,
      {
        turns: Q,
        mode: u,
        range: O,
        hasEarlierRecords: We,
        onLoadEarlier: async () => {
          var E;
          return !o || o.events.length === 0 ? !1 : (await V(e, (E = o.events[0]) == null ? void 0 : E.seq), !0);
        },
        selectedIndex: k,
        searchMatchIndexes: je,
        onRangeChange: $,
        onRecordSelect: _,
        onRecordFocus: _,
        onSkillSpanSelect: Y
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
        Cl,
        {
          turns: Q,
          selectedIndex: k,
          selectedTurn: P,
          collapsedTurns: w,
          focusIndexes: De,
          searchMatchIndexes: je,
          onSelectedIndexChange: (E) => {
            if (E === k) {
              _(null);
              return;
            }
            _(E), L(null);
          },
          onSelectedTurnChange: (E) => {
            L(E), _(null);
          },
          callsCollapsed: d,
          onToggleTurn: (E) => {
            H((I) => {
              const C = new Set(I);
              return C.has(E) ? C.delete(E) : C.add(E), C;
            });
          },
          hasOlderRecords: We,
          loadingOlder: g,
          onLoadOlder: () => {
            var E;
            !o || o.events.length === 0 || (r(!0), V(
              e,
              (E = o.events[0]) == null ? void 0 : E.seq
            ).finally(() => r(!1)));
          },
          emptyText: f(t, "noSessions"),
          initialRecord: de
        }
      )
    ), Ve ? /* @__PURE__ */ A.createElement(
      Ps,
      {
        span: Ve,
        records: Ie,
        onJumpRecord: (E) => {
          Y(null), _(E);
        },
        onClose: () => Y(null)
      }
    ) : N ? /* @__PURE__ */ A.createElement(
      Ns,
      {
        record: Me,
        request: Ce,
        onJumpSession: s,
        onSelectTurn: (E) => {
          L(E), _(null);
        },
        onClose: ut
      }
    ) : null) : /* @__PURE__ */ A.createElement(
      pn,
      {
        image: pn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: v && e ? f(t, "noTraceForSession") : f(t, "selectSession")
      }
    )
  );
}
const Ne = window.QwenPaw.host, j = Ne.React, { useCallback: gn, useEffect: _t, useMemo: Ze, useState: be } = j, { Button: yn, Empty: vn, Input: yo, Spin: vo, Tag: Sn, Tooltip: En } = Ne.antd, {
  CaretRightOutlined: So,
  MenuFoldOutlined: Eo,
  MenuUnfoldOutlined: bo,
  SearchOutlined: xo
} = Ne.antdIcons, { Text: Ue } = Ne.antd.Typography;
function ko({
  groups: e,
  collapsedAgents: n,
  onToggleAgent: t,
  searching: s,
  selected: l,
  onSelect: o,
  locale: a
}) {
  const i = e.length > 1;
  return /* @__PURE__ */ j.createElement(j.Fragment, null, e.map(([h, g]) => {
    const r = i && !s && n.has(h);
    return /* @__PURE__ */ j.createElement("div", { key: h }, i && /* @__PURE__ */ j.createElement(
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
      /* @__PURE__ */ j.createElement(
        So,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: r ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ j.createElement(Ue, { strong: !0, style: { fontSize: 12 } }, h),
      /* @__PURE__ */ j.createElement(Ue, { type: "secondary", style: { fontSize: 11 } }, g.length)
    ), !r && g.map((p) => {
      const y = p.session_id === l;
      return /* @__PURE__ */ j.createElement(
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
        /* @__PURE__ */ j.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ j.createElement(
            Ue,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${p.title ? `${p.title}
` : ""}${p.session_id}`
              }
            },
            p.title || p.agent_id || Cn(p.session_id)
          ),
          i ? null : p.agent_id ? /* @__PURE__ */ j.createElement(
            Sn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            p.agent_id
          ) : null,
          /* @__PURE__ */ j.createElement(
            Sn,
            {
              color: On[p.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            $n(p.status)
          )
        ),
        /* @__PURE__ */ j.createElement(
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
          /* @__PURE__ */ j.createElement("span", null, p.channel || "-"),
          /* @__PURE__ */ j.createElement("span", null, p.runs, " ", f(a, "runs")),
          /* @__PURE__ */ j.createElement("span", null, zn(p.total_tokens), " tok"),
          p.skills ? /* @__PURE__ */ j.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(p.skills).sort((u, b) => b[1] - u[1]).map(([u, b]) => `${u} ×${b}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(p.skills).sort((u, b) => b[1] - u[1]).slice(0, 2).map(([u]) => u).join(" ")
          ) : null,
          /* @__PURE__ */ j.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Ss(p.last_event_t)
            },
            Es(p.last_event_t)
          )
        )
      );
    }));
  }));
}
function wo() {
  const e = typeof Ne.useLocale == "function" ? Ne.useLocale() : void 0, n = Ze(
    () => zt(e ?? Z()),
    [e]
  ), [t, s] = be(null), [l, o] = be(!1), [a, i] = be(
    /* @__PURE__ */ new Set()
  ), [h, g] = be(!1), [r, p] = be(!1), [y, u] = be(null), [b, O] = be(""), [$, k] = be(null), _ = gn(async () => {
    try {
      const w = await Ft({ limit: 100, offset: 0 });
      s(w.sessions), o(w.has_more), k(null);
    } catch (w) {
      k(String(w.message));
    }
  }, []), P = gn(async () => {
    p(!0);
    try {
      const w = await Ft({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      s((H) => {
        const d = H ?? [];
        return [
          ...d,
          ...w.sessions.filter(
            (m) => !d.some((S) => S.session_id === m.session_id)
          )
        ];
      }), o(w.has_more);
    } catch (w) {
      k(String(w.message));
    } finally {
      p(!1);
    }
  }, [t]);
  _t(() => {
    _();
    try {
      const w = new URLSearchParams(window.location.search).get("session");
      w && In(w).then((H) => {
        u(H ?? w);
      });
    } catch {
    }
  }, [_]), _t(() => {
    try {
      const w = new URL(window.location.href);
      y ? w.searchParams.set("session", y) : w.searchParams.delete("session"), window.history.replaceState(window.history.state, "", w);
    } catch {
    }
  }, [y]), _t(() => {
    const w = setInterval(() => {
      document.visibilityState === "visible" && _();
    }, 15e3);
    return () => clearInterval(w);
  }, [_]);
  const L = Ze(
    () => (t == null ? void 0 : t.find((w) => w.session_id === y)) ?? null,
    [t, y]
  ), U = Ze(() => {
    if (!t) return [];
    const w = b.trim().toLowerCase();
    return w ? t.filter(
      (H) => [H.session_id, H.title ?? "", H.agent_id, H.channel].join(" ").toLowerCase().includes(w)
    ) : t;
  }, [t, b]), Y = Ze(() => {
    const w = /* @__PURE__ */ new Map();
    for (const H of U) {
      const d = H.agent_id || "(unknown)", m = w.get(d);
      m ? m.push(H) : w.set(d, [H]);
    }
    return [...w.entries()];
  }, [U]);
  return /* @__PURE__ */ j.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, h ? /* @__PURE__ */ j.createElement(
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
    /* @__PURE__ */ j.createElement(En, { title: f(n, "expandSidebar"), placement: "right" }, /* @__PURE__ */ j.createElement(
      yn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ j.createElement(bo, null),
        onClick: () => g(!1)
      }
    ))
  ) : /* @__PURE__ */ j.createElement(
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
    /* @__PURE__ */ j.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ j.createElement(
        yo,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ j.createElement(xo, null),
          placeholder: f(n, "searchPlaceholder"),
          value: b,
          style: { flex: 1, minWidth: 0 },
          onChange: (w) => O(w.target.value)
        }
      ),
      /* @__PURE__ */ j.createElement(En, { title: f(n, "collapseSidebar") }, /* @__PURE__ */ j.createElement(
        yn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ j.createElement(Eo, null),
          onClick: () => g(!0)
        }
      ))
    ),
    $ ? /* @__PURE__ */ j.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ j.createElement(Ue, { type: "danger", style: { fontSize: 12 } }, `${f(n, "loadFailed")}: ${$}`)) : null,
    /* @__PURE__ */ j.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ j.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ j.createElement(vo, null)) : U.length === 0 ? /* @__PURE__ */ j.createElement(
      vn,
      {
        image: vn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ j.createElement("span", { style: { fontSize: 12 } }, f(n, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ j.createElement(
        Ue,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        f(n, "noSessionsHint")
      )
    ) : /* @__PURE__ */ j.createElement(
      ko,
      {
        groups: Y,
        collapsedAgents: a,
        onToggleAgent: (w) => {
          i((H) => {
            const d = new Set(H);
            return d.has(w) ? d.delete(w) : d.add(w), d;
          });
        },
        searching: !!b.trim(),
        selected: y,
        onSelect: u,
        locale: n
      }
    ), t !== null && l && !b.trim() && /* @__PURE__ */ j.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ j.createElement(
      "a",
      {
        onClick: () => void P(),
        style: { fontSize: 12 }
      },
      r ? "…" : `⋯ ${f(n, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ j.createElement(
    go,
    {
      sessionId: y,
      summary: L,
      locale: n,
      onJumpSession: u,
      onRefreshSessions: () => void _()
    }
  ));
}
const To = window.QwenPaw.host.React;
var bn, xn;
(xn = (bn = window.QwenPaw).registerRoutes) == null || xn.call(bn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: wo,
    label: f(Z(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var kn, et, wn;
(wn = (et = (kn = window.QwenPaw.chat) == null ? void 0 : kn.rightHeader) == null ? void 0 : et.add) == null || wn.call(
  et,
  "agent-trace",
  To.createElement(rs),
  { id: "agent-trace-jump" }
);

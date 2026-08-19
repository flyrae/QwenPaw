const Nn = {
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
    inputNewNote: "仅显示相对上一次模型调用新增的消息——工具轮之后即工具结果进入模型的形态",
    contextReset: "上下文前缀发生变化（压缩/重写），本次已全量重记",
    inputTotal: "输入总量"
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
    inputNewNote: "Only messages appended since the previous model call — after a tool round this is how tool results enter the model input",
    contextReset: "Context prefix changed (compaction / rewrite); full input re-recorded",
    inputTotal: "Total input"
  }
};
function Tt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function te() {
  try {
    return Tt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function g(e, s) {
  return Nn[e][s];
}
const Le = window.QwenPaw.host;
async function Pn(e) {
  return Ee(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function yn(e, s) {
  return Le.fetch ? Le.fetch(e, s) : fetch(Le.getApiUrl(e), {
    ...s,
    headers: {
      ...(s == null ? void 0 : s.headers) || {},
      ...Le.getApiToken() ? { Authorization: `Bearer ${Le.getApiToken()}` } : {}
    }
  });
}
class vn extends Error {
  constructor(s, t) {
    super(t), this.status = s, this.name = "ApiError";
  }
}
async function Ee(e, s) {
  const t = await yn(e, s), n = await t.text();
  let o = null;
  try {
    o = n ? JSON.parse(n) : null;
  } catch {
    o = null;
  }
  if (!t.ok) {
    const l = o && typeof o == "object" && "detail" in o ? o.detail : void 0;
    throw new vn(
      t.status,
      typeof l == "string" ? l : `HTTP ${t.status}`
    );
  }
  return o;
}
async function Lt(e) {
  const s = new URLSearchParams();
  return s.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && s.set("offset", String(e.offset)), Ee(
    `/agent-trace/sessions?${s.toString()}`
  );
}
async function Fn(e, s) {
  const t = new URLSearchParams();
  s != null && s.beforeSeq && t.set("before_seq", String(s.beforeSeq)), t.set("limit", String(s == null ? void 0 : s.limit));
  const n = t.toString();
  return Ee(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function Bn() {
  return Ee("/agent-trace/config");
}
async function Hn(e) {
  return Ee("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function Un(e) {
  const s = await yn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const t = await s.blob(), n = URL.createObjectURL(t), o = document.createElement("a");
  o.href = n, o.download = `${e}.jsonl`, o.click(), URL.revokeObjectURL(n);
}
async function Wn(e) {
  await Ee(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function En(e) {
  if (!e) return null;
  try {
    return (await Ee(
      `/agent-trace/resolve?chat_id=${encodeURIComponent(e)}`
    )).session_id ?? null;
  } catch {
    return e;
  }
}
const ve = window.QwenPaw.host, Qe = ve.React, { useMemo: Kn } = Qe, { Button: Vn, Tooltip: Xn } = ve.antd, { CompassOutlined: Gn } = ve.antdIcons;
function Jn(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function Qn() {
  const e = typeof ve.useLocale == "function" ? ve.useLocale() : void 0, s = Kn(
    () => Tt(e ?? te()),
    [e]
  );
  return /* @__PURE__ */ Qe.createElement(Xn, { title: g(s, "viewCurrentTrace") }, /* @__PURE__ */ Qe.createElement(
    Vn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ Qe.createElement(Gn, null),
      "aria-label": g(s, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof ve.getCurrentSessionId == "function" ? ve.getCurrentSessionId() : null;
        En(t).then((n) => {
          window.location.href = Jn(n ?? t);
        });
      }
    }
  ));
}
const Dt = 3e3;
function jt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function Yn(e, s) {
  const t = jt(e ?? ""), n = jt(s ?? "");
  if (t.length > Dt || n.length > Dt)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...n.map((h) => ({ kind: "add", text: h }))
    ];
  const o = t.length, l = n.length, r = new Int32Array((o + 1) * (l + 1)), i = (h, u) => h * (l + 1) + u;
  for (let h = o - 1; h >= 0; h -= 1)
    for (let u = l - 1; u >= 0; u -= 1)
      r[i(h, u)] = t[h] === n[u] ? r[i(h + 1, u + 1)] + 1 : Math.max(r[i(h + 1, u)], r[i(h, u + 1)]);
  const p = [];
  let y = 0, a = 0;
  for (; y < o && a < l; )
    t[y] === n[a] ? (p.push({ kind: "same", text: t[y] }), y += 1, a += 1) : r[i(y + 1, a)] >= r[i(y, a + 1)] ? (p.push({ kind: "del", text: t[y] }), y += 1) : (p.push({ kind: "add", text: n[a] }), a += 1);
  for (; y < o; )
    p.push({ kind: "del", text: t[y] }), y += 1;
  for (; a < l; )
    p.push({ kind: "add", text: n[a] }), a += 1;
  return p;
}
function Zn(e, s = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((l, r) => {
    if (l.kind !== "same")
      for (let i = Math.max(0, r - s); i <= Math.min(e.length - 1, r + s); i += 1)
        t[i] = !0;
  });
  const n = [];
  let o = 0;
  return e.forEach((l, r) => {
    t[r] ? (o > 0 && (n.push({ kind: "gap", count: o }), o = 0), n.push(l)) : o += 1;
  }), o > 0 && n.push({ kind: "gap", count: o }), n;
}
function qn(e) {
  let s = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? s += 1 : n.kind === "del" && (t += 1);
  return { added: s, removed: t };
}
const es = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, ts = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function bn(e, s) {
  const t = e.markerKind ? es[e.markerKind] : void 0;
  if (t) return s === "zh-CN" ? t.zh : t.en;
  const n = ts[e.kind];
  return n ? s === "zh-CN" ? n.zh : n.en : e.kind;
}
function ns(e, s) {
  const t = (s ?? "").toLowerCase();
  let n = 4;
  return t.includes("qwen") ? n = 2.2 : t.includes("deepseek") ? n = 2.5 : t.includes("claude") && (n = 3.6), Math.round(e / n);
}
function ss(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function oe(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const s = e * 1e3;
  return s < 1e3 ? `${Math.round(s)}ms` : s < 6e4 ? `${(s / 1e3).toFixed(1)}s` : `${Math.floor(s / 6e4)}m${Math.round(s % 6e4 / 1e3)}s`;
}
function U(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function _t(e, s) {
  return e === void 0 || !Number.isFinite(e) || s === null || s === void 0 || s <= 0 ? "-" : `${(e / s).toFixed(1)} tok/s`;
}
function Ne(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function re(e) {
  if (!e) return null;
  const s = Date.parse(e);
  return Number.isFinite(s) ? s : null;
}
function Sn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function os(e) {
  if (!e) return "-";
  const s = new Date(e);
  return Number.isNaN(s.getTime()) ? e : s.toLocaleString();
}
function ls(e) {
  if (!e) return "-";
  const s = Date.parse(e);
  if (!Number.isFinite(s)) return e;
  const t = Date.now() - s;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(s).toLocaleString();
}
function xn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function xt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const wn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function kn(e) {
  return e || "unknown";
}
const qe = window.QwenPaw.host, c = qe.React, { useEffect: rs, useRef: is, useState: Tn } = c, { Button: _n, Collapse: as, Empty: Nt, Tabs: Mt } = qe.antd, { Text: H } = qe.antd.Typography, { CopyOutlined: cs, CloseOutlined: us } = qe.antdIcons, ds = 320, hs = 720, We = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, ms = 2e4;
function ps(e) {
  if (e.length > ms) return e;
  const s = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, o, l = 0;
  for (; (o = t.exec(e)) !== null; ) {
    o.index > n && s.push(e.slice(n, o.index));
    const r = o[0];
    let i = "rgba(128,128,128,1)";
    o[1] !== void 0 ? i = We.key : o[2] !== void 0 ? i = We.string : o[3] !== void 0 ? i = We.number : i = We.literal, s.push(
      /* @__PURE__ */ c.createElement("span", { key: l++, style: { color: i } }, r)
    ), n = o.index + r.length;
  }
  return n < e.length && s.push(e.slice(n)), s;
}
function ae({ value: e, json: s = !1 }) {
  const [t, n] = Tn(!1), o = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!o) return null;
  const l = async () => {
    try {
      await navigator.clipboard.writeText(o), n(!0), window.setTimeout(() => n(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ c.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ c.createElement(
    "a",
    {
      onClick: () => void l(),
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
    t ? "✓" : /* @__PURE__ */ c.createElement(cs, null)
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
    s ? ps(o) : o
  ));
}
function A({
  label: e,
  value: s,
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
    /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ c.createElement(
      H,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      s
    )
  );
}
function Pt({
  input: e,
  output: s,
  cacheRead: t,
  cacheWrite: n,
  reasoning: o
}) {
  const l = Math.max(0, e - t - n), r = Math.max(0, s - o);
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "Input", value: `${U(e)} tok` }), t ? /* @__PURE__ */ c.createElement(A, { label: "Cached", value: `${U(t)} tok` }) : null, n ? /* @__PURE__ */ c.createElement(
    A,
    {
      label: "Cache created",
      value: `${U(n)} tok`
    }
  ) : null, t || n ? /* @__PURE__ */ c.createElement(A, { label: "Other", value: `${U(l)} tok` }) : null, /* @__PURE__ */ c.createElement(A, { label: "Output", value: `${U(s)} tok` }), o ? /* @__PURE__ */ c.createElement(A, { label: "Reasoning", value: `${U(o)} tok` }) : null, o ? /* @__PURE__ */ c.createElement(A, { label: "Content", value: `${U(r)} tok` }) : null);
}
function ut({
  label: e,
  onOpen: s,
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
    /* @__PURE__ */ c.createElement("a", { onClick: s, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 2 } }, t)
  );
}
const Ft = ["system", "user", "assistant", "tool"], fs = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function gs({
  request: e,
  locale: s
}) {
  const t = e.inputComposition;
  if (!t) return null;
  const n = e.models[0], o = [], l = new Set(Ft), r = [
    ...Ft.filter((i) => t.charsByRole[i]),
    ...Object.keys(t.charsByRole).filter(
      (i) => !l.has(i) && t.charsByRole[i]
    )
  ];
  for (const i of r) {
    const p = t.charsByRole[i], y = fs[i] ?? "roleOther";
    o.push(
      /* @__PURE__ */ c.createElement(
        A,
        {
          key: i,
          label: g(s, y),
          value: `${U(p)} ${g(
            s,
            "charUnit"
          )} · ~${U(ns(p, n))} tok ${g(
            s,
            "estimatedTag"
          )}`
        }
      )
    );
  }
  return t.maxToolChars > 0 && o.push(
    /* @__PURE__ */ c.createElement(
      A,
      {
        key: "max-tool",
        label: g(s, "maxToolMsg"),
        value: `${U(t.maxToolChars)} ${g(
          s,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(H, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, g(s, "inputComposition")), o, /* @__PURE__ */ c.createElement(
    H,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    g(s, "estimateNote")
  ), e.growth ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    A,
    {
      label: g(s, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? g(s, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${U(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ c.createElement(
    A,
    {
      label: g(s, "cacheAbsorbed"),
      value: `${U(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function ys({
  request: e,
  onJumpRecord: s
}) {
  const t = te(), [n, o] = c.useState("summary"), l = /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "Started", value: Ne(e.startedAt) }), /* @__PURE__ */ c.createElement(
    A,
    {
      label: "Total",
      value: oe(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ c.createElement(
    A,
    {
      label: "First TTFT",
      value: oe(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ c.createElement(
    A,
    {
      label: "Total decoding",
      value: oe(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ c.createElement(
    A,
    {
      label: g(t, "throughput"),
      value: _t(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), r = /* @__PURE__ */ c.createElement(
    Pt,
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
      label: g(t, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ c.createElement(
        A,
        {
          label: g(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ c.createElement(A, { label: "Query", value: vs(e.query) }), /* @__PURE__ */ c.createElement(
        A,
        {
          label: g(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ c.createElement(A, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ c.createElement(
        A,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && s ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => s(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ c.createElement(ut, { label: "Options", onOpen: () => o("options") }, /* @__PURE__ */ c.createElement(ae, { value: e.options, json: !0 })) : null, /* @__PURE__ */ c.createElement(ut, { label: "Usage", onOpen: () => o("usage") }, r), /* @__PURE__ */ c.createElement(ut, { label: "Timing", onOpen: () => o("timing") }, l))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(H, { strong: !0, style: { fontSize: 12 } }, g(t, "thisRequest")), r, /* @__PURE__ */ c.createElement(gs, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
        H,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        g(t, "sessionTotal")
      ), /* @__PURE__ */ c.createElement(
        Pt,
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
      children: l
    },
    ...e.options ? [
      {
        key: "options",
        label: "Options",
        children: /* @__PURE__ */ c.createElement(ae, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ c.createElement(
    Mt,
    {
      size: "small",
      activeKey: n,
      onChange: (p) => o(p),
      items: i,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function vs(e, s = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function Es({
  oldText: e,
  newText: s
}) {
  const t = c.useMemo(
    () => Yn(e, s),
    [e, s]
  ), n = c.useMemo(() => qn(t), [t]), o = c.useMemo(() => Zn(t), [t]), l = te();
  return e === void 0 ? /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, g(l, "noPrevPrompt")) : /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ c.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ c.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ c.createElement(
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
    o.map((r, i) => {
      if (r.kind === "gap")
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
          r.count
        );
      const p = r;
      return /* @__PURE__ */ c.createElement(
        "div",
        {
          key: i,
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
function bs({ record: e }) {
  var l;
  const s = te(), t = e.headerTools ?? [], n = e.headerReason === "changed", o = [
    {
      key: "summary",
      label: g(s, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "#", value: String(e.index) }), /* @__PURE__ */ c.createElement(
        A,
        {
          label: g(s, "status"),
          value: n ? g(s, "promptChanged") : g(s, "promptInitial")
        }
      ), /* @__PURE__ */ c.createElement(A, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ c.createElement(A, { label: "Chars", value: String(((l = e.prompt) == null ? void 0 : l.length) ?? 0) }), /* @__PURE__ */ c.createElement(A, { label: "Tools", value: String(t.length) }))
    },
    ...n ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ c.createElement(
          Es,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: g(s, "prompt"),
      children: /* @__PURE__ */ c.createElement(ae, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 4 } }, t.map((r) => /* @__PURE__ */ c.createElement(H, { key: r, code: !0, style: { fontSize: 11 } }, r)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ c.createElement(
          as,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((r, i) => {
              var y;
              const p = typeof r.name == "string" && r.name || typeof ((y = r.function) == null ? void 0 : y.name) == "string" && r.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ c.createElement(H, { code: !0, style: { fontSize: 11 } }, p),
                children: /* @__PURE__ */ c.createElement(ae, { value: r })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ c.createElement(ae, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ c.createElement(Mt, { size: "small", items: o, tabBarStyle: { marginBottom: 8 } });
}
function dt({ dragRef: e, width: s }) {
  return /* @__PURE__ */ c.createElement(
    "div",
    {
      onPointerDown: (t) => {
        e.current = {
          anchorX: t.clientX,
          anchorWidth: s
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
  return e ? /* @__PURE__ */ c.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ c.createElement(
    _n,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ c.createElement(us, null),
      onClick: e
    }
  )) : null;
}
function Ss({
  record: e,
  request: s,
  onJumpSession: t,
  onJumpRecord: n,
  onSelectTurn: o,
  onClose: l
}) {
  const r = te(), [i, p] = Tn(400), y = is(null);
  if (rs(() => {
    const w = (N) => {
      const k = y.current;
      if (k === null) return;
      const d = k.anchorX - N.clientX;
      p(
        Math.min(hs, Math.max(ds, k.anchorWidth + d))
      );
    }, _ = () => {
      y.current = null;
    };
    return window.addEventListener("pointermove", w), window.addEventListener("pointerup", _), () => {
      window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", _);
    };
  }, []), e === null && s === null)
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
        Nt,
        {
          image: Nt.PRESENTED_IMAGE_SIMPLE,
          description: g(r, "selectRecord")
        }
      )
    );
  if (e === null && s !== null)
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
      /* @__PURE__ */ c.createElement(dt, { dragRef: y, width: i }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(ht, { onClose: l }), /* @__PURE__ */ c.createElement(ys, { request: s, onJumpRecord: n }))
    );
  const a = e;
  if (a.kind === "system" && a.prompt !== void 0)
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
      /* @__PURE__ */ c.createElement(dt, { dragRef: y, width: i }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(ht, { onClose: l }), /* @__PURE__ */ c.createElement(bs, { record: a }))
    );
  const h = a.usage, u = a.timing, x = [];
  return x.push({
    key: "summary",
    label: g(r, "summary"),
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "#", value: String(a.index) }), /* @__PURE__ */ c.createElement(A, { label: "Kind", value: bn(a, r) }), a.runIndex > 0 && o ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => o(a.runIndex)
      },
      "Request #",
      a.runIndex,
      " →"
    )) : null, /* @__PURE__ */ c.createElement(
      A,
      {
        label: g(r, "status"),
        value: a.running ? g(r, "running") : a.isError ? g(r, "error") : g(r, "success"),
        danger: a.isError
      }
    ), a.provider ? /* @__PURE__ */ c.createElement(A, { label: "Provider", value: a.provider }) : null, a.model ? /* @__PURE__ */ c.createElement(A, { label: g(r, "model"), value: a.model }) : null, a.toolName ? /* @__PURE__ */ c.createElement(A, { label: "Tool", value: a.toolName }) : null, a.toolOutputChars ? /* @__PURE__ */ c.createElement(
      A,
      {
        label: g(r, "outputSize"),
        value: a.toolOutputBytes ? `${U(a.toolOutputChars)} ${g(
          r,
          "charUnit"
        )} · ${xt(a.toolOutputBytes)} (${g(
          r,
          "beforeTruncation"
        )})` : `${U(a.toolOutputChars)} ${g(
          r,
          "charUnit"
        )}`
      }
    ) : null, a.kind === "user" && (a.channel || a.userId) ? /* @__PURE__ */ c.createElement(
      A,
      {
        label: g(r, "source"),
        value: [a.channel, a.userId].filter(Boolean).join(" · ")
      }
    ) : null, a.receipt ? /* @__PURE__ */ c.createElement(
      A,
      {
        label: g(r, "channel"),
        value: a.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ c.createElement(
      A,
      {
        label: g(r, "duration"),
        value: oe(a.timeSeconds)
      }
    ), a.note ? /* @__PURE__ */ c.createElement(H, { type: "warning", style: { fontSize: 12 } }, a.note) : null, a.spawnSession ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      A,
      {
        label: g(r, "spawnedAgent"),
        value: a.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ c.createElement(
      _n,
      {
        size: "small",
        onClick: () => a.spawnSession && t(a.spawnSession),
        style: { marginTop: 4 }
      },
      g(r, "openChildSession")
    ) : null) : null)
  }), a.kind === "tool" ? (a.toolInput && x.push({
    key: "payload",
    label: g(r, "input"),
    children: /* @__PURE__ */ c.createElement(ae, { value: a.toolInput, json: !0 })
  }), (a.toolOutput || a.toolError) && x.push({
    key: "result",
    label: g(r, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, a.toolError ? /* @__PURE__ */ c.createElement(H, { type: "danger", style: { fontSize: 12 } }, a.toolError) : null, a.toolOutput ? /* @__PURE__ */ c.createElement(ae, { value: a.toolOutput }) : null)
  })) : (a.outputText || a.thinkingText || a.messages || a.marker || a.toolCalls && a.toolCalls.length > 0) && (a.inputNew && a.inputNew.length > 0 && x.push({
    key: "input",
    label: g(r, "inputTab"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 11 } }, g(r, "inputNewNote")), a.contextReset ? /* @__PURE__ */ c.createElement(H, { type: "warning", style: { fontSize: 12 } }, g(r, "contextReset")) : null, a.messagesMeta ? /* @__PURE__ */ c.createElement(
      A,
      {
        label: g(r, "inputTotal"),
        value: `${a.messagesMeta.count} · ${U(
          a.messagesMeta.totalChars
        )} ${g(r, "charUnit")}`
      }
    ) : null, a.inputNew.map((w, _) => /* @__PURE__ */ c.createElement("div", { key: _ }, /* @__PURE__ */ c.createElement(
      "div",
      {
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(H, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, w.role),
      /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 11 } }, U(w.chars), " ", g(r, "charUnit"), w.toolCallId ? ` · ${w.toolCallId}` : "")
    ), w.text ? /* @__PURE__ */ c.createElement(ae, { value: w.text }) : null)))
  }), x.push({
    key: "raw",
    label: g(r, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, a.inboundParts && a.inboundParts.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, `${g(r, "inboundParts")} (${a.inboundParts.length})`), a.inboundParts.map((w, _) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: _,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(H, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, w.type.replace("Content", "")),
      /* @__PURE__ */ c.createElement(
        H,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        w.text ?? "-"
      )
    ))) : null, a.marker ? /* @__PURE__ */ c.createElement(ae, { value: a.marker }) : null, a.toolCalls && a.toolCalls.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, `${g(r, "toolCall")} (${a.toolCalls.length})`), a.toolCalls.map((w, _) => /* @__PURE__ */ c.createElement("div", { key: w.id || _, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ c.createElement(H, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", w.name), /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 11 } }, w.id)))) : null, a.note ? /* @__PURE__ */ c.createElement(H, { type: "warning", style: { fontSize: 12 } }, a.note) : null, a.messages && a.messages.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, `${g(r, "query")} (${a.messages.length})`), a.messages.map((w, _) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: _,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(H, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, w.role),
      /* @__PURE__ */ c.createElement(
        H,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        w.text
      )
    ))) : null, a.thinkingText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, g(r, "thinking")), /* @__PURE__ */ c.createElement(ae, { value: a.thinkingText })) : null, a.outputText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, g(r, "output")), /* @__PURE__ */ c.createElement(ae, { value: a.outputText })) : null)
  })), (a.startedAt !== null || h || u) && x.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "Started", value: Ne(a.startedAt) }), /* @__PURE__ */ c.createElement(A, { label: "Total", value: oe(a.timeSeconds) }), u ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
      A,
      {
        label: "TTFT",
        value: oe(u.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      A,
      {
        label: "Decoding",
        value: oe(u.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      A,
      {
        label: g(r, "throughput"),
        value: _t(
          h == null ? void 0 : h.output_tokens,
          u.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, g(r, "noTiming")))
  }), h && x.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "Input", value: U(h.input_tokens) }), /* @__PURE__ */ c.createElement(A, { label: "Output", value: U(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ c.createElement(
      A,
      {
        label: "Cache write",
        value: U(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ c.createElement(
      A,
      {
        label: "Cache read",
        value: U(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ c.createElement(A, { label: "Total", value: U(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ c.createElement(A, { label: "API time", value: oe(h.time) }) : null)
  }), x.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ c.createElement(ae, { value: a.raw })
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
    /* @__PURE__ */ c.createElement(dt, { dragRef: y, width: i }),
    /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(ht, { onClose: l }), /* @__PURE__ */ c.createElement(Mt, { size: "small", items: x, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Y = window.QwenPaw.host.React, xs = Y.useRef, ws = Y.useState;
Y.useCallback;
Y.useMemo;
const ks = Y.useEffect, Ts = Y.useLayoutEffect, _s = Y.useReducer;
Y.createContext;
Y.useContext;
Y.createElement;
Y.cloneElement;
Y.isValidElement;
Y.memo;
Y.forwardRef;
Y.Fragment;
Y.StrictMode;
Y.version;
function Ms(e) {
  return e ? e() : void 0;
}
function Cs(e, s, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(o, l, r) {
      if (typeof l == "string") {
        const i = l.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const p = +l;
          if (Number.isInteger(p) && p >= 0 && p < e) {
            let y = o[p];
            if (!y) {
              const a = s[p * 2];
              y = o[p] = {
                index: p,
                key: t(p),
                start: a,
                size: s[p * 2 + 1],
                end: a + s[p * 2 + 1],
                lane: 0
              };
            }
            return y;
          }
        }
        if (l === "length") return e;
      }
      return Reflect.get(o, l, r);
    }
  });
}
function Te(e, s, t) {
  let n = t.initialDeps ?? [], o, l = !0;
  function r() {
    var i;
    const p = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let y = 0;
    p && (y = Date.now());
    const a = e();
    if (!(a.length !== n.length || a.some((x, w) => n[w] !== x)))
      return o;
    n = a;
    let u = 0;
    if (p && (u = Date.now()), o = s(...a), p) {
      const x = Math.round((Date.now() - y) * 100) / 100, w = Math.round((Date.now() - u) * 100) / 100, _ = w / 16, N = (k, d) => {
        for (k = String(k); k.length < d; )
          k = " " + k;
        return k;
      };
      console.info(
        `%c⏱ ${N(w, 5)} /${N(x, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * _, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(l && t.skipInitialOnChange) && t.onChange(o), l = !1, o;
  }
  return r.updateDeps = (i) => {
    n = i;
  }, r;
}
function Bt(e, s) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Is = (e, s) => Math.abs(e - s) < 1.01, zs = (e, s, t) => {
  let n;
  return function(...o) {
    e.clearTimeout(n), n = e.setTimeout(() => s.apply(this, o), t);
  };
};
let De;
const mt = () => {
  if (De !== void 0) return De;
  if (typeof navigator > "u") return De = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return De = !0;
  const e = navigator.maxTouchPoints;
  return De = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Ht = (e) => {
  const { offsetWidth: s, offsetHeight: t } = e;
  return { width: s, height: t };
}, Os = (e) => e, As = (e) => {
  const s = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - s + 1, o = new Array(n);
  for (let l = 0; l < n; l++)
    o[l] = s + l;
  return o;
}, $s = (e, s) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const o = (r) => {
    const { width: i, height: p } = r;
    s({ width: Math.round(i), height: Math.round(p) });
  };
  if (o(Ht(t)), !n.ResizeObserver)
    return () => {
    };
  const l = new n.ResizeObserver((r) => {
    const i = () => {
      const p = r[0];
      if (p != null && p.borderBoxSize) {
        const y = p.borderBoxSize[0];
        if (y) {
          o({ width: y.inlineSize, height: y.blockSize });
          return;
        }
      }
      o(Ht(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return l.observe(t, { box: "border-box" }), () => {
    l.unobserve(t);
  };
}, Ye = {
  passive: !0
}, Rs = typeof window > "u" ? !0 : "onscrollend" in window, Ls = (e, s, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  const l = e.options.useScrollendEvent && Rs;
  let r = 0;
  const i = l ? null : zs(
    o,
    () => s(r, !1),
    e.options.isScrollingResetDelay
  ), p = (h) => () => {
    r = t(n), i == null || i(), s(r, h);
  }, y = p(!0), a = p(!1);
  return n.addEventListener("scroll", y, Ye), l && n.addEventListener("scrollend", a, Ye), () => {
    n.removeEventListener("scroll", y), l && n.removeEventListener("scrollend", a);
  };
}, Ds = (e, s) => Ls(e, s, (t) => {
  const { horizontal: n, isRtl: o } = e.options;
  return n ? t.scrollLeft * (o && -1 || 1) : t.scrollTop;
}), js = (e, s, t) => {
  if (t.options.useCachedMeasurements) {
    const n = t.indexFromElement(e), o = t.options.getItemKey(n);
    return t.itemSizeCache.get(o) ?? t.options.estimateSize(n);
  }
  if (s != null && s.borderBoxSize) {
    const n = s.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!s) {
    const n = t.indexFromElement(e), o = t.options.getItemKey(n), l = t.itemSizeCache.get(o);
    if (l !== void 0)
      return l;
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ns = (e, {
  adjustments: s = 0,
  behavior: t
}, n) => {
  var o, l;
  (l = (o = n.scrollElement) == null ? void 0 : o.scrollTo) == null || l.call(o, {
    [n.options.horizontal ? "left" : "top"]: e + s,
    behavior: t
  });
}, Ps = Ns;
class Fs {
  constructor(s) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, o;
      return ((o = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : o.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((l) => {
          const r = () => {
            const i = l.target, p = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [y, a] of this.elementsCache)
                if (a === i) {
                  this.elementsCache.delete(y);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(p) && this.resizeItem(
              p,
              this.options.measureElement(i, l, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
        });
      }));
      return {
        disconnect: () => {
          var o;
          (o = n()) == null || o.disconnect(), t = null;
        },
        observe: (o) => {
          var l;
          return (l = n()) == null ? void 0 : l.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var l;
          return (l = n()) == null ? void 0 : l.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var n, o;
      const l = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Os,
        rangeExtractor: As,
        onChange: () => {
        },
        measureElement: js,
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
      for (const u in t) {
        const x = t[u];
        x !== void 0 && (l[u] = x);
      }
      const r = this.options;
      let i = null, p = null, y = !1;
      if (r !== void 0 && r.enabled && l.enabled && l.anchorTo === "end" && this.scrollElement !== null) {
        const u = r.count, x = l.count, w = this.getMeasurements(), _ = u > 0 ? ((n = w[0]) == null ? void 0 : n.key) ?? r.getItemKey(0) : null, N = u > 0 ? ((o = w[u - 1]) == null ? void 0 : o.key) ?? r.getItemKey(u - 1) : null;
        if (x !== u || u > 0 && x > 0 && (l.getItemKey(0) !== _ || l.getItemKey(x - 1) !== N)) {
          y = !0;
          const m = u > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? w[0] : null;
          m && (i = [m.key, this.getScrollOffset() - m.start]);
          const f = l.followOnAppend === !0 ? "auto" : l.followOnAppend || null;
          f && x > u && this.isAtEnd(r.scrollEndThreshold) && (u === 0 || l.getItemKey(x - 1) !== N) && (p = f);
        }
      }
      this.options = l, y && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let a = !1, h = 0;
      if (i && this.scrollOffset !== null) {
        const [u, x] = i, w = this.getMeasurements(), { count: _, getItemKey: N } = this.options;
        let k = 0;
        for (; k < _ && N(k) !== u; )
          k++;
        if (k < _) {
          const d = w[k];
          if (d) {
            const m = Math.max(0, d.start + x);
            m !== this.scrollOffset && (h = m - this.scrollOffset, this.scrollOffset = m, a = !0);
          }
        }
      }
      (a || p) && (this.pendingScrollAnchor = [
        a ? i[0] : null,
        a ? i[1] : 0,
        p,
        h
      ]);
    }, this.notify = (t) => {
      var n, o;
      (o = (n = this.options).onChange) == null || o.call(n, this, t);
    }, this.maybeNotify = Te(
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
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((l) => {
          this.observer.observe(l);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (l) => {
            this.scrollRect = l, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (l, r) => {
            if (r && this._intendedScrollOffset === null && l === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(l - this._intendedScrollOffset) < 1.5 && (l = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const i = this.getScrollOffset();
            this.scrollDirection = r ? i === l ? this.scrollDirection : i < l ? "forward" : "backward" : null, this.scrollOffset = l, this.isScrolling = r, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const l = this.scrollElement, r = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, i = () => {
            this._iosTouching = !1, !(!mt() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          l.addEventListener(
            "touchstart",
            r,
            Ye
          ), l.addEventListener(
            "touchend",
            i,
            Ye
          ), this.unsubs.push(() => {
            l.removeEventListener("touchstart", r), l.removeEventListener("touchend", i), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const o = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, o && this.scrollElement && this.options.enabled) {
        const [l, r, i, p] = o;
        l !== null && !i && (mt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? p !== 0 && (this._iosDeferredAdjustment += p) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), i && this.scrollToEnd({ behavior: i });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      const t = this.getScrollOffset(), n = this.getMaxScrollOffset();
      if (t < 0 || t > n) return;
      if (this._iosDeferredAdjustment < 0 && t >= n - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const o = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Te(
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
      (t, n, o, l, r, i, p, y) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: o,
        getItemKey: l,
        enabled: r,
        lanes: i,
        laneAssignmentMode: p,
        gap: y
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Te(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: o,
        getItemKey: l,
        enabled: r,
        lanes: i,
        laneAssignmentMode: p,
        gap: y
      }, a) => {
        const h = this.itemSizeCache;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const k of this.laneAssignments.keys())
            k >= t && this.laneAssignments.delete(k);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((k) => {
          this.itemSizeCache.set(k.key, k.size);
        }));
        const u = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const k = t * 2;
          let d = this._flatMeasurements;
          if (!d || d.length < k) {
            const b = new Float64Array(k);
            d && u > 0 && b.set(d.subarray(0, u * 2)), d = b, this._flatMeasurements = d;
          }
          let m;
          if (u === 0)
            m = n + o;
          else {
            const b = u - 1;
            m = d[b * 2] + d[b * 2 + 1] + y;
          }
          for (let b = u; b < t; b++) {
            const M = l(b), S = h.get(M), R = typeof S == "number" ? S : this.options.estimateSize(b);
            d[b * 2] = m, d[b * 2 + 1] = R, m += R + y;
          }
          const f = Cs(t, d, l);
          return this.measurementsCache = f, f;
        }
        const x = this.measurementsCache.slice(0, u), w = new Array(i).fill(
          void 0
        ), _ = new Float64Array(i);
        let N = 0;
        for (let k = 0; k < u; k++) {
          const d = x[k];
          d && (w[d.lane] === void 0 && N++, w[d.lane] = k, _[d.lane] = d.end);
        }
        for (let k = u; k < t; k++) {
          const d = l(k), m = this.laneAssignments.get(k);
          let f, b;
          const M = p === "estimate" || h.has(d);
          if (m !== void 0 && this.options.lanes > 1) {
            f = m;
            const C = w[f], j = C !== void 0 ? x[C] : void 0;
            b = j ? j.end + y : n + o;
          } else if (N === i) {
            let C = 0, j = _[0], se = w[0];
            for (let P = 1; P < i; P++) {
              const X = _[P];
              (X < j || X === j && w[P] < se) && (C = P, j = X, se = w[P]);
            }
            f = C, b = j + y, M && this.laneAssignments.set(k, f);
          } else
            f = k % this.options.lanes, b = n + o, M && this.laneAssignments.set(k, f);
          const S = h.get(d), R = typeof S == "number" ? S : this.options.estimateSize(k), z = b + R;
          x[k] = {
            index: k,
            start: b,
            size: R,
            end: z,
            key: d,
            lane: f
          }, w[f] === void 0 && N++, w[f] = k, _[f] = z;
        }
        return this.measurementsCache = x, x;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Te(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, o, l) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = Hs(
        t,
        n,
        o,
        l,
        // Pass the typed array so binary search + forward-walk can read
        // start/end directly from Float64Array, skipping the Proxy traps.
        l === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
      ), this.range),
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Te(
      () => {
        let t = null, n = null;
        const o = this.calculateRange();
        return o && (t = o.startIndex, n = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, o, l, r) => l === null || r === null ? [] : t({
        startIndex: l,
        endIndex: r,
        overscan: n,
        count: o
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, o = t.getAttribute(n);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var n;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const o = this.scrollState.index ?? ((n = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : n.index);
      if (o !== void 0 && this.range) {
        const l = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), r = Math.max(0, o - l), i = Math.min(
          this.options.count - 1,
          o + l
        );
        return t >= r && t <= i;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((r, i) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(i));
        });
        return;
      }
      const n = this.indexFromElement(t), o = this.options.getItemKey(n), l = this.elementsCache.get(o);
      l !== t && (l && this.observer.unobserve(l), this.observer.observe(t), this.elementsCache.set(o, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var o, l;
      if (t < 0 || t >= this.options.count) return;
      let r, i, p;
      const y = this._flatMeasurements;
      if (this.options.lanes === 1 && y !== null)
        p = this.options.getItemKey(t), i = y[t * 2], r = y[t * 2 + 1];
      else {
        const u = this.measurementsCache[t];
        if (!u) return;
        p = u.key, i = u.start, r = u.size;
      }
      const a = this.itemSizeCache.get(p) ?? r, h = n - a;
      if (h !== 0) {
        const u = this.options.anchorTo === "end" && ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, x = u ? this.getTotalSize() : 0, w = this.getScrollOffset() + this.scrollAdjustments, N = !this.itemSizeCache.has(p) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          i < w
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          i + a <= w && this.scrollDirection !== "backward"
        ), k = ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: p,
            start: i,
            size: r,
            end: i + r,
            lane: 0
          },
          h,
          this
        ) : N);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(p, n), this.itemSizeCacheVersion++;
        let d = !1;
        u ? d = this.applyScrollAdjustment(
          this.getTotalSize() - x
        ) : k && (d = this.applyScrollAdjustment(h)), this.notify(d);
      }
    }, this.getVirtualItems = Te(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const o = [];
        for (let l = 0, r = t.length; l < r; l++) {
          const i = t[l], p = n[i];
          o.push(p);
        }
        return o;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length === 0)
        return;
      const o = this._flatMeasurements, l = this.options.lanes === 1 && o != null, r = Mn(
        0,
        n.length - 1,
        l ? (i) => o[i * 2] : (i) => Bt(n[i]).start,
        t
      );
      return Bt(n[r]);
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
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (t = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= t, this.getOffsetForAlignment = (t, n, o = 0) => {
      if (!this.scrollElement) return 0;
      const l = this.getSize(), r = this.getScrollOffset();
      n === "auto" && (n = t >= r + l ? "end" : "start"), n === "center" ? t += (o - l) / 2 : n === "end" && (t -= l);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const o = this.getSize(), l = this.getScrollOffset(), r = this.measurementsCache[t];
      if (!r) return;
      if (n === "auto")
        if (r.end >= l + o - this.options.scrollPaddingEnd)
          n = "end";
        else if (r.start <= l + this.options.scrollPaddingStart)
          n = "start";
        else
          return [l, n];
      if (n === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const i = n === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, n, r.size),
        n
      ];
    }, this.scrollToOffset = (t, { align: n = "start", behavior: o = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const l = this.getOffsetForAlignment(t, n), r = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: o,
        startedAt: r,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: o }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: n = "auto",
      behavior: o = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getOffsetForIndex(t, n);
      if (!l)
        return;
      const [r, i] = l, p = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: o,
        startedAt: p,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: o }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: n = "auto" } = {}) => {
      const o = this.getScrollOffset() + t, l = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: n,
        startedAt: l,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
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
      const n = this.getMeasurements();
      let o;
      if (n.length === 0)
        o = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const l = n.length - 1, r = this._flatMeasurements;
        r != null ? o = r[l * 2] + r[l * 2 + 1] : o = ((t = n[l]) == null ? void 0 : t.end) ?? 0;
      } else {
        const l = Array(this.options.lanes).fill(null);
        let r = n.length - 1;
        for (; r >= 0 && l.some((i) => i === null); ) {
          const i = n[r];
          l[i.lane] === null && (l[i.lane] = i.end), r--;
        }
        o = Math.max(...l.filter((i) => i !== null));
      }
      return Math.max(
        o - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const t = [];
      if (this.itemSizeCache.size === 0) return t;
      const n = this.getMeasurements();
      for (const o of n)
        o && this.itemSizeCache.has(o.key) && t.push({
          index: o.index,
          key: o.key,
          start: o.start,
          size: o.size,
          end: o.end,
          lane: o.lane
        });
      return t;
    }, this._scrollToOffset = (t, {
      adjustments: n,
      behavior: o
    }) => {
      this._intendedScrollOffset = t + (n ?? 0), this.options.scrollToFn(t, { behavior: o, adjustments: n }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(s);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(s, t) {
    return s === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), mt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += s, !1) : (this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += s,
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, o = n ? n[0] : this.scrollState.lastTargetOffset, l = 1, r = o !== this.scrollState.lastTargetOffset;
    if (!r && Is(o, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= l) {
        this.getScrollOffset() !== o && this._scrollToOffset(o, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, r) {
      const i = this.getSize() || 600, p = Math.abs(o - this.getScrollOffset()), y = this.scrollState.behavior === "smooth" && p > i;
      this.scrollState.lastTargetOffset = o, y || (this.scrollState.behavior = "auto"), this._scrollToOffset(o, {
        adjustments: void 0,
        behavior: y ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const Mn = (e, s, t, n) => {
  for (; e <= s; ) {
    const o = (e + s) / 2 | 0, l = t(o);
    if (l < n)
      e = o + 1;
    else if (l > n)
      s = o - 1;
    else
      return o;
  }
  return e > 0 ? e - 1 : 0;
};
function Bs(e, s, t) {
  let n = 0;
  for (; n <= s; ) {
    const o = (n + s) / 2 | 0, l = e[o * 2];
    if (l < t)
      n = o + 1;
    else if (l > t)
      s = o - 1;
    else
      return o;
  }
  return n > 0 ? n - 1 : 0;
}
function Hs(e, s, t, n, o) {
  const l = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: l };
  if (n === 1 && o !== null) {
    const y = Bs(
      o,
      l,
      t
    );
    let a = y;
    const h = t + s;
    for (; a < l && o[a * 2] + o[a * 2 + 1] < h; )
      a++;
    return { startIndex: y, endIndex: a };
  }
  let i = Mn(0, l, (y) => e[y].start, t), p = i;
  if (n === 1)
    for (; p < l && e[p].end < t + s; )
      p++;
  else if (n > 1) {
    const y = Array(n).fill(0);
    for (; p < l && y.some((h) => h < t + s); ) {
      const h = e[p];
      y[h.lane] = h.end, p++;
    }
    const a = Array(n).fill(t + s);
    for (; i >= 0 && a.some((h) => h >= t); ) {
      const h = e[i];
      a[h.lane] = h.start, i--;
    }
    i = Math.max(0, i - i % n), p = Math.min(l, p + (n - 1 - p % n));
  }
  return { startIndex: i, endIndex: p };
}
const pt = typeof document < "u" ? Ts : ks;
function Us({
  useFlushSync: e = !0,
  directDomUpdates: s = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const o = _s((a) => a + 1, 0)[1], l = xs({
    enabled: s,
    mode: t,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  l.current.enabled = s, l.current.mode = t;
  const r = (a) => {
    const h = l.current;
    if (!h.enabled || !h.container) return;
    const u = a.getTotalSize();
    if (u !== h.lastSize) {
      h.lastSize = u;
      const x = a.options.horizontal ? "width" : "height";
      h.container.style[x] = `${u}px`;
    }
  }, i = (a) => {
    const h = l.current;
    if (!h.enabled || !h.container) return;
    r(a);
    const u = !!a.options.horizontal, x = h.mode === "transform", w = u ? "left" : "top", _ = a.options.scrollMargin, N = a.getVirtualItems();
    for (const k of N) {
      const d = k.start - _, m = a.elementsCache.get(k.key);
      m && h.lastPositions.get(m) !== d && (h.lastPositions.set(m, d), x ? m.style.transform = u ? `translate3d(${d}px, 0, 0)` : `translate3d(0, ${d}px, 0)` : m.style[w] = `${d}px`);
    }
  }, p = {
    ...n,
    onChange: (a, h) => {
      var u;
      const x = l.current;
      let w = !0;
      if (x.enabled) {
        i(a);
        const _ = a.range, N = x.prevRange;
        w = !N || N.isScrolling !== a.isScrolling || N.startIndex !== (_ == null ? void 0 : _.startIndex) || N.endIndex !== (_ == null ? void 0 : _.endIndex), w && (x.prevRange = _ ? {
          startIndex: _.startIndex,
          endIndex: _.endIndex,
          isScrolling: a.isScrolling
        } : null);
      }
      w && (e && h ? Ms(o) : o()), (u = n.onChange) == null || u.call(n, a, h);
    }
  }, [y] = ws(() => {
    const a = new Fs(p);
    return Object.assign(a, {
      containerRef: (h) => {
        const u = l.current;
        if (u.container = h, u.lastSize = null, h && u.enabled) {
          const x = a.getTotalSize();
          u.lastSize = x;
          const w = a.options.horizontal ? "width" : "height";
          h.style[w] = `${x}px`;
        }
      }
    });
  });
  return y.setOptions(p), pt(() => y._didMount(), []), pt(() => (r(y), y._willUpdate())), pt(() => {
    i(y);
  }), y;
}
function Ws(e) {
  return Us({
    observeElementRect: $s,
    observeElementOffset: Ds,
    scrollToFn: Ps,
    ...e
  });
}
const et = window.QwenPaw.host, O = et.React, { useRef: Ks } = O, { Tag: Cn } = et.antd, { Text: he } = et.antd.Typography, {
  CaretRightOutlined: Vs,
  CloseCircleOutlined: Xs,
  FileTextOutlined: Gs,
  RobotOutlined: Js,
  RocketOutlined: Qs,
  SafetyOutlined: Ys,
  SendOutlined: Zs,
  SettingOutlined: qs,
  ToolOutlined: eo,
  UserOutlined: to
} = et.antdIcons, no = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, so = {
  user: /* @__PURE__ */ O.createElement(to, null),
  message: /* @__PURE__ */ O.createElement(Js, null),
  tool: /* @__PURE__ */ O.createElement(eo, null),
  system: /* @__PURE__ */ O.createElement(qs, null)
}, Ut = {
  approval: { color: "volcano", icon: /* @__PURE__ */ O.createElement(Ys, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ O.createElement(Zs, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ O.createElement(Qs, null) },
  header: { color: "green", icon: /* @__PURE__ */ O.createElement(Gs, null) },
  error: { color: "red", icon: /* @__PURE__ */ O.createElement(Xs, null) }
}, oo = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Wt = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, lo = 150, wt = 26, In = 34, Kt = 9, Vt = 30;
function ro(e) {
  const s = te(), t = Wt[e] ?? Wt.unknown;
  return s === "zh-CN" ? t.zh : t.en;
}
const io = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function ao(e, s) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.inboundParts ?? []) {
    const o = io[n.type];
    o && t.set(o, (t.get(o) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([n, o]) => `${g(s, n)}×${o}`).join(" ");
}
function co(e, s) {
  const t = e.receipt, n = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${g(s, "replySent")}${n} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${g(s, "chars")}`;
}
function Xt({
  record: e,
  selected: s,
  dimmed: t,
  multiRequest: n,
  onSelect: o
}) {
  var i, p;
  const l = e.usage, r = l && (l.input_tokens || l.output_tokens) ? `${U(l.input_tokens)}→${U(
    l.output_tokens
  )}` : null;
  return /* @__PURE__ */ O.createElement(
    "div",
    {
      className: "at-ledger-row",
      "data-kind": e.kind,
      "data-error": e.isError || void 0,
      "data-running": e.running || void 0,
      "data-selected": s || void 0,
      "data-dimmed": t || void 0,
      onClick: o,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: wt,
        cursor: "pointer",
        background: s ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1
      }
    },
    /* @__PURE__ */ O.createElement(
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
      n && /* @__PURE__ */ O.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ O.createElement(
      Cn,
      {
        color: e.markerKind && ((i = Ut[e.markerKind]) == null ? void 0 : i.color) || no[e.kind] || "default",
        icon: e.markerKind && ((p = Ut[e.markerKind]) == null ? void 0 : p.icon) || so[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      bn(e, te())
    ),
    /* @__PURE__ */ O.createElement(
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
      e.receipt ? /* @__PURE__ */ O.createElement(he, { type: "secondary", style: { fontSize: 12 } }, co(e, te())) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(he, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ O.createElement(he, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ O.createElement(
        he,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(
        he,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(he, { type: "secondary", style: { fontSize: 11 } }, ` ${ao(e, te()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ O.createElement(he, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
    ),
    /* @__PURE__ */ O.createElement(
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
      r ? /* @__PURE__ */ O.createElement("span", { style: { color: "#1677ff" } }, r) : null,
      r ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && oe(e.timeSeconds)
    )
  );
}
function uo({
  turn: e,
  collapsed: s,
  selected: t,
  cellCount: n,
  onToggle: o,
  onSelect: l
}) {
  const r = te();
  return /* @__PURE__ */ O.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: In }
    },
    /* @__PURE__ */ O.createElement(
      "span",
      {
        onClick: (i) => {
          i.stopPropagation(), l();
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
      /* @__PURE__ */ O.createElement(
        Vs,
        {
          onClick: (i) => {
            i.stopPropagation(), o();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: s ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ O.createElement(he, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ O.createElement(he, { type: "secondary", style: { fontSize: 11 } }, oe(e.durationMs / 1e3)),
      /* @__PURE__ */ O.createElement(he, { type: "secondary", style: { fontSize: 11 } }, n, " ", g(r, "events")),
      /* @__PURE__ */ O.createElement(
        Cn,
        {
          color: oo[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        ro(e.status)
      )
    )
  );
}
function ho({
  turns: e,
  selectedIndex: s,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: o,
  searchMatchIndexes: l,
  onSelectedIndexChange: r,
  onSelectedTurnChange: i,
  onToggleTurn: p,
  callsCollapsed: y,
  hasOlderRecords: a,
  loadingOlder: h,
  onLoadOlder: u,
  initialRecord: x,
  emptyText: w
}) {
  const _ = te(), N = Ks(null), k = e.filter((S) => S.turn !== null), d = k.length > 1, m = O.useMemo(() => {
    var R;
    const S = [];
    a && S.push({
      key: "load-older",
      height: Vt,
      type: "load-older"
    }), x && (S.push({
      key: "initial",
      height: wt,
      type: "initial",
      record: x
    }), S.push({
      key: "initial-divider",
      height: Kt,
      type: "divider"
    }));
    for (const z of k) {
      const C = z.turn;
      if (S.push({
        key: `turn-${C}`,
        height: In,
        type: "boundary",
        turn: z
      }), !n.has(C))
        for (const j of ((R = z.groups[0]) == null ? void 0 : R.cells) ?? [])
          y && j.kind === "tool" || S.push({
            key: `rec-${j.index}`,
            height: wt,
            type: "record",
            record: j
          });
    }
    return S;
  }, [
    k,
    n,
    y,
    a,
    x
  ]), f = O.useCallback(
    (S) => o !== null && !o.has(S.index) || l !== null && !l.has(S.index),
    [o, l]
  ), b = (S) => {
    var R;
    switch (S.type) {
      case "load-older":
        return /* @__PURE__ */ O.createElement("div", { style: { textAlign: "center", height: Vt } }, /* @__PURE__ */ O.createElement(
          "button",
          {
            type: "button",
            onClick: u,
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
          h ? "…" : `⋯ ${g(_, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ O.createElement(
          "div",
          {
            style: {
              height: Kt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const z = S.record;
        return /* @__PURE__ */ O.createElement(
          Xt,
          {
            record: z,
            selected: s === z.index,
            dimmed: f(z),
            multiRequest: d,
            onSelect: () => r(z.index)
          }
        );
      }
      case "boundary": {
        const z = S.turn, C = z.turn;
        return /* @__PURE__ */ O.createElement(
          uo,
          {
            turn: z,
            collapsed: n.has(C),
            selected: t === C,
            cellCount: ((R = z.groups[0]) == null ? void 0 : R.cells.length) ?? 0,
            onToggle: () => p(C),
            onSelect: () => i(C)
          }
        );
      }
      case "record":
      default: {
        const z = S.record;
        return /* @__PURE__ */ O.createElement(
          Xt,
          {
            record: z,
            selected: s === z.index,
            dimmed: f(z),
            multiRequest: d,
            onSelect: () => r(z.index)
          }
        );
      }
    }
  };
  if (m.length === 0)
    return /* @__PURE__ */ O.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ O.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        w ?? g(_, "noSessions")
      )
    );
  const M = m.length <= lo ? /* @__PURE__ */ O.createElement("div", null, m.map((S) => b(S))) : /* @__PURE__ */ O.createElement(
    mo,
    {
      rows: m,
      scrollRef: N,
      renderRow: b
    }
  );
  return /* @__PURE__ */ O.createElement(
    "div",
    {
      ref: N,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    M
  );
}
function mo({
  rows: e,
  scrollRef: s,
  renderRow: t
}) {
  const n = Ws({
    count: e.length,
    getScrollElement: () => s.current,
    estimateSize: (o) => e[o].height,
    overscan: 12
  });
  return /* @__PURE__ */ O.createElement(
    "div",
    {
      style: {
        height: n.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    n.getVirtualItems().map((o) => /* @__PURE__ */ O.createElement(
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
      t(e[o.index])
    ))
  );
}
function ft(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function Gt(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (s) => typeof s == "number" && Number.isFinite(s)
  );
}
function po(e) {
  if (!Array.isArray(e) || e.length === 0) return;
  const s = [];
  for (const t of e) {
    if (!t || typeof t != "object") continue;
    const n = t;
    s.push({
      role: typeof n.role == "string" ? n.role : "?",
      chars: typeof n.chars == "number" ? n.chars : 0,
      text: typeof n.text == "string" ? n.text : void 0,
      toolCallId: typeof n.tool_call_id == "string" ? n.tool_call_id : void 0
    });
  }
  return s.length > 0 ? s : void 0;
}
function pe(e, s = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function fo(e) {
  var k;
  const s = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), r = [];
  let i = "";
  const p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  let h = 0, u = 0;
  const x = (d) => d.groups[0].cells, w = (d, m) => {
    const f = l.get(d);
    f ? f.push(m) : l.set(d, [m]);
  }, _ = (d, m) => {
    if (!d)
      if (i)
        d = i;
      else {
        r.push(m);
        return;
      }
    const f = t.get(d);
    if (f)
      m.runIndex = f.turn ?? 0, x(f).push(m);
    else if (i) {
      const b = t.get(i);
      b ? (m.runIndex = b.turn ?? 0, x(b).push(m)) : w(d, m);
    } else
      w(d, m);
  }, N = (d, m) => {
    const f = l.get(m);
    if (f) {
      for (const b of f) x(d).push(b);
      l.delete(m);
    }
  };
  for (const d of e) {
    const m = ft(d);
    switch (d.type) {
      case "run/start": {
        u += 1, p.set(
          d.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const f = {
          turn: u,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${u}`, cells: [] }]
        };
        t.set(d.run_id, f), s.push(f), i = d.run_id, N(f, d.run_id);
        for (const R of r.splice(0))
          R.runIndex = u, x(f).push(R);
        const b = Array.isArray(m.messages) ? m.messages : [], M = String(m.query ?? ""), S = {
          index: ++h,
          runIndex: u,
          runId: d.run_id,
          kind: "user",
          text: pe(M) || pe((k = b.at(-1)) == null ? void 0 : k.text),
          messages: b,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          model: void 0
        };
        y.set(d.run_id, S), x(f).push(S);
        break;
      }
      case "run/end": {
        const f = t.get(d.run_id);
        i === d.run_id && (i = ""), p.delete(d.run_id), y.delete(d.run_id);
        const b = String(m.status ?? "unknown");
        if (f && (f.status = b, f.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), b === "error" && m.error) {
          const M = f ?? {
            turn: null,
            status: b,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          f || s.push(M), M.groups[0].cells.push({
            index: ++h,
            runIndex: u,
            runId: d.run_id,
            kind: "system",
            markerKind: "error",
            text: pe(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: re(d.t),
            isError: !0,
            running: !1,
            raw: [d]
          });
        }
        break;
      }
      case "agent/spawn": {
        const f = typeof m.child_session_id == "string" ? m.child_session_id : void 0, b = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${b} → ${f ?? "?"}`,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          spawnSession: f,
          spawnAgent: b,
          raw: [d]
        });
        break;
      }
      case "message/inbound": {
        const f = Array.isArray(m.parts) ? m.parts : [], b = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, M = f.map((j) => ({
          type: String(j.type ?? "?"),
          text: typeof j.text == "string" ? j.text : void 0
        })), S = p.get(d.run_id) ?? "", R = b && typeof b.user_id == "string" && b.user_id ? b.user_id : void 0, z = pe(
          M.map((j) => j.text ?? "").filter(Boolean).join(`
`)
        ), C = y.get(d.run_id);
        C && !C.inboundParts ? (C.inboundParts = M, C.channel = S || void 0, C.userId = R, C.raw = [
          ...C.raw ?? [],
          d
        ], C.text || (C.text = z)) : _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "user",
          text: z || "📥",
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          channel: S || void 0,
          userId: R,
          inboundParts: M,
          raw: [d]
        });
        break;
      }
      case "message/outbound": {
        const f = typeof m.text == "string" ? m.text : "";
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          outputText: f || void 0,
          receipt: {
            channel: p.get(d.run_id) || void 0,
            chars: f.length
          },
          raw: [d]
        });
        break;
      }
      case "approval/asked": {
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(m.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          raw: [d]
        });
        break;
      }
      case "approval/decided": {
        const f = String(m.decision ?? "?"), b = m.tool_name ? String(m.tool_name) : "";
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: b ? `${b} → ${f}` : f,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: f === "denied",
          running: !1,
          raw: [d]
        });
        break;
      }
      case "llm/header": {
        const f = typeof m.sha256 == "string" ? m.sha256 : "", b = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, M = m.reason === "changed" ? "changed" : "initial", S = typeof m.system_prompt == "string" ? m.system_prompt : "", R = Array.isArray(m.tools) ? m.tools : [], z = Array.isArray(m.schemas) ? m.schemas : void 0;
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "header",
          text: M === "initial" ? `⚙ ${S ? `System Prompt (${S.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          prompt: S,
          prevPrompt: a.get(b ?? ""),
          headerTools: R,
          headerReason: M,
          sha: f,
          prevSha: b,
          schemas: z,
          raw: [d]
        }), f && a.set(f, S);
        break;
      }
      case "llm/call": {
        const f = ft(d), b = f.options && typeof f.options == "object" && Object.keys(f.options).length > 0 ? f.options : void 0, M = f.messages_meta, S = M && typeof M == "object" ? {
          count: typeof M.count == "number" ? M.count : 0,
          totalChars: typeof M.total_chars == "number" ? M.total_chars : 0,
          charsByRole: Gt(M.chars_by_role) ? M.chars_by_role : {},
          countByRole: Gt(M.count_by_role) ? M.count_by_role : {},
          maxToolChars: typeof M.max_tool_chars == "number" ? M.max_tool_chars : 0
        } : void 0, R = {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: re(d.t),
          isError: !1,
          running: !0,
          model: String(f.model ?? "unknown"),
          provider: typeof f.provider == "string" && f.provider ? f.provider : void 0,
          messagesMeta: S,
          inputNew: po(f.messages_new),
          contextReset: f.context_reset === !0,
          options: b
        };
        _(d.run_id, R);
        const z = n.get(d.run_id) ?? [];
        z.push({ cell: R, callData: f, call: d }), n.set(d.run_id, z);
        break;
      }
      case "llm/result": {
        const f = n.get(d.run_id), b = f == null ? void 0 : f.shift(), M = (b == null ? void 0 : b.callData) ?? {}, S = typeof m.duration_ms == "number" ? m.duration_ms : null, R = m.usage ?? void 0, z = m.timing, C = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, P = {
          text: (m.error ? pe(String(m.error)) : pe(String(m.text ?? ""))) || (C && C.length > 0 ? `🛠 ${C.map((X) => X.name).join(", ")}` : ""),
          timeSeconds: S === null ? null : S / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: R,
          timing: z,
          toolCalls: C,
          note: m.note ? String(m.note) : void 0
        };
        b ? (Object.assign(b.cell, P), b.cell.model = String(
          m.model ?? M.model ?? b.cell.model
        ), b.cell.raw = [
          ...b.call ? [b.call] : [],
          d
        ]) : _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          startedAt: re(d.t),
          model: String(m.model ?? M.model ?? "unknown"),
          ...P
        });
        break;
      }
      case "tool/call": {
        const f = ft(d), b = {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `${String(f.name ?? "?")}(${pe(
            String(f.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: re(d.t),
          isError: !1,
          running: !0,
          toolName: String(f.name ?? "?"),
          toolInput: f.input ? String(f.input) : void 0
        };
        _(d.run_id, b);
        const M = o.get(d.run_id) ?? [];
        M.push({ cell: b, callData: f, call: d }), o.set(d.run_id, M);
        break;
      }
      case "tool/result": {
        const f = o.get(d.run_id), b = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let M;
        if (f) {
          const se = b ? f.findIndex(
            (P) => P.callData.tool_call_id === b
          ) : -1;
          se >= 0 ? M = f.splice(se, 1)[0] : M = f.shift();
        }
        const S = typeof m.duration_ms == "number" ? m.duration_ms : null, R = m.ok !== !1 && !m.error, z = m.output ? String(m.output) : void 0, C = z ? ` → ${pe(z, 60)}` : "", j = {
          timeSeconds: S === null ? null : S / 1e3,
          isError: !R,
          running: !1,
          toolOutput: z,
          toolOutputChars: typeof m.output_chars == "number" ? m.output_chars : void 0,
          toolOutputBytes: typeof m.output_bytes == "number" ? m.output_bytes : void 0,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        M ? (Object.assign(M.cell, j), M.cell.text = `${M.cell.text}${C}`, M.cell.raw = [
          ...M.call ? [M.call] : [],
          d
        ]) : _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `?${C}`,
          startedAt: re(d.t),
          ...j
        });
        break;
      }
    }
  }
  for (const [d, m] of l) {
    const f = t.get(d);
    if (f) {
      for (const b of m) x(f).push(b);
      l.delete(d);
    }
  }
  return s;
}
function Jt(e) {
  return e.flatMap((s) => s.groups.flatMap((t) => t.cells));
}
function go(e) {
  var r;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const s = e[0], t = ((r = s.groups[0]) == null ? void 0 : r.cells) ?? [], n = t.findIndex(
    (i) => i.kind === "system" && i.headerReason === "initial" && i.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const o = t[n], l = {
    ...s,
    groups: [
      {
        ...s.groups[0],
        cells: t.filter((i, p) => p !== n)
      }
    ]
  };
  return { initial: o, turns: [l, ...e.slice(1)] };
}
const ee = {
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
}, Qt = "agent-trace-timeline-styles", yo = `
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
let gt = !1;
function vo() {
  if (gt || typeof document > "u") return;
  if (document.getElementById(Qt)) {
    gt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Qt, e.textContent = yo, document.head.appendChild(e), gt = !0;
}
function yt(e) {
  return ss(e);
}
function zn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Yt(e) {
  return e != null && Number.isFinite(e);
}
function Eo(e) {
  if (!Yt(e.startedAt)) return null;
  const s = Yt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + s };
}
function On(e, s = "sequence") {
  if (s !== "sequence")
    return bo(
      e,
      s === "duration" || s === "actual",
      s === "duration"
    );
  const t = [], n = [];
  for (const o of e) {
    const l = o.groups.flatMap((r) => r.cells);
    l.length !== 0 && (o.turn !== null && n.push({
      turn: o.turn,
      time: t.length
    }), t.push(
      ...l.map(
        (r, i) => ({
          start: t.length + i,
          end: t.length + i + 1,
          index: r.index,
          isError: r.isError === !0,
          kind: r.kind,
          label: r.text,
          lane: zn(r.kind)
        })
      )
    ));
  }
  return t.length === 0 ? null : {
    start: 0,
    end: t.length,
    spans: t,
    turnBoundaries: n
  };
}
function bo(e, s, t) {
  const n = e.flatMap((a) => {
    const h = a.groups.flatMap(
      (u) => u.cells.flatMap((x) => {
        const w = Eo(x);
        return w === null ? [] : [
          {
            ...w,
            index: x.index,
            isError: x.isError === !0,
            kind: x.kind,
            label: x.text,
            lane: zn(x.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: a.turn, rawSpans: h }];
  }), o = n.flatMap((a) => a.rawSpans);
  if (o.length === 0) return null;
  const l = /* @__PURE__ */ new Map();
  let r = 0, i = null;
  for (const a of [...o].sort(
    (h, u) => h.start - u.start || h.end - u.end
  ))
    t && i !== null && a.start > i && (r += a.start - i), l.set(a, r), i = i === null ? a.end : Math.max(i, a.end);
  const p = [], y = [];
  for (const a of n) {
    const h = a.rawSpans.map((u) => {
      const x = l.get(u) ?? 0;
      return {
        ...u,
        start: u.start - x,
        end: (s ? u.end : u.start) - x
      };
    });
    p.push(...h), a.turn !== null && y.push({
      turn: a.turn,
      time: Math.min(...h.map((u) => u.start))
    });
  }
  return {
    start: Math.min(...p.map((a) => a.start)),
    end: Math.max(...p.map((a) => a.end)),
    spans: p,
    turnBoundaries: y
  };
}
function So(e, s, t = "sequence") {
  const n = On(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((o) => o.start <= s.end && o.end >= s.start).map((o) => o.index)
  );
}
vo();
const Ze = window.QwenPaw.host, F = Ze.React, { useEffect: Ke, useMemo: Zt, useRef: Ve, useState: _e } = F, { Tooltip: xo } = Ze.antd, vt = 3, wo = 4, ko = 0.08, To = 0.025, _o = 32, Mo = 0.5;
function Co(e) {
  const s = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, o = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, l = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...s === void 0 ? {} : { durationMs: s },
    ...t === void 0 ? {} : { startedAt: t },
    ...o === void 0 || l === void 0 ? {} : { ttftMs: o, decodingMs: l }
  };
}
function Io(e) {
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
function zo(e, s) {
  const t = Io(e);
  if (s === void 0) return t;
  const n = s.durationMs === void 0 ? null : `Total ${yt(s.durationMs)}`, o = s.startedAt === void 0 ? null : s.durationMs === void 0 ? `Started ${Ne(s.startedAt)}` : `${Ne(s.startedAt)} → ${Ne(
    s.startedAt + s.durationMs
  )}`, l = s.ttftMs === void 0 || s.decodingMs === void 0 ? null : `TTFT ${yt(
    s.ttftMs
  )} · Decoding ${yt(s.decodingMs)}`, r = [n, l].filter((i) => i !== null).join(" · ");
  return [t, o, r].filter((i) => i !== null && i !== "").join(`
`);
}
function kt(e, s) {
  return e <= s ? { start: e, end: s } : { start: s, end: e };
}
function Et(e) {
  return Math.min(1, Math.max(0, e));
}
function Oo(e, s, t, n) {
  const o = Math.min(n - t, Math.max(0, s)), l = Math.min(
    Math.max(e - o / 2, t),
    n - o
  );
  return { start: l, end: l + o };
}
function qt(e, s, t, n, o) {
  const l = kt(
    Math.min(o, Math.max(n, e.start)),
    Math.min(o, Math.max(n, e.end))
  );
  return {
    start: (l.start - s) / t,
    end: (l.end - s) / t
  };
}
function An({
  label: e,
  placement: s,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ F.createElement(
    xo,
    {
      title: /* @__PURE__ */ F.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: s,
      mouseEnterDelay: Mo,
      ...n
    },
    t
  );
}
function en() {
  return /* @__PURE__ */ F.createElement("div", { className: ee.labels, "aria-hidden": "true" }, /* @__PURE__ */ F.createElement("span", null, "Input"), /* @__PURE__ */ F.createElement("span", null, "Model"), /* @__PURE__ */ F.createElement("span", null, "Tools"));
}
function tn({
  loading: e,
  onHover: s,
  onLoad: t
}) {
  return /* @__PURE__ */ F.createElement(
    An,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ F.createElement(
      "button",
      {
        type: "button",
        className: ee.earlierHistory,
        "data-earlier-history": !0,
        "data-loading": e || void 0,
        "aria-label": e ? "Loading earlier history" : "Load earlier history",
        "aria-disabled": e || t === void 0,
        onClick: t,
        onPointerEnter: (n) => {
          n.stopPropagation(), s();
        },
        onPointerMove: (n) => {
          n.stopPropagation();
        },
        onPointerDown: (n) => {
          n.stopPropagation();
        }
      },
      "…"
    )
  );
}
const Ao = F.memo(function({
  turns: s,
  mode: t,
  range: n,
  hasEarlierRecords: o = !1,
  onLoadEarlier: l,
  selectedIndex: r = null,
  searchMatchIndexes: i = null,
  onRangeChange: p,
  onRecordSelect: y,
  onRecordFocus: a
}) {
  const h = typeof Ze.useTheme == "function" ? Ze.useTheme() : void 0, u = Zt(
    () => On(s, t),
    [t, s]
  ), x = Zt(
    () => new Map(
      s.flatMap(
        (E) => E.groups.flatMap(
          (v) => v.cells.map(
            (T) => [T.index, Co(T)]
          )
        )
      )
    ),
    [s]
  ), w = Ve(null), _ = Ve(null), N = Ve(null), k = Ve(null), [d, m] = _e(null), [f, b] = _e(null), [M, S] = _e(!1), [R, z] = _e(!1), [C, j] = _e(null), [se, P] = _e(!1);
  Ke(() => {
    u !== null && n !== null && (n.end < u.start || n.start > u.end) && p(null);
  }, [u, p, n]), Ke(() => {
    u !== null && (P(!1), j(
      (E) => E !== null && (E.end < u.start || E.start > u.end) ? null : E
    ));
  }, [u]), Ke(() => {
    if (u === null || r === null) return;
    const E = u.spans.find(
      (v) => v.index === r
    );
    E !== void 0 && (P(!0), j((v) => {
      if (v === null || E.end > v.start && E.start < v.end)
        return v;
      const T = Math.max(1, v.end - v.start), I = E.end <= v.start ? E.start : E.end - T, B = Math.min(
        Math.max(I, u.start),
        Math.max(u.start, u.end - T)
      );
      return B === v.start ? v : { start: B, end: B + T };
    }));
  }, [u, r]);
  const X = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), me = Math.min(
    X,
    Math.max(1, ((C == null ? void 0 : C.end) ?? 0) - ((C == null ? void 0 : C.start) ?? 0))
  ), Fe = u === null || C === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(C.start, u.start),
    u.end - me
  ), K = C === null ? X : me, W = C === null ? (u == null ? void 0 : u.start) ?? 0 : Fe, Ce = o && u !== null && W === u.start, Ie = l === void 0 || M ? void 0 : () => {
    S(!0), l().finally(() => {
      S(!1);
    });
  }, ye = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(W - u.start) / K * 100}%`,
    "--trajectory-domain-width": `${X / K * 100}%`
  }, G = u === null || n === null ? null : qt(
    n,
    W,
    K,
    u.start,
    u.end
  ), ce = (u === null || d === null ? null : qt(
    d,
    W,
    K,
    u.start,
    u.end
  )) ?? G, Oe = d ?? n;
  if (Ke(() => {
    const E = N.current;
    if (E === null) return;
    const v = (T) => {
      T.preventDefault();
      const I = k.current;
      if (I === null || u === null) return;
      P(!1);
      const B = I.getBoundingClientRect(), V = Et(
        (T.clientX - B.left) / Math.max(1, B.width)
      ), Z = Math.min(
        X,
        Math.max(
          Math.min(
            t === "sequence" ? wo : 20,
            X
          ),
          K * Math.exp(T.deltaY * 15e-4)
        )
      );
      if (Z >= X * 0.999) {
        j(null);
        return;
      }
      const J = W + V * K, q = Math.min(
        Math.max(J - V * Z, u.start),
        u.end - Z
      );
      j({ start: q, end: q + Z });
    };
    return E.addEventListener("wheel", v, { passive: !1 }), () => {
      E.removeEventListener("wheel", v);
    };
  }, [K, W, X, t, u]), u === null)
    return /* @__PURE__ */ F.createElement(
      "section",
      {
        ref: N,
        className: ee.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ F.createElement("div", { className: ee.plot }, /* @__PURE__ */ F.createElement(en, null), /* @__PURE__ */ F.createElement("div", { className: ee.track }, /* @__PURE__ */ F.createElement("span", { className: ee.empty }, "No timing data"), o && /* @__PURE__ */ F.createElement(
        tn,
        {
          loading: M,
          onHover: () => {
            b(null);
          },
          onLoad: Ie
        }
      )))
    );
  const Ae = Math.min(
    K,
    X / u.spans.length
  ), be = (E) => {
    const v = E.currentTarget.getBoundingClientRect();
    return Et((E.clientX - v.left) / Math.max(1, v.width));
  }, Se = (E) => {
    var B;
    const v = E.target instanceof HTMLElement ? E.target : null, T = (B = v == null ? void 0 : v.closest("[data-timeline-record-index]")) == null ? void 0 : B.dataset.timelineRecordIndex;
    if (T === void 0) return null;
    const I = Number(T);
    return Number.isFinite(I) ? I : null;
  }, Be = (E) => {
    p(E);
  }, He = (E) => {
    if (E.button === 2) {
      _.current = {
        anchorClientX: E.clientX,
        anchorStart: W,
        moved: !1,
        pannable: C !== null,
        pointerId: E.pointerId
      }, C !== null && P(!1), z(!0), typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId);
      return;
    }
    if (E.button !== 0) return;
    const v = be(E), T = W + v * K, I = Se(E);
    b({ fraction: v, recordIndex: I }), w.current = {
      pointerId: E.pointerId,
      anchorTime: T,
      anchorClientX: E.clientX,
      recordIndex: I
    }, typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId), m({ start: T, end: T });
  }, nt = (E) => {
    const v = E.currentTarget.getBoundingClientRect(), T = be(E);
    b({ fraction: T, recordIndex: Se(E) });
    const I = _.current;
    if (I !== null && I.pointerId === E.pointerId) {
      if (Math.abs(E.clientX - I.anchorClientX) >= vt && (I.moved = !0), !I.pannable) return;
      const J = (E.clientX - I.anchorClientX) / Math.max(1, v.width), q = Math.min(
        Math.max(I.anchorStart - J * K, u.start),
        u.end - K
      );
      j({ start: q, end: q + K });
      return;
    }
    const B = w.current;
    if (B === null || B.pointerId !== E.pointerId) return;
    let V = W;
    if (C !== null) {
      const J = E.clientX - v.left, q = Math.min(
        _o,
        Math.max(1, v.width * ko)
      ), Q = J < q ? -1 : J > v.width - q ? 1 : 0;
      if (Q !== 0) {
        const xe = Q < 0 ? q - J : J - (v.width - q), ue = Et(xe / q), le = W + Q * K * To * Math.max(0.2, ue);
        V = Math.min(
          Math.max(le, u.start),
          u.end - K
        ), V !== W && (P(!1), j({
          start: V,
          end: V + K
        }));
      }
    }
    const Z = V + T * K;
    m(kt(B.anchorTime, Z));
  }, st = (E) => {
    const v = _.current;
    if (v !== null && v.pointerId === E.pointerId) {
      const Q = v.moved || Math.abs(E.clientX - v.anchorClientX) >= vt;
      _.current = null, z(!1), Q || p(null);
      return;
    }
    const T = w.current;
    if (T === null || T.pointerId !== E.pointerId) return;
    const I = be(E), B = W + I * K, V = kt(T.anchorTime, B);
    b({ fraction: I, recordIndex: Se(E) }), w.current = null, m(null);
    const Z = Math.abs(E.clientX - T.anchorClientX) < vt, J = Z && T.recordIndex !== null ? u.spans.find((Q) => Q.index === T.recordIndex) : void 0;
    if (J !== void 0) {
      p(null), y == null || y(J.index);
      return;
    }
    const q = V.end - V.start < Ae ? Oo(
      Z ? V.start : (V.start + V.end) / 2,
      Ae,
      u.start,
      u.end
    ) : V;
    if (Be(q), Z) {
      const Q = V.start, xe = u.spans.reduce((ue, le) => {
        const $e = Q < ue.start ? ue.start - Q : Q > ue.end ? Q - ue.end : 0;
        return (Q < le.start ? le.start - Q : Q > le.end ? Q - le.end : 0) < $e ? le : ue;
      });
      a == null || a(xe.index);
    }
  }, ot = (E) => {
    E.key !== "Escape" || n === null || (E.preventDefault(), p(null));
  }, Ue = () => {
    w.current = null, _.current = null, m(null), b(null), z(!1);
  };
  return /* @__PURE__ */ F.createElement(
    "section",
    {
      ref: N,
      className: ee.root,
      "data-theme": h || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ F.createElement("div", { className: ee.plot }, /* @__PURE__ */ F.createElement(en, null), /* @__PURE__ */ F.createElement(
      "div",
      {
        ref: k,
        className: ee.track,
        "data-panning": R || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: ot,
        onPointerDown: He,
        onPointerMove: nt,
        onPointerUp: st,
        onPointerCancel: Ue,
        onPointerLeave: () => {
          w.current === null && _.current === null && b(null);
        },
        onDoubleClick: (E) => {
          E.preventDefault(), p(null);
        },
        onContextMenu: (E) => {
          E.preventDefault();
        }
      },
      Ce && /* @__PURE__ */ F.createElement(
        tn,
        {
          loading: M,
          onHover: () => {
            b(null);
          },
          onLoad: Ie
        }
      ),
      f !== null && f.recordIndex === null && d === null && /* @__PURE__ */ F.createElement(
        "div",
        {
          className: ee.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${f.fraction * 100}%`
          }
        }
      ),
      ce !== null && /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement(
        "div",
        {
          className: ee.selection,
          "data-dragging": d === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ce.start * 100}%`,
            "--trajectory-selection-width": `${(ce.end - ce.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ F.createElement(
        "div",
        {
          className: ee.selectionEdges,
          "data-dragging": d === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ce.start * 100}%`,
            "--trajectory-selection-width": `${(ce.end - ce.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ F.createElement(
        "div",
        {
          className: ee.turnBoundaries,
          "data-animate-viewport": se || void 0,
          "aria-hidden": "true",
          style: ye
        },
        u.turnBoundaries.filter(
          (E) => E.time > u.start && E.time >= W && E.time <= W + K
        ).map((E) => /* @__PURE__ */ F.createElement(
          "span",
          {
            className: ee.turnBoundary,
            "data-turn": E.turn,
            key: E.turn,
            style: {
              "--trajectory-turn-left": `${(E.time - u.start) / X * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ F.createElement(
        "div",
        {
          className: ee.lanes,
          "data-animate-viewport": se || void 0,
          "data-timeline-domain": !0,
          style: ye
        },
        u.spans.filter(
          (E) => E.index === r || E.end >= W && E.start <= W + K
        ).map((E) => {
          const v = (E.start - u.start) / X, I = (E.end - E.start) / X * 100, B = x.get(E.index), V = B == null ? void 0 : B.ttftMs, Z = B == null ? void 0 : B.decodingMs, J = V === void 0 || Z === void 0 || V + Z <= 0 ? null : V / (V + Z);
          return /* @__PURE__ */ F.createElement(
            An,
            {
              key: E.index,
              label: zo(E.kind, B),
              placement: "bottom"
            },
            /* @__PURE__ */ F.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: ee.span,
                "data-timeline-span": E.kind,
                "data-timeline-record-index": E.index,
                "data-assistant-timing": J === null ? void 0 : "true",
                "data-error": E.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": E.index === r || void 0,
                "data-hovered": (f == null ? void 0 : f.recordIndex) === E.index || void 0,
                "data-search-match": i === null ? void 0 : i.has(E.index) ? "true" : "false",
                "data-selected": Oe === null ? void 0 : E.start <= Oe.end && E.end >= Oe.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${v * 100}%`,
                  "--trajectory-span-width": `${I}%`,
                  "--trajectory-span-gap": `min(${I * 0.08}%, 1px)`,
                  "--trajectory-span-lane": E.lane,
                  ...J === null ? {} : {
                    "--trajectory-assistant-ttft": `${J * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), Ct = window.QwenPaw.host, ie = Ct.React, { Button: $o, Input: Ro, Segmented: Lo, Tooltip: nn } = Ct.antd, { MenuFoldOutlined: Do, MenuUnfoldOutlined: jo, ReloadOutlined: No, SearchOutlined: Po } = Ct.antdIcons;
function Fo({
  mode: e,
  onModeChange: s,
  search: t,
  onSearchChange: n,
  onRefresh: o,
  modeOptions: l,
  allCollapsed: r,
  hasRequests: i,
  onToggleCollapseAll: p,
  callsCollapsed: y,
  onToggleCallsCollapsed: a
}) {
  const h = te();
  return /* @__PURE__ */ ie.createElement(
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
    /* @__PURE__ */ ie.createElement(nn, { title: g(h, "projectionHint") }, /* @__PURE__ */ ie.createElement(
      Lo,
      {
        size: "small",
        value: e,
        options: l,
        onChange: (u) => s(u)
      }
    )),
    /* @__PURE__ */ ie.createElement(
      Ro,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ie.createElement(Po, null),
        placeholder: g(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (u) => n(u.target.value)
      }
    ),
    i && /* @__PURE__ */ ie.createElement(
      nn,
      {
        title: r ? g(h, "expandAll") : g(h, "collapseAll")
      },
      /* @__PURE__ */ ie.createElement(
        $o,
        {
          size: "small",
          type: "text",
          icon: r ? /* @__PURE__ */ ie.createElement(jo, null) : /* @__PURE__ */ ie.createElement(Do, null),
          onClick: p
        }
      )
    ),
    /* @__PURE__ */ ie.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ie.createElement(
      "a",
      {
        onClick: o,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ie.createElement(No, null),
      " ",
      g(h, "refresh")
    ))
  );
}
const tt = window.QwenPaw.host, $ = tt.React, { useCallback: sn, useEffect: bt, useMemo: de, useRef: Bo, useState: ne } = $, {
  Button: Xe,
  Empty: on,
  Popconfirm: Ho,
  Popover: Uo,
  Space: Wo,
  Spin: $n,
  Switch: Ko,
  Tag: Vo,
  Tooltip: Xo,
  message: je
} = tt.antd, { DeleteOutlined: Go, DownloadOutlined: Jo, SettingOutlined: ln } = tt.antdIcons, { Text: ge } = tt.antd.Typography;
function rn({
  config: e,
  onChange: s,
  children: t
}) {
  const n = te(), o = (r, i, p) => /* @__PURE__ */ $.createElement(
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
    /* @__PURE__ */ $.createElement(ge, { style: { fontSize: 13 } }, r),
    /* @__PURE__ */ $.createElement(
      Ko,
      {
        size: "small",
        checked: !!i,
        onChange: (y) => s({ [p]: y })
      }
    )
  ), l = /* @__PURE__ */ $.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ $.createElement(ge, { strong: !0, style: { fontSize: 13 } }, g(n, "settings")), /* @__PURE__ */ $.createElement("div", { style: { marginTop: 8 } }, e ? [
    o(g(n, "enabled"), e.enabled, "enabled"),
    o(g(n, "captureLlm"), e.capture_llm, "capture_llm"),
    o(
      g(n, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    o(
      g(n, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ $.createElement($n, { size: "small" })));
  return /* @__PURE__ */ $.createElement(Uo, { content: l, trigger: "click", placement: "bottomRight" }, t);
}
function Qo({
  sessionId: e,
  summary: s,
  locale: t,
  onJumpSession: n,
  onRefreshSessions: o
}) {
  const [l, r] = ne(null), [i, p] = ne(!1), [y, a] = ne(!1), [h, u] = ne(""), [x, w] = ne("sequence"), [_, N] = ne(null), [k, d] = ne(null), [m, f] = ne(null), [b, M] = ne(
    /* @__PURE__ */ new Set()
  ), [S, R] = ne(!1), [z, C] = ne(null), [j, se] = ne(null), [P, X] = ne(null), [me, Fe] = ne(null), K = Bo(null);
  K.current = e, bt(() => {
    Bn().then(C).catch(() => C(null));
  }, []);
  const W = sn(async (v, T) => {
    T || p(!0);
    try {
      const I = await Fn(v, {
        beforeSeq: T,
        limit: 200
      });
      Fe(null), r((B) => T && B ? {
        ...I,
        events: [...I.events, ...B.events]
      } : I);
    } catch (I) {
      Fe({
        message: String(I.message),
        status: I instanceof vn ? I.status : null
      });
    } finally {
      T || p(!1);
    }
  }, []), Ce = sn(async (v) => {
    try {
      const T = await Pn(v);
      X(T), se({
        sessionId: v,
        inputTokens: T.input_tokens,
        outputTokens: T.output_tokens,
        totalTokens: T.total_tokens,
        reasoningTokens: Number(T.reasoning_tokens ?? 0)
      });
    } catch {
      X(null), se(null);
    }
  }, []);
  bt(() => {
    e ? (N(null), d(null), f(null), M(/* @__PURE__ */ new Set()), u(""), W(e), Ce(e)) : (r(null), X(null), se(null));
  }, [e, W, Ce]);
  const Ie = de(
    () => l ? fo(l.events) : [],
    [l]
  ), { initial: ye, turns: G } = de(
    () => go(Ie),
    [Ie]
  ), ze = de(
    () => ye ? [ye, ...Jt(G)] : Jt(G),
    [ye, G]
  ), ce = de(
    () => G.some((v) => v.status === "running"),
    [G]
  );
  bt(() => {
    if (!e || !ce) return;
    const v = setInterval(() => {
      document.visibilityState === "visible" && K.current && W(K.current);
    }, 5e3);
    return () => clearInterval(v);
  }, [e, ce, W]);
  const Oe = de(
    () => _ === null ? null : So(G, _, x),
    [_, G, x]
  ), Ae = de(() => {
    const v = h.trim().toLowerCase();
    return v ? new Set(
      ze.filter(
        (T) => [
          T.text,
          T.outputText,
          T.thinkingText,
          T.toolName,
          T.toolInput,
          T.toolOutput,
          T.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(v)
      ).map((T) => T.index)
    ) : null;
  }, [h, ze]), be = de(
    () => k === null ? null : ze.find((v) => v.index === k) ?? null,
    [ze, k]
  ), Se = de(() => {
    var At, $t;
    if (m === null) return null;
    const v = G.find((L) => L.turn === m);
    if (!v) return null;
    const T = ((At = v.groups[0]) == null ? void 0 : At.cells) ?? [], I = T.filter((L) => L.kind === "message"), B = T.filter((L) => L.kind === "tool"), V = [
      ...new Set(
        I.map((L) => L.model).filter((L) => !!L)
      )
    ], Z = [
      ...new Set(
        I.map((L) => L.provider).filter((L) => !!L)
      )
    ];
    let J = 0, q = 0, Q = 0, xe = 0, ue = 0, le = null, $e = 0;
    const lt = [];
    for (const L of T)
      L.usage && (J += L.usage.input_tokens ?? 0, q += L.usage.output_tokens ?? 0, Q += L.usage.cache_input_tokens ?? 0, xe += L.usage.cache_creation_input_tokens ?? 0, ue += L.usage.reasoning_tokens ?? 0), L.timing && (le = le === null ? L.timing.ttft_ms : Math.min(le, L.timing.ttft_ms), $e = ($e ?? 0) + L.timing.decode_ms), L.isError && lt.push(L.toolError ?? L.text ?? "error");
    const we = T.find((L) => L.kind === "user"), Rn = ($t = [...I].reverse().find((L) => L.options)) == null ? void 0 : $t.options, rt = [...I].reverse().find((L) => L.outputText);
    let It;
    const zt = I.filter((L) => L.messagesMeta);
    if (zt.length > 0) {
      const L = {};
      let ke = 0, at = 0;
      for (const Dn of zt) {
        const ct = Dn.messagesMeta;
        for (const [Rt, jn] of Object.entries(ct.charsByRole))
          L[Rt] = (L[Rt] ?? 0) + jn;
        ke += ct.totalChars, at = Math.max(at, ct.maxToolChars);
      }
      It = { charsByRole: L, totalChars: ke, maxToolChars: at };
    }
    const it = G.findIndex((L) => L.turn === m), Ot = it > 0 ? G[it - 1] : null;
    let Re = null;
    if (Ot) {
      Re = 0;
      for (const L of Ot.groups)
        for (const ke of L.cells)
          ke.kind === "message" && ke.usage && (Re += ke.usage.input_tokens ?? 0);
    }
    const Ln = Re === null && it !== 0 ? void 0 : {
      prevInputTokens: Re,
      deltaTokens: J - (Re ?? 0)
    };
    return {
      turn: m,
      status: v.status,
      durationMs: v.durationMs,
      startedAt: (we == null ? void 0 : we.startedAt) ?? null,
      query: (we == null ? void 0 : we.text) ?? "",
      llmCalls: I.length,
      toolCalls: B.length,
      models: V,
      providers: Z,
      inputTokens: J,
      outputTokens: q,
      cacheReadTokens: Q,
      cacheWriteTokens: xe,
      reasoningTokens: ue,
      inputComposition: It,
      growth: Ln,
      resultIndex: rt == null ? void 0 : rt.index,
      ttftMs: le,
      decodeMs: $e,
      errors: lt,
      options: Rn,
      sessionTotals: j && j.sessionId === e ? {
        inputTokens: j.inputTokens,
        outputTokens: j.outputTokens,
        totalTokens: j.totalTokens,
        reasoningTokens: j.reasoningTokens
      } : void 0
    };
  }, [m, G, j, e]), Be = !!(l && l.events.length > 0 && l.events[0].seq > 1), He = async (v) => {
    try {
      C(await Hn(v));
    } catch (T) {
      je.error(String(T.message));
    }
  }, nt = de(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), st = de(() => {
    if (!P) return null;
    const v = [
      `${P.runs} ${g(t, "statRounds")} · ${P.llm_calls} ${g(t, "statSteps")}`,
      `LLM ${oe(P.llm_ms_total / 1e3)} · ${g(
        t,
        "toolCalls"
      )} ${oe(P.tool_ms_total / 1e3)}`,
      `${g(t, "statTtftAvg")} ${P.ttft_ms_avg === null ? "-" : oe(P.ttft_ms_avg / 1e3)} · ${_t(
        P.output_tokens,
        P.decode_ms_total / 1e3
      )}`
    ];
    if (P.cache_read_tokens > 0 || P.cache_write_tokens > 0) {
      const T = P.cache_read_tokens + P.input_tokens, I = T > 0 ? Math.round(P.cache_read_tokens / T * 100) : 0;
      v.push(`${g(t, "statCacheHit")} ${I}%`);
    }
    return v.push(
      `${g(t, "statInput")} ${U(
        P.input_tokens
      )} tok · ${g(t, "statOutput")} ${U(
        P.output_tokens
      )} tok`
    ), s && v.push(xt(s.size_bytes)), v.join(" | ");
  }, [P, s, t]), ot = () => {
    d(null), f(null);
  }, Ue = (me == null ? void 0 : me.status) === 404, E = be !== null || Se !== null;
  return /* @__PURE__ */ $.createElement(
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
    /* @__PURE__ */ $.createElement(
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
      e ? /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ $.createElement(
          ge,
          {
            strong: !0,
            ellipsis: {
              tooltip: (s == null ? void 0 : s.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (s == null ? void 0 : s.title) || (s == null ? void 0 : s.agent_id) || Sn(e)
        ),
        /* @__PURE__ */ $.createElement(
          Vo,
          {
            color: wn[(s == null ? void 0 : s.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          kn((s == null ? void 0 : s.status) ?? "unknown")
        ),
        s != null && s.channel ? /* @__PURE__ */ $.createElement(ge, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, s.channel) : null,
        /* @__PURE__ */ $.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ $.createElement(Wo, null, /* @__PURE__ */ $.createElement(rn, { config: z, onChange: He }, /* @__PURE__ */ $.createElement(Xe, { size: "small", icon: /* @__PURE__ */ $.createElement(ln, null) })), /* @__PURE__ */ $.createElement(Xo, { title: g(t, "export") }, /* @__PURE__ */ $.createElement(
          Xe,
          {
            size: "small",
            icon: /* @__PURE__ */ $.createElement(Jo, null),
            onClick: () => {
              Un(e).then(() => je.success(g(t, "exported"))).catch(
                (v) => je.error(String(v.message))
              );
            }
          },
          g(t, "export")
        )), /* @__PURE__ */ $.createElement(
          Ho,
          {
            title: g(t, "deleteConfirm"),
            onConfirm: () => {
              Wn(e).then(() => {
                je.success(g(t, "deleted")), o == null || o();
              }).catch(
                (v) => je.error(String(v.message))
              );
            }
          },
          /* @__PURE__ */ $.createElement(Xe, { size: "small", danger: !0, icon: /* @__PURE__ */ $.createElement(Go, null) }, g(t, "delete"))
        )))
      ), /* @__PURE__ */ $.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ $.createElement(
          ge,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          st ?? // Transient line while the stats endpoint responds.
          (s ? `${s.runs} ${g(t, "statRounds")} · ${s.llm_calls} ${g(t, "statSteps")} · ${xn(
            s.total_tokens
          )} ${g(t, "tokens")} · ${xt(
            s.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ $.createElement(
          ge,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                g(t, "copySessionId"),
                g(t, "copiedSessionId")
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
      )) : /* @__PURE__ */ $.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ $.createElement(ge, { type: "secondary", style: { fontSize: 13 } }, g(t, "selectSession")),
        /* @__PURE__ */ $.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ $.createElement(rn, { config: z, onChange: He }, /* @__PURE__ */ $.createElement(Xe, { size: "small", icon: /* @__PURE__ */ $.createElement(ln, null) })))
      )
    ),
    me && !Ue && /* @__PURE__ */ $.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ $.createElement(ge, { type: "danger", style: { fontSize: 12 } }, `${g(t, "loadFailed")}: ${me.message}`)),
    /* @__PURE__ */ $.createElement(
      Fo,
      {
        mode: x,
        onModeChange: w,
        search: h,
        onSearchChange: u,
        onRefresh: () => {
          e && (W(e), Ce(e)), o == null || o();
        },
        modeOptions: nt,
        allCollapsed: G.length > 0 && G.every((v) => b.has(v.turn ?? -1)),
        hasRequests: G.some((v) => v.turn !== null),
        callsCollapsed: S,
        onToggleCallsCollapsed: () => R((v) => !v),
        onToggleCollapseAll: () => {
          M((v) => G.some(
            (I) => I.turn !== null && !v.has(I.turn)
          ) ? new Set(
            G.map((I) => I.turn).filter((I) => I !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ $.createElement(
      Ao,
      {
        turns: G,
        mode: x,
        range: _,
        hasEarlierRecords: Be,
        onLoadEarlier: async () => {
          var v;
          return !l || l.events.length === 0 ? !1 : (await W(e, (v = l.events[0]) == null ? void 0 : v.seq), !0);
        },
        selectedIndex: k,
        searchMatchIndexes: Ae,
        onRangeChange: N,
        onRecordSelect: d,
        onRecordFocus: d
      }
    ),
    i && !l ? /* @__PURE__ */ $.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ $.createElement($n, null)) : l ? /* @__PURE__ */ $.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ $.createElement(
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
      /* @__PURE__ */ $.createElement(
        ho,
        {
          turns: G,
          selectedIndex: k,
          selectedTurn: m,
          collapsedTurns: b,
          focusIndexes: Oe,
          searchMatchIndexes: Ae,
          onSelectedIndexChange: (v) => {
            if (v === k) {
              d(null);
              return;
            }
            d(v), f(null);
          },
          onSelectedTurnChange: (v) => {
            f(v), d(null);
          },
          callsCollapsed: S,
          onToggleTurn: (v) => {
            M((T) => {
              const I = new Set(T);
              return I.has(v) ? I.delete(v) : I.add(v), I;
            });
          },
          hasOlderRecords: Be,
          loadingOlder: y,
          onLoadOlder: () => {
            var v;
            !l || l.events.length === 0 || (a(!0), W(
              e,
              (v = l.events[0]) == null ? void 0 : v.seq
            ).finally(() => a(!1)));
          },
          emptyText: g(t, "noSessions"),
          initialRecord: ye
        }
      )
    ), E ? /* @__PURE__ */ $.createElement(
      Ss,
      {
        record: be,
        request: Se,
        onJumpSession: n,
        onSelectTurn: (v) => {
          f(v), d(null);
        },
        onClose: ot
      }
    ) : null) : /* @__PURE__ */ $.createElement(
      on,
      {
        image: on.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: Ue && e ? g(t, "noTraceForSession") : g(t, "selectSession")
      }
    )
  );
}
const Me = window.QwenPaw.host, D = Me.React, { useCallback: an, useEffect: St, useMemo: Ge, useState: fe } = D, { Button: cn, Empty: un, Input: Yo, Spin: Zo, Tag: dn, Tooltip: hn } = Me.antd, {
  CaretRightOutlined: qo,
  MenuFoldOutlined: el,
  MenuUnfoldOutlined: tl,
  SearchOutlined: nl
} = Me.antdIcons, { Text: Pe } = Me.antd.Typography;
function sl({
  groups: e,
  collapsedAgents: s,
  onToggleAgent: t,
  searching: n,
  selected: o,
  onSelect: l,
  locale: r
}) {
  const i = e.length > 1;
  return /* @__PURE__ */ D.createElement(D.Fragment, null, e.map(([p, y]) => {
    const a = i && !n && s.has(p);
    return /* @__PURE__ */ D.createElement("div", { key: p }, i && /* @__PURE__ */ D.createElement(
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
      /* @__PURE__ */ D.createElement(
        qo,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: a ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ D.createElement(Pe, { strong: !0, style: { fontSize: 12 } }, p),
      /* @__PURE__ */ D.createElement(Pe, { type: "secondary", style: { fontSize: 11 } }, y.length)
    ), !a && y.map((h) => {
      const u = h.session_id === o;
      return /* @__PURE__ */ D.createElement(
        "div",
        {
          key: h.session_id,
          onClick: () => l(h.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: u ? "rgba(22,119,255,0.10)" : "transparent",
            border: u ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ D.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ D.createElement(
            Pe,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || Sn(h.session_id)
          ),
          i ? null : h.agent_id ? /* @__PURE__ */ D.createElement(
            dn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          /* @__PURE__ */ D.createElement(
            dn,
            {
              color: wn[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            kn(h.status)
          )
        ),
        /* @__PURE__ */ D.createElement(
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
          /* @__PURE__ */ D.createElement("span", null, h.channel || "-"),
          /* @__PURE__ */ D.createElement("span", null, h.runs, " ", g(r, "runs")),
          /* @__PURE__ */ D.createElement("span", null, xn(h.total_tokens), " tok"),
          /* @__PURE__ */ D.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: os(h.last_event_t)
            },
            ls(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function ol() {
  const e = typeof Me.useLocale == "function" ? Me.useLocale() : void 0, s = Ge(
    () => Tt(e ?? te()),
    [e]
  ), [t, n] = fe(null), [o, l] = fe(!1), [r, i] = fe(
    /* @__PURE__ */ new Set()
  ), [p, y] = fe(!1), [a, h] = fe(!1), [u, x] = fe(null), [w, _] = fe(""), [N, k] = fe(null), d = an(async () => {
    try {
      const S = await Lt({ limit: 100, offset: 0 });
      n(S.sessions), l(S.has_more), k(null);
    } catch (S) {
      k(String(S.message));
    }
  }, []), m = an(async () => {
    h(!0);
    try {
      const S = await Lt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((R) => {
        const z = R ?? [];
        return [
          ...z,
          ...S.sessions.filter(
            (C) => !z.some((j) => j.session_id === C.session_id)
          )
        ];
      }), l(S.has_more);
    } catch (S) {
      k(String(S.message));
    } finally {
      h(!1);
    }
  }, [t]);
  St(() => {
    d();
    try {
      const S = new URLSearchParams(window.location.search).get("session");
      S && En(S).then((R) => {
        x(R ?? S);
      });
    } catch {
    }
  }, [d]), St(() => {
    try {
      const S = new URL(window.location.href);
      u ? S.searchParams.set("session", u) : S.searchParams.delete("session"), window.history.replaceState(window.history.state, "", S);
    } catch {
    }
  }, [u]), St(() => {
    const S = setInterval(() => {
      document.visibilityState === "visible" && d();
    }, 15e3);
    return () => clearInterval(S);
  }, [d]);
  const f = Ge(
    () => (t == null ? void 0 : t.find((S) => S.session_id === u)) ?? null,
    [t, u]
  ), b = Ge(() => {
    if (!t) return [];
    const S = w.trim().toLowerCase();
    return S ? t.filter(
      (R) => [R.session_id, R.title ?? "", R.agent_id, R.channel].join(" ").toLowerCase().includes(S)
    ) : t;
  }, [t, w]), M = Ge(() => {
    const S = /* @__PURE__ */ new Map();
    for (const R of b) {
      const z = R.agent_id || "(unknown)", C = S.get(z);
      C ? C.push(R) : S.set(z, [R]);
    }
    return [...S.entries()];
  }, [b]);
  return /* @__PURE__ */ D.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, p ? /* @__PURE__ */ D.createElement(
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
    /* @__PURE__ */ D.createElement(hn, { title: g(s, "expandSidebar"), placement: "right" }, /* @__PURE__ */ D.createElement(
      cn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ D.createElement(tl, null),
        onClick: () => y(!1)
      }
    ))
  ) : /* @__PURE__ */ D.createElement(
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
    /* @__PURE__ */ D.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ D.createElement(
        Yo,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ D.createElement(nl, null),
          placeholder: g(s, "searchPlaceholder"),
          value: w,
          style: { flex: 1, minWidth: 0 },
          onChange: (S) => _(S.target.value)
        }
      ),
      /* @__PURE__ */ D.createElement(hn, { title: g(s, "collapseSidebar") }, /* @__PURE__ */ D.createElement(
        cn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ D.createElement(el, null),
          onClick: () => y(!0)
        }
      ))
    ),
    N ? /* @__PURE__ */ D.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ D.createElement(Pe, { type: "danger", style: { fontSize: 12 } }, `${g(s, "loadFailed")}: ${N}`)) : null,
    /* @__PURE__ */ D.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ D.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ D.createElement(Zo, null)) : b.length === 0 ? /* @__PURE__ */ D.createElement(
      un,
      {
        image: un.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ D.createElement("span", { style: { fontSize: 12 } }, g(s, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ D.createElement(
        Pe,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        g(s, "noSessionsHint")
      )
    ) : /* @__PURE__ */ D.createElement(
      sl,
      {
        groups: M,
        collapsedAgents: r,
        onToggleAgent: (S) => {
          i((R) => {
            const z = new Set(R);
            return z.has(S) ? z.delete(S) : z.add(S), z;
          });
        },
        searching: !!w.trim(),
        selected: u,
        onSelect: x,
        locale: s
      }
    ), t !== null && o && !w.trim() && /* @__PURE__ */ D.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ D.createElement(
      "a",
      {
        onClick: () => void m(),
        style: { fontSize: 12 }
      },
      a ? "…" : `⋯ ${g(s, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ D.createElement(
    Qo,
    {
      sessionId: u,
      summary: f,
      locale: s,
      onJumpSession: x,
      onRefreshSessions: () => void d()
    }
  ));
}
const ll = window.QwenPaw.host.React;
var mn, pn;
(pn = (mn = window.QwenPaw).registerRoutes) == null || pn.call(mn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: ol,
    label: g(te(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var fn, Je, gn;
(gn = (Je = (fn = window.QwenPaw.chat) == null ? void 0 : fn.rightHeader) == null ? void 0 : Je.add) == null || gn.call(
  Je,
  "agent-trace",
  ll.createElement(Qn),
  { id: "agent-trace-jump" }
);

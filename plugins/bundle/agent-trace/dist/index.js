const Pn = {
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
    beforeTruncation: "截断前"
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
    beforeTruncation: "before truncation"
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
  return Pn[e][s];
}
const Le = window.QwenPaw.host;
async function Nn(e) {
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
  const f = [];
  let y = 0, a = 0;
  for (; y < o && a < l; )
    t[y] === n[a] ? (f.push({ kind: "same", text: t[y] }), y += 1, a += 1) : r[i(y + 1, a)] >= r[i(y, a + 1)] ? (f.push({ kind: "del", text: t[y] }), y += 1) : (f.push({ kind: "add", text: n[a] }), a += 1);
  for (; y < o; )
    f.push({ kind: "del", text: t[y] }), y += 1;
  for (; a < l; )
    f.push({ kind: "add", text: n[a] }), a += 1;
  return f;
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
function Sn(e, s) {
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
function V(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function _t(e, s) {
  return e === void 0 || !Number.isFinite(e) || s === null || s === void 0 || s <= 0 ? "-" : `${(e / s).toFixed(1)} tok/s`;
}
function Pe(e) {
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
function bn(e) {
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
const qe = window.QwenPaw.host, c = qe.React, { useEffect: rs, useRef: is, useState: Tn } = c, { Button: _n, Collapse: as, Empty: Pt, Tabs: Mt } = qe.antd, { Text: U } = qe.antd.Typography, { CopyOutlined: cs, CloseOutlined: us } = qe.antdIcons, ds = 320, hs = 720, We = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, ms = 2e4;
function fs(e) {
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
    s ? fs(o) : o
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
    /* @__PURE__ */ c.createElement(U, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ c.createElement(
      U,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      s
    )
  );
}
function Nt({
  input: e,
  output: s,
  cacheRead: t,
  cacheWrite: n,
  reasoning: o
}) {
  const l = Math.max(0, e - t - n), r = Math.max(0, s - o);
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "Input", value: `${V(e)} tok` }), t ? /* @__PURE__ */ c.createElement(A, { label: "Cached", value: `${V(t)} tok` }) : null, n ? /* @__PURE__ */ c.createElement(
    A,
    {
      label: "Cache created",
      value: `${V(n)} tok`
    }
  ) : null, t || n ? /* @__PURE__ */ c.createElement(A, { label: "Other", value: `${V(l)} tok` }) : null, /* @__PURE__ */ c.createElement(A, { label: "Output", value: `${V(s)} tok` }), o ? /* @__PURE__ */ c.createElement(A, { label: "Reasoning", value: `${V(o)} tok` }) : null, o ? /* @__PURE__ */ c.createElement(A, { label: "Content", value: `${V(r)} tok` }) : null);
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
const Ft = ["system", "user", "assistant", "tool"], ps = {
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
    const f = t.charsByRole[i], y = ps[i] ?? "roleOther";
    o.push(
      /* @__PURE__ */ c.createElement(
        A,
        {
          key: i,
          label: g(s, y),
          value: `${V(f)} ${g(
            s,
            "charUnit"
          )} · ~${V(ns(f, n))} tok ${g(
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
        value: `${V(t.maxToolChars)} ${g(
          s,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(U, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, g(s, "inputComposition")), o, /* @__PURE__ */ c.createElement(
    U,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    g(s, "estimateNote")
  ), e.growth ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    A,
    {
      label: g(s, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? g(s, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${V(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ c.createElement(
    A,
    {
      label: g(s, "cacheAbsorbed"),
      value: `${V(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function ys({
  request: e,
  onJumpRecord: s
}) {
  const t = te(), [n, o] = c.useState("summary"), l = /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "Started", value: Pe(e.startedAt) }), /* @__PURE__ */ c.createElement(
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
    Nt,
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
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(U, { strong: !0, style: { fontSize: 12 } }, g(t, "thisRequest")), r, /* @__PURE__ */ c.createElement(gs, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
        U,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        g(t, "sessionTotal")
      ), /* @__PURE__ */ c.createElement(
        Nt,
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
      onChange: (f) => o(f),
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
  return e === void 0 ? /* @__PURE__ */ c.createElement(U, { type: "secondary", style: { fontSize: 12 } }, g(l, "noPrevPrompt")) : /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ c.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ c.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ c.createElement(
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
      const f = r;
      return /* @__PURE__ */ c.createElement(
        "div",
        {
          key: i,
          style: {
            padding: "0 8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            background: f.kind === "add" ? "rgba(82,196,26,0.12)" : f.kind === "del" ? "rgba(255,77,79,0.10)" : void 0,
            color: f.kind === "del" ? "rgba(255,77,79,0.9)" : void 0
          }
        },
        f.kind === "add" ? "+ " : f.kind === "del" ? "− " : "  ",
        f.text || " "
      );
    })
  ));
}
function Ss({ record: e }) {
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
        children: /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 4 } }, t.map((r) => /* @__PURE__ */ c.createElement(U, { key: r, code: !0, style: { fontSize: 11 } }, r)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ c.createElement(
          as,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((r, i) => {
              var y;
              const f = typeof r.name == "string" && r.name || typeof ((y = r.function) == null ? void 0 : y.name) == "string" && r.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ c.createElement(U, { code: !0, style: { fontSize: 11 } }, f),
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
function bs({
  record: e,
  request: s,
  onJumpSession: t,
  onJumpRecord: n,
  onSelectTurn: o,
  onClose: l
}) {
  const r = te(), [i, f] = Tn(400), y = is(null);
  if (rs(() => {
    const k = (P) => {
      const w = y.current;
      if (w === null) return;
      const d = w.anchorX - P.clientX;
      f(
        Math.min(hs, Math.max(ds, w.anchorWidth + d))
      );
    }, _ = () => {
      y.current = null;
    };
    return window.addEventListener("pointermove", k), window.addEventListener("pointerup", _), () => {
      window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", _);
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
        Pt,
        {
          image: Pt.PRESENTED_IMAGE_SIMPLE,
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
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(ht, { onClose: l }), /* @__PURE__ */ c.createElement(Ss, { record: a }))
    );
  const h = a.usage, u = a.timing, x = [];
  return x.push({
    key: "summary",
    label: g(r, "summary"),
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "#", value: String(a.index) }), /* @__PURE__ */ c.createElement(A, { label: "Kind", value: Sn(a, r) }), a.runIndex > 0 && o ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
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
        value: a.toolOutputBytes ? `${V(a.toolOutputChars)} ${g(
          r,
          "charUnit"
        )} · ${xt(a.toolOutputBytes)} (${g(
          r,
          "beforeTruncation"
        )})` : `${V(a.toolOutputChars)} ${g(
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
    ), a.note ? /* @__PURE__ */ c.createElement(U, { type: "warning", style: { fontSize: 12 } }, a.note) : null, a.spawnSession ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
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
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, a.toolError ? /* @__PURE__ */ c.createElement(U, { type: "danger", style: { fontSize: 12 } }, a.toolError) : null, a.toolOutput ? /* @__PURE__ */ c.createElement(ae, { value: a.toolOutput }) : null)
  })) : (a.outputText || a.thinkingText || a.messages || a.marker || a.toolCalls && a.toolCalls.length > 0) && x.push({
    key: "raw",
    label: g(r, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, a.inboundParts && a.inboundParts.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(U, { type: "secondary", style: { fontSize: 12 } }, `${g(r, "inboundParts")} (${a.inboundParts.length})`), a.inboundParts.map((k, _) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: _,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(U, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.type.replace("Content", "")),
      /* @__PURE__ */ c.createElement(
        U,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        k.text ?? "-"
      )
    ))) : null, a.marker ? /* @__PURE__ */ c.createElement(ae, { value: a.marker }) : null, a.toolCalls && a.toolCalls.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(U, { type: "secondary", style: { fontSize: 12 } }, `${g(r, "toolCall")} (${a.toolCalls.length})`), a.toolCalls.map((k, _) => /* @__PURE__ */ c.createElement("div", { key: k.id || _, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ c.createElement(U, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", k.name), /* @__PURE__ */ c.createElement(U, { type: "secondary", style: { fontSize: 11 } }, k.id)))) : null, a.note ? /* @__PURE__ */ c.createElement(U, { type: "warning", style: { fontSize: 12 } }, a.note) : null, a.messages && a.messages.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(U, { type: "secondary", style: { fontSize: 12 } }, `${g(r, "query")} (${a.messages.length})`), a.messages.map((k, _) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: _,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(U, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.role),
      /* @__PURE__ */ c.createElement(
        U,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        k.text
      )
    ))) : null, a.thinkingText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(U, { type: "secondary", style: { fontSize: 12 } }, g(r, "thinking")), /* @__PURE__ */ c.createElement(ae, { value: a.thinkingText })) : null, a.outputText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(U, { type: "secondary", style: { fontSize: 12 } }, g(r, "output")), /* @__PURE__ */ c.createElement(ae, { value: a.outputText })) : null)
  }), (a.startedAt !== null || h || u) && x.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "Started", value: Pe(a.startedAt) }), /* @__PURE__ */ c.createElement(A, { label: "Total", value: oe(a.timeSeconds) }), u ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
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
    )) : /* @__PURE__ */ c.createElement(U, { type: "secondary", style: { fontSize: 12 } }, g(r, "noTiming")))
  }), h && x.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(A, { label: "Input", value: V(h.input_tokens) }), /* @__PURE__ */ c.createElement(A, { label: "Output", value: V(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ c.createElement(
      A,
      {
        label: "Cache write",
        value: V(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ c.createElement(
      A,
      {
        label: "Cache read",
        value: V(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ c.createElement(A, { label: "Total", value: V(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ c.createElement(A, { label: "API time", value: oe(h.time) }) : null)
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
          const f = +l;
          if (Number.isInteger(f) && f >= 0 && f < e) {
            let y = o[f];
            if (!y) {
              const a = s[f * 2];
              y = o[f] = {
                index: f,
                key: t(f),
                start: a,
                size: s[f * 2 + 1],
                end: a + s[f * 2 + 1],
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
    const f = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let y = 0;
    f && (y = Date.now());
    const a = e();
    if (!(a.length !== n.length || a.some((x, k) => n[k] !== x)))
      return o;
    n = a;
    let u = 0;
    if (f && (u = Date.now()), o = s(...a), f) {
      const x = Math.round((Date.now() - y) * 100) / 100, k = Math.round((Date.now() - u) * 100) / 100, _ = k / 16, P = (w, d) => {
        for (w = String(w); w.length < d; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${P(k, 5)} /${P(x, 5)} ms`,
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
    const { width: i, height: f } = r;
    s({ width: Math.round(i), height: Math.round(f) });
  };
  if (o(Ht(t)), !n.ResizeObserver)
    return () => {
    };
  const l = new n.ResizeObserver((r) => {
    const i = () => {
      const f = r[0];
      if (f != null && f.borderBoxSize) {
        const y = f.borderBoxSize[0];
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
  ), f = (h) => () => {
    r = t(n), i == null || i(), s(r, h);
  }, y = f(!0), a = f(!1);
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
}, Ps = (e, {
  adjustments: s = 0,
  behavior: t
}, n) => {
  var o, l;
  (l = (o = n.scrollElement) == null ? void 0 : o.scrollTo) == null || l.call(o, {
    [n.options.horizontal ? "left" : "top"]: e + s,
    behavior: t
  });
}, Ns = Ps;
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
            const i = l.target, f = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [y, a] of this.elementsCache)
                if (a === i) {
                  this.elementsCache.delete(y);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(f) && this.resizeItem(
              f,
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
      let i = null, f = null, y = !1;
      if (r !== void 0 && r.enabled && l.enabled && l.anchorTo === "end" && this.scrollElement !== null) {
        const u = r.count, x = l.count, k = this.getMeasurements(), _ = u > 0 ? ((n = k[0]) == null ? void 0 : n.key) ?? r.getItemKey(0) : null, P = u > 0 ? ((o = k[u - 1]) == null ? void 0 : o.key) ?? r.getItemKey(u - 1) : null;
        if (x !== u || u > 0 && x > 0 && (l.getItemKey(0) !== _ || l.getItemKey(x - 1) !== P)) {
          y = !0;
          const m = u > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? k[0] : null;
          m && (i = [m.key, this.getScrollOffset() - m.start]);
          const p = l.followOnAppend === !0 ? "auto" : l.followOnAppend || null;
          p && x > u && this.isAtEnd(r.scrollEndThreshold) && (u === 0 || l.getItemKey(x - 1) !== P) && (f = p);
        }
      }
      this.options = l, y && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let a = !1, h = 0;
      if (i && this.scrollOffset !== null) {
        const [u, x] = i, k = this.getMeasurements(), { count: _, getItemKey: P } = this.options;
        let w = 0;
        for (; w < _ && P(w) !== u; )
          w++;
        if (w < _) {
          const d = k[w];
          if (d) {
            const m = Math.max(0, d.start + x);
            m !== this.scrollOffset && (h = m - this.scrollOffset, this.scrollOffset = m, a = !0);
          }
        }
      }
      (a || f) && (this.pendingScrollAnchor = [
        a ? i[0] : null,
        a ? i[1] : 0,
        f,
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
        const [l, r, i, f] = o;
        l !== null && !i && (mt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? f !== 0 && (this._iosDeferredAdjustment += f) : this._scrollToOffset(this.getScrollOffset(), {
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
      (t, n, o, l, r, i, f, y) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: o,
        getItemKey: l,
        enabled: r,
        lanes: i,
        laneAssignmentMode: f,
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
        laneAssignmentMode: f,
        gap: y
      }, a) => {
        const h = this.itemSizeCache;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const w of this.laneAssignments.keys())
            w >= t && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const u = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const w = t * 2;
          let d = this._flatMeasurements;
          if (!d || d.length < w) {
            const S = new Float64Array(w);
            d && u > 0 && S.set(d.subarray(0, u * 2)), d = S, this._flatMeasurements = d;
          }
          let m;
          if (u === 0)
            m = n + o;
          else {
            const S = u - 1;
            m = d[S * 2] + d[S * 2 + 1] + y;
          }
          for (let S = u; S < t; S++) {
            const M = l(S), b = h.get(M), R = typeof b == "number" ? b : this.options.estimateSize(S);
            d[S * 2] = m, d[S * 2 + 1] = R, m += R + y;
          }
          const p = Cs(t, d, l);
          return this.measurementsCache = p, p;
        }
        const x = this.measurementsCache.slice(0, u), k = new Array(i).fill(
          void 0
        ), _ = new Float64Array(i);
        let P = 0;
        for (let w = 0; w < u; w++) {
          const d = x[w];
          d && (k[d.lane] === void 0 && P++, k[d.lane] = w, _[d.lane] = d.end);
        }
        for (let w = u; w < t; w++) {
          const d = l(w), m = this.laneAssignments.get(w);
          let p, S;
          const M = f === "estimate" || h.has(d);
          if (m !== void 0 && this.options.lanes > 1) {
            p = m;
            const C = k[p], j = C !== void 0 ? x[C] : void 0;
            S = j ? j.end + y : n + o;
          } else if (P === i) {
            let C = 0, j = _[0], se = k[0];
            for (let N = 1; N < i; N++) {
              const X = _[N];
              (X < j || X === j && k[N] < se) && (C = N, j = X, se = k[N]);
            }
            p = C, S = j + y, M && this.laneAssignments.set(w, p);
          } else
            p = w % this.options.lanes, S = n + o, M && this.laneAssignments.set(w, p);
          const b = h.get(d), R = typeof b == "number" ? b : this.options.estimateSize(w), z = S + R;
          x[w] = {
            index: w,
            start: S,
            size: R,
            end: z,
            key: d,
            lane: p
          }, k[p] === void 0 && P++, k[p] = w, _[p] = z;
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
      let r, i, f;
      const y = this._flatMeasurements;
      if (this.options.lanes === 1 && y !== null)
        f = this.options.getItemKey(t), i = y[t * 2], r = y[t * 2 + 1];
      else {
        const u = this.measurementsCache[t];
        if (!u) return;
        f = u.key, i = u.start, r = u.size;
      }
      const a = this.itemSizeCache.get(f) ?? r, h = n - a;
      if (h !== 0) {
        const u = this.options.anchorTo === "end" && ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, x = u ? this.getTotalSize() : 0, k = this.getScrollOffset() + this.scrollAdjustments, P = !this.itemSizeCache.has(f) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          i < k
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          i + a <= k && this.scrollDirection !== "backward"
        ), w = ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: f,
            start: i,
            size: r,
            end: i + r,
            lane: 0
          },
          h,
          this
        ) : P);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(f, n), this.itemSizeCacheVersion++;
        let d = !1;
        u ? d = this.applyScrollAdjustment(
          this.getTotalSize() - x
        ) : w && (d = this.applyScrollAdjustment(h)), this.notify(d);
      }
    }, this.getVirtualItems = Te(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const o = [];
        for (let l = 0, r = t.length; l < r; l++) {
          const i = t[l], f = n[i];
          o.push(f);
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
      const [r, i] = l, f = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: o,
        startedAt: f,
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
      const i = this.getSize() || 600, f = Math.abs(o - this.getScrollOffset()), y = this.scrollState.behavior === "smooth" && f > i;
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
  let i = Mn(0, l, (y) => e[y].start, t), f = i;
  if (n === 1)
    for (; f < l && e[f].end < t + s; )
      f++;
  else if (n > 1) {
    const y = Array(n).fill(0);
    for (; f < l && y.some((h) => h < t + s); ) {
      const h = e[f];
      y[h.lane] = h.end, f++;
    }
    const a = Array(n).fill(t + s);
    for (; i >= 0 && a.some((h) => h >= t); ) {
      const h = e[i];
      a[h.lane] = h.start, i--;
    }
    i = Math.max(0, i - i % n), f = Math.min(l, f + (n - 1 - f % n));
  }
  return { startIndex: i, endIndex: f };
}
const ft = typeof document < "u" ? Ts : ks;
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
    const u = !!a.options.horizontal, x = h.mode === "transform", k = u ? "left" : "top", _ = a.options.scrollMargin, P = a.getVirtualItems();
    for (const w of P) {
      const d = w.start - _, m = a.elementsCache.get(w.key);
      m && h.lastPositions.get(m) !== d && (h.lastPositions.set(m, d), x ? m.style.transform = u ? `translate3d(${d}px, 0, 0)` : `translate3d(0, ${d}px, 0)` : m.style[k] = `${d}px`);
    }
  }, f = {
    ...n,
    onChange: (a, h) => {
      var u;
      const x = l.current;
      let k = !0;
      if (x.enabled) {
        i(a);
        const _ = a.range, P = x.prevRange;
        k = !P || P.isScrolling !== a.isScrolling || P.startIndex !== (_ == null ? void 0 : _.startIndex) || P.endIndex !== (_ == null ? void 0 : _.endIndex), k && (x.prevRange = _ ? {
          startIndex: _.startIndex,
          endIndex: _.endIndex,
          isScrolling: a.isScrolling
        } : null);
      }
      k && (e && h ? Ms(o) : o()), (u = n.onChange) == null || u.call(n, a, h);
    }
  }, [y] = ws(() => {
    const a = new Fs(f);
    return Object.assign(a, {
      containerRef: (h) => {
        const u = l.current;
        if (u.container = h, u.lastSize = null, h && u.enabled) {
          const x = a.getTotalSize();
          u.lastSize = x;
          const k = a.options.horizontal ? "width" : "height";
          h.style[k] = `${x}px`;
        }
      }
    });
  });
  return y.setOptions(f), ft(() => y._didMount(), []), ft(() => (r(y), y._willUpdate())), ft(() => {
    i(y);
  }), y;
}
function Ws(e) {
  return Us({
    observeElementRect: $s,
    observeElementOffset: Ds,
    scrollToFn: Ns,
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
  var i, f;
  const l = e.usage, r = l && (l.input_tokens || l.output_tokens) ? `${V(l.input_tokens)}→${V(
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
        icon: e.markerKind && ((f = Ut[e.markerKind]) == null ? void 0 : f.icon) || so[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      Sn(e, te())
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
  onToggleTurn: f,
  callsCollapsed: y,
  hasOlderRecords: a,
  loadingOlder: h,
  onLoadOlder: u,
  initialRecord: x,
  emptyText: k
}) {
  const _ = te(), P = Ks(null), w = e.filter((b) => b.turn !== null), d = w.length > 1, m = O.useMemo(() => {
    var R;
    const b = [];
    a && b.push({
      key: "load-older",
      height: Vt,
      type: "load-older"
    }), x && (b.push({
      key: "initial",
      height: wt,
      type: "initial",
      record: x
    }), b.push({
      key: "initial-divider",
      height: Kt,
      type: "divider"
    }));
    for (const z of w) {
      const C = z.turn;
      if (b.push({
        key: `turn-${C}`,
        height: In,
        type: "boundary",
        turn: z
      }), !n.has(C))
        for (const j of ((R = z.groups[0]) == null ? void 0 : R.cells) ?? [])
          y && j.kind === "tool" || b.push({
            key: `rec-${j.index}`,
            height: wt,
            type: "record",
            record: j
          });
    }
    return b;
  }, [
    w,
    n,
    y,
    a,
    x
  ]), p = O.useCallback(
    (b) => o !== null && !o.has(b.index) || l !== null && !l.has(b.index),
    [o, l]
  ), S = (b) => {
    var R;
    switch (b.type) {
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
        const z = b.record;
        return /* @__PURE__ */ O.createElement(
          Xt,
          {
            record: z,
            selected: s === z.index,
            dimmed: p(z),
            multiRequest: d,
            onSelect: () => r(z.index)
          }
        );
      }
      case "boundary": {
        const z = b.turn, C = z.turn;
        return /* @__PURE__ */ O.createElement(
          uo,
          {
            turn: z,
            collapsed: n.has(C),
            selected: t === C,
            cellCount: ((R = z.groups[0]) == null ? void 0 : R.cells.length) ?? 0,
            onToggle: () => f(C),
            onSelect: () => i(C)
          }
        );
      }
      case "record":
      default: {
        const z = b.record;
        return /* @__PURE__ */ O.createElement(
          Xt,
          {
            record: z,
            selected: s === z.index,
            dimmed: p(z),
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
        k ?? g(_, "noSessions")
      )
    );
  const M = m.length <= lo ? /* @__PURE__ */ O.createElement("div", null, m.map((b) => S(b))) : /* @__PURE__ */ O.createElement(
    mo,
    {
      rows: m,
      scrollRef: P,
      renderRow: S
    }
  );
  return /* @__PURE__ */ O.createElement(
    "div",
    {
      ref: P,
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
function pt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function Gt(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (s) => typeof s == "number" && Number.isFinite(s)
  );
}
function fe(e, s = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function fo(e) {
  var w;
  const s = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), r = [];
  let i = "";
  const f = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  let h = 0, u = 0;
  const x = (d) => d.groups[0].cells, k = (d, m) => {
    const p = l.get(d);
    p ? p.push(m) : l.set(d, [m]);
  }, _ = (d, m) => {
    if (!d)
      if (i)
        d = i;
      else {
        r.push(m);
        return;
      }
    const p = t.get(d);
    if (p)
      m.runIndex = p.turn ?? 0, x(p).push(m);
    else if (i) {
      const S = t.get(i);
      S ? (m.runIndex = S.turn ?? 0, x(S).push(m)) : k(d, m);
    } else
      k(d, m);
  }, P = (d, m) => {
    const p = l.get(m);
    if (p) {
      for (const S of p) x(d).push(S);
      l.delete(m);
    }
  };
  for (const d of e) {
    const m = pt(d);
    switch (d.type) {
      case "run/start": {
        u += 1, f.set(
          d.run_id,
          typeof m.channel == "string" ? m.channel : ""
        );
        const p = {
          turn: u,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${u}`, cells: [] }]
        };
        t.set(d.run_id, p), s.push(p), i = d.run_id, P(p, d.run_id);
        for (const R of r.splice(0))
          R.runIndex = u, x(p).push(R);
        const S = Array.isArray(m.messages) ? m.messages : [], M = String(m.query ?? ""), b = {
          index: ++h,
          runIndex: u,
          runId: d.run_id,
          kind: "user",
          text: fe(M) || fe((w = S.at(-1)) == null ? void 0 : w.text),
          messages: S,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          model: void 0
        };
        y.set(d.run_id, b), x(p).push(b);
        break;
      }
      case "run/end": {
        const p = t.get(d.run_id);
        i === d.run_id && (i = ""), f.delete(d.run_id), y.delete(d.run_id);
        const S = String(m.status ?? "unknown");
        if (p && (p.status = S, p.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), S === "error" && m.error) {
          const M = p ?? {
            turn: null,
            status: S,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          p || s.push(M), M.groups[0].cells.push({
            index: ++h,
            runIndex: u,
            runId: d.run_id,
            kind: "system",
            markerKind: "error",
            text: fe(String(m.error)) || "run failed",
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
        const p = typeof m.child_session_id == "string" ? m.child_session_id : void 0, S = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${S} → ${p ?? "?"}`,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          spawnSession: p,
          spawnAgent: S,
          raw: [d]
        });
        break;
      }
      case "message/inbound": {
        const p = Array.isArray(m.parts) ? m.parts : [], S = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, M = p.map((j) => ({
          type: String(j.type ?? "?"),
          text: typeof j.text == "string" ? j.text : void 0
        })), b = f.get(d.run_id) ?? "", R = S && typeof S.user_id == "string" && S.user_id ? S.user_id : void 0, z = fe(
          M.map((j) => j.text ?? "").filter(Boolean).join(`
`)
        ), C = y.get(d.run_id);
        C && !C.inboundParts ? (C.inboundParts = M, C.channel = b || void 0, C.userId = R, C.raw = [
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
          channel: b || void 0,
          userId: R,
          inboundParts: M,
          raw: [d]
        });
        break;
      }
      case "message/outbound": {
        const p = typeof m.text == "string" ? m.text : "";
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
          outputText: p || void 0,
          receipt: {
            channel: f.get(d.run_id) || void 0,
            chars: p.length
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
        const p = String(m.decision ?? "?"), S = m.tool_name ? String(m.tool_name) : "";
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: S ? `${S} → ${p}` : p,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: p === "denied",
          running: !1,
          raw: [d]
        });
        break;
      }
      case "llm/header": {
        const p = typeof m.sha256 == "string" ? m.sha256 : "", S = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, M = m.reason === "changed" ? "changed" : "initial", b = typeof m.system_prompt == "string" ? m.system_prompt : "", R = Array.isArray(m.tools) ? m.tools : [], z = Array.isArray(m.schemas) ? m.schemas : void 0;
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "header",
          text: M === "initial" ? `⚙ ${b ? `System Prompt (${b.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          prompt: b,
          prevPrompt: a.get(S ?? ""),
          headerTools: R,
          headerReason: M,
          sha: p,
          prevSha: S,
          schemas: z,
          raw: [d]
        }), p && a.set(p, b);
        break;
      }
      case "llm/call": {
        const p = pt(d), S = p.options && typeof p.options == "object" && Object.keys(p.options).length > 0 ? p.options : void 0, M = p.messages_meta, b = M && typeof M == "object" ? {
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
          model: String(p.model ?? "unknown"),
          provider: typeof p.provider == "string" && p.provider ? p.provider : void 0,
          messagesMeta: b,
          options: S
        };
        _(d.run_id, R);
        const z = n.get(d.run_id) ?? [];
        z.push({ cell: R, callData: p, call: d }), n.set(d.run_id, z);
        break;
      }
      case "llm/result": {
        const p = n.get(d.run_id), S = p == null ? void 0 : p.shift(), M = (S == null ? void 0 : S.callData) ?? {}, b = typeof m.duration_ms == "number" ? m.duration_ms : null, R = m.usage ?? void 0, z = m.timing, C = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, N = {
          text: (m.error ? fe(String(m.error)) : fe(String(m.text ?? ""))) || (C && C.length > 0 ? `🛠 ${C.map((X) => X.name).join(", ")}` : ""),
          timeSeconds: b === null ? null : b / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: R,
          timing: z,
          toolCalls: C,
          note: m.note ? String(m.note) : void 0
        };
        S ? (Object.assign(S.cell, N), S.cell.model = String(
          m.model ?? M.model ?? S.cell.model
        ), S.cell.raw = [
          ...S.call ? [S.call] : [],
          d
        ]) : _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          startedAt: re(d.t),
          model: String(m.model ?? M.model ?? "unknown"),
          ...N
        });
        break;
      }
      case "tool/call": {
        const p = pt(d), S = {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `${String(p.name ?? "?")}(${fe(
            String(p.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: re(d.t),
          isError: !1,
          running: !0,
          toolName: String(p.name ?? "?"),
          toolInput: p.input ? String(p.input) : void 0
        };
        _(d.run_id, S);
        const M = o.get(d.run_id) ?? [];
        M.push({ cell: S, callData: p, call: d }), o.set(d.run_id, M);
        break;
      }
      case "tool/result": {
        const p = o.get(d.run_id), S = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let M;
        if (p) {
          const se = S ? p.findIndex(
            (N) => N.callData.tool_call_id === S
          ) : -1;
          se >= 0 ? M = p.splice(se, 1)[0] : M = p.shift();
        }
        const b = typeof m.duration_ms == "number" ? m.duration_ms : null, R = m.ok !== !1 && !m.error, z = m.output ? String(m.output) : void 0, C = z ? ` → ${fe(z, 60)}` : "", j = {
          timeSeconds: b === null ? null : b / 1e3,
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
    const p = t.get(d);
    if (p) {
      for (const S of m) x(p).push(S);
      l.delete(d);
    }
  }
  return s;
}
function Jt(e) {
  return e.flatMap((s) => s.groups.flatMap((t) => t.cells));
}
function po(e) {
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
        cells: t.filter((i, f) => f !== n)
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
}, Qt = "agent-trace-timeline-styles", go = `
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
function yo() {
  if (gt || typeof document > "u") return;
  if (document.getElementById(Qt)) {
    gt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Qt, e.textContent = go, document.head.appendChild(e), gt = !0;
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
function vo(e) {
  if (!Yt(e.startedAt)) return null;
  const s = Yt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + s };
}
function On(e, s = "sequence") {
  if (s !== "sequence")
    return Eo(
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
function Eo(e, s, t) {
  const n = e.flatMap((a) => {
    const h = a.groups.flatMap(
      (u) => u.cells.flatMap((x) => {
        const k = vo(x);
        return k === null ? [] : [
          {
            ...k,
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
  const f = [], y = [];
  for (const a of n) {
    const h = a.rawSpans.map((u) => {
      const x = l.get(u) ?? 0;
      return {
        ...u,
        start: u.start - x,
        end: (s ? u.end : u.start) - x
      };
    });
    f.push(...h), a.turn !== null && y.push({
      turn: a.turn,
      time: Math.min(...h.map((u) => u.start))
    });
  }
  return {
    start: Math.min(...f.map((a) => a.start)),
    end: Math.max(...f.map((a) => a.end)),
    spans: f,
    turnBoundaries: y
  };
}
function So(e, s, t = "sequence") {
  const n = On(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((o) => o.start <= s.end && o.end >= s.start).map((o) => o.index)
  );
}
yo();
const Ze = window.QwenPaw.host, F = Ze.React, { useEffect: Ke, useMemo: Zt, useRef: Ve, useState: _e } = F, { Tooltip: bo } = Ze.antd, vt = 3, xo = 4, wo = 0.08, ko = 0.025, To = 32, _o = 0.5;
function Mo(e) {
  const s = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, o = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, l = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...s === void 0 ? {} : { durationMs: s },
    ...t === void 0 ? {} : { startedAt: t },
    ...o === void 0 || l === void 0 ? {} : { ttftMs: o, decodingMs: l }
  };
}
function Co(e) {
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
function Io(e, s) {
  const t = Co(e);
  if (s === void 0) return t;
  const n = s.durationMs === void 0 ? null : `Total ${yt(s.durationMs)}`, o = s.startedAt === void 0 ? null : s.durationMs === void 0 ? `Started ${Pe(s.startedAt)}` : `${Pe(s.startedAt)} → ${Pe(
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
function zo(e, s, t, n) {
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
    bo,
    {
      title: /* @__PURE__ */ F.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: s,
      mouseEnterDelay: _o,
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
const Oo = F.memo(function({
  turns: s,
  mode: t,
  range: n,
  hasEarlierRecords: o = !1,
  onLoadEarlier: l,
  selectedIndex: r = null,
  searchMatchIndexes: i = null,
  onRangeChange: f,
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
            (T) => [T.index, Mo(T)]
          )
        )
      )
    ),
    [s]
  ), k = Ve(null), _ = Ve(null), P = Ve(null), w = Ve(null), [d, m] = _e(null), [p, S] = _e(null), [M, b] = _e(!1), [R, z] = _e(!1), [C, j] = _e(null), [se, N] = _e(!1);
  Ke(() => {
    u !== null && n !== null && (n.end < u.start || n.start > u.end) && f(null);
  }, [u, f, n]), Ke(() => {
    u !== null && (N(!1), j(
      (E) => E !== null && (E.end < u.start || E.start > u.end) ? null : E
    ));
  }, [u]), Ke(() => {
    if (u === null || r === null) return;
    const E = u.spans.find(
      (v) => v.index === r
    );
    E !== void 0 && (N(!0), j((v) => {
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
  ), W = C === null ? X : me, H = C === null ? (u == null ? void 0 : u.start) ?? 0 : Fe, Ce = o && u !== null && H === u.start, Ie = l === void 0 || M ? void 0 : () => {
    b(!0), l().finally(() => {
      b(!1);
    });
  }, ye = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(H - u.start) / W * 100}%`,
    "--trajectory-domain-width": `${X / W * 100}%`
  }, G = u === null || n === null ? null : qt(
    n,
    H,
    W,
    u.start,
    u.end
  ), ce = (u === null || d === null ? null : qt(
    d,
    H,
    W,
    u.start,
    u.end
  )) ?? G, Oe = d ?? n;
  if (Ke(() => {
    const E = P.current;
    if (E === null) return;
    const v = (T) => {
      T.preventDefault();
      const I = w.current;
      if (I === null || u === null) return;
      N(!1);
      const B = I.getBoundingClientRect(), K = Et(
        (T.clientX - B.left) / Math.max(1, B.width)
      ), Z = Math.min(
        X,
        Math.max(
          Math.min(
            t === "sequence" ? xo : 20,
            X
          ),
          W * Math.exp(T.deltaY * 15e-4)
        )
      );
      if (Z >= X * 0.999) {
        j(null);
        return;
      }
      const J = H + K * W, q = Math.min(
        Math.max(J - K * Z, u.start),
        u.end - Z
      );
      j({ start: q, end: q + Z });
    };
    return E.addEventListener("wheel", v, { passive: !1 }), () => {
      E.removeEventListener("wheel", v);
    };
  }, [W, H, X, t, u]), u === null)
    return /* @__PURE__ */ F.createElement(
      "section",
      {
        ref: P,
        className: ee.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ F.createElement("div", { className: ee.plot }, /* @__PURE__ */ F.createElement(en, null), /* @__PURE__ */ F.createElement("div", { className: ee.track }, /* @__PURE__ */ F.createElement("span", { className: ee.empty }, "No timing data"), o && /* @__PURE__ */ F.createElement(
        tn,
        {
          loading: M,
          onHover: () => {
            S(null);
          },
          onLoad: Ie
        }
      )))
    );
  const Ae = Math.min(
    W,
    X / u.spans.length
  ), Se = (E) => {
    const v = E.currentTarget.getBoundingClientRect();
    return Et((E.clientX - v.left) / Math.max(1, v.width));
  }, be = (E) => {
    var B;
    const v = E.target instanceof HTMLElement ? E.target : null, T = (B = v == null ? void 0 : v.closest("[data-timeline-record-index]")) == null ? void 0 : B.dataset.timelineRecordIndex;
    if (T === void 0) return null;
    const I = Number(T);
    return Number.isFinite(I) ? I : null;
  }, Be = (E) => {
    f(E);
  }, He = (E) => {
    if (E.button === 2) {
      _.current = {
        anchorClientX: E.clientX,
        anchorStart: H,
        moved: !1,
        pannable: C !== null,
        pointerId: E.pointerId
      }, C !== null && N(!1), z(!0), typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId);
      return;
    }
    if (E.button !== 0) return;
    const v = Se(E), T = H + v * W, I = be(E);
    S({ fraction: v, recordIndex: I }), k.current = {
      pointerId: E.pointerId,
      anchorTime: T,
      anchorClientX: E.clientX,
      recordIndex: I
    }, typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId), m({ start: T, end: T });
  }, nt = (E) => {
    const v = E.currentTarget.getBoundingClientRect(), T = Se(E);
    S({ fraction: T, recordIndex: be(E) });
    const I = _.current;
    if (I !== null && I.pointerId === E.pointerId) {
      if (Math.abs(E.clientX - I.anchorClientX) >= vt && (I.moved = !0), !I.pannable) return;
      const J = (E.clientX - I.anchorClientX) / Math.max(1, v.width), q = Math.min(
        Math.max(I.anchorStart - J * W, u.start),
        u.end - W
      );
      j({ start: q, end: q + W });
      return;
    }
    const B = k.current;
    if (B === null || B.pointerId !== E.pointerId) return;
    let K = H;
    if (C !== null) {
      const J = E.clientX - v.left, q = Math.min(
        To,
        Math.max(1, v.width * wo)
      ), Q = J < q ? -1 : J > v.width - q ? 1 : 0;
      if (Q !== 0) {
        const xe = Q < 0 ? q - J : J - (v.width - q), ue = Et(xe / q), le = H + Q * W * ko * Math.max(0.2, ue);
        K = Math.min(
          Math.max(le, u.start),
          u.end - W
        ), K !== H && (N(!1), j({
          start: K,
          end: K + W
        }));
      }
    }
    const Z = K + T * W;
    m(kt(B.anchorTime, Z));
  }, st = (E) => {
    const v = _.current;
    if (v !== null && v.pointerId === E.pointerId) {
      const Q = v.moved || Math.abs(E.clientX - v.anchorClientX) >= vt;
      _.current = null, z(!1), Q || f(null);
      return;
    }
    const T = k.current;
    if (T === null || T.pointerId !== E.pointerId) return;
    const I = Se(E), B = H + I * W, K = kt(T.anchorTime, B);
    S({ fraction: I, recordIndex: be(E) }), k.current = null, m(null);
    const Z = Math.abs(E.clientX - T.anchorClientX) < vt, J = Z && T.recordIndex !== null ? u.spans.find((Q) => Q.index === T.recordIndex) : void 0;
    if (J !== void 0) {
      f(null), y == null || y(J.index);
      return;
    }
    const q = K.end - K.start < Ae ? zo(
      Z ? K.start : (K.start + K.end) / 2,
      Ae,
      u.start,
      u.end
    ) : K;
    if (Be(q), Z) {
      const Q = K.start, xe = u.spans.reduce((ue, le) => {
        const $e = Q < ue.start ? ue.start - Q : Q > ue.end ? Q - ue.end : 0;
        return (Q < le.start ? le.start - Q : Q > le.end ? Q - le.end : 0) < $e ? le : ue;
      });
      a == null || a(xe.index);
    }
  }, ot = (E) => {
    E.key !== "Escape" || n === null || (E.preventDefault(), f(null));
  }, Ue = () => {
    k.current = null, _.current = null, m(null), S(null), z(!1);
  };
  return /* @__PURE__ */ F.createElement(
    "section",
    {
      ref: P,
      className: ee.root,
      "data-theme": h || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ F.createElement("div", { className: ee.plot }, /* @__PURE__ */ F.createElement(en, null), /* @__PURE__ */ F.createElement(
      "div",
      {
        ref: w,
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
          k.current === null && _.current === null && S(null);
        },
        onDoubleClick: (E) => {
          E.preventDefault(), f(null);
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
            S(null);
          },
          onLoad: Ie
        }
      ),
      p !== null && p.recordIndex === null && d === null && /* @__PURE__ */ F.createElement(
        "div",
        {
          className: ee.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${p.fraction * 100}%`
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
          (E) => E.time > u.start && E.time >= H && E.time <= H + W
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
          (E) => E.index === r || E.end >= H && E.start <= H + W
        ).map((E) => {
          const v = (E.start - u.start) / X, I = (E.end - E.start) / X * 100, B = x.get(E.index), K = B == null ? void 0 : B.ttftMs, Z = B == null ? void 0 : B.decodingMs, J = K === void 0 || Z === void 0 || K + Z <= 0 ? null : K / (K + Z);
          return /* @__PURE__ */ F.createElement(
            An,
            {
              key: E.index,
              label: Io(E.kind, B),
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
                "data-hovered": (p == null ? void 0 : p.recordIndex) === E.index || void 0,
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
}), Ct = window.QwenPaw.host, ie = Ct.React, { Button: Ao, Input: $o, Segmented: Ro, Tooltip: nn } = Ct.antd, { MenuFoldOutlined: Lo, MenuUnfoldOutlined: Do, ReloadOutlined: jo, SearchOutlined: Po } = Ct.antdIcons;
function No({
  mode: e,
  onModeChange: s,
  search: t,
  onSearchChange: n,
  onRefresh: o,
  modeOptions: l,
  allCollapsed: r,
  hasRequests: i,
  onToggleCollapseAll: f,
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
      Ro,
      {
        size: "small",
        value: e,
        options: l,
        onChange: (u) => s(u)
      }
    )),
    /* @__PURE__ */ ie.createElement(
      $o,
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
        Ao,
        {
          size: "small",
          type: "text",
          icon: r ? /* @__PURE__ */ ie.createElement(Do, null) : /* @__PURE__ */ ie.createElement(Lo, null),
          onClick: f
        }
      )
    ),
    /* @__PURE__ */ ie.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ie.createElement(
      "a",
      {
        onClick: o,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ie.createElement(jo, null),
      " ",
      g(h, "refresh")
    ))
  );
}
const tt = window.QwenPaw.host, $ = tt.React, { useCallback: sn, useEffect: St, useMemo: de, useRef: Fo, useState: ne } = $, {
  Button: Xe,
  Empty: on,
  Popconfirm: Bo,
  Popover: Ho,
  Space: Uo,
  Spin: $n,
  Switch: Wo,
  Tag: Ko,
  Tooltip: Vo,
  message: je
} = tt.antd, { DeleteOutlined: Xo, DownloadOutlined: Go, SettingOutlined: ln } = tt.antdIcons, { Text: ge } = tt.antd.Typography;
function rn({
  config: e,
  onChange: s,
  children: t
}) {
  const n = te(), o = (r, i, f) => /* @__PURE__ */ $.createElement(
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
      Wo,
      {
        size: "small",
        checked: !!i,
        onChange: (y) => s({ [f]: y })
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
  return /* @__PURE__ */ $.createElement(Ho, { content: l, trigger: "click", placement: "bottomRight" }, t);
}
function Jo({
  sessionId: e,
  summary: s,
  locale: t,
  onJumpSession: n,
  onRefreshSessions: o
}) {
  const [l, r] = ne(null), [i, f] = ne(!1), [y, a] = ne(!1), [h, u] = ne(""), [x, k] = ne("sequence"), [_, P] = ne(null), [w, d] = ne(null), [m, p] = ne(null), [S, M] = ne(
    /* @__PURE__ */ new Set()
  ), [b, R] = ne(!1), [z, C] = ne(null), [j, se] = ne(null), [N, X] = ne(null), [me, Fe] = ne(null), W = Fo(null);
  W.current = e, St(() => {
    Bn().then(C).catch(() => C(null));
  }, []);
  const H = sn(async (v, T) => {
    T || f(!0);
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
      T || f(!1);
    }
  }, []), Ce = sn(async (v) => {
    try {
      const T = await Nn(v);
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
  St(() => {
    e ? (P(null), d(null), p(null), M(/* @__PURE__ */ new Set()), u(""), H(e), Ce(e)) : (r(null), X(null), se(null));
  }, [e, H, Ce]);
  const Ie = de(
    () => l ? fo(l.events) : [],
    [l]
  ), { initial: ye, turns: G } = de(
    () => po(Ie),
    [Ie]
  ), ze = de(
    () => ye ? [ye, ...Jt(G)] : Jt(G),
    [ye, G]
  ), ce = de(
    () => G.some((v) => v.status === "running"),
    [G]
  );
  St(() => {
    if (!e || !ce) return;
    const v = setInterval(() => {
      document.visibilityState === "visible" && W.current && H(W.current);
    }, 5e3);
    return () => clearInterval(v);
  }, [e, ce, H]);
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
  }, [h, ze]), Se = de(
    () => w === null ? null : ze.find((v) => v.index === w) ?? null,
    [ze, w]
  ), be = de(() => {
    var At, $t;
    if (m === null) return null;
    const v = G.find((L) => L.turn === m);
    if (!v) return null;
    const T = ((At = v.groups[0]) == null ? void 0 : At.cells) ?? [], I = T.filter((L) => L.kind === "message"), B = T.filter((L) => L.kind === "tool"), K = [
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
      models: K,
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
    if (!N) return null;
    const v = [
      `${N.runs} ${g(t, "statRounds")} · ${N.llm_calls} ${g(t, "statSteps")}`,
      `LLM ${oe(N.llm_ms_total / 1e3)} · ${g(
        t,
        "toolCalls"
      )} ${oe(N.tool_ms_total / 1e3)}`,
      `${g(t, "statTtftAvg")} ${N.ttft_ms_avg === null ? "-" : oe(N.ttft_ms_avg / 1e3)} · ${_t(
        N.output_tokens,
        N.decode_ms_total / 1e3
      )}`
    ];
    if (N.cache_read_tokens > 0 || N.cache_write_tokens > 0) {
      const T = N.cache_read_tokens + N.input_tokens, I = T > 0 ? Math.round(N.cache_read_tokens / T * 100) : 0;
      v.push(`${g(t, "statCacheHit")} ${I}%`);
    }
    return v.push(
      `${g(t, "statInput")} ${V(
        N.input_tokens
      )} tok · ${g(t, "statOutput")} ${V(
        N.output_tokens
      )} tok`
    ), s && v.push(xt(s.size_bytes)), v.join(" | ");
  }, [N, s, t]), ot = () => {
    d(null), p(null);
  }, Ue = (me == null ? void 0 : me.status) === 404, E = Se !== null || be !== null;
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
          (s == null ? void 0 : s.title) || (s == null ? void 0 : s.agent_id) || bn(e)
        ),
        /* @__PURE__ */ $.createElement(
          Ko,
          {
            color: wn[(s == null ? void 0 : s.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          kn((s == null ? void 0 : s.status) ?? "unknown")
        ),
        s != null && s.channel ? /* @__PURE__ */ $.createElement(ge, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, s.channel) : null,
        /* @__PURE__ */ $.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ $.createElement(Uo, null, /* @__PURE__ */ $.createElement(rn, { config: z, onChange: He }, /* @__PURE__ */ $.createElement(Xe, { size: "small", icon: /* @__PURE__ */ $.createElement(ln, null) })), /* @__PURE__ */ $.createElement(Vo, { title: g(t, "export") }, /* @__PURE__ */ $.createElement(
          Xe,
          {
            size: "small",
            icon: /* @__PURE__ */ $.createElement(Go, null),
            onClick: () => {
              Un(e).then(() => je.success(g(t, "exported"))).catch(
                (v) => je.error(String(v.message))
              );
            }
          },
          g(t, "export")
        )), /* @__PURE__ */ $.createElement(
          Bo,
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
          /* @__PURE__ */ $.createElement(Xe, { size: "small", danger: !0, icon: /* @__PURE__ */ $.createElement(Xo, null) }, g(t, "delete"))
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
      No,
      {
        mode: x,
        onModeChange: k,
        search: h,
        onSearchChange: u,
        onRefresh: () => {
          e && (H(e), Ce(e)), o == null || o();
        },
        modeOptions: nt,
        allCollapsed: G.length > 0 && G.every((v) => S.has(v.turn ?? -1)),
        hasRequests: G.some((v) => v.turn !== null),
        callsCollapsed: b,
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
      Oo,
      {
        turns: G,
        mode: x,
        range: _,
        hasEarlierRecords: Be,
        onLoadEarlier: async () => {
          var v;
          return !l || l.events.length === 0 ? !1 : (await H(e, (v = l.events[0]) == null ? void 0 : v.seq), !0);
        },
        selectedIndex: w,
        searchMatchIndexes: Ae,
        onRangeChange: P,
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
          selectedIndex: w,
          selectedTurn: m,
          collapsedTurns: S,
          focusIndexes: Oe,
          searchMatchIndexes: Ae,
          onSelectedIndexChange: (v) => {
            if (v === w) {
              d(null);
              return;
            }
            d(v), p(null);
          },
          onSelectedTurnChange: (v) => {
            p(v), d(null);
          },
          callsCollapsed: b,
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
            !l || l.events.length === 0 || (a(!0), H(
              e,
              (v = l.events[0]) == null ? void 0 : v.seq
            ).finally(() => a(!1)));
          },
          emptyText: g(t, "noSessions"),
          initialRecord: ye
        }
      )
    ), E ? /* @__PURE__ */ $.createElement(
      bs,
      {
        record: Se,
        request: be,
        onJumpSession: n,
        onSelectTurn: (v) => {
          p(v), d(null);
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
const Me = window.QwenPaw.host, D = Me.React, { useCallback: an, useEffect: bt, useMemo: Ge, useState: pe } = D, { Button: cn, Empty: un, Input: Qo, Spin: Yo, Tag: dn, Tooltip: hn } = Me.antd, {
  CaretRightOutlined: Zo,
  MenuFoldOutlined: qo,
  MenuUnfoldOutlined: el,
  SearchOutlined: tl
} = Me.antdIcons, { Text: Ne } = Me.antd.Typography;
function nl({
  groups: e,
  collapsedAgents: s,
  onToggleAgent: t,
  searching: n,
  selected: o,
  onSelect: l,
  locale: r
}) {
  const i = e.length > 1;
  return /* @__PURE__ */ D.createElement(D.Fragment, null, e.map(([f, y]) => {
    const a = i && !n && s.has(f);
    return /* @__PURE__ */ D.createElement("div", { key: f }, i && /* @__PURE__ */ D.createElement(
      "div",
      {
        onClick: () => t(f),
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
        Zo,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: a ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ D.createElement(Ne, { strong: !0, style: { fontSize: 12 } }, f),
      /* @__PURE__ */ D.createElement(Ne, { type: "secondary", style: { fontSize: 11 } }, y.length)
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
            Ne,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || bn(h.session_id)
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
function sl() {
  const e = typeof Me.useLocale == "function" ? Me.useLocale() : void 0, s = Ge(
    () => Tt(e ?? te()),
    [e]
  ), [t, n] = pe(null), [o, l] = pe(!1), [r, i] = pe(
    /* @__PURE__ */ new Set()
  ), [f, y] = pe(!1), [a, h] = pe(!1), [u, x] = pe(null), [k, _] = pe(""), [P, w] = pe(null), d = an(async () => {
    try {
      const b = await Lt({ limit: 100, offset: 0 });
      n(b.sessions), l(b.has_more), w(null);
    } catch (b) {
      w(String(b.message));
    }
  }, []), m = an(async () => {
    h(!0);
    try {
      const b = await Lt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((R) => {
        const z = R ?? [];
        return [
          ...z,
          ...b.sessions.filter(
            (C) => !z.some((j) => j.session_id === C.session_id)
          )
        ];
      }), l(b.has_more);
    } catch (b) {
      w(String(b.message));
    } finally {
      h(!1);
    }
  }, [t]);
  bt(() => {
    d();
    try {
      const b = new URLSearchParams(window.location.search).get("session");
      b && En(b).then((R) => {
        x(R ?? b);
      });
    } catch {
    }
  }, [d]), bt(() => {
    try {
      const b = new URL(window.location.href);
      u ? b.searchParams.set("session", u) : b.searchParams.delete("session"), window.history.replaceState(window.history.state, "", b);
    } catch {
    }
  }, [u]), bt(() => {
    const b = setInterval(() => {
      document.visibilityState === "visible" && d();
    }, 15e3);
    return () => clearInterval(b);
  }, [d]);
  const p = Ge(
    () => (t == null ? void 0 : t.find((b) => b.session_id === u)) ?? null,
    [t, u]
  ), S = Ge(() => {
    if (!t) return [];
    const b = k.trim().toLowerCase();
    return b ? t.filter(
      (R) => [R.session_id, R.title ?? "", R.agent_id, R.channel].join(" ").toLowerCase().includes(b)
    ) : t;
  }, [t, k]), M = Ge(() => {
    const b = /* @__PURE__ */ new Map();
    for (const R of S) {
      const z = R.agent_id || "(unknown)", C = b.get(z);
      C ? C.push(R) : b.set(z, [R]);
    }
    return [...b.entries()];
  }, [S]);
  return /* @__PURE__ */ D.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, f ? /* @__PURE__ */ D.createElement(
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
        icon: /* @__PURE__ */ D.createElement(el, null),
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
        Qo,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ D.createElement(tl, null),
          placeholder: g(s, "searchPlaceholder"),
          value: k,
          style: { flex: 1, minWidth: 0 },
          onChange: (b) => _(b.target.value)
        }
      ),
      /* @__PURE__ */ D.createElement(hn, { title: g(s, "collapseSidebar") }, /* @__PURE__ */ D.createElement(
        cn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ D.createElement(qo, null),
          onClick: () => y(!0)
        }
      ))
    ),
    P ? /* @__PURE__ */ D.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ D.createElement(Ne, { type: "danger", style: { fontSize: 12 } }, `${g(s, "loadFailed")}: ${P}`)) : null,
    /* @__PURE__ */ D.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ D.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ D.createElement(Yo, null)) : S.length === 0 ? /* @__PURE__ */ D.createElement(
      un,
      {
        image: un.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ D.createElement("span", { style: { fontSize: 12 } }, g(s, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ D.createElement(
        Ne,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        g(s, "noSessionsHint")
      )
    ) : /* @__PURE__ */ D.createElement(
      nl,
      {
        groups: M,
        collapsedAgents: r,
        onToggleAgent: (b) => {
          i((R) => {
            const z = new Set(R);
            return z.has(b) ? z.delete(b) : z.add(b), z;
          });
        },
        searching: !!k.trim(),
        selected: u,
        onSelect: x,
        locale: s
      }
    ), t !== null && o && !k.trim() && /* @__PURE__ */ D.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ D.createElement(
      "a",
      {
        onClick: () => void m(),
        style: { fontSize: 12 }
      },
      a ? "…" : `⋯ ${g(s, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ D.createElement(
    Jo,
    {
      sessionId: u,
      summary: p,
      locale: s,
      onJumpSession: x,
      onRefreshSessions: () => void d()
    }
  ));
}
const ol = window.QwenPaw.host.React;
var mn, fn;
(fn = (mn = window.QwenPaw).registerRoutes) == null || fn.call(mn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: sl,
    label: g(te(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var pn, Je, gn;
(gn = (Je = (pn = window.QwenPaw.chat) == null ? void 0 : pn.rightHeader) == null ? void 0 : Je.add) == null || gn.call(
  Je,
  "agent-trace",
  ol.createElement(Qn),
  { id: "agent-trace-jump" }
);

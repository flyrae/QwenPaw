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
    skillLoadKind: "技能",
    skillLoaded: "已加载",
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
    skillLoadKind: "Skill",
    skillLoaded: "loaded",
    contextReset: "Context prefix changed (compaction / rewrite); full input re-recorded",
    inputTotal: "Total input"
  }
};
function _t(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function Y() {
  try {
    return _t(localStorage.getItem("language"));
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
async function vn(e, s) {
  return Le.fetch ? Le.fetch(e, s) : fetch(Le.getApiUrl(e), {
    ...s,
    headers: {
      ...(s == null ? void 0 : s.headers) || {},
      ...Le.getApiToken() ? { Authorization: `Bearer ${Le.getApiToken()}` } : {}
    }
  });
}
class En extends Error {
  constructor(s, t) {
    super(t), this.status = s, this.name = "ApiError";
  }
}
async function Ee(e, s) {
  const t = await vn(e, s), n = await t.text();
  let l = null;
  try {
    l = n ? JSON.parse(n) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new En(
      t.status,
      typeof o == "string" ? o : `HTTP ${t.status}`
    );
  }
  return l;
}
async function jt(e) {
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
  const s = await vn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const t = await s.blob(), n = URL.createObjectURL(t), l = document.createElement("a");
  l.href = n, l.download = `${e}.jsonl`, l.click(), URL.revokeObjectURL(n);
}
async function Wn(e) {
  await Ee(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
async function Sn(e) {
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
    () => _t(e ?? Y()),
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
        Sn(t).then((n) => {
          window.location.href = Jn(n ?? t);
        });
      }
    }
  ));
}
const Dt = 3e3;
function Nt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function Yn(e, s) {
  const t = Nt(e ?? ""), n = Nt(s ?? "");
  if (t.length > Dt || n.length > Dt)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...n.map((h) => ({ kind: "add", text: h }))
    ];
  const l = t.length, o = n.length, r = new Int32Array((l + 1) * (o + 1)), i = (h, u) => h * (o + 1) + u;
  for (let h = l - 1; h >= 0; h -= 1)
    for (let u = o - 1; u >= 0; u -= 1)
      r[i(h, u)] = t[h] === n[u] ? r[i(h + 1, u + 1)] + 1 : Math.max(r[i(h + 1, u)], r[i(h, u + 1)]);
  const f = [];
  let v = 0, a = 0;
  for (; v < l && a < o; )
    t[v] === n[a] ? (f.push({ kind: "same", text: t[v] }), v += 1, a += 1) : r[i(v + 1, a)] >= r[i(v, a + 1)] ? (f.push({ kind: "del", text: t[v] }), v += 1) : (f.push({ kind: "add", text: n[a] }), a += 1);
  for (; v < l; )
    f.push({ kind: "del", text: t[v] }), v += 1;
  for (; a < o; )
    f.push({ kind: "add", text: n[a] }), a += 1;
  return f;
}
function Zn(e, s = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((o, r) => {
    if (o.kind !== "same")
      for (let i = Math.max(0, r - s); i <= Math.min(e.length - 1, r + s); i += 1)
        t[i] = !0;
  });
  const n = [];
  let l = 0;
  return e.forEach((o, r) => {
    t[r] ? (l > 0 && (n.push({ kind: "gap", count: l }), l = 0), n.push(o)) : l += 1;
  }), l > 0 && n.push({ kind: "gap", count: l }), n;
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
function Ct(e, s) {
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
function ie(e) {
  if (!e) return null;
  const s = Date.parse(e);
  return Number.isFinite(s) ? s : null;
}
function xn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function ls(e) {
  if (!e) return "-";
  const s = new Date(e);
  return Number.isNaN(s.getTime()) ? e : s.toLocaleString();
}
function os(e) {
  if (!e) return "-";
  const s = Date.parse(e);
  if (!Number.isFinite(s)) return e;
  const t = Date.now() - s;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(s).toLocaleString();
}
function wn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function wt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const kn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function Tn(e) {
  return e || "unknown";
}
const et = window.QwenPaw.host, c = et.React, { useEffect: rs, useRef: is, useState: _n } = c, { Button: Cn, Collapse: as, Empty: Pt, Tabs: Mt } = et.antd, { Text: H } = et.antd.Typography, { CopyOutlined: cs, CloseOutlined: us } = et.antdIcons, ds = 320, hs = 720, We = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, ms = 2e4;
function fs(e) {
  if (e.length > ms) return e;
  const s = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, l, o = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > n && s.push(e.slice(n, l.index));
    const r = l[0];
    let i = "rgba(128,128,128,1)";
    l[1] !== void 0 ? i = We.key : l[2] !== void 0 ? i = We.string : l[3] !== void 0 ? i = We.number : i = We.literal, s.push(
      /* @__PURE__ */ c.createElement("span", { key: o++, style: { color: i } }, r)
    ), n = l.index + r.length;
  }
  return n < e.length && s.push(e.slice(n)), s;
}
function ce({ value: e, json: s = !1 }) {
  const [t, n] = _n(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const o = async () => {
    try {
      await navigator.clipboard.writeText(l), n(!0), window.setTimeout(() => n(!1), 1500);
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
    s ? fs(l) : l
  ));
}
function $({
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
function Ft({
  input: e,
  output: s,
  cacheRead: t,
  cacheWrite: n,
  reasoning: l
}) {
  const o = Math.max(0, e - t - n), r = Math.max(0, s - l);
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Input", value: `${U(e)} tok` }), t ? /* @__PURE__ */ c.createElement($, { label: "Cached", value: `${U(t)} tok` }) : null, n ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Cache created",
      value: `${U(n)} tok`
    }
  ) : null, t || n ? /* @__PURE__ */ c.createElement($, { label: "Other", value: `${U(o)} tok` }) : null, /* @__PURE__ */ c.createElement($, { label: "Output", value: `${U(s)} tok` }), l ? /* @__PURE__ */ c.createElement($, { label: "Reasoning", value: `${U(l)} tok` }) : null, l ? /* @__PURE__ */ c.createElement($, { label: "Content", value: `${U(r)} tok` }) : null);
}
function dt({
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
const Bt = ["system", "user", "assistant", "tool"], ps = {
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
  const n = e.models[0], l = [], o = new Set(Bt), r = [
    ...Bt.filter((i) => t.charsByRole[i]),
    ...Object.keys(t.charsByRole).filter(
      (i) => !o.has(i) && t.charsByRole[i]
    )
  ];
  for (const i of r) {
    const f = t.charsByRole[i], v = ps[i] ?? "roleOther";
    l.push(
      /* @__PURE__ */ c.createElement(
        $,
        {
          key: i,
          label: g(s, v),
          value: `${U(f)} ${g(
            s,
            "charUnit"
          )} · ~${U(ns(f, n))} tok ${g(
            s,
            "estimatedTag"
          )}`
        }
      )
    );
  }
  return t.maxToolChars > 0 && l.push(
    /* @__PURE__ */ c.createElement(
      $,
      {
        key: "max-tool",
        label: g(s, "maxToolMsg"),
        value: `${U(t.maxToolChars)} ${g(
          s,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(H, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, g(s, "inputComposition")), l, /* @__PURE__ */ c.createElement(
    H,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    g(s, "estimateNote")
  ), e.growth ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    $,
    {
      label: g(s, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? g(s, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${U(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ c.createElement(
    $,
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
  const t = Y(), [n, l] = c.useState("summary"), o = /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Started", value: Ne(e.startedAt) }), /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Total",
      value: oe(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "First TTFT",
      value: oe(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Total decoding",
      value: oe(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ c.createElement(
    $,
    {
      label: g(t, "throughput"),
      value: Ct(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), r = /* @__PURE__ */ c.createElement(
    Ft,
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
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ c.createElement(
        $,
        {
          label: g(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ c.createElement($, { label: "Query", value: vs(e.query) }), /* @__PURE__ */ c.createElement(
        $,
        {
          label: g(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ c.createElement($, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ c.createElement(
        $,
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
      )) : null, e.options ? /* @__PURE__ */ c.createElement(dt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ c.createElement(ce, { value: e.options, json: !0 })) : null, /* @__PURE__ */ c.createElement(dt, { label: "Usage", onOpen: () => l("usage") }, r), /* @__PURE__ */ c.createElement(dt, { label: "Timing", onOpen: () => l("timing") }, o))
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
        Ft,
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
        children: /* @__PURE__ */ c.createElement(ce, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ c.createElement(
    Mt,
    {
      size: "small",
      activeKey: n,
      onChange: (f) => l(f),
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
  ), n = c.useMemo(() => qn(t), [t]), l = c.useMemo(() => Zn(t), [t]), o = Y();
  return e === void 0 ? /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, g(o, "noPrevPrompt")) : /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ c.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ c.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ c.createElement(
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
    l.map((r, i) => {
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
  var o;
  const s = Y(), t = e.headerTools ?? [], n = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: g(s, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "#", value: String(e.index) }), /* @__PURE__ */ c.createElement(
        $,
        {
          label: g(s, "status"),
          value: n ? g(s, "promptChanged") : g(s, "promptInitial")
        }
      ), /* @__PURE__ */ c.createElement($, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ c.createElement($, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ c.createElement($, { label: "Tools", value: String(t.length) }))
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
      children: /* @__PURE__ */ c.createElement(ce, { value: e.prompt })
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
              var v;
              const f = typeof r.name == "string" && r.name || typeof ((v = r.function) == null ? void 0 : v.name) == "string" && r.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ c.createElement(H, { code: !0, style: { fontSize: 11 } }, f),
                children: /* @__PURE__ */ c.createElement(ce, { value: r })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ c.createElement(ce, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ c.createElement(Mt, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function ht({ dragRef: e, width: s }) {
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
function mt({ onClose: e }) {
  return e ? /* @__PURE__ */ c.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ c.createElement(
    Cn,
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
  onSelectTurn: l,
  onClose: o
}) {
  const r = Y(), [i, f] = _n(400), v = is(null);
  if (rs(() => {
    const w = (N) => {
      const k = v.current;
      if (k === null) return;
      const d = k.anchorX - N.clientX;
      f(
        Math.min(hs, Math.max(ds, k.anchorWidth + d))
      );
    }, _ = () => {
      v.current = null;
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
      /* @__PURE__ */ c.createElement(ht, { dragRef: v, width: i }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: o }), /* @__PURE__ */ c.createElement(ys, { request: s, onJumpRecord: n }))
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
      /* @__PURE__ */ c.createElement(ht, { dragRef: v, width: i }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: o }), /* @__PURE__ */ c.createElement(Ss, { record: a }))
    );
  const h = a.usage, u = a.timing, x = [];
  return x.push({
    key: "summary",
    label: g(r, "summary"),
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "#", value: String(a.index) }), /* @__PURE__ */ c.createElement($, { label: "Kind", value: bn(a, r) }), a.runIndex > 0 && l ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(a.runIndex)
      },
      "Request #",
      a.runIndex,
      " →"
    )) : null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(r, "status"),
        value: a.running ? g(r, "running") : a.isError ? g(r, "error") : g(r, "success"),
        danger: a.isError
      }
    ), a.provider ? /* @__PURE__ */ c.createElement($, { label: "Provider", value: a.provider }) : null, a.model ? /* @__PURE__ */ c.createElement($, { label: g(r, "model"), value: a.model }) : null, a.toolName ? /* @__PURE__ */ c.createElement($, { label: "Tool", value: a.toolName }) : null, a.toolOutputChars ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(r, "outputSize"),
        value: a.toolOutputBytes ? `${U(a.toolOutputChars)} ${g(
          r,
          "charUnit"
        )} · ${wt(a.toolOutputBytes)} (${g(
          r,
          "beforeTruncation"
        )})` : `${U(a.toolOutputChars)} ${g(
          r,
          "charUnit"
        )}`
      }
    ) : null, a.kind === "user" && (a.channel || a.userId) ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(r, "source"),
        value: [a.channel, a.userId].filter(Boolean).join(" · ")
      }
    ) : null, a.receipt ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(r, "channel"),
        value: a.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(r, "duration"),
        value: oe(a.timeSeconds)
      }
    ), a.note ? /* @__PURE__ */ c.createElement(H, { type: "warning", style: { fontSize: 12 } }, a.note) : null, a.spawnSession ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(r, "spawnedAgent"),
        value: a.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ c.createElement(
      Cn,
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
    children: /* @__PURE__ */ c.createElement(ce, { value: a.toolInput, json: !0 })
  }), (a.toolOutput || a.toolError) && x.push({
    key: "result",
    label: g(r, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, a.toolError ? /* @__PURE__ */ c.createElement(H, { type: "danger", style: { fontSize: 12 } }, a.toolError) : null, a.toolOutput ? /* @__PURE__ */ c.createElement(ce, { value: a.toolOutput }) : null)
  })) : (a.outputText || a.thinkingText || a.messages || a.marker || a.toolCalls && a.toolCalls.length > 0) && (a.inputNew && a.inputNew.length > 0 && x.push({
    key: "input",
    label: g(r, "inputTab"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, a.contextReset ? /* @__PURE__ */ c.createElement(H, { type: "warning", style: { fontSize: 12 } }, g(r, "contextReset")) : null, a.messagesMeta ? /* @__PURE__ */ c.createElement(
      $,
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
    ), w.text ? /* @__PURE__ */ c.createElement(ce, { value: w.text }) : null)))
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
    ))) : null, a.marker ? /* @__PURE__ */ c.createElement(ce, { value: a.marker }) : null, a.toolCalls && a.toolCalls.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, `${g(r, "toolCall")} (${a.toolCalls.length})`), a.toolCalls.map((w, _) => /* @__PURE__ */ c.createElement("div", { key: w.id || _, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ c.createElement(H, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", w.name), /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 11 } }, w.id)))) : null, a.note ? /* @__PURE__ */ c.createElement(H, { type: "warning", style: { fontSize: 12 } }, a.note) : null, a.messages && a.messages.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, `${g(r, "query")} (${a.messages.length})`), a.messages.map((w, _) => /* @__PURE__ */ c.createElement(
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
    ))) : null, a.thinkingText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, g(r, "thinking")), /* @__PURE__ */ c.createElement(ce, { value: a.thinkingText })) : null, a.outputText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, g(r, "output")), /* @__PURE__ */ c.createElement(ce, { value: a.outputText })) : null)
  })), (a.startedAt !== null || h || u) && x.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Started", value: Ne(a.startedAt) }), /* @__PURE__ */ c.createElement($, { label: "Total", value: oe(a.timeSeconds) }), u ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: "TTFT",
        value: oe(u.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Decoding",
        value: oe(u.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(r, "throughput"),
        value: Ct(
          h == null ? void 0 : h.output_tokens,
          u.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ c.createElement(H, { type: "secondary", style: { fontSize: 12 } }, g(r, "noTiming")))
  }), h && x.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Input", value: U(h.input_tokens) }), /* @__PURE__ */ c.createElement($, { label: "Output", value: U(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Cache write",
        value: U(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Cache read",
        value: U(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ c.createElement($, { label: "Total", value: U(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ c.createElement($, { label: "API time", value: oe(h.time) }) : null)
  }), x.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ c.createElement(ce, { value: a.raw })
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
    /* @__PURE__ */ c.createElement(ht, { dragRef: v, width: i }),
    /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: o }), /* @__PURE__ */ c.createElement(Mt, { size: "small", items: x, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Z = window.QwenPaw.host.React, xs = Z.useRef, ws = Z.useState;
Z.useCallback;
Z.useMemo;
const ks = Z.useEffect, Ts = Z.useLayoutEffect, _s = Z.useReducer;
Z.createContext;
Z.useContext;
Z.createElement;
Z.cloneElement;
Z.isValidElement;
Z.memo;
Z.forwardRef;
Z.Fragment;
Z.StrictMode;
Z.version;
function Cs(e) {
  return e ? e() : void 0;
}
function Ms(e, s, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(l, o, r) {
      if (typeof o == "string") {
        const i = o.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const f = +o;
          if (Number.isInteger(f) && f >= 0 && f < e) {
            let v = l[f];
            if (!v) {
              const a = s[f * 2];
              v = l[f] = {
                index: f,
                key: t(f),
                start: a,
                size: s[f * 2 + 1],
                end: a + s[f * 2 + 1],
                lane: 0
              };
            }
            return v;
          }
        }
        if (o === "length") return e;
      }
      return Reflect.get(l, o, r);
    }
  });
}
function Te(e, s, t) {
  let n = t.initialDeps ?? [], l, o = !0;
  function r() {
    var i;
    const f = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let v = 0;
    f && (v = Date.now());
    const a = e();
    if (!(a.length !== n.length || a.some((x, w) => n[w] !== x)))
      return l;
    n = a;
    let u = 0;
    if (f && (u = Date.now()), l = s(...a), f) {
      const x = Math.round((Date.now() - v) * 100) / 100, w = Math.round((Date.now() - u) * 100) / 100, _ = w / 16, N = (k, d) => {
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
    return t != null && t.onChange && !(o && t.skipInitialOnChange) && t.onChange(l), o = !1, l;
  }
  return r.updateDeps = (i) => {
    n = i;
  }, r;
}
function Ht(e, s) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Is = (e, s) => Math.abs(e - s) < 1.01, zs = (e, s, t) => {
  let n;
  return function(...l) {
    e.clearTimeout(n), n = e.setTimeout(() => s.apply(this, l), t);
  };
};
let je;
const ft = () => {
  if (je !== void 0) return je;
  if (typeof navigator > "u") return je = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return je = !0;
  const e = navigator.maxTouchPoints;
  return je = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Ut = (e) => {
  const { offsetWidth: s, offsetHeight: t } = e;
  return { width: s, height: t };
}, Os = (e) => e, $s = (e) => {
  const s = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - s + 1, l = new Array(n);
  for (let o = 0; o < n; o++)
    l[o] = s + o;
  return l;
}, As = (e, s) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const l = (r) => {
    const { width: i, height: f } = r;
    s({ width: Math.round(i), height: Math.round(f) });
  };
  if (l(Ut(t)), !n.ResizeObserver)
    return () => {
    };
  const o = new n.ResizeObserver((r) => {
    const i = () => {
      const f = r[0];
      if (f != null && f.borderBoxSize) {
        const v = f.borderBoxSize[0];
        if (v) {
          l({ width: v.inlineSize, height: v.blockSize });
          return;
        }
      }
      l(Ut(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, Ye = {
  passive: !0
}, Rs = typeof window > "u" ? !0 : "onscrollend" in window, Ls = (e, s, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && Rs;
  let r = 0;
  const i = o ? null : zs(
    l,
    () => s(r, !1),
    e.options.isScrollingResetDelay
  ), f = (h) => () => {
    r = t(n), i == null || i(), s(r, h);
  }, v = f(!0), a = f(!1);
  return n.addEventListener("scroll", v, Ye), o && n.addEventListener("scrollend", a, Ye), () => {
    n.removeEventListener("scroll", v), o && n.removeEventListener("scrollend", a);
  };
}, js = (e, s) => Ls(e, s, (t) => {
  const { horizontal: n, isRtl: l } = e.options;
  return n ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), Ds = (e, s, t) => {
  if (t.options.useCachedMeasurements) {
    const n = t.indexFromElement(e), l = t.options.getItemKey(n);
    return t.itemSizeCache.get(l) ?? t.options.estimateSize(n);
  }
  if (s != null && s.borderBoxSize) {
    const n = s.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!s) {
    const n = t.indexFromElement(e), l = t.options.getItemKey(n), o = t.itemSizeCache.get(l);
    if (o !== void 0)
      return o;
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ns = (e, {
  adjustments: s = 0,
  behavior: t
}, n) => {
  var l, o;
  (o = (l = n.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [n.options.horizontal ? "left" : "top"]: e + s,
    behavior: t
  });
}, Ps = Ns;
class Fs {
  constructor(s) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, l;
      return ((l = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : l.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const r = () => {
            const i = o.target, f = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [v, a] of this.elementsCache)
                if (a === i) {
                  this.elementsCache.delete(v);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(f) && this.resizeItem(
              f,
              this.options.measureElement(i, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = n()) == null || l.disconnect(), t = null;
        },
        observe: (l) => {
          var o;
          return (o = n()) == null ? void 0 : o.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var o;
          return (o = n()) == null ? void 0 : o.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var n, l;
      const o = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Os,
        rangeExtractor: $s,
        onChange: () => {
        },
        measureElement: Ds,
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
        x !== void 0 && (o[u] = x);
      }
      const r = this.options;
      let i = null, f = null, v = !1;
      if (r !== void 0 && r.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const u = r.count, x = o.count, w = this.getMeasurements(), _ = u > 0 ? ((n = w[0]) == null ? void 0 : n.key) ?? r.getItemKey(0) : null, N = u > 0 ? ((l = w[u - 1]) == null ? void 0 : l.key) ?? r.getItemKey(u - 1) : null;
        if (x !== u || u > 0 && x > 0 && (o.getItemKey(0) !== _ || o.getItemKey(x - 1) !== N)) {
          v = !0;
          const m = u > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? w[0] : null;
          m && (i = [m.key, this.getScrollOffset() - m.start]);
          const p = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          p && x > u && this.isAtEnd(r.scrollEndThreshold) && (u === 0 || o.getItemKey(x - 1) !== N) && (f = p);
        }
      }
      this.options = o, v && (this.pendingMin = 0, this.itemSizeCacheVersion++);
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
      (a || f) && (this.pendingScrollAnchor = [
        a ? i[0] : null,
        a ? i[1] : 0,
        f,
        h
      ]);
    }, this.notify = (t) => {
      var n, l;
      (l = (n = this.options).onChange) == null || l.call(n, this, t);
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
        if (this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((o) => {
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
            const i = this.getScrollOffset();
            this.scrollDirection = r ? i === o ? this.scrollDirection : i < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = r, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, r = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, i = () => {
            this._iosTouching = !1, !(!ft() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            r,
            Ye
          ), o.addEventListener(
            "touchend",
            i,
            Ye
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", r), o.removeEventListener("touchend", i), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, r, i, f] = l;
        o !== null && !i && (ft() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? f !== 0 && (this._iosDeferredAdjustment += f) : this._scrollToOffset(this.getScrollOffset(), {
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
      const l = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, {
        adjustments: this.scrollAdjustments += l,
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
      (t, n, l, o, r, i, f, v) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: i,
        laneAssignmentMode: f,
        gap: v
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Te(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: i,
        laneAssignmentMode: f,
        gap: v
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
            const S = new Float64Array(k);
            d && u > 0 && S.set(d.subarray(0, u * 2)), d = S, this._flatMeasurements = d;
          }
          let m;
          if (u === 0)
            m = n + l;
          else {
            const S = u - 1;
            m = d[S * 2] + d[S * 2 + 1] + v;
          }
          for (let S = u; S < t; S++) {
            const C = o(S), b = h.get(C), A = typeof b == "number" ? b : this.options.estimateSize(S);
            d[S * 2] = m, d[S * 2 + 1] = A, m += A + v;
          }
          const p = Ms(t, d, o);
          return this.measurementsCache = p, p;
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
          const d = o(k), m = this.laneAssignments.get(k);
          let p, S;
          const C = f === "estimate" || h.has(d);
          if (m !== void 0 && this.options.lanes > 1) {
            p = m;
            const z = w[p], D = z !== void 0 ? x[z] : void 0;
            S = D ? D.end + v : n + l;
          } else if (N === i) {
            let z = 0, D = _[0], se = w[0];
            for (let P = 1; P < i; P++) {
              const X = _[P];
              (X < D || X === D && w[P] < se) && (z = P, D = X, se = w[P]);
            }
            p = z, S = D + v, C && this.laneAssignments.set(k, p);
          } else
            p = k % this.options.lanes, S = n + l, C && this.laneAssignments.set(k, p);
          const b = h.get(d), A = typeof b == "number" ? b : this.options.estimateSize(k), O = S + A;
          x[k] = {
            index: k,
            start: S,
            size: A,
            end: O,
            key: d,
            lane: p
          }, w[p] === void 0 && N++, w[p] = k, _[p] = O;
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
      (t, n, l, o) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = Hs(
        t,
        n,
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
    ), this.getVirtualIndexes = Te(
      () => {
        let t = null, n = null;
        const l = this.calculateRange();
        return l && (t = l.startIndex, n = l.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, l, o, r) => o === null || r === null ? [] : t({
        startIndex: o,
        endIndex: r,
        overscan: n,
        count: l
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, l = t.getAttribute(n);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var n;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const l = this.scrollState.index ?? ((n = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : n.index);
      if (l !== void 0 && this.range) {
        const o = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), r = Math.max(0, l - o), i = Math.min(
          this.options.count - 1,
          l + o
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
      const n = this.indexFromElement(t), l = this.options.getItemKey(n), o = this.elementsCache.get(l);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var l, o;
      if (t < 0 || t >= this.options.count) return;
      let r, i, f;
      const v = this._flatMeasurements;
      if (this.options.lanes === 1 && v !== null)
        f = this.options.getItemKey(t), i = v[t * 2], r = v[t * 2 + 1];
      else {
        const u = this.measurementsCache[t];
        if (!u) return;
        f = u.key, i = u.start, r = u.size;
      }
      const a = this.itemSizeCache.get(f) ?? r, h = n - a;
      if (h !== 0) {
        const u = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, x = u ? this.getTotalSize() : 0, w = this.getScrollOffset() + this.scrollAdjustments, N = !this.itemSizeCache.has(f) ? (
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
        ), k = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
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
        ) : N);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(f, n), this.itemSizeCacheVersion++;
        let d = !1;
        u ? d = this.applyScrollAdjustment(
          this.getTotalSize() - x
        ) : k && (d = this.applyScrollAdjustment(h)), this.notify(d);
      }
    }, this.getVirtualItems = Te(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const l = [];
        for (let o = 0, r = t.length; o < r; o++) {
          const i = t[o], f = n[i];
          l.push(f);
        }
        return l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length === 0)
        return;
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, r = Mn(
        0,
        n.length - 1,
        o ? (i) => l[i * 2] : (i) => Ht(n[i]).start,
        t
      );
      return Ht(n[r]);
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
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (t = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= t, this.getOffsetForAlignment = (t, n, l = 0) => {
      if (!this.scrollElement) return 0;
      const o = this.getSize(), r = this.getScrollOffset();
      n === "auto" && (n = t >= r + o ? "end" : "start"), n === "center" ? t += (l - o) / 2 : n === "end" && (t -= o);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getSize(), o = this.getScrollOffset(), r = this.measurementsCache[t];
      if (!r) return;
      if (n === "auto")
        if (r.end >= o + l - this.options.scrollPaddingEnd)
          n = "end";
        else if (r.start <= o + this.options.scrollPaddingStart)
          n = "start";
        else
          return [o, n];
      if (n === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const i = n === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, n, r.size),
        n
      ];
    }, this.scrollToOffset = (t, { align: n = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(t, n), r = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: l,
        startedAt: r,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: n = "auto",
      behavior: l = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const o = this.getOffsetForIndex(t, n);
      if (!o)
        return;
      const [r, i] = o, f = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: l,
        startedAt: f,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: n = "auto" } = {}) => {
      const l = this.getScrollOffset() + t, o = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: n,
        startedAt: o,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
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
      let l;
      if (n.length === 0)
        l = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const o = n.length - 1, r = this._flatMeasurements;
        r != null ? l = r[o * 2] + r[o * 2 + 1] : l = ((t = n[o]) == null ? void 0 : t.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let r = n.length - 1;
        for (; r >= 0 && o.some((i) => i === null); ) {
          const i = n[r];
          o[i.lane] === null && (o[i.lane] = i.end), r--;
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
      const n = this.getMeasurements();
      for (const l of n)
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
      adjustments: n,
      behavior: l
    }) => {
      this._intendedScrollOffset = t + (n ?? 0), this.options.scrollToFn(t, { behavior: l, adjustments: n }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(s);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(s, t) {
    return s === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), ft() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += s, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = n ? n[0] : this.scrollState.lastTargetOffset, o = 1, r = l !== this.scrollState.lastTargetOffset;
    if (!r && Is(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, r) {
      const i = this.getSize() || 600, f = Math.abs(l - this.getScrollOffset()), v = this.scrollState.behavior === "smooth" && f > i;
      this.scrollState.lastTargetOffset = l, v || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: v ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const Mn = (e, s, t, n) => {
  for (; e <= s; ) {
    const l = (e + s) / 2 | 0, o = t(l);
    if (o < n)
      e = l + 1;
    else if (o > n)
      s = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function Bs(e, s, t) {
  let n = 0;
  for (; n <= s; ) {
    const l = (n + s) / 2 | 0, o = e[l * 2];
    if (o < t)
      n = l + 1;
    else if (o > t)
      s = l - 1;
    else
      return l;
  }
  return n > 0 ? n - 1 : 0;
}
function Hs(e, s, t, n, l) {
  const o = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: o };
  if (n === 1 && l !== null) {
    const v = Bs(
      l,
      o,
      t
    );
    let a = v;
    const h = t + s;
    for (; a < o && l[a * 2] + l[a * 2 + 1] < h; )
      a++;
    return { startIndex: v, endIndex: a };
  }
  let i = Mn(0, o, (v) => e[v].start, t), f = i;
  if (n === 1)
    for (; f < o && e[f].end < t + s; )
      f++;
  else if (n > 1) {
    const v = Array(n).fill(0);
    for (; f < o && v.some((h) => h < t + s); ) {
      const h = e[f];
      v[h.lane] = h.end, f++;
    }
    const a = Array(n).fill(t + s);
    for (; i >= 0 && a.some((h) => h >= t); ) {
      const h = e[i];
      a[h.lane] = h.start, i--;
    }
    i = Math.max(0, i - i % n), f = Math.min(o, f + (n - 1 - f % n));
  }
  return { startIndex: i, endIndex: f };
}
const pt = typeof document < "u" ? Ts : ks;
function Us({
  useFlushSync: e = !0,
  directDomUpdates: s = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const l = _s((a) => a + 1, 0)[1], o = xs({
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
  o.current.enabled = s, o.current.mode = t;
  const r = (a) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    const u = a.getTotalSize();
    if (u !== h.lastSize) {
      h.lastSize = u;
      const x = a.options.horizontal ? "width" : "height";
      h.container.style[x] = `${u}px`;
    }
  }, i = (a) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    r(a);
    const u = !!a.options.horizontal, x = h.mode === "transform", w = u ? "left" : "top", _ = a.options.scrollMargin, N = a.getVirtualItems();
    for (const k of N) {
      const d = k.start - _, m = a.elementsCache.get(k.key);
      m && h.lastPositions.get(m) !== d && (h.lastPositions.set(m, d), x ? m.style.transform = u ? `translate3d(${d}px, 0, 0)` : `translate3d(0, ${d}px, 0)` : m.style[w] = `${d}px`);
    }
  }, f = {
    ...n,
    onChange: (a, h) => {
      var u;
      const x = o.current;
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
      w && (e && h ? Cs(l) : l()), (u = n.onChange) == null || u.call(n, a, h);
    }
  }, [v] = ws(() => {
    const a = new Fs(f);
    return Object.assign(a, {
      containerRef: (h) => {
        const u = o.current;
        if (u.container = h, u.lastSize = null, h && u.enabled) {
          const x = a.getTotalSize();
          u.lastSize = x;
          const w = a.options.horizontal ? "width" : "height";
          h.style[w] = `${x}px`;
        }
      }
    });
  });
  return v.setOptions(f), pt(() => v._didMount(), []), pt(() => (r(v), v._willUpdate())), pt(() => {
    i(v);
  }), v;
}
function Ws(e) {
  return Us({
    observeElementRect: As,
    observeElementOffset: js,
    scrollToFn: Ps,
    ...e
  });
}
const tt = window.QwenPaw.host, M = tt.React, { useRef: Ks } = M, { Tag: Ze } = tt.antd, { Text: le } = tt.antd.Typography, {
  CaretRightOutlined: Vs,
  CloseCircleOutlined: Xs,
  FileTextOutlined: Gs,
  RobotOutlined: Js,
  RocketOutlined: Qs,
  SafetyOutlined: Ys,
  SendOutlined: Zs,
  SettingOutlined: qs,
  ToolOutlined: el,
  UserOutlined: tl
} = tt.antdIcons, nl = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, sl = {
  user: /* @__PURE__ */ M.createElement(tl, null),
  message: /* @__PURE__ */ M.createElement(Js, null),
  tool: /* @__PURE__ */ M.createElement(el, null),
  system: /* @__PURE__ */ M.createElement(qs, null)
}, Wt = {
  approval: { color: "volcano", icon: /* @__PURE__ */ M.createElement(Ys, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ M.createElement(Zs, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ M.createElement(Qs, null) },
  header: { color: "green", icon: /* @__PURE__ */ M.createElement(Gs, null) },
  error: { color: "red", icon: /* @__PURE__ */ M.createElement(Xs, null) }
}, ll = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Kt = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, ol = 150, kt = 26, In = 34, Vt = 9, Xt = 30;
function rl(e) {
  const s = Y(), t = Kt[e] ?? Kt.unknown;
  return s === "zh-CN" ? t.zh : t.en;
}
const il = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function al(e, s) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.inboundParts ?? []) {
    const l = il[n.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([n, l]) => `${g(s, n)}×${l}`).join(" ");
}
function cl(e, s) {
  const t = e.receipt, n = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${g(s, "replySent")}${n} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${g(s, "chars")}`;
}
function Gt({
  record: e,
  selected: s,
  dimmed: t,
  multiRequest: n,
  onSelect: l
}) {
  var i, f;
  const o = e.usage, r = o && (o.input_tokens || o.output_tokens) ? `${U(o.input_tokens)}→${U(
    o.output_tokens
  )}` : null;
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      className: "at-ledger-row",
      "data-kind": e.kind,
      "data-error": e.isError || void 0,
      "data-running": e.running || void 0,
      "data-selected": s || void 0,
      "data-dimmed": t || void 0,
      onClick: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: kt,
        cursor: "pointer",
        background: s ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1
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
      n && /* @__PURE__ */ M.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ M.createElement(
      Ze,
      {
        color: e.skillName ? "geekblue" : e.markerKind && ((i = Wt[e.markerKind]) == null ? void 0 : i.color) || nl[e.kind] || "default",
        icon: e.markerKind && ((f = Wt[e.markerKind]) == null ? void 0 : f.icon) || sl[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.skillName ? g(Y(), "skillLoadKind") : bn(e, Y())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ M.createElement(
      Ze,
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
      e.receipt ? /* @__PURE__ */ M.createElement(le, { type: "secondary", style: { fontSize: 12 } }, cl(e, Y())) : e.skillName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(le, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ M.createElement(le, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ M.createElement(le, { type: "secondary", style: { fontSize: 12 } }, ` · ${g(Y(), "skillLoaded")} ${U(
        e.toolOutputChars
      )} ${g(Y(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(le, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ M.createElement(le, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ M.createElement(
        le,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(
        le,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(le, { type: "secondary", style: { fontSize: 11 } }, ` ${al(e, Y()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ M.createElement(le, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
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
      r ? /* @__PURE__ */ M.createElement("span", { style: { color: "#1677ff" } }, r) : null,
      r ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && oe(e.timeSeconds)
    )
  );
}
function ul({
  turn: e,
  collapsed: s,
  selected: t,
  cellCount: n,
  onToggle: l,
  onSelect: o
}) {
  const r = Y();
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: In }
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
        Vs,
        {
          onClick: (i) => {
            i.stopPropagation(), l();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: s ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ M.createElement(le, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ M.createElement(le, { type: "secondary", style: { fontSize: 11 } }, oe(e.durationMs / 1e3)),
      /* @__PURE__ */ M.createElement(le, { type: "secondary", style: { fontSize: 11 } }, n, " ", g(r, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? /* @__PURE__ */ M.createElement(
        Ze,
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
        Ze,
        {
          color: ll[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        rl(e.status)
      )
    )
  );
}
function dl({
  turns: e,
  selectedIndex: s,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: r,
  onSelectedTurnChange: i,
  onToggleTurn: f,
  callsCollapsed: v,
  hasOlderRecords: a,
  loadingOlder: h,
  onLoadOlder: u,
  initialRecord: x,
  emptyText: w
}) {
  const _ = Y(), N = Ks(null), k = e.filter((b) => b.turn !== null), d = k.length > 1, m = M.useMemo(() => {
    var A;
    const b = [];
    a && b.push({
      key: "load-older",
      height: Xt,
      type: "load-older"
    }), x && (b.push({
      key: "initial",
      height: kt,
      type: "initial",
      record: x
    }), b.push({
      key: "initial-divider",
      height: Vt,
      type: "divider"
    }));
    for (const O of k) {
      const z = O.turn;
      if (b.push({
        key: `turn-${z}`,
        height: In,
        type: "boundary",
        turn: O
      }), !n.has(z))
        for (const D of ((A = O.groups[0]) == null ? void 0 : A.cells) ?? [])
          v && D.kind === "tool" || b.push({
            key: `rec-${D.index}`,
            height: kt,
            type: "record",
            record: D
          });
    }
    return b;
  }, [
    k,
    n,
    v,
    a,
    x
  ]), p = M.useCallback(
    (b) => l !== null && !l.has(b.index) || o !== null && !o.has(b.index),
    [l, o]
  ), S = (b) => {
    var A;
    switch (b.type) {
      case "load-older":
        return /* @__PURE__ */ M.createElement("div", { style: { textAlign: "center", height: Xt } }, /* @__PURE__ */ M.createElement(
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
        return /* @__PURE__ */ M.createElement(
          "div",
          {
            style: {
              height: Vt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const O = b.record;
        return /* @__PURE__ */ M.createElement(
          Gt,
          {
            record: O,
            selected: s === O.index,
            dimmed: p(O),
            multiRequest: d,
            onSelect: () => r(O.index)
          }
        );
      }
      case "boundary": {
        const O = b.turn, z = O.turn;
        return /* @__PURE__ */ M.createElement(
          ul,
          {
            turn: O,
            collapsed: n.has(z),
            selected: t === z,
            cellCount: ((A = O.groups[0]) == null ? void 0 : A.cells.length) ?? 0,
            onToggle: () => f(z),
            onSelect: () => i(z)
          }
        );
      }
      case "record":
      default: {
        const O = b.record;
        return /* @__PURE__ */ M.createElement(
          Gt,
          {
            record: O,
            selected: s === O.index,
            dimmed: p(O),
            multiRequest: d,
            onSelect: () => r(O.index)
          }
        );
      }
    }
  };
  if (m.length === 0)
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
        w ?? g(_, "noSessions")
      )
    );
  const C = m.length <= ol ? /* @__PURE__ */ M.createElement("div", null, m.map((b) => S(b))) : /* @__PURE__ */ M.createElement(
    hl,
    {
      rows: m,
      scrollRef: N,
      renderRow: S
    }
  );
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      ref: N,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    C
  );
}
function hl({
  rows: e,
  scrollRef: s,
  renderRow: t
}) {
  const n = Ws({
    count: e.length,
    getScrollElement: () => s.current,
    estimateSize: (l) => e[l].height,
    overscan: 12
  });
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      style: {
        height: n.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    n.getVirtualItems().map((l) => /* @__PURE__ */ M.createElement(
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
function gt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function Jt(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? !1 : Object.values(e).every(
    (s) => typeof s == "number" && Number.isFinite(s)
  );
}
function ml(e) {
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
function fl(e) {
  if (!(typeof e != "string" || !e))
    try {
      const s = JSON.parse(e);
      if (typeof s.skill == "string" && s.skill)
        return s.skill;
    } catch {
    }
}
function fe(e, s = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function pl(e) {
  var k;
  const s = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = [];
  let i = "";
  const f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  let h = 0, u = 0;
  const x = (d) => d.groups[0].cells, w = (d, m) => {
    const p = o.get(d);
    p ? p.push(m) : o.set(d, [m]);
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
      S ? (m.runIndex = S.turn ?? 0, x(S).push(m)) : w(d, m);
    } else
      w(d, m);
  }, N = (d, m) => {
    const p = o.get(m);
    if (p) {
      for (const S of p) x(d).push(S);
      o.delete(m);
    }
  };
  for (const d of e) {
    const m = gt(d);
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
        t.set(d.run_id, p), s.push(p), i = d.run_id, N(p, d.run_id);
        for (const A of r.splice(0))
          A.runIndex = u, x(p).push(A);
        const S = Array.isArray(m.messages) ? m.messages : [], C = String(m.query ?? ""), b = {
          index: ++h,
          runIndex: u,
          runId: d.run_id,
          kind: "user",
          text: fe(C) || fe((k = S.at(-1)) == null ? void 0 : k.text),
          messages: S,
          timeSeconds: 0,
          startedAt: ie(d.t),
          isError: !1,
          running: !1,
          model: void 0
        };
        v.set(d.run_id, b), x(p).push(b);
        break;
      }
      case "run/end": {
        const p = t.get(d.run_id);
        i === d.run_id && (i = ""), f.delete(d.run_id), v.delete(d.run_id);
        const S = String(m.status ?? "unknown");
        if (p && (p.status = S, p.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), S === "error" && m.error) {
          const C = p ?? {
            turn: null,
            status: S,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          p || s.push(C), C.groups[0].cells.push({
            index: ++h,
            runIndex: u,
            runId: d.run_id,
            kind: "system",
            markerKind: "error",
            text: fe(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: ie(d.t),
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
          startedAt: ie(d.t),
          isError: !1,
          running: !1,
          spawnSession: p,
          spawnAgent: S,
          raw: [d]
        });
        break;
      }
      case "message/inbound": {
        const p = Array.isArray(m.parts) ? m.parts : [], S = m.channel_meta && typeof m.channel_meta == "object" ? m.channel_meta : void 0, C = p.map((D) => ({
          type: String(D.type ?? "?"),
          text: typeof D.text == "string" ? D.text : void 0
        })), b = f.get(d.run_id) ?? "", A = S && typeof S.user_id == "string" && S.user_id ? S.user_id : void 0, O = fe(
          C.map((D) => D.text ?? "").filter(Boolean).join(`
`)
        ), z = v.get(d.run_id);
        z && !z.inboundParts ? (z.inboundParts = C, z.channel = b || void 0, z.userId = A, z.raw = [
          ...z.raw ?? [],
          d
        ], z.text || (z.text = O)) : _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "user",
          text: O || "📥",
          timeSeconds: 0,
          startedAt: ie(d.t),
          isError: !1,
          running: !1,
          channel: b || void 0,
          userId: A,
          inboundParts: C,
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
          startedAt: ie(d.t),
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
          startedAt: ie(d.t),
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
          startedAt: ie(d.t),
          isError: p === "denied",
          running: !1,
          raw: [d]
        });
        break;
      }
      case "llm/header": {
        const p = typeof m.sha256 == "string" ? m.sha256 : "", S = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, C = m.reason === "changed" ? "changed" : "initial", b = typeof m.system_prompt == "string" ? m.system_prompt : "", A = Array.isArray(m.tools) ? m.tools : [], O = Array.isArray(m.schemas) ? m.schemas : void 0;
        _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "header",
          text: C === "initial" ? `⚙ ${b ? `System Prompt (${b.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ie(d.t),
          isError: !1,
          running: !1,
          prompt: b,
          prevPrompt: a.get(S ?? ""),
          headerTools: A,
          headerReason: C,
          sha: p,
          prevSha: S,
          schemas: O,
          raw: [d]
        }), p && a.set(p, b);
        break;
      }
      case "llm/call": {
        const p = gt(d), S = p.options && typeof p.options == "object" && Object.keys(p.options).length > 0 ? p.options : void 0, C = p.messages_meta, b = C && typeof C == "object" ? {
          count: typeof C.count == "number" ? C.count : 0,
          totalChars: typeof C.total_chars == "number" ? C.total_chars : 0,
          charsByRole: Jt(C.chars_by_role) ? C.chars_by_role : {},
          countByRole: Jt(C.count_by_role) ? C.count_by_role : {},
          maxToolChars: typeof C.max_tool_chars == "number" ? C.max_tool_chars : 0
        } : void 0, A = {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ie(d.t),
          isError: !1,
          running: !0,
          model: String(p.model ?? "unknown"),
          provider: typeof p.provider == "string" && p.provider ? p.provider : void 0,
          messagesMeta: b,
          inputNew: ml(p.messages_new),
          contextReset: p.context_reset === !0,
          options: S
        };
        _(d.run_id, A);
        const O = n.get(d.run_id) ?? [];
        O.push({ cell: A, callData: p, call: d }), n.set(d.run_id, O);
        break;
      }
      case "llm/result": {
        const p = n.get(d.run_id), S = p == null ? void 0 : p.shift(), C = (S == null ? void 0 : S.callData) ?? {}, b = typeof m.duration_ms == "number" ? m.duration_ms : null, A = m.usage ?? void 0, O = m.timing, z = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, P = {
          text: (m.error ? fe(String(m.error)) : fe(String(m.text ?? ""))) || (z && z.length > 0 ? `🛠 ${z.map((X) => X.name).join(", ")}` : ""),
          timeSeconds: b === null ? null : b / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: A,
          timing: O,
          toolCalls: z,
          note: m.note ? String(m.note) : void 0
        };
        S ? (Object.assign(S.cell, P), S.cell.model = String(
          m.model ?? C.model ?? S.cell.model
        ), S.cell.raw = [
          ...S.call ? [S.call] : [],
          d
        ]) : _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          startedAt: ie(d.t),
          model: String(m.model ?? C.model ?? "unknown"),
          ...P
        });
        break;
      }
      case "tool/call": {
        const p = gt(d), S = String(p.name ?? "?"), C = S === "Skill" ? fl(p.input) : void 0, b = {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: C ? `📚 ${C}` : `${S}(${fe(String(p.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: ie(d.t),
          isError: !1,
          running: !0,
          toolName: S,
          skillName: C,
          toolInput: p.input ? String(p.input) : void 0
        };
        _(d.run_id, b);
        const A = l.get(d.run_id) ?? [];
        A.push({ cell: b, callData: p, call: d }), l.set(d.run_id, A);
        break;
      }
      case "tool/result": {
        const p = l.get(d.run_id), S = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let C;
        if (p) {
          const se = S ? p.findIndex(
            (P) => P.callData.tool_call_id === S
          ) : -1;
          se >= 0 ? C = p.splice(se, 1)[0] : C = p.shift();
        }
        const b = typeof m.duration_ms == "number" ? m.duration_ms : null, A = m.ok !== !1 && !m.error, O = m.output ? String(m.output) : void 0, z = O ? ` → ${fe(O, 60)}` : "", D = {
          timeSeconds: b === null ? null : b / 1e3,
          isError: !A,
          running: !1,
          toolOutput: O,
          toolOutputChars: typeof m.output_chars == "number" ? m.output_chars : void 0,
          toolOutputBytes: typeof m.output_bytes == "number" ? m.output_bytes : void 0,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        C ? (Object.assign(C.cell, D), C.cell.skillName || (C.cell.text = `${C.cell.text}${z}`), C.cell.raw = [
          ...C.call ? [C.call] : [],
          d
        ]) : _(d.run_id, {
          index: ++h,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `?${z}`,
          startedAt: ie(d.t),
          ...D
        });
        break;
      }
    }
  }
  for (const [d, m] of o) {
    const p = t.get(d);
    if (p) {
      for (const S of m) x(p).push(S);
      o.delete(d);
    }
  }
  for (const d of s) {
    const m = [];
    for (const p of d.groups)
      for (const S of p.cells)
        S.skillName && !m.includes(S.skillName) && m.push(S.skillName);
    m.length > 0 && (d.skillsUsed = m);
  }
  return s;
}
function Qt(e) {
  return e.flatMap((s) => s.groups.flatMap((t) => t.cells));
}
function gl(e) {
  var r;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const s = e[0], t = ((r = s.groups[0]) == null ? void 0 : r.cells) ?? [], n = t.findIndex(
    (i) => i.kind === "system" && i.headerReason === "initial" && i.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const l = t[n], o = {
    ...s,
    groups: [
      {
        ...s.groups[0],
        cells: t.filter((i, f) => f !== n)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const te = {
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
}, Yt = "agent-trace-timeline-styles", yl = `
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
let yt = !1;
function vl() {
  if (yt || typeof document > "u") return;
  if (document.getElementById(Yt)) {
    yt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Yt, e.textContent = yl, document.head.appendChild(e), yt = !0;
}
function vt(e) {
  return ss(e);
}
function zn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Zt(e) {
  return e != null && Number.isFinite(e);
}
function El(e) {
  if (!Zt(e.startedAt)) return null;
  const s = Zt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + s };
}
function On(e, s = "sequence") {
  if (s !== "sequence")
    return Sl(
      e,
      s === "duration" || s === "actual",
      s === "duration"
    );
  const t = [], n = [];
  for (const l of e) {
    const o = l.groups.flatMap((r) => r.cells);
    o.length !== 0 && (l.turn !== null && n.push({
      turn: l.turn,
      time: t.length
    }), t.push(
      ...o.map(
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
function Sl(e, s, t) {
  const n = e.flatMap((a) => {
    const h = a.groups.flatMap(
      (u) => u.cells.flatMap((x) => {
        const w = El(x);
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
  }), l = n.flatMap((a) => a.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let r = 0, i = null;
  for (const a of [...l].sort(
    (h, u) => h.start - u.start || h.end - u.end
  ))
    t && i !== null && a.start > i && (r += a.start - i), o.set(a, r), i = i === null ? a.end : Math.max(i, a.end);
  const f = [], v = [];
  for (const a of n) {
    const h = a.rawSpans.map((u) => {
      const x = o.get(u) ?? 0;
      return {
        ...u,
        start: u.start - x,
        end: (s ? u.end : u.start) - x
      };
    });
    f.push(...h), a.turn !== null && v.push({
      turn: a.turn,
      time: Math.min(...h.map((u) => u.start))
    });
  }
  return {
    start: Math.min(...f.map((a) => a.start)),
    end: Math.max(...f.map((a) => a.end)),
    spans: f,
    turnBoundaries: v
  };
}
function bl(e, s, t = "sequence") {
  const n = On(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((l) => l.start <= s.end && l.end >= s.start).map((l) => l.index)
  );
}
vl();
const qe = window.QwenPaw.host, B = qe.React, { useEffect: Ke, useMemo: qt, useRef: Ve, useState: _e } = B, { Tooltip: xl } = qe.antd, Et = 3, wl = 4, kl = 0.08, Tl = 0.025, _l = 32, Cl = 0.5;
function Ml(e) {
  const s = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, l = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, o = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...s === void 0 ? {} : { durationMs: s },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function Il(e) {
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
function zl(e, s) {
  const t = Il(e);
  if (s === void 0) return t;
  const n = s.durationMs === void 0 ? null : `Total ${vt(s.durationMs)}`, l = s.startedAt === void 0 ? null : s.durationMs === void 0 ? `Started ${Ne(s.startedAt)}` : `${Ne(s.startedAt)} → ${Ne(
    s.startedAt + s.durationMs
  )}`, o = s.ttftMs === void 0 || s.decodingMs === void 0 ? null : `TTFT ${vt(
    s.ttftMs
  )} · Decoding ${vt(s.decodingMs)}`, r = [n, o].filter((i) => i !== null).join(" · ");
  return [t, l, r].filter((i) => i !== null && i !== "").join(`
`);
}
function Tt(e, s) {
  return e <= s ? { start: e, end: s } : { start: s, end: e };
}
function St(e) {
  return Math.min(1, Math.max(0, e));
}
function Ol(e, s, t, n) {
  const l = Math.min(n - t, Math.max(0, s)), o = Math.min(
    Math.max(e - l / 2, t),
    n - l
  );
  return { start: o, end: o + l };
}
function en(e, s, t, n, l) {
  const o = Tt(
    Math.min(l, Math.max(n, e.start)),
    Math.min(l, Math.max(n, e.end))
  );
  return {
    start: (o.start - s) / t,
    end: (o.end - s) / t
  };
}
function $n({
  label: e,
  placement: s,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ B.createElement(
    xl,
    {
      title: /* @__PURE__ */ B.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: s,
      mouseEnterDelay: Cl,
      ...n
    },
    t
  );
}
function tn() {
  return /* @__PURE__ */ B.createElement("div", { className: te.labels, "aria-hidden": "true" }, /* @__PURE__ */ B.createElement("span", null, "Input"), /* @__PURE__ */ B.createElement("span", null, "Model"), /* @__PURE__ */ B.createElement("span", null, "Tools"));
}
function nn({
  loading: e,
  onHover: s,
  onLoad: t
}) {
  return /* @__PURE__ */ B.createElement(
    $n,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ B.createElement(
      "button",
      {
        type: "button",
        className: te.earlierHistory,
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
const $l = B.memo(function({
  turns: s,
  mode: t,
  range: n,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: r = null,
  searchMatchIndexes: i = null,
  onRangeChange: f,
  onRecordSelect: v,
  onRecordFocus: a
}) {
  const h = typeof qe.useTheme == "function" ? qe.useTheme() : void 0, u = qt(
    () => On(s, t),
    [t, s]
  ), x = qt(
    () => new Map(
      s.flatMap(
        (E) => E.groups.flatMap(
          (y) => y.cells.map(
            (T) => [T.index, Ml(T)]
          )
        )
      )
    ),
    [s]
  ), w = Ve(null), _ = Ve(null), N = Ve(null), k = Ve(null), [d, m] = _e(null), [p, S] = _e(null), [C, b] = _e(!1), [A, O] = _e(!1), [z, D] = _e(null), [se, P] = _e(!1);
  Ke(() => {
    u !== null && n !== null && (n.end < u.start || n.start > u.end) && f(null);
  }, [u, f, n]), Ke(() => {
    u !== null && (P(!1), D(
      (E) => E !== null && (E.end < u.start || E.start > u.end) ? null : E
    ));
  }, [u]), Ke(() => {
    if (u === null || r === null) return;
    const E = u.spans.find(
      (y) => y.index === r
    );
    E !== void 0 && (P(!0), D((y) => {
      if (y === null || E.end > y.start && E.start < y.end)
        return y;
      const T = Math.max(1, y.end - y.start), I = E.end <= y.start ? E.start : E.end - T, F = Math.min(
        Math.max(I, u.start),
        Math.max(u.start, u.end - T)
      );
      return F === y.start ? y : { start: F, end: F + T };
    }));
  }, [u, r]);
  const X = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), me = Math.min(
    X,
    Math.max(1, ((z == null ? void 0 : z.end) ?? 0) - ((z == null ? void 0 : z.start) ?? 0))
  ), Fe = u === null || z === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(z.start, u.start),
    u.end - me
  ), K = z === null ? X : me, W = z === null ? (u == null ? void 0 : u.start) ?? 0 : Fe, Me = l && u !== null && W === u.start, Ie = o === void 0 || C ? void 0 : () => {
    b(!0), o().finally(() => {
      b(!1);
    });
  }, ye = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(W - u.start) / K * 100}%`,
    "--trajectory-domain-width": `${X / K * 100}%`
  }, G = u === null || n === null ? null : en(
    n,
    W,
    K,
    u.start,
    u.end
  ), ue = (u === null || d === null ? null : en(
    d,
    W,
    K,
    u.start,
    u.end
  )) ?? G, Oe = d ?? n;
  if (Ke(() => {
    const E = N.current;
    if (E === null) return;
    const y = (T) => {
      T.preventDefault();
      const I = k.current;
      if (I === null || u === null) return;
      P(!1);
      const F = I.getBoundingClientRect(), V = St(
        (T.clientX - F.left) / Math.max(1, F.width)
      ), q = Math.min(
        X,
        Math.max(
          Math.min(
            t === "sequence" ? wl : 20,
            X
          ),
          K * Math.exp(T.deltaY * 15e-4)
        )
      );
      if (q >= X * 0.999) {
        D(null);
        return;
      }
      const J = W + V * K, ee = Math.min(
        Math.max(J - V * q, u.start),
        u.end - q
      );
      D({ start: ee, end: ee + q });
    };
    return E.addEventListener("wheel", y, { passive: !1 }), () => {
      E.removeEventListener("wheel", y);
    };
  }, [K, W, X, t, u]), u === null)
    return /* @__PURE__ */ B.createElement(
      "section",
      {
        ref: N,
        className: te.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ B.createElement("div", { className: te.plot }, /* @__PURE__ */ B.createElement(tn, null), /* @__PURE__ */ B.createElement("div", { className: te.track }, /* @__PURE__ */ B.createElement("span", { className: te.empty }, "No timing data"), l && /* @__PURE__ */ B.createElement(
        nn,
        {
          loading: C,
          onHover: () => {
            S(null);
          },
          onLoad: Ie
        }
      )))
    );
  const $e = Math.min(
    K,
    X / u.spans.length
  ), Se = (E) => {
    const y = E.currentTarget.getBoundingClientRect();
    return St((E.clientX - y.left) / Math.max(1, y.width));
  }, be = (E) => {
    var F;
    const y = E.target instanceof HTMLElement ? E.target : null, T = (F = y == null ? void 0 : y.closest("[data-timeline-record-index]")) == null ? void 0 : F.dataset.timelineRecordIndex;
    if (T === void 0) return null;
    const I = Number(T);
    return Number.isFinite(I) ? I : null;
  }, Be = (E) => {
    f(E);
  }, He = (E) => {
    if (E.button === 2) {
      _.current = {
        anchorClientX: E.clientX,
        anchorStart: W,
        moved: !1,
        pannable: z !== null,
        pointerId: E.pointerId
      }, z !== null && P(!1), O(!0), typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId);
      return;
    }
    if (E.button !== 0) return;
    const y = Se(E), T = W + y * K, I = be(E);
    S({ fraction: y, recordIndex: I }), w.current = {
      pointerId: E.pointerId,
      anchorTime: T,
      anchorClientX: E.clientX,
      recordIndex: I
    }, typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId), m({ start: T, end: T });
  }, st = (E) => {
    const y = E.currentTarget.getBoundingClientRect(), T = Se(E);
    S({ fraction: T, recordIndex: be(E) });
    const I = _.current;
    if (I !== null && I.pointerId === E.pointerId) {
      if (Math.abs(E.clientX - I.anchorClientX) >= Et && (I.moved = !0), !I.pannable) return;
      const J = (E.clientX - I.anchorClientX) / Math.max(1, y.width), ee = Math.min(
        Math.max(I.anchorStart - J * K, u.start),
        u.end - K
      );
      D({ start: ee, end: ee + K });
      return;
    }
    const F = w.current;
    if (F === null || F.pointerId !== E.pointerId) return;
    let V = W;
    if (z !== null) {
      const J = E.clientX - y.left, ee = Math.min(
        _l,
        Math.max(1, y.width * kl)
      ), Q = J < ee ? -1 : J > y.width - ee ? 1 : 0;
      if (Q !== 0) {
        const xe = Q < 0 ? ee - J : J - (y.width - ee), de = St(xe / ee), re = W + Q * K * Tl * Math.max(0.2, de);
        V = Math.min(
          Math.max(re, u.start),
          u.end - K
        ), V !== W && (P(!1), D({
          start: V,
          end: V + K
        }));
      }
    }
    const q = V + T * K;
    m(Tt(F.anchorTime, q));
  }, lt = (E) => {
    const y = _.current;
    if (y !== null && y.pointerId === E.pointerId) {
      const Q = y.moved || Math.abs(E.clientX - y.anchorClientX) >= Et;
      _.current = null, O(!1), Q || f(null);
      return;
    }
    const T = w.current;
    if (T === null || T.pointerId !== E.pointerId) return;
    const I = Se(E), F = W + I * K, V = Tt(T.anchorTime, F);
    S({ fraction: I, recordIndex: be(E) }), w.current = null, m(null);
    const q = Math.abs(E.clientX - T.anchorClientX) < Et, J = q && T.recordIndex !== null ? u.spans.find((Q) => Q.index === T.recordIndex) : void 0;
    if (J !== void 0) {
      f(null), v == null || v(J.index);
      return;
    }
    const ee = V.end - V.start < $e ? Ol(
      q ? V.start : (V.start + V.end) / 2,
      $e,
      u.start,
      u.end
    ) : V;
    if (Be(ee), q) {
      const Q = V.start, xe = u.spans.reduce((de, re) => {
        const Ae = Q < de.start ? de.start - Q : Q > de.end ? Q - de.end : 0;
        return (Q < re.start ? re.start - Q : Q > re.end ? Q - re.end : 0) < Ae ? re : de;
      });
      a == null || a(xe.index);
    }
  }, ot = (E) => {
    E.key !== "Escape" || n === null || (E.preventDefault(), f(null));
  }, Ue = () => {
    w.current = null, _.current = null, m(null), S(null), O(!1);
  };
  return /* @__PURE__ */ B.createElement(
    "section",
    {
      ref: N,
      className: te.root,
      "data-theme": h || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ B.createElement("div", { className: te.plot }, /* @__PURE__ */ B.createElement(tn, null), /* @__PURE__ */ B.createElement(
      "div",
      {
        ref: k,
        className: te.track,
        "data-panning": A || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: ot,
        onPointerDown: He,
        onPointerMove: st,
        onPointerUp: lt,
        onPointerCancel: Ue,
        onPointerLeave: () => {
          w.current === null && _.current === null && S(null);
        },
        onDoubleClick: (E) => {
          E.preventDefault(), f(null);
        },
        onContextMenu: (E) => {
          E.preventDefault();
        }
      },
      Me && /* @__PURE__ */ B.createElement(
        nn,
        {
          loading: C,
          onHover: () => {
            S(null);
          },
          onLoad: Ie
        }
      ),
      p !== null && p.recordIndex === null && d === null && /* @__PURE__ */ B.createElement(
        "div",
        {
          className: te.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${p.fraction * 100}%`
          }
        }
      ),
      ue !== null && /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(
        "div",
        {
          className: te.selection,
          "data-dragging": d === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ue.start * 100}%`,
            "--trajectory-selection-width": `${(ue.end - ue.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ B.createElement(
        "div",
        {
          className: te.selectionEdges,
          "data-dragging": d === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ue.start * 100}%`,
            "--trajectory-selection-width": `${(ue.end - ue.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ B.createElement(
        "div",
        {
          className: te.turnBoundaries,
          "data-animate-viewport": se || void 0,
          "aria-hidden": "true",
          style: ye
        },
        u.turnBoundaries.filter(
          (E) => E.time > u.start && E.time >= W && E.time <= W + K
        ).map((E) => /* @__PURE__ */ B.createElement(
          "span",
          {
            className: te.turnBoundary,
            "data-turn": E.turn,
            key: E.turn,
            style: {
              "--trajectory-turn-left": `${(E.time - u.start) / X * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ B.createElement(
        "div",
        {
          className: te.lanes,
          "data-animate-viewport": se || void 0,
          "data-timeline-domain": !0,
          style: ye
        },
        u.spans.filter(
          (E) => E.index === r || E.end >= W && E.start <= W + K
        ).map((E) => {
          const y = (E.start - u.start) / X, I = (E.end - E.start) / X * 100, F = x.get(E.index), V = F == null ? void 0 : F.ttftMs, q = F == null ? void 0 : F.decodingMs, J = V === void 0 || q === void 0 || V + q <= 0 ? null : V / (V + q);
          return /* @__PURE__ */ B.createElement(
            $n,
            {
              key: E.index,
              label: zl(E.kind, F),
              placement: "bottom"
            },
            /* @__PURE__ */ B.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: te.span,
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
                  "--trajectory-span-left": `${y * 100}%`,
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
}), It = window.QwenPaw.host, ae = It.React, { Button: Al, Input: Rl, Segmented: Ll, Tooltip: sn } = It.antd, { MenuFoldOutlined: jl, MenuUnfoldOutlined: Dl, ReloadOutlined: Nl, SearchOutlined: Pl } = It.antdIcons;
function Fl({
  mode: e,
  onModeChange: s,
  search: t,
  onSearchChange: n,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: r,
  hasRequests: i,
  onToggleCollapseAll: f,
  callsCollapsed: v,
  onToggleCallsCollapsed: a
}) {
  const h = Y();
  return /* @__PURE__ */ ae.createElement(
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
    /* @__PURE__ */ ae.createElement(sn, { title: g(h, "projectionHint") }, /* @__PURE__ */ ae.createElement(
      Ll,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (u) => s(u)
      }
    )),
    /* @__PURE__ */ ae.createElement(
      Rl,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ae.createElement(Pl, null),
        placeholder: g(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (u) => n(u.target.value)
      }
    ),
    i && /* @__PURE__ */ ae.createElement(
      sn,
      {
        title: r ? g(h, "expandAll") : g(h, "collapseAll")
      },
      /* @__PURE__ */ ae.createElement(
        Al,
        {
          size: "small",
          type: "text",
          icon: r ? /* @__PURE__ */ ae.createElement(Dl, null) : /* @__PURE__ */ ae.createElement(jl, null),
          onClick: f
        }
      )
    ),
    /* @__PURE__ */ ae.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ae.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ae.createElement(Nl, null),
      " ",
      g(h, "refresh")
    ))
  );
}
const nt = window.QwenPaw.host, R = nt.React, { useCallback: ln, useEffect: bt, useMemo: he, useRef: Bl, useState: ne } = R, {
  Button: Xe,
  Empty: on,
  Popconfirm: Hl,
  Popover: Ul,
  Space: Wl,
  Spin: An,
  Switch: Kl,
  Tag: Vl,
  Tooltip: Xl,
  message: De
} = nt.antd, { DeleteOutlined: Gl, DownloadOutlined: Jl, SettingOutlined: rn } = nt.antdIcons, { Text: ge } = nt.antd.Typography;
function an({
  config: e,
  onChange: s,
  children: t
}) {
  const n = Y(), l = (r, i, f) => /* @__PURE__ */ R.createElement(
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
    /* @__PURE__ */ R.createElement(ge, { style: { fontSize: 13 } }, r),
    /* @__PURE__ */ R.createElement(
      Kl,
      {
        size: "small",
        checked: !!i,
        onChange: (v) => s({ [f]: v })
      }
    )
  ), o = /* @__PURE__ */ R.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ R.createElement(ge, { strong: !0, style: { fontSize: 13 } }, g(n, "settings")), /* @__PURE__ */ R.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(g(n, "enabled"), e.enabled, "enabled"),
    l(g(n, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      g(n, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      g(n, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ R.createElement(An, { size: "small" })));
  return /* @__PURE__ */ R.createElement(Ul, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function Ql({
  sessionId: e,
  summary: s,
  locale: t,
  onJumpSession: n,
  onRefreshSessions: l
}) {
  const [o, r] = ne(null), [i, f] = ne(!1), [v, a] = ne(!1), [h, u] = ne(""), [x, w] = ne("sequence"), [_, N] = ne(null), [k, d] = ne(null), [m, p] = ne(null), [S, C] = ne(
    /* @__PURE__ */ new Set()
  ), [b, A] = ne(!1), [O, z] = ne(null), [D, se] = ne(null), [P, X] = ne(null), [me, Fe] = ne(null), K = Bl(null);
  K.current = e, bt(() => {
    Bn().then(z).catch(() => z(null));
  }, []);
  const W = ln(async (y, T) => {
    T || f(!0);
    try {
      const I = await Fn(y, {
        beforeSeq: T,
        limit: 200
      });
      Fe(null), r((F) => T && F ? {
        ...I,
        events: [...I.events, ...F.events]
      } : I);
    } catch (I) {
      Fe({
        message: String(I.message),
        status: I instanceof En ? I.status : null
      });
    } finally {
      T || f(!1);
    }
  }, []), Me = ln(async (y) => {
    try {
      const T = await Pn(y);
      X(T), se({
        sessionId: y,
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
    e ? (N(null), d(null), p(null), C(/* @__PURE__ */ new Set()), u(""), W(e), Me(e)) : (r(null), X(null), se(null));
  }, [e, W, Me]);
  const Ie = he(
    () => o ? pl(o.events) : [],
    [o]
  ), { initial: ye, turns: G } = he(
    () => gl(Ie),
    [Ie]
  ), ze = he(
    () => ye ? [ye, ...Qt(G)] : Qt(G),
    [ye, G]
  ), ue = he(
    () => G.some((y) => y.status === "running"),
    [G]
  );
  bt(() => {
    if (!e || !ue) return;
    const y = setInterval(() => {
      document.visibilityState === "visible" && K.current && W(K.current);
    }, 5e3);
    return () => clearInterval(y);
  }, [e, ue, W]);
  const Oe = he(
    () => _ === null ? null : bl(G, _, x),
    [_, G, x]
  ), $e = he(() => {
    const y = h.trim().toLowerCase();
    return y ? new Set(
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
`).toLowerCase().includes(y)
      ).map((T) => T.index)
    ) : null;
  }, [h, ze]), Se = he(
    () => k === null ? null : ze.find((y) => y.index === k) ?? null,
    [ze, k]
  ), be = he(() => {
    var At, Rt;
    if (m === null) return null;
    const y = G.find((L) => L.turn === m);
    if (!y) return null;
    const T = ((At = y.groups[0]) == null ? void 0 : At.cells) ?? [], I = T.filter((L) => L.kind === "message"), F = T.filter((L) => L.kind === "tool"), V = [
      ...new Set(
        I.map((L) => L.model).filter((L) => !!L)
      )
    ], q = [
      ...new Set(
        I.map((L) => L.provider).filter((L) => !!L)
      )
    ];
    let J = 0, ee = 0, Q = 0, xe = 0, de = 0, re = null, Ae = 0;
    const rt = [];
    for (const L of T)
      L.usage && (J += L.usage.input_tokens ?? 0, ee += L.usage.output_tokens ?? 0, Q += L.usage.cache_input_tokens ?? 0, xe += L.usage.cache_creation_input_tokens ?? 0, de += L.usage.reasoning_tokens ?? 0), L.timing && (re = re === null ? L.timing.ttft_ms : Math.min(re, L.timing.ttft_ms), Ae = (Ae ?? 0) + L.timing.decode_ms), L.isError && rt.push(L.toolError ?? L.text ?? "error");
    const we = T.find((L) => L.kind === "user"), Rn = (Rt = [...I].reverse().find((L) => L.options)) == null ? void 0 : Rt.options, it = [...I].reverse().find((L) => L.outputText);
    let zt;
    const Ot = I.filter((L) => L.messagesMeta);
    if (Ot.length > 0) {
      const L = {};
      let ke = 0, ct = 0;
      for (const jn of Ot) {
        const ut = jn.messagesMeta;
        for (const [Lt, Dn] of Object.entries(ut.charsByRole))
          L[Lt] = (L[Lt] ?? 0) + Dn;
        ke += ut.totalChars, ct = Math.max(ct, ut.maxToolChars);
      }
      zt = { charsByRole: L, totalChars: ke, maxToolChars: ct };
    }
    const at = G.findIndex((L) => L.turn === m), $t = at > 0 ? G[at - 1] : null;
    let Re = null;
    if ($t) {
      Re = 0;
      for (const L of $t.groups)
        for (const ke of L.cells)
          ke.kind === "message" && ke.usage && (Re += ke.usage.input_tokens ?? 0);
    }
    const Ln = Re === null && at !== 0 ? void 0 : {
      prevInputTokens: Re,
      deltaTokens: J - (Re ?? 0)
    };
    return {
      turn: m,
      status: y.status,
      durationMs: y.durationMs,
      startedAt: (we == null ? void 0 : we.startedAt) ?? null,
      query: (we == null ? void 0 : we.text) ?? "",
      llmCalls: I.length,
      toolCalls: F.length,
      models: V,
      providers: q,
      inputTokens: J,
      outputTokens: ee,
      cacheReadTokens: Q,
      cacheWriteTokens: xe,
      reasoningTokens: de,
      inputComposition: zt,
      growth: Ln,
      resultIndex: it == null ? void 0 : it.index,
      ttftMs: re,
      decodeMs: Ae,
      errors: rt,
      options: Rn,
      sessionTotals: D && D.sessionId === e ? {
        inputTokens: D.inputTokens,
        outputTokens: D.outputTokens,
        totalTokens: D.totalTokens,
        reasoningTokens: D.reasoningTokens
      } : void 0
    };
  }, [m, G, D, e]), Be = !!(o && o.events.length > 0 && o.events[0].seq > 1), He = async (y) => {
    try {
      z(await Hn(y));
    } catch (T) {
      De.error(String(T.message));
    }
  }, st = he(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), lt = he(() => {
    if (!P) return null;
    const y = [
      `${P.runs} ${g(t, "statRounds")} · ${P.llm_calls} ${g(t, "statSteps")}`,
      `LLM ${oe(P.llm_ms_total / 1e3)} · ${g(
        t,
        "toolCalls"
      )} ${oe(P.tool_ms_total / 1e3)}`,
      `${g(t, "statTtftAvg")} ${P.ttft_ms_avg === null ? "-" : oe(P.ttft_ms_avg / 1e3)} · ${Ct(
        P.output_tokens,
        P.decode_ms_total / 1e3
      )}`
    ];
    if (P.cache_read_tokens > 0 || P.cache_write_tokens > 0) {
      const T = P.cache_read_tokens + P.input_tokens, I = T > 0 ? Math.round(P.cache_read_tokens / T * 100) : 0;
      y.push(`${g(t, "statCacheHit")} ${I}%`);
    }
    if (y.push(
      `${g(t, "statInput")} ${U(
        P.input_tokens
      )} tok · ${g(t, "statOutput")} ${U(
        P.output_tokens
      )} tok`
    ), s && y.push(wt(s.size_bytes)), P.skills) {
      const T = Object.entries(P.skills).sort((I, F) => F[1] - I[1]).map(([I, F]) => `${I} ×${F}`).join(" · ");
      T && y.push(`📚 ${T}`);
    }
    return y.join(" | ");
  }, [P, s, t]), ot = () => {
    d(null), p(null);
  }, Ue = (me == null ? void 0 : me.status) === 404, E = Se !== null || be !== null;
  return /* @__PURE__ */ R.createElement(
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
    /* @__PURE__ */ R.createElement(
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
      e ? /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ R.createElement(
          ge,
          {
            strong: !0,
            ellipsis: {
              tooltip: (s == null ? void 0 : s.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (s == null ? void 0 : s.title) || (s == null ? void 0 : s.agent_id) || xn(e)
        ),
        /* @__PURE__ */ R.createElement(
          Vl,
          {
            color: kn[(s == null ? void 0 : s.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Tn((s == null ? void 0 : s.status) ?? "unknown")
        ),
        s != null && s.channel ? /* @__PURE__ */ R.createElement(ge, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, s.channel) : null,
        /* @__PURE__ */ R.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ R.createElement(Wl, null, /* @__PURE__ */ R.createElement(an, { config: O, onChange: He }, /* @__PURE__ */ R.createElement(Xe, { size: "small", icon: /* @__PURE__ */ R.createElement(rn, null) })), /* @__PURE__ */ R.createElement(Xl, { title: g(t, "export") }, /* @__PURE__ */ R.createElement(
          Xe,
          {
            size: "small",
            icon: /* @__PURE__ */ R.createElement(Jl, null),
            onClick: () => {
              Un(e).then(() => De.success(g(t, "exported"))).catch(
                (y) => De.error(String(y.message))
              );
            }
          },
          g(t, "export")
        )), /* @__PURE__ */ R.createElement(
          Hl,
          {
            title: g(t, "deleteConfirm"),
            onConfirm: () => {
              Wn(e).then(() => {
                De.success(g(t, "deleted")), l == null || l();
              }).catch(
                (y) => De.error(String(y.message))
              );
            }
          },
          /* @__PURE__ */ R.createElement(Xe, { size: "small", danger: !0, icon: /* @__PURE__ */ R.createElement(Gl, null) }, g(t, "delete"))
        )))
      ), /* @__PURE__ */ R.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ R.createElement(
          ge,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          lt ?? // Transient line while the stats endpoint responds.
          (s ? `${s.runs} ${g(t, "statRounds")} · ${s.llm_calls} ${g(t, "statSteps")} · ${wn(
            s.total_tokens
          )} ${g(t, "tokens")} · ${wt(
            s.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ R.createElement(
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
      )) : /* @__PURE__ */ R.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ R.createElement(ge, { type: "secondary", style: { fontSize: 13 } }, g(t, "selectSession")),
        /* @__PURE__ */ R.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ R.createElement(an, { config: O, onChange: He }, /* @__PURE__ */ R.createElement(Xe, { size: "small", icon: /* @__PURE__ */ R.createElement(rn, null) })))
      )
    ),
    me && !Ue && /* @__PURE__ */ R.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ R.createElement(ge, { type: "danger", style: { fontSize: 12 } }, `${g(t, "loadFailed")}: ${me.message}`)),
    /* @__PURE__ */ R.createElement(
      Fl,
      {
        mode: x,
        onModeChange: w,
        search: h,
        onSearchChange: u,
        onRefresh: () => {
          e && (W(e), Me(e)), l == null || l();
        },
        modeOptions: st,
        allCollapsed: G.length > 0 && G.every((y) => S.has(y.turn ?? -1)),
        hasRequests: G.some((y) => y.turn !== null),
        callsCollapsed: b,
        onToggleCallsCollapsed: () => A((y) => !y),
        onToggleCollapseAll: () => {
          C((y) => G.some(
            (I) => I.turn !== null && !y.has(I.turn)
          ) ? new Set(
            G.map((I) => I.turn).filter((I) => I !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ R.createElement(
      $l,
      {
        turns: G,
        mode: x,
        range: _,
        hasEarlierRecords: Be,
        onLoadEarlier: async () => {
          var y;
          return !o || o.events.length === 0 ? !1 : (await W(e, (y = o.events[0]) == null ? void 0 : y.seq), !0);
        },
        selectedIndex: k,
        searchMatchIndexes: $e,
        onRangeChange: N,
        onRecordSelect: d,
        onRecordFocus: d
      }
    ),
    i && !o ? /* @__PURE__ */ R.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ R.createElement(An, null)) : o ? /* @__PURE__ */ R.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ R.createElement(
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
      /* @__PURE__ */ R.createElement(
        dl,
        {
          turns: G,
          selectedIndex: k,
          selectedTurn: m,
          collapsedTurns: S,
          focusIndexes: Oe,
          searchMatchIndexes: $e,
          onSelectedIndexChange: (y) => {
            if (y === k) {
              d(null);
              return;
            }
            d(y), p(null);
          },
          onSelectedTurnChange: (y) => {
            p(y), d(null);
          },
          callsCollapsed: b,
          onToggleTurn: (y) => {
            C((T) => {
              const I = new Set(T);
              return I.has(y) ? I.delete(y) : I.add(y), I;
            });
          },
          hasOlderRecords: Be,
          loadingOlder: v,
          onLoadOlder: () => {
            var y;
            !o || o.events.length === 0 || (a(!0), W(
              e,
              (y = o.events[0]) == null ? void 0 : y.seq
            ).finally(() => a(!1)));
          },
          emptyText: g(t, "noSessions"),
          initialRecord: ye
        }
      )
    ), E ? /* @__PURE__ */ R.createElement(
      bs,
      {
        record: Se,
        request: be,
        onJumpSession: n,
        onSelectTurn: (y) => {
          p(y), d(null);
        },
        onClose: ot
      }
    ) : null) : /* @__PURE__ */ R.createElement(
      on,
      {
        image: on.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: Ue && e ? g(t, "noTraceForSession") : g(t, "selectSession")
      }
    )
  );
}
const Ce = window.QwenPaw.host, j = Ce.React, { useCallback: cn, useEffect: xt, useMemo: Ge, useState: pe } = j, { Button: un, Empty: dn, Input: Yl, Spin: Zl, Tag: hn, Tooltip: mn } = Ce.antd, {
  CaretRightOutlined: ql,
  MenuFoldOutlined: eo,
  MenuUnfoldOutlined: to,
  SearchOutlined: no
} = Ce.antdIcons, { Text: Pe } = Ce.antd.Typography;
function so({
  groups: e,
  collapsedAgents: s,
  onToggleAgent: t,
  searching: n,
  selected: l,
  onSelect: o,
  locale: r
}) {
  const i = e.length > 1;
  return /* @__PURE__ */ j.createElement(j.Fragment, null, e.map(([f, v]) => {
    const a = i && !n && s.has(f);
    return /* @__PURE__ */ j.createElement("div", { key: f }, i && /* @__PURE__ */ j.createElement(
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
      /* @__PURE__ */ j.createElement(
        ql,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: a ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ j.createElement(Pe, { strong: !0, style: { fontSize: 12 } }, f),
      /* @__PURE__ */ j.createElement(Pe, { type: "secondary", style: { fontSize: 11 } }, v.length)
    ), !a && v.map((h) => {
      const u = h.session_id === l;
      return /* @__PURE__ */ j.createElement(
        "div",
        {
          key: h.session_id,
          onClick: () => o(h.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: u ? "rgba(22,119,255,0.10)" : "transparent",
            border: u ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ j.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ j.createElement(
            Pe,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || xn(h.session_id)
          ),
          i ? null : h.agent_id ? /* @__PURE__ */ j.createElement(
            hn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          /* @__PURE__ */ j.createElement(
            hn,
            {
              color: kn[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Tn(h.status)
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
          /* @__PURE__ */ j.createElement("span", null, h.channel || "-"),
          /* @__PURE__ */ j.createElement("span", null, h.runs, " ", g(r, "runs")),
          /* @__PURE__ */ j.createElement("span", null, wn(h.total_tokens), " tok"),
          h.skills ? /* @__PURE__ */ j.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(h.skills).sort((x, w) => w[1] - x[1]).map(([x, w]) => `${x} ×${w}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(h.skills).sort((x, w) => w[1] - x[1]).slice(0, 2).map(([x]) => x).join(" ")
          ) : null,
          /* @__PURE__ */ j.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: ls(h.last_event_t)
            },
            os(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function lo() {
  const e = typeof Ce.useLocale == "function" ? Ce.useLocale() : void 0, s = Ge(
    () => _t(e ?? Y()),
    [e]
  ), [t, n] = pe(null), [l, o] = pe(!1), [r, i] = pe(
    /* @__PURE__ */ new Set()
  ), [f, v] = pe(!1), [a, h] = pe(!1), [u, x] = pe(null), [w, _] = pe(""), [N, k] = pe(null), d = cn(async () => {
    try {
      const b = await jt({ limit: 100, offset: 0 });
      n(b.sessions), o(b.has_more), k(null);
    } catch (b) {
      k(String(b.message));
    }
  }, []), m = cn(async () => {
    h(!0);
    try {
      const b = await jt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((A) => {
        const O = A ?? [];
        return [
          ...O,
          ...b.sessions.filter(
            (z) => !O.some((D) => D.session_id === z.session_id)
          )
        ];
      }), o(b.has_more);
    } catch (b) {
      k(String(b.message));
    } finally {
      h(!1);
    }
  }, [t]);
  xt(() => {
    d();
    try {
      const b = new URLSearchParams(window.location.search).get("session");
      b && Sn(b).then((A) => {
        x(A ?? b);
      });
    } catch {
    }
  }, [d]), xt(() => {
    try {
      const b = new URL(window.location.href);
      u ? b.searchParams.set("session", u) : b.searchParams.delete("session"), window.history.replaceState(window.history.state, "", b);
    } catch {
    }
  }, [u]), xt(() => {
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
    const b = w.trim().toLowerCase();
    return b ? t.filter(
      (A) => [A.session_id, A.title ?? "", A.agent_id, A.channel].join(" ").toLowerCase().includes(b)
    ) : t;
  }, [t, w]), C = Ge(() => {
    const b = /* @__PURE__ */ new Map();
    for (const A of S) {
      const O = A.agent_id || "(unknown)", z = b.get(O);
      z ? z.push(A) : b.set(O, [A]);
    }
    return [...b.entries()];
  }, [S]);
  return /* @__PURE__ */ j.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, f ? /* @__PURE__ */ j.createElement(
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
    /* @__PURE__ */ j.createElement(mn, { title: g(s, "expandSidebar"), placement: "right" }, /* @__PURE__ */ j.createElement(
      un,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ j.createElement(to, null),
        onClick: () => v(!1)
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
        Yl,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ j.createElement(no, null),
          placeholder: g(s, "searchPlaceholder"),
          value: w,
          style: { flex: 1, minWidth: 0 },
          onChange: (b) => _(b.target.value)
        }
      ),
      /* @__PURE__ */ j.createElement(mn, { title: g(s, "collapseSidebar") }, /* @__PURE__ */ j.createElement(
        un,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ j.createElement(eo, null),
          onClick: () => v(!0)
        }
      ))
    ),
    N ? /* @__PURE__ */ j.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ j.createElement(Pe, { type: "danger", style: { fontSize: 12 } }, `${g(s, "loadFailed")}: ${N}`)) : null,
    /* @__PURE__ */ j.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ j.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ j.createElement(Zl, null)) : S.length === 0 ? /* @__PURE__ */ j.createElement(
      dn,
      {
        image: dn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ j.createElement("span", { style: { fontSize: 12 } }, g(s, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ j.createElement(
        Pe,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        g(s, "noSessionsHint")
      )
    ) : /* @__PURE__ */ j.createElement(
      so,
      {
        groups: C,
        collapsedAgents: r,
        onToggleAgent: (b) => {
          i((A) => {
            const O = new Set(A);
            return O.has(b) ? O.delete(b) : O.add(b), O;
          });
        },
        searching: !!w.trim(),
        selected: u,
        onSelect: x,
        locale: s
      }
    ), t !== null && l && !w.trim() && /* @__PURE__ */ j.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ j.createElement(
      "a",
      {
        onClick: () => void m(),
        style: { fontSize: 12 }
      },
      a ? "…" : `⋯ ${g(s, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ j.createElement(
    Ql,
    {
      sessionId: u,
      summary: p,
      locale: s,
      onJumpSession: x,
      onRefreshSessions: () => void d()
    }
  ));
}
const oo = window.QwenPaw.host.React;
var fn, pn;
(pn = (fn = window.QwenPaw).registerRoutes) == null || pn.call(fn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: lo,
    label: g(Y(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var gn, Je, yn;
(yn = (Je = (gn = window.QwenPaw.chat) == null ? void 0 : gn.rightHeader) == null ? void 0 : Je.add) == null || yn.call(
  Je,
  "agent-trace",
  oo.createElement(Qn),
  { id: "agent-trace-jump" }
);

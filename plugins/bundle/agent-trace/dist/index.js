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
    beforeTruncation: "截断前",
    inputTab: "输入",
    skillLoadKind: "技能",
    skillLoaded: "已加载",
    skillResource: "技能资源",
    skillBypass: "未加载说明书直接使用",
    skillBypassStrip: "未加载即执行",
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
    skillResource: "Skill resource",
    skillBypass: "used without loading the skill",
    skillBypassStrip: "executed without load",
    contextReset: "Context prefix changed (compaction / rewrite); full input re-recorded",
    inputTotal: "Total input"
  }
};
function _t(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function Z() {
  try {
    return _t(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function g(e, s) {
  return Pn[e][s];
}
const je = window.QwenPaw.host;
async function Fn(e) {
  return Ee(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function vn(e, s) {
  return je.fetch ? je.fetch(e, s) : fetch(je.getApiUrl(e), {
    ...s,
    headers: {
      ...(s == null ? void 0 : s.headers) || {},
      ...je.getApiToken() ? { Authorization: `Bearer ${je.getApiToken()}` } : {}
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
async function Bn(e, s) {
  const t = new URLSearchParams();
  s != null && s.beforeSeq && t.set("before_seq", String(s.beforeSeq)), t.set("limit", String(s == null ? void 0 : s.limit));
  const n = t.toString();
  return Ee(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function Hn() {
  return Ee("/agent-trace/config");
}
async function Un(e) {
  return Ee("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function Wn(e) {
  const s = await vn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const t = await s.blob(), n = URL.createObjectURL(t), l = document.createElement("a");
  l.href = n, l.download = `${e}.jsonl`, l.click(), URL.revokeObjectURL(n);
}
async function Kn(e) {
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
const ve = window.QwenPaw.host, Ye = ve.React, { useMemo: Vn } = Ye, { Button: Xn, Tooltip: Gn } = ve.antd, { CompassOutlined: Jn } = ve.antdIcons;
function Qn(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function Yn() {
  const e = typeof ve.useLocale == "function" ? ve.useLocale() : void 0, s = Vn(
    () => _t(e ?? Z()),
    [e]
  );
  return /* @__PURE__ */ Ye.createElement(Gn, { title: g(s, "viewCurrentTrace") }, /* @__PURE__ */ Ye.createElement(
    Xn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ Ye.createElement(Jn, null),
      "aria-label": g(s, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof ve.getCurrentSessionId == "function" ? ve.getCurrentSessionId() : null;
        Sn(t).then((n) => {
          window.location.href = Qn(n ?? t);
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
function Zn(e, s) {
  const t = Nt(e ?? ""), n = Nt(s ?? "");
  if (t.length > Dt || n.length > Dt)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...n.map((h) => ({ kind: "add", text: h }))
    ];
  const l = t.length, o = n.length, i = new Int32Array((l + 1) * (o + 1)), a = (h, u) => h * (o + 1) + u;
  for (let h = l - 1; h >= 0; h -= 1)
    for (let u = o - 1; u >= 0; u -= 1)
      i[a(h, u)] = t[h] === n[u] ? i[a(h + 1, u + 1)] + 1 : Math.max(i[a(h + 1, u)], i[a(h, u + 1)]);
  const m = [];
  let v = 0, r = 0;
  for (; v < l && r < o; )
    t[v] === n[r] ? (m.push({ kind: "same", text: t[v] }), v += 1, r += 1) : i[a(v + 1, r)] >= i[a(v, r + 1)] ? (m.push({ kind: "del", text: t[v] }), v += 1) : (m.push({ kind: "add", text: n[r] }), r += 1);
  for (; v < l; )
    m.push({ kind: "del", text: t[v] }), v += 1;
  for (; r < o; )
    m.push({ kind: "add", text: n[r] }), r += 1;
  return m;
}
function qn(e, s = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((o, i) => {
    if (o.kind !== "same")
      for (let a = Math.max(0, i - s); a <= Math.min(e.length - 1, i + s); a += 1)
        t[a] = !0;
  });
  const n = [];
  let l = 0;
  return e.forEach((o, i) => {
    t[i] ? (l > 0 && (n.push({ kind: "gap", count: l }), l = 0), n.push(o)) : l += 1;
  }), l > 0 && n.push({ kind: "gap", count: l }), n;
}
function es(e) {
  let s = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? s += 1 : n.kind === "del" && (t += 1);
  return { added: s, removed: t };
}
const ts = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, ns = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function bn(e, s) {
  const t = e.markerKind ? ts[e.markerKind] : void 0;
  if (t) return s === "zh-CN" ? t.zh : t.en;
  const n = ns[e.kind];
  return n ? s === "zh-CN" ? n.zh : n.en : e.kind;
}
function ss(e, s) {
  const t = (s ?? "").toLowerCase();
  let n = 4;
  return t.includes("qwen") ? n = 2.2 : t.includes("deepseek") ? n = 2.5 : t.includes("claude") && (n = 3.6), Math.round(e / n);
}
function ls(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function ie(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const s = e * 1e3;
  return s < 1e3 ? `${Math.round(s)}ms` : s < 6e4 ? `${(s / 1e3).toFixed(1)}s` : `${Math.floor(s / 6e4)}m${Math.round(s % 6e4 / 1e3)}s`;
}
function K(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function Ct(e, s) {
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
function ae(e) {
  if (!e) return null;
  const s = Date.parse(e);
  return Number.isFinite(s) ? s : null;
}
function xn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function os(e) {
  if (!e) return "-";
  const s = new Date(e);
  return Number.isNaN(s.getTime()) ? e : s.toLocaleString();
}
function is(e) {
  if (!e) return "-";
  const s = Date.parse(e);
  if (!Number.isFinite(s)) return e;
  const t = Date.now() - s;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(s).toLocaleString();
}
function kn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function kt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const wn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function Tn(e) {
  return e || "unknown";
}
const et = window.QwenPaw.host, c = et.React, { useEffect: rs, useRef: as, useState: _n } = c, { Button: Cn, Collapse: cs, Empty: Pt, Tabs: It } = et.antd, { Text: W } = et.antd.Typography, { CopyOutlined: us, CloseOutlined: ds } = et.antdIcons, hs = 320, ms = 720, Ke = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, fs = 2e4;
function ps(e) {
  if (e.length > fs) return e;
  const s = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, l, o = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > n && s.push(e.slice(n, l.index));
    const i = l[0];
    let a = "rgba(128,128,128,1)";
    l[1] !== void 0 ? a = Ke.key : l[2] !== void 0 ? a = Ke.string : l[3] !== void 0 ? a = Ke.number : a = Ke.literal, s.push(
      /* @__PURE__ */ c.createElement("span", { key: o++, style: { color: a } }, i)
    ), n = l.index + i.length;
  }
  return n < e.length && s.push(e.slice(n)), s;
}
function ue({ value: e, json: s = !1 }) {
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
    t ? "✓" : /* @__PURE__ */ c.createElement(us, null)
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
    s ? ps(l) : l
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
    /* @__PURE__ */ c.createElement(W, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ c.createElement(
      W,
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
  const o = Math.max(0, e - t - n), i = Math.max(0, s - l);
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Input", value: `${K(e)} tok` }), t ? /* @__PURE__ */ c.createElement($, { label: "Cached", value: `${K(t)} tok` }) : null, n ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Cache created",
      value: `${K(n)} tok`
    }
  ) : null, t || n ? /* @__PURE__ */ c.createElement($, { label: "Other", value: `${K(o)} tok` }) : null, /* @__PURE__ */ c.createElement($, { label: "Output", value: `${K(s)} tok` }), l ? /* @__PURE__ */ c.createElement($, { label: "Reasoning", value: `${K(l)} tok` }) : null, l ? /* @__PURE__ */ c.createElement($, { label: "Content", value: `${K(i)} tok` }) : null);
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
const Bt = ["system", "user", "assistant", "tool"], gs = {
  system: "roleSystem",
  user: "roleUser",
  assistant: "roleAssistant",
  tool: "roleTool"
};
function ys({
  request: e,
  locale: s
}) {
  const t = e.inputComposition;
  if (!t) return null;
  const n = e.models[0], l = [], o = new Set(Bt), i = [
    ...Bt.filter((a) => t.charsByRole[a]),
    ...Object.keys(t.charsByRole).filter(
      (a) => !o.has(a) && t.charsByRole[a]
    )
  ];
  for (const a of i) {
    const m = t.charsByRole[a], v = gs[a] ?? "roleOther";
    l.push(
      /* @__PURE__ */ c.createElement(
        $,
        {
          key: a,
          label: g(s, v),
          value: `${K(m)} ${g(
            s,
            "charUnit"
          )} · ~${K(ss(m, n))} tok ${g(
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
        value: `${K(t.maxToolChars)} ${g(
          s,
          "charUnit"
        )}`
      }
    )
  ), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(W, { strong: !0, style: { fontSize: 12, display: "block", marginTop: 10 } }, g(s, "inputComposition")), l, /* @__PURE__ */ c.createElement(
    W,
    {
      type: "secondary",
      style: { fontSize: 11, display: "block", padding: "2px 0" }
    },
    g(s, "estimateNote")
  ), e.growth ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    $,
    {
      label: g(s, "growthVsPrev"),
      value: e.growth.prevInputTokens === null ? g(s, "firstRound") : `${e.growth.deltaTokens >= 0 ? "+" : ""}${K(
        e.growth.deltaTokens
      )} tok`
    }
  ), e.growth.prevInputTokens !== null && e.growth.deltaTokens > 0 ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: g(s, "cacheAbsorbed"),
      value: `${K(e.cacheReadTokens)} tok`
    }
  ) : null) : null);
}
function vs({
  request: e,
  onJumpRecord: s
}) {
  const t = Z(), [n, l] = c.useState("summary"), o = /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Started", value: Pe(e.startedAt) }), /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Total",
      value: ie(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "First TTFT",
      value: ie(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Total decoding",
      value: ie(e.decodeMs / 1e3)
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
  )), i = /* @__PURE__ */ c.createElement(
    Ft,
    {
      input: e.inputTokens,
      output: e.outputTokens,
      cacheRead: e.cacheReadTokens,
      cacheWrite: e.cacheWriteTokens,
      reasoning: e.reasoningTokens
    }
  ), a = [
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
      ), /* @__PURE__ */ c.createElement($, { label: "Query", value: Es(e.query) }), /* @__PURE__ */ c.createElement(
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
      )) : null, e.options ? /* @__PURE__ */ c.createElement(dt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ c.createElement(ue, { value: e.options, json: !0 })) : null, /* @__PURE__ */ c.createElement(dt, { label: "Usage", onOpen: () => l("usage") }, i), /* @__PURE__ */ c.createElement(dt, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(W, { strong: !0, style: { fontSize: 12 } }, g(t, "thisRequest")), i, /* @__PURE__ */ c.createElement(ys, { request: e, locale: t }), e.sessionTotals ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
        W,
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
        children: /* @__PURE__ */ c.createElement(ue, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ c.createElement(
    It,
    {
      size: "small",
      activeKey: n,
      onChange: (m) => l(m),
      items: a,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Es(e, s = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function Ss({
  oldText: e,
  newText: s
}) {
  const t = c.useMemo(
    () => Zn(e, s),
    [e, s]
  ), n = c.useMemo(() => es(t), [t]), l = c.useMemo(() => qn(t), [t]), o = Z();
  return e === void 0 ? /* @__PURE__ */ c.createElement(W, { type: "secondary", style: { fontSize: 12 } }, g(o, "noPrevPrompt")) : /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ c.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ c.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ c.createElement(
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
    l.map((i, a) => {
      if (i.kind === "gap")
        return /* @__PURE__ */ c.createElement(
          "div",
          {
            key: a,
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
      const m = i;
      return /* @__PURE__ */ c.createElement(
        "div",
        {
          key: a,
          style: {
            padding: "0 8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            background: m.kind === "add" ? "rgba(82,196,26,0.12)" : m.kind === "del" ? "rgba(255,77,79,0.10)" : void 0,
            color: m.kind === "del" ? "rgba(255,77,79,0.9)" : void 0
          }
        },
        m.kind === "add" ? "+ " : m.kind === "del" ? "− " : "  ",
        m.text || " "
      );
    })
  ));
}
function bs({ record: e }) {
  var o;
  const s = Z(), t = e.headerTools ?? [], n = e.headerReason === "changed", l = [
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
          Ss,
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
      children: /* @__PURE__ */ c.createElement(ue, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 4 } }, t.map((i) => /* @__PURE__ */ c.createElement(W, { key: i, code: !0, style: { fontSize: 11 } }, i)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ c.createElement(
          cs,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((i, a) => {
              var v;
              const m = typeof i.name == "string" && i.name || typeof ((v = i.function) == null ? void 0 : v.name) == "string" && i.function.name || `tool-${a + 1}`;
              return {
                key: String(a),
                label: /* @__PURE__ */ c.createElement(W, { code: !0, style: { fontSize: 11 } }, m),
                children: /* @__PURE__ */ c.createElement(ue, { value: i })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ c.createElement(ue, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ c.createElement(It, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
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
      icon: /* @__PURE__ */ c.createElement(ds, null),
      onClick: e
    }
  )) : null;
}
function xs({
  record: e,
  request: s,
  onJumpSession: t,
  onJumpRecord: n,
  onSelectTurn: l,
  onClose: o
}) {
  const i = Z(), [a, m] = _n(400), v = as(null);
  if (rs(() => {
    const x = (P) => {
      const k = v.current;
      if (k === null) return;
      const _ = k.anchorX - P.clientX;
      m(
        Math.min(ms, Math.max(hs, k.anchorWidth + _))
      );
    }, z = () => {
      v.current = null;
    };
    return window.addEventListener("pointermove", x), window.addEventListener("pointerup", z), () => {
      window.removeEventListener("pointermove", x), window.removeEventListener("pointerup", z);
    };
  }, []), e === null && s === null)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: a,
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
          description: g(i, "selectRecord")
        }
      )
    );
  if (e === null && s !== null)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: a,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ c.createElement(ht, { dragRef: v, width: a }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: o }), /* @__PURE__ */ c.createElement(vs, { request: s, onJumpRecord: n }))
    );
  const r = e;
  if (r.kind === "system" && r.prompt !== void 0)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: a,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      /* @__PURE__ */ c.createElement(ht, { dragRef: v, width: a }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: o }), /* @__PURE__ */ c.createElement(bs, { record: r }))
    );
  const h = r.usage, u = r.timing, b = [];
  return b.push({
    key: "summary",
    label: g(i, "summary"),
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "#", value: String(r.index) }), /* @__PURE__ */ c.createElement($, { label: "Kind", value: bn(r, i) }), r.runIndex > 0 && l ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(r.runIndex)
      },
      "Request #",
      r.runIndex,
      " →"
    )) : null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(i, "status"),
        value: r.running ? g(i, "running") : r.isError ? g(i, "error") : g(i, "success"),
        danger: r.isError
      }
    ), r.provider ? /* @__PURE__ */ c.createElement($, { label: "Provider", value: r.provider }) : null, r.model ? /* @__PURE__ */ c.createElement($, { label: g(i, "model"), value: r.model }) : null, r.toolName ? /* @__PURE__ */ c.createElement($, { label: "Tool", value: r.toolName }) : null, r.inSkill ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(i, "skillResource"),
        value: r.inSkillLoaded ? `⚡ ${r.inSkill}` : `⚡ ${r.inSkill}（${g(i, "skillBypass")}）`
      }
    ) : null, r.toolOutputChars ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(i, "outputSize"),
        value: r.toolOutputBytes ? `${K(r.toolOutputChars)} ${g(
          i,
          "charUnit"
        )} · ${kt(r.toolOutputBytes)} (${g(
          i,
          "beforeTruncation"
        )})` : `${K(r.toolOutputChars)} ${g(
          i,
          "charUnit"
        )}`
      }
    ) : null, r.kind === "user" && (r.channel || r.userId) ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(i, "source"),
        value: [r.channel, r.userId].filter(Boolean).join(" · ")
      }
    ) : null, r.receipt ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(i, "channel"),
        value: r.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(i, "duration"),
        value: ie(r.timeSeconds)
      }
    ), r.note ? /* @__PURE__ */ c.createElement(W, { type: "warning", style: { fontSize: 12 } }, r.note) : null, r.spawnSession ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(i, "spawnedAgent"),
        value: r.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ c.createElement(
      Cn,
      {
        size: "small",
        onClick: () => r.spawnSession && t(r.spawnSession),
        style: { marginTop: 4 }
      },
      g(i, "openChildSession")
    ) : null) : null)
  }), r.kind === "tool" ? (r.toolInput && b.push({
    key: "payload",
    label: g(i, "input"),
    children: /* @__PURE__ */ c.createElement(ue, { value: r.toolInput, json: !0 })
  }), (r.toolOutput || r.toolError) && b.push({
    key: "result",
    label: g(i, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.toolError ? /* @__PURE__ */ c.createElement(W, { type: "danger", style: { fontSize: 12 } }, r.toolError) : null, r.toolOutput ? /* @__PURE__ */ c.createElement(ue, { value: r.toolOutput }) : null)
  })) : (r.outputText || r.thinkingText || r.messages || r.marker || r.toolCalls && r.toolCalls.length > 0) && (r.inputNew && r.inputNew.length > 0 && b.push({
    key: "input",
    label: g(i, "inputTab"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.contextReset ? /* @__PURE__ */ c.createElement(W, { type: "warning", style: { fontSize: 12 } }, g(i, "contextReset")) : null, r.messagesMeta ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(i, "inputTotal"),
        value: `${r.messagesMeta.count} · ${K(
          r.messagesMeta.totalChars
        )} ${g(i, "charUnit")}`
      }
    ) : null, r.inputNew.map((x, z) => /* @__PURE__ */ c.createElement("div", { key: z }, /* @__PURE__ */ c.createElement(
      "div",
      {
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(W, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, x.role),
      /* @__PURE__ */ c.createElement(W, { type: "secondary", style: { fontSize: 11 } }, K(x.chars), " ", g(i, "charUnit"), x.toolCallId ? ` · ${x.toolCallId}` : "")
    ), x.text ? /* @__PURE__ */ c.createElement(ue, { value: x.text }) : null)))
  }), b.push({
    key: "raw",
    label: g(i, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, r.inboundParts && r.inboundParts.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(W, { type: "secondary", style: { fontSize: 12 } }, `${g(i, "inboundParts")} (${r.inboundParts.length})`), r.inboundParts.map((x, z) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: z,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(W, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, x.type.replace("Content", "")),
      /* @__PURE__ */ c.createElement(
        W,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        x.text ?? "-"
      )
    ))) : null, r.marker ? /* @__PURE__ */ c.createElement(ue, { value: r.marker }) : null, r.toolCalls && r.toolCalls.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(W, { type: "secondary", style: { fontSize: 12 } }, `${g(i, "toolCall")} (${r.toolCalls.length})`), r.toolCalls.map((x, z) => /* @__PURE__ */ c.createElement("div", { key: x.id || z, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ c.createElement(W, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", x.name), /* @__PURE__ */ c.createElement(W, { type: "secondary", style: { fontSize: 11 } }, x.id)))) : null, r.note ? /* @__PURE__ */ c.createElement(W, { type: "warning", style: { fontSize: 12 } }, r.note) : null, r.messages && r.messages.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(W, { type: "secondary", style: { fontSize: 12 } }, `${g(i, "query")} (${r.messages.length})`), r.messages.map((x, z) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: z,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(W, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, x.role),
      /* @__PURE__ */ c.createElement(
        W,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        x.text
      )
    ))) : null, r.thinkingText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(W, { type: "secondary", style: { fontSize: 12 } }, g(i, "thinking")), /* @__PURE__ */ c.createElement(ue, { value: r.thinkingText })) : null, r.outputText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(W, { type: "secondary", style: { fontSize: 12 } }, g(i, "output")), /* @__PURE__ */ c.createElement(ue, { value: r.outputText })) : null)
  })), (r.startedAt !== null || h || u) && b.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Started", value: Pe(r.startedAt) }), /* @__PURE__ */ c.createElement($, { label: "Total", value: ie(r.timeSeconds) }), u ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: "TTFT",
        value: ie(u.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Decoding",
        value: ie(u.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      $,
      {
        label: g(i, "throughput"),
        value: Ct(
          h == null ? void 0 : h.output_tokens,
          u.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ c.createElement(W, { type: "secondary", style: { fontSize: 12 } }, g(i, "noTiming")))
  }), h && b.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Input", value: K(h.input_tokens) }), /* @__PURE__ */ c.createElement($, { label: "Output", value: K(h.output_tokens) }), h.cache_creation_input_tokens ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Cache write",
        value: K(h.cache_creation_input_tokens)
      }
    ) : null, h.cache_input_tokens ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Cache read",
        value: K(h.cache_input_tokens)
      }
    ) : null, h.total_tokens !== void 0 ? /* @__PURE__ */ c.createElement($, { label: "Total", value: K(h.total_tokens) }) : null, h.time !== void 0 ? /* @__PURE__ */ c.createElement($, { label: "API time", value: ie(h.time) }) : null)
  }), b.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ c.createElement(ue, { value: r.raw })
  }), /* @__PURE__ */ c.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: a,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative"
      }
    },
    /* @__PURE__ */ c.createElement(ht, { dragRef: v, width: a }),
    /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: o }), /* @__PURE__ */ c.createElement(It, { size: "small", items: b, tabBarStyle: { marginBottom: 8 } }))
  );
}
const ee = window.QwenPaw.host.React, ks = ee.useRef, ws = ee.useState;
ee.useCallback;
ee.useMemo;
const Ts = ee.useEffect, _s = ee.useLayoutEffect, Cs = ee.useReducer;
ee.createContext;
ee.useContext;
ee.createElement;
ee.cloneElement;
ee.isValidElement;
ee.memo;
ee.forwardRef;
ee.Fragment;
ee.StrictMode;
ee.version;
function Is(e) {
  return e ? e() : void 0;
}
function Ms(e, s, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(l, o, i) {
      if (typeof o == "string") {
        const a = o.charCodeAt(0);
        if (a >= 48 && a <= 57) {
          const m = +o;
          if (Number.isInteger(m) && m >= 0 && m < e) {
            let v = l[m];
            if (!v) {
              const r = s[m * 2];
              v = l[m] = {
                index: m,
                key: t(m),
                start: r,
                size: s[m * 2 + 1],
                end: r + s[m * 2 + 1],
                lane: 0
              };
            }
            return v;
          }
        }
        if (o === "length") return e;
      }
      return Reflect.get(l, o, i);
    }
  });
}
function _e(e, s, t) {
  let n = t.initialDeps ?? [], l, o = !0;
  function i() {
    var a;
    const m = process.env.NODE_ENV !== "production" && !!t.key && !!((a = t.debug) != null && a.call(t));
    let v = 0;
    m && (v = Date.now());
    const r = e();
    if (!(r.length !== n.length || r.some((b, x) => n[x] !== b)))
      return l;
    n = r;
    let u = 0;
    if (m && (u = Date.now()), l = s(...r), m) {
      const b = Math.round((Date.now() - v) * 100) / 100, x = Math.round((Date.now() - u) * 100) / 100, z = x / 16, P = (k, _) => {
        for (k = String(k); k.length < _; )
          k = " " + k;
        return k;
      };
      console.info(
        `%c⏱ ${P(x, 5)} /${P(b, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * z, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(o && t.skipInitialOnChange) && t.onChange(l), o = !1, l;
  }
  return i.updateDeps = (a) => {
    n = a;
  }, i;
}
function Ht(e, s) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const zs = (e, s) => Math.abs(e - s) < 1.01, Os = (e, s, t) => {
  let n;
  return function(...l) {
    e.clearTimeout(n), n = e.setTimeout(() => s.apply(this, l), t);
  };
};
let De;
const ft = () => {
  if (De !== void 0) return De;
  if (typeof navigator > "u") return De = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return De = !0;
  const e = navigator.maxTouchPoints;
  return De = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Ut = (e) => {
  const { offsetWidth: s, offsetHeight: t } = e;
  return { width: s, height: t };
}, $s = (e) => e, As = (e) => {
  const s = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - s + 1, l = new Array(n);
  for (let o = 0; o < n; o++)
    l[o] = s + o;
  return l;
}, Rs = (e, s) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const l = (i) => {
    const { width: a, height: m } = i;
    s({ width: Math.round(a), height: Math.round(m) });
  };
  if (l(Ut(t)), !n.ResizeObserver)
    return () => {
    };
  const o = new n.ResizeObserver((i) => {
    const a = () => {
      const m = i[0];
      if (m != null && m.borderBoxSize) {
        const v = m.borderBoxSize[0];
        if (v) {
          l({ width: v.inlineSize, height: v.blockSize });
          return;
        }
      }
      l(Ut(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, Ze = {
  passive: !0
}, Ls = typeof window > "u" ? !0 : "onscrollend" in window, js = (e, s, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && Ls;
  let i = 0;
  const a = o ? null : Os(
    l,
    () => s(i, !1),
    e.options.isScrollingResetDelay
  ), m = (h) => () => {
    i = t(n), a == null || a(), s(i, h);
  }, v = m(!0), r = m(!1);
  return n.addEventListener("scroll", v, Ze), o && n.addEventListener("scrollend", r, Ze), () => {
    n.removeEventListener("scroll", v), o && n.removeEventListener("scrollend", r);
  };
}, Ds = (e, s) => js(e, s, (t) => {
  const { horizontal: n, isRtl: l } = e.options;
  return n ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), Ns = (e, s, t) => {
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
}, Ps = (e, {
  adjustments: s = 0,
  behavior: t
}, n) => {
  var l, o;
  (o = (l = n.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [n.options.horizontal ? "left" : "top"]: e + s,
    behavior: t
  });
}, Fs = Ps;
class Bs {
  constructor(s) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, l;
      return ((l = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : l.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const i = () => {
            const a = o.target, m = this.indexFromElement(a);
            if (!a.isConnected) {
              this.observer.unobserve(a);
              for (const [v, r] of this.elementsCache)
                if (r === a) {
                  this.elementsCache.delete(v);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(m) && this.resizeItem(
              m,
              this.options.measureElement(a, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
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
        getItemKey: $s,
        rangeExtractor: As,
        onChange: () => {
        },
        measureElement: Ns,
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
        const b = t[u];
        b !== void 0 && (o[u] = b);
      }
      const i = this.options;
      let a = null, m = null, v = !1;
      if (i !== void 0 && i.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const u = i.count, b = o.count, x = this.getMeasurements(), z = u > 0 ? ((n = x[0]) == null ? void 0 : n.key) ?? i.getItemKey(0) : null, P = u > 0 ? ((l = x[u - 1]) == null ? void 0 : l.key) ?? i.getItemKey(u - 1) : null;
        if (b !== u || u > 0 && b > 0 && (o.getItemKey(0) !== z || o.getItemKey(b - 1) !== P)) {
          v = !0;
          const j = u > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? x[0] : null;
          j && (a = [j.key, this.getScrollOffset() - j.start]);
          const f = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          f && b > u && this.isAtEnd(i.scrollEndThreshold) && (u === 0 || o.getItemKey(b - 1) !== P) && (m = f);
        }
      }
      this.options = o, v && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let r = !1, h = 0;
      if (a && this.scrollOffset !== null) {
        const [u, b] = a, x = this.getMeasurements(), { count: z, getItemKey: P } = this.options;
        let k = 0;
        for (; k < z && P(k) !== u; )
          k++;
        if (k < z) {
          const _ = x[k];
          if (_) {
            const j = Math.max(0, _.start + b);
            j !== this.scrollOffset && (h = j - this.scrollOffset, this.scrollOffset = j, r = !0);
          }
        }
      }
      (r || m) && (this.pendingScrollAnchor = [
        r ? a[0] : null,
        r ? a[1] : 0,
        m,
        h
      ]);
    }, this.notify = (t) => {
      var n, l;
      (l = (n = this.options).onChange) == null || l.call(n, this, t);
    }, this.maybeNotify = _e(
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
          this.options.observeElementOffset(this, (o, i) => {
            if (i && this._intendedScrollOffset === null && o === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(o - this._intendedScrollOffset) < 1.5 && (o = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const a = this.getScrollOffset();
            this.scrollDirection = i ? a === o ? this.scrollDirection : a < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = i, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, i = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, a = () => {
            this._iosTouching = !1, !(!ft() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            i,
            Ze
          ), o.addEventListener(
            "touchend",
            a,
            Ze
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", i), o.removeEventListener("touchend", a), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const l = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, l && this.scrollElement && this.options.enabled) {
        const [o, i, a, m] = l;
        o !== null && !a && (ft() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? m !== 0 && (this._iosDeferredAdjustment += m) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), a && this.scrollToEnd({ behavior: a });
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
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = _e(
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
      (t, n, l, o, i, a, m, v) => (this.prevLanes !== void 0 && this.prevLanes !== a && (this.lanesChangedFlag = !0), this.prevLanes = a, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: o,
        enabled: i,
        lanes: a,
        laneAssignmentMode: m,
        gap: v
      }),
      {
        key: !1
      }
    ), this.getMeasurements = _e(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: o,
        enabled: i,
        lanes: a,
        laneAssignmentMode: m,
        gap: v
      }, r) => {
        const h = this.itemSizeCache;
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const k of this.laneAssignments.keys())
            k >= t && this.laneAssignments.delete(k);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((k) => {
          this.itemSizeCache.set(k.key, k.size);
        }));
        const u = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), a === 1) {
          const k = t * 2;
          let _ = this._flatMeasurements;
          if (!_ || _.length < k) {
            const d = new Float64Array(k);
            _ && u > 0 && d.set(_.subarray(0, u * 2)), _ = d, this._flatMeasurements = _;
          }
          let j;
          if (u === 0)
            j = n + l;
          else {
            const d = u - 1;
            j = _[d * 2] + _[d * 2 + 1] + v;
          }
          for (let d = u; d < t; d++) {
            const S = o(d), p = h.get(S), w = typeof p == "number" ? p : this.options.estimateSize(d);
            _[d * 2] = j, _[d * 2 + 1] = w, j += w + v;
          }
          const f = Ms(t, _, o);
          return this.measurementsCache = f, f;
        }
        const b = this.measurementsCache.slice(0, u), x = new Array(a).fill(
          void 0
        ), z = new Float64Array(a);
        let P = 0;
        for (let k = 0; k < u; k++) {
          const _ = b[k];
          _ && (x[_.lane] === void 0 && P++, x[_.lane] = k, z[_.lane] = _.end);
        }
        for (let k = u; k < t; k++) {
          const _ = o(k), j = this.laneAssignments.get(k);
          let f, d;
          const S = m === "estimate" || h.has(_);
          if (j !== void 0 && this.options.lanes > 1) {
            f = j;
            const O = x[f], R = O !== void 0 ? b[O] : void 0;
            d = R ? R.end + v : n + l;
          } else if (P === a) {
            let O = 0, R = z[0], H = x[0];
            for (let L = 1; L < a; L++) {
              const V = z[L];
              (V < R || V === R && x[L] < H) && (O = L, R = V, H = x[L]);
            }
            f = O, d = R + v, S && this.laneAssignments.set(k, f);
          } else
            f = k % this.options.lanes, d = n + l, S && this.laneAssignments.set(k, f);
          const p = h.get(_), w = typeof p == "number" ? p : this.options.estimateSize(k), C = d + w;
          b[k] = {
            index: k,
            start: d,
            size: w,
            end: C,
            key: _,
            lane: f
          }, x[f] === void 0 && P++, x[f] = k, z[f] = C;
        }
        return this.measurementsCache = b, b;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = _e(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, l, o) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = Us(
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
    ), this.getVirtualIndexes = _e(
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
      (t, n, l, o, i) => o === null || i === null ? [] : t({
        startIndex: o,
        endIndex: i,
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
        ), i = Math.max(0, l - o), a = Math.min(
          this.options.count - 1,
          l + o
        );
        return t >= i && t <= a;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((i, a) => {
          i.isConnected || (this.observer.unobserve(i), this.elementsCache.delete(a));
        });
        return;
      }
      const n = this.indexFromElement(t), l = this.options.getItemKey(n), o = this.elementsCache.get(l);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(l, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var l, o;
      if (t < 0 || t >= this.options.count) return;
      let i, a, m;
      const v = this._flatMeasurements;
      if (this.options.lanes === 1 && v !== null)
        m = this.options.getItemKey(t), a = v[t * 2], i = v[t * 2 + 1];
      else {
        const u = this.measurementsCache[t];
        if (!u) return;
        m = u.key, a = u.start, i = u.size;
      }
      const r = this.itemSizeCache.get(m) ?? i, h = n - r;
      if (h !== 0) {
        const u = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, b = u ? this.getTotalSize() : 0, x = this.getScrollOffset() + this.scrollAdjustments, P = !this.itemSizeCache.has(m) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          a < x
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          a + r <= x && this.scrollDirection !== "backward"
        ), k = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: m,
            start: a,
            size: i,
            end: a + i,
            lane: 0
          },
          h,
          this
        ) : P);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(m, n), this.itemSizeCacheVersion++;
        let _ = !1;
        u ? _ = this.applyScrollAdjustment(
          this.getTotalSize() - b
        ) : k && (_ = this.applyScrollAdjustment(h)), this.notify(_);
      }
    }, this.getVirtualItems = _e(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const l = [];
        for (let o = 0, i = t.length; o < i; o++) {
          const a = t[o], m = n[a];
          l.push(m);
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
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, i = In(
        0,
        n.length - 1,
        o ? (a) => l[a * 2] : (a) => Ht(n[a]).start,
        t
      );
      return Ht(n[i]);
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
      const o = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = t >= i + o ? "end" : "start"), n === "center" ? t += (l - o) / 2 : n === "end" && (t -= o);
      const a = this.getMaxScrollOffset();
      return Math.max(Math.min(a, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const l = this.getSize(), o = this.getScrollOffset(), i = this.measurementsCache[t];
      if (!i) return;
      if (n === "auto")
        if (i.end >= o + l - this.options.scrollPaddingEnd)
          n = "end";
        else if (i.start <= o + this.options.scrollPaddingStart)
          n = "start";
        else
          return [o, n];
      if (n === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const a = n === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(a, n, i.size),
        n
      ];
    }, this.scrollToOffset = (t, { align: n = "start", behavior: l = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(t, n), i = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: l,
        startedAt: i,
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
      const [i, a] = o, m = this.now();
      this.scrollState = {
        index: t,
        align: a,
        behavior: l,
        startedAt: m,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: l }), this.scheduleScrollReconcile();
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
        const o = n.length - 1, i = this._flatMeasurements;
        i != null ? l = i[o * 2] + i[o * 2 + 1] : l = ((t = n[o]) == null ? void 0 : t.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let i = n.length - 1;
        for (; i >= 0 && o.some((a) => a === null); ) {
          const a = n[i];
          o[a.lane] === null && (o[a.lane] = a.end), i--;
        }
        l = Math.max(...o.filter((a) => a !== null));
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, l = n ? n[0] : this.scrollState.lastTargetOffset, o = 1, i = l !== this.scrollState.lastTargetOffset;
    if (!i && zs(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, i) {
      const a = this.getSize() || 600, m = Math.abs(l - this.getScrollOffset()), v = this.scrollState.behavior === "smooth" && m > a;
      this.scrollState.lastTargetOffset = l, v || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: v ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const In = (e, s, t, n) => {
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
function Hs(e, s, t) {
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
function Us(e, s, t, n, l) {
  const o = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: o };
  if (n === 1 && l !== null) {
    const v = Hs(
      l,
      o,
      t
    );
    let r = v;
    const h = t + s;
    for (; r < o && l[r * 2] + l[r * 2 + 1] < h; )
      r++;
    return { startIndex: v, endIndex: r };
  }
  let a = In(0, o, (v) => e[v].start, t), m = a;
  if (n === 1)
    for (; m < o && e[m].end < t + s; )
      m++;
  else if (n > 1) {
    const v = Array(n).fill(0);
    for (; m < o && v.some((h) => h < t + s); ) {
      const h = e[m];
      v[h.lane] = h.end, m++;
    }
    const r = Array(n).fill(t + s);
    for (; a >= 0 && r.some((h) => h >= t); ) {
      const h = e[a];
      r[h.lane] = h.start, a--;
    }
    a = Math.max(0, a - a % n), m = Math.min(o, m + (n - 1 - m % n));
  }
  return { startIndex: a, endIndex: m };
}
const pt = typeof document < "u" ? _s : Ts;
function Ws({
  useFlushSync: e = !0,
  directDomUpdates: s = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const l = Cs((r) => r + 1, 0)[1], o = ks({
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
  const i = (r) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    const u = r.getTotalSize();
    if (u !== h.lastSize) {
      h.lastSize = u;
      const b = r.options.horizontal ? "width" : "height";
      h.container.style[b] = `${u}px`;
    }
  }, a = (r) => {
    const h = o.current;
    if (!h.enabled || !h.container) return;
    i(r);
    const u = !!r.options.horizontal, b = h.mode === "transform", x = u ? "left" : "top", z = r.options.scrollMargin, P = r.getVirtualItems();
    for (const k of P) {
      const _ = k.start - z, j = r.elementsCache.get(k.key);
      j && h.lastPositions.get(j) !== _ && (h.lastPositions.set(j, _), b ? j.style.transform = u ? `translate3d(${_}px, 0, 0)` : `translate3d(0, ${_}px, 0)` : j.style[x] = `${_}px`);
    }
  }, m = {
    ...n,
    onChange: (r, h) => {
      var u;
      const b = o.current;
      let x = !0;
      if (b.enabled) {
        a(r);
        const z = r.range, P = b.prevRange;
        x = !P || P.isScrolling !== r.isScrolling || P.startIndex !== (z == null ? void 0 : z.startIndex) || P.endIndex !== (z == null ? void 0 : z.endIndex), x && (b.prevRange = z ? {
          startIndex: z.startIndex,
          endIndex: z.endIndex,
          isScrolling: r.isScrolling
        } : null);
      }
      x && (e && h ? Is(l) : l()), (u = n.onChange) == null || u.call(n, r, h);
    }
  }, [v] = ws(() => {
    const r = new Bs(m);
    return Object.assign(r, {
      containerRef: (h) => {
        const u = o.current;
        if (u.container = h, u.lastSize = null, h && u.enabled) {
          const b = r.getTotalSize();
          u.lastSize = b;
          const x = r.options.horizontal ? "width" : "height";
          h.style[x] = `${b}px`;
        }
      }
    });
  });
  return v.setOptions(m), pt(() => v._didMount(), []), pt(() => (i(v), v._willUpdate())), pt(() => {
    a(v);
  }), v;
}
function Ks(e) {
  return Ws({
    observeElementRect: Rs,
    observeElementOffset: Ds,
    scrollToFn: Fs,
    ...e
  });
}
const tt = window.QwenPaw.host, M = tt.React, { useRef: Vs } = M, { Tag: Fe } = tt.antd, { Text: oe } = tt.antd.Typography, {
  CaretRightOutlined: Xs,
  CloseCircleOutlined: Gs,
  FileTextOutlined: Js,
  RobotOutlined: Qs,
  RocketOutlined: Ys,
  SafetyOutlined: Zs,
  SendOutlined: qs,
  SettingOutlined: el,
  ToolOutlined: tl,
  UserOutlined: nl
} = tt.antdIcons, sl = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, ll = {
  user: /* @__PURE__ */ M.createElement(nl, null),
  message: /* @__PURE__ */ M.createElement(Qs, null),
  tool: /* @__PURE__ */ M.createElement(tl, null),
  system: /* @__PURE__ */ M.createElement(el, null)
}, Wt = {
  approval: { color: "volcano", icon: /* @__PURE__ */ M.createElement(Zs, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ M.createElement(qs, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ M.createElement(Ys, null) },
  header: { color: "green", icon: /* @__PURE__ */ M.createElement(Js, null) },
  error: { color: "red", icon: /* @__PURE__ */ M.createElement(Gs, null) }
}, ol = {
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
}, il = 150, wt = 26, Mn = 34, Vt = 9, Xt = 30;
function rl(e) {
  const s = Z(), t = Kt[e] ?? Kt.unknown;
  return s === "zh-CN" ? t.zh : t.en;
}
const al = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function cl(e, s) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.inboundParts ?? []) {
    const l = al[n.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([n, l]) => `${g(s, n)}×${l}`).join(" ");
}
function ul(e, s) {
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
  var a, m;
  const o = e.usage, i = o && (o.input_tokens || o.output_tokens) ? `${K(o.input_tokens)}→${K(
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
        height: wt,
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
      Fe,
      {
        color: e.skillName ? "geekblue" : e.markerKind && ((a = Wt[e.markerKind]) == null ? void 0 : a.color) || sl[e.kind] || "default",
        icon: e.markerKind && ((m = Wt[e.markerKind]) == null ? void 0 : m.icon) || ll[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      e.skillName ? g(Z(), "skillLoadKind") : bn(e, Z())
    ),
    e.kind === "message" && e.model && e.model !== "unknown" ? /* @__PURE__ */ M.createElement(
      Fe,
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
      Fe,
      {
        color: e.inSkillLoaded ? "geekblue" : "orange",
        title: e.inSkillLoaded ? e.inSkill : `${e.inSkill} — ${g(Z(), "skillBypass")}`,
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
      e.receipt ? /* @__PURE__ */ M.createElement(oe, { type: "secondary", style: { fontSize: 12 } }, ul(e, Z())) : e.skillName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(oe, { strong: !0, style: { fontSize: 12 } }, e.skillName), e.toolError ? /* @__PURE__ */ M.createElement(oe, { type: "danger", style: { fontSize: 12 } }, ` → ${e.toolError}`) : e.toolOutputChars ? /* @__PURE__ */ M.createElement(oe, { type: "secondary", style: { fontSize: 12 } }, ` · ${g(Z(), "skillLoaded")} ${K(
        e.toolOutputChars
      )} ${g(Z(), "charUnit")}`) : null) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(oe, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ M.createElement(oe, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ M.createElement(
        oe,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(
        oe,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(oe, { type: "secondary", style: { fontSize: 11 } }, ` ${cl(e, Z()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ M.createElement(oe, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
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
      i ? /* @__PURE__ */ M.createElement("span", { style: { color: "#1677ff" } }, i) : null,
      i ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && ie(e.timeSeconds)
    )
  );
}
function dl({
  turn: e,
  collapsed: s,
  selected: t,
  cellCount: n,
  onToggle: l,
  onSelect: o
}) {
  const i = Z();
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Mn }
    },
    /* @__PURE__ */ M.createElement(
      "span",
      {
        onClick: (a) => {
          a.stopPropagation(), o();
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
        Xs,
        {
          onClick: (a) => {
            a.stopPropagation(), l();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: s ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ M.createElement(oe, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ M.createElement(oe, { type: "secondary", style: { fontSize: 11 } }, ie(e.durationMs / 1e3)),
      /* @__PURE__ */ M.createElement(oe, { type: "secondary", style: { fontSize: 11 } }, n, " ", g(i, "events")),
      e.skillsUsed && e.skillsUsed.length > 0 ? /* @__PURE__ */ M.createElement(
        Fe,
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
        Fe,
        {
          color: ol[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        rl(e.status)
      )
    )
  );
}
function hl({
  turns: e,
  selectedIndex: s,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: i,
  onSelectedTurnChange: a,
  onToggleTurn: m,
  callsCollapsed: v,
  hasOlderRecords: r,
  loadingOlder: h,
  onLoadOlder: u,
  initialRecord: b,
  emptyText: x
}) {
  const z = Z(), P = Vs(null), k = e.filter((p) => p.turn !== null), _ = k.length > 1, j = M.useMemo(() => {
    var w;
    const p = [];
    r && p.push({
      key: "load-older",
      height: Xt,
      type: "load-older"
    }), b && (p.push({
      key: "initial",
      height: wt,
      type: "initial",
      record: b
    }), p.push({
      key: "initial-divider",
      height: Vt,
      type: "divider"
    }));
    for (const C of k) {
      const O = C.turn;
      if (p.push({
        key: `turn-${O}`,
        height: Mn,
        type: "boundary",
        turn: C
      }), !n.has(O))
        for (const R of ((w = C.groups[0]) == null ? void 0 : w.cells) ?? [])
          v && R.kind === "tool" || p.push({
            key: `rec-${R.index}`,
            height: wt,
            type: "record",
            record: R
          });
    }
    return p;
  }, [
    k,
    n,
    v,
    r,
    b
  ]), f = M.useCallback(
    (p) => l !== null && !l.has(p.index) || o !== null && !o.has(p.index),
    [l, o]
  ), d = (p) => {
    var w;
    switch (p.type) {
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
          h ? "…" : `⋯ ${g(z, "loadOlder")}`
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
        const C = p.record;
        return /* @__PURE__ */ M.createElement(
          Gt,
          {
            record: C,
            selected: s === C.index,
            dimmed: f(C),
            multiRequest: _,
            onSelect: () => i(C.index)
          }
        );
      }
      case "boundary": {
        const C = p.turn, O = C.turn;
        return /* @__PURE__ */ M.createElement(
          dl,
          {
            turn: C,
            collapsed: n.has(O),
            selected: t === O,
            cellCount: ((w = C.groups[0]) == null ? void 0 : w.cells.length) ?? 0,
            onToggle: () => m(O),
            onSelect: () => a(O)
          }
        );
      }
      case "record":
      default: {
        const C = p.record;
        return /* @__PURE__ */ M.createElement(
          Gt,
          {
            record: C,
            selected: s === C.index,
            dimmed: f(C),
            multiRequest: _,
            onSelect: () => i(C.index)
          }
        );
      }
    }
  };
  if (j.length === 0)
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
        x ?? g(z, "noSessions")
      )
    );
  const S = j.length <= il ? /* @__PURE__ */ M.createElement("div", null, j.map((p) => d(p))) : /* @__PURE__ */ M.createElement(
    ml,
    {
      rows: j,
      scrollRef: P,
      renderRow: d
    }
  );
  return /* @__PURE__ */ M.createElement(
    "div",
    {
      ref: P,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    S
  );
}
function ml({
  rows: e,
  scrollRef: s,
  renderRow: t
}) {
  const n = Ks({
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
function fl(e) {
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
function pl(e) {
  if (!(typeof e != "string" || !e))
    try {
      const s = JSON.parse(e);
      if (typeof s.skill == "string" && s.skill)
        return s.skill;
    } catch {
    }
}
function zn(e) {
  return e.replace(/[/\\]+/g, "/").toLowerCase();
}
function gl(e) {
  const s = [];
  for (const t of e.matchAll(/<skill>([\s\S]*?)<\/skill>/g)) {
    const n = t[1].match(/<name>([^<]+)<\/name>/), l = t[1].match(/<dir>([^<]+)<\/dir>/);
    n && l && l[1].trim() && s.push([zn(l[1].trim()), n[1].trim()]);
  }
  return s.sort((t, n) => n[0].length - t[0].length), s;
}
function pe(e, s = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function yl(e) {
  var j;
  const s = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = [];
  let a = "";
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  let h = [];
  const u = /* @__PURE__ */ new Set();
  let b = 0, x = 0;
  const z = (f) => f.groups[0].cells, P = (f, d) => {
    const S = o.get(f);
    S ? S.push(d) : o.set(f, [d]);
  }, k = (f, d) => {
    if (!f)
      if (a)
        f = a;
      else {
        i.push(d);
        return;
      }
    const S = t.get(f);
    if (S)
      d.runIndex = S.turn ?? 0, z(S).push(d);
    else if (a) {
      const p = t.get(a);
      p ? (d.runIndex = p.turn ?? 0, z(p).push(d)) : P(f, d);
    } else
      P(f, d);
  }, _ = (f, d) => {
    const S = o.get(d);
    if (S) {
      for (const p of S) z(f).push(p);
      o.delete(d);
    }
  };
  for (const f of e) {
    const d = gt(f);
    switch (f.type) {
      case "run/start": {
        x += 1, m.set(
          f.run_id,
          typeof d.channel == "string" ? d.channel : ""
        );
        const S = {
          turn: x,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${x}`, cells: [] }]
        };
        t.set(f.run_id, S), s.push(S), a = f.run_id, _(S, f.run_id);
        for (const O of i.splice(0))
          O.runIndex = x, z(S).push(O);
        const p = Array.isArray(d.messages) ? d.messages : [], w = String(d.query ?? ""), C = {
          index: ++b,
          runIndex: x,
          runId: f.run_id,
          kind: "user",
          text: pe(w) || pe((j = p.at(-1)) == null ? void 0 : j.text),
          messages: p,
          timeSeconds: 0,
          startedAt: ae(f.t),
          isError: !1,
          running: !1,
          model: void 0
        };
        v.set(f.run_id, C), z(S).push(C);
        break;
      }
      case "run/end": {
        const S = t.get(f.run_id);
        a === f.run_id && (a = ""), m.delete(f.run_id), v.delete(f.run_id);
        const p = String(d.status ?? "unknown");
        if (S && (S.status = p, S.durationMs = typeof d.duration_ms == "number" ? d.duration_ms : null), p === "error" && d.error) {
          const w = S ?? {
            turn: null,
            status: p,
            durationMs: typeof d.duration_ms == "number" ? d.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          S || s.push(w), w.groups[0].cells.push({
            index: ++b,
            runIndex: x,
            runId: f.run_id,
            kind: "system",
            markerKind: "error",
            text: pe(String(d.error)) || "run failed",
            marker: String(d.error ?? "run failed"),
            timeSeconds: typeof d.duration_ms == "number" ? d.duration_ms / 1e3 : null,
            startedAt: ae(f.t),
            isError: !0,
            running: !1,
            raw: [f]
          });
        }
        break;
      }
      case "agent/spawn": {
        const S = typeof d.child_session_id == "string" ? d.child_session_id : void 0, p = typeof d.child_agent_id == "string" ? d.child_agent_id : "?";
        k(f.run_id, {
          index: ++b,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${p} → ${S ?? "?"}`,
          timeSeconds: 0,
          startedAt: ae(f.t),
          isError: !1,
          running: !1,
          spawnSession: S,
          spawnAgent: p,
          raw: [f]
        });
        break;
      }
      case "message/inbound": {
        const S = Array.isArray(d.parts) ? d.parts : [], p = d.channel_meta && typeof d.channel_meta == "object" ? d.channel_meta : void 0, w = S.map((L) => ({
          type: String(L.type ?? "?"),
          text: typeof L.text == "string" ? L.text : void 0
        })), C = m.get(f.run_id) ?? "", O = p && typeof p.user_id == "string" && p.user_id ? p.user_id : void 0, R = pe(
          w.map((L) => L.text ?? "").filter(Boolean).join(`
`)
        ), H = v.get(f.run_id);
        H && !H.inboundParts ? (H.inboundParts = w, H.channel = C || void 0, H.userId = O, H.raw = [
          ...H.raw ?? [],
          f
        ], H.text || (H.text = R)) : k(f.run_id, {
          index: ++b,
          runIndex: 0,
          runId: f.run_id,
          kind: "user",
          text: R || "📥",
          timeSeconds: 0,
          startedAt: ae(f.t),
          isError: !1,
          running: !1,
          channel: C || void 0,
          userId: O,
          inboundParts: w,
          raw: [f]
        });
        break;
      }
      case "message/outbound": {
        const S = typeof d.text == "string" ? d.text : "";
        k(f.run_id, {
          index: ++b,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: ae(f.t),
          isError: !1,
          running: !1,
          outputText: S || void 0,
          receipt: {
            channel: m.get(f.run_id) || void 0,
            chars: S.length
          },
          raw: [f]
        });
        break;
      }
      case "approval/asked": {
        k(f.run_id, {
          index: ++b,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(d.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: ae(f.t),
          isError: !1,
          running: !1,
          raw: [f]
        });
        break;
      }
      case "approval/decided": {
        const S = String(d.decision ?? "?"), p = d.tool_name ? String(d.tool_name) : "";
        k(f.run_id, {
          index: ++b,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "approval",
          text: p ? `${p} → ${S}` : S,
          timeSeconds: 0,
          startedAt: ae(f.t),
          isError: S === "denied",
          running: !1,
          raw: [f]
        });
        break;
      }
      case "llm/header": {
        const S = typeof d.sha256 == "string" ? d.sha256 : "", p = typeof d.prev_sha256 == "string" ? d.prev_sha256 : void 0, w = d.reason === "changed" ? "changed" : "initial", C = typeof d.system_prompt == "string" ? d.system_prompt : "", O = Array.isArray(d.tools) ? d.tools : [], R = Array.isArray(d.schemas) ? d.schemas : void 0;
        k(f.run_id, {
          index: ++b,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          markerKind: "header",
          text: w === "initial" ? `⚙ ${C ? `System Prompt (${C.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ae(f.t),
          isError: !1,
          running: !1,
          prompt: C,
          prevPrompt: r.get(p ?? ""),
          headerTools: O,
          headerReason: w,
          sha: S,
          prevSha: p,
          schemas: R,
          raw: [f]
        }), S && r.set(S, C), C && (h = gl(C));
        break;
      }
      case "llm/call": {
        const S = gt(f), p = S.options && typeof S.options == "object" && Object.keys(S.options).length > 0 ? S.options : void 0, w = S.messages_meta, C = w && typeof w == "object" ? {
          count: typeof w.count == "number" ? w.count : 0,
          totalChars: typeof w.total_chars == "number" ? w.total_chars : 0,
          charsByRole: Jt(w.chars_by_role) ? w.chars_by_role : {},
          countByRole: Jt(w.count_by_role) ? w.count_by_role : {},
          maxToolChars: typeof w.max_tool_chars == "number" ? w.max_tool_chars : 0
        } : void 0, O = {
          index: ++b,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ae(f.t),
          isError: !1,
          running: !0,
          model: String(S.model ?? "unknown"),
          provider: typeof S.provider == "string" && S.provider ? S.provider : void 0,
          messagesMeta: C,
          inputNew: fl(S.messages_new),
          contextReset: S.context_reset === !0,
          options: p
        };
        k(f.run_id, O);
        const R = n.get(f.run_id) ?? [];
        R.push({ cell: O, callData: S, call: f }), n.set(f.run_id, R);
        break;
      }
      case "llm/result": {
        const S = n.get(f.run_id), p = S == null ? void 0 : S.shift(), w = (p == null ? void 0 : p.callData) ?? {}, C = typeof d.duration_ms == "number" ? d.duration_ms : null, O = d.usage ?? void 0, R = d.timing, H = Array.isArray(d.tool_calls) ? d.tool_calls : void 0, se = {
          text: (d.error ? pe(String(d.error)) : pe(String(d.text ?? ""))) || (H && H.length > 0 ? `🛠 ${H.map((Se) => Se.name).join(", ")}` : ""),
          timeSeconds: C === null ? null : C / 1e3,
          isError: !!d.error,
          running: !1,
          outputText: d.text ? String(d.text) : void 0,
          thinkingText: d.thinking ? String(d.thinking) : void 0,
          usage: O,
          timing: R,
          toolCalls: H,
          note: d.note ? String(d.note) : void 0
        };
        p ? (Object.assign(p.cell, se), p.cell.model = String(
          d.model ?? w.model ?? p.cell.model
        ), p.cell.raw = [
          ...p.call ? [p.call] : [],
          f
        ]) : k(f.run_id, {
          index: ++b,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          startedAt: ae(f.t),
          model: String(d.model ?? w.model ?? "unknown"),
          ...se
        });
        break;
      }
      case "tool/call": {
        const S = gt(f), p = String(S.name ?? "?"), w = p === "Skill" ? pl(S.input) : void 0;
        w && u.add(w);
        const C = S.input ? String(S.input) : void 0;
        let O;
        if (!w && C && h.length > 0) {
          const L = zn(C);
          for (const [V, se] of h)
            if (L.includes(V)) {
              O = se;
              break;
            }
        }
        const R = {
          index: ++b,
          runIndex: 0,
          runId: f.run_id,
          kind: "tool",
          text: w ? `📚 ${w}` : `${p}(${pe(String(S.input ?? ""), 60)})`,
          timeSeconds: null,
          startedAt: ae(f.t),
          isError: !1,
          running: !0,
          toolName: p,
          skillName: w,
          inSkill: O,
          inSkillLoaded: O ? u.has(O) : void 0,
          toolInput: S.input ? String(S.input) : void 0
        };
        k(f.run_id, R);
        const H = l.get(f.run_id) ?? [];
        H.push({ cell: R, callData: S, call: f }), l.set(f.run_id, H);
        break;
      }
      case "tool/result": {
        const S = l.get(f.run_id), p = typeof d.tool_call_id == "string" ? d.tool_call_id : null;
        let w;
        if (S) {
          const V = p ? S.findIndex(
            (se) => se.callData.tool_call_id === p
          ) : -1;
          V >= 0 ? w = S.splice(V, 1)[0] : w = S.shift();
        }
        const C = typeof d.duration_ms == "number" ? d.duration_ms : null, O = d.ok !== !1 && !d.error, R = d.output ? String(d.output) : void 0, H = R ? ` → ${pe(R, 60)}` : "", L = {
          timeSeconds: C === null ? null : C / 1e3,
          isError: !O,
          running: !1,
          toolOutput: R,
          toolOutputChars: typeof d.output_chars == "number" ? d.output_chars : void 0,
          toolOutputBytes: typeof d.output_bytes == "number" ? d.output_bytes : void 0,
          toolError: d.error ? String(d.error) : void 0,
          note: d.note ? String(d.note) : void 0
        };
        w ? (Object.assign(w.cell, L), w.cell.skillName || (w.cell.text = `${w.cell.text}${H}`), w.cell.raw = [
          ...w.call ? [w.call] : [],
          f
        ]) : k(f.run_id, {
          index: ++b,
          runIndex: 0,
          runId: f.run_id,
          kind: "tool",
          text: `?${H}`,
          startedAt: ae(f.t),
          ...L
        });
        break;
      }
    }
  }
  for (const [f, d] of o) {
    const S = t.get(f);
    if (S) {
      for (const p of d) z(S).push(p);
      o.delete(f);
    }
  }
  for (const f of s) {
    const d = [];
    for (const S of f.groups)
      for (const p of S.cells)
        p.skillName && !d.includes(p.skillName) && d.push(p.skillName);
    d.length > 0 && (f.skillsUsed = d);
  }
  return s;
}
function Qt(e) {
  return e.flatMap((s) => s.groups.flatMap((t) => t.cells));
}
function vl(e) {
  var i;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const s = e[0], t = ((i = s.groups[0]) == null ? void 0 : i.cells) ?? [], n = t.findIndex(
    (a) => a.kind === "system" && a.headerReason === "initial" && a.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const l = t[n], o = {
    ...s,
    groups: [
      {
        ...s.groups[0],
        cells: t.filter((a, m) => m !== n)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const ne = {
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
}, Yt = "agent-trace-timeline-styles", El = `
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
function Sl() {
  if (yt || typeof document > "u") return;
  if (document.getElementById(Yt)) {
    yt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Yt, e.textContent = El, document.head.appendChild(e), yt = !0;
}
function vt(e) {
  return ls(e);
}
function On(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Zt(e) {
  return e != null && Number.isFinite(e);
}
function bl(e) {
  if (!Zt(e.startedAt)) return null;
  const s = Zt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + s };
}
function $n(e, s = "sequence") {
  if (s !== "sequence")
    return xl(
      e,
      s === "duration" || s === "actual",
      s === "duration"
    );
  const t = [], n = [];
  for (const l of e) {
    const o = l.groups.flatMap((i) => i.cells);
    o.length !== 0 && (l.turn !== null && n.push({
      turn: l.turn,
      time: t.length
    }), t.push(
      ...o.map(
        (i, a) => ({
          start: t.length + a,
          end: t.length + a + 1,
          index: i.index,
          isError: i.isError === !0,
          kind: i.kind,
          label: i.text,
          lane: On(i.kind)
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
function xl(e, s, t) {
  const n = e.flatMap((r) => {
    const h = r.groups.flatMap(
      (u) => u.cells.flatMap((b) => {
        const x = bl(b);
        return x === null ? [] : [
          {
            ...x,
            index: b.index,
            isError: b.isError === !0,
            kind: b.kind,
            label: b.text,
            lane: On(b.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: r.turn, rawSpans: h }];
  }), l = n.flatMap((r) => r.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let i = 0, a = null;
  for (const r of [...l].sort(
    (h, u) => h.start - u.start || h.end - u.end
  ))
    t && a !== null && r.start > a && (i += r.start - a), o.set(r, i), a = a === null ? r.end : Math.max(a, r.end);
  const m = [], v = [];
  for (const r of n) {
    const h = r.rawSpans.map((u) => {
      const b = o.get(u) ?? 0;
      return {
        ...u,
        start: u.start - b,
        end: (s ? u.end : u.start) - b
      };
    });
    m.push(...h), r.turn !== null && v.push({
      turn: r.turn,
      time: Math.min(...h.map((u) => u.start))
    });
  }
  return {
    start: Math.min(...m.map((r) => r.start)),
    end: Math.max(...m.map((r) => r.end)),
    spans: m,
    turnBoundaries: v
  };
}
function kl(e, s, t = "sequence") {
  const n = $n(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((l) => l.start <= s.end && l.end >= s.start).map((l) => l.index)
  );
}
Sl();
const qe = window.QwenPaw.host, B = qe.React, { useEffect: Ve, useMemo: qt, useRef: Xe, useState: Ce } = B, { Tooltip: wl } = qe.antd, Et = 3, Tl = 4, _l = 0.08, Cl = 0.025, Il = 32, Ml = 0.5;
function zl(e) {
  const s = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, l = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, o = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...s === void 0 ? {} : { durationMs: s },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function Ol(e) {
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
function $l(e, s) {
  const t = Ol(e);
  if (s === void 0) return t;
  const n = s.durationMs === void 0 ? null : `Total ${vt(s.durationMs)}`, l = s.startedAt === void 0 ? null : s.durationMs === void 0 ? `Started ${Pe(s.startedAt)}` : `${Pe(s.startedAt)} → ${Pe(
    s.startedAt + s.durationMs
  )}`, o = s.ttftMs === void 0 || s.decodingMs === void 0 ? null : `TTFT ${vt(
    s.ttftMs
  )} · Decoding ${vt(s.decodingMs)}`, i = [n, o].filter((a) => a !== null).join(" · ");
  return [t, l, i].filter((a) => a !== null && a !== "").join(`
`);
}
function Tt(e, s) {
  return e <= s ? { start: e, end: s } : { start: s, end: e };
}
function St(e) {
  return Math.min(1, Math.max(0, e));
}
function Al(e, s, t, n) {
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
function An({
  label: e,
  placement: s,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ B.createElement(
    wl,
    {
      title: /* @__PURE__ */ B.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: s,
      mouseEnterDelay: Ml,
      ...n
    },
    t
  );
}
function tn() {
  return /* @__PURE__ */ B.createElement("div", { className: ne.labels, "aria-hidden": "true" }, /* @__PURE__ */ B.createElement("span", null, "Input"), /* @__PURE__ */ B.createElement("span", null, "Model"), /* @__PURE__ */ B.createElement("span", null, "Tools"));
}
function nn({
  loading: e,
  onHover: s,
  onLoad: t
}) {
  return /* @__PURE__ */ B.createElement(
    An,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ B.createElement(
      "button",
      {
        type: "button",
        className: ne.earlierHistory,
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
const Rl = B.memo(function({
  turns: s,
  mode: t,
  range: n,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: i = null,
  searchMatchIndexes: a = null,
  onRangeChange: m,
  onRecordSelect: v,
  onRecordFocus: r
}) {
  const h = typeof qe.useTheme == "function" ? qe.useTheme() : void 0, u = qt(
    () => $n(s, t),
    [t, s]
  ), b = qt(
    () => new Map(
      s.flatMap(
        (E) => E.groups.flatMap(
          (y) => y.cells.map(
            (T) => [T.index, zl(T)]
          )
        )
      )
    ),
    [s]
  ), x = Xe(null), z = Xe(null), P = Xe(null), k = Xe(null), [_, j] = Ce(null), [f, d] = Ce(null), [S, p] = Ce(!1), [w, C] = Ce(!1), [O, R] = Ce(null), [H, L] = Ce(!1);
  Ve(() => {
    u !== null && n !== null && (n.end < u.start || n.start > u.end) && m(null);
  }, [u, m, n]), Ve(() => {
    u !== null && (L(!1), R(
      (E) => E !== null && (E.end < u.start || E.start > u.end) ? null : E
    ));
  }, [u]), Ve(() => {
    if (u === null || i === null) return;
    const E = u.spans.find(
      (y) => y.index === i
    );
    E !== void 0 && (L(!0), R((y) => {
      if (y === null || E.end > y.start && E.start < y.end)
        return y;
      const T = Math.max(1, y.end - y.start), I = E.end <= y.start ? E.start : E.end - T, F = Math.min(
        Math.max(I, u.start),
        Math.max(u.start, u.end - T)
      );
      return F === y.start ? y : { start: F, end: F + T };
    }));
  }, [u, i]);
  const V = Math.max(1, ((u == null ? void 0 : u.end) ?? 0) - ((u == null ? void 0 : u.start) ?? 0)), se = Math.min(
    V,
    Math.max(1, ((O == null ? void 0 : O.end) ?? 0) - ((O == null ? void 0 : O.start) ?? 0))
  ), Se = u === null || O === null ? (u == null ? void 0 : u.start) ?? 0 : Math.min(
    Math.max(O.start, u.start),
    u.end - se
  ), J = O === null ? V : se, X = O === null ? (u == null ? void 0 : u.start) ?? 0 : Se, Me = l && u !== null && X === u.start, ze = o === void 0 || S ? void 0 : () => {
    p(!0), o().finally(() => {
      p(!1);
    });
  }, de = u === null ? void 0 : {
    "--trajectory-domain-left": `${-(X - u.start) / J * 100}%`,
    "--trajectory-domain-width": `${V / J * 100}%`
  }, Q = u === null || n === null ? null : en(
    n,
    X,
    J,
    u.start,
    u.end
  ), he = (u === null || _ === null ? null : en(
    _,
    X,
    J,
    u.start,
    u.end
  )) ?? Q, $e = _ ?? n;
  if (Ve(() => {
    const E = P.current;
    if (E === null) return;
    const y = (T) => {
      T.preventDefault();
      const I = k.current;
      if (I === null || u === null) return;
      L(!1);
      const F = I.getBoundingClientRect(), U = St(
        (T.clientX - F.left) / Math.max(1, F.width)
      ), q = Math.min(
        V,
        Math.max(
          Math.min(
            t === "sequence" ? Tl : 20,
            V
          ),
          J * Math.exp(T.deltaY * 15e-4)
        )
      );
      if (q >= V * 0.999) {
        R(null);
        return;
      }
      const G = X + U * J, te = Math.min(
        Math.max(G - U * q, u.start),
        u.end - q
      );
      R({ start: te, end: te + q });
    };
    return E.addEventListener("wheel", y, { passive: !1 }), () => {
      E.removeEventListener("wheel", y);
    };
  }, [J, X, V, t, u]), u === null)
    return /* @__PURE__ */ B.createElement(
      "section",
      {
        ref: P,
        className: ne.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ B.createElement("div", { className: ne.plot }, /* @__PURE__ */ B.createElement(tn, null), /* @__PURE__ */ B.createElement("div", { className: ne.track }, /* @__PURE__ */ B.createElement("span", { className: ne.empty }, "No timing data"), l && /* @__PURE__ */ B.createElement(
        nn,
        {
          loading: S,
          onHover: () => {
            d(null);
          },
          onLoad: ze
        }
      )))
    );
  const Ae = Math.min(
    J,
    V / u.spans.length
  ), be = (E) => {
    const y = E.currentTarget.getBoundingClientRect();
    return St((E.clientX - y.left) / Math.max(1, y.width));
  }, xe = (E) => {
    var F;
    const y = E.target instanceof HTMLElement ? E.target : null, T = (F = y == null ? void 0 : y.closest("[data-timeline-record-index]")) == null ? void 0 : F.dataset.timelineRecordIndex;
    if (T === void 0) return null;
    const I = Number(T);
    return Number.isFinite(I) ? I : null;
  }, He = (E) => {
    m(E);
  }, Ue = (E) => {
    if (E.button === 2) {
      z.current = {
        anchorClientX: E.clientX,
        anchorStart: X,
        moved: !1,
        pannable: O !== null,
        pointerId: E.pointerId
      }, O !== null && L(!1), C(!0), typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId);
      return;
    }
    if (E.button !== 0) return;
    const y = be(E), T = X + y * J, I = xe(E);
    d({ fraction: y, recordIndex: I }), x.current = {
      pointerId: E.pointerId,
      anchorTime: T,
      anchorClientX: E.clientX,
      recordIndex: I
    }, typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId), j({ start: T, end: T });
  }, st = (E) => {
    const y = E.currentTarget.getBoundingClientRect(), T = be(E);
    d({ fraction: T, recordIndex: xe(E) });
    const I = z.current;
    if (I !== null && I.pointerId === E.pointerId) {
      if (Math.abs(E.clientX - I.anchorClientX) >= Et && (I.moved = !0), !I.pannable) return;
      const G = (E.clientX - I.anchorClientX) / Math.max(1, y.width), te = Math.min(
        Math.max(I.anchorStart - G * J, u.start),
        u.end - J
      );
      R({ start: te, end: te + J });
      return;
    }
    const F = x.current;
    if (F === null || F.pointerId !== E.pointerId) return;
    let U = X;
    if (O !== null) {
      const G = E.clientX - y.left, te = Math.min(
        Il,
        Math.max(1, y.width * _l)
      ), Y = G < te ? -1 : G > y.width - te ? 1 : 0;
      if (Y !== 0) {
        const ke = Y < 0 ? te - G : G - (y.width - te), me = St(ke / te), re = X + Y * J * Cl * Math.max(0.2, me);
        U = Math.min(
          Math.max(re, u.start),
          u.end - J
        ), U !== X && (L(!1), R({
          start: U,
          end: U + J
        }));
      }
    }
    const q = U + T * J;
    j(Tt(F.anchorTime, q));
  }, lt = (E) => {
    const y = z.current;
    if (y !== null && y.pointerId === E.pointerId) {
      const Y = y.moved || Math.abs(E.clientX - y.anchorClientX) >= Et;
      z.current = null, C(!1), Y || m(null);
      return;
    }
    const T = x.current;
    if (T === null || T.pointerId !== E.pointerId) return;
    const I = be(E), F = X + I * J, U = Tt(T.anchorTime, F);
    d({ fraction: I, recordIndex: xe(E) }), x.current = null, j(null);
    const q = Math.abs(E.clientX - T.anchorClientX) < Et, G = q && T.recordIndex !== null ? u.spans.find((Y) => Y.index === T.recordIndex) : void 0;
    if (G !== void 0) {
      m(null), v == null || v(G.index);
      return;
    }
    const te = U.end - U.start < Ae ? Al(
      q ? U.start : (U.start + U.end) / 2,
      Ae,
      u.start,
      u.end
    ) : U;
    if (He(te), q) {
      const Y = U.start, ke = u.spans.reduce((me, re) => {
        const Re = Y < me.start ? me.start - Y : Y > me.end ? Y - me.end : 0;
        return (Y < re.start ? re.start - Y : Y > re.end ? Y - re.end : 0) < Re ? re : me;
      });
      r == null || r(ke.index);
    }
  }, ot = (E) => {
    E.key !== "Escape" || n === null || (E.preventDefault(), m(null));
  }, We = () => {
    x.current = null, z.current = null, j(null), d(null), C(!1);
  };
  return /* @__PURE__ */ B.createElement(
    "section",
    {
      ref: P,
      className: ne.root,
      "data-theme": h || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ B.createElement("div", { className: ne.plot }, /* @__PURE__ */ B.createElement(tn, null), /* @__PURE__ */ B.createElement(
      "div",
      {
        ref: k,
        className: ne.track,
        "data-panning": w || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: ot,
        onPointerDown: Ue,
        onPointerMove: st,
        onPointerUp: lt,
        onPointerCancel: We,
        onPointerLeave: () => {
          x.current === null && z.current === null && d(null);
        },
        onDoubleClick: (E) => {
          E.preventDefault(), m(null);
        },
        onContextMenu: (E) => {
          E.preventDefault();
        }
      },
      Me && /* @__PURE__ */ B.createElement(
        nn,
        {
          loading: S,
          onHover: () => {
            d(null);
          },
          onLoad: ze
        }
      ),
      f !== null && f.recordIndex === null && _ === null && /* @__PURE__ */ B.createElement(
        "div",
        {
          className: ne.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${f.fraction * 100}%`
          }
        }
      ),
      he !== null && /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(
        "div",
        {
          className: ne.selection,
          "data-dragging": _ === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${he.start * 100}%`,
            "--trajectory-selection-width": `${(he.end - he.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ B.createElement(
        "div",
        {
          className: ne.selectionEdges,
          "data-dragging": _ === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${he.start * 100}%`,
            "--trajectory-selection-width": `${(he.end - he.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ B.createElement(
        "div",
        {
          className: ne.turnBoundaries,
          "data-animate-viewport": H || void 0,
          "aria-hidden": "true",
          style: de
        },
        u.turnBoundaries.filter(
          (E) => E.time > u.start && E.time >= X && E.time <= X + J
        ).map((E) => /* @__PURE__ */ B.createElement(
          "span",
          {
            className: ne.turnBoundary,
            "data-turn": E.turn,
            key: E.turn,
            style: {
              "--trajectory-turn-left": `${(E.time - u.start) / V * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ B.createElement(
        "div",
        {
          className: ne.lanes,
          "data-animate-viewport": H || void 0,
          "data-timeline-domain": !0,
          style: de
        },
        u.spans.filter(
          (E) => E.index === i || E.end >= X && E.start <= X + J
        ).map((E) => {
          const y = (E.start - u.start) / V, I = (E.end - E.start) / V * 100, F = b.get(E.index), U = F == null ? void 0 : F.ttftMs, q = F == null ? void 0 : F.decodingMs, G = U === void 0 || q === void 0 || U + q <= 0 ? null : U / (U + q);
          return /* @__PURE__ */ B.createElement(
            An,
            {
              key: E.index,
              label: $l(E.kind, F),
              placement: "bottom"
            },
            /* @__PURE__ */ B.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: ne.span,
                "data-timeline-span": E.kind,
                "data-timeline-record-index": E.index,
                "data-assistant-timing": G === null ? void 0 : "true",
                "data-error": E.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": E.index === i || void 0,
                "data-hovered": (f == null ? void 0 : f.recordIndex) === E.index || void 0,
                "data-search-match": a === null ? void 0 : a.has(E.index) ? "true" : "false",
                "data-selected": $e === null ? void 0 : E.start <= $e.end && E.end >= $e.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${y * 100}%`,
                  "--trajectory-span-width": `${I}%`,
                  "--trajectory-span-gap": `min(${I * 0.08}%, 1px)`,
                  "--trajectory-span-lane": E.lane,
                  ...G === null ? {} : {
                    "--trajectory-assistant-ttft": `${G * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), Mt = window.QwenPaw.host, ce = Mt.React, { Button: Ll, Input: jl, Segmented: Dl, Tooltip: sn } = Mt.antd, { MenuFoldOutlined: Nl, MenuUnfoldOutlined: Pl, ReloadOutlined: Fl, SearchOutlined: Bl } = Mt.antdIcons;
function Hl({
  mode: e,
  onModeChange: s,
  search: t,
  onSearchChange: n,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: i,
  hasRequests: a,
  onToggleCollapseAll: m,
  callsCollapsed: v,
  onToggleCallsCollapsed: r
}) {
  const h = Z();
  return /* @__PURE__ */ ce.createElement(
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
    /* @__PURE__ */ ce.createElement(sn, { title: g(h, "projectionHint") }, /* @__PURE__ */ ce.createElement(
      Dl,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (u) => s(u)
      }
    )),
    /* @__PURE__ */ ce.createElement(
      jl,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ce.createElement(Bl, null),
        placeholder: g(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (u) => n(u.target.value)
      }
    ),
    a && /* @__PURE__ */ ce.createElement(
      sn,
      {
        title: i ? g(h, "expandAll") : g(h, "collapseAll")
      },
      /* @__PURE__ */ ce.createElement(
        Ll,
        {
          size: "small",
          type: "text",
          icon: i ? /* @__PURE__ */ ce.createElement(Pl, null) : /* @__PURE__ */ ce.createElement(Nl, null),
          onClick: m
        }
      )
    ),
    /* @__PURE__ */ ce.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ce.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ce.createElement(Fl, null),
      " ",
      g(h, "refresh")
    ))
  );
}
const nt = window.QwenPaw.host, A = nt.React, { useCallback: ln, useEffect: bt, useMemo: fe, useRef: Ul, useState: le } = A, {
  Button: Ge,
  Empty: on,
  Popconfirm: Wl,
  Popover: Kl,
  Space: Vl,
  Spin: Rn,
  Switch: Xl,
  Tag: Gl,
  Tooltip: Jl,
  message: Ne
} = nt.antd, { DeleteOutlined: Ql, DownloadOutlined: Yl, SettingOutlined: rn } = nt.antdIcons, { Text: ye } = nt.antd.Typography;
function an({
  config: e,
  onChange: s,
  children: t
}) {
  const n = Z(), l = (i, a, m) => /* @__PURE__ */ A.createElement(
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
    /* @__PURE__ */ A.createElement(ye, { style: { fontSize: 13 } }, i),
    /* @__PURE__ */ A.createElement(
      Xl,
      {
        size: "small",
        checked: !!a,
        onChange: (v) => s({ [m]: v })
      }
    )
  ), o = /* @__PURE__ */ A.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ A.createElement(ye, { strong: !0, style: { fontSize: 13 } }, g(n, "settings")), /* @__PURE__ */ A.createElement("div", { style: { marginTop: 8 } }, e ? [
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
  ] : /* @__PURE__ */ A.createElement(Rn, { size: "small" })));
  return /* @__PURE__ */ A.createElement(Kl, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function Zl({
  sessionId: e,
  summary: s,
  locale: t,
  onJumpSession: n,
  onRefreshSessions: l
}) {
  const [o, i] = le(null), [a, m] = le(!1), [v, r] = le(!1), [h, u] = le(""), [b, x] = le("sequence"), [z, P] = le(null), [k, _] = le(null), [j, f] = le(null), [d, S] = le(
    /* @__PURE__ */ new Set()
  ), [p, w] = le(!1), [C, O] = le(null), [R, H] = le(null), [L, V] = le(null), [se, Se] = le(null), J = Ul(null);
  J.current = e, bt(() => {
    Hn().then(O).catch(() => O(null));
  }, []);
  const X = ln(async (y, T) => {
    T || m(!0);
    try {
      const I = await Bn(y, {
        beforeSeq: T,
        limit: 200
      });
      Se(null), i((F) => T && F ? {
        ...I,
        events: [...I.events, ...F.events]
      } : I);
    } catch (I) {
      Se({
        message: String(I.message),
        status: I instanceof En ? I.status : null
      });
    } finally {
      T || m(!1);
    }
  }, []), Me = ln(async (y) => {
    try {
      const T = await Fn(y);
      V(T), H({
        sessionId: y,
        inputTokens: T.input_tokens,
        outputTokens: T.output_tokens,
        totalTokens: T.total_tokens,
        reasoningTokens: Number(T.reasoning_tokens ?? 0)
      });
    } catch {
      V(null), H(null);
    }
  }, []);
  bt(() => {
    e ? (P(null), _(null), f(null), S(/* @__PURE__ */ new Set()), u(""), X(e), Me(e)) : (i(null), V(null), H(null));
  }, [e, X, Me]);
  const ze = fe(
    () => o ? yl(o.events) : [],
    [o]
  ), { initial: de, turns: Q } = fe(
    () => vl(ze),
    [ze]
  ), Oe = fe(
    () => de ? [de, ...Qt(Q)] : Qt(Q),
    [de, Q]
  ), he = fe(
    () => Q.some((y) => y.status === "running"),
    [Q]
  );
  bt(() => {
    if (!e || !he) return;
    const y = setInterval(() => {
      document.visibilityState === "visible" && J.current && X(J.current);
    }, 5e3);
    return () => clearInterval(y);
  }, [e, he, X]);
  const $e = fe(
    () => z === null ? null : kl(Q, z, b),
    [z, Q, b]
  ), Ae = fe(() => {
    const y = h.trim().toLowerCase();
    return y ? new Set(
      Oe.filter(
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
  }, [h, Oe]), be = fe(
    () => k === null ? null : Oe.find((y) => y.index === k) ?? null,
    [Oe, k]
  ), xe = fe(() => {
    var At, Rt;
    if (j === null) return null;
    const y = Q.find((D) => D.turn === j);
    if (!y) return null;
    const T = ((At = y.groups[0]) == null ? void 0 : At.cells) ?? [], I = T.filter((D) => D.kind === "message"), F = T.filter((D) => D.kind === "tool"), U = [
      ...new Set(
        I.map((D) => D.model).filter((D) => !!D)
      )
    ], q = [
      ...new Set(
        I.map((D) => D.provider).filter((D) => !!D)
      )
    ];
    let G = 0, te = 0, Y = 0, ke = 0, me = 0, re = null, Re = 0;
    const it = [];
    for (const D of T)
      D.usage && (G += D.usage.input_tokens ?? 0, te += D.usage.output_tokens ?? 0, Y += D.usage.cache_input_tokens ?? 0, ke += D.usage.cache_creation_input_tokens ?? 0, me += D.usage.reasoning_tokens ?? 0), D.timing && (re = re === null ? D.timing.ttft_ms : Math.min(re, D.timing.ttft_ms), Re = (Re ?? 0) + D.timing.decode_ms), D.isError && it.push(D.toolError ?? D.text ?? "error");
    const we = T.find((D) => D.kind === "user"), Ln = (Rt = [...I].reverse().find((D) => D.options)) == null ? void 0 : Rt.options, rt = [...I].reverse().find((D) => D.outputText);
    let zt;
    const Ot = I.filter((D) => D.messagesMeta);
    if (Ot.length > 0) {
      const D = {};
      let Te = 0, ct = 0;
      for (const Dn of Ot) {
        const ut = Dn.messagesMeta;
        for (const [Lt, Nn] of Object.entries(ut.charsByRole))
          D[Lt] = (D[Lt] ?? 0) + Nn;
        Te += ut.totalChars, ct = Math.max(ct, ut.maxToolChars);
      }
      zt = { charsByRole: D, totalChars: Te, maxToolChars: ct };
    }
    const at = Q.findIndex((D) => D.turn === j), $t = at > 0 ? Q[at - 1] : null;
    let Le = null;
    if ($t) {
      Le = 0;
      for (const D of $t.groups)
        for (const Te of D.cells)
          Te.kind === "message" && Te.usage && (Le += Te.usage.input_tokens ?? 0);
    }
    const jn = Le === null && at !== 0 ? void 0 : {
      prevInputTokens: Le,
      deltaTokens: G - (Le ?? 0)
    };
    return {
      turn: j,
      status: y.status,
      durationMs: y.durationMs,
      startedAt: (we == null ? void 0 : we.startedAt) ?? null,
      query: (we == null ? void 0 : we.text) ?? "",
      llmCalls: I.length,
      toolCalls: F.length,
      models: U,
      providers: q,
      inputTokens: G,
      outputTokens: te,
      cacheReadTokens: Y,
      cacheWriteTokens: ke,
      reasoningTokens: me,
      inputComposition: zt,
      growth: jn,
      resultIndex: rt == null ? void 0 : rt.index,
      ttftMs: re,
      decodeMs: Re,
      errors: it,
      options: Ln,
      sessionTotals: R && R.sessionId === e ? {
        inputTokens: R.inputTokens,
        outputTokens: R.outputTokens,
        totalTokens: R.totalTokens,
        reasoningTokens: R.reasoningTokens
      } : void 0
    };
  }, [j, Q, R, e]), He = !!(o && o.events.length > 0 && o.events[0].seq > 1), Ue = async (y) => {
    try {
      O(await Un(y));
    } catch (T) {
      Ne.error(String(T.message));
    }
  }, st = fe(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), lt = fe(() => {
    if (!L) return null;
    const y = [
      `${L.runs} ${g(t, "statRounds")} · ${L.llm_calls} ${g(t, "statSteps")}`,
      `LLM ${ie(L.llm_ms_total / 1e3)} · ${g(
        t,
        "toolCalls"
      )} ${ie(L.tool_ms_total / 1e3)}`,
      `${g(t, "statTtftAvg")} ${L.ttft_ms_avg === null ? "-" : ie(L.ttft_ms_avg / 1e3)} · ${Ct(
        L.output_tokens,
        L.decode_ms_total / 1e3
      )}`
    ];
    if (L.cache_read_tokens > 0 || L.cache_write_tokens > 0) {
      const T = L.cache_read_tokens + L.input_tokens, I = T > 0 ? Math.round(L.cache_read_tokens / T * 100) : 0;
      y.push(`${g(t, "statCacheHit")} ${I}%`);
    }
    if (y.push(
      `${g(t, "statInput")} ${K(
        L.input_tokens
      )} tok · ${g(t, "statOutput")} ${K(
        L.output_tokens
      )} tok`
    ), s && y.push(kt(s.size_bytes)), L.skills) {
      const T = Object.entries(L.skills).sort((I, F) => F[1] - I[1]).map(([I, F]) => `${I} ×${F}`).join(" · ");
      T && y.push(`📚 ${T}`);
    }
    if (de != null && de.prompt) {
      const T = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
      for (const U of Q)
        for (const q of U.groups)
          for (const G of q.cells)
            G.skillName ? I.add(G.skillName) : G.inSkill && T.add(G.inSkill);
      const F = [...T].filter((U) => !I.has(U));
      F.length > 0 && y.push(
        `⚡ ${g(t, "skillBypassStrip")}: ${F.join(" · ")}`
      );
    }
    return y.join(" | ");
  }, [L, s, t, Q, de]), ot = () => {
    _(null), f(null);
  }, We = (se == null ? void 0 : se.status) === 404, E = be !== null || xe !== null;
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
          ye,
          {
            strong: !0,
            ellipsis: {
              tooltip: (s == null ? void 0 : s.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (s == null ? void 0 : s.title) || (s == null ? void 0 : s.agent_id) || xn(e)
        ),
        /* @__PURE__ */ A.createElement(
          Gl,
          {
            color: wn[(s == null ? void 0 : s.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          Tn((s == null ? void 0 : s.status) ?? "unknown")
        ),
        s != null && s.channel ? /* @__PURE__ */ A.createElement(ye, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, s.channel) : null,
        /* @__PURE__ */ A.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ A.createElement(Vl, null, /* @__PURE__ */ A.createElement(an, { config: C, onChange: Ue }, /* @__PURE__ */ A.createElement(Ge, { size: "small", icon: /* @__PURE__ */ A.createElement(rn, null) })), /* @__PURE__ */ A.createElement(Jl, { title: g(t, "export") }, /* @__PURE__ */ A.createElement(
          Ge,
          {
            size: "small",
            icon: /* @__PURE__ */ A.createElement(Yl, null),
            onClick: () => {
              Wn(e).then(() => Ne.success(g(t, "exported"))).catch(
                (y) => Ne.error(String(y.message))
              );
            }
          },
          g(t, "export")
        )), /* @__PURE__ */ A.createElement(
          Wl,
          {
            title: g(t, "deleteConfirm"),
            onConfirm: () => {
              Kn(e).then(() => {
                Ne.success(g(t, "deleted")), l == null || l();
              }).catch(
                (y) => Ne.error(String(y.message))
              );
            }
          },
          /* @__PURE__ */ A.createElement(Ge, { size: "small", danger: !0, icon: /* @__PURE__ */ A.createElement(Ql, null) }, g(t, "delete"))
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
          ye,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          lt ?? // Transient line while the stats endpoint responds.
          (s ? `${s.runs} ${g(t, "statRounds")} · ${s.llm_calls} ${g(t, "statSteps")} · ${kn(
            s.total_tokens
          )} ${g(t, "tokens")} · ${kt(
            s.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ A.createElement(
          ye,
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
      )) : /* @__PURE__ */ A.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ A.createElement(ye, { type: "secondary", style: { fontSize: 13 } }, g(t, "selectSession")),
        /* @__PURE__ */ A.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ A.createElement(an, { config: C, onChange: Ue }, /* @__PURE__ */ A.createElement(Ge, { size: "small", icon: /* @__PURE__ */ A.createElement(rn, null) })))
      )
    ),
    se && !We && /* @__PURE__ */ A.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ A.createElement(ye, { type: "danger", style: { fontSize: 12 } }, `${g(t, "loadFailed")}: ${se.message}`)),
    /* @__PURE__ */ A.createElement(
      Hl,
      {
        mode: b,
        onModeChange: x,
        search: h,
        onSearchChange: u,
        onRefresh: () => {
          e && (X(e), Me(e)), l == null || l();
        },
        modeOptions: st,
        allCollapsed: Q.length > 0 && Q.every((y) => d.has(y.turn ?? -1)),
        hasRequests: Q.some((y) => y.turn !== null),
        callsCollapsed: p,
        onToggleCallsCollapsed: () => w((y) => !y),
        onToggleCollapseAll: () => {
          S((y) => Q.some(
            (I) => I.turn !== null && !y.has(I.turn)
          ) ? new Set(
            Q.map((I) => I.turn).filter((I) => I !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ A.createElement(
      Rl,
      {
        turns: Q,
        mode: b,
        range: z,
        hasEarlierRecords: He,
        onLoadEarlier: async () => {
          var y;
          return !o || o.events.length === 0 ? !1 : (await X(e, (y = o.events[0]) == null ? void 0 : y.seq), !0);
        },
        selectedIndex: k,
        searchMatchIndexes: Ae,
        onRangeChange: P,
        onRecordSelect: _,
        onRecordFocus: _
      }
    ),
    a && !o ? /* @__PURE__ */ A.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ A.createElement(Rn, null)) : o ? /* @__PURE__ */ A.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ A.createElement(
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
        hl,
        {
          turns: Q,
          selectedIndex: k,
          selectedTurn: j,
          collapsedTurns: d,
          focusIndexes: $e,
          searchMatchIndexes: Ae,
          onSelectedIndexChange: (y) => {
            if (y === k) {
              _(null);
              return;
            }
            _(y), f(null);
          },
          onSelectedTurnChange: (y) => {
            f(y), _(null);
          },
          callsCollapsed: p,
          onToggleTurn: (y) => {
            S((T) => {
              const I = new Set(T);
              return I.has(y) ? I.delete(y) : I.add(y), I;
            });
          },
          hasOlderRecords: He,
          loadingOlder: v,
          onLoadOlder: () => {
            var y;
            !o || o.events.length === 0 || (r(!0), X(
              e,
              (y = o.events[0]) == null ? void 0 : y.seq
            ).finally(() => r(!1)));
          },
          emptyText: g(t, "noSessions"),
          initialRecord: de
        }
      )
    ), E ? /* @__PURE__ */ A.createElement(
      xs,
      {
        record: be,
        request: xe,
        onJumpSession: n,
        onSelectTurn: (y) => {
          f(y), _(null);
        },
        onClose: ot
      }
    ) : null) : /* @__PURE__ */ A.createElement(
      on,
      {
        image: on.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: We && e ? g(t, "noTraceForSession") : g(t, "selectSession")
      }
    )
  );
}
const Ie = window.QwenPaw.host, N = Ie.React, { useCallback: cn, useEffect: xt, useMemo: Je, useState: ge } = N, { Button: un, Empty: dn, Input: ql, Spin: eo, Tag: hn, Tooltip: mn } = Ie.antd, {
  CaretRightOutlined: to,
  MenuFoldOutlined: no,
  MenuUnfoldOutlined: so,
  SearchOutlined: lo
} = Ie.antdIcons, { Text: Be } = Ie.antd.Typography;
function oo({
  groups: e,
  collapsedAgents: s,
  onToggleAgent: t,
  searching: n,
  selected: l,
  onSelect: o,
  locale: i
}) {
  const a = e.length > 1;
  return /* @__PURE__ */ N.createElement(N.Fragment, null, e.map(([m, v]) => {
    const r = a && !n && s.has(m);
    return /* @__PURE__ */ N.createElement("div", { key: m }, a && /* @__PURE__ */ N.createElement(
      "div",
      {
        onClick: () => t(m),
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
      /* @__PURE__ */ N.createElement(
        to,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: r ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ N.createElement(Be, { strong: !0, style: { fontSize: 12 } }, m),
      /* @__PURE__ */ N.createElement(Be, { type: "secondary", style: { fontSize: 11 } }, v.length)
    ), !r && v.map((h) => {
      const u = h.session_id === l;
      return /* @__PURE__ */ N.createElement(
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
        /* @__PURE__ */ N.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ N.createElement(
            Be,
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
          a ? null : h.agent_id ? /* @__PURE__ */ N.createElement(
            hn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          /* @__PURE__ */ N.createElement(
            hn,
            {
              color: wn[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Tn(h.status)
          )
        ),
        /* @__PURE__ */ N.createElement(
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
          /* @__PURE__ */ N.createElement("span", null, h.channel || "-"),
          /* @__PURE__ */ N.createElement("span", null, h.runs, " ", g(i, "runs")),
          /* @__PURE__ */ N.createElement("span", null, kn(h.total_tokens), " tok"),
          h.skills ? /* @__PURE__ */ N.createElement(
            "span",
            {
              style: { color: "#2f54eb" },
              title: Object.entries(h.skills).sort((b, x) => x[1] - b[1]).map(([b, x]) => `${b} ×${x}`).join(`
`)
            },
            "📚",
            " ",
            Object.entries(h.skills).sort((b, x) => x[1] - b[1]).slice(0, 2).map(([b]) => b).join(" ")
          ) : null,
          /* @__PURE__ */ N.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: os(h.last_event_t)
            },
            is(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function io() {
  const e = typeof Ie.useLocale == "function" ? Ie.useLocale() : void 0, s = Je(
    () => _t(e ?? Z()),
    [e]
  ), [t, n] = ge(null), [l, o] = ge(!1), [i, a] = ge(
    /* @__PURE__ */ new Set()
  ), [m, v] = ge(!1), [r, h] = ge(!1), [u, b] = ge(null), [x, z] = ge(""), [P, k] = ge(null), _ = cn(async () => {
    try {
      const p = await jt({ limit: 100, offset: 0 });
      n(p.sessions), o(p.has_more), k(null);
    } catch (p) {
      k(String(p.message));
    }
  }, []), j = cn(async () => {
    h(!0);
    try {
      const p = await jt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((w) => {
        const C = w ?? [];
        return [
          ...C,
          ...p.sessions.filter(
            (O) => !C.some((R) => R.session_id === O.session_id)
          )
        ];
      }), o(p.has_more);
    } catch (p) {
      k(String(p.message));
    } finally {
      h(!1);
    }
  }, [t]);
  xt(() => {
    _();
    try {
      const p = new URLSearchParams(window.location.search).get("session");
      p && Sn(p).then((w) => {
        b(w ?? p);
      });
    } catch {
    }
  }, [_]), xt(() => {
    try {
      const p = new URL(window.location.href);
      u ? p.searchParams.set("session", u) : p.searchParams.delete("session"), window.history.replaceState(window.history.state, "", p);
    } catch {
    }
  }, [u]), xt(() => {
    const p = setInterval(() => {
      document.visibilityState === "visible" && _();
    }, 15e3);
    return () => clearInterval(p);
  }, [_]);
  const f = Je(
    () => (t == null ? void 0 : t.find((p) => p.session_id === u)) ?? null,
    [t, u]
  ), d = Je(() => {
    if (!t) return [];
    const p = x.trim().toLowerCase();
    return p ? t.filter(
      (w) => [w.session_id, w.title ?? "", w.agent_id, w.channel].join(" ").toLowerCase().includes(p)
    ) : t;
  }, [t, x]), S = Je(() => {
    const p = /* @__PURE__ */ new Map();
    for (const w of d) {
      const C = w.agent_id || "(unknown)", O = p.get(C);
      O ? O.push(w) : p.set(C, [w]);
    }
    return [...p.entries()];
  }, [d]);
  return /* @__PURE__ */ N.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, m ? /* @__PURE__ */ N.createElement(
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
    /* @__PURE__ */ N.createElement(mn, { title: g(s, "expandSidebar"), placement: "right" }, /* @__PURE__ */ N.createElement(
      un,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ N.createElement(so, null),
        onClick: () => v(!1)
      }
    ))
  ) : /* @__PURE__ */ N.createElement(
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
    /* @__PURE__ */ N.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ N.createElement(
        ql,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ N.createElement(lo, null),
          placeholder: g(s, "searchPlaceholder"),
          value: x,
          style: { flex: 1, minWidth: 0 },
          onChange: (p) => z(p.target.value)
        }
      ),
      /* @__PURE__ */ N.createElement(mn, { title: g(s, "collapseSidebar") }, /* @__PURE__ */ N.createElement(
        un,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ N.createElement(no, null),
          onClick: () => v(!0)
        }
      ))
    ),
    P ? /* @__PURE__ */ N.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ N.createElement(Be, { type: "danger", style: { fontSize: 12 } }, `${g(s, "loadFailed")}: ${P}`)) : null,
    /* @__PURE__ */ N.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ N.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ N.createElement(eo, null)) : d.length === 0 ? /* @__PURE__ */ N.createElement(
      dn,
      {
        image: dn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ N.createElement("span", { style: { fontSize: 12 } }, g(s, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ N.createElement(
        Be,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        g(s, "noSessionsHint")
      )
    ) : /* @__PURE__ */ N.createElement(
      oo,
      {
        groups: S,
        collapsedAgents: i,
        onToggleAgent: (p) => {
          a((w) => {
            const C = new Set(w);
            return C.has(p) ? C.delete(p) : C.add(p), C;
          });
        },
        searching: !!x.trim(),
        selected: u,
        onSelect: b,
        locale: s
      }
    ), t !== null && l && !x.trim() && /* @__PURE__ */ N.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ N.createElement(
      "a",
      {
        onClick: () => void j(),
        style: { fontSize: 12 }
      },
      r ? "…" : `⋯ ${g(s, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ N.createElement(
    Zl,
    {
      sessionId: u,
      summary: f,
      locale: s,
      onJumpSession: b,
      onRefreshSessions: () => void _()
    }
  ));
}
const ro = window.QwenPaw.host.React;
var fn, pn;
(pn = (fn = window.QwenPaw).registerRoutes) == null || pn.call(fn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: io,
    label: g(Z(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var gn, Qe, yn;
(yn = (Qe = (gn = window.QwenPaw.chat) == null ? void 0 : gn.rightHeader) == null ? void 0 : Qe.add) == null || yn.call(
  Qe,
  "agent-trace",
  ro.createElement(Yn),
  { id: "agent-trace-jump" }
);

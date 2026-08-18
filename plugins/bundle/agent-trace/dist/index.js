const xn = {
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
    viewCurrentTrace: "查看当前会话轨迹"
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
    viewCurrentTrace: "View this chat's trace"
  }
};
function yt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function te() {
  try {
    return yt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function E(e, s) {
  return xn[e][s];
}
const ve = window.QwenPaw.host, Xe = ve.React, { useMemo: bn } = Xe, { Button: wn, Tooltip: kn } = ve.antd, { CompassOutlined: Tn } = ve.antdIcons;
function _n(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function Mn() {
  const e = typeof ve.useLocale == "function" ? ve.useLocale() : void 0, s = bn(
    () => yt(e ?? te()),
    [e]
  );
  return /* @__PURE__ */ Xe.createElement(kn, { title: E(s, "viewCurrentTrace") }, /* @__PURE__ */ Xe.createElement(
    wn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ Xe.createElement(Tn, null),
      "aria-label": E(s, "viewCurrentTrace"),
      onClick: () => {
        const t = typeof ve.getCurrentSessionId == "function" ? ve.getCurrentSessionId() : null;
        window.location.href = _n(t);
      }
    }
  ));
}
const Ae = window.QwenPaw.host;
async function In(e) {
  return Te(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function ln(e, s) {
  return Ae.fetch ? Ae.fetch(e, s) : fetch(Ae.getApiUrl(e), {
    ...s,
    headers: {
      ...(s == null ? void 0 : s.headers) || {},
      ...Ae.getApiToken() ? { Authorization: `Bearer ${Ae.getApiToken()}` } : {}
    }
  });
}
async function Te(e, s) {
  const t = await ln(e, s), n = await t.text();
  let l = null;
  try {
    l = n ? JSON.parse(n) : null;
  } catch {
    l = null;
  }
  if (!t.ok) {
    const o = l && typeof l == "object" && "detail" in l ? l.detail : void 0;
    throw new Error(
      typeof o == "string" ? o : `HTTP ${t.status}`
    );
  }
  return l;
}
async function wt(e) {
  const s = new URLSearchParams();
  return s.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && s.set("offset", String(e.offset)), Te(
    `/agent-trace/sessions?${s.toString()}`
  );
}
async function Cn(e, s) {
  const t = new URLSearchParams();
  s != null && s.beforeSeq && t.set("before_seq", String(s.beforeSeq)), t.set("limit", String(s == null ? void 0 : s.limit));
  const n = t.toString();
  return Te(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function zn() {
  return Te("/agent-trace/config");
}
async function On(e) {
  return Te("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function An(e) {
  const s = await ln(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!s.ok) throw new Error(`HTTP ${s.status}`);
  const t = await s.blob(), n = URL.createObjectURL(t), l = document.createElement("a");
  l.href = n, l.download = `${e}.jsonl`, l.click(), URL.revokeObjectURL(n);
}
async function $n(e) {
  await Te(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
const kt = 3e3;
function Tt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function Rn(e, s) {
  const t = Tt(e ?? ""), n = Tt(s ?? "");
  if (t.length > kt || n.length > kt)
    return [
      ...t.map((m) => ({ kind: "del", text: m })),
      ...n.map((m) => ({ kind: "add", text: m }))
    ];
  const l = t.length, o = n.length, r = new Int32Array((l + 1) * (o + 1)), i = (m, c) => m * (o + 1) + c;
  for (let m = l - 1; m >= 0; m -= 1)
    for (let c = o - 1; c >= 0; c -= 1)
      r[i(m, c)] = t[m] === n[c] ? r[i(m + 1, c + 1)] + 1 : Math.max(r[i(m + 1, c)], r[i(m, c + 1)]);
  const p = [];
  let y = 0, a = 0;
  for (; y < l && a < o; )
    t[y] === n[a] ? (p.push({ kind: "same", text: t[y] }), y += 1, a += 1) : r[i(y + 1, a)] >= r[i(y, a + 1)] ? (p.push({ kind: "del", text: t[y] }), y += 1) : (p.push({ kind: "add", text: n[a] }), a += 1);
  for (; y < l; )
    p.push({ kind: "del", text: t[y] }), y += 1;
  for (; a < o; )
    p.push({ kind: "add", text: n[a] }), a += 1;
  return p;
}
function Ln(e, s = 3) {
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
function Dn(e) {
  let s = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? s += 1 : n.kind === "del" && (t += 1);
  return { added: s, removed: t };
}
const jn = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, Pn = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function on(e, s) {
  const t = e.markerKind ? jn[e.markerKind] : void 0;
  if (t) return s === "zh-CN" ? t.zh : t.en;
  const n = Pn[e.kind];
  return n ? s === "zh-CN" ? n.zh : n.en : e.kind;
}
function Nn(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function le(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const s = e * 1e3;
  return s < 1e3 ? `${Math.round(s)}ms` : s < 6e4 ? `${(s / 1e3).toFixed(1)}s` : `${Math.floor(s / 6e4)}m${Math.round(s % 6e4 / 1e3)}s`;
}
function ee(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function vt(e, s) {
  return e === void 0 || !Number.isFinite(e) || s === null || s === void 0 || s <= 0 ? "-" : `${(e / s).toFixed(1)} tok/s`;
}
function Le(e) {
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
const Qe = window.QwenPaw.host, u = Qe.React, { useEffect: Fn, useRef: Bn, useState: rn } = u, { Button: an, Collapse: Hn, Empty: _t, Tabs: Et } = Qe.antd, { Text: K } = Qe.antd.Typography, { CopyOutlined: Wn, CloseOutlined: Un } = Qe.antdIcons, Kn = 320, Vn = 720, Be = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Xn = 2e4;
function Gn(e) {
  if (e.length > Xn) return e;
  const s = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, l, o = 0;
  for (; (l = t.exec(e)) !== null; ) {
    l.index > n && s.push(e.slice(n, l.index));
    const r = l[0];
    let i = "rgba(128,128,128,1)";
    l[1] !== void 0 ? i = Be.key : l[2] !== void 0 ? i = Be.string : l[3] !== void 0 ? i = Be.number : i = Be.literal, s.push(
      /* @__PURE__ */ u.createElement("span", { key: o++, style: { color: i } }, r)
    ), n = l.index + r.length;
  }
  return n < e.length && s.push(e.slice(n)), s;
}
function ce({ value: e, json: s = !1 }) {
  const [t, n] = rn(!1), l = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!l) return null;
  const o = async () => {
    try {
      await navigator.clipboard.writeText(l), n(!0), window.setTimeout(() => n(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ u.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ u.createElement(
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
    t ? "✓" : /* @__PURE__ */ u.createElement(Wn, null)
  ), /* @__PURE__ */ u.createElement(
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
    s ? Gn(l) : l
  ));
}
function A({
  label: e,
  value: s,
  danger: t = !1
}) {
  return /* @__PURE__ */ u.createElement(
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
    /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ u.createElement(
      K,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      s
    )
  );
}
function Mt({
  input: e,
  output: s,
  cacheRead: t,
  cacheWrite: n,
  reasoning: l
}) {
  const o = Math.max(0, e - t - n), r = Math.max(0, s - l);
  return /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(A, { label: "Input", value: `${ee(e)} tok` }), t ? /* @__PURE__ */ u.createElement(A, { label: "Cached", value: `${ee(t)} tok` }) : null, n ? /* @__PURE__ */ u.createElement(
    A,
    {
      label: "Cache created",
      value: `${ee(n)} tok`
    }
  ) : null, t || n ? /* @__PURE__ */ u.createElement(A, { label: "Other", value: `${ee(o)} tok` }) : null, /* @__PURE__ */ u.createElement(A, { label: "Output", value: `${ee(s)} tok` }), l ? /* @__PURE__ */ u.createElement(A, { label: "Reasoning", value: `${ee(l)} tok` }) : null, l ? /* @__PURE__ */ u.createElement(A, { label: "Content", value: `${ee(r)} tok` }) : null);
}
function lt({
  label: e,
  onOpen: s,
  children: t
}) {
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      style: {
        marginTop: 8,
        borderTop: "1px solid rgba(128,128,128,0.15)",
        paddingTop: 6
      }
    },
    /* @__PURE__ */ u.createElement("a", { onClick: s, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ u.createElement("div", { style: { paddingTop: 2 } }, t)
  );
}
function Jn({
  request: e,
  onJumpRecord: s
}) {
  const t = te(), [n, l] = u.useState("summary"), o = /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(A, { label: "Started", value: Le(e.startedAt) }), /* @__PURE__ */ u.createElement(
    A,
    {
      label: "Total",
      value: le(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ u.createElement(
    A,
    {
      label: "First TTFT",
      value: le(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ u.createElement(
    A,
    {
      label: "Total decoding",
      value: le(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ u.createElement(
    A,
    {
      label: E(t, "throughput"),
      value: vt(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), r = /* @__PURE__ */ u.createElement(
    Mt,
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
      label: E(t, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(A, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ u.createElement(
        A,
        {
          label: E(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ u.createElement(A, { label: "Query", value: Qn(e.query) }), /* @__PURE__ */ u.createElement(
        A,
        {
          label: E(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ u.createElement(A, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ u.createElement(
        A,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && s ? /* @__PURE__ */ u.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ u.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => s(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ u.createElement(lt, { label: "Options", onOpen: () => l("options") }, /* @__PURE__ */ u.createElement(ce, { value: e.options, json: !0 })) : null, /* @__PURE__ */ u.createElement(lt, { label: "Usage", onOpen: () => l("usage") }, r), /* @__PURE__ */ u.createElement(lt, { label: "Timing", onOpen: () => l("timing") }, o))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { strong: !0, style: { fontSize: 12 } }, E(t, "thisRequest")), r, e.sessionTotals ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
        K,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        E(t, "sessionTotal")
      ), /* @__PURE__ */ u.createElement(
        Mt,
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
        children: /* @__PURE__ */ u.createElement(ce, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ u.createElement(
    Et,
    {
      size: "small",
      activeKey: n,
      onChange: (p) => l(p),
      items: i,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function Qn(e, s = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function Yn({
  oldText: e,
  newText: s
}) {
  const t = u.useMemo(
    () => Rn(e, s),
    [e, s]
  ), n = u.useMemo(() => Dn(t), [t]), l = u.useMemo(() => Ln(t), [t]), o = te();
  return e === void 0 ? /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, E(o, "noPrevPrompt")) : /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ u.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ u.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ u.createElement(
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
        return /* @__PURE__ */ u.createElement(
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
      return /* @__PURE__ */ u.createElement(
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
function qn({ record: e }) {
  var o;
  const s = te(), t = e.headerTools ?? [], n = e.headerReason === "changed", l = [
    {
      key: "summary",
      label: E(s, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(A, { label: "#", value: String(e.index) }), /* @__PURE__ */ u.createElement(
        A,
        {
          label: E(s, "status"),
          value: n ? E(s, "promptChanged") : E(s, "promptInitial")
        }
      ), /* @__PURE__ */ u.createElement(A, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ u.createElement(A, { label: "Chars", value: String(((o = e.prompt) == null ? void 0 : o.length) ?? 0) }), /* @__PURE__ */ u.createElement(A, { label: "Tools", value: String(t.length) }))
    },
    ...n ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ u.createElement(
          Yn,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: E(s, "prompt"),
      children: /* @__PURE__ */ u.createElement(ce, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ u.createElement("div", { style: { paddingTop: 4 } }, t.map((r) => /* @__PURE__ */ u.createElement(K, { key: r, code: !0, style: { fontSize: 11 } }, r)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ u.createElement(
          Hn,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((r, i) => {
              var y;
              const p = typeof r.name == "string" && r.name || typeof ((y = r.function) == null ? void 0 : y.name) == "string" && r.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ u.createElement(K, { code: !0, style: { fontSize: 11 } }, p),
                children: /* @__PURE__ */ u.createElement(ce, { value: r })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ u.createElement(ce, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ u.createElement(Et, { size: "small", items: l, tabBarStyle: { marginBottom: 8 } });
}
function ot({ dragRef: e, width: s }) {
  return /* @__PURE__ */ u.createElement(
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
function rt({ onClose: e }) {
  return e ? /* @__PURE__ */ u.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ u.createElement(
    an,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ u.createElement(Un, null),
      onClick: e
    }
  )) : null;
}
function Zn({
  record: e,
  request: s,
  onJumpSession: t,
  onJumpRecord: n,
  onSelectTurn: l,
  onClose: o
}) {
  const r = te(), [i, p] = rn(400), y = Bn(null);
  if (Fn(() => {
    const k = (D) => {
      const w = y.current;
      if (w === null) return;
      const d = w.anchorX - D.clientX;
      p(
        Math.min(Vn, Math.max(Kn, w.anchorWidth + d))
      );
    }, T = () => {
      y.current = null;
    };
    return window.addEventListener("pointermove", k), window.addEventListener("pointerup", T), () => {
      window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", T);
    };
  }, []), e === null && s === null)
    return /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(
        _t,
        {
          image: _t.PRESENTED_IMAGE_SIMPLE,
          description: E(r, "selectRecord")
        }
      )
    );
  if (e === null && s !== null)
    return /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(ot, { dragRef: y, width: i }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(rt, { onClose: o }), /* @__PURE__ */ u.createElement(Jn, { request: s, onJumpRecord: n }))
    );
  const a = e;
  if (a.kind === "system" && a.prompt !== void 0)
    return /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(ot, { dragRef: y, width: i }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(rt, { onClose: o }), /* @__PURE__ */ u.createElement(qn, { record: a }))
    );
  const m = a.usage, c = a.timing, x = [];
  return x.push({
    key: "summary",
    label: E(r, "summary"),
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(A, { label: "#", value: String(a.index) }), /* @__PURE__ */ u.createElement(A, { label: "Kind", value: on(a, r) }), a.runIndex > 0 && l ? /* @__PURE__ */ u.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ u.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => l(a.runIndex)
      },
      "Request #",
      a.runIndex,
      " →"
    )) : null, /* @__PURE__ */ u.createElement(
      A,
      {
        label: E(r, "status"),
        value: a.running ? E(r, "running") : a.isError ? E(r, "error") : E(r, "success"),
        danger: a.isError
      }
    ), a.provider ? /* @__PURE__ */ u.createElement(A, { label: "Provider", value: a.provider }) : null, a.model ? /* @__PURE__ */ u.createElement(A, { label: E(r, "model"), value: a.model }) : null, a.toolName ? /* @__PURE__ */ u.createElement(A, { label: "Tool", value: a.toolName }) : null, a.kind === "user" && (a.channel || a.userId) ? /* @__PURE__ */ u.createElement(
      A,
      {
        label: E(r, "source"),
        value: [a.channel, a.userId].filter(Boolean).join(" · ")
      }
    ) : null, a.receipt ? /* @__PURE__ */ u.createElement(
      A,
      {
        label: E(r, "channel"),
        value: a.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ u.createElement(
      A,
      {
        label: E(r, "duration"),
        value: le(a.timeSeconds)
      }
    ), a.note ? /* @__PURE__ */ u.createElement(K, { type: "warning", style: { fontSize: 12 } }, a.note) : null, a.spawnSession ? /* @__PURE__ */ u.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ u.createElement(
      A,
      {
        label: E(r, "spawnedAgent"),
        value: a.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ u.createElement(
      an,
      {
        size: "small",
        onClick: () => a.spawnSession && t(a.spawnSession),
        style: { marginTop: 4 }
      },
      E(r, "openChildSession")
    ) : null) : null)
  }), a.kind === "tool" ? (a.toolInput && x.push({
    key: "payload",
    label: E(r, "input"),
    children: /* @__PURE__ */ u.createElement(ce, { value: a.toolInput, json: !0 })
  }), (a.toolOutput || a.toolError) && x.push({
    key: "result",
    label: E(r, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, a.toolError ? /* @__PURE__ */ u.createElement(K, { type: "danger", style: { fontSize: 12 } }, a.toolError) : null, a.toolOutput ? /* @__PURE__ */ u.createElement(ce, { value: a.toolOutput }) : null)
  })) : (a.outputText || a.thinkingText || a.messages || a.marker || a.toolCalls && a.toolCalls.length > 0) && x.push({
    key: "raw",
    label: E(r, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, a.inboundParts && a.inboundParts.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, `${E(r, "inboundParts")} (${a.inboundParts.length})`), a.inboundParts.map((k, T) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: T,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ u.createElement(K, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.type.replace("Content", "")),
      /* @__PURE__ */ u.createElement(
        K,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        k.text ?? "-"
      )
    ))) : null, a.marker ? /* @__PURE__ */ u.createElement(ce, { value: a.marker }) : null, a.toolCalls && a.toolCalls.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, `${E(r, "toolCall")} (${a.toolCalls.length})`), a.toolCalls.map((k, T) => /* @__PURE__ */ u.createElement("div", { key: k.id || T, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ u.createElement(K, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", k.name), /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 11 } }, k.id)))) : null, a.note ? /* @__PURE__ */ u.createElement(K, { type: "warning", style: { fontSize: 12 } }, a.note) : null, a.messages && a.messages.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, `${E(r, "query")} (${a.messages.length})`), a.messages.map((k, T) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: T,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ u.createElement(K, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, k.role),
      /* @__PURE__ */ u.createElement(
        K,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        k.text
      )
    ))) : null, a.thinkingText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, E(r, "thinking")), /* @__PURE__ */ u.createElement(ce, { value: a.thinkingText })) : null, a.outputText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, E(r, "output")), /* @__PURE__ */ u.createElement(ce, { value: a.outputText })) : null)
  }), (a.startedAt !== null || m || c) && x.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(A, { label: "Started", value: Le(a.startedAt) }), /* @__PURE__ */ u.createElement(A, { label: "Total", value: le(a.timeSeconds) }), c ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
      A,
      {
        label: "TTFT",
        value: le(c.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      A,
      {
        label: "Decoding",
        value: le(c.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      A,
      {
        label: E(r, "throughput"),
        value: vt(
          m == null ? void 0 : m.output_tokens,
          c.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ u.createElement(K, { type: "secondary", style: { fontSize: 12 } }, E(r, "noTiming")))
  }), m && x.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(A, { label: "Input", value: ee(m.input_tokens) }), /* @__PURE__ */ u.createElement(A, { label: "Output", value: ee(m.output_tokens) }), m.cache_creation_input_tokens ? /* @__PURE__ */ u.createElement(
      A,
      {
        label: "Cache write",
        value: ee(m.cache_creation_input_tokens)
      }
    ) : null, m.cache_input_tokens ? /* @__PURE__ */ u.createElement(
      A,
      {
        label: "Cache read",
        value: ee(m.cache_input_tokens)
      }
    ) : null, m.total_tokens !== void 0 ? /* @__PURE__ */ u.createElement(A, { label: "Total", value: ee(m.total_tokens) }) : null, m.time !== void 0 ? /* @__PURE__ */ u.createElement(A, { label: "API time", value: le(m.time) }) : null)
  }), x.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ u.createElement(ce, { value: a.raw })
  }), /* @__PURE__ */ u.createElement(
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
    /* @__PURE__ */ u.createElement(ot, { dragRef: y, width: i }),
    /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(rt, { onClose: o }), /* @__PURE__ */ u.createElement(Et, { size: "small", items: x, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Y = window.QwenPaw.host.React, es = Y.useRef, ts = Y.useState;
Y.useCallback;
Y.useMemo;
const ns = Y.useEffect, ss = Y.useLayoutEffect, ls = Y.useReducer;
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
function os(e) {
  return e ? e() : void 0;
}
function rs(e, s, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(l, o, r) {
      if (typeof o == "string") {
        const i = o.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const p = +o;
          if (Number.isInteger(p) && p >= 0 && p < e) {
            let y = l[p];
            if (!y) {
              const a = s[p * 2];
              y = l[p] = {
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
        if (o === "length") return e;
      }
      return Reflect.get(l, o, r);
    }
  });
}
function be(e, s, t) {
  let n = t.initialDeps ?? [], l, o = !0;
  function r() {
    var i;
    const p = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let y = 0;
    p && (y = Date.now());
    const a = e();
    if (!(a.length !== n.length || a.some((x, k) => n[k] !== x)))
      return l;
    n = a;
    let c = 0;
    if (p && (c = Date.now()), l = s(...a), p) {
      const x = Math.round((Date.now() - y) * 100) / 100, k = Math.round((Date.now() - c) * 100) / 100, T = k / 16, D = (w, d) => {
        for (w = String(w); w.length < d; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${D(k, 5)} /${D(x, 5)} ms`,
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
  return r.updateDeps = (i) => {
    n = i;
  }, r;
}
function It(e, s) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const is = (e, s) => Math.abs(e - s) < 1.01, as = (e, s, t) => {
  let n;
  return function(...l) {
    e.clearTimeout(n), n = e.setTimeout(() => s.apply(this, l), t);
  };
};
let $e;
const it = () => {
  if ($e !== void 0) return $e;
  if (typeof navigator > "u") return $e = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return $e = !0;
  const e = navigator.maxTouchPoints;
  return $e = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Ct = (e) => {
  const { offsetWidth: s, offsetHeight: t } = e;
  return { width: s, height: t };
}, cs = (e) => e, us = (e) => {
  const s = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - s + 1, l = new Array(n);
  for (let o = 0; o < n; o++)
    l[o] = s + o;
  return l;
}, ds = (e, s) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const l = (r) => {
    const { width: i, height: p } = r;
    s({ width: Math.round(i), height: Math.round(p) });
  };
  if (l(Ct(t)), !n.ResizeObserver)
    return () => {
    };
  const o = new n.ResizeObserver((r) => {
    const i = () => {
      const p = r[0];
      if (p != null && p.borderBoxSize) {
        const y = p.borderBoxSize[0];
        if (y) {
          l({ width: y.inlineSize, height: y.blockSize });
          return;
        }
      }
      l(Ct(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, Ge = {
  passive: !0
}, hs = typeof window > "u" ? !0 : "onscrollend" in window, ms = (e, s, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const l = e.targetWindow;
  if (!l)
    return;
  const o = e.options.useScrollendEvent && hs;
  let r = 0;
  const i = o ? null : as(
    l,
    () => s(r, !1),
    e.options.isScrollingResetDelay
  ), p = (m) => () => {
    r = t(n), i == null || i(), s(r, m);
  }, y = p(!0), a = p(!1);
  return n.addEventListener("scroll", y, Ge), o && n.addEventListener("scrollend", a, Ge), () => {
    n.removeEventListener("scroll", y), o && n.removeEventListener("scrollend", a);
  };
}, fs = (e, s) => ms(e, s, (t) => {
  const { horizontal: n, isRtl: l } = e.options;
  return n ? t.scrollLeft * (l && -1 || 1) : t.scrollTop;
}), ps = (e, s, t) => {
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
}, gs = (e, {
  adjustments: s = 0,
  behavior: t
}, n) => {
  var l, o;
  (o = (l = n.scrollElement) == null ? void 0 : l.scrollTo) == null || o.call(l, {
    [n.options.horizontal ? "left" : "top"]: e + s,
    behavior: t
  });
}, ys = gs;
class vs {
  constructor(s) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, l;
      return ((l = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : l.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((o) => {
          const r = () => {
            const i = o.target, p = this.indexFromElement(i);
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
        getItemKey: cs,
        rangeExtractor: us,
        onChange: () => {
        },
        measureElement: ps,
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
      for (const c in t) {
        const x = t[c];
        x !== void 0 && (o[c] = x);
      }
      const r = this.options;
      let i = null, p = null, y = !1;
      if (r !== void 0 && r.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const c = r.count, x = o.count, k = this.getMeasurements(), T = c > 0 ? ((n = k[0]) == null ? void 0 : n.key) ?? r.getItemKey(0) : null, D = c > 0 ? ((l = k[c - 1]) == null ? void 0 : l.key) ?? r.getItemKey(c - 1) : null;
        if (x !== c || c > 0 && x > 0 && (o.getItemKey(0) !== T || o.getItemKey(x - 1) !== D)) {
          y = !0;
          const f = c > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? k[0] : null;
          f && (i = [f.key, this.getScrollOffset() - f.start]);
          const g = o.followOnAppend === !0 ? "auto" : o.followOnAppend || null;
          g && x > c && this.isAtEnd(r.scrollEndThreshold) && (c === 0 || o.getItemKey(x - 1) !== D) && (p = g);
        }
      }
      this.options = o, y && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let a = !1, m = 0;
      if (i && this.scrollOffset !== null) {
        const [c, x] = i, k = this.getMeasurements(), { count: T, getItemKey: D } = this.options;
        let w = 0;
        for (; w < T && D(w) !== c; )
          w++;
        if (w < T) {
          const d = k[w];
          if (d) {
            const f = Math.max(0, d.start + x);
            f !== this.scrollOffset && (m = f - this.scrollOffset, this.scrollOffset = f, a = !0);
          }
        }
      }
      (a || p) && (this.pendingScrollAnchor = [
        a ? i[0] : null,
        a ? i[1] : 0,
        p,
        m
      ]);
    }, this.notify = (t) => {
      var n, l;
      (l = (n = this.options).onChange) == null || l.call(n, this, t);
    }, this.maybeNotify = be(
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
            this._iosTouching = !1, !(!it() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            r,
            Ge
          ), o.addEventListener(
            "touchend",
            i,
            Ge
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
        const [o, r, i, p] = l;
        o !== null && !i && (it() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? p !== 0 && (this._iosDeferredAdjustment += p) : this._scrollToOffset(this.getScrollOffset(), {
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
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = be(
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
      (t, n, l, o, r, i, p, y) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: i,
        laneAssignmentMode: p,
        gap: y
      }),
      {
        key: !1
      }
    ), this.getMeasurements = be(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: o,
        enabled: r,
        lanes: i,
        laneAssignmentMode: p,
        gap: y
      }, a) => {
        const m = this.itemSizeCache;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const w of this.laneAssignments.keys())
            w >= t && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const c = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const w = t * 2;
          let d = this._flatMeasurements;
          if (!d || d.length < w) {
            const v = new Float64Array(w);
            d && c > 0 && v.set(d.subarray(0, c * 2)), d = v, this._flatMeasurements = d;
          }
          let f;
          if (c === 0)
            f = n + l;
          else {
            const v = c - 1;
            f = d[v * 2] + d[v * 2 + 1] + y;
          }
          for (let v = c; v < t; v++) {
            const O = o(v), S = m.get(O), R = typeof S == "number" ? S : this.options.estimateSize(v);
            d[v * 2] = f, d[v * 2 + 1] = R, f += R + y;
          }
          const g = rs(t, d, o);
          return this.measurementsCache = g, g;
        }
        const x = this.measurementsCache.slice(0, c), k = new Array(i).fill(
          void 0
        ), T = new Float64Array(i);
        let D = 0;
        for (let w = 0; w < c; w++) {
          const d = x[w];
          d && (k[d.lane] === void 0 && D++, k[d.lane] = w, T[d.lane] = d.end);
        }
        for (let w = c; w < t; w++) {
          const d = o(w), f = this.laneAssignments.get(w);
          let g, v;
          const O = p === "estimate" || m.has(d);
          if (f !== void 0 && this.options.lanes > 1) {
            g = f;
            const _ = k[g], L = _ !== void 0 ? x[_] : void 0;
            v = L ? L.end + y : n + l;
          } else if (D === i) {
            let _ = 0, L = T[0], se = k[0];
            for (let j = 1; j < i; j++) {
              const V = T[j];
              (V < L || V === L && k[j] < se) && (_ = j, L = V, se = k[j]);
            }
            g = _, v = L + y, O && this.laneAssignments.set(w, g);
          } else
            g = w % this.options.lanes, v = n + l, O && this.laneAssignments.set(w, g);
          const S = m.get(d), R = typeof S == "number" ? S : this.options.estimateSize(w), C = v + R;
          x[w] = {
            index: w,
            start: v,
            size: R,
            end: C,
            key: d,
            lane: g
          }, k[g] === void 0 && D++, k[g] = w, T[g] = C;
        }
        return this.measurementsCache = x, x;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = be(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, l, o) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = Ss(
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
    ), this.getVirtualIndexes = be(
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
      let r, i, p;
      const y = this._flatMeasurements;
      if (this.options.lanes === 1 && y !== null)
        p = this.options.getItemKey(t), i = y[t * 2], r = y[t * 2 + 1];
      else {
        const c = this.measurementsCache[t];
        if (!c) return;
        p = c.key, i = c.start, r = c.size;
      }
      const a = this.itemSizeCache.get(p) ?? r, m = n - a;
      if (m !== 0) {
        const c = this.options.anchorTo === "end" && ((l = this.scrollState) == null ? void 0 : l.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, x = c ? this.getTotalSize() : 0, k = this.getScrollOffset() + this.scrollAdjustments, D = !this.itemSizeCache.has(p) ? (
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
        ), w = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
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
          m,
          this
        ) : D);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(p, n), this.itemSizeCacheVersion++;
        let d = !1;
        c ? d = this.applyScrollAdjustment(
          this.getTotalSize() - x
        ) : w && (d = this.applyScrollAdjustment(m)), this.notify(d);
      }
    }, this.getVirtualItems = be(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const l = [];
        for (let o = 0, r = t.length; o < r; o++) {
          const i = t[o], p = n[i];
          l.push(p);
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
      const l = this._flatMeasurements, o = this.options.lanes === 1 && l != null, r = cn(
        0,
        n.length - 1,
        o ? (i) => l[i * 2] : (i) => It(n[i]).start,
        t
      );
      return It(n[r]);
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
      const [r, i] = o, p = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: l,
        startedAt: p,
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
    return s === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), it() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += s, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    if (!r && is(l, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= o) {
        this.getScrollOffset() !== l && this._scrollToOffset(l, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, r) {
      const i = this.getSize() || 600, p = Math.abs(l - this.getScrollOffset()), y = this.scrollState.behavior === "smooth" && p > i;
      this.scrollState.lastTargetOffset = l, y || (this.scrollState.behavior = "auto"), this._scrollToOffset(l, {
        adjustments: void 0,
        behavior: y ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const cn = (e, s, t, n) => {
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
function Es(e, s, t) {
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
function Ss(e, s, t, n, l) {
  const o = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: o };
  if (n === 1 && l !== null) {
    const y = Es(
      l,
      o,
      t
    );
    let a = y;
    const m = t + s;
    for (; a < o && l[a * 2] + l[a * 2 + 1] < m; )
      a++;
    return { startIndex: y, endIndex: a };
  }
  let i = cn(0, o, (y) => e[y].start, t), p = i;
  if (n === 1)
    for (; p < o && e[p].end < t + s; )
      p++;
  else if (n > 1) {
    const y = Array(n).fill(0);
    for (; p < o && y.some((m) => m < t + s); ) {
      const m = e[p];
      y[m.lane] = m.end, p++;
    }
    const a = Array(n).fill(t + s);
    for (; i >= 0 && a.some((m) => m >= t); ) {
      const m = e[i];
      a[m.lane] = m.start, i--;
    }
    i = Math.max(0, i - i % n), p = Math.min(o, p + (n - 1 - p % n));
  }
  return { startIndex: i, endIndex: p };
}
const at = typeof document < "u" ? ss : ns;
function xs({
  useFlushSync: e = !0,
  directDomUpdates: s = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const l = ls((a) => a + 1, 0)[1], o = es({
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
    const m = o.current;
    if (!m.enabled || !m.container) return;
    const c = a.getTotalSize();
    if (c !== m.lastSize) {
      m.lastSize = c;
      const x = a.options.horizontal ? "width" : "height";
      m.container.style[x] = `${c}px`;
    }
  }, i = (a) => {
    const m = o.current;
    if (!m.enabled || !m.container) return;
    r(a);
    const c = !!a.options.horizontal, x = m.mode === "transform", k = c ? "left" : "top", T = a.options.scrollMargin, D = a.getVirtualItems();
    for (const w of D) {
      const d = w.start - T, f = a.elementsCache.get(w.key);
      f && m.lastPositions.get(f) !== d && (m.lastPositions.set(f, d), x ? f.style.transform = c ? `translate3d(${d}px, 0, 0)` : `translate3d(0, ${d}px, 0)` : f.style[k] = `${d}px`);
    }
  }, p = {
    ...n,
    onChange: (a, m) => {
      var c;
      const x = o.current;
      let k = !0;
      if (x.enabled) {
        i(a);
        const T = a.range, D = x.prevRange;
        k = !D || D.isScrolling !== a.isScrolling || D.startIndex !== (T == null ? void 0 : T.startIndex) || D.endIndex !== (T == null ? void 0 : T.endIndex), k && (x.prevRange = T ? {
          startIndex: T.startIndex,
          endIndex: T.endIndex,
          isScrolling: a.isScrolling
        } : null);
      }
      k && (e && m ? os(l) : l()), (c = n.onChange) == null || c.call(n, a, m);
    }
  }, [y] = ts(() => {
    const a = new vs(p);
    return Object.assign(a, {
      containerRef: (m) => {
        const c = o.current;
        if (c.container = m, c.lastSize = null, m && c.enabled) {
          const x = a.getTotalSize();
          c.lastSize = x;
          const k = a.options.horizontal ? "width" : "height";
          m.style[k] = `${x}px`;
        }
      }
    });
  });
  return y.setOptions(p), at(() => y._didMount(), []), at(() => (r(y), y._willUpdate())), at(() => {
    i(y);
  }), y;
}
function bs(e) {
  return xs({
    observeElementRect: ds,
    observeElementOffset: fs,
    scrollToFn: ys,
    ...e
  });
}
const Ye = window.QwenPaw.host, I = Ye.React, { useRef: ws } = I, { Tag: un } = Ye.antd, { Text: he } = Ye.antd.Typography, {
  CaretRightOutlined: ks,
  CloseCircleOutlined: Ts,
  FileTextOutlined: _s,
  RobotOutlined: Ms,
  RocketOutlined: Is,
  SafetyOutlined: Cs,
  SendOutlined: zs,
  SettingOutlined: Os,
  ToolOutlined: As,
  UserOutlined: $s
} = Ye.antdIcons, Rs = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Ls = {
  user: /* @__PURE__ */ I.createElement($s, null),
  message: /* @__PURE__ */ I.createElement(Ms, null),
  tool: /* @__PURE__ */ I.createElement(As, null),
  system: /* @__PURE__ */ I.createElement(Os, null)
}, zt = {
  approval: { color: "volcano", icon: /* @__PURE__ */ I.createElement(Cs, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ I.createElement(zs, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ I.createElement(Is, null) },
  header: { color: "green", icon: /* @__PURE__ */ I.createElement(_s, null) },
  error: { color: "red", icon: /* @__PURE__ */ I.createElement(Ts, null) }
}, Ds = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Ot = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, js = 150, pt = 26, dn = 34, At = 9, $t = 30;
function Ps(e) {
  const s = te(), t = Ot[e] ?? Ot.unknown;
  return s === "zh-CN" ? t.zh : t.en;
}
const Ns = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Fs(e, s) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.inboundParts ?? []) {
    const l = Ns[n.type];
    l && t.set(l, (t.get(l) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([n, l]) => `${E(s, n)}×${l}`).join(" ");
}
function Bs(e, s) {
  const t = e.receipt, n = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${E(s, "replySent")}${n} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${E(s, "chars")}`;
}
function Rt({
  record: e,
  selected: s,
  dimmed: t,
  multiRequest: n,
  onSelect: l
}) {
  var i, p;
  const o = e.usage, r = o && (o.input_tokens || o.output_tokens) ? `${ee(o.input_tokens)}→${ee(
    o.output_tokens
  )}` : null;
  return /* @__PURE__ */ I.createElement(
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
        height: pt,
        cursor: "pointer",
        background: s ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1
      }
    },
    /* @__PURE__ */ I.createElement(
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
      n && /* @__PURE__ */ I.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ I.createElement(
      un,
      {
        color: e.markerKind && ((i = zt[e.markerKind]) == null ? void 0 : i.color) || Rs[e.kind] || "default",
        icon: e.markerKind && ((p = zt[e.markerKind]) == null ? void 0 : p.icon) || Ls[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      on(e, te())
    ),
    /* @__PURE__ */ I.createElement(
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
      e.receipt ? /* @__PURE__ */ I.createElement(he, { type: "secondary", style: { fontSize: 12 } }, Bs(e, te())) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(he, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ I.createElement(he, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ I.createElement(
        he,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(
        he,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      ), e.kind === "user" ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(he, { type: "secondary", style: { fontSize: 11 } }, ` ${Fs(e, te()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ I.createElement(he, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
    ),
    /* @__PURE__ */ I.createElement(
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
      r ? /* @__PURE__ */ I.createElement("span", { style: { color: "#1677ff" } }, r) : null,
      r ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && le(e.timeSeconds)
    )
  );
}
function Hs({
  turn: e,
  collapsed: s,
  selected: t,
  cellCount: n,
  onToggle: l,
  onSelect: o
}) {
  const r = te();
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: dn }
    },
    /* @__PURE__ */ I.createElement(
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
      /* @__PURE__ */ I.createElement(
        ks,
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
      /* @__PURE__ */ I.createElement(he, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ I.createElement(he, { type: "secondary", style: { fontSize: 11 } }, le(e.durationMs / 1e3)),
      /* @__PURE__ */ I.createElement(he, { type: "secondary", style: { fontSize: 11 } }, n, " ", E(r, "events")),
      /* @__PURE__ */ I.createElement(
        un,
        {
          color: Ds[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Ps(e.status)
      )
    )
  );
}
function Ws({
  turns: e,
  selectedIndex: s,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: l,
  searchMatchIndexes: o,
  onSelectedIndexChange: r,
  onSelectedTurnChange: i,
  onToggleTurn: p,
  callsCollapsed: y,
  hasOlderRecords: a,
  loadingOlder: m,
  onLoadOlder: c,
  initialRecord: x,
  emptyText: k
}) {
  const T = te(), D = ws(null), w = e.filter((S) => S.turn !== null), d = w.length > 1, f = I.useMemo(() => {
    var R;
    const S = [];
    a && S.push({
      key: "load-older",
      height: $t,
      type: "load-older"
    }), x && (S.push({
      key: "initial",
      height: pt,
      type: "initial",
      record: x
    }), S.push({
      key: "initial-divider",
      height: At,
      type: "divider"
    }));
    for (const C of w) {
      const _ = C.turn;
      if (S.push({
        key: `turn-${_}`,
        height: dn,
        type: "boundary",
        turn: C
      }), !n.has(_))
        for (const L of ((R = C.groups[0]) == null ? void 0 : R.cells) ?? [])
          y && L.kind === "tool" || S.push({
            key: `rec-${L.index}`,
            height: pt,
            type: "record",
            record: L
          });
    }
    return S;
  }, [
    w,
    n,
    y,
    a,
    x
  ]), g = I.useCallback(
    (S) => l !== null && !l.has(S.index) || o !== null && !o.has(S.index),
    [l, o]
  ), v = (S) => {
    var R;
    switch (S.type) {
      case "load-older":
        return /* @__PURE__ */ I.createElement("div", { style: { textAlign: "center", height: $t } }, /* @__PURE__ */ I.createElement(
          "button",
          {
            type: "button",
            onClick: c,
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
          m ? "…" : `⋯ ${E(T, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ I.createElement(
          "div",
          {
            style: {
              height: At,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const C = S.record;
        return /* @__PURE__ */ I.createElement(
          Rt,
          {
            record: C,
            selected: s === C.index,
            dimmed: g(C),
            multiRequest: d,
            onSelect: () => r(C.index)
          }
        );
      }
      case "boundary": {
        const C = S.turn, _ = C.turn;
        return /* @__PURE__ */ I.createElement(
          Hs,
          {
            turn: C,
            collapsed: n.has(_),
            selected: t === _,
            cellCount: ((R = C.groups[0]) == null ? void 0 : R.cells.length) ?? 0,
            onToggle: () => p(_),
            onSelect: () => i(_)
          }
        );
      }
      case "record":
      default: {
        const C = S.record;
        return /* @__PURE__ */ I.createElement(
          Rt,
          {
            record: C,
            selected: s === C.index,
            dimmed: g(C),
            multiRequest: d,
            onSelect: () => r(C.index)
          }
        );
      }
    }
  };
  if (f.length === 0)
    return /* @__PURE__ */ I.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ I.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        k ?? E(T, "noSessions")
      )
    );
  const O = f.length <= js ? /* @__PURE__ */ I.createElement("div", null, f.map((S) => v(S))) : /* @__PURE__ */ I.createElement(
    Us,
    {
      rows: f,
      scrollRef: D,
      renderRow: v
    }
  );
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      ref: D,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    O
  );
}
function Us({
  rows: e,
  scrollRef: s,
  renderRow: t
}) {
  const n = bs({
    count: e.length,
    getScrollElement: () => s.current,
    estimateSize: (l) => e[l].height,
    overscan: 12
  });
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      style: {
        height: n.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    n.getVirtualItems().map((l) => /* @__PURE__ */ I.createElement(
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
function ct(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function me(e, s = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > s ? `${t.slice(0, s)}…` : t;
}
function Ks(e) {
  var w;
  const s = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = [];
  let i = "";
  const p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  let m = 0, c = 0;
  const x = (d) => d.groups[0].cells, k = (d, f) => {
    const g = o.get(d);
    g ? g.push(f) : o.set(d, [f]);
  }, T = (d, f) => {
    if (!d)
      if (i)
        d = i;
      else {
        r.push(f);
        return;
      }
    const g = t.get(d);
    if (g)
      f.runIndex = g.turn ?? 0, x(g).push(f);
    else if (i) {
      const v = t.get(i);
      v ? (f.runIndex = v.turn ?? 0, x(v).push(f)) : k(d, f);
    } else
      k(d, f);
  }, D = (d, f) => {
    const g = o.get(f);
    if (g) {
      for (const v of g) x(d).push(v);
      o.delete(f);
    }
  };
  for (const d of e) {
    const f = ct(d);
    switch (d.type) {
      case "run/start": {
        c += 1, p.set(
          d.run_id,
          typeof f.channel == "string" ? f.channel : ""
        );
        const g = {
          turn: c,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${c}`, cells: [] }]
        };
        t.set(d.run_id, g), s.push(g), i = d.run_id, D(g, d.run_id);
        for (const R of r.splice(0))
          R.runIndex = c, x(g).push(R);
        const v = Array.isArray(f.messages) ? f.messages : [], O = String(f.query ?? ""), S = {
          index: ++m,
          runIndex: c,
          runId: d.run_id,
          kind: "user",
          text: me(O) || me((w = v.at(-1)) == null ? void 0 : w.text),
          messages: v,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          model: void 0
        };
        y.set(d.run_id, S), x(g).push(S);
        break;
      }
      case "run/end": {
        const g = t.get(d.run_id);
        i === d.run_id && (i = ""), p.delete(d.run_id), y.delete(d.run_id);
        const v = String(f.status ?? "unknown");
        if (g && (g.status = v, g.durationMs = typeof f.duration_ms == "number" ? f.duration_ms : null), v === "error" && f.error) {
          const O = g ?? {
            turn: null,
            status: v,
            durationMs: typeof f.duration_ms == "number" ? f.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          g || s.push(O), O.groups[0].cells.push({
            index: ++m,
            runIndex: c,
            runId: d.run_id,
            kind: "system",
            markerKind: "error",
            text: me(String(f.error)) || "run failed",
            marker: String(f.error ?? "run failed"),
            timeSeconds: typeof f.duration_ms == "number" ? f.duration_ms / 1e3 : null,
            startedAt: re(d.t),
            isError: !0,
            running: !1,
            raw: [d]
          });
        }
        break;
      }
      case "agent/spawn": {
        const g = typeof f.child_session_id == "string" ? f.child_session_id : void 0, v = typeof f.child_agent_id == "string" ? f.child_agent_id : "?";
        T(d.run_id, {
          index: ++m,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${v} → ${g ?? "?"}`,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          spawnSession: g,
          spawnAgent: v,
          raw: [d]
        });
        break;
      }
      case "message/inbound": {
        const g = Array.isArray(f.parts) ? f.parts : [], v = f.channel_meta && typeof f.channel_meta == "object" ? f.channel_meta : void 0, O = g.map((L) => ({
          type: String(L.type ?? "?"),
          text: typeof L.text == "string" ? L.text : void 0
        })), S = p.get(d.run_id) ?? "", R = v && typeof v.user_id == "string" && v.user_id ? v.user_id : void 0, C = me(
          O.map((L) => L.text ?? "").filter(Boolean).join(`
`)
        ), _ = y.get(d.run_id);
        _ && !_.inboundParts ? (_.inboundParts = O, _.channel = S || void 0, _.userId = R, _.raw = [
          ..._.raw ?? [],
          d
        ], _.text || (_.text = C)) : T(d.run_id, {
          index: ++m,
          runIndex: 0,
          runId: d.run_id,
          kind: "user",
          text: C || "📥",
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          channel: S || void 0,
          userId: R,
          inboundParts: O,
          raw: [d]
        });
        break;
      }
      case "message/outbound": {
        const g = typeof f.text == "string" ? f.text : "";
        T(d.run_id, {
          index: ++m,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          outputText: g || void 0,
          receipt: {
            channel: p.get(d.run_id) || void 0,
            chars: g.length
          },
          raw: [d]
        });
        break;
      }
      case "approval/asked": {
        T(d.run_id, {
          index: ++m,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(f.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          raw: [d]
        });
        break;
      }
      case "approval/decided": {
        const g = String(f.decision ?? "?"), v = f.tool_name ? String(f.tool_name) : "";
        T(d.run_id, {
          index: ++m,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "approval",
          text: v ? `${v} → ${g}` : g,
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: g === "denied",
          running: !1,
          raw: [d]
        });
        break;
      }
      case "llm/header": {
        const g = typeof f.sha256 == "string" ? f.sha256 : "", v = typeof f.prev_sha256 == "string" ? f.prev_sha256 : void 0, O = f.reason === "changed" ? "changed" : "initial", S = typeof f.system_prompt == "string" ? f.system_prompt : "", R = Array.isArray(f.tools) ? f.tools : [], C = Array.isArray(f.schemas) ? f.schemas : void 0;
        T(d.run_id, {
          index: ++m,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          markerKind: "header",
          text: O === "initial" ? `⚙ ${S ? `System Prompt (${S.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: re(d.t),
          isError: !1,
          running: !1,
          prompt: S,
          prevPrompt: a.get(v ?? ""),
          headerTools: R,
          headerReason: O,
          sha: g,
          prevSha: v,
          schemas: C,
          raw: [d]
        }), g && a.set(g, S);
        break;
      }
      case "llm/call": {
        const g = ct(d), v = g.options && typeof g.options == "object" && Object.keys(g.options).length > 0 ? g.options : void 0, O = {
          index: ++m,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: re(d.t),
          isError: !1,
          running: !0,
          model: String(g.model ?? "unknown"),
          provider: typeof g.provider == "string" && g.provider ? g.provider : void 0,
          options: v
        };
        T(d.run_id, O);
        const S = n.get(d.run_id) ?? [];
        S.push({ cell: O, callData: g, call: d }), n.set(d.run_id, S);
        break;
      }
      case "llm/result": {
        const g = n.get(d.run_id), v = g == null ? void 0 : g.shift(), O = (v == null ? void 0 : v.callData) ?? {}, S = typeof f.duration_ms == "number" ? f.duration_ms : null, R = f.usage ?? void 0, C = f.timing, _ = Array.isArray(f.tool_calls) ? f.tool_calls : void 0, j = {
          text: (f.error ? me(String(f.error)) : me(String(f.text ?? ""))) || (_ && _.length > 0 ? `🛠 ${_.map((V) => V.name).join(", ")}` : ""),
          timeSeconds: S === null ? null : S / 1e3,
          isError: !!f.error,
          running: !1,
          outputText: f.text ? String(f.text) : void 0,
          thinkingText: f.thinking ? String(f.thinking) : void 0,
          usage: R,
          timing: C,
          toolCalls: _,
          note: f.note ? String(f.note) : void 0
        };
        v ? (Object.assign(v.cell, j), v.cell.model = String(
          f.model ?? O.model ?? v.cell.model
        ), v.cell.raw = [
          ...v.call ? [v.call] : [],
          d
        ]) : T(d.run_id, {
          index: ++m,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          startedAt: re(d.t),
          model: String(f.model ?? O.model ?? "unknown"),
          ...j
        });
        break;
      }
      case "tool/call": {
        const g = ct(d), v = {
          index: ++m,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `${String(g.name ?? "?")}(${me(
            String(g.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: re(d.t),
          isError: !1,
          running: !0,
          toolName: String(g.name ?? "?"),
          toolInput: g.input ? String(g.input) : void 0
        };
        T(d.run_id, v);
        const O = l.get(d.run_id) ?? [];
        O.push({ cell: v, callData: g, call: d }), l.set(d.run_id, O);
        break;
      }
      case "tool/result": {
        const g = l.get(d.run_id), v = typeof f.tool_call_id == "string" ? f.tool_call_id : null;
        let O;
        if (g) {
          const se = v ? g.findIndex(
            (j) => j.callData.tool_call_id === v
          ) : -1;
          se >= 0 ? O = g.splice(se, 1)[0] : O = g.shift();
        }
        const S = typeof f.duration_ms == "number" ? f.duration_ms : null, R = f.ok !== !1 && !f.error, C = f.output ? String(f.output) : void 0, _ = C ? ` → ${me(C, 60)}` : "", L = {
          timeSeconds: S === null ? null : S / 1e3,
          isError: !R,
          running: !1,
          toolOutput: C,
          toolError: f.error ? String(f.error) : void 0,
          note: f.note ? String(f.note) : void 0
        };
        O ? (Object.assign(O.cell, L), O.cell.text = `${O.cell.text}${_}`, O.cell.raw = [
          ...O.call ? [O.call] : [],
          d
        ]) : T(d.run_id, {
          index: ++m,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `?${_}`,
          startedAt: re(d.t),
          ...L
        });
        break;
      }
    }
  }
  for (const [d, f] of o) {
    const g = t.get(d);
    if (g) {
      for (const v of f) x(g).push(v);
      o.delete(d);
    }
  }
  return s;
}
function Lt(e) {
  return e.flatMap((s) => s.groups.flatMap((t) => t.cells));
}
function Vs(e) {
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
        cells: t.filter((i, p) => p !== n)
      }
    ]
  };
  return { initial: l, turns: [o, ...e.slice(1)] };
}
const Z = {
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
}, Dt = "agent-trace-timeline-styles", Xs = `
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
let ut = !1;
function Gs() {
  if (ut || typeof document > "u") return;
  if (document.getElementById(Dt)) {
    ut = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Dt, e.textContent = Xs, document.head.appendChild(e), ut = !0;
}
function dt(e) {
  return Nn(e);
}
function hn(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function jt(e) {
  return e != null && Number.isFinite(e);
}
function Js(e) {
  if (!jt(e.startedAt)) return null;
  const s = jt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + s };
}
function mn(e, s = "sequence") {
  if (s !== "sequence")
    return Qs(
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
          lane: hn(r.kind)
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
function Qs(e, s, t) {
  const n = e.flatMap((a) => {
    const m = a.groups.flatMap(
      (c) => c.cells.flatMap((x) => {
        const k = Js(x);
        return k === null ? [] : [
          {
            ...k,
            index: x.index,
            isError: x.isError === !0,
            kind: x.kind,
            label: x.text,
            lane: hn(x.kind)
          }
        ];
      })
    );
    return m.length === 0 ? [] : [{ turn: a.turn, rawSpans: m }];
  }), l = n.flatMap((a) => a.rawSpans);
  if (l.length === 0) return null;
  const o = /* @__PURE__ */ new Map();
  let r = 0, i = null;
  for (const a of [...l].sort(
    (m, c) => m.start - c.start || m.end - c.end
  ))
    t && i !== null && a.start > i && (r += a.start - i), o.set(a, r), i = i === null ? a.end : Math.max(i, a.end);
  const p = [], y = [];
  for (const a of n) {
    const m = a.rawSpans.map((c) => {
      const x = o.get(c) ?? 0;
      return {
        ...c,
        start: c.start - x,
        end: (s ? c.end : c.start) - x
      };
    });
    p.push(...m), a.turn !== null && y.push({
      turn: a.turn,
      time: Math.min(...m.map((c) => c.start))
    });
  }
  return {
    start: Math.min(...p.map((a) => a.start)),
    end: Math.max(...p.map((a) => a.end)),
    spans: p,
    turnBoundaries: y
  };
}
function Ys(e, s, t = "sequence") {
  const n = mn(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((l) => l.start <= s.end && l.end >= s.start).map((l) => l.index)
  );
}
Gs();
const Je = window.QwenPaw.host, N = Je.React, { useEffect: He, useMemo: Pt, useRef: We, useState: we } = N, { Tooltip: qs } = Je.antd, ht = 3, Zs = 4, el = 0.08, tl = 0.025, nl = 32, sl = 0.5;
function ll(e) {
  const s = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, l = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, o = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...s === void 0 ? {} : { durationMs: s },
    ...t === void 0 ? {} : { startedAt: t },
    ...l === void 0 || o === void 0 ? {} : { ttftMs: l, decodingMs: o }
  };
}
function ol(e) {
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
function rl(e, s) {
  const t = ol(e);
  if (s === void 0) return t;
  const n = s.durationMs === void 0 ? null : `Total ${dt(s.durationMs)}`, l = s.startedAt === void 0 ? null : s.durationMs === void 0 ? `Started ${Le(s.startedAt)}` : `${Le(s.startedAt)} → ${Le(
    s.startedAt + s.durationMs
  )}`, o = s.ttftMs === void 0 || s.decodingMs === void 0 ? null : `TTFT ${dt(
    s.ttftMs
  )} · Decoding ${dt(s.decodingMs)}`, r = [n, o].filter((i) => i !== null).join(" · ");
  return [t, l, r].filter((i) => i !== null && i !== "").join(`
`);
}
function gt(e, s) {
  return e <= s ? { start: e, end: s } : { start: s, end: e };
}
function mt(e) {
  return Math.min(1, Math.max(0, e));
}
function il(e, s, t, n) {
  const l = Math.min(n - t, Math.max(0, s)), o = Math.min(
    Math.max(e - l / 2, t),
    n - l
  );
  return { start: o, end: o + l };
}
function Nt(e, s, t, n, l) {
  const o = gt(
    Math.min(l, Math.max(n, e.start)),
    Math.min(l, Math.max(n, e.end))
  );
  return {
    start: (o.start - s) / t,
    end: (o.end - s) / t
  };
}
function fn({
  label: e,
  placement: s,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ N.createElement(
    qs,
    {
      title: /* @__PURE__ */ N.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: s,
      mouseEnterDelay: sl,
      ...n
    },
    t
  );
}
function Ft() {
  return /* @__PURE__ */ N.createElement("div", { className: Z.labels, "aria-hidden": "true" }, /* @__PURE__ */ N.createElement("span", null, "Input"), /* @__PURE__ */ N.createElement("span", null, "Model"), /* @__PURE__ */ N.createElement("span", null, "Tools"));
}
function Bt({
  loading: e,
  onHover: s,
  onLoad: t
}) {
  return /* @__PURE__ */ N.createElement(
    fn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ N.createElement(
      "button",
      {
        type: "button",
        className: Z.earlierHistory,
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
const al = N.memo(function({
  turns: s,
  mode: t,
  range: n,
  hasEarlierRecords: l = !1,
  onLoadEarlier: o,
  selectedIndex: r = null,
  searchMatchIndexes: i = null,
  onRangeChange: p,
  onRecordSelect: y,
  onRecordFocus: a
}) {
  const m = typeof Je.useTheme == "function" ? Je.useTheme() : void 0, c = Pt(
    () => mn(s, t),
    [t, s]
  ), x = Pt(
    () => new Map(
      s.flatMap(
        (h) => h.groups.flatMap(
          (b) => b.cells.map(
            (M) => [M.index, ll(M)]
          )
        )
      )
    ),
    [s]
  ), k = We(null), T = We(null), D = We(null), w = We(null), [d, f] = we(null), [g, v] = we(null), [O, S] = we(!1), [R, C] = we(!1), [_, L] = we(null), [se, j] = we(!1);
  He(() => {
    c !== null && n !== null && (n.end < c.start || n.start > c.end) && p(null);
  }, [c, p, n]), He(() => {
    c !== null && (j(!1), L(
      (h) => h !== null && (h.end < c.start || h.start > c.end) ? null : h
    ));
  }, [c]), He(() => {
    if (c === null || r === null) return;
    const h = c.spans.find(
      (b) => b.index === r
    );
    h !== void 0 && (j(!0), L((b) => {
      if (b === null || h.end > b.start && h.start < b.end)
        return b;
      const M = Math.max(1, b.end - b.start), F = h.end <= b.start ? h.start : h.end - M, B = Math.min(
        Math.max(F, c.start),
        Math.max(c.start, c.end - M)
      );
      return B === b.start ? b : { start: B, end: B + M };
    }));
  }, [c, r]);
  const V = Math.max(1, ((c == null ? void 0 : c.end) ?? 0) - ((c == null ? void 0 : c.start) ?? 0)), _e = Math.min(
    V,
    Math.max(1, ((_ == null ? void 0 : _.end) ?? 0) - ((_ == null ? void 0 : _.start) ?? 0))
  ), je = c === null || _ === null ? (c == null ? void 0 : c.start) ?? 0 : Math.min(
    Math.max(_.start, c.start),
    c.end - _e
  ), W = _ === null ? V : _e, H = _ === null ? (c == null ? void 0 : c.start) ?? 0 : je, Me = l && c !== null && H === c.start, Ie = o === void 0 || O ? void 0 : () => {
    S(!0), o().finally(() => {
      S(!1);
    });
  }, ge = c === null ? void 0 : {
    "--trajectory-domain-left": `${-(H - c.start) / W * 100}%`,
    "--trajectory-domain-width": `${V / W * 100}%`
  }, G = c === null || n === null ? null : Nt(
    n,
    H,
    W,
    c.start,
    c.end
  ), ue = (c === null || d === null ? null : Nt(
    d,
    H,
    W,
    c.start,
    c.end
  )) ?? G, ze = d ?? n;
  if (He(() => {
    const h = D.current;
    if (h === null) return;
    const b = (M) => {
      M.preventDefault();
      const F = w.current;
      if (F === null || c === null) return;
      j(!1);
      const B = F.getBoundingClientRect(), U = mt(
        (M.clientX - B.left) / Math.max(1, B.width)
      ), Q = Math.min(
        V,
        Math.max(
          Math.min(
            t === "sequence" ? Zs : 20,
            V
          ),
          W * Math.exp(M.deltaY * 15e-4)
        )
      );
      if (Q >= V * 0.999) {
        L(null);
        return;
      }
      const J = H + U * W, q = Math.min(
        Math.max(J - U * Q, c.start),
        c.end - Q
      );
      L({ start: q, end: q + Q });
    };
    return h.addEventListener("wheel", b, { passive: !1 }), () => {
      h.removeEventListener("wheel", b);
    };
  }, [W, H, V, t, c]), c === null)
    return /* @__PURE__ */ N.createElement(
      "section",
      {
        ref: D,
        className: Z.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ N.createElement("div", { className: Z.plot }, /* @__PURE__ */ N.createElement(Ft, null), /* @__PURE__ */ N.createElement("div", { className: Z.track }, /* @__PURE__ */ N.createElement("span", { className: Z.empty }, "No timing data"), l && /* @__PURE__ */ N.createElement(
        Bt,
        {
          loading: O,
          onHover: () => {
            v(null);
          },
          onLoad: Ie
        }
      )))
    );
  const Oe = Math.min(
    W,
    V / c.spans.length
  ), Ee = (h) => {
    const b = h.currentTarget.getBoundingClientRect();
    return mt((h.clientX - b.left) / Math.max(1, b.width));
  }, Se = (h) => {
    var B;
    const b = h.target instanceof HTMLElement ? h.target : null, M = (B = b == null ? void 0 : b.closest("[data-timeline-record-index]")) == null ? void 0 : B.dataset.timelineRecordIndex;
    if (M === void 0) return null;
    const F = Number(M);
    return Number.isFinite(F) ? F : null;
  }, Pe = (h) => {
    p(h);
  }, Ne = (h) => {
    if (h.button === 2) {
      T.current = {
        anchorClientX: h.clientX,
        anchorStart: H,
        moved: !1,
        pannable: _ !== null,
        pointerId: h.pointerId
      }, _ !== null && j(!1), C(!0), typeof h.currentTarget.setPointerCapture == "function" && h.currentTarget.setPointerCapture(h.pointerId);
      return;
    }
    if (h.button !== 0) return;
    const b = Ee(h), M = H + b * W, F = Se(h);
    v({ fraction: b, recordIndex: F }), k.current = {
      pointerId: h.pointerId,
      anchorTime: M,
      anchorClientX: h.clientX,
      recordIndex: F
    }, typeof h.currentTarget.setPointerCapture == "function" && h.currentTarget.setPointerCapture(h.pointerId), f({ start: M, end: M });
  }, Ze = (h) => {
    const b = h.currentTarget.getBoundingClientRect(), M = Ee(h);
    v({ fraction: M, recordIndex: Se(h) });
    const F = T.current;
    if (F !== null && F.pointerId === h.pointerId) {
      if (Math.abs(h.clientX - F.anchorClientX) >= ht && (F.moved = !0), !F.pannable) return;
      const J = (h.clientX - F.anchorClientX) / Math.max(1, b.width), q = Math.min(
        Math.max(F.anchorStart - J * W, c.start),
        c.end - W
      );
      L({ start: q, end: q + W });
      return;
    }
    const B = k.current;
    if (B === null || B.pointerId !== h.pointerId) return;
    let U = H;
    if (_ !== null) {
      const J = h.clientX - b.left, q = Math.min(
        nl,
        Math.max(1, b.width * el)
      ), X = J < q ? -1 : J > b.width - q ? 1 : 0;
      if (X !== 0) {
        const xe = X < 0 ? q - J : J - (b.width - q), oe = mt(xe / q), ae = H + X * W * tl * Math.max(0.2, oe);
        U = Math.min(
          Math.max(ae, c.start),
          c.end - W
        ), U !== H && (j(!1), L({
          start: U,
          end: U + W
        }));
      }
    }
    const Q = U + M * W;
    f(gt(B.anchorTime, Q));
  }, et = (h) => {
    const b = T.current;
    if (b !== null && b.pointerId === h.pointerId) {
      const X = b.moved || Math.abs(h.clientX - b.anchorClientX) >= ht;
      T.current = null, C(!1), X || p(null);
      return;
    }
    const M = k.current;
    if (M === null || M.pointerId !== h.pointerId) return;
    const F = Ee(h), B = H + F * W, U = gt(M.anchorTime, B);
    v({ fraction: F, recordIndex: Se(h) }), k.current = null, f(null);
    const Q = Math.abs(h.clientX - M.anchorClientX) < ht, J = Q && M.recordIndex !== null ? c.spans.find((X) => X.index === M.recordIndex) : void 0;
    if (J !== void 0) {
      p(null), y == null || y(J.index);
      return;
    }
    const q = U.end - U.start < Oe ? il(
      Q ? U.start : (U.start + U.end) / 2,
      Oe,
      c.start,
      c.end
    ) : U;
    if (Pe(q), Q) {
      const X = U.start, xe = c.spans.reduce((oe, ae) => {
        const Fe = X < oe.start ? oe.start - X : X > oe.end ? X - oe.end : 0;
        return (X < ae.start ? ae.start - X : X > ae.end ? X - ae.end : 0) < Fe ? ae : oe;
      });
      a == null || a(xe.index);
    }
  }, tt = (h) => {
    h.key !== "Escape" || n === null || (h.preventDefault(), p(null));
  }, nt = () => {
    k.current = null, T.current = null, f(null), v(null), C(!1);
  };
  return /* @__PURE__ */ N.createElement(
    "section",
    {
      ref: D,
      className: Z.root,
      "data-theme": m || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ N.createElement("div", { className: Z.plot }, /* @__PURE__ */ N.createElement(Ft, null), /* @__PURE__ */ N.createElement(
      "div",
      {
        ref: w,
        className: Z.track,
        "data-panning": R || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: tt,
        onPointerDown: Ne,
        onPointerMove: Ze,
        onPointerUp: et,
        onPointerCancel: nt,
        onPointerLeave: () => {
          k.current === null && T.current === null && v(null);
        },
        onDoubleClick: (h) => {
          h.preventDefault(), p(null);
        },
        onContextMenu: (h) => {
          h.preventDefault();
        }
      },
      Me && /* @__PURE__ */ N.createElement(
        Bt,
        {
          loading: O,
          onHover: () => {
            v(null);
          },
          onLoad: Ie
        }
      ),
      g !== null && g.recordIndex === null && d === null && /* @__PURE__ */ N.createElement(
        "div",
        {
          className: Z.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${g.fraction * 100}%`
          }
        }
      ),
      ue !== null && /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(
        "div",
        {
          className: Z.selection,
          "data-dragging": d === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ue.start * 100}%`,
            "--trajectory-selection-width": `${(ue.end - ue.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ N.createElement(
        "div",
        {
          className: Z.selectionEdges,
          "data-dragging": d === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ue.start * 100}%`,
            "--trajectory-selection-width": `${(ue.end - ue.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ N.createElement(
        "div",
        {
          className: Z.turnBoundaries,
          "data-animate-viewport": se || void 0,
          "aria-hidden": "true",
          style: ge
        },
        c.turnBoundaries.filter(
          (h) => h.time > c.start && h.time >= H && h.time <= H + W
        ).map((h) => /* @__PURE__ */ N.createElement(
          "span",
          {
            className: Z.turnBoundary,
            "data-turn": h.turn,
            key: h.turn,
            style: {
              "--trajectory-turn-left": `${(h.time - c.start) / V * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ N.createElement(
        "div",
        {
          className: Z.lanes,
          "data-animate-viewport": se || void 0,
          "data-timeline-domain": !0,
          style: ge
        },
        c.spans.filter(
          (h) => h.index === r || h.end >= H && h.start <= H + W
        ).map((h) => {
          const b = (h.start - c.start) / V, F = (h.end - h.start) / V * 100, B = x.get(h.index), U = B == null ? void 0 : B.ttftMs, Q = B == null ? void 0 : B.decodingMs, J = U === void 0 || Q === void 0 || U + Q <= 0 ? null : U / (U + Q);
          return /* @__PURE__ */ N.createElement(
            fn,
            {
              key: h.index,
              label: rl(h.kind, B),
              placement: "bottom"
            },
            /* @__PURE__ */ N.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: Z.span,
                "data-timeline-span": h.kind,
                "data-timeline-record-index": h.index,
                "data-assistant-timing": J === null ? void 0 : "true",
                "data-error": h.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": h.index === r || void 0,
                "data-hovered": (g == null ? void 0 : g.recordIndex) === h.index || void 0,
                "data-search-match": i === null ? void 0 : i.has(h.index) ? "true" : "false",
                "data-selected": ze === null ? void 0 : h.start <= ze.end && h.end >= ze.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${b * 100}%`,
                  "--trajectory-span-width": `${F}%`,
                  "--trajectory-span-gap": `min(${F * 0.08}%, 1px)`,
                  "--trajectory-span-lane": h.lane,
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
}), St = window.QwenPaw.host, ie = St.React, { Button: cl, Input: ul, Segmented: dl, Tooltip: Ht } = St.antd, { MenuFoldOutlined: hl, MenuUnfoldOutlined: ml, ReloadOutlined: fl, SearchOutlined: pl } = St.antdIcons;
function gl({
  mode: e,
  onModeChange: s,
  search: t,
  onSearchChange: n,
  onRefresh: l,
  modeOptions: o,
  allCollapsed: r,
  hasRequests: i,
  onToggleCollapseAll: p,
  callsCollapsed: y,
  onToggleCallsCollapsed: a
}) {
  const m = te();
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
    /* @__PURE__ */ ie.createElement(Ht, { title: E(m, "projectionHint") }, /* @__PURE__ */ ie.createElement(
      dl,
      {
        size: "small",
        value: e,
        options: o,
        onChange: (c) => s(c)
      }
    )),
    /* @__PURE__ */ ie.createElement(
      ul,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ie.createElement(pl, null),
        placeholder: E(m, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (c) => n(c.target.value)
      }
    ),
    i && /* @__PURE__ */ ie.createElement(
      Ht,
      {
        title: r ? E(m, "expandAll") : E(m, "collapseAll")
      },
      /* @__PURE__ */ ie.createElement(
        cl,
        {
          size: "small",
          type: "text",
          icon: r ? /* @__PURE__ */ ie.createElement(ml, null) : /* @__PURE__ */ ie.createElement(hl, null),
          onClick: p
        }
      )
    ),
    /* @__PURE__ */ ie.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ie.createElement(
      "a",
      {
        onClick: l,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ie.createElement(fl, null),
      " ",
      E(m, "refresh")
    ))
  );
}
function pn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function yl(e) {
  if (!e) return "-";
  const s = new Date(e);
  return Number.isNaN(s.getTime()) ? e : s.toLocaleString();
}
function vl(e) {
  if (!e) return "-";
  const s = Date.parse(e);
  if (!Number.isFinite(s)) return e;
  const t = Date.now() - s;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(s).toLocaleString();
}
function gn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Wt(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const yn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function vn(e) {
  return e || "unknown";
}
const qe = window.QwenPaw.host, z = qe.React, { useCallback: Ut, useEffect: ft, useMemo: de, useRef: El, useState: ne } = z, {
  Button: Ue,
  Empty: Kt,
  Popconfirm: Sl,
  Popover: xl,
  Space: bl,
  Spin: En,
  Switch: wl,
  Tag: kl,
  Tooltip: Tl,
  message: Re
} = qe.antd, { DeleteOutlined: _l, DownloadOutlined: Ml, SettingOutlined: Vt } = qe.antdIcons, { Text: pe } = qe.antd.Typography;
function Xt({
  config: e,
  onChange: s,
  children: t
}) {
  const n = te(), l = (r, i, p) => /* @__PURE__ */ z.createElement(
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
    /* @__PURE__ */ z.createElement(pe, { style: { fontSize: 13 } }, r),
    /* @__PURE__ */ z.createElement(
      wl,
      {
        size: "small",
        checked: !!i,
        onChange: (y) => s({ [p]: y })
      }
    )
  ), o = /* @__PURE__ */ z.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ z.createElement(pe, { strong: !0, style: { fontSize: 13 } }, E(n, "settings")), /* @__PURE__ */ z.createElement("div", { style: { marginTop: 8 } }, e ? [
    l(E(n, "enabled"), e.enabled, "enabled"),
    l(E(n, "captureLlm"), e.capture_llm, "capture_llm"),
    l(
      E(n, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    l(
      E(n, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ z.createElement(En, { size: "small" })));
  return /* @__PURE__ */ z.createElement(xl, { content: o, trigger: "click", placement: "bottomRight" }, t);
}
function Il({
  sessionId: e,
  summary: s,
  locale: t,
  onJumpSession: n,
  onRefreshSessions: l
}) {
  const [o, r] = ne(null), [i, p] = ne(!1), [y, a] = ne(!1), [m, c] = ne(""), [x, k] = ne("sequence"), [T, D] = ne(null), [w, d] = ne(null), [f, g] = ne(null), [v, O] = ne(
    /* @__PURE__ */ new Set()
  ), [S, R] = ne(!1), [C, _] = ne(null), [L, se] = ne(null), [j, V] = ne(null), [_e, je] = ne(null), W = El(null);
  W.current = e, ft(() => {
    zn().then(_).catch(() => _(null));
  }, []);
  const H = Ut(async (h, b) => {
    b || p(!0);
    try {
      const M = await Cn(h, {
        beforeSeq: b,
        limit: 200
      });
      je(null), r((F) => b && F ? {
        ...M,
        events: [...M.events, ...F.events]
      } : M);
    } catch (M) {
      je(String(M.message));
    } finally {
      b || p(!1);
    }
  }, []), Me = Ut(async (h) => {
    try {
      const b = await In(h);
      V(b), se({
        sessionId: h,
        inputTokens: b.input_tokens,
        outputTokens: b.output_tokens,
        totalTokens: b.total_tokens,
        reasoningTokens: Number(b.reasoning_tokens ?? 0)
      });
    } catch {
      V(null), se(null);
    }
  }, []);
  ft(() => {
    e ? (D(null), d(null), g(null), O(/* @__PURE__ */ new Set()), c(""), H(e), Me(e)) : (r(null), V(null), se(null));
  }, [e, H, Me]);
  const Ie = de(
    () => o ? Ks(o.events) : [],
    [o]
  ), { initial: ge, turns: G } = de(
    () => Vs(Ie),
    [Ie]
  ), Ce = de(
    () => ge ? [ge, ...Lt(G)] : Lt(G),
    [ge, G]
  ), ue = de(
    () => G.some((h) => h.status === "running"),
    [G]
  );
  ft(() => {
    if (!e || !ue) return;
    const h = setInterval(() => {
      document.visibilityState === "visible" && W.current && H(W.current);
    }, 5e3);
    return () => clearInterval(h);
  }, [e, ue, H]);
  const ze = de(
    () => T === null ? null : Ys(G, T, x),
    [T, G, x]
  ), Oe = de(() => {
    const h = m.trim().toLowerCase();
    return h ? new Set(
      Ce.filter(
        (b) => [
          b.text,
          b.outputText,
          b.thinkingText,
          b.toolName,
          b.toolInput,
          b.toolOutput,
          b.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(h)
      ).map((b) => b.index)
    ) : null;
  }, [m, Ce]), Ee = de(
    () => w === null ? null : Ce.find((h) => h.index === w) ?? null,
    [Ce, w]
  ), Se = de(() => {
    var xt, bt;
    if (f === null) return null;
    const h = G.find((P) => P.turn === f);
    if (!h) return null;
    const b = ((xt = h.groups[0]) == null ? void 0 : xt.cells) ?? [], M = b.filter((P) => P.kind === "message"), F = b.filter((P) => P.kind === "tool"), B = [
      ...new Set(
        M.map((P) => P.model).filter((P) => !!P)
      )
    ], U = [
      ...new Set(
        M.map((P) => P.provider).filter((P) => !!P)
      )
    ];
    let Q = 0, J = 0, q = 0, X = 0, xe = 0, oe = null, ae = 0;
    const Fe = [];
    for (const P of b)
      P.usage && (Q += P.usage.input_tokens ?? 0, J += P.usage.output_tokens ?? 0, q += P.usage.cache_input_tokens ?? 0, X += P.usage.cache_creation_input_tokens ?? 0, xe += P.usage.reasoning_tokens ?? 0), P.timing && (oe = oe === null ? P.timing.ttft_ms : Math.min(oe, P.timing.ttft_ms), ae = (ae ?? 0) + P.timing.decode_ms), P.isError && Fe.push(P.toolError ?? P.text ?? "error");
    const ye = b.find((P) => P.kind === "user"), Sn = (bt = [...M].reverse().find((P) => P.options)) == null ? void 0 : bt.options, st = [...M].reverse().find((P) => P.outputText);
    return {
      turn: f,
      status: h.status,
      durationMs: h.durationMs,
      startedAt: (ye == null ? void 0 : ye.startedAt) ?? null,
      query: (ye == null ? void 0 : ye.text) ?? "",
      llmCalls: M.length,
      toolCalls: F.length,
      models: B,
      providers: U,
      inputTokens: Q,
      outputTokens: J,
      cacheReadTokens: q,
      cacheWriteTokens: X,
      reasoningTokens: xe,
      resultIndex: st == null ? void 0 : st.index,
      ttftMs: oe,
      decodeMs: ae,
      errors: Fe,
      options: Sn,
      sessionTotals: L && L.sessionId === e ? {
        inputTokens: L.inputTokens,
        outputTokens: L.outputTokens,
        totalTokens: L.totalTokens,
        reasoningTokens: L.reasoningTokens
      } : void 0
    };
  }, [f, G, L, e]), Pe = !!(o && o.events.length > 0 && o.events[0].seq > 1), Ne = async (h) => {
    try {
      _(await On(h));
    } catch (b) {
      Re.error(String(b.message));
    }
  }, Ze = de(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), et = de(() => {
    if (!j) return null;
    const h = [
      `${j.runs} ${E(t, "statRounds")} · ${j.llm_calls} ${E(t, "statSteps")}`,
      `LLM ${le(j.llm_ms_total / 1e3)} · ${E(
        t,
        "toolCalls"
      )} ${le(j.tool_ms_total / 1e3)}`,
      `${E(t, "statTtftAvg")} ${j.ttft_ms_avg === null ? "-" : le(j.ttft_ms_avg / 1e3)} · ${vt(
        j.output_tokens,
        j.decode_ms_total / 1e3
      )}`
    ];
    if (j.cache_read_tokens > 0 || j.cache_write_tokens > 0) {
      const b = j.cache_read_tokens + j.input_tokens, M = b > 0 ? Math.round(j.cache_read_tokens / b * 100) : 0;
      h.push(`${E(t, "statCacheHit")} ${M}%`);
    }
    return h.push(
      `${E(t, "statInput")} ${ee(
        j.input_tokens
      )} tok · ${E(t, "statOutput")} ${ee(
        j.output_tokens
      )} tok`
    ), s && h.push(Wt(s.size_bytes)), h.join(" | ");
  }, [j, s, t]), tt = () => {
    d(null), g(null);
  }, nt = Ee !== null || Se !== null;
  return /* @__PURE__ */ z.createElement(
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
    /* @__PURE__ */ z.createElement(
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
      e ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          }
        },
        /* @__PURE__ */ z.createElement(
          pe,
          {
            strong: !0,
            ellipsis: {
              tooltip: (s == null ? void 0 : s.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (s == null ? void 0 : s.title) || (s == null ? void 0 : s.agent_id) || pn(e)
        ),
        /* @__PURE__ */ z.createElement(
          kl,
          {
            color: yn[(s == null ? void 0 : s.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          vn((s == null ? void 0 : s.status) ?? "unknown")
        ),
        s != null && s.channel ? /* @__PURE__ */ z.createElement(pe, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, s.channel) : null,
        /* @__PURE__ */ z.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ z.createElement(bl, null, /* @__PURE__ */ z.createElement(Xt, { config: C, onChange: Ne }, /* @__PURE__ */ z.createElement(Ue, { size: "small", icon: /* @__PURE__ */ z.createElement(Vt, null) })), /* @__PURE__ */ z.createElement(Tl, { title: E(t, "export") }, /* @__PURE__ */ z.createElement(
          Ue,
          {
            size: "small",
            icon: /* @__PURE__ */ z.createElement(Ml, null),
            onClick: () => {
              An(e).then(() => Re.success(E(t, "exported"))).catch(
                (h) => Re.error(String(h.message))
              );
            }
          },
          E(t, "export")
        )), /* @__PURE__ */ z.createElement(
          Sl,
          {
            title: E(t, "deleteConfirm"),
            onConfirm: () => {
              $n(e).then(() => {
                Re.success(E(t, "deleted")), l == null || l();
              }).catch(
                (h) => Re.error(String(h.message))
              );
            }
          },
          /* @__PURE__ */ z.createElement(Ue, { size: "small", danger: !0, icon: /* @__PURE__ */ z.createElement(_l, null) }, E(t, "delete"))
        )))
      ), /* @__PURE__ */ z.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap"
          }
        },
        /* @__PURE__ */ z.createElement(
          pe,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          et ?? // Transient line while the stats endpoint responds.
          (s ? `${s.runs} ${E(t, "statRounds")} · ${s.llm_calls} ${E(t, "statSteps")} · ${gn(
            s.total_tokens
          )} ${E(t, "tokens")} · ${Wt(
            s.size_bytes
          )}` : "")
        ),
        /* @__PURE__ */ z.createElement(
          pe,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                E(t, "copySessionId"),
                E(t, "copiedSessionId")
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
      )) : /* @__PURE__ */ z.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }
        },
        /* @__PURE__ */ z.createElement(pe, { type: "secondary", style: { fontSize: 13 } }, E(t, "selectSession")),
        /* @__PURE__ */ z.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ z.createElement(Xt, { config: C, onChange: Ne }, /* @__PURE__ */ z.createElement(Ue, { size: "small", icon: /* @__PURE__ */ z.createElement(Vt, null) })))
      )
    ),
    _e && /* @__PURE__ */ z.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ z.createElement(pe, { type: "danger", style: { fontSize: 12 } }, `${E(t, "loadFailed")}: ${_e}`)),
    /* @__PURE__ */ z.createElement(
      gl,
      {
        mode: x,
        onModeChange: k,
        search: m,
        onSearchChange: c,
        onRefresh: () => {
          e && (H(e), Me(e)), l == null || l();
        },
        modeOptions: Ze,
        allCollapsed: G.length > 0 && G.every((h) => v.has(h.turn ?? -1)),
        hasRequests: G.some((h) => h.turn !== null),
        callsCollapsed: S,
        onToggleCallsCollapsed: () => R((h) => !h),
        onToggleCollapseAll: () => {
          O((h) => G.some(
            (M) => M.turn !== null && !h.has(M.turn)
          ) ? new Set(
            G.map((M) => M.turn).filter((M) => M !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ z.createElement(
      al,
      {
        turns: G,
        mode: x,
        range: T,
        hasEarlierRecords: Pe,
        onLoadEarlier: async () => {
          var h;
          return !o || o.events.length === 0 ? !1 : (await H(e, (h = o.events[0]) == null ? void 0 : h.seq), !0);
        },
        selectedIndex: w,
        searchMatchIndexes: Oe,
        onRangeChange: D,
        onRecordSelect: d,
        onRecordFocus: d
      }
    ),
    i && !o ? /* @__PURE__ */ z.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ z.createElement(En, null)) : o ? /* @__PURE__ */ z.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ z.createElement(
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
      /* @__PURE__ */ z.createElement(
        Ws,
        {
          turns: G,
          selectedIndex: w,
          selectedTurn: f,
          collapsedTurns: v,
          focusIndexes: ze,
          searchMatchIndexes: Oe,
          onSelectedIndexChange: (h) => {
            if (h === w) {
              d(null);
              return;
            }
            d(h), g(null);
          },
          onSelectedTurnChange: (h) => {
            g(h), d(null);
          },
          callsCollapsed: S,
          onToggleTurn: (h) => {
            O((b) => {
              const M = new Set(b);
              return M.has(h) ? M.delete(h) : M.add(h), M;
            });
          },
          hasOlderRecords: Pe,
          loadingOlder: y,
          onLoadOlder: () => {
            var h;
            !o || o.events.length === 0 || (a(!0), H(
              e,
              (h = o.events[0]) == null ? void 0 : h.seq
            ).finally(() => a(!1)));
          },
          emptyText: E(t, "noSessions"),
          initialRecord: ge
        }
      )
    ), nt ? /* @__PURE__ */ z.createElement(
      Zn,
      {
        record: Ee,
        request: Se,
        onJumpSession: n,
        onSelectTurn: (h) => {
          g(h), d(null);
        },
        onClose: tt
      }
    ) : null) : /* @__PURE__ */ z.createElement(
      Kt,
      {
        image: Kt.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: E(t, "selectSession")
      }
    )
  );
}
const ke = window.QwenPaw.host, $ = ke.React, { useCallback: Gt, useEffect: Jt, useMemo: Ke, useState: fe } = $, { Button: Qt, Empty: Yt, Input: Cl, Spin: zl, Tag: qt, Tooltip: Zt } = ke.antd, {
  CaretRightOutlined: Ol,
  MenuFoldOutlined: Al,
  MenuUnfoldOutlined: $l,
  SearchOutlined: Rl
} = ke.antdIcons, { Text: De } = ke.antd.Typography;
function Ll({
  groups: e,
  collapsedAgents: s,
  onToggleAgent: t,
  searching: n,
  selected: l,
  onSelect: o,
  locale: r
}) {
  const i = e.length > 1;
  return /* @__PURE__ */ $.createElement($.Fragment, null, e.map(([p, y]) => {
    const a = i && !n && s.has(p);
    return /* @__PURE__ */ $.createElement("div", { key: p }, i && /* @__PURE__ */ $.createElement(
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
      /* @__PURE__ */ $.createElement(
        Ol,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: a ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ $.createElement(De, { strong: !0, style: { fontSize: 12 } }, p),
      /* @__PURE__ */ $.createElement(De, { type: "secondary", style: { fontSize: 11 } }, y.length)
    ), !a && y.map((m) => {
      const c = m.session_id === l;
      return /* @__PURE__ */ $.createElement(
        "div",
        {
          key: m.session_id,
          onClick: () => o(m.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: c ? "rgba(22,119,255,0.10)" : "transparent",
            border: c ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ $.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ $.createElement(
            De,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${m.title ? `${m.title}
` : ""}${m.session_id}`
              }
            },
            m.title || m.agent_id || pn(m.session_id)
          ),
          i ? null : m.agent_id ? /* @__PURE__ */ $.createElement(
            qt,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            m.agent_id
          ) : null,
          /* @__PURE__ */ $.createElement(
            qt,
            {
              color: yn[m.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            vn(m.status)
          )
        ),
        /* @__PURE__ */ $.createElement(
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
          /* @__PURE__ */ $.createElement("span", null, m.channel || "-"),
          /* @__PURE__ */ $.createElement("span", null, m.runs, " ", E(r, "runs")),
          /* @__PURE__ */ $.createElement("span", null, gn(m.total_tokens), " tok"),
          /* @__PURE__ */ $.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: yl(m.last_event_t)
            },
            vl(m.last_event_t)
          )
        )
      );
    }));
  }));
}
function Dl() {
  const e = typeof ke.useLocale == "function" ? ke.useLocale() : void 0, s = Ke(
    () => yt(e ?? te()),
    [e]
  ), [t, n] = fe(null), [l, o] = fe(!1), [r, i] = fe(
    /* @__PURE__ */ new Set()
  ), [p, y] = fe(!1), [a, m] = fe(!1), [c, x] = fe(null), [k, T] = fe(""), [D, w] = fe(null), d = Gt(async () => {
    try {
      const S = await wt({ limit: 100, offset: 0 });
      n(S.sessions), o(S.has_more), w(null);
    } catch (S) {
      w(String(S.message));
    }
  }, []), f = Gt(async () => {
    m(!0);
    try {
      const S = await wt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((R) => {
        const C = R ?? [];
        return [
          ...C,
          ...S.sessions.filter(
            (_) => !C.some((L) => L.session_id === _.session_id)
          )
        ];
      }), o(S.has_more);
    } catch (S) {
      w(String(S.message));
    } finally {
      m(!1);
    }
  }, [t]);
  Jt(() => {
    d();
    try {
      const S = new URLSearchParams(window.location.search).get("session");
      S && x(S);
    } catch {
    }
  }, [d]), Jt(() => {
    const S = setInterval(() => {
      document.visibilityState === "visible" && d();
    }, 15e3);
    return () => clearInterval(S);
  }, [d]);
  const g = Ke(
    () => (t == null ? void 0 : t.find((S) => S.session_id === c)) ?? null,
    [t, c]
  ), v = Ke(() => {
    if (!t) return [];
    const S = k.trim().toLowerCase();
    return S ? t.filter(
      (R) => [R.session_id, R.title ?? "", R.agent_id, R.channel].join(" ").toLowerCase().includes(S)
    ) : t;
  }, [t, k]), O = Ke(() => {
    const S = /* @__PURE__ */ new Map();
    for (const R of v) {
      const C = R.agent_id || "(unknown)", _ = S.get(C);
      _ ? _.push(R) : S.set(C, [R]);
    }
    return [...S.entries()];
  }, [v]);
  return /* @__PURE__ */ $.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, p ? /* @__PURE__ */ $.createElement(
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
    /* @__PURE__ */ $.createElement(Zt, { title: E(s, "expandSidebar"), placement: "right" }, /* @__PURE__ */ $.createElement(
      Qt,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ $.createElement($l, null),
        onClick: () => y(!1)
      }
    ))
  ) : /* @__PURE__ */ $.createElement(
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
    /* @__PURE__ */ $.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ $.createElement(
        Cl,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ $.createElement(Rl, null),
          placeholder: E(s, "searchPlaceholder"),
          value: k,
          style: { flex: 1, minWidth: 0 },
          onChange: (S) => T(S.target.value)
        }
      ),
      /* @__PURE__ */ $.createElement(Zt, { title: E(s, "collapseSidebar") }, /* @__PURE__ */ $.createElement(
        Qt,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ $.createElement(Al, null),
          onClick: () => y(!0)
        }
      ))
    ),
    D ? /* @__PURE__ */ $.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ $.createElement(De, { type: "danger", style: { fontSize: 12 } }, `${E(s, "loadFailed")}: ${D}`)) : null,
    /* @__PURE__ */ $.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ $.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ $.createElement(zl, null)) : v.length === 0 ? /* @__PURE__ */ $.createElement(
      Yt,
      {
        image: Yt.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ $.createElement("span", { style: { fontSize: 12 } }, E(s, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ $.createElement(
        De,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        E(s, "noSessionsHint")
      )
    ) : /* @__PURE__ */ $.createElement(
      Ll,
      {
        groups: O,
        collapsedAgents: r,
        onToggleAgent: (S) => {
          i((R) => {
            const C = new Set(R);
            return C.has(S) ? C.delete(S) : C.add(S), C;
          });
        },
        searching: !!k.trim(),
        selected: c,
        onSelect: x,
        locale: s
      }
    ), t !== null && l && !k.trim() && /* @__PURE__ */ $.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ $.createElement(
      "a",
      {
        onClick: () => void f(),
        style: { fontSize: 12 }
      },
      a ? "…" : `⋯ ${E(s, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ $.createElement(
    Il,
    {
      sessionId: c,
      summary: g,
      locale: s,
      onJumpSession: x,
      onRefreshSessions: () => void d()
    }
  ));
}
const jl = window.QwenPaw.host.React;
var en, tn;
(tn = (en = window.QwenPaw).registerRoutes) == null || tn.call(en, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Dl,
    label: E(te(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var nn, Ve, sn;
(sn = (Ve = (nn = window.QwenPaw.chat) == null ? void 0 : nn.rightHeader) == null ? void 0 : Ve.add) == null || sn.call(
  Ve,
  "agent-trace",
  jl.createElement(Mn),
  { id: "agent-trace-jump" }
);

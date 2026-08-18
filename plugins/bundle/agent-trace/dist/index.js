const jn = {
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
    dockTitle: "轨迹",
    openFullPage: "在完整页面打开",
    followCurrent: "跟随当前对话",
    viewingChild: "子会话",
    waitingSession: "等待会话…",
    waitingSessionHint: "在对话页发送消息后，此处会实时展示当前会话的轨迹",
    noTraceYet: "当前对话还没有轨迹数据",
    closePanel: "关闭面板",
    dragToResize: "拖动调整宽度"
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
    dockTitle: "Trace",
    openFullPage: "Open in full page",
    followCurrent: "Following current chat",
    viewingChild: "Child session",
    waitingSession: "Waiting for a session…",
    waitingSessionHint: "Send a message in the chat and the current session's trace will appear here live",
    noTraceYet: "No trace data for this chat yet",
    closePanel: "Close panel",
    dragToResize: "Drag to resize"
  }
};
function nt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ne() {
  try {
    return nt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function v(e, l) {
  return jn[e][l];
}
const Ae = window.QwenPaw.host;
async function Nn(e) {
  return Ce(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function vn(e, l) {
  return Ae.fetch ? Ae.fetch(e, l) : fetch(Ae.getApiUrl(e), {
    ...l,
    headers: {
      ...(l == null ? void 0 : l.headers) || {},
      ...Ae.getApiToken() ? { Authorization: `Bearer ${Ae.getApiToken()}` } : {}
    }
  });
}
async function Ce(e, l) {
  const t = await vn(e, l), n = await t.text();
  let s = null;
  try {
    s = n ? JSON.parse(n) : null;
  } catch {
    s = null;
  }
  if (!t.ok) {
    const r = s && typeof s == "object" && "detail" in s ? s.detail : void 0;
    throw new Error(
      typeof r == "string" ? r : `HTTP ${t.status}`
    );
  }
  return s;
}
async function wt(e) {
  const l = new URLSearchParams();
  return l.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && l.set("offset", String(e.offset)), Ce(
    `/agent-trace/sessions?${l.toString()}`
  );
}
async function Fn(e, l) {
  const t = new URLSearchParams();
  l != null && l.beforeSeq && t.set("before_seq", String(l.beforeSeq)), t.set("limit", String(l == null ? void 0 : l.limit));
  const n = t.toString();
  return Ce(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function Bn() {
  return Ce("/agent-trace/config");
}
async function Hn(e) {
  return Ce("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function Wn(e) {
  const l = await vn(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!l.ok) throw new Error(`HTTP ${l.status}`);
  const t = await l.blob(), n = URL.createObjectURL(t), s = document.createElement("a");
  s.href = n, s.download = `${e}.jsonl`, s.click(), URL.revokeObjectURL(n);
}
async function Un(e) {
  await Ce(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
const Lt = 3e3;
function Dt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function Kn(e, l) {
  const t = Dt(e ?? ""), n = Dt(l ?? "");
  if (t.length > Lt || n.length > Lt)
    return [
      ...t.map((m) => ({ kind: "del", text: m })),
      ...n.map((m) => ({ kind: "add", text: m }))
    ];
  const s = t.length, r = n.length, a = new Int32Array((s + 1) * (r + 1)), i = (m, o) => m * (r + 1) + o;
  for (let m = s - 1; m >= 0; m -= 1)
    for (let o = r - 1; o >= 0; o -= 1)
      a[i(m, o)] = t[m] === n[o] ? a[i(m + 1, o + 1)] + 1 : Math.max(a[i(m + 1, o)], a[i(m, o + 1)]);
  const d = [];
  let y = 0, p = 0;
  for (; y < s && p < r; )
    t[y] === n[p] ? (d.push({ kind: "same", text: t[y] }), y += 1, p += 1) : a[i(y + 1, p)] >= a[i(y, p + 1)] ? (d.push({ kind: "del", text: t[y] }), y += 1) : (d.push({ kind: "add", text: n[p] }), p += 1);
  for (; y < s; )
    d.push({ kind: "del", text: t[y] }), y += 1;
  for (; p < r; )
    d.push({ kind: "add", text: n[p] }), p += 1;
  return d;
}
function Vn(e, l = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((r, a) => {
    if (r.kind !== "same")
      for (let i = Math.max(0, a - l); i <= Math.min(e.length - 1, a + l); i += 1)
        t[i] = !0;
  });
  const n = [];
  let s = 0;
  return e.forEach((r, a) => {
    t[a] ? (s > 0 && (n.push({ kind: "gap", count: s }), s = 0), n.push(r)) : s += 1;
  }), s > 0 && n.push({ kind: "gap", count: s }), n;
}
function Xn(e) {
  let l = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? l += 1 : n.kind === "del" && (t += 1);
  return { added: l, removed: t };
}
const Gn = {
  approval: { zh: "审批", en: "Approval" },
  receipt: { zh: "回执", en: "Receipt" },
  spawn: { zh: "子代理", en: "Spawn" },
  header: { zh: "提示词", en: "Prompt" },
  error: { zh: "错误", en: "Error" }
}, Jn = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
};
function Sn(e, l) {
  const t = e.markerKind ? Gn[e.markerKind] : void 0;
  if (t) return l === "zh-CN" ? t.zh : t.en;
  const n = Jn[e.kind];
  return n ? l === "zh-CN" ? n.zh : n.en : e.kind;
}
function Yn(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function re(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const l = e * 1e3;
  return l < 1e3 ? `${Math.round(l)}ms` : l < 6e4 ? `${(l / 1e3).toFixed(1)}s` : `${Math.floor(l / 6e4)}m${Math.round(l % 6e4 / 1e3)}s`;
}
function te(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function Mt(e, l) {
  return e === void 0 || !Number.isFinite(e) || l === null || l === void 0 || l <= 0 ? "-" : `${(e / l).toFixed(1)} tok/s`;
}
function Pe(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ce(e) {
  if (!e) return null;
  const l = Date.parse(e);
  return Number.isFinite(l) ? l : null;
}
const st = window.QwenPaw.host, c = st.React, { useEffect: Qn, useRef: qn, useState: xn } = c, { Button: bn, Collapse: Zn, Empty: Pt, Tabs: Ct } = st.antd, { Text: V } = st.antd.Typography, { CopyOutlined: es, CloseOutlined: ts } = st.antdIcons, ns = 320, ss = 720, Xe = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, ls = 2e4;
function os(e) {
  if (e.length > ls) return e;
  const l = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, s, r = 0;
  for (; (s = t.exec(e)) !== null; ) {
    s.index > n && l.push(e.slice(n, s.index));
    const a = s[0];
    let i = "rgba(128,128,128,1)";
    s[1] !== void 0 ? i = Xe.key : s[2] !== void 0 ? i = Xe.string : s[3] !== void 0 ? i = Xe.number : i = Xe.literal, l.push(
      /* @__PURE__ */ c.createElement("span", { key: r++, style: { color: i } }, a)
    ), n = s.index + a.length;
  }
  return n < e.length && l.push(e.slice(n)), l;
}
function de({ value: e, json: l = !1 }) {
  const [t, n] = xn(!1), s = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!s) return null;
  const r = async () => {
    try {
      await navigator.clipboard.writeText(s), n(!0), window.setTimeout(() => n(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ c.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ c.createElement(
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
    t ? "✓" : /* @__PURE__ */ c.createElement(es, null)
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
    l ? os(s) : s
  ));
}
function $({
  label: e,
  value: l,
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
    /* @__PURE__ */ c.createElement(V, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ c.createElement(
      V,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      l
    )
  );
}
function jt({
  input: e,
  output: l,
  cacheRead: t,
  cacheWrite: n,
  reasoning: s
}) {
  const r = Math.max(0, e - t - n), a = Math.max(0, l - s);
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Input", value: `${te(e)} tok` }), t ? /* @__PURE__ */ c.createElement($, { label: "Cached", value: `${te(t)} tok` }) : null, n ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Cache created",
      value: `${te(n)} tok`
    }
  ) : null, t || n ? /* @__PURE__ */ c.createElement($, { label: "Other", value: `${te(r)} tok` }) : null, /* @__PURE__ */ c.createElement($, { label: "Output", value: `${te(l)} tok` }), s ? /* @__PURE__ */ c.createElement($, { label: "Reasoning", value: `${te(s)} tok` }) : null, s ? /* @__PURE__ */ c.createElement($, { label: "Content", value: `${te(a)} tok` }) : null);
}
function dt({
  label: e,
  onOpen: l,
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
    /* @__PURE__ */ c.createElement("a", { onClick: l, style: { fontSize: 12, fontWeight: 600 } }, e, " →"),
    /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 2 } }, t)
  );
}
function rs({
  request: e,
  onJumpRecord: l
}) {
  const t = ne(), [n, s] = c.useState("summary"), r = /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Started", value: Pe(e.startedAt) }), /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Total",
      value: re(
        e.durationMs === null ? null : e.durationMs / 1e3
      )
    }
  ), e.ttftMs !== null ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "First TTFT",
      value: re(e.ttftMs / 1e3)
    }
  ) : null, e.decodeMs !== null ? /* @__PURE__ */ c.createElement(
    $,
    {
      label: "Total decoding",
      value: re(e.decodeMs / 1e3)
    }
  ) : null, /* @__PURE__ */ c.createElement(
    $,
    {
      label: v(t, "throughput"),
      value: Mt(
        e.outputTokens,
        e.decodeMs === null ? null : e.decodeMs / 1e3
      )
    }
  )), a = /* @__PURE__ */ c.createElement(
    jt,
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
      label: v(t, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ c.createElement(
        $,
        {
          label: v(t, "status"),
          value: e.status || "unknown",
          danger: e.status === "error"
        }
      ), /* @__PURE__ */ c.createElement($, { label: "Query", value: is(e.query) }), /* @__PURE__ */ c.createElement(
        $,
        {
          label: v(t, "model"),
          value: e.models.join(", ") || "-"
        }
      ), /* @__PURE__ */ c.createElement($, { label: "Tool calls", value: String(e.toolCalls) }), e.errors.length > 0 ? /* @__PURE__ */ c.createElement(
        $,
        {
          label: "Error",
          value: e.errors.join("; ").slice(0, 120),
          danger: !0
        }
      ) : null, e.resultIndex !== void 0 && l ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
        "a",
        {
          style: { fontSize: 12 },
          onClick: () => l(e.resultIndex)
        },
        "Result: Assistant Message →"
      )) : null, e.options ? /* @__PURE__ */ c.createElement(dt, { label: "Options", onOpen: () => s("options") }, /* @__PURE__ */ c.createElement(de, { value: e.options, json: !0 })) : null, /* @__PURE__ */ c.createElement(dt, { label: "Usage", onOpen: () => s("usage") }, a), /* @__PURE__ */ c.createElement(dt, { label: "Timing", onOpen: () => s("timing") }, r))
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(V, { strong: !0, style: { fontSize: 12 } }, v(t, "thisRequest")), a, e.sessionTotals ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
        V,
        {
          strong: !0,
          style: { fontSize: 12, display: "block", marginTop: 10 }
        },
        v(t, "sessionTotal")
      ), /* @__PURE__ */ c.createElement(
        jt,
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
        children: /* @__PURE__ */ c.createElement(de, { value: e.options, json: !0 })
      }
    ] : []
  ];
  return /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ c.createElement(
    Ct,
    {
      size: "small",
      activeKey: n,
      onChange: (d) => s(d),
      items: i,
      tabBarStyle: { marginBottom: 8 }
    }
  ));
}
function is(e, l = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function as({
  oldText: e,
  newText: l
}) {
  const t = c.useMemo(
    () => Kn(e, l),
    [e, l]
  ), n = c.useMemo(() => Xn(t), [t]), s = c.useMemo(() => Vn(t), [t]), r = ne();
  return e === void 0 ? /* @__PURE__ */ c.createElement(V, { type: "secondary", style: { fontSize: 12 } }, v(r, "noPrevPrompt")) : /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ c.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ c.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ c.createElement(
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
    s.map((a, i) => {
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
function cs({ record: e }) {
  var r;
  const l = ne(), t = e.headerTools ?? [], n = e.headerReason === "changed", s = [
    {
      key: "summary",
      label: v(l, "summary"),
      children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "#", value: String(e.index) }), /* @__PURE__ */ c.createElement(
        $,
        {
          label: v(l, "status"),
          value: n ? v(l, "promptChanged") : v(l, "promptInitial")
        }
      ), /* @__PURE__ */ c.createElement($, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ c.createElement($, { label: "Chars", value: String(((r = e.prompt) == null ? void 0 : r.length) ?? 0) }), /* @__PURE__ */ c.createElement($, { label: "Tools", value: String(t.length) }))
    },
    ...n ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ c.createElement(
          as,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: v(l, "prompt"),
      children: /* @__PURE__ */ c.createElement(de, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ c.createElement("div", { style: { paddingTop: 4 } }, t.map((a) => /* @__PURE__ */ c.createElement(V, { key: a, code: !0, style: { fontSize: 11 } }, a)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ c.createElement(
          Zn,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((a, i) => {
              var y;
              const d = typeof a.name == "string" && a.name || typeof ((y = a.function) == null ? void 0 : y.name) == "string" && a.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ c.createElement(V, { code: !0, style: { fontSize: 11 } }, d),
                children: /* @__PURE__ */ c.createElement(de, { value: a })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ c.createElement(de, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ c.createElement(Ct, { size: "small", items: s, tabBarStyle: { marginBottom: 8 } });
}
function ht({ dragRef: e, width: l }) {
  return /* @__PURE__ */ c.createElement(
    "div",
    {
      onPointerDown: (t) => {
        e.current = {
          anchorX: t.clientX,
          anchorWidth: l
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
    bn,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ c.createElement(ts, null),
      onClick: e
    }
  )) : null;
}
function us({
  record: e,
  request: l,
  onJumpSession: t,
  onJumpRecord: n,
  onSelectTurn: s,
  onClose: r,
  fillContainer: a = !1
}) {
  const i = ne(), [d, y] = xn(400), p = a ? "100%" : d, m = qn(null);
  if (Qn(() => {
    const I = (u) => {
      const h = m.current;
      if (h === null) return;
      const f = h.anchorX - u.clientX;
      y(
        Math.min(ss, Math.max(ns, h.anchorWidth + f))
      );
    }, w = () => {
      m.current = null;
    };
    return window.addEventListener("pointermove", I), window.addEventListener("pointerup", w), () => {
      window.removeEventListener("pointermove", I), window.removeEventListener("pointerup", w);
    };
  }, []), e === null && l === null)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: p,
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
          description: v(i, "selectRecord")
        }
      )
    );
  if (e === null && l !== null)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: p,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      a ? null : /* @__PURE__ */ c.createElement(ht, { dragRef: m, width: d }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: r }), /* @__PURE__ */ c.createElement(rs, { request: l, onJumpRecord: n }))
    );
  const o = e;
  if (o.kind === "system" && o.prompt !== void 0)
    return /* @__PURE__ */ c.createElement(
      "aside",
      {
        style: {
          flexShrink: 0,
          width: p,
          borderLeft: "1px solid rgba(128,128,128,0.18)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative"
        }
      },
      a ? null : /* @__PURE__ */ c.createElement(ht, { dragRef: m, width: d }),
      /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: r }), /* @__PURE__ */ c.createElement(cs, { record: o }))
    );
  const x = o.usage, k = o.timing, T = [];
  return T.push({
    key: "summary",
    label: v(i, "summary"),
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "#", value: String(o.index) }), /* @__PURE__ */ c.createElement($, { label: "Kind", value: Sn(o, i) }), o.runIndex > 0 && s ? /* @__PURE__ */ c.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ c.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => s(o.runIndex)
      },
      "Request #",
      o.runIndex,
      " →"
    )) : null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: v(i, "status"),
        value: o.running ? v(i, "running") : o.isError ? v(i, "error") : v(i, "success"),
        danger: o.isError
      }
    ), o.provider ? /* @__PURE__ */ c.createElement($, { label: "Provider", value: o.provider }) : null, o.model ? /* @__PURE__ */ c.createElement($, { label: v(i, "model"), value: o.model }) : null, o.toolName ? /* @__PURE__ */ c.createElement($, { label: "Tool", value: o.toolName }) : null, o.kind === "user" && (o.channel || o.userId) ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: v(i, "source"),
        value: [o.channel, o.userId].filter(Boolean).join(" · ")
      }
    ) : null, o.receipt ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: v(i, "channel"),
        value: o.receipt.channel ?? "-"
      }
    ) : null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: v(i, "duration"),
        value: re(o.timeSeconds)
      }
    ), o.note ? /* @__PURE__ */ c.createElement(V, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.spawnSession ? /* @__PURE__ */ c.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ c.createElement(
      $,
      {
        label: v(i, "spawnedAgent"),
        value: o.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ c.createElement(
      bn,
      {
        size: "small",
        onClick: () => o.spawnSession && t(o.spawnSession),
        style: { marginTop: 4 }
      },
      v(i, "openChildSession")
    ) : null) : null)
  }), o.kind === "tool" ? (o.toolInput && T.push({
    key: "payload",
    label: v(i, "input"),
    children: /* @__PURE__ */ c.createElement(de, { value: o.toolInput, json: !0 })
  }), (o.toolOutput || o.toolError) && T.push({
    key: "result",
    label: v(i, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolError ? /* @__PURE__ */ c.createElement(V, { type: "danger", style: { fontSize: 12 } }, o.toolError) : null, o.toolOutput ? /* @__PURE__ */ c.createElement(de, { value: o.toolOutput }) : null)
  })) : (o.outputText || o.thinkingText || o.messages || o.marker || o.toolCalls && o.toolCalls.length > 0) && T.push({
    key: "raw",
    label: v(i, "output"),
    children: /* @__PURE__ */ c.createElement("div", { style: { display: "grid", gap: 8 } }, o.inboundParts && o.inboundParts.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(V, { type: "secondary", style: { fontSize: 12 } }, `${v(i, "inboundParts")} (${o.inboundParts.length})`), o.inboundParts.map((I, w) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: w,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(V, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, I.type.replace("Content", "")),
      /* @__PURE__ */ c.createElement(
        V,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        I.text ?? "-"
      )
    ))) : null, o.marker ? /* @__PURE__ */ c.createElement(de, { value: o.marker }) : null, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(V, { type: "secondary", style: { fontSize: 12 } }, `${v(i, "toolCall")} (${o.toolCalls.length})`), o.toolCalls.map((I, w) => /* @__PURE__ */ c.createElement("div", { key: I.id || w, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ c.createElement(V, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", I.name), /* @__PURE__ */ c.createElement(V, { type: "secondary", style: { fontSize: 11 } }, I.id)))) : null, o.note ? /* @__PURE__ */ c.createElement(V, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.messages && o.messages.length > 0 ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(V, { type: "secondary", style: { fontSize: 12 } }, `${v(i, "query")} (${o.messages.length})`), o.messages.map((I, w) => /* @__PURE__ */ c.createElement(
      "div",
      {
        key: w,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ c.createElement(V, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, I.role),
      /* @__PURE__ */ c.createElement(
        V,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        I.text
      )
    ))) : null, o.thinkingText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(V, { type: "secondary", style: { fontSize: 12 } }, v(i, "thinking")), /* @__PURE__ */ c.createElement(de, { value: o.thinkingText })) : null, o.outputText ? /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(V, { type: "secondary", style: { fontSize: 12 } }, v(i, "output")), /* @__PURE__ */ c.createElement(de, { value: o.outputText })) : null)
  }), (o.startedAt !== null || x || k) && T.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Started", value: Pe(o.startedAt) }), /* @__PURE__ */ c.createElement($, { label: "Total", value: re(o.timeSeconds) }), k ? /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
      $,
      {
        label: "TTFT",
        value: re(k.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Decoding",
        value: re(k.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ c.createElement(
      $,
      {
        label: v(i, "throughput"),
        value: Mt(
          x == null ? void 0 : x.output_tokens,
          k.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ c.createElement(V, { type: "secondary", style: { fontSize: 12 } }, v(i, "noTiming")))
  }), x && T.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement($, { label: "Input", value: te(x.input_tokens) }), /* @__PURE__ */ c.createElement($, { label: "Output", value: te(x.output_tokens) }), x.cache_creation_input_tokens ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Cache write",
        value: te(x.cache_creation_input_tokens)
      }
    ) : null, x.cache_input_tokens ? /* @__PURE__ */ c.createElement(
      $,
      {
        label: "Cache read",
        value: te(x.cache_input_tokens)
      }
    ) : null, x.total_tokens !== void 0 ? /* @__PURE__ */ c.createElement($, { label: "Total", value: te(x.total_tokens) }) : null, x.time !== void 0 ? /* @__PURE__ */ c.createElement($, { label: "API time", value: re(x.time) }) : null)
  }), T.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ c.createElement(de, { value: o.raw })
  }), /* @__PURE__ */ c.createElement(
    "aside",
    {
      style: {
        flexShrink: 0,
        width: p,
        borderLeft: "1px solid rgba(128,128,128,0.18)",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        position: "relative"
      }
    },
    a ? null : /* @__PURE__ */ c.createElement(ht, { dragRef: m, width: d }),
    /* @__PURE__ */ c.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ c.createElement(mt, { onClose: r }), /* @__PURE__ */ c.createElement(Ct, { size: "small", items: T, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Z = window.QwenPaw.host.React, ds = Z.useRef, hs = Z.useState;
Z.useCallback;
Z.useMemo;
const ms = Z.useEffect, fs = Z.useLayoutEffect, ps = Z.useReducer;
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
function gs(e) {
  return e ? e() : void 0;
}
function ys(e, l, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(s, r, a) {
      if (typeof r == "string") {
        const i = r.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const d = +r;
          if (Number.isInteger(d) && d >= 0 && d < e) {
            let y = s[d];
            if (!y) {
              const p = l[d * 2];
              y = s[d] = {
                index: d,
                key: t(d),
                start: p,
                size: l[d * 2 + 1],
                end: p + l[d * 2 + 1],
                lane: 0
              };
            }
            return y;
          }
        }
        if (r === "length") return e;
      }
      return Reflect.get(s, r, a);
    }
  });
}
function _e(e, l, t) {
  let n = t.initialDeps ?? [], s, r = !0;
  function a() {
    var i;
    const d = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let y = 0;
    d && (y = Date.now());
    const p = e();
    if (!(p.length !== n.length || p.some((x, k) => n[k] !== x)))
      return s;
    n = p;
    let o = 0;
    if (d && (o = Date.now()), s = l(...p), d) {
      const x = Math.round((Date.now() - y) * 100) / 100, k = Math.round((Date.now() - o) * 100) / 100, T = k / 16, I = (w, u) => {
        for (w = String(w); w.length < u; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${I(k, 5)} /${I(x, 5)} ms`,
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
    return t != null && t.onChange && !(r && t.skipInitialOnChange) && t.onChange(s), r = !1, s;
  }
  return a.updateDeps = (i) => {
    n = i;
  }, a;
}
function Nt(e, l) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Es = (e, l) => Math.abs(e - l) < 1.01, vs = (e, l, t) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => l.apply(this, s), t);
  };
};
let $e;
const ft = () => {
  if ($e !== void 0) return $e;
  if (typeof navigator > "u") return $e = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return $e = !0;
  const e = navigator.maxTouchPoints;
  return $e = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, Ft = (e) => {
  const { offsetWidth: l, offsetHeight: t } = e;
  return { width: l, height: t };
}, Ss = (e) => e, xs = (e) => {
  const l = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - l + 1, s = new Array(n);
  for (let r = 0; r < n; r++)
    s[r] = l + r;
  return s;
}, bs = (e, l) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (a) => {
    const { width: i, height: d } = a;
    l({ width: Math.round(i), height: Math.round(d) });
  };
  if (s(Ft(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((a) => {
    const i = () => {
      const d = a[0];
      if (d != null && d.borderBoxSize) {
        const y = d.borderBoxSize[0];
        if (y) {
          s({ width: y.inlineSize, height: y.blockSize });
          return;
        }
      }
      s(Ft(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, et = {
  passive: !0
}, ws = typeof window > "u" ? !0 : "onscrollend" in window, ks = (e, l, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const r = e.options.useScrollendEvent && ws;
  let a = 0;
  const i = r ? null : vs(
    s,
    () => l(a, !1),
    e.options.isScrollingResetDelay
  ), d = (m) => () => {
    a = t(n), i == null || i(), l(a, m);
  }, y = d(!0), p = d(!1);
  return n.addEventListener("scroll", y, et), r && n.addEventListener("scrollend", p, et), () => {
    n.removeEventListener("scroll", y), r && n.removeEventListener("scrollend", p);
  };
}, Ts = (e, l) => ks(e, l, (t) => {
  const { horizontal: n, isRtl: s } = e.options;
  return n ? t.scrollLeft * (s && -1 || 1) : t.scrollTop;
}), _s = (e, l, t) => {
  if (t.options.useCachedMeasurements) {
    const n = t.indexFromElement(e), s = t.options.getItemKey(n);
    return t.itemSizeCache.get(s) ?? t.options.estimateSize(n);
  }
  if (l != null && l.borderBoxSize) {
    const n = l.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!l) {
    const n = t.indexFromElement(e), s = t.options.getItemKey(n), r = t.itemSizeCache.get(s);
    if (r !== void 0)
      return r;
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Is = (e, {
  adjustments: l = 0,
  behavior: t
}, n) => {
  var s, r;
  (r = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || r.call(s, {
    [n.options.horizontal ? "left" : "top"]: e + l,
    behavior: t
  });
}, Ms = Is;
class Cs {
  constructor(l) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, s;
      return ((s = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : s.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((r) => {
          const a = () => {
            const i = r.target, d = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [y, p] of this.elementsCache)
                if (p === i) {
                  this.elementsCache.delete(y);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(d) && this.resizeItem(
              d,
              this.options.measureElement(i, r, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = n()) == null || s.disconnect(), t = null;
        },
        observe: (s) => {
          var r;
          return (r = n()) == null ? void 0 : r.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var r;
          return (r = n()) == null ? void 0 : r.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var n, s;
      const r = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Ss,
        rangeExtractor: xs,
        onChange: () => {
        },
        measureElement: _s,
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
      for (const o in t) {
        const x = t[o];
        x !== void 0 && (r[o] = x);
      }
      const a = this.options;
      let i = null, d = null, y = !1;
      if (a !== void 0 && a.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const o = a.count, x = r.count, k = this.getMeasurements(), T = o > 0 ? ((n = k[0]) == null ? void 0 : n.key) ?? a.getItemKey(0) : null, I = o > 0 ? ((s = k[o - 1]) == null ? void 0 : s.key) ?? a.getItemKey(o - 1) : null;
        if (x !== o || o > 0 && x > 0 && (r.getItemKey(0) !== T || r.getItemKey(x - 1) !== I)) {
          y = !0;
          const h = o > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? k[0] : null;
          h && (i = [h.key, this.getScrollOffset() - h.start]);
          const f = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          f && x > o && this.isAtEnd(a.scrollEndThreshold) && (o === 0 || r.getItemKey(x - 1) !== I) && (d = f);
        }
      }
      this.options = r, y && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let p = !1, m = 0;
      if (i && this.scrollOffset !== null) {
        const [o, x] = i, k = this.getMeasurements(), { count: T, getItemKey: I } = this.options;
        let w = 0;
        for (; w < T && I(w) !== o; )
          w++;
        if (w < T) {
          const u = k[w];
          if (u) {
            const h = Math.max(0, u.start + x);
            h !== this.scrollOffset && (m = h - this.scrollOffset, this.scrollOffset = h, p = !0);
          }
        }
      }
      (p || d) && (this.pendingScrollAnchor = [
        p ? i[0] : null,
        p ? i[1] : 0,
        d,
        m
      ]);
    }, this.notify = (t) => {
      var n, s;
      (s = (n = this.options).onChange) == null || s.call(n, this, t);
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
        if (this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((r) => {
          this.observer.observe(r);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (r) => {
            this.scrollRect = r, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (r, a) => {
            if (a && this._intendedScrollOffset === null && r === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(r - this._intendedScrollOffset) < 1.5 && (r = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const i = this.getScrollOffset();
            this.scrollDirection = a ? i === r ? this.scrollDirection : i < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = a, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const r = this.scrollElement, a = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, i = () => {
            this._iosTouching = !1, !(!ft() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            a,
            et
          ), r.addEventListener(
            "touchend",
            i,
            et
          ), this.unsubs.push(() => {
            r.removeEventListener("touchstart", a), r.removeEventListener("touchend", i), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const s = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, s && this.scrollElement && this.options.enabled) {
        const [r, a, i, d] = s;
        r !== null && !i && (ft() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? d !== 0 && (this._iosDeferredAdjustment += d) : this._scrollToOffset(this.getScrollOffset(), {
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
      const s = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, {
        adjustments: this.scrollAdjustments += s,
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
      (t, n, s, r, a, i, d, y) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: a,
        lanes: i,
        laneAssignmentMode: d,
        gap: y
      }),
      {
        key: !1
      }
    ), this.getMeasurements = _e(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: a,
        lanes: i,
        laneAssignmentMode: d,
        gap: y
      }, p) => {
        const m = this.itemSizeCache;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const w of this.laneAssignments.keys())
            w >= t && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const o = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const w = t * 2;
          let u = this._flatMeasurements;
          if (!u || u.length < w) {
            const g = new Float64Array(w);
            u && o > 0 && g.set(u.subarray(0, o * 2)), u = g, this._flatMeasurements = u;
          }
          let h;
          if (o === 0)
            h = n + s;
          else {
            const g = o - 1;
            h = u[g * 2] + u[g * 2 + 1] + y;
          }
          for (let g = o; g < t; g++) {
            const z = r(g), S = m.get(z), D = typeof S == "number" ? S : this.options.estimateSize(g);
            u[g * 2] = h, u[g * 2 + 1] = D, h += D + y;
          }
          const f = ys(t, u, r);
          return this.measurementsCache = f, f;
        }
        const x = this.measurementsCache.slice(0, o), k = new Array(i).fill(
          void 0
        ), T = new Float64Array(i);
        let I = 0;
        for (let w = 0; w < o; w++) {
          const u = x[w];
          u && (k[u.lane] === void 0 && I++, k[u.lane] = w, T[u.lane] = u.end);
        }
        for (let w = o; w < t; w++) {
          const u = r(w), h = this.laneAssignments.get(w);
          let f, g;
          const z = d === "estimate" || m.has(u);
          if (h !== void 0 && this.options.lanes > 1) {
            f = h;
            const M = k[f], N = M !== void 0 ? x[M] : void 0;
            g = N ? N.end + y : n + s;
          } else if (I === i) {
            let M = 0, N = T[0], ie = k[0];
            for (let X = 1; X < i; X++) {
              const W = T[X];
              (W < N || W === N && k[X] < ie) && (M = X, N = W, ie = k[X]);
            }
            f = M, g = N + y, z && this.laneAssignments.set(w, f);
          } else
            f = w % this.options.lanes, g = n + s, z && this.laneAssignments.set(w, f);
          const S = m.get(u), D = typeof S == "number" ? S : this.options.estimateSize(w), O = g + D;
          x[w] = {
            index: w,
            start: g,
            size: D,
            end: O,
            key: u,
            lane: f
          }, k[f] === void 0 && I++, k[f] = w, T[f] = O;
        }
        return this.measurementsCache = x, x;
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
      (t, n, s, r) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = Os(
        t,
        n,
        s,
        r,
        // Pass the typed array so binary search + forward-walk can read
        // start/end directly from Float64Array, skipping the Proxy traps.
        r === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
      ), this.range),
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = _e(
      () => {
        let t = null, n = null;
        const s = this.calculateRange();
        return s && (t = s.startIndex, n = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, s, r, a) => r === null || a === null ? [] : t({
        startIndex: r,
        endIndex: a,
        overscan: n,
        count: s
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, s = t.getAttribute(n);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var n;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const s = this.scrollState.index ?? ((n = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : n.index);
      if (s !== void 0 && this.range) {
        const r = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), a = Math.max(0, s - r), i = Math.min(
          this.options.count - 1,
          s + r
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
      const n = this.indexFromElement(t), s = this.options.getItemKey(n), r = this.elementsCache.get(s);
      r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.elementsCache.set(s, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var s, r;
      if (t < 0 || t >= this.options.count) return;
      let a, i, d;
      const y = this._flatMeasurements;
      if (this.options.lanes === 1 && y !== null)
        d = this.options.getItemKey(t), i = y[t * 2], a = y[t * 2 + 1];
      else {
        const o = this.measurementsCache[t];
        if (!o) return;
        d = o.key, i = o.start, a = o.size;
      }
      const p = this.itemSizeCache.get(d) ?? a, m = n - p;
      if (m !== 0) {
        const o = this.options.anchorTo === "end" && ((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, x = o ? this.getTotalSize() : 0, k = this.getScrollOffset() + this.scrollAdjustments, I = !this.itemSizeCache.has(d) ? (
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
          i + p <= k && this.scrollDirection !== "backward"
        ), w = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
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
          m,
          this
        ) : I);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(d, n), this.itemSizeCacheVersion++;
        let u = !1;
        o ? u = this.applyScrollAdjustment(
          this.getTotalSize() - x
        ) : w && (u = this.applyScrollAdjustment(m)), this.notify(u);
      }
    }, this.getVirtualItems = _e(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let r = 0, a = t.length; r < a; r++) {
          const i = t[r], d = n[i];
          s.push(d);
        }
        return s;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length === 0)
        return;
      const s = this._flatMeasurements, r = this.options.lanes === 1 && s != null, a = wn(
        0,
        n.length - 1,
        r ? (i) => s[i * 2] : (i) => Nt(n[i]).start,
        t
      );
      return Nt(n[a]);
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
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (t = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= t, this.getOffsetForAlignment = (t, n, s = 0) => {
      if (!this.scrollElement) return 0;
      const r = this.getSize(), a = this.getScrollOffset();
      n === "auto" && (n = t >= a + r ? "end" : "start"), n === "center" ? t += (s - r) / 2 : n === "end" && (t -= r);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.getSize(), r = this.getScrollOffset(), a = this.measurementsCache[t];
      if (!a) return;
      if (n === "auto")
        if (a.end >= r + s - this.options.scrollPaddingEnd)
          n = "end";
        else if (a.start <= r + this.options.scrollPaddingStart)
          n = "start";
        else
          return [r, n];
      if (n === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const i = n === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, n, a.size),
        n
      ];
    }, this.scrollToOffset = (t, { align: n = "start", behavior: s = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const r = this.getOffsetForAlignment(t, n), a = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: s,
        startedAt: a,
        lastTargetOffset: r,
        stableFrames: 0
      }, this._scrollToOffset(r, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: n = "auto",
      behavior: s = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, t = Math.max(0, Math.min(t, this.options.count - 1));
      const r = this.getOffsetForIndex(t, n);
      if (!r)
        return;
      const [a, i] = r, d = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: s,
        startedAt: d,
        lastTargetOffset: a,
        stableFrames: 0
      }, this._scrollToOffset(a, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: n = "auto" } = {}) => {
      const s = this.getScrollOffset() + t, r = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: n,
        startedAt: r,
        lastTargetOffset: s,
        stableFrames: 0
      }, this._scrollToOffset(s, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
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
      let s;
      if (n.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const r = n.length - 1, a = this._flatMeasurements;
        a != null ? s = a[r * 2] + a[r * 2 + 1] : s = ((t = n[r]) == null ? void 0 : t.end) ?? 0;
      } else {
        const r = Array(this.options.lanes).fill(null);
        let a = n.length - 1;
        for (; a >= 0 && r.some((i) => i === null); ) {
          const i = n[a];
          r[i.lane] === null && (r[i.lane] = i.end), a--;
        }
        s = Math.max(...r.filter((i) => i !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const t = [];
      if (this.itemSizeCache.size === 0) return t;
      const n = this.getMeasurements();
      for (const s of n)
        s && this.itemSizeCache.has(s.key) && t.push({
          index: s.index,
          key: s.key,
          start: s.start,
          size: s.size,
          end: s.end,
          lane: s.lane
        });
      return t;
    }, this._scrollToOffset = (t, {
      adjustments: n,
      behavior: s
    }) => {
      this._intendedScrollOffset = t + (n ?? 0), this.options.scrollToFn(t, { behavior: s, adjustments: n }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(l);
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(l, t) {
    return l === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", l), ft() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += l, !1) : (this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += l,
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, s = n ? n[0] : this.scrollState.lastTargetOffset, r = 1, a = s !== this.scrollState.lastTargetOffset;
    if (!a && Es(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== s && this._scrollToOffset(s, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, a) {
      const i = this.getSize() || 600, d = Math.abs(s - this.getScrollOffset()), y = this.scrollState.behavior === "smooth" && d > i;
      this.scrollState.lastTargetOffset = s, y || (this.scrollState.behavior = "auto"), this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: y ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const wn = (e, l, t, n) => {
  for (; e <= l; ) {
    const s = (e + l) / 2 | 0, r = t(s);
    if (r < n)
      e = s + 1;
    else if (r > n)
      l = s - 1;
    else
      return s;
  }
  return e > 0 ? e - 1 : 0;
};
function zs(e, l, t) {
  let n = 0;
  for (; n <= l; ) {
    const s = (n + l) / 2 | 0, r = e[s * 2];
    if (r < t)
      n = s + 1;
    else if (r > t)
      l = s - 1;
    else
      return s;
  }
  return n > 0 ? n - 1 : 0;
}
function Os(e, l, t, n, s) {
  const r = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: r };
  if (n === 1 && s !== null) {
    const y = zs(
      s,
      r,
      t
    );
    let p = y;
    const m = t + l;
    for (; p < r && s[p * 2] + s[p * 2 + 1] < m; )
      p++;
    return { startIndex: y, endIndex: p };
  }
  let i = wn(0, r, (y) => e[y].start, t), d = i;
  if (n === 1)
    for (; d < r && e[d].end < t + l; )
      d++;
  else if (n > 1) {
    const y = Array(n).fill(0);
    for (; d < r && y.some((m) => m < t + l); ) {
      const m = e[d];
      y[m.lane] = m.end, d++;
    }
    const p = Array(n).fill(t + l);
    for (; i >= 0 && p.some((m) => m >= t); ) {
      const m = e[i];
      p[m.lane] = m.start, i--;
    }
    i = Math.max(0, i - i % n), d = Math.min(r, d + (n - 1 - d % n));
  }
  return { startIndex: i, endIndex: d };
}
const pt = typeof document < "u" ? fs : ms;
function As({
  useFlushSync: e = !0,
  directDomUpdates: l = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const s = ps((p) => p + 1, 0)[1], r = ds({
    enabled: l,
    mode: t,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  r.current.enabled = l, r.current.mode = t;
  const a = (p) => {
    const m = r.current;
    if (!m.enabled || !m.container) return;
    const o = p.getTotalSize();
    if (o !== m.lastSize) {
      m.lastSize = o;
      const x = p.options.horizontal ? "width" : "height";
      m.container.style[x] = `${o}px`;
    }
  }, i = (p) => {
    const m = r.current;
    if (!m.enabled || !m.container) return;
    a(p);
    const o = !!p.options.horizontal, x = m.mode === "transform", k = o ? "left" : "top", T = p.options.scrollMargin, I = p.getVirtualItems();
    for (const w of I) {
      const u = w.start - T, h = p.elementsCache.get(w.key);
      h && m.lastPositions.get(h) !== u && (m.lastPositions.set(h, u), x ? h.style.transform = o ? `translate3d(${u}px, 0, 0)` : `translate3d(0, ${u}px, 0)` : h.style[k] = `${u}px`);
    }
  }, d = {
    ...n,
    onChange: (p, m) => {
      var o;
      const x = r.current;
      let k = !0;
      if (x.enabled) {
        i(p);
        const T = p.range, I = x.prevRange;
        k = !I || I.isScrolling !== p.isScrolling || I.startIndex !== (T == null ? void 0 : T.startIndex) || I.endIndex !== (T == null ? void 0 : T.endIndex), k && (x.prevRange = T ? {
          startIndex: T.startIndex,
          endIndex: T.endIndex,
          isScrolling: p.isScrolling
        } : null);
      }
      k && (e && m ? gs(s) : s()), (o = n.onChange) == null || o.call(n, p, m);
    }
  }, [y] = hs(() => {
    const p = new Cs(d);
    return Object.assign(p, {
      containerRef: (m) => {
        const o = r.current;
        if (o.container = m, o.lastSize = null, m && o.enabled) {
          const x = p.getTotalSize();
          o.lastSize = x;
          const k = p.options.horizontal ? "width" : "height";
          m.style[k] = `${x}px`;
        }
      }
    });
  });
  return y.setOptions(d), pt(() => y._didMount(), []), pt(() => (a(y), y._willUpdate())), pt(() => {
    i(y);
  }), y;
}
function $s(e) {
  return As({
    observeElementRect: bs,
    observeElementOffset: Ts,
    scrollToFn: Ms,
    ...e
  });
}
const lt = window.QwenPaw.host, C = lt.React, { useRef: Rs } = C, { Tag: kn } = lt.antd, { Text: ge } = lt.antd.Typography, {
  CaretRightOutlined: Ls,
  CloseCircleOutlined: Ds,
  FileTextOutlined: Ps,
  RobotOutlined: js,
  RocketOutlined: Ns,
  SafetyOutlined: Fs,
  SendOutlined: Bs,
  SettingOutlined: Hs,
  ToolOutlined: Ws,
  UserOutlined: Us
} = lt.antdIcons, Ks = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Vs = {
  user: /* @__PURE__ */ C.createElement(Us, null),
  message: /* @__PURE__ */ C.createElement(js, null),
  tool: /* @__PURE__ */ C.createElement(Ws, null),
  system: /* @__PURE__ */ C.createElement(Hs, null)
}, Bt = {
  approval: { color: "volcano", icon: /* @__PURE__ */ C.createElement(Fs, null) },
  receipt: { color: "cyan", icon: /* @__PURE__ */ C.createElement(Bs, null) },
  spawn: { color: "geekblue", icon: /* @__PURE__ */ C.createElement(Ns, null) },
  header: { color: "green", icon: /* @__PURE__ */ C.createElement(Ps, null) },
  error: { color: "red", icon: /* @__PURE__ */ C.createElement(Ds, null) }
}, Xs = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Ht = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, Gs = 150, kt = 26, Tn = 34, Wt = 9, Ut = 30;
function Js(e) {
  const l = ne(), t = Ht[e] ?? Ht.unknown;
  return l === "zh-CN" ? t.zh : t.en;
}
const Ys = {
  ImageContent: "image",
  FileContent: "file",
  AudioContent: "audio",
  VideoContent: "video"
};
function Qs(e, l) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.inboundParts ?? []) {
    const s = Ys[n.type];
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }
  return t.size === 0 ? null : [...t.entries()].map(([n, s]) => `${v(l, n)}×${s}`).join(" ");
}
function qs(e, l) {
  const t = e.receipt, n = t != null && t.channel ? ` · ${t.channel}` : "";
  return `📤 ${v(l, "replySent")}${n} · ${((t == null ? void 0 : t.chars) ?? 0).toLocaleString()} ${v(l, "chars")}`;
}
function Kt({
  record: e,
  selected: l,
  dimmed: t,
  multiRequest: n,
  onSelect: s
}) {
  var i, d;
  const r = e.usage, a = r && (r.input_tokens || r.output_tokens) ? `${te(r.input_tokens)}→${te(
    r.output_tokens
  )}` : null;
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      className: "at-ledger-row",
      "data-kind": e.kind,
      "data-error": e.isError || void 0,
      "data-running": e.running || void 0,
      "data-selected": l || void 0,
      "data-dimmed": t || void 0,
      onClick: s,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: kt,
        cursor: "pointer",
        background: l ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1
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
      n && /* @__PURE__ */ C.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ C.createElement(
      kn,
      {
        color: e.markerKind && ((i = Bt[e.markerKind]) == null ? void 0 : i.color) || Ks[e.kind] || "default",
        icon: e.markerKind && ((d = Bt[e.markerKind]) == null ? void 0 : d.icon) || Vs[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      Sn(e, ne())
    ),
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
      e.receipt ? /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 12 } }, qs(e, ne())) : e.kind === "tool" && e.toolName ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ge, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ C.createElement(
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
      ), e.kind === "user" ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 11 } }, ` ${Qs(e, ne()) ?? ""}`), e.channel && e.channel !== "console" ? /* @__PURE__ */ C.createElement(ge, { code: !0, style: { fontSize: 10 } }, ` @${e.channel}`) : null) : null)
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
      (e.kind === "message" || e.kind === "tool") && re(e.timeSeconds)
    )
  );
}
function Zs({
  turn: e,
  collapsed: l,
  selected: t,
  cellCount: n,
  onToggle: s,
  onSelect: r
}) {
  const a = ne();
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Tn }
    },
    /* @__PURE__ */ C.createElement(
      "span",
      {
        onClick: (i) => {
          i.stopPropagation(), r();
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
        Ls,
        {
          onClick: (i) => {
            i.stopPropagation(), s();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: l ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ C.createElement(ge, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 11 } }, re(e.durationMs / 1e3)),
      /* @__PURE__ */ C.createElement(ge, { type: "secondary", style: { fontSize: 11 } }, n, " ", v(a, "events")),
      /* @__PURE__ */ C.createElement(
        kn,
        {
          color: Xs[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        Js(e.status)
      )
    )
  );
}
function el({
  turns: e,
  selectedIndex: l,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: s,
  searchMatchIndexes: r,
  onSelectedIndexChange: a,
  onSelectedTurnChange: i,
  onToggleTurn: d,
  callsCollapsed: y,
  hasOlderRecords: p,
  loadingOlder: m,
  onLoadOlder: o,
  initialRecord: x,
  emptyText: k
}) {
  const T = ne(), I = Rs(null), w = e.filter((S) => S.turn !== null), u = w.length > 1, h = C.useMemo(() => {
    var D;
    const S = [];
    p && S.push({
      key: "load-older",
      height: Ut,
      type: "load-older"
    }), x && (S.push({
      key: "initial",
      height: kt,
      type: "initial",
      record: x
    }), S.push({
      key: "initial-divider",
      height: Wt,
      type: "divider"
    }));
    for (const O of w) {
      const M = O.turn;
      if (S.push({
        key: `turn-${M}`,
        height: Tn,
        type: "boundary",
        turn: O
      }), !n.has(M))
        for (const N of ((D = O.groups[0]) == null ? void 0 : D.cells) ?? [])
          y && N.kind === "tool" || S.push({
            key: `rec-${N.index}`,
            height: kt,
            type: "record",
            record: N
          });
    }
    return S;
  }, [
    w,
    n,
    y,
    p,
    x
  ]), f = C.useCallback(
    (S) => s !== null && !s.has(S.index) || r !== null && !r.has(S.index),
    [s, r]
  ), g = (S) => {
    var D;
    switch (S.type) {
      case "load-older":
        return /* @__PURE__ */ C.createElement("div", { style: { textAlign: "center", height: Ut } }, /* @__PURE__ */ C.createElement(
          "button",
          {
            type: "button",
            onClick: o,
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
          m ? "…" : `⋯ ${v(T, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ C.createElement(
          "div",
          {
            style: {
              height: Wt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const O = S.record;
        return /* @__PURE__ */ C.createElement(
          Kt,
          {
            record: O,
            selected: l === O.index,
            dimmed: f(O),
            multiRequest: u,
            onSelect: () => a(O.index)
          }
        );
      }
      case "boundary": {
        const O = S.turn, M = O.turn;
        return /* @__PURE__ */ C.createElement(
          Zs,
          {
            turn: O,
            collapsed: n.has(M),
            selected: t === M,
            cellCount: ((D = O.groups[0]) == null ? void 0 : D.cells.length) ?? 0,
            onToggle: () => d(M),
            onSelect: () => i(M)
          }
        );
      }
      case "record":
      default: {
        const O = S.record;
        return /* @__PURE__ */ C.createElement(
          Kt,
          {
            record: O,
            selected: l === O.index,
            dimmed: f(O),
            multiRequest: u,
            onSelect: () => a(O.index)
          }
        );
      }
    }
  };
  if (h.length === 0)
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
        k ?? v(T, "noSessions")
      )
    );
  const z = h.length <= Gs ? /* @__PURE__ */ C.createElement("div", null, h.map((S) => g(S))) : /* @__PURE__ */ C.createElement(
    tl,
    {
      rows: h,
      scrollRef: I,
      renderRow: g
    }
  );
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      ref: I,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    z
  );
}
function tl({
  rows: e,
  scrollRef: l,
  renderRow: t
}) {
  const n = $s({
    count: e.length,
    getScrollElement: () => l.current,
    estimateSize: (s) => e[s].height,
    overscan: 12
  });
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: {
        height: n.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    n.getVirtualItems().map((s) => /* @__PURE__ */ C.createElement(
      "div",
      {
        key: e[s.index].key,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: s.size,
          transform: `translateY(${s.start}px)`
        }
      },
      t(e[s.index])
    ))
  );
}
function gt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function ye(e, l = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function nl(e) {
  var w;
  const l = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = [];
  let i = "";
  const d = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
  let m = 0, o = 0;
  const x = (u) => u.groups[0].cells, k = (u, h) => {
    const f = r.get(u);
    f ? f.push(h) : r.set(u, [h]);
  }, T = (u, h) => {
    if (!u)
      if (i)
        u = i;
      else {
        a.push(h);
        return;
      }
    const f = t.get(u);
    if (f)
      h.runIndex = f.turn ?? 0, x(f).push(h);
    else if (i) {
      const g = t.get(i);
      g ? (h.runIndex = g.turn ?? 0, x(g).push(h)) : k(u, h);
    } else
      k(u, h);
  }, I = (u, h) => {
    const f = r.get(h);
    if (f) {
      for (const g of f) x(u).push(g);
      r.delete(h);
    }
  };
  for (const u of e) {
    const h = gt(u);
    switch (u.type) {
      case "run/start": {
        o += 1, d.set(
          u.run_id,
          typeof h.channel == "string" ? h.channel : ""
        );
        const f = {
          turn: o,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${o}`, cells: [] }]
        };
        t.set(u.run_id, f), l.push(f), i = u.run_id, I(f, u.run_id);
        for (const D of a.splice(0))
          D.runIndex = o, x(f).push(D);
        const g = Array.isArray(h.messages) ? h.messages : [], z = String(h.query ?? ""), S = {
          index: ++m,
          runIndex: o,
          runId: u.run_id,
          kind: "user",
          text: ye(z) || ye((w = g.at(-1)) == null ? void 0 : w.text),
          messages: g,
          timeSeconds: 0,
          startedAt: ce(u.t),
          isError: !1,
          running: !1,
          model: void 0
        };
        y.set(u.run_id, S), x(f).push(S);
        break;
      }
      case "run/end": {
        const f = t.get(u.run_id);
        i === u.run_id && (i = ""), d.delete(u.run_id), y.delete(u.run_id);
        const g = String(h.status ?? "unknown");
        if (f && (f.status = g, f.durationMs = typeof h.duration_ms == "number" ? h.duration_ms : null), g === "error" && h.error) {
          const z = f ?? {
            turn: null,
            status: g,
            durationMs: typeof h.duration_ms == "number" ? h.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          f || l.push(z), z.groups[0].cells.push({
            index: ++m,
            runIndex: o,
            runId: u.run_id,
            kind: "system",
            markerKind: "error",
            text: ye(String(h.error)) || "run failed",
            marker: String(h.error ?? "run failed"),
            timeSeconds: typeof h.duration_ms == "number" ? h.duration_ms / 1e3 : null,
            startedAt: ce(u.t),
            isError: !0,
            running: !1,
            raw: [u]
          });
        }
        break;
      }
      case "agent/spawn": {
        const f = typeof h.child_session_id == "string" ? h.child_session_id : void 0, g = typeof h.child_agent_id == "string" ? h.child_agent_id : "?";
        T(u.run_id, {
          index: ++m,
          runIndex: 0,
          runId: u.run_id,
          kind: "system",
          markerKind: "spawn",
          text: `${g} → ${f ?? "?"}`,
          timeSeconds: 0,
          startedAt: ce(u.t),
          isError: !1,
          running: !1,
          spawnSession: f,
          spawnAgent: g,
          raw: [u]
        });
        break;
      }
      case "message/inbound": {
        const f = Array.isArray(h.parts) ? h.parts : [], g = h.channel_meta && typeof h.channel_meta == "object" ? h.channel_meta : void 0, z = f.map((N) => ({
          type: String(N.type ?? "?"),
          text: typeof N.text == "string" ? N.text : void 0
        })), S = d.get(u.run_id) ?? "", D = g && typeof g.user_id == "string" && g.user_id ? g.user_id : void 0, O = ye(
          z.map((N) => N.text ?? "").filter(Boolean).join(`
`)
        ), M = y.get(u.run_id);
        M && !M.inboundParts ? (M.inboundParts = z, M.channel = S || void 0, M.userId = D, M.raw = [
          ...M.raw ?? [],
          u
        ], M.text || (M.text = O)) : T(u.run_id, {
          index: ++m,
          runIndex: 0,
          runId: u.run_id,
          kind: "user",
          text: O || "📥",
          timeSeconds: 0,
          startedAt: ce(u.t),
          isError: !1,
          running: !1,
          channel: S || void 0,
          userId: D,
          inboundParts: z,
          raw: [u]
        });
        break;
      }
      case "message/outbound": {
        const f = typeof h.text == "string" ? h.text : "";
        T(u.run_id, {
          index: ++m,
          runIndex: 0,
          runId: u.run_id,
          kind: "system",
          markerKind: "receipt",
          text: "📤",
          timeSeconds: 0,
          startedAt: ce(u.t),
          isError: !1,
          running: !1,
          outputText: f || void 0,
          receipt: {
            channel: d.get(u.run_id) || void 0,
            chars: f.length
          },
          raw: [u]
        });
        break;
      }
      case "approval/asked": {
        T(u.run_id, {
          index: ++m,
          runIndex: 0,
          runId: u.run_id,
          kind: "system",
          markerKind: "approval",
          text: String(h.tool_name ?? "?"),
          timeSeconds: 0,
          startedAt: ce(u.t),
          isError: !1,
          running: !1,
          raw: [u]
        });
        break;
      }
      case "approval/decided": {
        const f = String(h.decision ?? "?"), g = h.tool_name ? String(h.tool_name) : "";
        T(u.run_id, {
          index: ++m,
          runIndex: 0,
          runId: u.run_id,
          kind: "system",
          markerKind: "approval",
          text: g ? `${g} → ${f}` : f,
          timeSeconds: 0,
          startedAt: ce(u.t),
          isError: f === "denied",
          running: !1,
          raw: [u]
        });
        break;
      }
      case "llm/header": {
        const f = typeof h.sha256 == "string" ? h.sha256 : "", g = typeof h.prev_sha256 == "string" ? h.prev_sha256 : void 0, z = h.reason === "changed" ? "changed" : "initial", S = typeof h.system_prompt == "string" ? h.system_prompt : "", D = Array.isArray(h.tools) ? h.tools : [], O = Array.isArray(h.schemas) ? h.schemas : void 0;
        T(u.run_id, {
          index: ++m,
          runIndex: 0,
          runId: u.run_id,
          kind: "system",
          markerKind: "header",
          text: z === "initial" ? `⚙ ${S ? `System Prompt (${S.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ce(u.t),
          isError: !1,
          running: !1,
          prompt: S,
          prevPrompt: p.get(g ?? ""),
          headerTools: D,
          headerReason: z,
          sha: f,
          prevSha: g,
          schemas: O,
          raw: [u]
        }), f && p.set(f, S);
        break;
      }
      case "llm/call": {
        const f = gt(u), g = f.options && typeof f.options == "object" && Object.keys(f.options).length > 0 ? f.options : void 0, z = {
          index: ++m,
          runIndex: 0,
          runId: u.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ce(u.t),
          isError: !1,
          running: !0,
          model: String(f.model ?? "unknown"),
          provider: typeof f.provider == "string" && f.provider ? f.provider : void 0,
          options: g
        };
        T(u.run_id, z);
        const S = n.get(u.run_id) ?? [];
        S.push({ cell: z, callData: f, call: u }), n.set(u.run_id, S);
        break;
      }
      case "llm/result": {
        const f = n.get(u.run_id), g = f == null ? void 0 : f.shift(), z = (g == null ? void 0 : g.callData) ?? {}, S = typeof h.duration_ms == "number" ? h.duration_ms : null, D = h.usage ?? void 0, O = h.timing, M = Array.isArray(h.tool_calls) ? h.tool_calls : void 0, X = {
          text: (h.error ? ye(String(h.error)) : ye(String(h.text ?? ""))) || (M && M.length > 0 ? `🛠 ${M.map((W) => W.name).join(", ")}` : ""),
          timeSeconds: S === null ? null : S / 1e3,
          isError: !!h.error,
          running: !1,
          outputText: h.text ? String(h.text) : void 0,
          thinkingText: h.thinking ? String(h.thinking) : void 0,
          usage: D,
          timing: O,
          toolCalls: M,
          note: h.note ? String(h.note) : void 0
        };
        g ? (Object.assign(g.cell, X), g.cell.model = String(
          h.model ?? z.model ?? g.cell.model
        ), g.cell.raw = [
          ...g.call ? [g.call] : [],
          u
        ]) : T(u.run_id, {
          index: ++m,
          runIndex: 0,
          runId: u.run_id,
          kind: "message",
          startedAt: ce(u.t),
          model: String(h.model ?? z.model ?? "unknown"),
          ...X
        });
        break;
      }
      case "tool/call": {
        const f = gt(u), g = {
          index: ++m,
          runIndex: 0,
          runId: u.run_id,
          kind: "tool",
          text: `${String(f.name ?? "?")}(${ye(
            String(f.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: ce(u.t),
          isError: !1,
          running: !0,
          toolName: String(f.name ?? "?"),
          toolInput: f.input ? String(f.input) : void 0
        };
        T(u.run_id, g);
        const z = s.get(u.run_id) ?? [];
        z.push({ cell: g, callData: f, call: u }), s.set(u.run_id, z);
        break;
      }
      case "tool/result": {
        const f = s.get(u.run_id), g = typeof h.tool_call_id == "string" ? h.tool_call_id : null;
        let z;
        if (f) {
          const ie = g ? f.findIndex(
            (X) => X.callData.tool_call_id === g
          ) : -1;
          ie >= 0 ? z = f.splice(ie, 1)[0] : z = f.shift();
        }
        const S = typeof h.duration_ms == "number" ? h.duration_ms : null, D = h.ok !== !1 && !h.error, O = h.output ? String(h.output) : void 0, M = O ? ` → ${ye(O, 60)}` : "", N = {
          timeSeconds: S === null ? null : S / 1e3,
          isError: !D,
          running: !1,
          toolOutput: O,
          toolError: h.error ? String(h.error) : void 0,
          note: h.note ? String(h.note) : void 0
        };
        z ? (Object.assign(z.cell, N), z.cell.text = `${z.cell.text}${M}`, z.cell.raw = [
          ...z.call ? [z.call] : [],
          u
        ]) : T(u.run_id, {
          index: ++m,
          runIndex: 0,
          runId: u.run_id,
          kind: "tool",
          text: `?${M}`,
          startedAt: ce(u.t),
          ...N
        });
        break;
      }
    }
  }
  for (const [u, h] of r) {
    const f = t.get(u);
    if (f) {
      for (const g of h) x(f).push(g);
      r.delete(u);
    }
  }
  return l;
}
function Vt(e) {
  return e.flatMap((l) => l.groups.flatMap((t) => t.cells));
}
function sl(e) {
  var a;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const l = e[0], t = ((a = l.groups[0]) == null ? void 0 : a.cells) ?? [], n = t.findIndex(
    (i) => i.kind === "system" && i.headerReason === "initial" && i.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const s = t[n], r = {
    ...l,
    groups: [
      {
        ...l.groups[0],
        cells: t.filter((i, d) => d !== n)
      }
    ]
  };
  return { initial: s, turns: [r, ...e.slice(1)] };
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
}, Xt = "agent-trace-timeline-styles", ll = `
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
function ol() {
  if (yt || typeof document > "u") return;
  if (document.getElementById(Xt)) {
    yt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Xt, e.textContent = ll, document.head.appendChild(e), yt = !0;
}
function Et(e) {
  return Yn(e);
}
function _n(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Gt(e) {
  return e != null && Number.isFinite(e);
}
function rl(e) {
  if (!Gt(e.startedAt)) return null;
  const l = Gt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + l };
}
function In(e, l = "sequence") {
  if (l !== "sequence")
    return il(
      e,
      l === "duration" || l === "actual",
      l === "duration"
    );
  const t = [], n = [];
  for (const s of e) {
    const r = s.groups.flatMap((a) => a.cells);
    r.length !== 0 && (s.turn !== null && n.push({
      turn: s.turn,
      time: t.length
    }), t.push(
      ...r.map(
        (a, i) => ({
          start: t.length + i,
          end: t.length + i + 1,
          index: a.index,
          isError: a.isError === !0,
          kind: a.kind,
          label: a.text,
          lane: _n(a.kind)
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
function il(e, l, t) {
  const n = e.flatMap((p) => {
    const m = p.groups.flatMap(
      (o) => o.cells.flatMap((x) => {
        const k = rl(x);
        return k === null ? [] : [
          {
            ...k,
            index: x.index,
            isError: x.isError === !0,
            kind: x.kind,
            label: x.text,
            lane: _n(x.kind)
          }
        ];
      })
    );
    return m.length === 0 ? [] : [{ turn: p.turn, rawSpans: m }];
  }), s = n.flatMap((p) => p.rawSpans);
  if (s.length === 0) return null;
  const r = /* @__PURE__ */ new Map();
  let a = 0, i = null;
  for (const p of [...s].sort(
    (m, o) => m.start - o.start || m.end - o.end
  ))
    t && i !== null && p.start > i && (a += p.start - i), r.set(p, a), i = i === null ? p.end : Math.max(i, p.end);
  const d = [], y = [];
  for (const p of n) {
    const m = p.rawSpans.map((o) => {
      const x = r.get(o) ?? 0;
      return {
        ...o,
        start: o.start - x,
        end: (l ? o.end : o.start) - x
      };
    });
    d.push(...m), p.turn !== null && y.push({
      turn: p.turn,
      time: Math.min(...m.map((o) => o.start))
    });
  }
  return {
    start: Math.min(...d.map((p) => p.start)),
    end: Math.max(...d.map((p) => p.end)),
    spans: d,
    turnBoundaries: y
  };
}
function al(e, l, t = "sequence") {
  const n = In(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((s) => s.start <= l.end && s.end >= l.start).map((s) => s.index)
  );
}
ol();
const tt = window.QwenPaw.host, B = tt.React, { useEffect: Ge, useMemo: Jt, useRef: Je, useState: Ie } = B, { Tooltip: cl } = tt.antd, vt = 3, ul = 4, dl = 0.08, hl = 0.025, ml = 32, fl = 0.5;
function pl(e) {
  const l = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, s = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, r = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...l === void 0 ? {} : { durationMs: l },
    ...t === void 0 ? {} : { startedAt: t },
    ...s === void 0 || r === void 0 ? {} : { ttftMs: s, decodingMs: r }
  };
}
function gl(e) {
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
function yl(e, l) {
  const t = gl(e);
  if (l === void 0) return t;
  const n = l.durationMs === void 0 ? null : `Total ${Et(l.durationMs)}`, s = l.startedAt === void 0 ? null : l.durationMs === void 0 ? `Started ${Pe(l.startedAt)}` : `${Pe(l.startedAt)} → ${Pe(
    l.startedAt + l.durationMs
  )}`, r = l.ttftMs === void 0 || l.decodingMs === void 0 ? null : `TTFT ${Et(
    l.ttftMs
  )} · Decoding ${Et(l.decodingMs)}`, a = [n, r].filter((i) => i !== null).join(" · ");
  return [t, s, a].filter((i) => i !== null && i !== "").join(`
`);
}
function Tt(e, l) {
  return e <= l ? { start: e, end: l } : { start: l, end: e };
}
function St(e) {
  return Math.min(1, Math.max(0, e));
}
function El(e, l, t, n) {
  const s = Math.min(n - t, Math.max(0, l)), r = Math.min(
    Math.max(e - s / 2, t),
    n - s
  );
  return { start: r, end: r + s };
}
function Yt(e, l, t, n, s) {
  const r = Tt(
    Math.min(s, Math.max(n, e.start)),
    Math.min(s, Math.max(n, e.end))
  );
  return {
    start: (r.start - l) / t,
    end: (r.end - l) / t
  };
}
function Mn({
  label: e,
  placement: l,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ B.createElement(
    cl,
    {
      title: /* @__PURE__ */ B.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: l,
      mouseEnterDelay: fl,
      ...n
    },
    t
  );
}
function Qt() {
  return /* @__PURE__ */ B.createElement("div", { className: ee.labels, "aria-hidden": "true" }, /* @__PURE__ */ B.createElement("span", null, "Input"), /* @__PURE__ */ B.createElement("span", null, "Model"), /* @__PURE__ */ B.createElement("span", null, "Tools"));
}
function qt({
  loading: e,
  onHover: l,
  onLoad: t
}) {
  return /* @__PURE__ */ B.createElement(
    Mn,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ B.createElement(
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
          n.stopPropagation(), l();
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
const vl = B.memo(function({
  turns: l,
  mode: t,
  range: n,
  hasEarlierRecords: s = !1,
  onLoadEarlier: r,
  selectedIndex: a = null,
  searchMatchIndexes: i = null,
  onRangeChange: d,
  onRecordSelect: y,
  onRecordFocus: p
}) {
  const m = typeof tt.useTheme == "function" ? tt.useTheme() : void 0, o = Jt(
    () => In(l, t),
    [t, l]
  ), x = Jt(
    () => new Map(
      l.flatMap(
        (E) => E.groups.flatMap(
          (R) => R.cells.map(
            (F) => [F.index, pl(F)]
          )
        )
      )
    ),
    [l]
  ), k = Je(null), T = Je(null), I = Je(null), w = Je(null), [u, h] = Ie(null), [f, g] = Ie(null), [z, S] = Ie(!1), [D, O] = Ie(!1), [M, N] = Ie(null), [ie, X] = Ie(!1);
  Ge(() => {
    o !== null && n !== null && (n.end < o.start || n.start > o.end) && d(null);
  }, [o, d, n]), Ge(() => {
    o !== null && (X(!1), N(
      (E) => E !== null && (E.end < o.start || E.start > o.end) ? null : E
    ));
  }, [o]), Ge(() => {
    if (o === null || a === null) return;
    const E = o.spans.find(
      (R) => R.index === a
    );
    E !== void 0 && (X(!0), N((R) => {
      if (R === null || E.end > R.start && E.start < R.end)
        return R;
      const F = Math.max(1, R.end - R.start), H = E.end <= R.start ? E.start : E.end - F, b = Math.min(
        Math.max(H, o.start),
        Math.max(o.start, o.end - F)
      );
      return b === R.start ? R : { start: b, end: b + F };
    }));
  }, [o, a]);
  const W = Math.max(1, ((o == null ? void 0 : o.end) ?? 0) - ((o == null ? void 0 : o.start) ?? 0)), xe = Math.min(
    W,
    Math.max(1, ((M == null ? void 0 : M.end) ?? 0) - ((M == null ? void 0 : M.start) ?? 0))
  ), Y = o === null || M === null ? (o == null ? void 0 : o.start) ?? 0 : Math.min(
    Math.max(M.start, o.start),
    o.end - xe
  ), K = M === null ? W : xe, Q = M === null ? (o == null ? void 0 : o.start) ?? 0 : Y, Ne = s && o !== null && Q === o.start, be = r === void 0 || z ? void 0 : () => {
    S(!0), r().finally(() => {
      S(!1);
    });
  }, he = o === null ? void 0 : {
    "--trajectory-domain-left": `${-(Q - o.start) / K * 100}%`,
    "--trajectory-domain-width": `${W / K * 100}%`
  }, ze = o === null || n === null ? null : Yt(
    n,
    Q,
    K,
    o.start,
    o.end
  ), ae = (o === null || u === null ? null : Yt(
    u,
    Q,
    K,
    o.start,
    o.end
  )) ?? ze, G = u ?? n;
  if (Ge(() => {
    const E = I.current;
    if (E === null) return;
    const R = (F) => {
      F.preventDefault();
      const H = w.current;
      if (H === null || o === null) return;
      X(!1);
      const b = H.getBoundingClientRect(), _ = St(
        (F.clientX - b.left) / Math.max(1, b.width)
      ), P = Math.min(
        W,
        Math.max(
          Math.min(
            t === "sequence" ? ul : 20,
            W
          ),
          K * Math.exp(F.deltaY * 15e-4)
        )
      );
      if (P >= W * 0.999) {
        N(null);
        return;
      }
      const J = Q + _ * K, se = Math.min(
        Math.max(J - _ * P, o.start),
        o.end - P
      );
      N({ start: se, end: se + P });
    };
    return E.addEventListener("wheel", R, { passive: !1 }), () => {
      E.removeEventListener("wheel", R);
    };
  }, [K, Q, W, t, o]), o === null)
    return /* @__PURE__ */ B.createElement(
      "section",
      {
        ref: I,
        className: ee.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ B.createElement("div", { className: ee.plot }, /* @__PURE__ */ B.createElement(Qt, null), /* @__PURE__ */ B.createElement("div", { className: ee.track }, /* @__PURE__ */ B.createElement("span", { className: ee.empty }, "No timing data"), s && /* @__PURE__ */ B.createElement(
        qt,
        {
          loading: z,
          onHover: () => {
            g(null);
          },
          onLoad: be
        }
      )))
    );
  const Se = Math.min(
    K,
    W / o.spans.length
  ), we = (E) => {
    const R = E.currentTarget.getBoundingClientRect();
    return St((E.clientX - R.left) / Math.max(1, R.width));
  }, Oe = (E) => {
    var b;
    const R = E.target instanceof HTMLElement ? E.target : null, F = (b = R == null ? void 0 : R.closest("[data-timeline-record-index]")) == null ? void 0 : b.dataset.timelineRecordIndex;
    if (F === void 0) return null;
    const H = Number(F);
    return Number.isFinite(H) ? H : null;
  }, Fe = (E) => {
    d(E);
  }, Be = (E) => {
    if (E.button === 2) {
      T.current = {
        anchorClientX: E.clientX,
        anchorStart: Q,
        moved: !1,
        pannable: M !== null,
        pointerId: E.pointerId
      }, M !== null && X(!1), O(!0), typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId);
      return;
    }
    if (E.button !== 0) return;
    const R = we(E), F = Q + R * K, H = Oe(E);
    g({ fraction: R, recordIndex: H }), k.current = {
      pointerId: E.pointerId,
      anchorTime: F,
      anchorClientX: E.clientX,
      recordIndex: H
    }, typeof E.currentTarget.setPointerCapture == "function" && E.currentTarget.setPointerCapture(E.pointerId), h({ start: F, end: F });
  }, He = (E) => {
    const R = E.currentTarget.getBoundingClientRect(), F = we(E);
    g({ fraction: F, recordIndex: Oe(E) });
    const H = T.current;
    if (H !== null && H.pointerId === E.pointerId) {
      if (Math.abs(E.clientX - H.anchorClientX) >= vt && (H.moved = !0), !H.pannable) return;
      const J = (E.clientX - H.anchorClientX) / Math.max(1, R.width), se = Math.min(
        Math.max(H.anchorStart - J * K, o.start),
        o.end - K
      );
      N({ start: se, end: se + K });
      return;
    }
    const b = k.current;
    if (b === null || b.pointerId !== E.pointerId) return;
    let _ = Q;
    if (M !== null) {
      const J = E.clientX - R.left, se = Math.min(
        ml,
        Math.max(1, R.width * dl)
      ), q = J < se ? -1 : J > R.width - se ? 1 : 0;
      if (q !== 0) {
        const ke = q < 0 ? se - J : J - (R.width - se), me = St(ke / se), fe = Q + q * K * hl * Math.max(0.2, me);
        _ = Math.min(
          Math.max(fe, o.start),
          o.end - K
        ), _ !== Q && (X(!1), N({
          start: _,
          end: _ + K
        }));
      }
    }
    const P = _ + F * K;
    h(Tt(b.anchorTime, P));
  }, We = (E) => {
    const R = T.current;
    if (R !== null && R.pointerId === E.pointerId) {
      const q = R.moved || Math.abs(E.clientX - R.anchorClientX) >= vt;
      T.current = null, O(!1), q || d(null);
      return;
    }
    const F = k.current;
    if (F === null || F.pointerId !== E.pointerId) return;
    const H = we(E), b = Q + H * K, _ = Tt(F.anchorTime, b);
    g({ fraction: H, recordIndex: Oe(E) }), k.current = null, h(null);
    const P = Math.abs(E.clientX - F.anchorClientX) < vt, J = P && F.recordIndex !== null ? o.spans.find((q) => q.index === F.recordIndex) : void 0;
    if (J !== void 0) {
      d(null), y == null || y(J.index);
      return;
    }
    const se = _.end - _.start < Se ? El(
      P ? _.start : (_.start + _.end) / 2,
      Se,
      o.start,
      o.end
    ) : _;
    if (Fe(se), P) {
      const q = _.start, ke = o.spans.reduce((me, fe) => {
        const Ke = q < me.start ? me.start - q : q > me.end ? q - me.end : 0;
        return (q < fe.start ? fe.start - q : q > fe.end ? q - fe.end : 0) < Ke ? fe : me;
      });
      p == null || p(ke.index);
    }
  }, Ue = (E) => {
    E.key !== "Escape" || n === null || (E.preventDefault(), d(null));
  }, it = () => {
    k.current = null, T.current = null, h(null), g(null), O(!1);
  };
  return /* @__PURE__ */ B.createElement(
    "section",
    {
      ref: I,
      className: ee.root,
      "data-theme": m || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ B.createElement("div", { className: ee.plot }, /* @__PURE__ */ B.createElement(Qt, null), /* @__PURE__ */ B.createElement(
      "div",
      {
        ref: w,
        className: ee.track,
        "data-panning": D || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: Ue,
        onPointerDown: Be,
        onPointerMove: He,
        onPointerUp: We,
        onPointerCancel: it,
        onPointerLeave: () => {
          k.current === null && T.current === null && g(null);
        },
        onDoubleClick: (E) => {
          E.preventDefault(), d(null);
        },
        onContextMenu: (E) => {
          E.preventDefault();
        }
      },
      Ne && /* @__PURE__ */ B.createElement(
        qt,
        {
          loading: z,
          onHover: () => {
            g(null);
          },
          onLoad: be
        }
      ),
      f !== null && f.recordIndex === null && u === null && /* @__PURE__ */ B.createElement(
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
      ae !== null && /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(
        "div",
        {
          className: ee.selection,
          "data-dragging": u === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ae.start * 100}%`,
            "--trajectory-selection-width": `${(ae.end - ae.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ B.createElement(
        "div",
        {
          className: ee.selectionEdges,
          "data-dragging": u === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ae.start * 100}%`,
            "--trajectory-selection-width": `${(ae.end - ae.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ B.createElement(
        "div",
        {
          className: ee.turnBoundaries,
          "data-animate-viewport": ie || void 0,
          "aria-hidden": "true",
          style: he
        },
        o.turnBoundaries.filter(
          (E) => E.time > o.start && E.time >= Q && E.time <= Q + K
        ).map((E) => /* @__PURE__ */ B.createElement(
          "span",
          {
            className: ee.turnBoundary,
            "data-turn": E.turn,
            key: E.turn,
            style: {
              "--trajectory-turn-left": `${(E.time - o.start) / W * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ B.createElement(
        "div",
        {
          className: ee.lanes,
          "data-animate-viewport": ie || void 0,
          "data-timeline-domain": !0,
          style: he
        },
        o.spans.filter(
          (E) => E.index === a || E.end >= Q && E.start <= Q + K
        ).map((E) => {
          const R = (E.start - o.start) / W, H = (E.end - E.start) / W * 100, b = x.get(E.index), _ = b == null ? void 0 : b.ttftMs, P = b == null ? void 0 : b.decodingMs, J = _ === void 0 || P === void 0 || _ + P <= 0 ? null : _ / (_ + P);
          return /* @__PURE__ */ B.createElement(
            Mn,
            {
              key: E.index,
              label: yl(E.kind, b),
              placement: "bottom"
            },
            /* @__PURE__ */ B.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: ee.span,
                "data-timeline-span": E.kind,
                "data-timeline-record-index": E.index,
                "data-assistant-timing": J === null ? void 0 : "true",
                "data-error": E.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": E.index === a || void 0,
                "data-hovered": (f == null ? void 0 : f.recordIndex) === E.index || void 0,
                "data-search-match": i === null ? void 0 : i.has(E.index) ? "true" : "false",
                "data-selected": G === null ? void 0 : E.start <= G.end && E.end >= G.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${R * 100}%`,
                  "--trajectory-span-width": `${H}%`,
                  "--trajectory-span-gap": `min(${H * 0.08}%, 1px)`,
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
}), zt = window.QwenPaw.host, ue = zt.React, { Button: Sl, Input: xl, Segmented: bl, Tooltip: Zt } = zt.antd, { MenuFoldOutlined: wl, MenuUnfoldOutlined: kl, ReloadOutlined: Tl, SearchOutlined: _l } = zt.antdIcons;
function Il({
  mode: e,
  onModeChange: l,
  search: t,
  onSearchChange: n,
  onRefresh: s,
  modeOptions: r,
  allCollapsed: a,
  hasRequests: i,
  onToggleCollapseAll: d,
  callsCollapsed: y,
  onToggleCallsCollapsed: p
}) {
  const m = ne();
  return /* @__PURE__ */ ue.createElement(
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
    /* @__PURE__ */ ue.createElement(Zt, { title: v(m, "projectionHint") }, /* @__PURE__ */ ue.createElement(
      bl,
      {
        size: "small",
        value: e,
        options: r,
        onChange: (o) => l(o)
      }
    )),
    /* @__PURE__ */ ue.createElement(
      xl,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ue.createElement(_l, null),
        placeholder: v(m, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (o) => n(o.target.value)
      }
    ),
    i && /* @__PURE__ */ ue.createElement(
      Zt,
      {
        title: a ? v(m, "expandAll") : v(m, "collapseAll")
      },
      /* @__PURE__ */ ue.createElement(
        Sl,
        {
          size: "small",
          type: "text",
          icon: a ? /* @__PURE__ */ ue.createElement(kl, null) : /* @__PURE__ */ ue.createElement(wl, null),
          onClick: d
        }
      )
    ),
    /* @__PURE__ */ ue.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ue.createElement(
      "a",
      {
        onClick: s,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ue.createElement(Tl, null),
      " ",
      v(m, "refresh")
    ))
  );
}
function Cn(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function Ml(e) {
  if (!e) return "-";
  const l = new Date(e);
  return Number.isNaN(l.getTime()) ? e : l.toLocaleString();
}
function Cl(e) {
  if (!e) return "-";
  const l = Date.parse(e);
  if (!Number.isFinite(l)) return e;
  const t = Date.now() - l;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(l).toLocaleString();
}
function zn(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function en(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const On = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function An(e) {
  return e || "unknown";
}
const ot = window.QwenPaw.host, A = ot.React, { useCallback: tn, useEffect: xt, useMemo: pe, useRef: zl, useState: le } = A, {
  Button: Ye,
  Drawer: Ol,
  Empty: nn,
  Popconfirm: Al,
  Popover: $l,
  Space: Rl,
  Spin: $n,
  Switch: Ll,
  Tag: Dl,
  Tooltip: Pl,
  message: Re
} = ot.antd, { DeleteOutlined: jl, DownloadOutlined: Nl, SettingOutlined: sn } = ot.antdIcons, { Text: ve } = ot.antd.Typography;
function ln({
  config: e,
  onChange: l,
  children: t
}) {
  const n = ne(), s = (a, i, d) => /* @__PURE__ */ A.createElement(
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
    /* @__PURE__ */ A.createElement(ve, { style: { fontSize: 13 } }, a),
    /* @__PURE__ */ A.createElement(
      Ll,
      {
        size: "small",
        checked: !!i,
        onChange: (y) => l({ [d]: y })
      }
    )
  ), r = /* @__PURE__ */ A.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ A.createElement(ve, { strong: !0, style: { fontSize: 13 } }, v(n, "settings")), /* @__PURE__ */ A.createElement("div", { style: { marginTop: 8 } }, e ? [
    s(v(n, "enabled"), e.enabled, "enabled"),
    s(v(n, "captureLlm"), e.capture_llm, "capture_llm"),
    s(
      v(n, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    s(
      v(n, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ A.createElement($n, { size: "small" })));
  return /* @__PURE__ */ A.createElement($l, { content: r, trigger: "click", placement: "bottomRight" }, t);
}
function Rn({
  sessionId: e,
  summary: l,
  locale: t,
  onJumpSession: n,
  onRefreshSessions: s,
  variant: r = "page",
  emptyText: a,
  ledgerEmptyText: i
}) {
  const [d, y] = le(null), [p, m] = le(!1), [o, x] = le(!1), [k, T] = le(""), [I, w] = le("sequence"), [u, h] = le(null), [f, g] = le(null), [z, S] = le(null), [D, O] = le(
    /* @__PURE__ */ new Set()
  ), [M, N] = le(!1), [ie, X] = le(null), [W, xe] = le(null), [Y, K] = le(null), [Q, Ne] = le(null), be = zl(null);
  be.current = e, xt(() => {
    Bn().then(X).catch(() => X(null));
  }, []);
  const he = tn(async (b, _) => {
    _ || m(!0);
    try {
      const P = await Fn(b, {
        beforeSeq: _,
        limit: 200
      });
      Ne(null), y((J) => _ && J ? {
        ...P,
        events: [...P.events, ...J.events]
      } : P);
    } catch (P) {
      Ne(String(P.message));
    } finally {
      _ || m(!1);
    }
  }, []), ze = tn(async (b) => {
    try {
      const _ = await Nn(b);
      K(_), xe({
        sessionId: b,
        inputTokens: _.input_tokens,
        outputTokens: _.output_tokens,
        totalTokens: _.total_tokens,
        reasoningTokens: Number(_.reasoning_tokens ?? 0)
      });
    } catch {
      K(null), xe(null);
    }
  }, []);
  xt(() => {
    e ? (h(null), g(null), S(null), O(/* @__PURE__ */ new Set()), T(""), he(e), ze(e)) : (y(null), K(null), xe(null));
  }, [e, he, ze]);
  const rt = pe(
    () => d ? nl(d.events) : [],
    [d]
  ), { initial: ae, turns: G } = pe(
    () => sl(rt),
    [rt]
  ), Se = pe(
    () => ae ? [ae, ...Vt(G)] : Vt(G),
    [ae, G]
  ), we = pe(
    () => G.some((b) => b.status === "running"),
    [G]
  );
  xt(() => {
    if (!e || !we) return;
    const b = setInterval(() => {
      document.visibilityState === "visible" && be.current && he(be.current);
    }, 5e3);
    return () => clearInterval(b);
  }, [e, we, he]);
  const Oe = pe(
    () => u === null ? null : al(G, u, I),
    [u, G, I]
  ), Fe = pe(() => {
    const b = k.trim().toLowerCase();
    return b ? new Set(
      Se.filter(
        (_) => [
          _.text,
          _.outputText,
          _.thinkingText,
          _.toolName,
          _.toolInput,
          _.toolOutput,
          _.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(b)
      ).map((_) => _.index)
    ) : null;
  }, [k, Se]), Be = pe(
    () => f === null ? null : Se.find((b) => b.index === f) ?? null,
    [Se, f]
  ), He = pe(() => {
    var $t, Rt;
    if (z === null) return null;
    const b = G.find((j) => j.turn === z);
    if (!b) return null;
    const _ = (($t = b.groups[0]) == null ? void 0 : $t.cells) ?? [], P = _.filter((j) => j.kind === "message"), J = _.filter((j) => j.kind === "tool"), se = [
      ...new Set(
        P.map((j) => j.model).filter((j) => !!j)
      )
    ], q = [
      ...new Set(
        P.map((j) => j.provider).filter((j) => !!j)
      )
    ];
    let ke = 0, me = 0, fe = 0, Ke = 0, at = 0, Ve = null, ct = 0;
    const At = [];
    for (const j of _)
      j.usage && (ke += j.usage.input_tokens ?? 0, me += j.usage.output_tokens ?? 0, fe += j.usage.cache_input_tokens ?? 0, Ke += j.usage.cache_creation_input_tokens ?? 0, at += j.usage.reasoning_tokens ?? 0), j.timing && (Ve = Ve === null ? j.timing.ttft_ms : Math.min(Ve, j.timing.ttft_ms), ct = (ct ?? 0) + j.timing.decode_ms), j.isError && At.push(j.toolError ?? j.text ?? "error");
    const Te = _.find((j) => j.kind === "user"), Pn = (Rt = [...P].reverse().find((j) => j.options)) == null ? void 0 : Rt.options, ut = [...P].reverse().find((j) => j.outputText);
    return {
      turn: z,
      status: b.status,
      durationMs: b.durationMs,
      startedAt: (Te == null ? void 0 : Te.startedAt) ?? null,
      query: (Te == null ? void 0 : Te.text) ?? "",
      llmCalls: P.length,
      toolCalls: J.length,
      models: se,
      providers: q,
      inputTokens: ke,
      outputTokens: me,
      cacheReadTokens: fe,
      cacheWriteTokens: Ke,
      reasoningTokens: at,
      resultIndex: ut == null ? void 0 : ut.index,
      ttftMs: Ve,
      decodeMs: ct,
      errors: At,
      options: Pn,
      sessionTotals: W && W.sessionId === e ? {
        inputTokens: W.inputTokens,
        outputTokens: W.outputTokens,
        totalTokens: W.totalTokens,
        reasoningTokens: W.reasoningTokens
      } : void 0
    };
  }, [z, G, W, e]), We = !!(d && d.events.length > 0 && d.events[0].seq > 1), Ue = async (b) => {
    try {
      X(await Hn(b));
    } catch (_) {
      Re.error(String(_.message));
    }
  }, it = pe(
    () => [
      { label: "Sequence", value: "sequence" },
      { label: "Duration", value: "duration" },
      { label: "Time", value: "time" },
      { label: "Actual", value: "actual" }
    ],
    []
  ), E = pe(() => {
    if (!Y) return null;
    const b = [
      `${Y.runs} ${v(t, "statRounds")} · ${Y.llm_calls} ${v(t, "statSteps")}`,
      `LLM ${re(Y.llm_ms_total / 1e3)} · ${v(
        t,
        "toolCalls"
      )} ${re(Y.tool_ms_total / 1e3)}`,
      `${v(t, "statTtftAvg")} ${Y.ttft_ms_avg === null ? "-" : re(Y.ttft_ms_avg / 1e3)} · ${Mt(
        Y.output_tokens,
        Y.decode_ms_total / 1e3
      )}`
    ];
    if (Y.cache_read_tokens > 0 || Y.cache_write_tokens > 0) {
      const _ = Y.cache_read_tokens + Y.input_tokens, P = _ > 0 ? Math.round(Y.cache_read_tokens / _ * 100) : 0;
      b.push(`${v(t, "statCacheHit")} ${P}%`);
    }
    return b.push(
      `${v(t, "statInput")} ${te(
        Y.input_tokens
      )} tok · ${v(t, "statOutput")} ${te(
        Y.output_tokens
      )} tok`
    ), l && b.push(en(l.size_bytes)), b.join(" | ");
  }, [Y, l, t]), R = () => {
    g(null), S(null);
  }, F = /* @__PURE__ */ A.createElement(
    us,
    {
      record: Be,
      request: He,
      onJumpSession: n,
      onSelectTurn: (b) => {
        S(b), g(null);
      },
      onClose: R,
      fillContainer: r === "panel"
    }
  ), H = Be !== null || He !== null;
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
          ve,
          {
            strong: !0,
            ellipsis: {
              tooltip: (l == null ? void 0 : l.title) || e
            },
            style: { fontSize: 13, flex: "0 1 auto", minWidth: 60 }
          },
          (l == null ? void 0 : l.title) || (l == null ? void 0 : l.agent_id) || Cn(e)
        ),
        /* @__PURE__ */ A.createElement(
          Dl,
          {
            color: On[(l == null ? void 0 : l.status) ?? ""] ?? "default",
            style: { marginInlineEnd: 0, flexShrink: 0 }
          },
          An((l == null ? void 0 : l.status) ?? "unknown")
        ),
        l != null && l.channel ? /* @__PURE__ */ A.createElement(ve, { type: "secondary", style: { fontSize: 11, flexShrink: 0 } }, l.channel) : null,
        /* @__PURE__ */ A.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ A.createElement(Rl, null, /* @__PURE__ */ A.createElement(ln, { config: ie, onChange: Ue }, /* @__PURE__ */ A.createElement(Ye, { size: "small", icon: /* @__PURE__ */ A.createElement(sn, null) })), /* @__PURE__ */ A.createElement(Pl, { title: v(t, "export") }, /* @__PURE__ */ A.createElement(
          Ye,
          {
            size: "small",
            icon: /* @__PURE__ */ A.createElement(Nl, null),
            onClick: () => {
              Wn(e).then(() => Re.success(v(t, "exported"))).catch(
                (b) => Re.error(String(b.message))
              );
            }
          },
          r === "panel" ? null : v(t, "export")
        )), r === "panel" ? null : /* @__PURE__ */ A.createElement(
          Al,
          {
            title: v(t, "deleteConfirm"),
            onConfirm: () => {
              Un(e).then(() => {
                Re.success(v(t, "deleted")), s == null || s();
              }).catch(
                (b) => Re.error(String(b.message))
              );
            }
          },
          /* @__PURE__ */ A.createElement(Ye, { size: "small", danger: !0, icon: /* @__PURE__ */ A.createElement(jl, null) }, v(t, "delete"))
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
          ve,
          {
            type: "secondary",
            style: { fontSize: 11, flex: "1 1 300px", minWidth: 0 }
          },
          E ?? // Transient line while the stats endpoint responds.
          (l ? `${l.runs} ${v(t, "statRounds")} · ${l.llm_calls} ${v(t, "statSteps")} · ${zn(
            l.total_tokens
          )} ${v(t, "tokens")} · ${en(
            l.size_bytes
          )}` : "")
        ),
        r === "panel" ? null : /* @__PURE__ */ A.createElement(
          ve,
          {
            type: "secondary",
            copyable: {
              text: e,
              tooltips: [
                v(t, "copySessionId"),
                v(t, "copiedSessionId")
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
        /* @__PURE__ */ A.createElement(ve, { type: "secondary", style: { fontSize: 13 } }, a ?? v(t, "selectSession")),
        /* @__PURE__ */ A.createElement("div", { style: { marginLeft: "auto", flexShrink: 0 } }, /* @__PURE__ */ A.createElement(ln, { config: ie, onChange: Ue }, /* @__PURE__ */ A.createElement(Ye, { size: "small", icon: /* @__PURE__ */ A.createElement(sn, null) })))
      )
    ),
    Q && /* @__PURE__ */ A.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ A.createElement(ve, { type: "danger", style: { fontSize: 12 } }, `${v(t, "loadFailed")}: ${Q}`)),
    /* @__PURE__ */ A.createElement(
      Il,
      {
        mode: I,
        onModeChange: w,
        search: k,
        onSearchChange: T,
        onRefresh: () => {
          e && (he(e), ze(e)), s == null || s();
        },
        modeOptions: it,
        allCollapsed: G.length > 0 && G.every((b) => D.has(b.turn ?? -1)),
        hasRequests: G.some((b) => b.turn !== null),
        callsCollapsed: M,
        onToggleCallsCollapsed: () => N((b) => !b),
        onToggleCollapseAll: () => {
          O((b) => G.some(
            (P) => P.turn !== null && !b.has(P.turn)
          ) ? new Set(
            G.map((P) => P.turn).filter((P) => P !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ A.createElement(
      vl,
      {
        turns: G,
        mode: I,
        range: u,
        hasEarlierRecords: We,
        onLoadEarlier: async () => {
          var b;
          return !d || d.events.length === 0 ? !1 : (await he(e, (b = d.events[0]) == null ? void 0 : b.seq), !0);
        },
        selectedIndex: f,
        searchMatchIndexes: Fe,
        onRangeChange: h,
        onRecordSelect: g,
        onRecordFocus: g
      }
    ),
    p && !d ? /* @__PURE__ */ A.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ A.createElement($n, null)) : d ? /* @__PURE__ */ A.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ A.createElement(
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
        el,
        {
          turns: G,
          selectedIndex: f,
          selectedTurn: z,
          collapsedTurns: D,
          focusIndexes: Oe,
          searchMatchIndexes: Fe,
          onSelectedIndexChange: (b) => {
            if (b === f) {
              g(null);
              return;
            }
            g(b), S(null);
          },
          onSelectedTurnChange: (b) => {
            S(b), g(null);
          },
          callsCollapsed: M,
          onToggleTurn: (b) => {
            O((_) => {
              const P = new Set(_);
              return P.has(b) ? P.delete(b) : P.add(b), P;
            });
          },
          hasOlderRecords: We,
          loadingOlder: o,
          onLoadOlder: () => {
            var b;
            !d || d.events.length === 0 || (x(!0), he(
              e,
              (b = d.events[0]) == null ? void 0 : b.seq
            ).finally(() => x(!1)));
          },
          emptyText: i ?? v(t, "noSessions"),
          initialRecord: ae
        }
      )
    ), r === "panel" ? /* @__PURE__ */ A.createElement(
      Ol,
      {
        open: H,
        placement: "right",
        width: "92%",
        getContainer: !1,
        closable: !1,
        mask: !1,
        onClose: R,
        styles: {
          body: {
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            padding: 0
          }
        }
      },
      H ? F : null
    ) : H ? F : null) : /* @__PURE__ */ A.createElement(
      nn,
      {
        image: nn.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: a ?? v(t, "selectSession")
      }
    )
  );
}
const oe = window.QwenPaw.host, U = oe.React, { useCallback: Fl, useEffect: Le, useMemo: _t, useRef: bt, useState: De } = U, { Button: It, Empty: on, Tag: rn, Tooltip: Ze } = oe.antd, { CloseOutlined: Bl, CompassOutlined: Hl, ExportOutlined: Wl } = oe.antdIcons, { Text: an } = oe.antd.Typography, Ln = "agent-trace-dock-width", Dn = 340, Ul = 1200, Kl = 360, Vl = 0.3;
function Xl() {
  return Ot(Math.round(window.innerWidth * Vl));
}
function Gl() {
  return Math.max(Dn, window.innerWidth - Kl);
}
function Ot(e) {
  const l = Math.min(Gl(), Ul);
  return Math.min(l, Math.max(Dn, Math.round(e)));
}
function Jl() {
  try {
    const e = Number(localStorage.getItem(Ln));
    if (Number.isFinite(e) && e > 0) return Ot(e);
  } catch {
  }
  return Xl();
}
function Yl(e) {
  return `${window.location.pathname.startsWith("/console") ? "/console" : ""}/plugin/agent-trace${e ? `?session=${encodeURIComponent(e)}` : ""}`;
}
function Ql() {
  const [e, l] = De(!1), t = typeof oe.useLocale == "function" ? oe.useLocale() : void 0, n = _t(
    () => nt(t ?? ne()),
    [t]
  );
  return /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(Ze, { title: v(n, "dockTitle") }, /* @__PURE__ */ U.createElement(
    It,
    {
      size: "small",
      type: "text",
      icon: /* @__PURE__ */ U.createElement(Hl, null),
      "aria-label": v(n, "dockTitle"),
      onClick: () => l((s) => !s)
    }
  )), e ? /* @__PURE__ */ U.createElement(ql, { onClose: () => l(!1) }) : null);
}
function ql({ onClose: e }) {
  const l = typeof oe.useTheme == "function" ? oe.useTheme() : "light", t = typeof oe.useLocale == "function" ? oe.useLocale() : void 0, n = _t(
    () => nt(t ?? ne()),
    [t]
  ), [s, r] = De(Jl), [a, i] = De(
    () => typeof oe.getCurrentSessionId == "function" ? oe.getCurrentSessionId() : null
  ), [d, y] = De(null), [p, m] = De(null), o = bt(null), x = bt(a), k = bt(s);
  k.current = s;
  const T = d ?? a;
  Le(() => {
    a !== x.current && (x.current = a, y(null));
  }, [a]), Le(() => {
    const f = setInterval(() => {
      document.visibilityState === "visible" && typeof oe.getCurrentSessionId == "function" && i(oe.getCurrentSessionId());
    }, 5e3);
    return () => clearInterval(f);
  }, []);
  const I = Fl(async () => {
    try {
      const f = await wt({ limit: 100, offset: 0 });
      m(f.sessions);
    } catch {
    }
  }, []);
  Le(() => {
    I();
    const f = setInterval(() => {
      document.visibilityState === "visible" && I();
    }, 15e3);
    return () => clearInterval(f);
  }, [I]), Le(() => {
    const f = (g) => {
      g.key === "Escape" && e();
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [e]), Le(() => {
    const f = (z) => {
      const S = o.current;
      S !== null && r(Ot(S.anchorWidth + (S.anchorX - z.clientX)));
    }, g = () => {
      if (o.current !== null)
        try {
          localStorage.setItem(
            Ln,
            String(k.current)
          );
        } catch {
        }
      o.current = null;
    };
    return window.addEventListener("pointermove", f), window.addEventListener("pointerup", g), () => {
      window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", g);
    };
  }, []);
  const w = _t(
    () => (p == null ? void 0 : p.find((f) => f.session_id === T)) ?? null,
    [p, T]
  ), u = l === "dark", h = Yl(T);
  return /* @__PURE__ */ U.createElement(
    "aside",
    {
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: s,
        zIndex: 900,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        overflow: "hidden",
        background: u ? "#141414" : "#ffffff",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: `1px solid ${u ? "#2f2f2f" : "rgba(5,5,5,0.12)"}`,
        boxShadow: u ? "-8px 0 24px rgba(0,0,0,0.55)" : "-8px 0 24px rgba(0,0,0,0.12)"
      }
    },
    /* @__PURE__ */ U.createElement(
      "div",
      {
        onPointerDown: (f) => {
          o.current = {
            anchorX: f.clientX,
            anchorWidth: s
          };
        },
        title: v(n, "dragToResize"),
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 6,
          cursor: "col-resize",
          zIndex: 10
        }
      }
    ),
    /* @__PURE__ */ U.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 8px 8px 12px",
          borderBottom: `1px solid ${u ? "#2f2f2f" : "rgba(5,5,5,0.08)"}`,
          flexShrink: 0
        }
      },
      /* @__PURE__ */ U.createElement(an, { strong: !0, style: { fontSize: 13 } }, "🧭 ", v(n, "dockTitle")),
      d ? /* @__PURE__ */ U.createElement(Ze, { title: d }, /* @__PURE__ */ U.createElement(rn, { color: "geekblue", style: { marginInlineEnd: 0 } }, v(n, "viewingChild"))) : /* @__PURE__ */ U.createElement(rn, { style: { marginInlineEnd: 0 } }, v(n, "followCurrent")),
      /* @__PURE__ */ U.createElement("span", { style: { flex: 1 } }),
      /* @__PURE__ */ U.createElement(Ze, { title: v(n, "openFullPage") }, /* @__PURE__ */ U.createElement(
        It,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ U.createElement(Wl, null),
          href: h
        }
      )),
      /* @__PURE__ */ U.createElement(Ze, { title: v(n, "closePanel") }, /* @__PURE__ */ U.createElement(
        It,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ U.createElement(Bl, null),
          onClick: e
        }
      ))
    ),
    T ? /* @__PURE__ */ U.createElement(
      Rn,
      {
        sessionId: T,
        summary: w,
        locale: n,
        onJumpSession: y,
        variant: "panel",
        emptyText: v(n, "waitingSession"),
        ledgerEmptyText: v(n, "noTraceYet")
      }
    ) : /* @__PURE__ */ U.createElement(
      on,
      {
        image: on.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 96 },
        description: /* @__PURE__ */ U.createElement("span", { style: { fontSize: 13 } }, v(n, "waitingSession"))
      },
      /* @__PURE__ */ U.createElement(
        an,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 240, display: "block" }
        },
        v(n, "waitingSessionHint")
      )
    )
  );
}
const Me = window.QwenPaw.host, L = Me.React, { useCallback: cn, useEffect: un, useMemo: Qe, useState: Ee } = L, { Button: dn, Empty: hn, Input: Zl, Spin: eo, Tag: mn, Tooltip: fn } = Me.antd, {
  CaretRightOutlined: to,
  MenuFoldOutlined: no,
  MenuUnfoldOutlined: so,
  SearchOutlined: lo
} = Me.antdIcons, { Text: je } = Me.antd.Typography;
function oo({
  groups: e,
  collapsedAgents: l,
  onToggleAgent: t,
  searching: n,
  selected: s,
  onSelect: r,
  locale: a
}) {
  const i = e.length > 1;
  return /* @__PURE__ */ L.createElement(L.Fragment, null, e.map(([d, y]) => {
    const p = i && !n && l.has(d);
    return /* @__PURE__ */ L.createElement("div", { key: d }, i && /* @__PURE__ */ L.createElement(
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
      /* @__PURE__ */ L.createElement(
        to,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: p ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ L.createElement(je, { strong: !0, style: { fontSize: 12 } }, d),
      /* @__PURE__ */ L.createElement(je, { type: "secondary", style: { fontSize: 11 } }, y.length)
    ), !p && y.map((m) => {
      const o = m.session_id === s;
      return /* @__PURE__ */ L.createElement(
        "div",
        {
          key: m.session_id,
          onClick: () => r(m.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: o ? "rgba(22,119,255,0.10)" : "transparent",
            border: o ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ L.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ L.createElement(
            je,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${m.title ? `${m.title}
` : ""}${m.session_id}`
              }
            },
            m.title || m.agent_id || Cn(m.session_id)
          ),
          i ? null : m.agent_id ? /* @__PURE__ */ L.createElement(
            mn,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            m.agent_id
          ) : null,
          /* @__PURE__ */ L.createElement(
            mn,
            {
              color: On[m.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            An(m.status)
          )
        ),
        /* @__PURE__ */ L.createElement(
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
          /* @__PURE__ */ L.createElement("span", null, m.channel || "-"),
          /* @__PURE__ */ L.createElement("span", null, m.runs, " ", v(a, "runs")),
          /* @__PURE__ */ L.createElement("span", null, zn(m.total_tokens), " tok"),
          /* @__PURE__ */ L.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Ml(m.last_event_t)
            },
            Cl(m.last_event_t)
          )
        )
      );
    }));
  }));
}
function ro() {
  const e = typeof Me.useLocale == "function" ? Me.useLocale() : void 0, l = Qe(
    () => nt(e ?? ne()),
    [e]
  ), [t, n] = Ee(null), [s, r] = Ee(!1), [a, i] = Ee(
    /* @__PURE__ */ new Set()
  ), [d, y] = Ee(!1), [p, m] = Ee(!1), [o, x] = Ee(null), [k, T] = Ee(""), [I, w] = Ee(null), u = cn(async () => {
    try {
      const S = await wt({ limit: 100, offset: 0 });
      n(S.sessions), r(S.has_more), w(null);
    } catch (S) {
      w(String(S.message));
    }
  }, []), h = cn(async () => {
    m(!0);
    try {
      const S = await wt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((D) => {
        const O = D ?? [];
        return [
          ...O,
          ...S.sessions.filter(
            (M) => !O.some((N) => N.session_id === M.session_id)
          )
        ];
      }), r(S.has_more);
    } catch (S) {
      w(String(S.message));
    } finally {
      m(!1);
    }
  }, [t]);
  un(() => {
    u();
    try {
      const S = new URLSearchParams(window.location.search).get("session");
      S && x(S);
    } catch {
    }
  }, [u]), un(() => {
    const S = setInterval(() => {
      document.visibilityState === "visible" && u();
    }, 15e3);
    return () => clearInterval(S);
  }, [u]);
  const f = Qe(
    () => (t == null ? void 0 : t.find((S) => S.session_id === o)) ?? null,
    [t, o]
  ), g = Qe(() => {
    if (!t) return [];
    const S = k.trim().toLowerCase();
    return S ? t.filter(
      (D) => [D.session_id, D.title ?? "", D.agent_id, D.channel].join(" ").toLowerCase().includes(S)
    ) : t;
  }, [t, k]), z = Qe(() => {
    const S = /* @__PURE__ */ new Map();
    for (const D of g) {
      const O = D.agent_id || "(unknown)", M = S.get(O);
      M ? M.push(D) : S.set(O, [D]);
    }
    return [...S.entries()];
  }, [g]);
  return /* @__PURE__ */ L.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, d ? /* @__PURE__ */ L.createElement(
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
    /* @__PURE__ */ L.createElement(fn, { title: v(l, "expandSidebar"), placement: "right" }, /* @__PURE__ */ L.createElement(
      dn,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ L.createElement(so, null),
        onClick: () => y(!1)
      }
    ))
  ) : /* @__PURE__ */ L.createElement(
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
    /* @__PURE__ */ L.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ L.createElement(
        Zl,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ L.createElement(lo, null),
          placeholder: v(l, "searchPlaceholder"),
          value: k,
          style: { flex: 1, minWidth: 0 },
          onChange: (S) => T(S.target.value)
        }
      ),
      /* @__PURE__ */ L.createElement(fn, { title: v(l, "collapseSidebar") }, /* @__PURE__ */ L.createElement(
        dn,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ L.createElement(no, null),
          onClick: () => y(!0)
        }
      ))
    ),
    I ? /* @__PURE__ */ L.createElement("div", { style: { padding: "0 12px 4px" } }, /* @__PURE__ */ L.createElement(je, { type: "danger", style: { fontSize: 12 } }, `${v(l, "loadFailed")}: ${I}`)) : null,
    /* @__PURE__ */ L.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ L.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ L.createElement(eo, null)) : g.length === 0 ? /* @__PURE__ */ L.createElement(
      hn,
      {
        image: hn.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ L.createElement("span", { style: { fontSize: 12 } }, v(l, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ L.createElement(
        je,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        v(l, "noSessionsHint")
      )
    ) : /* @__PURE__ */ L.createElement(
      oo,
      {
        groups: z,
        collapsedAgents: a,
        onToggleAgent: (S) => {
          i((D) => {
            const O = new Set(D);
            return O.has(S) ? O.delete(S) : O.add(S), O;
          });
        },
        searching: !!k.trim(),
        selected: o,
        onSelect: x,
        locale: l
      }
    ), t !== null && s && !k.trim() && /* @__PURE__ */ L.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ L.createElement(
      "a",
      {
        onClick: () => void h(),
        style: { fontSize: 12 }
      },
      p ? "…" : `⋯ ${v(l, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ L.createElement(
    Rn,
    {
      sessionId: o,
      summary: f,
      locale: l,
      onJumpSession: x,
      onRefreshSessions: () => void u(),
      variant: "page"
    }
  ));
}
const io = window.QwenPaw.host.React;
var pn, gn;
(gn = (pn = window.QwenPaw).registerRoutes) == null || gn.call(pn, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: ro,
    label: v(ne(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);
var yn, qe, En;
(En = (qe = (yn = window.QwenPaw.chat) == null ? void 0 : yn.rightHeader) == null ? void 0 : qe.add) == null || En.call(
  qe,
  "agent-trace",
  io.createElement(Ql),
  { id: "agent-trace-dock" }
);

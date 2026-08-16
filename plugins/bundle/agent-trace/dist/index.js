const tn = {
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
    modeSequence: "顺序",
    modeDuration: "时长",
    modeTime: "时刻",
    modeActual: "实际",
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
    collapseSidebar: "收起会话列表",
    expandSidebar: "展开会话列表"
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
    modeSequence: "Sequence",
    modeDuration: "Duration",
    modeTime: "Time",
    modeActual: "Actual",
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
    collapseSidebar: "Collapse session list",
    expandSidebar: "Expand session list"
  }
};
function Wt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function ae() {
  try {
    return Wt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function b(e, l) {
  return tn[e][l];
}
const Oe = window.QwenPaw.host;
async function nn(e) {
  return Ce(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function Ut(e, l) {
  return Oe.fetch ? Oe.fetch(e, l) : fetch(Oe.getApiUrl(e), {
    ...l,
    headers: {
      ...(l == null ? void 0 : l.headers) || {},
      ...Oe.getApiToken() ? { Authorization: `Bearer ${Oe.getApiToken()}` } : {}
    }
  });
}
async function Ce(e, l) {
  const t = await Ut(e, l), n = await t.text();
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
async function xt(e) {
  const l = new URLSearchParams();
  return l.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && l.set("offset", String(e.offset)), Ce(
    `/agent-trace/sessions?${l.toString()}`
  );
}
async function sn(e, l) {
  const t = new URLSearchParams();
  l != null && l.beforeSeq && t.set("before_seq", String(l.beforeSeq)), t.set("limit", String(l == null ? void 0 : l.limit));
  const n = t.toString();
  return Ce(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function ln() {
  return Ce("/agent-trace/config");
}
async function rn(e) {
  return Ce("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function on(e) {
  const l = await Ut(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!l.ok) throw new Error(`HTTP ${l.status}`);
  const t = await l.blob(), n = URL.createObjectURL(t), s = document.createElement("a");
  s.href = n, s.download = `${e}.jsonl`, s.click(), URL.revokeObjectURL(n);
}
async function an(e) {
  await Ce(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
const bt = 3e3;
function wt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function cn(e, l) {
  const t = wt(e ?? ""), n = wt(l ?? "");
  if (t.length > bt || n.length > bt)
    return [
      ...t.map((h) => ({ kind: "del", text: h })),
      ...n.map((h) => ({ kind: "add", text: h }))
    ];
  const s = t.length, r = n.length, c = new Int32Array((s + 1) * (r + 1)), a = (h, o) => h * (r + 1) + o;
  for (let h = s - 1; h >= 0; h -= 1)
    for (let o = r - 1; o >= 0; o -= 1)
      c[a(h, o)] = t[h] === n[o] ? c[a(h + 1, o + 1)] + 1 : Math.max(c[a(h + 1, o)], c[a(h, o + 1)]);
  const i = [];
  let f = 0, p = 0;
  for (; f < s && p < r; )
    t[f] === n[p] ? (i.push({ kind: "same", text: t[f] }), f += 1, p += 1) : c[a(f + 1, p)] >= c[a(f, p + 1)] ? (i.push({ kind: "del", text: t[f] }), f += 1) : (i.push({ kind: "add", text: n[p] }), p += 1);
  for (; f < s; )
    i.push({ kind: "del", text: t[f] }), f += 1;
  for (; p < r; )
    i.push({ kind: "add", text: n[p] }), p += 1;
  return i;
}
function un(e, l = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((r, c) => {
    if (r.kind !== "same")
      for (let a = Math.max(0, c - l); a <= Math.min(e.length - 1, c + l); a += 1)
        t[a] = !0;
  });
  const n = [];
  let s = 0;
  return e.forEach((r, c) => {
    t[c] ? (s > 0 && (n.push({ kind: "gap", count: s }), s = 0), n.push(r)) : s += 1;
  }), s > 0 && n.push({ kind: "gap", count: s }), n;
}
function dn(e) {
  let l = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? l += 1 : n.kind === "del" && (t += 1);
  return { added: l, removed: t };
}
function hn(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function de(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const l = e * 1e3;
  return l < 1e3 ? `${Math.round(l)}ms` : l < 6e4 ? `${(l / 1e3).toFixed(1)}s` : `${Math.floor(l / 6e4)}m${Math.round(l % 6e4 / 1e3)}s`;
}
function he(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function Vt(e, l) {
  return e === void 0 || !Number.isFinite(e) || l === null || l === void 0 || l <= 0 ? "-" : `${(e / l).toFixed(1)} tok/s`;
}
function $e(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function re(e) {
  if (!e) return null;
  const l = Date.parse(e);
  return Number.isFinite(l) ? l : null;
}
const Je = window.QwenPaw.host, d = Je.React, { useEffect: mn, useRef: fn, useState: Kt } = d, { Button: pn, Collapse: gn, Empty: kt, Tabs: ht } = Je.antd, { Text: Y } = Je.antd.Typography, { CopyOutlined: yn } = Je.antdIcons, vn = 320, En = 720, We = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, Sn = 2e4;
function xn(e) {
  if (e.length > Sn) return e;
  const l = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, s, r = 0;
  for (; (s = t.exec(e)) !== null; ) {
    s.index > n && l.push(e.slice(n, s.index));
    const c = s[0];
    let a = "rgba(128,128,128,1)";
    s[1] !== void 0 ? a = We.key : s[2] !== void 0 ? a = We.string : s[3] !== void 0 ? a = We.number : a = We.literal, l.push(
      /* @__PURE__ */ d.createElement("span", { key: r++, style: { color: a } }, c)
    ), n = s.index + c.length;
  }
  return n < e.length && l.push(e.slice(n)), l;
}
function pe({ value: e, json: l = !1 }) {
  const [t, n] = Kt(!1), s = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!s) return null;
  const r = async () => {
    try {
      await navigator.clipboard.writeText(s), n(!0), window.setTimeout(() => n(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ d.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ d.createElement(
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
    t ? "✓" : /* @__PURE__ */ d.createElement(yn, null)
  ), /* @__PURE__ */ d.createElement(
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
    l ? xn(s) : s
  ));
}
function A({
  label: e,
  value: l,
  danger: t = !1
}) {
  return /* @__PURE__ */ d.createElement(
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
    /* @__PURE__ */ d.createElement(Y, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ d.createElement(
      Y,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      l
    )
  );
}
function bn({ request: e }) {
  const l = ae(), t = [
    {
      key: "summary",
      label: b(l, "summary"),
      children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(A, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ d.createElement(
        A,
        {
          label: b(l, "status"),
          value: e.status || "unknown"
        }
      ), /* @__PURE__ */ d.createElement(A, { label: "Query", value: wn(e.query) }), /* @__PURE__ */ d.createElement(
        A,
        {
          label: b(l, "duration"),
          value: de(
            e.durationMs === null ? null : e.durationMs / 1e3
          )
        }
      ), /* @__PURE__ */ d.createElement(A, { label: "Started", value: $e(e.startedAt) }), /* @__PURE__ */ d.createElement(
        A,
        {
          label: b(l, "llmCalls"),
          value: String(e.llmCalls)
        }
      ), /* @__PURE__ */ d.createElement(
        A,
        {
          label: b(l, "toolCalls"),
          value: String(e.toolCalls)
        }
      ), e.models.length > 0 ? /* @__PURE__ */ d.createElement(
        A,
        {
          label: b(l, "model"),
          value: e.models.join(", ")
        }
      ) : null, e.errors.length > 0 ? /* @__PURE__ */ d.createElement(Y, { type: "danger", style: { fontSize: 12 } }, e.errors.join("; ")) : null)
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(A, { label: "Input", value: he(e.inputTokens) }), /* @__PURE__ */ d.createElement(A, { label: "Output", value: he(e.outputTokens) }), /* @__PURE__ */ d.createElement(
        A,
        {
          label: "Total",
          value: he(e.inputTokens + e.outputTokens)
        }
      ))
    }
  ];
  return (e.ttftMs !== null || e.decodeMs !== null) && t.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ d.createElement("div", null, e.ttftMs !== null ? /* @__PURE__ */ d.createElement(
      A,
      {
        label: "First TTFT",
        value: de(e.ttftMs / 1e3)
      }
    ) : null, e.decodeMs !== null ? /* @__PURE__ */ d.createElement(
      A,
      {
        label: "Total decoding",
        value: de(e.decodeMs / 1e3)
      }
    ) : null, /* @__PURE__ */ d.createElement(
      A,
      {
        label: b(l, "throughput"),
        value: Vt(
          e.outputTokens,
          e.decodeMs === null ? null : e.decodeMs / 1e3
        )
      }
    ))
  }), /* @__PURE__ */ d.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ d.createElement(ht, { size: "small", items: t, tabBarStyle: { marginBottom: 8 } }));
}
function wn(e, l = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function kn({
  oldText: e,
  newText: l
}) {
  const t = d.useMemo(
    () => cn(e, l),
    [e, l]
  ), n = d.useMemo(() => dn(t), [t]), s = d.useMemo(() => un(t), [t]), r = ae();
  return e === void 0 ? /* @__PURE__ */ d.createElement(Y, { type: "secondary", style: { fontSize: 12 } }, b(r, "noPrevPrompt")) : /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ d.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ d.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ d.createElement(
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
    s.map((c, a) => {
      if (c.kind === "gap")
        return /* @__PURE__ */ d.createElement(
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
          c.count
        );
      const i = c;
      return /* @__PURE__ */ d.createElement(
        "div",
        {
          key: a,
          style: {
            padding: "0 8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            background: i.kind === "add" ? "rgba(82,196,26,0.12)" : i.kind === "del" ? "rgba(255,77,79,0.10)" : void 0,
            color: i.kind === "del" ? "rgba(255,77,79,0.9)" : void 0
          }
        },
        i.kind === "add" ? "+ " : i.kind === "del" ? "− " : "  ",
        i.text || " "
      );
    })
  ));
}
function Tn({ record: e }) {
  var r;
  const l = ae(), t = e.headerTools ?? [], n = e.headerReason === "changed", s = [
    {
      key: "summary",
      label: b(l, "summary"),
      children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(A, { label: "#", value: String(e.index) }), /* @__PURE__ */ d.createElement(
        A,
        {
          label: b(l, "status"),
          value: n ? b(l, "promptChanged") : b(l, "promptInitial")
        }
      ), /* @__PURE__ */ d.createElement(A, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ d.createElement(A, { label: "Chars", value: String(((r = e.prompt) == null ? void 0 : r.length) ?? 0) }), /* @__PURE__ */ d.createElement(A, { label: "Tools", value: String(t.length) }))
    },
    ...n ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ d.createElement(
          kn,
          {
            oldText: e.prevPrompt,
            newText: e.prompt ?? ""
          }
        )
      }
    ] : [],
    {
      key: "prompt",
      label: b(l, "prompt"),
      children: /* @__PURE__ */ d.createElement(pe, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ d.createElement("div", { style: { paddingTop: 4 } }, t.map((c) => /* @__PURE__ */ d.createElement(Y, { key: c, code: !0, style: { fontSize: 11 } }, c)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ d.createElement(
          gn,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((c, a) => {
              var f;
              const i = typeof c.name == "string" && c.name || typeof ((f = c.function) == null ? void 0 : f.name) == "string" && c.function.name || `tool-${a + 1}`;
              return {
                key: String(a),
                label: /* @__PURE__ */ d.createElement(Y, { code: !0, style: { fontSize: 11 } }, i),
                children: /* @__PURE__ */ d.createElement(pe, { value: c })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ d.createElement(pe, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ d.createElement(ht, { size: "small", items: s, tabBarStyle: { marginBottom: 8 } });
}
function et({ dragRef: e, width: l }) {
  return /* @__PURE__ */ d.createElement(
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
function _n({
  record: e,
  request: l,
  onJumpSession: t,
  onSelectTurn: n
}) {
  const s = ae(), [r, c] = Kt(400), a = fn(null);
  if (mn(() => {
    const o = (w) => {
      const I = a.current;
      if (I === null) return;
      const g = I.anchorX - w.clientX;
      c(
        Math.min(En, Math.max(vn, I.anchorWidth + g))
      );
    }, x = () => {
      a.current = null;
    };
    return window.addEventListener("pointermove", o), window.addEventListener("pointerup", x), () => {
      window.removeEventListener("pointermove", o), window.removeEventListener("pointerup", x);
    };
  }, []), e === null && l === null)
    return /* @__PURE__ */ d.createElement(
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
      /* @__PURE__ */ d.createElement(
        kt,
        {
          image: kt.PRESENTED_IMAGE_SIMPLE,
          description: b(s, "selectRecord")
        }
      )
    );
  if (e === null && l !== null)
    return /* @__PURE__ */ d.createElement(
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
      /* @__PURE__ */ d.createElement(et, { dragRef: a, width: r }),
      /* @__PURE__ */ d.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ d.createElement(bn, { request: l }))
    );
  const i = e;
  if (i.kind === "system" && i.prompt !== void 0)
    return /* @__PURE__ */ d.createElement(
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
      /* @__PURE__ */ d.createElement(et, { dragRef: a, width: r }),
      /* @__PURE__ */ d.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ d.createElement(Tn, { record: i }))
    );
  const f = i.usage, p = i.timing, h = [];
  return h.push({
    key: "summary",
    label: b(s, "summary"),
    children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(A, { label: "#", value: String(i.index) }), /* @__PURE__ */ d.createElement(A, { label: "Kind", value: i.kind }), i.runIndex > 0 && n ? /* @__PURE__ */ d.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ d.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => n(i.runIndex)
      },
      "Request #",
      i.runIndex,
      " →"
    )) : null, /* @__PURE__ */ d.createElement(
      A,
      {
        label: b(s, "status"),
        value: i.running ? b(s, "running") : i.isError ? b(s, "error") : b(s, "success"),
        danger: i.isError
      }
    ), i.model ? /* @__PURE__ */ d.createElement(A, { label: b(s, "model"), value: i.model }) : null, i.toolName ? /* @__PURE__ */ d.createElement(A, { label: "Tool", value: i.toolName }) : null, /* @__PURE__ */ d.createElement(
      A,
      {
        label: b(s, "duration"),
        value: de(i.timeSeconds)
      }
    ), i.note ? /* @__PURE__ */ d.createElement(Y, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.spawnSession ? /* @__PURE__ */ d.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ d.createElement(
      A,
      {
        label: b(s, "spawnedAgent"),
        value: i.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ d.createElement(
      pn,
      {
        size: "small",
        onClick: () => i.spawnSession && t(i.spawnSession),
        style: { marginTop: 4 }
      },
      b(s, "openChildSession")
    ) : null) : null)
  }), i.kind === "tool" ? (i.toolInput && h.push({
    key: "payload",
    label: b(s, "input"),
    children: /* @__PURE__ */ d.createElement(pe, { value: i.toolInput, json: !0 })
  }), (i.toolOutput || i.toolError) && h.push({
    key: "result",
    label: b(s, "output"),
    children: /* @__PURE__ */ d.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolError ? /* @__PURE__ */ d.createElement(Y, { type: "danger", style: { fontSize: 12 } }, i.toolError) : null, i.toolOutput ? /* @__PURE__ */ d.createElement(pe, { value: i.toolOutput }) : null)
  })) : (i.outputText || i.thinkingText || i.messages || i.marker || i.toolCalls && i.toolCalls.length > 0) && h.push({
    key: "raw",
    label: b(s, "output"),
    children: /* @__PURE__ */ d.createElement("div", { style: { display: "grid", gap: 8 } }, i.marker ? /* @__PURE__ */ d.createElement(pe, { value: i.marker }) : null, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(Y, { type: "secondary", style: { fontSize: 12 } }, `${b(s, "toolCall")} (${i.toolCalls.length})`), i.toolCalls.map((o, x) => /* @__PURE__ */ d.createElement("div", { key: o.id || x, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ d.createElement(Y, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", o.name), /* @__PURE__ */ d.createElement(Y, { type: "secondary", style: { fontSize: 11 } }, o.id)))) : null, i.note ? /* @__PURE__ */ d.createElement(Y, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.messages && i.messages.length > 0 ? /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(Y, { type: "secondary", style: { fontSize: 12 } }, `${b(s, "query")} (${i.messages.length})`), i.messages.map((o, x) => /* @__PURE__ */ d.createElement(
      "div",
      {
        key: x,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ d.createElement(Y, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, o.role),
      /* @__PURE__ */ d.createElement(
        Y,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        o.text
      )
    ))) : null, i.thinkingText ? /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(Y, { type: "secondary", style: { fontSize: 12 } }, b(s, "thinking")), /* @__PURE__ */ d.createElement(pe, { value: i.thinkingText })) : null, i.outputText ? /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(Y, { type: "secondary", style: { fontSize: 12 } }, b(s, "output")), /* @__PURE__ */ d.createElement(pe, { value: i.outputText })) : null)
  }), (i.startedAt !== null || f || p) && h.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(A, { label: "Started", value: $e(i.startedAt) }), /* @__PURE__ */ d.createElement(A, { label: "Total", value: de(i.timeSeconds) }), p ? /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(
      A,
      {
        label: "TTFT",
        value: de(p.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ d.createElement(
      A,
      {
        label: "Decoding",
        value: de(p.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ d.createElement(
      A,
      {
        label: b(s, "throughput"),
        value: Vt(
          f == null ? void 0 : f.output_tokens,
          p.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ d.createElement(Y, { type: "secondary", style: { fontSize: 12 } }, b(s, "noTiming")))
  }), f && h.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(A, { label: "Input", value: he(f.input_tokens) }), /* @__PURE__ */ d.createElement(A, { label: "Output", value: he(f.output_tokens) }), f.cache_creation_input_tokens ? /* @__PURE__ */ d.createElement(
      A,
      {
        label: "Cache write",
        value: he(f.cache_creation_input_tokens)
      }
    ) : null, f.cache_input_tokens ? /* @__PURE__ */ d.createElement(
      A,
      {
        label: "Cache read",
        value: he(f.cache_input_tokens)
      }
    ) : null, f.total_tokens !== void 0 ? /* @__PURE__ */ d.createElement(A, { label: "Total", value: he(f.total_tokens) }) : null, f.time !== void 0 ? /* @__PURE__ */ d.createElement(A, { label: "API time", value: de(f.time) }) : null)
  }), h.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ d.createElement(pe, { value: i.raw })
  }), /* @__PURE__ */ d.createElement(
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
    /* @__PURE__ */ d.createElement(et, { dragRef: a, width: r }),
    /* @__PURE__ */ d.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ d.createElement(ht, { size: "small", items: h, tabBarStyle: { marginBottom: 8 } }))
  );
}
const ee = window.QwenPaw.host.React, Mn = ee.useRef, In = ee.useState;
ee.useCallback;
ee.useMemo;
const Cn = ee.useEffect, zn = ee.useLayoutEffect, On = ee.useReducer;
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
function An(e) {
  return e ? e() : void 0;
}
function Rn(e, l, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(s, r, c) {
      if (typeof r == "string") {
        const a = r.charCodeAt(0);
        if (a >= 48 && a <= 57) {
          const i = +r;
          if (Number.isInteger(i) && i >= 0 && i < e) {
            let f = s[i];
            if (!f) {
              const p = l[i * 2];
              f = s[i] = {
                index: i,
                key: t(i),
                start: p,
                size: l[i * 2 + 1],
                end: p + l[i * 2 + 1],
                lane: 0
              };
            }
            return f;
          }
        }
        if (r === "length") return e;
      }
      return Reflect.get(s, r, c);
    }
  });
}
function _e(e, l, t) {
  let n = t.initialDeps ?? [], s, r = !0;
  function c() {
    var a;
    const i = process.env.NODE_ENV !== "production" && !!t.key && !!((a = t.debug) != null && a.call(t));
    let f = 0;
    i && (f = Date.now());
    const p = e();
    if (!(p.length !== n.length || p.some((x, w) => n[w] !== x)))
      return s;
    n = p;
    let o = 0;
    if (i && (o = Date.now()), s = l(...p), i) {
      const x = Math.round((Date.now() - f) * 100) / 100, w = Math.round((Date.now() - o) * 100) / 100, I = w / 16, g = (u, m) => {
        for (u = String(u); u.length < m; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${g(w, 5)} /${g(x, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * I, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(r && t.skipInitialOnChange) && t.onChange(s), r = !1, s;
  }
  return c.updateDeps = (a) => {
    n = a;
  }, c;
}
function Tt(e, l) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Ln = (e, l) => Math.abs(e - l) < 1.01, $n = (e, l, t) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => l.apply(this, s), t);
  };
};
let Ae;
const tt = () => {
  if (Ae !== void 0) return Ae;
  if (typeof navigator > "u") return Ae = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Ae = !0;
  const e = navigator.maxTouchPoints;
  return Ae = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, _t = (e) => {
  const { offsetWidth: l, offsetHeight: t } = e;
  return { width: l, height: t };
}, Dn = (e) => e, jn = (e) => {
  const l = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - l + 1, s = new Array(n);
  for (let r = 0; r < n; r++)
    s[r] = l + r;
  return s;
}, Nn = (e, l) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (c) => {
    const { width: a, height: i } = c;
    l({ width: Math.round(a), height: Math.round(i) });
  };
  if (s(_t(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((c) => {
    const a = () => {
      const i = c[0];
      if (i != null && i.borderBoxSize) {
        const f = i.borderBoxSize[0];
        if (f) {
          s({ width: f.inlineSize, height: f.blockSize });
          return;
        }
      }
      s(_t(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, qe = {
  passive: !0
}, Fn = typeof window > "u" ? !0 : "onscrollend" in window, Pn = (e, l, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const r = e.options.useScrollendEvent && Fn;
  let c = 0;
  const a = r ? null : $n(
    s,
    () => l(c, !1),
    e.options.isScrollingResetDelay
  ), i = (h) => () => {
    c = t(n), a == null || a(), l(c, h);
  }, f = i(!0), p = i(!1);
  return n.addEventListener("scroll", f, qe), r && n.addEventListener("scrollend", p, qe), () => {
    n.removeEventListener("scroll", f), r && n.removeEventListener("scrollend", p);
  };
}, Bn = (e, l) => Pn(e, l, (t) => {
  const { horizontal: n, isRtl: s } = e.options;
  return n ? t.scrollLeft * (s && -1 || 1) : t.scrollTop;
}), Hn = (e, l, t) => {
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
}, Wn = (e, {
  adjustments: l = 0,
  behavior: t
}, n) => {
  var s, r;
  (r = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || r.call(s, {
    [n.options.horizontal ? "left" : "top"]: e + l,
    behavior: t
  });
}, Un = Wn;
class Vn {
  constructor(l) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, s;
      return ((s = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : s.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((r) => {
          const c = () => {
            const a = r.target, i = this.indexFromElement(a);
            if (!a.isConnected) {
              this.observer.unobserve(a);
              for (const [f, p] of this.elementsCache)
                if (p === a) {
                  this.elementsCache.delete(f);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(i) && this.resizeItem(
              i,
              this.options.measureElement(a, r, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
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
        getItemKey: Dn,
        rangeExtractor: jn,
        onChange: () => {
        },
        measureElement: Hn,
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
      const c = this.options;
      let a = null, i = null, f = !1;
      if (c !== void 0 && c.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const o = c.count, x = r.count, w = this.getMeasurements(), I = o > 0 ? ((n = w[0]) == null ? void 0 : n.key) ?? c.getItemKey(0) : null, g = o > 0 ? ((s = w[o - 1]) == null ? void 0 : s.key) ?? c.getItemKey(o - 1) : null;
        if (x !== o || o > 0 && x > 0 && (r.getItemKey(0) !== I || r.getItemKey(x - 1) !== g)) {
          f = !0;
          const E = o > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? w[0] : null;
          E && (a = [E.key, this.getScrollOffset() - E.start]);
          const k = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          k && x > o && this.isAtEnd(c.scrollEndThreshold) && (o === 0 || r.getItemKey(x - 1) !== g) && (i = k);
        }
      }
      this.options = r, f && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let p = !1, h = 0;
      if (a && this.scrollOffset !== null) {
        const [o, x] = a, w = this.getMeasurements(), { count: I, getItemKey: g } = this.options;
        let u = 0;
        for (; u < I && g(u) !== o; )
          u++;
        if (u < I) {
          const m = w[u];
          if (m) {
            const E = Math.max(0, m.start + x);
            E !== this.scrollOffset && (h = E - this.scrollOffset, this.scrollOffset = E, p = !0);
          }
        }
      }
      (p || i) && (this.pendingScrollAnchor = [
        p ? a[0] : null,
        p ? a[1] : 0,
        i,
        h
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
          this.options.observeElementOffset(this, (r, c) => {
            if (c && this._intendedScrollOffset === null && r === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(r - this._intendedScrollOffset) < 1.5 && (r = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const a = this.getScrollOffset();
            this.scrollDirection = c ? a === r ? this.scrollDirection : a < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = c, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const r = this.scrollElement, c = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, a = () => {
            this._iosTouching = !1, !(!tt() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            c,
            qe
          ), r.addEventListener(
            "touchend",
            a,
            qe
          ), this.unsubs.push(() => {
            r.removeEventListener("touchstart", c), r.removeEventListener("touchend", a), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const s = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, s && this.scrollElement && this.options.enabled) {
        const [r, c, a, i] = s;
        r !== null && !a && (tt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? i !== 0 && (this._iosDeferredAdjustment += i) : this._scrollToOffset(this.getScrollOffset(), {
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
      (t, n, s, r, c, a, i, f) => (this.prevLanes !== void 0 && this.prevLanes !== a && (this.lanesChangedFlag = !0), this.prevLanes = a, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: c,
        lanes: a,
        laneAssignmentMode: i,
        gap: f
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
        enabled: c,
        lanes: a,
        laneAssignmentMode: i,
        gap: f
      }, p) => {
        const h = this.itemSizeCache;
        if (!c)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const u of this.laneAssignments.keys())
            u >= t && this.laneAssignments.delete(u);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((u) => {
          this.itemSizeCache.set(u.key, u.size);
        }));
        const o = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), a === 1) {
          const u = t * 2;
          let m = this._flatMeasurements;
          if (!m || m.length < u) {
            const T = new Float64Array(u);
            m && o > 0 && T.set(m.subarray(0, o * 2)), m = T, this._flatMeasurements = m;
          }
          let E;
          if (o === 0)
            E = n + s;
          else {
            const T = o - 1;
            E = m[T * 2] + m[T * 2 + 1] + f;
          }
          for (let T = o; T < t; T++) {
            const V = r(T), O = h.get(V), N = typeof O == "number" ? O : this.options.estimateSize(T);
            m[T * 2] = E, m[T * 2 + 1] = N, E += N + f;
          }
          const k = Rn(t, m, r);
          return this.measurementsCache = k, k;
        }
        const x = this.measurementsCache.slice(0, o), w = new Array(a).fill(
          void 0
        ), I = new Float64Array(a);
        let g = 0;
        for (let u = 0; u < o; u++) {
          const m = x[u];
          m && (w[m.lane] === void 0 && g++, w[m.lane] = u, I[m.lane] = m.end);
        }
        for (let u = o; u < t; u++) {
          const m = r(u), E = this.laneAssignments.get(u);
          let k, T;
          const V = i === "estimate" || h.has(m);
          if (E !== void 0 && this.options.lanes > 1) {
            k = E;
            const R = w[k], F = R !== void 0 ? x[R] : void 0;
            T = F ? F.end + f : n + s;
          } else if (g === a) {
            let R = 0, F = I[0], se = w[0];
            for (let X = 1; X < a; X++) {
              const U = I[X];
              (U < F || U === F && w[X] < se) && (R = X, F = U, se = w[X]);
            }
            k = R, T = F + f, V && this.laneAssignments.set(u, k);
          } else
            k = u % this.options.lanes, T = n + s, V && this.laneAssignments.set(u, k);
          const O = h.get(m), N = typeof O == "number" ? O : this.options.estimateSize(u), $ = T + N;
          x[u] = {
            index: u,
            start: T,
            size: N,
            end: $,
            key: m,
            lane: k
          }, w[k] === void 0 && g++, w[k] = u, I[k] = $;
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
      (t, n, s, r) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = Xn(
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
      (t, n, s, r, c) => r === null || c === null ? [] : t({
        startIndex: r,
        endIndex: c,
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
        ), c = Math.max(0, s - r), a = Math.min(
          this.options.count - 1,
          s + r
        );
        return t >= c && t <= a;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((c, a) => {
          c.isConnected || (this.observer.unobserve(c), this.elementsCache.delete(a));
        });
        return;
      }
      const n = this.indexFromElement(t), s = this.options.getItemKey(n), r = this.elementsCache.get(s);
      r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.elementsCache.set(s, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var s, r;
      if (t < 0 || t >= this.options.count) return;
      let c, a, i;
      const f = this._flatMeasurements;
      if (this.options.lanes === 1 && f !== null)
        i = this.options.getItemKey(t), a = f[t * 2], c = f[t * 2 + 1];
      else {
        const o = this.measurementsCache[t];
        if (!o) return;
        i = o.key, a = o.start, c = o.size;
      }
      const p = this.itemSizeCache.get(i) ?? c, h = n - p;
      if (h !== 0) {
        const o = this.options.anchorTo === "end" && ((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, x = o ? this.getTotalSize() : 0, w = this.getScrollOffset() + this.scrollAdjustments, g = !this.itemSizeCache.has(i) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          a < w
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          a + p <= w && this.scrollDirection !== "backward"
        ), u = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: i,
            start: a,
            size: c,
            end: a + c,
            lane: 0
          },
          h,
          this
        ) : g);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(i, n), this.itemSizeCacheVersion++;
        let m = !1;
        o ? m = this.applyScrollAdjustment(
          this.getTotalSize() - x
        ) : u && (m = this.applyScrollAdjustment(h)), this.notify(m);
      }
    }, this.getVirtualItems = _e(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let r = 0, c = t.length; r < c; r++) {
          const a = t[r], i = n[a];
          s.push(i);
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
      const s = this._flatMeasurements, r = this.options.lanes === 1 && s != null, c = Xt(
        0,
        n.length - 1,
        r ? (a) => s[a * 2] : (a) => Tt(n[a]).start,
        t
      );
      return Tt(n[c]);
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
      const r = this.getSize(), c = this.getScrollOffset();
      n === "auto" && (n = t >= c + r ? "end" : "start"), n === "center" ? t += (s - r) / 2 : n === "end" && (t -= r);
      const a = this.getMaxScrollOffset();
      return Math.max(Math.min(a, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.getSize(), r = this.getScrollOffset(), c = this.measurementsCache[t];
      if (!c) return;
      if (n === "auto")
        if (c.end >= r + s - this.options.scrollPaddingEnd)
          n = "end";
        else if (c.start <= r + this.options.scrollPaddingStart)
          n = "start";
        else
          return [r, n];
      if (n === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const a = n === "end" ? c.end + this.options.scrollPaddingEnd : c.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(a, n, c.size),
        n
      ];
    }, this.scrollToOffset = (t, { align: n = "start", behavior: s = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const r = this.getOffsetForAlignment(t, n), c = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: s,
        startedAt: c,
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
      const [c, a] = r, i = this.now();
      this.scrollState = {
        index: t,
        align: a,
        behavior: s,
        startedAt: i,
        lastTargetOffset: c,
        stableFrames: 0
      }, this._scrollToOffset(c, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
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
        const r = n.length - 1, c = this._flatMeasurements;
        c != null ? s = c[r * 2] + c[r * 2 + 1] : s = ((t = n[r]) == null ? void 0 : t.end) ?? 0;
      } else {
        const r = Array(this.options.lanes).fill(null);
        let c = n.length - 1;
        for (; c >= 0 && r.some((a) => a === null); ) {
          const a = n[c];
          r[a.lane] === null && (r[a.lane] = a.end), c--;
        }
        s = Math.max(...r.filter((a) => a !== null));
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
    return l === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", l), tt() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += l, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, s = n ? n[0] : this.scrollState.lastTargetOffset, r = 1, c = s !== this.scrollState.lastTargetOffset;
    if (!c && Ln(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== s && this._scrollToOffset(s, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, c) {
      const a = this.getSize() || 600, i = Math.abs(s - this.getScrollOffset()), f = this.scrollState.behavior === "smooth" && i > a;
      this.scrollState.lastTargetOffset = s, f || (this.scrollState.behavior = "auto"), this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: f ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const Xt = (e, l, t, n) => {
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
function Kn(e, l, t) {
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
function Xn(e, l, t, n, s) {
  const r = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: r };
  if (n === 1 && s !== null) {
    const f = Kn(
      s,
      r,
      t
    );
    let p = f;
    const h = t + l;
    for (; p < r && s[p * 2] + s[p * 2 + 1] < h; )
      p++;
    return { startIndex: f, endIndex: p };
  }
  let a = Xt(0, r, (f) => e[f].start, t), i = a;
  if (n === 1)
    for (; i < r && e[i].end < t + l; )
      i++;
  else if (n > 1) {
    const f = Array(n).fill(0);
    for (; i < r && f.some((h) => h < t + l); ) {
      const h = e[i];
      f[h.lane] = h.end, i++;
    }
    const p = Array(n).fill(t + l);
    for (; a >= 0 && p.some((h) => h >= t); ) {
      const h = e[a];
      p[h.lane] = h.start, a--;
    }
    a = Math.max(0, a - a % n), i = Math.min(r, i + (n - 1 - i % n));
  }
  return { startIndex: a, endIndex: i };
}
const nt = typeof document < "u" ? zn : Cn;
function qn({
  useFlushSync: e = !0,
  directDomUpdates: l = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const s = On((p) => p + 1, 0)[1], r = Mn({
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
  const c = (p) => {
    const h = r.current;
    if (!h.enabled || !h.container) return;
    const o = p.getTotalSize();
    if (o !== h.lastSize) {
      h.lastSize = o;
      const x = p.options.horizontal ? "width" : "height";
      h.container.style[x] = `${o}px`;
    }
  }, a = (p) => {
    const h = r.current;
    if (!h.enabled || !h.container) return;
    c(p);
    const o = !!p.options.horizontal, x = h.mode === "transform", w = o ? "left" : "top", I = p.options.scrollMargin, g = p.getVirtualItems();
    for (const u of g) {
      const m = u.start - I, E = p.elementsCache.get(u.key);
      E && h.lastPositions.get(E) !== m && (h.lastPositions.set(E, m), x ? E.style.transform = o ? `translate3d(${m}px, 0, 0)` : `translate3d(0, ${m}px, 0)` : E.style[w] = `${m}px`);
    }
  }, i = {
    ...n,
    onChange: (p, h) => {
      var o;
      const x = r.current;
      let w = !0;
      if (x.enabled) {
        a(p);
        const I = p.range, g = x.prevRange;
        w = !g || g.isScrolling !== p.isScrolling || g.startIndex !== (I == null ? void 0 : I.startIndex) || g.endIndex !== (I == null ? void 0 : I.endIndex), w && (x.prevRange = I ? {
          startIndex: I.startIndex,
          endIndex: I.endIndex,
          isScrolling: p.isScrolling
        } : null);
      }
      w && (e && h ? An(s) : s()), (o = n.onChange) == null || o.call(n, p, h);
    }
  }, [f] = In(() => {
    const p = new Vn(i);
    return Object.assign(p, {
      containerRef: (h) => {
        const o = r.current;
        if (o.container = h, o.lastSize = null, h && o.enabled) {
          const x = p.getTotalSize();
          o.lastSize = x;
          const w = p.options.horizontal ? "width" : "height";
          h.style[w] = `${x}px`;
        }
      }
    });
  });
  return f.setOptions(i), nt(() => f._didMount(), []), nt(() => (c(f), f._willUpdate())), nt(() => {
    a(f);
  }), f;
}
function Gn(e) {
  return qn({
    observeElementRect: Nn,
    observeElementOffset: Bn,
    scrollToFn: Un,
    ...e
  });
}
const Qe = window.QwenPaw.host, z = Qe.React, { useRef: Jn } = z, { Tag: qt } = Qe.antd, { Text: Se } = Qe.antd.Typography, {
  CaretRightOutlined: Qn,
  RobotOutlined: Yn,
  SettingOutlined: Zn,
  ToolOutlined: es,
  UserOutlined: ts
} = Qe.antdIcons, ns = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, ss = {
  user: /* @__PURE__ */ z.createElement(ts, null),
  message: /* @__PURE__ */ z.createElement(Yn, null),
  tool: /* @__PURE__ */ z.createElement(es, null),
  system: /* @__PURE__ */ z.createElement(Zn, null)
}, ls = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
}, rs = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, Mt = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, os = 150, ct = 26, Gt = 34, It = 9, Ct = 30;
function is(e) {
  const l = ae(), t = ls[e];
  return t ? l === "zh-CN" ? t.zh : t.en : e;
}
function as(e) {
  const l = ae(), t = Mt[e] ?? Mt.unknown;
  return l === "zh-CN" ? t.zh : t.en;
}
function zt({
  record: e,
  selected: l,
  dimmed: t,
  multiRequest: n,
  onSelect: s
}) {
  const r = e.usage, c = r && (r.input_tokens || r.output_tokens) ? `${he(r.input_tokens)}→${he(
    r.output_tokens
  )}` : null;
  return /* @__PURE__ */ z.createElement(
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
        height: ct,
        cursor: "pointer",
        background: l ? "rgba(22,119,255,0.08)" : void 0,
        opacity: t ? 0.35 : 1
      }
    },
    /* @__PURE__ */ z.createElement(
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
      n && /* @__PURE__ */ z.createElement("span", { style: { opacity: 0.65, marginRight: 3 } }, "R", e.runIndex),
      "#",
      e.index
    ),
    /* @__PURE__ */ z.createElement(
      qt,
      {
        color: ns[e.kind] ?? "default",
        icon: ss[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      is(e.kind)
    ),
    /* @__PURE__ */ z.createElement(
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
      e.kind === "tool" && e.toolName ? /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(Se, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ z.createElement(Se, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ z.createElement(
        Se,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ z.createElement(
        Se,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      )
    ),
    /* @__PURE__ */ z.createElement(
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
      c ? /* @__PURE__ */ z.createElement("span", { style: { color: "#1677ff" } }, c) : null,
      c ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && de(e.timeSeconds)
    )
  );
}
function cs({
  turn: e,
  collapsed: l,
  selected: t,
  cellCount: n,
  onToggle: s,
  onSelect: r
}) {
  const c = ae();
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Gt }
    },
    /* @__PURE__ */ z.createElement(
      "span",
      {
        onClick: (a) => {
          a.stopPropagation(), r();
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
      /* @__PURE__ */ z.createElement(
        Qn,
        {
          onClick: (a) => {
            a.stopPropagation(), s();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: l ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ z.createElement(Se, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ z.createElement(Se, { type: "secondary", style: { fontSize: 11 } }, de(e.durationMs / 1e3)),
      /* @__PURE__ */ z.createElement(Se, { type: "secondary", style: { fontSize: 11 } }, n, " ", b(c, "events")),
      /* @__PURE__ */ z.createElement(
        qt,
        {
          color: rs[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        as(e.status)
      )
    )
  );
}
function us({
  turns: e,
  selectedIndex: l,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: s,
  searchMatchIndexes: r,
  onSelectedIndexChange: c,
  onSelectedTurnChange: a,
  onToggleTurn: i,
  callsCollapsed: f,
  hasOlderRecords: p,
  loadingOlder: h,
  onLoadOlder: o,
  initialRecord: x,
  emptyText: w
}) {
  const I = ae(), g = Jn(null), u = e.filter((O) => O.turn !== null), m = u.length > 1, E = z.useMemo(() => {
    var N;
    const O = [];
    p && O.push({
      key: "load-older",
      height: Ct,
      type: "load-older"
    }), x && (O.push({
      key: "initial",
      height: ct,
      type: "initial",
      record: x
    }), O.push({
      key: "initial-divider",
      height: It,
      type: "divider"
    }));
    for (const $ of u) {
      const R = $.turn;
      if (O.push({
        key: `turn-${R}`,
        height: Gt,
        type: "boundary",
        turn: $
      }), !n.has(R))
        for (const F of ((N = $.groups[0]) == null ? void 0 : N.cells) ?? [])
          f && F.kind === "tool" || O.push({
            key: `rec-${F.index}`,
            height: ct,
            type: "record",
            record: F
          });
    }
    return O;
  }, [
    u,
    n,
    f,
    p,
    x
  ]), k = z.useCallback(
    (O) => s !== null && !s.has(O.index) || r !== null && !r.has(O.index),
    [s, r]
  ), T = (O) => {
    var N;
    switch (O.type) {
      case "load-older":
        return /* @__PURE__ */ z.createElement("div", { style: { textAlign: "center", height: Ct } }, /* @__PURE__ */ z.createElement(
          "button",
          {
            type: "button",
            onClick: o,
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
          h ? "…" : `⋯ ${b(I, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ z.createElement(
          "div",
          {
            style: {
              height: It,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const $ = O.record;
        return /* @__PURE__ */ z.createElement(
          zt,
          {
            record: $,
            selected: l === $.index,
            dimmed: k($),
            multiRequest: m,
            onSelect: () => c($.index)
          }
        );
      }
      case "boundary": {
        const $ = O.turn, R = $.turn;
        return /* @__PURE__ */ z.createElement(
          cs,
          {
            turn: $,
            collapsed: n.has(R),
            selected: t === R,
            cellCount: ((N = $.groups[0]) == null ? void 0 : N.cells.length) ?? 0,
            onToggle: () => i(R),
            onSelect: () => a(R)
          }
        );
      }
      case "record":
      default: {
        const $ = O.record;
        return /* @__PURE__ */ z.createElement(
          zt,
          {
            record: $,
            selected: l === $.index,
            dimmed: k($),
            multiRequest: m,
            onSelect: () => c($.index)
          }
        );
      }
    }
  };
  if (E.length === 0)
    return /* @__PURE__ */ z.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          padding: "4px 12px 24px"
        }
      },
      /* @__PURE__ */ z.createElement(
        "div",
        {
          style: {
            padding: 24,
            textAlign: "center",
            color: "rgba(128,128,128,1)",
            fontSize: 12
          }
        },
        w ?? b(I, "noSessions")
      )
    );
  const V = E.length <= os ? /* @__PURE__ */ z.createElement("div", null, E.map((O) => T(O))) : /* @__PURE__ */ z.createElement(
    ds,
    {
      rows: E,
      scrollRef: g,
      renderRow: T
    }
  );
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      ref: g,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    V
  );
}
function ds({
  rows: e,
  scrollRef: l,
  renderRow: t
}) {
  const n = Gn({
    count: e.length,
    getScrollElement: () => l.current,
    estimateSize: (s) => e[s].height,
    overscan: 12
  });
  return /* @__PURE__ */ z.createElement(
    "div",
    {
      style: {
        height: n.getTotalSize(),
        position: "relative",
        width: "100%"
      }
    },
    n.getVirtualItems().map((s) => /* @__PURE__ */ z.createElement(
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
function st(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function ve(e, l = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function hs(e) {
  var I;
  const l = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), c = [];
  let a = "";
  const i = /* @__PURE__ */ new Map();
  let f = 0, p = 0;
  const h = (g) => g.groups[0].cells, o = (g, u) => {
    const m = r.get(g);
    m ? m.push(u) : r.set(g, [u]);
  }, x = (g, u) => {
    if (!g)
      if (a)
        g = a;
      else {
        c.push(u);
        return;
      }
    const m = t.get(g);
    if (m)
      u.runIndex = m.turn ?? 0, h(m).push(u);
    else if (a) {
      const E = t.get(a);
      E ? (u.runIndex = E.turn ?? 0, h(E).push(u)) : o(g, u);
    } else
      o(g, u);
  }, w = (g, u) => {
    const m = r.get(u);
    if (m) {
      for (const E of m) h(g).push(E);
      r.delete(u);
    }
  };
  for (const g of e) {
    const u = st(g);
    switch (g.type) {
      case "run/start": {
        p += 1;
        const m = {
          turn: p,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${p}`, cells: [] }]
        };
        t.set(g.run_id, m), l.push(m), a = g.run_id, w(m, g.run_id);
        for (const T of c.splice(0))
          T.runIndex = p, h(m).push(T);
        const E = Array.isArray(u.messages) ? u.messages : [], k = String(u.query ?? "");
        h(m).push({
          index: ++f,
          runIndex: p,
          runId: g.run_id,
          kind: "user",
          text: ve(k) || ve((I = E.at(-1)) == null ? void 0 : I.text),
          messages: E,
          timeSeconds: 0,
          startedAt: re(g.t),
          isError: !1,
          running: !1,
          model: void 0
        });
        break;
      }
      case "run/end": {
        const m = t.get(g.run_id);
        a === g.run_id && (a = "");
        const E = String(u.status ?? "unknown");
        if (m && (m.status = E, m.durationMs = typeof u.duration_ms == "number" ? u.duration_ms : null), E === "error" && u.error) {
          const k = m ?? {
            turn: null,
            status: E,
            durationMs: typeof u.duration_ms == "number" ? u.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          m || l.push(k), k.groups[0].cells.push({
            index: ++f,
            runIndex: p,
            runId: g.run_id,
            kind: "system",
            text: ve(String(u.error)) || "run failed",
            marker: String(u.error ?? "run failed"),
            timeSeconds: typeof u.duration_ms == "number" ? u.duration_ms / 1e3 : null,
            startedAt: re(g.t),
            isError: !0,
            running: !1,
            raw: [g]
          });
        }
        break;
      }
      case "agent/spawn": {
        const m = typeof u.child_session_id == "string" ? u.child_session_id : void 0, E = typeof u.child_agent_id == "string" ? u.child_agent_id : "?";
        x(g.run_id, {
          index: ++f,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: `🚀 ${E} → ${m ?? "?"}`,
          timeSeconds: 0,
          startedAt: re(g.t),
          isError: !1,
          running: !1,
          spawnSession: m,
          spawnAgent: E,
          raw: [g]
        });
        break;
      }
      case "message/inbound": {
        const m = Array.isArray(u.parts) ? u.parts : [], E = m.map((k) => String(k.type ?? "?").replace("Content", "")).join(",");
        x(g.run_id, {
          index: ++f,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: `📥 ${m.length} part(s)${E ? ` [${E}]` : ""}`,
          timeSeconds: 0,
          startedAt: re(g.t),
          isError: !1,
          running: !1,
          raw: [g]
        });
        break;
      }
      case "message/outbound": {
        const m = typeof u.text == "string" ? u.text : "";
        x(g.run_id, {
          index: ++f,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: `📤 ${ve(m) || "(empty)"}`,
          timeSeconds: 0,
          startedAt: re(g.t),
          isError: !1,
          running: !1,
          outputText: m || void 0,
          raw: [g]
        });
        break;
      }
      case "approval/asked": {
        x(g.run_id, {
          index: ++f,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: `🛡 approval asked: ${String(u.tool_name ?? "?")}`,
          timeSeconds: 0,
          startedAt: re(g.t),
          isError: !1,
          running: !1,
          raw: [g]
        });
        break;
      }
      case "approval/decided": {
        const m = String(u.decision ?? "?");
        x(g.run_id, {
          index: ++f,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: `🛡 approval ${m}${u.tool_name ? `: ${String(u.tool_name)}` : ""}`,
          timeSeconds: 0,
          startedAt: re(g.t),
          isError: m === "denied",
          running: !1,
          raw: [g]
        });
        break;
      }
      case "llm/header": {
        const m = typeof u.sha256 == "string" ? u.sha256 : "", E = typeof u.prev_sha256 == "string" ? u.prev_sha256 : void 0, k = u.reason === "changed" ? "changed" : "initial", T = typeof u.system_prompt == "string" ? u.system_prompt : "", V = Array.isArray(u.tools) ? u.tools : [], O = Array.isArray(u.schemas) ? u.schemas : void 0;
        x(g.run_id, {
          index: ++f,
          runIndex: 0,
          runId: g.run_id,
          kind: "system",
          text: k === "initial" ? `⚙ ${T ? `System Prompt (${T.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: re(g.t),
          isError: !1,
          running: !1,
          prompt: T,
          prevPrompt: i.get(E ?? ""),
          headerTools: V,
          headerReason: k,
          sha: m,
          prevSha: E,
          schemas: O,
          raw: [g]
        }), m && i.set(m, T);
        break;
      }
      case "llm/call": {
        const m = st(g), E = m.options && typeof m.options == "object" && Object.keys(m.options).length > 0 ? m.options : void 0, k = {
          index: ++f,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: re(g.t),
          isError: !1,
          running: !0,
          model: String(m.model ?? "unknown"),
          options: E
        };
        x(g.run_id, k);
        const T = n.get(g.run_id) ?? [];
        T.push({ cell: k, callData: m, call: g }), n.set(g.run_id, T);
        break;
      }
      case "llm/result": {
        const m = n.get(g.run_id), E = m == null ? void 0 : m.shift(), k = (E == null ? void 0 : E.callData) ?? {}, T = typeof u.duration_ms == "number" ? u.duration_ms : null, V = u.usage ?? void 0, O = u.timing, N = Array.isArray(u.tool_calls) ? u.tool_calls : void 0, F = {
          text: (u.error ? ve(String(u.error)) : ve(String(u.text ?? ""))) || (N && N.length > 0 ? `🛠 ${N.map((se) => se.name).join(", ")}` : ""),
          timeSeconds: T === null ? null : T / 1e3,
          isError: !!u.error,
          running: !1,
          outputText: u.text ? String(u.text) : void 0,
          thinkingText: u.thinking ? String(u.thinking) : void 0,
          usage: V,
          timing: O,
          toolCalls: N,
          note: u.note ? String(u.note) : void 0
        };
        E ? (Object.assign(E.cell, F), E.cell.model = String(
          u.model ?? k.model ?? E.cell.model
        ), E.cell.raw = [
          ...E.call ? [E.call] : [],
          g
        ]) : x(g.run_id, {
          index: ++f,
          runIndex: 0,
          runId: g.run_id,
          kind: "message",
          startedAt: re(g.t),
          model: String(u.model ?? k.model ?? "unknown"),
          ...F
        });
        break;
      }
      case "tool/call": {
        const m = st(g), E = {
          index: ++f,
          runIndex: 0,
          runId: g.run_id,
          kind: "tool",
          text: `${String(m.name ?? "?")}(${ve(
            String(m.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: re(g.t),
          isError: !1,
          running: !0,
          toolName: String(m.name ?? "?"),
          toolInput: m.input ? String(m.input) : void 0
        };
        x(g.run_id, E);
        const k = s.get(g.run_id) ?? [];
        k.push({ cell: E, callData: m, call: g }), s.set(g.run_id, k);
        break;
      }
      case "tool/result": {
        const m = s.get(g.run_id), E = typeof u.tool_call_id == "string" ? u.tool_call_id : null;
        let k;
        if (m) {
          const R = E ? m.findIndex(
            (F) => F.callData.tool_call_id === E
          ) : -1;
          R >= 0 ? k = m.splice(R, 1)[0] : k = m.shift();
        }
        const T = typeof u.duration_ms == "number" ? u.duration_ms : null, V = u.ok !== !1 && !u.error, O = u.output ? String(u.output) : void 0, N = O ? ` → ${ve(O, 60)}` : "", $ = {
          timeSeconds: T === null ? null : T / 1e3,
          isError: !V,
          running: !1,
          toolOutput: O,
          toolError: u.error ? String(u.error) : void 0,
          note: u.note ? String(u.note) : void 0
        };
        k ? (Object.assign(k.cell, $), k.cell.text = `${k.cell.text}${N}`, k.cell.raw = [
          ...k.call ? [k.call] : [],
          g
        ]) : x(g.run_id, {
          index: ++f,
          runIndex: 0,
          runId: g.run_id,
          kind: "tool",
          text: `?${N}`,
          startedAt: re(g.t),
          ...$
        });
        break;
      }
    }
  }
  for (const [g, u] of r) {
    const m = t.get(g);
    if (m) {
      for (const E of u) h(m).push(E);
      r.delete(g);
    }
  }
  return l;
}
function Ot(e) {
  return e.flatMap((l) => l.groups.flatMap((t) => t.cells));
}
function ms(e) {
  var c;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const l = e[0], t = ((c = l.groups[0]) == null ? void 0 : c.cells) ?? [], n = t.findIndex(
    (a) => a.kind === "system" && a.headerReason === "initial" && a.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const s = t[n], r = {
    ...l,
    groups: [
      {
        ...l.groups[0],
        cells: t.filter((a, i) => i !== n)
      }
    ]
  };
  return { initial: s, turns: [r, ...e.slice(1)] };
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
}, At = "agent-trace-timeline-styles", fs = `
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
let lt = !1;
function ps() {
  if (lt || typeof document > "u") return;
  if (document.getElementById(At)) {
    lt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = At, e.textContent = fs, document.head.appendChild(e), lt = !0;
}
function rt(e) {
  return hn(e);
}
function Jt(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function Rt(e) {
  return e != null && Number.isFinite(e);
}
function gs(e) {
  if (!Rt(e.startedAt)) return null;
  const l = Rt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + l };
}
function Qt(e, l = "sequence") {
  if (l !== "sequence")
    return ys(
      e,
      l === "duration" || l === "actual",
      l === "duration"
    );
  const t = [], n = [];
  for (const s of e) {
    const r = s.groups.flatMap((c) => c.cells);
    r.length !== 0 && (s.turn !== null && n.push({
      turn: s.turn,
      time: t.length
    }), t.push(
      ...r.map(
        (c, a) => ({
          start: t.length + a,
          end: t.length + a + 1,
          index: c.index,
          isError: c.isError === !0,
          kind: c.kind,
          label: c.text,
          lane: Jt(c.kind)
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
function ys(e, l, t) {
  const n = e.flatMap((p) => {
    const h = p.groups.flatMap(
      (o) => o.cells.flatMap((x) => {
        const w = gs(x);
        return w === null ? [] : [
          {
            ...w,
            index: x.index,
            isError: x.isError === !0,
            kind: x.kind,
            label: x.text,
            lane: Jt(x.kind)
          }
        ];
      })
    );
    return h.length === 0 ? [] : [{ turn: p.turn, rawSpans: h }];
  }), s = n.flatMap((p) => p.rawSpans);
  if (s.length === 0) return null;
  const r = /* @__PURE__ */ new Map();
  let c = 0, a = null;
  for (const p of [...s].sort(
    (h, o) => h.start - o.start || h.end - o.end
  ))
    t && a !== null && p.start > a && (c += p.start - a), r.set(p, c), a = a === null ? p.end : Math.max(a, p.end);
  const i = [], f = [];
  for (const p of n) {
    const h = p.rawSpans.map((o) => {
      const x = r.get(o) ?? 0;
      return {
        ...o,
        start: o.start - x,
        end: (l ? o.end : o.start) - x
      };
    });
    i.push(...h), p.turn !== null && f.push({
      turn: p.turn,
      time: Math.min(...h.map((o) => o.start))
    });
  }
  return {
    start: Math.min(...i.map((p) => p.start)),
    end: Math.max(...i.map((p) => p.end)),
    spans: i,
    turnBoundaries: f
  };
}
function vs(e, l, t = "sequence") {
  const n = Qt(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((s) => s.start <= l.end && s.end >= l.start).map((s) => s.index)
  );
}
ps();
const Ge = window.QwenPaw.host, L = Ge.React, { useEffect: Ue, useMemo: Lt, useRef: Ve, useState: Me } = L, { Tooltip: Es } = Ge.antd, ot = 3, Ss = 4, xs = 0.08, bs = 0.025, ws = 32, ks = 0.5;
function Ts(e) {
  const l = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, s = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, r = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...l === void 0 ? {} : { durationMs: l },
    ...t === void 0 ? {} : { startedAt: t },
    ...s === void 0 || r === void 0 ? {} : { ttftMs: s, decodingMs: r }
  };
}
function _s(e) {
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
function Ms(e, l) {
  const t = _s(e);
  if (l === void 0) return t;
  const n = l.durationMs === void 0 ? null : `Total ${rt(l.durationMs)}`, s = l.startedAt === void 0 ? null : l.durationMs === void 0 ? `Started ${$e(l.startedAt)}` : `${$e(l.startedAt)} → ${$e(
    l.startedAt + l.durationMs
  )}`, r = l.ttftMs === void 0 || l.decodingMs === void 0 ? null : `TTFT ${rt(
    l.ttftMs
  )} · Decoding ${rt(l.decodingMs)}`, c = [n, r].filter((a) => a !== null).join(" · ");
  return [t, s, c].filter((a) => a !== null && a !== "").join(`
`);
}
function ut(e, l) {
  return e <= l ? { start: e, end: l } : { start: l, end: e };
}
function it(e) {
  return Math.min(1, Math.max(0, e));
}
function Is(e, l, t, n) {
  const s = Math.min(n - t, Math.max(0, l)), r = Math.min(
    Math.max(e - s / 2, t),
    n - s
  );
  return { start: r, end: r + s };
}
function $t(e, l, t, n, s) {
  const r = ut(
    Math.min(s, Math.max(n, e.start)),
    Math.min(s, Math.max(n, e.end))
  );
  return {
    start: (r.start - l) / t,
    end: (r.end - l) / t
  };
}
function Yt({
  label: e,
  placement: l,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ L.createElement(
    Es,
    {
      title: /* @__PURE__ */ L.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: l,
      mouseEnterDelay: ks,
      ...n
    },
    t
  );
}
function Dt() {
  return /* @__PURE__ */ L.createElement("div", { className: te.labels, "aria-hidden": "true" }, /* @__PURE__ */ L.createElement("span", null, "Input"), /* @__PURE__ */ L.createElement("span", null, "Model"), /* @__PURE__ */ L.createElement("span", null, "Tools"));
}
function jt({
  loading: e,
  onHover: l,
  onLoad: t
}) {
  return /* @__PURE__ */ L.createElement(
    Yt,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ L.createElement(
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
const Cs = L.memo(function({
  turns: l,
  mode: t,
  range: n,
  hasEarlierRecords: s = !1,
  onLoadEarlier: r,
  selectedIndex: c = null,
  searchMatchIndexes: a = null,
  onRangeChange: i,
  onRecordSelect: f,
  onRecordFocus: p
}) {
  const h = typeof Ge.useTheme == "function" ? Ge.useTheme() : void 0, o = Lt(
    () => Qt(l, t),
    [t, l]
  ), x = Lt(
    () => new Map(
      l.flatMap(
        (y) => y.groups.flatMap(
          (M) => M.cells.map(
            (D) => [D.index, Ts(D)]
          )
        )
      )
    ),
    [l]
  ), w = Ve(null), I = Ve(null), g = Ve(null), u = Ve(null), [m, E] = Me(null), [k, T] = Me(null), [V, O] = Me(!1), [N, $] = Me(!1), [R, F] = Me(null), [se, X] = Me(!1);
  Ue(() => {
    o !== null && n !== null && (n.end < o.start || n.start > o.end) && i(null);
  }, [o, i, n]), Ue(() => {
    o !== null && (X(!1), F(
      (y) => y !== null && (y.end < o.start || y.start > o.end) ? null : y
    ));
  }, [o]), Ue(() => {
    if (o === null || c === null) return;
    const y = o.spans.find(
      (M) => M.index === c
    );
    y !== void 0 && (X(!0), F((M) => {
      if (M === null || y.end > M.start && y.start < M.end)
        return M;
      const D = Math.max(1, M.end - M.start), P = y.end <= M.start ? y.start : y.end - D, B = Math.min(
        Math.max(P, o.start),
        Math.max(o.start, o.end - D)
      );
      return B === M.start ? M : { start: B, end: B + D };
    }));
  }, [o, c]);
  const U = Math.max(1, ((o == null ? void 0 : o.end) ?? 0) - ((o == null ? void 0 : o.start) ?? 0)), Ee = Math.min(
    U,
    Math.max(1, ((R == null ? void 0 : R.end) ?? 0) - ((R == null ? void 0 : R.start) ?? 0))
  ), De = o === null || R === null ? (o == null ? void 0 : o.start) ?? 0 : Math.min(
    Math.max(R.start, o.start),
    o.end - Ee
  ), W = R === null ? U : Ee, q = R === null ? (o == null ? void 0 : o.start) ?? 0 : De, Ye = s && o !== null && q === o.start, je = r === void 0 || V ? void 0 : () => {
    O(!0), r().finally(() => {
      O(!1);
    });
  }, xe = o === null ? void 0 : {
    "--trajectory-domain-left": `${-(q - o.start) / W * 100}%`,
    "--trajectory-domain-width": `${U / W * 100}%`
  }, ye = o === null || n === null ? null : $t(
    n,
    q,
    W,
    o.start,
    o.end
  ), ce = (o === null || m === null ? null : $t(
    m,
    q,
    W,
    o.start,
    o.end
  )) ?? ye, me = m ?? n;
  if (Ue(() => {
    const y = g.current;
    if (y === null) return;
    const M = (D) => {
      D.preventDefault();
      const P = u.current;
      if (P === null || o === null) return;
      X(!1);
      const B = P.getBoundingClientRect(), j = it(
        (D.clientX - B.left) / Math.max(1, B.width)
      ), J = Math.min(
        U,
        Math.max(
          Math.min(
            t === "sequence" ? Ss : 20,
            U
          ),
          W * Math.exp(D.deltaY * 15e-4)
        )
      );
      if (J >= U * 0.999) {
        F(null);
        return;
      }
      const Z = q + j * W, ne = Math.min(
        Math.max(Z - j * J, o.start),
        o.end - J
      );
      F({ start: ne, end: ne + J });
    };
    return y.addEventListener("wheel", M, { passive: !1 }), () => {
      y.removeEventListener("wheel", M);
    };
  }, [W, q, U, t, o]), o === null)
    return /* @__PURE__ */ L.createElement(
      "section",
      {
        ref: g,
        className: te.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ L.createElement("div", { className: te.plot }, /* @__PURE__ */ L.createElement(Dt, null), /* @__PURE__ */ L.createElement("div", { className: te.track }, /* @__PURE__ */ L.createElement("span", { className: te.empty }, "No timing data"), s && /* @__PURE__ */ L.createElement(
        jt,
        {
          loading: V,
          onHover: () => {
            T(null);
          },
          onLoad: je
        }
      )))
    );
  const be = Math.min(
    W,
    U / o.spans.length
  ), ue = (y) => {
    const M = y.currentTarget.getBoundingClientRect();
    return it((y.clientX - M.left) / Math.max(1, M.width));
  }, ze = (y) => {
    var B;
    const M = y.target instanceof HTMLElement ? y.target : null, D = (B = M == null ? void 0 : M.closest("[data-timeline-record-index]")) == null ? void 0 : B.dataset.timelineRecordIndex;
    if (D === void 0) return null;
    const P = Number(D);
    return Number.isFinite(P) ? P : null;
  }, fe = (y) => {
    i(y);
  }, Fe = (y) => {
    if (y.button === 2) {
      I.current = {
        anchorClientX: y.clientX,
        anchorStart: q,
        moved: !1,
        pannable: R !== null,
        pointerId: y.pointerId
      }, R !== null && X(!1), $(!0), typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId);
      return;
    }
    if (y.button !== 0) return;
    const M = ue(y), D = q + M * W, P = ze(y);
    T({ fraction: M, recordIndex: P }), w.current = {
      pointerId: y.pointerId,
      anchorTime: D,
      anchorClientX: y.clientX,
      recordIndex: P
    }, typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId), E({ start: D, end: D });
  }, we = (y) => {
    const M = y.currentTarget.getBoundingClientRect(), D = ue(y);
    T({ fraction: D, recordIndex: ze(y) });
    const P = I.current;
    if (P !== null && P.pointerId === y.pointerId) {
      if (Math.abs(y.clientX - P.anchorClientX) >= ot && (P.moved = !0), !P.pannable) return;
      const Z = (y.clientX - P.anchorClientX) / Math.max(1, M.width), ne = Math.min(
        Math.max(P.anchorStart - Z * W, o.start),
        o.end - W
      );
      F({ start: ne, end: ne + W });
      return;
    }
    const B = w.current;
    if (B === null || B.pointerId !== y.pointerId) return;
    let j = q;
    if (R !== null) {
      const Z = y.clientX - M.left, ne = Math.min(
        ws,
        Math.max(1, M.width * xs)
      ), Q = Z < ne ? -1 : Z > M.width - ne ? 1 : 0;
      if (Q !== 0) {
        const v = Q < 0 ? ne - Z : Z - (M.width - ne), _ = it(v / ne), C = q + Q * W * bs * Math.max(0.2, _);
        j = Math.min(
          Math.max(C, o.start),
          o.end - W
        ), j !== q && (X(!1), F({
          start: j,
          end: j + W
        }));
      }
    }
    const J = j + D * W;
    E(ut(B.anchorTime, J));
  }, G = (y) => {
    const M = I.current;
    if (M !== null && M.pointerId === y.pointerId) {
      const Q = M.moved || Math.abs(y.clientX - M.anchorClientX) >= ot;
      I.current = null, $(!1), Q || i(null);
      return;
    }
    const D = w.current;
    if (D === null || D.pointerId !== y.pointerId) return;
    const P = ue(y), B = q + P * W, j = ut(D.anchorTime, B);
    T({ fraction: P, recordIndex: ze(y) }), w.current = null, E(null);
    const J = Math.abs(y.clientX - D.anchorClientX) < ot, Z = J && D.recordIndex !== null ? o.spans.find((Q) => Q.index === D.recordIndex) : void 0;
    if (Z !== void 0) {
      i(null), f == null || f(Z.index);
      return;
    }
    const ne = j.end - j.start < be ? Is(
      J ? j.start : (j.start + j.end) / 2,
      be,
      o.start,
      o.end
    ) : j;
    if (fe(ne), J) {
      const Q = j.start, v = o.spans.reduce((_, C) => {
        const ie = Q < _.start ? _.start - Q : Q > _.end ? Q - _.end : 0;
        return (Q < C.start ? C.start - Q : Q > C.end ? Q - C.end : 0) < ie ? C : _;
      });
      p == null || p(v.index);
    }
  }, ke = (y) => {
    y.key !== "Escape" || n === null || (y.preventDefault(), i(null));
  }, Pe = () => {
    w.current = null, I.current = null, E(null), T(null), $(!1);
  };
  return /* @__PURE__ */ L.createElement(
    "section",
    {
      ref: g,
      className: te.root,
      "data-theme": h || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ L.createElement("div", { className: te.plot }, /* @__PURE__ */ L.createElement(Dt, null), /* @__PURE__ */ L.createElement(
      "div",
      {
        ref: u,
        className: te.track,
        "data-panning": N || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: ke,
        onPointerDown: Fe,
        onPointerMove: we,
        onPointerUp: G,
        onPointerCancel: Pe,
        onPointerLeave: () => {
          w.current === null && I.current === null && T(null);
        },
        onDoubleClick: (y) => {
          y.preventDefault(), i(null);
        },
        onContextMenu: (y) => {
          y.preventDefault();
        }
      },
      Ye && /* @__PURE__ */ L.createElement(
        jt,
        {
          loading: V,
          onHover: () => {
            T(null);
          },
          onLoad: je
        }
      ),
      k !== null && k.recordIndex === null && m === null && /* @__PURE__ */ L.createElement(
        "div",
        {
          className: te.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${k.fraction * 100}%`
          }
        }
      ),
      ce !== null && /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(
        "div",
        {
          className: te.selection,
          "data-dragging": m === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ce.start * 100}%`,
            "--trajectory-selection-width": `${(ce.end - ce.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ L.createElement(
        "div",
        {
          className: te.selectionEdges,
          "data-dragging": m === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ce.start * 100}%`,
            "--trajectory-selection-width": `${(ce.end - ce.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ L.createElement(
        "div",
        {
          className: te.turnBoundaries,
          "data-animate-viewport": se || void 0,
          "aria-hidden": "true",
          style: xe
        },
        o.turnBoundaries.filter(
          (y) => y.time > o.start && y.time >= q && y.time <= q + W
        ).map((y) => /* @__PURE__ */ L.createElement(
          "span",
          {
            className: te.turnBoundary,
            "data-turn": y.turn,
            key: y.turn,
            style: {
              "--trajectory-turn-left": `${(y.time - o.start) / U * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ L.createElement(
        "div",
        {
          className: te.lanes,
          "data-animate-viewport": se || void 0,
          "data-timeline-domain": !0,
          style: xe
        },
        o.spans.filter(
          (y) => y.index === c || y.end >= q && y.start <= q + W
        ).map((y) => {
          const M = (y.start - o.start) / U, P = (y.end - y.start) / U * 100, B = x.get(y.index), j = B == null ? void 0 : B.ttftMs, J = B == null ? void 0 : B.decodingMs, Z = j === void 0 || J === void 0 || j + J <= 0 ? null : j / (j + J);
          return /* @__PURE__ */ L.createElement(
            Yt,
            {
              key: y.index,
              label: Ms(y.kind, B),
              placement: "bottom"
            },
            /* @__PURE__ */ L.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: te.span,
                "data-timeline-span": y.kind,
                "data-timeline-record-index": y.index,
                "data-assistant-timing": Z === null ? void 0 : "true",
                "data-error": y.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": y.index === c || void 0,
                "data-hovered": (k == null ? void 0 : k.recordIndex) === y.index || void 0,
                "data-search-match": a === null ? void 0 : a.has(y.index) ? "true" : "false",
                "data-selected": me === null ? void 0 : y.start <= me.end && y.end >= me.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${M * 100}%`,
                  "--trajectory-span-width": `${P}%`,
                  "--trajectory-span-gap": `min(${P * 0.08}%, 1px)`,
                  "--trajectory-span-lane": y.lane,
                  ...Z === null ? {} : {
                    "--trajectory-assistant-ttft": `${Z * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), mt = window.QwenPaw.host, oe = mt.React, { Button: zs, Input: Os, Segmented: As, Tooltip: Nt } = mt.antd, { MenuFoldOutlined: Rs, MenuUnfoldOutlined: Ls, ReloadOutlined: $s, SearchOutlined: Ds } = mt.antdIcons;
function js({
  mode: e,
  onModeChange: l,
  search: t,
  onSearchChange: n,
  onRefresh: s,
  modeOptions: r,
  allCollapsed: c,
  hasRequests: a,
  onToggleCollapseAll: i,
  callsCollapsed: f,
  onToggleCallsCollapsed: p
}) {
  const h = ae();
  return /* @__PURE__ */ oe.createElement(
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
    /* @__PURE__ */ oe.createElement(Nt, { title: b(h, "projectionHint") }, /* @__PURE__ */ oe.createElement(
      As,
      {
        size: "small",
        value: e,
        options: r,
        onChange: (o) => l(o)
      }
    )),
    /* @__PURE__ */ oe.createElement(
      Os,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ oe.createElement(Ds, null),
        placeholder: b(h, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (o) => n(o.target.value)
      }
    ),
    a && /* @__PURE__ */ oe.createElement(
      Nt,
      {
        title: c ? b(h, "expandAll") : b(h, "collapseAll")
      },
      /* @__PURE__ */ oe.createElement(
        zs,
        {
          size: "small",
          type: "text",
          icon: c ? /* @__PURE__ */ oe.createElement(Ls, null) : /* @__PURE__ */ oe.createElement(Rs, null),
          onClick: i
        }
      )
    ),
    /* @__PURE__ */ oe.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ oe.createElement(
      "a",
      {
        onClick: s,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ oe.createElement($s, null),
      " ",
      b(h, "refresh")
    ))
  );
}
const Ie = window.QwenPaw.host, S = Ie.React, { useCallback: at, useEffect: Ke, useMemo: le, useRef: Ns, useState: K } = S, {
  Button: Re,
  Empty: Xe,
  Input: Fs,
  Popconfirm: Ps,
  Popover: Bs,
  Space: Hs,
  Spin: dt,
  Switch: Ws,
  Tag: Ft,
  Tooltip: Pt,
  message: Le
} = Ie.antd, {
  CaretRightOutlined: Us,
  DeleteOutlined: Vs,
  DownloadOutlined: Ks,
  MenuFoldOutlined: Xs,
  MenuUnfoldOutlined: qs,
  SearchOutlined: Gs,
  SettingOutlined: Js
} = Ie.antdIcons, { Text: ge } = Ie.antd.Typography;
function Qs(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function Ys(e) {
  if (!e) return "-";
  const l = new Date(e);
  return Number.isNaN(l.getTime()) ? e : l.toLocaleString();
}
function Zs(e) {
  if (!e) return "-";
  const l = Date.parse(e);
  if (!Number.isFinite(l)) return e;
  const t = Date.now() - l;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(l).toLocaleString();
}
function Zt(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function el(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const tl = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function nl(e) {
  return e || "unknown";
}
function sl({
  groups: e,
  collapsedAgents: l,
  onToggleAgent: t,
  searching: n,
  selected: s,
  onSelect: r,
  locale: c
}) {
  const a = e.length > 1;
  return /* @__PURE__ */ S.createElement(S.Fragment, null, e.map(([i, f]) => {
    const p = a && !n && l.has(i);
    return /* @__PURE__ */ S.createElement("div", { key: i }, a && /* @__PURE__ */ S.createElement(
      "div",
      {
        onClick: () => t(i),
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
      /* @__PURE__ */ S.createElement(
        Us,
        {
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: p ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ S.createElement(ge, { strong: !0, style: { fontSize: 12 } }, i),
      /* @__PURE__ */ S.createElement(ge, { type: "secondary", style: { fontSize: 11 } }, f.length)
    ), !p && f.map((h) => {
      const o = h.session_id === s;
      return /* @__PURE__ */ S.createElement(
        "div",
        {
          key: h.session_id,
          onClick: () => r(h.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: o ? "rgba(22,119,255,0.10)" : "transparent",
            border: o ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ S.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ S.createElement(
            ge,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: {
                tooltip: `${h.title ? `${h.title}
` : ""}${h.session_id}`
              }
            },
            h.title || h.agent_id || Qs(h.session_id)
          ),
          a ? null : h.agent_id ? /* @__PURE__ */ S.createElement(
            Ft,
            {
              style: { marginInlineEnd: 0, fontSize: 10 },
              color: "geekblue"
            },
            h.agent_id
          ) : null,
          /* @__PURE__ */ S.createElement(
            Ft,
            {
              color: tl[h.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            nl(h.status)
          )
        ),
        /* @__PURE__ */ S.createElement(
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
          /* @__PURE__ */ S.createElement("span", null, h.channel || "-"),
          /* @__PURE__ */ S.createElement("span", null, h.runs, " ", b(c, "runs")),
          /* @__PURE__ */ S.createElement("span", null, Zt(h.total_tokens), " tok"),
          /* @__PURE__ */ S.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Ys(h.last_event_t)
            },
            Zs(h.last_event_t)
          )
        )
      );
    }));
  }));
}
function ll({
  config: e,
  onChange: l,
  children: t
}) {
  const n = ae(), s = (c, a, i) => /* @__PURE__ */ S.createElement(
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
    /* @__PURE__ */ S.createElement(ge, { style: { fontSize: 13 } }, c),
    /* @__PURE__ */ S.createElement(
      Ws,
      {
        size: "small",
        checked: !!a,
        onChange: (f) => l({ [i]: f })
      }
    )
  ), r = /* @__PURE__ */ S.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ S.createElement(ge, { strong: !0, style: { fontSize: 13 } }, b(n, "settings")), /* @__PURE__ */ S.createElement("div", { style: { marginTop: 8 } }, e ? [
    s(b(n, "enabled"), e.enabled, "enabled"),
    s(b(n, "captureLlm"), e.capture_llm, "capture_llm"),
    s(
      b(n, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    s(
      b(n, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ S.createElement(dt, { size: "small" })));
  return /* @__PURE__ */ S.createElement(Bs, { content: r, trigger: "click", placement: "bottomRight" }, t);
}
function rl() {
  const e = typeof Ie.useLocale == "function" ? Ie.useLocale() : void 0, l = le(() => Wt(e ?? null), [e]), [t, n] = K(null), [s, r] = K(!1), [c, a] = K(
    /* @__PURE__ */ new Set()
  ), [i, f] = K(!1), [p, h] = K(!1), [o, x] = K(null), [w, I] = K(null), [g, u] = K(!1), [m, E] = K(!1), [k, T] = K(""), [V, O] = K(""), [N, $] = K("sequence"), [R, F] = K(null), [se, X] = K(null), [U, Ee] = K(null), [De, W] = K(
    /* @__PURE__ */ new Set()
  ), [q, Ye] = K(!1), [je, xe] = K(null), [ye, Ne] = K(null), [ce, me] = K(null), be = Ns(null);
  be.current = o;
  const ue = at(async () => {
    try {
      const v = await xt({ limit: 100, offset: 0 });
      n(v.sessions), r(v.has_more), me(null);
    } catch (v) {
      me(String(v.message));
    }
  }, []), ze = at(async () => {
    h(!0);
    try {
      const v = await xt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((_) => {
        const C = _ ?? [];
        return [
          ...C,
          ...v.sessions.filter(
            (ie) => !C.some((Be) => Be.session_id === ie.session_id)
          )
        ];
      }), r(v.has_more);
    } catch (v) {
      me(String(v.message));
    } finally {
      h(!1);
    }
  }, [t]), fe = at(
    async (v, _) => {
      _ || u(!0);
      try {
        const C = await sn(v, {
          beforeSeq: _,
          limit: 200
        });
        me(null), I((ie) => _ && ie ? {
          ...C,
          events: [...C.events, ...ie.events]
        } : C);
      } catch (C) {
        me(String(C.message));
      } finally {
        _ || u(!1);
      }
    },
    []
  );
  Ke(() => {
    ue(), ln().then(xe).catch(() => xe(null));
    try {
      const v = new URLSearchParams(window.location.search).get("session");
      v && x(v);
    } catch {
    }
  }, [ue]), Ke(() => {
    const v = setInterval(() => {
      document.visibilityState === "visible" && ue();
    }, 15e3);
    return () => clearInterval(v);
  }, [ue]), Ke(() => {
    o ? (F(null), X(null), Ee(null), W(/* @__PURE__ */ new Set()), O(""), fe(o), nn(o).then(
      (v) => Ne({
        sessionId: o,
        inputTokens: v.input_tokens,
        outputTokens: v.output_tokens,
        totalTokens: v.total_tokens
      })
    ).catch(() => Ne(null))) : (I(null), Ne(null));
  }, [o, fe]);
  const Fe = le(
    () => w ? hs(w.events) : [],
    [w]
  ), { initial: we, turns: G } = le(
    () => ms(Fe),
    [Fe]
  ), ke = le(
    () => we ? [we, ...Ot(G)] : Ot(G),
    [we, G]
  ), Pe = le(
    () => G.some((v) => v.status === "running"),
    [G]
  );
  Ke(() => {
    if (!o || !Pe) return;
    const v = setInterval(() => {
      document.visibilityState === "visible" && be.current && fe(be.current);
    }, 5e3);
    return () => clearInterval(v);
  }, [o, Pe, fe]);
  const y = le(
    () => R === null ? null : vs(G, R, N),
    [R, G, N]
  ), M = le(() => {
    const v = V.trim().toLowerCase();
    return v ? new Set(
      ke.filter(
        (_) => [
          _.text,
          _.outputText,
          _.thinkingText,
          _.toolName,
          _.toolInput,
          _.toolOutput,
          _.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(v)
      ).map((_) => _.index)
    ) : null;
  }, [V, ke]), D = le(
    () => se === null ? null : ke.find((v) => v.index === se) ?? null,
    [ke, se]
  ), P = le(() => {
    var Et, St;
    if (U === null) return null;
    const v = G.find((H) => H.turn === U);
    if (!v) return null;
    const _ = ((Et = v.groups[0]) == null ? void 0 : Et.cells) ?? [], C = _.filter((H) => H.kind === "message"), ie = _.filter((H) => H.kind === "tool"), Be = [
      ...new Set(
        C.map((H) => H.model).filter((H) => !!H)
      )
    ];
    let ft = 0, pt = 0, gt = 0, yt = 0, He = null, Ze = 0;
    const vt = [];
    for (const H of _)
      H.usage && (ft += H.usage.input_tokens ?? 0, pt += H.usage.output_tokens ?? 0, gt += H.usage.cache_input_tokens ?? 0, yt += H.usage.cache_creation_input_tokens ?? 0), H.timing && (He = He === null ? H.timing.ttft_ms : Math.min(He, H.timing.ttft_ms), Ze = (Ze ?? 0) + H.timing.decode_ms), H.isError && vt.push(H.toolError ?? H.text ?? "error");
    const Te = _.find((H) => H.kind === "user"), en = (St = [...C].reverse().find((H) => H.options)) == null ? void 0 : St.options;
    return {
      turn: U,
      status: v.status,
      durationMs: v.durationMs,
      startedAt: (Te == null ? void 0 : Te.startedAt) ?? null,
      query: (Te == null ? void 0 : Te.text) ?? "",
      llmCalls: C.length,
      toolCalls: ie.length,
      models: Be,
      inputTokens: ft,
      outputTokens: pt,
      cacheReadTokens: gt,
      cacheWriteTokens: yt,
      ttftMs: He,
      decodeMs: Ze,
      errors: vt,
      options: en,
      sessionTotals: ye && ye.sessionId === o ? {
        inputTokens: ye.inputTokens,
        outputTokens: ye.outputTokens,
        totalTokens: ye.totalTokens
      } : void 0
    };
  }, [U, G, ye, o]), B = !!(w && w.events.length > 0 && w.events[0].seq > 1), j = le(
    () => (t == null ? void 0 : t.find((v) => v.session_id === o)) ?? null,
    [t, o]
  ), J = le(() => {
    if (!t) return [];
    const v = k.trim().toLowerCase();
    return v ? t.filter(
      (_) => [_.session_id, _.title ?? "", _.agent_id, _.channel].join(" ").toLowerCase().includes(v)
    ) : t;
  }, [t, k]), Z = le(() => {
    const v = /* @__PURE__ */ new Map();
    for (const _ of J) {
      const C = _.agent_id || "(unknown)", ie = v.get(C);
      ie ? ie.push(_) : v.set(C, [_]);
    }
    return [...v.entries()];
  }, [J]), ne = async (v) => {
    try {
      xe(await rn(v));
    } catch (_) {
      Le.error(String(_.message));
    }
  }, Q = le(
    () => [
      { label: b(l, "modeSequence"), value: "sequence" },
      { label: b(l, "modeDuration"), value: "duration" },
      { label: b(l, "modeTime"), value: "time" },
      { label: b(l, "modeActual"), value: "actual" }
    ],
    [l]
  );
  return /* @__PURE__ */ S.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, i ? /* @__PURE__ */ S.createElement(
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
    /* @__PURE__ */ S.createElement(Pt, { title: b(l, "expandSidebar"), placement: "right" }, /* @__PURE__ */ S.createElement(
      Re,
      {
        size: "small",
        type: "text",
        icon: /* @__PURE__ */ S.createElement(qs, null),
        onClick: () => f(!1)
      }
    ))
  ) : /* @__PURE__ */ S.createElement(
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
    /* @__PURE__ */ S.createElement(
      "div",
      {
        style: {
          padding: "12px 12px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      },
      /* @__PURE__ */ S.createElement(
        Fs,
        {
          allowClear: !0,
          size: "small",
          prefix: /* @__PURE__ */ S.createElement(Gs, null),
          placeholder: b(l, "searchPlaceholder"),
          value: k,
          style: { flex: 1, minWidth: 0 },
          onChange: (v) => T(v.target.value)
        }
      ),
      /* @__PURE__ */ S.createElement(Pt, { title: b(l, "collapseSidebar") }, /* @__PURE__ */ S.createElement(
        Re,
        {
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ S.createElement(Xs, null),
          onClick: () => f(!0)
        }
      ))
    ),
    /* @__PURE__ */ S.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ S.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ S.createElement(dt, null)) : J.length === 0 ? /* @__PURE__ */ S.createElement(
      Xe,
      {
        image: Xe.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ S.createElement("span", { style: { fontSize: 12 } }, b(l, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ S.createElement(
        ge,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        b(l, "noSessionsHint")
      )
    ) : /* @__PURE__ */ S.createElement(
      sl,
      {
        groups: Z,
        collapsedAgents: c,
        onToggleAgent: (v) => {
          a((_) => {
            const C = new Set(_);
            return C.has(v) ? C.delete(v) : C.add(v), C;
          });
        },
        searching: !!k.trim(),
        selected: o,
        onSelect: x,
        locale: l
      }
    ), t !== null && s && !k.trim() && /* @__PURE__ */ S.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ S.createElement(
      "a",
      {
        onClick: () => void ze(),
        style: { fontSize: 12 }
      },
      p ? "…" : `⋯ ${b(l, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ S.createElement(
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
    /* @__PURE__ */ S.createElement(
      "div",
      {
        style: {
          padding: "8px 12px",
          borderBottom: "1px solid rgba(128,128,128,0.15)",
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap"
        }
      },
      j ? /* @__PURE__ */ S.createElement(ge, { type: "secondary", style: { fontSize: 12 } }, `${j.runs} ${b(l, "runs")} · ${j.llm_calls} ${b(l, "llmCalls")} · ${j.tool_calls} ${b(
        l,
        "toolCalls"
      )} · ${Zt(j.total_tokens)} ${b(
        l,
        "tokens"
      )} · ${el(j.size_bytes)}`) : /* @__PURE__ */ S.createElement(ge, { type: "secondary", style: { fontSize: 13 } }, b(l, "selectSession")),
      /* @__PURE__ */ S.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ S.createElement(Hs, null, /* @__PURE__ */ S.createElement(ll, { config: je, onChange: ne }, /* @__PURE__ */ S.createElement(Re, { size: "small", icon: /* @__PURE__ */ S.createElement(Js, null) })), o && /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(
        Re,
        {
          size: "small",
          icon: /* @__PURE__ */ S.createElement(Ks, null),
          onClick: () => {
            on(o).then(() => Le.success(b(l, "exported"))).catch(
              (v) => Le.error(String(v.message))
            );
          }
        },
        b(l, "export")
      ), /* @__PURE__ */ S.createElement(
        Ps,
        {
          title: b(l, "deleteConfirm"),
          onConfirm: () => {
            an(o).then(() => {
              Le.success(b(l, "deleted")), x(null), ue();
            }).catch(
              (v) => Le.error(String(v.message))
            );
          }
        },
        /* @__PURE__ */ S.createElement(Re, { size: "small", danger: !0, icon: /* @__PURE__ */ S.createElement(Vs, null) }, b(l, "delete"))
      ))))
    ),
    ce && /* @__PURE__ */ S.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ S.createElement(ge, { type: "danger", style: { fontSize: 12 } }, `${b(l, "loadFailed")}: ${ce}`)),
    /* @__PURE__ */ S.createElement(
      js,
      {
        mode: N,
        onModeChange: $,
        search: V,
        onSearchChange: O,
        onRefresh: () => {
          ue(), o && fe(o);
        },
        modeOptions: Q,
        allCollapsed: G.length > 0 && G.every((v) => De.has(v.turn ?? -1)),
        hasRequests: G.some((v) => v.turn !== null),
        callsCollapsed: q,
        onToggleCallsCollapsed: () => Ye((v) => !v),
        onToggleCollapseAll: () => {
          W((v) => G.some(
            (C) => C.turn !== null && !v.has(C.turn)
          ) ? new Set(
            G.map((C) => C.turn).filter((C) => C !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ S.createElement(
      Cs,
      {
        turns: G,
        mode: N,
        range: R,
        hasEarlierRecords: B,
        onLoadEarlier: async () => {
          var v;
          return !w || w.events.length === 0 ? !1 : (await fe(o, (v = w.events[0]) == null ? void 0 : v.seq), !0);
        },
        selectedIndex: se,
        searchMatchIndexes: M,
        onRangeChange: F,
        onRecordSelect: X,
        onRecordFocus: X
      }
    ),
    g && !w ? /* @__PURE__ */ S.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ S.createElement(dt, null)) : w ? /* @__PURE__ */ S.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ S.createElement(
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
      /* @__PURE__ */ S.createElement(
        us,
        {
          turns: G,
          selectedIndex: se,
          selectedTurn: U,
          collapsedTurns: De,
          focusIndexes: y,
          searchMatchIndexes: M,
          onSelectedIndexChange: (v) => {
            X(v), Ee(null);
          },
          onSelectedTurnChange: (v) => {
            Ee(v), X(null);
          },
          callsCollapsed: q,
          onToggleTurn: (v) => {
            W((_) => {
              const C = new Set(_);
              return C.has(v) ? C.delete(v) : C.add(v), C;
            });
          },
          hasOlderRecords: B,
          loadingOlder: m,
          onLoadOlder: () => {
            var v;
            !w || w.events.length === 0 || (E(!0), fe(
              o,
              (v = w.events[0]) == null ? void 0 : v.seq
            ).finally(() => E(!1)));
          },
          emptyText: b(l, "noSessions"),
          initialRecord: we
        }
      )
    ), /* @__PURE__ */ S.createElement(
      _n,
      {
        record: D,
        request: P,
        onJumpSession: x,
        onSelectTurn: (v) => {
          Ee(v), X(null);
        }
      }
    )) : /* @__PURE__ */ S.createElement(
      Xe,
      {
        image: Xe.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: b(l, "selectSession")
      }
    )
  ));
}
var Bt, Ht;
(Ht = (Bt = window.QwenPaw).registerRoutes) == null || Ht.call(Bt, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: rl,
    label: b(ae(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);

const qt = {
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
    sessionTotal: "会话累计"
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
    sessionTotal: "session total"
  }
};
function jt(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function le() {
  try {
    return jt(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function b(e, l) {
  return qt[e][l];
}
const ze = window.QwenPaw.host;
async function Jt(e) {
  return ke(
    `/agent-trace/sessions/${encodeURIComponent(e)}/stats`
  );
}
async function Nt(e, l) {
  return ze.fetch ? ze.fetch(e, l) : fetch(ze.getApiUrl(e), {
    ...l,
    headers: {
      ...(l == null ? void 0 : l.headers) || {},
      ...ze.getApiToken() ? { Authorization: `Bearer ${ze.getApiToken()}` } : {}
    }
  });
}
async function ke(e, l) {
  const t = await Nt(e, l), n = await t.text();
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
async function gt(e) {
  const l = new URLSearchParams();
  return l.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && l.set("offset", String(e.offset)), ke(
    `/agent-trace/sessions?${l.toString()}`
  );
}
async function Gt(e, l) {
  const t = new URLSearchParams();
  l != null && l.beforeSeq && t.set("before_seq", String(l.beforeSeq)), t.set("limit", String(l == null ? void 0 : l.limit));
  const n = t.toString();
  return ke(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function Qt() {
  return ke("/agent-trace/config");
}
async function Yt(e) {
  return ke("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function Zt(e) {
  const l = await Nt(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!l.ok) throw new Error(`HTTP ${l.status}`);
  const t = await l.blob(), n = URL.createObjectURL(t), s = document.createElement("a");
  s.href = n, s.download = `${e}.jsonl`, s.click(), URL.revokeObjectURL(n);
}
async function en(e) {
  await ke(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
const yt = 3e3;
function vt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function tn(e, l) {
  const t = vt(e ?? ""), n = vt(l ?? "");
  if (t.length > yt || n.length > yt)
    return [
      ...t.map((p) => ({ kind: "del", text: p })),
      ...n.map((p) => ({ kind: "add", text: p }))
    ];
  const s = t.length, r = n.length, a = new Int32Array((s + 1) * (r + 1)), i = (p, c) => p * (r + 1) + c;
  for (let p = s - 1; p >= 0; p -= 1)
    for (let c = r - 1; c >= 0; c -= 1)
      a[i(p, c)] = t[p] === n[c] ? a[i(p + 1, c + 1)] + 1 : Math.max(a[i(p + 1, c)], a[i(p, c + 1)]);
  const o = [];
  let g = 0, m = 0;
  for (; g < s && m < r; )
    t[g] === n[m] ? (o.push({ kind: "same", text: t[g] }), g += 1, m += 1) : a[i(g + 1, m)] >= a[i(g, m + 1)] ? (o.push({ kind: "del", text: t[g] }), g += 1) : (o.push({ kind: "add", text: n[m] }), m += 1);
  for (; g < s; )
    o.push({ kind: "del", text: t[g] }), g += 1;
  for (; m < r; )
    o.push({ kind: "add", text: n[m] }), m += 1;
  return o;
}
function nn(e, l = 3) {
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
function sn(e) {
  let l = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? l += 1 : n.kind === "del" && (t += 1);
  return { added: l, removed: t };
}
function ln(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function ie(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const l = e * 1e3;
  return l < 1e3 ? `${Math.round(l)}ms` : l < 6e4 ? `${(l / 1e3).toFixed(1)}s` : `${Math.floor(l / 6e4)}m${Math.round(l % 6e4 / 1e3)}s`;
}
function ae(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function Ft(e, l) {
  return e === void 0 || !Number.isFinite(e) || l === null || l === void 0 || l <= 0 ? "-" : `${(e / l).toFixed(1)} tok/s`;
}
function Re(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ee(e) {
  if (!e) return null;
  const l = Date.parse(e);
  return Number.isFinite(l) ? l : null;
}
const Ue = window.QwenPaw.host, u = Ue.React, { useEffect: rn, useRef: on, useState: Pt } = u, { Button: an, Collapse: cn, Empty: Et, Tabs: dt } = Ue.antd, { Text: G } = Ue.antd.Typography, { CopyOutlined: un } = Ue.antdIcons, dn = 320, hn = 720, Ne = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, mn = 2e4;
function fn(e) {
  if (e.length > mn) return e;
  const l = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, s, r = 0;
  for (; (s = t.exec(e)) !== null; ) {
    s.index > n && l.push(e.slice(n, s.index));
    const a = s[0];
    let i = "rgba(128,128,128,1)";
    s[1] !== void 0 ? i = Ne.key : s[2] !== void 0 ? i = Ne.string : s[3] !== void 0 ? i = Ne.number : i = Ne.literal, l.push(
      /* @__PURE__ */ u.createElement("span", { key: r++, style: { color: i } }, a)
    ), n = s.index + a.length;
  }
  return n < e.length && l.push(e.slice(n)), l;
}
function ue({ value: e, json: l = !1 }) {
  const [t, n] = Pt(!1), s = typeof e == "string" ? e : JSON.stringify(e, null, 2);
  if (!s) return null;
  const r = async () => {
    try {
      await navigator.clipboard.writeText(s), n(!0), window.setTimeout(() => n(!1), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ u.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ u.createElement(
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
    t ? "✓" : /* @__PURE__ */ u.createElement(un, null)
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
    l ? fn(s) : s
  ));
}
function O({
  label: e,
  value: l,
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
    /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ u.createElement(
      G,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      l
    )
  );
}
function pn({ request: e }) {
  const l = le(), t = [
    {
      key: "summary",
      label: b(l, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ u.createElement(
        O,
        {
          label: b(l, "status"),
          value: e.status || "unknown"
        }
      ), /* @__PURE__ */ u.createElement(O, { label: "Query", value: gn(e.query) }), /* @__PURE__ */ u.createElement(
        O,
        {
          label: b(l, "duration"),
          value: ie(
            e.durationMs === null ? null : e.durationMs / 1e3
          )
        }
      ), /* @__PURE__ */ u.createElement(O, { label: "Started", value: Re(e.startedAt) }), /* @__PURE__ */ u.createElement(
        O,
        {
          label: b(l, "llmCalls"),
          value: String(e.llmCalls)
        }
      ), /* @__PURE__ */ u.createElement(
        O,
        {
          label: b(l, "toolCalls"),
          value: String(e.toolCalls)
        }
      ), e.models.length > 0 ? /* @__PURE__ */ u.createElement(
        O,
        {
          label: b(l, "model"),
          value: e.models.join(", ")
        }
      ) : null, e.errors.length > 0 ? /* @__PURE__ */ u.createElement(G, { type: "danger", style: { fontSize: 12 } }, e.errors.join("; ")) : null)
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "Input", value: ae(e.inputTokens) }), /* @__PURE__ */ u.createElement(O, { label: "Output", value: ae(e.outputTokens) }), /* @__PURE__ */ u.createElement(
        O,
        {
          label: "Total",
          value: ae(e.inputTokens + e.outputTokens)
        }
      ))
    }
  ];
  return (e.ttftMs !== null || e.decodeMs !== null) && t.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ u.createElement("div", null, e.ttftMs !== null ? /* @__PURE__ */ u.createElement(
      O,
      {
        label: "First TTFT",
        value: ie(e.ttftMs / 1e3)
      }
    ) : null, e.decodeMs !== null ? /* @__PURE__ */ u.createElement(
      O,
      {
        label: "Total decoding",
        value: ie(e.decodeMs / 1e3)
      }
    ) : null, /* @__PURE__ */ u.createElement(
      O,
      {
        label: b(l, "throughput"),
        value: Ft(
          e.outputTokens,
          e.decodeMs === null ? null : e.decodeMs / 1e3
        )
      }
    ))
  }), /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ u.createElement(dt, { size: "small", items: t, tabBarStyle: { marginBottom: 8 } }));
}
function gn(e, l = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function yn({
  oldText: e,
  newText: l
}) {
  const t = u.useMemo(
    () => tn(e, l),
    [e, l]
  ), n = u.useMemo(() => sn(t), [t]), s = u.useMemo(() => nn(t), [t]), r = le();
  return e === void 0 ? /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, b(r, "noPrevPrompt")) : /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ u.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ u.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ u.createElement(
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
          a.count
        );
      const o = a;
      return /* @__PURE__ */ u.createElement(
        "div",
        {
          key: i,
          style: {
            padding: "0 8px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            background: o.kind === "add" ? "rgba(82,196,26,0.12)" : o.kind === "del" ? "rgba(255,77,79,0.10)" : void 0,
            color: o.kind === "del" ? "rgba(255,77,79,0.9)" : void 0
          }
        },
        o.kind === "add" ? "+ " : o.kind === "del" ? "− " : "  ",
        o.text || " "
      );
    })
  ));
}
function vn({ record: e }) {
  var r;
  const l = le(), t = e.headerTools ?? [], n = e.headerReason === "changed", s = [
    {
      key: "summary",
      label: b(l, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "#", value: String(e.index) }), /* @__PURE__ */ u.createElement(
        O,
        {
          label: b(l, "status"),
          value: n ? b(l, "promptChanged") : b(l, "promptInitial")
        }
      ), /* @__PURE__ */ u.createElement(O, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ u.createElement(O, { label: "Chars", value: String(((r = e.prompt) == null ? void 0 : r.length) ?? 0) }), /* @__PURE__ */ u.createElement(O, { label: "Tools", value: String(t.length) }))
    },
    ...n ? [
      {
        key: "diff",
        label: "Diff",
        children: /* @__PURE__ */ u.createElement(
          yn,
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
      children: /* @__PURE__ */ u.createElement(ue, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ u.createElement("div", { style: { paddingTop: 4 } }, t.map((a) => /* @__PURE__ */ u.createElement(G, { key: a, code: !0, style: { fontSize: 11 } }, a)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ u.createElement(
          cn,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((a, i) => {
              var g;
              const o = typeof a.name == "string" && a.name || typeof ((g = a.function) == null ? void 0 : g.name) == "string" && a.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ u.createElement(G, { code: !0, style: { fontSize: 11 } }, o),
                children: /* @__PURE__ */ u.createElement(ue, { value: a })
              };
            })
          }
        ) : null)
      }
    ] : [],
    {
      key: "raw",
      label: "Raw",
      children: /* @__PURE__ */ u.createElement(ue, { value: e.raw })
    }
  ];
  return /* @__PURE__ */ u.createElement(dt, { size: "small", items: s, tabBarStyle: { marginBottom: 8 } });
}
function Ye({ dragRef: e, width: l }) {
  return /* @__PURE__ */ u.createElement(
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
function En({
  record: e,
  request: l,
  onJumpSession: t,
  onSelectTurn: n
}) {
  const s = le(), [r, a] = Pt(400), i = on(null);
  if (rn(() => {
    const c = (d) => {
      const h = i.current;
      if (h === null) return;
      const y = h.anchorX - d.clientX;
      a(
        Math.min(hn, Math.max(dn, h.anchorWidth + y))
      );
    }, x = () => {
      i.current = null;
    };
    return window.addEventListener("pointermove", c), window.addEventListener("pointerup", x), () => {
      window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", x);
    };
  }, []), e === null && l === null)
    return /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(
        Et,
        {
          image: Et.PRESENTED_IMAGE_SIMPLE,
          description: b(s, "selectRecord")
        }
      )
    );
  if (e === null && l !== null)
    return /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(Ye, { dragRef: i, width: r }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(pn, { request: l }))
    );
  const o = e;
  if (o.kind === "system" && o.prompt !== void 0)
    return /* @__PURE__ */ u.createElement(
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
      /* @__PURE__ */ u.createElement(Ye, { dragRef: i, width: r }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(vn, { record: o }))
    );
  const g = o.usage, m = o.timing, p = [];
  return p.push({
    key: "summary",
    label: b(s, "summary"),
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "#", value: String(o.index) }), /* @__PURE__ */ u.createElement(O, { label: "Kind", value: o.kind }), o.runIndex > 0 && n ? /* @__PURE__ */ u.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ u.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => n(o.runIndex)
      },
      "Request #",
      o.runIndex,
      " →"
    )) : null, /* @__PURE__ */ u.createElement(
      O,
      {
        label: b(s, "status"),
        value: o.running ? b(s, "running") : o.isError ? b(s, "error") : b(s, "success"),
        danger: o.isError
      }
    ), o.model ? /* @__PURE__ */ u.createElement(O, { label: b(s, "model"), value: o.model }) : null, o.toolName ? /* @__PURE__ */ u.createElement(O, { label: "Tool", value: o.toolName }) : null, /* @__PURE__ */ u.createElement(
      O,
      {
        label: b(s, "duration"),
        value: ie(o.timeSeconds)
      }
    ), o.note ? /* @__PURE__ */ u.createElement(G, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.spawnSession ? /* @__PURE__ */ u.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ u.createElement(
      O,
      {
        label: b(s, "spawnedAgent"),
        value: o.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ u.createElement(
      an,
      {
        size: "small",
        onClick: () => o.spawnSession && t(o.spawnSession),
        style: { marginTop: 4 }
      },
      b(s, "openChildSession")
    ) : null) : null)
  }), o.kind === "tool" ? (o.toolInput && p.push({
    key: "payload",
    label: b(s, "input"),
    children: /* @__PURE__ */ u.createElement(ue, { value: o.toolInput, json: !0 })
  }), (o.toolOutput || o.toolError) && p.push({
    key: "result",
    label: b(s, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolError ? /* @__PURE__ */ u.createElement(G, { type: "danger", style: { fontSize: 12 } }, o.toolError) : null, o.toolOutput ? /* @__PURE__ */ u.createElement(ue, { value: o.toolOutput }) : null)
  })) : (o.outputText || o.thinkingText || o.messages || o.marker || o.toolCalls && o.toolCalls.length > 0) && p.push({
    key: "raw",
    label: b(s, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, o.marker ? /* @__PURE__ */ u.createElement(ue, { value: o.marker }) : null, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, `${b(s, "toolCall")} (${o.toolCalls.length})`), o.toolCalls.map((c, x) => /* @__PURE__ */ u.createElement("div", { key: c.id || x, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ u.createElement(G, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", c.name), /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 11 } }, c.id)))) : null, o.note ? /* @__PURE__ */ u.createElement(G, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.messages && o.messages.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, `${b(s, "query")} (${o.messages.length})`), o.messages.map((c, x) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: x,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ u.createElement(G, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, c.role),
      /* @__PURE__ */ u.createElement(
        G,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        c.text
      )
    ))) : null, o.thinkingText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, b(s, "thinking")), /* @__PURE__ */ u.createElement(ue, { value: o.thinkingText })) : null, o.outputText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, b(s, "output")), /* @__PURE__ */ u.createElement(ue, { value: o.outputText })) : null)
  }), (o.startedAt !== null || g || m) && p.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "Started", value: Re(o.startedAt) }), /* @__PURE__ */ u.createElement(O, { label: "Total", value: ie(o.timeSeconds) }), m ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
      O,
      {
        label: "TTFT",
        value: ie(m.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      O,
      {
        label: "Decoding",
        value: ie(m.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      O,
      {
        label: b(s, "throughput"),
        value: Ft(
          g == null ? void 0 : g.output_tokens,
          m.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, b(s, "noTiming")))
  }), g && p.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "Input", value: ae(g.input_tokens) }), /* @__PURE__ */ u.createElement(O, { label: "Output", value: ae(g.output_tokens) }), g.cache_creation_input_tokens ? /* @__PURE__ */ u.createElement(
      O,
      {
        label: "Cache write",
        value: ae(g.cache_creation_input_tokens)
      }
    ) : null, g.cache_input_tokens ? /* @__PURE__ */ u.createElement(
      O,
      {
        label: "Cache read",
        value: ae(g.cache_input_tokens)
      }
    ) : null, g.total_tokens !== void 0 ? /* @__PURE__ */ u.createElement(O, { label: "Total", value: ae(g.total_tokens) }) : null, g.time !== void 0 ? /* @__PURE__ */ u.createElement(O, { label: "API time", value: ie(g.time) }) : null)
  }), p.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ u.createElement(ue, { value: o.raw })
  }), /* @__PURE__ */ u.createElement(
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
    /* @__PURE__ */ u.createElement(Ye, { dragRef: i, width: r }),
    /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(dt, { size: "small", items: p, tabBarStyle: { marginBottom: 8 } }))
  );
}
const Q = window.QwenPaw.host.React, Sn = Q.useRef, bn = Q.useState;
Q.useCallback;
Q.useMemo;
const xn = Q.useEffect, wn = Q.useLayoutEffect, kn = Q.useReducer;
Q.createContext;
Q.useContext;
Q.createElement;
Q.cloneElement;
Q.isValidElement;
Q.memo;
Q.forwardRef;
Q.Fragment;
Q.StrictMode;
Q.version;
function Tn(e) {
  return e ? e() : void 0;
}
function _n(e, l, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(s, r, a) {
      if (typeof r == "string") {
        const i = r.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const o = +r;
          if (Number.isInteger(o) && o >= 0 && o < e) {
            let g = s[o];
            if (!g) {
              const m = l[o * 2];
              g = s[o] = {
                index: o,
                key: t(o),
                start: m,
                size: l[o * 2 + 1],
                end: m + l[o * 2 + 1],
                lane: 0
              };
            }
            return g;
          }
        }
        if (r === "length") return e;
      }
      return Reflect.get(s, r, a);
    }
  });
}
function be(e, l, t) {
  let n = t.initialDeps ?? [], s, r = !0;
  function a() {
    var i;
    const o = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let g = 0;
    o && (g = Date.now());
    const m = e();
    if (!(m.length !== n.length || m.some((x, d) => n[d] !== x)))
      return s;
    n = m;
    let c = 0;
    if (o && (c = Date.now()), s = l(...m), o) {
      const x = Math.round((Date.now() - g) * 100) / 100, d = Math.round((Date.now() - c) * 100) / 100, h = d / 16, y = (E, S) => {
        for (E = String(E); E.length < S; )
          E = " " + E;
        return E;
      };
      console.info(
        `%c⏱ ${y(d, 5)} /${y(x, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * h, 120)
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
function St(e, l) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Mn = (e, l) => Math.abs(e - l) < 1.01, In = (e, l, t) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => l.apply(this, s), t);
  };
};
let Oe;
const Ze = () => {
  if (Oe !== void 0) return Oe;
  if (typeof navigator > "u") return Oe = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Oe = !0;
  const e = navigator.maxTouchPoints;
  return Oe = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, bt = (e) => {
  const { offsetWidth: l, offsetHeight: t } = e;
  return { width: l, height: t };
}, Cn = (e) => e, zn = (e) => {
  const l = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - l + 1, s = new Array(n);
  for (let r = 0; r < n; r++)
    s[r] = l + r;
  return s;
}, On = (e, l) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (a) => {
    const { width: i, height: o } = a;
    l({ width: Math.round(i), height: Math.round(o) });
  };
  if (s(bt(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((a) => {
    const i = () => {
      const o = a[0];
      if (o != null && o.borderBoxSize) {
        const g = o.borderBoxSize[0];
        if (g) {
          s({ width: g.inlineSize, height: g.blockSize });
          return;
        }
      }
      s(bt(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, We = {
  passive: !0
}, An = typeof window > "u" ? !0 : "onscrollend" in window, Rn = (e, l, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const r = e.options.useScrollendEvent && An;
  let a = 0;
  const i = r ? null : In(
    s,
    () => l(a, !1),
    e.options.isScrollingResetDelay
  ), o = (p) => () => {
    a = t(n), i == null || i(), l(a, p);
  }, g = o(!0), m = o(!1);
  return n.addEventListener("scroll", g, We), r && n.addEventListener("scrollend", m, We), () => {
    n.removeEventListener("scroll", g), r && n.removeEventListener("scrollend", m);
  };
}, Ln = (e, l) => Rn(e, l, (t) => {
  const { horizontal: n, isRtl: s } = e.options;
  return n ? t.scrollLeft * (s && -1 || 1) : t.scrollTop;
}), $n = (e, l, t) => {
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
}, Dn = (e, {
  adjustments: l = 0,
  behavior: t
}, n) => {
  var s, r;
  (r = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || r.call(s, {
    [n.options.horizontal ? "left" : "top"]: e + l,
    behavior: t
  });
}, jn = Dn;
class Nn {
  constructor(l) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, s;
      return ((s = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : s.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((r) => {
          const a = () => {
            const i = r.target, o = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [g, m] of this.elementsCache)
                if (m === i) {
                  this.elementsCache.delete(g);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(o) && this.resizeItem(
              o,
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
        getItemKey: Cn,
        rangeExtractor: zn,
        onChange: () => {
        },
        measureElement: $n,
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
        x !== void 0 && (r[c] = x);
      }
      const a = this.options;
      let i = null, o = null, g = !1;
      if (a !== void 0 && a.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const c = a.count, x = r.count, d = this.getMeasurements(), h = c > 0 ? ((n = d[0]) == null ? void 0 : n.key) ?? a.getItemKey(0) : null, y = c > 0 ? ((s = d[c - 1]) == null ? void 0 : s.key) ?? a.getItemKey(c - 1) : null;
        if (x !== c || c > 0 && x > 0 && (r.getItemKey(0) !== h || r.getItemKey(x - 1) !== y)) {
          g = !0;
          const k = c > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? d[0] : null;
          k && (i = [k.key, this.getScrollOffset() - k.start]);
          const z = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          z && x > c && this.isAtEnd(a.scrollEndThreshold) && (c === 0 || r.getItemKey(x - 1) !== y) && (o = z);
        }
      }
      this.options = r, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let m = !1, p = 0;
      if (i && this.scrollOffset !== null) {
        const [c, x] = i, d = this.getMeasurements(), { count: h, getItemKey: y } = this.options;
        let E = 0;
        for (; E < h && y(E) !== c; )
          E++;
        if (E < h) {
          const S = d[E];
          if (S) {
            const k = Math.max(0, S.start + x);
            k !== this.scrollOffset && (p = k - this.scrollOffset, this.scrollOffset = k, m = !0);
          }
        }
      }
      (m || o) && (this.pendingScrollAnchor = [
        m ? i[0] : null,
        m ? i[1] : 0,
        o,
        p
      ]);
    }, this.notify = (t) => {
      var n, s;
      (s = (n = this.options).onChange) == null || s.call(n, this, t);
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
            this._iosTouching = !1, !(!Ze() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            a,
            We
          ), r.addEventListener(
            "touchend",
            i,
            We
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
        const [r, a, i, o] = s;
        r !== null && !i && (Ze() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? o !== 0 && (this._iosDeferredAdjustment += o) : this._scrollToOffset(this.getScrollOffset(), {
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
      (t, n, s, r, a, i, o, g) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: a,
        lanes: i,
        laneAssignmentMode: o,
        gap: g
      }),
      {
        key: !1
      }
    ), this.getMeasurements = be(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: a,
        lanes: i,
        laneAssignmentMode: o,
        gap: g
      }, m) => {
        const p = this.itemSizeCache;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const E of this.laneAssignments.keys())
            E >= t && this.laneAssignments.delete(E);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((E) => {
          this.itemSizeCache.set(E.key, E.size);
        }));
        const c = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const E = t * 2;
          let S = this._flatMeasurements;
          if (!S || S.length < E) {
            const C = new Float64Array(E);
            S && c > 0 && C.set(S.subarray(0, c * 2)), S = C, this._flatMeasurements = S;
          }
          let k;
          if (c === 0)
            k = n + s;
          else {
            const C = c - 1;
            k = S[C * 2] + S[C * 2 + 1] + g;
          }
          for (let C = c; C < t; C++) {
            const P = r(C), L = p.get(P), B = typeof L == "number" ? L : this.options.estimateSize(C);
            S[C * 2] = k, S[C * 2 + 1] = B, k += B + g;
          }
          const z = _n(t, S, r);
          return this.measurementsCache = z, z;
        }
        const x = this.measurementsCache.slice(0, c), d = new Array(i).fill(
          void 0
        ), h = new Float64Array(i);
        let y = 0;
        for (let E = 0; E < c; E++) {
          const S = x[E];
          S && (d[S.lane] === void 0 && y++, d[S.lane] = E, h[S.lane] = S.end);
        }
        for (let E = c; E < t; E++) {
          const S = r(E), k = this.laneAssignments.get(E);
          let z, C;
          const P = o === "estimate" || p.has(S);
          if (k !== void 0 && this.options.lanes > 1) {
            z = k;
            const R = d[z], H = R !== void 0 ? x[R] : void 0;
            C = H ? H.end + g : n + s;
          } else if (y === i) {
            let R = 0, H = h[0], de = d[0];
            for (let Y = 1; Y < i; Y++) {
              const q = h[Y];
              (q < H || q === H && d[Y] < de) && (R = Y, H = q, de = d[Y]);
            }
            z = R, C = H + g, P && this.laneAssignments.set(E, z);
          } else
            z = E % this.options.lanes, C = n + s, P && this.laneAssignments.set(E, z);
          const L = p.get(S), B = typeof L == "number" ? L : this.options.estimateSize(E), A = C + B;
          x[E] = {
            index: E,
            start: C,
            size: B,
            end: A,
            key: S,
            lane: z
          }, d[z] === void 0 && y++, d[z] = E, h[z] = A;
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
      (t, n, s, r) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = Pn(
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
    ), this.getVirtualIndexes = be(
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
      let a, i, o;
      const g = this._flatMeasurements;
      if (this.options.lanes === 1 && g !== null)
        o = this.options.getItemKey(t), i = g[t * 2], a = g[t * 2 + 1];
      else {
        const c = this.measurementsCache[t];
        if (!c) return;
        o = c.key, i = c.start, a = c.size;
      }
      const m = this.itemSizeCache.get(o) ?? a, p = n - m;
      if (p !== 0) {
        const c = this.options.anchorTo === "end" && ((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, x = c ? this.getTotalSize() : 0, d = this.getScrollOffset() + this.scrollAdjustments, y = !this.itemSizeCache.has(o) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          i < d
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          i + m <= d && this.scrollDirection !== "backward"
        ), E = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: o,
            start: i,
            size: a,
            end: i + a,
            lane: 0
          },
          p,
          this
        ) : y);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(o, n), this.itemSizeCacheVersion++;
        let S = !1;
        c ? S = this.applyScrollAdjustment(
          this.getTotalSize() - x
        ) : E && (S = this.applyScrollAdjustment(p)), this.notify(S);
      }
    }, this.getVirtualItems = be(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let r = 0, a = t.length; r < a; r++) {
          const i = t[r], o = n[i];
          s.push(o);
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
      const s = this._flatMeasurements, r = this.options.lanes === 1 && s != null, a = Bt(
        0,
        n.length - 1,
        r ? (i) => s[i * 2] : (i) => St(n[i]).start,
        t
      );
      return St(n[a]);
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
      const [a, i] = r, o = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: s,
        startedAt: o,
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
    return l === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", l), Ze() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += l, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    if (!a && Mn(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== s && this._scrollToOffset(s, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, a) {
      const i = this.getSize() || 600, o = Math.abs(s - this.getScrollOffset()), g = this.scrollState.behavior === "smooth" && o > i;
      this.scrollState.lastTargetOffset = s, g || (this.scrollState.behavior = "auto"), this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: g ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const Bt = (e, l, t, n) => {
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
function Fn(e, l, t) {
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
function Pn(e, l, t, n, s) {
  const r = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: r };
  if (n === 1 && s !== null) {
    const g = Fn(
      s,
      r,
      t
    );
    let m = g;
    const p = t + l;
    for (; m < r && s[m * 2] + s[m * 2 + 1] < p; )
      m++;
    return { startIndex: g, endIndex: m };
  }
  let i = Bt(0, r, (g) => e[g].start, t), o = i;
  if (n === 1)
    for (; o < r && e[o].end < t + l; )
      o++;
  else if (n > 1) {
    const g = Array(n).fill(0);
    for (; o < r && g.some((p) => p < t + l); ) {
      const p = e[o];
      g[p.lane] = p.end, o++;
    }
    const m = Array(n).fill(t + l);
    for (; i >= 0 && m.some((p) => p >= t); ) {
      const p = e[i];
      m[p.lane] = p.start, i--;
    }
    i = Math.max(0, i - i % n), o = Math.min(r, o + (n - 1 - o % n));
  }
  return { startIndex: i, endIndex: o };
}
const et = typeof document < "u" ? wn : xn;
function Bn({
  useFlushSync: e = !0,
  directDomUpdates: l = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const s = kn((m) => m + 1, 0)[1], r = Sn({
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
  const a = (m) => {
    const p = r.current;
    if (!p.enabled || !p.container) return;
    const c = m.getTotalSize();
    if (c !== p.lastSize) {
      p.lastSize = c;
      const x = m.options.horizontal ? "width" : "height";
      p.container.style[x] = `${c}px`;
    }
  }, i = (m) => {
    const p = r.current;
    if (!p.enabled || !p.container) return;
    a(m);
    const c = !!m.options.horizontal, x = p.mode === "transform", d = c ? "left" : "top", h = m.options.scrollMargin, y = m.getVirtualItems();
    for (const E of y) {
      const S = E.start - h, k = m.elementsCache.get(E.key);
      k && p.lastPositions.get(k) !== S && (p.lastPositions.set(k, S), x ? k.style.transform = c ? `translate3d(${S}px, 0, 0)` : `translate3d(0, ${S}px, 0)` : k.style[d] = `${S}px`);
    }
  }, o = {
    ...n,
    onChange: (m, p) => {
      var c;
      const x = r.current;
      let d = !0;
      if (x.enabled) {
        i(m);
        const h = m.range, y = x.prevRange;
        d = !y || y.isScrolling !== m.isScrolling || y.startIndex !== (h == null ? void 0 : h.startIndex) || y.endIndex !== (h == null ? void 0 : h.endIndex), d && (x.prevRange = h ? {
          startIndex: h.startIndex,
          endIndex: h.endIndex,
          isScrolling: m.isScrolling
        } : null);
      }
      d && (e && p ? Tn(s) : s()), (c = n.onChange) == null || c.call(n, m, p);
    }
  }, [g] = bn(() => {
    const m = new Nn(o);
    return Object.assign(m, {
      containerRef: (p) => {
        const c = r.current;
        if (c.container = p, c.lastSize = null, p && c.enabled) {
          const x = m.getTotalSize();
          c.lastSize = x;
          const d = m.options.horizontal ? "width" : "height";
          p.style[d] = `${x}px`;
        }
      }
    });
  });
  return g.setOptions(o), et(() => g._didMount(), []), et(() => (a(g), g._willUpdate())), et(() => {
    i(g);
  }), g;
}
function Hn(e) {
  return Bn({
    observeElementRect: On,
    observeElementOffset: Ln,
    scrollToFn: jn,
    ...e
  });
}
const Ke = window.QwenPaw.host, I = Ke.React, { useRef: Wn } = I, { Tag: Ht } = Ke.antd, { Text: ye } = Ke.antd.Typography, {
  CaretRightOutlined: Vn,
  RobotOutlined: Un,
  SettingOutlined: Kn,
  ToolOutlined: Xn,
  UserOutlined: qn
} = Ke.antdIcons, Jn = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Gn = {
  user: /* @__PURE__ */ I.createElement(qn, null),
  message: /* @__PURE__ */ I.createElement(Un, null),
  tool: /* @__PURE__ */ I.createElement(Xn, null),
  system: /* @__PURE__ */ I.createElement(Kn, null)
}, Qn = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
}, Yn = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, xt = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, Zn = 150, at = 26, Wt = 34, wt = 9, kt = 30;
function es(e) {
  const l = le(), t = Qn[e];
  return t ? l === "zh-CN" ? t.zh : t.en : e;
}
function ts(e) {
  const l = le(), t = xt[e] ?? xt.unknown;
  return l === "zh-CN" ? t.zh : t.en;
}
function Tt({
  record: e,
  selected: l,
  dimmed: t,
  multiRequest: n,
  onSelect: s
}) {
  const r = e.usage, a = r && (r.input_tokens || r.output_tokens) ? `${ae(r.input_tokens)}→${ae(
    r.output_tokens
  )}` : null;
  return /* @__PURE__ */ I.createElement(
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
        height: at,
        cursor: "pointer",
        background: l ? "rgba(22,119,255,0.08)" : void 0,
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
      Ht,
      {
        color: Jn[e.kind] ?? "default",
        icon: Gn[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      es(e.kind)
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
      e.kind === "tool" && e.toolName ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(ye, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ I.createElement(ye, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ I.createElement(
        ye,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ I.createElement(
        ye,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      )
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
      a ? /* @__PURE__ */ I.createElement("span", { style: { color: "#1677ff" } }, a) : null,
      a ? " · " : "",
      (e.kind === "message" || e.kind === "tool") && ie(e.timeSeconds)
    )
  );
}
function ns({
  turn: e,
  collapsed: l,
  selected: t,
  cellCount: n,
  onToggle: s,
  onSelect: r
}) {
  const a = le();
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Wt }
    },
    /* @__PURE__ */ I.createElement(
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
      /* @__PURE__ */ I.createElement(
        Vn,
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
      /* @__PURE__ */ I.createElement(ye, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ I.createElement(ye, { type: "secondary", style: { fontSize: 11 } }, ie(e.durationMs / 1e3)),
      /* @__PURE__ */ I.createElement(ye, { type: "secondary", style: { fontSize: 11 } }, n, " ", b(a, "events")),
      /* @__PURE__ */ I.createElement(
        Ht,
        {
          color: Yn[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        ts(e.status)
      )
    )
  );
}
function ss({
  turns: e,
  selectedIndex: l,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: s,
  searchMatchIndexes: r,
  onSelectedIndexChange: a,
  onSelectedTurnChange: i,
  onToggleTurn: o,
  callsCollapsed: g,
  hasOlderRecords: m,
  loadingOlder: p,
  onLoadOlder: c,
  initialRecord: x,
  emptyText: d
}) {
  const h = le(), y = Wn(null), E = e.filter((L) => L.turn !== null), S = E.length > 1, k = I.useMemo(() => {
    var B;
    const L = [];
    m && L.push({
      key: "load-older",
      height: kt,
      type: "load-older"
    }), x && (L.push({
      key: "initial",
      height: at,
      type: "initial",
      record: x
    }), L.push({
      key: "initial-divider",
      height: wt,
      type: "divider"
    }));
    for (const A of E) {
      const R = A.turn;
      if (L.push({
        key: `turn-${R}`,
        height: Wt,
        type: "boundary",
        turn: A
      }), !n.has(R))
        for (const H of ((B = A.groups[0]) == null ? void 0 : B.cells) ?? [])
          g && H.kind === "tool" || L.push({
            key: `rec-${H.index}`,
            height: at,
            type: "record",
            record: H
          });
    }
    return L;
  }, [
    E,
    n,
    g,
    m,
    x
  ]), z = I.useCallback(
    (L) => s !== null && !s.has(L.index) || r !== null && !r.has(L.index),
    [s, r]
  ), C = (L) => {
    var B;
    switch (L.type) {
      case "load-older":
        return /* @__PURE__ */ I.createElement("div", { style: { textAlign: "center", height: kt } }, /* @__PURE__ */ I.createElement(
          "button",
          {
            type: "button",
            onClick: c,
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
          p ? "…" : `⋯ ${b(h, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ I.createElement(
          "div",
          {
            style: {
              height: wt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const A = L.record;
        return /* @__PURE__ */ I.createElement(
          Tt,
          {
            record: A,
            selected: l === A.index,
            dimmed: z(A),
            multiRequest: S,
            onSelect: () => a(A.index)
          }
        );
      }
      case "boundary": {
        const A = L.turn, R = A.turn;
        return /* @__PURE__ */ I.createElement(
          ns,
          {
            turn: A,
            collapsed: n.has(R),
            selected: t === R,
            cellCount: ((B = A.groups[0]) == null ? void 0 : B.cells.length) ?? 0,
            onToggle: () => o(R),
            onSelect: () => i(R)
          }
        );
      }
      case "record":
      default: {
        const A = L.record;
        return /* @__PURE__ */ I.createElement(
          Tt,
          {
            record: A,
            selected: l === A.index,
            dimmed: z(A),
            multiRequest: S,
            onSelect: () => a(A.index)
          }
        );
      }
    }
  };
  if (k.length === 0)
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
        d ?? b(h, "noSessions")
      )
    );
  const P = k.length <= Zn ? /* @__PURE__ */ I.createElement("div", null, k.map((L) => C(L))) : /* @__PURE__ */ I.createElement(
    ls,
    {
      rows: k,
      scrollRef: y,
      renderRow: C
    }
  );
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      ref: y,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    P
  );
}
function ls({
  rows: e,
  scrollRef: l,
  renderRow: t
}) {
  const n = Hn({
    count: e.length,
    getScrollElement: () => l.current,
    estimateSize: (s) => e[s].height,
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
    n.getVirtualItems().map((s) => /* @__PURE__ */ I.createElement(
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
function tt(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function fe(e, l = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function rs(e) {
  var x;
  const l = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  let i = 0, o = 0;
  const g = (d) => d.groups[0].cells, m = (d, h) => {
    const y = r.get(d);
    y ? y.push(h) : r.set(d, [h]);
  }, p = (d, h) => {
    const y = t.get(d);
    y ? (h.runIndex = y.turn ?? 0, g(y).push(h)) : m(d, h);
  }, c = (d, h) => {
    const y = r.get(h);
    if (y) {
      for (const E of y) g(d).push(E);
      r.delete(h);
    }
  };
  for (const d of e) {
    const h = tt(d);
    switch (d.type) {
      case "run/start": {
        o += 1;
        const y = {
          turn: o,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${o}`, cells: [] }]
        };
        t.set(d.run_id, y), l.push(y), c(y, d.run_id);
        const E = Array.isArray(h.messages) ? h.messages : [], S = String(h.query ?? "");
        g(y).push({
          index: ++i,
          runIndex: o,
          runId: d.run_id,
          kind: "user",
          text: fe(S) || fe((x = E.at(-1)) == null ? void 0 : x.text),
          messages: E,
          timeSeconds: 0,
          startedAt: ee(d.t),
          isError: !1,
          running: !1,
          model: void 0
        });
        break;
      }
      case "run/end": {
        const y = t.get(d.run_id), E = String(h.status ?? "unknown");
        if (y && (y.status = E, y.durationMs = typeof h.duration_ms == "number" ? h.duration_ms : null), E === "error" && h.error) {
          const S = y ?? {
            turn: null,
            status: E,
            durationMs: typeof h.duration_ms == "number" ? h.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          y || l.push(S), S.groups[0].cells.push({
            index: ++i,
            runIndex: o,
            runId: d.run_id,
            kind: "system",
            text: fe(String(h.error)) || "run failed",
            marker: String(h.error ?? "run failed"),
            timeSeconds: typeof h.duration_ms == "number" ? h.duration_ms / 1e3 : null,
            startedAt: ee(d.t),
            isError: !0,
            running: !1,
            raw: [d]
          });
        }
        break;
      }
      case "agent/spawn": {
        const y = typeof h.child_session_id == "string" ? h.child_session_id : void 0, E = typeof h.child_agent_id == "string" ? h.child_agent_id : "?";
        p(d.run_id, {
          index: ++i,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          text: `🚀 ${E} → ${y ?? "?"}`,
          timeSeconds: 0,
          startedAt: ee(d.t),
          isError: !1,
          running: !1,
          spawnSession: y,
          spawnAgent: E,
          raw: [d]
        });
        break;
      }
      case "message/inbound": {
        const y = Array.isArray(h.parts) ? h.parts : [], E = y.map((S) => String(S.type ?? "?").replace("Content", "")).join(",");
        p(d.run_id, {
          index: ++i,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          text: `📥 ${y.length} part(s)${E ? ` [${E}]` : ""}`,
          timeSeconds: 0,
          startedAt: ee(d.t),
          isError: !1,
          running: !1,
          raw: [d]
        });
        break;
      }
      case "message/outbound": {
        const y = typeof h.text == "string" ? h.text : "";
        p(d.run_id, {
          index: ++i,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          text: `📤 ${fe(y) || "(empty)"}`,
          timeSeconds: 0,
          startedAt: ee(d.t),
          isError: !1,
          running: !1,
          outputText: y || void 0,
          raw: [d]
        });
        break;
      }
      case "approval/asked": {
        p(d.run_id, {
          index: ++i,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          text: `🛡 approval asked: ${String(h.tool_name ?? "?")}`,
          timeSeconds: 0,
          startedAt: ee(d.t),
          isError: !1,
          running: !1,
          raw: [d]
        });
        break;
      }
      case "approval/decided": {
        const y = String(h.decision ?? "?");
        p(d.run_id, {
          index: ++i,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          text: `🛡 approval ${y}${h.tool_name ? `: ${String(h.tool_name)}` : ""}`,
          timeSeconds: 0,
          startedAt: ee(d.t),
          isError: y === "denied",
          running: !1,
          raw: [d]
        });
        break;
      }
      case "llm/header": {
        const y = typeof h.sha256 == "string" ? h.sha256 : "", E = typeof h.prev_sha256 == "string" ? h.prev_sha256 : void 0, S = h.reason === "changed" ? "changed" : "initial", k = typeof h.system_prompt == "string" ? h.system_prompt : "", z = Array.isArray(h.tools) ? h.tools : [], C = Array.isArray(h.schemas) ? h.schemas : void 0;
        p(d.run_id, {
          index: ++i,
          runIndex: 0,
          runId: d.run_id,
          kind: "system",
          text: S === "initial" ? `⚙ ${k ? `System Prompt (${k.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ee(d.t),
          isError: !1,
          running: !1,
          prompt: k,
          prevPrompt: a.get(E ?? ""),
          headerTools: z,
          headerReason: S,
          sha: y,
          prevSha: E,
          schemas: C,
          raw: [d]
        }), y && a.set(y, k);
        break;
      }
      case "llm/call": {
        const y = tt(d), E = y.options && typeof y.options == "object" && Object.keys(y.options).length > 0 ? y.options : void 0, S = {
          index: ++i,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ee(d.t),
          isError: !1,
          running: !0,
          model: String(y.model ?? "unknown"),
          options: E
        };
        p(d.run_id, S);
        const k = n.get(d.run_id) ?? [];
        k.push({ cell: S, callData: y, call: d }), n.set(d.run_id, k);
        break;
      }
      case "llm/result": {
        const y = n.get(d.run_id), E = y == null ? void 0 : y.shift(), S = (E == null ? void 0 : E.callData) ?? {}, k = typeof h.duration_ms == "number" ? h.duration_ms : null, z = h.usage ?? void 0, C = h.timing, P = Array.isArray(h.tool_calls) ? h.tool_calls : void 0, A = {
          text: (h.error ? fe(String(h.error)) : fe(String(h.text ?? ""))) || (P && P.length > 0 ? `🛠 ${P.map((R) => R.name).join(", ")}` : ""),
          timeSeconds: k === null ? null : k / 1e3,
          isError: !!h.error,
          running: !1,
          outputText: h.text ? String(h.text) : void 0,
          thinkingText: h.thinking ? String(h.thinking) : void 0,
          usage: z,
          timing: C,
          toolCalls: P,
          note: h.note ? String(h.note) : void 0
        };
        E ? (Object.assign(E.cell, A), E.cell.model = String(
          h.model ?? S.model ?? E.cell.model
        ), E.cell.raw = [
          ...E.call ? [E.call] : [],
          d
        ]) : p(d.run_id, {
          index: ++i,
          runIndex: 0,
          runId: d.run_id,
          kind: "message",
          startedAt: ee(d.t),
          model: String(h.model ?? S.model ?? "unknown"),
          ...A
        });
        break;
      }
      case "tool/call": {
        const y = tt(d), E = {
          index: ++i,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `${String(y.name ?? "?")}(${fe(
            String(y.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: ee(d.t),
          isError: !1,
          running: !0,
          toolName: String(y.name ?? "?"),
          toolInput: y.input ? String(y.input) : void 0
        };
        p(d.run_id, E);
        const S = s.get(d.run_id) ?? [];
        S.push({ cell: E, callData: y, call: d }), s.set(d.run_id, S);
        break;
      }
      case "tool/result": {
        const y = s.get(d.run_id), E = typeof h.tool_call_id == "string" ? h.tool_call_id : null;
        let S;
        if (y) {
          const B = E ? y.findIndex(
            (A) => A.callData.tool_call_id === E
          ) : -1;
          B >= 0 ? S = y.splice(B, 1)[0] : S = y.shift();
        }
        const k = typeof h.duration_ms == "number" ? h.duration_ms : null, z = h.ok !== !1 && !h.error, C = h.output ? String(h.output) : void 0, P = C ? ` → ${fe(C, 60)}` : "", L = {
          timeSeconds: k === null ? null : k / 1e3,
          isError: !z,
          running: !1,
          toolOutput: C,
          toolError: h.error ? String(h.error) : void 0,
          note: h.note ? String(h.note) : void 0
        };
        S ? (Object.assign(S.cell, L), S.cell.text = `${S.cell.text}${P}`, S.cell.raw = [
          ...S.call ? [S.call] : [],
          d
        ]) : p(d.run_id, {
          index: ++i,
          runIndex: 0,
          runId: d.run_id,
          kind: "tool",
          text: `?${P}`,
          startedAt: ee(d.t),
          ...L
        });
        break;
      }
    }
  }
  for (const [d, h] of r) {
    const y = t.get(d);
    if (y) {
      for (const E of h) g(y).push(E);
      r.delete(d);
    }
  }
  return l;
}
function _t(e) {
  return e.flatMap((l) => l.groups.flatMap((t) => t.cells));
}
function os(e) {
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
        cells: t.filter((i, o) => o !== n)
      }
    ]
  };
  return { initial: s, turns: [r, ...e.slice(1)] };
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
}, Mt = "agent-trace-timeline-styles", is = `
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
let nt = !1;
function as() {
  if (nt || typeof document > "u") return;
  if (document.getElementById(Mt)) {
    nt = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = Mt, e.textContent = is, document.head.appendChild(e), nt = !0;
}
function st(e) {
  return ln(e);
}
function Vt(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function It(e) {
  return e != null && Number.isFinite(e);
}
function cs(e) {
  if (!It(e.startedAt)) return null;
  const l = It(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + l };
}
function Ut(e, l = "sequence") {
  if (l !== "sequence")
    return us(
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
          lane: Vt(a.kind)
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
function us(e, l, t) {
  const n = e.flatMap((m) => {
    const p = m.groups.flatMap(
      (c) => c.cells.flatMap((x) => {
        const d = cs(x);
        return d === null ? [] : [
          {
            ...d,
            index: x.index,
            isError: x.isError === !0,
            kind: x.kind,
            label: x.text,
            lane: Vt(x.kind)
          }
        ];
      })
    );
    return p.length === 0 ? [] : [{ turn: m.turn, rawSpans: p }];
  }), s = n.flatMap((m) => m.rawSpans);
  if (s.length === 0) return null;
  const r = /* @__PURE__ */ new Map();
  let a = 0, i = null;
  for (const m of [...s].sort(
    (p, c) => p.start - c.start || p.end - c.end
  ))
    t && i !== null && m.start > i && (a += m.start - i), r.set(m, a), i = i === null ? m.end : Math.max(i, m.end);
  const o = [], g = [];
  for (const m of n) {
    const p = m.rawSpans.map((c) => {
      const x = r.get(c) ?? 0;
      return {
        ...c,
        start: c.start - x,
        end: (l ? c.end : c.start) - x
      };
    });
    o.push(...p), m.turn !== null && g.push({
      turn: m.turn,
      time: Math.min(...p.map((c) => c.start))
    });
  }
  return {
    start: Math.min(...o.map((m) => m.start)),
    end: Math.max(...o.map((m) => m.end)),
    spans: o,
    turnBoundaries: g
  };
}
function ds(e, l, t = "sequence") {
  const n = Ut(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((s) => s.start <= l.end && s.end >= l.start).map((s) => s.index)
  );
}
as();
const Ve = window.QwenPaw.host, D = Ve.React, { useEffect: Fe, useMemo: Ct, useRef: Pe, useState: xe } = D, { Tooltip: hs } = Ve.antd, lt = 3, ms = 4, fs = 0.08, ps = 0.025, gs = 32, ys = 0.5;
function vs(e) {
  const l = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, s = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, r = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...l === void 0 ? {} : { durationMs: l },
    ...t === void 0 ? {} : { startedAt: t },
    ...s === void 0 || r === void 0 ? {} : { ttftMs: s, decodingMs: r }
  };
}
function Es(e) {
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
function Ss(e, l) {
  const t = Es(e);
  if (l === void 0) return t;
  const n = l.durationMs === void 0 ? null : `Total ${st(l.durationMs)}`, s = l.startedAt === void 0 ? null : l.durationMs === void 0 ? `Started ${Re(l.startedAt)}` : `${Re(l.startedAt)} → ${Re(
    l.startedAt + l.durationMs
  )}`, r = l.ttftMs === void 0 || l.decodingMs === void 0 ? null : `TTFT ${st(
    l.ttftMs
  )} · Decoding ${st(l.decodingMs)}`, a = [n, r].filter((i) => i !== null).join(" · ");
  return [t, s, a].filter((i) => i !== null && i !== "").join(`
`);
}
function ct(e, l) {
  return e <= l ? { start: e, end: l } : { start: l, end: e };
}
function rt(e) {
  return Math.min(1, Math.max(0, e));
}
function bs(e, l, t, n) {
  const s = Math.min(n - t, Math.max(0, l)), r = Math.min(
    Math.max(e - s / 2, t),
    n - s
  );
  return { start: r, end: r + s };
}
function zt(e, l, t, n, s) {
  const r = ct(
    Math.min(s, Math.max(n, e.start)),
    Math.min(s, Math.max(n, e.end))
  );
  return {
    start: (r.start - l) / t,
    end: (r.end - l) / t
  };
}
function Kt({
  label: e,
  placement: l,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ D.createElement(
    hs,
    {
      title: /* @__PURE__ */ D.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: l,
      mouseEnterDelay: ys,
      ...n
    },
    t
  );
}
function Ot() {
  return /* @__PURE__ */ D.createElement("div", { className: Z.labels, "aria-hidden": "true" }, /* @__PURE__ */ D.createElement("span", null, "Input"), /* @__PURE__ */ D.createElement("span", null, "Model"), /* @__PURE__ */ D.createElement("span", null, "Tools"));
}
function At({
  loading: e,
  onHover: l,
  onLoad: t
}) {
  return /* @__PURE__ */ D.createElement(
    Kt,
    {
      label: e ? "Loading earlier history…" : "Click to load earlier history",
      placement: "right"
    },
    /* @__PURE__ */ D.createElement(
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
const xs = D.memo(function({
  turns: l,
  mode: t,
  range: n,
  hasEarlierRecords: s = !1,
  onLoadEarlier: r,
  selectedIndex: a = null,
  searchMatchIndexes: i = null,
  onRangeChange: o,
  onRecordSelect: g,
  onRecordFocus: m
}) {
  const p = typeof Ve.useTheme == "function" ? Ve.useTheme() : void 0, c = Ct(
    () => Ut(l, t),
    [t, l]
  ), x = Ct(
    () => new Map(
      l.flatMap(
        (v) => v.groups.flatMap(
          (_) => _.cells.map(
            ($) => [$.index, vs($)]
          )
        )
      )
    ),
    [l]
  ), d = Pe(null), h = Pe(null), y = Pe(null), E = Pe(null), [S, k] = xe(null), [z, C] = xe(null), [P, L] = xe(!1), [B, A] = xe(!1), [R, H] = xe(null), [de, Y] = xe(!1);
  Fe(() => {
    c !== null && n !== null && (n.end < c.start || n.start > c.end) && o(null);
  }, [c, o, n]), Fe(() => {
    c !== null && (Y(!1), H(
      (v) => v !== null && (v.end < c.start || v.start > c.end) ? null : v
    ));
  }, [c]), Fe(() => {
    if (c === null || a === null) return;
    const v = c.spans.find(
      (_) => _.index === a
    );
    v !== void 0 && (Y(!0), H((_) => {
      if (_ === null || v.end > _.start && v.start < _.end)
        return _;
      const $ = Math.max(1, _.end - _.start), j = v.end <= _.start ? v.start : v.end - $, F = Math.min(
        Math.max(j, c.start),
        Math.max(c.start, c.end - $)
      );
      return F === _.start ? _ : { start: F, end: F + $ };
    }));
  }, [c, a]);
  const q = Math.max(1, ((c == null ? void 0 : c.end) ?? 0) - ((c == null ? void 0 : c.start) ?? 0)), Le = Math.min(
    q,
    Math.max(1, ((R == null ? void 0 : R.end) ?? 0) - ((R == null ? void 0 : R.start) ?? 0))
  ), Xe = c === null || R === null ? (c == null ? void 0 : c.start) ?? 0 : Math.min(
    Math.max(R.start, c.start),
    c.end - Le
  ), W = R === null ? q : Le, V = R === null ? (c == null ? void 0 : c.start) ?? 0 : Xe, Te = s && c !== null && V === c.start, _e = r === void 0 || P ? void 0 : () => {
    L(!0), r().finally(() => {
      L(!1);
    });
  }, he = c === null ? void 0 : {
    "--trajectory-domain-left": `${-(V - c.start) / W * 100}%`,
    "--trajectory-domain-width": `${q / W * 100}%`
  }, Me = c === null || n === null ? null : zt(
    n,
    V,
    W,
    c.start,
    c.end
  ), ce = (c === null || S === null ? null : zt(
    S,
    V,
    W,
    c.start,
    c.end
  )) ?? Me, se = S ?? n;
  if (Fe(() => {
    const v = y.current;
    if (v === null) return;
    const _ = ($) => {
      $.preventDefault();
      const j = E.current;
      if (j === null || c === null) return;
      Y(!1);
      const F = j.getBoundingClientRect(), f = rt(
        ($.clientX - F.left) / Math.max(1, F.width)
      ), T = Math.min(
        q,
        Math.max(
          Math.min(
            t === "sequence" ? ms : 20,
            q
          ),
          W * Math.exp($.deltaY * 15e-4)
        )
      );
      if (T >= q * 0.999) {
        H(null);
        return;
      }
      const M = V + f * W, K = Math.min(
        Math.max(M - f * T, c.start),
        c.end - T
      );
      H({ start: K, end: K + T });
    };
    return v.addEventListener("wheel", _, { passive: !1 }), () => {
      v.removeEventListener("wheel", _);
    };
  }, [W, V, q, t, c]), c === null)
    return /* @__PURE__ */ D.createElement(
      "section",
      {
        ref: y,
        className: Z.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ D.createElement("div", { className: Z.plot }, /* @__PURE__ */ D.createElement(Ot, null), /* @__PURE__ */ D.createElement("div", { className: Z.track }, /* @__PURE__ */ D.createElement("span", { className: Z.empty }, "No timing data"), s && /* @__PURE__ */ D.createElement(
        At,
        {
          loading: P,
          onHover: () => {
            C(null);
          },
          onLoad: _e
        }
      )))
    );
  const Ie = Math.min(
    W,
    q / c.spans.length
  ), me = (v) => {
    const _ = v.currentTarget.getBoundingClientRect();
    return rt((v.clientX - _.left) / Math.max(1, _.width));
  }, U = (v) => {
    var F;
    const _ = v.target instanceof HTMLElement ? v.target : null, $ = (F = _ == null ? void 0 : _.closest("[data-timeline-record-index]")) == null ? void 0 : F.dataset.timelineRecordIndex;
    if ($ === void 0) return null;
    const j = Number($);
    return Number.isFinite(j) ? j : null;
  }, ve = (v) => {
    o(v);
  }, $e = (v) => {
    if (v.button === 2) {
      h.current = {
        anchorClientX: v.clientX,
        anchorStart: V,
        moved: !1,
        pannable: R !== null,
        pointerId: v.pointerId
      }, R !== null && Y(!1), A(!0), typeof v.currentTarget.setPointerCapture == "function" && v.currentTarget.setPointerCapture(v.pointerId);
      return;
    }
    if (v.button !== 0) return;
    const _ = me(v), $ = V + _ * W, j = U(v);
    C({ fraction: _, recordIndex: j }), d.current = {
      pointerId: v.pointerId,
      anchorTime: $,
      anchorClientX: v.clientX,
      recordIndex: j
    }, typeof v.currentTarget.setPointerCapture == "function" && v.currentTarget.setPointerCapture(v.pointerId), k({ start: $, end: $ });
  }, qe = (v) => {
    const _ = v.currentTarget.getBoundingClientRect(), $ = me(v);
    C({ fraction: $, recordIndex: U(v) });
    const j = h.current;
    if (j !== null && j.pointerId === v.pointerId) {
      if (Math.abs(v.clientX - j.anchorClientX) >= lt && (j.moved = !0), !j.pannable) return;
      const M = (v.clientX - j.anchorClientX) / Math.max(1, _.width), K = Math.min(
        Math.max(j.anchorStart - M * W, c.start),
        c.end - W
      );
      H({ start: K, end: K + W });
      return;
    }
    const F = d.current;
    if (F === null || F.pointerId !== v.pointerId) return;
    let f = V;
    if (R !== null) {
      const M = v.clientX - _.left, K = Math.min(
        gs,
        Math.max(1, _.width * fs)
      ), X = M < K ? -1 : M > _.width - K ? 1 : 0;
      if (X !== 0) {
        const Ee = X < 0 ? K - M : M - (_.width - K), re = rt(Ee / K), oe = V + X * W * ps * Math.max(0.2, re);
        f = Math.min(
          Math.max(oe, c.start),
          c.end - W
        ), f !== V && (Y(!1), H({
          start: f,
          end: f + W
        }));
      }
    }
    const T = f + $ * W;
    k(ct(F.anchorTime, T));
  }, De = (v) => {
    const _ = h.current;
    if (_ !== null && _.pointerId === v.pointerId) {
      const X = _.moved || Math.abs(v.clientX - _.anchorClientX) >= lt;
      h.current = null, A(!1), X || o(null);
      return;
    }
    const $ = d.current;
    if ($ === null || $.pointerId !== v.pointerId) return;
    const j = me(v), F = V + j * W, f = ct($.anchorTime, F);
    C({ fraction: j, recordIndex: U(v) }), d.current = null, k(null);
    const T = Math.abs(v.clientX - $.anchorClientX) < lt, M = T && $.recordIndex !== null ? c.spans.find((X) => X.index === $.recordIndex) : void 0;
    if (M !== void 0) {
      o(null), g == null || g(M.index);
      return;
    }
    const K = f.end - f.start < Ie ? bs(
      T ? f.start : (f.start + f.end) / 2,
      Ie,
      c.start,
      c.end
    ) : f;
    if (ve(K), T) {
      const X = f.start, Ee = c.spans.reduce((re, oe) => {
        const je = X < re.start ? re.start - X : X > re.end ? X - re.end : 0;
        return (X < oe.start ? oe.start - X : X > oe.end ? X - oe.end : 0) < je ? oe : re;
      });
      m == null || m(Ee.index);
    }
  }, Je = (v) => {
    v.key !== "Escape" || n === null || (v.preventDefault(), o(null));
  }, Ge = () => {
    d.current = null, h.current = null, k(null), C(null), A(!1);
  };
  return /* @__PURE__ */ D.createElement(
    "section",
    {
      ref: y,
      className: Z.root,
      "data-theme": p || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ D.createElement("div", { className: Z.plot }, /* @__PURE__ */ D.createElement(Ot, null), /* @__PURE__ */ D.createElement(
      "div",
      {
        ref: E,
        className: Z.track,
        "data-panning": B || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: Je,
        onPointerDown: $e,
        onPointerMove: qe,
        onPointerUp: De,
        onPointerCancel: Ge,
        onPointerLeave: () => {
          d.current === null && h.current === null && C(null);
        },
        onDoubleClick: (v) => {
          v.preventDefault(), o(null);
        },
        onContextMenu: (v) => {
          v.preventDefault();
        }
      },
      Te && /* @__PURE__ */ D.createElement(
        At,
        {
          loading: P,
          onHover: () => {
            C(null);
          },
          onLoad: _e
        }
      ),
      z !== null && z.recordIndex === null && S === null && /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${z.fraction * 100}%`
          }
        }
      ),
      ce !== null && /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.selection,
          "data-dragging": S === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ce.start * 100}%`,
            "--trajectory-selection-width": `${(ce.end - ce.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.selectionEdges,
          "data-dragging": S === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${ce.start * 100}%`,
            "--trajectory-selection-width": `${(ce.end - ce.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.turnBoundaries,
          "data-animate-viewport": de || void 0,
          "aria-hidden": "true",
          style: he
        },
        c.turnBoundaries.filter(
          (v) => v.time > c.start && v.time >= V && v.time <= V + W
        ).map((v) => /* @__PURE__ */ D.createElement(
          "span",
          {
            className: Z.turnBoundary,
            "data-turn": v.turn,
            key: v.turn,
            style: {
              "--trajectory-turn-left": `${(v.time - c.start) / q * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.lanes,
          "data-animate-viewport": de || void 0,
          "data-timeline-domain": !0,
          style: he
        },
        c.spans.filter(
          (v) => v.index === a || v.end >= V && v.start <= V + W
        ).map((v) => {
          const _ = (v.start - c.start) / q, j = (v.end - v.start) / q * 100, F = x.get(v.index), f = F == null ? void 0 : F.ttftMs, T = F == null ? void 0 : F.decodingMs, M = f === void 0 || T === void 0 || f + T <= 0 ? null : f / (f + T);
          return /* @__PURE__ */ D.createElement(
            Kt,
            {
              key: v.index,
              label: Ss(v.kind, F),
              placement: "bottom"
            },
            /* @__PURE__ */ D.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: Z.span,
                "data-timeline-span": v.kind,
                "data-timeline-record-index": v.index,
                "data-assistant-timing": M === null ? void 0 : "true",
                "data-error": v.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": v.index === a || void 0,
                "data-hovered": (z == null ? void 0 : z.recordIndex) === v.index || void 0,
                "data-search-match": i === null ? void 0 : i.has(v.index) ? "true" : "false",
                "data-selected": se === null ? void 0 : v.start <= se.end && v.end >= se.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${_ * 100}%`,
                  "--trajectory-span-width": `${j}%`,
                  "--trajectory-span-gap": `min(${j * 0.08}%, 1px)`,
                  "--trajectory-span-lane": v.lane,
                  ...M === null ? {} : {
                    "--trajectory-assistant-ttft": `${M * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), ht = window.QwenPaw.host, te = ht.React, { Button: ws, Input: ks, Segmented: Ts, Tooltip: Rt } = ht.antd, { MenuFoldOutlined: _s, MenuUnfoldOutlined: Ms, ReloadOutlined: Is, SearchOutlined: Cs } = ht.antdIcons;
function zs({
  mode: e,
  onModeChange: l,
  search: t,
  onSearchChange: n,
  onRefresh: s,
  modeOptions: r,
  allCollapsed: a,
  hasRequests: i,
  onToggleCollapseAll: o,
  callsCollapsed: g,
  onToggleCallsCollapsed: m
}) {
  const p = le();
  return /* @__PURE__ */ te.createElement(
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
    /* @__PURE__ */ te.createElement(Rt, { title: b(p, "projectionHint") }, /* @__PURE__ */ te.createElement(
      Ts,
      {
        size: "small",
        value: e,
        options: r,
        onChange: (c) => l(c)
      }
    )),
    /* @__PURE__ */ te.createElement(
      ks,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ te.createElement(Cs, null),
        placeholder: b(p, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (c) => n(c.target.value)
      }
    ),
    i && /* @__PURE__ */ te.createElement(
      Rt,
      {
        title: a ? b(p, "expandAll") : b(p, "collapseAll")
      },
      /* @__PURE__ */ te.createElement(
        ws,
        {
          size: "small",
          type: "text",
          icon: a ? /* @__PURE__ */ te.createElement(Ms, null) : /* @__PURE__ */ te.createElement(_s, null),
          onClick: o
        }
      )
    ),
    /* @__PURE__ */ te.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ te.createElement(
      "a",
      {
        onClick: s,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ te.createElement(Is, null),
      " ",
      b(p, "refresh")
    ))
  );
}
const we = window.QwenPaw.host, w = we.React, { useCallback: ot, useEffect: Be, useMemo: ne, useRef: Os, useState: J } = w, {
  Button: it,
  Empty: He,
  Input: As,
  Popconfirm: Rs,
  Popover: Ls,
  Space: $s,
  Spin: ut,
  Switch: Ds,
  Tag: js,
  message: Ae
} = we.antd, { DeleteOutlined: Ns, DownloadOutlined: Fs, SearchOutlined: Ps, SettingOutlined: Bs } = we.antdIcons, { Text: ge } = we.antd.Typography;
function Hs(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function Ws(e) {
  if (!e) return "-";
  const l = new Date(e);
  return Number.isNaN(l.getTime()) ? e : l.toLocaleString();
}
function Vs(e) {
  if (!e) return "-";
  const l = Date.parse(e);
  if (!Number.isFinite(l)) return e;
  const t = Date.now() - l;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(l).toLocaleString();
}
function Lt(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Us(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Ks = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function Xs(e) {
  return e || "unknown";
}
function qs({
  config: e,
  onChange: l,
  children: t
}) {
  const n = le(), s = (a, i, o) => /* @__PURE__ */ w.createElement(
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
    /* @__PURE__ */ w.createElement(ge, { style: { fontSize: 13 } }, a),
    /* @__PURE__ */ w.createElement(
      Ds,
      {
        size: "small",
        checked: !!i,
        onChange: (g) => l({ [o]: g })
      }
    )
  ), r = /* @__PURE__ */ w.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ w.createElement(ge, { strong: !0, style: { fontSize: 13 } }, b(n, "settings")), /* @__PURE__ */ w.createElement("div", { style: { marginTop: 8 } }, e ? [
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
  ] : /* @__PURE__ */ w.createElement(ut, { size: "small" })));
  return /* @__PURE__ */ w.createElement(Ls, { content: r, trigger: "click", placement: "bottomRight" }, t);
}
function Js() {
  const e = typeof we.useLocale == "function" ? we.useLocale() : void 0, l = ne(() => jt(e ?? null), [e]), [t, n] = J(null), [s, r] = J(!1), [a, i] = J(!1), [o, g] = J(null), [m, p] = J(null), [c, x] = J(!1), [d, h] = J(!1), [y, E] = J(""), [S, k] = J(""), [z, C] = J("sequence"), [P, L] = J(null), [B, A] = J(null), [R, H] = J(null), [de, Y] = J(
    /* @__PURE__ */ new Set()
  ), [q, Le] = J(!1), [Xe, W] = J(null), [V, Te] = J(null), [_e, he] = J(null), Me = Os(null);
  Me.current = o;
  const pe = ot(async () => {
    try {
      const f = await gt({ limit: 100, offset: 0 });
      n(f.sessions), r(f.has_more), he(null);
    } catch (f) {
      he(String(f.message));
    }
  }, []), ce = ot(async () => {
    i(!0);
    try {
      const f = await gt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((T) => {
        const M = T ?? [];
        return [
          ...M,
          ...f.sessions.filter(
            (K) => !M.some((X) => X.session_id === K.session_id)
          )
        ];
      }), r(f.has_more);
    } catch (f) {
      he(String(f.message));
    } finally {
      i(!1);
    }
  }, [t]), se = ot(
    async (f, T) => {
      T || x(!0);
      try {
        const M = await Gt(f, {
          beforeSeq: T,
          limit: 200
        });
        he(null), p((K) => T && K ? {
          ...M,
          events: [...M.events, ...K.events]
        } : M);
      } catch (M) {
        he(String(M.message));
      } finally {
        T || x(!1);
      }
    },
    []
  );
  Be(() => {
    pe(), Qt().then(W).catch(() => W(null));
    try {
      const f = new URLSearchParams(window.location.search).get("session");
      f && g(f);
    } catch {
    }
  }, [pe]), Be(() => {
    const f = setInterval(() => {
      document.visibilityState === "visible" && pe();
    }, 15e3);
    return () => clearInterval(f);
  }, [pe]), Be(() => {
    o ? (L(null), A(null), H(null), Y(/* @__PURE__ */ new Set()), k(""), se(o), Jt(o).then(
      (f) => Te({
        sessionId: o,
        inputTokens: f.input_tokens,
        outputTokens: f.output_tokens,
        totalTokens: f.total_tokens
      })
    ).catch(() => Te(null))) : (p(null), Te(null));
  }, [o, se]);
  const Ie = ne(
    () => m ? rs(m.events) : [],
    [m]
  ), { initial: me, turns: U } = ne(
    () => os(Ie),
    [Ie]
  ), ve = ne(
    () => me ? [me, ..._t(U)] : _t(U),
    [me, U]
  ), $e = ne(
    () => U.some((f) => f.status === "running"),
    [U]
  );
  Be(() => {
    if (!o || !$e) return;
    const f = setInterval(() => {
      document.visibilityState === "visible" && Me.current && se(Me.current);
    }, 5e3);
    return () => clearInterval(f);
  }, [o, $e, se]);
  const qe = ne(
    () => P === null ? null : ds(U, P, z),
    [P, U, z]
  ), De = ne(() => {
    const f = S.trim().toLowerCase();
    return f ? new Set(
      ve.filter(
        (T) => [
          T.text,
          T.outputText,
          T.thinkingText,
          T.toolName,
          T.toolInput,
          T.toolOutput,
          T.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(f)
      ).map((T) => T.index)
    ) : null;
  }, [S, ve]), Je = ne(
    () => B === null ? null : ve.find((f) => f.index === B) ?? null,
    [ve, B]
  ), Ge = ne(() => {
    var ft, pt;
    if (R === null) return null;
    const f = U.find((N) => N.turn === R);
    if (!f) return null;
    const T = ((ft = f.groups[0]) == null ? void 0 : ft.cells) ?? [], M = T.filter((N) => N.kind === "message"), K = T.filter((N) => N.kind === "tool"), X = [
      ...new Set(
        M.map((N) => N.model).filter((N) => !!N)
      )
    ];
    let Ee = 0, re = 0, oe = 0, je = 0, Ce = null, Qe = 0;
    const mt = [];
    for (const N of T)
      N.usage && (Ee += N.usage.input_tokens ?? 0, re += N.usage.output_tokens ?? 0, oe += N.usage.cache_input_tokens ?? 0, je += N.usage.cache_creation_input_tokens ?? 0), N.timing && (Ce = Ce === null ? N.timing.ttft_ms : Math.min(Ce, N.timing.ttft_ms), Qe = (Qe ?? 0) + N.timing.decode_ms), N.isError && mt.push(N.toolError ?? N.text ?? "error");
    const Se = T.find((N) => N.kind === "user"), Xt = (pt = [...M].reverse().find((N) => N.options)) == null ? void 0 : pt.options;
    return {
      turn: R,
      status: f.status,
      durationMs: f.durationMs,
      startedAt: (Se == null ? void 0 : Se.startedAt) ?? null,
      query: (Se == null ? void 0 : Se.text) ?? "",
      llmCalls: M.length,
      toolCalls: K.length,
      models: X,
      inputTokens: Ee,
      outputTokens: re,
      cacheReadTokens: oe,
      cacheWriteTokens: je,
      ttftMs: Ce,
      decodeMs: Qe,
      errors: mt,
      options: Xt,
      sessionTotals: V && V.sessionId === o ? {
        inputTokens: V.inputTokens,
        outputTokens: V.outputTokens,
        totalTokens: V.totalTokens
      } : void 0
    };
  }, [R, U, V, o]), v = !!(m && m.events.length > 0 && m.events[0].seq > 1), _ = ne(
    () => (t == null ? void 0 : t.find((f) => f.session_id === o)) ?? null,
    [t, o]
  ), $ = ne(() => {
    if (!t) return [];
    const f = y.trim().toLowerCase();
    return f ? t.filter(
      (T) => [T.session_id, T.agent_id, T.channel].join(" ").toLowerCase().includes(f)
    ) : t;
  }, [t, y]), j = async (f) => {
    try {
      W(await Yt(f));
    } catch (T) {
      Ae.error(String(T.message));
    }
  }, F = ne(
    () => [
      { label: b(l, "modeSequence"), value: "sequence" },
      { label: b(l, "modeDuration"), value: "duration" },
      { label: b(l, "modeTime"), value: "time" },
      { label: b(l, "modeActual"), value: "actual" }
    ],
    [l]
  );
  return /* @__PURE__ */ w.createElement("div", { style: { display: "flex", height: "100%", minHeight: 0 } }, /* @__PURE__ */ w.createElement(
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
    /* @__PURE__ */ w.createElement("div", { style: { padding: "12px 12px 8px" } }, /* @__PURE__ */ w.createElement(
      As,
      {
        allowClear: !0,
        size: "small",
        prefix: /* @__PURE__ */ w.createElement(Ps, null),
        placeholder: b(l, "searchPlaceholder"),
        value: y,
        onChange: (f) => E(f.target.value)
      }
    )),
    /* @__PURE__ */ w.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ w.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ w.createElement(ut, null)) : $.length === 0 ? /* @__PURE__ */ w.createElement(
      He,
      {
        image: He.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ w.createElement("span", { style: { fontSize: 12 } }, b(l, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ w.createElement(
        ge,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        b(l, "noSessionsHint")
      )
    ) : $.map((f) => {
      const T = f.session_id === o;
      return /* @__PURE__ */ w.createElement(
        "div",
        {
          key: f.session_id,
          onClick: () => g(f.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: T ? "rgba(22,119,255,0.10)" : "transparent",
            border: T ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ w.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ w.createElement(
            ge,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: { tooltip: f.session_id }
            },
            f.agent_id || Hs(f.session_id)
          ),
          /* @__PURE__ */ w.createElement(
            js,
            {
              color: Ks[f.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Xs(f.status)
          )
        ),
        /* @__PURE__ */ w.createElement(
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
          /* @__PURE__ */ w.createElement("span", null, f.channel || "-"),
          /* @__PURE__ */ w.createElement("span", null, f.runs, " ", b(l, "runs")),
          /* @__PURE__ */ w.createElement("span", null, Lt(f.total_tokens), " tok"),
          /* @__PURE__ */ w.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Ws(f.last_event_t)
            },
            Vs(f.last_event_t)
          )
        )
      );
    }), t !== null && s && !y.trim() && /* @__PURE__ */ w.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ w.createElement(
      "a",
      {
        onClick: () => void ce(),
        style: { fontSize: 12 }
      },
      a ? "…" : `⋯ ${b(l, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
    )))
  ), /* @__PURE__ */ w.createElement(
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
    /* @__PURE__ */ w.createElement(
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
      _ ? /* @__PURE__ */ w.createElement(ge, { type: "secondary", style: { fontSize: 12 } }, `${_.runs} ${b(l, "runs")} · ${_.llm_calls} ${b(l, "llmCalls")} · ${_.tool_calls} ${b(
        l,
        "toolCalls"
      )} · ${Lt(_.total_tokens)} ${b(
        l,
        "tokens"
      )} · ${Us(_.size_bytes)}`) : /* @__PURE__ */ w.createElement(ge, { type: "secondary", style: { fontSize: 13 } }, b(l, "selectSession")),
      /* @__PURE__ */ w.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ w.createElement($s, null, /* @__PURE__ */ w.createElement(qs, { config: Xe, onChange: j }, /* @__PURE__ */ w.createElement(it, { size: "small", icon: /* @__PURE__ */ w.createElement(Bs, null) })), o && /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(
        it,
        {
          size: "small",
          icon: /* @__PURE__ */ w.createElement(Fs, null),
          onClick: () => {
            Zt(o).then(() => Ae.success(b(l, "exported"))).catch(
              (f) => Ae.error(String(f.message))
            );
          }
        },
        b(l, "export")
      ), /* @__PURE__ */ w.createElement(
        Rs,
        {
          title: b(l, "deleteConfirm"),
          onConfirm: () => {
            en(o).then(() => {
              Ae.success(b(l, "deleted")), g(null), pe();
            }).catch(
              (f) => Ae.error(String(f.message))
            );
          }
        },
        /* @__PURE__ */ w.createElement(it, { size: "small", danger: !0, icon: /* @__PURE__ */ w.createElement(Ns, null) }, b(l, "delete"))
      ))))
    ),
    _e && /* @__PURE__ */ w.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ w.createElement(ge, { type: "danger", style: { fontSize: 12 } }, `${b(l, "loadFailed")}: ${_e}`)),
    /* @__PURE__ */ w.createElement(
      zs,
      {
        mode: z,
        onModeChange: C,
        search: S,
        onSearchChange: k,
        onRefresh: () => {
          pe(), o && se(o);
        },
        modeOptions: F,
        allCollapsed: U.length > 0 && U.every((f) => de.has(f.turn ?? -1)),
        hasRequests: U.some((f) => f.turn !== null),
        callsCollapsed: q,
        onToggleCallsCollapsed: () => Le((f) => !f),
        onToggleCollapseAll: () => {
          Y((f) => U.some(
            (M) => M.turn !== null && !f.has(M.turn)
          ) ? new Set(
            U.map((M) => M.turn).filter((M) => M !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ w.createElement(
      xs,
      {
        turns: U,
        mode: z,
        range: P,
        hasEarlierRecords: v,
        onLoadEarlier: async () => {
          var f;
          return !m || m.events.length === 0 ? !1 : (await se(o, (f = m.events[0]) == null ? void 0 : f.seq), !0);
        },
        selectedIndex: B,
        searchMatchIndexes: De,
        onRangeChange: L,
        onRecordSelect: A,
        onRecordFocus: A
      }
    ),
    c && !m ? /* @__PURE__ */ w.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ w.createElement(ut, null)) : m ? /* @__PURE__ */ w.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ w.createElement(
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
      /* @__PURE__ */ w.createElement(
        ss,
        {
          turns: U,
          selectedIndex: B,
          selectedTurn: R,
          collapsedTurns: de,
          focusIndexes: qe,
          searchMatchIndexes: De,
          onSelectedIndexChange: (f) => {
            A(f), H(null);
          },
          onSelectedTurnChange: (f) => {
            H(f), A(null);
          },
          callsCollapsed: q,
          onToggleTurn: (f) => {
            Y((T) => {
              const M = new Set(T);
              return M.has(f) ? M.delete(f) : M.add(f), M;
            });
          },
          hasOlderRecords: v,
          loadingOlder: d,
          onLoadOlder: () => {
            var f;
            !m || m.events.length === 0 || (h(!0), se(
              o,
              (f = m.events[0]) == null ? void 0 : f.seq
            ).finally(() => h(!1)));
          },
          emptyText: b(l, "noSessions"),
          initialRecord: me
        }
      )
    ), /* @__PURE__ */ w.createElement(
      En,
      {
        record: Je,
        request: Ge,
        onJumpSession: g,
        onSelectTurn: (f) => {
          H(f), A(null);
        }
      }
    )) : /* @__PURE__ */ w.createElement(
      He,
      {
        image: He.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: b(l, "selectSession")
      }
    )
  ));
}
var $t, Dt;
(Dt = ($t = window.QwenPaw).registerRoutes) == null || Dt.call($t, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Js,
    label: b(le(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);

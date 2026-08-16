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
function S(e, l) {
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
      ...t.map((v) => ({ kind: "del", text: v })),
      ...n.map((v) => ({ kind: "add", text: v }))
    ];
  const s = t.length, r = n.length, c = new Int32Array((s + 1) * (r + 1)), i = (v, a) => v * (r + 1) + a;
  for (let v = s - 1; v >= 0; v -= 1)
    for (let a = r - 1; a >= 0; a -= 1)
      c[i(v, a)] = t[v] === n[a] ? c[i(v + 1, a + 1)] + 1 : Math.max(c[i(v + 1, a)], c[i(v, a + 1)]);
  const o = [];
  let g = 0, d = 0;
  for (; g < s && d < r; )
    t[g] === n[d] ? (o.push({ kind: "same", text: t[g] }), g += 1, d += 1) : c[i(g + 1, d)] >= c[i(g, d + 1)] ? (o.push({ kind: "del", text: t[g] }), g += 1) : (o.push({ kind: "add", text: n[d] }), d += 1);
  for (; g < s; )
    o.push({ kind: "del", text: t[g] }), g += 1;
  for (; d < r; )
    o.push({ kind: "add", text: n[d] }), d += 1;
  return o;
}
function nn(e, l = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((r, c) => {
    if (r.kind !== "same")
      for (let i = Math.max(0, c - l); i <= Math.min(e.length - 1, c + l); i += 1)
        t[i] = !0;
  });
  const n = [];
  let s = 0;
  return e.forEach((r, c) => {
    t[c] ? (s > 0 && (n.push({ kind: "gap", count: s }), s = 0), n.push(r)) : s += 1;
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
    const c = s[0];
    let i = "rgba(128,128,128,1)";
    s[1] !== void 0 ? i = Ne.key : s[2] !== void 0 ? i = Ne.string : s[3] !== void 0 ? i = Ne.number : i = Ne.literal, l.push(
      /* @__PURE__ */ u.createElement("span", { key: r++, style: { color: i } }, c)
    ), n = s.index + c.length;
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
function R({
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
      label: S(l, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(R, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ u.createElement(
        R,
        {
          label: S(l, "status"),
          value: e.status || "unknown"
        }
      ), /* @__PURE__ */ u.createElement(R, { label: "Query", value: gn(e.query) }), /* @__PURE__ */ u.createElement(
        R,
        {
          label: S(l, "duration"),
          value: ie(
            e.durationMs === null ? null : e.durationMs / 1e3
          )
        }
      ), /* @__PURE__ */ u.createElement(R, { label: "Started", value: Re(e.startedAt) }), /* @__PURE__ */ u.createElement(
        R,
        {
          label: S(l, "llmCalls"),
          value: String(e.llmCalls)
        }
      ), /* @__PURE__ */ u.createElement(
        R,
        {
          label: S(l, "toolCalls"),
          value: String(e.toolCalls)
        }
      ), e.models.length > 0 ? /* @__PURE__ */ u.createElement(
        R,
        {
          label: S(l, "model"),
          value: e.models.join(", ")
        }
      ) : null, e.errors.length > 0 ? /* @__PURE__ */ u.createElement(G, { type: "danger", style: { fontSize: 12 } }, e.errors.join("; ")) : null)
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(R, { label: "Input", value: ae(e.inputTokens) }), /* @__PURE__ */ u.createElement(R, { label: "Output", value: ae(e.outputTokens) }), /* @__PURE__ */ u.createElement(
        R,
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
      R,
      {
        label: "First TTFT",
        value: ie(e.ttftMs / 1e3)
      }
    ) : null, e.decodeMs !== null ? /* @__PURE__ */ u.createElement(
      R,
      {
        label: "Total decoding",
        value: ie(e.decodeMs / 1e3)
      }
    ) : null, /* @__PURE__ */ u.createElement(
      R,
      {
        label: S(l, "throughput"),
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
  return e === void 0 ? /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, S(r, "noPrevPrompt")) : /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ u.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ u.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ u.createElement(
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
    s.map((c, i) => {
      if (c.kind === "gap")
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
          c.count
        );
      const o = c;
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
      label: S(l, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(R, { label: "#", value: String(e.index) }), /* @__PURE__ */ u.createElement(
        R,
        {
          label: S(l, "status"),
          value: n ? S(l, "promptChanged") : S(l, "promptInitial")
        }
      ), /* @__PURE__ */ u.createElement(R, { label: "SHA", value: e.sha ?? "-" }), /* @__PURE__ */ u.createElement(R, { label: "Chars", value: String(((r = e.prompt) == null ? void 0 : r.length) ?? 0) }), /* @__PURE__ */ u.createElement(R, { label: "Tools", value: String(t.length) }))
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
      label: S(l, "prompt"),
      children: /* @__PURE__ */ u.createElement(ue, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ u.createElement("div", { style: { paddingTop: 4 } }, t.map((c) => /* @__PURE__ */ u.createElement(G, { key: c, code: !0, style: { fontSize: 11 } }, c)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ u.createElement(
          cn,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((c, i) => {
              var g;
              const o = typeof c.name == "string" && c.name || typeof ((g = c.function) == null ? void 0 : g.name) == "string" && c.function.name || `tool-${i + 1}`;
              return {
                key: String(i),
                label: /* @__PURE__ */ u.createElement(G, { code: !0, style: { fontSize: 11 } }, o),
                children: /* @__PURE__ */ u.createElement(ue, { value: c })
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
  const s = le(), [r, c] = Pt(400), i = on(null);
  if (rn(() => {
    const a = (k) => {
      const f = i.current;
      if (f === null) return;
      const m = f.anchorX - k.clientX;
      c(
        Math.min(hn, Math.max(dn, f.anchorWidth + m))
      );
    }, x = () => {
      i.current = null;
    };
    return window.addEventListener("pointermove", a), window.addEventListener("pointerup", x), () => {
      window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", x);
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
          description: S(s, "selectRecord")
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
  const g = o.usage, d = o.timing, v = [];
  return v.push({
    key: "summary",
    label: S(s, "summary"),
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(R, { label: "#", value: String(o.index) }), /* @__PURE__ */ u.createElement(R, { label: "Kind", value: o.kind }), o.runIndex > 0 && n ? /* @__PURE__ */ u.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ u.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => n(o.runIndex)
      },
      "Request #",
      o.runIndex,
      " →"
    )) : null, /* @__PURE__ */ u.createElement(
      R,
      {
        label: S(s, "status"),
        value: o.running ? S(s, "running") : o.isError ? S(s, "error") : S(s, "success"),
        danger: o.isError
      }
    ), o.model ? /* @__PURE__ */ u.createElement(R, { label: S(s, "model"), value: o.model }) : null, o.toolName ? /* @__PURE__ */ u.createElement(R, { label: "Tool", value: o.toolName }) : null, /* @__PURE__ */ u.createElement(
      R,
      {
        label: S(s, "duration"),
        value: ie(o.timeSeconds)
      }
    ), o.note ? /* @__PURE__ */ u.createElement(G, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.spawnSession ? /* @__PURE__ */ u.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ u.createElement(
      R,
      {
        label: S(s, "spawnedAgent"),
        value: o.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ u.createElement(
      an,
      {
        size: "small",
        onClick: () => o.spawnSession && t(o.spawnSession),
        style: { marginTop: 4 }
      },
      S(s, "openChildSession")
    ) : null) : null)
  }), o.kind === "tool" ? (o.toolInput && v.push({
    key: "payload",
    label: S(s, "input"),
    children: /* @__PURE__ */ u.createElement(ue, { value: o.toolInput, json: !0 })
  }), (o.toolOutput || o.toolError) && v.push({
    key: "result",
    label: S(s, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, o.toolError ? /* @__PURE__ */ u.createElement(G, { type: "danger", style: { fontSize: 12 } }, o.toolError) : null, o.toolOutput ? /* @__PURE__ */ u.createElement(ue, { value: o.toolOutput }) : null)
  })) : (o.outputText || o.thinkingText || o.messages || o.marker || o.toolCalls && o.toolCalls.length > 0) && v.push({
    key: "raw",
    label: S(s, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, o.marker ? /* @__PURE__ */ u.createElement(ue, { value: o.marker }) : null, o.toolCalls && o.toolCalls.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, `${S(s, "toolCall")} (${o.toolCalls.length})`), o.toolCalls.map((a, x) => /* @__PURE__ */ u.createElement("div", { key: a.id || x, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ u.createElement(G, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", a.name), /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 11 } }, a.id)))) : null, o.note ? /* @__PURE__ */ u.createElement(G, { type: "warning", style: { fontSize: 12 } }, o.note) : null, o.messages && o.messages.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, `${S(s, "query")} (${o.messages.length})`), o.messages.map((a, x) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: x,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ u.createElement(G, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, a.role),
      /* @__PURE__ */ u.createElement(
        G,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        a.text
      )
    ))) : null, o.thinkingText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, S(s, "thinking")), /* @__PURE__ */ u.createElement(ue, { value: o.thinkingText })) : null, o.outputText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, S(s, "output")), /* @__PURE__ */ u.createElement(ue, { value: o.outputText })) : null)
  }), (o.startedAt !== null || g || d) && v.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(R, { label: "Started", value: Re(o.startedAt) }), /* @__PURE__ */ u.createElement(R, { label: "Total", value: ie(o.timeSeconds) }), d ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
      R,
      {
        label: "TTFT",
        value: ie(d.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      R,
      {
        label: "Decoding",
        value: ie(d.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      R,
      {
        label: S(s, "throughput"),
        value: Ft(
          g == null ? void 0 : g.output_tokens,
          d.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ u.createElement(G, { type: "secondary", style: { fontSize: 12 } }, S(s, "noTiming")))
  }), g && v.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(R, { label: "Input", value: ae(g.input_tokens) }), /* @__PURE__ */ u.createElement(R, { label: "Output", value: ae(g.output_tokens) }), g.cache_creation_input_tokens ? /* @__PURE__ */ u.createElement(
      R,
      {
        label: "Cache write",
        value: ae(g.cache_creation_input_tokens)
      }
    ) : null, g.cache_input_tokens ? /* @__PURE__ */ u.createElement(
      R,
      {
        label: "Cache read",
        value: ae(g.cache_input_tokens)
      }
    ) : null, g.total_tokens !== void 0 ? /* @__PURE__ */ u.createElement(R, { label: "Total", value: ae(g.total_tokens) }) : null, g.time !== void 0 ? /* @__PURE__ */ u.createElement(R, { label: "API time", value: ie(g.time) }) : null)
  }), v.push({
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
    /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(dt, { size: "small", items: v, tabBarStyle: { marginBottom: 8 } }))
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
    get(s, r, c) {
      if (typeof r == "string") {
        const i = r.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const o = +r;
          if (Number.isInteger(o) && o >= 0 && o < e) {
            let g = s[o];
            if (!g) {
              const d = l[o * 2];
              g = s[o] = {
                index: o,
                key: t(o),
                start: d,
                size: l[o * 2 + 1],
                end: d + l[o * 2 + 1],
                lane: 0
              };
            }
            return g;
          }
        }
        if (r === "length") return e;
      }
      return Reflect.get(s, r, c);
    }
  });
}
function be(e, l, t) {
  let n = t.initialDeps ?? [], s, r = !0;
  function c() {
    var i;
    const o = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let g = 0;
    o && (g = Date.now());
    const d = e();
    if (!(d.length !== n.length || d.some((x, k) => n[k] !== x)))
      return s;
    n = d;
    let a = 0;
    if (o && (a = Date.now()), s = l(...d), o) {
      const x = Math.round((Date.now() - g) * 100) / 100, k = Math.round((Date.now() - a) * 100) / 100, f = k / 16, m = (h, E) => {
        for (h = String(h); h.length < E; )
          h = " " + h;
        return h;
      };
      console.info(
        `%c⏱ ${m(k, 5)} /${m(x, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * f, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(r && t.skipInitialOnChange) && t.onChange(s), r = !1, s;
  }
  return c.updateDeps = (i) => {
    n = i;
  }, c;
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
  const s = (c) => {
    const { width: i, height: o } = c;
    l({ width: Math.round(i), height: Math.round(o) });
  };
  if (s(bt(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((c) => {
    const i = () => {
      const o = c[0];
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
  let c = 0;
  const i = r ? null : In(
    s,
    () => l(c, !1),
    e.options.isScrollingResetDelay
  ), o = (v) => () => {
    c = t(n), i == null || i(), l(c, v);
  }, g = o(!0), d = o(!1);
  return n.addEventListener("scroll", g, We), r && n.addEventListener("scrollend", d, We), () => {
    n.removeEventListener("scroll", g), r && n.removeEventListener("scrollend", d);
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
          const c = () => {
            const i = r.target, o = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [g, d] of this.elementsCache)
                if (d === i) {
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
      for (const a in t) {
        const x = t[a];
        x !== void 0 && (r[a] = x);
      }
      const c = this.options;
      let i = null, o = null, g = !1;
      if (c !== void 0 && c.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const a = c.count, x = r.count, k = this.getMeasurements(), f = a > 0 ? ((n = k[0]) == null ? void 0 : n.key) ?? c.getItemKey(0) : null, m = a > 0 ? ((s = k[a - 1]) == null ? void 0 : s.key) ?? c.getItemKey(a - 1) : null;
        if (x !== a || a > 0 && x > 0 && (r.getItemKey(0) !== f || r.getItemKey(x - 1) !== m)) {
          g = !0;
          const b = a > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? k[0] : null;
          b && (i = [b.key, this.getScrollOffset() - b.start]);
          const T = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          T && x > a && this.isAtEnd(c.scrollEndThreshold) && (a === 0 || r.getItemKey(x - 1) !== m) && (o = T);
        }
      }
      this.options = r, g && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let d = !1, v = 0;
      if (i && this.scrollOffset !== null) {
        const [a, x] = i, k = this.getMeasurements(), { count: f, getItemKey: m } = this.options;
        let h = 0;
        for (; h < f && m(h) !== a; )
          h++;
        if (h < f) {
          const E = k[h];
          if (E) {
            const b = Math.max(0, E.start + x);
            b !== this.scrollOffset && (v = b - this.scrollOffset, this.scrollOffset = b, d = !0);
          }
        }
      }
      (d || o) && (this.pendingScrollAnchor = [
        d ? i[0] : null,
        d ? i[1] : 0,
        o,
        v
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
          this.options.observeElementOffset(this, (r, c) => {
            if (c && this._intendedScrollOffset === null && r === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(r - this._intendedScrollOffset) < 1.5 && (r = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const i = this.getScrollOffset();
            this.scrollDirection = c ? i === r ? this.scrollDirection : i < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = c, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const r = this.scrollElement, c = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, i = () => {
            this._iosTouching = !1, !(!Ze() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            c,
            We
          ), r.addEventListener(
            "touchend",
            i,
            We
          ), this.unsubs.push(() => {
            r.removeEventListener("touchstart", c), r.removeEventListener("touchend", i), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const s = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, s && this.scrollElement && this.options.enabled) {
        const [r, c, i, o] = s;
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
      (t, n, s, r, c, i, o, g) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: c,
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
        enabled: c,
        lanes: i,
        laneAssignmentMode: o,
        gap: g
      }, d) => {
        const v = this.itemSizeCache;
        if (!c)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const h of this.laneAssignments.keys())
            h >= t && this.laneAssignments.delete(h);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((h) => {
          this.itemSizeCache.set(h.key, h.size);
        }));
        const a = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const h = t * 2;
          let E = this._flatMeasurements;
          if (!E || E.length < h) {
            const A = new Float64Array(h);
            E && a > 0 && A.set(E.subarray(0, a * 2)), E = A, this._flatMeasurements = E;
          }
          let b;
          if (a === 0)
            b = n + s;
          else {
            const A = a - 1;
            b = E[A * 2] + E[A * 2 + 1] + g;
          }
          for (let A = a; A < t; A++) {
            const B = r(A), z = v.get(B), H = typeof z == "number" ? z : this.options.estimateSize(A);
            E[A * 2] = b, E[A * 2 + 1] = H, b += H + g;
          }
          const T = _n(t, E, r);
          return this.measurementsCache = T, T;
        }
        const x = this.measurementsCache.slice(0, a), k = new Array(i).fill(
          void 0
        ), f = new Float64Array(i);
        let m = 0;
        for (let h = 0; h < a; h++) {
          const E = x[h];
          E && (k[E.lane] === void 0 && m++, k[E.lane] = h, f[E.lane] = E.end);
        }
        for (let h = a; h < t; h++) {
          const E = r(h), b = this.laneAssignments.get(h);
          let T, A;
          const B = o === "estimate" || v.has(E);
          if (b !== void 0 && this.options.lanes > 1) {
            T = b;
            const O = k[T], F = O !== void 0 ? x[O] : void 0;
            A = F ? F.end + g : n + s;
          } else if (m === i) {
            let O = 0, F = f[0], de = k[0];
            for (let Y = 1; Y < i; Y++) {
              const q = f[Y];
              (q < F || q === F && k[Y] < de) && (O = Y, F = q, de = k[Y]);
            }
            T = O, A = F + g, B && this.laneAssignments.set(h, T);
          } else
            T = h % this.options.lanes, A = n + s, B && this.laneAssignments.set(h, T);
          const z = v.get(E), H = typeof z == "number" ? z : this.options.estimateSize(h), L = A + H;
          x[h] = {
            index: h,
            start: A,
            size: H,
            end: L,
            key: E,
            lane: T
          }, k[T] === void 0 && m++, k[T] = h, f[T] = L;
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
        ), c = Math.max(0, s - r), i = Math.min(
          this.options.count - 1,
          s + r
        );
        return t >= c && t <= i;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((c, i) => {
          c.isConnected || (this.observer.unobserve(c), this.elementsCache.delete(i));
        });
        return;
      }
      const n = this.indexFromElement(t), s = this.options.getItemKey(n), r = this.elementsCache.get(s);
      r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.elementsCache.set(s, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var s, r;
      if (t < 0 || t >= this.options.count) return;
      let c, i, o;
      const g = this._flatMeasurements;
      if (this.options.lanes === 1 && g !== null)
        o = this.options.getItemKey(t), i = g[t * 2], c = g[t * 2 + 1];
      else {
        const a = this.measurementsCache[t];
        if (!a) return;
        o = a.key, i = a.start, c = a.size;
      }
      const d = this.itemSizeCache.get(o) ?? c, v = n - d;
      if (v !== 0) {
        const a = this.options.anchorTo === "end" && ((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, x = a ? this.getTotalSize() : 0, k = this.getScrollOffset() + this.scrollAdjustments, m = !this.itemSizeCache.has(o) ? (
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
          i + d <= k && this.scrollDirection !== "backward"
        ), h = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: o,
            start: i,
            size: c,
            end: i + c,
            lane: 0
          },
          v,
          this
        ) : m);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(o, n), this.itemSizeCacheVersion++;
        let E = !1;
        a ? E = this.applyScrollAdjustment(
          this.getTotalSize() - x
        ) : h && (E = this.applyScrollAdjustment(v)), this.notify(E);
      }
    }, this.getVirtualItems = be(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let r = 0, c = t.length; r < c; r++) {
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
      const s = this._flatMeasurements, r = this.options.lanes === 1 && s != null, c = Bt(
        0,
        n.length - 1,
        r ? (i) => s[i * 2] : (i) => St(n[i]).start,
        t
      );
      return St(n[c]);
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
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, t), 0);
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
      const i = n === "end" ? c.end + this.options.scrollPaddingEnd : c.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, n, c.size),
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
      const [c, i] = r, o = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: s,
        startedAt: o,
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
        for (; c >= 0 && r.some((i) => i === null); ) {
          const i = n[c];
          r[i.lane] === null && (r[i.lane] = i.end), c--;
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
    const n = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, s = n ? n[0] : this.scrollState.lastTargetOffset, r = 1, c = s !== this.scrollState.lastTargetOffset;
    if (!c && Mn(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== s && this._scrollToOffset(s, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, c) {
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
    let d = g;
    const v = t + l;
    for (; d < r && s[d * 2] + s[d * 2 + 1] < v; )
      d++;
    return { startIndex: g, endIndex: d };
  }
  let i = Bt(0, r, (g) => e[g].start, t), o = i;
  if (n === 1)
    for (; o < r && e[o].end < t + l; )
      o++;
  else if (n > 1) {
    const g = Array(n).fill(0);
    for (; o < r && g.some((v) => v < t + l); ) {
      const v = e[o];
      g[v.lane] = v.end, o++;
    }
    const d = Array(n).fill(t + l);
    for (; i >= 0 && d.some((v) => v >= t); ) {
      const v = e[i];
      d[v.lane] = v.start, i--;
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
  const s = kn((d) => d + 1, 0)[1], r = Sn({
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
  const c = (d) => {
    const v = r.current;
    if (!v.enabled || !v.container) return;
    const a = d.getTotalSize();
    if (a !== v.lastSize) {
      v.lastSize = a;
      const x = d.options.horizontal ? "width" : "height";
      v.container.style[x] = `${a}px`;
    }
  }, i = (d) => {
    const v = r.current;
    if (!v.enabled || !v.container) return;
    c(d);
    const a = !!d.options.horizontal, x = v.mode === "transform", k = a ? "left" : "top", f = d.options.scrollMargin, m = d.getVirtualItems();
    for (const h of m) {
      const E = h.start - f, b = d.elementsCache.get(h.key);
      b && v.lastPositions.get(b) !== E && (v.lastPositions.set(b, E), x ? b.style.transform = a ? `translate3d(${E}px, 0, 0)` : `translate3d(0, ${E}px, 0)` : b.style[k] = `${E}px`);
    }
  }, o = {
    ...n,
    onChange: (d, v) => {
      var a;
      const x = r.current;
      let k = !0;
      if (x.enabled) {
        i(d);
        const f = d.range, m = x.prevRange;
        k = !m || m.isScrolling !== d.isScrolling || m.startIndex !== (f == null ? void 0 : f.startIndex) || m.endIndex !== (f == null ? void 0 : f.endIndex), k && (x.prevRange = f ? {
          startIndex: f.startIndex,
          endIndex: f.endIndex,
          isScrolling: d.isScrolling
        } : null);
      }
      k && (e && v ? Tn(s) : s()), (a = n.onChange) == null || a.call(n, d, v);
    }
  }, [g] = bn(() => {
    const d = new Nn(o);
    return Object.assign(d, {
      containerRef: (v) => {
        const a = r.current;
        if (a.container = v, a.lastSize = null, v && a.enabled) {
          const x = d.getTotalSize();
          a.lastSize = x;
          const k = d.options.horizontal ? "width" : "height";
          v.style[k] = `${x}px`;
        }
      }
    });
  });
  return g.setOptions(o), et(() => g._didMount(), []), et(() => (c(g), g._willUpdate())), et(() => {
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
const Ke = window.QwenPaw.host, C = Ke.React, { useRef: Wn } = C, { Tag: Ht } = Ke.antd, { Text: ye } = Ke.antd.Typography, {
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
  user: /* @__PURE__ */ C.createElement(qn, null),
  message: /* @__PURE__ */ C.createElement(Un, null),
  tool: /* @__PURE__ */ C.createElement(Xn, null),
  system: /* @__PURE__ */ C.createElement(Kn, null)
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
  const r = e.usage, c = r && (r.input_tokens || r.output_tokens) ? `${ae(r.input_tokens)}→${ae(
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
        height: at,
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
      e.kind === "tool" && e.toolName ? /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(ye, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ C.createElement(ye, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ C.createElement(
        ye,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ C.createElement(
        ye,
        {
          type: e.isError ? "danger" : void 0,
          style: { fontSize: 12 }
        },
        e.running ? `⏳ ${e.text || "…"}` : e.text || "—"
      )
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
      c ? /* @__PURE__ */ C.createElement("span", { style: { color: "#1677ff" } }, c) : null,
      c ? " · " : "",
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
  const c = le();
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Wt }
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
      /* @__PURE__ */ C.createElement(ye, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ C.createElement(ye, { type: "secondary", style: { fontSize: 11 } }, ie(e.durationMs / 1e3)),
      /* @__PURE__ */ C.createElement(ye, { type: "secondary", style: { fontSize: 11 } }, n, " ", S(c, "events")),
      /* @__PURE__ */ C.createElement(
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
  onSelectedIndexChange: c,
  onSelectedTurnChange: i,
  onToggleTurn: o,
  callsCollapsed: g,
  hasOlderRecords: d,
  loadingOlder: v,
  onLoadOlder: a,
  initialRecord: x,
  emptyText: k
}) {
  const f = le(), m = Wn(null), h = e.filter((z) => z.turn !== null), E = h.length > 1, b = C.useMemo(() => {
    var H;
    const z = [];
    d && z.push({
      key: "load-older",
      height: kt,
      type: "load-older"
    }), x && (z.push({
      key: "initial",
      height: at,
      type: "initial",
      record: x
    }), z.push({
      key: "initial-divider",
      height: wt,
      type: "divider"
    }));
    for (const L of h) {
      const O = L.turn;
      if (z.push({
        key: `turn-${O}`,
        height: Wt,
        type: "boundary",
        turn: L
      }), !n.has(O))
        for (const F of ((H = L.groups[0]) == null ? void 0 : H.cells) ?? [])
          g && F.kind === "tool" || z.push({
            key: `rec-${F.index}`,
            height: at,
            type: "record",
            record: F
          });
    }
    return z;
  }, [
    h,
    n,
    g,
    d,
    x
  ]), T = C.useCallback(
    (z) => s !== null && !s.has(z.index) || r !== null && !r.has(z.index),
    [s, r]
  ), A = (z) => {
    var H;
    switch (z.type) {
      case "load-older":
        return /* @__PURE__ */ C.createElement("div", { style: { textAlign: "center", height: kt } }, /* @__PURE__ */ C.createElement(
          "button",
          {
            type: "button",
            onClick: a,
            disabled: v,
            style: {
              border: "1px solid rgba(128,128,128,0.3)",
              borderRadius: 10,
              background: "transparent",
              padding: "1px 12px",
              fontSize: 11,
              cursor: v ? "default" : "pointer",
              color: "rgba(128,128,128,1)"
            }
          },
          v ? "…" : `⋯ ${S(f, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ C.createElement(
          "div",
          {
            style: {
              height: wt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const L = z.record;
        return /* @__PURE__ */ C.createElement(
          Tt,
          {
            record: L,
            selected: l === L.index,
            dimmed: T(L),
            multiRequest: E,
            onSelect: () => c(L.index)
          }
        );
      }
      case "boundary": {
        const L = z.turn, O = L.turn;
        return /* @__PURE__ */ C.createElement(
          ns,
          {
            turn: L,
            collapsed: n.has(O),
            selected: t === O,
            cellCount: ((H = L.groups[0]) == null ? void 0 : H.cells.length) ?? 0,
            onToggle: () => o(O),
            onSelect: () => i(O)
          }
        );
      }
      case "record":
      default: {
        const L = z.record;
        return /* @__PURE__ */ C.createElement(
          Tt,
          {
            record: L,
            selected: l === L.index,
            dimmed: T(L),
            multiRequest: E,
            onSelect: () => c(L.index)
          }
        );
      }
    }
  };
  if (b.length === 0)
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
        k ?? S(f, "noSessions")
      )
    );
  const B = b.length <= Zn ? /* @__PURE__ */ C.createElement("div", null, b.map((z) => A(z))) : /* @__PURE__ */ C.createElement(
    ls,
    {
      rows: b,
      scrollRef: m,
      renderRow: A
    }
  );
  return /* @__PURE__ */ C.createElement(
    "div",
    {
      ref: m,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    B
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
  var k;
  const l = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), c = [], i = /* @__PURE__ */ new Map();
  let o = 0, g = 0;
  const d = (f) => f.groups[0].cells, v = (f, m) => {
    const h = r.get(f);
    h ? h.push(m) : r.set(f, [m]);
  }, a = (f, m) => {
    if (!f) {
      c.push(m);
      return;
    }
    const h = t.get(f);
    h ? (m.runIndex = h.turn ?? 0, d(h).push(m)) : v(f, m);
  }, x = (f, m) => {
    const h = r.get(m);
    if (h) {
      for (const E of h) d(f).push(E);
      r.delete(m);
    }
  };
  for (const f of e) {
    const m = tt(f);
    switch (f.type) {
      case "run/start": {
        g += 1;
        const h = {
          turn: g,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${g}`, cells: [] }]
        };
        t.set(f.run_id, h), l.push(h), x(h, f.run_id);
        for (const T of c.splice(0))
          T.runIndex = g, d(h).push(T);
        const E = Array.isArray(m.messages) ? m.messages : [], b = String(m.query ?? "");
        d(h).push({
          index: ++o,
          runIndex: g,
          runId: f.run_id,
          kind: "user",
          text: fe(b) || fe((k = E.at(-1)) == null ? void 0 : k.text),
          messages: E,
          timeSeconds: 0,
          startedAt: ee(f.t),
          isError: !1,
          running: !1,
          model: void 0
        });
        break;
      }
      case "run/end": {
        const h = t.get(f.run_id), E = String(m.status ?? "unknown");
        if (h && (h.status = E, h.durationMs = typeof m.duration_ms == "number" ? m.duration_ms : null), E === "error" && m.error) {
          const b = h ?? {
            turn: null,
            status: E,
            durationMs: typeof m.duration_ms == "number" ? m.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          h || l.push(b), b.groups[0].cells.push({
            index: ++o,
            runIndex: g,
            runId: f.run_id,
            kind: "system",
            text: fe(String(m.error)) || "run failed",
            marker: String(m.error ?? "run failed"),
            timeSeconds: typeof m.duration_ms == "number" ? m.duration_ms / 1e3 : null,
            startedAt: ee(f.t),
            isError: !0,
            running: !1,
            raw: [f]
          });
        }
        break;
      }
      case "agent/spawn": {
        const h = typeof m.child_session_id == "string" ? m.child_session_id : void 0, E = typeof m.child_agent_id == "string" ? m.child_agent_id : "?";
        a(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          text: `🚀 ${E} → ${h ?? "?"}`,
          timeSeconds: 0,
          startedAt: ee(f.t),
          isError: !1,
          running: !1,
          spawnSession: h,
          spawnAgent: E,
          raw: [f]
        });
        break;
      }
      case "message/inbound": {
        const h = Array.isArray(m.parts) ? m.parts : [], E = h.map((b) => String(b.type ?? "?").replace("Content", "")).join(",");
        a(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          text: `📥 ${h.length} part(s)${E ? ` [${E}]` : ""}`,
          timeSeconds: 0,
          startedAt: ee(f.t),
          isError: !1,
          running: !1,
          raw: [f]
        });
        break;
      }
      case "message/outbound": {
        const h = typeof m.text == "string" ? m.text : "";
        a(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          text: `📤 ${fe(h) || "(empty)"}`,
          timeSeconds: 0,
          startedAt: ee(f.t),
          isError: !1,
          running: !1,
          outputText: h || void 0,
          raw: [f]
        });
        break;
      }
      case "approval/asked": {
        a(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          text: `🛡 approval asked: ${String(m.tool_name ?? "?")}`,
          timeSeconds: 0,
          startedAt: ee(f.t),
          isError: !1,
          running: !1,
          raw: [f]
        });
        break;
      }
      case "approval/decided": {
        const h = String(m.decision ?? "?");
        a(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          text: `🛡 approval ${h}${m.tool_name ? `: ${String(m.tool_name)}` : ""}`,
          timeSeconds: 0,
          startedAt: ee(f.t),
          isError: h === "denied",
          running: !1,
          raw: [f]
        });
        break;
      }
      case "llm/header": {
        const h = typeof m.sha256 == "string" ? m.sha256 : "", E = typeof m.prev_sha256 == "string" ? m.prev_sha256 : void 0, b = m.reason === "changed" ? "changed" : "initial", T = typeof m.system_prompt == "string" ? m.system_prompt : "", A = Array.isArray(m.tools) ? m.tools : [], B = Array.isArray(m.schemas) ? m.schemas : void 0;
        a(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          text: b === "initial" ? `⚙ ${T ? `System Prompt (${T.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ee(f.t),
          isError: !1,
          running: !1,
          prompt: T,
          prevPrompt: i.get(E ?? ""),
          headerTools: A,
          headerReason: b,
          sha: h,
          prevSha: E,
          schemas: B,
          raw: [f]
        }), h && i.set(h, T);
        break;
      }
      case "llm/call": {
        const h = tt(f), E = h.options && typeof h.options == "object" && Object.keys(h.options).length > 0 ? h.options : void 0, b = {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ee(f.t),
          isError: !1,
          running: !0,
          model: String(h.model ?? "unknown"),
          options: E
        };
        a(f.run_id, b);
        const T = n.get(f.run_id) ?? [];
        T.push({ cell: b, callData: h, call: f }), n.set(f.run_id, T);
        break;
      }
      case "llm/result": {
        const h = n.get(f.run_id), E = h == null ? void 0 : h.shift(), b = (E == null ? void 0 : E.callData) ?? {}, T = typeof m.duration_ms == "number" ? m.duration_ms : null, A = m.usage ?? void 0, B = m.timing, z = Array.isArray(m.tool_calls) ? m.tool_calls : void 0, O = {
          text: (m.error ? fe(String(m.error)) : fe(String(m.text ?? ""))) || (z && z.length > 0 ? `🛠 ${z.map((F) => F.name).join(", ")}` : ""),
          timeSeconds: T === null ? null : T / 1e3,
          isError: !!m.error,
          running: !1,
          outputText: m.text ? String(m.text) : void 0,
          thinkingText: m.thinking ? String(m.thinking) : void 0,
          usage: A,
          timing: B,
          toolCalls: z,
          note: m.note ? String(m.note) : void 0
        };
        E ? (Object.assign(E.cell, O), E.cell.model = String(
          m.model ?? b.model ?? E.cell.model
        ), E.cell.raw = [
          ...E.call ? [E.call] : [],
          f
        ]) : a(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          startedAt: ee(f.t),
          model: String(m.model ?? b.model ?? "unknown"),
          ...O
        });
        break;
      }
      case "tool/call": {
        const h = tt(f), E = {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "tool",
          text: `${String(h.name ?? "?")}(${fe(
            String(h.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: ee(f.t),
          isError: !1,
          running: !0,
          toolName: String(h.name ?? "?"),
          toolInput: h.input ? String(h.input) : void 0
        };
        a(f.run_id, E);
        const b = s.get(f.run_id) ?? [];
        b.push({ cell: E, callData: h, call: f }), s.set(f.run_id, b);
        break;
      }
      case "tool/result": {
        const h = s.get(f.run_id), E = typeof m.tool_call_id == "string" ? m.tool_call_id : null;
        let b;
        if (h) {
          const L = E ? h.findIndex(
            (O) => O.callData.tool_call_id === E
          ) : -1;
          L >= 0 ? b = h.splice(L, 1)[0] : b = h.shift();
        }
        const T = typeof m.duration_ms == "number" ? m.duration_ms : null, A = m.ok !== !1 && !m.error, B = m.output ? String(m.output) : void 0, z = B ? ` → ${fe(B, 60)}` : "", H = {
          timeSeconds: T === null ? null : T / 1e3,
          isError: !A,
          running: !1,
          toolOutput: B,
          toolError: m.error ? String(m.error) : void 0,
          note: m.note ? String(m.note) : void 0
        };
        b ? (Object.assign(b.cell, H), b.cell.text = `${b.cell.text}${z}`, b.cell.raw = [
          ...b.call ? [b.call] : [],
          f
        ]) : a(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "tool",
          text: `?${z}`,
          startedAt: ee(f.t),
          ...H
        });
        break;
      }
    }
  }
  for (const [f, m] of r) {
    const h = t.get(f);
    if (h) {
      for (const E of m) d(h).push(E);
      r.delete(f);
    }
  }
  return l;
}
function _t(e) {
  return e.flatMap((l) => l.groups.flatMap((t) => t.cells));
}
function os(e) {
  var c;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const l = e[0], t = ((c = l.groups[0]) == null ? void 0 : c.cells) ?? [], n = t.findIndex(
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
    const r = s.groups.flatMap((c) => c.cells);
    r.length !== 0 && (s.turn !== null && n.push({
      turn: s.turn,
      time: t.length
    }), t.push(
      ...r.map(
        (c, i) => ({
          start: t.length + i,
          end: t.length + i + 1,
          index: c.index,
          isError: c.isError === !0,
          kind: c.kind,
          label: c.text,
          lane: Vt(c.kind)
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
  const n = e.flatMap((d) => {
    const v = d.groups.flatMap(
      (a) => a.cells.flatMap((x) => {
        const k = cs(x);
        return k === null ? [] : [
          {
            ...k,
            index: x.index,
            isError: x.isError === !0,
            kind: x.kind,
            label: x.text,
            lane: Vt(x.kind)
          }
        ];
      })
    );
    return v.length === 0 ? [] : [{ turn: d.turn, rawSpans: v }];
  }), s = n.flatMap((d) => d.rawSpans);
  if (s.length === 0) return null;
  const r = /* @__PURE__ */ new Map();
  let c = 0, i = null;
  for (const d of [...s].sort(
    (v, a) => v.start - a.start || v.end - a.end
  ))
    t && i !== null && d.start > i && (c += d.start - i), r.set(d, c), i = i === null ? d.end : Math.max(i, d.end);
  const o = [], g = [];
  for (const d of n) {
    const v = d.rawSpans.map((a) => {
      const x = r.get(a) ?? 0;
      return {
        ...a,
        start: a.start - x,
        end: (l ? a.end : a.start) - x
      };
    });
    o.push(...v), d.turn !== null && g.push({
      turn: d.turn,
      time: Math.min(...v.map((a) => a.start))
    });
  }
  return {
    start: Math.min(...o.map((d) => d.start)),
    end: Math.max(...o.map((d) => d.end)),
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
  )} · Decoding ${st(l.decodingMs)}`, c = [n, r].filter((i) => i !== null).join(" · ");
  return [t, s, c].filter((i) => i !== null && i !== "").join(`
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
  selectedIndex: c = null,
  searchMatchIndexes: i = null,
  onRangeChange: o,
  onRecordSelect: g,
  onRecordFocus: d
}) {
  const v = typeof Ve.useTheme == "function" ? Ve.useTheme() : void 0, a = Ct(
    () => Ut(l, t),
    [t, l]
  ), x = Ct(
    () => new Map(
      l.flatMap(
        (y) => y.groups.flatMap(
          (M) => M.cells.map(
            ($) => [$.index, vs($)]
          )
        )
      )
    ),
    [l]
  ), k = Pe(null), f = Pe(null), m = Pe(null), h = Pe(null), [E, b] = xe(null), [T, A] = xe(null), [B, z] = xe(!1), [H, L] = xe(!1), [O, F] = xe(null), [de, Y] = xe(!1);
  Fe(() => {
    a !== null && n !== null && (n.end < a.start || n.start > a.end) && o(null);
  }, [a, o, n]), Fe(() => {
    a !== null && (Y(!1), F(
      (y) => y !== null && (y.end < a.start || y.start > a.end) ? null : y
    ));
  }, [a]), Fe(() => {
    if (a === null || c === null) return;
    const y = a.spans.find(
      (M) => M.index === c
    );
    y !== void 0 && (Y(!0), F((M) => {
      if (M === null || y.end > M.start && y.start < M.end)
        return M;
      const $ = Math.max(1, M.end - M.start), j = y.end <= M.start ? y.start : y.end - $, P = Math.min(
        Math.max(j, a.start),
        Math.max(a.start, a.end - $)
      );
      return P === M.start ? M : { start: P, end: P + $ };
    }));
  }, [a, c]);
  const q = Math.max(1, ((a == null ? void 0 : a.end) ?? 0) - ((a == null ? void 0 : a.start) ?? 0)), Le = Math.min(
    q,
    Math.max(1, ((O == null ? void 0 : O.end) ?? 0) - ((O == null ? void 0 : O.start) ?? 0))
  ), Xe = a === null || O === null ? (a == null ? void 0 : a.start) ?? 0 : Math.min(
    Math.max(O.start, a.start),
    a.end - Le
  ), W = O === null ? q : Le, V = O === null ? (a == null ? void 0 : a.start) ?? 0 : Xe, Te = s && a !== null && V === a.start, _e = r === void 0 || B ? void 0 : () => {
    z(!0), r().finally(() => {
      z(!1);
    });
  }, he = a === null ? void 0 : {
    "--trajectory-domain-left": `${-(V - a.start) / W * 100}%`,
    "--trajectory-domain-width": `${q / W * 100}%`
  }, Me = a === null || n === null ? null : zt(
    n,
    V,
    W,
    a.start,
    a.end
  ), ce = (a === null || E === null ? null : zt(
    E,
    V,
    W,
    a.start,
    a.end
  )) ?? Me, se = E ?? n;
  if (Fe(() => {
    const y = m.current;
    if (y === null) return;
    const M = ($) => {
      $.preventDefault();
      const j = h.current;
      if (j === null || a === null) return;
      Y(!1);
      const P = j.getBoundingClientRect(), p = rt(
        ($.clientX - P.left) / Math.max(1, P.width)
      ), _ = Math.min(
        q,
        Math.max(
          Math.min(
            t === "sequence" ? ms : 20,
            q
          ),
          W * Math.exp($.deltaY * 15e-4)
        )
      );
      if (_ >= q * 0.999) {
        F(null);
        return;
      }
      const I = V + p * W, K = Math.min(
        Math.max(I - p * _, a.start),
        a.end - _
      );
      F({ start: K, end: K + _ });
    };
    return y.addEventListener("wheel", M, { passive: !1 }), () => {
      y.removeEventListener("wheel", M);
    };
  }, [W, V, q, t, a]), a === null)
    return /* @__PURE__ */ D.createElement(
      "section",
      {
        ref: m,
        className: Z.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ D.createElement("div", { className: Z.plot }, /* @__PURE__ */ D.createElement(Ot, null), /* @__PURE__ */ D.createElement("div", { className: Z.track }, /* @__PURE__ */ D.createElement("span", { className: Z.empty }, "No timing data"), s && /* @__PURE__ */ D.createElement(
        At,
        {
          loading: B,
          onHover: () => {
            A(null);
          },
          onLoad: _e
        }
      )))
    );
  const Ie = Math.min(
    W,
    q / a.spans.length
  ), me = (y) => {
    const M = y.currentTarget.getBoundingClientRect();
    return rt((y.clientX - M.left) / Math.max(1, M.width));
  }, U = (y) => {
    var P;
    const M = y.target instanceof HTMLElement ? y.target : null, $ = (P = M == null ? void 0 : M.closest("[data-timeline-record-index]")) == null ? void 0 : P.dataset.timelineRecordIndex;
    if ($ === void 0) return null;
    const j = Number($);
    return Number.isFinite(j) ? j : null;
  }, ve = (y) => {
    o(y);
  }, $e = (y) => {
    if (y.button === 2) {
      f.current = {
        anchorClientX: y.clientX,
        anchorStart: V,
        moved: !1,
        pannable: O !== null,
        pointerId: y.pointerId
      }, O !== null && Y(!1), L(!0), typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId);
      return;
    }
    if (y.button !== 0) return;
    const M = me(y), $ = V + M * W, j = U(y);
    A({ fraction: M, recordIndex: j }), k.current = {
      pointerId: y.pointerId,
      anchorTime: $,
      anchorClientX: y.clientX,
      recordIndex: j
    }, typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId), b({ start: $, end: $ });
  }, qe = (y) => {
    const M = y.currentTarget.getBoundingClientRect(), $ = me(y);
    A({ fraction: $, recordIndex: U(y) });
    const j = f.current;
    if (j !== null && j.pointerId === y.pointerId) {
      if (Math.abs(y.clientX - j.anchorClientX) >= lt && (j.moved = !0), !j.pannable) return;
      const I = (y.clientX - j.anchorClientX) / Math.max(1, M.width), K = Math.min(
        Math.max(j.anchorStart - I * W, a.start),
        a.end - W
      );
      F({ start: K, end: K + W });
      return;
    }
    const P = k.current;
    if (P === null || P.pointerId !== y.pointerId) return;
    let p = V;
    if (O !== null) {
      const I = y.clientX - M.left, K = Math.min(
        gs,
        Math.max(1, M.width * fs)
      ), X = I < K ? -1 : I > M.width - K ? 1 : 0;
      if (X !== 0) {
        const Ee = X < 0 ? K - I : I - (M.width - K), re = rt(Ee / K), oe = V + X * W * ps * Math.max(0.2, re);
        p = Math.min(
          Math.max(oe, a.start),
          a.end - W
        ), p !== V && (Y(!1), F({
          start: p,
          end: p + W
        }));
      }
    }
    const _ = p + $ * W;
    b(ct(P.anchorTime, _));
  }, De = (y) => {
    const M = f.current;
    if (M !== null && M.pointerId === y.pointerId) {
      const X = M.moved || Math.abs(y.clientX - M.anchorClientX) >= lt;
      f.current = null, L(!1), X || o(null);
      return;
    }
    const $ = k.current;
    if ($ === null || $.pointerId !== y.pointerId) return;
    const j = me(y), P = V + j * W, p = ct($.anchorTime, P);
    A({ fraction: j, recordIndex: U(y) }), k.current = null, b(null);
    const _ = Math.abs(y.clientX - $.anchorClientX) < lt, I = _ && $.recordIndex !== null ? a.spans.find((X) => X.index === $.recordIndex) : void 0;
    if (I !== void 0) {
      o(null), g == null || g(I.index);
      return;
    }
    const K = p.end - p.start < Ie ? bs(
      _ ? p.start : (p.start + p.end) / 2,
      Ie,
      a.start,
      a.end
    ) : p;
    if (ve(K), _) {
      const X = p.start, Ee = a.spans.reduce((re, oe) => {
        const je = X < re.start ? re.start - X : X > re.end ? X - re.end : 0;
        return (X < oe.start ? oe.start - X : X > oe.end ? X - oe.end : 0) < je ? oe : re;
      });
      d == null || d(Ee.index);
    }
  }, Je = (y) => {
    y.key !== "Escape" || n === null || (y.preventDefault(), o(null));
  }, Ge = () => {
    k.current = null, f.current = null, b(null), A(null), L(!1);
  };
  return /* @__PURE__ */ D.createElement(
    "section",
    {
      ref: m,
      className: Z.root,
      "data-theme": v || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ D.createElement("div", { className: Z.plot }, /* @__PURE__ */ D.createElement(Ot, null), /* @__PURE__ */ D.createElement(
      "div",
      {
        ref: h,
        className: Z.track,
        "data-panning": H || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: Je,
        onPointerDown: $e,
        onPointerMove: qe,
        onPointerUp: De,
        onPointerCancel: Ge,
        onPointerLeave: () => {
          k.current === null && f.current === null && A(null);
        },
        onDoubleClick: (y) => {
          y.preventDefault(), o(null);
        },
        onContextMenu: (y) => {
          y.preventDefault();
        }
      },
      Te && /* @__PURE__ */ D.createElement(
        At,
        {
          loading: B,
          onHover: () => {
            A(null);
          },
          onLoad: _e
        }
      ),
      T !== null && T.recordIndex === null && E === null && /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.hoverLine,
          "data-timeline-hover-line": !0,
          "aria-hidden": "true",
          style: {
            "--trajectory-hover-left": `${T.fraction * 100}%`
          }
        }
      ),
      ce !== null && /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.selection,
          "data-dragging": E === null ? void 0 : "true",
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
          "data-dragging": E === null ? void 0 : "true",
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
        a.turnBoundaries.filter(
          (y) => y.time > a.start && y.time >= V && y.time <= V + W
        ).map((y) => /* @__PURE__ */ D.createElement(
          "span",
          {
            className: Z.turnBoundary,
            "data-turn": y.turn,
            key: y.turn,
            style: {
              "--trajectory-turn-left": `${(y.time - a.start) / q * 100}%`
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
        a.spans.filter(
          (y) => y.index === c || y.end >= V && y.start <= V + W
        ).map((y) => {
          const M = (y.start - a.start) / q, j = (y.end - y.start) / q * 100, P = x.get(y.index), p = P == null ? void 0 : P.ttftMs, _ = P == null ? void 0 : P.decodingMs, I = p === void 0 || _ === void 0 || p + _ <= 0 ? null : p / (p + _);
          return /* @__PURE__ */ D.createElement(
            Kt,
            {
              key: y.index,
              label: Ss(y.kind, P),
              placement: "bottom"
            },
            /* @__PURE__ */ D.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: Z.span,
                "data-timeline-span": y.kind,
                "data-timeline-record-index": y.index,
                "data-assistant-timing": I === null ? void 0 : "true",
                "data-error": y.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": y.index === c || void 0,
                "data-hovered": (T == null ? void 0 : T.recordIndex) === y.index || void 0,
                "data-search-match": i === null ? void 0 : i.has(y.index) ? "true" : "false",
                "data-selected": se === null ? void 0 : y.start <= se.end && y.end >= se.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${M * 100}%`,
                  "--trajectory-span-width": `${j}%`,
                  "--trajectory-span-gap": `min(${j * 0.08}%, 1px)`,
                  "--trajectory-span-lane": y.lane,
                  ...I === null ? {} : {
                    "--trajectory-assistant-ttft": `${I * 100}%`
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
  allCollapsed: c,
  hasRequests: i,
  onToggleCollapseAll: o,
  callsCollapsed: g,
  onToggleCallsCollapsed: d
}) {
  const v = le();
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
    /* @__PURE__ */ te.createElement(Rt, { title: S(v, "projectionHint") }, /* @__PURE__ */ te.createElement(
      Ts,
      {
        size: "small",
        value: e,
        options: r,
        onChange: (a) => l(a)
      }
    )),
    /* @__PURE__ */ te.createElement(
      ks,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ te.createElement(Cs, null),
        placeholder: S(v, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (a) => n(a.target.value)
      }
    ),
    i && /* @__PURE__ */ te.createElement(
      Rt,
      {
        title: c ? S(v, "expandAll") : S(v, "collapseAll")
      },
      /* @__PURE__ */ te.createElement(
        ws,
        {
          size: "small",
          type: "text",
          icon: c ? /* @__PURE__ */ te.createElement(Ms, null) : /* @__PURE__ */ te.createElement(_s, null),
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
      S(v, "refresh")
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
  const n = le(), s = (c, i, o) => /* @__PURE__ */ w.createElement(
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
    /* @__PURE__ */ w.createElement(ge, { style: { fontSize: 13 } }, c),
    /* @__PURE__ */ w.createElement(
      Ds,
      {
        size: "small",
        checked: !!i,
        onChange: (g) => l({ [o]: g })
      }
    )
  ), r = /* @__PURE__ */ w.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ w.createElement(ge, { strong: !0, style: { fontSize: 13 } }, S(n, "settings")), /* @__PURE__ */ w.createElement("div", { style: { marginTop: 8 } }, e ? [
    s(S(n, "enabled"), e.enabled, "enabled"),
    s(S(n, "captureLlm"), e.capture_llm, "capture_llm"),
    s(
      S(n, "captureTools"),
      e.capture_tools,
      "capture_tools"
    ),
    s(
      S(n, "captureHeaders"),
      e.capture_headers ?? !0,
      "capture_headers"
    )
  ] : /* @__PURE__ */ w.createElement(ut, { size: "small" })));
  return /* @__PURE__ */ w.createElement(Ls, { content: r, trigger: "click", placement: "bottomRight" }, t);
}
function Js() {
  const e = typeof we.useLocale == "function" ? we.useLocale() : void 0, l = ne(() => jt(e ?? null), [e]), [t, n] = J(null), [s, r] = J(!1), [c, i] = J(!1), [o, g] = J(null), [d, v] = J(null), [a, x] = J(!1), [k, f] = J(!1), [m, h] = J(""), [E, b] = J(""), [T, A] = J("sequence"), [B, z] = J(null), [H, L] = J(null), [O, F] = J(null), [de, Y] = J(
    /* @__PURE__ */ new Set()
  ), [q, Le] = J(!1), [Xe, W] = J(null), [V, Te] = J(null), [_e, he] = J(null), Me = Os(null);
  Me.current = o;
  const pe = ot(async () => {
    try {
      const p = await gt({ limit: 100, offset: 0 });
      n(p.sessions), r(p.has_more), he(null);
    } catch (p) {
      he(String(p.message));
    }
  }, []), ce = ot(async () => {
    i(!0);
    try {
      const p = await gt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((_) => {
        const I = _ ?? [];
        return [
          ...I,
          ...p.sessions.filter(
            (K) => !I.some((X) => X.session_id === K.session_id)
          )
        ];
      }), r(p.has_more);
    } catch (p) {
      he(String(p.message));
    } finally {
      i(!1);
    }
  }, [t]), se = ot(
    async (p, _) => {
      _ || x(!0);
      try {
        const I = await Gt(p, {
          beforeSeq: _,
          limit: 200
        });
        he(null), v((K) => _ && K ? {
          ...I,
          events: [...I.events, ...K.events]
        } : I);
      } catch (I) {
        he(String(I.message));
      } finally {
        _ || x(!1);
      }
    },
    []
  );
  Be(() => {
    pe(), Qt().then(W).catch(() => W(null));
    try {
      const p = new URLSearchParams(window.location.search).get("session");
      p && g(p);
    } catch {
    }
  }, [pe]), Be(() => {
    const p = setInterval(() => {
      document.visibilityState === "visible" && pe();
    }, 15e3);
    return () => clearInterval(p);
  }, [pe]), Be(() => {
    o ? (z(null), L(null), F(null), Y(/* @__PURE__ */ new Set()), b(""), se(o), Jt(o).then(
      (p) => Te({
        sessionId: o,
        inputTokens: p.input_tokens,
        outputTokens: p.output_tokens,
        totalTokens: p.total_tokens
      })
    ).catch(() => Te(null))) : (v(null), Te(null));
  }, [o, se]);
  const Ie = ne(
    () => d ? rs(d.events) : [],
    [d]
  ), { initial: me, turns: U } = ne(
    () => os(Ie),
    [Ie]
  ), ve = ne(
    () => me ? [me, ..._t(U)] : _t(U),
    [me, U]
  ), $e = ne(
    () => U.some((p) => p.status === "running"),
    [U]
  );
  Be(() => {
    if (!o || !$e) return;
    const p = setInterval(() => {
      document.visibilityState === "visible" && Me.current && se(Me.current);
    }, 5e3);
    return () => clearInterval(p);
  }, [o, $e, se]);
  const qe = ne(
    () => B === null ? null : ds(U, B, T),
    [B, U, T]
  ), De = ne(() => {
    const p = E.trim().toLowerCase();
    return p ? new Set(
      ve.filter(
        (_) => [
          _.text,
          _.outputText,
          _.thinkingText,
          _.toolName,
          _.toolInput,
          _.toolOutput,
          _.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(p)
      ).map((_) => _.index)
    ) : null;
  }, [E, ve]), Je = ne(
    () => H === null ? null : ve.find((p) => p.index === H) ?? null,
    [ve, H]
  ), Ge = ne(() => {
    var ft, pt;
    if (O === null) return null;
    const p = U.find((N) => N.turn === O);
    if (!p) return null;
    const _ = ((ft = p.groups[0]) == null ? void 0 : ft.cells) ?? [], I = _.filter((N) => N.kind === "message"), K = _.filter((N) => N.kind === "tool"), X = [
      ...new Set(
        I.map((N) => N.model).filter((N) => !!N)
      )
    ];
    let Ee = 0, re = 0, oe = 0, je = 0, Ce = null, Qe = 0;
    const mt = [];
    for (const N of _)
      N.usage && (Ee += N.usage.input_tokens ?? 0, re += N.usage.output_tokens ?? 0, oe += N.usage.cache_input_tokens ?? 0, je += N.usage.cache_creation_input_tokens ?? 0), N.timing && (Ce = Ce === null ? N.timing.ttft_ms : Math.min(Ce, N.timing.ttft_ms), Qe = (Qe ?? 0) + N.timing.decode_ms), N.isError && mt.push(N.toolError ?? N.text ?? "error");
    const Se = _.find((N) => N.kind === "user"), Xt = (pt = [...I].reverse().find((N) => N.options)) == null ? void 0 : pt.options;
    return {
      turn: O,
      status: p.status,
      durationMs: p.durationMs,
      startedAt: (Se == null ? void 0 : Se.startedAt) ?? null,
      query: (Se == null ? void 0 : Se.text) ?? "",
      llmCalls: I.length,
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
  }, [O, U, V, o]), y = !!(d && d.events.length > 0 && d.events[0].seq > 1), M = ne(
    () => (t == null ? void 0 : t.find((p) => p.session_id === o)) ?? null,
    [t, o]
  ), $ = ne(() => {
    if (!t) return [];
    const p = m.trim().toLowerCase();
    return p ? t.filter(
      (_) => [_.session_id, _.agent_id, _.channel].join(" ").toLowerCase().includes(p)
    ) : t;
  }, [t, m]), j = async (p) => {
    try {
      W(await Yt(p));
    } catch (_) {
      Ae.error(String(_.message));
    }
  }, P = ne(
    () => [
      { label: S(l, "modeSequence"), value: "sequence" },
      { label: S(l, "modeDuration"), value: "duration" },
      { label: S(l, "modeTime"), value: "time" },
      { label: S(l, "modeActual"), value: "actual" }
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
        placeholder: S(l, "searchPlaceholder"),
        value: m,
        onChange: (p) => h(p.target.value)
      }
    )),
    /* @__PURE__ */ w.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ w.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ w.createElement(ut, null)) : $.length === 0 ? /* @__PURE__ */ w.createElement(
      He,
      {
        image: He.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ w.createElement("span", { style: { fontSize: 12 } }, S(l, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ w.createElement(
        ge,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        S(l, "noSessionsHint")
      )
    ) : $.map((p) => {
      const _ = p.session_id === o;
      return /* @__PURE__ */ w.createElement(
        "div",
        {
          key: p.session_id,
          onClick: () => g(p.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: _ ? "rgba(22,119,255,0.10)" : "transparent",
            border: _ ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
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
              ellipsis: { tooltip: p.session_id }
            },
            p.agent_id || Hs(p.session_id)
          ),
          /* @__PURE__ */ w.createElement(
            js,
            {
              color: Ks[p.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Xs(p.status)
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
          /* @__PURE__ */ w.createElement("span", null, p.channel || "-"),
          /* @__PURE__ */ w.createElement("span", null, p.runs, " ", S(l, "runs")),
          /* @__PURE__ */ w.createElement("span", null, Lt(p.total_tokens), " tok"),
          /* @__PURE__ */ w.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: Ws(p.last_event_t)
            },
            Vs(p.last_event_t)
          )
        )
      );
    }), t !== null && s && !m.trim() && /* @__PURE__ */ w.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ w.createElement(
      "a",
      {
        onClick: () => void ce(),
        style: { fontSize: 12 }
      },
      c ? "…" : `⋯ ${S(l, "loadOlder")} (${(t == null ? void 0 : t.length) ?? 0})`
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
      M ? /* @__PURE__ */ w.createElement(ge, { type: "secondary", style: { fontSize: 12 } }, `${M.runs} ${S(l, "runs")} · ${M.llm_calls} ${S(l, "llmCalls")} · ${M.tool_calls} ${S(
        l,
        "toolCalls"
      )} · ${Lt(M.total_tokens)} ${S(
        l,
        "tokens"
      )} · ${Us(M.size_bytes)}`) : /* @__PURE__ */ w.createElement(ge, { type: "secondary", style: { fontSize: 13 } }, S(l, "selectSession")),
      /* @__PURE__ */ w.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ w.createElement($s, null, /* @__PURE__ */ w.createElement(qs, { config: Xe, onChange: j }, /* @__PURE__ */ w.createElement(it, { size: "small", icon: /* @__PURE__ */ w.createElement(Bs, null) })), o && /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(
        it,
        {
          size: "small",
          icon: /* @__PURE__ */ w.createElement(Fs, null),
          onClick: () => {
            Zt(o).then(() => Ae.success(S(l, "exported"))).catch(
              (p) => Ae.error(String(p.message))
            );
          }
        },
        S(l, "export")
      ), /* @__PURE__ */ w.createElement(
        Rs,
        {
          title: S(l, "deleteConfirm"),
          onConfirm: () => {
            en(o).then(() => {
              Ae.success(S(l, "deleted")), g(null), pe();
            }).catch(
              (p) => Ae.error(String(p.message))
            );
          }
        },
        /* @__PURE__ */ w.createElement(it, { size: "small", danger: !0, icon: /* @__PURE__ */ w.createElement(Ns, null) }, S(l, "delete"))
      ))))
    ),
    _e && /* @__PURE__ */ w.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ w.createElement(ge, { type: "danger", style: { fontSize: 12 } }, `${S(l, "loadFailed")}: ${_e}`)),
    /* @__PURE__ */ w.createElement(
      zs,
      {
        mode: T,
        onModeChange: A,
        search: E,
        onSearchChange: b,
        onRefresh: () => {
          pe(), o && se(o);
        },
        modeOptions: P,
        allCollapsed: U.length > 0 && U.every((p) => de.has(p.turn ?? -1)),
        hasRequests: U.some((p) => p.turn !== null),
        callsCollapsed: q,
        onToggleCallsCollapsed: () => Le((p) => !p),
        onToggleCollapseAll: () => {
          Y((p) => U.some(
            (I) => I.turn !== null && !p.has(I.turn)
          ) ? new Set(
            U.map((I) => I.turn).filter((I) => I !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ w.createElement(
      xs,
      {
        turns: U,
        mode: T,
        range: B,
        hasEarlierRecords: y,
        onLoadEarlier: async () => {
          var p;
          return !d || d.events.length === 0 ? !1 : (await se(o, (p = d.events[0]) == null ? void 0 : p.seq), !0);
        },
        selectedIndex: H,
        searchMatchIndexes: De,
        onRangeChange: z,
        onRecordSelect: L,
        onRecordFocus: L
      }
    ),
    a && !d ? /* @__PURE__ */ w.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ w.createElement(ut, null)) : d ? /* @__PURE__ */ w.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ w.createElement(
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
          selectedIndex: H,
          selectedTurn: O,
          collapsedTurns: de,
          focusIndexes: qe,
          searchMatchIndexes: De,
          onSelectedIndexChange: (p) => {
            L(p), F(null);
          },
          onSelectedTurnChange: (p) => {
            F(p), L(null);
          },
          callsCollapsed: q,
          onToggleTurn: (p) => {
            Y((_) => {
              const I = new Set(_);
              return I.has(p) ? I.delete(p) : I.add(p), I;
            });
          },
          hasOlderRecords: y,
          loadingOlder: k,
          onLoadOlder: () => {
            var p;
            !d || d.events.length === 0 || (f(!0), se(
              o,
              (p = d.events[0]) == null ? void 0 : p.seq
            ).finally(() => f(!1)));
          },
          emptyText: S(l, "noSessions"),
          initialRecord: me
        }
      )
    ), /* @__PURE__ */ w.createElement(
      En,
      {
        record: Je,
        request: Ge,
        onJumpSession: g,
        onSelectTurn: (p) => {
          F(p), L(null);
        }
      }
    )) : /* @__PURE__ */ w.createElement(
      He,
      {
        image: He.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: S(l, "selectSession")
      }
    )
  ));
}
var $t, Dt;
(Dt = ($t = window.QwenPaw).registerRoutes) == null || Dt.call($t, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Js,
    label: S(le(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);

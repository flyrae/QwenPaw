const Ht = {
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
    deleted: "已删除"
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
    deleted: "Deleted"
  }
};
function At(e) {
  return e && e.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}
function se() {
  try {
    return At(localStorage.getItem("language"));
  } catch {
    return "en-US";
  }
}
function b(e, l) {
  return Ht[e][l];
}
const _e = window.QwenPaw.host;
async function Rt(e, l) {
  return _e.fetch ? _e.fetch(e, l) : fetch(_e.getApiUrl(e), {
    ...l,
    headers: {
      ...(l == null ? void 0 : l.headers) || {},
      ..._e.getApiToken() ? { Authorization: `Bearer ${_e.getApiToken()}` } : {}
    }
  });
}
async function Oe(e, l) {
  const t = await Rt(e, l), n = await t.text();
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
async function dt(e) {
  const l = new URLSearchParams();
  return l.set("limit", String((e == null ? void 0 : e.limit) ?? 100)), e != null && e.offset && l.set("offset", String(e.offset)), Oe(
    `/agent-trace/sessions?${l.toString()}`
  );
}
async function Wt(e, l) {
  const t = new URLSearchParams();
  l != null && l.beforeSeq && t.set("before_seq", String(l.beforeSeq)), t.set("limit", String(l == null ? void 0 : l.limit));
  const n = t.toString();
  return Oe(
    `/agent-trace/sessions/${encodeURIComponent(e)}?${n}`
  );
}
async function Vt() {
  return Oe("/agent-trace/config");
}
async function Ut(e) {
  return Oe("/agent-trace/config", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
}
async function Kt(e) {
  const l = await Rt(
    `/agent-trace/sessions/${encodeURIComponent(e)}/export`
  );
  if (!l.ok) throw new Error(`HTTP ${l.status}`);
  const t = await l.blob(), n = URL.createObjectURL(t), s = document.createElement("a");
  s.href = n, s.download = `${e}.jsonl`, s.click(), URL.revokeObjectURL(n);
}
async function Xt(e) {
  await Oe(`/agent-trace/sessions/${encodeURIComponent(e)}`, {
    method: "DELETE"
  });
}
const ht = 3e3;
function mt(e) {
  return e.replace(/\r\n/g, `
`).split(`
`);
}
function qt(e, l) {
  const t = mt(e ?? ""), n = mt(l ?? "");
  if (t.length > ht || n.length > ht)
    return [
      ...t.map((g) => ({ kind: "del", text: g })),
      ...n.map((g) => ({ kind: "add", text: g }))
    ];
  const s = t.length, r = n.length, a = new Int32Array((s + 1) * (r + 1)), o = (g, c) => g * (r + 1) + c;
  for (let g = s - 1; g >= 0; g -= 1)
    for (let c = r - 1; c >= 0; c -= 1)
      a[o(g, c)] = t[g] === n[c] ? a[o(g + 1, c + 1)] + 1 : Math.max(a[o(g + 1, c)], a[o(g, c + 1)]);
  const i = [];
  let p = 0, d = 0;
  for (; p < s && d < r; )
    t[p] === n[d] ? (i.push({ kind: "same", text: t[p] }), p += 1, d += 1) : a[o(p + 1, d)] >= a[o(p, d + 1)] ? (i.push({ kind: "del", text: t[p] }), p += 1) : (i.push({ kind: "add", text: n[d] }), d += 1);
  for (; p < s; )
    i.push({ kind: "del", text: t[p] }), p += 1;
  for (; d < r; )
    i.push({ kind: "add", text: n[d] }), d += 1;
  return i;
}
function Jt(e, l = 3) {
  const t = new Array(e.length).fill(!1);
  e.forEach((r, a) => {
    if (r.kind !== "same")
      for (let o = Math.max(0, a - l); o <= Math.min(e.length - 1, a + l); o += 1)
        t[o] = !0;
  });
  const n = [];
  let s = 0;
  return e.forEach((r, a) => {
    t[a] ? (s > 0 && (n.push({ kind: "gap", count: s }), s = 0), n.push(r)) : s += 1;
  }), s > 0 && n.push({ kind: "gap", count: s }), n;
}
function Gt(e) {
  let l = 0, t = 0;
  for (const n of e)
    n.kind === "add" ? l += 1 : n.kind === "del" && (t += 1);
  return { added: l, removed: t };
}
function Qt(e) {
  return `${Math.round(e).toLocaleString()} ms`;
}
function ie(e) {
  if (e == null || !Number.isFinite(e))
    return "-";
  const l = e * 1e3;
  return l < 1e3 ? `${Math.round(l)}ms` : l < 6e4 ? `${(l / 1e3).toFixed(1)}s` : `${Math.floor(l / 6e4)}m${Math.round(l % 6e4 / 1e3)}s`;
}
function oe(e) {
  return e == null || !Number.isFinite(e) ? "-" : e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(Math.round(e));
}
function Lt(e, l) {
  return e === void 0 || !Number.isFinite(e) || l === null || l === void 0 || l <= 0 ? "-" : `${(e / l).toFixed(1)} tok/s`;
}
function ze(e) {
  return e == null || !Number.isFinite(e) ? "-" : new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });
}
function ye(e) {
  if (!e) return null;
  const l = Date.parse(e);
  return Number.isFinite(l) ? l : null;
}
const He = window.QwenPaw.host, u = He.React, { useEffect: Yt, useRef: Zt, useState: Dt } = u, { Button: en, Collapse: tn, Empty: ft, Tabs: ct } = He.antd, { Text: q } = He.antd.Typography, { CopyOutlined: nn } = He.antdIcons, sn = 320, ln = 720, De = {
  key: "#8250df",
  string: "#0a6e3d",
  number: "#0550ae",
  literal: "#cf222e"
}, rn = 2e4;
function on(e) {
  if (e.length > rn) return e;
  const l = [], t = /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|(true|false|null)/g;
  let n = 0, s, r = 0;
  for (; (s = t.exec(e)) !== null; ) {
    s.index > n && l.push(e.slice(n, s.index));
    const a = s[0];
    let o = "rgba(128,128,128,1)";
    s[1] !== void 0 ? o = De.key : s[2] !== void 0 ? o = De.string : s[3] !== void 0 ? o = De.number : o = De.literal, l.push(
      /* @__PURE__ */ u.createElement("span", { key: r++, style: { color: o } }, a)
    ), n = s.index + a.length;
  }
  return n < e.length && l.push(e.slice(n)), l;
}
function ce({ value: e, json: l = !1 }) {
  const [t, n] = Dt(!1), s = typeof e == "string" ? e : JSON.stringify(e, null, 2);
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
    t ? "✓" : /* @__PURE__ */ u.createElement(nn, null)
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
    l ? on(s) : s
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
    /* @__PURE__ */ u.createElement(q, { type: "secondary", style: { fontSize: 12 } }, e),
    /* @__PURE__ */ u.createElement(
      q,
      {
        type: t ? "danger" : void 0,
        style: { fontSize: 12, textAlign: "right" }
      },
      l
    )
  );
}
function an({ request: e }) {
  const l = se(), t = [
    {
      key: "summary",
      label: b(l, "summary"),
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "Request", value: `#${e.turn}` }), /* @__PURE__ */ u.createElement(
        O,
        {
          label: b(l, "status"),
          value: e.status || "unknown"
        }
      ), /* @__PURE__ */ u.createElement(O, { label: "Query", value: cn(e.query) }), /* @__PURE__ */ u.createElement(
        O,
        {
          label: b(l, "duration"),
          value: ie(
            e.durationMs === null ? null : e.durationMs / 1e3
          )
        }
      ), /* @__PURE__ */ u.createElement(O, { label: "Started", value: ze(e.startedAt) }), /* @__PURE__ */ u.createElement(
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
      ) : null, e.errors.length > 0 ? /* @__PURE__ */ u.createElement(q, { type: "danger", style: { fontSize: 12 } }, e.errors.join("; ")) : null)
    },
    {
      key: "usage",
      label: "Usage",
      children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "Input", value: oe(e.inputTokens) }), /* @__PURE__ */ u.createElement(O, { label: "Output", value: oe(e.outputTokens) }), /* @__PURE__ */ u.createElement(
        O,
        {
          label: "Total",
          value: oe(e.inputTokens + e.outputTokens)
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
        value: Lt(
          e.outputTokens,
          e.decodeMs === null ? null : e.decodeMs / 1e3
        )
      }
    ))
  }), /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 4px" } }, /* @__PURE__ */ u.createElement(ct, { size: "small", items: t, tabBarStyle: { marginBottom: 8 } }));
}
function cn(e, l = 200) {
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function un({
  oldText: e,
  newText: l
}) {
  const t = u.useMemo(
    () => qt(e, l),
    [e, l]
  ), n = u.useMemo(() => Gt(t), [t]), s = u.useMemo(() => Jt(t), [t]), r = se();
  return e === void 0 ? /* @__PURE__ */ u.createElement(q, { type: "secondary", style: { fontSize: 12 } }, b(r, "noPrevPrompt")) : /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("div", { style: { marginBottom: 6, fontSize: 12 } }, /* @__PURE__ */ u.createElement("span", { style: { color: "#52c41a" } }, "+", n.added), " ", /* @__PURE__ */ u.createElement("span", { style: { color: "#ff4d4f" } }, "−", n.removed)), /* @__PURE__ */ u.createElement(
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
    s.map((a, o) => {
      if (a.kind === "gap")
        return /* @__PURE__ */ u.createElement(
          "div",
          {
            key: o,
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
      const i = a;
      return /* @__PURE__ */ u.createElement(
        "div",
        {
          key: o,
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
function dn({ record: e }) {
  var r;
  const l = se(), t = e.headerTools ?? [], n = e.headerReason === "changed", s = [
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
          un,
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
      children: /* @__PURE__ */ u.createElement(ce, { value: e.prompt })
    },
    ...t.length > 0 ? [
      {
        key: "tools",
        label: "Tools",
        children: /* @__PURE__ */ u.createElement("div", { style: { paddingTop: 4 } }, t.map((a) => /* @__PURE__ */ u.createElement(q, { key: a, code: !0, style: { fontSize: 11 } }, a)), e.schemas && e.schemas.length > 0 ? /* @__PURE__ */ u.createElement(
          tn,
          {
            size: "small",
            ghost: !0,
            style: { marginTop: 6 },
            items: e.schemas.map((a, o) => {
              var p;
              const i = typeof a.name == "string" && a.name || typeof ((p = a.function) == null ? void 0 : p.name) == "string" && a.function.name || `tool-${o + 1}`;
              return {
                key: String(o),
                label: /* @__PURE__ */ u.createElement(q, { code: !0, style: { fontSize: 11 } }, i),
                children: /* @__PURE__ */ u.createElement(ce, { value: a })
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
  return /* @__PURE__ */ u.createElement(ct, { size: "small", items: s, tabBarStyle: { marginBottom: 8 } });
}
function Ge({ dragRef: e, width: l }) {
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
function hn({
  record: e,
  request: l,
  onJumpSession: t,
  onSelectTurn: n
}) {
  const s = se(), [r, a] = Dt(400), o = Zt(null);
  if (Yt(() => {
    const c = (f) => {
      const h = o.current;
      if (h === null) return;
      const E = h.anchorX - f.clientX;
      a(
        Math.min(ln, Math.max(sn, h.anchorWidth + E))
      );
    }, x = () => {
      o.current = null;
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
        ft,
        {
          image: ft.PRESENTED_IMAGE_SIMPLE,
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
      /* @__PURE__ */ u.createElement(Ge, { dragRef: o, width: r }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(an, { request: l }))
    );
  const i = e;
  if (i.kind === "system" && i.prompt !== void 0)
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
      /* @__PURE__ */ u.createElement(Ge, { dragRef: o, width: r }),
      /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(dn, { record: i }))
    );
  const p = i.usage, d = i.timing, g = [];
  return g.push({
    key: "summary",
    label: b(s, "summary"),
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "#", value: String(i.index) }), /* @__PURE__ */ u.createElement(O, { label: "Kind", value: i.kind }), i.runIndex > 0 && n ? /* @__PURE__ */ u.createElement("div", { style: { padding: "3px 0", textAlign: "right" } }, /* @__PURE__ */ u.createElement(
      "a",
      {
        style: { fontSize: 12 },
        onClick: () => n(i.runIndex)
      },
      "Request #",
      i.runIndex,
      " →"
    )) : null, /* @__PURE__ */ u.createElement(
      O,
      {
        label: b(s, "status"),
        value: i.running ? b(s, "running") : i.isError ? b(s, "error") : b(s, "success"),
        danger: i.isError
      }
    ), i.model ? /* @__PURE__ */ u.createElement(O, { label: b(s, "model"), value: i.model }) : null, i.toolName ? /* @__PURE__ */ u.createElement(O, { label: "Tool", value: i.toolName }) : null, /* @__PURE__ */ u.createElement(
      O,
      {
        label: b(s, "duration"),
        value: ie(i.timeSeconds)
      }
    ), i.note ? /* @__PURE__ */ u.createElement(q, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.spawnSession ? /* @__PURE__ */ u.createElement("div", { style: { marginTop: 6 } }, /* @__PURE__ */ u.createElement(
      O,
      {
        label: b(s, "spawnedAgent"),
        value: i.spawnAgent ?? "?"
      }
    ), t ? /* @__PURE__ */ u.createElement(
      en,
      {
        size: "small",
        onClick: () => i.spawnSession && t(i.spawnSession),
        style: { marginTop: 4 }
      },
      b(s, "openChildSession")
    ) : null) : null)
  }), i.kind === "tool" ? (i.toolInput && g.push({
    key: "payload",
    label: b(s, "input"),
    children: /* @__PURE__ */ u.createElement(ce, { value: i.toolInput, json: !0 })
  }), (i.toolOutput || i.toolError) && g.push({
    key: "result",
    label: b(s, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, i.toolError ? /* @__PURE__ */ u.createElement(q, { type: "danger", style: { fontSize: 12 } }, i.toolError) : null, i.toolOutput ? /* @__PURE__ */ u.createElement(ce, { value: i.toolOutput }) : null)
  })) : (i.outputText || i.thinkingText || i.messages || i.marker || i.toolCalls && i.toolCalls.length > 0) && g.push({
    key: "raw",
    label: b(s, "output"),
    children: /* @__PURE__ */ u.createElement("div", { style: { display: "grid", gap: 8 } }, i.marker ? /* @__PURE__ */ u.createElement(ce, { value: i.marker }) : null, i.toolCalls && i.toolCalls.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(q, { type: "secondary", style: { fontSize: 12 } }, `${b(s, "toolCall")} (${i.toolCalls.length})`), i.toolCalls.map((c, x) => /* @__PURE__ */ u.createElement("div", { key: c.id || x, style: { display: "flex", gap: 8 } }, /* @__PURE__ */ u.createElement(q, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, "🛠 ", c.name), /* @__PURE__ */ u.createElement(q, { type: "secondary", style: { fontSize: 11 } }, c.id)))) : null, i.note ? /* @__PURE__ */ u.createElement(q, { type: "warning", style: { fontSize: 12 } }, i.note) : null, i.messages && i.messages.length > 0 ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(q, { type: "secondary", style: { fontSize: 12 } }, `${b(s, "query")} (${i.messages.length})`), i.messages.map((c, x) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: x,
        style: { display: "flex", gap: 8, alignItems: "baseline" }
      },
      /* @__PURE__ */ u.createElement(q, { code: !0, style: { fontSize: 11, flexShrink: 0 } }, c.role),
      /* @__PURE__ */ u.createElement(
        q,
        {
          style: {
            fontSize: 12,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }
        },
        c.text
      )
    ))) : null, i.thinkingText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(q, { type: "secondary", style: { fontSize: 12 } }, b(s, "thinking")), /* @__PURE__ */ u.createElement(ce, { value: i.thinkingText })) : null, i.outputText ? /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(q, { type: "secondary", style: { fontSize: 12 } }, b(s, "output")), /* @__PURE__ */ u.createElement(ce, { value: i.outputText })) : null)
  }), (i.startedAt !== null || p || d) && g.push({
    key: "timing",
    label: "Timing",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "Started", value: ze(i.startedAt) }), /* @__PURE__ */ u.createElement(O, { label: "Total", value: ie(i.timeSeconds) }), d ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
      O,
      {
        label: "TTFT",
        value: ie(d.ttft_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      O,
      {
        label: "Decoding",
        value: ie(d.decode_ms / 1e3)
      }
    ), /* @__PURE__ */ u.createElement(
      O,
      {
        label: b(s, "throughput"),
        value: Lt(
          p == null ? void 0 : p.output_tokens,
          d.decode_ms / 1e3
        )
      }
    )) : /* @__PURE__ */ u.createElement(q, { type: "secondary", style: { fontSize: 12 } }, b(s, "noTiming")))
  }), p && g.push({
    key: "usage",
    label: "Usage",
    children: /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(O, { label: "Input", value: oe(p.input_tokens) }), /* @__PURE__ */ u.createElement(O, { label: "Output", value: oe(p.output_tokens) }), p.cache_creation_input_tokens ? /* @__PURE__ */ u.createElement(
      O,
      {
        label: "Cache write",
        value: oe(p.cache_creation_input_tokens)
      }
    ) : null, p.cache_input_tokens ? /* @__PURE__ */ u.createElement(
      O,
      {
        label: "Cache read",
        value: oe(p.cache_input_tokens)
      }
    ) : null, p.total_tokens !== void 0 ? /* @__PURE__ */ u.createElement(O, { label: "Total", value: oe(p.total_tokens) }) : null, p.time !== void 0 ? /* @__PURE__ */ u.createElement(O, { label: "API time", value: ie(p.time) }) : null)
  }), g.push({
    key: "rawjson",
    label: "Raw",
    children: /* @__PURE__ */ u.createElement(ce, { value: i.raw })
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
    /* @__PURE__ */ u.createElement(Ge, { dragRef: o, width: r }),
    /* @__PURE__ */ u.createElement("div", { style: { padding: "8px 12px 0", overflow: "auto" } }, /* @__PURE__ */ u.createElement(ct, { size: "small", items: g, tabBarStyle: { marginBottom: 8 } }))
  );
}
const G = window.QwenPaw.host.React, mn = G.useRef, fn = G.useState;
G.useCallback;
G.useMemo;
const pn = G.useEffect, gn = G.useLayoutEffect, yn = G.useReducer;
G.createContext;
G.useContext;
G.createElement;
G.cloneElement;
G.isValidElement;
G.memo;
G.forwardRef;
G.Fragment;
G.StrictMode;
G.version;
function vn(e) {
  return e ? e() : void 0;
}
function En(e, l, t) {
  const n = new Array(e);
  return new Proxy(n, {
    get(s, r, a) {
      if (typeof r == "string") {
        const o = r.charCodeAt(0);
        if (o >= 48 && o <= 57) {
          const i = +r;
          if (Number.isInteger(i) && i >= 0 && i < e) {
            let p = s[i];
            if (!p) {
              const d = l[i * 2];
              p = s[i] = {
                index: i,
                key: t(i),
                start: d,
                size: l[i * 2 + 1],
                end: d + l[i * 2 + 1],
                lane: 0
              };
            }
            return p;
          }
        }
        if (r === "length") return e;
      }
      return Reflect.get(s, r, a);
    }
  });
}
function ke(e, l, t) {
  let n = t.initialDeps ?? [], s, r = !0;
  function a() {
    var o;
    const i = process.env.NODE_ENV !== "production" && !!t.key && !!((o = t.debug) != null && o.call(t));
    let p = 0;
    i && (p = Date.now());
    const d = e();
    if (!(d.length !== n.length || d.some((x, f) => n[f] !== x)))
      return s;
    n = d;
    let c = 0;
    if (i && (c = Date.now()), s = l(...d), i) {
      const x = Math.round((Date.now() - p) * 100) / 100, f = Math.round((Date.now() - c) * 100) / 100, h = f / 16, E = (v, S) => {
        for (v = String(v); v.length < S; )
          v = " " + v;
        return v;
      };
      console.info(
        `%c⏱ ${E(f, 5)} /${E(x, 5)} ms`,
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
  return a.updateDeps = (o) => {
    n = o;
  }, a;
}
function pt(e, l) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Sn = (e, l) => Math.abs(e - l) < 1.01, bn = (e, l, t) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => l.apply(this, s), t);
  };
};
let Ie;
const Qe = () => {
  if (Ie !== void 0) return Ie;
  if (typeof navigator > "u") return Ie = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Ie = !0;
  const e = navigator.maxTouchPoints;
  return Ie = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, gt = (e) => {
  const { offsetWidth: l, offsetHeight: t } = e;
  return { width: l, height: t };
}, xn = (e) => e, wn = (e) => {
  const l = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1) - l + 1, s = new Array(n);
  for (let r = 0; r < n; r++)
    s[r] = l + r;
  return s;
}, kn = (e, l) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (a) => {
    const { width: o, height: i } = a;
    l({ width: Math.round(o), height: Math.round(i) });
  };
  if (s(gt(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((a) => {
    const o = () => {
      const i = a[0];
      if (i != null && i.borderBoxSize) {
        const p = i.borderBoxSize[0];
        if (p) {
          s({ width: p.inlineSize, height: p.blockSize });
          return;
        }
      }
      s(gt(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, Pe = {
  passive: !0
}, Tn = typeof window > "u" ? !0 : "onscrollend" in window, Mn = (e, l, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const s = e.targetWindow;
  if (!s)
    return;
  const r = e.options.useScrollendEvent && Tn;
  let a = 0;
  const o = r ? null : bn(
    s,
    () => l(a, !1),
    e.options.isScrollingResetDelay
  ), i = (g) => () => {
    a = t(n), o == null || o(), l(a, g);
  }, p = i(!0), d = i(!1);
  return n.addEventListener("scroll", p, Pe), r && n.addEventListener("scrollend", d, Pe), () => {
    n.removeEventListener("scroll", p), r && n.removeEventListener("scrollend", d);
  };
}, _n = (e, l) => Mn(e, l, (t) => {
  const { horizontal: n, isRtl: s } = e.options;
  return n ? t.scrollLeft * (s && -1 || 1) : t.scrollTop;
}), In = (e, l, t) => {
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
}, Cn = (e, {
  adjustments: l = 0,
  behavior: t
}, n) => {
  var s, r;
  (r = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || r.call(s, {
    [n.options.horizontal ? "left" : "top"]: e + l,
    behavior: t
  });
}, zn = Cn;
class On {
  constructor(l) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, n, s;
      return ((s = (n = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : n.now) == null ? void 0 : s.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((r) => {
          const a = () => {
            const o = r.target, i = this.indexFromElement(o);
            if (!o.isConnected) {
              this.observer.unobserve(o);
              for (const [p, d] of this.elementsCache)
                if (d === o) {
                  this.elementsCache.delete(p);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(i) && this.resizeItem(
              i,
              this.options.measureElement(o, r, this)
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
        getItemKey: xn,
        rangeExtractor: wn,
        onChange: () => {
        },
        measureElement: In,
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
      let o = null, i = null, p = !1;
      if (a !== void 0 && a.enabled && r.enabled && r.anchorTo === "end" && this.scrollElement !== null) {
        const c = a.count, x = r.count, f = this.getMeasurements(), h = c > 0 ? ((n = f[0]) == null ? void 0 : n.key) ?? a.getItemKey(0) : null, E = c > 0 ? ((s = f[c - 1]) == null ? void 0 : s.key) ?? a.getItemKey(c - 1) : null;
        if (x !== c || c > 0 && x > 0 && (r.getItemKey(0) !== h || r.getItemKey(x - 1) !== E)) {
          p = !0;
          const T = c > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? f[0] : null;
          T && (o = [T.key, this.getScrollOffset() - T.start]);
          const z = r.followOnAppend === !0 ? "auto" : r.followOnAppend || null;
          z && x > c && this.isAtEnd(a.scrollEndThreshold) && (c === 0 || r.getItemKey(x - 1) !== E) && (i = z);
        }
      }
      this.options = r, p && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let d = !1, g = 0;
      if (o && this.scrollOffset !== null) {
        const [c, x] = o, f = this.getMeasurements(), { count: h, getItemKey: E } = this.options;
        let v = 0;
        for (; v < h && E(v) !== c; )
          v++;
        if (v < h) {
          const S = f[v];
          if (S) {
            const T = Math.max(0, S.start + x);
            T !== this.scrollOffset && (g = T - this.scrollOffset, this.scrollOffset = T, d = !0);
          }
        }
      }
      (d || i) && (this.pendingScrollAnchor = [
        d ? o[0] : null,
        d ? o[1] : 0,
        i,
        g
      ]);
    }, this.notify = (t) => {
      var n, s;
      (s = (n = this.options).onChange) == null || s.call(n, this, t);
    }, this.maybeNotify = ke(
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
            const o = this.getScrollOffset();
            this.scrollDirection = a ? o === r ? this.scrollDirection : o < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = a, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const r = this.scrollElement, a = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, o = () => {
            this._iosTouching = !1, !(!Qe() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          r.addEventListener(
            "touchstart",
            a,
            Pe
          ), r.addEventListener(
            "touchend",
            o,
            Pe
          ), this.unsubs.push(() => {
            r.removeEventListener("touchstart", a), r.removeEventListener("touchend", o), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const s = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, s && this.scrollElement && this.options.enabled) {
        const [r, a, o, i] = s;
        r !== null && !o && (Qe() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? i !== 0 && (this._iosDeferredAdjustment += i) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), o && this.scrollToEnd({ behavior: o });
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
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = ke(
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
      (t, n, s, r, a, o, i, p) => (this.prevLanes !== void 0 && this.prevLanes !== o && (this.lanesChangedFlag = !0), this.prevLanes = o, this.pendingMin = null, {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: a,
        lanes: o,
        laneAssignmentMode: i,
        gap: p
      }),
      {
        key: !1
      }
    ), this.getMeasurements = ke(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: a,
        lanes: o,
        laneAssignmentMode: i,
        gap: p
      }, d) => {
        const g = this.itemSizeCache;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const v of this.laneAssignments.keys())
            v >= t && this.laneAssignments.delete(v);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((v) => {
          this.itemSizeCache.set(v.key, v.size);
        }));
        const c = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), o === 1) {
          const v = t * 2;
          let S = this._flatMeasurements;
          if (!S || S.length < v) {
            const C = new Float64Array(v);
            S && c > 0 && C.set(S.subarray(0, c * 2)), S = C, this._flatMeasurements = S;
          }
          let T;
          if (c === 0)
            T = n + s;
          else {
            const C = c - 1;
            T = S[C * 2] + S[C * 2 + 1] + p;
          }
          for (let C = c; C < t; C++) {
            const j = r(C), L = g.get(j), N = typeof L == "number" ? L : this.options.estimateSize(C);
            S[C * 2] = T, S[C * 2 + 1] = N, T += N + p;
          }
          const z = En(t, S, r);
          return this.measurementsCache = z, z;
        }
        const x = this.measurementsCache.slice(0, c), f = new Array(o).fill(
          void 0
        ), h = new Float64Array(o);
        let E = 0;
        for (let v = 0; v < c; v++) {
          const S = x[v];
          S && (f[S.lane] === void 0 && E++, f[S.lane] = v, h[S.lane] = S.end);
        }
        for (let v = c; v < t; v++) {
          const S = r(v), T = this.laneAssignments.get(v);
          let z, C;
          const j = i === "estimate" || g.has(S);
          if (T !== void 0 && this.options.lanes > 1) {
            z = T;
            const R = f[z], F = R !== void 0 ? x[R] : void 0;
            C = F ? F.end + p : n + s;
          } else if (E === o) {
            let R = 0, F = h[0], ue = f[0];
            for (let Q = 1; Q < o; Q++) {
              const X = h[Q];
              (X < F || X === F && f[Q] < ue) && (R = Q, F = X, ue = f[Q]);
            }
            z = R, C = F + p, j && this.laneAssignments.set(v, z);
          } else
            z = v % this.options.lanes, C = n + s, j && this.laneAssignments.set(v, z);
          const L = g.get(S), N = typeof L == "number" ? L : this.options.estimateSize(v), A = C + N;
          x[v] = {
            index: v,
            start: C,
            size: N,
            end: A,
            key: S,
            lane: z
          }, f[z] === void 0 && E++, f[z] = v, h[z] = A;
        }
        return this.measurementsCache = x, x;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = ke(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, s, r) => t.length === 0 || n === 0 ? (this.range = null, null) : (this.range = Rn(
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
    ), this.getVirtualIndexes = ke(
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
        ), a = Math.max(0, s - r), o = Math.min(
          this.options.count - 1,
          s + r
        );
        return t >= a && t <= o;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((a, o) => {
          a.isConnected || (this.observer.unobserve(a), this.elementsCache.delete(o));
        });
        return;
      }
      const n = this.indexFromElement(t), s = this.options.getItemKey(n), r = this.elementsCache.get(s);
      r !== t && (r && this.observer.unobserve(r), this.observer.observe(t), this.elementsCache.set(s, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, n) => {
      var s, r;
      if (t < 0 || t >= this.options.count) return;
      let a, o, i;
      const p = this._flatMeasurements;
      if (this.options.lanes === 1 && p !== null)
        i = this.options.getItemKey(t), o = p[t * 2], a = p[t * 2 + 1];
      else {
        const c = this.measurementsCache[t];
        if (!c) return;
        i = c.key, o = c.start, a = c.size;
      }
      const d = this.itemSizeCache.get(i) ?? a, g = n - d;
      if (g !== 0) {
        const c = this.options.anchorTo === "end" && ((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, x = c ? this.getTotalSize() : 0, f = this.getScrollOffset() + this.scrollAdjustments, E = !this.itemSizeCache.has(i) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          o < f
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          o + d <= f && this.scrollDirection !== "backward"
        ), v = ((r = this.scrollState) == null ? void 0 : r.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: i,
            start: o,
            size: a,
            end: o + a,
            lane: 0
          },
          g,
          this
        ) : E);
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(i, n), this.itemSizeCacheVersion++;
        let S = !1;
        c ? S = this.applyScrollAdjustment(
          this.getTotalSize() - x
        ) : v && (S = this.applyScrollAdjustment(g)), this.notify(S);
      }
    }, this.getVirtualItems = ke(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r], i = n[o];
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
      const s = this._flatMeasurements, r = this.options.lanes === 1 && s != null, a = $t(
        0,
        n.length - 1,
        r ? (o) => s[o * 2] : (o) => pt(n[o]).start,
        t
      );
      return pt(n[a]);
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
      const o = this.getMaxScrollOffset();
      return Math.max(Math.min(o, t), 0);
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
      const o = n === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(o, n, a.size),
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
      const [a, o] = r, i = this.now();
      this.scrollState = {
        index: t,
        align: o,
        behavior: s,
        startedAt: i,
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
        for (; a >= 0 && r.some((o) => o === null); ) {
          const o = n[a];
          r[o.lane] === null && (r[o.lane] = o.end), a--;
        }
        s = Math.max(...r.filter((o) => o !== null));
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
    return l === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", l), Qe() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += l, !1) : (this._scrollToOffset(this.getScrollOffset(), {
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
    if (!a && Sn(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= r) {
        this.getScrollOffset() !== s && this._scrollToOffset(s, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, a) {
      const o = this.getSize() || 600, i = Math.abs(s - this.getScrollOffset()), p = this.scrollState.behavior === "smooth" && i > o;
      this.scrollState.lastTargetOffset = s, p || (this.scrollState.behavior = "auto"), this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: p ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const $t = (e, l, t, n) => {
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
function An(e, l, t) {
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
function Rn(e, l, t, n, s) {
  const r = e.length - 1;
  if (e.length <= n)
    return { startIndex: 0, endIndex: r };
  if (n === 1 && s !== null) {
    const p = An(
      s,
      r,
      t
    );
    let d = p;
    const g = t + l;
    for (; d < r && s[d * 2] + s[d * 2 + 1] < g; )
      d++;
    return { startIndex: p, endIndex: d };
  }
  let o = $t(0, r, (p) => e[p].start, t), i = o;
  if (n === 1)
    for (; i < r && e[i].end < t + l; )
      i++;
  else if (n > 1) {
    const p = Array(n).fill(0);
    for (; i < r && p.some((g) => g < t + l); ) {
      const g = e[i];
      p[g.lane] = g.end, i++;
    }
    const d = Array(n).fill(t + l);
    for (; o >= 0 && d.some((g) => g >= t); ) {
      const g = e[o];
      d[g.lane] = g.start, o--;
    }
    o = Math.max(0, o - o % n), i = Math.min(r, i + (n - 1 - i % n));
  }
  return { startIndex: o, endIndex: i };
}
const Ye = typeof document < "u" ? gn : pn;
function Ln({
  useFlushSync: e = !0,
  directDomUpdates: l = !1,
  directDomUpdatesMode: t = "transform",
  ...n
}) {
  const s = yn((d) => d + 1, 0)[1], r = mn({
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
  const a = (d) => {
    const g = r.current;
    if (!g.enabled || !g.container) return;
    const c = d.getTotalSize();
    if (c !== g.lastSize) {
      g.lastSize = c;
      const x = d.options.horizontal ? "width" : "height";
      g.container.style[x] = `${c}px`;
    }
  }, o = (d) => {
    const g = r.current;
    if (!g.enabled || !g.container) return;
    a(d);
    const c = !!d.options.horizontal, x = g.mode === "transform", f = c ? "left" : "top", h = d.options.scrollMargin, E = d.getVirtualItems();
    for (const v of E) {
      const S = v.start - h, T = d.elementsCache.get(v.key);
      T && g.lastPositions.get(T) !== S && (g.lastPositions.set(T, S), x ? T.style.transform = c ? `translate3d(${S}px, 0, 0)` : `translate3d(0, ${S}px, 0)` : T.style[f] = `${S}px`);
    }
  }, i = {
    ...n,
    onChange: (d, g) => {
      var c;
      const x = r.current;
      let f = !0;
      if (x.enabled) {
        o(d);
        const h = d.range, E = x.prevRange;
        f = !E || E.isScrolling !== d.isScrolling || E.startIndex !== (h == null ? void 0 : h.startIndex) || E.endIndex !== (h == null ? void 0 : h.endIndex), f && (x.prevRange = h ? {
          startIndex: h.startIndex,
          endIndex: h.endIndex,
          isScrolling: d.isScrolling
        } : null);
      }
      f && (e && g ? vn(s) : s()), (c = n.onChange) == null || c.call(n, d, g);
    }
  }, [p] = fn(() => {
    const d = new On(i);
    return Object.assign(d, {
      containerRef: (g) => {
        const c = r.current;
        if (c.container = g, c.lastSize = null, g && c.enabled) {
          const x = d.getTotalSize();
          c.lastSize = x;
          const f = d.options.horizontal ? "width" : "height";
          g.style[f] = `${x}px`;
        }
      }
    });
  });
  return p.setOptions(i), Ye(() => p._didMount(), []), Ye(() => (a(p), p._willUpdate())), Ye(() => {
    o(p);
  }), p;
}
function Dn(e) {
  return Ln({
    observeElementRect: kn,
    observeElementOffset: _n,
    scrollToFn: zn,
    ...e
  });
}
const We = window.QwenPaw.host, I = We.React, { useRef: $n } = I, { Tag: jt } = We.antd, { Text: be } = We.antd.Typography, {
  CaretRightOutlined: jn,
  RobotOutlined: Nn,
  SettingOutlined: Fn,
  ToolOutlined: Pn,
  UserOutlined: Bn
} = We.antdIcons, Hn = {
  user: "blue",
  message: "purple",
  tool: "gold",
  system: "green"
}, Wn = {
  user: /* @__PURE__ */ I.createElement(Bn, null),
  message: /* @__PURE__ */ I.createElement(Nn, null),
  tool: /* @__PURE__ */ I.createElement(Pn, null),
  system: /* @__PURE__ */ I.createElement(Fn, null)
}, Vn = {
  user: { zh: "用户", en: "USER" },
  message: { zh: "助手", en: "ASSISTANT" },
  tool: { zh: "工具", en: "TOOL" },
  system: { zh: "标记", en: "SYSTEM" }
}, Un = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  interrupted: "default",
  unknown: "default"
}, yt = {
  running: { zh: "进行中", en: "Running" },
  success: { zh: "成功", en: "Success" },
  error: { zh: "错误", en: "Error" },
  cancelled: { zh: "已取消", en: "Cancelled" },
  interrupted: { zh: "已中断", en: "Interrupted" },
  unknown: { zh: "未知", en: "Unknown" }
}, Kn = 150, it = 26, Nt = 34, vt = 9, Et = 30;
function Xn(e) {
  const l = se(), t = Vn[e];
  return t ? l === "zh-CN" ? t.zh : t.en : e;
}
function qn(e) {
  const l = se(), t = yt[e] ?? yt.unknown;
  return l === "zh-CN" ? t.zh : t.en;
}
function St({
  record: e,
  selected: l,
  dimmed: t,
  multiRequest: n,
  onSelect: s
}) {
  const r = e.usage, a = r && (r.input_tokens || r.output_tokens) ? `${oe(r.input_tokens)}→${oe(
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
        height: it,
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
      jt,
      {
        color: Hn[e.kind] ?? "default",
        icon: Wn[e.kind],
        style: {
          marginInlineEnd: 0,
          fontSize: 10,
          lineHeight: "16px",
          flexShrink: 0
        }
      },
      Xn(e.kind)
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
      e.kind === "tool" && e.toolName ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(be, { strong: !0, style: { fontSize: 12 } }, e.toolName), /* @__PURE__ */ I.createElement(be, { type: "secondary", style: { fontSize: 12 } }, ` ${e.toolInput ?? ""}`), e.toolOutput ? /* @__PURE__ */ I.createElement(
        be,
        {
          type: e.isError ? "danger" : "secondary",
          style: { fontSize: 12 }
        },
        ` → ${e.toolOutput}`
      ) : null) : /* @__PURE__ */ I.createElement(
        be,
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
function Jn({
  turn: e,
  collapsed: l,
  selected: t,
  cellCount: n,
  onToggle: s,
  onSelect: r
}) {
  const a = se();
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", height: Nt }
    },
    /* @__PURE__ */ I.createElement(
      "span",
      {
        onClick: (o) => {
          o.stopPropagation(), r();
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
        jn,
        {
          onClick: (o) => {
            o.stopPropagation(), s();
          },
          style: {
            fontSize: 10,
            transition: "transform 0.15s",
            transform: l ? "rotate(0deg)" : "rotate(90deg)"
          }
        }
      ),
      /* @__PURE__ */ I.createElement(be, { strong: !0, style: { fontSize: 11 } }, "Request #", e.turn),
      e.durationMs !== null && /* @__PURE__ */ I.createElement(be, { type: "secondary", style: { fontSize: 11 } }, ie(e.durationMs / 1e3)),
      /* @__PURE__ */ I.createElement(be, { type: "secondary", style: { fontSize: 11 } }, n, " ", b(a, "events")),
      /* @__PURE__ */ I.createElement(
        jt,
        {
          color: Un[e.status] ?? "default",
          style: { marginInlineEnd: 0, fontSize: 10, lineHeight: "16px" }
        },
        qn(e.status)
      )
    )
  );
}
function Gn({
  turns: e,
  selectedIndex: l,
  selectedTurn: t,
  collapsedTurns: n,
  focusIndexes: s,
  searchMatchIndexes: r,
  onSelectedIndexChange: a,
  onSelectedTurnChange: o,
  onToggleTurn: i,
  callsCollapsed: p,
  hasOlderRecords: d,
  loadingOlder: g,
  onLoadOlder: c,
  initialRecord: x,
  emptyText: f
}) {
  const h = se(), E = $n(null), v = e.filter((L) => L.turn !== null), S = v.length > 1, T = I.useMemo(() => {
    var N;
    const L = [];
    d && L.push({
      key: "load-older",
      height: Et,
      type: "load-older"
    }), x && (L.push({
      key: "initial",
      height: it,
      type: "initial",
      record: x
    }), L.push({
      key: "initial-divider",
      height: vt,
      type: "divider"
    }));
    for (const A of v) {
      const R = A.turn;
      if (L.push({
        key: `turn-${R}`,
        height: Nt,
        type: "boundary",
        turn: A
      }), !n.has(R))
        for (const F of ((N = A.groups[0]) == null ? void 0 : N.cells) ?? [])
          p && F.kind === "tool" || L.push({
            key: `rec-${F.index}`,
            height: it,
            type: "record",
            record: F
          });
    }
    return L;
  }, [
    v,
    n,
    p,
    d,
    x
  ]), z = I.useCallback(
    (L) => s !== null && !s.has(L.index) || r !== null && !r.has(L.index),
    [s, r]
  ), C = (L) => {
    var N;
    switch (L.type) {
      case "load-older":
        return /* @__PURE__ */ I.createElement("div", { style: { textAlign: "center", height: Et } }, /* @__PURE__ */ I.createElement(
          "button",
          {
            type: "button",
            onClick: c,
            disabled: g,
            style: {
              border: "1px solid rgba(128,128,128,0.3)",
              borderRadius: 10,
              background: "transparent",
              padding: "1px 12px",
              fontSize: 11,
              cursor: g ? "default" : "pointer",
              color: "rgba(128,128,128,1)"
            }
          },
          g ? "…" : `⋯ ${b(h, "loadOlder")}`
        ));
      case "divider":
        return /* @__PURE__ */ I.createElement(
          "div",
          {
            style: {
              height: vt,
              borderBottom: "1px dashed rgba(128,128,128,0.25)"
            }
          }
        );
      case "initial": {
        const A = L.record;
        return /* @__PURE__ */ I.createElement(
          St,
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
          Jn,
          {
            turn: A,
            collapsed: n.has(R),
            selected: t === R,
            cellCount: ((N = A.groups[0]) == null ? void 0 : N.cells.length) ?? 0,
            onToggle: () => i(R),
            onSelect: () => o(R)
          }
        );
      }
      case "record":
      default: {
        const A = L.record;
        return /* @__PURE__ */ I.createElement(
          St,
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
  if (T.length === 0)
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
        f ?? b(h, "noSessions")
      )
    );
  const j = T.length <= Kn ? /* @__PURE__ */ I.createElement("div", null, T.map((L) => C(L))) : /* @__PURE__ */ I.createElement(
    Qn,
    {
      rows: T,
      scrollRef: E,
      renderRow: C
    }
  );
  return /* @__PURE__ */ I.createElement(
    "div",
    {
      ref: E,
      style: {
        height: "100%",
        overflowY: "auto",
        padding: "4px 12px 24px"
      }
    },
    j
  );
}
function Qn({
  rows: e,
  scrollRef: l,
  renderRow: t
}) {
  const n = Dn({
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
function Ze(e) {
  return (e == null ? void 0 : e.data) ?? {};
}
function Ee(e, l = 160) {
  if (!e) return "";
  const t = e.split(`
`, 1)[0].trim();
  return t.length > l ? `${t.slice(0, l)}…` : t;
}
function Yn(e) {
  var x;
  const l = [], t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  let o = 0, i = 0;
  const p = (f) => f.groups[0].cells, d = (f, h) => {
    const E = r.get(f);
    E ? E.push(h) : r.set(f, [h]);
  }, g = (f, h) => {
    const E = t.get(f);
    E ? (h.runIndex = E.turn ?? 0, p(E).push(h)) : d(f, h);
  }, c = (f, h) => {
    const E = r.get(h);
    if (E) {
      for (const v of E) p(f).push(v);
      r.delete(h);
    }
  };
  for (const f of e) {
    const h = Ze(f);
    switch (f.type) {
      case "run/start": {
        i += 1;
        const E = {
          turn: i,
          status: "running",
          durationMs: null,
          groups: [{ title: `Request #${i}`, cells: [] }]
        };
        t.set(f.run_id, E), l.push(E), c(E, f.run_id);
        const v = Array.isArray(h.messages) ? h.messages : [], S = String(h.query ?? "");
        p(E).push({
          index: ++o,
          runIndex: i,
          runId: f.run_id,
          kind: "user",
          text: Ee(S) || Ee((x = v.at(-1)) == null ? void 0 : x.text),
          messages: v,
          timeSeconds: 0,
          startedAt: ye(f.t),
          isError: !1,
          running: !1,
          model: void 0
        });
        break;
      }
      case "run/end": {
        const E = t.get(f.run_id), v = String(h.status ?? "unknown");
        if (E && (E.status = v, E.durationMs = typeof h.duration_ms == "number" ? h.duration_ms : null), v === "error" && h.error) {
          const S = E ?? {
            turn: null,
            status: v,
            durationMs: typeof h.duration_ms == "number" ? h.duration_ms : null,
            groups: [{ title: "", cells: [] }]
          };
          E || l.push(S), S.groups[0].cells.push({
            index: ++o,
            runIndex: i,
            runId: f.run_id,
            kind: "system",
            text: Ee(String(h.error)) || "run failed",
            marker: String(h.error ?? "run failed"),
            timeSeconds: typeof h.duration_ms == "number" ? h.duration_ms / 1e3 : null,
            startedAt: ye(f.t),
            isError: !0,
            running: !1,
            raw: [f]
          });
        }
        break;
      }
      case "agent/spawn": {
        const E = typeof h.child_session_id == "string" ? h.child_session_id : void 0, v = typeof h.child_agent_id == "string" ? h.child_agent_id : "?";
        g(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          text: `🚀 ${v} → ${E ?? "?"}`,
          timeSeconds: 0,
          startedAt: ye(f.t),
          isError: !1,
          running: !1,
          spawnSession: E,
          spawnAgent: v,
          raw: [f]
        });
        break;
      }
      case "llm/header": {
        const E = typeof h.sha256 == "string" ? h.sha256 : "", v = typeof h.prev_sha256 == "string" ? h.prev_sha256 : void 0, S = h.reason === "changed" ? "changed" : "initial", T = typeof h.system_prompt == "string" ? h.system_prompt : "", z = Array.isArray(h.tools) ? h.tools : [], C = Array.isArray(h.schemas) ? h.schemas : void 0;
        g(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "system",
          text: S === "initial" ? `⚙ ${T ? `System Prompt (${T.length})` : "System Prompt"}` : "⚙ System Prompt updated",
          timeSeconds: 0,
          startedAt: ye(f.t),
          isError: !1,
          running: !1,
          prompt: T,
          prevPrompt: a.get(v ?? ""),
          headerTools: z,
          headerReason: S,
          sha: E,
          prevSha: v,
          schemas: C,
          raw: [f]
        }), E && a.set(E, T);
        break;
      }
      case "llm/call": {
        const E = Ze(f), v = {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          text: "…",
          timeSeconds: null,
          startedAt: ye(f.t),
          isError: !1,
          running: !0,
          model: String(E.model ?? "unknown")
        };
        g(f.run_id, v);
        const S = n.get(f.run_id) ?? [];
        S.push({ cell: v, callData: E, call: f }), n.set(f.run_id, S);
        break;
      }
      case "llm/result": {
        const E = n.get(f.run_id), v = E == null ? void 0 : E.shift(), S = (v == null ? void 0 : v.callData) ?? {}, T = typeof h.duration_ms == "number" ? h.duration_ms : null, z = h.usage ?? void 0, C = h.timing, j = Array.isArray(h.tool_calls) ? h.tool_calls : void 0, A = {
          text: (h.error ? Ee(String(h.error)) : Ee(String(h.text ?? ""))) || (j && j.length > 0 ? `🛠 ${j.map((R) => R.name).join(", ")}` : ""),
          timeSeconds: T === null ? null : T / 1e3,
          isError: !!h.error,
          running: !1,
          outputText: h.text ? String(h.text) : void 0,
          thinkingText: h.thinking ? String(h.thinking) : void 0,
          usage: z,
          timing: C,
          toolCalls: j,
          note: h.note ? String(h.note) : void 0
        };
        v ? (Object.assign(v.cell, A), v.cell.model = String(
          h.model ?? S.model ?? v.cell.model
        ), v.cell.raw = [
          ...v.call ? [v.call] : [],
          f
        ]) : g(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "message",
          startedAt: ye(f.t),
          model: String(h.model ?? S.model ?? "unknown"),
          ...A
        });
        break;
      }
      case "tool/call": {
        const E = Ze(f), v = {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "tool",
          text: `${String(E.name ?? "?")}(${Ee(
            String(E.input ?? ""),
            60
          )})`,
          timeSeconds: null,
          startedAt: ye(f.t),
          isError: !1,
          running: !0,
          toolName: String(E.name ?? "?"),
          toolInput: E.input ? String(E.input) : void 0
        };
        g(f.run_id, v);
        const S = s.get(f.run_id) ?? [];
        S.push({ cell: v, callData: E, call: f }), s.set(f.run_id, S);
        break;
      }
      case "tool/result": {
        const E = s.get(f.run_id), v = typeof h.tool_call_id == "string" ? h.tool_call_id : null;
        let S;
        if (E) {
          const N = v ? E.findIndex(
            (A) => A.callData.tool_call_id === v
          ) : -1;
          N >= 0 ? S = E.splice(N, 1)[0] : S = E.shift();
        }
        const T = typeof h.duration_ms == "number" ? h.duration_ms : null, z = h.ok !== !1 && !h.error, C = h.output ? String(h.output) : void 0, j = C ? ` → ${Ee(C, 60)}` : "", L = {
          timeSeconds: T === null ? null : T / 1e3,
          isError: !z,
          running: !1,
          toolOutput: C,
          toolError: h.error ? String(h.error) : void 0,
          note: h.note ? String(h.note) : void 0
        };
        S ? (Object.assign(S.cell, L), S.cell.text = `${S.cell.text}${j}`, S.cell.raw = [
          ...S.call ? [S.call] : [],
          f
        ]) : g(f.run_id, {
          index: ++o,
          runIndex: 0,
          runId: f.run_id,
          kind: "tool",
          text: `?${j}`,
          startedAt: ye(f.t),
          ...L
        });
        break;
      }
    }
  }
  for (const [f, h] of r) {
    const E = t.get(f);
    if (E) {
      for (const v of h) p(E).push(v);
      r.delete(f);
    }
  }
  return l;
}
function bt(e) {
  return e.flatMap((l) => l.groups.flatMap((t) => t.cells));
}
function Zn(e) {
  var a;
  if (e.length === 0) return { initial: null, turns: [...e] };
  const l = e[0], t = ((a = l.groups[0]) == null ? void 0 : a.cells) ?? [], n = t.findIndex(
    (o) => o.kind === "system" && o.headerReason === "initial" && o.prompt !== void 0
  );
  if (n < 0) return { initial: null, turns: [...e] };
  const s = t[n], r = {
    ...l,
    groups: [
      {
        ...l.groups[0],
        cells: t.filter((o, i) => i !== n)
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
}, xt = "agent-trace-timeline-styles", es = `
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
let et = !1;
function ts() {
  if (et || typeof document > "u") return;
  if (document.getElementById(xt)) {
    et = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = xt, e.textContent = es, document.head.appendChild(e), et = !0;
}
function tt(e) {
  return Qt(e);
}
function Ft(e) {
  return e === "tool" ? 2 : e === "message" ? 1 : 0;
}
function wt(e) {
  return e != null && Number.isFinite(e);
}
function ns(e) {
  if (!wt(e.startedAt)) return null;
  const l = wt(e.timeSeconds) ? Math.max(0, e.timeSeconds * 1e3) : 0;
  return { start: e.startedAt, end: e.startedAt + l };
}
function Pt(e, l = "sequence") {
  if (l !== "sequence")
    return ss(
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
        (a, o) => ({
          start: t.length + o,
          end: t.length + o + 1,
          index: a.index,
          isError: a.isError === !0,
          kind: a.kind,
          label: a.text,
          lane: Ft(a.kind)
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
function ss(e, l, t) {
  const n = e.flatMap((d) => {
    const g = d.groups.flatMap(
      (c) => c.cells.flatMap((x) => {
        const f = ns(x);
        return f === null ? [] : [
          {
            ...f,
            index: x.index,
            isError: x.isError === !0,
            kind: x.kind,
            label: x.text,
            lane: Ft(x.kind)
          }
        ];
      })
    );
    return g.length === 0 ? [] : [{ turn: d.turn, rawSpans: g }];
  }), s = n.flatMap((d) => d.rawSpans);
  if (s.length === 0) return null;
  const r = /* @__PURE__ */ new Map();
  let a = 0, o = null;
  for (const d of [...s].sort(
    (g, c) => g.start - c.start || g.end - c.end
  ))
    t && o !== null && d.start > o && (a += d.start - o), r.set(d, a), o = o === null ? d.end : Math.max(o, d.end);
  const i = [], p = [];
  for (const d of n) {
    const g = d.rawSpans.map((c) => {
      const x = r.get(c) ?? 0;
      return {
        ...c,
        start: c.start - x,
        end: (l ? c.end : c.start) - x
      };
    });
    i.push(...g), d.turn !== null && p.push({
      turn: d.turn,
      time: Math.min(...g.map((c) => c.start))
    });
  }
  return {
    start: Math.min(...i.map((d) => d.start)),
    end: Math.max(...i.map((d) => d.end)),
    spans: i,
    turnBoundaries: p
  };
}
function ls(e, l, t = "sequence") {
  const n = Pt(e, t);
  return new Set(
    n == null ? void 0 : n.spans.filter((s) => s.start <= l.end && s.end >= l.start).map((s) => s.index)
  );
}
ts();
const Be = window.QwenPaw.host, D = Be.React, { useEffect: $e, useMemo: kt, useRef: je, useState: Te } = D, { Tooltip: rs } = Be.antd, nt = 3, is = 4, os = 0.08, as = 0.025, cs = 32, us = 0.5;
function ds(e) {
  const l = e.timeSeconds === null || !Number.isFinite(e.timeSeconds) ? void 0 : Math.max(0, e.timeSeconds * 1e3), t = e.startedAt === null || !Number.isFinite(e.startedAt) ? void 0 : e.startedAt, n = e.timing, s = n && Number.isFinite(n.ttft_ms) ? n.ttft_ms : void 0, r = n && Number.isFinite(n.decode_ms) ? n.decode_ms : void 0;
  return {
    ...l === void 0 ? {} : { durationMs: l },
    ...t === void 0 ? {} : { startedAt: t },
    ...s === void 0 || r === void 0 ? {} : { ttftMs: s, decodingMs: r }
  };
}
function hs(e) {
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
function ms(e, l) {
  const t = hs(e);
  if (l === void 0) return t;
  const n = l.durationMs === void 0 ? null : `Total ${tt(l.durationMs)}`, s = l.startedAt === void 0 ? null : l.durationMs === void 0 ? `Started ${ze(l.startedAt)}` : `${ze(l.startedAt)} → ${ze(
    l.startedAt + l.durationMs
  )}`, r = l.ttftMs === void 0 || l.decodingMs === void 0 ? null : `TTFT ${tt(
    l.ttftMs
  )} · Decoding ${tt(l.decodingMs)}`, a = [n, r].filter((o) => o !== null).join(" · ");
  return [t, s, a].filter((o) => o !== null && o !== "").join(`
`);
}
function ot(e, l) {
  return e <= l ? { start: e, end: l } : { start: l, end: e };
}
function st(e) {
  return Math.min(1, Math.max(0, e));
}
function fs(e, l, t, n) {
  const s = Math.min(n - t, Math.max(0, l)), r = Math.min(
    Math.max(e - s / 2, t),
    n - s
  );
  return { start: r, end: r + s };
}
function Tt(e, l, t, n, s) {
  const r = ot(
    Math.min(s, Math.max(n, e.start)),
    Math.min(s, Math.max(n, e.end))
  );
  return {
    start: (r.start - l) / t,
    end: (r.end - l) / t
  };
}
function Bt({
  label: e,
  placement: l,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ D.createElement(
    rs,
    {
      title: /* @__PURE__ */ D.createElement("span", { style: { whiteSpace: "pre-wrap" } }, e),
      placement: l,
      mouseEnterDelay: us,
      ...n
    },
    t
  );
}
function Mt() {
  return /* @__PURE__ */ D.createElement("div", { className: Z.labels, "aria-hidden": "true" }, /* @__PURE__ */ D.createElement("span", null, "Input"), /* @__PURE__ */ D.createElement("span", null, "Model"), /* @__PURE__ */ D.createElement("span", null, "Tools"));
}
function _t({
  loading: e,
  onHover: l,
  onLoad: t
}) {
  return /* @__PURE__ */ D.createElement(
    Bt,
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
const ps = D.memo(function({
  turns: l,
  mode: t,
  range: n,
  hasEarlierRecords: s = !1,
  onLoadEarlier: r,
  selectedIndex: a = null,
  searchMatchIndexes: o = null,
  onRangeChange: i,
  onRecordSelect: p,
  onRecordFocus: d
}) {
  const g = typeof Be.useTheme == "function" ? Be.useTheme() : void 0, c = kt(
    () => Pt(l, t),
    [t, l]
  ), x = kt(
    () => new Map(
      l.flatMap(
        (y) => y.groups.flatMap(
          (_) => _.cells.map(
            ($) => [$.index, ds($)]
          )
        )
      )
    ),
    [l]
  ), f = je(null), h = je(null), E = je(null), v = je(null), [S, T] = Te(null), [z, C] = Te(null), [j, L] = Te(!1), [N, A] = Te(!1), [R, F] = Te(null), [ue, Q] = Te(!1);
  $e(() => {
    c !== null && n !== null && (n.end < c.start || n.start > c.end) && i(null);
  }, [c, i, n]), $e(() => {
    c !== null && (Q(!1), F(
      (y) => y !== null && (y.end < c.start || y.start > c.end) ? null : y
    ));
  }, [c]), $e(() => {
    if (c === null || a === null) return;
    const y = c.spans.find(
      (_) => _.index === a
    );
    y !== void 0 && (Q(!0), F((_) => {
      if (_ === null || y.end > _.start && y.start < _.end)
        return _;
      const $ = Math.max(1, _.end - _.start), m = y.end <= _.start ? y.start : y.end - $, k = Math.min(
        Math.max(m, c.start),
        Math.max(c.start, c.end - $)
      );
      return k === _.start ? _ : { start: k, end: k + $ };
    }));
  }, [c, a]);
  const X = Math.max(1, ((c == null ? void 0 : c.end) ?? 0) - ((c == null ? void 0 : c.start) ?? 0)), Ae = Math.min(
    X,
    Math.max(1, ((R == null ? void 0 : R.end) ?? 0) - ((R == null ? void 0 : R.start) ?? 0))
  ), Ve = c === null || R === null ? (c == null ? void 0 : c.start) ?? 0 : Math.min(
    Math.max(R.start, c.start),
    c.end - Ae
  ), P = R === null ? X : Ae, W = R === null ? (c == null ? void 0 : c.start) ?? 0 : Ve, ve = s && c !== null && W === c.start, xe = r === void 0 || j ? void 0 : () => {
    L(!0), r().finally(() => {
      L(!1);
    });
  }, ae = c === null ? void 0 : {
    "--trajectory-domain-left": `${-(W - c.start) / P * 100}%`,
    "--trajectory-domain-width": `${X / P * 100}%`
  }, Ue = c === null || n === null ? null : Tt(
    n,
    W,
    P,
    c.start,
    c.end
  ), le = (c === null || S === null ? null : Tt(
    S,
    W,
    P,
    c.start,
    c.end
  )) ?? Ue, he = S ?? n;
  if ($e(() => {
    const y = E.current;
    if (y === null) return;
    const _ = ($) => {
      $.preventDefault();
      const m = v.current;
      if (m === null || c === null) return;
      Q(!1);
      const k = m.getBoundingClientRect(), M = st(
        ($.clientX - k.left) / Math.max(1, k.width)
      ), H = Math.min(
        X,
        Math.max(
          Math.min(
            t === "sequence" ? is : 20,
            X
          ),
          P * Math.exp($.deltaY * 15e-4)
        )
      );
      if (H >= X * 0.999) {
        F(null);
        return;
      }
      const U = W + M * P, Y = Math.min(
        Math.max(U - M * H, c.start),
        c.end - H
      );
      F({ start: Y, end: Y + H });
    };
    return y.addEventListener("wheel", _, { passive: !1 }), () => {
      y.removeEventListener("wheel", _);
    };
  }, [P, W, X, t, c]), c === null)
    return /* @__PURE__ */ D.createElement(
      "section",
      {
        ref: E,
        className: Z.root,
        "aria-label": "Trajectory timeline"
      },
      /* @__PURE__ */ D.createElement("div", { className: Z.plot }, /* @__PURE__ */ D.createElement(Mt, null), /* @__PURE__ */ D.createElement("div", { className: Z.track }, /* @__PURE__ */ D.createElement("span", { className: Z.empty }, "No timing data"), s && /* @__PURE__ */ D.createElement(
        _t,
        {
          loading: j,
          onHover: () => {
            C(null);
          },
          onLoad: xe
        }
      )))
    );
  const V = Math.min(
    P,
    X / c.spans.length
  ), me = (y) => {
    const _ = y.currentTarget.getBoundingClientRect();
    return st((y.clientX - _.left) / Math.max(1, _.width));
  }, we = (y) => {
    var k;
    const _ = y.target instanceof HTMLElement ? y.target : null, $ = (k = _ == null ? void 0 : _.closest("[data-timeline-record-index]")) == null ? void 0 : k.dataset.timelineRecordIndex;
    if ($ === void 0) return null;
    const m = Number($);
    return Number.isFinite(m) ? m : null;
  }, Ke = (y) => {
    i(y);
  }, Re = (y) => {
    if (y.button === 2) {
      h.current = {
        anchorClientX: y.clientX,
        anchorStart: W,
        moved: !1,
        pannable: R !== null,
        pointerId: y.pointerId
      }, R !== null && Q(!1), A(!0), typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId);
      return;
    }
    if (y.button !== 0) return;
    const _ = me(y), $ = W + _ * P, m = we(y);
    C({ fraction: _, recordIndex: m }), f.current = {
      pointerId: y.pointerId,
      anchorTime: $,
      anchorClientX: y.clientX,
      recordIndex: m
    }, typeof y.currentTarget.setPointerCapture == "function" && y.currentTarget.setPointerCapture(y.pointerId), T({ start: $, end: $ });
  }, Xe = (y) => {
    const _ = y.currentTarget.getBoundingClientRect(), $ = me(y);
    C({ fraction: $, recordIndex: we(y) });
    const m = h.current;
    if (m !== null && m.pointerId === y.pointerId) {
      if (Math.abs(y.clientX - m.anchorClientX) >= nt && (m.moved = !0), !m.pannable) return;
      const U = (y.clientX - m.anchorClientX) / Math.max(1, _.width), Y = Math.min(
        Math.max(m.anchorStart - U * P, c.start),
        c.end - P
      );
      F({ start: Y, end: Y + P });
      return;
    }
    const k = f.current;
    if (k === null || k.pointerId !== y.pointerId) return;
    let M = W;
    if (R !== null) {
      const U = y.clientX - _.left, Y = Math.min(
        cs,
        Math.max(1, _.width * os)
      ), K = U < Y ? -1 : U > _.width - Y ? 1 : 0;
      if (K !== 0) {
        const pe = K < 0 ? Y - U : U - (_.width - Y), ne = st(pe / Y), re = W + K * P * as * Math.max(0.2, ne);
        M = Math.min(
          Math.max(re, c.start),
          c.end - P
        ), M !== W && (Q(!1), F({
          start: M,
          end: M + P
        }));
      }
    }
    const H = M + $ * P;
    T(ot(k.anchorTime, H));
  }, qe = (y) => {
    const _ = h.current;
    if (_ !== null && _.pointerId === y.pointerId) {
      const K = _.moved || Math.abs(y.clientX - _.anchorClientX) >= nt;
      h.current = null, A(!1), K || i(null);
      return;
    }
    const $ = f.current;
    if ($ === null || $.pointerId !== y.pointerId) return;
    const m = me(y), k = W + m * P, M = ot($.anchorTime, k);
    C({ fraction: m, recordIndex: we(y) }), f.current = null, T(null);
    const H = Math.abs(y.clientX - $.anchorClientX) < nt, U = H && $.recordIndex !== null ? c.spans.find((K) => K.index === $.recordIndex) : void 0;
    if (U !== void 0) {
      i(null), p == null || p(U.index);
      return;
    }
    const Y = M.end - M.start < V ? fs(
      H ? M.start : (M.start + M.end) / 2,
      V,
      c.start,
      c.end
    ) : M;
    if (Ke(Y), H) {
      const K = M.start, pe = c.spans.reduce((ne, re) => {
        const ge = K < ne.start ? ne.start - K : K > ne.end ? K - ne.end : 0;
        return (K < re.start ? re.start - K : K > re.end ? K - re.end : 0) < ge ? re : ne;
      });
      d == null || d(pe.index);
    }
  }, Le = (y) => {
    y.key !== "Escape" || n === null || (y.preventDefault(), i(null));
  }, fe = () => {
    f.current = null, h.current = null, T(null), C(null), A(!1);
  };
  return /* @__PURE__ */ D.createElement(
    "section",
    {
      ref: E,
      className: Z.root,
      "data-theme": g || void 0,
      "aria-label": "Trajectory timeline"
    },
    /* @__PURE__ */ D.createElement("div", { className: Z.plot }, /* @__PURE__ */ D.createElement(Mt, null), /* @__PURE__ */ D.createElement(
      "div",
      {
        ref: v,
        className: Z.track,
        "data-panning": N || void 0,
        "aria-label": "Timeline overview; drag horizontally to focus events",
        tabIndex: 0,
        onKeyDown: Le,
        onPointerDown: Re,
        onPointerMove: Xe,
        onPointerUp: qe,
        onPointerCancel: fe,
        onPointerLeave: () => {
          f.current === null && h.current === null && C(null);
        },
        onDoubleClick: (y) => {
          y.preventDefault(), i(null);
        },
        onContextMenu: (y) => {
          y.preventDefault();
        }
      },
      ve && /* @__PURE__ */ D.createElement(
        _t,
        {
          loading: j,
          onHover: () => {
            C(null);
          },
          onLoad: xe
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
      le !== null && /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.selection,
          "data-dragging": S === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${le.start * 100}%`,
            "--trajectory-selection-width": `${(le.end - le.start) * 100}%`
          }
        }
      ), /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.selectionEdges,
          "data-dragging": S === null ? void 0 : "true",
          "aria-hidden": "true",
          style: {
            "--trajectory-selection-left": `${le.start * 100}%`,
            "--trajectory-selection-width": `${(le.end - le.start) * 100}%`
          }
        }
      )),
      /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.turnBoundaries,
          "data-animate-viewport": ue || void 0,
          "aria-hidden": "true",
          style: ae
        },
        c.turnBoundaries.filter(
          (y) => y.time > c.start && y.time >= W && y.time <= W + P
        ).map((y) => /* @__PURE__ */ D.createElement(
          "span",
          {
            className: Z.turnBoundary,
            "data-turn": y.turn,
            key: y.turn,
            style: {
              "--trajectory-turn-left": `${(y.time - c.start) / X * 100}%`
            }
          }
        ))
      ),
      /* @__PURE__ */ D.createElement(
        "div",
        {
          className: Z.lanes,
          "data-animate-viewport": ue || void 0,
          "data-timeline-domain": !0,
          style: ae
        },
        c.spans.filter(
          (y) => y.index === a || y.end >= W && y.start <= W + P
        ).map((y) => {
          const _ = (y.start - c.start) / X, m = (y.end - y.start) / X * 100, k = x.get(y.index), M = k == null ? void 0 : k.ttftMs, H = k == null ? void 0 : k.decodingMs, U = M === void 0 || H === void 0 || M + H <= 0 ? null : M / (M + H);
          return /* @__PURE__ */ D.createElement(
            Bt,
            {
              key: y.index,
              label: ms(y.kind, k),
              placement: "bottom"
            },
            /* @__PURE__ */ D.createElement(
              "span",
              {
                "aria-hidden": "true",
                className: Z.span,
                "data-timeline-span": y.kind,
                "data-timeline-record-index": y.index,
                "data-assistant-timing": U === null ? void 0 : "true",
                "data-error": y.isError || void 0,
                "data-equal-duration": t === "time" || void 0,
                "data-current": y.index === a || void 0,
                "data-hovered": (z == null ? void 0 : z.recordIndex) === y.index || void 0,
                "data-search-match": o === null ? void 0 : o.has(y.index) ? "true" : "false",
                "data-selected": he === null ? void 0 : y.start <= he.end && y.end >= he.start ? "true" : "false",
                style: {
                  "--trajectory-span-left": `${_ * 100}%`,
                  "--trajectory-span-width": `${m}%`,
                  "--trajectory-span-gap": `min(${m * 0.08}%, 1px)`,
                  "--trajectory-span-lane": y.lane,
                  ...U === null ? {} : {
                    "--trajectory-assistant-ttft": `${U * 100}%`
                  }
                }
              }
            )
          );
        })
      )
    ))
  );
}), ut = window.QwenPaw.host, ee = ut.React, { Button: gs, Input: ys, Segmented: vs, Tooltip: It } = ut.antd, { MenuFoldOutlined: Es, MenuUnfoldOutlined: Ss, ReloadOutlined: bs, SearchOutlined: xs } = ut.antdIcons;
function ws({
  mode: e,
  onModeChange: l,
  search: t,
  onSearchChange: n,
  onRefresh: s,
  modeOptions: r,
  allCollapsed: a,
  hasRequests: o,
  onToggleCollapseAll: i,
  callsCollapsed: p,
  onToggleCallsCollapsed: d
}) {
  const g = se();
  return /* @__PURE__ */ ee.createElement(
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
    /* @__PURE__ */ ee.createElement(It, { title: b(g, "projectionHint") }, /* @__PURE__ */ ee.createElement(
      vs,
      {
        size: "small",
        value: e,
        options: r,
        onChange: (c) => l(c)
      }
    )),
    /* @__PURE__ */ ee.createElement(
      ys,
      {
        size: "small",
        allowClear: !0,
        prefix: /* @__PURE__ */ ee.createElement(xs, null),
        placeholder: b(g, "searchEvents"),
        value: t,
        style: { width: 220 },
        onChange: (c) => n(c.target.value)
      }
    ),
    o && /* @__PURE__ */ ee.createElement(
      It,
      {
        title: a ? b(g, "expandAll") : b(g, "collapseAll")
      },
      /* @__PURE__ */ ee.createElement(
        gs,
        {
          size: "small",
          type: "text",
          icon: a ? /* @__PURE__ */ ee.createElement(Ss, null) : /* @__PURE__ */ ee.createElement(Es, null),
          onClick: i
        }
      )
    ),
    /* @__PURE__ */ ee.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ ee.createElement(
      "a",
      {
        onClick: s,
        style: { fontSize: 12, color: "rgba(128,128,128,1)" }
      },
      /* @__PURE__ */ ee.createElement(bs, null),
      " ",
      b(g, "refresh")
    ))
  );
}
const Me = window.QwenPaw.host, w = Me.React, { useCallback: lt, useEffect: Ne, useMemo: te, useRef: ks, useState: J } = w, {
  Button: rt,
  Empty: Fe,
  Input: Ts,
  Popconfirm: Ms,
  Popover: _s,
  Space: Is,
  Spin: at,
  Switch: Cs,
  Tag: zs,
  message: Ce
} = Me.antd, { DeleteOutlined: Os, DownloadOutlined: As, SearchOutlined: Rs, SettingOutlined: Ls } = Me.antdIcons, { Text: Se } = Me.antd.Typography;
function Ds(e) {
  return e.length > 8 ? e.slice(0, 8) : e;
}
function $s(e) {
  if (!e) return "-";
  const l = new Date(e);
  return Number.isNaN(l.getTime()) ? e : l.toLocaleString();
}
function js(e) {
  if (!e) return "-";
  const l = Date.parse(e);
  if (!Number.isFinite(l)) return e;
  const t = Date.now() - l;
  return t < 6e4 ? "刚刚" : t < 36e5 ? `${Math.floor(t / 6e4)} 分钟前` : t < 864e5 ? `${Math.floor(t / 36e5)} 小时前` : new Date(l).toLocaleString();
}
function Ct(e) {
  return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e4 ? `${(e / 1e3).toFixed(0)}k` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Ns(e) {
  return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)}MB` : e >= 1024 ? `${(e / 1024).toFixed(1)}KB` : `${e}B`;
}
const Fs = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default"
};
function Ps(e) {
  return e || "unknown";
}
function Bs({
  config: e,
  onChange: l,
  children: t
}) {
  const n = se(), s = (a, o, i) => /* @__PURE__ */ w.createElement(
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
    /* @__PURE__ */ w.createElement(Se, { style: { fontSize: 13 } }, a),
    /* @__PURE__ */ w.createElement(
      Cs,
      {
        size: "small",
        checked: !!o,
        onChange: (p) => l({ [i]: p })
      }
    )
  ), r = /* @__PURE__ */ w.createElement("div", { style: { width: 220 } }, /* @__PURE__ */ w.createElement(Se, { strong: !0, style: { fontSize: 13 } }, b(n, "settings")), /* @__PURE__ */ w.createElement("div", { style: { marginTop: 8 } }, e ? [
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
  ] : /* @__PURE__ */ w.createElement(at, { size: "small" })));
  return /* @__PURE__ */ w.createElement(_s, { content: r, trigger: "click", placement: "bottomRight" }, t);
}
function Hs() {
  const e = typeof Me.useLocale == "function" ? Me.useLocale() : void 0, l = te(() => At(e ?? null), [e]), [t, n] = J(null), [s, r] = J(!1), [a, o] = J(!1), [i, p] = J(null), [d, g] = J(null), [c, x] = J(!1), [f, h] = J(!1), [E, v] = J(""), [S, T] = J(""), [z, C] = J("sequence"), [j, L] = J(null), [N, A] = J(null), [R, F] = J(null), [ue, Q] = J(
    /* @__PURE__ */ new Set()
  ), [X, Ae] = J(!1), [Ve, P] = J(null), [W, ve] = J(null), xe = ks(null);
  xe.current = i;
  const ae = lt(async () => {
    try {
      const m = await dt({ limit: 100, offset: 0 });
      n(m.sessions), r(m.has_more), ve(null);
    } catch (m) {
      ve(String(m.message));
    }
  }, []), Ue = lt(async () => {
    o(!0);
    try {
      const m = await dt({
        limit: 100,
        offset: (t == null ? void 0 : t.length) ?? 0
      });
      n((k) => {
        const M = k ?? [];
        return [
          ...M,
          ...m.sessions.filter(
            (H) => !M.some((U) => U.session_id === H.session_id)
          )
        ];
      }), r(m.has_more);
    } catch (m) {
      ve(String(m.message));
    } finally {
      o(!1);
    }
  }, [t]), de = lt(
    async (m, k) => {
      k || x(!0);
      try {
        const M = await Wt(m, {
          beforeSeq: k,
          limit: 200
        });
        ve(null), g((H) => k && H ? {
          ...M,
          events: [...M.events, ...H.events]
        } : M);
      } catch (M) {
        ve(String(M.message));
      } finally {
        k || x(!1);
      }
    },
    []
  );
  Ne(() => {
    ae(), Vt().then(P).catch(() => P(null));
    try {
      const m = new URLSearchParams(window.location.search).get("session");
      m && p(m);
    } catch {
    }
  }, [ae]), Ne(() => {
    const m = setInterval(() => {
      document.visibilityState === "visible" && ae();
    }, 15e3);
    return () => clearInterval(m);
  }, [ae]), Ne(() => {
    i ? (L(null), A(null), F(null), Q(/* @__PURE__ */ new Set()), T(""), de(i)) : g(null);
  }, [i, de]);
  const le = te(
    () => d ? Yn(d.events) : [],
    [d]
  ), { initial: he, turns: V } = te(
    () => Zn(le),
    [le]
  ), me = te(
    () => he ? [he, ...bt(V)] : bt(V),
    [he, V]
  ), we = te(
    () => V.some((m) => m.status === "running"),
    [V]
  );
  Ne(() => {
    if (!i || !we) return;
    const m = setInterval(() => {
      document.visibilityState === "visible" && xe.current && de(xe.current);
    }, 5e3);
    return () => clearInterval(m);
  }, [i, we, de]);
  const Ke = te(
    () => j === null ? null : ls(V, j, z),
    [j, V, z]
  ), Re = te(() => {
    const m = S.trim().toLowerCase();
    return m ? new Set(
      me.filter(
        (k) => [
          k.text,
          k.outputText,
          k.thinkingText,
          k.toolName,
          k.toolInput,
          k.toolOutput,
          k.model
        ].filter(Boolean).join(`
`).toLowerCase().includes(m)
      ).map((k) => k.index)
    ) : null;
  }, [S, me]), Xe = te(
    () => N === null ? null : me.find((m) => m.index === N) ?? null,
    [me, N]
  ), qe = te(() => {
    var Je;
    if (R === null) return null;
    const m = V.find((B) => B.turn === R);
    if (!m) return null;
    const k = ((Je = m.groups[0]) == null ? void 0 : Je.cells) ?? [], M = k.filter((B) => B.kind === "message"), H = k.filter((B) => B.kind === "tool"), U = [
      ...new Set(
        M.map((B) => B.model).filter((B) => !!B)
      )
    ];
    let Y = 0, K = 0, pe = null, ne = null;
    const re = [];
    for (const B of k)
      B.usage && (Y += B.usage.input_tokens ?? 0, K += B.usage.output_tokens ?? 0), B.timing && (pe = pe === null ? B.timing.ttft_ms : Math.min(pe, B.timing.ttft_ms), ne = (ne ?? 0) + B.timing.decode_ms), B.isError && re.push(B.toolError ?? B.text ?? "error");
    const ge = k.find((B) => B.kind === "user");
    return {
      turn: R,
      status: m.status,
      durationMs: m.durationMs,
      startedAt: (ge == null ? void 0 : ge.startedAt) ?? null,
      query: (ge == null ? void 0 : ge.text) ?? "",
      llmCalls: M.length,
      toolCalls: H.length,
      models: U,
      inputTokens: Y,
      outputTokens: K,
      ttftMs: pe,
      decodeMs: ne,
      errors: re
    };
  }, [R, V]), Le = !!(d && d.events.length > 0 && d.events[0].seq > 1), fe = te(
    () => (t == null ? void 0 : t.find((m) => m.session_id === i)) ?? null,
    [t, i]
  ), y = te(() => {
    if (!t) return [];
    const m = E.trim().toLowerCase();
    return m ? t.filter(
      (k) => [k.session_id, k.agent_id, k.channel].join(" ").toLowerCase().includes(m)
    ) : t;
  }, [t, E]), _ = async (m) => {
    try {
      P(await Ut(m));
    } catch (k) {
      Ce.error(String(k.message));
    }
  }, $ = te(
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
      Ts,
      {
        allowClear: !0,
        size: "small",
        prefix: /* @__PURE__ */ w.createElement(Rs, null),
        placeholder: b(l, "searchPlaceholder"),
        value: E,
        onChange: (m) => v(m.target.value)
      }
    )),
    /* @__PURE__ */ w.createElement("div", { style: { flex: 1, overflow: "auto", padding: "0 8px 12px" } }, t === null ? /* @__PURE__ */ w.createElement("div", { style: { textAlign: "center", paddingTop: 48 } }, /* @__PURE__ */ w.createElement(at, null)) : y.length === 0 ? /* @__PURE__ */ w.createElement(
      Fe,
      {
        image: Fe.PRESENTED_IMAGE_SIMPLE,
        description: /* @__PURE__ */ w.createElement("span", { style: { fontSize: 12 } }, b(l, "noSessions")),
        style: { paddingTop: 32 }
      },
      /* @__PURE__ */ w.createElement(
        Se,
        {
          type: "secondary",
          style: { fontSize: 12, maxWidth: 220, display: "block" }
        },
        b(l, "noSessionsHint")
      )
    ) : y.map((m) => {
      const k = m.session_id === i;
      return /* @__PURE__ */ w.createElement(
        "div",
        {
          key: m.session_id,
          onClick: () => p(m.session_id),
          style: {
            padding: "8px 10px",
            marginBottom: 4,
            borderRadius: 8,
            cursor: "pointer",
            background: k ? "rgba(22,119,255,0.10)" : "transparent",
            border: k ? "1px solid rgba(22,119,255,0.35)" : "1px solid transparent"
          }
        },
        /* @__PURE__ */ w.createElement(
          "div",
          {
            style: { display: "flex", alignItems: "center", gap: 6 }
          },
          /* @__PURE__ */ w.createElement(
            Se,
            {
              strong: !0,
              style: { fontSize: 13, flex: 1, minWidth: 0 },
              ellipsis: { tooltip: m.session_id }
            },
            m.agent_id || Ds(m.session_id)
          ),
          /* @__PURE__ */ w.createElement(
            zs,
            {
              color: Fs[m.status] ?? "default",
              style: { marginInlineEnd: 0 }
            },
            Ps(m.status)
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
          /* @__PURE__ */ w.createElement("span", null, m.channel || "-"),
          /* @__PURE__ */ w.createElement("span", null, m.runs, " ", b(l, "runs")),
          /* @__PURE__ */ w.createElement("span", null, Ct(m.total_tokens), " tok"),
          /* @__PURE__ */ w.createElement(
            "span",
            {
              style: { marginLeft: "auto" },
              title: $s(m.last_event_t)
            },
            js(m.last_event_t)
          )
        )
      );
    }), t !== null && s && !E.trim() && /* @__PURE__ */ w.createElement("div", { style: { textAlign: "center", padding: "8px 0 4px" } }, /* @__PURE__ */ w.createElement(
      "a",
      {
        onClick: () => void Ue(),
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
      fe ? /* @__PURE__ */ w.createElement(Se, { type: "secondary", style: { fontSize: 12 } }, `${fe.runs} ${b(l, "runs")} · ${fe.llm_calls} ${b(l, "llmCalls")} · ${fe.tool_calls} ${b(
        l,
        "toolCalls"
      )} · ${Ct(fe.total_tokens)} ${b(
        l,
        "tokens"
      )} · ${Ns(fe.size_bytes)}`) : /* @__PURE__ */ w.createElement(Se, { type: "secondary", style: { fontSize: 13 } }, b(l, "selectSession")),
      /* @__PURE__ */ w.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ w.createElement(Is, null, /* @__PURE__ */ w.createElement(Bs, { config: Ve, onChange: _ }, /* @__PURE__ */ w.createElement(rt, { size: "small", icon: /* @__PURE__ */ w.createElement(Ls, null) })), i && /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(
        rt,
        {
          size: "small",
          icon: /* @__PURE__ */ w.createElement(As, null),
          onClick: () => {
            Kt(i).then(() => Ce.success(b(l, "exported"))).catch(
              (m) => Ce.error(String(m.message))
            );
          }
        },
        b(l, "export")
      ), /* @__PURE__ */ w.createElement(
        Ms,
        {
          title: b(l, "deleteConfirm"),
          onConfirm: () => {
            Xt(i).then(() => {
              Ce.success(b(l, "deleted")), p(null), ae();
            }).catch(
              (m) => Ce.error(String(m.message))
            );
          }
        },
        /* @__PURE__ */ w.createElement(rt, { size: "small", danger: !0, icon: /* @__PURE__ */ w.createElement(Os, null) }, b(l, "delete"))
      ))))
    ),
    W && /* @__PURE__ */ w.createElement("div", { style: { padding: "2px 12px" } }, /* @__PURE__ */ w.createElement(Se, { type: "danger", style: { fontSize: 12 } }, `${b(l, "loadFailed")}: ${W}`)),
    /* @__PURE__ */ w.createElement(
      ws,
      {
        mode: z,
        onModeChange: C,
        search: S,
        onSearchChange: T,
        onRefresh: () => {
          ae(), i && de(i);
        },
        modeOptions: $,
        allCollapsed: V.length > 0 && V.every((m) => ue.has(m.turn ?? -1)),
        hasRequests: V.some((m) => m.turn !== null),
        callsCollapsed: X,
        onToggleCallsCollapsed: () => Ae((m) => !m),
        onToggleCollapseAll: () => {
          Q((m) => V.some(
            (M) => M.turn !== null && !m.has(M.turn)
          ) ? new Set(
            V.map((M) => M.turn).filter((M) => M !== null)
          ) : /* @__PURE__ */ new Set());
        }
      }
    ),
    /* @__PURE__ */ w.createElement(
      ps,
      {
        turns: V,
        mode: z,
        range: j,
        hasEarlierRecords: Le,
        onLoadEarlier: async () => {
          var m;
          return !d || d.events.length === 0 ? !1 : (await de(i, (m = d.events[0]) == null ? void 0 : m.seq), !0);
        },
        selectedIndex: N,
        searchMatchIndexes: Re,
        onRangeChange: L,
        onRecordSelect: A,
        onRecordFocus: A
      }
    ),
    c && !d ? /* @__PURE__ */ w.createElement("div", { style: { textAlign: "center", paddingTop: 64 } }, /* @__PURE__ */ w.createElement(at, null)) : d ? /* @__PURE__ */ w.createElement("div", { style: { flex: 1, display: "flex", minHeight: 0 } }, /* @__PURE__ */ w.createElement(
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
        Gn,
        {
          turns: V,
          selectedIndex: N,
          selectedTurn: R,
          collapsedTurns: ue,
          focusIndexes: Ke,
          searchMatchIndexes: Re,
          onSelectedIndexChange: (m) => {
            A(m), F(null);
          },
          onSelectedTurnChange: (m) => {
            F(m), A(null);
          },
          callsCollapsed: X,
          onToggleTurn: (m) => {
            Q((k) => {
              const M = new Set(k);
              return M.has(m) ? M.delete(m) : M.add(m), M;
            });
          },
          hasOlderRecords: Le,
          loadingOlder: f,
          onLoadOlder: () => {
            var m;
            !d || d.events.length === 0 || (h(!0), de(
              i,
              (m = d.events[0]) == null ? void 0 : m.seq
            ).finally(() => h(!1)));
          },
          emptyText: b(l, "noSessions"),
          initialRecord: he
        }
      )
    ), /* @__PURE__ */ w.createElement(
      hn,
      {
        record: Xe,
        request: qe,
        onJumpSession: p,
        onSelectTurn: (m) => {
          F(m), A(null);
        }
      }
    )) : /* @__PURE__ */ w.createElement(
      Fe,
      {
        image: Fe.PRESENTED_IMAGE_SIMPLE,
        style: { paddingTop: 64 },
        description: b(l, "selectSession")
      }
    )
  ));
}
var zt, Ot;
(Ot = (zt = window.QwenPaw).registerRoutes) == null || Ot.call(zt, "agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: Hs,
    label: b(se(), "routeLabel"),
    icon: "🧭",
    priority: 44
  }
]);

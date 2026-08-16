/**
 * Trace page: session list on the left; on the right a dsh-style
 * trajectory view (toolbar → 3-lane timeline → ledger + inspector).
 */

import type * as ReactNS from "react";

import { resolveLocale, storedLocale, t } from "./locale";
import {
  deleteSessionRemote,
  exportSessionFile,
  fetchConfig,
  fetchSessionEvents,
  fetchSessionStats,
  fetchSessionsPage,
  updateConfig,
  type SessionDetail,
  type SessionSummary,
  type TraceConfigUi,
} from "./traceApi";
import { Inspector } from "./trajectory/Inspector";
import type { RequestSummary } from "./trajectory/Inspector";
import { Ledger } from "./trajectory/Ledger";
import {
  buildTurns,
  splitInitialHeader,
  turnRecords,
} from "./trajectory/model";
import { TimelineBar } from "./trajectory/TimelineBar";
import {
  trajectoryTimelineFocusIndexes,
  type TrajectoryTimeRange,
  type TrajectoryTimelineMode,
} from "./trajectory/timeline";
import { Toolbar } from "./trajectory/Toolbar";

const host = window.QwenPaw.host;
const React: typeof ReactNS = host.React;
const { useCallback, useEffect, useMemo, useRef, useState } = React;
const {
  Button,
  Empty,
  Input,
  Popconfirm,
  Popover,
  Space,
  Spin,
  Switch,
  Tag,
  message,
} = host.antd;
const { DeleteOutlined, DownloadOutlined, SearchOutlined, SettingOutlined } =
  host.antdIcons;
const { Text } = host.antd.Typography;

function shortId(id: string): string {
  return id.length > 8 ? id.slice(0, 8) : id;
}

function formatTime(iso: string | null | undefined): string {
  if (!iso) return "-";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleString();
}

function formatRelative(iso: string | null | undefined): string {
  if (!iso) return "-";
  const value = Date.parse(iso);
  if (!Number.isFinite(value)) return iso;
  const delta = Date.now() - value;
  if (delta < 60_000) return "刚刚";
  if (delta < 3_600_000) return `${Math.floor(delta / 60_000)} 分钟前`;
  if (delta < 86_400_000) return `${Math.floor(delta / 3_600_000)} 小时前`;
  return new Date(value).toLocaleString();
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 10_000) return `${(n / 1000).toFixed(0)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function formatBytes(n: number): string {
  if (n >= 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(1)}MB`;
  if (n >= 1024) return `${(n / 1024).toFixed(1)}KB`;
  return `${n}B`;
}

const STATUS_COLORS: Record<string, string> = {
  running: "processing",
  success: "success",
  error: "error",
  cancelled: "warning",
  unknown: "default",
};

function statusText(status: string): string {
  return status || "unknown";
}

function SettingsPopover({
  config,
  onChange,
  children,
}: {
  config: TraceConfigUi | null;
  onChange: (patch: Partial<TraceConfigUi>) => void;
  children: ReactNS.ReactNode;
}) {
  const locale = storedLocale();
  const row = (label: string, checked: boolean | undefined, key: string) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        padding: "4px 0",
      }}
    >
      <Text style={{ fontSize: 13 }}>{label}</Text>
      <Switch
        size="small"
        checked={Boolean(checked)}
        onChange={(next: boolean) =>
          onChange({ [key]: next } as Partial<TraceConfigUi>)
        }
      />
    </div>
  );
  const content = (
    <div style={{ width: 220 }}>
      <Text strong style={{ fontSize: 13 }}>
        {t(locale, "settings")}
      </Text>
      <div style={{ marginTop: 8 }}>
        {config ? (
          [
            row(t(locale, "enabled"), config.enabled, "enabled"),
            row(t(locale, "captureLlm"), config.capture_llm, "capture_llm"),
            row(
              t(locale, "captureTools"),
              config.capture_tools,
              "capture_tools",
            ),
            row(
              t(locale, "captureHeaders"),
              (config.capture_headers as boolean | undefined) ?? true,
              "capture_headers",
            ),
          ]
        ) : (
          <Spin size="small" />
        )}
      </div>
    </div>
  );
  return (
    <Popover content={content} trigger="click" placement="bottomRight">
      {children}
    </Popover>
  );
}

/** The Console trace viewer page. */
export function TracePage() {
  const hostLocale =
    typeof host.useLocale === "function" ? host.useLocale() : undefined;
  const locale = useMemo(() => resolveLocale(hostLocale ?? null), [hostLocale]);
  const [sessions, setSessions] = useState<SessionSummary[] | null>(null);
  const [sessionsHasMore, setSessionsHasMore] = useState(false);
  const [sessionsLoadingMore, setSessionsLoadingMore] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [detail, setDetail] = useState<SessionDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [loadingOlder, setLoadingOlder] = useState(false);
  const [sessionSearch, setSessionSearch] = useState("");
  const [eventSearch, setEventSearch] = useState("");
  const [mode, setMode] = useState<TrajectoryTimelineMode>("sequence");
  const [range, setRange] = useState<TrajectoryTimeRange | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedTurn, setSelectedTurn] = useState<number | null>(null);
  const [collapsedTurns, setCollapsedTurns] = useState<ReadonlySet<number>>(
    new Set(),
  );
  const [callsCollapsed, setCallsCollapsed] = useState(false);
  const [config, setConfig] = useState<TraceConfigUi | null>(null);
  const [sessionTotals, setSessionTotals] = useState<{
    sessionId: string;
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const selectedRef = useRef<string | null>(null);
  selectedRef.current = selected;

  const loadSessions = useCallback(async () => {
    try {
      const page = await fetchSessionsPage({ limit: 100, offset: 0 });
      setSessions(page.sessions);
      setSessionsHasMore(page.has_more);
      setError(null);
    } catch (exc) {
      setError(String((exc as Error).message));
    }
  }, []);

  const loadMoreSessions = useCallback(async () => {
    setSessionsLoadingMore(true);
    try {
      const page = await fetchSessionsPage({
        limit: 100,
        offset: sessions?.length ?? 0,
      });
      setSessions((prev) => {
        const existing = prev ?? [];
        return [
          ...existing,
          ...page.sessions.filter(
            (item) =>
              !existing.some((known) => known.session_id === item.session_id),
          ),
        ];
      });
      setSessionsHasMore(page.has_more);
    } catch (exc) {
      setError(String((exc as Error).message));
    } finally {
      setSessionsLoadingMore(false);
    }
  }, [sessions]);

  const loadDetail = useCallback(
    async (sessionId: string, beforeSeq?: number) => {
      if (!beforeSeq) setDetailLoading(true);
      try {
        const body = await fetchSessionEvents(sessionId, {
          beforeSeq,
          limit: 200,
        });
        setError(null);
        setDetail((prev) => {
          if (beforeSeq && prev) {
            return {
              ...body,
              events: [...body.events, ...prev.events],
            };
          }
          return body;
        });
      } catch (exc) {
        setError(String((exc as Error).message));
      } finally {
        if (!beforeSeq) setDetailLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    void loadSessions();
    void fetchConfig()
      .then(setConfig)
      .catch(() => setConfig(null));
    // Deep link: /plugin/agent-trace?session=<id> preselects it.
    try {
      const param = new URLSearchParams(window.location.search).get("session");
      if (param) setSelected(param);
    } catch {
      /* ignore malformed URLs */
    }
  }, [loadSessions]);

  // Keep the session list fresh so new conversations show up without
  // a manual refresh.
  useEffect(() => {
    const timer = setInterval(() => {
      if (document.visibilityState === "visible") {
        void loadSessions();
      }
    }, 15000);
    return () => clearInterval(timer);
  }, [loadSessions]);

  useEffect(() => {
    if (selected) {
      setRange(null);
      setSelectedIndex(null);
      setSelectedTurn(null);
      setCollapsedTurns(new Set());
      setEventSearch("");
      void loadDetail(selected);
      void fetchSessionStats(selected)
        .then((stats) =>
          setSessionTotals({
            sessionId: selected,
            inputTokens: stats.input_tokens,
            outputTokens: stats.output_tokens,
            totalTokens: stats.total_tokens,
          }),
        )
        .catch(() => setSessionTotals(null));
    } else {
      setDetail(null);
      setSessionTotals(null);
    }
  }, [selected, loadDetail]);

  const allTurns = useMemo(
    () => (detail ? buildTurns(detail.events) : []),
    [detail],
  );
  // dsh convention: the initial system prompt sits above the ledger.
  const { initial: initialHeader, turns } = useMemo(
    () => splitInitialHeader(allTurns),
    [allTurns],
  );
  const records = useMemo(
    () =>
      initialHeader
        ? [initialHeader, ...turnRecords(turns)]
        : turnRecords(turns),
    [initialHeader, turns],
  );

  const hasOpenRun = useMemo(
    () => turns.some((turn) => turn.status === "running"),
    [turns],
  );

  // Live-poll while a run is in flight so the ledger stays current.
  useEffect(() => {
    if (!selected || !hasOpenRun) return undefined;
    const timer = setInterval(() => {
      if (document.visibilityState === "visible" && selectedRef.current) {
        void loadDetail(selectedRef.current);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [selected, hasOpenRun, loadDetail]);

  const focusIndexes = useMemo(
    () =>
      range === null
        ? null
        : trajectoryTimelineFocusIndexes(turns, range, mode),
    [range, turns, mode],
  );

  const searchMatchIndexes = useMemo(() => {
    const needle = eventSearch.trim().toLowerCase();
    if (!needle) return null;
    return new Set(
      records
        .filter((record) =>
          [
            record.text,
            record.outputText,
            record.thinkingText,
            record.toolName,
            record.toolInput,
            record.toolOutput,
            record.model,
          ]
            .filter(Boolean)
            .join("\n")
            .toLowerCase()
            .includes(needle),
        )
        .map((record) => record.index),
    );
  }, [eventSearch, records]);

  const selectedRecord = useMemo(
    () =>
      selectedIndex === null
        ? null
        : records.find((record) => record.index === selectedIndex) ?? null,
    [records, selectedIndex],
  );

  const requestSummary = useMemo<RequestSummary | null>(() => {
    if (selectedTurn === null) return null;
    const turn = turns.find((item) => item.turn === selectedTurn);
    if (!turn) return null;
    const cells = turn.groups[0]?.cells ?? [];
    const llmCells = cells.filter((cell) => cell.kind === "message");
    const toolCells = cells.filter((cell) => cell.kind === "tool");
    const models = [
      ...new Set(
        llmCells
          .map((cell) => cell.model)
          .filter((model): model is string => Boolean(model)),
      ),
    ];
    let inputTokens = 0;
    let outputTokens = 0;
    let cacheReadTokens = 0;
    let cacheWriteTokens = 0;
    let ttftMs: number | null = null;
    let decodeMs: number | null = 0;
    const errors: string[] = [];
    for (const cell of cells) {
      if (cell.usage) {
        inputTokens += cell.usage.input_tokens ?? 0;
        outputTokens += cell.usage.output_tokens ?? 0;
        cacheReadTokens += cell.usage.cache_input_tokens ?? 0;
        cacheWriteTokens += cell.usage.cache_creation_input_tokens ?? 0;
      }
      if (cell.timing) {
        ttftMs =
          ttftMs === null
            ? cell.timing.ttft_ms
            : Math.min(ttftMs, cell.timing.ttft_ms);
        decodeMs = (decodeMs ?? 0) + cell.timing.decode_ms;
      }
      if (cell.isError) {
        errors.push(cell.toolError ?? cell.text ?? "error");
      }
    }
    const userCell = cells.find((cell) => cell.kind === "user");
    const lastOptions = [...llmCells].reverse().find((cell) => cell.options)
      ?.options;
    return {
      turn: selectedTurn,
      status: turn.status,
      durationMs: turn.durationMs,
      startedAt: userCell?.startedAt ?? null,
      query: userCell?.text ?? "",
      llmCalls: llmCells.length,
      toolCalls: toolCells.length,
      models,
      inputTokens,
      outputTokens,
      cacheReadTokens,
      cacheWriteTokens,
      ttftMs,
      decodeMs,
      errors,
      options: lastOptions,
      sessionTotals:
        sessionTotals && sessionTotals.sessionId === selected
          ? {
              inputTokens: sessionTotals.inputTokens,
              outputTokens: sessionTotals.outputTokens,
              totalTokens: sessionTotals.totalTokens,
            }
          : undefined,
    };
  }, [selectedTurn, turns, sessionTotals, selected]);

  const hasOlder = Boolean(
    detail && detail.events.length > 0 && detail.events[0].seq > 1,
  );

  const selectedSummary = useMemo(
    () => sessions?.find((item) => item.session_id === selected) ?? null,
    [sessions, selected],
  );

  const filteredSessions = useMemo(() => {
    if (!sessions) return [];
    const needle = sessionSearch.trim().toLowerCase();
    if (!needle) return sessions;
    return sessions.filter((item) =>
      [item.session_id, item.title ?? "", item.agent_id, item.channel]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [sessions, sessionSearch]);

  const applyConfig = async (patch: Partial<TraceConfigUi>) => {
    try {
      setConfig(await updateConfig(patch));
    } catch (exc) {
      void message.error(String((exc as Error).message));
    }
  };

  const modeOptions = useMemo(
    () => [
      { label: t(locale, "modeSequence"), value: "sequence" as const },
      { label: t(locale, "modeDuration"), value: "duration" as const },
      { label: t(locale, "modeTime"), value: "time" as const },
      { label: t(locale, "modeActual"), value: "actual" as const },
    ],
    [locale],
  );

  return (
    <div style={{ display: "flex", height: "100%", minHeight: 0 }}>
      {/* Left: session list */}
      <div
        style={{
          width: 300,
          flexShrink: 0,
          borderRight: "1px solid rgba(128,128,128,0.15)",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <div style={{ padding: "12px 12px 8px" }}>
          <Input
            allowClear
            size="small"
            prefix={<SearchOutlined />}
            placeholder={t(locale, "searchPlaceholder")}
            value={sessionSearch}
            onChange={(event: { target: { value: string } }) =>
              setSessionSearch(event.target.value)
            }
          />
        </div>
        <div style={{ flex: 1, overflow: "auto", padding: "0 8px 12px" }}>
          {sessions === null ? (
            <div style={{ textAlign: "center", paddingTop: 48 }}>
              <Spin />
            </div>
          ) : filteredSessions.length === 0 ? (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={
                <span style={{ fontSize: 12 }}>{t(locale, "noSessions")}</span>
              }
              style={{ paddingTop: 32 }}
            >
              <Text
                type="secondary"
                style={{ fontSize: 12, maxWidth: 220, display: "block" }}
              >
                {t(locale, "noSessionsHint")}
              </Text>
            </Empty>
          ) : (
            filteredSessions.map((item) => {
              const active = item.session_id === selected;
              return (
                <div
                  key={item.session_id}
                  onClick={() => setSelected(item.session_id)}
                  style={{
                    padding: "8px 10px",
                    marginBottom: 4,
                    borderRadius: 8,
                    cursor: "pointer",
                    background: active
                      ? "rgba(22,119,255,0.10)"
                      : "transparent",
                    border: active
                      ? "1px solid rgba(22,119,255,0.35)"
                      : "1px solid transparent",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <Text
                      strong
                      style={{ fontSize: 13, flex: 1, minWidth: 0 }}
                      ellipsis={{
                        tooltip: `${item.title ? `${item.title}\n` : ""}${
                          item.session_id
                        }`,
                      }}
                    >
                      {item.title || item.agent_id || shortId(item.session_id)}
                    </Text>
                    {item.agent_id ? (
                      <Tag
                        style={{ marginInlineEnd: 0, fontSize: 10 }}
                        color="geekblue"
                      >
                        {item.agent_id}
                      </Tag>
                    ) : null}
                    <Tag
                      color={STATUS_COLORS[item.status] ?? "default"}
                      style={{ marginInlineEnd: 0 }}
                    >
                      {statusText(item.status)}
                    </Tag>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      marginTop: 2,
                      fontSize: 12,
                      color: "rgba(128,128,128,1)",
                    }}
                  >
                    <span>{item.channel || "-"}</span>
                    <span>
                      {item.runs} {t(locale, "runs")}
                    </span>
                    <span>{formatCount(item.total_tokens)} tok</span>
                    <span
                      style={{ marginLeft: "auto" }}
                      title={formatTime(item.last_event_t)}
                    >
                      {formatRelative(item.last_event_t)}
                    </span>
                  </div>
                </div>
              );
            })
          )}
          {sessions !== null && sessionsHasMore && !sessionSearch.trim() && (
            <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
              <a
                onClick={() => void loadMoreSessions()}
                style={{ fontSize: 12 }}
              >
                {sessionsLoadingMore
                  ? "…"
                  : `⋯ ${t(locale, "loadOlder")} (${sessions?.length ?? 0})`}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Right: trajectory view */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <div
          style={{
            padding: "8px 12px",
            borderBottom: "1px solid rgba(128,128,128,0.15)",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {selectedSummary ? (
            <Text type="secondary" style={{ fontSize: 12 }}>
              {`${selectedSummary.runs} ${t(locale, "runs")} · ${
                selectedSummary.llm_calls
              } ${t(locale, "llmCalls")} · ${selectedSummary.tool_calls} ${t(
                locale,
                "toolCalls",
              )} · ${formatCount(selectedSummary.total_tokens)} ${t(
                locale,
                "tokens",
              )} · ${formatBytes(selectedSummary.size_bytes)}`}
            </Text>
          ) : (
            <Text type="secondary" style={{ fontSize: 13 }}>
              {t(locale, "selectSession")}
            </Text>
          )}
          <div style={{ marginLeft: "auto" }}>
            <Space>
              <SettingsPopover config={config} onChange={applyConfig}>
                <Button size="small" icon={<SettingOutlined />} />
              </SettingsPopover>
              {selected && (
                <>
                  <Button
                    size="small"
                    icon={<DownloadOutlined />}
                    onClick={() => {
                      void exportSessionFile(selected)
                        .then(() => message.success(t(locale, "exported")))
                        .catch((exc: Error) =>
                          message.error(String(exc.message)),
                        );
                    }}
                  >
                    {t(locale, "export")}
                  </Button>
                  <Popconfirm
                    title={t(locale, "deleteConfirm")}
                    onConfirm={() => {
                      void deleteSessionRemote(selected)
                        .then(() => {
                          message.success(t(locale, "deleted"));
                          setSelected(null);
                          void loadSessions();
                        })
                        .catch((exc: Error) =>
                          message.error(String(exc.message)),
                        );
                    }}
                  >
                    <Button size="small" danger icon={<DeleteOutlined />}>
                      {t(locale, "delete")}
                    </Button>
                  </Popconfirm>
                </>
              )}
            </Space>
          </div>
        </div>
        {error && (
          <div style={{ padding: "2px 12px" }}>
            <Text type="danger" style={{ fontSize: 12 }}>
              {`${t(locale, "loadFailed")}: ${error}`}
            </Text>
          </div>
        )}
        <Toolbar
          mode={mode}
          onModeChange={setMode}
          search={eventSearch}
          onSearchChange={setEventSearch}
          onRefresh={() => {
            void loadSessions();
            if (selected) void loadDetail(selected);
          }}
          modeOptions={modeOptions}
          allCollapsed={
            turns.length > 0 &&
            turns.every((turn) => collapsedTurns.has(turn.turn ?? -1))
          }
          hasRequests={turns.some((turn) => turn.turn !== null)}
          callsCollapsed={callsCollapsed}
          onToggleCallsCollapsed={() => setCallsCollapsed((prev) => !prev)}
          onToggleCollapseAll={() => {
            setCollapsedTurns((prev) => {
              const anyOpen = turns.some(
                (turn) => turn.turn !== null && !prev.has(turn.turn),
              );
              if (!anyOpen) return new Set();
              return new Set(
                turns
                  .map((turn) => turn.turn)
                  .filter((turn): turn is number => turn !== null),
              );
            });
          }}
        />
        <TimelineBar
          turns={turns}
          mode={mode}
          range={range}
          hasEarlierRecords={hasOlder}
          onLoadEarlier={async () => {
            if (!detail || detail.events.length === 0) return false;
            await loadDetail(selected as string, detail.events[0]?.seq);
            return true;
          }}
          selectedIndex={selectedIndex}
          searchMatchIndexes={searchMatchIndexes}
          onRangeChange={setRange}
          onRecordSelect={setSelectedIndex}
          onRecordFocus={setSelectedIndex}
        />
        {detailLoading && !detail ? (
          <div style={{ textAlign: "center", paddingTop: 64 }}>
            <Spin />
          </div>
        ) : !detail ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            style={{ paddingTop: 64 }}
            description={t(locale, "selectSession")}
          />
        ) : (
          <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
              }}
            >
              <Ledger
                turns={turns}
                selectedIndex={selectedIndex}
                selectedTurn={selectedTurn}
                collapsedTurns={collapsedTurns}
                focusIndexes={focusIndexes}
                searchMatchIndexes={searchMatchIndexes}
                onSelectedIndexChange={(index) => {
                  setSelectedIndex(index);
                  setSelectedTurn(null);
                }}
                onSelectedTurnChange={(turn) => {
                  setSelectedTurn(turn);
                  setSelectedIndex(null);
                }}
                callsCollapsed={callsCollapsed}
                onToggleTurn={(turn) => {
                  setCollapsedTurns((prev) => {
                    const next = new Set(prev);
                    if (next.has(turn)) next.delete(turn);
                    else next.add(turn);
                    return next;
                  });
                }}
                hasOlderRecords={hasOlder}
                loadingOlder={loadingOlder}
                onLoadOlder={() => {
                  if (!detail || detail.events.length === 0) return;
                  setLoadingOlder(true);
                  void loadDetail(
                    selected as string,
                    detail.events[0]?.seq,
                  ).finally(() => setLoadingOlder(false));
                }}
                emptyText={t(locale, "noSessions")}
                initialRecord={initialHeader}
              />
            </div>
            <Inspector
              record={selectedRecord}
              request={requestSummary}
              onJumpSession={setSelected}
              onSelectTurn={(turn) => {
                setSelectedTurn(turn);
                setSelectedIndex(null);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

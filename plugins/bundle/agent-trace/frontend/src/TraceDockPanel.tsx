/**
 * Docked trace panel for the chat page: a fixed right-side aside that
 * follows the current conversation, opened from a header button
 * registered via QwenPaw.chat.rightHeader.add (dsh-style embed).
 */

import type * as ReactNS from "react";

import { resolveLocale, storedLocale, t } from "./locale";
import { fetchSessionsPage, type SessionSummary } from "./traceApi";
import { SessionTraceView } from "./SessionTraceView";

const host = window.QwenPaw.host;
const React: typeof ReactNS = host.React;
const { useCallback, useEffect, useMemo, useRef, useState } = React;
const { Button, Empty, Tag, Tooltip } = host.antd;
const { CloseOutlined, CompassOutlined, ExportOutlined } = host.antdIcons;
const { Text } = host.antd.Typography;

const WIDTH_STORAGE_KEY = "agent-trace-dock-width";
const DEFAULT_WIDTH = 420;
const MIN_WIDTH = 320;
/** Never cover the whole window — keep the chat usable. */
const CHAT_RESERVE_PX = 480;

function maxWidth(): number {
  return Math.max(MIN_WIDTH, window.innerWidth - CHAT_RESERVE_PX);
}

function clampWidth(raw: number): number {
  const limit = Math.min(maxWidth(), 900);
  return Math.min(limit, Math.max(MIN_WIDTH, Math.round(raw)));
}

function readStoredWidth(): number {
  try {
    const stored = Number(localStorage.getItem(WIDTH_STORAGE_KEY));
    if (Number.isFinite(stored) && stored > 0) return clampWidth(stored);
  } catch {
    /* storage unavailable — fall through to default */
  }
  return clampWidth(DEFAULT_WIDTH);
}

/**
 * Header button + docked panel. Registered once; the panel mounts only
 * while open so polls and fetches stop on close.
 */
export function TraceDockLauncher() {
  const [open, setOpen] = useState(false);
  // Host hooks must be called at the top level on every render (never
  // inside a memo callback) — the hook count has to stay stable.
  const hostLocale =
    typeof host.useLocale === "function" ? host.useLocale() : undefined;
  const locale = useMemo(
    () => resolveLocale(hostLocale ?? storedLocale()),
    [hostLocale],
  );
  return (
    <>
      <Tooltip title={t(locale, "dockTitle")}>
        <Button
          size="small"
          type="text"
          icon={<CompassOutlined />}
          aria-label={t(locale, "dockTitle")}
          onClick={() => setOpen((prev) => !prev)}
        />
      </Tooltip>
      {open ? <TraceDockPanel onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function TraceDockPanel({ onClose }: { onClose: () => void }) {
  const theme = typeof host.useTheme === "function" ? host.useTheme() : "light";
  const hostLocale =
    typeof host.useLocale === "function" ? host.useLocale() : undefined;
  const locale = useMemo(
    () => resolveLocale(hostLocale ?? storedLocale()),
    [hostLocale],
  );
  const [width, setWidth] = useState(readStoredWidth);
  const [currentId, setCurrentId] = useState<string | null>(() =>
    typeof host.getCurrentSessionId === "function"
      ? host.getCurrentSessionId()
      : null,
  );
  const [override, setOverride] = useState<string | null>(null);
  const [sessions, setSessions] = useState<SessionSummary[] | null>(null);
  const dragRef = useRef<{ anchorX: number; anchorWidth: number } | null>(null);
  const prevCurrentIdRef = useRef<string | null>(currentId);
  const clampWidthRef = useRef(width);
  clampWidthRef.current = width;

  const effectiveId = override ?? currentId;

  // Follow the active chat; a manual lineage jump (override) sticks until
  // the user switches to another conversation.
  useEffect(() => {
    if (currentId !== prevCurrentIdRef.current) {
      prevCurrentIdRef.current = currentId;
      setOverride(null);
    }
  }, [currentId]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (typeof host.getCurrentSessionId === "function") {
        setCurrentId(host.getCurrentSessionId());
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const loadSessions = useCallback(async () => {
    try {
      const page = await fetchSessionsPage({ limit: 100, offset: 0 });
      setSessions(page.sessions);
    } catch {
      /* summaries are cosmetic — panel keeps working without them */
    }
  }, []);

  useEffect(() => {
    void loadSessions();
    const timer = setInterval(() => {
      if (document.visibilityState === "visible") void loadSessions();
    }, 15000);
    return () => clearInterval(timer);
  }, [loadSessions]);

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const onMove = (event: globalThis.PointerEvent) => {
      const drag = dragRef.current;
      if (drag === null) return;
      // Left-edge handle: dragging left widens the panel.
      setWidth(clampWidth(drag.anchorWidth + (drag.anchorX - event.clientX)));
    };
    const onUp = () => {
      if (dragRef.current !== null) {
        try {
          localStorage.setItem(
            WIDTH_STORAGE_KEY,
            String(clampWidthRef.current),
          );
        } catch {
          /* storage unavailable */
        }
      }
      dragRef.current = null;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const summary = useMemo(
    () => sessions?.find((item) => item.session_id === effectiveId) ?? null,
    [sessions, effectiveId],
  );

  const isDark = theme === "dark";
  const fullPageUrl = `/plugin/agent-trace${
    effectiveId ? `?session=${encodeURIComponent(effectiveId)}` : ""
  }`;

  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width,
        zIndex: 900,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        overflow: "hidden",
        background: isDark ? "#141414" : "#ffffff",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: `1px solid ${isDark ? "#2f2f2f" : "rgba(5,5,5,0.12)"}`,
        boxShadow: isDark
          ? "-8px 0 24px rgba(0,0,0,0.55)"
          : "-8px 0 24px rgba(0,0,0,0.12)",
      }}
    >
      {/* Left-edge drag handle */}
      <div
        onPointerDown={(event: ReactNS.PointerEvent<HTMLDivElement>) => {
          dragRef.current = {
            anchorX: event.clientX,
            anchorWidth: width,
          };
        }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 6,
          cursor: "col-resize",
          zIndex: 10,
        }}
      />
      {/* Panel header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 8px 8px 12px",
          borderBottom: `1px solid ${isDark ? "#2f2f2f" : "rgba(5,5,5,0.08)"}`,
          flexShrink: 0,
        }}
      >
        <Text strong style={{ fontSize: 13 }}>
          🧭 {t(locale, "dockTitle")}
        </Text>
        {override ? (
          <Tooltip title={override}>
            <Tag color="geekblue" style={{ marginInlineEnd: 0 }}>
              {t(locale, "viewingChild")}
            </Tag>
          </Tooltip>
        ) : (
          <Tag style={{ marginInlineEnd: 0 }}>{t(locale, "followCurrent")}</Tag>
        )}
        <span style={{ flex: 1 }} />
        <Tooltip title={t(locale, "openFullPage")}>
          <Button
            size="small"
            type="text"
            icon={<ExportOutlined />}
            href={fullPageUrl}
            target="_blank"
          />
        </Tooltip>
        <Tooltip title={t(locale, "closePanel")}>
          <Button
            size="small"
            type="text"
            icon={<CloseOutlined />}
            onClick={onClose}
          />
        </Tooltip>
      </div>
      {/* Panel body */}
      {effectiveId ? (
        <SessionTraceView
          sessionId={effectiveId}
          summary={summary}
          locale={locale}
          onJumpSession={setOverride}
          variant="panel"
          emptyText={t(locale, "waitingSession")}
          ledgerEmptyText={t(locale, "noTraceYet")}
        />
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{ paddingTop: 96 }}
          description={
            <span style={{ fontSize: 13 }}>{t(locale, "waitingSession")}</span>
          }
        >
          <Text
            type="secondary"
            style={{ fontSize: 12, maxWidth: 240, display: "block" }}
          >
            {t(locale, "waitingSessionHint")}
          </Text>
        </Empty>
      )}
    </aside>
  );
}

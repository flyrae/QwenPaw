import {
  AgentScopeRuntimeWebUI,
  type IAgentScopeRuntimeWebUIOptions,
  type IAgentScopeRuntimeWebUIRef,
} from "@agentscope-ai/chat";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { useAgentStore } from "../../stores/agentStore";
import { buildAuthHeaders } from "../../api/authHeaders";
import { getApiUrl } from "../../api/config";
import { providerApi } from "../../api/modules/provider";
import { planApi } from "../../api/modules/plan";
import sessionApi from "../Chat/sessionApi";
import defaultConfig, { getDefaultConfig } from "../Chat/OptionsPanel/defaultConfig";
import {
  toDisplayUrl,
  normalizeContentUrls,
  extractUserMessageText,
} from "../Chat/utils";
import TaskListPanel from "./TaskListPanel";
import styles from "./index.module.less";

interface CustomWindow extends Window {
  currentSessionId?: string;
  currentUserId?: string;
  currentChannel?: string;
}
declare const window: CustomWindow;

const DEFAULT_USER_ID = "default";
const DEFAULT_CHANNEL = "console";

export default function SimpleChatPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const { isDark } = useTheme();
  const { selectedAgent } = useAgentStore();
  const [planEnabled, setPlanEnabled] = useState(false);
  const [refreshKey] = useState(0);
  const chatRef = useRef<IAgentScopeRuntimeWebUIRef>(null);
  const chatIdRef = useRef<string | undefined>(undefined);
  const pendingClearHistoryRef = useRef(false);

  const chatId = useMemo(() => {
    const match = location.pathname.match(/^\/simple\/(.+)$/);
    return match?.[1];
  }, [location.pathname]);

  chatIdRef.current = chatId;

  useEffect(() => {
    let cancelled = false;
    planApi
      .getPlanConfig()
      .then((cfg) => {
        if (!cancelled) setPlanEnabled(cfg.enabled);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [selectedAgent]);

  const scheduleHistoryClear = useCallback(() => {
    queueMicrotask(() => {
      if (!pendingClearHistoryRef.current) return;
      pendingClearHistoryRef.current = false;
      chatRef.current?.messages.removeAllMessages();
    });
  }, []);

  const customFetch = useCallback(
    async (data: {
      input?: Array<Record<string, unknown>>;
      biz_params?: Record<string, unknown>;
      signal?: AbortSignal;
    }): Promise<Response> => {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...buildAuthHeaders(),
      };

      try {
        const activeModels = await providerApi.getActiveModels({
          scope: "effective",
          agent_id: selectedAgent,
        });
        if (
          !activeModels?.active_llm?.provider_id ||
          !activeModels?.active_llm?.model
        ) {
          return new Response(
            JSON.stringify({ error: "No model configured" }),
            { status: 200, headers: { "Content-Type": "application/json" } },
          );
        }
      } catch {
        return new Response(
          JSON.stringify({ error: "Failed to check model" }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }

      const { input = [], biz_params } = data;
      const session = ((input[input.length - 1]?.session as Record<string, string>) || {});
      const lastInput = input.slice(-1);
      const lastMsg = lastInput[0];
      const rewrittenInput =
        lastMsg?.content && Array.isArray(lastMsg.content)
          ? [{ ...lastMsg, content: lastMsg.content.map(normalizeContentUrls) }]
          : lastInput;

      const requestBody = {
        input: rewrittenInput,
        session_id: window.currentSessionId || session?.session_id || "",
        user_id: window.currentUserId || session?.user_id || DEFAULT_USER_ID,
        channel: window.currentChannel || session?.channel || DEFAULT_CHANNEL,
        stream: true,
        ...biz_params,
      };

      const backendChatId =
        sessionApi.getRealIdForSession(requestBody.session_id) ??
        chatIdRef.current ??
        requestBody.session_id;
      if (backendChatId) {
        const userText = rewrittenInput
          .filter((m: any) => m.role === "user")
          .map(extractUserMessageText)
          .join("\n")
          .trim();
        if (userText) {
          sessionApi.setLastUserMessage(backendChatId, userText);
        }
      }

      return fetch(getApiUrl("/console/chat"), {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
        signal: data.signal,
      });
    },
    [selectedAgent],
  );

  const options = useMemo(() => {
    const i18nConfig = getDefaultConfig(t);
    const commandSuggestions = [
      { label: "/clear", value: "clear" },
      { label: "/compact", value: "compact" },
      { label: "/mission", value: "mission" },
      { label: "/skills", value: "skills" },
      ...(planEnabled ? [{ label: "/plan", value: "plan " }] : []),
    ];

    return {
      ...i18nConfig,
      theme: {
        ...defaultConfig.theme,
        darkMode: isDark,
        leftHeader: { logo: "", title: "QwenPaw" },
        rightHeader: null,
      },
      welcome: {
        ...i18nConfig.welcome,
        nick: "QwenPaw",
        avatar: "/qwenpaw.png",
      },
      sender: {
        ...(i18nConfig as any)?.sender,
        placeholder: t("chat.inputPlaceholder"),
        suggestions: commandSuggestions.map((item) => ({
          label: item.label,
          value: item.value,
        })),
      },
      session: {
        multiple: true,
        hideBuiltInSessionList: true,
        api: sessionApi,
      },
      api: {
        ...defaultConfig.api,
        fetch: customFetch,
        responseParser: (chunk: string) => {
          const payload = JSON.parse(chunk) as Record<string, unknown>;
          const checkClear = (msg: unknown): boolean => {
            if (!msg || typeof msg !== "object") return false;
            const meta = (msg as any).metadata;
            return (
              meta?.clear_history === true ||
              meta?.metadata?.clear_history === true
            );
          };
          const record = payload as any;
          if (
            (record.object === "message" && checkClear(record)) ||
            (record.object === "response" &&
              Array.isArray(record.output) &&
              record.output.some(checkClear))
          ) {
            pendingClearHistoryRef.current = true;
            if (
              record.object === "response" &&
              record.status === "completed"
            ) {
              scheduleHistoryClear();
            }
          }
          return payload as any;
        },
        replaceMediaURL: (url: string) => toDisplayUrl(url),
        cancel(data: { session_id: string }) {
          const cId =
            sessionApi.getRealIdForSession(data.session_id) ?? data.session_id;
          if (cId) {
            import("../../api/modules/chat").then(({ chatApi }) =>
              chatApi.stopChat(cId).catch(() => {}),
            );
          }
        },
        async reconnect(data: { session_id: string; signal?: AbortSignal }) {
          return fetch(getApiUrl("/console/chat"), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...buildAuthHeaders(),
            },
            body: JSON.stringify({
              reconnect: true,
              session_id: window.currentSessionId || data.session_id,
              user_id: window.currentUserId || DEFAULT_USER_ID,
              channel: window.currentChannel || DEFAULT_CHANNEL,
            }),
            signal: data.signal,
          });
        },
      },
    } as unknown as IAgentScopeRuntimeWebUIOptions;
  }, [customFetch, t, isDark, planEnabled, scheduleHistoryClear]);

  return (
    <div className={styles.container}>
      <div className={styles.chatArea}>
        <AgentScopeRuntimeWebUI
          ref={chatRef}
          key={refreshKey}
          options={options}
        />
      </div>
      <div className={styles.taskPanel}>
        <TaskListPanel />
      </div>
    </div>
  );
}

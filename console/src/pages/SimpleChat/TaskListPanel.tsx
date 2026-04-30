import React, { useCallback, useEffect, useRef, useState } from "react";
import { Progress, Spin } from "antd";
import { useChatAnywhereSessionsState } from "@agentscope-ai/chat";
import { useTranslation } from "react-i18next";
import {
  planApi,
  subscribePlanUpdates,
  type PlanStateResponse,
} from "../../api/modules/plan";
import styles from "./TaskListPanel.module.less";

const STATE_ICONS: Record<string, string> = {
  done: "✅",
  in_progress: "🔄",
  abandoned: "⛔",
  todo: "⬜",
};

const STATE_CLASS: Record<string, string> = {
  todo: styles.stateTodo,
  in_progress: styles.stateInProgress,
  done: styles.stateDone,
  abandoned: styles.stateAbandoned,
};

function getBackendSessionId(): string {
  return (window as any).currentSessionId || "";
}

const TaskListPanel: React.FC = () => {
  const { t } = useTranslation();
  const { currentSessionId } = useChatAnywhereSessionsState();
  const [plan, setPlan] = useState<PlanStateResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const unsubRef = useRef<(() => void) | null>(null);
  const ssePlanRef = useRef<PlanStateResponse | null>(null);

  const fetchPlan = useCallback(async () => {
    const sid = getBackendSessionId();
    setLoading(true);
    try {
      const data = await planApi.getCurrentPlan(sid || undefined);
      if (ssePlanRef.current !== null && data === null) return;
      setPlan(data);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [currentSessionId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Initial fetch
  useEffect(() => {
    ssePlanRef.current = null;
    fetchPlan();
  }, [fetchPlan]);

  // SSE subscription
  useEffect(() => {
    const unsub = subscribePlanUpdates((updatedPlan, eventSessionId) => {
      const mySid = getBackendSessionId();
      if (eventSessionId && mySid && eventSessionId !== mySid) return;
      ssePlanRef.current = updatedPlan;
      setPlan(updatedPlan);
    });
    unsubRef.current = unsub;
    return () => {
      unsub();
      unsubRef.current = null;
    };
  }, []);

  // Polling fallback every 5s
  useEffect(() => {
    const interval = setInterval(fetchPlan, 5000);
    return () => clearInterval(interval);
  }, [fetchPlan]);

  const doneCount =
    plan?.subtasks.filter((s) => s.state === "done" || s.state === "abandoned")
      .length ?? 0;
  const totalCount = plan?.subtasks.length ?? 0;
  const percent =
    totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>{t("plan.title", "Tasks")}</span>
      </div>
      <div className={styles.content}>
        {loading && !plan ? (
          <div className={styles.emptyState}>
            <Spin />
          </div>
        ) : !plan ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📋</div>
            <div>{t("plan.noPlan", "No active plan")}</div>
            <div style={{ fontSize: 12, marginTop: 8 }}>
              {t("plan.noPlanHint", "Use /plan <description> to create a plan")}
            </div>
          </div>
        ) : (
          <>
            <div className={styles.planInfo}>
              <div className={styles.planName}>
                {plan.name}
                <span
                  className={`${styles.planState} ${
                    STATE_CLASS[plan.state] || ""
                  }`}
                >
                  {t(`plan.state.${plan.state}`, plan.state)}
                </span>
              </div>
              <div className={styles.planDesc}>{plan.description}</div>
            </div>

            <div className={styles.progressSection}>
              <div className={styles.progressLabel}>
                {t("plan.progress", "Progress")} — {doneCount}/{totalCount}
              </div>
              <Progress
                percent={percent}
                size="small"
                status={plan.state === "abandoned" ? "exception" : "active"}
                showInfo={false}
              />
            </div>

            <ul className={styles.subtaskList}>
              {plan.subtasks.map((subtask, idx) => (
                <li key={idx} className={styles.subtaskItem}>
                  <span className={styles.subtaskIcon}>
                    {STATE_ICONS[subtask.state] || "⬜"}
                  </span>
                  <div className={styles.subtaskBody}>
                    <div className={styles.subtaskName}>{subtask.name}</div>
                    <div className={styles.subtaskDesc}>
                      {subtask.description}
                    </div>
                    {subtask.outcome && (
                      <div className={styles.subtaskOutcome}>
                        ✓ {subtask.outcome}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {plan.outcome && (
              <div style={{ marginTop: 16, fontSize: 13 }}>
                <strong>{t("plan.outcome", "Outcome")}:</strong> {plan.outcome}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TaskListPanel;

import { TraceDockLauncher } from "./TraceDockPanel";
import { TracePage } from "./TracePage";
import { storedLocale, t } from "./locale";

const React = window.QwenPaw.host.React;

window.QwenPaw.registerRoutes?.("agent-trace", [
  {
    path: "/plugin/agent-trace",
    component: TracePage,
    label: t(storedLocale(), "routeLabel"),
    icon: "🧭",
    priority: 44,
  },
]);

// Dock the trace panel inside the chat page (header button, dsh-style).
// Optional chaining: hosts without the chat SDK keep the standalone page.
window.QwenPaw.chat?.rightHeader?.add?.(
  "agent-trace",
  React.createElement(TraceDockLauncher),
  { id: "agent-trace-dock" },
);

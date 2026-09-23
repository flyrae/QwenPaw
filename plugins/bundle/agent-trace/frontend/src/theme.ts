/** Host theme detection and the few accent colors that need a dark variant. */

import type * as ReactNS from "react";

const host = window.QwenPaw.host;
const React: typeof ReactNS = host.React;
const { useEffect, useState } = React;

export type TraceTheme = "light" | "dark";

const DARK_QUERY = "(prefers-color-scheme: dark)";

function prefersDark(): boolean {
  try {
    return window.matchMedia(DARK_QUERY).matches;
  } catch {
    return false;
  }
}

function usePrefersDark(): boolean {
  const [dark, setDark] = useState(prefersDark);
  useEffect(() => {
    let query: MediaQueryList;
    try {
      query = window.matchMedia(DARK_QUERY);
    } catch {
      return undefined;
    }
    const onChange = () => setDark(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return dark;
}

// Whether the host exposes useTheme never changes at runtime, so the
// branch below always calls the same hooks in the same order.
const hostUseTheme =
  typeof host.useTheme === "function" ? host.useTheme : undefined;

/** The Console theme, falling back to the OS preference on older hosts. */
export function useTraceTheme(): TraceTheme {
  if (hostUseTheme) return hostUseTheme() === "dark" ? "dark" : "light";
  return usePrefersDark() ? "dark" : "light";
}

export const ACCENT: Record<
  TraceTheme,
  { tokens: string; reasoning: string; skill: string }
> = {
  light: { tokens: "#1677ff", reasoning: "#722ed1", skill: "#2f54eb" },
  dark: { tokens: "#69b1ff", reasoning: "#b37feb", skill: "#85a5ff" },
};

export const JSON_PALETTE: Record<
  TraceTheme,
  { key: string; string: string; number: string; literal: string }
> = {
  light: {
    key: "#8250df",
    string: "#0a6e3d",
    number: "#0550ae",
    literal: "#cf222e",
  },
  dark: {
    key: "#d2a8ff",
    string: "#7ee787",
    number: "#79c0ff",
    literal: "#ff7b72",
  },
};

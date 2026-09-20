import type { CSSProperties } from "react";

/**
 * Ported verbatim from apps/example/attachments/shared.ts — the token system
 * the real message-ui attachment templates (recovery-checkin, spend-pulse,
 * gate-change, delivery-window) are built from.
 */
export const palette = {
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.68)",
  textSoft: "rgba(255,255,255,0.46)",
  textFaint: "rgba(255,255,255,0.34)",
  border: "rgba(255,255,255,0.08)",
  borderSoft: "rgba(255,255,255,0.06)",
  panel: "rgba(255,255,255,0.03)",
  panelSoft: "rgba(255,255,255,0.02)",
} as const;

/** Accent pairs lifted directly from the real templates that use them. */
export const accents = {
  teal: {
    chipText: "#7ef2d8",
    chipBg: "rgba(45, 212, 191, 0.12)",
    line: "#2dd4bf",
    area: "rgba(45, 212, 191, 0.1)",
  },
  orange: {
    chipText: "#fdba74",
    chipBg: "rgba(251, 146, 60, 0.12)",
    line: "#fb923c",
    area: "rgba(251, 146, 60, 0.12)",
  },
  green: {
    chipText: "#9df7b5",
    chipBg: "rgba(74, 222, 128, 0.12)",
    line: "#4ade80",
    area: "rgba(74, 222, 128, 0.12)",
  },
  blue: {
    chipText: "#a8d3ff",
    chipBg: "rgba(96, 165, 250, 0.12)",
    line: "#60a5fa",
    area: "rgba(96, 165, 250, 0.12)",
  },
} as const;

export function surfaceStyle(background: string): CSSProperties {
  return {
    width: "100%",
    padding: 28,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: palette.borderSoft,
    overflow: "hidden",
    position: "relative",
  };
}

export const eyebrowStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: 1,
  textTransform: "uppercase",
  color: palette.textSoft,
};

export const metricStyle: CSSProperties = {
  fontSize: 62,
  lineHeight: 0.98,
  fontWeight: 600,
  color: palette.text,
};

export const titleStyle: CSSProperties = {
  fontSize: 20,
  lineHeight: 1.2,
  color: palette.textSoft,
};

export const bodyStyle: CSSProperties = {
  fontSize: 16,
  lineHeight: 1.45,
  color: palette.textMuted,
};

export const metaStyle: CSSProperties = {
  fontSize: 13,
  lineHeight: 1.35,
  color: palette.textFaint,
};

export function moduleStyle(): CSSProperties {
  return {
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: palette.borderSoft,
    backgroundColor: palette.panelSoft,
    padding: 16,
    boxSizing: "border-box",
  };
}

export function chipStyle(textColor: string, backgroundColor: string): CSSProperties {
  return {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: palette.border,
    backgroundColor,
    color: textColor,
  };
}

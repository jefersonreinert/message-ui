export const dauSeries = [820, 902, 870, 940, 1010, 1180, 1240, 1190, 1320, 1410, 1380, 1520];
export const dauLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

// Colors lifted from the real templates: teal (recovery-checkin), blue (gate-change),
// green (delivery-window), orange (spend-pulse).
export const channelMix = [
  { name: "In-app chat", value: 46, color: "#2dd4bf" },
  { name: "iMessage", value: 27, color: "#60a5fa" },
  { name: "WhatsApp", value: 18, color: "#4ade80" },
  { name: "SMS", value: 9, color: "#fb923c" },
];

export const goals = {
  messages: { current: 78, goal: 100 },
  response: { current: 92, goal: 100 },
  uptime: { current: 63, goal: 100 },
};

export const recentActivity = [
  { name: "Order Confirmation", detail: "Sent 1,204 times today · 98% open rate", fallback: "OC" },
  { name: "Delivery Window", detail: "New template published to production", fallback: "DW" },
  { name: "Spend Pulse", detail: "Weekly digest sent to 8,412 subscribers", fallback: "SP" },
  {
    name: "Recovery Check-in",
    detail: "A/B test hit 95% confidence — variant B winning",
    fallback: "RC",
  },
] satisfies { name: string; detail: string; fallback: string }[];

export const mrrSeries = [42, 45, 48, 52, 58, 63, 68, 74, 79, 84];
export const mrrLabels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O"];

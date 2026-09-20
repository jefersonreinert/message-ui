export const kpis = [
  { label: "MRR", value: "$84.2k", hint: "+12.4% vs last month", accent: "#4ade80" },
  { label: "Active users", value: "12,948", hint: "+3.1% vs last week", accent: "#38bdf8" },
  { label: "Messages sent", value: "428,110", hint: "last 30 days", accent: "#a78bfa" },
  { label: "Uptime", value: "99.98%", hint: "90-day rolling", accent: "#f472b6" },
] satisfies { label: string; value: string; hint: string; accent: string }[];

export const dauSeries = [820, 902, 870, 940, 1010, 1180, 1240, 1190, 1320, 1410, 1380, 1520];
export const dauLabels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
] satisfies string[];

export const channelMix = [
  { name: "In-app chat", value: 46, color: "#38bdf8" },
  { name: "iMessage", value: 27, color: "#a78bfa" },
  { name: "WhatsApp", value: 18, color: "#4ade80" },
  { name: "SMS", value: 9, color: "#f472b6" },
];

export const goals = {
  messages: { current: 78, goal: 100 },
  response: { current: 92, goal: 100 },
  uptime: { current: 63, goal: 100 },
};

export const recentActivity = [
  {
    name: "Order Confirmation",
    detail: "Sent 1,204 times today · 98% open rate",
    fallback: "OC",
  },
  {
    name: "Delivery Window",
    detail: "New template published to production",
    fallback: "DW",
  },
  {
    name: "Spend Pulse",
    detail: "Weekly digest sent to 8,412 subscribers",
    fallback: "SP",
  },
  {
    name: "Recovery Check-in",
    detail: "A/B test hit 95% confidence — variant B winning",
    fallback: "RC",
  },
] satisfies { name: string; detail: string; fallback: string }[];

export const mrrSeries = [42, 45, 48, 52, 58, 63, 68, 74, 79, 84];
export const mrrLabels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O"];

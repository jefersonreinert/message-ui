"use client";

import { Cell, Pie, PieChart } from "recharts";
import { mono, palette } from "../../lib/theme";

export function MonoDonut({
  segments,
  size,
  strokeWidth = 14,
  centerLabel,
  centerSublabel,
}: {
  segments: { name: string; value: number }[];
  size: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerSublabel?: string;
}) {
  const outerRadius = size / 2;
  const innerRadius = outerRadius - strokeWidth;

  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <PieChart width={size} height={size}>
        <Pie
          data={segments}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={90}
          endAngle={-270}
          stroke="none"
          isAnimationActive={false}
        >
          {segments.map((seg, i) => (
            <Cell key={seg.name} fill={mono.shades[i % mono.shades.length]} />
          ))}
        </Pie>
      </PieChart>
      {(centerLabel || centerSublabel) && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {centerLabel && (
            <div
              style={{ fontSize: Math.max(11, size * 0.13), fontWeight: 700, color: palette.text }}
            >
              {centerLabel}
            </div>
          )}
          {centerSublabel && (
            <div style={{ fontSize: Math.max(9, size * 0.078), color: palette.textSoft }}>
              {centerSublabel}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

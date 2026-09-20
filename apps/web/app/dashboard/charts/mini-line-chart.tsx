"use client";

import { useId } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { mono } from "../../lib/theme";

export function MiniLineChart({
  series,
  labels,
  width,
  height,
  color = mono.line,
  area = mono.area,
  grid = mono.grid,
}: {
  series: number[];
  labels?: string[];
  width: number;
  height: number;
  color?: string;
  area?: string;
  grid?: string;
}) {
  const gradientId = useId();
  const data = series.map((v, i) => ({ x: labels?.[i] ?? String(i + 1), v }));

  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
      margin={{ top: 6, right: 6, bottom: labels ? 4 : 0, left: 6 }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={area} stopOpacity={1} />
          <stop offset="100%" stopColor={area} stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid stroke={grid} vertical={false} horizontal={true} />
      <Area
        type="monotone"
        dataKey="v"
        stroke={color}
        strokeWidth={2.5}
        fill={`url(#${gradientId})`}
        dot={{ r: 3.5, fill: color, strokeWidth: 0 }}
        activeDot={false}
        isAnimationActive={false}
      />
      {labels && (
        <XAxis
          dataKey="x"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "rgba(255,255,255,0.46)", fontSize: 11 }}
          height={16}
        />
      )}
    </AreaChart>
  );
}

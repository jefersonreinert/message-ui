"use client";

import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { mono } from "../../lib/theme";

export function GoalsRadial({
  metrics,
  size,
}: {
  metrics: { name: string; value: number }[];
  size: number;
}) {
  const data = metrics.map((m, i) => ({ ...m, fill: mono.shades[i % mono.shades.length] }));
  const barSize = Math.max(8, size * 0.09);

  return (
    <RadialBarChart
      width={size}
      height={size}
      data={data}
      innerRadius="32%"
      outerRadius="100%"
      startAngle={90}
      endAngle={-270}
      barSize={barSize}
    >
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} axisLine={false} />
      <RadialBar
        dataKey="value"
        background={{ fill: "rgba(255,255,255,0.08)" }}
        cornerRadius={barSize / 2}
        isAnimationActive={false}
      />
    </RadialBarChart>
  );
}

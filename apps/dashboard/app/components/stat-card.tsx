import { Column, Row, Text } from "@message-ui/components";

export function StatCard({
  label,
  value,
  hint,
  accent,
}: {
  label: string;
  value: string;
  hint: string;
  accent: string;
}) {
  return (
    <Column
      style={{
        flex: 1,
        backgroundColor: "#111113",
        padding: 18,
        gap: 8,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(255,255,255,0.08)",
        minWidth: 160,
      }}
    >
      <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 12, color: "#71717a", fontWeight: 600, letterSpacing: 0.4 }}>
          {label.toUpperCase()}
        </Text>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: 999,
            backgroundColor: accent,
          }}
        />
      </Row>
      <Text style={{ fontSize: 28, fontWeight: 700, color: "#fafafa" }}>{value}</Text>
      <Text style={{ fontSize: 12, color: "#52525b" }}>{hint}</Text>
    </Column>
  );
}

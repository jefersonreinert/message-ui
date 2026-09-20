import {
  Attachment,
  Column,
  Divider,
  DonutChart,
  Heading,
  LineChart,
  Row,
  Section,
  Text,
} from "@message-ui/components";
import { channelMix, mrrLabels, mrrSeries } from "../lib/data";

/**
 * Chat attachment cards, built from the same @message-ui/components primitives
 * used by @message-ui/render to export PNGs for iMessage/WhatsApp — here they're
 * rendered live in the browser instead of exported to a static image.
 */

export function RevenueCardAttachment() {
  return (
    <Attachment
      style={{
        backgroundColor: "#0f172a",
        padding: 18,
        width: 320,
        boxSizing: "border-box",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#1e293b",
        borderRadius: 16,
      }}
    >
      <Section style={{ gap: 10 }}>
        <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 11, color: "#64748b", fontWeight: 600, letterSpacing: 0.6 }}>
            REVENUE · OCT
          </Text>
          <Text style={{ fontSize: 12, color: "#4ade80", fontWeight: 600 }}>+8.6%</Text>
        </Row>
        <Heading level={2} style={{ color: "#f8fafc", fontSize: 24 }}>
          $84.2k MRR
        </Heading>
        <LineChart
          series={mrrSeries}
          width={284}
          height={90}
          color="#38bdf8"
          areaColor="rgba(56, 189, 248, 0.16)"
          gridColor="#1e293b"
          labels={mrrLabels}
        />
      </Section>
    </Attachment>
  );
}

export function ChannelMixAttachment() {
  const total = channelMix.reduce((s, x) => s + x.value, 0) || 1;
  return (
    <Attachment
      style={{
        backgroundColor: "#0f172a",
        padding: 18,
        width: 320,
        boxSizing: "border-box",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#1e293b",
        borderRadius: 16,
      }}
    >
      <Row style={{ gap: 16, alignItems: "center" }}>
        <DonutChart
          segments={channelMix}
          size={92}
          strokeWidth={12}
          trackColor="#1e293b"
          centerLabel={`${total}`}
          centerSublabel="channels"
        />
        <Column style={{ gap: 6, flex: 1 }}>
          <Text style={{ fontSize: 11, color: "#64748b", fontWeight: 600, letterSpacing: 0.6 }}>
            MESSAGES BY CHANNEL
          </Text>
          {channelMix.map((seg) => (
            <Row key={seg.name} style={{ gap: 6, alignItems: "center" }}>
              <div style={{ width: 7, height: 7, backgroundColor: seg.color, flexShrink: 0 }} />
              <Text style={{ fontSize: 12, color: "#cbd5e1" }}>
                {seg.name} · {seg.value}%
              </Text>
            </Row>
          ))}
        </Column>
      </Row>
    </Attachment>
  );
}

export function ActivitySummaryAttachment() {
  return (
    <Attachment
      style={{
        backgroundColor: "#0f172a",
        padding: 18,
        width: 320,
        boxSizing: "border-box",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#1e293b",
        borderRadius: 16,
      }}
    >
      <Section style={{ gap: 10 }}>
        <Text style={{ fontSize: 11, color: "#64748b", fontWeight: 600, letterSpacing: 0.6 }}>
          TODAY'S SUMMARY
        </Text>
        <Row style={{ gap: 10, width: "100%" }}>
          {[
            { label: "Sent", value: "12,948" },
            { label: "Delivered", value: "99.1%" },
            { label: "Opened", value: "68%" },
          ].map((s) => (
            <Column
              key={s.label}
              style={{
                flex: 1,
                backgroundColor: "#1e293b",
                padding: 10,
                gap: 4,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 10, color: "#64748b", fontWeight: 600 }}>{s.label}</Text>
              <Text style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9" }}>{s.value}</Text>
            </Column>
          ))}
        </Row>
        <Divider style={{ backgroundColor: "#1e293b" }} />
        <Text style={{ fontSize: 12, color: "#94a3b8" }}>
          Delivery window and recovery check-in templates are trending +14% week over week.
        </Text>
      </Section>
    </Attachment>
  );
}

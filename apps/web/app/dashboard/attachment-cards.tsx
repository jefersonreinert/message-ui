import { Attachment, Column, DonutChart, LineChart, Row, Text } from "@message-ui/components";
import {
  accents,
  bodyStyle,
  chipStyle,
  eyebrowStyle,
  metaStyle,
  metricStyle,
  moduleStyle,
  palette,
  titleStyle,
} from "../lib/theme";
import { channelMix, mrrLabels, mrrSeries } from "./data";

/**
 * Chat attachment cards, styled identically to the real message-ui templates
 * (apps/example/attachments/*.tsx) — same palette tokens, same eyebrow/chip/
 * metric/module structure, same accent colors per domain.
 */

export function RevenueCardAttachment() {
  const orange = accents.orange;
  return (
    <Attachment
      style={{
        backgroundColor: "#120d0a",
        padding: 18,
        width: 320,
        boxSizing: "border-box",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: palette.borderSoft,
      }}
    >
      <Row style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Text style={eyebrowStyle}>Revenue · Oct</Text>
        <div style={chipStyle(orange.chipText, orange.chipBg)}>
          <Text style={{ fontSize: 11, color: orange.chipText }}>+8.6%</Text>
        </div>
      </Row>
      <Text style={{ ...metricStyle, fontSize: 32, marginTop: 10 }}>$84.2k</Text>
      <Text style={{ ...titleStyle, fontSize: 13, marginTop: 2 }}>Monthly recurring revenue</Text>
      <div style={{ ...moduleStyle(), marginTop: 12 }}>
        <LineChart
          series={mrrSeries}
          width={252}
          height={80}
          color={orange.line}
          areaColor={orange.area}
          gridColor="rgba(255,255,255,0.08)"
          labels={mrrLabels}
        />
      </div>
    </Attachment>
  );
}

export function ChannelMixAttachment() {
  const total = channelMix.reduce((s, x) => s + x.value, 0) || 1;
  return (
    <Attachment
      style={{
        backgroundColor: "#0d0f14",
        padding: 18,
        width: 320,
        boxSizing: "border-box",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: palette.borderSoft,
      }}
    >
      <Text style={eyebrowStyle}>Distribution</Text>
      <Row style={{ gap: 14, alignItems: "center", width: "100%", marginTop: 12 }}>
        <DonutChart
          segments={channelMix}
          size={92}
          strokeWidth={12}
          trackColor="#27272a"
          centerLabel={`${total}`}
          centerSublabel="channels"
        />
        <Column style={{ gap: 6, flex: 1 }}>
          <Text style={{ ...titleStyle, fontSize: 14 }}>Messages by channel</Text>
          {channelMix.map((seg) => (
            <Row key={seg.name} style={{ gap: 6, alignItems: "center" }}>
              <div style={{ width: 7, height: 7, backgroundColor: seg.color, flexShrink: 0 }} />
              <Text style={metaStyle}>
                <span style={{ color: palette.text }}>{seg.name}</span> · {seg.value}%
              </Text>
            </Row>
          ))}
        </Column>
      </Row>
    </Attachment>
  );
}

export function ActivitySummaryAttachment() {
  const teal = accents.teal;
  return (
    <Attachment
      style={{
        backgroundColor: "#0a1010",
        padding: 18,
        width: 320,
        boxSizing: "border-box",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: palette.borderSoft,
      }}
    >
      <Row style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Text style={eyebrowStyle}>Today's summary</Text>
        <div style={chipStyle(teal.chipText, teal.chipBg)}>
          <Text style={{ fontSize: 11, color: teal.chipText }}>On track</Text>
        </div>
      </Row>
      <Row style={{ gap: 8, width: "100%", marginTop: 12 }}>
        {[
          { label: "Sent", value: "12,948" },
          { label: "Delivered", value: "99.1%" },
          { label: "Opened", value: "68%" },
        ].map((s) => (
          <Column key={s.label} style={{ ...moduleStyle(), flex: 1, gap: 4 }}>
            <Text style={metaStyle}>{s.label}</Text>
            <Text style={{ fontSize: 16, fontWeight: 600, color: palette.text }}>{s.value}</Text>
          </Column>
        ))}
      </Row>
      <Text style={{ ...bodyStyle, fontSize: 13, marginTop: 12 }}>
        Delivery window and recovery check-in templates are trending +14% week over week.
      </Text>
    </Attachment>
  );
}

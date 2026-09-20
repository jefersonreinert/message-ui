import {
  Attachment,
  Avatar,
  Column,
  List,
  ListItem,
  Row,
  Section,
  Text,
} from "@message-ui/components";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import {
  bodyStyle,
  chipStyle,
  eyebrowStyle,
  metaStyle,
  metricStyle,
  moduleStyle,
  mono,
  palette,
  surfaceStyle,
  titleStyle,
} from "../lib/theme";
import { GoalsRadial } from "./charts/goals-radial";
import { MiniLineChart } from "./charts/mini-line-chart";
import { MonoDonut } from "./charts/mono-donut";
import { channelMix, dauLabels, dauSeries, goals, recentActivity } from "./data";

export default function DashboardPage() {
  const totalShare = channelMix.reduce((s, x) => s + x.value, 0) || 1;

  return (
    <div className="flex min-h-full flex-col bg-[#050506] text-zinc-100">
      <SiteHeader />

      <main className="flex-1">
        <div
          className="mx-auto max-w-3xl px-5 py-10"
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div style={{ padding: "8px 4px 4px" }}>
            <Text style={eyebrowStyle}>Message UI</Text>
            <Text style={{ ...metricStyle, fontSize: 26, marginTop: 6 }}>Metrics dashboard</Text>
            <Text style={{ ...bodyStyle, fontSize: 14, marginTop: 2 }}>
              Same page, same header, same design tokens as the rest of this site — charts by
              Recharts.
            </Text>
          </div>

          {/* Hero card — same shape as recovery-checkin.tsx */}
          <Attachment style={{ backgroundColor: "#0a0a0b" }}>
            <Section style={surfaceStyle(palette.panelSoft)}>
              <Section style={{ gap: 18 }}>
                <Row
                  style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}
                >
                  <Text style={eyebrowStyle}>Message UI · overview</Text>
                  <div style={chipStyle(mono.chipText, mono.chipBg)}>
                    <Text style={{ fontSize: 12, color: mono.chipText }}>All systems normal</Text>
                  </div>
                </Row>

                <Section style={{ gap: 8 }}>
                  <Text style={metricStyle}>$84.2k</Text>
                  <Text style={titleStyle}>Monthly recurring revenue</Text>
                  <Text style={bodyStyle}>
                    Built entirely from
                    <span style={{ color: palette.text, marginLeft: 4, marginRight: 4 }}>
                      @message-ui/components
                    </span>
                    — the same primitives that render chat attachment cards.
                  </Text>
                </Section>
              </Section>

              <Section style={{ gap: 14, marginTop: 18 }}>
                <Row style={{ gap: 12, width: "100%" }}>
                  {[
                    { label: "Active users", value: "12,948" },
                    { label: "Messages sent", value: "428,110" },
                    { label: "Uptime", value: "99.98%" },
                  ].map((item) => (
                    <Section key={item.label} style={{ ...moduleStyle(), flex: 1, gap: 6 }}>
                      <Text style={metaStyle}>{item.label}</Text>
                      <Text style={{ fontSize: 22, fontWeight: 600, color: palette.text }}>
                        {item.value}
                      </Text>
                    </Section>
                  ))}
                </Row>

                <div style={moduleStyle()}>
                  <Row style={{ justifyContent: "space-between", width: "100%", marginBottom: 10 }}>
                    <Text style={metaStyle}>Daily active users · last 12 days</Text>
                    <Text style={{ fontSize: 12, color: mono.chipText, fontWeight: 600 }}>
                      +85%
                    </Text>
                  </Row>
                  <MiniLineChart series={dauSeries} labels={dauLabels} width={632} height={130} />
                </div>

                <Text style={bodyStyle}>
                  Growth held steady this cycle — active users are up 85% over the trailing 12 days.
                </Text>
              </Section>
            </Section>
          </Attachment>

          {/* Channel mix — same shape as daily-summary.tsx's donut section */}
          <Attachment style={{ backgroundColor: "#0a0a0b" }}>
            <Section style={surfaceStyle(palette.panelSoft)}>
              <Text style={eyebrowStyle}>Distribution</Text>
              <Row style={{ gap: 20, alignItems: "center", width: "100%", marginTop: 14 }}>
                <Column style={{ flex: 1, gap: 10 }}>
                  <Text style={{ ...titleStyle, fontSize: 18 }}>Messages by channel</Text>
                  <Text style={bodyStyle}>Share of messages delivered this month, by surface.</Text>
                  <Section style={{ gap: 6 }}>
                    {channelMix.map((seg, i) => (
                      <Row key={seg.name} style={{ gap: 8, alignItems: "center" }}>
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            backgroundColor: mono.shades[i % mono.shades.length],
                            flexShrink: 0,
                          }}
                        />
                        <Text style={metaStyle}>
                          <span style={{ color: palette.text }}>{seg.name}</span> · {seg.value}%
                        </Text>
                      </Row>
                    ))}
                  </Section>
                </Column>
                <MonoDonut
                  segments={channelMix}
                  size={124}
                  strokeWidth={14}
                  centerLabel={`${totalShare}`}
                  centerSublabel="channels"
                />
              </Row>
            </Section>
          </Attachment>

          {/* Goals — same shape as watch-activity.tsx */}
          <Attachment style={{ backgroundColor: "#000000" }}>
            <Section style={{ ...surfaceStyle(palette.panelSoft), alignItems: "center" }}>
              <Text style={eyebrowStyle}>Goals · today</Text>
              <div style={{ marginTop: 14 }}>
                <GoalsRadial
                  metrics={[
                    { name: "Messages sent", value: goals.messages.current },
                    { name: "Response rate", value: goals.response.current },
                    { name: "Uptime", value: goals.uptime.current },
                  ]}
                  size={180}
                />
              </div>
              <Row style={{ width: "100%", justifyContent: "space-between", marginTop: 16 }}>
                {[
                  { label: "Messages sent", value: goals.messages.current },
                  { label: "Response rate", value: goals.response.current },
                  { label: "Uptime", value: goals.uptime.current },
                ].map((m, i) => (
                  <Column key={m.label} style={{ flex: 1, alignItems: "center", gap: 6 }}>
                    <Row style={{ gap: 6, alignItems: "center" }}>
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          backgroundColor: mono.shades[i % mono.shades.length],
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: palette.textSoft,
                          letterSpacing: 0.4,
                          textTransform: "uppercase",
                        }}
                      >
                        {m.label}
                      </Text>
                    </Row>
                    <Text style={{ fontSize: 22, fontWeight: 600, color: palette.text }}>
                      {m.value}%
                    </Text>
                  </Column>
                ))}
              </Row>
            </Section>
          </Attachment>

          {/* Recent activity — same shape as team-update.tsx */}
          <Attachment style={{ backgroundColor: "#18181b" }}>
            <Section style={surfaceStyle(palette.panelSoft)}>
              <Text style={eyebrowStyle}>Template activity</Text>
              <List>
                {recentActivity.map((a) => (
                  <ListItem key={a.name}>
                    <Row style={{ gap: 10, alignItems: "center", width: "100%", marginTop: 14 }}>
                      <Avatar fallback={a.fallback} size={32} />
                      <Column style={{ gap: 2 }}>
                        <Text style={{ fontSize: 14, color: palette.text, fontWeight: 600 }}>
                          {a.name}
                        </Text>
                        <Text style={metaStyle}>{a.detail}</Text>
                      </Column>
                    </Row>
                  </ListItem>
                ))}
              </List>
            </Section>
          </Attachment>

          <Row style={{ justifyContent: "center", marginTop: 8 }}>
            <Link
              href="/dashboard/live"
              style={{
                ...chipStyle(palette.text, "rgba(255,255,255,0.05)"),
                textDecoration: "none",
                fontSize: 14,
                paddingLeft: 18,
                paddingRight: 18,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Test a live conversation →
            </Link>
          </Row>
        </div>
      </main>
    </div>
  );
}

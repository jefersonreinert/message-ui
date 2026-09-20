import {
  ActivityRings,
  Avatar,
  Column,
  Divider,
  DonutChart,
  Heading,
  LineChart,
  List,
  ListItem,
  Row,
  Section,
  Text,
} from "@message-ui/components";
import { StatCard } from "./components/stat-card";
import { channelMix, dauLabels, dauSeries, goals, kpis, recentActivity } from "./lib/data";

export default function DashboardPage() {
  const totalShare = channelMix.reduce((s, x) => s + x.value, 0) || 1;

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 h-[480px] bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <Section style={{ gap: 4, marginBottom: 24 }}>
          <Text style={{ fontSize: 12, color: "#71717a", fontWeight: 600, letterSpacing: 1 }}>
            OVERVIEW
          </Text>
          <Heading level={1} style={{ color: "#fafafa", fontSize: 30 }}>
            Metrics dashboard
          </Heading>
          <Text style={{ fontSize: 14, color: "#a1a1aa" }}>
            Built entirely from
            <span style={{ color: "#e4e4e7", marginLeft: 4, marginRight: 4 }}>
              @message-ui/components
            </span>
            — the same primitives used to render chat attachment cards.
          </Text>
        </Section>

        <Row style={{ gap: 12, width: "100%", flexWrap: "wrap", marginBottom: 16 }}>
          {kpis.map((k) => (
            <StatCard key={k.label} {...k} />
          ))}
        </Row>

        <Row style={{ gap: 16, width: "100%", alignItems: "stretch", flexWrap: "wrap" }}>
          <Column
            style={{
              flex: 2,
              minWidth: 340,
              backgroundColor: "#111113",
              padding: 20,
              gap: 14,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0" }}>
                Daily active users · last 12 days
              </Text>
              <Text style={{ fontSize: 12, color: "#4ade80", fontWeight: 600 }}>+85% ▲</Text>
            </Row>
            <LineChart
              series={dauSeries}
              width={680}
              height={190}
              color="#38bdf8"
              areaColor="rgba(56, 189, 248, 0.14)"
              gridColor="#27272a"
              labels={dauLabels}
            />
          </Column>

          <Column
            style={{
              flex: 1,
              minWidth: 260,
              backgroundColor: "#111113",
              padding: 20,
              gap: 14,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(255,255,255,0.08)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", width: "100%" }}>
              Messages by channel
            </Text>
            <DonutChart
              segments={channelMix}
              size={140}
              strokeWidth={16}
              trackColor="#1e1e21"
              centerLabel={`${totalShare}`}
              centerSublabel="channels · %"
            />
            <Section style={{ gap: 6, width: "100%" }}>
              {channelMix.map((seg) => (
                <Row key={seg.name} style={{ gap: 8, alignItems: "center" }}>
                  <div style={{ width: 8, height: 8, backgroundColor: seg.color, flexShrink: 0 }} />
                  <Text style={{ fontSize: 12, color: "#a1a1aa" }}>
                    {seg.name} · {seg.value}%
                  </Text>
                </Row>
              ))}
            </Section>
          </Column>
        </Row>

        <Row
          style={{ gap: 16, width: "100%", alignItems: "stretch", marginTop: 16, flexWrap: "wrap" }}
        >
          <Column
            style={{
              flex: 1,
              minWidth: 260,
              backgroundColor: "#111113",
              padding: 20,
              gap: 16,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(255,255,255,0.08)",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", width: "100%" }}>
              Goals · today
            </Text>
            <ActivityRings
              move={goals.messages}
              exercise={goals.response}
              stand={goals.uptime}
              size={160}
            />
            <Section style={{ gap: 6, width: "100%" }}>
              <Row style={{ gap: 8, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, backgroundColor: "#fa114f" }} />
                <Text style={{ fontSize: 12, color: "#a1a1aa" }}>
                  Messages sent · {goals.messages.current}%
                </Text>
              </Row>
              <Row style={{ gap: 8, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, backgroundColor: "#92e82a" }} />
                <Text style={{ fontSize: 12, color: "#a1a1aa" }}>
                  Response rate · {goals.response.current}%
                </Text>
              </Row>
              <Row style={{ gap: 8, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, backgroundColor: "#2ee7ff" }} />
                <Text style={{ fontSize: 12, color: "#a1a1aa" }}>
                  Uptime · {goals.uptime.current}%
                </Text>
              </Row>
            </Section>
          </Column>

          <Column
            style={{
              flex: 2,
              minWidth: 340,
              backgroundColor: "#111113",
              padding: 20,
              gap: 12,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0" }}>
              Recent template activity
            </Text>
            <Divider style={{ backgroundColor: "#27272a" }} />
            <List>
              {recentActivity.map((a) => (
                <ListItem key={a.name}>
                  <Row style={{ gap: 10, alignItems: "center", width: "100%" }}>
                    <Avatar fallback={a.fallback} size={32} />
                    <Column style={{ gap: 2 }}>
                      <Text style={{ fontSize: 13, color: "#f4f4f5", fontWeight: 600 }}>
                        {a.name}
                      </Text>
                      <Text style={{ fontSize: 12, color: "#71717a" }}>{a.detail}</Text>
                    </Column>
                  </Row>
                </ListItem>
              ))}
            </List>
          </Column>
        </Row>

        <Row style={{ marginTop: 24, justifyContent: "center" }}>
          <a
            href="/messages"
            className="rounded-md border border-white/12 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
          >
            Try the message attachments →
          </a>
        </Row>
      </div>
    </div>
  );
}

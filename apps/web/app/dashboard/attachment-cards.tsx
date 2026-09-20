import { Attachment, LineChart, Row, Section, Text } from "@message-ui/components";
import {
  bodyStyle,
  chipStyle,
  eyebrowStyle,
  metaStyle,
  metricStyle,
  moduleStyle,
  palette,
  stageStyle,
  surfaceStyle,
  titleStyle,
} from "../lib/theme";

/**
 * Live-chat attachment cards ported directly from the real templates in
 * apps/example/attachments/*.tsx — same shared.ts tokens, same structure,
 * same colors and charts, just scaled to fit a ~300px chat bubble instead of
 * an 800px exported PNG.
 */

export function RecoveryCheckinAttachment() {
  const score = 82;
  const readinessSeries = [64, 68, 71, 73, 76, 79, 82];
  const readinessLabels = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <Attachment style={stageStyle("#0a1010")}>
      <Section style={surfaceStyle("rgba(255,255,255,0.02)")}>
        <Section style={{ gap: 12 }}>
          <Row style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Text style={eyebrowStyle}>Recovery check-in</Text>
            <div style={chipStyle("#7ef2d8", "rgba(45, 212, 191, 0.12)")}>
              <Text style={{ fontSize: 11, color: "#7ef2d8" }}>Ready to train</Text>
            </div>
          </Row>

          <Section style={{ gap: 4 }}>
            <Text style={{ ...metricStyle, fontSize: 34 }}>{score}</Text>
            <Text style={{ ...titleStyle, fontSize: 14 }}>Readiness score</Text>
            <Text style={{ ...bodyStyle, fontSize: 13 }}>
              A quick signal before you send today's coaching message.
            </Text>
          </Section>
        </Section>

        <Section style={{ gap: 10, marginTop: 12 }}>
          <Row style={{ gap: 8, width: "100%" }}>
            {[
              { label: "Sleep", value: "7h 48m" },
              { label: "Resting HR", value: "-4 bpm" },
              { label: "Energy", value: "High" },
            ].map((item) => (
              <Section key={item.label} style={{ ...moduleStyle(), flex: 1, gap: 4, padding: 10 }}>
                <Text style={metaStyle}>{item.label}</Text>
                <Text style={{ fontSize: 15, fontWeight: 600, color: palette.text }}>
                  {item.value}
                </Text>
              </Section>
            ))}
          </Row>

          <div style={{ ...moduleStyle(), padding: 12 }}>
            <Text style={{ ...metaStyle, marginBottom: 8 }}>Last 7 days</Text>
            <LineChart
              series={readinessSeries}
              width={260}
              height={72}
              color="#2dd4bf"
              areaColor="rgba(45, 212, 191, 0.1)"
              gridColor="rgba(255,255,255,0.08)"
              labels={readinessLabels}
            />
          </div>

          <Text style={{ ...bodyStyle, fontSize: 13 }}>
            Good sleep and lower resting heart rate suggest your next workout can push a bit harder.
          </Text>
        </Section>
      </Section>
    </Attachment>
  );
}

export function SpendPulseAttachment() {
  const spendSeries = [38, 62, 54, 88, 47, 72, 67];
  const spendLabels = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <Attachment style={stageStyle("#120d0a")}>
      <Section style={surfaceStyle("rgba(255,255,255,0.02)")}>
        <Section style={{ gap: 12 }}>
          <Row style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Text style={eyebrowStyle}>Weekly spend pulse</Text>
            <div style={chipStyle("#fdba74", "rgba(251, 146, 60, 0.12)")}>
              <Text style={{ fontSize: 11, color: "#fdba74" }}>Budget on track</Text>
            </div>
          </Row>

          <Section style={{ gap: 4 }}>
            <Text style={{ ...metricStyle, fontSize: 34 }}>$428</Text>
            <Text style={{ ...titleStyle, fontSize: 14 }}>Spent this week</Text>
            <Text style={{ ...bodyStyle, fontSize: 13 }}>
              A compact budget update for your finance assistant.
            </Text>
          </Section>
        </Section>

        <Section style={{ gap: 10, marginTop: 12 }}>
          <Row style={{ gap: 8, width: "100%" }}>
            {[
              { label: "Left to budget", value: "$92" },
              { label: "Top category", value: "Dining" },
              { label: "Transactions", value: "23" },
            ].map((item) => (
              <Section key={item.label} style={{ ...moduleStyle(), flex: 1, gap: 4, padding: 10 }}>
                <Text style={metaStyle}>{item.label}</Text>
                <Text style={{ fontSize: 14, fontWeight: 600, color: palette.text }}>
                  {item.value}
                </Text>
              </Section>
            ))}
          </Row>

          <div style={{ ...moduleStyle(), padding: 12 }}>
            <Text style={{ ...metaStyle, marginBottom: 8 }}>Daily spend trend</Text>
            <LineChart
              series={spendSeries}
              width={260}
              height={72}
              color="#fb923c"
              areaColor="rgba(251, 146, 60, 0.12)"
              gridColor="rgba(255,255,255,0.08)"
              labels={spendLabels}
            />
          </div>

          <Text style={{ ...bodyStyle, fontSize: 13 }}>
            Spending is trending below your weekly cap, with dining still the biggest category.
          </Text>
        </Section>
      </Section>
    </Attachment>
  );
}

export function GateChangeAttachment() {
  return (
    <Attachment style={stageStyle("#0d0f14")}>
      <Section style={surfaceStyle("rgba(255,255,255,0.02)")}>
        <Section style={{ gap: 12 }}>
          <Row style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Text style={eyebrowStyle}>Travel update</Text>
            <div style={chipStyle("#a8d3ff", "rgba(96, 165, 250, 0.12)")}>
              <Text style={{ fontSize: 11, color: "#a8d3ff" }}>Gate changed</Text>
            </div>
          </Row>

          <Row style={{ justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
            <Section style={{ gap: 4 }}>
              <Text style={{ ...metricStyle, fontSize: 34 }}>C14</Text>
              <Text style={{ ...titleStyle, fontSize: 14 }}>Board from gate C14</Text>
              <Text style={{ ...bodyStyle, fontSize: 12 }}>SK218 · ARN -&gt; CDG</Text>
            </Section>

            <Section style={{ ...moduleStyle(), width: 92, gap: 4, padding: 10 }}>
              <Text style={metaStyle}>Seat</Text>
              <Text style={{ fontSize: 15, fontWeight: 600, color: palette.text }}>14A</Text>
              <Text style={{ ...metaStyle, fontSize: 10 }}>Boards in 19 min</Text>
            </Section>
          </Row>
        </Section>

        <Section style={{ gap: 8, marginTop: 12 }}>
          <Row style={{ gap: 8, width: "100%" }}>
            <Section style={{ ...moduleStyle(), flex: 1, gap: 4, padding: 10 }}>
              <Text style={metaStyle}>Departs</Text>
              <Text style={{ fontSize: 15, fontWeight: 600, color: palette.text }}>19:05</Text>
            </Section>
            <Section style={{ ...moduleStyle(), flex: 1, gap: 4, padding: 10 }}>
              <Text style={metaStyle}>Previous gate</Text>
              <Text style={{ fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>
                B07
              </Text>
            </Section>
          </Row>

          <div style={{ ...moduleStyle(), padding: 10 }}>
            <Text style={metaStyle}>Terminal note</Text>
            <Text style={{ ...bodyStyle, fontSize: 12, marginTop: 6 }}>
              Security is clear in Terminal C. Walk straight from the lounge and boarding opens at
              18:40.
            </Text>
          </div>
        </Section>
      </Section>
    </Attachment>
  );
}

export function DeliveryWindowAttachment() {
  const stages = ["Packed", "Picked up", "Nearby", "Delivered"];
  const activeStage = 2;

  return (
    <Attachment style={stageStyle("#0b120d")}>
      <Section style={surfaceStyle("rgba(255,255,255,0.02)")}>
        <Section style={{ gap: 12 }}>
          <Row style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Text style={eyebrowStyle}>Delivery window</Text>
            <div style={chipStyle("#9df7b5", "rgba(74, 222, 128, 0.12)")}>
              <Text style={{ fontSize: 11, color: "#9df7b5" }}>On route</Text>
            </div>
          </Row>

          <Section style={{ gap: 4 }}>
            <Text style={{ ...metricStyle, fontSize: 34 }}>12 min</Text>
            <Text style={{ ...titleStyle, fontSize: 14 }}>ETA to your door</Text>
            <Text style={{ ...bodyStyle, fontSize: 13 }}>Nina is carrying your lunch order.</Text>
          </Section>

          <Row style={{ gap: 8, width: "100%" }}>
            <Section style={{ ...moduleStyle(), flex: 1, gap: 4, padding: 10 }}>
              <Text style={metaStyle}>Courier</Text>
              <Text style={{ fontSize: 14, fontWeight: 600, color: palette.text }}>Nina</Text>
            </Section>
            <Section style={{ ...moduleStyle(), flex: 1, gap: 4, padding: 10 }}>
              <Text style={metaStyle}>Arrival window</Text>
              <Text style={{ fontSize: 14, fontWeight: 600, color: palette.text }}>
                12:40-12:55
              </Text>
            </Section>
          </Row>
        </Section>

        <Section style={{ gap: 8, marginTop: 12 }}>
          <div style={{ ...moduleStyle(), padding: 10 }}>
            <Row style={{ justifyContent: "space-between", width: "100%" }}>
              {stages.map((stage, index) => {
                const active = index <= activeStage;
                return (
                  <Section key={stage} style={{ alignItems: "center", gap: 6, flex: 1 }}>
                    <div
                      style={{
                        width: "100%",
                        height: 8,
                        backgroundColor: active ? "#4ade80" : "rgba(255,255,255,0.08)",
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 9,
                        color: active ? palette.text : palette.textFaint,
                        textAlign: "center",
                      }}
                    >
                      {stage}
                    </Text>
                  </Section>
                );
              })}
            </Row>
          </div>

          <Text style={{ ...bodyStyle, fontSize: 12 }}>
            Courier is two blocks away and your drop-off photo will appear in this thread.
          </Text>
        </Section>
      </Section>
    </Attachment>
  );
}

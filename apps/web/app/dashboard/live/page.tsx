import { Section, Text } from "@message-ui/components";
import { SiteHeader } from "../../components/site-header";
import { bodyStyle, eyebrowStyle, metricStyle, palette } from "../../lib/theme";
import { LiveConversation } from "./conversation";

export default function LiveConversationPage() {
  return (
    <div className="flex min-h-full flex-col bg-[#050506] text-zinc-100">
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-5 py-10">
          <Section style={{ gap: 8, marginBottom: 20 }}>
            <Text style={eyebrowStyle}>Test it</Text>
            <Text style={{ ...metricStyle, fontSize: 30, color: palette.text }}>
              Live conversation
            </Text>
            <Text style={bodyStyle}>
              A scripted exchange plays automatically, with typing indicators and the exact
              recovery-checkin, spend-pulse, gate-change, and delivery-window cards from
              apps/example/attachments. Send your own message any time — mention "recovery",
              "spend", "gate", or "delivery" to trigger one.
            </Text>
          </Section>

          <LiveConversation />
        </div>
      </main>
    </div>
  );
}

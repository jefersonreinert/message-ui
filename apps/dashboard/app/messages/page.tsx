import { Section, Text } from "@message-ui/components";
import { bodyStyle, eyebrowStyle, metricStyle, palette } from "../lib/theme";
import { MessageThread } from "./message-thread";

export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-10">
      <Section style={{ gap: 8, marginBottom: 20 }}>
        <Text style={eyebrowStyle}>Try it</Text>
        <Text style={{ ...metricStyle, fontSize: 32, color: palette.text }}>
          Message attachments, live
        </Text>
        <Text style={bodyStyle}>
          Send the same attachment cards @message-ui/render exports to iMessage and WhatsApp —
          rendered here as live React instead of a PNG.
        </Text>
      </Section>

      <MessageThread />
    </div>
  );
}

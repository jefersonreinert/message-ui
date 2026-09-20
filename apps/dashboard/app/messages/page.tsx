import { Heading, Section, Text } from "@message-ui/components";
import { MessageThread } from "./message-thread";

export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <Section style={{ gap: 4, marginBottom: 20 }}>
        <Text style={{ fontSize: 12, color: "#71717a", fontWeight: 600, letterSpacing: 1 }}>
          TRY IT
        </Text>
        <Heading level={1} style={{ color: "#fafafa", fontSize: 26 }}>
          Message attachments, live
        </Heading>
        <Text style={{ fontSize: 14, color: "#a1a1aa" }}>
          Send the same attachment cards @message-ui/render exports to iMessage and WhatsApp —
          rendered here as live React instead of a PNG.
        </Text>
      </Section>

      <MessageThread />
    </div>
  );
}

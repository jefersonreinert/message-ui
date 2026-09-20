"use client";

import { Avatar } from "@message-ui/components";
import { useId, useState } from "react";
import {
  ActivitySummaryAttachment,
  ChannelMixAttachment,
  RevenueCardAttachment,
} from "../components/attachment-cards";

type Sender = "them" | "me";

type ThreadMessage =
  | { id: string; sender: Sender; kind: "text"; text: string }
  | {
      id: string;
      sender: Sender;
      kind: "attachment";
      attachment: "revenue" | "channels" | "activity";
    };

const INITIAL_MESSAGES: ThreadMessage[] = [
  {
    id: "m1",
    sender: "them",
    kind: "text",
    text: "Hey — can you send the growth numbers for the standup?",
  },
  { id: "m2", sender: "me", kind: "text", text: "On it, pulling the latest snapshot now." },
];

const ATTACHMENT_OPTIONS = [
  { key: "revenue" as const, label: "Revenue card", render: RevenueCardAttachment },
  { key: "channels" as const, label: "Channel mix", render: ChannelMixAttachment },
  { key: "activity" as const, label: "Activity summary", render: ActivitySummaryAttachment },
];

export function MessageThread() {
  const [messages, setMessages] = useState<ThreadMessage[]>(INITIAL_MESSAGES);
  const [draft, setDraft] = useState("");
  const idBase = useId();
  let counter = 0;
  const nextId = () => `${idBase}-${counter++}`;

  function sendText() {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: nextId(), sender: "me", kind: "text", text }]);
    setDraft("");
  }

  function sendAttachment(attachment: "revenue" | "channels" | "activity") {
    setMessages((prev) => [
      ...prev,
      { id: nextId(), sender: "me", kind: "attachment", attachment },
    ]);
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          sender: "them",
          kind: "text",
          text: "Nice, this is exactly what I needed 🙌",
        },
      ]);
    }, 700);
  }

  return (
    <div className="flex h-[640px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0b] panel-shadow">
      <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3">
        <Avatar fallback="Ops Team" size={36} />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">Ops Team</span>
          <span className="text-xs text-emerald-400">● Active now</span>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>

      <div className="border-t border-white/8 p-3">
        <div className="mb-2 flex flex-wrap gap-2">
          {ATTACHMENT_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => sendAttachment(opt.key)}
              className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-white/25 hover:bg-white/10"
            >
              + {opt.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendText();
            }}
            placeholder="Message"
            className="flex-1 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-white/25 focus:outline-none"
          />
          <button
            type="button"
            onClick={sendText}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: ThreadMessage }) {
  const mine = message.sender === "me";

  if (message.kind === "attachment") {
    const option = ATTACHMENT_OPTIONS.find((o) => o.key === message.attachment);
    if (!option) return null;
    const Card = option.render;
    return (
      <div className={`flex ${mine ? "justify-end" : "justify-start"} bubble-in`}>
        <div className="max-w-[340px] overflow-hidden rounded-2xl">
          <Card />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"} bubble-in`}>
      <div
        className={`max-w-[75%] rounded-2xl px-3.5 py-2 text-[14px] leading-snug ${
          mine ? "bg-[#2563eb] text-white" : "bg-[#26262a] text-zinc-100"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}

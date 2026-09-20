"use client";

import { Avatar } from "@message-ui/components";
import { type ReactElement, useEffect, useId, useRef, useState } from "react";
import {
  ActivitySummaryAttachment,
  ChannelMixAttachment,
  RevenueCardAttachment,
} from "../attachment-cards";

type Sender = "them" | "me";
type AttachmentKind = "revenue" | "channels" | "activity";

type ThreadMessage =
  | { id: string; sender: Sender; kind: "text"; text: string }
  | { id: string; sender: Sender; kind: "attachment"; attachment: AttachmentKind };

const ATTACHMENTS: Record<AttachmentKind, () => ReactElement> = {
  revenue: RevenueCardAttachment,
  channels: ChannelMixAttachment,
  activity: ActivitySummaryAttachment,
};

const ATTACHMENT_OPTIONS: { key: AttachmentKind; label: string }[] = [
  { key: "revenue", label: "Revenue card" },
  { key: "channels", label: "Channel mix" },
  { key: "activity", label: "Activity summary" },
];

/** Scripted beats the conversation auto-plays on load — each a typing pause, then a message. */
const SCRIPT: { sender: Sender; typingMs: number; message: ThreadMessage }[] = [
  {
    sender: "them",
    typingMs: 700,
    message: {
      id: "s1",
      sender: "them",
      kind: "text",
      text: "Hey — can you check today's numbers before standup?",
    },
  },
  {
    sender: "me",
    typingMs: 900,
    message: { id: "s2", sender: "me", kind: "text", text: "On it, pulling the dashboard now." },
  },
  {
    sender: "me",
    typingMs: 1100,
    message: { id: "s3", sender: "me", kind: "attachment", attachment: "revenue" },
  },
  {
    sender: "them",
    typingMs: 800,
    message: {
      id: "s4",
      sender: "them",
      kind: "text",
      text: "Nice, we're ahead of pace 🎉 What's the channel split looking like?",
    },
  },
  {
    sender: "me",
    typingMs: 1100,
    message: { id: "s5", sender: "me", kind: "attachment", attachment: "channels" },
  },
  {
    sender: "them",
    typingMs: 700,
    message: {
      id: "s6",
      sender: "them",
      kind: "text",
      text: "WhatsApp is really picking up this month.",
    },
  },
  {
    sender: "me",
    typingMs: 1100,
    message: { id: "s7", sender: "me", kind: "attachment", attachment: "activity" },
  },
  {
    sender: "them",
    typingMs: 700,
    message: {
      id: "s8",
      sender: "them",
      kind: "text",
      text: "Perfect — sharing this in standup. Thanks!",
    },
  },
];

const AUTO_REPLIES = [
  "Got it, thanks for the update.",
  "Makes sense — keep me posted.",
  "That tracks with what I'm seeing too.",
  "Good to know, thanks!",
];

function keywordReply(text: string): AttachmentKind | null {
  const t = text.toLowerCase();
  if (t.includes("revenue") || t.includes("mrr") || t.includes("money")) return "revenue";
  if (t.includes("channel") || t.includes("distribution")) return "channels";
  if (t.includes("activity") || t.includes("summary") || t.includes("goal")) return "activity";
  return null;
}

export function LiveConversation() {
  const [messages, setMessages] = useState<ThreadMessage[]>([]);
  const [typing, setTyping] = useState<Sender | null>(null);
  const [playing, setPlaying] = useState(true);
  const [draft, setDraft] = useState("");
  const idBase = useId();
  const counter = useRef(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const nextId = () => `${idBase}-${counter.current++}`;

  useEffect(() => {
    if (!playing) return;
    let cancelled = false;
    const timeouts: number[] = [];

    async function run() {
      for (const beat of SCRIPT) {
        if (cancelled) return;
        setTyping(beat.sender);
        await new Promise((r) => timeouts.push(window.setTimeout(r, beat.typingMs)));
        if (cancelled) return;
        setTyping(null);
        setMessages((prev) => [...prev, beat.message]);
        await new Promise((r) => timeouts.push(window.setTimeout(r, 260)));
      }
      if (!cancelled) setPlaying(false);
    }
    run();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [playing]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: messages/typing only trigger the scroll, not read in the body
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function replay() {
    setMessages([]);
    setTyping(null);
    setPlaying(true);
  }

  function pushMine(
    message: { kind: "text"; text: string } | { kind: "attachment"; attachment: AttachmentKind },
  ) {
    const mine: ThreadMessage = { ...message, id: nextId(), sender: "me" };
    setMessages((prev) => [...prev, mine]);

    const attachmentKind = message.kind === "text" ? keywordReply(message.text) : null;
    window.setTimeout(() => {
      setTyping("them");
      window.setTimeout(() => {
        setTyping(null);
        if (attachmentKind) {
          setMessages((prev) => [
            ...prev,
            { id: nextId(), sender: "them", kind: "attachment", attachment: attachmentKind },
          ]);
        } else {
          const reply = AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)];
          setMessages((prev) => [
            ...prev,
            { id: nextId(), sender: "them", kind: "text", text: reply },
          ]);
        }
      }, 900);
    }, 350);
  }

  function sendText() {
    const text = draft.trim();
    if (!text) return;
    pushMine({ kind: "text", text });
    setDraft("");
  }

  function sendAttachment(attachment: AttachmentKind) {
    pushMine({ kind: "attachment", attachment });
  }

  return (
    <div className="flex h-[640px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0b] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_48px_-12px_rgba(0,0,0,0.55)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar fallback="Ops Team" size={36} />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Ops Team</span>
            <span className="text-xs text-emerald-400">● Live</span>
          </div>
        </div>
        {!playing && (
          <button
            type="button"
            onClick={replay}
            className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-white/25 hover:bg-white/10"
          >
            ↺ Replay
          </button>
        )}
      </div>

      <div ref={bodyRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
        {typing && <TypingBubble sender={typing} />}
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
            placeholder="Message — try mentioning “revenue” or “channels”"
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
    const Card = ATTACHMENTS[message.attachment];
    return (
      <div
        className={`flex animate-[bubbleIn_.2s_ease-out] ${mine ? "justify-end" : "justify-start"}`}
      >
        <div className="max-w-[300px] overflow-hidden">
          <Card />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex animate-[bubbleIn_.2s_ease-out] ${mine ? "justify-end" : "justify-start"}`}
    >
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

function TypingBubble({ sender }: { sender: Sender }) {
  const mine = sender === "me";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex items-center gap-1 rounded-2xl px-3.5 py-3 ${
          mine ? "bg-[#2563eb]" : "bg-[#26262a]"
        }`}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type Msg = { id: string; who: "user" | "bot" | "typing"; text: string };

const SUGGESTIONS = [
  "What does ArQonnect do?",
  "How much does it cost?",
  "Can it answer phone calls?",
  "How fast can we go live?",
];

const WELCOME =
  "Hi — I'm Ava. I can answer questions about ArQonnect's chat & voice agents, pricing, CRM, and how we'd fit your business. What should we cover?";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function BotAvatar({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-7 w-7 text-[10px]" : "h-10 w-10 text-sm";
  return (
    <motion.span
      className={`relative flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 font-bold text-white shadow-[0_0_24px_rgba(59,130,246,0.45)] ${dim}`}
      animate={{
        y: [0, -4, 0, -2, 0],
        rotate: [0, -5, 4, -2, 0],
        boxShadow: [
          "0 0 16px rgba(59,130,246,0.35)",
          "0 0 28px rgba(56,189,248,0.55)",
          "0 0 16px rgba(59,130,246,0.35)",
        ],
      }}
      transition={{
        duration: 2.6,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 0.8,
      }}
    >
      A
      <motion.span
        className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400"
        animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />
    </motion.span>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type HeroDemoChatProps = {
  ready?: boolean;
  enterDelay?: number;
};

export default function HeroDemoChat({
  ready = true,
  enterDelay = 0,
}: HeroDemoChatProps): React.ReactElement {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [focused, setFocused] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const showSuggestions =
    !busy && messages.some((m) => m.who === "bot") && !messages.some((m) => m.who === "user");

  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setShowPanel(true), enterDelay * 1000);
    return () => clearTimeout(t);
  }, [ready, enterDelay]);

  useEffect(() => {
    if (!showPanel) return;
    const typingDelay = setTimeout(() => {
      setMessages([{ id: "typing", who: "typing", text: "" }]);
    }, 280);
    const welcomeDelay = setTimeout(() => {
      setMessages([{ id: "welcome", who: "bot", text: WELCOME }]);
    }, 900);
    return () => {
      clearTimeout(typingDelay);
      clearTimeout(welcomeDelay);
    };
  }, [showPanel]);

  useEffect(() => {
    bodyRef.current?.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    const history = messages
      .filter((m) => m.who === "user" || m.who === "bot")
      .map((m) => ({
        role: m.who === "user" ? ("user" as const) : ("assistant" as const),
        content: m.text,
      }));

    setBusy(true);
    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: uid(), who: "user", text: trimmed },
      { id: "typing", who: "typing", text: "" },
    ]);

    try {
      const res = await fetch("/api/demo-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = (await res.json()) as { reply?: string };
      const reply =
        data.reply?.trim() ||
        "I hit a snag answering that — try again, or book a demo and a specialist will go deeper.";

      setMessages((prev) => [
        ...prev.filter((m) => m.who !== "typing"),
        { id: uid(), who: "bot", text: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev.filter((m) => m.who !== "typing"),
        {
          id: uid(),
          who: "bot",
          text: "Connection blip on my side. Ask again, or open the full demo while I reconnect.",
        },
      ]);
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  return (
    <motion.div
      className="mx-auto mt-14 w-full max-w-3xl"
      initial={{ opacity: 0, y: 56, scale: 0.9, filter: "blur(8px)" }}
      animate={
        showPanel
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 56, scale: 0.9, filter: "blur(8px)" }
      }
      transition={{ type: "spring", stiffness: 110, damping: 18, mass: 0.85 }}
    >
      <motion.div
        className="relative flex h-[min(30rem,68vh)] flex-col overflow-hidden rounded-3xl bg-panel/92 backdrop-blur-2xl sm:h-[min(28rem,62vh)]"
        style={{
          boxShadow:
            "0 0 0 1px rgb(var(--line-rgb) / 0.12), 0 24px 80px rgb(var(--shadow-rgb) / 0.65), 0 0 60px rgba(59,130,246,0.2)",
        }}
        animate={
          showPanel
            ? {
                boxShadow: [
                  "0 0 0 1px rgb(var(--line-rgb) / 0.12), 0 24px 80px rgb(var(--shadow-rgb) / 0.65), 0 0 48px rgba(59,130,246,0.18)",
                  "0 0 0 1px rgba(147,197,253,0.28), 0 28px 90px rgb(var(--shadow-rgb) / 0.7), 0 0 72px rgba(59,130,246,0.32)",
                  "0 0 0 1px rgb(var(--line-rgb) / 0.12), 0 24px 80px rgb(var(--shadow-rgb) / 0.65), 0 0 48px rgba(59,130,246,0.18)",
                ],
              }
            : undefined
        }
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Soft ambient wash — keeps panel readable on black */}
        <motion.div
          className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-sky-500/20 blur-3xl"
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.96, 1.05, 0.96] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 90% 55% at 15% -10%, rgba(59,130,246,0.28), transparent 55%)",
              "linear-gradient(180deg, rgba(255,255,255,0.04), transparent 28%)",
            ].join(","),
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-80"
          animate={{ opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 80% 100%, rgba(56,189,248,0.12), transparent 50%)",
          }}
        />

        {/* Header */}
        <div className="relative shrink-0 px-4 py-3.5">
          <motion.div
            className="relative flex items-center gap-3"
            initial={{ opacity: 0, x: -16 }}
            animate={showPanel ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ delay: 0.12, type: "spring", stiffness: 200, damping: 20 }}
          >
            <BotAvatar />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="truncate text-[15px] font-semibold tracking-tight text-text">
                  Ava
                </h2>
                <motion.span
                  className="rounded-md bg-sky-400/20 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-sky-200"
                  animate={{ opacity: [0.75, 1, 0.75] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                >
                  AI
                </motion.span>
              </div>
              <p className="mt-0.5 flex items-center gap-1.5 text-[12px] text-text/75">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Online · replies instantly
              </p>
            </div>
          </motion.div>
        </div>

        {/* Transcript */}
        <div
          ref={bodyRef}
          className="relative min-h-0 flex-1 space-y-4 overflow-y-auto px-3.5 py-3 sm:px-4"
        >
          <AnimatePresence mode="popLayout">
            {messages.map((m) => {
              if (m.who === "typing") {
                return (
                  <motion.div
                    key={m.id}
                    className="flex items-end gap-2"
                    initial={{ opacity: 0, y: 16, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: -6, transition: { duration: 0.15 } }}
                    transition={{ type: "spring", stiffness: 340, damping: 22 }}
                  >
                    <BotAvatar size="sm" />
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-text/10 px-4 py-3">
                      <span className="hero-chat-dot h-1.5 w-1.5 rounded-full bg-sky-300/90" />
                      <span className="hero-chat-dot hero-chat-dot--2 h-1.5 w-1.5 rounded-full bg-sky-300/90" />
                      <span className="hero-chat-dot hero-chat-dot--3 h-1.5 w-1.5 rounded-full bg-sky-300/90" />
                    </div>
                  </motion.div>
                );
              }

              const mine = m.who === "user";
              return (
                <motion.div
                  key={m.id}
                  className={`flex items-end gap-2 ${mine ? "flex-row-reverse" : ""}`}
                  initial={{
                    opacity: 0,
                    y: 22,
                    scale: 0.86,
                    x: mine ? 20 : -20,
                    rotate: mine ? 4 : -4,
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, x: 0, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  {!mine && <BotAvatar size="sm" />}
                  <motion.div
                    className={`max-w-[78%] px-3.5 py-2.5 text-[13px] leading-relaxed sm:max-w-[70%] sm:text-sm ${
                      mine
                        ? "rounded-2xl rounded-br-md bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_10px_28px_rgba(37,99,235,0.4)]"
                        : "rounded-2xl rounded-bl-md bg-panel-2 text-text shadow-[0_8px_24px_rgb(var(--shadow-rgb)/0.35)]"
                    }`}
                    whileHover={{ scale: 1.01 }}
                  >
                    {m.text}
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {showSuggestions && (
            <motion.div
              className="flex flex-wrap gap-2 pt-1 pl-9"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
            >
              {SUGGESTIONS.map((s) => (
                <motion.button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  variants={{
                    hidden: { opacity: 0, y: 12, scale: 0.88 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { type: "spring", stiffness: 280, damping: 16 },
                    },
                  }}
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-text/12 px-3 py-1.5 text-left text-[11px] text-text/90 transition-colors hover:bg-sky-500/25 hover:text-text"
                >
                  {s}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Composer — borderless */}
        <motion.div
          className="relative shrink-0 p-3 pt-1"
          initial={{ opacity: 0, y: 16 }}
          animate={showPanel ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.28, type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.form
            className="flex items-center gap-2 rounded-2xl bg-bg-alt p-1.5 pl-3.5 transition-shadow"
            animate={{
              boxShadow: focused
                ? "0 0 0 1px rgba(56,189,248,0.35), 0 0 28px rgba(59,130,246,0.2)"
                : "0 0 0 0 rgba(56,189,248,0)",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Message Ava…"
              disabled={busy}
              className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-text outline-none placeholder:text-text/45 disabled:opacity-60"
            />
            <motion.button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send message"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9, rotate: -12 }}
              animate={
                input.trim() && !busy
                  ? { scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(59,130,246,0)", "0 0 18px rgba(59,130,246,0.45)", "0 0 0 rgba(59,130,246,0)"] }
                  : undefined
              }
              transition={
                input.trim() && !busy
                  ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                  : undefined
              }
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white transition-colors hover:bg-accent-dim disabled:cursor-not-allowed disabled:bg-text/10 disabled:text-text/30"
            >
              <SendIcon />
            </motion.button>
          </motion.form>
          <p className="mt-2.5 text-center text-[10px] tracking-wide text-text/50">
            Demo agent ·{" "}
            <Link href="/contact" className="text-sky-400/80 no-underline hover:text-sky-300">
              Book a human demo
            </Link>
            {" · "}
            <Link href="/demo" className="text-sky-400/80 no-underline hover:text-sky-300">
              Full demo
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Section, SectionHeader, Chip } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";

type ChatMsg = { text: string; who: "user" | "bot" | "typing" };

function chatReplyFor(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("price") || t.includes("cost") || t.includes("$") || t.includes("pricing")) {
    return "Everything — CRM, voice AI, chat, SEO, the works — runs $97/month once you're set up, replacing $1,600+ of separate tools. Want the full comparison?";
  }
  if (t.includes("book") || t.includes("demo") || t.includes("call") || t.includes("meeting")) {
    return "I can get you on the calendar right now — mornings or afternoons this week both have openings. Which works better for you?";
  }
  if (t.includes("voice") || t.includes("phone")) {
    return "Yep — try the Voice AI tab above, it's the same agent that answers real client calls. Sounds human, books appointments, works 24/7.";
  }
  if (t.includes("hi") || t.includes("hello") || t.includes("hey")) {
    return "Hey there! I can tell you about pricing, book you a demo, or walk you through what we automate. What's on your mind?";
  }
  if (t.includes("seo") || t.includes("aeo") || t.includes("geo") || t.includes("rank")) {
    return "We run SEO, AEO, GEO and AIO together — so you show up in Google, Perplexity, and AI Overviews, not just classic search.";
  }
  return "Good question — I've flagged that for the team, and a real specialist can go deeper on a quick call. Want me to book that in?";
}

const callScript: Array<{ cls: string; label: string; line: string }> = [
  { cls: "agent", label: "Agent", line: "Thanks for calling ArQonnect Dental, this is Ava — how can I help you today?" },
  { cls: "caller", label: "Caller", line: "Hi, I need to get a cleaning booked, my tooth has been sensitive." },
  { cls: "agent", label: "Agent", line: "Sorry to hear that — I can get you seen this week. Does Wednesday at 2 PM work?" },
  { cls: "caller", label: "Caller", line: "Yeah, 2 PM Wednesday is perfect." },
  { cls: "agent", label: "Agent", line: "You are all set for Wednesday at 2 PM. I will text a confirmation now — anything else?" },
  { cls: "caller", label: "Caller", line: "Nope, that is everything. Thanks!" },
  { cls: "agent", label: "Agent", line: "Anytime — see you Wednesday!" },
];

export default function Demo() {
  const [tab, setTab] = useState<"chat" | "voice">("chat");
  const [messages, setMessages] = useState<ChatMsg[]>([
    { who: "bot", text: "Hey! 👋 I'm the ArQonnect AI assistant. Ask me about pricing, booking a demo, or what we automate — go ahead, try me." },
  ]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const [voiceActive, setVoiceActive] = useState(false);
  const [voiceLines, setVoiceLines] = useState<Array<{ cls: string; label: string; text: string }>>([]);
  const [voiceStatus, setVoiceStatus] = useState("Ready to call");
  const [voiceTimer, setVoiceTimer] = useState("00:00");
  const voiceSecondsRef = useRef(0);
  const voiceIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const sendChat = useCallback((text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { who: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { who: "typing", text: "" }]);
      setTimeout(() => {
        setMessages((m) => [
          ...m.filter((x) => x.who !== "typing"),
          { who: "bot", text: chatReplyFor(text) },
        ]);
      }, 900);
    }, 100);
  }, []);

  useEffect(() => {
    chatBodyRef.current?.scrollTo({ top: chatBodyRef.current.scrollHeight });
  }, [messages]);

  const resetVoice = useCallback(() => {
    setVoiceActive(false);
    if (voiceIntervalRef.current) clearInterval(voiceIntervalRef.current);
    voiceSecondsRef.current = 0;
    setVoiceTimer("00:00");
    setVoiceStatus("Ready to call");
    setVoiceLines([]);
  }, []);

  const startVoice = useCallback(() => {
    setVoiceActive(true);
    setVoiceLines([]);
    setVoiceStatus("Live — connected");
    voiceSecondsRef.current = 0;
    voiceIntervalRef.current = setInterval(() => {
      voiceSecondsRef.current += 1;
      const s = voiceSecondsRef.current;
      setVoiceTimer(`${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`);
    }, 1000);
    let i = 0;
    const next = () => {
      if (i >= callScript.length) {
        setVoiceStatus("Call ended");
        setVoiceActive(false);
        if (voiceIntervalRef.current) clearInterval(voiceIntervalRef.current);
        return;
      }
      const line = callScript[i];
      setVoiceLines((prev) => [...prev, { ...line, text: line.line }]);
      i++;
      setTimeout(next, 1900 + line.line.length * 10);
    };
    setTimeout(next, 500);
  }, []);

  const toggleVoice = () => {
    if (voiceActive) resetVoice();
    else startVoice();
  };

  useEffect(() => () => {
    if (voiceIntervalRef.current) clearInterval(voiceIntervalRef.current);
  }, []);

  return (
    <Section first id="demo">
      <SectionHeader
        eyebrow="Try It, Don't Just Watch It"
        title={
          <>
            Every agency says their AI is good.
            <br />
            Prove it yourself, right here.
          </>
        }
        description="This is the actual agent — not a mockup. Type a message or start a call and see how it responds."
        center
      />

      <FadeUp>
        <div className="mx-auto flex max-w-md justify-center gap-2">
          <Chip active={tab === "chat"} onClick={() => setTab("chat")}>💬 Chat Widget</Chip>
          <Chip active={tab === "voice"} onClick={() => setTab("voice")}>📞 Voice AI</Chip>
        </div>

        <div className="mx-auto mt-8 max-w-lg overflow-hidden rounded-2xl border border-line bg-panel/80 shadow-2xl">
          {tab === "chat" ? (
            <div className="demo-panel" data-demopanel="chat">
              <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
                <div>
                  <b className="text-sm text-text">ArQonnect Assistant</b>
                  <span className="block text-xs text-text-dimmer">Usually replies instantly</span>
                </div>
              </div>
              <div ref={chatBodyRef} id="chatDemoBody" className="max-h-72 space-y-3 overflow-y-auto p-4">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`chat-msg max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      m.who === "user"
                        ? "ml-auto bg-accent/20 text-text"
                        : m.who === "typing"
                        ? "bg-panel-2 text-text-dim"
                        : "bg-panel-2 text-text-dim"
                    }`}
                  >
                    {m.who === "typing" ? (
                      <span className="flex gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-text-dimmer" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-text-dimmer [animation-delay:0.1s]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-text-dimmer [animation-delay:0.2s]" />
                      </span>
                    ) : (
                      m.text
                    )}
                  </div>
                ))}
              </div>
              <div id="chatSuggestions" className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
                {["What does it cost?", "Book a demo", "Do you do voice calls?"].map((s) => (
                  <button key={s} type="button" className="chip suggestion rounded-full border border-line bg-panel/60 px-3 py-1.5 text-xs text-text-dim hover:text-text" onClick={() => sendChat(s)}>
                    {s}
                  </button>
                ))}
              </div>
              <form id="chatDemoForm" className="flex gap-2 border-t border-line p-3" onSubmit={(e) => { e.preventDefault(); sendChat(input); }}>
                <input id="chatDemoInput" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message…" autoComplete="off" className="flex-1 rounded-xl border border-line bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-accent/50" />
                <button type="submit" className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-bg">→</button>
              </form>
            </div>
          ) : (
            <div className="demo-panel p-6" data-demopanel="voice">
              <div className="voice-demo-top flex flex-col items-center gap-4 text-center">
                <div id="voiceAvatar" className={`flex h-20 w-20 items-center justify-center rounded-full border-2 ${voiceActive ? "border-accent live" : "border-line"}`}>
                  <div className="wave-bars flex items-end gap-1 h-8">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} className={`w-1 rounded-full bg-accent ${voiceActive ? "animate-[waveBar_1s_ease-in-out_infinite]" : "h-3"}`} style={{ animationDelay: `${n * 0.1}s`, height: voiceActive ? undefined : "12px" }} />
                    ))}
                  </div>
                </div>
                <div className="voice-demo-status">
                  <b id="voiceStatusText" className="text-text">{voiceStatus}</b>
                  <span id="voiceTimer" className="ml-2 font-mono text-sm text-text-dimmer">{voiceTimer}</span>
                </div>
                <button
                  type="button"
                  id="voiceCallBtn"
                  onClick={toggleVoice}
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-accent-dim"
                >
                  {voiceActive ? "End Call" : "Start Demo Call →"}
                </button>
              </div>
              <div id="voiceTranscript" className="voice-transcript mt-6 max-h-64 space-y-3 overflow-y-auto rounded-xl border border-line bg-bg/50 p-4 text-sm">
                {voiceLines.length === 0 ? (
                  <p className="voice-hint text-text-dimmer">Press &ldquo;Start Demo Call&rdquo; to hear how ArQonnect&apos;s Voice AI handles a real booking call — live transcript will appear here.</p>
                ) : (
                  voiceLines.map((l, i) => (
                    <div key={i} className={`voice-line ${l.cls === "agent" ? "text-accent" : "text-text-dim"}`}>
                      <b>{l.label}</b>
                      <span className="ml-2">{l.text}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </FadeUp>
    </Section>
  );
}

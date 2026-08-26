import { NextRequest, NextResponse } from "next/server";
import { DEMO_SYSTEM_PROMPT, localDemoReply } from "@/lib/demoChat";

export const runtime = "nodejs";

type ChatTurn = { role: "user" | "assistant" | "system"; content: string };

async function llmReply(messages: ChatTurn[]): Promise<string | null> {
  const key =
    process.env.OPENAI_API_KEY ||
    process.env.OPENROUTER_API_KEY ||
    process.env.DEMO_CHAT_API_KEY;
  if (!key) return null;

  const base =
    process.env.DEMO_CHAT_BASE_URL ||
    (process.env.OPENROUTER_API_KEY
      ? "https://openrouter.ai/api/v1"
      : "https://api.openai.com/v1");
  const model =
    process.env.DEMO_CHAT_MODEL ||
    (process.env.OPENROUTER_API_KEY ? "openai/gpt-4o-mini" : "gpt-4o-mini");

  const res = await fetch(`${base}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
      ...(process.env.OPENROUTER_API_KEY
        ? {
            "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            "X-Title": "ArQonnect Demo Chat",
          }
        : {}),
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      max_tokens: 280,
      messages: [{ role: "system", content: DEMO_SYSTEM_PROMPT }, ...messages],
    }),
  });

  if (!res.ok) {
    console.error("demo-chat LLM error", res.status, await res.text());
    return null;
  }

  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const text = data.choices?.[0]?.message?.content?.trim();
  return text || null;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      message?: string;
      history?: Array<{ role?: string; content?: string }>;
    };

    const message = (body.message || "").trim();
    if (!message || message.length > 2000) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const history: ChatTurn[] = (body.history || [])
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim()
      )
      .slice(-12)
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content!.trim().slice(0, 2000),
      }));

    history.push({ role: "user", content: message });

    const fromLlm = await llmReply(history);
    const reply = fromLlm || localDemoReply(message, history);

    return NextResponse.json({
      reply,
      source: fromLlm ? "llm" : "local",
    });
  } catch (err) {
    console.error("demo-chat route", err);
    return NextResponse.json(
      {
        reply: localDemoReply("hello"),
        source: "local",
      },
      { status: 200 }
    );
  }
}

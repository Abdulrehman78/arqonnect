"use client";

import { Section, Card } from "@/components/ui/PageSection";
import { Stagger, MotionItem } from "@/components/ui/Motion";
import PageBanner from "@/components/ui/PageBanner";
import Image from "next/image";

export default function Proof() {
  return (
    <>
      <PageBanner
        id="proof"
        banner="proof"
        center
        eyebrow="One Agent, No Limits"
        title="Your customer doesn't care"
        titleMuted="which tool you're using."
        description="They just want an answer — in their language, on their platform, from a business that gets what they do. The same agent covers all three."
      />
      <Section id="proof-content">
        <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <MotionItem>
            <Card className="h-full overflow-hidden p-0">
              <div className="border-b border-line bg-bg p-4">
                <div className="flex gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-red-500/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                  <span className="h-2 w-2 rounded-full bg-green-500/60" />
                </div>
                <div className="lang-ticker-wrap overflow-hidden rounded-lg border border-line bg-panel/60 p-3">
                  <div className="lang-ticker flex gap-3 text-xs text-text-dim" id="langTicker" />
                  <div className="lang-ticker flex gap-3 text-xs text-text-dim mt-2" id="langTicker2" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-text">Speaks the room&apos;s language</h4>
                <p className="mt-2 text-sm text-text-dim">Multilingual voice AI that actively listens and context-switches mid-call — handling interruptions with the same empathy in any language.</p>
              </div>
            </Card>
          </MotionItem>
          <MotionItem>
            <Card className="h-full overflow-hidden p-0">
              <div className="relative aspect-video border-b border-line">
                <Image src="/media/img_3.webp" alt="One agent across WhatsApp, Instagram, Messenger, Voice, Web Chat, SMS and Email" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-text">Never confined to one inbox</h4>
                <p className="mt-2 text-sm text-text-dim">WhatsApp, Instagram, Messenger, voice, web chat, SMS and email — one agent, one memory of the conversation, every channel.</p>
              </div>
            </Card>
          </MotionItem>
          <MotionItem>
            <Card className="h-full overflow-hidden p-0">
              <div className="relative aspect-video border-b border-line">
                <Image src="/media/img_4.webp" alt="AI agents built for healthcare, dental practices, scheduling and real estate" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-text">Tuned to your business, not generic</h4>
                <p className="mt-2 text-sm text-text-dim">Healthcare, dental, real estate, law firms, education, ecommerce, finance and SaaS — the agent learns the vocabulary and workflow of the industry it&apos;s hired into.</p>
              </div>
            </Card>
          </MotionItem>
        </Stagger>
      </Section>
    </>
  );
}

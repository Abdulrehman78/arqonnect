import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image
                src="/logo.png"
                alt="ArQonnect"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-base font-semibold text-text">ArQonnect</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-dim">
              ArQonnect is an AI agency — our product is the bot and the agent.
              Most businesses lose leads the same way: someone reaches out, and
              nobody&apos;s there. We build the agent that&apos;s always there —
              chatbot, voice, CRM, growth and AI search visibility, all pointed
              at one job: don&apos;t let the lead go quiet. Running that job
              across the US, UK, Canada, Australia and Europe.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-text-dimmer">
              Core AI Services
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/crm" className="text-sm text-text-dim hover:text-text no-underline transition-colors">CRM</Link>
              <Link href="/services" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Voice AI</Link>
              <Link href="/services" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Chat Widget / Conversation AI</Link>
              <Link href="/services" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Websites, Funnels &amp; Landing Pages</Link>
              <Link href="/services" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Webinar Funnels</Link>
              <Link href="/services" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Call Tracking</Link>
              <Link href="/services" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Inbound SMS &amp; Social DMs</Link>
              <Link href="/services" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Social Planner</Link>
              <Link href="/services" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Missed Call Text-Back</Link>
              <Link href="/services" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Ad Manager (Google/FB/Insta)</Link>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-text-dimmer">
              Growth &amp; AI Visibility
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">SMM — Social Media Marketing</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">SEO — Search Engine Optimization</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">AEO — Answer Engine Optimization</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">GEO — Generative Engine Optimization</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">AIO — AI Overview Optimization</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Email Marketing Automation</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Sales Funnel Automation</Link>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-text-dimmer">
              Build, Automation &amp; Strategy
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">AI-Powered Web Development</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">iOS App Development</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Android App Development</Link>
              <Link href="/crm" className="text-sm text-text-dim hover:text-text no-underline transition-colors">HubSpot CRM Integration</Link>
              <Link href="/crm" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Salesforce CRM Integration</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Business Process Automation</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Workflow Automation</Link>
              <Link href="/enterprise" className="text-sm text-text-dim hover:text-text no-underline transition-colors">AI Business Consulting</Link>
              <Link href="/enterprise" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Enterprise Digital Transformation</Link>
              <Link href="/services#capabilities" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Technical Writing</Link>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-text-dimmer">
              Company
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/why" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Why ArQonnect</Link>
              <Link href="/values" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Our Values</Link>
              <Link href="/about" className="text-sm text-text-dim hover:text-text no-underline transition-colors">About Us</Link>
              <Link href="/process" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Our Process</Link>
              <Link href="/demo" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Live Demo</Link>
              <Link href="/see-it-work" className="text-sm text-text-dim hover:text-text no-underline transition-colors">See It Work</Link>
              <Link href="/proof" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Proof &amp; Live Stats</Link>
              <Link href="/resources" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Resources</Link>
              <Link href="/pricing" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Pricing</Link>
              <Link href="/contact" className="text-sm text-text-dim hover:text-text no-underline transition-colors">Contact</Link>
              <span className="text-sm text-text-dimmer">Lahore, Pakistan</span>
              <span className="text-sm text-text-dimmer">hello@arqonnect.com</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <span className="text-xs text-text-dimmer">
            © 2026 ArQonnect. All rights reserved.
          </span>
          <span className="text-xs text-text-dimmer">
            Built for agencies who sell outcomes.
          </span>
        </div>
      </div>
    </footer>
  );
}

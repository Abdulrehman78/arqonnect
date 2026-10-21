"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { BookDemoLink } from "@/components/BookDemoLink";
import { ROI_COPY, ROI_DEFAULTS } from "@/lib/marketingPages";

function money(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));
}

export default function RoiCalculatorClient() {
  const [missed, setMissed] = useState<number>(ROI_DEFAULTS.missedLeadsPerMonth);
  const [deal, setDeal] = useState<number>(ROI_DEFAULTS.avgDealValue);
  const [closeRate, setCloseRate] = useState<number>(ROI_DEFAULTS.closeRatePercent);
  const [hours, setHours] = useState<number>(ROI_DEFAULTS.hoursOnRepetitiveChat);
  const [hourly, setHourly] = useState<number>(ROI_DEFAULTS.staffHourlyCost);
  const [plan, setPlan] = useState<number>(ROI_DEFAULTS.planMonthly);

  const result = useMemo(() => {
    const recoveredRevenue = missed * (closeRate / 100) * deal;
    const staffSavings = hours * hourly;
    const monthlyGain = recoveredRevenue + staffSavings;
    const net = monthlyGain - plan;
    return { recoveredRevenue, staffSavings, monthlyGain, net };
  }, [missed, deal, closeRate, hours, hourly, plan]);

  return (
    <main aria-label="ROI calculator">
      <section className="relative overflow-hidden border-b border-line bg-bg px-4 pb-20 pt-[clamp(5rem,12dvh,8rem)] sm:px-6">
        <SchemeOverlay />
        <RevealOnScroll className="relative mx-auto max-w-6xl">
          <header className="max-w-2xl">
            <p className="story-kicker">
              <span className="ai-live-dot" />
              {ROI_COPY.eyebrow}
            </p>
            <h1 className="story-heading mt-3">{ROI_COPY.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-text-dim">
              {ROI_COPY.lead}
            </p>
          </header>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5 rounded-[18px] border border-line bg-panel/50 p-6">
              <Field
                label="Missed or slow leads per month"
                value={missed}
                min={0}
                max={500}
                onChange={setMissed}
              />
              <Field
                label="Average deal value (USD)"
                value={deal}
                min={0}
                max={10000}
                step={10}
                onChange={setDeal}
              />
              <Field
                label="Close rate (%)"
                value={closeRate}
                min={1}
                max={100}
                onChange={setCloseRate}
              />
              <Field
                label="Staff hours/month on repetitive chat"
                value={hours}
                min={0}
                max={200}
                onChange={setHours}
              />
              <Field
                label="Fully loaded hourly cost (USD)"
                value={hourly}
                min={0}
                max={100}
                step={1}
                onChange={setHourly}
              />
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wider text-text-dimmer">
                  Compare against plan
                </span>
                <select
                  className="mt-2 w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-sm text-text"
                  value={plan}
                  onChange={(e) => setPlan(Number(e.target.value))}
                >
                  <option value={499}>Starter · $499/mo</option>
                  <option value={899}>Growth · $899/mo</option>
                  <option value={1499}>Scale · $1,499/mo</option>
                </select>
              </label>
            </div>

            <div className="rounded-[18px] border border-accent/40 bg-panel/70 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-dimmer">
                Estimated monthly impact
              </p>
              <dl className="mt-6 space-y-4 text-sm">
                <Row label="Recovered revenue potential" value={money(result.recoveredRevenue)} />
                <Row label="Staff time savings" value={money(result.staffSavings)} />
                <Row label="Gross monthly gain" value={money(result.monthlyGain)} />
                <Row label="Plan cost" value={money(plan)} />
                <div className="border-t border-line pt-4">
                  <Row
                    label="Net vs plan (illustrative)"
                    value={money(result.net)}
                    strong
                  />
                </div>
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-text-dimmer">
                {ROI_COPY.disclaimer}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <BookDemoLink
                  source="roi_cta"
                  className="ai-cta-shine inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#0B0F12] no-underline hover:bg-accent-dim"
                >
                  Book a demo →
                </BookDemoLink>
                <Link
                  href="/pricing"
                  className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-text no-underline hover:border-accent/40"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-wider text-text-dimmer">
        {label}
        <span className="font-mono text-accent">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-[#EAA46B]"
      />
    </label>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-text-dim">{label}</dt>
      <dd
        className={
          strong
            ? "font-display text-2xl font-bold text-accent"
            : "font-semibold text-text"
        }
      >
        {value}
      </dd>
    </div>
  );
}

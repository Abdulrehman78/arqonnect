"use client";

import { useMemo, useState, type FormEvent, type ReactElement } from "react";
import { trackFormStart, trackFormSubmit } from "@/lib/analytics";

const SERVICES = [
  "Voice AI",
  "Chat Agents",
  "CRM Sync",
  "SMS & Social",
  "Website / Funnels",
  "Full stack",
];

const BUDGETS = [
  { id: "starter", label: "Under $2k", note: "Pilot / single channel" },
  { id: "growth", label: "$2k – $8k", note: "Multi-channel rollout" },
  { id: "scale", label: "$8k – $25k", note: "Full stack + CRM" },
  { id: "enterprise", label: "$25k+", note: "Enterprise / custom" },
];

type Step = "services" | "budget" | "details" | "done";

type Props = {
  className?: string;
};

/**
 * Multi-step lead form — glass room panel, brand peach CTAs.
 */
export default function MultiStepLeadForm({ className = "" }: Props): ReactElement {
  const [step, setStep] = useState<Step>("services");
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const stepIndex = useMemo(() => {
    if (step === "services") return 1;
    if (step === "budget") return 2;
    if (step === "details") return 3;
    return 4;
  }, [step]);

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const nextFromServices = () => {
    if (!services.length) {
      setError("Pick at least one service.");
      return;
    }
    setError("");
    trackFormStart("contact_lead");
    setStep("budget");
  };

  const nextFromBudget = () => {
    if (!budget) {
      setError("Select a budget range.");
      return;
    }
    setError("");
    setStep("details");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }
    setError("");

    const payload = {
      services,
      budget,
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      message: message.trim(),
    };
    console.info("[lead-form]", payload);
    trackFormSubmit("contact_lead");

    const subject = encodeURIComponent(`ArQonnect demo — ${name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company || "—"}`,
        `Services: ${payload.services.join(", ")}`,
        `Budget: ${BUDGETS.find((b) => b.id === payload.budget)?.label ?? payload.budget}`,
        "",
        payload.message || "(no message)",
      ].join("\n")
    );
    window.location.href = `mailto:hello@arqonnect.com?subject=${subject}&body=${body}`;
    setStep("done");
  };

  const shell = `lead-form ${className}`.trim();

  if (step === "done") {
    return (
      <div className={`${shell} lead-success`} role="status">
        <p className="lead-form-step-label">
          <span className="ai-live-dot" />
          Sent
        </p>
        <h3>Request ready</h3>
        <p>
          Your mail client should open with the details filled in. We&apos;ll reply within one
          business day.
        </p>
        <div className="lead-actions" style={{ justifyContent: "center" }}>
          <button
            type="button"
            className="lead-btn lead-btn--ghost"
            onClick={() => setStep("services")}
          >
            Start another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={shell} onSubmit={onSubmit} noValidate>
      <div className="lead-progress" aria-hidden>
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`lead-progress-seg ${n <= stepIndex ? "is-on" : ""}`}
          />
        ))}
      </div>
      <p className="lead-form-step-label">
        <span className="ai-live-dot" />
        Step {stepIndex} of 3
      </p>

      {step === "services" && (
        <>
          <h3>What do you need?</h3>
          <p className="lead-form-hint">Select every channel you want covered.</p>
          <div className="lead-pills" role="group" aria-label="Services">
            {SERVICES.map((s) => (
              <button
                key={s}
                type="button"
                className={`lead-pill ${services.includes(s) ? "is-on" : ""}`}
                onClick={() => toggleService(s)}
                aria-pressed={services.includes(s)}
              >
                {s}
              </button>
            ))}
          </div>
          {error ? <p className="lead-error">{error}</p> : null}
          <div className="lead-actions">
            <button type="button" className="lead-btn lead-btn--primary" onClick={nextFromServices}>
              Continue →
            </button>
          </div>
        </>
      )}

      {step === "budget" && (
        <>
          <h3>Project budget</h3>
          <p className="lead-form-hint">Helps us size the right stack for the walkthrough.</p>
          <div className="lead-budgets" role="radiogroup" aria-label="Budget">
            {BUDGETS.map((b) => (
              <button
                key={b.id}
                type="button"
                role="radio"
                aria-checked={budget === b.id}
                className={`lead-budget ${budget === b.id ? "is-on" : ""}`}
                onClick={() => setBudget(b.id)}
              >
                <strong>{b.label}</strong>
                <span>{b.note}</span>
              </button>
            ))}
          </div>
          {error ? <p className="lead-error">{error}</p> : null}
          <div className="lead-actions">
            <button
              type="button"
              className="lead-btn lead-btn--ghost"
              onClick={() => setStep("services")}
            >
              Back
            </button>
            <button type="button" className="lead-btn lead-btn--primary" onClick={nextFromBudget}>
              Continue →
            </button>
          </div>
        </>
      )}

      {step === "details" && (
        <>
          <h3>How do we reach you?</h3>
          <p className="lead-form-hint">We reply within one business day.</p>
          <div className="lead-fields">
            <label>
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
                placeholder="Jordan Lee"
              />
            </label>
            <label>
              Work email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                placeholder="jordan@company.com"
              />
            </label>
            <label>
              Company
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoComplete="organization"
                placeholder="Optional"
              />
            </label>
            <label>
              Anything else?
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Current stack, volume, timeline…"
              />
            </label>
          </div>
          {error ? <p className="lead-error">{error}</p> : null}
          <div className="lead-actions">
            <button
              type="button"
              className="lead-btn lead-btn--ghost"
              onClick={() => setStep("budget")}
            >
              Back
            </button>
            <button type="submit" className="lead-btn lead-btn--primary" data-cursor="book">
              Book a walkthrough →
            </button>
          </div>
        </>
      )}
    </form>
  );
}

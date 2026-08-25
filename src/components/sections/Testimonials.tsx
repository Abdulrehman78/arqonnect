"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/Motion";

export default function Testimonials() {
  return (
    <section className="relative border-t border-line bg-bg-alt px-6 py-10 md:py-12">
      <div className="mx-auto max-w-4xl">
        <FadeUp className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet">
            Before / After
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-text md:text-4xl">
            The gap between &ldquo;we&apos;re busy&rdquo; and &ldquo;we&apos;re organized.&rdquo;
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-text-dim md:text-base">
            We&apos;re early — real client case studies are being documented as
            engagements complete. Here&apos;s the shape every one follows.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-8 rounded-2xl border border-line bg-panel/50 p-6 md:p-8">
            <blockquote className="text-sm leading-relaxed text-text-dim md:text-base">
              &ldquo;This is where your story goes. Once the first engagement wraps,
              we&apos;ll swap this for a real quote, a real name, and a real
              result.&rdquo;
            </blockquote>
            <div className="mt-5 flex items-center gap-4 border-t border-line pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel-2 text-sm font-bold text-text-dim">
                ?
              </span>
              <div>
                <div className="font-semibold text-text">Reserved for you</div>
                <div className="text-sm text-text-dimmer">
                  Founding client, ArQonnect
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-text-dimmer">
              Illustrative, based on the workflow every ArQonnect client moves
              through — ask us for real client results on your first call.
            </p>
            <Link
              href="/case-studies"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent no-underline transition-colors hover:text-accent-dim"
            >
              See Case Studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

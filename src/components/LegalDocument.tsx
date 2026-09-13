import type { ReactElement } from "react";
import Link from "next/link";
import SchemeOverlay from "@/components/ui/SchemeOverlay";
import type { LegalBlock, LegalDoc } from "@/lib/legalContent";
import { LEGAL_LINKS } from "@/lib/legalContent";

function renderBlock(block: LegalBlock, i: number): ReactElement {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-10 scroll-mt-28 text-xl font-semibold tracking-tight text-text sm:text-2xl"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-6 text-base font-semibold text-text sm:text-lg">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-dim sm:text-[15px]">
          {block.items.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={i} className="mt-4 overflow-x-auto rounded-xl border border-line">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-panel/60">
              <tr>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className="border-b border-line px-3 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-text-dimmer"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="odd:bg-bg even:bg-panel/20">
                  {row.map((cell, ci) => (
                    <td
                      key={`${ri}-${ci}`}
                      className="border-b border-line/70 px-3 py-2.5 align-top text-text-dim"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return (
        <p key={i} className="mt-3 text-sm leading-relaxed text-text-dim sm:text-[15px]">
          {block.text}
        </p>
      );
  }
}

export default function LegalDocument({ doc }: { doc: LegalDoc }): ReactElement {
  return (
    <main aria-label={doc.title}>
      <section className="relative border-b border-line bg-bg px-4 pb-20 pt-[clamp(5.5rem,12dvh,8rem)] sm:px-6">
        <SchemeOverlay quiet />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
          <article className="min-w-0">
            <p className="inline-flex items-center text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <span className="ai-live-dot" />
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {doc.title}
            </h1>
            {doc.updated ? (
              <p className="mt-2 font-mono text-[11px] tracking-wider text-text-dimmer">
                Last updated {doc.updated}
              </p>
            ) : null}
            <div className="mt-8 max-w-3xl">{doc.blocks.map(renderBlock)}</div>
          </article>

          <aside className="lg:pt-2">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gold">
                Policies
              </h2>
              <nav className="mt-3 flex flex-col gap-2" aria-label="Legal policies">
                {LEGAL_LINKS.map((l) => {
                  const active = l.href === `/legal/${doc.slug}`;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`text-sm no-underline transition-colors ${
                        active
                          ? "font-medium text-accent"
                          : "text-text-dim hover:text-gold"
                      }`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

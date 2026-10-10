"use client";

import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";

const TEAM = [
  {
    initials: "AQ",
    name: "Abdulrehman Qureshi",
    title: "CEO / Founder",
    color: "#5EC8B0",
  },
  {
    initials: "MI",
    name: "Mubashar Irshad",
    title: "Core Director",
    color: "#6BA3E8",
  },
  {
    initials: "MS",
    name: "Mr Sheharyar",
    title: "Chief Heart Officer",
    color: "#B39DDB",
  },
  {
    initials: "MA",
    name: "Mr Ali",
    title: "Director Sales",
    color: "#7DCEA0",
  },
  {
    initials: "MU",
    name: "Mr Usman",
    title: "Director HR",
    color: "#E8A06B",
  },
  {
    initials: "SA",
    name: "Ms Shaza Azam",
    title: "Head of HR",
    sub: "Clinical Psychologist",
    color: "#E89A9A",
  },
] as const;

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-b border-line bg-[#0B0D11] px-4 py-16 sm:px-6 md:py-24"
      aria-labelledby="team-heading"
    >
      <div className="relative mx-auto max-w-6xl">
        <FadeUp className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id="team-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
            >
              Great connections. Exceptional{" "}
              <span className="text-[#D48F5B]">people.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#8A99A8] sm:text-base">
              Meet the leadership team bringing vision, expertise, and a
              people-first approach to ArQonnect.
            </p>
          </div>
          <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-[#6B7A88]">
            06 People · One Vision
          </p>
        </FadeUp>

        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((person, i) => (
            <MotionItem key={person.name}>
              <article
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#12151A] transition-all duration-300 hover:-translate-y-1 hover:border-[#D48F5B]/45 hover:shadow-[0_20px_40px_-24px_rgba(212,143,91,0.45)]"
              >
                <div className="relative flex h-44 items-center justify-center bg-[#0E1116] sm:h-48">
                  <span className="absolute left-4 top-4 font-mono text-[11px] text-[#6B7A88]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="absolute right-4 top-4 h-2 w-2 rounded-full"
                    style={{ backgroundColor: person.color }}
                    aria-hidden
                  />
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    {[1.55, 1.95, 2.35, 2.75, 3.15].map((scale) => (
                      <span
                        key={scale}
                        className="pointer-events-none absolute inset-0 rounded-full border border-white/[0.06] transition-transform duration-500 group-hover:scale-110"
                        style={{
                          transform: `scale(${scale})`,
                          opacity: 0.55 - (scale - 1.55) * 0.08,
                        }}
                        aria-hidden
                      />
                    ))}
                    <span
                      className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full text-lg font-semibold tracking-wide transition-transform duration-300 group-hover:scale-105"
                      style={{
                        color: person.color,
                        background:
                          "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.06), rgba(0,0,0,0.35))",
                        boxShadow: `0 0 0 1px ${person.color}33, 0 0 28px ${person.color}22`,
                      }}
                    >
                      {person.initials}
                    </span>
                  </div>
                </div>
                <div className="border-t border-white/[0.06] bg-[#161A20] px-5 py-4">
                  <h3 className="text-base font-semibold text-white">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#D48F5B]">{person.title}</p>
                  {"sub" in person && person.sub ? (
                    <p className="mt-1 text-xs text-[#6B7A88]">{person.sub}</p>
                  ) : null}
                </div>
              </article>
            </MotionItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

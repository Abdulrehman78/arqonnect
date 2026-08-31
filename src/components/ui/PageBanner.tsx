"use client";

import type { ReactElement, ReactNode } from "react";
import { GiggleText } from "@/components/ui/GiggleText";
import BannerBackdrop from "@/components/ui/BannerBackdrop";
import { PAGE_BANNERS, ROOM_VEIL, type PageBannerKey } from "@/lib/brand";

export type PageBannerProps = {
  id?: string;
  banner?: PageBannerKey;
  image?: string;
  video?: string;
  imagePosition?: string;
  eyebrow: string;
  title: ReactNode;
  titleMuted?: ReactNode;
  description?: string;
  center?: boolean;
  minHeight?: string;
  children?: ReactNode;
  aside?: ReactNode;
};

function TitleLine({ children }: { children: ReactNode }): ReactElement {
  if (typeof children === "string") {
    return <GiggleText as="span" text={children} tone="rise" />;
  }
  return <>{children}</>;
}

function MutedLine({ children }: { children: ReactNode }): ReactElement {
  if (typeof children === "string") {
    return (
      <GiggleText
        as="span"
        text={children}
        tone="rise"
        startDelay={0.2}
        className="banner-heading-muted"
      />
    );
  }
  return <span className="banner-heading-muted">{children}</span>;
}

export default function PageBanner({
  id,
  banner,
  image,
  video,
  imagePosition,
  eyebrow,
  title,
  titleMuted,
  description,
  center = false,
  minHeight = "min-h-[80vh]",
  children,
  aside,
}: PageBannerProps): ReactElement {
  const split = Boolean(aside) && !center;
  const meta = banner ? PAGE_BANNERS[banner] : undefined;
  const poster = image ?? meta?.src ?? "/images/hero-banner.jpg";
  const clip = video ?? meta?.video;
  const position = imagePosition ?? meta?.position ?? "50% center";

  return (
    <section
      id={id}
      className={`relative flex items-center overflow-hidden border-b border-line bg-bg px-4 pb-16 pt-28 sm:px-6 sm:pb-20 ${minHeight}`}
    >
      <BannerBackdrop
        poster={poster}
        video={clip}
        position={position}
        quiet
        veil={ROOM_VEIL}
        priority
      />

      <div
        className={`relative z-10 mx-auto w-full max-w-6xl ${
          split ? "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12" : ""
        }`}
      >
        <div className={center || !split ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
          <span className="room-label inline-flex items-center text-xs font-medium uppercase tracking-[0.18em]">
            <span className="ai-live-dot" />
            <GiggleText text={eyebrow} tone="wave" />
          </span>
          <h1 className="ai-title banner-heading mt-4 text-3xl sm:text-4xl md:text-5xl">
            <TitleLine>{title}</TitleLine>
            {titleMuted ? (
              <>
                <br />
                <MutedLine>{titleMuted}</MutedLine>
              </>
            ) : null}
            <span className={`ai-title-line ${center || !split ? "mx-auto" : ""}`} />
          </h1>
          {description ? (
            <GiggleText
              as="p"
              text={description}
              tone="blur"
              startDelay={0.35}
              className={`room-body mt-4 text-base leading-relaxed sm:text-lg ${
                center || !split ? "mx-auto max-w-xl" : "max-w-xl"
              }`}
            />
          ) : null}
          {children ? (
            <div className={center || !split ? "mt-8" : "mt-8"}>{children}</div>
          ) : null}
        </div>

        {aside ? <div className="relative w-full">{aside}</div> : null}
      </div>
    </section>
  );
}

/** Shared checklist row for split banners */
export function PageBannerChecks({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}): ReactElement {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 text-sm text-white/85"
        >
          <span className="text-accent">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Glass panel wrapper for banner aside previews */
export function PageBannerPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}): ReactElement {
  return (
    <div className={`glass overflow-hidden rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { CAL_BOOKING_URL } from "@/lib/siteContent";
import { trackBookDemo } from "@/lib/analytics";

type Props = {
  children: ReactNode;
  source: string;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;

/** Opens the company Cal.com booking page in a new tab. */
export function BookDemoLink({
  children,
  source,
  className,
  onClick,
  ...rest
}: Props) {
  return (
    <a
      href={CAL_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        trackBookDemo(source);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

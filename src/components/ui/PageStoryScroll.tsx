"use client";

import type { ReactElement, ReactNode } from "react";
import HomeStoryScroll from "@/components/ui/HomeStoryScroll";
import type { HomePanelMeta } from "@/lib/homePanels";

type Chapter = {
  meta: HomePanelMeta;
  node: ReactNode;
};

type Props = {
  chapters: Chapter[];
  /** Accessible name for the story region */
  label?: string;
};

/**
 * Page-level morphing story scroll — same engine as the homepage chapters.
 * Use on /contact, /services, and any multi-chapter marketing page.
 */
export default function PageStoryScroll({
  chapters,
  label = "Story",
}: Props): ReactElement {
  return <HomeStoryScroll chapters={chapters} label={label} />;
}

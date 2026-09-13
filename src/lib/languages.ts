/** Shared language list for homepage rail — Phase 1 languages. */
export type Language = {
  code: string;
  name: string;
  /** Latin-script badge when there is no distinct country flag (e.g. Roman Urdu). */
  badge?: string;
};

export function languageFlagSrc(code: string): string {
  return `https://flagcdn.com/w80/${code}.png`;
}

export const LANGUAGES: Language[] = [
  { code: "us", name: "English" },
  { code: "pk", name: "Urdu" },
  { code: "roman", name: "Roman Urdu", badge: "Aa" },
  { code: "ae", name: "Arabic" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
];

export const LANGUAGES_ROW1 = LANGUAGES.slice(0, 3);
export const LANGUAGES_ROW2 = LANGUAGES.slice(3);

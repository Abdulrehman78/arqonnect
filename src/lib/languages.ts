/** Shared language list for homepage rail — Phase 1 languages from reference. */
export type Language = {
  code: string;
  name: string;
};

export function languageFlagSrc(code: string): string {
  return `https://flagcdn.com/w80/${code}.png`;
}

export const LANGUAGES: Language[] = [
  { code: "us", name: "English" },
  { code: "pk", name: "Urdu" },
  { code: "pk", name: "Roman Urdu" },
  { code: "in", name: "Hindi" },
  { code: "ae", name: "Arabic" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
];

export const LANGUAGES_ROW1 = LANGUAGES.slice(0, 4);
export const LANGUAGES_ROW2 = LANGUAGES.slice(4);

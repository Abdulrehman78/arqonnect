/** Shared language list for homepage rail + proof card ticker. */
export type Language = {
  code: string;
  name: string;
};

export function languageFlagSrc(code: string): string {
  return `https://flagcdn.com/w80/${code}.png`;
}

export const LANGUAGES: Language[] = [
  { code: "us", name: "English" },
  { code: "in", name: "Hindi" },
  { code: "se", name: "Swedish" },
  { code: "fr", name: "French" },
  { code: "cz", name: "Czech" },
  { code: "pk", name: "Urdu" },
  { code: "ae", name: "Arabic" },
  { code: "pt", name: "Portuguese" },
  { code: "sk", name: "Slovak" },
  { code: "es", name: "Spanish" },
  { code: "nl", name: "Dutch" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "jp", name: "Japanese" },
];

export const LANGUAGES_ROW1 = LANGUAGES.slice(0, 7);
export const LANGUAGES_ROW2 = LANGUAGES.slice(7);

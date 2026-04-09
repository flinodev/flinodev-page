export const languages = {
  es: "Español",
  en: "English",
  pt: "Português",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  es: () => import("./ui/es.json").then((m) => m.default),
  en: () => import("./ui/en.json").then((m) => m.default),
  pt: () => import("./ui/pt.json").then((m) => m.default),
} as const;

export type Language = keyof typeof ui;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export async function useTranslations(lang: Language) {
  const translations = await ui[lang]();
  return function t(key: string): string {
    return (translations as Record<string, string>)[key] || key;
  };
}

export function getLocalizedUrl(url: string, lang: Language): string {
  if (lang === defaultLang && !showDefaultLang) return url;
  return `/${lang}${url}`;
}

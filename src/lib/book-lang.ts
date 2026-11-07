import { useEffect, useState } from "react";

// Remembers which book list language (Deutsch/English) the reader last chose.
export type BookLang = "de" | "en";
const KEY = "book-lang";
const EVENT = "book-lang-change";

export const bookListPath = (lang: BookLang) => (lang === "en" ? "/books" : "/buecher");

export function setBookLang(lang: BookLang) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, lang);
  window.dispatchEvent(new Event(EVENT));
}

export function useBookLang(): BookLang {
  const [lang, setLang] = useState<BookLang>("de");
  useEffect(() => {
    const read = () => setLang(localStorage.getItem(KEY) === "en" ? "en" : "de");
    read();
    window.addEventListener(EVENT, read);
    return () => window.removeEventListener(EVENT, read);
  }, []);
  return lang;
}

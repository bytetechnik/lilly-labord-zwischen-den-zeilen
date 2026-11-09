import { books } from "./books";

// Explicit public-only list: every concrete book URL needs its own HTML file.
export const cpanelPaths = [
  "/", "/autorin", "/blog", "/books", "/buchtipp", "/buecher",
  "/datenschutz", "/faq", "/impressum",
  ...books.map((book) => `/buecher/${book.slug}`),
];
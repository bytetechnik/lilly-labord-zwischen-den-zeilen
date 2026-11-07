import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import type { Book } from "@/lib/books";

const nav = [
  { to: "/", label: "Start" },
  { to: "/buecher", label: "Bücher" },
  { to: "/autorin", label: "Über mich" },
  { to: "/buchtipp", label: "Buchtipp" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="font-script text-3xl text-gilded leading-none pt-1">
          Lilly Labord
        </Link>
        <nav className="hidden gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="font-display text-lg tracking-wide text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="font-display text-lg text-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? "✕ Schließen" : "☾ Menü"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t border-border px-6 py-5 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-2xl text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-script text-4xl text-gilded">Lilly Labord</p>
          <p className="mt-3 font-display text-lg italic text-muted-foreground">
            „Schreiben ist die Stimme meiner Seele."
          </p>
        </div>
        <div className="flex flex-col gap-2 font-display text-lg">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-primary">
              {n.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 font-display text-lg">
          <a href="https://www.facebook.com/@LillyLabord/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">Facebook ↗</a>
          <a href="https://www.instagram.com/lillylabord" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">Instagram ↗</a>
          <Link to="/impressum" className="mt-4 text-sm text-muted-foreground hover:text-primary">Impressum</Link>
          <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary">Datenschutz</Link>
        </div>
      </div>
      <p className="pb-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Lilly Labord · Mit Magie & Kaffee geschrieben</p>
    </footer>
  );
}

export function Sparks({ count = 18 }: { count?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="spark"
          style={{
            left: `${(i * 37) % 100}%`,
            animationDuration: `${9 + ((i * 7) % 11)}s`,
            animationDelay: `${(i * 1.3) % 9}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

export function PageTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-40 text-center">
      <Sparks count={10} />
      <p className="animate-rise font-display text-sm uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
      <h1 className="animate-rise mt-4 text-5xl md:text-7xl">{title}</h1>
      <div className="ornament-rule mx-auto mt-6 max-w-xs">✦</div>
      {children && <div className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
    </section>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <Link to="/buecher/$slug" params={{ slug: book.slug }} className="group block">
      <div className="book-tilt overflow-hidden rounded-sm shadow-book">
        <img src={book.cover} alt={book.title} loading="lazy" className="aspect-[2/3] w-full object-cover" />
      </div>
      <p className="mt-5 font-display text-xs uppercase tracking-[0.3em] text-primary">{book.category}</p>
      <h3 className="mt-1 text-2xl transition-colors group-hover:text-primary">{book.title.split(":")[0]}</h3>
    </Link>
  );
}

export function GoldButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 font-display text-lg tracking-wide text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

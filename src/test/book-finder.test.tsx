import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { BookFinder } from "@/components/BookFinder";

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe("Paused recommendation search", () => {
  it.each(["de", "en"] as const)("does not request AI or fabricate matches in %s", (lang) => {
    const fetch = vi.fn(() => Promise.reject(new Error("Network must not be used")));
    vi.stubGlobal("fetch", fetch);
    const { container } = render(<BookFinder lang={lang} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Magic and coffee" } });
    const form = container.querySelector("form");
    if (!form) throw new Error("Search form missing");
    fireEvent.submit(form);
    expect(fetch).not.toHaveBeenCalled();
    expect(container.querySelectorAll("li")).toHaveLength(0);
    expect(screen.getByRole("button", { name: lang === "de" ? "Bücher finden" : "Find books" }).hasAttribute("disabled")).toBe(false);
  });
});
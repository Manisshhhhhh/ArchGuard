import { readFile } from "node:fs/promises";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("ArchGuard portfolio evidence UI", () => {
  it("renders historical proof without an obsolete live API action", () => {
    const markup = renderToStaticMarkup(<App />);

    expect(markup).toContain("Historical GitHub proof");
    expect(markup).toContain("https://github.com/manishsoni-dev/ArchGuard/pull/1");
    expect(markup).toContain("https://github.com/manishsoni-dev/ArchGuard/pull/8");
    expect(markup).not.toContain("Open Live Demo API");
  });

  it("contains no retired API runtime contract", async () => {
    const source = await readFile(new URL("./App.tsx", import.meta.url), "utf8");
    const markup = renderToStaticMarkup(<App />);

    expect(source).not.toContain("fetch(");
    expect(source).not.toContain("arch-guard-1--manishsoni-dev.replit.app");
    expect(source).not.toContain("VITE_ARCHGUARD_API_URL");
    expect(source).not.toContain("Open Live Demo API");
    expect(markup).toContain("Historical backend offline");
    expect(markup).toContain("Static proof cases");
    expect(markup).toContain("Mock and fake providers");
    expect(markup).not.toContain("arch-guard-1--manishsoni-dev.replit.app");
  });
});

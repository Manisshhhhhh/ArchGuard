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
});

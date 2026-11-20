import { describe, expect, it } from "vitest";
import { LEVELS } from "@/content/levels";
import { splitFormulaLine } from "./formula";

describe("splitFormulaLine", () => {
  it("splits the pattern from its trailing gloss", () => {
    expect(splitFormulaLine("pronoun + wá láti + place (I come from Nigeria)")).toEqual({ pattern: "pronoun + wá láti + place", gloss: "I come from Nigeria" });
  });
  it("leaves a line with no gloss alone", () => {
    expect(splitFormulaLine("a + b")).toEqual({ pattern: "a + b", gloss: null });
  });
});

describe("every formula line splits into a pattern and one gloss", () => {
  LEVELS.flatMap((lv) => lv.lessons).forEach((l) => {
    it(l.id, () => {
      for (const seg of (l.primer.formula ?? "").split(";").filter((x) => x.trim())) {
        const { pattern, gloss } = splitFormulaLine(seg);
        expect(pattern, seg).not.toMatch(/[()]/);
        expect(gloss, seg).toBeTruthy();
      }
    });
  });
});

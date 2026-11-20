import { describe, expect, it } from "vitest";
import { LEVELS } from "@/content/levels";
import { splitFormulaLine } from "./formula";

describe("splitFormulaLine", () => {
  it("splits the pattern from its trailing gloss", () => {
    expect(splitFormulaLine("pronoun + wá láti + place (I come from Nigeria)")).toEqual({ pattern: "pronoun + wá láti + place", label: null, gloss: "I come from Nigeria" });
  });
  it("pulls a purpose label out of the gloss", () => {
    expect(splitFormulaLine("kind of place + wo + ni o ti wá (asking: Which town are you from?)")).toEqual({ pattern: "kind of place + wo + ni o ti wá", label: "asking", gloss: "Which town are you from?" });
  });
  it("keeps other colons in the gloss", () => {
    expect(splitFormulaLine("ara + owner (ara mi: myself)").label).toBeNull();
  });
  it("leaves a line with no gloss alone", () => {
    expect(splitFormulaLine("a + b")).toEqual({ pattern: "a + b", label: null, gloss: null });
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

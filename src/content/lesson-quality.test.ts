import { describe, expect, it } from "vitest";
import { LEVELS } from "./levels";

const flat = LEVELS.flatMap((lv) => lv.lessons);

// A formula line is Yoruba shorthand such as "pronoun + wá láti + place". The learner
// cannot read it without an English translation, so every ";" segment carries one in
// parentheses: "pronoun + wá láti + place (I come from Nigeria)".
export const unglossedSegments = (formula: string | undefined): string[] =>
  (formula ?? "").split(";").map((s) => s.trim()).filter((s) => s && !/\([^)]+\)/.test(s));

// Lessons written before this rule. Gloss a lesson's formula, then delete its id here.
// The test below fails if a listed lesson is already glossed, so the list only shrinks.
const FORMULA_GLOSS_BACKLOG = new Set<string>([]);

describe("formula lines are translated", () => {
  flat.forEach((lesson) => {
    const bare = unglossedSegments(lesson.primer.formula);
    if (FORMULA_GLOSS_BACKLOG.has(lesson.id)) {
      it(`${lesson.id} is still on the backlog (remove it from FORMULA_GLOSS_BACKLOG once glossed)`, () => {
        expect(bare.length).toBeGreaterThan(0);
      });
    } else {
      it(`${lesson.id} has an English gloss on every formula line`, () => {
        expect(bare, `add an English gloss in parentheses to: ${bare.join(" | ")}`).toEqual([]);
      });
    }
  });
});

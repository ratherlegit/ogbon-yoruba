import { describe, expect, it } from "vitest";
import { LEVELS } from "@/content/levels";
import type { Lesson, Question } from "@/content/types";
import { isSpokenYoruba } from "./audio-strings";
import { lessonTranslations, translationOf } from "./translations";

const lesson = (id: string): Lesson => LEVELS.flatMap((l) => l.lessons).find((l) => l.id === id)!;
const pick = (prompt: string, choices: string[], answer: number, translation?: string): Question => ({
  type: "pick", prompt, choices, answer, ...(translation ? { translation } : {}),
});

describe("lessonTranslations", () => {
  it("takes English from example sentences", () => {
    const t = lessonTranslations(lesson("gs-5"));
    expect(t.get("mo gbọ́ yorùbá")).toBe("I understand Yoruba");
  });
  it("takes English from table rows, ignoring punctuation and case", () => {
    const t = lessonTranslations(lesson("gs-5"));
    expect(t.get("èdè wo ni o sọ")).toBe("Which language do you speak?");
  });
  it("does not guess for a Listen cell that holds several words", () => {
    const t = lessonTranslations(lesson("gs-3"));
    expect(t.has("o / ó")).toBe(false);
  });
});

describe("translationOf", () => {
  const t = lessonTranslations(lesson("gs-5"));
  it("returns the lesson's English for a pick question's correct Yoruba answer", () => {
    const q = pick("?", ["Mo gbọ́ Yorùbá", "Mo sọ Yorùbá"], 0);
    expect(translationOf(q, "Mo gbọ́ Yorùbá", t)).toBe("I understand Yoruba");
  });
  it("prefers a translation written on the question", () => {
    const q = pick("?", ["Mo gbọ́ Yorùbá", "Mo sọ Yorùbá"], 0, "Custom");
    expect(translationOf(q, "Mo gbọ́ Yorùbá", t)).toBe("Custom");
  });
  it("returns nothing for blank and order questions, or an unknown answer", () => {
    expect(translationOf({ type: "blank", prompt: "___", answer: "wo", choices: ["wo", "mi"] }, "wo", t)).toBeUndefined();
    expect(translationOf({ type: "order", english: "x", words: ["a", "b"], answer: ["a", "b"] }, "a b", t)).toBeUndefined();
    expect(translationOf(pick("?", ["zzz", "yyy"], 0), "zzz", t)).toBeUndefined();
  });
});

describe("every lesson", () => {
  // The five "which one is wrong?" questions have an ungrammatical correct answer, so they must not show a meaning.
  const wrongSentences = ["Mo jẹ́ ní ilé-ìwé", "Mo wà ní níbí", "Ìwé wà ní lórí tábìlì", "Ó sọ ó ti lọ", "Ilé mi tóbi ju ilé rẹ"];
  const all = LEVELS.flatMap((l) => l.lessons);
  it("shows no meaning for a correct answer that is a wrong sentence", () => {
    let seen = 0;
    for (const l of all) {
      const t = lessonTranslations(l);
      for (const q of l.questions) {
        if (q.type !== "pick") continue;
        const a = q.choices[q.answer]!;
        if (wrongSentences.includes(a)) { seen++; expect(translationOf(q, a, t), `${l.id}: ${a}`).toBeUndefined(); }
      }
    }
    expect(seen).toBe(wrongSentences.length);
  });
  it("gives every other Yoruba pick answer a meaning, except a bare prefix", () => {
    const missing: string[] = [];
    for (const l of all) {
      const t = lessonTranslations(l);
      for (const q of l.questions) {
        if (q.type !== "pick") continue;
        const a = q.choices[q.answer]!;
        if (!isSpokenYoruba(a) || wrongSentences.includes(a) || a === "olù-") continue;
        if (!translationOf(q, a, t)) missing.push(`${l.id}: ${a}`);
      }
    }
    expect(missing).toEqual([]);
  });
});

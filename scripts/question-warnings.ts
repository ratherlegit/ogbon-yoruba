// Prints things a person should look at in lesson text. These are hints, not failures:
// each one can be fine, and the checks that must never fail live in src/content/*.test.ts.
//   npm run lesson:warnings
import { readFileSync } from "node:fs";
import { LEVELS } from "../src/content/levels";

// Warnings a person has looked at and decided are fine, as "lesson-id: text". Editing the question or
// sentence makes it show up again. Add to content/REVIEWED-WARNINGS.json only after reading the warning.
const reviewed = new Set<string>(JSON.parse(readFileSync("content/REVIEWED-WARNINGS.json", "utf8")));
const flag = (kind: string, id: string, text: string) => {
  if (!reviewed.has(`${id}: ${text}`)) warnings.push(`[${kind}] ${id}: ${text}`);
};

const warnings: string[] = [];
const words = (s: string) => s.normalize("NFC").toLowerCase().split(/[^\p{L}\p{M}]+/u).filter((w) => w.length > 2);

for (const level of LEVELS) {
  for (const lesson of level.lessons) {
    const id = lesson.id;

    // 1. A pick question whose right answer stands out: the longest choice by a wide margin,
    //    or one that mostly repeats the prompt. Cover the guide and see if it can be guessed.
    lesson.questions.forEach((q, i) => {
      if (q.type !== "pick") return;
      const lens = q.choices.map((c) => c.length);
      const right = lens[q.answer]!;
      if (right === Math.max(...lens) && right > 1.4 * Math.min(...lens)) {
        flag("longest answer", id, q.prompt);
      }
      const prompt = new Set(words(q.prompt));
      const aw = words(q.choices[q.answer]!);
      if (aw.length >= 3 && aw.filter((w) => prompt.has(w)).length / aw.length >= 0.6) {
        flag("answer repeats prompt", id, q.prompt);
      }
    });

    // 2. Absolute words in rule text. Check each one is true, or say where it stops being true.
    const text = [lesson.primer.rule, ...lesson.primer.rules.flatMap((r) => r.explanation)].join(" ");
    // "all" alone is usually a gloss (gbogbo: all), so only flag it when it governs a verb.
    const absolute = /[^.?!]*\b(always|never|every|whenever|all (?:use|are|have|take|go|follow|need|end|start|begin|come))\b[^.?!]*[.?!]/gi;
    for (const m of text.match(absolute) ?? []) {
      if (!/not for every|only for/i.test(m)) flag("absolute claim", id, m.trim());
    }
  }
}

console.log(warnings.join("\n"));
console.log(`\n${warnings.length} warning(s)`);

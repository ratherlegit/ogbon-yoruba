import type { Lesson, Question } from "@/content/types";
import { cleanAnswer } from "./normalize";

// English for a pick question's correct answer, shown under the answer after the learner replies.
// It comes from the lesson itself: an example sentence, or a Yoruba and English pair in a table.

const key = (s: string): string => cleanAnswer(s.replace(/[?!.]+$/, ""));

export type Translations = ReadonlyMap<string, string>;

export function lessonTranslations(lesson: Lesson): Translations {
  const map = new Map<string, string>();
  for (const e of lesson.primer.examples) map.set(key(e.surface), e.english);
  for (const t of lesson.primer.tables ?? []) {
    const yo = t.columns.findIndex((c) => c.yo);
    const en = t.columns.findIndex((c) => !c.yo);
    if (yo < 0 || en < 0) continue;
    for (const row of t.rows) {
      // A Listen cell such as "o / ó" holds several words; give each the same English only if it is alone.
      const cells = row[yo]!.split(" / ");
      if (cells.length !== 1) continue;
      const k = key(cells[0]!);
      if (!map.has(k)) map.set(k, row[en]!);
    }
  }
  return map;
}

export function translationOf(q: Question, expected: string, translations?: Translations): string | undefined {
  if (q.type !== "pick") return undefined;
  return q.translation ?? translations?.get(key(expected));
}

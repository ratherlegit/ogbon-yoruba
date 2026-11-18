import type { Level, Lesson } from "./types";
import { gs1 } from "./lessons/gs-1";
import { gs2 } from "./lessons/gs-2";
import { gs3 } from "./lessons/gs-3";
import { gs4 } from "./lessons/gs-4";
import { gs5 } from "./lessons/gs-5";
import { b1 } from "./lessons/b-1";
import { b2 } from "./lessons/b-2";
import { b3 } from "./lessons/b-3";
import { b4 } from "./lessons/b-4";
import { b5 } from "./lessons/b-5";
import { b6 } from "./lessons/b-6";
import { b7 } from "./lessons/b-7";
import { b8 } from "./lessons/b-8";
import { i1 } from "./lessons/i-1";
import { i2 } from "./lessons/i-2";
import { i3 } from "./lessons/i-3";
import { i4 } from "./lessons/i-4";
import { i5 } from "./lessons/i-5";
import { i6 } from "./lessons/i-6";
import { i7 } from "./lessons/i-7";
import { a1 } from "./lessons/a-1";
import { a2 } from "./lessons/a-2";
import { a3 } from "./lessons/a-3";
import { a4 } from "./lessons/a-4";
import { a5 } from "./lessons/a-5";
import { a6 } from "./lessons/a-6";
import { a7 } from "./lessons/a-7";
import { m1 } from "./lessons/m-1";
import { m2 } from "./lessons/m-2";
import { m3 } from "./lessons/m-3";
import { m4 } from "./lessons/m-4";
import { m5 } from "./lessons/m-5";
import { m6 } from "./lessons/m-6";
import { b9 } from "./lessons/b-9";
import { i8 } from "./lessons/i-8";
import { i9 } from "./lessons/i-9";
import { i10 } from "./lessons/i-10";
import { i11 } from "./lessons/i-11";
import { i12 } from "./lessons/i-12";
import { a8 } from "./lessons/a-8";
import { a9 } from "./lessons/a-9";
import { m7 } from "./lessons/m-7";
import { m8 } from "./lessons/m-8";

export const LEVELS: Level[] = [
  { id: "getting-started", title: "Getting Started", summary: "Sounds, tones, greetings, and pronouns.", lessons: [gs1, gs2, gs3, gs4, gs5] },
  { id: "beginner", title: "Beginner", summary: "Simple sentences, negation, and questions.", lessons: [b1, b2, b3, b4, b5, b6, b7, b8, b9] },
  { id: "intermediate", title: "Intermediate", summary: "Tense, possession, and building nouns.", lessons: [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12] },
  { id: "advanced", title: "Advanced", summary: "Contraction, verbal nouns, and longer clauses.", lessons: [a1, a2, a3, a4, a5, a6, a7, a8, a9] },
  { id: "mastery", title: "Mastery", summary: "Fused forms, focus, and proverbs.", lessons: [m1, m2, m3, m4, m5, m6, m7, m8] },
];

export const getLevel = (id: string): Level | undefined => LEVELS.find((l) => l.id === id);

export const getLesson = (levelId: string, lessonId: string): Lesson | undefined =>
  getLevel(levelId)?.lessons.find((l) => l.id === lessonId);

export function nextLessonPath(levelId: string, lessonId: string): { levelId: string; lessonId: string } | null {
  const flat = LEVELS.flatMap((lv) => lv.lessons.map((ls) => ({ levelId: lv.id, lessonId: ls.id })));
  const i = flat.findIndex((x) => x.levelId === levelId && x.lessonId === lessonId);
  return i >= 0 && i + 1 < flat.length ? flat[i + 1]! : null;
}

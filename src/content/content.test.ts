import { describe, expect, it } from "vitest";
import { LEVELS, getLesson, getLevel, nextLessonPath } from "./levels";
import { validateLesson } from "./validate";

describe("content", () => {
  it("has the five levels in order", () => {
    expect(LEVELS.map((l) => l.id)).toEqual(["getting-started", "beginner", "intermediate", "advanced", "mastery"]);
  });

  for (const level of LEVELS) {
    for (const lesson of level.lessons) {
      it(`${lesson.id} passes validation`, () => {
        expect(validateLesson(lesson)).toEqual([]);
      });
      it(`${lesson.id} belongs to level ${level.id}`, () => {
        expect(lesson.level).toBe(level.id);
      });
    }
  }

  it("has unique lesson ids", () => {
    const ids = LEVELS.flatMap((l) => l.lessons.map((x) => x.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("looks up levels and lessons, and returns undefined for unknown ids", () => {
    expect(getLevel("getting-started")?.title).toBe("Getting Started");
    expect(getLesson("getting-started", "gs-1")?.id).toBe("gs-1");
    expect(getLesson("getting-started", "nope")).toBeUndefined();
    expect(getLevel("nope")).toBeUndefined();
  });

  it("has at least four lessons in every level", () => {
    for (const level of LEVELS) expect(level.lessons.length, level.id).toBeGreaterThanOrEqual(4);
  });

  it("finds the next lesson, crossing level boundaries, and null at the end", () => {
    expect(nextLessonPath("getting-started", "gs-1")).toEqual({ levelId: "getting-started", lessonId: "gs-2" });
    expect(nextLessonPath("getting-started", "gs-4")).toEqual({ levelId: "getting-started", lessonId: "gs-5" });
    expect(nextLessonPath("getting-started", "gs-5")).toEqual({ levelId: "beginner", lessonId: "b-1" });
    expect(nextLessonPath("beginner", "b-8")).toEqual({ levelId: "intermediate", lessonId: "i-1" });
    expect(nextLessonPath("advanced", "a-4")).toEqual({ levelId: "advanced", lessonId: "a-5" });
    expect(nextLessonPath("advanced", "a-7")).toEqual({ levelId: "mastery", lessonId: "m-1" });
    expect(nextLessonPath("mastery", "m-4")).toEqual({ levelId: "mastery", lessonId: "m-5" });
    expect(nextLessonPath("mastery", "m-6")).toBeNull();
    expect(nextLessonPath("mastery", "nope")).toBeNull();
  });
});

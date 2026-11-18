import { describe, expect, it } from "vitest";
import { DIALOGUES, SITUATIONS } from "./dialogues";
import { validateDialogues } from "./validate-dialogues";
import { LEVEL_IDS } from "./types";

const RANGE: Record<string, [number, number]> = {
  "getting-started": [4, 6],
  beginner: [6, 8],
  intermediate: [8, 10],
  advanced: [8, 10],
  mastery: [8, 10],
};

describe("DIALOGUES", () => {
  it("passes the validator", () => {
    expect(validateDialogues(SITUATIONS, DIALOGUES)).toEqual([]);
  });
  it("has at least one situation per level, in level order, with at least three conversations in each", () => {
    const order = SITUATIONS.map((s) => LEVEL_IDS.indexOf(s.level));
    expect(order, "situations are listed in level order").toEqual([...order].sort((a, b) => a - b));
    expect(new Set(SITUATIONS.map((s) => s.level)), "every level has a situation").toEqual(new Set(LEVEL_IDS));
    for (const s of SITUATIONS) expect(DIALOGUES.filter((d) => d.situationId === s.id).length, s.id).toBeGreaterThanOrEqual(3);
    expect(DIALOGUES.every((d) => SITUATIONS.some((s) => s.id === d.situationId))).toBe(true);
  });
  it("keeps the early levels shorter", () => {
    for (const d of DIALOGUES) {
      const [min, max] = RANGE[d.level]!;
      expect(d.lines.length, d.id).toBeGreaterThanOrEqual(min);
      expect(d.lines.length, d.id).toBeLessThanOrEqual(max);
    }
  });
  it("marks every conversation needs-review", () => {
    expect(DIALOGUES.every((d) => d.confidence === "needs-review")).toBe(true);
  });
  it("has the same two speakers throughout each situation", () => {
    for (const s of SITUATIONS) {
      const names = new Set(DIALOGUES.filter((d) => d.situationId === s.id).flatMap((d) => d.lines.map((l) => l.speaker)));
      expect(names.size, s.id).toBe(2);
    }
  });
});

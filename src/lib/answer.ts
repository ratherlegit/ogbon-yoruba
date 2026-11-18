import { cleanAnswer, stripMarks, stripTones } from "./normalize";

export type AnswerKind = "correct" | "tone" | "mark" | "wrong";

export function checkAnswer(given: string, expected: string): AnswerKind {
  const g = cleanAnswer(given);
  const e = cleanAnswer(expected);
  if (g === e) return "correct";
  if (stripTones(g) === stripTones(e)) return "tone";
  if (stripMarks(g) === stripMarks(e)) return "mark";
  return "wrong";
}

// The feedback split into what to say and the answer to show, so the screen can lay them out on
// separate lines instead of one run of text. answer is null when the reply was right.
export function feedbackParts(kind: AnswerKind, expected: string): { message: string; answer: string | null } {
  switch (kind) {
    case "correct":
      return { message: "Correct.", answer: null };
    case "tone":
      return { message: "Right letters, wrong tone. Check the accent marks on each syllable.", answer: expected };
    case "mark":
      return { message: "Close. Check the dots under ẹ, ọ and ṣ.", answer: expected };
    case "wrong":
      return { message: "Not quite.", answer: expected };
  }
}

export function feedbackFor(kind: AnswerKind, expected: string): string {
  const { message, answer } = feedbackParts(kind, expected);
  return answer === null ? message : `${message} Answer: ${answer}`;
}

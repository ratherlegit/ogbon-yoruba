import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { Question } from "@/content/types";
import { Activity } from "./Activity";

const questions: Question[] = [
  { type: "blank", prompt: "Fish is ___ja.", answer: "ẹ", choices: ["ẹ", "e", "i"] },
  { type: "pick", prompt: "Which is child?", choices: ["ọmọ", "ẹja"], answer: 0 },
  { type: "order", english: "I come from Nigeria", words: ["láti", "wá", "Nàìjíríà", "Mo"], answer: ["Mo", "wá", "láti", "Nàìjíríà"] },
];

describe("Activity", () => {
  it("walks through all questions and reports the score and missed questions", async () => {
    const user = userEvent.setup();
    const onDone = vi.fn();
    render(<Activity questions={questions} onDone={onDone} />);

    await user.click(screen.getByRole("button", { name: "ẹ" }));
    expect(screen.getByText("Correct.")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Continue" }));

    await user.click(screen.getByRole("button", { name: "ẹja" }));
    expect(screen.getByText(/Not quite/)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Continue" }));

    for (const w of ["mo", "wá", "láti", "nàìjíríà"]) {
      await user.click(screen.getByRole("button", { name: w }));
    }
    await user.click(screen.getByRole("button", { name: "Check" }));
    expect(screen.getByText("Correct.")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "See results" }));

    expect(onDone).toHaveBeenCalledTimes(1);
    const result = onDone.mock.calls[0]![0];
    expect(result.correct).toBe(2);
    expect(result.total).toBe(3);
    expect(result.missed).toEqual([questions[1]]);
  });

  it("shows capitalised order words in lowercase and still grades them", async () => {
    const user = userEvent.setup();
    const onDone = vi.fn();
    const q: Question = { type: "order", english: "I eat", words: ["jẹun", "Mo"], answer: ["Mo", "jẹun"] };
    render(<Activity questions={[q]} onDone={onDone} />);
    const bank = screen.getAllByTestId("bank-word").map((b) => b.textContent);
    expect(bank).toEqual(["jẹun", "mo"]);
    await user.click(screen.getByRole("button", { name: "mo" }));
    await user.click(screen.getByRole("button", { name: "jẹun" }));
    await user.click(screen.getByRole("button", { name: "Check" }));
    expect(screen.getByText("Correct.")).toBeInTheDocument();
  });

  it("offers Listen for the correct answer of pick and order questions, not blank ones", async () => {
    const user = userEvent.setup();
    render(<Activity questions={questions} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "ẹ" }));
    expect(screen.queryByRole("button", { name: /^Listen/ })).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Continue" }));
    expect(screen.queryByRole("button", { name: /^Listen/ })).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "ọmọ" }));
    expect(screen.getByRole("button", { name: "Listen to ọmọ" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Continue" }));
    for (const w of ["mo", "wá", "láti", "nàìjíríà"]) await user.click(screen.getByRole("button", { name: w }));
    await user.click(screen.getByRole("button", { name: "Check" }));
    expect(screen.getByRole("button", { name: "Listen to Mo wá láti Nàìjíríà" })).toBeInTheDocument();
  });

  it("disables answering after an answer is given", async () => {
    const user = userEvent.setup();
    render(<Activity questions={questions} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "e" }));
    expect(screen.getByRole("button", { name: "ẹ" })).toBeDisabled();
  });

  it("lets a learner remove a placed word in the order question", async () => {
    const user = userEvent.setup();
    render(<Activity questions={[questions[2]!]} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "wá" }));
    await user.click(screen.getByRole("button", { name: "Remove wá" }));
    expect(screen.getAllByTestId("bank-word")).toHaveLength(4);
  });

  it("explains a tone-only mistake", async () => {
    const user = userEvent.setup();
    const q: Question = { type: "pick", prompt: "Which means vehicle?", choices: ["ọkọ", "ọkọ̀"], answer: 1 };
    render(<Activity questions={[q]} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "ọkọ" }));
    expect(screen.getByText(/wrong tone/i)).toBeInTheDocument();
  });

  it("marks answers with text, not color alone", async () => {
    const user = userEvent.setup();
    render(<Activity questions={questions} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "e" }));
    const choices = screen.getAllByTestId("choice");
    const right = choices.find((c) => c.getAttribute("data-state") === "correct")!;
    const wrong = choices.find((c) => c.getAttribute("data-state") === "wrong")!;
    expect(right).toHaveTextContent("✓");
    expect(wrong).toHaveTextContent("✗");
  });
});

describe("Activity answer meaning", () => {
  const q: Question = { type: "pick", prompt: "Which is understand?", choices: ["Mo gbọ́ Yorùbá", "Mo sọ Yorùbá"], answer: 0 };
  const t = new Map([["mo gbọ́ yorùbá", "I understand Yoruba"]]);

  it("shows the English meaning under the answer after a wrong reply", async () => {
    const user = userEvent.setup();
    render(<Activity questions={[q]} translations={t} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "Mo sọ Yorùbá" }));
    expect(screen.getByTestId("feedback-message")).toHaveTextContent(/^Not quite\.$/);
    expect(screen.getByTestId("feedback-answer")).toHaveTextContent("Answer: Mo gbọ́ Yorùbá");
    expect(screen.getByTestId("answer-meaning")).toHaveTextContent("Means: I understand Yoruba");
  });

  it("shows it after a right reply too, without changing the Correct. text", async () => {
    const user = userEvent.setup();
    render(<Activity questions={[q]} translations={t} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "Mo gbọ́ Yorùbá" }));
    expect(screen.getByText("Correct.")).toBeInTheDocument();
    expect(screen.getByTestId("answer-meaning")).toHaveTextContent("I understand Yoruba");
  });

  it("shows no meaning when there is no translation, and none for blank questions", async () => {
    const user = userEvent.setup();
    const blank: Question = { type: "blank", prompt: "Fish is ___ja.", answer: "ẹ", choices: ["ẹ", "e"] };
    const { unmount } = render(<Activity questions={[q]} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "Mo sọ Yorùbá" }));
    expect(screen.queryByTestId("answer-meaning")).not.toBeInTheDocument();
    unmount();
    render(<Activity questions={[blank]} translations={new Map([["ẹ", "x"]])} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "ẹ" }));
    expect(screen.queryByTestId("answer-meaning")).not.toBeInTheDocument();
  });
});

describe("Activity feedback layout", () => {
  it("puts the message, the answer and the meaning on separate lines, in that order", async () => {
    const user = userEvent.setup();
    const q: Question = { type: "pick", prompt: "Which?", choices: ["Mo gbọ́ Yorùbá", "Mo sọ Yorùbá"], answer: 0 };
    render(<Activity questions={[q]} translations={new Map([["mo gbọ́ yorùbá", "I understand Yoruba"]])} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "Mo sọ Yorùbá" }));
    const box = screen.getByRole("status");
    const rows = [...box.children].map((c) => c.getAttribute("data-testid"));
    expect(rows).toEqual(["feedback-message", "feedback-answer", "answer-meaning"]);
    expect(screen.getByTestId("feedback-message")).not.toHaveTextContent("Answer");
  });

  it("keeps long tone and dot messages apart from the answer too", async () => {
    const user = userEvent.setup();
    const q: Question = { type: "blank", prompt: "Child: ___", answer: "ọmọ", choices: ["omo", "ọmọ", "ọmo"] };
    render(<Activity questions={[q]} onDone={() => {}} />);
    await user.click(screen.getByRole("button", { name: "omo" }));
    expect(screen.getByTestId("feedback-message")).toHaveTextContent(/dots under/);
    expect(screen.getByTestId("feedback-answer")).toHaveTextContent("Answer: ọmọ");
  });
});

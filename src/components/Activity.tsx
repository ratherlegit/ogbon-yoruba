import { useState } from "react";
import type { Question } from "@/content/types";
import { checkAnswer, feedbackParts, type AnswerKind } from "@/lib/answer";
import { ChoiceQuestion } from "./ChoiceQuestion";
import { OrderQuestion } from "./OrderQuestion";
import { AudioButton } from "./AudioButton";
import { playSfx } from "@/lib/sfx";
import { translationOf, type Translations } from "@/lib/translations";

export type ActivityResult = { correct: number; total: number; missed: Question[] };

function expectedOf(q: Question): string {
  if (q.type === "blank") return q.answer;
  if (q.type === "pick") return q.choices[q.answer]!;
  return q.answer.join(" ");
}

type ActivityProps = {
  questions: Question[];
  onDone: (r: ActivityResult) => void;
  // English for Yoruba pick answers, from the lesson. Omit for activities that have none.
  translations?: Translations;
};

export function Activity({ questions, onDone, translations }: ActivityProps) {
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [kind, setKind] = useState<AnswerKind | null>(null);
  const [correct, setCorrect] = useState(0);
  const [missed, setMissed] = useState<Question[]>([]);

  const q = questions[i]!;
  const expected = expectedOf(q);
  const answered = kind !== null;
  const meaning = translationOf(q, expected, translations);
  const parts = feedbackParts(kind ?? "wrong", expected);
  const last = i === questions.length - 1;

  function submit(given: string) {
    const k = checkAnswer(given, expected);
    setChosen(given);
    setKind(k);
    playSfx(k === "correct" ? "correct" : "wrong");
    if (k === "correct") setCorrect((c) => c + 1);
    else setMissed((m) => [...m, q]);
  }

  function next() {
    if (last) {
      onDone({ correct, total: questions.length, missed });
      return;
    }
    setI(i + 1);
    setChosen(null);
    setKind(null);
  }

  return (
    <section style={{ display: "grid", gap: "1rem" }}>
      <div className="progressbar" role="progressbar" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={i + 1}>
        <div style={{ width: `${((i + (answered ? 1 : 0)) / questions.length) * 100}%` }} />
      </div>
      <p className="muted" style={{ margin: 0 }}>Question {i + 1} of {questions.length}</p>

      {q.type === "order" ? (
        <OrderQuestion key={i} english={q.english} words={q.words} answer={q.answer} seed={`${i}:${q.answer.join("")}`} disabled={answered} onSubmit={submit} />
      ) : (
        <ChoiceQuestion
          key={i}
          prompt={q.prompt}
          choices={q.choices}
          chosen={chosen}
          correct={expected}
          onChoose={submit}
        />
      )}

      {answered && (
        <div
          className="card"
          role="status"
          style={{ borderColor: kind === "correct" ? "var(--accent)" : "var(--danger)", display: "grid", gap: "0.65rem" }}
        >
          {parts.answer === null ? (
            <div className="with-audio">
              <p style={{ margin: 0, fontWeight: 700 }} className="yo">{parts.message}</p>
              {q.type !== "blank" && <AudioButton text={expected} />}
            </div>
          ) : (
            <>
              <p style={{ margin: 0, fontWeight: 700 }} className="yo" data-testid="feedback-message">{parts.message}</p>
              <div className="with-audio" data-testid="feedback-answer">
                <p style={{ margin: 0, fontSize: "1.15em" }} className="yo">
                  <span className="muted">Answer: </span>
                  <strong>{parts.answer}</strong>
                </p>
                {q.type !== "blank" && <AudioButton text={expected} />}
              </div>
            </>
          )}
          {meaning && (
            <p className="muted" data-testid="answer-meaning" style={{ margin: 0 }}>
              Means: {meaning}
            </p>
          )}
        </div>
      )}

      {answered && (
        <button className="btn btn-primary" onClick={next}>{last ? "See results" : "Continue"}</button>
      )}
    </section>
  );
}

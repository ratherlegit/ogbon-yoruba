import type { Lesson } from "../types";

export const i8: Lesson = {
  id: "i-8",
  level: "intermediate",
  title: "Let me and let us: jẹ́ kí",
  sources: [
    "Written for this site from commonly taught forms (jẹ́ kí + subject + verb for let; ká as the joined form of kí á for let us). No published source was consulted. Every line needs a native speaker's check, especially the tones of jẹ́ and ká and whether jẹ́ ká or jẹ́ kí a is preferred.",
    "Builds on Beginner 5 (commands), Beginner 8 (a verb after another word) and the pronoun n from Beginner 2. A later lesson, Mastery 5, uses the same kí for wishes and blessings.",
  ],
  primer: {
    rule: "Put jẹ́ kí before a subject and a verb to say let someone do something. For let me use jẹ́ kí n. For let us use the joined form jẹ́ ká.",
    formula: "jẹ́ kí + subject + verb (Let him come); jẹ́ kí n + verb (Let me go); jẹ́ ká + verb (Let us go)",
    tables: [
      {
        id: "let-sentences",
        title: "Let me, let him, let us",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["Let me go", "Jẹ́ kí n lọ"],
          ["Let me eat", "Jẹ́ kí n jẹun"],
          ["Let me read", "Jẹ́ kí n kà ìwé"],
          ["Let him come", "Jẹ́ kí ó wá"],
          ["Let her sleep", "Jẹ́ kí ó sùn"],
          ["Let them go", "Jẹ́ kí wọ́n lọ"],
          ["Let us go", "Jẹ́ ká lọ"],
          ["Let us eat", "Jẹ́ ká jẹun"],
        ],
        note: "ká is kí and á (we) joined into one syllable.",
      },
    ],
    rules: [
      {
        id: "je-ki",
        title: "jẹ́ kí starts the request",
        explanation: [
          "Jẹ́ kí ó sùn: let her sleep.",
          "After jẹ́ kí put the person, then the verb.",
          "The verb does not change.",
        ],
      },
      {
        id: "ki-n",
        title: "Use n after kí, not mo",
        explanation: [
          "For me, use n: Jẹ́ kí n lọ.",
          "Do not use mo here. Mo is for ordinary statements.",
        ],
      },
      {
        id: "je-ka",
        title: "Let us is jẹ́ ká",
        explanation: [
          "Jẹ́ ká lọ: let us go.",
          "kí á joins into ká, so there is no separate á.",
          "It is the usual way to suggest doing something together.",
        ],
      },
    ],
    examples: [
      {
        id: "je-ki-n-lo", surface: "Jẹ́ kí n lọ", english: "Let me go",
        parts: [
          { text: "Jẹ́ kí", gloss: "let", role: "particle" },
          { text: "n", gloss: "I (after kí)", role: "pronoun" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm n after kí.",
      },
      {
        id: "je-ki-o-wa", surface: "Jẹ́ kí ó wá", english: "Let him come",
        parts: [
          { text: "Jẹ́ kí", gloss: "let", role: "particle" },
          { text: "ó", gloss: "he, she, it", role: "pronoun" },
          { text: "wá", gloss: "come", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones.",
      },
      {
        id: "je-ka-lo", surface: "Jẹ́ ká lọ", english: "Let us go",
        parts: [
          { text: "Jẹ́", gloss: "let", role: "particle" },
          { text: "ká", gloss: "kí á, we", role: "particle" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm ká as the joined form.",
      },
      {
        id: "je-ka-jeun", surface: "Jẹ́ ká jẹun", english: "Let us eat",
        parts: [
          { text: "Jẹ́", gloss: "let", role: "particle" },
          { text: "ká", gloss: "kí á, we", role: "particle" },
          { text: "jẹun", gloss: "eat", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones.",
      },
    ],
    commonMistake: {
      wrong: "Jẹ́ kí mo lọ",
      right: "Jẹ́ kí n lọ",
      why: "After kí, I is n. Mo belongs in ordinary statements such as Mo lọ.",
    },
  },
  questions: [
    { type: "pick", prompt: "Which one means \"Let me read\"?", choices: ["Jẹ́ kí n kà ìwé", "Jẹ́ ká kà ìwé", "Mo fẹ́ kà ìwé"], answer: 0, wordId: "je-ki-n-lo" },
    { type: "pick", prompt: "You want to suggest that you and a friend go together. What do you say?", choices: ["Jẹ́ ká lọ", "Jẹ́ kí n lọ", "Jẹ́ kí ó lọ"], answer: 0, wordId: "je-ka-lo" },
    { type: "blank", prompt: "Jẹ́ kí ___ lọ. (Let me go.)", answer: "n", choices: ["n", "mo", "á"], wordId: "je-ki-n-lo" },
    { type: "blank", prompt: "Jẹ́ ___ jẹun. (Let us eat.)", answer: "ká", choices: ["ká", "kí n", "kí ó"], wordId: "je-ka-jeun" },
    { type: "pick", prompt: "What is ká made of?", choices: ["kí and á joined together", "kí and n joined together", "kí and ó joined together"], answer: 0, wordId: "je-ka-lo" },
    { type: "pick", prompt: "Which one lets someone else come?", choices: ["Jẹ́ kí ó wá", "Jẹ́ kí n wá", "Jẹ́ ká wá"], answer: 0, wordId: "je-ki-o-wa" },
    { type: "order", english: "Let me eat", words: ["n", "jẹun", "Jẹ́", "kí"], answer: ["Jẹ́", "kí", "n", "jẹun"] },
    { type: "order", english: "Let them go", words: ["lọ", "kí", "Jẹ́", "wọ́n"], answer: ["Jẹ́", "kí", "wọ́n", "lọ"] },
  ],
};

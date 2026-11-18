import type { Lesson } from "../types";

export const b8: Lesson = {
  id: "b-8",
  level: "beginner",
  title: "Wanting to do something: fẹ́ and a verb",
  sources: [
    "Written for this site from commonly taught forms (fẹ́ followed by a verb for want to; kò fẹ́ for do not want to). No published source was consulted for this lesson. Every line needs a native speaker's check, especially the tones on fẹ́, jẹun and sùn.",
    "COERLL, Yorùbá Yé Mi, Chapter 1, Lesson 2, page 35 (cited in Beginner 2): N kò fẹ́ jẹ búrẹ́dì (I do not want to eat bread). Beginner 4 already shows Ṣé o fẹ́ omi? and N kò fẹ́ omi with a thing after fẹ́. This lesson teaches fẹ́ with a verb, and how it differs from fẹ́ràn (like) in Getting Started 4.",
  ],
  primer: {
    rule: "Put fẹ́ before a verb to say you want to do something. fẹ́ràn (like) goes with a thing, not with a verb.",
    formula: "subject + fẹ́ + verb; subject + kò fẹ́ + verb; ṣé + subject + fẹ́ + verb?",
    tables: [
      {
        id: "want-verbs",
        title: "Things you can want to do",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["eat", "jẹun"],
          ["go", "lọ"],
          ["come", "wá"],
          ["sleep", "sùn"],
          ["read", "kà"],
          ["buy", "ra"],
        ],
        note: "jẹun is eat as an action by itself. With a thing, use jẹ: Mo fẹ́ jẹ ẹja.",
      },
      {
        id: "want-sentences",
        title: "Want, do not want, and like",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["I want to go", "Mo fẹ́ lọ"],
          ["She wants to eat", "Ó fẹ́ jẹun"],
          ["We want to sleep", "A fẹ́ sùn"],
          ["I do not want to eat", "N kò fẹ́ jẹun"],
          ["Do you want to go?", "Ṣé o fẹ́ lọ?"],
          ["I want to eat fish", "Mo fẹ́ jẹ ẹja"],
          ["I like fish", "Mo fẹ́ràn ẹja"],
        ],
        note: "Mo fẹ́ jẹ ẹja is about now. Mo fẹ́ràn ẹja is about what you like.",
      },
    ],
    rules: [
      {
        id: "fe-verb",
        title: "fẹ́ + verb means want to",
        explanation: [
          "Put fẹ́ right before the verb: Mo fẹ́ lọ, I want to go.",
          "It uses the same short pronouns as other verbs: mo, o, ó, a.",
        ],
      },
      {
        id: "ko-fe",
        title: "kò goes before fẹ́",
        explanation: [
          "N kò fẹ́ jẹun means I do not want to eat.",
          "It is not the same as N kò jẹun, which says I did not eat.",
        ],
      },
      {
        id: "se-o-fe",
        title: "Start with ṣé to ask",
        explanation: [
          "Ṣé o fẹ́ lọ? asks if someone wants to go.",
          "It is not Ṣé o ń lọ?, which asks if they are going.",
        ],
      },
      {
        id: "fe-vs-feran",
        title: "fẹ́ is for an action, fẹ́ràn is for a thing",
        explanation: [
          "Mo fẹ́ jẹ ẹja: I want to eat fish, now.",
          "Mo fẹ́ràn ẹja: I like fish.",
          "fẹ́ràn needs a thing after it. Do not put a verb after it.",
        ],
      },
    ],
    examples: [
      {
        id: "mo-fe-lo", surface: "Mo fẹ́ lọ", english: "I want to go",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "fẹ́", gloss: "want to", role: "verb" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Also appears in the sentence Mo fẹ́ lọ, ṣùgbọ́n òjò ń rọ̀ in Mastery 3. Confirm the tone of fẹ́.",
      },
      {
        id: "o-fe-jeun", surface: "Ó fẹ́ jẹun", english: "She wants to eat",
        parts: [
          { text: "Ó", gloss: "he, she, it", role: "pronoun" },
          { text: "fẹ́", gloss: "want to", role: "verb" },
          { text: "jẹun", gloss: "eat", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on jẹun.",
      },
      {
        id: "n-ko-fe-jeun", surface: "N kò fẹ́ jẹun", english: "I do not want to eat",
        parts: [
          { text: "N", gloss: "I (form used before kò)", role: "pronoun" },
          { text: "kò", gloss: "not", role: "negation" },
          { text: "fẹ́", gloss: "want to", role: "verb" },
          { text: "jẹun", gloss: "eat", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Built on N kò fẹ́ jẹ búrẹ́dì (COERLL, page 35). Confirm the tones.",
      },
      {
        id: "se-o-fe-lo", surface: "Ṣé o fẹ́ lọ", english: "Do you want to go?",
        parts: [
          { text: "Ṣé", gloss: "starts a yes or no question", role: "question" },
          { text: "o", gloss: "you", role: "pronoun" },
          { text: "fẹ́", gloss: "want to", role: "verb" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Same pattern as Ṣé o fẹ́ omi? in Beginner 4. Confirm the tones.",
      },
      {
        id: "mo-fe-je-eja", surface: "Mo fẹ́ jẹ ẹja", english: "I want to eat fish",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "fẹ́", gloss: "want to", role: "verb" },
          { text: "jẹ", gloss: "eat", role: "verb" },
          { text: "ẹja", gloss: "fish", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm that jẹ (not jẹun) is used before an object.",
      },
    ],
    commonMistake: {
      wrong: "Mo fẹ́ràn lọ",
      right: "Mo fẹ́ lọ",
      why: "fẹ́ràn means like and goes with a thing. For an action you want to do, use fẹ́ and then the verb.",
    },
  },
  questions: [
    { type: "blank", prompt: "Mo ___ lọ. (I want to go.)", answer: "fẹ́", choices: ["fẹ́", "fẹ́ràn", "ní"], wordId: "mo-fe-lo" },
    { type: "blank", prompt: "Mo ___ ẹja. (I like fish.)", answer: "fẹ́ràn", choices: ["fẹ́", "fẹ́ràn", "wà"], wordId: "mo-fe-je-eja" },
    { type: "blank", prompt: "Ó ___ jẹun. (She wants to eat.)", answer: "fẹ́", choices: ["fẹ́", "ń", "kò"], wordId: "o-fe-jeun" },
    { type: "pick", prompt: "Which says someone does not want to eat?", choices: ["N kò fẹ́ jẹun", "N kò jẹun", "N kò fẹ́ràn jẹun"], answer: 0, wordId: "n-ko-fe-jeun" },
    { type: "pick", prompt: "Why is Mo fẹ́ràn lọ wrong?", choices: ["fẹ́ràn goes with a thing, not an action", "lọ cannot follow mo", "fẹ́ràn must come last"], answer: 0 },
    { type: "pick", prompt: "Which question asks if someone wants to sleep?", choices: ["Ṣé o fẹ́ sùn?", "Ṣé o ń sùn?", "Ṣé o fẹ́ràn sùn?"], answer: 0, wordId: "se-o-fe-lo", translation: "Do you want to sleep?" },
    { type: "order", english: "I do not want to eat", words: ["jẹun", "kò", "N", "fẹ́"], answer: ["N", "kò", "fẹ́", "jẹun"] },
    { type: "order", english: "Do you want to go?", words: ["lọ", "fẹ́", "o", "Ṣé"], answer: ["Ṣé", "o", "fẹ́", "lọ"] },
  ],
};

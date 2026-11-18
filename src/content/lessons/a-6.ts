import type { Lesson } from "../types";

export const a6: Lesson = {
  id: "a-6",
  level: "advanced",
  title: "Can and cannot: lè",
  sources: [
    "COERLL, Yorùbá Yé Mi (University of Texas at Austin), Chapter 10, page 241: Ìmọ́tótó ló lè ṣẹ́gun àrùn gbogbo (cleanliness can conquer every disease). The Advanced vocab sentences Eku lè wọ inú ihò kékeré tí ológbò kò lè wọ̀ (a mouse can enter a small hole that a cat cannot) and Ìrora eyín mi pọ̀ débi pé n kò lè jẹun (my toothache is so bad that I cannot eat) use lè and kò lè the same way. The lesson's own sentences were written for this site from those patterns. Every line needs a native speaker's check, especially the tone on lè and whether Ó lè wá is heard as may as well as can.",
    "Builds on kò and the n form of mo (Beginner 2), ṣé questions (Beginner 4), fẹ́ and a verb (Beginner 8) and ní láti and gbọ́dọ̀ (Intermediate 7). This lesson teaches can; those teach want and must.",
  ],
  primer: {
    rule: "Put lè before a verb to say someone can do it. For cannot, say kò lè. lè says you are able, not that you want to or must.",
    formula: "subject + lè + verb; subject + kò lè + verb; ṣé + subject + lè + verb?",
    tables: [
      {
        id: "can-sentences",
        title: "Can and cannot",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["I can go", "Mo lè lọ"],
          ["She can read", "Ó lè kà ìwé"],
          ["I cannot go", "N kò lè lọ"],
          ["We cannot sleep", "A ò lè sùn"],
          ["Can you come?", "Ṣé o lè wá?"],
          ["Yes, I can come", "Bẹ́ẹ̀ ni, mo lè wá"],
          ["No, I cannot come", "Rárá, n kò lè wá"],
        ],
        note: "lè is always followed by a verb: Mo lè lọ.",
      },
      {
        id: "four-small-words",
        title: "Four small words before a verb",
        columns: [{ label: "Meaning" }, { label: "Yoruba", yo: true }, { label: "Learned in" }],
        listen: 1,
        rows: [
          ["I want to go", "Mo fẹ́ lọ", "Beginner 8"],
          ["I have to go", "Mo ní láti lọ", "Intermediate 7"],
          ["I must go", "Mo gbọ́dọ̀ lọ", "Intermediate 7"],
          ["I can go", "Mo lè lọ", "this lesson"],
        ],
        note: "Each one tells you something different about going: want, have to, must, able.",
      },
    ],
    rules: [
      {
        id: "le-can",
        title: "lè means can",
        explanation: [
          "Put lè right before the verb: Mo lè lọ.",
          "It says you are able to do it, or that it is possible.",
        ],
      },
      {
        id: "ko-le",
        title: "kò lè means cannot",
        explanation: [
          "Put kò before lè: N kò lè lọ.",
          "mo becomes n before kò, and kò can shorten to ò: A ò lè sùn.",
        ],
      },
      {
        id: "le-question",
        title: "Start with ṣé to ask",
        explanation: [
          "Ṣé o lè wá? asks if someone can come.",
          "Answer with mo lè wá, or n kò lè wá.",
        ],
      },
      {
        id: "cannot-vs-must-not",
        title: "Cannot is not must not",
        explanation: [
          "N kò lè lọ: I am unable to go.",
          "N kò gbọ́dọ̀ lọ: I am not allowed to go.",
        ],
      },
      {
        id: "le-may",
        title: "lè can also mean may",
        explanation: [
          "Ó lè wá: he can come, or he may come.",
          "Context tells you which.",
        ],
      },
    ],
    examples: [
      {
        id: "mo-le-lo", surface: "Mo lè lọ", english: "I can go",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "lè", gloss: "can", role: "verb" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tone on lè.",
      },
      {
        id: "n-ko-le-lo", surface: "N kò lè lọ", english: "I cannot go",
        parts: [
          { text: "N", gloss: "I (form used before kò)", role: "pronoun" },
          { text: "kò", gloss: "not", role: "negation" },
          { text: "lè", gloss: "can", role: "verb" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Same pattern as N kò jẹ ẹja (Beginner 2). The Advanced vocab sentence Ìrora eyín mi pọ̀ débi pé n kò lè jẹun uses the same form.",
      },
      {
        id: "a-o-le-sun", surface: "A ò lè sùn", english: "We cannot sleep",
        parts: [
          { text: "A", gloss: "we", role: "pronoun" },
          { text: "ò", gloss: "not (short form of kò)", role: "negation" },
          { text: "lè", gloss: "can", role: "verb" },
          { text: "sùn", gloss: "sleep", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Built from A ò lọ (Beginner 2). Confirm the tones.",
      },
      {
        id: "se-o-le-wa", surface: "Ṣé o lè wá", english: "Can you come?",
        parts: [
          { text: "Ṣé", gloss: "starts a yes or no question", role: "question" },
          { text: "o", gloss: "you", role: "pronoun" },
          { text: "lè", gloss: "can", role: "verb" },
          { text: "wá", gloss: "come", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm Ṣé o lè wá? is natural.",
      },
      {
        id: "o-le-ka-iwe", surface: "Ó lè kà ìwé", english: "She can read",
        parts: [
          { text: "Ó", gloss: "he, she, it", role: "pronoun" },
          { text: "lè", gloss: "can", role: "verb" },
          { text: "kà", gloss: "read", role: "verb" },
          { text: "ìwé", gloss: "book", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones.",
      },
    ],
    commonMistake: {
      wrong: "Mo kò lè lọ",
      right: "N kò lè lọ",
      why: "Before kò, mo becomes n, as in N kò lọ (Beginner 2).",
    },
  },
  questions: [
    { type: "pick", prompt: "Which sentence says you are unable to go, as opposed to forbidden?", choices: ["N kò lè lọ", "N kò gbọ́dọ̀ lọ", "N kò fẹ́ lọ"], answer: 0, wordId: "n-ko-le-lo" },
    { type: "pick", prompt: "Someone asks Ṣé o lè wá? and you can. What do you say?", choices: ["Bẹ́ẹ̀ ni, mo lè wá", "Bẹ́ẹ̀ ni, mo fẹ́ wá", "Rárá, mo lè wá"], answer: 0, wordId: "se-o-le-wa" },
    { type: "blank", prompt: "A ò ___ sùn. (We cannot sleep.)", answer: "lè", choices: ["lè", "gbọ́dọ̀", "fẹ́"], wordId: "a-o-le-sun" },
    { type: "pick", prompt: "How do Mo lè lọ and Mo ní láti lọ differ?", choices: ["The first says I am able, the second says I have to", "The first says I have to, the second says I am able", "They mean the same"], answer: 0, wordId: "mo-le-lo" },
    { type: "pick", prompt: "Which is correct for \"I cannot go\"?", choices: ["Mo kò lè lọ", "N kò lè lọ", "Mo lè kò lọ"], answer: 1, wordId: "n-ko-le-lo" },
    { type: "pick", prompt: "Besides he can come, what else can Ó lè wá mean?", choices: ["He may come", "He must come", "He did not come"], answer: 0, wordId: "o-le-ka-iwe" },
    { type: "order", english: "We cannot sleep", words: ["sùn", "lè", "A", "ò"], answer: ["A", "ò", "lè", "sùn"] },
    { type: "order", english: "Can you come?", words: ["lè", "wá", "Ṣé", "o"], answer: ["Ṣé", "o", "lè", "wá"] },
  ],
};

import type { Lesson } from "../types";

export const a7: Lesson = {
  id: "a-7",
  level: "advanced",
  title: "Telling someone not to: má",
  sources: [
    "The Getting Started vocab phrase ẹ má bínú (sorry, literally do not be angry) and the Advanced vocab sentence Má mu tíì gbígbóná yẹn kíákíá, ó lè jó ọ lẹ́nu (do not drink that hot tea quickly, it can burn your mouth) both use má before a verb. The lesson's own sentences were written for this site from that pattern. No published source was consulted. Every line needs a native speaker's check, especially the tone of má against máa and kò.",
    "Builds on commands with ẹ and jọ̀wọ́ (Beginner 5), máa (will, usually) from Intermediate 1, kò (Beginner 2) and kò gbọ́dọ̀ (Intermediate 7). Intermediate 7's kò gbọ́dọ̀ states that something is forbidden. This lesson gives the order itself.",
  ],
  primer: {
    rule: "To tell someone not to do something, put má before the verb. Start with ẹ to speak to several people or to an older person.",
    formula: "má + verb; ẹ má + verb; jọ̀wọ́ má + verb",
    tables: [
      {
        id: "ma-verbs",
        title: "Verbs to practice with má",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["go", "lọ"],
          ["come", "wá"],
          ["eat", "jẹ"],
          ["sleep", "sùn"],
          ["be angry", "bínú"],
          ["say", "sọ"],
        ],
        note: "bínú is the word in Ẹ má bínú, the way to say sorry in Getting Started.",
      },
      {
        id: "ma-sentences",
        title: "Telling someone not to",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["Do not go", "Má lọ"],
          ["Do not come (to several people)", "Ẹ má wá"],
          ["Please do not go", "Jọ̀wọ́ má lọ"],
          ["Do not eat fish", "Má jẹ ẹja"],
          ["Do not be angry", "Ẹ má bínú"],
          ["Go on, keep going", "Máa lọ"],
        ],
        note: "Má (do not) and máa (go on, or will) differ only in length.",
      },
    ],
    rules: [
      {
        id: "ma-before-verb",
        title: "má goes before the verb",
        explanation: [
          "Má lọ: do not go.",
          "Like any command, it has no pronoun.",
        ],
      },
      {
        id: "e-ma",
        title: "ẹ speaks to several people or an elder",
        explanation: [
          "Ẹ má wá: do not come, said to several people.",
          "It is the ẹ of Ẹ má bínú.",
        ],
      },
      {
        id: "ma-vs-maa",
        title: "má is not máa",
        explanation: [
          "má has one a and means do not.",
          "máa has two as. Máa lọ means go on, or I will go.",
        ],
      },
      {
        id: "ma-vs-ko",
        title: "Orders use má, statements use kò",
        explanation: [
          "An order: Má jẹ ẹja, do not eat fish.",
          "A statement about the past: N kò jẹ ẹja, I did not eat fish.",
          "A ban stated as a fact: O ò gbọ́dọ̀ jẹ ẹja, you must not eat fish.",
        ],
      },
    ],
    examples: [
      {
        id: "ma-lo", surface: "Má lọ", english: "Do not go",
        parts: [
          { text: "Má", gloss: "do not", role: "negation" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tone on má.",
      },
      {
        id: "e-ma-wa", surface: "Ẹ má wá", english: "Do not come (to several people)",
        parts: [
          { text: "Ẹ", gloss: "you (several, or respect)", role: "pronoun" },
          { text: "má", gloss: "do not", role: "negation" },
          { text: "wá", gloss: "come", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones.",
      },
      {
        id: "jowo-ma-lo", surface: "Jọ̀wọ́ má lọ", english: "Please do not go",
        parts: [
          { text: "Jọ̀wọ́", gloss: "please", role: "politeness" },
          { text: "má", gloss: "do not", role: "negation" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm that jọ̀wọ́ comes before má.",
      },
      {
        id: "ma-je-eja", surface: "Má jẹ ẹja", english: "Do not eat fish",
        parts: [
          { text: "Má", gloss: "do not", role: "negation" },
          { text: "jẹ", gloss: "eat", role: "verb" },
          { text: "ẹja", gloss: "fish", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm jẹ (not jẹun) before an object.",
      },
      {
        id: "e-ma-binu", surface: "Ẹ má bínú", english: "Do not be angry (sorry)",
        parts: [
          { text: "Ẹ", gloss: "you (respect)", role: "pronoun" },
          { text: "má", gloss: "do not", role: "negation" },
          { text: "bínú", gloss: "be angry", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "From the Getting Started vocab topic. Confirm the tones.",
      },
    ],
    commonMistake: {
      wrong: "Kò lọ (to tell someone not to go)",
      right: "Má lọ",
      why: "Kò lọ says he did not go. To give the order, use má.",
    },
  },
  questions: [
    { type: "pick", prompt: "Which tells one person not to go?", choices: ["Má lọ", "Kò lọ", "Máa lọ"], answer: 0, wordId: "ma-lo" },
    { type: "pick", prompt: "How do Má lọ and Máa lọ differ?", choices: ["The first says do not go, the second says go on", "The first says go on, the second says do not go", "They mean the same"], answer: 0, wordId: "ma-lo" },
    { type: "blank", prompt: "Ẹ ___ wá. (Do not come, all of you.)", answer: "má", choices: ["má", "kò", "ò"], wordId: "e-ma-wa" },
    { type: "blank", prompt: "Jọ̀wọ́ ___ lọ. (Please do not go.)", answer: "má", choices: ["má", "máa", "kò"], wordId: "jowo-ma-lo" },
    { type: "pick", prompt: "Which one is the order itself, not a statement about what is forbidden?", choices: ["Má lọ", "O ò gbọ́dọ̀ lọ", "N kò lè lọ"], answer: 0, wordId: "ma-lo" },
    { type: "pick", prompt: "Which means \"Do not eat fish\"?", choices: ["Má jẹ ẹja", "N kò jẹ ẹja", "Ẹ jẹ ẹja"], answer: 0, wordId: "ma-je-eja" },
    { type: "order", english: "Please do not eat fish", words: ["ẹja", "jẹ", "má", "Jọ̀wọ́"], answer: ["Jọ̀wọ́", "má", "jẹ", "ẹja"] },
    { type: "order", english: "All of you, do not come", words: ["wá", "má", "Ẹ"], answer: ["Ẹ", "má", "wá"] },
  ],
};

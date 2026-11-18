import type { Lesson } from "../types";

export const b9: Lesson = {
  id: "b-9",
  level: "beginner",
  title: "Which and why: wo, èwo and kílódé",
  sources: [
    "Written for this site from commonly taught forms (noun + wo for which; èwo for which one; kílódé tí + clause for why; nítorí pé for because). No published source was consulted. Every line needs a native speaker's check, especially the tones of kílódé and whether Kí ló dé is preferred in careful speech.",
    "Builds on Beginner 4, which teaches ṣé, kí ni, ta ni, ibo, báwo and mélòó, and on Beginner 2 (kò) and Beginner 3 (ń). Beginner 4 does not teach which or why. The word wo after a noun is not the verb wo (look).",
  ],
  primer: {
    rule: "Put wo after a noun to ask which one: ìwé wo, which book. Use èwo on its own for which one. Use kílódé to ask why, and answer with nítorí pé.",
    formula: "noun + wo; èwo ni + noun; kílódé tí + clause?",
    tables: [
      {
        id: "which-and-why",
        title: "Asking which and why",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["Which book?", "Ìwé wo"],
          ["Which house?", "Ilé wo"],
          ["Which child?", "Ọmọ wo"],
          ["Which is your book?", "Èwo ni ìwé rẹ"],
          ["Which do you want?", "Èwo ni o fẹ́"],
          ["Why?", "Kílódé"],
          ["Why did you not come?", "Kílódé tí o kò wá"],
          ["Because I was working", "Nítorí pé mo ń ṣiṣẹ́"],
        ],
        note: "Answer a kílódé question with nítorí pé and a short sentence.",
      },
    ],
    rules: [
      {
        id: "wo-after-noun",
        title: "wo comes after the noun",
        explanation: [
          "Ìwé wo ni? Which book is it?",
          "The noun comes first and wo follows it.",
          "This wo is not the verb wo, look. Wo ìwé means look at the book.",
        ],
      },
      {
        id: "ewo",
        title: "èwo means which one",
        explanation: [
          "Use èwo when you do not name the thing: Èwo ni o fẹ́?",
          "Èwo starts the sentence, then ni.",
        ],
      },
      {
        id: "kilode",
        title: "kílódé asks why",
        explanation: [
          "Kílódé on its own is the question why?",
          "To say why someone did something, add tí and a sentence: Kílódé tí o kò wá?",
          "Answer with nítorí pé: Nítorí pé mo ń ṣiṣẹ́.",
        ],
      },
    ],
    examples: [
      {
        id: "iwe-wo-ni", surface: "Ìwé wo ni", english: "Which book is it?",
        parts: [
          { text: "Ìwé", gloss: "book", role: "noun" },
          { text: "wo", gloss: "which", role: "question" },
          { text: "ni", gloss: "is", role: "particle" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm wo has a mid tone in ìwé wo.",
      },
      {
        id: "ewo-ni-iwe-re", surface: "Èwo ni ìwé rẹ", english: "Which is your book?",
        parts: [
          { text: "Èwo", gloss: "which one", role: "question" },
          { text: "ni", gloss: "is", role: "particle" },
          { text: "ìwé", gloss: "book", role: "noun" },
          { text: "rẹ", gloss: "your", role: "pronoun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm Èwo ni ìwé rẹ as the usual order.",
      },
      {
        id: "kilode", surface: "Kílódé", english: "Why?",
        parts: [{ text: "Kílódé", gloss: "why", role: "question" }],
        steps: [], confidence: "needs-review",
        note: "A short form of Kí ló dé. Confirm the tones.",
      },
      {
        id: "kilode-ti-o-ko-wa", surface: "Kílódé tí o kò wá", english: "Why did you not come?",
        parts: [
          { text: "Kílódé", gloss: "why", role: "question" },
          { text: "tí", gloss: "that", role: "particle" },
          { text: "o", gloss: "you", role: "pronoun" },
          { text: "kò", gloss: "not", role: "negation" },
          { text: "wá", gloss: "come", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm tí and the negative kò inside the clause.",
      },
      {
        id: "nitori-pe-mo-n-sise", surface: "Nítorí pé mo ń ṣiṣẹ́", english: "Because I was working",
        parts: [
          { text: "Nítorí pé", gloss: "because", role: "conjunction" },
          { text: "mo", gloss: "I", role: "pronoun" },
          { text: "ń", gloss: "(ongoing)", role: "particle" },
          { text: "ṣiṣẹ́", gloss: "work", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm nítorí pé as the usual answer to why.",
      },
    ],
    commonMistake: {
      wrong: "Wo ìwé ni",
      right: "Ìwé wo ni",
      why: "To ask which book, wo goes after the noun. Before the noun, wo is the verb look.",
    },
  },
  questions: [
    { type: "pick", prompt: "Where does wo go when you ask which book?", choices: ["After the noun", "Before the noun", "At the end of the sentence"], answer: 0, wordId: "iwe-wo-ni" },
    { type: "pick", prompt: "Which one asks \"Which is your book?\"", choices: ["Èwo ni ìwé rẹ", "Kílódé ni ìwé rẹ", "Ṣé ìwé rẹ"], answer: 0, wordId: "ewo-ni-iwe-re" },
    { type: "blank", prompt: "Ọmọ ___ ni? (Which child is it?)", answer: "wo", choices: ["wo", "kílódé", "ń"], wordId: "iwe-wo-ni" },
    { type: "blank", prompt: "___ tí o kò wá? (Why did you not come?)", answer: "Kílódé", choices: ["Kílódé", "Èwo", "Báwo"], wordId: "kilode-ti-o-ko-wa" },
    { type: "pick", prompt: "A friend asks Kílódé tí o kò wá? Which reply fits?", choices: ["Nítorí pé mo ń ṣiṣẹ́", "Ìwé wo ni", "Èwo ni ìwé rẹ"], answer: 0, wordId: "nitori-pe-mo-n-sise" },
    { type: "pick", prompt: "What kind of question is Èwo ni o fẹ́?", choices: ["Which one do you want?", "Why do you want it?", "Do you want it?"], answer: 0, wordId: "ewo-ni-iwe-re" },
    { type: "order", english: "Why did you not come?", words: ["wá", "tí", "Kílódé", "o", "kò"], answer: ["Kílódé", "tí", "o", "kò", "wá"] },
    { type: "order", english: "Which is your book?", words: ["ni", "Èwo", "rẹ", "ìwé"], answer: ["Èwo", "ni", "ìwé", "rẹ"] },
  ],
};

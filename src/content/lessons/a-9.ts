import type { Lesson } from "../types";

export const a9: Lesson = {
  id: "a-9",
  level: "advanced",
  title: "Without: láì and láìsí",
  sources: [
    "Written for this site from commonly taught forms (láì before a verb for without doing; láìsí before a noun for without something). láì is also seen in the vocab sentences. No published source was consulted for the rule. Every line needs a native speaker's check, especially the tone of láì and whether láìsí is the usual form before a noun.",
    "Builds on Beginner 2 (kò for not) and Beginner 6 (kò sí for there is not). láì is a different, shorter way to say not, used when one action happens without another.",
  ],
  primer: {
    rule: "Put láì before a verb to say without doing it: ó lọ láì jẹun, he left without eating. Put láìsí before a noun to say without something: láìsí owó, without money.",
    formula: "verb + láì + verb (He left without eating); verb + láìsí + noun (without + thing)",
    tables: [
      {
        id: "without",
        title: "Doing something without something else",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["He left without eating", "Ó lọ láì jẹun"],
          ["I slept without eating", "Mo sùn láì jẹun"],
          ["She came without speaking", "Ó wá láì sọ̀rọ̀"],
          ["He went out without a book", "Ó jáde láìsí ìwé"],
          ["I came without money", "Mo wá láìsí owó"],
        ],
        note: "láì takes a verb. láìsí takes a noun.",
      },
    ],
    rules: [
      {
        id: "lai",
        title: "láì is without, before a verb",
        explanation: [
          "Ó lọ láì jẹun: he left without eating.",
          "The first verb says what happened. The verb after láì is the thing that did not happen.",
        ],
      },
      {
        id: "laisi",
        title: "láìsí is without, before a noun",
        explanation: [
          "Mo wá láìsí owó: I came without money.",
          "láìsí is láì and sí, the same sí as in kò sí.",
        ],
      },
      {
        id: "lai-no-ko",
        title: "No kò with láì",
        explanation: [
          "láì already carries the not.",
          "Do not add kò: Ó lọ láì jẹun, not Ó lọ láì kò jẹun.",
        ],
      },
    ],
    examples: [
      {
        id: "o-lo-lai-jeun", surface: "Ó lọ láì jẹun", english: "He left without eating",
        parts: [
          { text: "Ó", gloss: "he, she, it", role: "pronoun" },
          { text: "lọ", gloss: "go", role: "verb" },
          { text: "láì", gloss: "without", role: "negation" },
          { text: "jẹun", gloss: "eat", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tone of láì.",
      },
      {
        id: "mo-sun-lai-jeun", surface: "Mo sùn láì jẹun", english: "I slept without eating",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "sùn", gloss: "sleep", role: "verb" },
          { text: "láì", gloss: "without", role: "negation" },
          { text: "jẹun", gloss: "eat", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones.",
      },
      {
        id: "o-wa-lai-so-oro", surface: "Ó wá láì sọ̀rọ̀", english: "She came without speaking",
        parts: [
          { text: "Ó", gloss: "he, she, it", role: "pronoun" },
          { text: "wá", gloss: "come", role: "verb" },
          { text: "láì", gloss: "without", role: "negation" },
          { text: "sọ̀rọ̀", gloss: "speak", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones.",
      },
      {
        id: "mo-wa-laisi-owo", surface: "Mo wá láìsí owó", english: "I came without money",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "wá", gloss: "come", role: "verb" },
          { text: "láìsí", gloss: "without", role: "preposition" },
          { text: "owó", gloss: "money", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm láìsí before a noun.",
      },
    ],
    commonMistake: {
      wrong: "Ó lọ láì kò jẹun",
      right: "Ó lọ láì jẹun",
      why: "láì already means not. Adding kò says not twice.",
    },
  },
  questions: [
    { type: "pick", prompt: "Which one means \"He left without eating\"?", choices: ["Ó lọ láì jẹun", "Ó lọ láìsí jẹun", "Ó kò lọ jẹun"], answer: 0, wordId: "o-lo-lai-jeun" },
    { type: "pick", prompt: "Which one goes before a noun for without?", choices: ["The word láìsí", "The word láì", "The word kò"], answer: 0, wordId: "mo-wa-laisi-owo" },
    { type: "blank", prompt: "Mo sùn ___ jẹun. (I slept without eating.)", answer: "láì", choices: ["láì", "láìsí", "ti"], wordId: "mo-sun-lai-jeun" },
    { type: "blank", prompt: "Mo wá ___ owó. (I came without money.)", answer: "láìsí", choices: ["láìsí", "láì", "kò"], wordId: "mo-wa-laisi-owo" },
    { type: "pick", prompt: "Why is Ó lọ láì kò jẹun wrong?", choices: ["láì already carries the not", "kò must come before lọ", "jẹun cannot follow láì"], answer: 0 },
    { type: "pick", prompt: "She came, but she did not speak. Which sentence says that?", choices: ["Ó wá láì sọ̀rọ̀", "Ó wá láìsí sọ̀rọ̀", "Ó wá sọ̀rọ̀"], answer: 0, wordId: "o-wa-lai-so-oro" },
    { type: "order", english: "He left without eating", words: ["jẹun", "Ó", "láì", "lọ"], answer: ["Ó", "lọ", "láì", "jẹun"] },
    { type: "order", english: "I came without money", words: ["láìsí", "wá", "owó", "Mo"], answer: ["Mo", "wá", "láìsí", "owó"] },
  ],
};

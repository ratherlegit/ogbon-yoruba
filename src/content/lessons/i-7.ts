import type { Lesson } from "../types";

export const i7: Lesson = {
  id: "i-7",
  level: "intermediate",
  title: "Having to and needing: ní láti, gbọ́dọ̀, nílò",
  sources: [
    "Written for this site from commonly taught forms (ní láti + verb for have to; gbọ́dọ̀ + verb for must; kò gbọ́dọ̀ for must not; nílò + thing for need). The Advanced vocab sentence Ó ti ṣiṣẹ́ jù, ara rẹ̀ nílò ìsinmi, kò sì gbọdọ̀ ṣe nǹkan kan uses nílò (need) and gbọdọ̀ (must not), written there without the tone mark on the first ọ. No published source was consulted for this lesson. Every line needs a native speaker's check, especially the tones on gbọ́dọ̀ and nílò.",
    "Builds on kò and the n form of mo (Beginner 2) and on fẹ́ and a verb (Beginner 8). The láti in ní láti has the same spelling as the láti in wá láti (from) in Getting Started 3 but does a different job.",
  ],
  primer: {
    rule: "Use ní láti before a verb to say you have to do something, and gbọ́dọ̀ before a verb to say you must. Use nílò before a thing you need.",
    formula: "subject + ní láti + verb; subject + gbọ́dọ̀ + verb; subject + nílò + thing",
    tables: [
      {
        id: "obligation-sentences",
        title: "Have to, must, must not, and need",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["I have to go", "Mo ní láti lọ"],
          ["She has to eat", "Ó ní láti jẹun"],
          ["I do not have to go", "N kò ní láti lọ"],
          ["I must read the book", "Mo gbọ́dọ̀ kà ìwé"],
          ["You must not go", "O ò gbọ́dọ̀ lọ"],
          ["I need money", "Mo nílò owó"],
          ["Do you need water?", "Ṣé o nílò omi?"],
        ],
        note: "Compare Mo fẹ́ lọ (I want to go, Beginner 8) with Mo ní láti lọ (I have to go).",
      },
    ],
    rules: [
      {
        id: "ni-lati",
        title: "ní láti means have to",
        explanation: [
          "Put ní láti before the verb: Mo ní láti lọ.",
          "It says something is needed of you, whether you like it or not.",
        ],
      },
      {
        id: "ko-ni-lati",
        title: "kò ní láti means you do not have to",
        explanation: [
          "N kò ní láti lọ: I do not have to go.",
          "You are free to stay. It is not a ban.",
        ],
      },
      {
        id: "gbodo",
        title: "gbọ́dọ̀ is a stronger must",
        explanation: [
          "Mo gbọ́dọ̀ kà ìwé: I must read the book.",
          "With kò or ò it becomes a ban: O ò gbọ́dọ̀ lọ, you must not go.",
        ],
      },
      {
        id: "nilo",
        title: "nílò is for a thing, not a verb",
        explanation: [
          "Put a thing after it: Mo nílò owó, I need money.",
          "For an action you have to do, use ní láti.",
        ],
      },
    ],
    examples: [
      {
        id: "mo-ni-lati-lo", surface: "Mo ní láti lọ", english: "I have to go",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "ní láti", gloss: "have to", role: "verb" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm ní láti and its tones.",
      },
      {
        id: "n-ko-ni-lati-lo", surface: "N kò ní láti lọ", english: "I do not have to go",
        parts: [
          { text: "N", gloss: "I (form used before kò)", role: "pronoun" },
          { text: "kò", gloss: "not", role: "negation" },
          { text: "ní láti", gloss: "have to", role: "verb" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm that kò ní láti means do not have to rather than must not.",
      },
      {
        id: "mo-gbodo-ka", surface: "Mo gbọ́dọ̀ kà ìwé", english: "I must read the book",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "gbọ́dọ̀", gloss: "must", role: "verb" },
          { text: "kà", gloss: "read", role: "verb" },
          { text: "ìwé", gloss: "book", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on gbọ́dọ̀.",
      },
      {
        id: "o-o-gbodo-lo", surface: "O ò gbọ́dọ̀ lọ", english: "You must not go",
        parts: [
          { text: "O", gloss: "you", role: "pronoun" },
          { text: "ò", gloss: "not (short form of kò)", role: "negation" },
          { text: "gbọ́dọ̀", gloss: "must", role: "verb" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Built from A ò lọ (Beginner 2). Confirm the tones.",
      },
      {
        id: "mo-nilo-owo", surface: "Mo nílò owó", english: "I need money",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "nílò", gloss: "need", role: "verb" },
          { text: "owó", gloss: "money", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on nílò.",
      },
    ],
    commonMistake: {
      wrong: "Mo nílò lọ",
      right: "Mo ní láti lọ",
      why: "nílò needs a thing after it. For an action you must do, use ní láti and then the verb.",
    },
  },
  questions: [
    { type: "pick", prompt: "Which sentence says you are not allowed to go?", choices: ["N kò ní láti lọ", "N kò gbọ́dọ̀ lọ", "N kò fẹ́ lọ"], answer: 1, wordId: "o-o-gbodo-lo", translation: "I must not go" },
    { type: "pick", prompt: "How do Mo fẹ́ lọ and Mo ní láti lọ differ?", choices: ["The first is wanting to go, the second is having to go", "The first is having to go, the second is wanting to go", "They mean the same"], answer: 0, wordId: "mo-ni-lati-lo" },
    { type: "blank", prompt: "Mo ___ láti lọ. (I have to go.)", answer: "ní", choices: ["ní", "fẹ́", "nílò"], wordId: "mo-ni-lati-lo" },
    { type: "blank", prompt: "Mo ___ owó. (I need money.)", answer: "nílò", choices: ["nílò", "fẹ́ràn", "gbọ́dọ̀"], wordId: "mo-nilo-owo" },
    { type: "pick", prompt: "Why is Mo nílò lọ wrong?", choices: ["nílò takes a thing, not a verb", "lọ cannot follow mo", "nílò must come last"], answer: 0, wordId: "mo-nilo-owo" },
    { type: "pick", prompt: "Which is the best English for Ó gbọ́dọ̀ jẹun?", choices: ["He must eat", "He wants to eat", "He needs food"], answer: 0, wordId: "mo-gbodo-ka" },
    { type: "order", english: "I must read the book", words: ["ìwé", "gbọ́dọ̀", "Mo", "kà"], answer: ["Mo", "gbọ́dọ̀", "kà", "ìwé"] },
    { type: "order", english: "I do not have to go", words: ["láti", "N", "ní", "lọ", "kò"], answer: ["N", "kò", "ní", "láti", "lọ"] },
  ],
};

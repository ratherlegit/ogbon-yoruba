import type { Lesson } from "../types";

export const i10: Lesson = {
  id: "i-10",
  level: "intermediate",
  title: "All, many and a little: gbogbo, ọ̀pọ̀, púpọ̀, díẹ̀",
  sources: [
    "Written for this site from commonly taught forms (gbogbo and ọ̀pọ̀ before a noun; púpọ̀ and díẹ̀ after a noun; kan after a noun with àwọn for some). No published source was consulted. Every line needs a native speaker's check, especially the tones of ọ̀pọ̀ and púpọ̀ and the meaning of àwọn ... kan.",
    "Builds on Getting Started 5 (díẹ̀ after a verb, as in a little), Getting Started 4 (mo ní) and Intermediate 4 (àwọn for plurals). Those lessons use these words in one place each. This lesson teaches where each word goes next to a noun.",
  ],
  primer: {
    rule: "Some amount words go before the noun and some go after it. gbogbo (all) and ọ̀pọ̀ (many) go before. púpọ̀ (many, much) and díẹ̀ (a few, a little) go after. For some, use àwọn before the noun and kan after it.",
    formula: "gbogbo + noun; ọ̀pọ̀ + noun; noun + púpọ̀; noun + díẹ̀; àwọn + noun + kan",
    tables: [
      {
        id: "amounts",
        title: "Amount words and where they go",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["all the children", "gbogbo ọmọ"],
          ["many people", "ọ̀pọ̀ èèyàn"],
          ["many friends", "ọ̀rẹ́ púpọ̀"],
          ["a lot of money", "owó púpọ̀"],
          ["a little money", "owó díẹ̀"],
          ["a few books", "ìwé díẹ̀"],
          ["some children", "àwọn ọmọ kan"],
        ],
        note: "gbogbo and ọ̀pọ̀ come first. púpọ̀, díẹ̀ and kan come after the noun.",
      },
    ],
    rules: [
      {
        id: "before-noun",
        title: "gbogbo and ọ̀pọ̀ come first",
        explanation: [
          "gbogbo ọmọ: all the children.",
          "ọ̀pọ̀ èèyàn: many people.",
        ],
      },
      {
        id: "after-noun",
        title: "púpọ̀ and díẹ̀ come after",
        explanation: [
          "ọ̀rẹ́ púpọ̀: many friends.",
          "owó díẹ̀: a little money.",
          "Mo ní ọ̀rẹ́ púpọ̀: I have many friends.",
        ],
      },
      {
        id: "awon-kan",
        title: "Some uses àwọn and kan",
        explanation: [
          "àwọn ọmọ kan: some children.",
          "àwọn goes before the noun and kan goes after it.",
          "It means some, but not all.",
        ],
      },
    ],
    examples: [
      {
        id: "gbogbo-omo", surface: "gbogbo ọmọ", english: "all the children",
        parts: [
          { text: "gbogbo", gloss: "all", role: "quantifier" },
          { text: "ọmọ", gloss: "child", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm gbogbo before the noun.",
      },
      {
        id: "opo-eeyan", surface: "ọ̀pọ̀ èèyàn", english: "many people",
        parts: [
          { text: "ọ̀pọ̀", gloss: "many", role: "quantifier" },
          { text: "èèyàn", gloss: "people", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones of ọ̀pọ̀.",
      },
      {
        id: "ore-pupo", surface: "ọ̀rẹ́ púpọ̀", english: "many friends",
        parts: [
          { text: "ọ̀rẹ́", gloss: "friend", role: "noun" },
          { text: "púpọ̀", gloss: "many", role: "quantifier" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm púpọ̀ after the noun.",
      },
      {
        id: "owo-die", surface: "owó díẹ̀", english: "a little money",
        parts: [
          { text: "owó", gloss: "money", role: "noun" },
          { text: "díẹ̀", gloss: "a little", role: "quantifier" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones of díẹ̀.",
      },
      {
        id: "awon-omo-kan", surface: "àwọn ọmọ kan", english: "some children",
        parts: [
          { text: "àwọn", gloss: "(plural)", role: "particle" },
          { text: "ọmọ", gloss: "child", role: "noun" },
          { text: "kan", gloss: "some", role: "quantifier" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm that àwọn ... kan means some (certain) ones.",
      },
    ],
    commonMistake: {
      wrong: "púpọ̀ ọ̀rẹ́",
      right: "ọ̀rẹ́ púpọ̀",
      why: "púpọ̀ goes after the noun. If you want an amount word before the noun, use ọ̀pọ̀: ọ̀pọ̀ ọ̀rẹ́.",
    },
  },
  questions: [
    { type: "pick", prompt: "Which amount words go before the noun?", choices: ["gbogbo and ọ̀pọ̀", "púpọ̀ and díẹ̀", "kan and díẹ̀"], answer: 0, wordId: "gbogbo-omo" },
    { type: "pick", prompt: "Which one means \"many friends\"?", choices: ["ọ̀rẹ́ púpọ̀", "púpọ̀ ọ̀rẹ́", "ọ̀rẹ́ díẹ̀"], answer: 0, wordId: "ore-pupo" },
    { type: "blank", prompt: "owó ___ (a little money)", answer: "díẹ̀", choices: ["díẹ̀", "gbogbo", "ọ̀pọ̀"], wordId: "owo-die" },
    { type: "blank", prompt: "___ ọmọ (all the children)", answer: "gbogbo", choices: ["gbogbo", "púpọ̀", "díẹ̀"], wordId: "gbogbo-omo" },
    { type: "pick", prompt: "Which one means some, but not all, of the children?", choices: ["àwọn ọmọ kan", "gbogbo ọmọ", "ọmọ púpọ̀"], answer: 0, wordId: "awon-omo-kan" },
    { type: "pick", prompt: "You want an amount word before ọ̀rẹ́ for many. Which one works?", choices: ["ọ̀pọ̀ ọ̀rẹ́", "púpọ̀ ọ̀rẹ́", "díẹ̀ ọ̀rẹ́"], answer: 0, translation: "many friends", wordId: "opo-eeyan" },
    { type: "order", english: "I have many friends", words: ["ọ̀rẹ́", "ní", "púpọ̀", "Mo"], answer: ["Mo", "ní", "ọ̀rẹ́", "púpọ̀"] },
    { type: "order", english: "many people", words: ["èèyàn", "ọ̀pọ̀"], answer: ["ọ̀pọ̀", "èèyàn"] },
  ],
};

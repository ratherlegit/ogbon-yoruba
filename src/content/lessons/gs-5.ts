import type { Lesson } from "../types";

export const gs5: Lesson = {
  id: "gs-5",
  level: "getting-started",
  title: "Languages: understand and speak",
  sources: [
    "Written for this site from commonly taught forms (gbọ́ with a language for understand; sọ with a language for speak; díẹ̀ a little; Èdè wo ni o sọ? which language do you speak). No published source was consulted for this lesson. Every line needs a native speaker's check, especially the tones on gbọ́, sọ, díẹ̀ and Faransé, and whether gbọ́ is the usual word for understanding a language.",
    "Builds on the noun + wo pattern of Getting Started 3 (Ìlú wo ni o ti wá?) and àti from Getting Started 4.",
  ],
  primer: {
    rule: "Use gbọ́ with a language to say you understand it and sọ to say you speak it. Put díẹ̀ (a little) or dáadáa (well) after the language.",
    formula: "Mo gbọ́ + language (I understand Yoruba); Mo sọ + language (I speak English); language + díẹ̀ or dáadáa (a little or well)",
    tables: [
      {
        id: "languages",
        title: "Languages",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["Yoruba", "Yorùbá"],
          ["English", "Gẹ̀ẹ́sì"],
          ["Igbo", "Igbo"],
          ["Hausa", "Hausa"],
          ["French", "Faransé"],
        ],
        note: "A language is èdè. Orílẹ̀-èdè (country) in Getting Started 3 contains the same word.",
      },
      {
        id: "language-sentences",
        title: "Saying what you understand and speak",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["I understand Yoruba", "Mo gbọ́ Yorùbá"],
          ["I speak English", "Mo sọ Gẹ̀ẹ́sì"],
          ["I understand a little Yoruba", "Mo gbọ́ Yorùbá díẹ̀"],
          ["I speak English well", "Mo sọ Gẹ̀ẹ́sì dáadáa"],
          ["Which language do you speak?", "Èdè wo ni o sọ?"],
          ["I speak Yoruba and English", "Mo sọ Yorùbá àti Gẹ̀ẹ́sì"],
        ],
        note: "Understanding and speaking are different. Many learners understand more than they speak.",
      },
    ],
    rules: [
      {
        id: "gbo-understand",
        title: "gbọ́ means understand",
        explanation: [
          "Put gbọ́ before the language: Mo gbọ́ Yorùbá.",
          "It says you follow the language when others use it.",
        ],
      },
      {
        id: "so-speak",
        title: "sọ means speak",
        explanation: [
          "Put sọ before the language: Mo sọ Gẹ̀ẹ́sì.",
          "It says you talk in the language yourself.",
        ],
      },
      {
        id: "die-after",
        title: "díẹ̀ and dáadáa come after the language",
        explanation: [
          "díẹ̀ means a little: Mo gbọ́ Yorùbá díẹ̀.",
          "dáadáa means well: Mo sọ Gẹ̀ẹ́sì dáadáa.",
          "Both go at the end of the sentence.",
        ],
      },
      {
        id: "ede-wo",
        title: "Èdè wo ni o sọ? asks which language",
        explanation: [
          "It works like Ìlú wo ni o ti wá?: noun, then wo, then ni.",
          "Answer with Mo sọ and the language.",
        ],
      },
      {
        id: "ati-join",
        title: "àti joins two languages",
        explanation: [
          "Put àti between them: Mo sọ Yorùbá àti Gẹ̀ẹ́sì.",
        ],
      },
    ],
    examples: [
      {
        id: "mo-gbo-yoruba", surface: "Mo gbọ́ Yorùbá", english: "I understand Yoruba",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "gbọ́", gloss: "understand", role: "verb" },
          { text: "Yorùbá", gloss: "Yoruba", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm gbọ́ as the usual word for understanding a language, and its tone.",
      },
      {
        id: "mo-so-gese", surface: "Mo sọ Gẹ̀ẹ́sì", english: "I speak English",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "sọ", gloss: "speak", role: "verb" },
          { text: "Gẹ̀ẹ́sì", gloss: "English", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on sọ and Gẹ̀ẹ́sì.",
      },
      {
        id: "mo-gbo-yoruba-die", surface: "Mo gbọ́ Yorùbá díẹ̀", english: "I understand a little Yoruba",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "gbọ́", gloss: "understand", role: "verb" },
          { text: "Yorùbá", gloss: "Yoruba", role: "noun" },
          { text: "díẹ̀", gloss: "a little", role: "adverb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm díẹ̀ and its tone.",
      },
      {
        id: "ede-wo-ni-o-so", surface: "Èdè wo ni o sọ", english: "Which language do you speak?",
        parts: [
          { text: "Èdè", gloss: "language", role: "noun" },
          { text: "wo", gloss: "which", role: "question" },
          { text: "ni", gloss: "(focus word)", role: "particle" },
          { text: "o", gloss: "you", role: "pronoun" },
          { text: "sọ", gloss: "speak", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Built on Ìlú wo ni o ti wá? (Getting Started 3). Confirm the tones.",
      },
    ],
    commonMistake: {
      wrong: "Mo gbọ́ díẹ̀ Yorùbá",
      right: "Mo gbọ́ Yorùbá díẹ̀",
      why: "díẹ̀ goes after the language, at the end of the sentence.",
    },
  },
  questions: [
    { type: "pick", prompt: "You can follow Yoruba when others speak it, but you cannot talk much yourself. Which sentence is true of you?", choices: ["Mo gbọ́ Yorùbá", "Mo sọ Yorùbá", "Mo sọ Yorùbá dáadáa"], answer: 0, wordId: "mo-gbo-yoruba" },
    { type: "pick", prompt: "Which puts díẹ̀ in the right place?", choices: ["Mo gbọ́ Yorùbá díẹ̀", "Mo gbọ́ díẹ̀ Yorùbá", "Díẹ̀ mo gbọ́ Yorùbá"], answer: 0, wordId: "mo-gbo-yoruba-die" },
    { type: "pick", prompt: "Which question asks which language someone speaks?", choices: ["Èdè wo ni o sọ?", "Èdè mi ni o sọ?", "Ìlú wo ni o sọ?"], answer: 0, wordId: "ede-wo-ni-o-so" },
    { type: "blank", prompt: "Èdè ___ ni o sọ? (Which language do you speak?)", answer: "wo", choices: ["wo", "mi", "wá"], wordId: "ede-wo-ni-o-so" },
    { type: "blank", prompt: "Mo sọ Yorùbá ___ Gẹ̀ẹ́sì. (I speak Yoruba and English.)", answer: "àti", choices: ["àti", "láti", "díẹ̀"], wordId: "mo-so-gese" },
    { type: "pick", prompt: "How do Mo gbọ́ Yorùbá díẹ̀ and Mo sọ Yorùbá díẹ̀ differ?", choices: ["The first is understanding, the second is speaking", "The first is speaking, the second is understanding", "They mean the same"], answer: 0, wordId: "mo-gbo-yoruba-die" },
    { type: "order", english: "I speak English well", words: ["dáadáa", "Gẹ̀ẹ́sì", "Mo", "sọ"], answer: ["Mo", "sọ", "Gẹ̀ẹ́sì", "dáadáa"] },
    { type: "order", english: "I speak Yoruba and English", words: ["àti", "Gẹ̀ẹ́sì", "Mo", "Yorùbá", "sọ"], answer: ["Mo", "sọ", "Yorùbá", "àti", "Gẹ̀ẹ́sì"] },
  ],
};

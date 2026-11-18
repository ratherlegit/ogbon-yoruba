import type { Lesson } from "../types";

export const i11: Lesson = {
  id: "i-11",
  level: "intermediate",
  title: "Myself and yourself: ara",
  sources: [
    "Written for this site from commonly taught forms (ara, body, followed by the owner for myself, yourself and so on; Ara mi kò yá for I do not feel well; Ṣe ara rẹ nílé for make yourself at home). No published source was consulted. Every line needs a native speaker's check, especially Ara mi kò yá and the tone of rẹ and rẹ̀.",
    "Builds on Intermediate 2 (the owner comes second: ìwé mi). The same owner words follow ara. Beginner 5 teaches commands, which Ṣe ara rẹ nílé uses.",
  ],
  primer: {
    rule: "Yoruba says myself with the word ara, body, and the owner after it: ara mi, my body, so myself. The same owner words as in ìwé mi follow ara.",
    formula: "ara + owner: ara mi, ara rẹ, ara rẹ̀",
    tables: [
      {
        id: "ara-owners",
        title: "ara with each owner",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["myself", "ara mi"],
          ["yourself", "ara rẹ"],
          ["himself, herself", "ara rẹ̀"],
          ["ourselves", "ara wa"],
          ["yourselves", "ara yín"],
          ["themselves", "ara wọn"],
        ],
        note: "Your (one person) is rẹ. His or her is rẹ̀ with a low tone.",
      },
      {
        id: "ara-sentences",
        title: "ara in sentences",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["I like myself", "Mo fẹ́ràn ara mi"],
          ["He taught himself Yoruba", "Ó kọ́ ara rẹ̀ ní Yorùbá"],
          ["Make yourself at home", "Ṣe ara rẹ nílé"],
          ["I do not feel well", "Ara mi kò yá"],
        ],
      },
    ],
    rules: [
      {
        id: "ara-owner",
        title: "ara comes first, the owner second",
        explanation: [
          "ara mi: myself.",
          "ara wa: ourselves.",
          "The order is the same as ìwé mi, my book.",
        ],
      },
      {
        id: "object",
        title: "ara can be what the verb acts on",
        explanation: [
          "Mo fẹ́ràn ara mi: I like myself.",
          "Put ara and the owner right after the verb.",
        ],
      },
      {
        id: "feeling",
        title: "ara also describes how you feel",
        explanation: [
          "Ara mi kò yá: my body is not well, so I do not feel well.",
          "Here ara is the subject at the start of the sentence.",
        ],
      },
    ],
    examples: [
      {
        id: "mo-feran-ara-mi", surface: "Mo fẹ́ràn ara mi", english: "I like myself",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "fẹ́ràn", gloss: "like", role: "verb" },
          { text: "ara", gloss: "body, self", role: "noun" },
          { text: "mi", gloss: "my", role: "pronoun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones.",
      },
      {
        id: "o-ko-ara-re-ni-yoruba", surface: "Ó kọ́ ara rẹ̀ ní Yorùbá", english: "He taught himself Yoruba",
        parts: [
          { text: "Ó", gloss: "he, she, it", role: "pronoun" },
          { text: "kọ́", gloss: "teach", role: "verb" },
          { text: "ara", gloss: "body, self", role: "noun" },
          { text: "rẹ̀", gloss: "his, her", role: "pronoun" },
          { text: "ní", gloss: "in", role: "preposition" },
          { text: "Yorùbá", gloss: "Yoruba", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm kọ́ ... ní for teach someone a language.",
      },
      {
        id: "se-ara-re-nile", surface: "Ṣe ara rẹ nílé", english: "Make yourself at home",
        parts: [
          { text: "Ṣe", gloss: "make, do", role: "verb" },
          { text: "ara", gloss: "body, self", role: "noun" },
          { text: "rẹ", gloss: "your", role: "pronoun" },
          { text: "nílé", gloss: "at home", role: "adverb" },
        ],
        steps: [], confidence: "needs-review",
        note: "A set phrase for welcoming a guest. Confirm the form.",
      },
      {
        id: "ara-mi-ko-ya", surface: "Ara mi kò yá", english: "I do not feel well",
        parts: [
          { text: "Ara", gloss: "body", role: "noun" },
          { text: "mi", gloss: "my", role: "pronoun" },
          { text: "kò", gloss: "not", role: "negation" },
          { text: "yá", gloss: "be well", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm yá for feeling better.",
      },
    ],
    commonMistake: {
      wrong: "mi ara",
      right: "ara mi",
      why: "The owner comes second. ara mi, not mi ara.",
    },
  },
  questions: [
    { type: "pick", prompt: "Which one is the correct order for \"ourselves\"?", choices: ["ara wa", "wa ara", "ara mi"], answer: 0 },
    { type: "pick", prompt: "Which one means \"I like myself\"?", choices: ["Mo fẹ́ràn ara mi", "Mo fẹ́ràn ara rẹ̀", "Ó fẹ́ràn ara mi"], answer: 0, wordId: "mo-feran-ara-mi" },
    { type: "blank", prompt: "Ó kọ́ ara ___ ní Yorùbá. (He taught himself Yoruba.)", answer: "rẹ̀", choices: ["rẹ̀", "mi", "wa"], wordId: "o-ko-ara-re-ni-yoruba" },
    { type: "blank", prompt: "Ara ___ kò yá. (I do not feel well.)", answer: "mi", choices: ["mi", "wa", "wọn"], wordId: "ara-mi-ko-ya" },
    { type: "pick", prompt: "What does Ara mi kò yá say about you?", choices: ["You do not feel well", "You do not like yourself", "You have no body"], answer: 0, wordId: "ara-mi-ko-ya" },
    { type: "pick", prompt: "You welcome a guest into your home. What do you say?", choices: ["Ṣe ara rẹ nílé", "Mo fẹ́ràn ara mi", "Ara mi kò yá"], answer: 0, wordId: "se-ara-re-nile" },
    { type: "order", english: "I like myself", words: ["ara", "Mo", "mi", "fẹ́ràn"], answer: ["Mo", "fẹ́ràn", "ara", "mi"] },
    { type: "order", english: "Make yourself at home", words: ["rẹ", "nílé", "Ṣe", "ara"], answer: ["Ṣe", "ara", "rẹ", "nílé"] },
  ],
};

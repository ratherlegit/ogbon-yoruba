import type { Lesson } from "../types";

export const i12: Lesson = {
  id: "i-12",
  level: "intermediate",
  title: "Mixing Yoruba and English the way people speak",
  sources: [
    "Written for this site to show how many Yoruba speakers mix English nouns into Yoruba sentences in everyday talk. The English words are kept in plain English spelling, with no tone marks. No published source was consulted. Every line needs a native speaker's check, especially which English words feel natural, whether àwọn phone or àwọn phones is more common, and how the audio reads the English words.",
    "Builds on Beginner 3 (ń), Beginner 6 (kò sí), Intermediate 1 (ti), Intermediate 2 (the owner comes second) and Intermediate 4 (àwọn). Everything else in the course keeps the Yoruba word. This lesson explains the habit of dropping an English word into a Yoruba sentence.",
  ],
  primer: {
    rule: "In casual speech, an English noun can take the place of a Yoruba noun. The Yoruba grammar words around it stay Yoruba: ń, ti, kò, ṣé, àwọn, and the owner words such as mi. The English word keeps its English shape.",
    formula: "Yoruba sentence with an English noun (Mo ń wo movie: I am watching a movie)",
    tables: [
      {
        id: "mixed-sentences",
        title: "Mixed sentences",
        columns: [{ label: "English" }, { label: "Mixed Yoruba" }],
        listen: 1,
        rows: [
          ["I am at the office", "Mo wà ní office"],
          ["I am watching a movie", "Mo ń wo movie"],
          ["My phone has run out", "Phone mi ti tán"],
          ["There is no network", "Kò sí network"],
          ["Have you bought data?", "Ṣé o ti ra data"],
          ["My friends are coming", "Àwọn friends mi ń wá"],
          ["I am charging my phone", "Mo ń charge phone mi"],
        ],
        note: "The Yoruba words keep the sentence in Yoruba order. The English words fill the noun spots.",
      },
    ],
    rules: [
      {
        id: "noun-slot",
        title: "English nouns fill Yoruba noun slots",
        explanation: [
          "Mo wà ní office: ní is Yoruba, office is English.",
          "Mo ń wo movie: ń and wo are Yoruba, movie is English.",
        ],
      },
      {
        id: "grammar-stays",
        title: "The grammar words stay Yoruba",
        explanation: [
          "ń, ti, kò, kò sí and ṣé work the same as in a Yoruba sentence.",
          "Kò sí network: there is no network.",
          "Ṣé o ti ra data? Have you bought data?",
        ],
      },
      {
        id: "owner-and-plural",
        title: "Owner and plural words do not change",
        explanation: [
          "The owner still comes second: phone mi, my phone.",
          "Plural uses àwọn: àwọn friends mi, my friends.",
          "The English word is not changed to fit.",
        ],
      },
      {
        id: "when",
        title: "When to mix",
        explanation: [
          "Mixing is common among friends and in technology talk.",
          "With elders, or in a formal setting, use the full Yoruba word.",
        ],
      },
    ],
    examples: [
      {
        id: "mo-wa-ni-office", surface: "Mo wà ní office", english: "I am at the office",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
          { text: "ní", gloss: "at", role: "preposition" },
          { text: "office", gloss: "office (English)", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm that people say this in mixed speech.",
      },
      {
        id: "mo-n-wo-movie", surface: "Mo ń wo movie", english: "I am watching a movie",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "ń", gloss: "(ongoing)", role: "particle" },
          { text: "wo", gloss: "watch, look", role: "verb" },
          { text: "movie", gloss: "movie (English)", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the natural wording.",
      },
      {
        id: "phone-mi-ti-tan", surface: "Phone mi ti tán", english: "My phone has run out",
        parts: [
          { text: "Phone", gloss: "phone (English)", role: "noun" },
          { text: "mi", gloss: "my", role: "pronoun" },
          { text: "ti", gloss: "(already done)", role: "particle" },
          { text: "tán", gloss: "run out, finish", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Same pattern as the vocab sentence with fóònù mi ti tán.",
      },
      {
        id: "ko-si-network", surface: "Kò sí network", english: "There is no network",
        parts: [
          { text: "Kò sí", gloss: "there is not", role: "negation" },
          { text: "network", gloss: "network (English)", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm kò sí with an English noun.",
      },
      {
        id: "awon-friends-mi-n-wa", surface: "Àwọn friends mi ń wá", english: "My friends are coming",
        parts: [
          { text: "Àwọn", gloss: "(plural)", role: "particle" },
          { text: "friends", gloss: "friends (English)", role: "noun" },
          { text: "mi", gloss: "my", role: "pronoun" },
          { text: "ń", gloss: "(ongoing)", role: "particle" },
          { text: "wá", gloss: "come", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm whether àwọn friends or àwọn friend is more natural.",
      },
    ],
    commonMistake: {
      wrong: "My phone ti tán",
      right: "Phone mi ti tán",
      why: "The owner word mi follows the noun, even when the noun is English.",
    },
  },
  questions: [
    { type: "pick", prompt: "In Mo ń wo movie, which part is English?", choices: ["The word movie", "The word ń", "The word wo"], answer: 0, wordId: "mo-n-wo-movie" },
    { type: "pick", prompt: "Where does mi go in a mixed sentence about your phone?", choices: ["After the noun: phone mi", "Before the noun: mi phone", "At the end of the sentence"], answer: 0, wordId: "phone-mi-ti-tan" },
    { type: "blank", prompt: "___ sí network. (There is no network.)", answer: "Kò", choices: ["Kò", "Ṣé", "Mo"], wordId: "ko-si-network" },
    { type: "blank", prompt: "Mo wà ___ office. (I am at the office.)", answer: "ní", choices: ["ní", "ń", "ti"], wordId: "mo-wa-ni-office" },
    { type: "pick", prompt: "Which word makes a plural in a mixed sentence?", choices: ["The word àwọn", "The word mi", "The word ń"], answer: 0, wordId: "awon-friends-mi-n-wa" },
    { type: "pick", prompt: "You are talking with an elder you do not know well. What is the better choice?", choices: ["Use the full Yoruba word", "Use as much English as you can", "Avoid every Yoruba grammar word"], answer: 0 },
    { type: "order", english: "My phone has run out", words: ["tán", "mi", "Phone", "ti"], answer: ["Phone", "mi", "ti", "tán"] },
    { type: "order", english: "My friends are coming", words: ["ń", "mi", "Àwọn", "wá", "friends"], answer: ["Àwọn", "friends", "mi", "ń", "wá"] },
  ],
};

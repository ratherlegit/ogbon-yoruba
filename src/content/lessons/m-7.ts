import type { Lesson } from "../types";

export const m7: Lesson = {
  id: "m-7",
  level: "mastery",
  title: "Maybe and if only: bóyá and ìbá ṣe pé",
  sources: [
    "Written for this site from commonly taught forms (bóyá before a clause for maybe or whether; ìbá ṣe pé before a clause for if only). No published source was consulted. Every line needs a native speaker's check. This is the lesson with the most doubt: the tones of bóyá and ìbá, whether ìbá ṣe pé is used this way in everyday speech, and the tone of mọ̀ in N kò mọ̀ bóyá.",
    "Builds on Advanced 5 (pé after a verb of saying), Mastery 3 (if and because) and Beginner 2 (n kò). Mastery 3 teaches bí and tí for if. This lesson teaches maybe, whether, and a wish about something that did not happen.",
  ],
  primer: {
    rule: "Put bóyá before a sentence to say maybe. The same word after a verb such as know means whether. Put ìbá ṣe pé before a sentence to say if only, a wish about something that did not happen.",
    formula: "bóyá + clause (Maybe he is at home); kò mọ̀ bóyá + clause (I do not know whether ...); ìbá ṣe pé + clause (If only ...)",
    tables: [
      {
        id: "maybe-whether-if-only",
        title: "Maybe, whether and if only",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["Maybe he is at home", "Bóyá ó wà ní ilé"],
          ["Maybe it will rain", "Bóyá òjò máa rọ̀"],
          ["Maybe he has gone", "Bóyá ó ti lọ"],
          ["I do not know whether he is at home", "N kò mọ̀ bóyá ó wà ní ilé"],
          ["If only I knew", "Ìbá ṣe pé mo mọ̀"],
          ["If only he came", "Ìbá ṣe pé ó wá"],
        ],
        note: "bóyá and ìbá ṣe pé both start the clause. The clause after them is a normal sentence.",
      },
    ],
    rules: [
      {
        id: "boya-maybe",
        title: "bóyá at the start means maybe",
        explanation: [
          "Bóyá ó wà ní ilé: maybe he is at home.",
          "The sentence after bóyá is a normal sentence with its own subject.",
        ],
      },
      {
        id: "boya-whether",
        title: "bóyá after know means whether",
        explanation: [
          "N kò mọ̀ bóyá ó wà ní ilé: I do not know whether he is at home.",
          "The same word, put after a verb such as mọ̀, know.",
        ],
      },
      {
        id: "iba-se-pe",
        title: "ìbá ṣe pé is if only",
        explanation: [
          "Ìbá ṣe pé mo mọ̀: if only I knew.",
          "It wishes for something that is not true.",
          "It is different from bí, if, which talks about something that could still happen.",
        ],
      },
    ],
    examples: [
      {
        id: "boya-o-wa-ni-ile", surface: "Bóyá ó wà ní ilé", english: "Maybe he is at home",
        parts: [
          { text: "Bóyá", gloss: "maybe", role: "adverb" },
          { text: "ó", gloss: "he, she, it", role: "pronoun" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
          { text: "ní", gloss: "at", role: "preposition" },
          { text: "ilé", gloss: "home", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones of bóyá.",
      },
      {
        id: "boya-oja-maa-ro", surface: "Bóyá òjò máa rọ̀", english: "Maybe it will rain",
        parts: [
          { text: "Bóyá", gloss: "maybe", role: "adverb" },
          { text: "òjò", gloss: "rain", role: "noun" },
          { text: "máa", gloss: "will", role: "particle" },
          { text: "rọ̀", gloss: "fall (of rain)", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm rọ̀ for rain falling.",
      },
      {
        id: "n-ko-mo-boya", surface: "N kò mọ̀ bóyá ó wà ní ilé", english: "I do not know whether he is at home",
        parts: [
          { text: "N", gloss: "I (before kò)", role: "pronoun" },
          { text: "kò", gloss: "not", role: "negation" },
          { text: "mọ̀", gloss: "know", role: "verb" },
          { text: "bóyá", gloss: "whether", role: "conjunction" },
          { text: "ó", gloss: "he, she, it", role: "pronoun" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
          { text: "ní", gloss: "at", role: "preposition" },
          { text: "ilé", gloss: "home", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the low tone on mọ̀.",
      },
      {
        id: "iba-se-pe-mo-mo", surface: "Ìbá ṣe pé mo mọ̀", english: "If only I knew",
        parts: [
          { text: "Ìbá ṣe pé", gloss: "if only", role: "conjunction" },
          { text: "mo", gloss: "I", role: "pronoun" },
          { text: "mọ̀", gloss: "know", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm ìbá ṣe pé and the tones.",
      },
    ],
    commonMistake: {
      wrong: "Ó wà ní ilé bóyá",
      right: "Bóyá ó wà ní ilé",
      why: "bóyá comes before the sentence it covers, not after it.",
    },
  },
  questions: [
    { type: "pick", prompt: "Where does bóyá go when you say maybe?", choices: ["At the start, before the sentence", "At the end of the sentence", "Between the verb and the noun"], answer: 0, wordId: "boya-o-wa-ni-ile" },
    { type: "pick", prompt: "Which one means \"Maybe it will rain\"?", choices: ["Bóyá òjò máa rọ̀", "Ìbá ṣe pé òjò máa rọ̀", "N kò mọ̀ òjò máa rọ̀"], answer: 0, wordId: "boya-oja-maa-ro" },
    { type: "blank", prompt: "N kò mọ̀ ___ ó wà ní ilé. (I do not know whether he is at home.)", answer: "bóyá", choices: ["bóyá", "ìbá", "tí"], wordId: "n-ko-mo-boya" },
    { type: "blank", prompt: "___ ṣe pé mo mọ̀. (If only I knew.)", answer: "Ìbá", choices: ["Ìbá", "Bóyá", "Kò"], wordId: "iba-se-pe-mo-mo" },
    { type: "pick", prompt: "What does ìbá ṣe pé express?", choices: ["A wish about something that is not true", "A guess about something that may be true", "A question with yes or no"], answer: 0, wordId: "iba-se-pe-mo-mo" },
    { type: "pick", prompt: "You are not sure if your friend is home. Which one fits?", choices: ["Bóyá ó wà ní ilé", "Ìbá ṣe pé ó wà ní ilé", "Kò sí ilé"], answer: 0, wordId: "boya-o-wa-ni-ile" },
    { type: "order", english: "Maybe he has gone", words: ["lọ", "ó", "Bóyá", "ti"], answer: ["Bóyá", "ó", "ti", "lọ"] },
    { type: "order", english: "If only I knew", words: ["mọ̀", "pé", "ṣe", "Ìbá", "mo"], answer: ["Ìbá", "ṣe", "pé", "mo", "mọ̀"] },
  ],
};

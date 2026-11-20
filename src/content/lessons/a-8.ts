import type { Lesson } from "../types";

export const a8: Lesson = {
  id: "a-8",
  level: "advanced",
  title: "Again and too: tún and náà",
  sources: [
    "Written for this site from commonly taught forms (tún before a verb for again; náà after a pronoun for too or also). The vocab sentences with tún and the dialogue and lesson sentences with náà were consulted for spelling. No published source was consulted for the rule. Every line needs a native speaker's check, especially the tone of tún and the placement of náà in a longer sentence.",
    "Builds on Intermediate 1 (ti before a verb) and the pronouns from Getting Started 3. Advanced 4 shows náà after a noun, as in ọkùnrin náà (that man). This lesson teaches náà after a pronoun, where it means too.",
  ],
  primer: {
    rule: "Put tún right before a verb to say you do it again. Put náà right after a pronoun to say you too. tún goes before the verb and náà goes after the person.",
    formula: "subject + tún + verb (I went again); pronoun + náà + verb (I want to go too)",
    tables: [
      {
        id: "again-and-too",
        title: "Again and too",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["I went again", "Mo tún lọ"],
          ["He came again", "Ó tún wá"],
          ["I read it again", "Mo tún kà á"],
          ["Do it again", "Tún ṣe é"],
          ["Me too", "Èmi náà"],
          ["You too", "Ìwọ náà"],
          ["I want to go too", "Èmi náà fẹ́ lọ"],
          ["She is working too", "Òun náà ń ṣiṣẹ́"],
        ],
        note: "tún goes before the verb. náà goes after the person it adds.",
      },
    ],
    rules: [
      {
        id: "tun",
        title: "tún means again",
        explanation: [
          "Put tún before the verb: Ó tún wá, he came again.",
          "With a command, tún starts the sentence: Tún ṣe é.",
        ],
      },
      {
        id: "naa",
        title: "náà after a pronoun means too",
        explanation: [
          "Èmi náà: me too.",
          "Èmi náà fẹ́ lọ: I want to go too.",
          "náà adds the person before it to the group.",
        ],
      },
      {
        id: "tun-vs-naa",
        title: "tún is about the action, náà is about the person",
        explanation: [
          "Mo tún lọ: I went again, the same person doing the action a second time.",
          "Èmi náà lọ: I went too, another person doing it.",
        ],
      },
    ],
    examples: [
      {
        id: "mo-tun-lo", surface: "Mo tún lọ", english: "I went again",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "tún", gloss: "again", role: "adverb" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the high tone on tún.",
      },
      {
        id: "o-tun-wa", surface: "Ó tún wá", english: "He came again",
        parts: [
          { text: "Ó", gloss: "he, she, it", role: "pronoun" },
          { text: "tún", gloss: "again", role: "adverb" },
          { text: "wá", gloss: "come", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones.",
      },
      {
        id: "emi-naa-fe-lo", surface: "Èmi náà fẹ́ lọ", english: "I want to go too",
        parts: [
          { text: "Èmi", gloss: "I (emphatic)", role: "pronoun" },
          { text: "náà", gloss: "too", role: "particle" },
          { text: "fẹ́", gloss: "want", role: "verb" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm náà after èmi.",
      },
      {
        id: "oun-naa-n-sise", surface: "Òun náà ń ṣiṣẹ́", english: "She is working too",
        parts: [
          { text: "Òun", gloss: "she, he (emphatic)", role: "pronoun" },
          { text: "náà", gloss: "too", role: "particle" },
          { text: "ń", gloss: "(ongoing)", role: "particle" },
          { text: "ṣiṣẹ́", gloss: "work", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm òun náà ń ṣiṣẹ́.",
      },
    ],
    commonMistake: {
      wrong: "Mo lọ tún",
      right: "Mo tún lọ",
      why: "tún goes before the verb, never after it.",
    },
  },
  questions: [
    { type: "pick", prompt: "Where does tún go in a sentence?", choices: ["Right before the verb", "After the verb", "After the noun"], answer: 0, wordId: "mo-tun-lo" },
    { type: "pick", prompt: "Which one means \"I want to go too\"?", choices: ["Èmi náà fẹ́ lọ", "Mo tún fẹ́ lọ", "Èmi tún fẹ́ lọ"], answer: 0, wordId: "emi-naa-fe-lo" },
    { type: "blank", prompt: "Mo ___ lọ. (I went again.)", answer: "tún", choices: ["tún", "náà", "ti"], wordId: "mo-tun-lo" },
    { type: "blank", prompt: "Èmi ___ fẹ́ lọ. (I want to go too.)", answer: "náà", choices: ["náà", "tún", "kò"], wordId: "emi-naa-fe-lo" },
    { type: "pick", prompt: "A friend says Mo tún lọ. Who went more than once?", choices: ["The friend", "Someone else", "Nobody"], answer: 0, wordId: "mo-tun-lo" },
    { type: "pick", prompt: "Which one adds another person to the group?", choices: ["Òun náà ń ṣiṣẹ́", "Ó tún ń ṣiṣẹ́", "Ó ti ṣiṣẹ́"], answer: 0, wordId: "oun-naa-n-sise" },
    { type: "order", english: "He came again", words: ["wá", "Ó", "tún"], answer: ["Ó", "tún", "wá"] },
    { type: "order", english: "She is working too", words: ["ń", "náà", "Òun", "ṣiṣẹ́"], answer: ["Òun", "náà", "ń", "ṣiṣẹ́"] },
  ],
};

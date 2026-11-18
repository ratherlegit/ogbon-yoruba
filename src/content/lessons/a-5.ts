import type { Lesson } from "../types";

export const a5: Lesson = {
  id: "a-5",
  level: "advanced",
  title: "Saying and thinking: pé",
  sources: [
    "Wiktionary, \"pe\" (pé, that). The pattern verb + pé + clause appears in the Mastery vocab sentence ... àwọn ará ìlú ń sọ pé erin wó (the townspeople were saying that the elephant fell), the Advanced vocab sentence ... gbàgbọ́ pé Ọlọ́run ló dá ayé (believe that God created the world), and a dialogue line Ṣé ẹ ń sọ pé ìṣòro yóò parí? (Are you saying the trouble will end?). No published source was consulted for the lesson's own sentences. Every line needs a native speaker's check, especially the tones on rò and the use of òun in Ó sọ pé òun ń lọ.",
    "Builds on sọ and gbọ́ (Getting Started 5), mọ̀ (Beginner 2), wà ní (Beginner 7), ti (Intermediate 1) and the long pronoun òun from the table in Getting Started 3. Mastery 3 uses pé inside the fixed phrase nítorí pé (because); this lesson teaches pé on its own, meaning that.",
  ],
  primer: {
    rule: "After a verb of saying, hearing, thinking or knowing, use pé to introduce what was said, heard, thought or known. A whole sentence follows pé.",
    formula: "subject + sọ / gbọ́ / rò / mọ̀ + pé + sentence",
    tables: [
      {
        id: "pe-verbs",
        title: "Verbs that take pé",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["say", "sọ"],
          ["hear", "gbọ́"],
          ["think", "rò"],
          ["know", "mọ̀"],
        ],
        note: "sọ and gbọ́ are the same words as in Getting Started 5. Here they carry a whole sentence after them.",
      },
      {
        id: "pe-sentences",
        title: "Saying, hearing, thinking and knowing",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["He said that he has gone", "Ó sọ pé ó ti lọ"],
          ["I heard that he has gone", "Mo gbọ́ pé ó ti lọ"],
          ["I think that it is good", "Mo rò pé ó dára"],
          ["I know that she is at home", "Mo mọ̀ pé ó wà ní ilé"],
          ["He said that he himself is going", "Ó sọ pé òun ń lọ"],
          ["Do you know that he has gone?", "Ṣé o mọ̀ pé ó ti lọ?"],
        ],
        note: "Compare Ó sọ pé ó ti lọ (someone else has gone) with Ó sọ pé òun ń lọ (he himself is going).",
      },
    ],
    rules: [
      {
        id: "pe-that",
        title: "pé means that",
        explanation: [
          "Put pé right after the verb: Ó sọ pé ...",
          "It joins the verb to what was said, thought or known.",
        ],
      },
      {
        id: "full-sentence",
        title: "A whole sentence follows pé",
        explanation: [
          "The sentence after pé has its own subject and verb: Mo mọ̀ pé ó wà ní ilé.",
          "Do not leave pé out. Without it the two parts do not join.",
        ],
      },
      {
        id: "oun-same-person",
        title: "òun means the speaker himself",
        explanation: [
          "Ó sọ pé òun ń lọ: he said that he himself is going.",
          "Ó sọ pé ó ń lọ: he said that someone else is going.",
          "òun points back to the person who said it, while ó is a different person.",
        ],
      },
      {
        id: "pe-not-because",
        title: "pé alone is not because",
        explanation: [
          "pé alone means that.",
          "Mastery 3 teaches nítorí pé, which together means because.",
        ],
      },
    ],
    examples: [
      {
        id: "o-so-pe-o-ti-lo", surface: "Ó sọ pé ó ti lọ", english: "He said that he (someone else) has gone",
        parts: [
          { text: "Ó", gloss: "he", role: "pronoun" },
          { text: "sọ", gloss: "say", role: "verb" },
          { text: "pé", gloss: "that", role: "conjunction" },
          { text: "ó", gloss: "he (another person)", role: "pronoun" },
          { text: "ti", gloss: "(already done)", role: "particle" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm that ó after pé points to another person.",
      },
      {
        id: "o-so-pe-oun-n-lo", surface: "Ó sọ pé òun ń lọ", english: "He said that he himself is going",
        parts: [
          { text: "Ó", gloss: "he", role: "pronoun" },
          { text: "sọ", gloss: "say", role: "verb" },
          { text: "pé", gloss: "that", role: "conjunction" },
          { text: "òun", gloss: "he himself", role: "pronoun" },
          { text: "ń", gloss: "(ongoing)", role: "particle" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm that òun refers back to the speaker here.",
      },
      {
        id: "mo-ro-pe-o-dara", surface: "Mo rò pé ó dára", english: "I think that it is good",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "rò", gloss: "think", role: "verb" },
          { text: "pé", gloss: "that", role: "conjunction" },
          { text: "ó", gloss: "it", role: "pronoun" },
          { text: "dára", gloss: "is good", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tone on rò.",
      },
      {
        id: "mo-mo-pe-o-wa", surface: "Mo mọ̀ pé ó wà ní ilé", english: "I know that she is at home",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "mọ̀", gloss: "know", role: "verb" },
          { text: "pé", gloss: "that", role: "conjunction" },
          { text: "ó", gloss: "she", role: "pronoun" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
          { text: "ní", gloss: "at", role: "preposition" },
          { text: "ilé", gloss: "home", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tone on mọ̀.",
      },
      {
        id: "mo-gbo-pe-o-ti-lo", surface: "Mo gbọ́ pé ó ti lọ", english: "I heard that he has gone",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "gbọ́", gloss: "hear", role: "verb" },
          { text: "pé", gloss: "that", role: "conjunction" },
          { text: "ó", gloss: "he", role: "pronoun" },
          { text: "ti", gloss: "(already done)", role: "particle" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm gbọ́ pé as hear that.",
      },
    ],
    commonMistake: {
      wrong: "Mo mọ̀ ó wà ní ilé",
      right: "Mo mọ̀ pé ó wà ní ilé",
      why: "After a verb of knowing, saying or thinking, pé introduces the sentence. Leaving it out breaks the link.",
    },
  },
  questions: [
    { type: "pick", prompt: "Ó sọ pé òun ń lọ. Who is going?", choices: ["The speaker himself", "Someone else", "Nobody"], answer: 0, wordId: "o-so-pe-oun-n-lo" },
    { type: "blank", prompt: "Mo mọ̀ ___ ó wà ní ilé. (I know that she is at home.)", answer: "pé", choices: ["pé", "láti", "tí"], wordId: "mo-mo-pe-o-wa" },
    { type: "blank", prompt: "Mo ___ pé ó dára. (I think that it is good.)", answer: "rò", choices: ["rò", "mọ̀", "sọ"], wordId: "mo-ro-pe-o-dara" },
    { type: "pick", prompt: "What does pé do in Ó sọ pé ó ti lọ?", choices: ["It introduces what was said", "It turns the sentence into a question", "It means because"], answer: 0, wordId: "o-so-pe-o-ti-lo" },
    { type: "pick", prompt: "Which means \"I heard that he has gone\"?", choices: ["Mo gbọ́ pé ó ti lọ", "Mo gbọ́ pé ó ń lọ", "Mo gbọ́ Yorùbá ti lọ"], answer: 0, wordId: "mo-gbo-pe-o-ti-lo" },
    { type: "pick", prompt: "Which one is wrong?", choices: ["Ó sọ pé ó ti lọ", "Ó sọ ó ti lọ", "Mo rò pé ó dára"], answer: 1, wordId: "o-so-pe-o-ti-lo" },
    { type: "order", english: "I know that she is at home", words: ["ilé", "wà", "Mo", "pé", "mọ̀", "ní", "ó"], answer: ["Mo", "mọ̀", "pé", "ó", "wà", "ní", "ilé"] },
    { type: "order", english: "I think that it is good", words: ["dára", "rò", "pé", "Mo", "ó"], answer: ["Mo", "rò", "pé", "ó", "dára"] },
  ],
};

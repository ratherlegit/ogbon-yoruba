import type { Lesson } from "../types";

export const m6: Lesson = {
  id: "m-6",
  level: "mastery",
  title: "Still and not yet: ṣì and kò tíì",
  sources: [
    "A dialogue note (Learning from the old) contains kò tíì dàgbà tó (not yet old enough), and the Mastery and Advanced vocab sentences use ṣì (still) before a verb. The lesson's own sentences were written for this site from the pattern ṣì + verb and kò tíì + verb as the negative of ti. No published source was consulted. Every line needs a native speaker's check, especially the tone of ṣì (low) and the long vowel in tíì.",
    "Builds on ti (already) from Intermediate 1, kò and the n form of mo (Beginner 2), ń (Beginner 3) and wà ní (Beginner 7). Beginner 2's kò says something was not done. This lesson's kò tíì says it has not been done yet.",
  ],
  primer: {
    rule: "Put ṣì before the verb to say something is still going on. Put kò tíì before the verb to say it has not happened yet. kò tíì is the opposite of ti (already).",
    formula: "subject + ṣì + verb; subject + kò tíì + verb",
    tables: [
      {
        id: "still-and-not-yet",
        title: "Already, still and not yet",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["I have eaten", "Mo ti jẹun"],
          ["I have not eaten yet", "N kò tíì jẹun"],
          ["He is still at home", "Ó ṣì wà ní ilé"],
          ["I am still reading", "Mo ṣì ń kà ìwé"],
          ["She is still sleeping", "Ó ṣì ń sùn"],
          ["He has not gone yet", "Kò tíì lọ"],
          ["Have you eaten yet?", "Ṣé o ti jẹun?"],
          ["No, I have not eaten yet", "Rárá, n kò tíì jẹun"],
        ],
        note: "ti, ṣì and kò tíì each go right before the verb.",
      },
    ],
    rules: [
      {
        id: "si-still",
        title: "ṣì means still",
        explanation: [
          "Put ṣì before the verb: Ó ṣì wà ní ilé.",
          "With an ongoing action, ṣì comes before ń: Mo ṣì ń kà ìwé.",
          "It has a low tone. It is not ṣé, the yes or no question word.",
        ],
      },
      {
        id: "ko-tii",
        title: "kò tíì means not yet",
        explanation: [
          "Put kò tíì right before the verb: Kò tíì lọ, he has not gone yet.",
          "For I, use n: N kò tíì jẹun.",
        ],
      },
      {
        id: "ti-vs-ko-tii",
        title: "kò tíì is the opposite of ti",
        explanation: [
          "Mo ti jẹun: I have already eaten.",
          "N kò tíì jẹun: I have not eaten yet.",
          "Answer Ṣé o ti jẹun? with Bẹ́ẹ̀ ni, mo ti jẹun, or with Rárá, n kò tíì jẹun.",
        ],
      },
      {
        id: "ko-vs-ko-tii",
        title: "kò tíì is not plain kò",
        explanation: [
          "N kò jẹun: I did not eat.",
          "N kò tíì jẹun: I have not eaten yet, but I may.",
          "The extra tíì keeps the door open.",
        ],
      },
    ],
    examples: [
      {
        id: "o-si-wa-ni-ile", surface: "Ó ṣì wà ní ilé", english: "He is still at home",
        parts: [
          { text: "Ó", gloss: "he, she, it", role: "pronoun" },
          { text: "ṣì", gloss: "still", role: "adverb" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
          { text: "ní", gloss: "at", role: "preposition" },
          { text: "ilé", gloss: "home", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the low tone on ṣì.",
      },
      {
        id: "mo-si-n-ka-iwe", surface: "Mo ṣì ń kà ìwé", english: "I am still reading",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "ṣì", gloss: "still", role: "adverb" },
          { text: "ń", gloss: "(ongoing)", role: "particle" },
          { text: "kà", gloss: "read", role: "verb" },
          { text: "ìwé", gloss: "book", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm that ṣì comes before ń.",
      },
      {
        id: "n-ko-tii-jeun", surface: "N kò tíì jẹun", english: "I have not eaten yet",
        parts: [
          { text: "N", gloss: "I (form used before kò)", role: "pronoun" },
          { text: "kò tíì", gloss: "not yet", role: "negation" },
          { text: "jẹun", gloss: "eat", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm kò tíì and the long vowel in tíì.",
      },
      {
        id: "ko-tii-lo", surface: "Kò tíì lọ", english: "He has not gone yet",
        parts: [
          { text: "Kò tíì", gloss: "not yet", role: "negation" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Same shape as Kò lọ (Beginner 2).",
      },
      {
        id: "se-o-ti-jeun", surface: "Ṣé o ti jẹun", english: "Have you eaten yet?",
        parts: [
          { text: "Ṣé", gloss: "starts a yes or no question", role: "question" },
          { text: "o", gloss: "you", role: "pronoun" },
          { text: "ti", gloss: "(already done)", role: "particle" },
          { text: "jẹun", gloss: "eat", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm Ṣé o ti jẹun? as the usual question.",
      },
    ],
    commonMistake: {
      wrong: "Kò lọ tíì",
      right: "Kò tíì lọ",
      why: "tíì goes right after kò and before the verb. It never comes after the verb.",
    },
  },
  questions: [
    { type: "pick", prompt: "How do N kò tíì jẹun and N kò jẹun differ?", choices: ["The first means not yet, the second means I did not eat", "The first means I did not eat, the second means not yet", "They mean the same"], answer: 0, wordId: "n-ko-tii-jeun" },
    { type: "pick", prompt: "Someone asks Ṣé o ti jẹun? and you have not eaten. What do you reply?", choices: ["Rárá, n kò tíì jẹun", "Bẹ́ẹ̀ ni, mo ti jẹun", "Rárá, mo ṣì jẹun"], answer: 0, wordId: "se-o-ti-jeun" },
    { type: "blank", prompt: "Ó ___ wà ní ilé. (He is still at home.)", answer: "ṣì", choices: ["ṣì", "ti", "kò"], wordId: "o-si-wa-ni-ile" },
    { type: "blank", prompt: "Kò ___ lọ. (He has not gone yet.)", answer: "tíì", choices: ["tíì", "ti", "ṣì"], wordId: "ko-tii-lo" },
    { type: "pick", prompt: "Which means \"I am still reading\"?", choices: ["Mo ṣì ń kà ìwé", "Mo ti kà ìwé", "N kò tíì kà ìwé"], answer: 0, wordId: "mo-si-n-ka-iwe" },
    { type: "pick", prompt: "Which one says that something has already happened?", choices: ["Mo ti jẹun", "N kò tíì jẹun", "Mo ṣì ń jẹun"], answer: 0, wordId: "se-o-ti-jeun" },
    { type: "order", english: "I have not eaten yet", words: ["jẹun", "tíì", "N", "kò"], answer: ["N", "kò", "tíì", "jẹun"] },
    { type: "order", english: "He is still at home", words: ["ilé", "ṣì", "wà", "Ó", "ní"], answer: ["Ó", "ṣì", "wà", "ní", "ilé"] },
  ],
};

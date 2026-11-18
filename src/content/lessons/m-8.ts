import type { Lesson } from "../types";

export const m8: Lesson = {
  id: "m-8",
  level: "mastery",
  title: "Everyday slang and casual talk",
  sources: [
    "Written for this site from commonly heard casual forms (a closing o for warmth; ṣé o gbọ́ and ṣebí as tag questions; Ó yá, Ó dáa and Kò sí wàhálà as casual replies). No published source was consulted. Every line needs a native speaker's check. Casual speech changes with region, age and group, so some of these may sound old or local to some speakers. Confirm each phrase and its tones before marking it verified.",
    "Builds on Beginner 4 (ṣé), Beginner 6 (kò sí) and Mastery 5 (blessings). Earlier lessons use the polite forms with ẹ for elders. This lesson shows the relaxed forms friends use with each other.",
  ],
  primer: {
    rule: "Friends speak in short, relaxed forms. Put o at the end of a greeting, thanks or warning to add warmth. Put ṣé o gbọ́ or ṣebí after a statement to ask for agreement. Use short replies such as Ó yá, Ó dáa and Kò sí wàhálà.",
    formula: "greeting + o; statement + ṣé o gbọ́; Ṣebí + sentence?",
    tables: [
      {
        id: "casual-phrases",
        title: "Casual phrases",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["Thanks (to a friend)", "Ẹ ṣé o"],
          ["Sorry, take it easy", "Pẹ̀lẹ́ o"],
          ["You hear? (do you agree?)", "Ṣé o gbọ́"],
          ["It is you, right?", "Ṣebí ìwọ ni"],
          ["Okay, let's go", "Ó yá"],
          ["It is fine", "Ó dáa"],
          ["No problem", "Kò sí wàhálà"],
        ],
        note: "Use these with friends and people your age. With elders, use the polite forms from earlier lessons.",
      },
    ],
    rules: [
      {
        id: "closing-o",
        title: "A closing o adds warmth",
        explanation: [
          "Pẹ̀lẹ́ o: sorry, take it easy.",
          "Ẹ ṣé o: thanks.",
          "o is not a word with its own meaning. It softens the sentence.",
        ],
      },
      {
        id: "tag",
        title: "Ask for agreement at the end",
        explanation: [
          "Ṣé o gbọ́? You hear me? Do you agree?",
          "Ṣebí ìwọ ni? It is you, right?",
          "ṣebí starts the sentence and expects the answer yes.",
        ],
      },
      {
        id: "short-replies",
        title: "Short replies",
        explanation: [
          "Ó yá: okay, let's go.",
          "Ó dáa: it is fine, good.",
          "Kò sí wàhálà: no problem, using kò sí from Beginner 6.",
        ],
      },
    ],
    examples: [
      {
        id: "pele-o", surface: "Pẹ̀lẹ́ o", english: "Sorry, take it easy",
        parts: [
          { text: "Pẹ̀lẹ́", gloss: "take it easy, sorry", role: "interjection" },
          { text: "o", gloss: "(adds warmth)", role: "particle" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones of pẹ̀lẹ́.",
      },
      {
        id: "se-o-gbo", surface: "Ṣé o gbọ́", english: "You hear? Do you agree?",
        parts: [
          { text: "Ṣé", gloss: "starts a yes or no question", role: "question" },
          { text: "o", gloss: "you", role: "pronoun" },
          { text: "gbọ́", gloss: "hear", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the casual use of Ṣé o gbọ́.",
      },
      {
        id: "o-ya", surface: "Ó yá", english: "Okay, let's go",
        parts: [
          { text: "Ó", gloss: "it", role: "pronoun" },
          { text: "yá", gloss: "be ready, fine", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the use of Ó yá for okay.",
      },
      {
        id: "ko-si-wahala", surface: "Kò sí wàhálà", english: "No problem",
        parts: [
          { text: "Kò sí", gloss: "there is not", role: "negation" },
          { text: "wàhálà", gloss: "trouble, problem", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the spelling and tones of wàhálà.",
      },
      {
        id: "se-bi-iwo-ni", surface: "Ṣebí ìwọ ni", english: "It is you, right?",
        parts: [
          { text: "Ṣebí", gloss: "right? isn't it", role: "question" },
          { text: "ìwọ", gloss: "you", role: "pronoun" },
          { text: "ni", gloss: "is", role: "particle" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones of ṣebí.",
      },
    ],
    commonMistake: {
      wrong: "Ẹ ṣé o",
      right: "Ẹ ṣeun",
      why: "With an elder you do not know well, the closing o is too casual. Use the full polite form.",
    },
  },
  questions: [
    { type: "pick", prompt: "What does the o at the end of Pẹ̀lẹ́ o do?", choices: ["It adds warmth to the sentence", "It turns it into a question", "It makes it negative"], answer: 0, wordId: "pele-o" },
    { type: "pick", prompt: "You make a statement and want your friend to agree. What do you add?", choices: ["Ṣé o gbọ́", "Kò sí wàhálà", "Pẹ̀lẹ́ o"], answer: 0, wordId: "se-o-gbo" },
    { type: "blank", prompt: "Kò sí ___. (No problem.)", answer: "wàhálà", choices: ["wàhálà", "ṣebí", "pẹ̀lẹ́"], wordId: "ko-si-wahala" },
    { type: "blank", prompt: "___ ìwọ ni? (It is you, right?)", answer: "Ṣebí", choices: ["Ṣebí", "Ó yá", "Ẹ ṣé"], wordId: "se-bi-iwo-ni" },
    { type: "pick", prompt: "A friend says let's leave now. Which reply agrees?", choices: ["Ó yá", "Ṣebí ìwọ ni", "Pẹ̀lẹ́ o"], answer: 0, wordId: "o-ya" },
    { type: "pick", prompt: "Who should you use these casual phrases with?", choices: ["Friends and people your age", "Elders you have just met", "Anyone, in any situation"], answer: 0 },
    { type: "order", english: "No problem", words: ["wàhálà", "sí", "Kò"], answer: ["Kò", "sí", "wàhálà"] },
    { type: "order", english: "You hear?", words: ["gbọ́", "Ṣé", "o"], answer: ["Ṣé", "o", "gbọ́"] },
  ],
};

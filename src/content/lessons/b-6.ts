import type { Lesson } from "../types";

export const b6: Lesson = {
  id: "b-6",
  level: "beginner",
  title: "There is and there is not: wà and kò sí",
  sources: [
    "Written for this site from commonly taught forms (wà there is or exists; kò sí there is none; kò ní do not have). No published source was consulted for this lesson. Every line needs a native speaker's check, especially the tones on wà and sí, and whether Ṣé ẹja wà? is the natural way to ask if there is fish.",
    "Builds on mo ní (have) from Getting Started 4, kò and the n form of mo from Beginner 2, and ṣé questions from Beginner 4. This lesson does not re-teach ní as have; it teaches existence.",
  ],
  primer: {
    rule: "Use wà to say something is there and kò sí to say there is none. Neither names an owner. To say who has nothing, use kò ní with the owner.",
    formula: "thing + wà (There is water); kò sí + thing (There is no water); owner + kò ní + thing (I do not have money)",
    tables: [
      {
        id: "things-to-look-for",
        title: "Things you might look for",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["water", "omi"],
          ["food", "oúnjẹ"],
          ["fish", "ẹja"],
          ["bread", "búrẹ́dì"],
          ["money", "owó"],
          ["book", "ìwé"],
        ],
        note: "These sit with wà and kò sí in the sentences below.",
      },
      {
        id: "there-is-and-is-not",
        title: "There is, there is none, and I have none",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["There is water", "Omi wà"],
          ["There is no water", "Kò sí omi"],
          ["Is there fish?", "Ṣé ẹja wà?"],
          ["Yes, there is", "Bẹ́ẹ̀ ni, ó wà"],
          ["No, there is none", "Rárá, kò sí"],
          ["I do not have money", "N kò ní owó"],
          ["We do not have water", "A ò ní omi"],
        ],
        note: "Kò sí owó says there is no money anywhere. N kò ní owó says that I have none.",
      },
    ],
    rules: [
      {
        id: "wa-there-is",
        title: "wà says something is there",
        explanation: [
          "Put wà after the thing: Omi wà, there is water.",
          "To ask, start with ṣé: Ṣé ẹja wà?",
        ],
      },
      {
        id: "ko-si",
        title: "kò sí says there is none",
        explanation: [
          "Put kò sí before the thing: Kò sí omi, there is no water.",
          "As a short answer, just say Kò sí.",
          "There is no owner in the sentence.",
        ],
      },
      {
        id: "ko-ni",
        title: "kò ní says who has none",
        explanation: [
          "This is mo ní (I have) from Getting Started 4, with kò before it: N kò ní owó.",
          "Mo becomes n before kò, and kò can shorten to ò: A ò ní omi.",
          "You must name the owner. Kò sí takes no owner, so use kò ní for that.",
        ],
      },
      {
        id: "wa-or-ni",
        title: "Pick by what you want to say",
        explanation: [
          "Is the thing there or not? Use wà or kò sí.",
          "Does a person have it or not? Use ní or kò ní.",
        ],
      },
    ],
    examples: [
      {
        id: "omi-wa", surface: "Omi wà", english: "There is water",
        parts: [
          { text: "Omi", gloss: "water", role: "noun" },
          { text: "wà", gloss: "is there", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm that Omi wà is the natural way to say there is water.",
      },
      {
        id: "ko-si-omi", surface: "Kò sí omi", english: "There is no water",
        parts: [
          { text: "Kò sí", gloss: "there is not", role: "negation" },
          { text: "omi", gloss: "water", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm kò sí as the negative of wà.",
      },
      {
        id: "se-eja-wa", surface: "Ṣé ẹja wà", english: "Is there fish?",
        parts: [
          { text: "Ṣé", gloss: "starts a yes or no question", role: "question" },
          { text: "ẹja", gloss: "fish", role: "noun" },
          { text: "wà", gloss: "is there", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm Ṣé ẹja wà? is natural.",
      },
      {
        id: "n-ko-ni-owo", surface: "N kò ní owó", english: "I do not have money",
        parts: [
          { text: "N", gloss: "I (form used before kò)", role: "pronoun" },
          { text: "kò", gloss: "not", role: "negation" },
          { text: "ní", gloss: "have", role: "verb" },
          { text: "owó", gloss: "money", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Follows N kò lọ from Beginner 2 and Mo ní from Getting Started 4. Confirm the tone of owó (money).",
      },
      {
        id: "a-o-ni-omi", surface: "A ò ní omi", english: "We do not have water",
        parts: [
          { text: "A", gloss: "we", role: "pronoun" },
          { text: "ò", gloss: "not (short form of kò)", role: "negation" },
          { text: "ní", gloss: "have", role: "verb" },
          { text: "omi", gloss: "water", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Built from A ò lọ (Beginner 2) and ní (Getting Started 4). Confirm the tones.",
      },
    ],
    commonMistake: {
      wrong: "N kò sí owó",
      right: "N kò ní owó",
      why: "Sí says only that something is not there, and it takes no owner. To say who has none, use ní after kò.",
    },
  },
  questions: [
    { type: "pick", prompt: "Which sentence names the person who has nothing?", choices: ["Kò sí owó", "N kò ní owó", "Owó wà"], answer: 1, wordId: "n-ko-ni-owo" },
    { type: "pick", prompt: "Which is the correct way to say \"I do not have money\"?", choices: ["Mo kò ní owó", "N kò ní owó", "N kò sí owó"], answer: 1, wordId: "n-ko-ni-owo" },
    { type: "blank", prompt: "Ṣé omi ___? (Is there water?)", answer: "wà", choices: ["wà", "ní", "sí"], wordId: "se-eja-wa" },
    { type: "blank", prompt: "A ò ___ omi. (We have no water.)", answer: "ní", choices: ["ní", "wà", "sí"], wordId: "a-o-ni-omi" },
    { type: "pick", prompt: "A friend asks Ṣé ẹja wà? and there is none. What do you reply?", choices: ["Bẹ́ẹ̀ ni, ó wà", "Rárá, kò sí", "Rárá, n kò ní"], answer: 1, wordId: "se-eja-wa" },
    { type: "pick", prompt: "Which sentence says water exists, without saying who owns it?", choices: ["Mo ní omi", "Omi wà", "A ò ní omi"], answer: 1, wordId: "omi-wa" },
    { type: "order", english: "We do not have water", words: ["omi", "ní", "A", "ò"], answer: ["A", "ò", "ní", "omi"] },
    { type: "order", english: "Is there fish?", words: ["wà", "ẹja", "Ṣé"], answer: ["Ṣé", "ẹja", "wà"] },
  ],
};

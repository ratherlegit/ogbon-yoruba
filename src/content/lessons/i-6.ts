import type { Lesson } from "../types";

export const i6: Lesson = {
  id: "i-6",
  level: "intermediate",
  title: "On, in and under: lórí, nínú, lábẹ́",
  sources: [
    "COERLL, Yorùbá Yé Mi (University of Texas at Austin), Chapter 4, page 90: Ìwé mẹ́ta ni ó wà lóríi tábìlì (there are three books on the table). The PDF uses a legacy font encoding for tone marks. COERLL writes lóríi with a long final vowel before the noun; this lesson writes lórí and notes the lengthening.",
    "COERLL, Yorùbá Yé Mi, Chapter 8, page 202: ... abẹ́rẹ́ nínú ojú (an injection in the eye): nínú as in. The sentence about the shoes under the chair and the other sentences were written for this lesson from those patterns. Every line needs a native speaker's check, especially the tones on lórí, nínú and lábẹ́ and the spoken lengthening.",
    "Builds on wà (Beginner 6) and Níbo ni ... wà? (Beginner 7). Beginner 7 says where someone is at a place with wà ní. This lesson says where one thing is in relation to another thing. Mastery 1 later explains how these forms join ní to another word.",
  ],
  primer: {
    rule: "To say where one thing is in relation to another, use wà and then lórí (on), nínú (in) or lábẹ́ (under), followed by the thing.",
    formula: "thing + wà + lórí / nínú / lábẹ́ + other thing",
    tables: [
      {
        id: "place-words",
        title: "Words for where things are",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["on", "lórí"],
          ["in", "nínú"],
          ["under", "lábẹ́"],
        ],
        note: "Learn each as one whole word. Each already holds ní inside it, so no extra ní.",
      },
      {
        id: "things-for-places",
        title: "Things to put things on, in and under",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["table", "tábìlì"],
          ["chair", "àga"],
          ["box", "àpótí"],
          ["bag", "àpò"],
        ],
        note: "ìwé, aṣọ, bàtà, owó and ajá from earlier lessons are the things you put there.",
      },
      {
        id: "where-sentences",
        title: "Where is it?",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["The book is on the table", "Ìwé wà lórí tábìlì"],
          ["The clothes are in the box", "Aṣọ wà nínú àpótí"],
          ["The shoes are under the chair", "Bàtà wà lábẹ́ àga"],
          ["The money is in the bag", "Owó wà nínú àpò"],
          ["The dog is under the table", "Ajá wà lábẹ́ tábìlì"],
          ["Where is the book?", "Níbo ni ìwé wà?"],
          ["It is on the table", "Ó wà lórí tábìlì"],
        ],
        note: "A question with Níbo ni ... wà? is answered with one of the three place words.",
      },
    ],
    rules: [
      {
        id: "lori",
        title: "lórí means on",
        explanation: [
          "Ìwé wà lórí tábìlì: the book is on the table.",
          "In fast speech you may hear a longer lóríi before the noun.",
        ],
      },
      {
        id: "ninu",
        title: "nínú means in",
        explanation: [
          "Aṣọ wà nínú àpótí: the clothes are in the box.",
        ],
      },
      {
        id: "labe",
        title: "lábẹ́ means under",
        explanation: [
          "Bàtà wà lábẹ́ àga: the shoes are under the chair.",
        ],
      },
      {
        id: "place-before-thing",
        title: "The place word goes between wà and the thing",
        explanation: [
          "Order: thing, wà, place word, other thing.",
          "Do not add ní: it is already inside lórí, nínú and lábẹ́.",
        ],
      },
    ],
    examples: [
      {
        id: "iwe-lori-tabili", surface: "Ìwé wà lórí tábìlì", english: "The book is on the table",
        parts: [
          { text: "Ìwé", gloss: "book", role: "noun" },
          { text: "wà", gloss: "is there", role: "verb" },
          { text: "lórí", gloss: "on", role: "preposition" },
          { text: "tábìlì", gloss: "table", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Based on COERLL Chapter 4, page 90 (lóríi tábìlì). Confirm the tones and the lengthening.",
      },
      {
        id: "aso-ninu-apoti", surface: "Aṣọ wà nínú àpótí", english: "The clothes are in the box",
        parts: [
          { text: "Aṣọ", gloss: "clothes", role: "noun" },
          { text: "wà", gloss: "is there", role: "verb" },
          { text: "nínú", gloss: "in", role: "preposition" },
          { text: "àpótí", gloss: "box", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on nínú and àpótí.",
      },
      {
        id: "bata-labe-aga", surface: "Bàtà wà lábẹ́ àga", english: "The shoes are under the chair",
        parts: [
          { text: "Bàtà", gloss: "shoes", role: "noun" },
          { text: "wà", gloss: "is there", role: "verb" },
          { text: "lábẹ́", gloss: "under", role: "preposition" },
          { text: "àga", gloss: "chair", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on lábẹ́ and àga.",
      },
      {
        id: "aja-labe-tabili", surface: "Ajá wà lábẹ́ tábìlì", english: "The dog is under the table",
        parts: [
          { text: "Ajá", gloss: "dog", role: "noun" },
          { text: "wà", gloss: "is there", role: "verb" },
          { text: "lábẹ́", gloss: "under", role: "preposition" },
          { text: "tábìlì", gloss: "table", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones.",
      },
      {
        id: "nibo-iwe-wa", surface: "Níbo ni ìwé wà", english: "Where is the book?",
        parts: [
          { text: "Níbo", gloss: "where", role: "question" },
          { text: "ni", gloss: "(focus word)", role: "particle" },
          { text: "ìwé", gloss: "book", role: "noun" },
          { text: "wà", gloss: "is there", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Same pattern as Níbo ni ọ̀rẹ́ rẹ wà? in Beginner 7.",
      },
    ],
    commonMistake: {
      wrong: "Ìwé wà ní lórí tábìlì",
      right: "Ìwé wà lórí tábìlì",
      why: "lórí already has ní inside it. Adding ní says it twice.",
    },
  },
  questions: [
    { type: "pick", prompt: "Aṣọ wà nínú àpótí. Where are the clothes?", choices: ["In the box", "On the box", "Under the box"], answer: 0, wordId: "aso-ninu-apoti" },
    { type: "pick", prompt: "Ìwé wà lábẹ́ àpò. Which one is on top?", choices: ["The bag", "The book", "Neither"], answer: 0, wordId: "bata-labe-aga" },
    { type: "pick", prompt: "Which one is wrong?", choices: ["Ìwé wà lórí tábìlì", "Ìwé wà ní lórí tábìlì", "Ìwé wà nínú àpò"], answer: 1, wordId: "iwe-lori-tabili" },
    { type: "blank", prompt: "Owó wà ___ àpò. (The money is in the bag.)", answer: "nínú", choices: ["nínú", "lórí", "lábẹ́"], wordId: "aso-ninu-apoti" },
    { type: "blank", prompt: "Níbo ni ajá wà? Ó wà ___ tábìlì. (Where is the dog? It is under the table.)", answer: "lábẹ́", choices: ["lábẹ́", "lórí", "ní"], wordId: "aja-labe-tabili" },
    { type: "pick", prompt: "Where does the place word go in a sentence like Ìwé wà lórí tábìlì?", choices: ["Between wà and the second thing", "At the very start", "After the second thing"], answer: 0, wordId: "iwe-lori-tabili" },
    { type: "order", english: "The book is on the table", words: ["tábìlì", "lórí", "wà", "Ìwé"], answer: ["Ìwé", "wà", "lórí", "tábìlì"] },
    { type: "order", english: "The shoes are under the chair", words: ["àga", "Bàtà", "lábẹ́", "wà"], answer: ["Bàtà", "wà", "lábẹ́", "àga"] },
  ],
};

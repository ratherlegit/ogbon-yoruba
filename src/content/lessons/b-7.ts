import type { Lesson } from "../types";

export const b7: Lesson = {
  id: "b-7",
  level: "beginner",
  title: "Where is it? wà ní",
  sources: [
    "Written for this site from commonly taught forms (wà ní for being at a place; níbo ni ... wà for where is). No published source was consulted for this lesson. Every line needs a native speaker's check, especially the tones on níbo, ọjà, ilé-ìwé and ọ́fíìsì.",
    "Builds on wà from Beginner 6, jẹ́ from Beginner 1, and the question word níbo from Beginner 4.",
  ],
  primer: {
    rule: "To say where someone or something is, use wà and then ní (at) with the place. To ask where, say níbo ni and end with wà.",
    formula: "subject + wà + ní + place (I am at the market); Níbo ni + subject + wà? (Where is ...?)",
    tables: [
      {
        id: "places",
        title: "Places",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["home, house", "ilé"],
          ["market", "ọjà"],
          ["school", "ilé-ìwé"],
          ["office", "ọ́fíìsì"],
          ["here", "níbí"],
          ["there", "níbẹ̀"],
        ],
        note: "níbí and níbẹ̀ already hold ní inside them, so they need no extra ní: Mo wà níbí, I am here.",
      },
      {
        id: "where-questions",
        title: "Where are you? Where is it?",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["I am at the market", "Mo wà ní ọjà"],
          ["He is at home", "Ó wà ní ilé"],
          ["We are at school", "A wà ní ilé-ìwé"],
          ["Where are you?", "Níbo ni o wà?"],
          ["Where is your friend?", "Níbo ni ọ̀rẹ́ rẹ wà?"],
          ["Are you at home?", "Ṣé o wà ní ilé?"],
          ["He is not at home", "Kò sí ní ilé"],
        ],
        note: "The answer to Níbo ni ... wà? repeats the pattern: Mo wà ní ọjà.",
      },
    ],
    rules: [
      {
        id: "wa-ni-place",
        title: "wà ní says where someone is",
        explanation: [
          "Put wà after the person, then ní and the place: Ó wà ní ilé.",
          "ní here means at or in.",
        ],
      },
      {
        id: "not-jẹ́",
        title: "A place is not jẹ́",
        explanation: [
          "jẹ́ names what someone is: Mo jẹ́ olùkọ́, I am a teacher.",
          "A place uses wà, not jẹ́: Mo wà ní ọjà.",
        ],
      },
      {
        id: "nibo-ni-wa",
        title: "Níbo ni ... wà? asks where",
        explanation: [
          "Start with níbo ni and end with wà: Níbo ni o wà?",
          "The person or thing goes in the middle: Níbo ni ọ̀rẹ́ rẹ wà?",
        ],
      },
      {
        id: "ko-si-ni",
        title: "kò sí ní says someone is not there",
        explanation: [
          "Put kò sí ní before the place: Kò sí ní ilé, he is not at home.",
          "It is the negative of wà ní.",
        ],
      },
    ],
    examples: [
      {
        id: "mo-wa-ni-oja", surface: "Mo wà ní ọjà", english: "I am at the market",
        parts: [
          { text: "Mo", gloss: "I", role: "pronoun" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
          { text: "ní", gloss: "at", role: "preposition" },
          { text: "ọjà", gloss: "market", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on ọjà and the whole pattern.",
      },
      {
        id: "o-wa-ni-ile", surface: "Ó wà ní ilé", english: "He (or she) is at home",
        parts: [
          { text: "Ó", gloss: "he, she, it", role: "pronoun" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
          { text: "ní", gloss: "at", role: "preposition" },
          { text: "ilé", gloss: "home", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones.",
      },
      {
        id: "a-wa-ni-ile-iwe", surface: "A wà ní ilé-ìwé", english: "We are at school",
        parts: [
          { text: "A", gloss: "we", role: "pronoun" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
          { text: "ní", gloss: "at", role: "preposition" },
          { text: "ilé-ìwé", gloss: "school", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on ilé-ìwé.",
      },
      {
        id: "nibo-ni-o-wa", surface: "Níbo ni o wà", english: "Where are you?",
        parts: [
          { text: "Níbo", gloss: "where", role: "question" },
          { text: "ni", gloss: "(focus word)", role: "particle" },
          { text: "o", gloss: "you", role: "pronoun" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm Níbo ni o wà? as the usual way to ask where someone is.",
      },
      {
        id: "nibo-ore-re", surface: "Níbo ni ọ̀rẹ́ rẹ wà", english: "Where is your friend?",
        parts: [
          { text: "Níbo", gloss: "where", role: "question" },
          { text: "ni", gloss: "(focus word)", role: "particle" },
          { text: "ọ̀rẹ́", gloss: "friend", role: "noun" },
          { text: "rẹ", gloss: "your", role: "pronoun" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on ọ̀rẹ́ and rẹ.",
      },
    ],
    commonMistake: {
      wrong: "Mo jẹ́ ní ọjà",
      right: "Mo wà ní ọjà",
      why: "jẹ́ names what you are, like a job. Where you are takes wà.",
    },
  },
  questions: [
    { type: "blank", prompt: "Mo ___ ní ọjà. (I am at the market.)", answer: "wà", choices: ["wà", "ní", "jẹ́"], wordId: "mo-wa-ni-oja" },
    { type: "pick", prompt: "Which one is wrong for \"I am at school\"?", choices: ["Mo wà ní ilé-ìwé", "Mo jẹ́ ní ilé-ìwé", "A wà ní ilé-ìwé"], answer: 1, wordId: "a-wa-ni-ile-iwe" },
    { type: "pick", prompt: "Which answers Níbo ni ọ̀rẹ́ rẹ wà?", choices: ["Ó wà ní ọjà", "Ó jẹ́ ọ̀rẹ́ mi", "Ó ń ra ẹja"], answer: 0, wordId: "nibo-ore-re", translation: "He or she is at the market" },
    { type: "pick", prompt: "Which one is wrong for \"I am here\"?", choices: ["Mo wà níbí", "Mo wà ní níbí", "Mo wà ní ilé"], answer: 1, wordId: "mo-wa-ni-oja" },
    { type: "blank", prompt: "Ṣé o wà ___ ilé? (Are you at home?)", answer: "ní", choices: ["ní", "jẹ́", "ń"], wordId: "o-wa-ni-ile" },
    { type: "pick", prompt: "Which means \"He is not at home\"?", choices: ["Ó wà ní ilé", "Kò sí ní ilé", "Kò ní ilé"], answer: 1, wordId: "o-wa-ni-ile" },
    { type: "order", english: "I am at the market", words: ["ọjà", "wà", "Mo", "ní"], answer: ["Mo", "wà", "ní", "ọjà"] },
    { type: "order", english: "Where is your friend?", words: ["wà", "ọ̀rẹ́", "ni", "Níbo", "rẹ"], answer: ["Níbo", "ni", "ọ̀rẹ́", "rẹ", "wà"] },
  ],
};

import type { Lesson } from "../types";

export const b5: Lesson = {
  id: "b-5",
  level: "beginner",
  title: "Commands and polite requests",
  sources: [
    "Written for this site from commonly taught forms (a command is the bare verb; ẹ before a verb addresses several people or someone senior; jọ̀wọ́ and ẹ jọ̀ọ́ for please; fún mi ní for give me). No published source was consulted for this lesson. Every line needs a native speaker's check, especially the tones on jọ̀wọ́, jọ̀ọ́, jókòó, dúró and gbọ́.",
    "Builds on the ẹ of Ẹ káàárọ̀ (Getting Started 2) and the verbs and nouns taught in Beginner 2.",
  ],
  primer: {
    rule: "To tell one person to do something, say just the verb. Start with ẹ to speak to several people or to someone older. Add jọ̀wọ́ (please) to be polite.",
    formula: "verb; ẹ + verb; jọ̀wọ́ + verb; fún mi ní + thing",
    tables: [
      {
        id: "command-verbs",
        title: "Verbs for commands",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["sit", "jókòó"],
          ["stand up", "dìde"],
          ["wait, stop", "dúró"],
          ["listen", "gbọ́"],
          ["look", "wò"],
          ["come", "wá"],
          ["go", "lọ"],
        ],
        note: "wá and lọ are from the last lessons. Each of these stands alone as a command.",
      },
      {
        id: "request-forms",
        title: "Commands and polite requests",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["Come", "Wá"],
          ["Come (to several people)", "Ẹ wá"],
          ["Please sit", "Jọ̀wọ́ jókòó"],
          ["Please sit (to an elder or a group)", "Ẹ jọ̀ọ́ ẹ jókòó"],
          ["Give me water", "Fún mi ní omi"],
          ["Please give me bread", "Jọ̀wọ́ fún mi ní búrẹ́dì"],
        ],
        note: "Put the thing you want right after ní: Fún mi ní omi, give me water.",
      },
    ],
    rules: [
      {
        id: "bare-verb",
        title: "A command is just the verb",
        explanation: [
          "To tell one person to do something, say only the verb: Wá, come. Lọ, go.",
          "Do not add o (you). O wá is a statement: you came.",
        ],
      },
      {
        id: "e-plural",
        title: "ẹ speaks to several people or an elder",
        explanation: [
          "Put ẹ before the verb: Ẹ wá, Ẹ jókòó.",
          "It is the same ẹ you met in Ẹ káàárọ̀.",
          "Use it for more than one person, or to show respect to one older person.",
        ],
      },
      {
        id: "please",
        title: "jọ̀wọ́ means please",
        explanation: [
          "Put jọ̀wọ́ before the command: Jọ̀wọ́ jókòó.",
          "To an elder or a group, use ẹ jọ̀ọ́ and then ẹ again: Ẹ jọ̀ọ́ ẹ jókòó.",
        ],
      },
      {
        id: "fun-mi-ni",
        title: "fún mi ní asks for something",
        explanation: [
          "fún mi ní means give me.",
          "The thing you want comes after ní: Fún mi ní omi.",
        ],
      },
    ],
    examples: [
      {
        id: "wa-cmd", surface: "Ẹ wá", english: "Come (to several people)",
        parts: [
          { text: "Ẹ", gloss: "you (several people, or respect)", role: "pronoun" },
          { text: "wá", gloss: "come", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Written for this lesson. Confirm that Ẹ wá is the normal polite or plural command.",
      },
      {
        id: "jowo-jokoo", surface: "Jọ̀wọ́ jókòó", english: "Please sit",
        parts: [
          { text: "Jọ̀wọ́", gloss: "please", role: "politeness" },
          { text: "jókòó", gloss: "sit", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on jọ̀wọ́ and jókòó.",
      },
      {
        id: "e-jo-e-joko", surface: "Ẹ jọ̀ọ́ ẹ jókòó", english: "Please sit (to an elder or a group)",
        parts: [
          { text: "Ẹ", gloss: "you (respect or several)", role: "pronoun" },
          { text: "jọ̀ọ́", gloss: "please", role: "politeness" },
          { text: "ẹ", gloss: "you (respect or several)", role: "pronoun" },
          { text: "jókòó", gloss: "sit", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the pattern ẹ jọ̀ọ́ ẹ + verb and the tone of jọ̀ọ́.",
      },
      {
        id: "fun-mi-omi", surface: "Fún mi ní omi", english: "Give me water",
        parts: [
          { text: "Fún", gloss: "give", role: "verb" },
          { text: "mi", gloss: "me", role: "pronoun" },
          { text: "ní", gloss: "(marks the thing given)", role: "particle" },
          { text: "omi", gloss: "water", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm fún mi ní and the tone of mi after fún.",
      },
      {
        id: "jowo-fun-mi", surface: "Jọ̀wọ́ fún mi ní búrẹ́dì", english: "Please give me bread",
        parts: [
          { text: "Jọ̀wọ́", gloss: "please", role: "politeness" },
          { text: "fún", gloss: "give", role: "verb" },
          { text: "mi", gloss: "me", role: "pronoun" },
          { text: "ní", gloss: "(marks the thing given)", role: "particle" },
          { text: "búrẹ́dì", gloss: "bread", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Built from the two patterns above. Confirm the tones.",
      },
    ],
    commonMistake: {
      wrong: "O wá",
      right: "Wá",
      why: "A command drops the pronoun. O wá says you came, a statement, not an order.",
    },
  },
  questions: [
    { type: "pick", prompt: "Which command is spoken to one friend your own age?", choices: ["Jókòó", "Ẹ jókòó", "Ẹ jọ̀ọ́ ẹ jókòó"], answer: 0, wordId: "jowo-jokoo" },
    { type: "pick", prompt: "Which of these is a statement, not a command?", choices: ["Wá", "Ẹ wá", "O wá"], answer: 2, wordId: "wa-cmd" },
    { type: "pick", prompt: "Where does the thing you are asking for go?", choices: ["Fún mi ní omi", "Fún omi mi ní", "Fún ní mi omi"], answer: 0, wordId: "fun-mi-omi" },
    { type: "blank", prompt: "Jọ̀wọ́ ___ mi ní omi. (Please give me water.)", answer: "fún", choices: ["fún", "mu", "wá"], wordId: "jowo-fun-mi" },
    { type: "blank", prompt: "Ẹ jọ̀ọ́ ___ jókòó. (Please sit, said to an elder.)", answer: "ẹ", choices: ["ẹ", "o", "jọ̀wọ́"], wordId: "e-jo-e-joko" },
    { type: "pick", prompt: "To an older person, which request is the most respectful?", choices: ["Jọ̀wọ́ jókòó", "Ẹ jọ̀ọ́ ẹ jókòó", "Jókòó"], answer: 1, wordId: "e-jo-e-joko" },
    { type: "order", english: "Please give me water", words: ["omi", "fún", "Jọ̀wọ́", "ní", "mi"], answer: ["Jọ̀wọ́", "fún", "mi", "ní", "omi"] },
    { type: "order", english: "All of you, read the book", words: ["ìwé", "kà", "Ẹ"], answer: ["Ẹ", "kà", "ìwé"] },
  ],
};

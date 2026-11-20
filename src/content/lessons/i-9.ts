import type { Lesson } from "../types";

export const i9: Lesson = {
  id: "i-9",
  level: "intermediate",
  title: "First, second, third: ordinal numbers",
  sources: [
    "Written for this site from commonly taught forms (a noun followed by kẹ- or ke- plus the number for the order; kìíní for first). The pattern is also seen in the vocab sentences oṣù kẹta (the third month) and ipò kìíní (first place). No published source was consulted. Every line needs a native speaker's check, especially the tones of karùn-ún, kẹsàn-án and kẹwàá.",
    "Builds on the counting numbers on the Numbers page and the rule that a number comes after the noun (ọmọ méjì, two children). This lesson teaches how to turn a counting number into an order word.",
  ],
  primer: {
    rule: "To say first, second, third, put an order word after the noun. Take the counting number and change its first sound from m to k: méjì becomes kejì, mẹ́ta becomes kẹta. First is the exception: kìíní.",
    formula: "noun + order word (ọmọ kejì: the second child)",
    tables: [
      {
        id: "order-words",
        title: "Counting and order",
        columns: [{ label: "English" }, { label: "Counting", yo: true }, { label: "Order", yo: true }],
        listen: 2,
        rows: [
          ["one / first", "ọ̀kan", "kìíní"],
          ["two / second", "méjì", "kejì"],
          ["three / third", "mẹ́ta", "kẹta"],
          ["four / fourth", "mẹ́rin", "kẹrin"],
          ["five / fifth", "márùn-ún", "karùn-ún"],
          ["six / sixth", "mẹ́fà", "kẹfà"],
          ["seven / seventh", "méje", "keje"],
          ["eight / eighth", "mẹ́jọ", "kẹjọ"],
          ["nine / ninth", "mẹ́sàn-án", "kẹsàn-án"],
          ["ten / tenth", "mẹ́wàá", "kẹwàá"],
        ],
        note: "The order word goes after the noun, just like a counting number.",
      },
    ],
    rules: [
      {
        id: "m-to-k",
        title: "Change m to k",
        explanation: [
          "Counting: ọmọ méjì, two children.",
          "Order: ọmọ kejì, the second child.",
          "Only the first sound changes. Keep the rest of the word.",
        ],
      },
      {
        id: "first",
        title: "First is irregular",
        explanation: [
          "ọ̀kan does not become kọ̀kan.",
          "Use kìíní: ọmọ kìíní, the first child.",
        ],
      },
      {
        id: "same-place",
        title: "Same place as a counting number",
        explanation: [
          "Counting and order words both follow the noun.",
          "Only the shape of the number tells you which one it is.",
        ],
      },
    ],
    examples: [
      {
        id: "omo-keji", surface: "ọmọ kejì", english: "the second child",
        parts: [
          { text: "ọmọ", gloss: "child", role: "noun" },
          { text: "kejì", gloss: "second", role: "number" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm kejì with this tone pattern.",
      },
      {
        id: "omo-keta", surface: "ọmọ kẹta", english: "the third child",
        parts: [
          { text: "ọmọ", gloss: "child", role: "noun" },
          { text: "kẹta", gloss: "third", role: "number" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm kẹta.",
      },
      {
        id: "omo-kiini", surface: "ọmọ kìíní", english: "the first child",
        parts: [
          { text: "ọmọ", gloss: "child", role: "noun" },
          { text: "kìíní", gloss: "first", role: "number" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm kìíní and the long vowel.",
      },
      {
        id: "omo-meji", surface: "ọmọ méjì", english: "two children",
        parts: [
          { text: "ọmọ", gloss: "child", role: "noun" },
          { text: "méjì", gloss: "two", role: "number" },
        ],
        steps: [], confidence: "needs-review",
        note: "The counting form, shown to compare with kejì.",
      },
    ],
    commonMistake: {
      wrong: "ọmọ méjì for the second child",
      right: "ọmọ kejì",
      why: "ọmọ méjì means two children. For the second one, change m to k.",
    },
  },
  questions: [
    { type: "pick", prompt: "Which one means \"the second child\"?", choices: ["ọmọ kejì", "ọmọ méjì", "ọmọ kẹta"], answer: 0, wordId: "omo-keji" },
    { type: "pick", prompt: "Which one is the counting form for \"two children\"?", choices: ["ọmọ méjì", "ọmọ kejì", "ọmọ kìíní"], answer: 0, wordId: "omo-meji" },
    { type: "blank", prompt: "ọmọ ___ (the third child)", answer: "kẹta", choices: ["kẹta", "mẹ́ta", "kejì"], wordId: "omo-keta" },
    { type: "blank", prompt: "ọmọ ___ (the first child)", answer: "kìíní", choices: ["kìíní", "kọ̀kan", "ọ̀kan"], wordId: "omo-kiini" },
    { type: "pick", prompt: "How do you turn mẹ́rin (four) into fourth?", choices: ["Change the m to k", "Add k to the end", "Put ọmọ after it"], answer: 0 },
    { type: "pick", prompt: "Which number does not follow the usual change?", choices: ["The first one", "The second one", "The third one"], answer: 0 },
    { type: "order", english: "the third child", words: ["kẹta", "ọmọ"], answer: ["ọmọ", "kẹta"] },
    { type: "order", english: "the second child", words: ["ọmọ", "kejì"], answer: ["ọmọ", "kejì"] },
  ],
};

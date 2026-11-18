import type { Lesson } from "../types";

export const i5: Lesson = {
  id: "i-5",
  level: "intermediate",
  title: "Comparing things: ju … lọ",
  sources: [
    "Written for this site from the commonly taught comparison pattern (A + describing word + ju + B + lọ). Mastery vocab uses it in the sentence Erin ní agbára ju ènìyàn mẹ́wàá lọ (an elephant has more strength than ten people), and a dialogue uses ... dàgbà jù and ... wọ́n jù with ju at the end. No published source was consulted for this lesson. Every line needs a native speaker's check, especially the tone of ju (mid) against jù (low) and the tones on tóbi, kéré, yára and dùn.",
    "Builds on the describing words of Intermediate 4 and the owner-second pattern of Intermediate 2 (ilé mi, ilé rẹ). The describing words here (tóbi, kéré, yára, dùn, gùn, dára) are used as verbs that mean is big, is small and so on; ńlá and kékeré in Intermediate 4 are the forms that sit after a noun.",
  ],
  primer: {
    rule: "To say one thing is more than another, say the first thing, then a describing word, then ju and the second thing, and finish with lọ.",
    formula: "A + describing word + ju + B + lọ",
    tables: [
      {
        id: "compare-words",
        title: "Describing words you can compare with",
        columns: [{ label: "English" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["is big", "tóbi"],
          ["is small", "kéré"],
          ["is fast", "yára"],
          ["is tasty, sweet", "dùn"],
          ["is long", "gùn"],
          ["is good", "dára"],
        ],
        note: "Here each word is a verb: it says what the first thing is like.",
      },
      {
        id: "compare-sentences",
        title: "Comparing two things",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["My house is bigger than your house", "Ilé mi tóbi ju ilé rẹ lọ"],
          ["My dog is smaller than your dog", "Ajá mi kéré ju ajá rẹ lọ"],
          ["My car is faster than your car", "Ọkọ̀ mi yára ju ọkọ̀ rẹ lọ"],
          ["Fish is tastier than bread", "Ẹja dùn ju búrẹ́dì lọ"],
          ["Is your book better than my book?", "Ṣé ìwé rẹ dára ju ìwé mi lọ?"],
          ["The road is too long", "Ọ̀nà gùn jù"],
        ],
        note: "The last row has no second thing and no lọ. Then jù at the end means too.",
      },
    ],
    rules: [
      {
        id: "first-thing-more",
        title: "The first thing is the one that has more",
        explanation: [
          "Ilé mi tóbi ju ilé rẹ lọ: my house is the bigger one.",
          "The thing you compare against comes after ju.",
        ],
      },
      {
        id: "ju-lo-pair",
        title: "ju and lọ go together",
        explanation: [
          "Put ju before the second thing and lọ after it.",
          "Leave lọ out and the sentence is unfinished.",
        ],
      },
      {
        id: "ju-too",
        title: "jù at the end means too",
        explanation: [
          "With no second thing, jù after the describing word means too: Ọ̀nà gùn jù, the road is too long.",
          "There is no lọ in that kind of sentence.",
        ],
      },
      {
        id: "swap-to-reverse",
        title: "Swap the two things to reverse it",
        explanation: [
          "Ilé rẹ tóbi ju ilé mi lọ: your house is the bigger one.",
          "The describing word stays the same. Only the order of the things changes.",
        ],
      },
    ],
    examples: [
      {
        id: "ile-mi-tobi", surface: "Ilé mi tóbi ju ilé rẹ lọ", english: "My house is bigger than your house",
        parts: [
          { text: "Ilé mi", gloss: "my house", role: "noun" },
          { text: "tóbi", gloss: "is big", role: "verb" },
          { text: "ju", gloss: "more than", role: "comparison" },
          { text: "ilé rẹ", gloss: "your house", role: "noun" },
          { text: "lọ", gloss: "(ends the comparison)", role: "particle" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tone of ju (mid) and the whole pattern.",
      },
      {
        id: "aja-mi-kere", surface: "Ajá mi kéré ju ajá rẹ lọ", english: "My dog is smaller than your dog",
        parts: [
          { text: "Ajá mi", gloss: "my dog", role: "noun" },
          { text: "kéré", gloss: "is small", role: "verb" },
          { text: "ju", gloss: "more than", role: "comparison" },
          { text: "ajá rẹ", gloss: "your dog", role: "noun" },
          { text: "lọ", gloss: "(ends the comparison)", role: "particle" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on kéré.",
      },
      {
        id: "oko-mi-yara", surface: "Ọkọ̀ mi yára ju ọkọ̀ rẹ lọ", english: "My car is faster than your car",
        parts: [
          { text: "Ọkọ̀ mi", gloss: "my car", role: "noun" },
          { text: "yára", gloss: "is fast", role: "verb" },
          { text: "ju", gloss: "more than", role: "comparison" },
          { text: "ọkọ̀ rẹ", gloss: "your car", role: "noun" },
          { text: "lọ", gloss: "(ends the comparison)", role: "particle" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tones on yára.",
      },
      {
        id: "eja-dun", surface: "Ẹja dùn ju búrẹ́dì lọ", english: "Fish is tastier than bread",
        parts: [
          { text: "Ẹja", gloss: "fish", role: "noun" },
          { text: "dùn", gloss: "is tasty", role: "verb" },
          { text: "ju", gloss: "more than", role: "comparison" },
          { text: "búrẹ́dì", gloss: "bread", role: "noun" },
          { text: "lọ", gloss: "(ends the comparison)", role: "particle" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the tone of dùn.",
      },
      {
        id: "ona-gun-ju", surface: "Ọ̀nà gùn jù", english: "The road is too long",
        parts: [
          { text: "Ọ̀nà", gloss: "road", role: "noun" },
          { text: "gùn", gloss: "is long", role: "verb" },
          { text: "jù", gloss: "too", role: "adverb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Modeled on the dialogue lines ... wọ́n jù (too expensive) and ... dàgbà jù. Confirm that jù (low tone) at the end means too, and that it differs from ju.",
      },
    ],
    commonMistake: {
      wrong: "Ilé mi tóbi ju ilé rẹ",
      right: "Ilé mi tóbi ju ilé rẹ lọ",
      why: "A comparison with a second thing ends with lọ. ju and lọ go together.",
    },
  },
  questions: [
    { type: "pick", prompt: "Ajá mi kéré ju ajá rẹ lọ. Whose dog is bigger?", choices: ["Mine", "Yours", "They are the same size"], answer: 1, wordId: "aja-mi-kere" },
    { type: "pick", prompt: "Which says your car is faster than mine?", choices: ["Ọkọ̀ rẹ yára ju ọkọ̀ mi lọ", "Ọkọ̀ mi yára ju ọkọ̀ rẹ lọ", "Ọkọ̀ rẹ ju yára ọkọ̀ mi lọ"], answer: 0, wordId: "oko-mi-yara", translation: "Your car is faster than my car" },
    { type: "blank", prompt: "Ajá mi kéré ___ ajá rẹ lọ. (My dog is smaller than your dog.)", answer: "ju", choices: ["ju", "jù", "tó"], wordId: "aja-mi-kere" },
    { type: "blank", prompt: "Ilé mi tóbi ju ilé rẹ ___. (My house is bigger than yours.)", answer: "lọ", choices: ["lọ", "wá", "ni"], wordId: "ile-mi-tobi" },
    { type: "pick", prompt: "Which sentence is unfinished?", choices: ["Ilé mi tóbi ju ilé rẹ lọ", "Ilé mi tóbi ju ilé rẹ", "Ajá mi kéré ju ajá rẹ lọ"], answer: 1, wordId: "ile-mi-tobi" },
    { type: "pick", prompt: "What does Ọ̀nà gùn jù tell you?", choices: ["The road is too long", "The road is longer than another road", "The road is not long"], answer: 0, wordId: "ona-gun-ju" },
    { type: "order", english: "My dog is smaller than your dog", words: ["kéré", "ajá", "ju", "mi", "rẹ", "lọ", "Ajá"], answer: ["Ajá", "mi", "kéré", "ju", "ajá", "rẹ", "lọ"] },
    { type: "order", english: "Fish is tastier than bread", words: ["búrẹ́dì", "dùn", "Ẹja", "lọ", "ju"], answer: ["Ẹja", "dùn", "ju", "búrẹ́dì", "lọ"] },
  ],
};

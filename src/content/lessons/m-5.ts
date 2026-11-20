import type { Lesson } from "../types";

export const m5: Lesson = {
  id: "m-5",
  level: "mastery",
  title: "Wishes and blessings: kí",
  sources: [
    "The Mastery dialogue Asking for advice ends with Ọlọ́run yóò bá ọ lọ (God will go with you), which uses bá ọ lọ. The Mastery and Advanced vocab sentences use kí with a pronoun in clauses such as kí ó lè tà á (so that he can sell it). The wish pattern kí + subject + verb, and the sentences in this lesson, were written for this site from those patterns and the commonly taught subjunctive. No published source was consulted. Every line needs a native speaker's check, especially the tones after kí, the form of you after a verb (ọ), and whether Kí ó dára fún ọ is the usual wording.",
    "Builds on fún (Beginner 5), wà ní (Beginner 7), kí ni from Beginner 4 (a different use of kí) and the ó and o pronouns from Getting Started 3. Mastery vocab lists kí wọ́n and kí ẹ in sentences. This lesson teaches the wish pattern on its own.",
  ],
  primer: {
    rule: "To wish something for someone, start with kí, then the person or thing that gets the wish, then the verb. Many wishes and blessings use this pattern.",
    formula: "kí + subject + verb (+ fún ọ)",
    tables: [
      {
        id: "blessings",
        title: "Blessings and wishes",
        columns: [{ label: "You want to say" }, { label: "Yoruba", yo: true }],
        listen: 1,
        rows: [
          ["May God go with you", "Kí Ọlọ́run bá ọ lọ"],
          ["May it go well for you", "Kí ó dára fún ọ"],
          ["May you be in peace", "Kí o wà ní àlàáfíà"],
          ["May your child grow", "Kí ọmọ rẹ dàgbà"],
          ["Let me go with you", "Kí n bá ọ lọ"],
          ["Amen (the usual reply to a blessing)", "Àmín"],
        ],
        note: "ọ is the form of you after a verb or fún. It is not the o you used before a verb.",
      },
      {
        id: "pronouns-after-ki",
        title: "Pronouns after kí",
        columns: [{ label: "English" }, { label: "After kí", yo: true }],
        rows: [
          ["I", "n"],
          ["you (one person)", "o"],
          ["he, she, it", "ó"],
          ["we", "a"],
          ["you (a group)", "ẹ"],
          ["they", "wọ́n"],
        ],
        note: "Only mo changes: after kí it becomes n, as it does before kò.",
      },
    ],
    rules: [
      {
        id: "ki-wish",
        title: "kí + subject + verb makes a wish",
        explanation: [
          "Put kí first: Kí Ọlọ́run bá ọ lọ, may God go with you.",
          "A wish names who or what is to receive it, so a subject follows kí.",
        ],
      },
      {
        id: "mo-to-n",
        title: "mo becomes n after kí",
        explanation: [
          "Kí n bá ọ lọ: let me go with you.",
          "Not Kí mo bá ọ lọ.",
          "The other pronouns keep their short forms: o, ó, a, ẹ, wọ́n.",
        ],
      },
      {
        id: "ki-not-ki-ni",
        title: "A wish is not kí ni",
        explanation: [
          "Kí ni is a question that means what: Kí ni o fẹ́?",
          "A wish has no ni and does not ask anything.",
        ],
      },
      {
        id: "amin-reply",
        title: "Reply to a blessing with Àmín",
        explanation: [
          "When someone blesses you, say Àmín.",
          "It means amen, so be it.",
        ],
      },
    ],
    examples: [
      {
        id: "ki-olorun-ba-o-lo", surface: "Kí Ọlọ́run bá ọ lọ", english: "May God go with you",
        parts: [
          { text: "Kí", gloss: "may (starts a wish)", role: "particle" },
          { text: "Ọlọ́run", gloss: "God", role: "noun" },
          { text: "bá", gloss: "accompany", role: "verb" },
          { text: "ọ", gloss: "you", role: "pronoun" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Based on the dialogue line Ọlọ́run yóò bá ọ lọ. Confirm the tones on bá and ọ.",
      },
      {
        id: "ki-o-dara-fun-o", surface: "Kí ó dára fún ọ", english: "May it go well for you",
        parts: [
          { text: "Kí", gloss: "may (starts a wish)", role: "particle" },
          { text: "ó", gloss: "it", role: "pronoun" },
          { text: "dára", gloss: "be good", role: "verb" },
          { text: "fún", gloss: "for", role: "preposition" },
          { text: "ọ", gloss: "you", role: "pronoun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm the wording and the tone of ọ after fún.",
      },
      {
        id: "ki-o-wa-ni-alafia", surface: "Kí o wà ní àlàáfíà", english: "May you be in peace",
        parts: [
          { text: "Kí", gloss: "may (starts a wish)", role: "particle" },
          { text: "o", gloss: "you", role: "pronoun" },
          { text: "wà", gloss: "be (at a place)", role: "verb" },
          { text: "ní", gloss: "in", role: "preposition" },
          { text: "àlàáfíà", gloss: "peace, well-being", role: "noun" },
        ],
        steps: [], confidence: "needs-review",
        note: "Built from wà ní (Beginner 7) and àlàáfíà (Getting Started 2). Confirm that it reads as a blessing.",
      },
      {
        id: "ki-omo-re-dagba", surface: "Kí ọmọ rẹ dàgbà", english: "May your child grow",
        parts: [
          { text: "Kí", gloss: "may (starts a wish)", role: "particle" },
          { text: "ọmọ rẹ", gloss: "your child", role: "noun" },
          { text: "dàgbà", gloss: "grow up", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "dàgbà also appears in a dialogue (older). Confirm that it works as a wish for a child.",
      },
      {
        id: "ki-n-ba-o-lo", surface: "Kí n bá ọ lọ", english: "Let me go with you",
        parts: [
          { text: "Kí", gloss: "let (starts a wish)", role: "particle" },
          { text: "n", gloss: "I (form used after kí)", role: "pronoun" },
          { text: "bá", gloss: "accompany", role: "verb" },
          { text: "ọ", gloss: "you", role: "pronoun" },
          { text: "lọ", gloss: "go", role: "verb" },
        ],
        steps: [], confidence: "needs-review",
        note: "Confirm that n after kí has no tone mark.",
      },
    ],
    commonMistake: {
      wrong: "Kí mo bá ọ lọ",
      right: "Kí n bá ọ lọ",
      why: "After kí, mo becomes n, as it does before kò.",
    },
  },
  questions: [
    { type: "pick", prompt: "Which one is a wish, not a question?", choices: ["Kí ni o fẹ́", "Kí Ọlọ́run bá ọ lọ", "Ṣé o fẹ́ lọ"], answer: 1, wordId: "ki-olorun-ba-o-lo" },
    { type: "pick", prompt: "Which is correct for \"let me go with you\"?", choices: ["Kí mo bá ọ lọ", "Kí n bá ọ lọ", "Mo kí bá ọ lọ"], answer: 1, wordId: "ki-n-ba-o-lo" },
    { type: "blank", prompt: "___ Ọlọ́run bá ọ lọ. (May God go with you.)", answer: "Kí", choices: ["Kí", "Ṣé", "Bí"], wordId: "ki-olorun-ba-o-lo" },
    { type: "blank", prompt: "Kí ó dára ___ ọ. (May it go well for you.)", answer: "fún", choices: ["fún", "láti", "pé"], wordId: "ki-o-dara-fun-o" },
    { type: "pick", prompt: "Someone says Kí Ọlọ́run bá ọ lọ to you. What do you reply?", choices: ["Àmín", "Bẹ́ẹ̀ ni, mo fẹ́", "Kò sí wàhálà"], answer: 0, wordId: "ki-olorun-ba-o-lo" },
    { type: "pick", prompt: "In Kí ọmọ rẹ dàgbà, who receives the wish?", choices: ["Your child", "You", "God"], answer: 0, wordId: "ki-omo-re-dagba" },
    { type: "order", english: "May God go with you", words: ["lọ", "Ọlọ́run", "ọ", "Kí", "bá"], answer: ["Kí", "Ọlọ́run", "bá", "ọ", "lọ"] },
    { type: "order", english: "May it go well for you", words: ["fún", "dára", "ó", "Kí", "ọ"], answer: ["Kí", "ó", "dára", "fún", "ọ"] },
  ],
};

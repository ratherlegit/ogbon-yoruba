# Writing lesson questions

Three rules. A question that breaks any one is invalid.

1. **It must need the guide.** Cover the primer and try the question. If you can answer it by
   matching shapes (the only choice with a dot, the only choice with two letters), by
   eliminating choices that look different, or because the prompt already contains the answer,
   rewrite it. Ask about what a rule says or does, not about what the choices look like.
   A question about a contrast (ṣ against s, ọ against o) must put the look-alike in the choices.
   If the other choices start with unrelated letters, the learner can pass without knowing the rule.
   Choices that are all the same word with different tone marks or dots let the most-marked one win
   with no grammar. Outside the sounds and tones lesson, use real alternatives from the lesson's grammar.
2. **It may only ask what has been taught.** Every word and every ordering pattern must appear
   in this lesson's primer or an earlier one. Do not use an order question for a lesson that
   teaches no ordering (sounds, tones, syllables).

`src/content/question-quality.test.ts` enforces what can be checked by machine: banned lookup
patterns, order words not yet taught, no order questions in gs-1 to gs-3, and answers
that sit inside the prompt. The rest needs the cover-the-guide check above.

3. **Say which form you mean.** If a word has a written and a spoken form, the prompt says which one
   it wants ("Said aloud, ..."), so two choices cannot both be right.

`npm run lesson:warnings` flags pick questions whose right answer is the longest choice by a wide margin
or mostly repeats the prompt. Both are signs of a question that fails rule 1.

Known gap: two-word order questions are close to a coin flip. Prefer three or more words.

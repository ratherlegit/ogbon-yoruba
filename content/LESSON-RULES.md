# Adding a new lesson

Every lesson has one focus that no other lesson teaches. Before writing, check for repeats.

1. **Search first.** Grep the new lesson's key words, patterns and example sentences across
   `src/content/lessons`, `src/content/vocab`, `src/content/dialogues.ts` and `src/content/numbers.ts`.
2. **Compare against every lesson in the course, not just the same level.** An earlier lesson
   that already teaches the pattern (for example `mo ní` in Getting Started 4) means the new
   lesson must not teach it again.
3. **Building on is fine, repeating is not.** A new lesson may use something an earlier lesson
   taught, but it must teach only what is new. Mention the earlier lesson by name instead of
   re-teaching it.
4. **Vocab is not an excuse to skip the check.** If a vocab topic already lists the phrases, a lesson
   made only of those phrases adds nothing. A lesson must teach a rule or pattern.
5. **State the unique focus in one sentence** at the top of the pull request or hand-off, with what
   you searched and what you found.
6. Then follow `content/QUESTION-RULES.md` for the questions.

# Writing the primer

Checked by `src/content/lesson-quality.test.ts` where a machine can check it; the rest is on you.

1. **Translate every formula line.** Each `;` segment of `formula` ends with an English gloss in
   parentheses: `pronoun + wá láti + place (I come from Nigeria)`. The test fails without it.
   Older lessons are listed in `FORMULA_GLOSS_BACKLOG` in that file. Gloss one, then delete its id there.
2. **Explain every word the learner will wonder about.** A particle in an example, such as the o in
   Káàárọ̀ o, gets a one-line note saying what it does (here: emphasis, adds warmth).
3. **Never state a rule as universal unless it is.** Check the course before writing "always", "never" or
   "every", including later lessons that show exceptions or a wider rule. When the full rule is taught later,
   say so and name the lesson.
4. **Keep written and spoken forms apart and consistent.** If a lesson shows a word as it is written and as it
   is said fast, label both, and use the same kind of form for every row of a table.
5. Run `npm run lesson:warnings`. It lists answers that stand out, answers that repeat the prompt, and absolute
   words. They are hints, so decide each one. Fix the real ones. Add the fine ones to
   `content/REVIEWED-WARNINGS.json` so only new warnings show up next time.

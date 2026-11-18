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

// A formula line is Yoruba shorthand with an English gloss in trailing parentheses:
// "pronoun + wá láti + place (I come from Nigeria)". The page shows the gloss on its own line, in italics.
// A gloss may start with a purpose label, such as "asking: Which town are you from?". Only these words
// count as labels, because other colons in a gloss separate an example from its meaning.
export const PURPOSE_LABELS = ["asking", "answering"];

export function splitFormulaLine(line: string): { pattern: string; label: string | null; gloss: string | null } {
  const m = line.trim().match(/^(.*?)\s*\(([^()]+)\)$/);
  if (!m) return { pattern: line.trim(), label: null, gloss: null };
  const text = m[2]!;
  const label = PURPOSE_LABELS.find((l) => text.startsWith(`${l}: `)) ?? null;
  return { pattern: m[1]!, label, gloss: label ? text.slice(label.length + 2) : text };
}

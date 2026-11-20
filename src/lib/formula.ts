// A formula line is Yoruba shorthand with an English gloss in trailing parentheses:
// "pronoun + wá láti + place (I come from Nigeria)". The page shows the gloss on its own line, in italics.
export function splitFormulaLine(line: string): { pattern: string; gloss: string | null } {
  const m = line.trim().match(/^(.*?)\s*\(([^()]+)\)$/);
  return m ? { pattern: m[1]!, gloss: m[2]! } : { pattern: line.trim(), gloss: null };
}

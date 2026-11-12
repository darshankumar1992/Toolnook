/**
 * Finds the first syntax error in a JSON string and returns an error code,
 * which the UI translates (see ui.json.errors in the dictionaries).
 *
 * Browsers' JSON.parse error messages differ, and some (e.g. Chrome's "Unexpected token")
 * don't include a position at all. This small scanner runs only after JSON.parse fails,
 * so the formatter can always point to the exact line and column.
 */
export type JsonErrorCode =
  | "endMissingValue"
  | "singleQuotes"
  | "comment"
  | "invalidLiteral"
  | "unexpectedChar"
  | "trailingCommaObject"
  | "missingBrace"
  | "keySingleQuotes"
  | "keyUnquoted"
  | "missingColon"
  | "expectedCommaOrBrace"
  | "trailingCommaArray"
  | "missingBracket"
  | "expectedCommaOrBracket"
  | "badUnicode"
  | "badEscape"
  | "rawNewline"
  | "controlChar"
  | "unterminated"
  | "invalidNumber"
  | "trailingData";

export interface JsonSyntaxError {
  index: number;
  code: JsonErrorCode;
  /** The offending character, for messages that show it. */
  char?: string;
}

export function findJsonError(src: string): JsonSyntaxError | null {
  let i = 0;
  const numberPattern = /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/y;

  const fail = (code: JsonErrorCode, char?: string): never => {
    throw { index: i, code, char } satisfies JsonSyntaxError;
  };
  const atEnd = () => i >= src.length;
  const skipWhitespace = () => {
    while (!atEnd() && (src[i] === " " || src[i] === "\t" || src[i] === "\n" || src[i] === "\r")) i++;
  };

  function value(): void {
    skipWhitespace();
    if (atEnd()) fail("endMissingValue");
    const c = src[i];
    if (c === "{") return object();
    if (c === "[") return array();
    if (c === '"') return string();
    if (c === "-" || (c >= "0" && c <= "9")) return number();
    for (const literal of ["true", "false", "null"]) {
      if (src.startsWith(literal, i)) {
        i += literal.length;
        return;
      }
    }
    if (c === "'") fail("singleQuotes");
    if (c === "/") fail("comment");
    if (src.startsWith("undefined", i) || src.startsWith("NaN", i) || src.startsWith("Infinity", i)) {
      fail("invalidLiteral");
    }
    fail("unexpectedChar", c);
  }

  function object(): void {
    i++; // {
    skipWhitespace();
    if (src[i] === "}") {
      i++;
      return;
    }
    for (;;) {
      skipWhitespace();
      if (src[i] === "}") fail("trailingCommaObject");
      if (atEnd()) fail("missingBrace");
      if (src[i] !== '"') fail(src[i] === "'" ? "keySingleQuotes" : "keyUnquoted");
      string();
      skipWhitespace();
      if (src[i] !== ":") fail("missingColon");
      i++;
      value();
      skipWhitespace();
      if (src[i] === ",") {
        i++;
        continue;
      }
      if (src[i] === "}") {
        i++;
        return;
      }
      fail(atEnd() ? "missingBrace" : "expectedCommaOrBrace");
    }
  }

  function array(): void {
    i++; // [
    skipWhitespace();
    if (src[i] === "]") {
      i++;
      return;
    }
    for (;;) {
      skipWhitespace();
      if (src[i] === "]") fail("trailingCommaArray");
      value();
      skipWhitespace();
      if (src[i] === ",") {
        i++;
        continue;
      }
      if (src[i] === "]") {
        i++;
        return;
      }
      fail(atEnd() ? "missingBracket" : "expectedCommaOrBracket");
    }
  }

  function string(): void {
    i++; // opening quote
    while (!atEnd()) {
      const c = src[i];
      if (c === '"') {
        i++;
        return;
      }
      if (c === "\\") {
        const next = src[i + 1];
        if (next === "u") {
          if (!/^[0-9a-fA-F]{4}$/.test(src.slice(i + 2, i + 6))) fail("badUnicode");
          i += 6;
          continue;
        }
        if (next === undefined || !'"\\/bfnrt'.includes(next)) {
          i++;
          fail("badEscape");
        }
        i += 2;
        continue;
      }
      if (c < " ") fail(c === "\n" ? "rawNewline" : "controlChar");
      i++;
    }
    fail("unterminated");
  }

  function number(): void {
    numberPattern.lastIndex = i;
    const match = numberPattern.exec(src);
    if (!match) fail("invalidNumber");
    i += match![0].length;
  }

  try {
    value();
    skipWhitespace();
    if (!atEnd()) fail("trailingData", src[i]);
    return null;
  } catch (err) {
    if (err && typeof err === "object" && "index" in err) return err as JsonSyntaxError;
    return null; // e.g. extremely deep nesting; fall back to the browser's message
  }
}

/** Converts a character index into a 1-based line and column. */
export function lineColumn(text: string, index: number) {
  const lines = text.slice(0, index).split("\n");
  return { line: lines.length, column: lines[lines.length - 1].length + 1 };
}

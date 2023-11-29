import { strict as assert } from "assert";
import {
  bracketPositions,
  contextSensitiveReplacements,
  rewriteTree,
  hasLeftContext,
  hasRightContext,
} from "../src/string-rewriting.js";

test("bracket positions", () => {
  const actual = bracketPositions("F-[[X]+X]+F[+FX]-X");
  const expected = [
    null,
    null,
    8,
    5,
    null,
    3,
    null,
    null,
    2,
    null,
    null,
    15,
    null,
    null,
    null,
    11,
    null,
    null,
  ];
  assert.deepEqual(actual, expected);
});

test("context-sensitive tree replacement", () => {
  const actual = contextSensitiveReplacements("ABC[DE][SG[HI[JK]L]MNO]", {
    S: [{ lc: "BC", rc: "G[H]M", replacement: "X" }],
  });
  assert.equal(actual, "ABC[DE][XG[HI[JK]L]MNO]");
});

test("hogewegAndHesper1", () => {
  const actual = rewriteTree(
    "F1F1F1",
    4,
    {
      0: [
        { lc: "0", rc: "0", replacement: "0" },
        { lc: "0", rc: "1", replacement: "1[+F1F1]" },
        { lc: "1", rc: "0", replacement: "0" },
        { lc: "1", rc: "1", replacement: "1F1" },
      ],
      1: [
        { lc: "0", rc: "0", replacement: "1" },
        { lc: "0", rc: "1", replacement: "1" },
        { lc: "1", rc: "0", replacement: "0" },
        { lc: "1", rc: "1", replacement: "0" },
      ],
    },
    ["+", "-", "F"]
  );

  //const expected = "F1F0F1"; // 1
  //const expected = "F1F1F1F1"; // 2
  //const expected = "F1F0F0F1"; // 3
  const expected = "F1F0F1[+F1F1]F1"; // 4
  assert.equal(actual, expected);
});

test("hasLeftContext", () => {
  const word = "F1F1F1";
  const positions = bracketPositions(word);
  assert(!hasLeftContext("F1F1", positions, 1, "0", ["F"]));
  assert(hasLeftContext("F1F1", positions, 3, "1", ["F"]));
});

test("left context (Hogeweg & Hesper, 1974, p. 166)", () => {
  const word = "x[1[23][4[56]]78]y";
  const positions = bracketPositions(word);

  assert(hasLeftContext(word, positions, 2, "x"));
  assert(hasLeftContext(word, positions, 4, "1"));
  assert(hasLeftContext(word, positions, 5, "2"));
  assert(hasLeftContext(word, positions, 8, "1"));
  assert(hasLeftContext(word, positions, 10, "4"));
  assert(hasLeftContext(word, positions, 11, "5"));
  assert(hasLeftContext(word, positions, 14, "1"));
  assert(hasLeftContext(word, positions, 15, "7"));
  assert(hasLeftContext(word, positions, 17, "x"));
});

test("right context (Hogeweg & Hesper, 1974, p. 166)", () => {
  const word = "x[1[23][4[56]]78]y";
  const positions = bracketPositions(word);

  assert(hasRightContext(word, positions, 2, "7"));
  assert(hasRightContext(word, positions, 4, "3"));
  // right context of the paper seems to differ from the book's
  //assert(hasRightContext(word, positions, 5, "y"));
});

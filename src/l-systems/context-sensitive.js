import { rewriteTree } from "../string-rewriting.js";
import { generateSVG } from "../graphics.js";

export function hogewegAndHesperA(n) {
  const word = rewriteTree(
    "F1F1F1",
    n,
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
      "+": [{ replacement: "-" }],
      "-": [{ replacement: "+" }],
    },
    ["+", "-", "F"]
  );
  return generateSVG(word, {
    F: (turtle) => turtle.forward(5),
    "+": (turtle) => turtle.left(22.5),
    "-": (turtle) => turtle.right(22.5),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
    0: () => {},
    1: () => {},
  });
}

export function hogewegAndHesperB(n) {
  const word = rewriteTree(
    "F1F1F1",
    n,
    {
      0: [
        { lc: "0", rc: "0", replacement: "1" },
        { lc: "0", rc: "1", replacement: "1[-F1F1]" },
        { lc: "1", rc: "0", replacement: "0" },
        { lc: "1", rc: "1", replacement: "1F1" },
      ],
      1: [
        { lc: "0", rc: "0", replacement: "1" },
        { lc: "0", rc: "1", replacement: "1" },
        { lc: "1", rc: "0", replacement: "1" },
        { lc: "1", rc: "1", replacement: "0" },
      ],
      "+": [{ replacement: "-" }],
      "-": [{ replacement: "+" }],
    },
    ["+", "-", "F"]
  );
  return generateSVG(word, {
    F: (turtle) => turtle.forward(5),
    "+": (turtle) => turtle.left(22.5),
    "-": (turtle) => turtle.right(22.5),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
    0: () => {},
    1: () => {},
  });
}

export function hogewegAndHesperC(n) {
  const word = rewriteTree(
    "F1F1F1",
    n,
    {
      0: [
        { lc: "0", rc: "0", replacement: "0" },
        { lc: "0", rc: "1", replacement: "1" },
        { lc: "1", rc: "0", replacement: "0" },
        { lc: "1", rc: "1", replacement: "1F1" },
      ],
      1: [
        { lc: "0", rc: "0", replacement: "0" },
        { lc: "0", rc: "1", replacement: "1[+F1F1]" },
        { lc: "1", rc: "0", replacement: "0" },
        { lc: "1", rc: "1", replacement: "0" },
      ],
      "+": [{ replacement: "-" }],
      "-": [{ replacement: "+" }],
    },
    ["+", "-", "F"]
  );
  return generateSVG(word, {
    F: (turtle) => turtle.forward(5),
    "+": (turtle) => turtle.left(25.75),
    "-": (turtle) => turtle.right(25.75),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
    0: () => {},
    1: () => {},
  });
}

export function hogewegAndHesperD(n) {
  const word = rewriteTree(
    "F0F1F1",
    n,
    {
      0: [
        { lc: "0", rc: "0", replacement: "1" },
        { lc: "0", rc: "1", replacement: "0" },
        { lc: "1", rc: "0", replacement: "1" },
        { lc: "1", rc: "1", replacement: "1[+F1F1]" },
      ],
      1: [
        { lc: "0", rc: "0", replacement: "0" },
        { lc: "0", rc: "1", replacement: "1F1" },
        { lc: "1", rc: "0", replacement: "1" },
        { lc: "1", rc: "1", replacement: "0" },
      ],
      "+": [{ replacement: "-" }],
      "-": [{ replacement: "+" }],
    },
    ["+", "-", "F"]
  );
  return generateSVG(word, {
    F: (turtle) => turtle.forward(5),
    "+": (turtle) => turtle.left(25.75),
    "-": (turtle) => turtle.right(25.75),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
    0: () => {},
    1: () => {},
  });
}

export function hogewegAndHesperE(n) {
  const word = rewriteTree(
    "F1F1F1",
    n,
    {
      0: [
        { lc: "0", rc: "0", replacement: "0" },
        { lc: "0", rc: "1", replacement: "1[-F1F1]" },
        { lc: "1", rc: "0", replacement: "0" },
        { lc: "1", rc: "1", replacement: "1F1" },
      ],
      1: [
        { lc: "0", rc: "0", replacement: "1" },
        { lc: "0", rc: "1", replacement: "1" },
        { lc: "1", rc: "0", replacement: "1" },
        { lc: "1", rc: "1", replacement: "0" },
      ],
      "+": [{ replacement: "-" }],
      "-": [{ replacement: "+" }],
    },
    ["+", "-", "F"]
  );
  return generateSVG(word, {
    F: (turtle) => turtle.forward(5),
    "+": (turtle) => turtle.left(22.5),
    "-": (turtle) => turtle.right(22.5),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
    0: () => {},
    1: () => {},
  });
}

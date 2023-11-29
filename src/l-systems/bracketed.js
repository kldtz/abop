import { rewriteString } from "../string-rewriting.js";
import { generateSVG } from "../graphics.js";

export function axialTreeA(n) {
  const word = rewriteString("F", n, "F", "F[+F]F[-F]F");
  return generateSVG(word, {
    F: (turtle) => turtle.forward(5),
    "+": (turtle) => turtle.left(25.7),
    "-": (turtle) => turtle.right(25.7),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
  });
}

export function axialTreeB(n) {
  const word = rewriteString("F", n, "F", "F[+F]F[-F][F]");
  return generateSVG(word, {
    F: (turtle) => turtle.forward(10),
    "+": (turtle) => turtle.left(20),
    "-": (turtle) => turtle.right(20),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
  });
}

export function axialTreeC(n) {
  const word = rewriteString("F", n, "F", "FF-[-F+F+F]+[+F-F-F]");
  return generateSVG(word, {
    F: (turtle) => turtle.forward(10),
    "+": (turtle) => turtle.left(22.5),
    "-": (turtle) => turtle.right(22.5),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
  });
}

export function axialTreeD(n) {
  const word = rewriteString("X", n, "(F|X)", (_match, symbol) => {
    switch (symbol) {
      case "F":
        return "FF";
      case "X":
        return "F[+X]F[-X]+X";
    }
  });
  return generateSVG(word, {
    F: (turtle) => turtle.forward(3),
    X: (turtle) => turtle.forward(3),
    "+": (turtle) => turtle.left(20),
    "-": (turtle) => turtle.right(20),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
  });
}

export function axialTreeE(n) {
  const word = rewriteString("X", n, "(F|X)", (_match, symbol) => {
    switch (symbol) {
      case "F":
        return "FF";
      case "X":
        return "F[+X][-X]FX";
    }
  });
  return generateSVG(word, {
    F: (turtle) => turtle.forward(2),
    X: (turtle) => turtle.forward(2),
    "+": (turtle) => turtle.left(25.7),
    "-": (turtle) => turtle.right(25.7),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
  });
}

export function axialTreeF(n) {
  const word = rewriteString("X", n, "(F|X)", (_match, symbol) => {
    switch (symbol) {
      case "F":
        return "FF";
      case "X":
        return "F-[[X]+X]+F[+FX]-X";
    }
  });
  return generateSVG(word, {
    F: (turtle) => turtle.forward(5),
    X: (turtle) => turtle.forward(5),
    "+": (turtle) => turtle.left(22.5),
    "-": (turtle) => turtle.right(22.5),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
  });
}

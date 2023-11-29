import { rewriteString } from "../string-rewriting.js";
import { generateSVG } from "../graphics.js";

export function koch_snowflake(n) {
  const word = rewriteString("F--F--F", n, "F", "F+F--F+F");
  return generateSVG(word, {
    F: (turtle) => turtle.forward(10),
    "+": (turtle) => turtle.left(60),
    "-": (turtle) => turtle.right(60),
  });
}

export function quadratic_koch_island(n) {
  const word = rewriteString("F-F-F-F", n, "F", "F-F+F+FF-F-F+F");
  return generateSVG(word, {
    F: (turtle) => turtle.forward(10),
    "+": (turtle) => turtle.left(90),
    "-": (turtle) => turtle.right(90),
  });
}

export function quadratic_koch_snowflake(n) {
  const word = rewriteString("-F", n, "F", "F+F-F-F+F");
  return generateSVG(word, {
    F: (turtle) => turtle.forward(10),
    "+": (turtle) => turtle.left(90),
    "-": (turtle) => turtle.right(90),
  });
}

export function fassCurve(n) {
  const word = rewriteString("-L", n, "(L|R)", (_match, symbol) => {
    switch (symbol) {
      case "L":
        return "LF+RFR+FL-F-LFLFL-FRFR+";
      case "R":
        return "-LFLF+RFRFR+F+RF-LFL-FR";
    }
  });
  return generateSVG(word, {
    F: (turtle) => turtle.forward(10),
    "+": (turtle) => turtle.left(90),
    "-": (turtle) => turtle.right(90),
    // Ignore these symbols
    L: (_turtle) => {},
    R: (_turtle) => {},
  });
}

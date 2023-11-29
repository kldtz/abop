import { rewriteString } from "../string-rewriting.js";
import { generateSVG } from "../graphics.js";
import { pickRandom } from "../utils.js";

export function stochasticPlant(n) {
  const word = rewriteString("F", n, "F", () => {
    const replacements = ["F[+F]F[-F]F", "F[+F]F", "F[-F]F"];
    return pickRandom(replacements);
  });
  return generateSVG(word, {
    F: (turtle) => turtle.forward(5),
    "+": (turtle) => turtle.left(20),
    "-": (turtle) => turtle.right(20),
    "[": (turtle) => turtle.push(),
    "]": (turtle) => turtle.pop(),
  });
}

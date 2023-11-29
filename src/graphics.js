import { createSvgElement, toRadians } from "./utils.js";

export class SVGTurtle {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.positionStack = [];

    this.path = [];
    // Start at origin, facing up
    this.jump(0);
    this.left(90);
  }

  turn(angle) {
    this.angle += angle;
  }

  left(angle) {
    this.turn(angle);
  }

  right(angle) {
    this.turn(-angle);
  }

  forward(length) {
    const angle = toRadians(this.angle);
    this.x += length * Math.cos(angle);
    this.y += length * Math.sin(angle);
    this.path.push("L", this.x, -this.y);
  }

  jump(length) {
    const angle = toRadians(this.angle);
    this.x += length * Math.cos(angle);
    this.y += length * Math.sin(angle);
    this.path.push("M", this.x, -this.y);
  }

  push() {
    this.positionStack.push({ x: this.x, y: this.y, angle: this.angle });
  }

  pop() {
    const position = this.positionStack.pop();
    this.x = position.x;
    this.y = position.y;
    this.angle = position.angle;
    this.path.push("M", this.x, -this.y);
  }

  #extrema() {
    var [minX, maxX, minY, maxY] = [
      Number.MAX_VALUE,
      Number.MIN_VALUE,
      Number.MAX_VALUE,
      Number.MIN_VALUE,
    ];
    for (let i = 0; i < this.path.length; i += 3) {
      const [_l, x, y] = [this.path[i], this.path[i + 1], this.path[i + 2]];
      if (x < minX) {
        minX = x;
      }
      if (x > maxX) {
        maxX = x;
      }
      if (y < minY) {
        minY = y;
      }
      if (y > maxY) {
        maxY = y;
      }
    }
    return [minX, maxX, minY, maxY];
  }

  toSVG(padding) {
    var [minX, maxX, minY, maxY] = this.#extrema();
    const width = Math.abs(minX) + Math.abs(maxX) + 2 * padding;
    const height = Math.abs(minY) + Math.abs(maxY) + 2 * padding;
    const d = this.path.join(" ");

    const svg = createSvgElement("svg", {
      overflow: "visible",
      viewBox: `${minX - padding} ${minY - padding} ${width} ${height}`,
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    });
    const path = createSvgElement("path", {
      d: d,
    });
    svg.appendChild(path);
    return svg;
  }
}

export function generateSVG(word, actions, padding = 5) {
  const turtle = new SVGTurtle();
  for (const char of word) {
    actions[char](turtle);
  }
  return turtle.toSVG(padding);
}

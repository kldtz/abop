function setAttributes(elem, attrs) {
  for (var key in attrs) {
    if (key === "style" && typeof attrs[key] === "object") {
      const styles = [];
      for (var prop in attrs[key]) {
        styles.push(`${prop}: ${attrs[key][prop]};`);
      }
      elem.setAttribute("style", styles.join(" "));
    } else {
      elem.setAttribute(key, attrs[key]);
    }
  }
}

export function createSvgElement(tag, attributes = null) {
  const elem = document.createElementNS("http://www.w3.org/2000/svg", tag);
  if (typeof attributes === "object") {
    setAttributes(elem, attributes);
  }
  return elem;
}

export function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

export function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

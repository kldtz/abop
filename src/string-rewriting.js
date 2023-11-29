export function rewriteString(word, n, pattern, replacer) {
  const regex = RegExp(pattern, "g");
  for (let i = 0; i < n; i++) {
    word = word.replace(regex, replacer);
  }
  return word;
}

export function rewriteTree(word, n, rulesByPredecessor, ignore = []) {
  for (let i = 0; i < n; i++) {
    word = contextSensitiveReplacements(word, rulesByPredecessor, ignore);
  }
  return word;
}

export function contextSensitiveReplacements(
  word,
  rulesByPredecessor,
  ignore = []
) {
  const positions = bracketPositions(word);
  const output = [];
  loop1: for (let i = 0; i < word.length; i++) {
    const char = word[i];
    for (let rule of rulesByPredecessor[char] || []) {
      if (
        hasLeftContext(word, positions, i, rule.lc, ignore) &&
        hasRightContext(word, positions, i, rule.rc, ignore)
      ) {
        output.push(rule.replacement);
        continue loop1;
      }
    }
    output.push(char);
  }
  return output.join("");
}

/**
 * Returns true, iff right context matches.
 */
export function hasRightContext(word, positions, cur, rc, ignore = []) {
  if (!rc) {
    return true;
  }
  if (rc.length > word.length - cur - 1) {
    return false;
  }
  const stack = [];
  var j = 0;
  for (let i = cur + 1; i < word.length, j < rc.length; i++) {
    if (word[i] === "[") {
      stack.push([i, j]);
    }
    // skip ignored chars
    if (ignore.includes(word[i])) {
      continue;
    }
    // character match
    else if (word[i] === rc[j]) {
      j++;
      if (rc[j] === "]") {
        j++;
        const opening = stack.pop();
        i = positions[opening[0]];
      }
    }
    // no character match, backtrack rc match and jump to closing bracket
    else if (stack.length > 0) {
      const opening = stack.pop();
      i = positions[opening[0]];
      j = opening[1];
    } else {
      return false;
    }
  }
  if (j < rc.length) {
    return false;
  }
  return true;
}

/**
 * Returns true, iff left context matches.
 */
export function hasLeftContext(word, positions, cur, lc, ignore = []) {
  // no left context
  if (!lc) {
    return true;
  }
  // left context is longer than prefix of word
  if (lc.length > cur) {
    return false;
  }
  var j = lc.length - 1;
  for (let i = cur - 1; i >= 0, j >= 0; i--) {
    // character match
    if (word[i] === lc[j]) {
      j--;
    }
    // jump over symbols ignored while context matching
    else if (word[i] === "[" || ignore.includes(word[i])) {
      continue;
    }
    // jump to opening bracket
    else if (word[i] === "]") {
      i = positions[i];
    }
    // symbol does not match
    else {
      return false;
    }
  }

  // could not match complete left context
  if (j != -1) {
    return false;
  } else {
    return true;
  }
}

/**
 * Returns array with position of opening bracket for each closing bracket.
 */
export function bracketPositions(word) {
  const stack = [];
  const positions = Array(word.length).fill(null);
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "[") {
      stack.push(i);
    } else if (word[i] === "]") {
      const opening = stack.pop();
      positions[i] = opening;
      positions[opening] = i;
    }
  }
  return positions;
}

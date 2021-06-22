function computeLPSArray(pattern, patternLength, lps) {
  // check the longest prefix = suffix
  let length = 0;
  lps[0] = 0;

  for (let i = 1; i < patternLength; i++) {
    if (pattern[length] === pattern[i]) {
      lps[i] = length + 1;
      length++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
      }
    }
  }
}

 export function kmpSearch(text, pattern) { //finds the first match
  const matches = []
  const patternLength = pattern.length;
  const textLength = text.length; // content
  let lps = new Array(patternLength).fill(0);

  computeLPSArray(pattern, patternLength, lps); // preprocess pattern string

  let startingIndex = 0;
  let lastIndex = patternLength;
  let j = 0;
  let i = 0;

  while (i < textLength) {
    if (text[i] === pattern[j]) {
      i += 1;
      j += 1;
    } else {
      if(j !== 0) {
        j = lps[j - 1]
      } else {
        i++
      }
    }

    if(j === patternLength) {
      startingIndex = i - j;
      lastIndex = startingIndex + j;
      j = lps[j-1]
      matches.push({ startingIndex, lastIndex }); // get all match
    }
  }

  return matches
}

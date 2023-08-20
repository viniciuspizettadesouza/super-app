import React from "react";

type CharCount = { [key: string]: number };

function formatCharCount(input: string): string {
  const charArray = input.split("").sort();
  const charCount: CharCount = {};

  for (const char of charArray) {
    charCount[char] = charArray.filter((param) => char === param).length;
  }

  return JSON.stringify(charCount, null, 2);
}

function compressInput(input: string): string {
  let currentChar = input[0];
  let charCount = 0;
  let ret = "";

  input.split("").forEach((char) => {
    if (char !== currentChar) {
      ret += charCount + currentChar;
      currentChar = char;
      charCount = 1;
    } else {
      charCount++;
    }
  });

  ret += charCount + currentChar;
  return ret;
}

function Conaz1() {
  const input1 = "test conaz";
  const input2 = "aaaaabbbbccccccaaaaaaa";

  const formattedCharCount1 = formatCharCount(input1);
  const compressedResult = compressInput(input2);

  return (
    <div>
      <h2>Challenge 1-1 Output:</h2>
      <pre>{formattedCharCount1}</pre>
      <h2>Challenge 1-2 Output:</h2>
      <pre>{compressedResult}</pre>
    </div>
  );
}

export default Conaz1;

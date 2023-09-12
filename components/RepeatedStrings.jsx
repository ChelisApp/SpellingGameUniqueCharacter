'use client'
import { useState } from "react";

function RepeatedStrings() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setResult(findUniqueInstances(text));
  };

  const findUniqueInstances = (text) => {
    let result = "";
    let uniqueChars = new Set();

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (!uniqueChars.has(char)) {
        uniqueChars.add(char);
        result += char;
      }
    }

    return result;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a string"
        value={inputText}
        onChange={handleInputChange}
      />
      <div>Result: {result}</div>
    </div>
  );
}

export default RepeatedStrings;


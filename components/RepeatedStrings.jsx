'use client'
import { useState } from "react";

function RepeatedStrings() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleProcessClick = () => {
    setResult(findUniqueInstances(inputText));
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
    <div className="container">
      <h1>Find Unique Instances of Repeated Characters</h1>
      <input
        type="text"
        className="input-field"
        placeholder="Enter a string"
        value={inputText}
        onChange={handleInputChange}
      />
      <button className="process-button" onClick={handleProcessClick}>
        Process
      </button>
      <div className="result">Result: {result}</div>
      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .input-field {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .process-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }

        .process-button:hover {
          background-color: #0056b3;
        }

        .result {
          font-size: 18px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

export default RepeatedStrings;

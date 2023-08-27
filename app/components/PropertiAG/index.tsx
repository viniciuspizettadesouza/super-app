"use client";
import React, { useState } from "react";
import { convertToRoman } from "@utils/romanConverterUtils";

export default function Home() {
  const [inputNumber, setInputNumber] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = parseInt(event.target.value);

    if (isNaN(inputValue) || inputValue <= 0 || inputValue > 1000) {
      setInputNumber(undefined);
      setError("Please enter a valid integer between 1 and 1000.");
    } else {
      setInputNumber(inputValue);
      setError(undefined);
    }
  }

  const romanNumber =
    inputNumber !== undefined ? convertToRoman(inputNumber) : "";

  return (
    <div>
      <p>Integer to Roman Numeral Calculator</p>

      <label htmlFor="inputNumber">Input Number:</label>
      <input
        id="inputNumber"
        name="inputNumber"
        onChange={handleChange}
        type="number"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {inputNumber !== undefined && !error && <p>{romanNumber}</p>}
    </div>
  );
}

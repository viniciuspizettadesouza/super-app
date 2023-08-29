'use client';
import React, { useState } from "react";
import { convertToRoman } from "@utils/romanConverterUtils";

export default function Home() {
  const [inputNumber, setInputNumber] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = parseInt(event.target.value);

    if (isNaN(inputValue) || inputValue < 1 || inputValue > 3999) {
      setInputNumber("");
      setError("Please enter a valid integer between 1 and 3999.");
    } else {
      setInputNumber(event.target.value);
      setError(undefined);
    }
  }

  const romanNumber =
    inputNumber !== "" ? convertToRoman(parseInt(inputNumber)) : "";

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-semibold mb-4">Roman Numeral Calculator</h1>
      <label htmlFor="inputNumber" className="mb-2">
        Input Number:
      </label>
      <input
        id="inputNumber"
        name="inputNumber"
        className="border p-2 rounded-md mb-2 w-40 text-center"
        type="number"
        value={inputNumber}
        onChange={handleChange}
      />
      {error && <p className="text-red-600 mb-1">{error}</p>}
      {romanNumber && (
        <p className="text-lg font-semibold">{`Roman Numeral: ${romanNumber}`}</p>
      )}

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Number to Roman Numerals Conversion Examples:</h2>
        <p>14 = XIV</p>
        <p>88 = LXXXVIII</p>
        <p>789 = DCCCLXXXIX</p>
        <p>3888 = MMMDCCCLXXXVIII</p>
        <p>3999 = MMMCMXCIX</p>
      </div>
    </div>
  );
}

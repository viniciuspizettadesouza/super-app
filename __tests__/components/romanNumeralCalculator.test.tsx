import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "@components/RomanNumeralCalculator";

describe("Home component", () => {
  it("renders without crashing", () => {
    render(<Home />);
    const header = screen.getByText("Roman Numeral Calculator");
    const input = screen.getByLabelText("Input Number:");

    expect(header).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("handles input and displays Roman numerals", () => {
    render(<Home />);
    const input = screen.getByLabelText("Input Number:") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "17" } });

    const romanNumeral = screen.getByText("Roman Numeral: XVII");
    expect(romanNumeral).toBeInTheDocument();
  });

  it("displays an error for invalid input", () => {
    render(<Home />);
    const input = screen.getByLabelText("Input Number:") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "-5" } });

    const errorText = screen.getByText("Please enter a valid integer between 1 and 3999.");
    expect(errorText).toBeInTheDocument();
  });
});

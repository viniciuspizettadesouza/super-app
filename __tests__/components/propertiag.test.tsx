import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "@components/PropertiAG";

describe("Home component", () => {
  it("renders without crashing", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const header = getByText("Integer to Roman Numeral Calculator");
    const input = getByLabelText("Input Number:");

    expect(header).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("handles input and displays Roman numerals", () => {
    const { getByLabelText, getByText } = render(<Home />);
    const input = getByLabelText("Input Number:") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "12" } });

    const romanNumeral = getByText("XII");
    expect(romanNumeral).toBeInTheDocument();
  });
});

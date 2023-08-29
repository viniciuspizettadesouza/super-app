import { convertToRoman } from "@utils/romanConverterUtils";

describe("convertToRoman", () => {
  it("converts integers to Roman numerals", () => {
    expect(convertToRoman(1)).toBe("I");
    expect(convertToRoman(5)).toBe("V");
    expect(convertToRoman(9)).toBe("IX");
    expect(convertToRoman(999)).toBe("CMXCIX");
    expect(convertToRoman(1000)).toBe("M");
  });
});

export function convertToRoman(num: number) {
  let numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let RomanArr = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = [];

  const findElement = (e: number) => {
    return e <= num;
  };

  while (num > 0) {
    let nextHighest: number | undefined = numberArr.find(findElement);

    if (nextHighest) {
      result.push(RomanArr[numberArr.indexOf(nextHighest)]);
      num -= nextHighest;
    }
  }
  return result.join("");
}

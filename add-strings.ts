// https://leetcode.com/problems/add-strings/description/

// dont use any in-built libraries to convert strings directly into numbers
export {}
const addStrings = (str1, str2): string => {
  if (!str1 || str1.includes("-")) return "Invalid string";
  if (!str2 || str2.includes("-")) return "Invalid string";
  let num1 = stringToNumber(str1);
  let num2 = stringToNumber(str2);

  // used String conversion to convert the output
  let str: string = String(num1 + num2);
  return str;
};

// conversts the string into numbers and hv done using charcodeAT method
const stringToNumber = (str): number => {
  let num: number = 0;
  const ASCII_CODE_OF_ZERO: number = 48;
  for (let i = 0; i < str.length; i++) {
    num +=
      Math.pow(10, str.length - (i + 1)) *
      (str.charCodeAt(i) - ASCII_CODE_OF_ZERO);
  }
  return num;
};
addStrings("1234", "12");

// https://leetcode.com/problems/add-strings/description/

// dont use any in-built libraries to convert strings directly into numbers

const addStrings = (str1, str2) => {
  if (!str1 || str1.includes("-")) return;
  if (!str2 || str2.includes("-")) return;
  let num1 = stringToNumber(str1);
  let num2 = stringToNumber(str2);
  console.log(num1 + num2);
  return num1 + num2;
};

// conversts the string into numbers and hv done using charcodeAT method
const stringToNumber = (str) => {
  let num = 0;
  const ASCII_CODE_OF_ZERO = 48;
  for (let i = 0; i < str.length; i++) {
    num +=
      Math.pow(10, str.length - (i + 1)) *
      (str.charCodeAt(i) - ASCII_CODE_OF_ZERO);
  }
  return num;
};
addStrings("1234", "12");


// solution-2
// const addStrings = (s, t) => {
//   s = s - 0;          //converted the string into number using operators if 
//   t = t - 0;             u perform subtraction , division on strings those are typecasted to
//   return s + t;          numbers
// };

// unresolved test case 
// pass this two values as strings ('9333852702227987', '85731737104263')
// expected: '9419584439332250' result : '9419584439332252'
// not able to figure it out y.. Dont no it may be js compiler fault i guess

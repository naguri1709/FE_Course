const str = "Dinh Hoang Loc";

const reverseWord = (str) => {
  const splitStr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < splitStr.length; i++) {
    newStr += splitStr[splitStr.length - 1 - i] + " ";
  }
  return newStr;
};

const reverseChar = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseWord(str));
console.log(reverseChar(str));

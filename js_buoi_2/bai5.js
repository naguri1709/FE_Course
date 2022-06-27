const str = "Dinh Hoang Loc";

const reverseWord = (str) => {
  const splitStr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < splitStr.length; i++) {
    newStr += splitStr[splitStr.length - 1 - i] + " ";
  }
  return newStr;
  //   return str.split(" ").reverse().join("");
};

const reverseChar = (str) => {
  let newStr = "";
  const splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++) {
    newStr += splitStr[splitStr.length - 1 - i].split("").reverse();
  }
  return newStr;
};

console.log(reverseWord(str));
console.log(reverseChar(str));

let str = "Kurbenetes";
const vowel = ["a", "e", "o", "u", "i"];

const countVowel = (str) => {
  let count = 0;
  for (let i of str.toLowerCase()) {
    if (vowel.includes(i)) {
      count++;
    }
  }
  return count;
};

console.log(countVowel(str));

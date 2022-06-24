const arr = [1, 2, 3, 4];

const sum = (arr) => {
  let result = arr.reduce((a, b) => a + b, 0);
  return parseInt(result);
};

console.log(sum(arr));

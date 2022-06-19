const compare = (a, b) =>
  a > b ? `${a} là số lớn nhất` : `${b} là số lớn nhất `;

let a = Math.floor(Math.random() * 100 + 1);
let b = Math.floor(Math.random() * 100 + 1);

console.log(a);
console.log(b);

const result = compare(a, b);
console.log(result);

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

let a = Math.floor(Math.random() * 100) + 1;
let b = Math.floor(Math.random() * 100) + 1;

console.log(a);
console.log(b);

console.log(`Kết quả của phép cộng 2 số là: ${add(a, b)}`);
console.log(`Kết quả của phép trừ 2 số là: ${sub(a, b)}`);
console.log(`Kết quả của phép nhân 2 số là: ${multiply(a, b)}`);
console.log(`Kết quả của phép chia hết 2 số là: ${div(a, b)}`);
console.log(`Kết quả của phép chia lấy dư 2 số là: ${mod(a, b)}`);

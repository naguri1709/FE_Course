const BMI = (weight, height) => weight / height ** 2;

let w1 = 78;
let h1 = 1.69;

let w2 = 92;
let h2 = 1.95;

let BMI1 = BMI(w1, h1).toFixed(2);
let BMI2 = BMI(w2, h2).toFixed(2);

console.log(BMI1);
console.log(BMI2);

const result =
  BMI1 > BMI2
    ? `A BMI (${BMI1}) is higher than B BMI(${BMI2})`
    : `B BMI (${BMI1}) is higher than A BMI(${BMI2})`;

console.log(result);

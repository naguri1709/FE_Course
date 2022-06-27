const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

const countFrequency = (arr) => {
  const result = arr.reduce((acc, curr) => {
    console.log("acc", acc);
    console.log("curr", curr);
    return acc[curr]
      ? {
          ...acc,
          [curr]: acc[curr] + 1,
        }
      : {
          ...acc,
          [curr]: 1,
        };
  }, {});
  return result;
};

console.log(countFrequency(arr));

// const sum = (arr) =>{
//     arr.reduce((total, current)=>{
//         return total + current
//     },0)
//     return sum;
// }

// 5
// acc: {}

// acc[5]=1 {"5":2}

// const a = {
//     b: 123
// }

// a.b

// a["b"]

// const abc = "b"

// a.abc // undefine

// a[abc] // 123

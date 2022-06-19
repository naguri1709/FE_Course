const scoreTeam1 = [97, 112, 101];
const scoreTeam2 = [109, 95, 123];

let avgScore = (arr) => {
  let result = arr.reduce((a, b) => a + b, 0) / arr.length;
  return parseFloat(result.toFixed(2));
};

let resultTeam1 = avgScore(scoreTeam1);
let resultTeam2 = avgScore(scoreTeam2);

console.log(resultTeam1);
console.log(resultTeam2);

if (resultTeam1 >= 100 && resultTeam2 >= 100) {
  if (resultTeam1 == resultTeam2) {
    console.log("Hai đội hòa!");
  } else {
    let result = resultTeam1 > resultTeam2 ? "Đội 1 thắng!" : "Đội 2 thắng";
    console.log(result);
  }
} else {
  console.log("Không có đội thắng cuộc!");
}

// dùng reduce lấy người có giới tính nam và tuổi nhỏ hơn 40

const jsonData = require("./data.json");

const checkMaleAndUnder40 = (obj) => {
  let result = obj.reduce((obj, curr) => {
    if (curr.gender === "Male" && curr.age < 40) {
      obj.push(curr);
    }
    return obj;
  }, []);
  return result;
};

console.log(checkMaleAndUnder40(jsonData));

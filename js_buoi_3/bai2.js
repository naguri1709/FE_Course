// lấy người có gender = "male" và tuổi nhỏ hơn 40

const jsonData = require("./data.json");

const checkMaleAndUnder40 = (obj) => {
  let result = obj.forEach((element, idx) => {
    if (element.gender === "Male" && element.age < 40) {
      console.log(obj[idx]);
    }
  });
};

checkMaleAndUnder40(jsonData);

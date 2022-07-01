// dùng reduce lấy first_name và last_name

const jsonData = require("./data.json");

const getFnameAndLname = (obj) => {
  let result = obj.reduce((obj, curr) => {
    obj.push(curr.first_name + " " + curr.last_name);
    return obj;
  }, []);
  return result;
};

console.log(getFnameAndLname(jsonData));

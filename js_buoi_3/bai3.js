//dùng map lấy first_name và last_name

const jsonData = require("./data.json");

let getFnameAndLname = (obj) => {
  let result = obj.map((obj, idx) => {
    console.log(
      `${idx + 1}. First Name is ${obj.first_name} and last name is ${
        obj.last_name
      }`
    );
  });
  return result;
};

getFnameAndLname(jsonData);

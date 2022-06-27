// dùng forEach lấy first_name và last_name

const jsonData = require("./data.json");

const getFnameAndLname = (obj) => {
  let result = obj.forEach((element, idx) => {
    console.log(
      `${idx + 1}. First name is ${element.first_name} and last name is ${
        element.last_name
      }`
    );
  });
};

getFnameAndLname(jsonData);

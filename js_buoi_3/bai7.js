const jsonData = require("./data.json");

const sortByName = (obj) => {
  let result = obj.sort((a, b) => {
    let x = a.first_name.toLowerCase();
    let y = b.first_name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
  return result;
};

const sortBySalary = (obj) => {
  let result = obj.sort((a, b) => {
    return a.salary - b.salary;
  });
  return result;
};

const sortByNameAndSalary = (obj) => {
  let result = obj.sort((a, b) => {
    if (a.first_name.charAt(0) === b.first_name.charAt(0)) {
      return a.salary - b.salary;
    }
    return a.first_name > b.first_name
      ? 1
      : a.first_name < b.first_name
      ? -1
      : 0;
  });
  return result;
};

console.log(sortByNameAndSalary(jsonData));

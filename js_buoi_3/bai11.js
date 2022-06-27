person = {
  first: "Elon",
  last: "Musk",
  twitter: "@elonmusk",
  company: "Space X",
};

const elementNeed = ["first", "last"];

const displayName = (obj) => {
  let str = "";
  elementNeed.forEach((item) => {
    if (obj?.[item]) {
      str += obj[item] + " ";
    }
  });
  return str;
};

console.log(displayName(person));

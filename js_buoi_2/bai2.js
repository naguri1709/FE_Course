let isEmpty = (obj) => {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) return false;
  }
  return true;
};

const Person = function (name) {
  this.name = name;
};

let John = new Person("John");

console.log(typeof John);
console.log(isEmpty(John));
console.log(isEmpty({}));
console.log(isEmpty({}, {}));

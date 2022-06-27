const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//get all names
const getNames = (obj) => {
  let result = obj.reduce((arr, curr) => {
    arr.push(curr.name);
    return arr;
  }, []);
  return result;
};

console.log(getNames(characters));

//get height
const getHeight = (obj) => {
  let result = obj.reduce((arr, curr) => {
    arr.push(curr.height);
    return arr;
  }, []);
  return result;
};

console.log(getHeight(characters));

//get person who has height < 100
const getHeightUnder100 = (obj) => {
  let result = obj.reduce((arr, curr) => {
    if (curr.height < 100) {
      arr.push(curr.name);
    }
    return arr;
  }, []);
  return result;
};

console.log(getHeightUnder100(characters));

//get person who has mass > 100
const getMassAbove100 = (obj) => {
  let result = obj.reduce((arr, curr) => {
    if (curr.mass > 100) {
      arr.push(curr.name);
    }
    return arr;
  }, []);
  return result;
};

console.log(getMassAbove100(characters));

// Sort by name / mass / height / gender

const sortByName = (obj) => {
  let result = obj.sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase()
      ? 1
      : a.name.toLowerCase() < b.name.toLowerCase()
      ? -1
      : 0;
  });
  return result;
};

const sortByMass = (obj) => {
  let result = obj.sort((a, b) => {
    return a.mass - b.mass;
  });
  return result;
};

const sortByHeight = (obj) => {
  let result = obj.sort((a, b) => {
    return a.height - b.height;
  });
  return result;
};

const sortByGender = (obj) => {
  let result = obj.sort((a, b) => {
    return a.gender > b.gender ? 1 : a.gender < b.gender ? -1 : 0;
  });
  return result;
};

console.log(sortByGender(characters));

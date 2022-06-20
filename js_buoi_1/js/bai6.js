const grade_ranking = (name, grade) => {
  switch (true) {
    case grade <= 100 && grade >= 90:
      return "Loại S";
      break;
    case grade < 90 && grade >= 80:
      return `${name} được loại A`;
      break;
    case grade < 80 && grade >= 70:
      return `${name} được loại B`;
      break;
    case grade < 70 && grade >= 60:
      return `${name} được loại C`;
      break;
    case grade < 60 && grade >= 50:
      return `${name} được loại D`;
      break;
    case grade < 50 && grade >= 60:
      return `${name} được loại E`;
      break;
    case grade < 40 && grade >= 50:
      return `${name} được loại F`;
      break;
    case grade < 40 && grade >= 0:
      return `${name} không được lên lớp`;
      break;
  }
};

const listInfo = [
  {
    studentName: "Lộc",
    studentGrade: 89,
  },
  {
    studentName: "Liêm",
    studentGrade: 51,
  },
  {
    studentName: "Linh",
    studentGrade: 32,
  },
];

for (let i = 0; i < listInfo.length; i++) {
  console.log(grade_ranking(listInfo[i].studentName, listInfo[i].studentGrade));
}

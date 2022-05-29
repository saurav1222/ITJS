let students = [
  { name: "A", age: 20, grades: [50, 60, 70], attendance: [1, 0, 1] },
  { name: "B", age: 25, grades: [35, 35, 50], attendance: [1, 1, 1] },
  { name: "C", age: 21, grades: [90, 60, 70], attendance: [1, 1, 0] },
  { name: "D", age: 22, grades: [50, 60, 70], attendance: [1, 0, 1] },
];

let filterStudent = [];
students.forEach((item) => {
  let filterGrades = item.grades.filter((item) => {
    return item < 50;
  });

  let filterAtt = item.attendance.filter((item) => {
    return item < 1;
  });

  /**console.log (filterGrades)
   console.log (filterAtt)*/
  if (filterGrades.length < 1 && filterAtt.length > 0) {
    filterStudent.push(item);
  }
});
console.log(filterStudent);

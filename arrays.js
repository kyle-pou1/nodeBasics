var grades = [100, 50, 75];

// console.log(grades[0]);
// grades.push(97);
//
// grades.forEach(function(grade){
//   // console.log(grade);
// });
//
//
// console.log(grades.length);
var totalGrade = 0;
grades.push(89);

grades.forEach(function(grade){
  totalGrade = totalGrade + grade;
  console.log('current total is', totalGrade);
})
var average = totalGrade / grades.length;
console.log('Your grade average is:', average);

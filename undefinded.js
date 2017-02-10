// var name = 'andrew';
// name = undefined
// // console.log(name);
//
// function doesNothing(age) {
// console.log(age)
//
// }
//
// doesNothing();

// //best practice for undefined;
// var name = undefined;
//
// if (typeof x === 'undefined') {
//   console.log()
// }
function greetUser(name){
  if (typeof name === 'undefined') {
      console.log('hello world');
  }
  console.log('hello ', name);
}
greetUser('Andrew');
greetUser();

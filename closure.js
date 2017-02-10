function creatAdder(baseNumber){
  return function(numberToAdd){
    return baseNumber + numberToAdd;
  }
}
var addTen = creatAdder(10);
console.log(addTen(2));
console.log(addTen(6));
console.log(addTen(0));



// function greetMaker(name) { //closure is a function inside of another function
//   function greet(){
//     console.log('hello ' + name + '!');
//   }
//   return greet;
// }
//
// var greetKyle = greetMaker('Kyle');
// greetKyle();
// greetKyle();
// greetKyle();
//
// var greetWorld = greetMaker('world');
// greetWorld();
// greetWorld();
// greetWorld();
// greetWorld();
// greetWorld();
// greetWorld();
// greetWorld();
// greetWorld();
// greetWorld();
// greetWorld();
// greetWorld();
// greetWorld();

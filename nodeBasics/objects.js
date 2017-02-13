// var person = {
//   gender: 'male',
//   eyeColor: 'brown'
// };
//
//
// person['firstName'] = 'Kyle';
// person.lastName = 'Poulsen';
// person.age = 24;
//
// delete person.age;
// console.log(person);
// function greetUser(person) {
//   console.log('hello', person.firstName + ' ' + person['gender'])
// }
//
// greetUser(person);
var pet = {
  name: 'Charles',
  type: 'Dog'
};

function printPet(pet) {
  console.log('you own a ' + pet.type + ' named', pet.name);
}

printPet(pet);

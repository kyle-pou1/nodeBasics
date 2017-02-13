var person = {
  name: 'Kyle',
  age: 30
}
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObj = JSON.parse(personJSON);
console.log(personObj.name);
console.log(typeof personObj);

console.log('Challenge Area');


var animal = '{"name": "Benji"}'

var animalObj = JSON.parse(animal);

animalObj.age = 20;

animalJSON = JSON.stringify(animalObj);

console.log(animalJSON);

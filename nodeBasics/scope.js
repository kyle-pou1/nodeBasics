var age = 24; //global variable

function localFunction() {
  var age = 0; // age is inside the local function so it doesn't go look for the global age
  age = 0;
}

localFunction();
console.log(age);

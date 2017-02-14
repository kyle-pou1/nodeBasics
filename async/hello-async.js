
// below log => 231
/*setTimeout(function() {
    console.log('1');
}, 2000);
setTimeout(function() {
    console.log('3');
}, 1000);
    console.log('2');*/
console.log('CHALLENGE!');
function printInTwoSeconds(message) {
  setTimeout(function(){
      console.log(message);
  }, 2000)
}

printInTwoSeconds('One One thousand two one thousand.')

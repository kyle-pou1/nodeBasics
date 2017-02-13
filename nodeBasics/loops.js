// var i = 0;
// var countLimit = 8;
//
// while (i <= countLimit) {
//   console.log('while: ' + i);
//   i++;
// }
// for (var i = 0; i <= countLimit; i++) {
//   console.log('for:',i);
// }


function countDownWhile(start, stop){
  while (start > stop) {
    console.log('while: ',  start);
    start--;
  }
}
countDownWhile(10, 0);

function countDownFor(start, stop) {
  for (var i = start; i >= stop; i--){
    console.log('for:', i)
  }

}

countDownFor(100,0)

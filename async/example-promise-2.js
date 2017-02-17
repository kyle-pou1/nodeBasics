// function doWork (shouldFail) {
//   return new Promise(function (resolve, reject) {
//       setTimeout(function(){
//           if (typeof shouldFail === 'boolean' && shouldFail === true) {
//               reject('error message');
//           }
//           resolve('success');
//       }, 1000);
//   });
// }
//
// doWork().then(function(message) {
//     console.log(message);
//     return doWork(true);
// }).then(function (message) {
//     console.log(message);
// }).catch(function(error){
//     console.log(error);
// });                   //catch runs if any of the prev promises fail
function getLocation () {
    return new Promise(function(resolve, reject) {
        resolve('Provo');
    });
}
function getWeather (location) {
  return new Promise(function(resolve, reject){
    resolve('It\'s 79 in ' + location + '!');
  });
}

getLocation().then(function(location){
    return getWeather(location);
}).then(function(currentWeather) {
      console.log(currentWeather);
});

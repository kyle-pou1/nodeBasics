var weather = require('./weather')
var location = require('./location')


weather(function(currentWeather){
    console.log(currentWeather);
});

location(function(location){
  if(!location){
    console.log('unable to guess location');
    return;
  }
    console.log('city:', location.city);
    console.log('long/lat:', location.loc);
    console.log('IP:', location.ip);
})

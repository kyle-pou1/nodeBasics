var request = require('request');


module.exports = function(location) {
  return new Promise (function (resolve, reject) {
    var encodedLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation + '&units=imperial&appid=e52a96a248b205455eb1dd5e54efa204';

      if (!location) {
        return reject('No location provided');
      }


      request({
        url: url,
        json: true
      }, function (error, response, body){
        if (error) {
            reject('Unable to fetch Weather');
        }else {
           var temp = Math.round(body.main.temp);
            resolve('It\'s ' + temp + ' degrees in ' + body.name + '!');
        }
    });
  });
}

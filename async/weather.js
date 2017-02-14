var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Provo,ut&units=imperial&appid=e52a96a248b205455eb1dd5e54efa204';

module.exports = function(callback) {
    request({
      url: url,
      json: true
    }, function (error, response, body){
      if (error) {
        callback('Unable to fetch Weather');
      }else {
        // console.log(JSON.stringify(body, null, 4));
         var temp = Math.round(body.main.temp);
        callback('It\'s ' + temp + ' degrees in ' + body.name + '!');
      }
    });
}

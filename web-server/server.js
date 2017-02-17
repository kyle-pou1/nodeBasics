var express = require('express');
var app = express();


//route level middle ware.
var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('private route hit');
    next();
  },
  logger: function (req, res, next) {
    console.log('Request:', new Date().toString(), req.method, req.originalUrl);
    next();
  }
}
app.use(middleware.logger);//app.use gets used on entire app both root and about routes willprint out private route hit

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send('Hello Express!');
});

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About us');
})








var port = 3000;
app.listen(port, function(){
  console.log('I hear you on port:', port);
})

var express = require('express')
  , routes = require('./routes')
  , http = require('http');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 8080);
});

app.get('/', routes.index);
app.get('/about', routes.about);

http.createServer(app).listen(app.get('port'), function(){
    console.log("NathanJC listening on port " + app.get('port'));
});
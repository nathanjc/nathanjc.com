
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();
var RedisStore = require('connect-redis')(express);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;
app.use(express.favicon());
app.use(express.cookieParser());
app.use(express.session({secret: '666qwertyuiop'}));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// login
app.post('/login', function (req, res) {
  var post = req.body;
  if (post.user == 'njchapman' && post.password == 'Mindinmind321') {
    req.session.user_id = 777;
    res.redirect('/admin');
  } else {
    res.redirect('/login');
  }
});

function checkAuth(req, res, next) {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
}

app.get('/', routes.index);
app.get('/admin', checkAuth, routes.admin);
app.get('/login', routes.login);
app.get('/projects', routes.projects);
app.get('/projects/thelastwebsite', routes.thelastwebsite);
app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Stream' });
};

exports.login = function(req, res){
	res.render('login', { title: 'Login' });
};

exports.admin = function(req, res){
	res.render('admin', { title: 'Admin' });
};

exports.projects = function(req, res){
  res.render('projects', { title: 'Projects' });
};

exports.thelastwebsite = function(req, res){
	res.render('thelastwebsite', { title: 'The Last Website' });
}
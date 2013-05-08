
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Projects' });
};

exports.me = function(req, res){
	res.render('me', { title: 'Me'});
};

exports.feed = function(req, res){
	res.render('feed', { title: 'Feed'});
};
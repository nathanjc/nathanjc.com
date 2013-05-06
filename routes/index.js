
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Projects' });
};

exports.about = function(req, res){
	res.render('index', { title: 'About NathanJC'});
};
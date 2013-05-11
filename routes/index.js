
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'NathanJC | Stream' });
};


exports.projects = function(req, res){
  res.render('projects', { title: 'Projects' });
};

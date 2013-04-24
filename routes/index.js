exports.index = function(req, res){
  res.sendfile('index.html');
};

exports.about = function(req, res) {
	res.sendfile('about.html');
}
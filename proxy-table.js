var util = require('util')
  , http = require('http')
  , httpProxy = require('http-proxy');

httpProxy.createServer({
    router: {
        'localhost': 'localhost:8080',
        'nathanjc.com': 'localhost:3000',
        'www.nathanjc.com': 'localhost:3000',
        'mindshare.io': 'localhost:4400',
        'www.mindshare.io': 'localhost:4400',
        'geydemaithus.com': 'localhost:6000',
        'www.geydemaithus.com': 'localhost:6000'
    }
}).listen(80);

util.puts('http proxy server started on port: 80');
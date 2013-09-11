var util = require('util')
  , http = require('http')
  , httpProxy = require('http-proxy');

httpProxy.createServer({
    router: {
        'localhost': 'localhost:8080',
        'nathanjc.com': 'localhost:3000',
        'www.nathanjc.com': 'localhost:3000',
        'catalysm.co': 'localhost:4400',
        'www.catalysm.co': 'localhost:4400',
        'nodex.io': 'localhost:4500',
        'www.nodex.io': 'localhost:4500',
        'geydemaithus.com': 'localhost:6000',
        'www.geydemaithus.com': 'localhost:6000'
    }
}).listen(80);

util.puts('http proxy server started on port: 80');
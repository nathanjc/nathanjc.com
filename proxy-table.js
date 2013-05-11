var util = require('util')
  , http = require('http')
  , httpProxy = require('http-proxy');

httpProxy.createServer({
    router: {
        'localhost': 'localhost:8080',
        'nathanjc.com': 'localhost:3000'
    }
}).listen(80);

util.puts('http proxy server started on port: 80');
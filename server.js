/* jslint node: true */

//important

'use strict';
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end("Hello Everyone And Stuff.");
}).listen(process.env.PORT || 3000);
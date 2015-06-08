/* jslint node: true */

'use strict';

var Hapi = require('hapi'),
  redis = require("redis"),
  client = redis.createClient({
    detect_buffers: true
  });

var server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 3000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    client.get("superawesomekey", function (e, r) {
      reply('Hello, world!' + r);
    });
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    client.set("superawesomekey", request.params.name);
    reply('Hello, world!');
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
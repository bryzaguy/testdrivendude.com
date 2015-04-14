/* jslint node: true */

//important!!!

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
    reply('Hello, world!' + client.get("superawesomekey"));
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
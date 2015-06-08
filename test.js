/* jslint node: true, esnext: true */
'use strict';

var jsdom = require('jsdom').jsdom;
var React = require('react/addons');
var guardian = require('guardianjs');
var guard = guardian();

var test = Object.create(guard);
test.name = "stuff";
test.assert(false);

var Hello = React.createClass({
  render: function () {
    return <div>Hello World.</div>;
  }
});

global.document = jsdom('<html><body><div id="app"></div></body></html>');

global.window = global.document.defaultView;
var app = global.document.getElementById('app');

var result = React.renderToString(<Hello />);

console.log(result);

var report = guard.assert(true).report();

console.log(report);
console.log(guard.failures());

//process.exit(1);
/* jslint node: true */
'use strict';
var guardian = require('guardianjs');

var report = guardian().assert(true).report();

console.log(report);

//process.exit(1);
var guardian = require('guardianjs');

var report = guardian().assert(true).report();

console.log(report);
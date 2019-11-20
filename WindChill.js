const wc = require('./utility/utility');
var t = process.argv[2];
var v = process.argv[3];
var windchill = wc.WindChill(t,v);
console.log("Windchill = "+windchill);

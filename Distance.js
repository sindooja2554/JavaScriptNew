const ds = require('./utility/utility');
var x = process.argv[2];
var y = process.argv[3];
var distance = ds.Distance(x,y);
console.log("Distance is " +distance);
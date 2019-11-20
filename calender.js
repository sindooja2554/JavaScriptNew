var utility = require('./utility/calend');
var util = new utility.calend();
var month=process.argv[2];
var year= process.argv[3];
var result =
util.displayCalender(month,year);
console.log(result);
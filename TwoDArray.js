const tda = require('./utility/utility');
var readline = require('readline-sync');
var m = readline.questionInt("Enter Number of Rows =");  //row
var n = readline.questionInt("Enter Number of Columns=");  //column
var myArray = new Array(m);
var myArray = tda.TwoDArray(myArray,m,n);
console.log(myArray);
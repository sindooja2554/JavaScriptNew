const is = require('./utility/utility');
var readline = require('readline-sync');
var m = readline.questionInt("Enter array size=");
var insertion = new Array(m);
is.InsertionSort(insertion,m);
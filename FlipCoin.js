const fc = require('./utility/utility');
var readline = require('readline-sync');
var n = readline.questionInt("Enter number of times the coin flips=");
var HeadPercent = fc.FlipCoin(n);
console.log("Heads Percentage is" +HeadPercent);
var TailPercent = 100 - HeadPercent;
console.log("Heads Percentage is" +TailPercent);

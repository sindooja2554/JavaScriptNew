var gb = require('./utility/utility');
var readline = require('readline-sync');

var stake = readline.question("Enter Stake=");
var goal = readline.question("Enter Goal");
var num = readline.question("Enter number times you wanna play =");

var wonPer=gb.Gambler(stake,goal,num);


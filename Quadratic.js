const qr = require('./utility/utility');
var readline = require('readline-sync');
var a = readline.questionInt("Enter a=");
var b = readline.questionInt("Enter b=");
var c = readline.questionInt("Enter c=");
var delta = (b*b) - (4*a*c);
qr.Quadratic(a,b,c,delta);
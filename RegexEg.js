var rgeg = require('./utility/utility');
var readline = require('readline-sync');
var para = "Hello <<name>>, We have your full name as <<full name>> in our system.Your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification.Thank you BridgeLabz 01/01/2016.";
var name = readline.question("Enter your name=");
var fullname = readline.question("Enter your fullname=");
var mob = readline.question("Enter mobile number=");

rgeg.Regex(para,name,fullname,mob);

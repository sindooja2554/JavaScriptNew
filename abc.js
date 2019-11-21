/*var rdl = require('readline-sync');
var a = rdl.questionInt('Enter=');
//console.log(typeof(a));
if(a==="")
{
    console.log('Please enter valid input');
    //var a = rdl.question('Enter=');
    console.log()
}

else
    console.log(a);*/
/*
var util = require('./utility/BalancedEx');
var u = new util.Stack();
u.isBalancedParentheses();*/
// var u = require('./utility/utility');
// console.log("Enter a=");
// var a = u.inputStringRead();
// console.log("a="+a);
var utility= require('./utility/stackUsingLinkedList')
var util = new utility.Stack();
util.pushElement(10)
util.pushElement(1);
util.pushElement(9);
util.display();
util.popElement();
util.display();
console.log(util.peek());



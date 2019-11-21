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
<<<<<<< HEAD
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


=======
/*var u = require('./utility/utility');
console.log("Enter a=");
var a = u.inputStringRead();
console.log("a="+a);
var utility= require('./utility/QueueUsingLinkedList')
var util = new utility.Queue();
util.enqueue(5);
util.enqueue(1);
util.enqueue(0);

var str = util.display();
console.log(str);*/
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4

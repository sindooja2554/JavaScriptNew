var utility = require('./utility/BalancedEx');
var util = require('./utility/utility');
var stack = new utility.Stack();
console.log("Enter Expression=");
var expression = util.inputStringRead();
//console.log(expression.length);
var result = stack.isBalancedParentheses(expression);

if(result===true)
    console.log("Expression is a valid "+expression);
else
    console.log("Expression is a Invalid");

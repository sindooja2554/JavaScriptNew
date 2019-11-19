var util = require('./utility/BinaryTree');
var u= require('./utility/utility');
console.log("Enter number of nodes=");
var numberOfNodes=u.inputIntegerRead();
var numberOTrees=util.binaryTree(numberOfNodes);
console.log(numberOTrees);
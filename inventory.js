var util = require('./utility/inventoryData');
var fs = require('fs');
//reading inventory.json file and storing it in a variable
var content = fs.readFileSync('inventory.json');
//parsing the buffer variable
var inventory=JSON.parse(content);
util.inventoryValue(inventory);

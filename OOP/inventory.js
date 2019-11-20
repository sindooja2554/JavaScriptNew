var util = require('./utilityOp/inventoryData');

var fs = require('fs');
class inventoryD
{
    inventory()
    {
        //reading inventory.json file and storing it in a variable
        var content = fs.readFileSync('/home/admin1/javascript-master/OOP/json/inventory.json');
        //parsing the buffer variable
        var inventory=JSON.parse(content);
        //console.log(inventory);
        util.inventoryValue(inventory);
    }
}

var invent = new inventoryD()
invent.inventory();


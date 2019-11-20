/*/*********************************************Inventory_Data_Management*************************************
@Description-Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties
    name, weight, price per kg. 
@I/P-  read in JSON File
@Logic-Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON.
    Calculate the value for every Inventory.  
@Output-Create the JSON from Inventory Object and output the JSON String.
@Aurhor-Sindooja Gajam
@Date-17/11/19
/*************************************************************************************************/
var util = require('./utilityOp/inventoryData');
var fs = require('fs');
class inventoryD
{
    inventory()
    {
        //reading inventory.json file and storing it in a variable
        var content = fs.readFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventory.json');
        //parsing the buffer variable
        var inventory=JSON.parse(content);
        //console.log(inventory);
        util.inventoryValue(inventory);
    }
}

var invent = new inventoryD()
invent.inventory();


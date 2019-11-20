/*/*********************************************Inventory_Management*************************************
@Description-Extend the above program to Create InventoryManager to manage the Inventory.
    The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.The 
    InventoryManager will call each Inventory Object in its list to calculate the Inventory Price
    and then call the Inventory Object to return the JSON String. The main program will be 
    with InventoryManager.
@I/P-  read in JSON File
@Logic-Get JSON Object in Java or NSDictionary in iOS.
   Create Inventory Object from JSON. Calculate the value for every Inventory. 
@Output-Create the JSON from Inventory Object and output the JSON String.
@Aurhor-Sindooja Gajam
@Date-20/11/19
/*************************************************************************************************/
var utility = require('./utilityOp/inventoryM');
var inventories = new utility.inventoryManagement();
inventories.inventoryManagement();


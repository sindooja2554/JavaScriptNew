var util = require('../../utility/utility')

module.exports={
    inventoryValue(inventory) 
    {
        try
        {
            var object = object;
            if(typeof(inventory)!=object)   throw   'Please Pass Valid Input'
            if(inventory==undefined || inventory==null)   throw   'Please Pass Valid Input'
            console.log("InventoryMenu->");
            console.log("1.Rice");
            console.log("2.Pulses");
            console.log("3.Wheat");
            console.log("Enter you choice=");
            var item = util.inputIntegerRead()
    
            switch(parseInt(item))
            {
                case 1:
                        try
                        {
                            //Input from user 
                            console.log("Please Enter How much kg you wanna purchase=")
                            let weight = util.inputIntegerRead();
                            if(weight==undefined||weight==null)   throw 'Cannot be undefined or null'
                            if(isNaN(weight))    throw 'Should be a number'
                            //Show prices According to the user input
                            for(let i=0;i<inventory.Rice.length;i++)
                            {
                                console.log("Per Kg. of " + inventory.Rice[i].name + " costs " + inventory.Rice[i].pricePerKg + " and for " +weight + " Kgs. costs " + weight * inventory.Rice[i].pricePerKg);
                            }
                            break;
                        }
                        catch(e)
                        {
                            return e
                     }
                case 2:
                        try
                        {
                            //Input from user 
                            console.log("Please Enter How much kg you wanna purchase=")
                            let weight = util.inputIntegerRead();
                            if(weight==undefined||weight==null)   throw 'Cannot be undefined or null'
                            if(isNaN(weight))    throw 'Should be a number'
                            //Show prices According to the user input                            
                            for(let i=0;i<inventory.Pulses.length;i++)
                            {
                                console.log("Per Kg. of " + inventory.Pulses[i].name + " costs " + inventory.Pulses[i].pricePerKg + " and for " +weight + " Kgs. costs " + weight * inventory.Pulses[i].pricePerKg);
                            }
                            break;
                        }
                        catch(e)
                        {
                            return e
                        }
                case 3:
                        try
                        {
                            //Input from user
                            console.log("Please Enter How much kg you wanna purchase=")
                            let weight = util.inputIntegerRead();
                            if(weight==undefined||weight==null)   throw 'Cannot be undefined or null'
                            if(isNaN(weight))    throw 'Should be a number'
                            //Show prices According to the user input
                            for(let i=0;i<inventory.Wheat.length;i++)
                            {
                                console.log("Per Kg. of " + inventory.Wheat[i].name + " costs " + inventory.Wheat[i].pricePerKg + " and for " +weight + " Kgs. costs " + weight * inventory.Wheat[i].pricePerKg);
                            }
                            break;
                        }
                        catch(e)
                        {
                            return e
                        }
    
            }
        }
        catch(e)
        {
            return e
        }
    }
}

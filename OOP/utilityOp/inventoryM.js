var fs = require('fs');
var util = require('../../utility/utility')
class inventory
{
    constructor()
    {
<<<<<<< HEAD
        var content = fs.readFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json');
=======
        var content = fs.readFileSync('/home/admin1/javascript-master/OOP/json/inventoryManager.json');
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
        this.data = JSON.parse(content)
    }
}

class inventoryManagement extends inventory
{
    //add element
    addRice()
    {
        var content = /^[a-zA-Z]+$/;

        console.log("Enter name of rice=");
        var name = util.inputStringRead();
        if(!content.test(name))   
        {
            //if invalid input again take input
            console.log("Enter name of rice=");
            var name = util.inputStringRead();
        }
<<<<<<< HEAD

        console.log("Enter no. of kgs=");
        var share= util.inputIntegerRead();
                
        console.log("Enter Price =");
        var price = util.inputIntegerRead();
            
        this.data.Rice.push({
        
            "name": name,
            "weight": share,
            "pricePerKg": price
        
        })
        
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();

=======
        console.log("Enter no. of kgs=");
        var share= util.inputIntegerRead();
        if(isNaN(share))         throw 'Invalid input'
    
        console.log("Enter Price =");
        var price = util.inputIntegerRead();
        if(isNaN(price))         throw 'Invalid input'
    
        this.data.Rice.push({

            "name": name,
            "weight": share,
            "pricePerKg": price

        })

        fs.writeFileSync('/home/admin1/javascript-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
    }

    addPulses()
    {
        var content = /^[a-zA-Z]+$/;

        console.log("Enter name of pulses=");
        var name = util.inputStringRead();
        if(!content.test(name))   
        {
            //if invalid input again take input
            console.log("Enter name of pulses=");
            var name = util.inputStringRead();
        }
<<<<<<< HEAD

        console.log("Enter no. of kgs=");
        var share= util.inputIntegerRead();
            
        console.log("Enter Price =");
        var price = util.inputIntegerRead();
            
        this.data.Pulses.push({
        
            "name": name,
            "weight": share,
            "pricePerKg": price
        
        })
        
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();

=======
        console.log("Enter no. of kgs=");
        var share= util.inputIntegerRead();
        if(isNaN(share))         throw 'Invalid input'
    
        console.log("Enter Price =");
        var price = util.inputIntegerRead();
        if(isNaN(price))         throw 'Invalid input'
    
        this.data.Pulses.push({

            "name": name,
            "weight": share,
            "pricePerKg": price

        })

        fs.writeFileSync('/home/admin1/javascript-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
    }

    addWheat()
    {
        var content = /^[a-zA-Z]+$/;

        console.log("Enter name of wheat=");
        var name = util.inputStringRead();
        if(!content.test(name))   
        {
            //if invalid input again take input
            console.log("Enter name of pulses=");
            var name = util.inputStringRead();
        }
<<<<<<< HEAD
        
        console.log("Enter no. of kgs=");
        var share= util.inputIntegerRead();
        if(isNaN(share))         throw 'Invalid input'
            
        console.log("Enter Price =");
        var price = util.inputIntegerRead();
        if(isNaN(price))         throw 'Invalid input'
            
        this.data.Wheat.push({
        
            "name": name,
            "weight": share,
            "pricePerKg": price
        
        })
        
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();

    }

=======
        console.log("Enter no. of kgs=");
        var share= util.inputIntegerRead();
        if(isNaN(share))         throw 'Invalid input'
    
        console.log("Enter Price =");
        var price = util.inputIntegerRead();
        if(isNaN(price))         throw 'Invalid input'
    
        this.data.Wheat.push({

            "name": name,
            "weight": share,
            "pricePerKg": price

        })

        fs.writeFileSync('/home/admin1/javascript-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();
    }
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
    //display stock names
    displayAvailableStock(choice)
    {
        //console.log(this.data);
        if(choice==1)
        {
            for(let i=0;i<this.data.Rice.length;i++)
            {
                console.log(i+1," "+this.data.Rice[i].name);
            }
        }

        if(choice==2)
        {
            for(let i=0;i<this.data.Pulses.length;i++)
            {
                console.log(i+1," "+this.data.Pulses[i].name);
            }
        }

        if(choice==3)
        {
<<<<<<< HEAD
            for(let i=0;i<this.data.Wheat.length;i++)
            {
                console.log(i+1," "+this.data.Wheat[i].name);
=======
            for(let i=0;i<this.data.Pulses.length;i++)
            {
                console.log(i+1," "+this.data.Pulses[i].name);
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
            }
        }
    }

    displayAvailableStockOfParticular(choice)
    {
        if(choice==1)
        {
<<<<<<< HEAD
            //loop to display all items of Rice
=======
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
            for(let i=0;i<this.data.Rice.length;i++)
            {
                console.log("Name of rice="," "+this.data.Rice[i].name);
                console.log("Available Kg="," "+this.data.Rice[i].weight);
                console.log("Price per Kg="," "+this.data.Rice[i].pricePerKg);
                console.log();
            }
        }

        if(choice==2)
        {
<<<<<<< HEAD
            //loop to display all items of Pulses
=======
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
            for(let i=0;i<this.data.Pulses.length;i++)
            {
                console.log("Name of rice="," "+this.data.Pulses[i].name);
                console.log("Available Kg="," "+this.data.Pulses[i].weight);
                console.log("Price per Kg="," "+this.data.Pulses[i].pricePerKg);
                console.log();
            }
        }

        if(choice==3)
        {
<<<<<<< HEAD
            //loop to display all items of Wheat
=======
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
            for(let i=0;i<this.data.Wheat.length;i++)
            {
                console.log("Name of rice="," "+this.data.Wheat[i].name);
                console.log("Available Kg="," "+this.data.Wheat[i].weight);
                console.log("Price per Kg="," "+this.data.Wheat[i].pricePerKg);
                console.log();
            }
        }
    }
<<<<<<< HEAD

    //function to update price of rice
    updateRice()
    {
        var content = /^[a-zA-Z]+$/;
        this.displayAvailableStock(1);
        console.log('enter name of rice to update=');
        var riceName = util.inputStringRead();
        if(!content.test(riceName))   
        {
            //if invalid input again take input
            console.log("Enter name of pulses=");
            var riceName = util.inputStringRead();
        }
        console.log('1.Update price');
        console.log('2.Update available kgs')
        console.log('What do you wanna update(enter 1-n)=');
        var choice = util.inputIntegerRead();
        if(choice==1)
        {
            for(let i=0;i<this.data.Rice.length;i++)
            {
                //comparing the input from user and the item in Rice
                if(this.data.Rice[i].name.toLowerCase() == riceName.toLowerCase())
                {
                    //if found update price
                    console.log('Enter new price of rice=');
                    this.data.Rice[i].pricePerKg=util.inputIntegerRead();
                }
            }
        }
        else if(choice==2)
        {
            for(let i=0;i<this.data.Rice.length;i++)
            {
                //comparing the input from user and the item in Pulses
                if(this.data.Rice[i].name.toLowerCase() == riceName.toLowerCase())
                {
                    //if found update weight
                    console.log('Enter new available weight in kgs of pulses=');
                    this.data.Rice[i].weight=util.inputIntegerRead();
                }
            }            
        }

        //write changes back to file
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();
    }

    //function to update price of pulses
    updatePulses()
    {
        var content = /^[a-zA-Z]+$/;
        this.displayAvailableStock(2);
        console.log('enter name of pulses to update=');
        var pulsesName = util.inputStringRead();
        if(!content.test(pulsesName))   
        {
            //if invalid input again take input
            console.log("Enter name of pulses=");
            var pulsesName = util.inputStringRead();
        }
        console.log('1.Update price');
        console.log('2.Update available kgs')
        console.log('What do you wanna update(enter 1-n)=');
        var choice = util.inputIntegerRead();
        if(choice==1)
        {
            for(let i=0;i<this.data.Pulses.length;i++)
            {
                //comparing the input from user and the item in Pulses
                if(this.data.Pulses[i].name.toLowerCase() == pulsesName.toLowerCase())
                {
                    //if found update price
                    console.log('Enter new price of pulses=');
                    this.data.Pulses[i].pricePerKg=util.inputIntegerRead();
                }
            }
        }   
        else if(choice==2)
        {
            for(let i=0;i<this.data.Pulses.length;i++)
            {
                //comparing the input from user and the item in Pulses
                if(this.data.Pulses[i].name.toLowerCase() == pulsesName.toLowerCase())
                {
                    //if found update weight
                    console.log('Enter new available weight in kgs of pulses=');
                    this.data.Pulses[i].weight=util.inputIntegerRead();
                }
            }
        }     

        //write changes back to file
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();
    }

    //function to update price of pulses
    updateWheat()
    {
        var content = /^[a-zA-Z]+$/;
        this.displayAvailableStock(3);
        console.log('enter name of wheat to update=');
        var wheatName = util.inputStringRead();
        if(!content.test(wheatName))   
        {
            //if invalid input again take input
            console.log("Enter name of pulses=");
            var wheatName = util.inputStringRead();
        }
        console.log('1.Update price');
        console.log('2.Update available kgs')
        console.log('What do you wanna update(enter 1-n)=');
        var choice = util.inputIntegerRead();
        if(choice==1)
        {
            for(let i=0;i<this.data.Wheat.length;i++)
            {
                //comparing the input from user and the item in Pulses
                if(this.data.Wheat[i].name.toLowerCase() == wheatName.toLowerCase())
                {
                    //if found update price
                    console.log('Enter new price of wheat=');
                    this.data.Wheat[i].pricePerKg=util.inputIntegerRead();
                }
            }
        }
        else if(choice==2)
        {
            for(let i=0;i<this.data.Wheat.length;i++)
            {
                //comparing the input from user and the item in Pulses
                if(this.data.Wheat[i].name.toLowerCase() == wheatName.toLowerCase())
                {
                    //if found update weight
                    console.log('Enter new available weight in kgs of wheat=');
                    this.data.Wheat[i].weight=util.inputIntegerRead();
                }
            }
        }

        //write changes back to file
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();
    }

    //to delete
    deleteRice()
    {
        //input from user to remove
        console.log("Enter stockName to remove=");
        var name = util.inputStringRead();
        //loop to will run upto length
        for(let i=0;i<this.data.Rice.length;i++)
        {
            //comparing the input from user and the item in Rice
            if(this.data.Rice[i].name.toLowerCase() == name.toLowerCase())
            {
                var index = this.data.Rice.indexOf(this.data.Rice[i]);
                //delete the element
                this.data.Rice.splice(index,1);
            }
            else
            {
                console.log('Item not found');
            }
        }
        //write changes back to file
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
=======
    //to delete
    deleteRice()
    {

        console.log("Enter stockName to remove=");
        var name = util.inputStringRead();
        for(let i=0;i<this.data.Rice.length;i++)
        {
            if(this.data.Rice[i].name.toLowerCase() == name.toLowerCase())
            {
                var index = this.data.Rice.indexOf(this.data.Rice[i]);
                this.data.Rice.splice(index,1);

            }
        }
        fs.writeFileSync('/home/admin1/javascript-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
        this.inventoryManagement();
    }

    deletePulses()
    {
<<<<<<< HEAD
        //input from user to remove
        console.log("Enter stockName to remove=");
        var name = util.inputStringRead();
        //loop to will run upto length
        for(let i=0;i<this.data.Pulses.length;i++)
        {
            //comparing the input from user and the item in Pulses
            if(this.data.Pulses[i].name.toLowerCase() == name.toLowerCase())
            {
                var index = this.data.Pulses.indexOf(this.data.Pulses[i]);
                //delete the element
                this.data.Pulses.splice(index,1);
            }
            else
            {
                console.log('Item not found');
            }
        }
        //write changes back to file
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
=======

        console.log("Enter stockName to remove=");
        var name = util.inputStringRead();
        for(let i=0;i<this.data.Pulses.length;i++)
        {
            if(this.data.Pulses[i].name.toLowerCase() == name.toLowerCase())
            {
                var index = this.data.Pulses.indexOf(this.data.Pulses[i]);
                this.data.Pulses.splice(index,1);

            }
        }
        fs.writeFileSync('/home/admin1/javascript-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
        this.inventoryManagement();
    }

    deleteWheat()
    {
<<<<<<< HEAD
        //input from user to remove
        console.log("Enter stockName to remove=");
        //loop to will run upto length
        var name = util.inputStringRead();
        for(let i=0;i<this.data.Wheat.length;i++)
        {
            //comparing the input from user and the item in Wheat
            if(this.data.Wheat[i].name.toLowerCase() == name.toLowerCase())
            {
                var index = this.data.Wheat.indexOf(this.data.Pulses[i]);
                //delete the element
                this.data.Wheat.splice(index,1);
            }
            else
            {
                console.log('Item not found');
            }
        }
        //write changes back to file
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
=======
        
        console.log("Enter stockName to remove=");
        var name = util.inputStringRead();
        for(let i=0;i<this.data.Wheat.length;i++)
        {
            if(this.data.Wheat[i].name.toLowerCase() == name.toLowerCase())
            {
                var index = this.data.Wheat.indexOf(this.data.Pulses[i]);
                this.data.Wheat.splice(index,1);

            }
        }
        fs.writeFileSync('/home/admin1/javascript-master/OOP/json/inventoryManager.json',JSON.stringify(this.data));
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
        this.inventoryManagement();
    }

    inventoryManagement()
    {
<<<<<<< HEAD
            var content = fs.readFileSync('/home/admin1/JavaScriptNew-master/OOP/json/inventoryManager.json');
=======
            var content = fs.readFileSync('/home/admin1/javascript-master/OOP/json/inventoryManager.json');
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
            var data = JSON.parse(content);
            console.log(data);
            console.log("1.Add");
            console.log("2.Delete Item");
            console.log("3.Display Particular Stock");
<<<<<<< HEAD
            console.log("4.Update Item");
            console.log("5.Exit");
=======
            console.log("4.Exit");
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
            console.log("Enter your choice=");
            var choice = util.inputIntegerRead();

            switch(choice)
            {
                case 1: 
                    console.log('1.Rice');
                    console.log('2.Pulses');
                    console.log('3.Wheat');
                    console.log('You wanna add to =');
                    var choice=util.inputIntegerRead();

                    switch(choice)
                    {
                        case 1:
                                this.addRice();
                                break;
                        case 2:
                                this.addPulses();
                                break;
                        case 3:
                                this.addWheat();
                                break;            
                    }
                    break;
                case 2:
                        console.log('1.Rice');
                        console.log('2.Pulses');
                        console.log('3.Wheat');
                        console.log('You wanna remove to =');
                        var choice=util.inputIntegerRead();
                        this.displayAvailableStock(choice);
                        switch(choice)
                        {
                            case 1:
                                    this.deleteRice();
                                    break;
                            case 2:
                                    this.deletePulses();
                                    break;
                            case 3:
                                    this.deleteWheat();
                                    break;
                                    
                        }
                        break;

                case 3:
                        console.log('1.Rice');
                        console.log('2.Pulses');
                        console.log('3.Wheat');
                        console.log('Which do you wanna view=');
                        var choice = util.inputIntegerRead();
                        this.displayAvailableStockOfParticular(choice);
                       //console.log(this.data);       
                       //this.inventoryManagement();
                       break;
<<<<<<< HEAD
                case 4:
                        console.log('1.Rice');
                        console.log('2.Pulses');
                        console.log('3.Wheat');
                        console.log('Which item do you wanna update=');
                        var choice = util.inputIntegerRead();
                        switch(choice)
                        {
                            case 1:
                                    this.updateRice();
                                    break;
                            case 2:
                                    this.updatePulses();
                                    break;
                            case 3:
                                    this.updateWheat();
                                    break;                                    
                        }
                        break;

                case 5: 
=======

                case 4: 
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
                       return ;
            }
        

    }

}

module.exports={
    inventoryManagement
}
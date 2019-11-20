var fs = require('fs');
var util = require('../../utility/utility')
class inventory
{
    constructor()
    {
        var content = fs.readFileSync('/home/admin1/javascript-master/OOP/json/inventoryManager.json');
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
            for(let i=0;i<this.data.Pulses.length;i++)
            {
                console.log(i+1," "+this.data.Pulses[i].name);
            }
        }
    }

    displayAvailableStockOfParticular(choice)
    {
        if(choice==1)
        {
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
            for(let i=0;i<this.data.Wheat.length;i++)
            {
                console.log("Name of rice="," "+this.data.Wheat[i].name);
                console.log("Available Kg="," "+this.data.Wheat[i].weight);
                console.log("Price per Kg="," "+this.data.Wheat[i].pricePerKg);
                console.log();
            }
        }
    }
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
        this.inventoryManagement();
    }

    deletePulses()
    {

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
        this.inventoryManagement();
    }

    deleteWheat()
    {
        
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
        this.inventoryManagement();
    }

    inventoryManagement()
    {
            var content = fs.readFileSync('/home/admin1/javascript-master/OOP/json/inventoryManager.json');
            var data = JSON.parse(content);
            console.log(data);
            console.log("1.Add");
            console.log("2.Delete Item");
            console.log("3.Display Particular Stock");
            console.log("4.Exit");
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

                case 4: 
                       return ;
            }
        

    }

}

module.exports={
    inventoryManagement
}
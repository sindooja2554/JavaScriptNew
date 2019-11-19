var fs = require('fs');
var util = require('../../utility/utility')
class inventory
{
    constructor()
    {
        var content = fs.readFileSync('inventoryManager.json');
        this.data = JSON.parse(content)
    }
}

class inventoryManagement extends inventory
{
    //add element
    add()
    {
        console.log("Enter name of Stock=");
        var name = util.inputStringRead();
        //if(!nameRestriction.test(name))  throw 'Invalid input'

        console.log("Enter no. of shares=");
        var share= util.inputIntegerRead();
        if(isNaN(share))         throw 'Invalid input'

        console.log("Enter Price =");
        var price = util.inputIntegerRead();
        if(isNaN(price))         throw 'Invalid input'

        this.data.stock.push({
            "stockName": name,
            "shares": share,
            "price": price
        })

        fs.writeFileSync('inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();
    }

    //to delete
    delete()
    {
        console.log(this.data);
        console.log("Enter stockName to remove=");
        var name = util.inputStringRead();
        for(let i=0;i<this.data.stock.length;i++)
        {
            if(this.data.stock[i].stockName.toLowerCase() == name.toLowerCase())
            {
                var index = this.data.stock.indexOf(this.data.stock[i]);
                this.data.stock.splice(index,1);

            }
        }
        fs.writeFileSync('inventoryManager.json',JSON.stringify(this.data));
        this.inventoryManagement();
    }


    inventoryManagement()
    {
            var content = fs.readFileSync('inventoryManager.json');
            var data = JSON.parse(content);
            console.log(data);
            console.log("1.Add new item");
            console.log("2.Delete Item");
            console.log("3.Dispaly");
            console.log("4.Exit");
            console.log("Enter your choice=");
            var choice = util.inputIntegerRead();

            switch(choice)
            {
                case 1: 
                        this.add();
                        break;
                case 2: 
                       this.delete();
                       break;
                case 3:
                       console.log(this.data);       
                       this.inventoryManagement();
                       break;
                case 4: 
                       return ;
            }
        

    }

}

module.exports={
    inventoryManagement
}
var fs = require('fs');
var util = require('../../utility/utility');
class stock
{
    constructor()
    {
        var content = fs.readFileSync('/home/admin1/javascript-master/OOP/json/stock.json');
        this.data = JSON.parse(content);
    }
}

class stockManagement extends stock
{
    //function to display names of company
    display()
    {
        for(let i=0;i<this.data.stock.length;i++)
        {
            console.log(i+1+". " +this.data.stock[i].corporation);
        }
    }

    //function to display shares and price of particular company
    info(choice)
    {
        try
        {
            if(choice==undefined||choice==null)   throw 'Cannot be undefined or null'
            if(choice==' ')   throw 'Cannot be empty'
            if(isNaN(choice))   throw 'Input should be a number'
            let length = this.data.stock.length;
            if(choice>length)   throw  'No share present at that location'
            let i=0;
            while(i<choice-1)
            {
                i++;
            }
            console.log(`Name of Corporation:${this.data.stock[choice-1].corporation}`);
            console.log(`Number of shares:${this.data.stock[choice-1].noOfShares}`);
            console.log(`Price per each Share:${this.data.stock[choice-1].priceOfEach}`);
        }
        catch(e)
        {
            return e;
        }
    }

    purchase(numberOfPurchases)
    {
        //to display price to purchase 
        try
        {
            if(numberOfPurchases==undefined||numberOfPurchases==null)   throw 'Cannot be undefined or null'
            if(numberOfPurchases==' ')   throw 'Cannot be empty'
            if(isNaN(numberOfPurchases))   throw 'Input should be a number'

            let length = this.data.stock.length;
            if(numberOfPurchases>length)   throw  'No share present at that location'
            let i=0;
            while(i<numberOfPurchases-1)
            {
                i++;
            }
            console.log("One share of " + this.data.stock[numberOfPurchases-1].corporation + " costs " + this.data.stock[numberOfPurchases-1].priceOfEach+" Rupees");

        }
        catch(e)
        {
            return e;
        }

    }
}

module.exports=
{
    stockManagement
}


// var a = new stockManagement();
// a.purchase();
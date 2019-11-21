var fs = require('fs');
var util = require('../../utility/utility');
class stock
{
    constructor()
    {
<<<<<<< HEAD
        var content = fs.readFileSync('/home/admin1/JavaScriptNew-master/OOP/json/stock.json');
=======
        var content = fs.readFileSync('/home/admin1/javascript-master/OOP/json/stock.json');
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
        this.data = JSON.parse(content);
    }
}

class stockManagement extends stock
{
<<<<<<< HEAD
    addStock()
    {
        console.log('Enter number of stock you wanna add=');
        var noOfStocks=util.inputIntegerRead();
        var content = /^[a-zA-Z]+$/;

        console.log("Enter name of corporation=");
        var corporationName = util.inputStringRead();
        if(!content.test(corporationName))   
        {
            //if invalid input again take input
            console.log("Enter name of corporation=");
            var corporationName = util.inputStringRead();
        }
        
        //console.log(this.isPresent(corporationName));
        if(!this.isPresent(corporationName))
        {

            console.log("Enter no. of shares=");
            var noOfShares= util.inputIntegerRead();
            if(isNaN(noOfShares))         throw 'Invalid input'
            
            console.log("Enter Price =");
            var priceOfEach = util.inputIntegerRead();
            if(isNaN(priceOfEach))         throw 'Invalid input'
            
            this.data.stock.push({
        
                "corporation": corporationName,
                "noOfShares": noOfShares,
                "priceOfEach": priceOfEach
        
            })
        
            fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/stock.json',JSON.stringify(this.data));
        }
        else
        {
            console.log('Corportation is Present');
        }

    }
    
    //to check if corportation is present
    isPresent(corporationName)
    {
        var present=false;
        for(let i=0;i<this.data.stock.length;i++)
        {
            //comparing the input from user and the item in Rice
            if(this.data.stock[i].corporation.toLowerCase() == corporationName.toLowerCase())
            {        
                present=true;
                break;
            }
            else
            {
                present=false;
            }
        }
        if(present===true)
        {
            return true
        }
        else
        {
            return false
        }
    }
=======
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
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
<<<<<<< HEAD
=======


// var a = new stockManagement();
// a.purchase();
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4

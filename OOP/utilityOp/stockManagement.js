var fs = require('fs');
var util = require('../../utility/utility');
class stock
{
    constructor()
    {
        var content = fs.readFileSync('/home/admin1/javascript-master/stock.json');
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
    info()
    {
        try
        {
            this.display();
            console.log("Enter between 1-n=");
            var n = util.inputIntegerRead();
            var len = this.data.stock.length;
            if(n>len)   throw  'No share present at that location'
            let i=0;
            while(i<n-1)
            {
                i++;
            }
            console.log(this.data.stock[n-1]);
        }
        catch(e)
        {
            console.log(e);
        }
    }

    purchase()
    {
        //to display price to purchase 
        try
        {
            this.display();
            console.log("Enter share you wanna purchase(in between 1-n)=");
            var n = util.inputIntegerRead();
            var len = this.data.stock.length;
            if(n>len)   throw  'No share present at that location'
            let i=0;
            while(i<n-1)
            {
                i++;
            }
            console.log("One share of " + this.data.stock[n-1].corporation + " costs " + this.data.stock[n-1].priceOfEach+" Rupees");

        }
        catch(e)
        {
            console.log(e);
        }

    }
}

module.exports=
{
    stockManagement
}


// var a = new stockManagement();
// a.purchase();
var util=require('../../utility/utility');
var rl=require('readline-sync')
<<<<<<< HEAD
var utility = require('./commercialM6');
var utilty = require('./UserM');

var fs = require('fs');
var commercial=new utility.Company();
=======

>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
class Stock
{
    constructor()
    {
<<<<<<< HEAD
        //content of json file will be saved in variable
        var content=util.readFile('/home/admin1/JavaScriptNew-master/OOP/json/commercial.json');
        //to parse buffered values and store in variable
        this.data=JSON.parse(content);
        //content of json file will be saved in variable        
        var userContent = util.readFile('/home/admin1/JavaScriptNew-master/OOP/json/user.json');
        //to parse buffered values and store in variable        
        this.value=JSON.parse(userContent);
=======
        var content=util.readFile('/home/admin1/javascript-master/commercial.json');
        this.data=JSON.parse(content);
        var length=this.data.stock.length;
        //console.log(length);
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
    }
}
class BuySellStock extends Stock
{
    availableStock()
    {
        console.log("\n\t\tStock Account Management")
        this.displayStockName();
    }
    infoStock()
    {
        var length=this.data.stock.length;
        console.log("select the stock (1-n):");
        var choice=util.inputIntegerRead();
        if(choice<=0 || (choice-1)>=length) throw 'Enter Available Stock'
        //Display stock Details
        this.displayStock("\t"+choice-1);
        return choice;
    }
<<<<<<< HEAD
    buyStock()
    {
        var length=this.data.stock.length;
        //purches requried shares & calculate the total stock price
        //this.displayStockName(); 
        var choice = rl.questionInt("Enter your choice=");
        var shares= rl.questionInt("Enter no of shares you want to purchase or buy:");
        var content = /^[a-zA-Z]+$/;
        console.log("Enter user name=");
        var userName = util.inputStringRead();
        //to check if it is a character string
        if(!content.test(userName))   
        {
            //if invalid input again take input
            console.log("Enter user name=");
            var userName = u.inputStringRead();
        }
        if(this.isPresent(userName))
        {
            if(shares>length.NoOfShare) throw 'enter valid number'
            //calling function to calcu;ate total price according to input
            var totalPrice=this.calculateStockPrice(choice,shares);
            //displaying the total cost
            console.log("Total Stock Price:"+totalPrice);
            //calling functions to update the files
            this.updateUser(userName,shares);
            this.updateCompany(choice,shares);
        }
        else
        {
            console.log('You have not been registered');
        }
        return true
    } 

    //to check if corportation is present
    isPresent(userName)
    {
        var present=false;
        for(let i=0;i<this.value.user.length;i++)
            {
            //comparing the input from user and the item object
            if(this.value.user[i].userName.toLowerCase() == userName.toLowerCase())
            {        
                present=true;
                //once the element is found the loop will break
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


    displayStockName()
    {
        //to display the stock present in the file
=======
    buyStock(choice)
    {
        var length=this.data.stock.length;
         //purches requried shares & calculate the total stock price 
        var shares = rl.question("Enter no of shares you want to purchase or buy:");

        
        if(shares>length.NoOfShare) throw 'enter valid number'
        var totalPrice=this.claculateStockPrice(choice-1,shares);
        console.log("Total Stock Price:"+totalPrice); 
        return true
    } 
    displayStockName()
    {
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
        for(var i=0;i<this.data.stock.length;i++){
            console.log((i+1)+"."+this.data.stock[i].companyName);
        }
    }
    displayStock(choice)
    {
<<<<<<< HEAD
        //Info of particular stock
        console.log("NameOfCompany :"+this.data.stock[choice].companyName
        +"\nNumber Of Shares :"+this.data.stock[choice].noOfshare+"\nStock Price :"
        +this.data.stock[choice].price+"\nSymbol :"+this.data.stock[choice].symbol);
    }
    calculateStockPrice(choice,shares)
    {
        this.data.stock[choice].price=this.data.stock[choice].price*shares;
        //will return the calculated price
        return this.data.stock[choice].price
    }

    updateUser(userName,shares)
    {
        //traverse the file
        for(let i=0;i<this.value.user.length;i++)
        {
            //parameter pass will be checked in file if it is present  
            if(this.value.user[i].userName.toLowerCase() == userName.toLowerCase())
            {   
                //to update the number of shares  
                this.value.user[i].noOfShare = this.value.user[i].noOfShare + shares;
                //write it back to file
                this.writeToUserFile();
                break;
            }
        }
    }

    updateCompany(choice,shares)
    {
        //traverse the file
        for(let i=0;i<this.data.stock.length;i++)
        {
            //parameter pass will be checked in file if it is present  
            if(i==(choice-1))
            {     
                //to update the number of shares
                this.data.stock[i].noOfshare = this.data.stock[i].noOfshare - shares;
                //write it back to file
                this.writeToCompanyFile();
                break;
            }
        }        
    }
    writeToUserFile()
    {
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/user.json',JSON.stringify(this.value));
    }
    writeToCompanyFile()
    {
       fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/commercial.json',JSON.stringify(this.data));        
=======
        console.log("NameOfCompany :"+this.data.stock[choice].companyName
        +"\nNumber Of Shares :"+this.data.stock[choice].noOfShare+"\nStock Price :"
        +this.data.stock[choice].price+"\nSymbol :"+this.data.stock[choice].symbol);
    }
    claculateStockPrice(choice,shares)
    {
        var value=this.data.stock[choice].price*shares;
        return value
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
    }
}
module.exports={
    BuySellStock
}
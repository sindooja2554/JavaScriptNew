var util=require('../../utility/utility');
var rl=require('readline-sync')
var utility = require('./commercialM6');
var commercial=new utility.Company();
class Stock
{
    constructor()
    {
        var content=util.readFile('/home/admin1/JavaScriptNew-master/OOP/json/commercial.json');
        this.data=JSON.parse(content);
        var length=this.data.stock.length;
        //console.log(length);
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
        for(var i=0;i<this.data.stock.length;i++){
            console.log((i+1)+"."+this.data.stock[i].companyName);
        }
    }
    displayStock(choice)
    {
        console.log("NameOfCompany :"+this.data.stock[choice].companyName
        +"\nNumber Of Shares :"+this.data.stock[choice].noOfShare+"\nStock Price :"
        +this.data.stock[choice].price+"\nSymbol :"+this.data.stock[choice].symbol);
    }
    claculateStockPrice(choice,shares)
    {
        this.data.stock[choice].price=this.data.stock[choice].price*shares;
        commercial.writeToFile();
        return this.data.stock[choice].price
    }
}
module.exports={
    BuySellStock
}
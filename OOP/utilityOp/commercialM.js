var u= require('../../utility/utility');
var util = require('../../utility/LinkedList');
var list = new util.LinkedList();
var fs = require('fs');
class Stock
{
    constructor()
    {
        var content = u.readFile('/home/admin1/javascript-master/commercial.json');
        //console.log()
        this.value = JSON.parse(content);
    }
}

class Company extends Stock
{
    addList()
    {
        for (let key in this.value.stock) {
            list.add(this.value.stock[key]);
        }
    }

    addCompany()
    {
        console.log("Enter company name=");
        var companyName = u.inputStringRead();
        console.log("Enter number of shares=");
        var noOfshare = u.inputIntegerRead();
        console.log("Enter symbol=");
        var symbol = u.inputStringRead();
        console.log("Enter share price for each share=");
        var price = u.inputIntegerRead();
        var stock = {
            "companyName" : companyName,
            "noOfshare" : noOfshare,
            "symbol" : symbol,
            "price" : price
        }
        list.add(stock);
    }

    removeCompany()
    {
        var current=list.head;
        console.log("enter the company name you want to delete:");
        var NameOfCompany = u.inputStringRead(); 
        //console.log(current.data);
        while(current.data.companyName.toLowerCase()!=NameOfCompany.toLowerCase() && current!=null){
            current=current.next;
        }
        if(current!=null){
            list.remove(current.data);
            console.log("Company detalis remove.Successfully...");
        }
        else{
            console.log("Company name not in the list");
            
        }
    }

    writeToFile()
    {
        this.value.stock=[];
        var current = list.head;
        //var current=list.head;
        while(current!=null){
            this.value.stock.push(current.data);
            current=current.next;
        }
        fs.writeFileSync('/home/admin1/javascript-master/commercial.json',JSON.stringify(this.value));
    }

    displaycompanyShare()
    {
        var content = fs.readFileSync('/home/admin1/javascript-master/commercial.json');
        var data = JSON.parse(content);
        console.log(data);
    }
}

module.exports={
    Company
}
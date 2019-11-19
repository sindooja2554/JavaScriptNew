var u= require('../../utility/utility');
var ut = require('./commercialM');
var util = require('../../utility/LinkedList');
var utll = require('./BuyOrSell');
var utl = new utll.BuySellStock();
var list = new util.LinkedList();
var fs = require('fs');
//var utl =new ut.Company();
class StockHolder
{
    constructor()
    {
        var content = u.readFile('/home/admin1/javascript-master/user.json');
        //console.log()
        this.value = JSON.parse(content);
    }
}

class User extends StockHolder
{
    addList()
    {
        for (let key in this.value.user) {
            list.add(this.value.user[key]);
        }
    }

    addUser()
    {
        console.log("Enter user name=");
        var userName = u.inputStringRead();
        console.log("Enter number of shares=");
        var noOfshare = u.inputIntegerRead();
        console.log("Enter share price for each share=");
        var price = u.inputIntegerRead();
        var user = {
            "userName" : userName,
            "noOfshare" : noOfshare,
            "price" : price
        }
        list.add(user);
    }

    removeUser()
    {
        var current=list.head;
        console.log("enter the user name you want to delete:");
        var NameOfUser = u.inputStringRead(); 
        //console.log(current.data);
        while(current.data.userName.toLowerCase()!=NameOfUser.toLowerCase() && current!=null){
            current=current.next;
        }
        if(current!=null){
            list.remove(current.data);
            console.log("User detalis remove.Successfully...");
        }
        else{
            console.log("User name not in the list");
            
        }
    }

    writeToFile()
    {
        this.value.user=[];
        var current = list.head;
        //var current=list.head;
        while(current!=null){
            this.value.user.push(current.data);
            current=current.next;
        }
        fs.writeFileSync('/home/admin1/javascript-master/user.json',JSON.stringify(this.value));
    }

    displayUserShare()
    {
        var content = fs.readFileSync('/home/admin1/javascript-master/user.json');
        var data = JSON.parse(content);
        console.log(data);
    }

    buy()
    {
        if(utl.buyStock())
        {
            
        }

    }
}

module.exports={
    User
}
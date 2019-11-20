var u= require('../../utility/utility');
var ut = require('./commercialM6');
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
        var content = u.readFile('/home/admin1/JavaScriptNew-master/OOP/json/user.json');
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
        var content = /^[a-zA-Z]+$/;
        console.log("Enter user name=");
        var userName = u.inputStringRead();
        //to check if it is a character string
        if(!content.test(userName))   
        {
            //if invalid input again take input
            console.log("Enter company name=");
            var userName = u.inputStringRead();
        }
        if(!this.isPresent(userName))
        {
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
        else
        {
            console.log('User is already Registered');
        }     

    }

    //to check if corportation is present
    isPresent(userName)
    {
        var present=false;
        for(let i=0;i<this.value.user.length;i++)
        {
            //comparing the input from user and the item object
            if(this.value.user[i].companyName.toLowerCase() == companyName.toLowerCase())
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
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/user.json',JSON.stringify(this.value));
    }

    displayUserShare()
    {
        var content = fs.readFileSync('/home/admin1/JavaScriptNew-master/OOP/json/user.json');
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
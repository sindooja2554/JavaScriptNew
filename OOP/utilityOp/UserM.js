var u= require('../../utility/utility');
<<<<<<< HEAD
var ut = require('./commercialM6');
=======
var ut = require('./commercialM');
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
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
<<<<<<< HEAD
        var content = u.readFile('/home/admin1/JavaScriptNew-master/OOP/json/user.json');
=======
        var content = u.readFile('/home/admin1/javascript-master/user.json');
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
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
<<<<<<< HEAD
        var content = /^[a-zA-Z]+$/;
        console.log("Enter user name=");
        var userName = u.inputStringRead();
        //to check if it is a character string
        if(!content.test(userName))   
        {
            //if invalid input again take input
            console.log("Enter user name=");
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
            this.writeToFile();
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
            if(this.value.user[i].userName.toLowerCase() == userName.toLowerCase())
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

>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
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
<<<<<<< HEAD
            this.writeToFile();
=======
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
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
<<<<<<< HEAD
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/user.json',JSON.stringify(this.value));
=======
        fs.writeFileSync('/home/admin1/javascript-master/user.json',JSON.stringify(this.value));
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
    }

    displayUserShare()
    {
<<<<<<< HEAD
        var content = fs.readFileSync('/home/admin1/JavaScriptNew-master/OOP/json/user.json');
=======
        var content = fs.readFileSync('/home/admin1/javascript-master/user.json');
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
        var data = JSON.parse(content);
        console.log(data);
    }

<<<<<<< HEAD
    displayUserName()
    {
        for(var i=0;i<this.data.user.length;i++){
            console.log((i+1)+"."+this.data.user[i].userName);
        }
    }

=======
    buy()
    {
        if(utl.buyStock())
        {
            
        }

    }
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
}

module.exports={
    User
}
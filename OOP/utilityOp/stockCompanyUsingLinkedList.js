var fs = require('fs');
var utility = require('../../utility/LinkedList');
var link = new utility.LinkedList();
var u = require('../../utility/utility');
var rl = require('readline-sync');

class companyShare
{
    constructor()
    {
        var content = fs.readFileSync('/home/admin1/javascript-master/OOP/json/companyShare.json');
        this.value=JSON.parse(content);
    }

    addList() {
        for (let key in this.value.companyShare) {
            link.add(this.value.companyShare[key]);
        }
        var str =link.print().toString();
        console.log(str);
        
        //this.manage();
    }

    addCompany()
    {
        console.log("Enter company name=");
        var companyName = u.inputStringRead();
        console.log("Enter number of shares=");
        var noOfshare = u.inputIntegerRead();
        console.log("Enter share price for each share=");
        var price = u.inputIntegerRead();
        var Share = {
            "companyName" : companyName,
            "noOfshare" : noOfshare,
            "price" : price
        }
        link.add(Share);
    }

    removeCompany(){
        var current=link.head;
        var NameOfCompany=rl.question("enter the company name you want to delete:");
        while(current.data.companyName.toLowerCase()!=NameOfCompany.toLowerCase() && current!=null){
            current=current.next;
        }
        if(current!=null){
            link.remove(current.data);
            console.log("Company detalis remove.Successfully...");
        }
        else{
            console.log("Company name not in the list");
            
        }
    }

    writeToFile()
    {
        this.value.companyShare=[];
        var current = link.head;
        //var current=list.head;
        while(current!=null){
            this.value.companyShare.push(current.data);
            current=current.next;
        }
        fs.writeFileSync('/home/admin1/javascript-master/OOP/json/companyShare.json',JSON.stringify(this.value));
    }

    displaycompanyShare()
    {
        var content = fs.readFileSync('/home/admin1/javascript-master/OOP/json/companyShare.json');
        var data = JSON.parse(content);
        console.log(data);
    }
}


module.exports={
    companyShare
}

/*var a = new companyShare()
a.addCompany();
//a.removeCompany();
a.writeToFile();*/
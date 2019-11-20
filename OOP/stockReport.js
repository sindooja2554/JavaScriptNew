var utility = require('./utilityOp/stockManagement');
var util = require('../utility/utility');
var u = new utility.stockManagement();
function stock()
{
    do{
        console.log(" ");
        console.log("1.Display share names");
        console.log("2.Display Information of particular company");
        console.log("3.Purchase share");
        console.log("4.Exit");
        console.log("Enter choice=");
        var choice= util.inputIntegerRead();
        console.log(" ");
        switch(choice)
        {
            case 1:
                u.display();
                break;
            case 2:
                u.display();
                console.log("Enter between 1-n=");
                var choice = util.inputIntegerRead();
                u.info(choice);
                break;
            case 3:
                u.display();
                console.log("Enter share you wanna purchase(in between 1-n)=");
                var numberOfPurchases = util.inputIntegerRead();
                u.purchase(numberOfPurchases);
                break;
            case 4:
                return
            default:
                console.log("Invalid Choice")
        }
    }while(choice)

}

stock();
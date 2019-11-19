var utility = require('./utilityOp/UserM');
var util = require('../utility/utility');
var u = new utility.User();
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
                u.info();
                break;
            case 3:
                u.purchase();
                break;
            case 4:
                return
            default:
                console.log("Invalid Choice")
        }
    }while(choice)

}

stock();
<<<<<<< HEAD
/*/*********************************************Stock_Report*************************************
@Description-Write a program to read in Stock Names, Number of Share, Share Price.
    Print a Stock Report with total value of each Stock and the total value of Stock.
@I/P-N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price
@Logic-Calculate the value of each stock and the total value 
@Output-Print the Stock Report.
@Aurhor-Sindooja Gajam
@Date-20/11/19
/*************************************************************************************************/
var utility = require('./utilityOp/stockManagement');
var util = require('../utility/utility');
var stockM = new utility.stockManagement();
=======
var utility = require('./utilityOp/stockManagement');
var util = require('../utility/utility');
var u = new utility.stockManagement();
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
function stock()
{
    do{
        console.log(" ");
<<<<<<< HEAD
        console.log("1.Add Corporation");
        console.log("2.Display share names");
        console.log("3.Display Information of particular company");
        console.log("4.Purchase share");
        console.log("5.Exit");
=======
        console.log("1.Display share names");
        console.log("2.Display Information of particular company");
        console.log("3.Purchase share");
        console.log("4.Exit");
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
        console.log("Enter choice=");
        var choice= util.inputIntegerRead();
        console.log(" ");
        switch(choice)
        {
            case 1:
<<<<<<< HEAD
                stockM.addStock();
                break;
            case 2:
                stockM.display();
                break;
            case 3:
                stockM.display();
                console.log("Enter between 1-n=");
                var choice = util.inputIntegerRead();
                stockM.info(choice);
                break;
            case 4:
                stockM.display();
                console.log("Enter share you wanna purchase(in between 1-n)=");
                var numberOfPurchases = util.inputIntegerRead();
                stockM.purchase(numberOfPurchases);
                break;
            case 5:
=======
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
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
                return
            default:
                console.log("Invalid Choice")
        }
    }while(choice)

}

stock();
<<<<<<< HEAD
/*/*****************************************Commercial_Data_Processing***************************************
@Description-StockAccount.java implements a data type that might be used by a financial institution
    to keep track of customer information.
@I/P- read json files
@Logic-Input from user to buy and update changes to files
@Output-write to json files 
@Aurhor-Sindooja Gajam
@Date-19/11/19
/*************************************************************************************************/
var utility = require('./commercialData');
var utilty = require('./userD');
=======
var utility = require('./commercialData');
var utilty = require('../userD');
>>>>>>> 47fc5a05e5d59a6b96e31ebaa5a01b966d3eb6d4
var u = require('../utility/utility')
var util = new utility.companyLogin();
var utl = new utilty.userLogin();
function commercial()
{
    do
    {
        console.log('1.Company Login');
        console.log('2.user Login');
        console.log('3.Exit');
        console.log('Enter your choice=');
        var choice = u.inputIntegerRead();
        switch(choice)
        {
            case 1:
                util.company();
                break;
            case 2:
                utl.user();
                break;
            case 3:
                return
            default:
                console.log('Invalid choice');
        }
    }while(choice);
}

commercial();
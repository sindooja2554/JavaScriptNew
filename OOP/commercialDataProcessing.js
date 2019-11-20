var utility = require('./commercialData');
var utilty = require('./userD');
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
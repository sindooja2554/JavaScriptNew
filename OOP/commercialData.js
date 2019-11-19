var utility = require('./utilityOp/commercialM');
var util = new utility.Company();
var u = require('../utility/utility')
class companyLogin
{
    company()
    {
        util.addList();
        do
        {
            console.log("1.Add company details");
            console.log("2.Remove company details");
            console.log("3.Write to file");
            console.log("4.Display");
            console.log("5.Exit");
            console.log("Enter your choice=");
            var choice = u.inputIntegerRead();
            switch(choice)
            {
                case 1:
                    util.addCompany();
                    break;
                case 2:
                    //console.log("Enter company name to remove=");
                    //var name = u.inputStringRead();
                    util.removeCompany();
                    break;
                case 3:
                    util.writeToFile();
                    break;
                case 4:
                    util.displaycompanyShare();
                    break;
                case 5:
                    return
                default:
                    console.log("Wrong choice");
            }
        }while(choice)
    }
}

module.exports={
    companyLogin
}
// var com = new company();
// com.company();
// company();

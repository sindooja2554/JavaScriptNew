/*/*********************************************CompanyShares_in_a_Linked_List*************************************
@Description-Maintain the List of CompanyShares in a Linked List
    So new CompanyShares can be added or removed easily
@I/P-Company Name to add or remove 
@Logic-Add company details in the json file and remove company details from json file
@Aurhor-Sindooja Gajam
@Date-19/11/19
/*************************************************************************************************/

var utility = require('./utilityOp/commercialM6');
var util = new utility.Company();
var u = require("../utility/utility");
class companyshare
{
    companyshare()
    {
        try
        {
            var content = /^[a-zA-Z]+$/;
            util.addList();
            do
            {
                console.log("1.Add company details");
                console.log("2.Remove company details");
                console.log("3.Write to file");
                console.log("4.Display Name");
                console.log("5.Display");
                console.log("6.Exit");
                console.log("Enter your choice=");
                var choice = u.inputIntegerRead();
                switch(choice)
                {
                    case 1:
                        //to  take input from user
                        console.log("Enter company name=");
                        var companyName = u.inputStringRead();
                        //to check if it is a character string
                        if(!content.test(companyName))   
                        {
                            //if invalid input again take input
                            console.log("Enter company name=");
                            var companyName = u.inputStringRead();
                        }
                        console.log("Enter number of shares=");
                        var noOfshare = u.inputIntegerRead();
                        console.log("Enter symbol=");
                        var symbol = u.inputStringRead();
                        console.log("Enter share price for each share=");
                        var price = u.inputIntegerRead();
                        //calling function
                        util.addCompany(companyName,noOfshare,symbol,price);
                        break;
                    case 2:
                        util.displayCompanyName();
                        console.log("Enter company name to remove=");
                        var companyName = u.inputStringRead();
                        //to check if it is a character string
                        if(!content.test(companyName))   
                        {
                            //if invalid input again take input
                            console.log("Enter company name=");
                            var companyName = u.inputStringRead();
                        }
                        util.removeCompany(companyName);
                        break;
                    case 3:
                        util.writeToFile();
                        break;
                    case 4:
                        util.displayCompanyName();
                        break;
                    case 5:
                        util.displaycompanyShare();
                        break;
                    case 6:
                        return
                    default:
                        console.log("Wrong choice");
                }
            }while(choice)
        }
        catch(e)
        {
            console.log(e);
            u.inputStringRead();
            
            return e
        }
    
}

}
var company = new companyshare()

company.companyshare();
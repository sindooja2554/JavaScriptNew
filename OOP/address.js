var utility = require('./utilityOp/addressBook');
var addressBook = new utility.AddressBook();
var util = require('../utility/utility');

class Address
{
    addressBook() 
    {
        do{
            console.log('1.Add Person');
            console.log('2.Edit Details');
            console.log('3.Display Address Book');
            console.log('4.Search Person Details');
            console.log('5.Remove details');
            console.log('6.Sort By First Name');
            console.log('7.Sort By Zip Code');
            console.log('8.Exit');
            console.log('Enter your choice=');
            var choice = util.inputIntegerRead();
            switch(choice)
            {
                case 1:
                    
            }
        }
        
    }
}
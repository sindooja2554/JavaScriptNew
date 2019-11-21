var util = require('../../utility/utility');
class Address
{
    constructor()
    {
        var content = util.readFile("/home/admin1/JavaScriptNew-master/OOP/json/addressBook.json");
        this.data = JSON.parse(content);
    }
}

class AddressBook extends Address
{
    addPerson()
    {
        console.log('Enter your first name=');
        var firstName = util.inputStringRead();
        console.log('Enter your last name=');
        var lastName = util.inputStringRead();
        console.log('Enter your address=');
        var address = util.inputStringRead();
        console.log('Enter your city name=');
        var city = util.inputStringRead();
        console.log('Enter the name of state=');
        var state = util.inputStringRead();
        console.log('Enter zip code=');
        var zipCode = util.inputIntegerRead();
        console.log('Enter mobile number=');
        var mobileNo = util.inputIntegerRead();
        if(!this.isPresent(mobileNo))
        {
            //pushing data to this.data
            this.data.AddressBook.push({
                "firstName":firstName,
                "lastName":lastName,
                "address":address,
                "city":city,
                "state":state,
                "zipCode":zipCode,
                "mobileNo":mobileNo
            })
    
            util.writeFile("/home/admin1/JavaScriptNew-master/OOP/json/addressBook.json",this.data);
        }
        else
        {
            console.log('Your details are already in address book');
        }

    }

    //to check if corportation is present
    isPresent(mobileNo)
    {
        var present=false;
        for(let i=0;i<this.data.AddressBook.length;i++)
        {
            //comparing the input from user and the item object
            if(this.data.AddressBook[i].mobileNo == mobileNo)
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

    //editing the details in address book
    edit()
    {
        console.log('Please enter your mobile number to edit your details in address book');
        console.log('Enter mobile number=');
        var mobileNo = util.inputIntegerRead();
        if(this.isPresent(mobileNo))
        {
            console.log('1.First Name');
            console.log('2.Last Name');
            console.log('3.Address');
            console.log('4.City');
            console.log('5.State');
            console.log('6.ZipCode');
            console.log('7.Mobile Number');
            console.log('8.Exit');
            console.log('Which field do yo wanna edit');
            var choice = util.inputIntegerRead();
            for(let i=0;i<this.data.AddressBook.length;i++)
            {
                if(this.data.AddressBook[i].mobileNo==mobileNo)
                {
                    switch(choice)
                    {
                        case 1:
                                console.log('Enter your first name=');
                                var firstName = util.inputStringRead();
                                this.data.AddressBook[i].firstName = firstName;
                                util.writeFile("/home/admin1/JavaScriptNew-master/OOP/json/addressBook.json",this.data);
                                break;
                        case 2:
                                console.log('Enter your last name=');
                                var firstName = util.inputStringRead();
                                this.data.AddressBook[i].lastName = lastName; 
                                util.writeFile("/home/admin1/JavaScriptNew-master/OOP/json/addressBook.json",this.data);                                
                                break;
                        case 3:
                                console.log('Enter your address=');
                                var address = util.inputStringRead();
                                this.data.AddressBook[i].address = address; 
                                util.writeFile("/home/admin1/JavaScriptNew-master/OOP/json/addressBook.json",this.data);                                
                                break;
                        case 4:
                                console.log('Enter your city=');
                                var city = util.inputStringRead();
                                this.data.AddressBook[i].city = city; 
                                util.writeFile("/home/admin1/JavaScriptNew-master/OOP/json/addressBook.json",this.data);                                
                                break; 
                        case 5:
                                console.log('Enter your state=');
                                var state = util.inputStringRead();
                                this.data.AddressBook[i].state = state; 
                                util.writeFile("/home/admin1/JavaScriptNew-master/OOP/json/addressBook.json",this.data);                                
                                break;
                        case 6:
                                console.log('Enter zipcode=');
                                var zipCode = util.inputStringRead();
                                this.data.AddressBook[i].zipCode = zipCode; 
                                util.writeFile("/home/admin1/JavaScriptNew-master/OOP/json/addressBook.json",this.data);                                
                                break; 
                        case 7: 
                                console.log('Enter mobile number=');
                                var mobileNo = util.inputStringRead();
                                this.data.AddressBook[i].mobileNo = mobileNo; 
                                util.writeFile("/home/admin1/JavaScriptNew-master/OOP/json/addressBook.json",this.data);                                
                                break;
                        case 8:
                                return;
                        default:
                            console.log('Wrong Choice');                                                                                                                                                                   
                    }
                    break;
                }
            }
        }
    }

    sortByFirstName()
    {
        var temp;
        for(let i=0;i<this.data.AddressBook.length;i++)
        {
            for(let j=0;j<this.data.AddressBook.length-1;j++)
            if(this.data.AddressBook[i].firstName<this.data.AddressBook[j].firstName)
            {
                temp = this.data.AddressBook[i];
                this.data.AddressBook[i] = this.data.AddressBook[j];
                this.data.AddressBook[j] = temp;
            }
        }
        console.log(this.data.AddressBook);
    }

    sortByZipCode()
    {
        var temp;
        for(let i=0;i<this.data.AddressBook.length;i++)
        {
            for(let j=0;j<this.data.AddressBook.length-1;j++)
            if(this.data.AddressBook[i].zipCode<this.data.AddressBook[j].zipCode)
            {
                temp = this.data.AddressBook[i];
                this.data.AddressBook[i] = this.data.AddressBook[j];
                this.data.AddressBook[j] = temp;
            }
        }
        console.log(this.data.AddressBook);
    }

    displayAddressBook()
    {
        for(let i=0;i<this.data.AddressBook.length;i++)
        {
            console.log('First Name='+this.data.AddressBook[i].firstName);
            console.log('Last Name ='+this.data.AddressBook[i].lastName);
            console.log('Address ='+this.data.AddressBook[i].address);
            console.log('City ='+this.data.AddressBook[i].city);
            console.log('State ='+this.data.AddressBook[i].state);
            console.log('Zip Code ='+this.data.AddressBook[i].zipCode);
            console.log('Mobile Number ='+this.data.AddressBook[i].mobileNo);
            console.log();
        }
    }

    displayParticularAddress()
    {
        console.log('Enter your mobile number=');
        var mobileNo = util.inputIntegerRead();
        if(this.isPresent(mobileNo))
        {
            for(let i=0;i<this.data.AddressBook.length;i++)
            {
                if(this.data.AddressBook[i].mobileNo==mobileNo)
                {
                    console.log('First Name='+this.data.AddressBook[i].firstName);
                    console.log('Last Name ='+this.data.AddressBook[i].lastName);
                    console.log('Address ='+this.data.AddressBook[i].address);
                    console.log('City ='+this.data.AddressBook[i].city);
                    console.log('State ='+this.data.AddressBook[i].state);
                    console.log('Zip Code ='+this.data.AddressBook[i].zipCode);
                    console.log('Mobile Number ='+this.data.AddressBook[i].mobileNo);
                    console.log();
                    break;
                }
            }
        }
    }
}

var a = new AddressBook();
a.displayParticularAddress();
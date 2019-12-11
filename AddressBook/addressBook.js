var fs = require('fs');
var readline = require('readline-sync');
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        var content = fs.readFileSync('./addressBook.json');
        this.data = JSON.parse(content);
    }
    // set_value(value){
    //     this.value = value;
    // }
    // get_value(){
    //     return this.value
    // }
    AddressBook.prototype.add = function () {
        var nameRegex = /^[a-zA-Z]+$/;
        var addressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
        var zipCodeRegex = /^[1-9][0-9]{5}$/;
        var contactRegex = /"^[0-9]{10}$"/;
        console.log(this.data);
        do {
            var firstName = readline.question("Enter your First Name =");
            console.log('firstname', firstName);
        } while (nameRegex.test(firstName) == false);
        do {
            var lastName = readline.question("Enter your Last Name =");
            console.log(lastName);
        } while (nameRegex.test(lastName) == false);
        do {
            var address = readline.question("Enter Your Address =");
            console.log(address);
        } while (addressRegex.test(address) == false);
        do {
            var city = readline.question("Enter City Name =");
            console.log(city);
        } while (nameRegex.test(city) == false);
        do {
            var state = readline.question("Enter State Name =");
            console.log(state);
        } while (nameRegex.test(state) == false);
        // do{
        var zipCode = readline.questionInt("Enter Zip Code =");
        console.log(zipCode);
        // }while(zipCodeRegex.test(zipCode)==false)
        // do{
        var mobileNo = readline.questionInt("Enter Mobile Number =");
        console.log(mobileNo);
        // }while(contactRegex.test(mobileNo));
        if (!this.isPresent(mobileNo)) {
            //pushing data to this.data
            this.data.push({
                "firstName": firstName,
                "lastName": lastName,
                "address": address,
                "city": city,
                "state": state,
                "zipCode": zipCode,
                "mobileNo": mobileNo
            });
            fs.writeFileSync("./addressBook.json", this.data);
        }
    };
    //to check if corportation is present
    AddressBook.prototype.isPresent = function (mobileNo) {
        var present = false;
        for (var i = 0; i < this.data.length; i++) {
            //comparing the input from user and the item object
            if (this.data[i].mobileNo == mobileNo) {
                present = true;
                break;
            }
            else {
                present = false;
            }
        }
        if (present === true) {
            return true;
        }
        else {
            return false;
        }
    };
    return AddressBook;
}());
var addB = new AddressBook();
addB.add();

var fs = require('fs');
var readline = require('readline-sync');
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        var content = fs.readFileSync('./addressBook.json');
        this.data = JSON.parse(content);
    }
    /**
     * @description Adding new person's address and details in address book
     * @overview Adding persons details in the object and writing back to json file of address book
     * @summary Takes user input about user details and then checking if the user details are already
     *          present.. if the details are not present then adding the data to the  object and writing
     *          back to the json file of address book
     */
    AddressBook.prototype.add = function () {
        var nameRegex = /^[a-zA-Z]+$/;
        var addressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
        var zipCodeRegex = /^[1-9][0-9]{5}$/;
        var contactRegex = /^[0-9]{10}$/;
        console.log(this.data);
        var firstName = readline.question("Enter your First Name =");
        if (nameRegex.test(firstName) == false || firstName.length < 3) {
            do {
                console.log('First Name must be a character string and must be atleast 3 character long');
                firstName = readline.question("Enter your First Name =");
            } while (nameRegex.test(firstName) == false || firstName.length < 3);
        }
        var lastName = readline.question("Enter your Last Name =");
        if (nameRegex.test(lastName) == false || lastName.length < 3) {
            do {
                console.log('Last Name must be a character string and must be atleast 3 character long');
                lastName = readline.question("Enter your Last Name =");
            } while (nameRegex.test(lastName) == false || lastName.length < 3);
        }
        var address = readline.question("Enter Your Address =");
        if (addressRegex.test(address) == false) {
            do {
                console.log("Invalid Address Specified");
                address = readline.question("Enter Your Address =");
                // console.log(address)
            } while (addressRegex.test(address) == false);
        }
        var city = readline.question("Enter City Name =");
        if (nameRegex.test(city) == false || city.length < 3) {
            do {
                console.log('City Name must be a character string and must be atleast 3 character long');
                city = readline.question("Enter City Name =");
            } while (nameRegex.test(city) == false || city.length < 3);
        }
        var state = readline.question("Enter State Name =");
        if (nameRegex.test(state) == false || state.length < 3) {
            do {
                console.log('State Name must be a character string and must be atleast 3 character long');
                state = readline.question("Enter State Name =");
            } while (nameRegex.test(state) == false || state.length < 3);
        }
        var zipCode = readline.question("Enter Zip Code =");
        if (zipCodeRegex.test(zipCode) == false || zipCode.length < 6) {
            do {
                console.log('Zipcode must be a number string and must be 6 numbers long');
                zipCode = readline.question("Enter Zip Code =");
            } while (zipCodeRegex.test(zipCode) == false || zipCode.length < 6);
        }
        var mobileNo = readline.question("Enter Mobile Number =");
        if (contactRegex.test(mobileNo) == false || mobileNo.length < 10) {
            do {
                console.log('Mobile No must be a number string and must be 10 numbers long');
                mobileNo = readline.question("Enter Mobile Number =");
            } while (contactRegex.test(mobileNo) == false || mobileNo.length < 10);
        }
        console.log(this.isPresent(mobileNo));
        if (!this.isPresent(mobileNo)) {
            //pushing data to this.data
            this.data.AddressBook.push({
                "firstName": firstName,
                "lastName": lastName,
                "address": address,
                "city": city,
                "state": state,
                "zipCode": zipCode,
                "mobileNo": mobileNo
            });
            fs.writeFileSync("./addressBook.json", JSON.stringify(this.data));
            this.displayAddressBook();
        }
        else {
            console.log("Your data is already present in the address book");
        }
    };
    /**
     * @description This function only checks if the persons details are present in the file
     * @param {} mobileNo
     * @overview This function takes parameter mobile number and using the parameter it checks if the
     *           person details are present and returns boolean value.
     * @summary This function takes parameter mobile number and using the parameter it checks if the
     *          person details are present if present it will return true else false
     */
    AddressBook.prototype.isPresent = function (mobileNo) {
        var present = false;
        for (var i = 0; i < this.data.AddressBook.length; i++) {
            //comparing the input from user and the item object
            if (this.data.AddressBook[i].mobileNo === mobileNo) {
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
    /**
     * @description Updating User Details in Address Book
     *
     * @overview This function takes input from user and checks if the user input is present in the object
     *            if present it allows user to update an information according to the users choice
     * @summary The function takes user input and checks if the user is present in the object if the user is
     *          present.. this function gives user the choice to change any particular feild present in the
     *          object and then write back the changes to the file
     */
    AddressBook.prototype.updatePersonDetails = function () {
        var nameRegex = /^[a-zA-Z]+$/;
        var addressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
        var zipCodeRegex = /^[1-9][0-9]{5}$/;
        var contactRegex = /^[0-9]{10}$/;
        // let numberRegex :RegExp = /^[0-9]{1}$/;
        var mobileNo = readline.question("Enter Mobile Number =");
        if (contactRegex.test(mobileNo) == false) {
            do {
                console.log('Mobile No must be a number string and must be 10 numbers long');
                mobileNo = readline.question("Enter Mobile Number =");
            } while (contactRegex.test(mobileNo) == false);
        }
        console.log("Data", this.data);
        if (this.isPresent(mobileNo)) {
            do {
                console.log("1.Update First Name");
                console.log("2.Update Last Name");
                console.log("3.Update Address");
                console.log("4.Update City");
                console.log("5.Update State");
                console.log("6.Update Zipcode");
                console.log("7.Update Mobile Number");
                console.log("8.Exit");
                var choice = readline.questionInt("Enter Your Choice =");
                console.log("ch", choice);
                for (var i = 0; i < this.data.AddressBook.length; i++) {
                    switch (choice) {
                        case 1:
                            //comparing the input from user and the mobile number in object
                            if (this.data.AddressBook[i].mobileNo == mobileNo) {
                                var firstName = readline.question("Enter your First Name =");
                                if (nameRegex.test(firstName) == false || firstName.length < 3) {
                                    do {
                                        console.log('First Name must be a character string and must be atleast 3 character long');
                                        firstName = readline.question("Enter your First Name =");
                                    } while (nameRegex.test(firstName) == false || firstName.length < 3);
                                }
                                this.data.AddressBook[i].firstName = firstName;
                                fs.writeFileSync("./addressBook.json", JSON.stringify(this.data));
                            }
                            break;
                        case 2:
                            //comparing the input from user and the mobile number in object
                            if (this.data.AddressBook[i].mobileNo == mobileNo) {
                                var lastName = readline.question("Enter your Last Name =");
                                if (nameRegex.test(lastName) == false || lastName.length < 3) {
                                    do {
                                        console.log('Last Name must be a character string and must be atleast 3 character long');
                                        lastName = readline.question("Enter your Last Name =");
                                    } while (nameRegex.test(lastName) == false || lastName.length < 3);
                                }
                                this.data.AddressBook[i].lastName = lastName;
                                fs.writeFileSync("./addressBook.json", JSON.stringify(this.data));
                            }
                            break;
                        case 3:
                            //comparing the input from user and the mobile number in object
                            if (this.data.AddressBook[i].mobileNo == mobileNo) {
                                var address = readline.question("Enter Your Address =");
                                if (addressRegex.test(address) == false) {
                                    do {
                                        console.log("Invalid Address Specified");
                                        address = readline.question("Enter Your Address =");
                                        // console.log(address)
                                    } while (addressRegex.test(address) == false);
                                }
                                this.data.AddressBook[i].address = address;
                                fs.writeFileSync("./addressBook.json", JSON.stringify(this.data));
                            }
                            break;
                        case 4:
                            //comparing the input from user and the mobile number in object
                            if (this.data.AddressBook[i].mobileNo == mobileNo) {
                                var city = readline.question("Enter City Name =");
                                if (nameRegex.test(city) == false || city.length < 3) {
                                    do {
                                        console.log('City Name must be a character string and must be atleast 3 character long');
                                        city = readline.question("Enter City Name =");
                                    } while (nameRegex.test(city) == false || city.length < 3);
                                }
                                this.data.AddressBook[i].city = city;
                                fs.writeFileSync("./addressBook.json", JSON.stringify(this.data));
                            }
                            break;
                        case 5:
                            //comparing the input from user and the mobile number in object
                            if (this.data.AddressBook[i].mobileNo == mobileNo) {
                                var state = readline.question("Enter State Name =");
                                if (nameRegex.test(state) == false || state.length < 3) {
                                    do {
                                        console.log('State Name must be a character string and must be atleast 3 character long');
                                        state = readline.question("Enter State Name =");
                                    } while (nameRegex.test(state) == false || state.length < 3);
                                }
                                this.data.AddressBook[i].state = state;
                                fs.writeFileSync("./addressBook.json", JSON.stringify(this.data));
                            }
                            break;
                        case 6:
                            //comparing the input from user and the mobile number in object
                            if (this.data.AddressBook[i].mobileNo == mobileNo) {
                                var zipCode = readline.question("Enter Zip Code =");
                                if (zipCodeRegex.test(zipCode) == false || zipCode.length < 6) {
                                    do {
                                        console.log('Zipcode must be a number string and must be 6 numbers long');
                                        zipCode = readline.question("Enter Zip Code =");
                                    } while (zipCodeRegex.test(zipCode) == false || zipCode.length < 6);
                                }
                                this.data.AddressBook[i].zipCode = zipCode;
                                fs.writeFileSync("./addressBook.json", JSON.stringify(this.data));
                            }
                            break;
                        case 7:
                            //comparing the input from user and the mobile number in object
                            if (this.data.AddressBook[i].mobileNo == mobileNo) {
                                var mobileNo_1 = readline.question("Enter Mobile Number =");
                                if (contactRegex.test(mobileNo_1) == false || mobileNo_1.length < 10) {
                                    do {
                                        console.log('Mobile No must be a number string and must be 10 numbers long');
                                        mobileNo_1 = readline.question("Enter Mobile Number =");
                                    } while (contactRegex.test(mobileNo_1) == false || mobileNo_1.length < 10);
                                }
                                this.data.AddressBook[i].mobileNo = mobileNo_1;
                                fs.writeFileSync("./addressBook.json", JSON.stringify(this.data));
                            }
                            break;
                        case 8:
                            return;
                        default:
                            console.log("Wrong Choice");
                            break;
                    }
                }
            } while (choice);
        }
        else {
            console.log("Your Details are not present in address book. Sorry...");
        }
    };
    /**
     * @description Removing the details of particular Person in address book
     * @overview Removing the details and writting back to json file
     * @summary This function takes user input and checks if the details of person
     *          matches... if the details match then removes the person's details
     */
    AddressBook.prototype.removePersonsDetails = function () {
        var contactRegex = /^[0-9]{10}$/;
        var mobileNo = readline.question("Enter Mobile Number =");
        if (contactRegex.test(mobileNo) == false) {
            do {
                console.log('Mobile No must be a number string and must be 10 numbers long');
                mobileNo = readline.question("Enter Mobile Number =");
            } while (contactRegex.test(mobileNo) == false);
        }
        if (this.isPresent(mobileNo)) {
            for (var i = 0; i < this.data.AddressBook.length; i++) {
                if (this.data.AddressBook[i].mobileNo == mobileNo) {
                    var index = this.data.AddressBook.indexOf(this.data.AddressBook.mobileNo);
                    //delete the element
                    this.data.AddressBook.splice(index, 1);
                    fs.writeFileSync('./addressBook.json', JSON.stringify(this.data));
                    console.log('Details have been removed successfully');
                    break;
                }
            }
        }
        else {
            console.log("Your details are not present in the address book. Sorry..");
        }
    };
    /**
     * @description Displaying persons detials
     * @overview This function only displays the persons details present in file
     * @summary This function only displays the persons details which are present in the file
     */
    AddressBook.prototype.displayAddressBook = function () {
        for (var i = 0; i < this.data.AddressBook.length; i++) {
            console.log("Address Book Details");
            console.log("First Name = ", this.data.AddressBook[i].firstName);
            console.log("Last Name =", this.data.AddressBook[i].lastName);
            console.log("Address =", this.data.AddressBook[i].address);
            console.log("City =", this.data.AddressBook[i].city);
            console.log("State =", this.data.AddressBook[i].state);
            console.log("ZipCode =", this.data.AddressBook[i].zipCode);
            console.log("Mobile Number =", this.data.AddressBook[i].mobileNo);
            console.log();
        }
    };
    /**
     * @description Displaying particular person's details
     * @overview This function only display's the person's details present in object
     * @summary This function display's the particular person's details using the mobile number
     */
    AddressBook.prototype.displayParticularPersonDetails = function () {
        var contactRegex = /^[0-9]{10}$/;
        var mobileNo = readline.question("Enter Mobile Number =");
        if (contactRegex.test(mobileNo) == false) {
            do {
                console.log('Mobile No must be a number string and must be 10 numbers long');
                mobileNo = readline.question("Enter Mobile Number =");
            } while (contactRegex.test(mobileNo) == false);
        }
        if (this.isPresent(mobileNo)) {
            for (var i = 0; i < this.data.AddressBook.length; i++) {
                if (this.data.AddressBook[i].mobileNo == mobileNo) {
                    console.log("First Name = ", this.data.AddressBook[i].firstName);
                    console.log("Last Name =", this.data.AddressBook[i].lastName);
                    console.log("Address =", this.data.AddressBook[i].address);
                    console.log("City =", this.data.AddressBook[i].city);
                    console.log("State =", this.data.AddressBook[i].state);
                    console.log("ZipCode =", this.data.AddressBook[i].zipCode);
                    console.log("Mobile Number =", this.data.AddressBook[i].mobileNo);
                    console.log();
                }
            }
        }
        else {
            console.log("Your details are not present in the address book. Sorry..");
        }
    };
    /**
     * @description Making calls to functions according to user input
     * @overview This function takes user input and call the functions accordingly
     * @summary Takes user input and calls the functions according to the choices
     *          user makes.
     */
    AddressBook.prototype.addressBook = function () {
        do {
            console.log("1.Add New Person's Details");
            console.log("2.Display your information");
            console.log("3.Update your information");
            console.log("4.Delete your information from address book");
            console.log("5.Display Address Book");
            console.log("6.Exit");
            var choice = readline.questionInt("Enter your choice=");
            if (choice == undefined) {
                do {
                    choice = readline.questionInt("Enter your choice =");
                } while (choice == undefined);
            }
            switch (choice) {
                case 1:
                    this.add();
                    break;
                case 2:
                    this.displayParticularPersonDetails();
                    break;
                case 3:
                    this.updatePersonDetails();
                    break;
                case 4:
                    this.removePersonsDetails();
                    break;
                case 5:
                    this.displayAddressBook();
                    break;
                case 6:
                    return;
                default:
                    console.log("Wrong Choice");
            }
        } while (choice);
    };
    return AddressBook;
}());
var addressBook = new AddressBook();
addressBook.addressBook();

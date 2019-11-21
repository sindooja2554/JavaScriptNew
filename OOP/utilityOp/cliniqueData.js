var util = require('../../utility/utility');
var fs = require('fs');
class Clinique
{
    constructor()
    {
        var content = util.readFile('/home/admin1/JavaScriptNew-master/OOP/json/clinique.json');
        this.data = JSON.parse(content);
        console.log(this.data);
    }
}

class CliniqueManagement extends Clinique
{
    addDoctor()
    {
        var content = /^[a-zA-Z]+$/;
        console.log('Enter doctor name=');
        var doctorName=util.inputStringRead();
        if(!content.test(doctorName))   
        {
            //if invalid input again take input
            console.log("Enter doctor name=");
            var doctorName = util.inputStringRead();
        }
        console.log('Enter ID number=');
        var ID = util.inputIntegerRead();
        console.log('Enter Specialization=');
        var specialization = util.inputStringRead();
        if(!content.test(specialization))   
        {
            //if invalid input again take input
            console.log("Enter specialization=");
            var specialization = util.inputStringRead();
        }
        console.log('Enter Available time(AM ,PM or both)=');
        var availablity = util.inputStringRead();
        console.log(availablity.toUpperCase());
        
        if(!content.test(availablity)||(availablity.toUpperCase()!=='AM'&& availablity.toUpperCase()!=='PM' &&
        availablity.toUpperCase()!=='BOTH'))   
        {
            //if invalid input again take input
            console.log("Enter Available time(AM,  PM or both)=");
            var availablity = util.inputStringRead();
        }

        this.data.Doctor.push=({
            "doctorName":doctorName,
            "ID":ID,
            "specialization":specialization,
            "availablity":availablity
        })
        fs.writeFileSync('/home/admin1/JavaScriptNew-master/OOP/json/clinique.json',JSON.stringify(this.data));
    }


}

module.exports={
    CliniqueManagement
}
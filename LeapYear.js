const yr = require('./utility/utility');
var readline = require('readline-sync');
function leapYear()
{
var year ;
// year= readline.question("Enter year to check=");
console.log("Enter year to check=");
year = yr.inputRead()
//var value= false;
var value=yr.LeapYear(year);

if(value===true)
    console.log(+year, "is a leap year");
else if(value=== false)
    console.log(+year ,"is not a leap Year");
}

leapYear();
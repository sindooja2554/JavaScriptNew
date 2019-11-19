
const str = require('./utility/utility');
const readline = require('readline-sync');

var acquire = function ()
{
    var username = readline.question("Enter username=");
    var value = str.SReplace(username);
    console.log(value);
}
acquire();






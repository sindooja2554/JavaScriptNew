var utility = require('./utility/DequePalindrome');
var util = new utility.Deque();
var readline = require('readline-sync');
function palindrome()
{
    var string = readline.question("Enter String to check=");
    var n=string.length;
    var arrayDeque=[];
    for(var i=0;i<string.length;i++)
    {
        if(i==0)
            util.addFront(arrayDeque,string[i],n);
        else
            util.addRear(arrayDeque,string[i],n);
    }
    
    util.display(arrayDeque,n);
    var result = util.palindromeChecker(arrayDeque,n);
    if(result===true)
    {
        console.log("String "+string ,"is Palindrome");
    }
    else
    {
        console.log("String "+string ,"is not Palindrome");
    }
}

palindrome();
const sa = require('./utility/utility');
var readline = require('readline-sync');
var str1 = readline.question("Enter string1=");
var str2 = readline.question("Enter string2=");
var anagram = sa.Anagram(str1,str2);
if(anagram)
{
    console.log("Strings are Anagram");
}
else
{
    console.log("Strings are not Anagram");
}
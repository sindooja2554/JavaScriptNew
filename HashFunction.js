var util = require('./utility/HashTable');
var fs = require('fs');
function hash()
{
    var hashArray=new Array(10);
    //hashArray=['[0]','[1]','[2]','[3]','[4]','[5]','[6]','[7]','[8]','[9]','[10]'];
    var string=" ";
    string = fs.readFileSync('HashFile.txt').toString();
    //console.log(string);
    var result = string.split(" ");
    console.log(result);
    util.hashFunction(hashArray,result);
    console.log("in");
}
hash();

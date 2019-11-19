var fs = require('fs');

fs.writeFileSync('text.txt','Synchronous Write is great');
console.log("Write done");
function morework()
{
    console.log("This is called after read is completed");
}
var content = fs.readFileSync('text.txt');
console.log("Reading Done....."+content);
morework();



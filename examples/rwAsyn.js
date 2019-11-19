var fs = require('fs');

fs.writeFile('input.txt','Asynchronous write and read example',function(err)
{
   if(err)
       throw err;
});

console.log("Data write successful");
console.log("File reading starts...");
fs.readFile('input.txt',function(err,data)
{
    if(err)
        return console.error(err);
    console.log("Asynchronous read:"+data.toString());
})
console.log("Executed before read is complete");
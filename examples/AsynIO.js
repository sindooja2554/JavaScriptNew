var fs = require('fs');
 
fs.readFile('sample.txt',
    function(err, data) {           //in this function is callback function.
        if (err) throw err;

        console.log("Reading file completed : " + new Date().toISOString());
});
 
console.log("After readFile : " + new Date().toISOString()); 
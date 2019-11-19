var async = require('async');
async.series([
    function(callback) {
      //console.log('one');
      callback(null,1);
    },
    function(callback) {
      //console.log('two');
      callback(null,2);
    },
  ],
  function(err, result) {
    console.log(result);
    // results is now equal to [1, 2]
  });
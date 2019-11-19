var assert = require('chai').assert;
//const utility = require('../utility/utility');
const utility = require('../utility/utility');
describe('LeapYear',function(){

    var str = 'abc';
    var p = 123;

    it('Year cannot be undefined',function(){
        let x = utility.LeapYear(undefined);
        console.log("x at 11: ", x);
        assert.equal(x,"The Year should be a number");
    });

    // it('Year cannot be null',function(){
    //     let b = utility.LeapYear(null);
    //     assert.equal(b);
    // });
    
    // it('Year cannot be string',function()
    // {
    //     let z =utility.LeapYear(str);
    //     assert.equal(z);
    // });

    // it('Year cannot be 2 or 3 digit number',function()
    // {
    //     let res = utility.LeapYear(p);
    //     assert.equal(res);
    // });

    // it('should return boolean',function(){
    //     let y = utility.LeapYear(2016);
    //     assert.equal(y);
    // });
});
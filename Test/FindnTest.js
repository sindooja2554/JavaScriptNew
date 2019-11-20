var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('FindNumber',function(){

    it('Values should not be undefined',function(){
        let a = utility.FindNumber(undefined);
        assert.equal(a,undefined);
    });

    it('Values should not be null',function(){
        let b = utility.FindNumber(null);
        assert.equal(b);
    });

    it('values should be present',function(){
        let c = utility.FindNumber(5);
        assert.equal(c);
    });
});
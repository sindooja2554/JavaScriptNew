var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('BinarySearch',function(){

    it('Values should not be undefined',function(){
        let a = utility.BinarySearch(undefined);
        assert.equal(a,undefined);
    });

    it('Values should not be null',function(){
        let b = utility.BinarySearch(null);
        assert.equal(b);
    });

    it('values should be present',function(){
        let c = utility.BinarySearch(5);
        assert.equal(c);
    });
});
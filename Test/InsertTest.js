var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('InsertionSort',function(){

    it('Values should not be undefined',function(){
        let a = utility.InsertionSort(undefined);
        assert.equal(a,undefined);
    });

    it('Values should not be null',function(){
        let b = utility.InsertionSort(null);
        assert.equal(b);
    });

    it('values should be present',function(){
        let c = utility.InsertionSort(5);
        assert.equal(c);
    });
});
var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('SumOfElementsIsZero',function(){

    it('Values should not be undefined',function(){
        let a = utility.SumOfElementsIsZero(undefined);
        assert.equal(a,undefined);
    });

    it('Values should not be null',function(){
        let b = utility.SumOfElementsIsZero(null);
        assert.equal(b);
    });

    it('values should be present',function(){
        let c = utility.SumOfElementsIsZero(5);
        assert.equal(c);
    });
});
var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('TwoDArray',function(){

    it('Values should not be undefined',function(){
        let a = utility.TwoDArray(undefined);
        assert.equal(a,undefined);
    });

    it('Values should not be null',function(){
        let b = utility.TwoDArray(null);
        assert.equal(b);
    });

    it('values should be present',function(){
        let c = utility.TwoDArray(5);
        assert.equal(c);
    });
});
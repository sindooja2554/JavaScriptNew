var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('HarmonicNumber',function(){

    it('It should not be undefined',function(){
        let a = utility.HarmonicNumber(undefined);
        assert.equal(a,undefined);
    });

    it('values cannot be null',function(){
        let z = utility.HarmonicNumber(null);
        assert.equal(z,"");
    });

    it('It should not be string',function(){
        let b = utility.HarmonicNumber('saasd');
        assert.equal(b);
    });

    it('It should be greater than 0',function(){
        let c = utility.HarmonicNumber(-4);
        assert.equal(c);
    });

    it('It should not be a float number',function(){
        let d = utility.HarmonicNumber(5.3);
        assert.equal(d);
    });

    it('It should be number',function(){
        let e = utility.HarmonicNumber(5);
        assert.equal(e,2);
    });

});
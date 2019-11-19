var assert = require('chai').assert;
var pot = require('../utility/utility');

describe('PowerOf2',function(){

    it('It should not be undefined',function(){
        let a = pot.PowerOfTwo(undefined);
        assert.equal(a,undefined);
    });

    it('values cannot be null',function(){
        let z = pot.PowerOfTwo(null);
        assert.equal(z);
    });

    it('It should not be a string',function(){
        let b = pot.PowerOfTwo('abc');
        assert.equal(b);
    });

    it('It should be less than 31',function(){
        let c = pot.PowerOfTwo(32);
        assert.equal(c);
    });

    it('It should be greater than 0',function(){
        let d = pot.PowerOfTwo(-3);
        assert.equal(d);
    });

    it('It should be number and greater than 0 and less than 31',function(){
        let e = pot.PowerOfTwo(5);
        assert.equal(e,32);
    })

    it('It should not be a float number',function(){
        let f = pot.PowerOfTwo(5.3);
        assert.equal(f);
    });

});
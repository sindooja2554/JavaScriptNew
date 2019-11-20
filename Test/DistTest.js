var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('Distance', function(){

    it('Values should not be undefined',function(){
        let a = utility.Distance(undefined);
        assert.equal(a,undefined);
    });

    it('values cannot be null',function(){
        let z = utility.Distance(null);
        assert.equal(z);
    });

    it('It should not be string', function(){
        let b = utility.Distance('dfnik','csdf');
        assert.equal(b);
    });

    it('It should not be float number',function(){
        let c = utility.Distance(5.4,7.8);
        assert.equal(c);
    });

    it('It should only be number',function(){
        let d = utility.Distance(3,4);
        assert.equal(d);
    });
});
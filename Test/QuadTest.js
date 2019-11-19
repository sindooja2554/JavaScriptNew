var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('Quadratic',function(){

    it('It should not be undefined',function(){
        let a = utility.Quadratic(undefined,undefined,undefined,undefined);
        assert.equal(a);
    });

    it('values cannot be null',function(){
        let z = utility.Quadratic(null);
        assert.equal(z);
    });

    it('It should not be string',function(){
        let b = utility.Quadratic('abs','dff','greg','fgr');
        assert.equal(b);
    });

    it('It should not be float',function(){
        let c = utility.Quadratic(5.4,6.5,7.8,9.8);
        assert.equal(c);
    });

    it('It should not be mixed character and number',function(){
        let d = utility.Quadratic('5h','6j','7j','7j');
        assert.equal(d);
    });

    it('It should only be number',function(){
        let e = utility.Quadratic(3,9,18,17);
        assert.equal(e);
    })

})
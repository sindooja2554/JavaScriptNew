var assert = require('chai').assert;
const utility = require('../utility/utility');

describe('FlipCoin',function(){
 
    var a = 'abc';
    it('N should be greater than 0',function(){
        let x = utility.FlipCoin(0)
        assert.equal(x);
    });

    it('N cannot be string',function(){
        let y = utility.FlipCoin(a)
        assert.equal(y);
    });

    it('N cannot be undefined',function(){
        let z = utility.FlipCoin(undefined)
        assert.equal(z,undefined);
    });
    
    it('values cannot be null',function(){
        let b = utility.FlipCoin(null);
        assert.equal(b);
    });

    it('It should not be a float number',function(){
        let d = utility.FlipCoin(5.3);
        assert.equal(d);
    });

});
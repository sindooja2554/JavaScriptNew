var assert = require('chai').assert;
const utility = require('../utility/utility');
describe('StringReplace',function(){
    var b = '123';
    var d = 'sid';
    var e = 'Racheal';

    it('String cannot be undefined',function(){
        let x = utility.SReplace(undefined);
        assert.equal(x,undefined);
    });

    it('values cannot be null',function(){
        let b = utility.SReplace(null);
        assert.equal(b);
    });

    it('String length cannot be less than 3',function(){
        let y = utility.SReplace(d);
        assert.equal(y);
    });

    it('String cannot be a number',function()
    {
        let z = utility.SReplace(b);
        assert.equal(z);
    });

    it('String should be String',function(){
        let a = utility.SReplace(e);
        assert.equal(a,'Hello Racheal, How are you?');
    });
})

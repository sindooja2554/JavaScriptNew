var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('Anagram',function(){

    it('Values should not be undefined',function(){
        let a = utility.Anagram(undefined);
        assert.equal(a,undefined);
    });

    it('Values should not be null',function(){
        let b = utility.Anagram(null);
        assert.equal(b);
    });

    it('values should be present',function(){
        let c = utility.Anagram(5);
        assert.equal(c);
    });
});
var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('BubbleSort',function(){

    it('Values should not be undefined',function(){
        let a = utility.BubbleSort(undefined);
        assert.equal(a,undefined);
    });

    it('Values should not be null',function(){
        let b = utility.BubbleSort(null);
        assert.equal(b);
    });

    it('values should be present',function(){
        let c = utility.BubbleSort(5);
        assert.equal(c);
    });
});
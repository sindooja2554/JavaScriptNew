var assert = require('chai').assert;
var utility = require('../utility/PrimeNo2D');
var util = new utility.Prime2D();

describe('Prime2D',function(){

    it('Cannot be undefined',function()
    {
        let result = util.isAnagram(undefined,undefined);
        assert.equal(result,'String cannot be undefined or null');
    })

    it('Cannot be null',function()
    {
        let result = util.isAnagram(null,null);
        assert.equal(result,'String cannot be undefined or null');
    })

    it('Cannot be undefined',function()
    {
        let result = util.sort(undefined);
        assert.equal(result,'String cannot be undefined or null');
    })

    it('Cannot be null',function()
    {
        let result = util.sort(null);
        assert.equal(result,'String cannot be undefined or null');
    })

})


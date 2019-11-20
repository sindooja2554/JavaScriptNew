var assert = require('chai').assert;
var utility = require('../utility/PrimeNo2D');
var util = new utility.Prime2D();

describe('prime2D',function(){

    let string = 'abc';
    let array =[];
    
    it('cannot be undefined',function()
    {
        let result = util.primeNumber(undefined);
        assert.equal(result,'Cannot be undefined or null');
    })

    it('cannot be null',function()
    {
        let result = util.primeNumber(null);
        assert.equal(result,'Cannot be undefined or null');
    })

    it('cannot be string',function()
    {
        let result = util.primeNumber(string);
        assert.equal(result,'Please enter valid input');
    })

})
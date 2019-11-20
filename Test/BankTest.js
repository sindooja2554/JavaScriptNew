var assert = require('chai').assert;
const utility = require('../utility/QueueBank');
var util = new utility.Queue();

describe('Queue Banking',function(){

    let string = 'abc';

    it('Data cannot be undefined',function(){
        let result = util.enqueue(undefined);
        assert.equal(result,'Data cannot be undefined or null or string ');
    });

    it('Data cannot be null',function(){
        let result = util.enqueue(null);
        assert.equal(result,'Data cannot be undefined or null or string ');
    });

    it('Data cannot be string',function()
    {
        let result = util.enqueue(string);
        assert.equal(result,'Data cannot be undefined or null or string ');
    });

    it('Balance cannot be undefined',function()
    {
        let result = util.bankCashCounter(undefined);
        assert.equal(result,'Data cannot be undefined or null or string ');
    });

    it('Balance cannot be null',function()
    {
        let result = util.bankCashCounter(null);
        assert.equal(result,'Data cannot be undefined or null or string ');
    });

    it('Balance cannot be string',function()
    {
        let result = util.bankCashCounter(string);
        assert.equal(result,'Data cannot be undefined or null or string ');
    });

})
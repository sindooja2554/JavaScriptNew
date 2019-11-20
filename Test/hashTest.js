var assert = require('chai').assert;
var util= require('../utility/HashTable');


describe('HashTable',function()
{
    let array = [];
    it('Cannot be undefined',function()
    {
        let result = util.hashFunction(array,undefined);
        assert.equal(result,'File cannot be empty');
    })

    it('Cannot be null',function()
    {
        let result = util.hashFunction(array,null);
        assert.equal(result,'File cannot be empty');
    })

    it('Should be a number',function()
    {
        let result = util.hashFunction(array,'abc');
        assert.equal(result,'Should be a number');
    })
})
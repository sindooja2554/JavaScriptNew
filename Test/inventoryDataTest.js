var assert = require('chai').assert;
var util = require('../utility/inventoryData');

describe('Inventory Data Managemnet',function(){
    it('Cannot be undefined',function(){
        let result = util.inventoryValue(undefined);
        assert.equal(result,'Please Pass Valid Input')
    })

    it('Cannot be null',function(){
        let result = util.inventoryValue(null);
        assert.equal(result,'Please Pass Valid Input')
    })

    it('cannot be string',function(){
        let result = util.inventoryValue('abc');
        assert.equal(result,'Please Pass Valid Input')
    })

    it('cannot be number',function(){
        let result = util.inventoryValue(35);
        assert.equal(result,'Please Pass Valid Input')
    })
})
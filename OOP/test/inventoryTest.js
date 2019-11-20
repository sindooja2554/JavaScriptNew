var assert = require('chai').assert;
var inventoryD = require('../utilityOp/inventoryData');
//var inventoryD = new utility.inventoryValue();


describe('InventoryData',function(){

    it('Cannot be undefined',function(){
        let result = inventoryD.inventoryValue(undefined);
        assert.equal(result,'Please Pass Valid Input')
    })  
    
    it('Cannot be null',function(){
        let result = inventoryD.inventoryValue(null);
        assert.equal(result,'Please Pass Valid Input')
    })  
    
    it('Cannot be empty',function(){
        let result = inventoryD.inventoryValue(' ');
        assert.equal(result,'Cannot be empty')
    })  

})
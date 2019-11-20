var assert = require('chai').assert;
var utility = require('../utilityOp/stockManagement');
var util = new utility.stockManagement();

describe('Stock Report',function(){
    
    it('Cannot be undefined',function(){
        let result = util.info(undefined);
        assert.equal(result,'Cannot be undefined or null')
    })

    it('Cannot be null',function(){
        let result = util.info(null);
        assert.equal(result,'Cannot be undefined or null')
    })

    it('Cannot be empty',function(){
        let result = util.info(' ');
        assert.equal(result,'Cannot be empty')
    })

    it('Cannot be string input',function(){
        let result = util.info('choice');
        assert.equal(result,'Input should be a number');
    })

    it('Cannot be undefined',function(){
        let result = util.purchase(undefined);
        assert.equal(result,'Cannot be undefined or null')
    })

    it('Cannot be null',function(){
        let result = util.purchase(null);
        assert.equal(result,'Cannot be undefined or null')
    })

    it('Cannot be empty',function(){
        let result = util.purchase(' ');
        assert.equal(result,'Cannot be empty')
    })

    it('Cannot be string input',function(){
        let result = util.purchase('choice');
        assert.equal(result,'Input should be a number');
    })
})
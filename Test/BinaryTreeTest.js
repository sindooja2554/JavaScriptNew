var assert = require('chai').assert;
var util = require('../utility/BinaryTree');

describe('Binary Tree',function(){

    it('Cannot be undefined',function(){
        let result = util.binaryTree(undefined);
        assert.equal(result,'Node cannot be undefined or null');
    })

    it('Cannot be null',function(){
        let result = util.binaryTree(null);
        assert.equal(result,'Node cannot be undefined or null');
    })

    it('Cannot be string',function(){
        let result = util.binaryTree('abc');
        assert.equal(result,'Node cannot be string');
    })

    it('Cannot be undefined',function(){
        let result = util.factorial(undefined);
        assert.equal(result,'Node cannot be undefined or null');
    })

    it('Cannot be null',function(){
        let result = util.factorial(null);
        assert.equal(result,'Node cannot be undefined or null');
    })

    it('Cannot be string',function(){
        let result = util.factorial('abc');
        assert.equal(result,'Node cannot be string');
    })
})
var assert = require('chai').assert;
var utility= require('../utilityOp/DeckOfCards');
var util= new utility.shuffle();

describe('DeckQueueTest',function(){

    let array = [10,15,13,9,5];
    it('cannot be undefined',function()
    {
        let result = util.shuffleCards(undefined);
        assert.equal(result,'Cannot be undefined or null');
    })

    it('cannot be null',function()
    {
        let result = util.shuffleCards(null);
        assert.equal(result,'Cannot be undefined or null');
    })

    it('cannot be empty',function()
    {
        let result = util.shuffleCards(' ');
        assert.equal(result,'Cannot be empty');
    })

    it('Cannot be undefined',function()
    {
        let result = util.distributingCards(undefined,undefined,undefined)
        assert.equal(result,'Cannot be undefined or null')
    })

    it('Cannot be null',function()
    {
        let result = util.distributingCards(null,null,null)
        assert.equal(result,'Cannot be undefined or null')
    })

    it('Cannot be empty',function()
    {
        let result = util.distributingCards(' ',"",' ')
        assert.equal(result,'Cannot be empty')
    })

    it('Input should be number',function()
    {
        let result = util.distributingCards(array,'abc','pqr')
        assert.equal(result,'Input should be number')
    })
})
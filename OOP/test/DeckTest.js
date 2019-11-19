var assert = require('chai').assert;
var utility= require('../utilityOp/DeckOfCards');
var util= new utility.shuffle();

describe('DeckQueueTest',function(){
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

    it('cannot be string',function()
    {
        let result = util.cardsQueue('array');
        assert.equal(result,'Should be a number');
    })

    /*it('cannot be string',function()
    {
        let result = util.cardsQueue(4);
        assert.equal(result,'4');
    })*/

    it('cannot be string',function()
    {
        let result = util.cardsQueue(' ');
        assert.equal(result,'Cannot be empty');
    })
})
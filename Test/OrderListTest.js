var assert = require('chai').assert;
var utility = require('../utility/OrdList');
var util = new utility.OrderLinkedList();

describe('OrderedList',function()
{
    it('Cannot be undefined',function()
    {
        let result = util.add(undefined);
        assert.equal(result,'Element cannot be undefined or null');
    })

    it('Cannot be null',function()
    {
        let result = util.add(null);
        assert.equal(result,'Element cannot be undefined or null');
    })

    it('Cannot be undefined',function()
    {
        let result = util.append(undefined);
        assert.equal(result,'Element cannot be undefined or null');
    })

    it('Cannot be null',function()
    {
        let result = util.append(null);
        assert.equal(result,'Element cannot be undefined or null');
    })

    it('Cannot be null',function()
    {
        let result = util.removeAt(null);
        assert.equal(result,'Cannot be undefined or null');
    })

    it('Cannot be undefined',function()
    {
        let result = util.removeAt(undefined);
        assert.equal(result,'Cannot be undefined or null');
    })

    it('Should be a number',function()
    {
        let result = util.removeAt('abc');
        assert.equal(result,'Should be a number');
    })

    it('Cannot be null',function()
    {
        let result = util.remove(null);
        assert.equal(result,'Cannot be undefined or null');
    })

    it('Cannot be undefined',function()
    {
        let result = util.remove(undefined);
        assert.equal(result,'Cannot be undefined or null');
    })
})
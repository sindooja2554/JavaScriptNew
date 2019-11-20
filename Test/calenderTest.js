var assert = require('chai').assert;
var util = require('../utility/calend');
var u = new util.calend();

describe('calender',function()
{
    let string='abc';
    let value = 10000;
    let year = Number(value);

    it('Cannot be undefined',function(){
        let result = u.isLeapYear(undefined);
        assert.equal(result,'Cannot be undefined or null');
    });

    it('Cannot be null',function(){
        let result = u.isLeapYear(null);
        assert.equal(result,'Cannot be undefined or null');
    })

    it('Cannot be string',function(){
        let result = u.isLeapYear(string);
        assert.equal(result,'Year should be a number');
    })

    it('Cannot be undefined',function()
    {
        let result = u.dayOfWeek(undefined,undefined,undefined);
        assert.equal(result,'Fields cannot be undefined or null');
    })

    it('Cannot be null',function()
    {
        let result = u.dayOfWeek(null,null,null);
        assert.equal(result,'Fields cannot be undefined or null');
    })

    it('Cannot be string',function(){
        let result = u.dayOfWeek(1,1,string);
        assert.equal(result,'Should be number');
    })

    it('Month should be in range',function(){
        let result = u.dayOfWeek(50,1,2020);
        assert.equal(result,'Month should be in range');
    })

    it('Year should be in range',function(){
        let result = u.dayOfWeek(1,1,20200);
        assert.equal(result,'Year should be in range');
    })

    it('Day should be in range',function(){
        let result = u.dayOfWeek(1,41,2020);
        assert.equal(result,'Day should be in range');
    })

    it('Cannot be undefined',function(){
        let result = u.displayCalender(undefined,undefined);
        assert.equal(result,'Cannot be undefined or null');
    });

    it('Cannot be null',function(){
        let result = u.displayCalender(null,null);
        assert.equal(result,'Cannot be undefined or null');
    });

    it('Cannot be string',function(){
        let result = u.displayCalender(1,string);
        assert.equal(result,'Should be number');
    })

    
    
})
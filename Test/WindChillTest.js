var assert = require('chai').assert;
var utility = require('../utility/utility');

describe('WindChill',function(){

    it('It should not be undefined',function(){
        let a = utility.WindChill(undefined,undefined);
        assert.equal(a,undefined);
    });

    it('values cannot be null',function(){
        let z = utility.WindChill(null);
        assert.equal(z);
    });

    it('It should not be string',function(){
        let b = utility.WindChill('abc','cab');
        assert.equal(b);
    });

    it('Temp should not be less than 50',function(){
        let c = utility.WindChill(55,34);
        assert.equal(c);
    });

    it('velocity should be greater than 3', function(){
        let e = utility.WindChill(34,1);
        assert.equal(e);
    });

    it('Velocity should be less than 120',function(){
        let f = utility.WindChill(34,122);
        assert.equal(f);
    });

    it('Temp should be less than or equal 50 and velocity should be in between 3-119',function(){
        let g = utility.WindChill(34,67);
        assert.equal(g);
    })

})
var assert = require('chai').assert;
var utility = require('../utilityOp/commercialM6');
var company = new utility.Company();

describe('CompanySharesInLinkedList',function(){

    it('Cannot be undefined',function()
    {
        let result = company.addCompany(undefined,undefined,undefined,undefined);
        assert.equal(result,'Cannot be undefined or null')
    })

    it('Cannot be null',function()
    {
        let result = company.addCompany(null,null,null,null);
        assert.equal(result,'Cannot be undefined or null')
    })

    it('Cannot be empty',function()
    {
        let result = company.addCompany(' ',' ',' ',' ');
        assert.equal(result,'Cannot be empty')
    })

    it('Should be a number',function()
    {
        let result = company.addCompany('google','abc','G','pqr');
        assert.equal(result,'Should be a number')
    })

    it('Cannot be undefined',function()
    {
        let result = company.removeCompany(undefined);
        assert.equal(result,'Cannot be undefined or null')
    })

    it('Cannot be null',function()
    {
        let result = company.removeCompany(null);
        assert.equal(result,'Cannot be undefined or null')
    })

    it('Cannot be empty',function()
    {
        let result = company.removeCompany(' ');
        assert.equal(result,'Cannot be empty')
    })

    it('Should be a character string',function()
    {
        let result = company.removeCompany(21312);
        assert.equal(result,'Should be a character string')
    })
})
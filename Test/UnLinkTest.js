var assert = require('chai').assert;
const utility = require('../utility/LinkedList');
var util = new utility.LinkedList();
describe('Unordered Linked List',function(){

    var string = 'name';

    it('Data cannot be undefined',function(){
        let result = util.add(undefined);
        //console.log("x at 11: ", x);
        assert.equal(result,"Element cannot be undefined");
    });

    it('Data cannot be null',function(){
       let result1 = util.add(null);
       assert.equal(result1,"Element cannot be undefined");
    });
    
    /*it('Data cannot be null',function(){
        let result2 = util.add(55);
        assert.equal(result2,"55");
     });*/

    it('Index cannot be undefined',function()
    {
        let result3 =util.insert(51,undefined);
        assert.equal(result3,'These fields cant be empty');
    });

    it('Index cannot be null',function()
    {
        let result4 = util.insert(55,null);
        assert.equal(result4,'These fields cant be empty');
    });

    it('Cannot be undefined or null',function()
    {
        let result5 = util.insert(undefined,null);
        assert.equal(result5,'These fields cant be empty');
    });

    it('Index cannot be null',function()
    {
        let result = util.insert(55,string);
        assert.equal(result,'Should be a number');
    });

    it('Data cannot be undefined',function(){
        let result = util.append(undefined);
        //console.log("x at 11: ", x);
        assert.equal(result,"Element cannot be undefined");
    });

    it('Data cannot be null',function(){
        let result = util.append(null);
        assert.equal(result,"Element cannot be undefined");
    });

    it('Index cannot be undefined',function()
    {
        let result =util.removeAt(undefined);
        assert.equal(result,'Cannot be undefined or null');
    });

    it('Index cannot be null',function()
    {
        let result =util.removeAt(null);
        assert.equal(result,'Cannot be undefined or null');
    });

    it('Index cannot be null',function()
    {
        let result = util.removeAt(string);
        assert.equal(result,'Should be a number');
    });

    it('Data cannot be undefined',function()
    {
        let result = util.remove(undefined);
        assert.equal(result,'Cannot be undefined or null');
    });

    it('Data cannot be null',function()
    {
        let result = util.remove(null);
        assert.equal(result,'Cannot be undefined or null');
    });

    it('Data cannot be undefined',function()
    {
        let result = util.isThere(undefined);
        assert.equal(result,'Cannot be undefined or null');
    });

    it('Data cannot be null',function()
    {
        let result = util.isThere(null);
        assert.equal(result,'Cannot be undefined or null');
    });
});
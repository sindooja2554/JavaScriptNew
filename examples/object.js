//var readline = require('readline-sync');
//import express from 'express';
const person = {
    isHuman:false,
    printInfo:function(){
        console.log(`My name is ${this.name}. Am I human ${this.isHuman}.`);
    }
};

const me = Object.create(person);

me.name='Mathew';
me.isHuman=true;

me.printInfo();
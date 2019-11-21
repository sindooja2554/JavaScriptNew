var readline = require('readline-sync');
class Person {
    constructor() {
      this.id = 'id_1';
    }
    set name(name) {
      this.Name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    get name() {
      return this.Name;
    }
    sayHello() {
      console.log('Hello, my name is ' + this.Name + ', I have ID: ' + this.id);
    }
  }
  
  var human = new Person();
  //human.name = 'martin'; // The setter will be used automatically here.
  human.name = readline.question('Enter name=');
  human.sayHello();
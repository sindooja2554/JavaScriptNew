function Women(firstName,lastName,age){
    this.firstName=firstName,
    this.lastName=lastName,
    this.age=age
}

var mother = new Women("Serena","Woodson",18);

console.log(`Her name is ${mother.firstName} and her age is ${mother.age}`);
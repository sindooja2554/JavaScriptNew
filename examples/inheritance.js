class Animal
{
    constructor(name)
    {
        this.name=name;
        this.speed = 0;
    }
    run(speed)
    {
        //console.log(this.name);
        console.log("I'm in animal class");
        this.speed +=speed;
        console.log(`${this.name} runs at speed of ${this.speed}`);
    }

    stop()
    {
        console.log(`${this.name} stop`);
    }
}
let animal = new Animal("Tizzer");
//animal.run(10);

class Dog extends Animal
{
    hide()
    {
        console.log("I'm in dog class");
    }
    stop()
    {
        super.stop();
        console.log("Child class stop");
    }

}

let dog = new Dog('Tommy');
dog.hide();
dog.run(5);
dog.stop();
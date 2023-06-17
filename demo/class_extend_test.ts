abstract class Person2 {
    public personName;

    constructor(name) {
        this.personName = name;
    }

    public abstract pSay();

}

class Student extends Person2 {
    public pSay() {
        console.log("Person say ")
    }

}


abstract class Animal2 {
    public name;

    public constructor(name) {
        this.name = name;
    }

    public abstract sayHi();
}

class Cat2 extends Animal2 {
    public eat() {
        console.log(`${this.name} is eating.`);
    }

    public sayHi() {
        console.log(`${this.name} Hi.`);
    }
}

let cat = new Cat2('Tom');
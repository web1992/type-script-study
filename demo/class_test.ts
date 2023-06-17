class Animal {
     name;

    constructor(name) {
        this.name = name;
    }

    public say() {
        console.log("Hello " + this.name);
    }

}

let tomSay = new Animal("Tom")
tomSay.say();

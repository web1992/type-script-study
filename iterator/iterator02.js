function Obj() {}

Obj.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < 5; i++) {
        yield i;
    }
}

let obj1 = new Obj();

for (let _obj of obj1) {
    console.log(_obj);
}

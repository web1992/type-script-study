function Obj(value) {
    this.value = value;
    this.next = null;
}

Obj.prototype[Symbol.iterator] = function() {
    var iterator = { next: next };

    var current = this;

    function next() {
        if (current) {
            var value = current.value;
            current = current.next;
            return { done: false, value: value };
        }
        return { done: true };
    }
    return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (var i of one){
    console.log(i); // 1, 2, 3
}
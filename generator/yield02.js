function* gen() {
    yield console.log('a')
    yield console.log('b')
    yield console.log('c')
    yield 'd'
}

let _gen = gen();
console.log(_gen.next());
console.log(_gen.next());
console.log(_gen.next());
console.log(_gen.next());
//
console.log(_gen.next());

function* gen() {
    yield console.log('a')
    yield console.log('b')
    yield console.log('c')
}

let _gen = gen();
_gen.next();
_gen.next();
_gen.next();
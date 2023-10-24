function* g() {
    yield 1;
    yield 2;
    yield 3;

}

let _g = g();

for (const e of _g) {
    console.log(e);
}
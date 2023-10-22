
// for of 测试
// 底层的核心概念 iterator

let set = new Set().add('a').add('b').add('c');

for (let _val of set) {
    console.log(_val)
}
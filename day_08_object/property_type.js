// 属性类型


var person = {};

// 要修改属性默认的特性，必须使用 ECMAScript 5 的 Object.defineProperty()方法。这个方法
// 接收三个参数：属性所在的对象、属性的名字和一个描述符对象
Object.defineProperty(person, "name", {
 writable: false,
 value: "Nicholas"
});
console.log(person.name); //"Nicholas"
person.name = "Greg";
console.log(person.name); //"Nicholas" 


// 把 configurable 设置为 false，表示不能从对象中删除属性。如果对这个属性调用 delete，则
// 在非严格模式下什么也不会发生，而在严格模式下会导致错误。而且，一旦把属性定义为不可配置的，
// 就不能再把它变回可配置了。此时，再调用 Object.defineProperty()方法修改除 writable 之外
// 的特性，都会导致错误

var person = {};
Object.defineProperty(person, 'name', {
    configurable: false,
    value: "lzk"
});

console.log(person.name); //"lzk"
delete person.name;
console.log(person.name); //"lzk"
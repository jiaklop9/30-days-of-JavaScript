// 原型模式



// 我们创建的每个函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象，
// 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。如果按照字面意思来理解，那
// 么 prototype 就是通过调用构造函数而创建的那个对象实例的原型对象。使用原型对象的好处是可以
// 让所有对象实例共享它所包含的属性和方法。换句话说，不必在构造函数中定义对象实例的信息，而是
// 可以将这些信息直接添加到原型对象中

function Person() {

}

Person.prototype.name = 'orgin';
Person.prototype.say = function () {
    console.log(`my name is ${this.name}`);
}

let person = new Person();
// 当为对象实例添加一个属性时，这个属性就会屏蔽原型对象中保存的同名属性；
// 换句话说，添加这个属性只会阻止我们访问原型中的那个属性，但不会修改那个属性。即使将这个属性设置为 null，也
// 只会在实例中设置这个属性，而不会恢复其指向原型的连接。不过，使用 delete 操作符则可以完全删
// 除实例属性，从而让我们能够重新访问原型中的属性
person.name = 'kk'
person.say();
delete person.name;
person.say();

let p2 = new Person();

console.log(person.say == p2.say);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
// 使用 hasOwnProperty()方法可以检测一个属性是存在于实例中，还是存在于原型中。这个方法（不
// 要忘了它是从 Object 继承来的）只在给定属性存在于对象实例中时，才会返回 true。
console.log(person.hasOwnProperty('name'))
person.age = 12;
console.log(person.hasOwnProperty('age'))

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

// in 操作符会在通
// 过对象能够访问给定属性时返回 true，无论该属性存在于实例中还是原型中
console.log('age' in person);
console.log('name' in person);


console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
// 更简单的原型语法
function Person() {
}
// 此时相当于重写了prototype， 因此constructors属性不再指向Person了，现在指向 Object 构造函数
Person.prototype = {
    //     如果 constructor 的值真的很重要，可以像下面这样特意将它设置回适当的值
    // constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function () {
        alert(this.name);
    }
}; 


// 实例中的指针仅指向原型，而不指向构造函数
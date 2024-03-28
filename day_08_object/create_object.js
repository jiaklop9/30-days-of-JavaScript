// 工厂模式创建

function createPerson(name, age, job) {
    var person = new Object();
    person.name = name;
    person.age = age;
    person.job = job;
    person.say = function(){
        return `my name is ${this.name}, i am ${this.age} years old, my job is ${this.job}`;
    }
    return person
}

let p1 = createPerson('lzk', 28, 'engineer');
let p2 = createPerson('z', 29, 'teacher');

console.log(p1.say());
console.log(p2.say());

// 使用构造函数创建对象。
// 按照惯例，构造函数始终都应该以一个
// 大写字母开头，而非构造函数则应该以一个小写字母开头
// 以这种方式定义的构造函数是定义在 Global 对象（在浏览器中是 window 对象）中的
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.say = function(){
        return `my name is ${this.name}, i am ${this.age} years old, my job is ${this.job}`;
    }
}


let p3 = new Person('lzk', 28, 'engineer');
let p4 = new Person('z', 29, 'teacher');

console.log(p3.say());
console.log(p4.say());

// 传统方式
var person = new Object();
person.name = 'lzk';
person.age = '28';
person.say = function(){
    return `${this.age} 一枝花`;
}

console.log(person.say());
console.log(person.age);
console.log(person.name);


// 对象字面量方式创建
var person = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function(){
    alert(this.name);
    }
   }; 

console.log(person)
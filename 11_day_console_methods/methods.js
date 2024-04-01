// 控制台 console 函数用法

console.log("正常打印");

let a = '1111';
console.log(`变量打印： ${a}`);

console.log("替换打印");
console.log('%d %s of JavaScript', 30, 'Days');


console.log("设置打印样式, node 环境下看不出效果");
console.log('%c30 Days Of JavaScript', 'color:green');

console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
);

console.log('打印报表');
const names = ['Asabeneh', 'Brook', 'David', 'John'];
console.table(names);

console.log("\n记时\n");
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop');


  console.log("\n分组\n");

  console.log("\n断言\n");
  
  console.log("\clear\n");
  console.clear();


  console.log("\n调用次数记录\n");

  const func = ()=>{
    console.count("调用次数")
  }

  func();
  func();
  func();
  func();
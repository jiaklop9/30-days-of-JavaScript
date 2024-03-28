function init(){
    console.log("init function");
}

init();

// with parameters
function print(age) {
    console.log(`my age is ${age}`);
    
}
print(32);


// Function with unlimited number of parameters

function sumAll(){
    console.log(arguments);
}

sumAll(1,2,3,4,5);

// function declaration
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

const sumAllNums1 = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args)
   }
   
sumAllNums1(1, 2, 3, 4);


// Anonymous Function
const anonymousFun = function(){
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
      );
      return 'I am an anonymous function and my value is stored in anonymousFun';
}

console.log(anonymousFun());

// Arrow Function or lambda
const square = n => n * n  // -> 4
console.log(square(2));

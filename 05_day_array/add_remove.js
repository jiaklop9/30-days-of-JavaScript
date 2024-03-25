// syntax
const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr)
// ['item1', 'item2','item3','new item']

console.log(arr.pop());
console.log(arr);


const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]

const numbers1 = [1, 2, 3, 4, 5]
numbers1.unshift(0) // -> add one item from the beginning
console.log(numbers1) // -> [0,1,2,3,4,5]
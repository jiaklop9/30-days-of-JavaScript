const fruits = ['banana', 'orange', 'mango', 'lemon'];

let fruit = 'ba'
index = fruits.indexOf(fruit)
if (index == -1) {
    console.log(`${fruit} not in arrary: ${fruits}`);
} else {
    console.log(`${fruit} in arrary: ${fruits}`);
}
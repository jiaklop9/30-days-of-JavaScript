if (true) {
    console.log('xxxxxxxxxxx');
}

let a = 0;
if (a > 0) {
    console.log(true);
} else {
    console.log(false);
}

if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
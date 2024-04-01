// 递归

function recursion(num) {
    if (num == 1) {
        return 1;
    } else {
        return num * recursion(num - 1);
    }
}

console.log(recursion(5));

// 这是一个经典的递归阶乘函数。虽然这个函数表面看来没什么问题，但下面的代码却可能导致它出错。
var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4)); //出错！


// 以上代码先把 factorial()函数保存在变量 anotherFactorial 中，然后将 factorial 变量设
// 置为 null，结果指向原始函数的引用只剩下一个。但在接下来调用 anotherFactorial()时，由于必
// 须执行 factorial()，而 factorial 已经不再是函数，所以就会导致错误。在这种情况下，使用 arguments.callee 可以解决这个问题。


// 我们知道，arguments.callee 是一个指向正在执行的函数的指针，因此可以用它来实现对函数
// 的递归调用，例如：

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
} 
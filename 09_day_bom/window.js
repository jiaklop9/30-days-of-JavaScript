// 获取窗口相对于屏幕左边和上边的位置
// 通用代码, node环境下无法执行，需要补环境

var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY; 
console.log(`windows窗口相对于屏幕左侧：${leftPos}`);
console.log(`windows窗口相对于屏幕顶端：${topPos}`);
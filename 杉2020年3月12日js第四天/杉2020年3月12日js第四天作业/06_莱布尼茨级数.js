// 第6题 【莱布尼茨级数】 圆周率π可以由下面的公式计算出来，请由用户输入参数n，计算圆周率π
// 循环遍历n
// 引入内置模块，并且存为readline变量。require表示引入。
var readline = require('readline');

// 创建一个读取接口，这段代码来自nodejs官网手册
// https://nodejs.org/api/readline.html
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 提出问题，rl.question函数就是提出问题。逗号之前是问题，逗号之后是回调函数
// 回调函数就是用户输入之后做的事情，参数a就是用户输入的数字。
rl.question('请输入一个数字', function(a) {
  var f2FenPai = 1; //计算总数
  var sum = 1; //计算每一项的数
  for (var i = 1; i <= a; i++) {
    sum *= i / (2 * i + 1);
    f2FenPai += sum;
  }
  console.log(2 * f2FenPai);
});

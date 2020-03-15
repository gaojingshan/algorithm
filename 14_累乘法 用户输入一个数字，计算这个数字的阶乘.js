const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入一个数字', function(a) {
  for (var i = 1, sum = 1; i <= a; i++) {
    sum *= i;
  }
  console.log(a + '的阶乘是' + sum);
});

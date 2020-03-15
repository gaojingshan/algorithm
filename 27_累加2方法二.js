// 第5题 【累加2】计算表达式 2 + 22 + 222 + 2222 + 22222 + 222222 + 2222222 + 22222222 + 222222222 的值。要求使用循环语句。
var count = 0;
var sum = 0;
for (var i = 0; i <= 8; i++) {
  count = count * 10 + 2;
  sum += count;  
}
console.log(sum);


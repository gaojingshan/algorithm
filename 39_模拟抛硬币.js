// 【模拟抛硬币】模拟抛硬币一百万次，显示出现正面和反面的次数，并显示出占比。
//掷出0、1的情况,模拟正面输出1，反面输出0
var n = 1000000; //投掷硬币的次数
var zhengChi = 0;
var fanChi = 0;
for (var i = 1; i <= n; i++) {
  var num = parseInt(Math.random() * 2);
  if (num) {
    zhengChi++;
  } else {
    fanChi++;
  }
}
// 计算正面和反面次数的占比
var zhengZhanBi = zhengChi / n;
var fanZhanBi = fanChi / n;
console.log(
  `正面${zhengChi}次,占比${zhengZhanBi};反面${fanChi}次,占比${fanZhanBi}`
);

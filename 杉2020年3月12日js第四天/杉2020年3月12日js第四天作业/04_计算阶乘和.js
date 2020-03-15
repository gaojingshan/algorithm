// 第4题 【计算阶乘和】请计算1! + 2! + 3! + 4! + 5! + …… +9!的结果，叹号表示阶乘。
// i表示遍历1-9数字，count表示当前这一次的阶乘，sum表示阶乘相加
for (var i = 1, sum = 0, count = 1; i <= 9; i++) {
  count *= i; //当前项的阶乘，count不用清除，直接乘
  sum += count; //把当前项直接加到sum中。
}
console.log(sum);

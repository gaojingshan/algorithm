//【统计数字中0的个数】请封装一个函数calcZero()，它接受1个参数：数字n。函数的功能是统计这个数字中0的个数。比如calcZero(1030)结果应该是2，因为它有2个零；再比如calcZero(0)结果应该是1，因为它有1个零；再比如calcZero(6)结果应该是0，因为它有0个零。

// 统计数字中0的个数
function calcZero(n) {
  // 把数字转成字符串拆成数组
  var arr = n.toString().split('');
  for (var i = 0, sum = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      sum++;
    }
  }
  return sum;
}
console.log(calcZero(1030));
console.log(calcZero(0));
console.log(calcZero(6));

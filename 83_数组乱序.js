// 洗牌算法：请将存放1~10共10个数字的数组随机打乱。
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = [];
while (result.length < 10) {
  // 数组下标
  var n = parseInt(Math.random() * 10);
  if (!result.includes(arr[n])) {
    result.push(arr[n]);
  }
}
console.log(result);

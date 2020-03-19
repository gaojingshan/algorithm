/* 【寻找最大子数组】 给定一个整数数组，找到一个具有最大和的子数组，返回其子数组最大和 和这个子数组。
比如数组[-2, 2, -3, 4, -1, 2, 1, -5]。符合要求的子数组为[4, −1, 2, 1]，其最大和为 6。 */
var arr = [-2, 2, -3, 4, -1, 2, 1, -5];
// 数组的子数组最大和
var max = arr[0];
// 保存最大和的子数组
var arr_max = [];
// 遍历arr数组
for (var i = 0; i < arr.length; i++) {
  // 保存每个子数组的和
  var sum = 0;
  for (var j = i; j < arr.length; j++) {
    sum += arr[j];
    if (sum > max) {
      max = sum;
      arr_max = arr.slice(i, j + 1);
    }
  }
}
console.log(`最大和：${max},最大和的子数组${arr_max}` );

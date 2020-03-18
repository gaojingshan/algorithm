/* 【寻找最大子数组】 给定一个整数数组，找到一个具有最大和的子数组，返回其子数组最大和 和这个子数组。
比如数组[-2, 2, -3, 4, -1, 2, 1, -5]。符合要求的子数组为[4, −1, 2, 1]，其最大和为 6。 */
var arr = [-2, 2, -3, 4, -1, 2, 1, -5];
var sumMax = -Infinity; //保存最后的最大值
var _result, __result;
// 遍历数组
for (var i = 0; i < arr.length; i++) {
  var count = arr[i]; //定义数组第i项
  var max = arr[i]; //保存当前这次遍历的相加最大数字
  var result = [arr[i]]; //保存最大和的数组
  // var _result=[arr[i]];
  //遍历i+1以后的数组项
  for (var j = i + 1; j < arr.length; j++) {
    count += arr[j]; //往count里面加入数组项
    result.push(arr[j]);
    if (count > max) {
      max = count; // 如果count大于max,就把count赋值给max,当前这一趟的最大值
      _result = result;
      // console.log(_result);

      // console.log(max);
    }
    if (j == arr.length - 1) {
      if (max > sumMax) {
        // console.log(_result);
        __result = _result;
        sumMax = max;
      }
    }
  }
}
console.log(sumMax, __result);

// 【数组连续3项相加为0】数组[1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5]中有没有任意连续3项相加为0？如果有，请输出这3项。
// 使用for循环嵌套
var arr = [1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5];
for (var i = 0; i < arr.length - 2; i++) {
  var sum = 0;
  for (var j = 0; j < 3; j++) {
    sum += arr[i + j];
  }
  if (sum == 0) {
    var str = '';
    for (var j = 0; j < 3; j++) {
      str += arr[i + j] + ' ';
    }
    console.log(str);
  }
}

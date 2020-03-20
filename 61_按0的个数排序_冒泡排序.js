//【按0的个数排序】，给你一个数组[1030, 56000, 20300040, 20, 8933, 28001020]。请将这个数组按各个数字含有零的数量进行排序，由少到多。

// 统计数字中0的个数
function calcZero(n) {
  // 把数字转成字符串遍历
  var str = n.toString();
  for (var i = 0, sum = 0; i < str.length; i++) {
    if (str[i] == 0) {
      sum++;
    }
  }
  return sum;
}
var arr = [1030, 56000, 20300040, 20, 8933, 28001020];
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length - i - 1; j++) {
    if (calcZero(arr[j]) > calcZero(arr[j + 1])) {
      var temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);

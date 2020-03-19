//【按0的个数排序】，给你一个数组[1030, 56000, 20300040, 20, 8933, 28001020]。请将这个数组按各个数字含有零的数量进行排序，由少到多。

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
var arr = [1030, 56000, 20300040, 20, 8933, 28001020];
arr.sort(function(a, b) {
  return calcZero(a) - calcZero(b);
});

console.log(arr);

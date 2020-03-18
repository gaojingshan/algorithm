// 【验证数组均为偶数】数组[6, 10, 12, 14, 88, 81, 100, 56]中是否每项都是偶数？
var arr = [6, 10, 12, 14, 88, 81, 100, 56];
var flag = true;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    flag = false;
    break;
  }
}
if (flag) {
  console.log('该数组每项都是偶数');
} else {
  console.log('该数组有不是偶数的项');
}

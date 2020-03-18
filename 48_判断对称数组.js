// 【判断对称数组】数组[1, 3, 4, 5, 3, 5, 4, 3, 1]是不是对称的？
var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1];
var flag = true;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] != arr[arr.length - 1 - i]) {
    flag = false;
    break;
  }
}
if (flag) {
  console.log('是对称的');
} else {
  console.log('不是对称的');
}

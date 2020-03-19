var arr = [44, 22, 33, 11, 99, 55];
arr.sort(function(a, b) {
  return b - a; //数字大的往前移，实现逆序
});
console.log(arr);

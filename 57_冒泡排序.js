var arr = [32, 68, 4, 8, 3, 9, 0, 43, 78, 8];
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length - i - 1; j++) {
    //从小到大排序
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);

// 请将数组[1,1,1,1,3,3,3,2,2,2,1,2,3]去掉重复项。
var arr = [1, 1, 1, 1, 3, 3, 3, 2, 2, 2, 1, 2, 3];
var result = [];
for (var i = 0; i < arr.length; i++) {
  if (!result.includes(arr[i])) {
    result.push(arr[i]);
  }
}
console.log(result);

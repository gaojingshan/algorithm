// 编写函数flatten(arr)，它的功能是可以扁平化数组。比如可以将数组[[1,[2,3],4,5],[6,7]]传入数组，则返回[1,2,3,4,5,6,7]
// 递归
var arr = [
  [1, [2, 3], 4, 5],
  [6, 7],
];
var result = [];
function flatten(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
}
flatten(arr);
console.log(result);

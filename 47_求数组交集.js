// 【求数组交集】求数组[1, 3, 8, 10, 12]和数组[4, 2, 10, 1, 3, 9, 17, 3]的交集。
var arr1 = [1, 3, 8, 10, 12];
var arr2 = [4, 2, 10, 1, 3, 9, 17];
var result = [];
for (var i = 0; i < arr1.length; i++) {
  // 判断arr1里面的当前项，在arr2里面有没有值。
  if (arr2.includes(arr1[i])) {
    //有相同值就追加到空数组中
    result.push(arr1[i]);
  }
}
console.log(result);

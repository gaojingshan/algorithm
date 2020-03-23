// 浅克隆
var arr1 = [1, 2, 3, 4, {m: 6}];

var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i]);
}

console.log(arr2);
// 大面上，是克隆了，结果是false
console.log(arr1 == arr2);//false
// 但是藕断丝连，如果有对象、数组，仍然是内存中的同一个元素
// true
console.log(arr1[0] == arr2[0]);//true 基本类型判值
console.log(arr1[4] == arr2[4]);//true

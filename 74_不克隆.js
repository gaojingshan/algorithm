// 不克隆
var arr1 = [1, 2, 3, 4, { 'm': 6 }];

var arr2 = arr1;

console.log(arr2);
console.log(arr1 == arr2);//true
console.log(arr1[0] == arr2[0]);//true 基本类型判值
console.log(arr1[4] == arr2[4]);//true



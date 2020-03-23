var arr1 = [1, 2, 3, 4, { 'm': 6, 'n': [1, 2, 3] }];

function deepClone(o) {
  if (Array.isArray(o)) {
    var result = [];
    for (var i = 0; i < o.length; i++) {
      result.push(deepClone(o[i]));
    }
  } else if (typeof o == 'object') {
    var result = {};
    for (var k in o) {
      result[k] = deepClone(o[k]);
    }
  } else {
    var result = o;
  }
  return result;
}
arr2 = deepClone(arr1);
console.log(arr2);
console.log(arr2 == arr1); //false
console.log(arr2[1] == arr1[1]); //true 基本类型判值
console.log(arr2[4] == arr1[4]); //false
console.log(arr2[4].n == arr1[4].n); //false

var obj1 = [1, 2, [1, 2, {a: 1}], 3, 4];
// var obj1 = [1, 2, 3, 4];
var obj2 = [];
for (var i=0; i < obj1.length; i++) {
  obj2.push(obj1[i]);
}
console.log(obj2 == obj1);


console.log(obj1[2] == obj2[2]);

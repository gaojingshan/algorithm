var arr = [123,1, 5, 3, 7, 99, 111, 32];
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

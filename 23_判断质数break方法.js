var n = 45887;
for (var i = 2; i < n; i++) {
  if (n % i == 0) {
    break;
  }
}
if (i == n) {
  console.log(`${n}是质数`);
} else {
  console.log(`${n}不是质数`);
}

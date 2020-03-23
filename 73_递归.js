function jiecheng(n) {
  if (n == 1 || n == 0) return 1;

  return n * jiecheng(n - 1);
}

console.log(jiecheng(0));
console.log(jiecheng(1));
console.log(jiecheng(6));

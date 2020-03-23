function fib(n) {
  if (n == 1 || n == 0) return 1;
  return fib(n - 1) + fib(n - 2);
}
for (var i = 0; i < 20; i++) {
  console.log(fib(i));
}

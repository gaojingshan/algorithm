function fib(n) {
  return n == 0 || n == 1 ? 1 : fib(n - 1) + fib(n - 2);
}
for (var i = 0; i < 20; i++) {
  console.log(fib(i));
}

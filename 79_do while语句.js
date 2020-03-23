do {
  var x = parseInt(Math.random() * 7 - 3);
  var y = parseInt(Math.random() * 7 - 3);
} while (x == 0 && y == 0);

console.log(x, y);

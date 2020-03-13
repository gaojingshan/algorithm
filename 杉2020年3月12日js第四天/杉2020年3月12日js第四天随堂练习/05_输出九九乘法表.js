for (var i = 1; i <= 9; i++) {
  var str = '';
  for (var j = 1; j <= 9; j++) {
    str += `${i}乘${j}等于${i * j}\t`;
  }
  console.log(str);
}

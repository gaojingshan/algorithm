//【圆柱体体积】请封装一个函数cylinder()，它接受2个参数：底面圆的半径R和圆柱体的高h。函数返回圆柱体的体积（公式h*3.14*R2）。然后，请使用这个函数，计算底面圆半径为2，高度为5的圆柱体体积。

function cylinder(r, h) {
  // 计算圆柱体的体积
  var v = h * 3.14 * Math.pow(r, 2);
  // 保留一位有效小数
  var v1 = Math.round(v * 10) / 10;
  return v1;
}
console.log(cylinder(2, 5));

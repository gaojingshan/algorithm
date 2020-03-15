// 水仙花数：一个三位数，每个数位的立方和等于它本身，比如153，因为1的立方是1。5的立方是125。3的立方是27。而1+125+27刚好等于153自身。它就是水仙花数。
for (var i = 100; i <= 999; i++) {
  var ge = i % 10;
  var shi = parseInt(i / 10) % 10;
  var bai = parseInt(i / 100);
  if (Math.pow(ge, 3) + Math.pow(shi, 3) + Math.pow(bai, 3) == i) {
      console.log(`${i}就是水仙花数`);
  }
}

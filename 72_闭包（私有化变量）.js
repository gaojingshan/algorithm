function fun() {
  var a = 10;
  return {
    getA: function() {
      console.log(a);
    },
    add: function() {
      a++;
    },
    pingFang: function() {
      a *= a;
    },
    sub: function() {
      a--;
    },
  };
}
var obj = fun();
obj.getA();
obj.pingFang();
obj.sub();
obj.add();
obj.add();
obj.getA();

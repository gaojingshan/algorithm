// 统计正面个数
var z = 0;
// 统计反面个数
var f = 0;

// 总次数
var count = 1000000;

while (count--) {
    // 随机一个数
    var a = Math.random();

    // 随机的概率有一半概率大于0.5，一半概率小于0.5
    // 如果随机出大于0.5的数字，就认为是正面。否则就是反面
    if (a >= 0.5) {
        z++;
    } else {
        f++;
    }
}

console.log(z, f, z / 1000000, f / 1000000);
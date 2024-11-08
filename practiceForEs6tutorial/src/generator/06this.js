/**
 * Created by niuyuanqiang on 16/8/4.
 */

const generator = function *(a, b) {
  console.log(this); // undefined
  this.b = b;
}

var ge = generator();

// this
try {
  ge.next();// 报错
} catch (e) {
  console.log(e);
}



// bind this 的方法 可以通过call函数
const gt = function *() {
  this.a = 0;
}

let g = gt.call(gt.prototype);
g.next();
console.log(g.a);

/**
 * Created by niuyuanqiang on 16/8/9.
 */
class A extends Array {
  constructor () {
    super()
    this[Symbol.isConcatSpreadable] = true;
  }
}

var a = new A();
a.push(1)
a.push(1)
a.push(1);

class B extends Array {
  constructor() {
    super();
    this[Symbol.isConcatSpreadable] = false;
  }
}

var b = new B();
b.push(2)
b.push(2)
b.push(2)

console.log([3].concat(a).concat(b).length)
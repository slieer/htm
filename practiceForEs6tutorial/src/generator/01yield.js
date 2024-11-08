/**
 * Created by niuyuanqiang on 16/8/3.
 */

import 'regenerator-runtime/runtime'

function* generator (x, y) {
  yield x;
  yield y;
  return 'the end';
}
let ge = generator();
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());

let ge1 = function *(...args) {
  for (let i = 1; i < 100; i ++ ) {
    console.log(yield i);
    console.log(`hello ${i}`);
  }
}

ge = ge1();
ge.next();
ge.next('a');
ge.next('b');
ge.next('c');
ge.next('d');


function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
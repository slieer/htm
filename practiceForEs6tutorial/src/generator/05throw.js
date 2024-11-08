/**
 * Created by niuyuanqiang on 16/8/4.
 */

function *generator() {
  try {
    yield 1;
    yield 2;

    yield 3;
  } catch (e) {
    // 捕获异常
    console.log(e);
  }

  throw  new Error('some error');
  yield 4;
  return 'down';
}

let ge = generator();
ge.next();
ge.next();
// 跑出异常 停止执行
// ge.throw('the end');


console.log(ge.next());

//外部捕获不会跑出异常
try {
  console.log(ge.next());
} catch (e) {
  console.log(e);
}
console.log(ge.next());

/**
 * Created by niuyuanqiang on 16/8/5.
 */
// 默认resolve 与reject 都会返回promise对象
// resolve() 后跳转至then(fn);
//  reject 跳转至catch
// promise 每次than默认返回一个promise对象
Promise
  .resolve()
  .then(function () {
    // return data;
    console.log('hello')
  })
  .then(function (data) {
    console.log(data);
    console.log('world')
  });
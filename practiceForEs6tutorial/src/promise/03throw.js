/**
 * Created by niuyuanqiang on 16/8/5.
 */

const testThrow = new Promise(function (resolve, reject) {
  throw new Error('error');
  throw new Error('error');
});

testThrow.then(function (data) {
  
}, function (error) {
  console.log(error)
})
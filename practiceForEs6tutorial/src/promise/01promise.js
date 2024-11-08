/**
 * Created by niuyuanqiang on 16/8/4.
 */
const per = new Promise(function (resove, reject) {
  setTimeout(function () {
    resove(true);
  }, 1000);
  reject(true);
})

per.then(function (data) {
  console.log(data);
}, function (data) {
  console.log('error', data)
});



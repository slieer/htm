/**
 * Created by niuyuanqiang on 16/8/5.
 */
var app = [];
app.push(new Promise(function (resolve, reject) {
  resolve(1);
}));
app.push(new Promise(function (resolve, reject) {
  resolve(1);
}));
app.push(new Promise(function (resolve, reject) {
  resolve(1);
}));
app.push(new Promise(function (resolve, reject) {
  resolve(2);
}));

Promise.all(app).then(function (data) {
  console.log(data)
})
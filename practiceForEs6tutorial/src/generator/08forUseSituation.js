
// ajax 异步操作技术


function request(url) {
  let xhr = new XMLHttpRequest();
  xhr.open('get', '/babel/test.json', true);
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.onload = function (event) {
    qs.next(xhr.response);
  }
  xhr.send(null);
}

const main = function *() {
  var rs = yield request();
  console.log(rs);
}

let qs = main();
qs.next();

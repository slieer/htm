/**
 * Created by niuyuanqiang on 16/8/5.
 */

const getJSON = (url) => {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    // 设置传过来的协议为 json格式
    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = handler;
    function handler() {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    }
    xhr.send();
  })
};


getJSON('/babel/test.json').then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.log('test', error)
})

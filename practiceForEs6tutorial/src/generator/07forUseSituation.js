/**
 * Created by niuyuanqiang on 16/8/4.
 */

// 设置组件状态
const updateUI = function *(text) {
  showLoad(text);
  yield 'init';
  hide();
}

let Loading = null;
function showLoad(text) {
  Loading = document.createElement('div')
  document.body.appendChild(Loading);
  Loading.appendChild(document.createTextNode(text));
  Loading.style.cssText = 'background: #f60; color: #fff; line-height: 30px; transition: opacity 1s, display 1s 1s';
}
function hide() {
  // Loading.style.opacity='0';
  document.body.removeChild(Loading);
}

let animation = updateUI('loading...');
animation.next();
setTimeout(function () {
  animation.next();
}, 1000);




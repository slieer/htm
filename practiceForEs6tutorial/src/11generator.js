import 'regenerator-runtime/runtime'
import thunkify from 'thunkify';
import co from 'co'
console.log('=================================generator==========================')

function* mkGt(x) {
	let y = 2 * (yield x + 1)
	return (2)
}

let oMkGt = mkGt(1)

console.log(oMkGt.next())
console.log(oMkGt.next())
console.log(oMkGt.next())


function* dataConsumer() {
  console.log('Started');
  console.log(`1. ${yield 1}`);
  console.log(`2. ${yield 2}`);
  return 'result';
}

let genObj = dataConsumer();
console.log(genObj.next())
// Started
console.log(genObj.next('a'))
// 1. a
console.log(genObj.next('b'))
// 2. b


var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();
i.throw('a');
try {
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
// 上面代码中，遍历


var gen = function* gen(){
  try {
    yield console.log('a');
  } catch (e) {
    // ...
  }
  yield console.log('b');
  yield console.log('c');
}

var g = gen();
g.next() // a
g.throw() // b
g.next() // c


function* gen1() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen1();

g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }


console.log('yield *: 只要具有iterator接口 就可以被遍历')
function* foo(argument) {
	yield 1
	yield 1
	yield 1
	yield 1
}
function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}


console.log(...bar())



function* inner() {
  yield 'hello!';
}

function* outer1() {
  yield 'open';
  yield inner();
  yield 'close';
}

var gen = outer1()
gen.next().value // "open"
gen.next().value // 返回一个遍历器对象
gen.next().value // "close"

function* outer2() {
  yield 'open'
  yield* inner()
  yield 'close'
}

var gen = outer2()
gen.next().value // "open"
gen.next().value // "hello!"
gen.next().value // "close"


let delegatedIterator = (function* () {
  yield 'Hello!';
  yield 'Bye!';
}());

let delegatingIterator = (function* () {
  yield 'Greetings!';
  yield* delegatedIterator;
  yield 'Ok, bye.';
}());

for(let value of delegatingIterator) {
  console.log(value);
}
// "Greetings!
// "Hello!"
// "Bye!"
// "Ok, bye.


function* gen2(){
  yield* ["a", "b", "c"];
}

gen2().next() // { value:"a", done:false }


console.log('generator 可以很好的处理深层遍历')


function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for(let i=0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

for(let x of iterTree(tree)) {
  console.log(x);
}


console.log('异常处理：')
function* gen3(x){
  try {
    var y = yield x + 2;
  } catch (e){
    console.log(e);
  }
  return y;
}

var g = gen3(1);
g.next();
g.throw('出错了');

console.log('generator内部不存在this， 可以通过call 方法')

function* F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}
var obj = {};
var f = F.call(obj);

f.next();  // Object {value: 2, done: false}
f.next();  // Object {value: 3, done: false}
f.next();  // Object {value: undefined, done: true}

obj.a // 1	
obj.b // 2
obj.c // 3



console.log('usage:')

console.log('异步操作同步化')


function* iniPage(argument) {
	let rs = yield request('123')
	console.log(rs)	
}

function request(url) {
	setTimeout(() => {
		startRequest.next(url)
	},2000)
}

let startRequest = iniPage()
startRequest.next()


console.log('同步操作整合')
let steps = [request(1),request(1),request(1)];

function *iterateSteps(steps){
  for (var i=0; i< steps.length; i++){
    var step = steps[i];
    yield step();
  }
}

console.log('部署iterator接口')

const fs = require('fs')

var read = thunkify(fs.readFile);
read('..\\package.json')(function(err, str){
 	console.log(str.toString())
});

console.log('co 大法')


const readFiles = (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path,(err, data) => {
      if (err) rej(err)
      res(data)
    })
  })
} 




co(function *() {
  console.log('' + (yield readFiles('../.babelrc')))
  return  'co 大法好'
}).then((msg) => {
  console.log(msg)
})
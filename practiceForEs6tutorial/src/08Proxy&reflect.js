
console.log('visit http://es6.ruanyifeng.com/#docs/reflect && http://babeljs.io/learn-es2015/#ecmascript-2015-features-proxies')

// Proxying a normal object

console.log('proxy 实现语言上的编程 修改默认的操作 实现操作符号的重写')
var target = {};
var handler = {
  get: function (target, key, receiver) {
  	console.log(`Hello, ${key}!`)
    return Reflect.get(target, key, receiver);
  }
};

console.log('Reflect目的是将js语言本身的东西 从Object属性上转移过来 象defineProperty等等 visit https://babeljs.io/learn-es2015/#ecmascript-2015-features-reflect-api for detail')

var p = new Proxy(target, handler);
p.world === "Hello, world!";

console.log(target.world)


let handler1 = {
	deleteProperty(target, name) {
		console.log('delete ' + name)
		return Reflect.deleteProperty(target, name)
	}
}

let target1 = {name : 'hello'}
console.log(target1.name)
let p1 = new Proxy(target1, handler1);

delete p1.name
console.log(target1.name)

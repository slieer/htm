import 'regenerator-runtime/runtime'



console.log('async 返回promise对象')

const fs = require('fs');


let readFile = (fileName) => {
	return new Promise((res, rej) => {
		fs.readFile(fileName, (err, data) => {
			if (err) rej(err);
			res(data)
		})
	})
}

var asyncReadFile = async function (){
  var f1 = await readFile('../package.json');
  var f2 = await readFile('../package.json');
  console.log(f1.toString());
  console.log(f2.toString());
};

var result = asyncReadFile();




function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

let asyncPrint1 = async  (value, ms) => {
  await timeout(ms);
  console.log(value)
}

asyncPrint1('hello world', 50);



console.log('async的错误处理机制')

let f = async function () {
  throw new Error('出错了');
}

f().then(
  v => console.log(v),
  e => console.log(e)
)


console.log('使用注意点：：：：：：')


console.log('await 可能被reject 所以保险起见加try catch')


let fAsync = async function() {
	try {
		await timeout(200)	
	} catch(e) {
		console.log(e)
	}
}

console.log('处理非同步操作时 await 后使用Promise.all()')


let pro =  Promise.all([timeout(200), timeout(100)])
let fAsync1 = async function() {
	try {
		await pro;
	} catch(e) {
		console.log(e)
	}
}




console.log('========================字符串扩展============================')
console.log('unicode 编码扩展：')
var s = "𠮷"; //unicode 码 \u20BB7
console.log(`s.codePointAt(0) is ${s.codePointAt(0)} ${String.fromCodePoint(s.codePointAt(0)) === s}`, )

console.log('*********************字符串遍历******************************')


for (let code of 'hello') {
	console.log(`the code is ${code}`)
}

console.log('********************imp method******************************')

s = 'hello world!'
console.log(`
	s.startsWith('hello') is ${s.startsWith('hello')} 
	s.repeat(3) is ${s.repeat(3)}
	s.endsWith('!') is ${s.endsWith('!')} 
	s.includes('hello') is ${s.includes('hello')} 
`)


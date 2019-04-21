//导入包 
const webpack = require('webpack') 
module.exports = { 
//人口文件，引入js文件 
entry: './script.js', 
//输出文件 
output: { filename: './bundle.js', }, 
//设置服务器端口 
devServer: { inline: true, port: 8888 }, 
//设置使用模块 
module: { rules: [ { test: /\.js?/, 
//判断一下是不是js文件 
exclude: /node_modules/, 
//排除特定目录下的js文件 
use:{ loader: 'babel-loader', 
//处理js文件 
options:{ presets: ['env'] 
//设置babel预设 
} 
}, }] }}

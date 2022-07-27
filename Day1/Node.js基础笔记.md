## 浏览器中的JavaScript运行环境
运行环境是指代码正常运行所需要的必要环境。
1. V8引擎是Chrome浏览器中负责解析和执行JavaScript代码；
2. 内置API是由运行环境提供的特殊接口，只能在所属的运行环境中被调用。

JavaScript做后端开发需要使用Node.js 。

## 什么是Node.js？
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js 是一个基于Chrome V8引擎的JavaScript运行环境。
Node.js的官网地址: https://nodejs.org/zh-cn/
浏览器是JavaScript的前端运行环境，Node.js 是JavaScript的后端运行环境。
node.js内置模块有fs，path,http,js内置对象，querystring......
Node.js中无法调用DOM和BOM等浏览器内置API。

Node.js的学习路径：
JavaScript基础语法+Node.js内置API模块（fs,path,http等）+第三方API模块（express,mysql等）

### 查看已安装的Node.js的版本号
打开一个终端（cmd或者Powershell）,输入  node -v
v16.16.0  (输出的版本号)

### 什么是终端
终端（英文是Terminal）是专门为开发人员设计的，用于实现人机交互的一种方式。

使用cd命令切换地址，但是cmd终端只能在C盘，Powershell可以任意切换盘符。
cd C:\Program Files\Windows Photo Viewer

### 在Node.js环境中执行JavaScript代码
打开终端
地址切换到js文件所在的文件夹
输入 node 1.js

### 几个常用的终端快捷键
↑ 向上箭头，可以快速定位到上一次执行的命令
使用tab键，能够快速补全路径；
使用esc键，能够快速清空当前已输入的命令；
输入cls命令，可以清空终端。

## fs文件系统模块
fs模块是Node.js官方提供的，用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。
fs.readFile()方法，用来读取指定文件中的内容；
fs.writeFile()方法，用来向指定的文件中写入内容
```js
先要导入fs模块：
const fs=require('fs')

// 2.调用fs.readFile()方法读取文件
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    if(err){
        return console.log("读取文件失败 "+err.message);
    }
    console.log("读取文件成功 "+dataStr)
})
```

## 路径动态拼接的问题
在使用fs模块操作文件时，如果提供的操作路径是以 ./或../开头的相对路径时，很容易出现路径动态拼接错误的问题。
原因：代码在运行时，会以执行node命令时所处的目录，动态拼接出被操作文件的完整路径。

解决方案：在使用fs模块操作文件时，直接提供完整的路径，不要提供./或../开头的相对路径，
从而防止路径动态拼接的问题。
但是完整的路径移植性比较差，不利于后期的维护。
```js
    fs.readFile('E:\\前端学习笔记\\Learning_Node.js\\Day1\\files\\1.txt','utf8',function(err,dataStr){
        if(err){
            return console.log("读取文件失败 "+err.message);
        }
        console.log("读取文件成功 "+dataStr)
    })
```

可以使用__dirname 表示当前文件所处的目录
```js
// __dirname 表示当前文件所处的目录
console.log(__dirname)
fs.readFile(__dirname+'\\files\\1.txt','utf8',function(err,dataStr){
    if(err){
        return console.log("读取文件失败 "+err.message);
    }
    console.log("读取文件成功 "+dataStr)
})

```

## path模块
### path.join
```js
    // 注意： ../会抵消前面的路径
    // 字符串里面的路径：\\和/是等效的
    // 在path.join中'./d'，'/d'和'd'是一样的。
    const pathStr=path.join('\\a','\\b\\c','../../','./d','e','f');
    console.log(pathStr);
```

### path.basename()
使用path.basename()方法，可以从一个文件路径中，
获取到文件的名称部分。
```js
    const path=require('path')
    const fpath='./a/b/c/index.html'  //文件的存放路径
    var fullName=path.basename(fpath);
    console.log(fullName);
    //输出 index.html

    var nameWithoutExt=path.basename(fpath,'.html');
    console.log(nameWithoutExt);
    // 输出index
```

### path.extname()
获取文件的扩展名
```js
    const path=require('path')
    const fpath='./a/b/c/index.html'  //文件的存放路径
    var fext=path.extname(fpath);
    console.log(fext);
    // 输出 .html
```

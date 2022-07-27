## 什么是http模块
http模块是Node.js官方提供的，用来创建web服务器的模块。通过http模块提供的http.createServer()方法，就能方便的把一台普通的电脑，变成一台Web服务器，从而对外提供Web资源服务。
如果希望使用http模块创建Web服务器，则需要先导入它：
const http=require('http');

服务器和普通电脑的区别：
服务器上安装了web服务器软件，例如IIS和Apache等。

在Node.js中，我们不需要使用IIS，Apache等第三方web服务器软件。
因为我们可以基于Node.js提供的http模块，
通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供web服务。

### IP地址
IP地址就是互联网上每台计算机的唯一地址，
因此IP地址具有唯一性。
IP地址的格式，通常是“点分十进制”表示成（a,b,c,d）的形式，
其中，a,b,c,d都是0-255之间的十进制整数，例如(192,168,1,1)。

### IP地址
互联网中每台Web服务器，都有自己的IP地址，
例如：大家可以在Windows的终端中运行ping www.baidu.com

### 开发期间自己的电脑IP
开发期间，自己的电脑既是服务器，也是一个客户端，
为了方便测试，可以在自己的浏览器中输入127.0.0.1这个IP地址,
这样就能把自己的电脑当作一台服务器进行访问了。

### 域名和域名服务器
由于IP地址不够直观，不便于记忆，于是人们又提出了字符型的地址方案，即所谓的域名地址。
IP地址和域名是一一对应的关系，这份对应关系存放在一种叫做域名服务器（DNS,Domain name server）的电脑中。域名服务器是提供IP地址和域名之间的转换服务的服务器。
127.0.0.1 的域名是 localhost ，在开发测试期间代表自己的这台电脑。

### 端口号
每一个web服务都对应一个唯一的端口号。
客户端发送过来的网络请求，通过端口号，可以被准确地交给对应的web服务进行处理。
http协议的默认端口是80，80端口可以被省略。

### 创建web服务器的基本步骤
1. 导入http模块
2. 创建web服务器实例
3. 为服务器实例绑定request事件，监听客户端的请求；
4. 启动服务器。

### 模板字符串
模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（${expression}）的占位符。

在普通字符串中嵌入表达式，必须使用如下语法：
```js
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
```
现在通过模板字符串，我们可以使用一种更优雅的方式来表示：
```js
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

### 为中文字符响应设置响应头
为中文字符响应设置响应头：
res.setHeader('Content-Type','text/html;charset=utf-8')
```js
// 3. 为服务器实例绑定request事件，监听客户端的请求；
server.on('request',(req,res) =>{
    //req.url是客户端请求的URL地址
    const url=req.url;
    //req.method是客户端请求的method类型
    const method=req.method;
    const str=`您请求的url地址是 ${url}, and request method is ${method}`;
    console.log(str);
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(str);
})
```

## let和var的区别
作用域规则
let 声明的变量作用域只在其声明的块或子块内部，这一点，与 var 相似。二者之间最主要的区别在于 var 声明的变量的作用域是整个封闭函数。
```js
    function varTest() {
    var x = 1;
    {
        var x = 2; // same variable!
        console.log(x); // 2
    }
    console.log(x); // 2
    }

    function letTest() {
    let x = 1;
    {
        let x = 2; // different variable
        console.log(x); // 2
    }
    console.log(x); // 1
    }
```

在全局作用域中，let 和 var 不一样，它不会在顶层对象上创建属性。例如：

```js
    var x = 'global';
    let y = 'global';
    console.log(this.x); // "global"
    console.log(this.y); // undefined
```

## 模块化
### 什么是模块化
模块化，就是遵循固定的规则，把一个大文件拆成独立并相互依赖的多个小模块；
把代码进行模块化拆分的好处：
1. 提高了代码的复用性；
2. 提高了代码的可维护性；
3. 可以实现按需加载。
模块化规范，就是对代码进行模块化的拆分和组合时，需要遵守的那些规则。
- 使用什么样的语法格式来引用模块
- 在模块中使用什么样的语法格式向外暴露成员。

### Node.js中模块的分类
- 内置模块，内置模块是由Node.js官方提供的，例如fs，path,http等；
- 自定义模块，用户创建的每个.js文件，都是自定义模块；
- 第三方模块（由第三方开发处理的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载）


### 使用require()方法进行加载
加载内置模块和第三方模块，直接写模块的名称即可。
```js
// 加载内置fs模块
const fs=require('fs');

// 加载第三方模块
const moment=require('moment')
```
加载用户自定义模块，需要加上模块文件的路径，.js可以省略。
```js
const custom=require('./custom.js')
```
使用require()方法加载的时候会执行'时会执行被加载模块里面的代码

## 模块作用域
和函数作用域类似，在自定义模块中定义的变量，方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域。
模块作用域的好处，防止全局变量污染的问题。


## module对象
在每个.js自定义模块中都有一个module对象，
它里面存储了和当前模块有关的信息。
```js
    Module {
    id: '.',
    path: 'E:\\前端学习笔记\\Learning_Node.js\\Day2\\模块',
    exports: {},
    filename: 'E:\\前端学习笔记\\Learning_Node.js\\Day2\\模块\\10.module对象.js',
    loaded: false,
    children: [],
    paths: [
        'E:\\前端学习笔记\\Learning_Node.js\\Day2\\模块\\node_modules',
        'E:\\前端学习笔记\\Learning_Node.js\\Day2\\node_modules',
        'E:\\前端学习笔记\\Learning_Node.js\\node_modules',
        'E:\\前端学习笔记\\node_modules',
        'E:\\node_modules'
    ]
    }
```

### module.exports对象
在自定义模块中，可以使用module.exports对象，
将模块内的成员共享出去，供外界使用。
外界require()方法导入自定义模块时，
得到的就是module.exports所指向的对象。

默认情况下，module.exports 和 exports指向同一个对象。

外界require()方法导入自定义模块时，最终还是以module.exports所指向的对象为准。
```js
    module.exports.username='zs';
    exports={
        gender:'男',
        age:22
    }

// 外界require()方法导入自定义模块时,
// const a1=require('./15exports使用误区.js');
// console.log(a1);
// 最后输出的是 { username: 'zs' }
// 因为 exports={gender:'男',age:22}，改变了exports的指向，但是最终还是以module.exports为准。
```

## Node.js中的模块化规范
node.js遵循CommonJS模块化规范，CommonJS规定了模块的特性和各个模块之间如何相互依赖。
CommonJS规定：
1. 每个模块内部，module变量代表当前模块；
2. module变量是一个对象，它的exports属性（即module.exports）是对外的接口。
3. 加载某个模块，其实是加载该模块的module.exports属性。require()方法用于加载模块。
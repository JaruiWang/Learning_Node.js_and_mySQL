# Learning_Node.js_and_mySQL
# Day1
## 浏览器中的JavaScript运行环境
JavaScript做后端开发需要使用Node.js 。

## 什么是Node.js？
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js 是一个基于Chrome V8引擎的JavaScript运行环境。

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

## 路径动态拼接的问题
可以使用__dirname 表示当前文件所处的目录


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

### path.extname()
获取文件的扩展名


# Day2

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

### 为中文字符响应设置响应头
为中文字符响应设置响应头：
res.setHeader('Content-Type','text/html;charset=utf-8')

## let和var的区别
作用域规则
let 声明的变量作用域只在其声明的块或子块内部，这一点，与 var 相似。二者之间最主要的区别在于 var 声明的变量的作用域是整个封闭函数。在全局作用域中，let 和 var 不一样，它不会在顶层对象上创建属性。例如：

## 模块化
### 什么是模块化
模块化，就是遵循固定的规则，把一个大文件拆成独立并相互依赖的多个小模块；

### Node.js中模块的分类
- 内置模块
- 自定义模块
- 第三方模块

### 使用require()方法进行加载
加载内置模块和第三方模块，直接写模块的名称即可。

## 模块作用域
和函数作用域类似，在自定义模块中定义的变量，方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域。
模块作用域的好处，防止全局变量污染的问题。

## module对象
在每个.js自定义模块中都有一个module对象，
它里面存储了和当前模块有关的信息。

### module.exports对象
在自定义模块中，可以使用module.exports对象，
将模块内的成员共享出去，供外界使用。
外界require()方法导入自定义模块时，
得到的就是module.exports所指向的对象。

## Node.js中的模块化规范
node.js遵循CommonJS模块化规范，CommonJS规定了模块的特性和各个模块之间如何相互依赖。
CommonJS规定：
1. 每个模块内部，module变量代表当前模块；
2. module变量是一个对象，它的exports属性（即module.exports）是对外的接口。
3. 加载某个模块，其实是加载该模块的module.exports属性。require()方法用于加载模块。

# Day3
## 包
Node.js中第三方模块又叫包。
Node.js中的包都是免费且开源的，不需要付费即可免费下载使用。

## 搜索和下载包
有一家IT公司，叫做npm，Inc。
旗下的网站：
搜索包： https://www.npmjs.com/
下载包： https://registry.npmjs.org/
下载工具：Node Package Manager(简称npm包管理工具)，随着Node.js的安装包一起被安装到了用户的电脑上。
在终端中执行 npm -v命令，来查看自己电脑上所有安装的npm包管理工具的版本号。

## 包的使用
1. 使用npm包管理工具，在项目中安装格式化时间的包moment
npm install 包的完整名称
npm i  完整的包名称
npm i moment  安装moment格式化时间的包
2. 使用require()导入格式化时间的包
3. 参考moment的官方API文档对时间进行格式化。
```js
// 1.导入需要的包
const moment=require('moment');
const dt=moment().format('YYYY-MM-DD HH:mm:ss');
```

### 初次装包后多了哪些文件
初次装包后多了哪些文件后，在项目文件夹下多了一个叫node_modules的文件夹和package-lock.json的配置文件。
node_modules 文件夹用来存放所有已安装到项目中的包。
require()导入第三方包时，就是从这个目录中查找并加载包的。
package-lock.json配置文件用来记录 node_modules目录下的每一个包的下载信息，例如包的名字，版本号和下载地址等。
注意：程序员不用修改node_modules的文件夹和package-lock.json中的任何代码。
npm包管理工具会自动维护它们。

### 安装指定版本的包
使用npm install命令安装包的时候，会自动安装最新版本的包。
如果需要安装指定版本的包，可以在包名之后，通过@符号指定具体的版本。
npm i moment@2.22.2

### 包的语义化版本规范
包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如2.24.0
第一位数字：大版本
第二位数字：功能版本
第三位数字：Bug修复版本。

版本号提升的规则：只要前面的版本号增长了，后面的版本号归零。

### 包管理配置文件
npm规定，在项目根目录中，必须提供一个叫做package.json的包管理配置文件。
用来记录与项目有关的一些配置信息。
项目的名称，版本号，描述；
项目中都用到了哪些包；
包的分类，哪些包只在开发期间会用到，哪些包在开发和部署时都需要用到。

### 如何记录项目中安装了哪些包
在项目根目录中，创建一个叫做package.json的配置文件，即可用来记录项目中安装了哪些包。
从而方便上传Github时剔除node_modules文件夹（node_modules文件夹体积太大了）
在项目开发中，要把node_modules文件夹,添加到.gitigore忽略文件中。

### 配置package.json文件
通过npm包管理工具提供的快捷命令，可以在执行命令时所处的目录中，快速创建package.json配置文件
 npm init -y
 注意：需要在英文的目录下成功运行，项目名称不用使用中文，不能出现空格；
 运行npm install命令安装包的时候，npm包工具会自动把包的名称与版本号，记录到package.json中。

### 一次性安装所有的包
可以运行 npm install命令（或者npm i）一次性安装所有的依赖包
执行npm install命令时，npm包管理工具先读取package.json中的dependencies节点。
读取到记录的所有依赖包名称和版本号之后，npm包管理工具会把这些包一次性下载到项目中

### 卸载包
可以运行npm uninstall命令，来卸载指定的包。
npm uninstall moment

### devDependencies节点
如果某些包只在项目开发阶段会用到，在项目上线后不会用到，则建议把这些包记录到devDependencies节点；
与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到dependencies节点。

 npm install --save-dev 包名 或者 npm install 包名 --save-dev
 --save-dev 可以缩写为 -D
 npm install 包名 -D

## 镜像服务器
### 淘宝NPM镜像服务器
镜像（Mirroring）是一种文件存储形式，一个磁盘上的数据在另一个磁盘上存在一个完全相同的副本即为镜像。

下包的镜像源，指的是下包的服务器地址。
### 查看当前的下包镜像源
npm config get registry
返回 https://registry.npmjs.org/
说明使用的是官方的国外的镜像源

### 将下包的镜像源切换为淘宝镜像源
npm config set registry=https://registry.npm.taobao.org/
下载速度更快，用户体验更好。

### nrm小工具
nrm只能在c盘用cmd终端时可以使用。
nrm小工具：可以方便的切换下包的镜像源。
- 通过npm包管理器，将nrm安装为全局可用的工具
npm i nrm -g

- 查看所有可用的镜像源
nrm ls

- 将下包的镜像源切换为 taobao 镜像
nrm use taobao

### 全局包
在执行npm install命令时，如果提供了-g 参数，则会把包安装为全局包。
全局包会被安装到 C:\Users\12723\AppData\Roaming\npm\node_modules目录下
只要工具性质的包，才有全局安装的必要性，因为它们提供了好用的终端命令。
i5ting_toc -f sample.md -o

### 规范的包结构
一个规范的包，它的组成结构，必须符合以下3点要求：
1. 包必须单独的目录而存在；
2. 包的顶级目录要必须包含package.json这个包管理配置文件；
3. package.json中必须包含name,version,main这三个属性，分别代表包的名字，版本号，包的入口。


## 开发属于自己的包
### 初始化package.json
name,包的文件名；
version,包的版本号；
main,入口文件；
description，描述和介绍的文字；
keywords，搜索的关键字；
license，遵循的协议。

### README.md文件
包根目录的README.md文件，是包的使用说明文档。通过它，我们可以事先把包的使用说明，markdown的格式写出来，方便用户参考。
README.md文件中具体写什么内容，没有强制性的要求；只要能够清晰地把包的作用，用法，注意事项等描述清除即可。
可以包含以下内容：
安装方式，导入方式，  具体模块的详细说明     开源协议

## 发布包
### 注册npm账号
1.  访问https://www.npmjs.com/ 网站，点击sign up按钮，进入注册用户界面；
2. 填写账号相关的信息：Full Name,Public Email, Username, Password;
3. 点击Create an Account按钮，注册账号；
4. 登录邮箱，点击验证链接，进行账号的验证。

### 在终端登录npm账号
npm账号注册完成之后，可以在终端中执行npm login命令，
依次输入用户名，密码，邮箱，即可登录成功。
登录的必须是官方的服务器，不能是国内的镜像服务器。

### 输入发布命令
切换到包的根目录命令，输入 npm publish 

## 删除已发布的包
运行 npm unpublish 包名 --force ，即可从npm删除已发布的包
注意：
1. npm unpublish 命令只能删除72小时以内发布的包；
2. npm unpublish删除的包，在24小时内不允许重复发布；
3. 发布包的时候要慎重，尽量不要往npm上发布没有意义的包。



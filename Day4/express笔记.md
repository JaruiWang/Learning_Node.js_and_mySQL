## 什么是Express
官方的概念：Express是基于Node.js平台，快速，开放，极简的Web开发框架。
通俗的理解：Express的作用和Node.js内置的http模块类似,是用来创建Web服务器的。
Express的本质：就是一个npm上的第三方包，提供了快速创建Web服务器的便捷方法。

Express的中文官网：http://www.expressjs.com.cn/

### Express和http之间的关系
使用Node.js提供的原生http模块也可以创建Web服务器，但是用起来比较复杂，开发效率低；
Express是基于内置的http模块进一步封装出来的，能够提高开发效率。


### Express的作用
常见的服务器有两种，分别是：
- Web网站服务器，专门对外提供Web网页资源的服务器;
- API接口服务器，专门对外提供API接口的服务器。
使用Express，我们可以方便，快速的创建Web网站的服务器或者API接口的服务器。

### Express的安装
npm i express@4.17.1

### 监听GET请求
通过app.get(),可以监听客户端的GET请求，具体的语法格式如下：
req:请求对象，包含了与请求相关的属性和方法；
res:响应对象，包含了与响应相关的属性和方法。
app.get('请求URL',function(req,res){
    /* 处理函数 */
})

### 监听POST请求
通过app.post(),可以监听客户端的POST请求，具体的语法格式如下：
req:请求对象，包含了与请求相关的属性和方法；
res:响应对象，包含了与响应相关的属性和方法。
app.post('请求URL',function(req,res){
    /* 处理函数 */
})

### 把内容响应给客户端
通过res.send()方法可以向客户端发送内容。

```js
app.get('/user',function(req,res){
    //向客户端发送JSON对象
    res.send({name:'zs',age:20,gender:'男'})
})

app.post('/user',function(req,res){
    //向客户端发送文本内容
    res.send('请求成功')
})

```

### 使用req.query获取参数
通过req.query可以获取到客户端的发送过来的查询参数
```js
app.get('/',function(req,res){
    //通过req.query可以获取到客户端的发送过来的查询参数
    // 注意：默认情况下，req.query是一个空对象
    // 当使用http://127.0.0.1/?name=LL&age=23访问时，req.query={ name: 'LL', age: '23' }
    console.log(req.query);
    res.send(req.query);
})

```

### 获取URL中的动态参数
通过req.params对象，可以访问到url中，通过: 匹配到的动态参数
```js
    app.get('/user/:id',function(req,res){
        //通过req.query可以获取到客户端的发送过来的查询参数
        // 注意：默认情况下，req.query是一个空对象
        // 例如在客户端输入 http://127.0.0.1/user/2
        console.log(req.params);
        res.send(req.params);
    })
```
注意点：'/user/:id'，'id'是任意取的，可以换成其他名字；
参数的个数不一定是1个，可以是多个；
例如可以是，'/user/:idaaa/:name'。

## express.static()托管静态资源
通过express.static()可以非常方便地创建一个静态资源服务器；
可以将文件夹中的图片，css文件，js文件对外开放访问。
```js
app.use(express.static('public'))
// 这样你就可以访问public目录中的所有文件了
//例如访问 http://127.0.0.1/index.html   http://127.0.0.1/index.js
// 注意，存放文件的public目录不会出现在URL中
```

### 如何托管多个静态资源
托管多个静态资源，只需要多次调用express.static()；
访问静态资源文件时，会根据添加的顺序进行查找。
```js
    app.use(express.static('./clock'));
    app.use(express.static('./files'));
```

### 挂载路径前缀
如果希望在托管的静态资源访问路径之前，挂载路径的前缀，可以使用如下的代码：
```js
    app.use('/public',express.static('./clock'));
    app.use('/files',express.static('./files'));
```
这样在访问的时候必须使用：
http://127.0.0.1/files/index.html 

## nodemon小工具
我们可以使用nodemon工具，它能够监听项目文件的变动，当代码被修改后，nodemon会自动帮我们重启项目，方便了开发和测试。
### 安装nodemon
npm install -g nodemon

### 使用nodemon
原本通过 node app.js 来运行项目
现在通过 nodemon app.js 来运行项目
代码被修改后，会被nodemon监听到，从而实现自动重启项目的效果。

## 路由的匹配过程
每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。
在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的URL同时匹配成功，则Express会处理这次请求，
转交给对应的function函数进行处理。
在Express中使用路由最简单的方式就是把路由挂载到app上。但是这种方式一旦代码量太大了就比较麻烦，实际项目中使用较少。
```js
// 1.导入 express
const express=require('express')

// 2.创建web服务器
const app=express()

app.get('/user',function(req,res){
    res.send({name:'zs',age:20,gender:'男'});
})

app.post('/user',function(req,res){
    res.send('请求成功')
})

app.get('/',function(req,res){
    res.send(req.query);
})

app.get('/user/:idaaa/:name',function(req,res){
    res.send(req.params);
})

// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})
```

### 模块化路由 导入和注册
```js
// 导入路由模块
const router=require('./rounter.js');
// 注册路由模块
app.use(router);
```
注意：app.use()函数的作用，就是来注册全局中间件，
router就是中间件。
之前使用过 app.use('/clock',express.static('./clock'));
express.static('./clock')也是中间件。

### 为路由模块添加前缀
```js
// 导入路由模块
const router=require('./rounter.js');
// 注册路由模块
app.use('/api',router);

```

## 中间件
Express的中间件本质上是一个function处理函数,格式如下：
app.use('/',function(req,res,next){
    next();
})
中间件函数的形参列表中，必须包含next函数。
而路由处理函数的参数只包含req和res。

### 全局生效的中间件
客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。
通过调用 app.use（中间件函数）,即可定义一个全局生效的中间件。
```js
// 定义一个最简单的中间件函数
const mv=function(req,res,next){
    console.log('这是最简单的中间件函数');

    // 把流转关系，转交给下一个中间件或路由
    next();
}
app.use(mv);
```

### 定义全局中间件的简化形式
```js
// 全局中间件的简化形式
app.use(function(req,res,next){
    console.log('这是最简单的中间件函数123');
    // 把流转关系，转交给下一个中间件或路由
    next();
})
```

### 中间件的作用
多个中间件之间，共享同一份req个res。
基于这样的特性，我们可以在上游的中间件中，同一为req和res对象添加自定义的属性或方法，
供下游的中间件或路由进行使用。

### 定义多个全局中间件
可以使用app.use()连续定义多个全局中间件。
客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用。


### 局部生效的中间件
不使用app.use()定义的中间件，叫做局部生效的中间件。
例如可以在定义路由的时候定义中间件，app.get('/',mv,(req,res)=>{})
```js
const mv=function(req,res,next){
    console.log('调用了局部生效的中间件');

    // 把流转关系，转交给下一个中间件或路由
    next();
}

// 定义两个路由
app.get('/',mv,(req,res)=>{
    console.log('调用了/这个路由');
    res.send('Home page.');
})
```
也可以同时定义和使用多个中间件
```js
// 定义两个路由
app.get('/',mv1,mv2,(req,res)=>{
    console.log('调用了/这个路由');
    res.send('Home page.');
})
```

### 中间件的分类
1. 应用级别的中间件
通过app.use()或app.get()或app.post()，绑定到app实例上的中间件，叫做应用级别的中间件。

2. 路由级别的中间件
绑定到express.Router()实例上的中间件，叫做路由级别的中间件。


3. 错误级别的中间件
定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的奔溃
注意：错误级别中间件必须放在注册在所有路由之后。
```js
    app.get('/',(req,res)=>{
        // 1. 人为的制造错误
        throw new Error('服务器内部发生了错误')
        res.send('Home page.');
    })

    // 2. 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的奔溃
    app.use(function(err,req,res,next){
        console.log('发生了错误'+err.message);
        res.send('Error:'+err.message);
        next();
    })

```

4. Express内置的中间件
自Express 4.16.0版本开始，Express内置了3个常用的中间件，极大的提高了Express项目的开发效率和体验：
(1) express.static快速托管静态资源的内置中间件，例如HTML文件，图片，CSS样式等，无兼容性问题；
(2) express.json 解析JSON格式的请求体数据（有兼容性，仅在Express 4.16.0+ 版本中可用）；
app.use(express.json())
```js
    //通过express.json()这个中间件，解析表单中的JSON格式的数据
    // 注意，除了错误级别的中间件之外，其他的中间件都必须在路由之前配置。
    app.use(express.json());

    app.post('/user',(req,res)=>{
        // 在服务器，可以使用req.body这个属性，开接收客户端发送来的请求体数据
        console.log(req.body);
        res.send('ok');
    })

```
(3) express.urlencoded解析URl-encoded格式的请求体数据（有兼容性，仅在Express 4.16.0+ 版本中可用）；
app.use(express.urlencoded({extended:false}))
```js
    app.use(express.urlencoded({extended:false}))
    app.post('/book',(req,res)=>{
        // 在服务器，可以使用req.body这个属性，开接收客户端发送来的请求体数据
        console.log(req.body);
        res.send('ok');
    })
```

5. 第三方的中间件
不是Express内置的中间件，而是由第三方开发出来的中间件，叫做第三方中间件。
例如，在Express 4.16.0之前的版本中，经常使用body-parser这个第三方中间件，来解析请求体数据。
使用步骤如下：
（1）运行 npm install body-parser安装中间件；
（2）使用require 导入中间件；
（3）调用app.use()注册并使用中间件。


## 接口的跨域问题
解决接口跨域问题的方案主要有两种：
1. CORS,主流的解决方案，推荐使用；
2. JSONP,有缺陷的解决方案：只支持GET请求。

### 提供一个在线版的jquery
staticfile.org 还有REACT VUE其他库
https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js

### 使用cors中间件解决跨域问题
cors是Express的第三方中间件。通过安装和配置cors中间件，可以很方便地解决跨域问题。使用步骤分为如下3步：
1. 运行npm install cors 安装中间件；
2. 使用const cors=require('cors')导入中间件；
3. 在路由之前调用app.use(cors())配置中间件

### 什么是CORS
CORS（Cross-Origin Resource Sharing，跨域资源共享）由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源。

### CORS的注意事项
1. CORS主要在服务器端进行配置，客户端浏览器无须做任何额外的配置，即可请求开启了CORS的接口；
2. CORS在浏览器的兼容性，只有支持XMLHttpRequest Level2的浏览器，才能正常访问开启了CORS的服务端接口（例如ie10+,Chrome4+，FireFox3.5+）

### CORS的响应头
- Access-Control-Allow-Origin
下面的字段值只允许来自http://itcast的请求：
res.setHeader('Access-Control-Allow-Origin','http://itcast')
如果指定了通配符'*',表示允许来自任何域的请求：
res.setHeader('Access-Control-Allow-Origin','*')

- Access-Control-Allow-Headers
对额外的请求体进行声明

- Access-Control-Allow-Methods
默认情况下，CPRS仅支持客户端发起GET，POST，HEAD请求；
如果客户端希望通过PUT，DELETE等方式请求服务器的资源，则需要在服务器端，
通过Access-Control-Allow-Methods来指明实际请求所允许使用的HTTP方法。
只允许GET,POST,HEAD,DELETE请求方法
res.setHeader('Access-Control-Allow-Methods','GET,POST,HEAD,DELETE')
允许所有的HTTP请求方法
res.setHeader('Access-Control-Allow-Methods','*')

### 简单请求
同时满足以下两大条件的请求，就是属于简单请求：
1. 请求方式：GET，POST，HEAD三者之一；
2. HTTP头部信息不超过以下几种字段：无自定义头部字段，Accept,
Accept-Language,Content-Language,DRP,Downlink,Save-Data,Viewport-Width,Width,Content-Type.
客户端与服务器之间只会发生一次请求。

### 预检请求
不是简单请求的，就是预检请求。

在浏览器和服务器正式通信之前，浏览器会先发送OPTION请求进行预检，
以获知服务器是否允许该实际请求，所以OPTION请求称之为“预检请求”.

客户端与服务器之间会发生两次请求，OPTION预检请求成功之后，才会发起真正的请求。


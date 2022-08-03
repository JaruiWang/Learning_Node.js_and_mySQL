// 1.导入 express
const express=require('express')

// 2.创建web服务器
const app=express()

// 全局中间件的简化形式
app.use(function(req,res,next){
    console.log('调用了第1个全局中间件');

    // 把流转关系，转交给下一个中间件或路由
    next();
})

app.use(function(req,res,next){
    console.log('调用了第2个全局中间件');

    // 把流转关系，转交给下一个中间件或路由
    next();
})

// 定义两个路由
app.get('/',(req,res)=>{
    console.log('调用了/这个路由');
    res.send('Home page.');
})

app.get('/user',(req,res)=>{
    console.log('调用了/user这个路由');
    res.send('User page.');
})

// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})

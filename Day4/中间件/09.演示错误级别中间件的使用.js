// 1.导入 express
const express=require('express')

// 2.创建web服务器
const app=express()


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


// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})

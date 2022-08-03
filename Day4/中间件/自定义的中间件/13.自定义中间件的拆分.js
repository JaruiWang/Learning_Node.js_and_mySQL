// 1.导入 express
const express=require('express')

// 2.创建web服务器
const app=express()


// 1.导入自己封装的中间件模块
const customBodyParser=require('./custom-body-parser.js')
// 2.将自定义的中间件模块，注册为全局可用的中间件。
app.use(customBodyParser);

app.post('/user',(req,res)=>{
    res.send(req.body);
})

// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})

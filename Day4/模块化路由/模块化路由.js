// 1.导入 express
const express=require('express')

// 2.创建web服务器
const app=express()

// 导入路由模块
const router=require('./rounter.js');
// 注册路由模块
app.use('/api',router);

// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})

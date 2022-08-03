// 1.导入 express
const express=require('express')

// 2.创建web服务器
const app=express()

// 配置解释表单数据的中间件
app.use(express.urlencoded({extended:false}))

// 导入路由模块
const router =require('./16.apiRouter')
// 把路由模块，注册到app上
app.use('/api',router);


// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})

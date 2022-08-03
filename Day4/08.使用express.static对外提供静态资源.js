// 1.导入 express
const express=require('express')

// 2.创建web服务器
const app=express()


// app.use(express.static('./clock'));
app.use('/clock',express.static('./clock'));
app.use('/files',express.static('./files'));
// http://127.0.0.1/files/index.html 

//例如访问 http://127.0.0.1/index.html   http://127.0.0.1/index.js

// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})

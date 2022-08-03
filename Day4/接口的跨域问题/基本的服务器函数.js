// 1.导入 express
const express=require('express')

// 2.创建web服务器
const app=express()

const cors=require('cors')



// 全局中间件的简化形式
app.use(function(req,res,next){
    console.log('这是最简单的中间件函数123');

    // 把流转关系，转交给下一个中间件或路由
    next();
})

app.use(cors());


// 定义两个路由
app.get('/',(req,res)=>{
    console.log('调用了get');
    res.send('Home page.');
})

app.post('/',(req,res)=>{
    console.log('调用了post');
    res.send('User page.');
})

// 定义DELETE接口
app.delete('/delete',(req,res)=>{
    // 调用res.send()方法，向客户端响应处理的结果
    res.send({
        status:0,
        msg:'DELETE请求成功！',
    })
})

// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})

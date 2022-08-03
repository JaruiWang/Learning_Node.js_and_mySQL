// 1.导入 express
const express=require('express')

// 2.创建web服务器
const app=express()

//通过express.json()这个中间件，解析表单中的JSON格式的数据
app.use(express.json());

app.post('/user',(req,res)=>{
    // 在服务器，可以使用req.body这个属性，开接收客户端发送来的请求体数据
    console.log(req.body);
    res.send('ok');
})

app.use(express.urlencoded({extended:false}))
app.post('/book',(req,res)=>{
    // 在服务器，可以使用req.body这个属性，开接收客户端发送来的请求体数据
    console.log(req.body);
    res.send('ok');
})

// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})

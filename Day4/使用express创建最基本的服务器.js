// 1.导入 express
const express=require('express')

// 2.创建web服务器
const app=express()

app.get('/user',function(req,res){
    //向客户端发送JSON对象
    res.send({name:'zs',age:20,gender:'男'});
})

app.post('/user',function(req,res){
    //向客户端发送文本内容
    res.send('请求成功')
})

app.get('/',function(req,res){
    //通过req.query可以获取到客户端的发送过来的查询参数
    // 注意：默认情况下，req.query是一个空对象
    // 当使用http://127.0.0.1/?name=LL&age=23访问时，req.query={ name: 'LL', age: '23' }
    console.log(req.query);
    res.send(req.query);
})


// 通过req.params对象，可以访问到url中，通过: 匹配到的动态参数
app.get('/user/:idaaa/:name',function(req,res){
    // 例如在客户端输入 http://127.0.0.1/user/2/aa
    console.log(req.params);
    res.send(req.params);
})

// 3.启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})

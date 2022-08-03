const express=require('express');
const router=express.Router();


// 在这里挂载对象的路由
router.get('/get',(req,res)=>{
    //通过req.query获取客户端通过查询字符串，发送到服务端的数据
    const query=req.query;
    // 调用res.send()方法，向客户端响应处理的结果
    res.send({
        status:0,
        msg:'GET 请求成功！',
        data:query
    })
})

router.post('/post',(req,res)=>{
    //通过req.body获取请求体中包含的url-encoded格式的数据
    const body=req.body;
    // 调用res.send()方法，向客户端响应处理的结果
    res.send({
        status:0,
        msg:'POST请求成功！',
        data:body
    })
})

// 定义DELETE接口
router.delete('/delete',(req,res)=>{
    // 调用res.send()方法，向客户端响应处理的结果
    res.send({
        status:0,
        msg:'DELETE请求成功！',
    })
})

module.exports=router;
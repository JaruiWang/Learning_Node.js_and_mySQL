// 导入express模块
const express=require('express')

// 创建express的服务器实例
const app=express()

// 请配置Session中间件
const session=require('express-session');
app.use(
    session({
        secret:'itheima',
        resave:false,
        saveUninitialized:true
})
)

// 托管静态页面
app.use(express.static('./pages'));
// 解析POST提交过来的表单数据
app.use(express.urlencoded({extended:false}));

// 登录的API接口
app.post('/api/login',(req,res)=>{
    //判断用户提交的登录信息是否正确
    if(req.body.username !='admin' || req.body.password !='000000'){
        return res.send({status:1,msg:'登录失败'})
    }

    // 请将登录成功后的用户信息，保存到Session中
    req.session.user=req.body; // 用户的信息
    req.session.islogin=true;  // 用户的登录状态


    res.send({status:0,msg:'登录成功'});
})

app.get('/api/username',(req,res)=>{
    // 请从Session 中获取用户的名称，响应给客户端
    if(!req.session.islogin){
        return res.send({status:1,msg:'fail'})
    }

    res.send({
        status:0,
        msg:'success',
        username:req.session.user.username
    })
})

// 退出登录的接口，清空Session信息
app.post('/api/logout',(req,res)=>{
    // 清空Session 信息
    req.session.destroy();
    res.send({
        status:0,
        msg:'退出登录成功',
    })
})
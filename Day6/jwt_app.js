// 导入express模块
const express=require('express')

// 创建express的服务器实例
const app=express()

// 安装并导入JWT相关的两个包，分别是jsonwebtoken express-jwt
const jwt=require('jsonwebtoken')
const expressJWT=require('express-jwt')

// 解析POST表单数据的中间件
const bodyParser=require('body-parser');
// 解析POST提交过来的表单数据
app.use(bodyParser.urlencoded({extended:false}));

const secretKey='itheima No1 ^_^';

// 在登录成功之后，调用 jwt.sign() 方法生成JWT字符串
// 参数1：用户的信息对象
// 参数2：加密的密钥
// 参数3：配置对象，可以配置当前的token的有效期
const tokenStr= jwt.sign({username:username},secretKey,{expiresIn:'30s'});
res.send({
    status:200,
    message:,
    token:tokenStr
})
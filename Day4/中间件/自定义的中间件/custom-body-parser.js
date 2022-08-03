// 导入Node.js内置的querystring模块
const qs=require('querystring');

const bodyparse=(req,res,next)=>{
    // 定义中间件具体的业务逻辑
    // 1.定义一个str字符串,专门用来存储客户端发送过来的请求数据；
    let str='';
    // 2.监听req的data事件,如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器。
    // 所以data事件会触发多次，需要手动进行拼接
    req.on('data',(chuck)=>{
        str+=chuck;
    })

    //3. 监听req的end事件
    req.on('end',()=>{
        // console.log(str);
        const body =qs.parse(str);
        console.log(body);
        req.body=body;
        next();
    })
}

module.exports=bodyparse;
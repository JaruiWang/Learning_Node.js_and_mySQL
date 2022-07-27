// 1. 导入http模块
const http=require('http');
// 2. 创建web服务器实例
const server=http.createServer();
// 3. 为服务器实例绑定request事件，监听客户端的请求；
server.on('request',(req,res) =>{
    //req.url是客户端请求的URL地址
    const url=req.url;
 
    // 2.设置默认的响应内容为 404 Not found
    let content='<h2>404 Not found</h2>';
    if(url=='/' || url=='/index.html'){
        content='<h2>这是主页内容</h2>';
    }else if(url=='/about.html'){
        content='<h2>这是关于介绍的内容</h2>';
    }

    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(content);
})
// 4. 启动服务器。
server.listen(8080,() =>{
    console.log('server running at http://127.0.0.1:8080')
})

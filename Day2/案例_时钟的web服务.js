// 1. 导入http,fs,path模块
const http=require('http');
const fs=require('fs');
const path=require('path')
// 2. 创建web服务器实例
const server=http.createServer();
// 3. 为服务器实例绑定request事件，监听客户端的请求；
server.on('request',(req,res) =>{
    //req.url是客户端请求的URL地址
    const url=req.url;
    let path_con='';

    if(url=='/'){
        path_con=path.join(__dirname,'./clock/index.html');
    } else{
        path_con=path.join(__dirname,'./clock',url);
    }
    
    // console.log(path_con);
    fs.readFile(path_con,'utf8',function(err,dataStr){
        if(err){
            return res.end('<h2>404 Not found</h2>');
        }
        res.end(dataStr)
    })
   
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // res.end(path_con);
})
// 4. 启动服务器
server.listen(80,() =>{
    console.log('server running at http://127.0.0.1:80')
})

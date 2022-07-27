// 1.导入 fs 模块，来操作文件
const fs=require('fs')

// 2.调用fs.readFile()方法读取文件

fs.readFile('./files/1.txt','utf8',function(err11,dataStr12){
    //2.1打印失败的结果
    // 如果读取成功，则err的值是null
    console.log(err11);
    console.log("-----------");
    //2.2打印成功的结果
    console.log(dataStr12);
    // err 和dataStr可以自己命名
})
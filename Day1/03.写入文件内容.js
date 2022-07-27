// 1.导入 fs 模块，来操作文件
const fs=require('fs')

// 调用fs.writeFile()方法，写入文件的内容
//  参数1：表示文件的存放路径
//  参数2：表示要写入的内容
//   参数3：回调函数
fs.writeFile('./files/2.txt','abcde',function(err){
    //2.1 如果文件写入成功，则err的值等于null
    // console.log(err.message);
    if(err){
        return console.log("文件写入失败 "+err.message);
    }
    console.log("文件写入成功 ");
})
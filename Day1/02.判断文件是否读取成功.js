// 1.导入 fs 模块，来操作文件
const fs=require('fs')

// 2.调用fs.readFile()方法读取文件

// fs.readFile('./files/1.txt','utf8',function(err,dataStr){
// fs.readFile('E:\\前端学习笔记\\Learning_Node.js\\Day1\\files\\1.txt','utf8',function(err,dataStr){
//     if(err){
//         return console.log("读取文件失败 "+err.message);
//     }
//     console.log("读取文件成功 "+dataStr)
// })

// __dirname 表示当前文件所处的目录
console.log(__dirname)
fs.readFile(__dirname+'\\files\\1.txt','utf8',function(err,dataStr){
    if(err){
        return console.log("读取文件失败 "+err.message);
    }
    console.log("读取文件成功 "+dataStr)
})
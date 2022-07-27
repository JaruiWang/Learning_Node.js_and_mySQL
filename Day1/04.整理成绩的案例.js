// 1.导入 fs 模块，来操作文件
const fs=require('fs')

// 2.调用fs.readFile()方法读取文件
fs.readFile('./files/成绩.txt','utf8',function(err,dataStr){
    if(err){
        return console.log("读取文件失败 "+err.message);
    }
    console.log("读取文件成功 "+dataStr)
    var arr=dataStr.split(' ');
    console.log(arr);

    var write_str='';

    for(var i = 0; i < arr.length; i++){
        var arr_sub=arr[i].split('=');
        write_str=write_str+arr_sub[0]+':'+arr_sub[1]+'\r\n';
     }
     console.log(write_str);


     fs.writeFile('./files/成绩_ok.txt',write_str,function(err){
        if(err){
            return console.log("文件写入失败 "+err.message);
        }
        console.log("文件写入成功 ");
    })
})
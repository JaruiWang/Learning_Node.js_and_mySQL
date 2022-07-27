const path=require('path')
const fpath='./a/b/c/index.html'  //文件的存放路径
var fullName=path.basename(fpath);
console.log(fullName);
//输出 index.html

var nameWithoutExt=path.basename(fpath,'.html');
console.log(nameWithoutExt);
// 输出index

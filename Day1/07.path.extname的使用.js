const path=require('path')
const fpath='./a/b/c/index.html'  //文件的存放路径
var fext=path.extname(fpath);
console.log(fext);
// 输出 .html


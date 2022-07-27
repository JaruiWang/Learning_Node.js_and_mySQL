const path=require('path')

// 注意： ../会抵消前面的路径
//    字符串里面的路径：\\和/是等效的
const pathStr=path.join('\\a','\\b\\c','../../','./d','e','f');
console.log(pathStr);
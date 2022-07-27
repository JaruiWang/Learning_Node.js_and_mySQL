// 1.1 导入 fs模块
const fs=require('fs')
const path=require('path')

// 定义正则表达式,分别匹配<style></style>和 <script></script>标签
const regStyle=/<style>[\s\S]*<\/style>/;
const regScript=/<script>[\s\S]*<\/script>/;

// 2.1 调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname,'./index.html'),'utf8',function(err,dataStr){
    if(err)  return console.log("读取HTML文件失败 "+err.message);
    // 读取文件成功后,调用对应的三个方法,分别拆解出css,js,html文件.
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
})

// 3.1 定义处理css样式的方法
function resolveCSS(htmlStr){
// 3.2使用正则提取需要的内容
    const r1=regStyle.exec(htmlStr);
    // console.log(r1);
    const newCSS=r1[0].replace('<style>','').replace('</style>','');
    console.log(newCSS);
    // 调用fs.writeFile()方法,将提取的样式,写入到clock目录中.
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
        if(err)  return console.log("写入css样式失败了"+err.message);
        console.log("写入样式文件成功!");
    })
}

// 4.1 定义处理JavaScript文件的方法
function resolveJS(htmlStr){
    // 4.2使用正则提取需要的内容
        const r2=regScript.exec(htmlStr);
        // console.log(r2);
        const newJS=r2[0].replace('<script>','').replace('</script>','');
        console.log(newJS);
        // 调用fs.writeFile()方法,将提取的样式,写入到clock目录中.
        fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
            if(err)  return console.log("写入JavaScript文件失败了"+err.message);
            console.log("写入JavaScript文件成功!");
        })
    }


    // 5. 定义处理html文件
function resolveHTML(htmlStr){
    // 5.1 使用字符串的replace方法,把内嵌的<style>和<script>标签,替换为外联的<link>和<script>标签
    const newHTML=htmlStr.replace(regStyle,'<link rel="stylesheet" href="./clock/index.css">').replace(regScript,' <script src="./clock/index.js"></script>')

    console.log(newHTML);
    //5.2 将替换完成之后的html代码,写入到index.html文件中.
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err)  return console.log("写入html文件失败了"+err.message);
        console.log("写入html文件成功!");
    })
}
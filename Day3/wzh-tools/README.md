## 安装
```
npm install wzh-tools
```

## 导入
```js
const wzhtool=require('./wzh-tools')
```

## 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
const dtStr=wzhtool.dateFormat(new Date())
// 结果 2022-07-26 19:09:22
console.log(dtStr);
```

## 转义HTML中的特殊字符
```js
// 带转换的HTML字符串，调用htmlEscape方法进行转换
const str02=wzhtool.htmlEscape('<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>');
// 转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str02);
```

## 还原HTML中的特殊字符
```js
// 待还原的字符串
const un_str02=wzhtool.htmlUnEscape('&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;');
// 转换的结果<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(un_str02);
```

## 开源协议
ISC
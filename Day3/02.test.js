const wzhtool=require('./wzh-tools')

//格式化时间的功能
const dtStr=wzhtool.dateFormat(new Date())
console.log(dtStr);

// 带转换的HTML字符串，调用htmlEscape方法进行转换
const str02=wzhtool.htmlEscape('<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>');
console.log(str02);

// 还原HTML中的特殊字符
const un_str02=wzhtool.htmlUnEscape('&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;');
console.log(un_str02);
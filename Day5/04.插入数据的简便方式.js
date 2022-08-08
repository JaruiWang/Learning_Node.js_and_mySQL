// 1.导入mysql模块
const mysql=require('mysql');

// 2. 建立与MySQL 数据库的连接关系
const db=mysql.createPool({
    host:'127.0.0.1',     // 数据库的IP地址
    user:'root',         // 登录数据库的账号
    password:'admin123',  // 登录数据库的密码
    database:'new_db_01'  //指定要操作哪个数据库
})

// 待执行的SQL语句，其中英文的?表示占位符
const sqlStr='insert into users set ?';

// 向users表中插入的数据
const user={username:'Spider-Man2',password:'pcc654321'};
// 执行SQL语句
db.query(sqlStr,user,(err,results)=>{
    // mysql 模块工作期间报错了
    if(err) return console.log(err.message)

    // 能够成功的执行SQL语句
    // 注意：如果执行的是insert into插入语句，则result是一个对象
    // 可以通过 results.affectedRows属性，来判断是否插入数据成功
    if(results.affectedRows==1){
        console.log('插入数据成功');
    }
    
})
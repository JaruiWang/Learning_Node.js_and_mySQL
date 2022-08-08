// 1.导入mysql模块
const mysql=require('mysql');

// 2. 建立与MySQL 数据库的连接关系
const db=mysql.createPool({
    host:'127.0.0.1',     // 数据库的IP地址
    user:'root',         // 登录数据库的账号
    password:'admin123',  // 登录数据库的密码
    database:'new_db_01'  //指定要操作哪个数据库
})



// 定义SQL语句
const sqlStr='delete from users where id=?'

// 执行SQL语句中如果有多个占位符，则必须使用数组为每个占位符指定具体的值；
// 如果SQL语句只要一个占位符，则可以省略数组，直接写一个值。
// SQL
db.query(sqlStr,6,(err,results)=>{
    // mysql 模块工作期间报错了
    if(err) return console.log(err.message)

    // 能够成功的执行SQL语句
    // 注意：如果执行的是delete语句，则result是一个对象
    // 可以通过 results.affectedRows属性，来判断是否更新数据成功
    if(results.affectedRows==1){
        console.log('删除数据成功');
    }
    
})
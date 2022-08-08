// 1.导入mysql模块
const mysql=require('mysql');

// 2. 建立与MySQL 数据库的连接关系
const db=mysql.createPool({
    host:'127.0.0.1',     // 数据库的IP地址
    user:'root',         // 登录数据库的账号
    password:'admin123',  // 登录数据库的密码
    database:'new_db_01'  //指定要操作哪个数据库
})

// 查询users表中的所有数据
const sqlStr='insert into users(username,password) values (?,?)'

// 向users表中，新增一条数据，其中username的值为Spider-Man，password的值为pcc123.
const user={username:'Spider-Man',password:'pcc123'}
// 执行SQL语句
db.query(sqlStr,[user.username,user.password],(err,results)=>{
    // mysql 模块工作期间报错了
    if(err) return console.log(err.message)

    // 能够成功的执行SQL语句
    // 注意：如果执行的是insert into插入语句，则result是一个对象
    // 可以通过 results.affectedRows属性，来判断是否插入数据成功
    if(results.affectedRows==1){
        console.log('插入数据成功');
    }
    
})
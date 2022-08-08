-- SELECT * FROM new_db_01.users;
-- SELECT username,password FROM new_db_01.users;

-- 向users表中，插入新数据
-- insert into users(username,password) values ('tony','098123')
-- SELECT * FROM new_db_01.users;
-- update users set password='123456',status=1 where id=1
-- DELETE FROM users where id=3

-- 查询status为1的所有用户
-- SELECT * FROM users where status=1

-- 查询id 大于2的所有用户
-- SELECT * FROM users where id>2

-- 查询username 不等于admin的所用用户
-- 查询status为1的所有用户
-- SELECT * FROM users where status=1

-- 查询id 大于2的所有用户
-- SELECT * FROM users where id>2

-- 查询username 不等于admin的所用用户
-- SELECT * FROM users where username <> "tony"
-- SELECT * FROM users where username != "tony"

 -- SELECT * FROM users
-- SELECT * FROM users where status=0 and id<3
-- SELECT * FROM users where status=1 or id>3

-- SELECT * FROM users order by status 
-- SELECT * FROM users order by status asc,id desc

-- 使用as关键字 给列起别名
-- select count(*) as total12 from users where status=0
select username as uname,password as upwd FROM users
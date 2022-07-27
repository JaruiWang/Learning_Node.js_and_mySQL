// 在一个自定义模块中，默认情况下，module.exports={}

//向module.exports对象上挂载username属性
module.exports.username='zs';

//向module.exports对象上挂载sayHello()方法
module.exports.sayHello=function(){
    console.log('Hello ');
}

const age=20;

// module.exports.age=age;
exports.age=age;
// 让module.exports 指向新的对象
// module.exports={
//     nickname:'小黑',
//     sayHi(){
//         console.log('hi!');
//     }
// }
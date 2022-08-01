// 原型模式

// 原型模式不仅是一种模式，还是一种编程范式
// 是 js 面向对象系统实现的根基

// 类语法
// 类语法是js中原型继承的语法糖，并不会真正为js带来面向对象的继承模型
class Dog{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log('eat----');
    }
}
// 等价于下面代码
function FDog(name, age){
    this.name = name;
    this.age = age;
}
FDog.prototype.eat = function(){
    console.log('eat----');
}

// 在js中谈原型模式是没有意义的
// 原型模式的出现是为了解决在强类型语言的类型解耦，但是js是弱类型语言，不存在类型解耦的问题

// 在js写原型模式就是在写原型编程范式
// 核心思想：利用实例来描述对象，用实例作为定义对象和继承的基础
// 体现：基于原型链继承，js就是最好的例证

// 真正去理解原型模式就是去理解js的原型、原型链等基础
// 根据理解结合深拷贝去实现一个不断完善的方法
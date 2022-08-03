// ES7 的装饰器
// 在 ES7 中，我们可以像写 python 一样通过一个@语法糖轻松地给一个类装上装饰器

// 以下代码直接放进浏览器/Node 中运行会报错
// 因为浏览器和 Node 目前都不支持装饰器语法，需要安装 Babel 进行转码

// 装饰器函数，目标对象是一个类
function classDecorator(target){
    target.hasDecorator = true;
    return target;
}

// 将装饰器安装到类上
@classDecorator
class Button{
    constructor(){

    }
}

console.log('Button是否安装装饰器', Button.hasDecorator); // true


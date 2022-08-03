// 也可以使用语法糖写法
function funcDecorator(target, name, descriptor){
    let originalMethod = descriptor.value
    descriptor.value = function() {
        console.log('我是Func的装饰器逻辑')
        return originalMethod.apply(this, arguments)
    }
    return descriptor
}

class Button{

    // 此处装饰的是 onClick 方法，装饰器出现在谁上面，装饰的就是谁
    @funcDecorator
    onClick(){
        console.log('onClick----');
    }
    demo(){
        console.log('demo----');
    }
}

let btn = new Button();
btn.onClick()
btn.demo()
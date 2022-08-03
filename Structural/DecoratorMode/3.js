// 解析背后原理

function classDecorator(target) {
    target.hasDecorator = true;

    // target 就是被装饰的对象
    return target;
}

// 将装饰器“安装”到Button类上，此时装饰器对象是Button类
@classDecorator
class Button {
    // Button类的相关逻辑
}

// 而当我们给一个方法添加装饰器时：
// 装饰的就是对应的方法
// 此处的 target 变成了Button.prototype，即类的原型对象
function funcDecorator(target, name, descriptor) {
    // name 就是目标属性名
    // 重点是descriptor，原名叫属性描述对象
    // 属性描述对象包含两部分
    // 数据描述符和存取描述符
    // 数据描述符包含value，writable、enumerable等，存取描述符包含该属性的get和set方法
    // 拿到了 descriptor，就相当于拿到了目标方法的控制权。通过修改 descriptor，我们就可以对目标方法的逻辑进行拓展了

    // 获取原函数方法
    let originalMethod = descriptor.value
    descriptor.value = function() {
        console.log('我是Func的装饰器逻辑');
        
        // 将原函数方法推迟到后面在执行
        return originalMethod.apply(this, arguments);
    }
    return descriptor
}

class Button {
    @funcDecorator
    onClick() { 
        console.log('我是Func的原有逻辑')
    }
}   
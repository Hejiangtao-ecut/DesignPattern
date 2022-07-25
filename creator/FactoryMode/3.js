// 抽象工厂模式
// 上面只是探讨存在少量构造器和单个工厂的情况
// 抽象工厂模式将探讨当存在多个工厂的时候怎样去进行化繁为简
// 开放封闭原则的内容：对拓展开放，对修改封闭。
// 说得更准确点，软件实体（类、模块、函数）可以扩展，但是不可修改。

// 抽象工厂约定基本组成，形成基底
class MobilePhoneFactory{
    // 提供接口，但是不提供直接实现，进行约束
    createOS(){
        throw new Error('抽象工厂方法不允许直接调用，需要在子类重写');
    }
    createHardWare(){
        throw new Error('抽象工厂方法不允许直接调用，需要在子类重写');
    }
}

// 禁止直接调用抽象工厂方法，他只是一个约束
// console.log(new MobilePhoneFactory().createHardWare());

// 具体工厂集成自抽象工厂，化抽象为具体
class VivoFactory extends MobilePhoneFactory{
    // 重载接口提供具体方法
    // 在接口中调用构造函数实现功能
    createOS(){
        // 提供系统示例
        return new AndroidOS();
    }
    createHardWare() {
        // 提供硬件实例
        return new QualcommHardWare()
    }
}

// 抽象产品类
// 用于约定产品类的内容
class OS{
    // 约定组成
    constructorOS(){
        throw new Error('抽象产品方法不允许直接调用，需要在子类重写');
    }
}

// 具体产品类
// 实现组成内容的功能
class AndroidOS extends OS{
    constructorOS(){
        console.log('提供安卓系统');
    }
}

class IOS extends OS{
    constructorOS(){
        console.log('提供IOS系统');
    }
}

// 硬件类和软件类同理
// 定义手机硬件这类产品的抽象产品类
class HardWare {
    // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
    operateByOrder() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}

// 定义具体硬件的具体产品类
class QualcommHardWare extends HardWare {
    operateByOrder() {
        console.log('我会用高通的方式去运转')
    }
}

class MiWare extends HardWare {
    operateByOrder() {
        console.log('我会用小米的方式去运转')
    }
}


// 产生真正实例
// 接受约束，实现产品
const Vivo = new VivoFactory();

// 产生内部功能
const myOS = Vivo.createOS();
// 启动功能
myOS.constructorOS();


// 后续增加新手机，避免了修改抽象工厂和抽象产品，只需要添加他们的子类即可
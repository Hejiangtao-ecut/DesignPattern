// 简单工厂模式

// 工厂模式是去抽象不同构造器的变与不变

// 场景：多个用户，除了基本属性外，不同职位有不同的职责

// bad
// 扩展性低，每增加一个职位，就要添加一个构造器
function Coder(name , age) {
    this.name = name
    this.age = age
    this.career = 'coder' 
    this.work = ['写代码','写系分', '修Bug']
}
function ProductManager(name, age) {
    this.name = name 
    this.age = age
    this.career = 'product manager'
    this.work = ['订会议室', '写PRD', '催更']
}

// good
// 拆分思路：基本属性不变，变得只有职位引起的职责变化
// 解决思路：不变的用构造器创建，变化的用工厂模式进行区分

// 封装不变
function User(name, age, job, work){
    this.name = name;
    this.age = age;
    this.job = job;
    this.work = work;
}

// 区分变化
function Factory(name, age, job){
    // 策略模式进行优化
    const work = {
        'boss': ['喝茶', '看报纸'],
        'coder': ['coding', 'bug', 'bug'],
        'testor': ['bug', 'bug', 'bug']
    };
    return new User(name, age, job, work[job]);
}

console.log(new Factory('boss', 40, 'boss'));
console.log(new Factory('coder', 40, 'coder'));
console.log(new Factory('testor', 40, 'testor'));

// 简单工厂模式的简单之处，在于它的概念相对好理解：将创建对象的过程单独封装，这样的操作就是工厂模式。
// 同时它的应用场景也非常容易识别：有构造函数的地方，我们就应该想到简单工厂；
// 在写了大量构造函数、调用了大量的 new、自觉非常不爽的情况下，
// 我们就应该思考是不是可以掏出工厂模式重构我们的代码了。
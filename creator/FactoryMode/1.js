// 构造器模式
// 构造器模式本质上是去抽象了每个对象实例属性的变与不变
// 通过构造器快速创建新对象，这是工厂模式的原型

// 场景：存在多个用户，去创建不同人的对象实例

// good case
function User(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

// 像 User 这样当新建对象的内存被分配后，用来初始化该对象的特殊函数，就叫做构造器。
// 在 JavaScript 中，我们使用构造函数去初始化对象，就是应用了构造器模式。
console.log(new User('A', 23, 'man'));
console.log(new User('B', 20, 'man'));
console.log(new User('C', 20, 'man'));

// bad case
const A = {
    name: 'A',
    age: 23,
    sex: 'man'
};
const B = {
    name: 'B',
    age: 23,
    sex: 'man'
};
const C = {
    name: 'C',
    age: 23,
    sex: 'man'
}
// ,,,,,,
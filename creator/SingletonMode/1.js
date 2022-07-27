// 单例模式
// 保证一个类仅有一个实例对象

// 普通类
class Normal{
    show(){
        console.log('normal class');
    }
}

// 重复创建实例，两个实例相互独立
const n1 = new Normal();
const n2 = new Normal();
console.log(n1 === n2); // false

// 单例模式预期
// 不管我们尝试去创建多少次，它都只给你返回第一次所创建的那唯一的一个实例。
class Single{
    static instance = null;
    show(){
        console.log('show-----');
    }
    static getInstance(){
        if(!Single.instance){
            Single.instance = new Single();
        }
        return Single.instance;
    }
}

// 重复创建实例，两个实例指向同一个对象
const s1 = Single.getInstance();
const s2 = Single.getInstance();
console.log(s1 === s2); // true


// 闭包实现单例模式
Single.funcGetSingle= (function(){
    // 使用变量记录实例
    return function(){
        if(!Single.instance){
            Single.instance = new Single();
        }
        return Single.instance;
    }
})()

const s3 = Single.funcGetSingle();
const s4 = Single.funcGetSingle();
console.log(s1 === s4);

// 单例模式在第三方状态管理的拓展
// 主流框架的第三方状态管理背后都是单例模式的实现
// 确保全局只有一个状态管理实例，避免数据产生冲突
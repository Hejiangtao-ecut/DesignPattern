// 拓展进阶


// 1
// 实现Storage，使得该对象为单例，基于 localStorage 进行封装。
// 实现方法 setItem(key,value) 和 getItem(key)。

class Storage{
    static instance = null;
    static getStorage(){
        if(!this.instance){
            this.instance = new Storage()
        }
        return this.instance;
    }
    getItem(key){
        return localStorage.getItem(key)
    }
    setItem(key, val){
        localStorage.setItem(key, val);
    }
}

const ls1 = Storage.getStorage();
const ls2 = Storage.getStorage();
console.log(ls1 === ls2); // true


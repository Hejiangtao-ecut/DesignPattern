// 创建发布者和订阅者，后续业务可以就基于这两者进行拓展

// 创建发布者
export class Publisher{
    constructor(){
        this.observers = [];
        console.log('observers created!');
    }

    // 增加订阅者
    add(observer){
        console.log('Publisher.add invoked');
        this.observers.push(observer);
    }

    // 移除监听者
    remove(observer){
        console.log('Publisher.remove invoked');
        this.observers.forEach((item, i) => {
            if(item === observer){
                this.observers.splice(i, 1);
            }
        })
    }

    // 通知所有订阅者
    notify(){
        console.log('Publisher.notify invoked');
        this.observers.forEach((item)=>{
            item.update(this);
        })
    }
}

// 定义订阅者
export class Observer{
    constructor(){
        console.log('Observer created')
    }

    update(){
        console.log('Observer.update invoked')
    }
}
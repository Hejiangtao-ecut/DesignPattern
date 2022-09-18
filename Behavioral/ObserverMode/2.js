import {Publisher, Observer} from './1.js';

// 业务代码，监听一个状态，然后触发改变
class PrdPublisher extends Publisher{
    constructor(){
        super();

        // 初始化状态
        this.prdState = null;
        this.observers = [];
        console.log('PrdPublisher created')
    }

    // 获取状态
    getState(){
        console.log('PrdPublisher.getState invoked')
        return this.prdState
    }

    // 该方法用于改变prdState的值
    setState(state) {
        console.log('PrdPublisher.setState invoked')
        // prd的值发生改变
        this.prdState = state
        // 需求文档变更，立刻通知所有开发者
        this.notify()
    }
}

class DevObserver extends Observer {
    constructor(){
        super();

        // 初始化状态
        this.prdState = {}
        console.log('DeveloperObserver created')
    }

    // 重写一个具体的update方法
    update(publisher) {
        console.log('DeveloperObserver.update invoked')
        // 更新需求文档
        this.prdState = publisher.getState()
        // 调用工作函数
        this.work()
    }

    // work方法，一个专门搬砖的方法
    work() {
        // 获取需求文档
        const prd = this.prdState
        // 开始基于需求文档提供的信息搬砖。。。
        console.log('996 begins...')
    }
}

// 需求方
const PM = new PrdPublisher();

// 确认开发人员
const FE = new DevObserver();
const RD = new DevObserver();
const QA = new DevObserver();

// 拉人
PM.add(FE);
PM.add(RD);
PM.add(QA);

const prd = {
    A: 'A'
};

PM.setState(prd);
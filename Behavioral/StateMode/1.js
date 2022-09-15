// 模拟实现咖啡机的4种口味制作

class CoffeeMaker {
    constructor(state){
        // 初始化，没有没人状态
        this.state = 'init';
    }

    // bad case
    // if else
    changeState(state){
        // 记录状态
        this.state = state;
        if(state === 'mode1'){
            console.log('mode1');
        }
        else if(state === 'mode2'){
            console.log('mode2');
        }
        else if(state === 'mode3'){
            console.log('mode3');
        }
        else if(state === 'mode4'){
            console.log('mode4');
        }
    }
}

const coffer = new CoffeeMaker();
coffer.changeState('mode1'); // mode1
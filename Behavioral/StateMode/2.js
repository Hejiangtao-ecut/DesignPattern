class CoffeeMaker {
    constructor() {
        // 初始状态，咖啡、牛奶各200ml
        this.state = 'init';
        this.milk = 200;
        this.coffee = 200;
    }

    changeState(state) {
        this.state = state;
        if (!this.stateToProcessor[state]) {
            console.error("no mode!!!!");
            return;
        }
        this.stateToProcessor[state]();
    }

    stateToProcessor = {
        that: this,
        mode1() {
            if (this.that.milk - 100 < 0) {
                console.error('not enough milk!')
                return;
            }
            this.that.milk -= 100;
            console.log('coffee 1');
        },
        mode2() {
            if (this.that.coffee - 100 < 0) {
                console('not enough coffee!')
                return;
            }
            this.that.coffee -= 100;
            console.log('coffee 2');
        }
    }

}

const Coffee = new CoffeeMaker();
Coffee.changeState('mode1')
Coffee.changeState('mode1')
Coffee.changeState('mode1')

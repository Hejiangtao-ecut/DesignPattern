'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

// 也可以使用语法糖写法
function funcDecorator(target, name, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        console.log('我是Func的装饰器逻辑');
        return originalMethod.apply(this, arguments);
    };
    return descriptor;
}

var Button = (_class = function () {
    function Button() {
        _classCallCheck(this, Button);
    }

    _createClass(Button, [{
        key: 'onClick',
        value: function onClick() {
            console.log('onClick----');
        }
    }, {
        key: 'demo',
        value: function demo() {
            console.log('demo----');
        }
    }]);

    return Button;
}(), (_applyDecoratedDescriptor(_class.prototype, 'onClick', [funcDecorator], Object.getOwnPropertyDescriptor(_class.prototype, 'onClick'), _class.prototype)), _class);


var btn = new Button();
btn.onClick();
btn.demo();

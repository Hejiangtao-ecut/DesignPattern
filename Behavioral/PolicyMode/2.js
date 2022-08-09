// 在外层，我们编写一个 newUser 函数用于处理新人价逻辑；
// 在 askPrice 里面，我们新增了一个 if-else 判断。
// 可以看出，这样其实还是在修改 askPrice 的函数体，
// 没有实现“对扩展开放，对修改封闭”的效果。

// 咱们完全可以把询价算法全都收敛到一个对象里去嘛


// 定义一个询价处理器对象
const priceProcessor = {
    pre(originPrice) {
        if (originPrice >= 100) {
            return originPrice - 20;
        }
        return originPrice * 0.9;
    },
    onSale(originPrice) {
        if (originPrice >= 100) {
            return originPrice - 30;
        }
        return originPrice * 0.8;
    },
    back(originPrice) {
        if (originPrice >= 200) {
            return originPrice - 50;
        }
        return originPrice;
    },
    fresh(originPrice) {
        return originPrice * 0.5;
    },
};

// 当我们想使用其中某个询价算法的时候：通过标签名去定位就好了：
// 询价函数
function askPrice(tag, originPrice) {
    return priceProcessor[tag](originPrice)
}
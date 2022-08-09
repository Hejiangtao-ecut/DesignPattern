// 缓存代理

// addAll方法会对你传入的所有参数做求和操作
const addAll = function(){
    console.log('一次计算----');
    let result = 0;
    const lenth = arguments.length;
    for(let i = 0; i < lenth; i++){
        result += arguments[i];
    }
    return result;
}

// 为求和方法创建代理
const proxyAddAll = (function(){
    // 求和结果缓存池
    const resultCatch = {};

    return function(){
        // 将入参转化为一个唯一的入参字符串
        const args = Array.prototype.join.call(arguments, ',');

        // 检查是否存在入参对应的计算结果
        if(args in resultCatch){
            console.log(`存在${args}对应结果`);
            return resultCatch[args];
        }

        return resultCatch[args] = addAll(...arguments)
    }
})();

proxyAddAll(1,2,3);
proxyAddAll(1,2,4);
proxyAddAll(1,2,3);
proxyAddAll(1,2,4);
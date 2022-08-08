// 在 ES6 中，提供了专门以代理角色出现的代理器 —— Proxy

// 基本用法
// 第一个参数是我们的目标对象，handler 也是一个对象，用来定义代理的行为
// 当我们通过 proxy 去访问目标对象的时候，handler会对我们的行为作一层拦截，
// 我们的每次访问都需要经过 handler 这个第三方。
// const proxy  = new Proxy(obj, handler);

const user = {
    name: 'jimao',
    age: 23,
    phone: 123456,
    isValidated: true,
    isVIP: false
}

// 基本信息
const baseInfo = ['name', 'age'];
// 私密信息
const privateInfo = ['phone'];

const getInfo = new Proxy(user, {
    // 在访问器进行操作
    get:function(user, key){
        if(baseInfo.indexOf(key) !== -1 && user.isValidated){
            console.log(user[key]);
            return;
        }

        if(privateInfo.includes(key) && !user.isVIP){
            console.log('errror!  --vip info');
            return;
        }
    },

    set:function(user, key, val){
        if(baseInfo.indexOf(key) !== -1 && user.isValidated){
            console.log(user[key]);
            user[key] = val;
            return;
        }

        if(privateInfo.includes(key) && !user.isVIP){
            console.log('errror!  --vip can change');
            return;
        }
    }
})

// get
getInfo.name;
getInfo.phone;

// set
getInfo.name = 'jianghe';
getInfo.phone = 23467;
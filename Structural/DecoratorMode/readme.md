# 装饰器模式
又名装饰者模式

定义：在不改变原对象的基础上，通过对其进行包装拓展，使原有对象可以满足用户的更复杂需求

## 单一职责原则
单个函数只做一件事，将不同的职责分离，可以做到每个职责都能被灵活地复用；同时，不同职责之间无法相互干扰，不会出现因为修改了 A 逻辑而影响了 B 逻辑的狗血剧情。

在日常开发中，当遇到两段各司其职的代码逻辑时，我们首先要有“尝试拆分”的敏感，其次要有“该不该拆”的判断——当逻辑粒度过小时，盲目拆分会导致你的项目里存在过多的零碎的小方法，这反而不会使我们的代码变得更好。

### 业务场景1

按钮是我们平时写业务时常见的页面元素。假设我们的初始需求是：每个业务中的按钮在点击后都弹出「您还未登录哦」的弹框。

忽然有一天，产品经理找到你，说这个弹框提示还不够明显，我们应该在弹框被关闭后把按钮的文案改为“快去登录”，同时把按钮置灰。

后续又有不断新的按钮功能要在这里添加

#### 暴力解法
看1.html

#### 进阶写法
看2.html

需要特别关注一下 ES6 这个版本的实现，这里我们把按钮实例传给了 Decorator，以便于后续 Decorator 可以对它为所欲为进行逻辑的拓展。在 ES7 中，Decorator 作为一种语法被直接支持了，它的书写会变得更加简单，但背后的原理其实与此大同小异。

### 装饰器实践

装饰器在前端应用非常广泛，比如react的HOC就是典型的装饰器

HOC在react应用非常广泛，通过HOC，我们可以充分复用现有逻辑，提高编码效率和代码的健壮性。

我们现在编写一个高阶组件，它的作用是把传入的组件丢进一个有红色边框的容器里（拓展其样式）。

```js
import React, { Component } from 'react'

const BorderHoc = WrappedComponent => class extends Component {
  render() {
    return <div style={{ border: 'solid 1px red' }}>
      <WrappedComponent />
    </div>
  }
}
export default borderHoc
```

用它来装饰目标组件

```js
import React, { Component } from 'react'
import BorderHoc from './BorderHoc'

// 用BorderHoc装饰目标组件
@BorderHoc 
class TargetComponent extends React.Component {
  render() {
    // 目标组件具体的业务逻辑
  }
}

// export出去的其实是一个被包裹后的组件
export default TargetComponent
```

可以看出，高阶组件从实现层面来看其实就是上文我们提到的类装饰器。在高阶组件的辅助下，我们不必因为一个小小的拓展而大费周折地编写新组件或者把一个新逻辑重写 N 多次，只需要轻轻 @ 一下装饰器即可。

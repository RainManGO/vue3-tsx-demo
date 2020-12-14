
博客地址：[TSX 在Vue项目的使用](https://zhangyu.blog.csdn.net/article/details/111041628)
> JSX是一种嵌入式的类似XML的语法。 它可以被转换成合法的JavaScript，尽管转换的语义是依据不同的实现而定的。 JSX因React框架而流行，但也存在其它的实现。 TypeScript支持内嵌，类型检查以及将JSX直接编译为JavaScript。

## 本文涉及知识
---
 1. SFC
 2. 虚拟dom
 3. render 相关函数
 

&nbsp;
## 思考
---

问：SFC和JSX 优劣势，Vue模板语法快捷方便为什么还要学JSX?

答： 我的理解SFC更侧重Html语法，就像画一幅画，使用标签画好结构，再将数据使用js进行填充，这样js的灵活性就难以发挥。JSX侧重于JS语法，没有条条框框的架子，可以在白色画布灵活自由的画画。

有点类似于Vue3的 composation API和opitions API的关系。

| SFC | JSX |
|--|--|
| 简单、迅速 、高效| 灵活、对于复杂组件组合高效 |

&nbsp;
## Vue模板语法是怎么渲染的呢？
---

下面是Vue的模板：

```html

<div>
  <div>
    <span>static</span>
    <p>{{msg}}</p>
  </div>
  <span>static</span>
  <span>static</span>
</div>

```

查看模板编译工具：[传送门](https://vue-next-template-explorer.netlify.app/#%7B%22src%22:%22%3Cdiv%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cspan%3Estatic%3C/span%3E%5Cn%20%20%20%20%3Cp%3E%7B%7Bmsg%7D%7D%3C/p%3E%5Cn%20%20%3C/div%3E%5Cn%20%20%3Cspan%3Estatic%3C/span%3E%5Cn%20%20%3Cspan%3Estatic%3C/span%3E%5Cn%5Cn%3C/div%3E%22,%22options%22:%7B%22mode%22:%22module%22,%22prefixIdentifiers%22:false,%22optimizeImports%22:false,%22hoistStatic%22:false,%22cacheHandlers%22:false,%22scopeId%22:null,%22inline%22:false,%22ssrCssVars%22:%22%7B%20color%20%7D%22,%22bindingMetadata%22:%7B%22TestComponent%22:%22setup-const%22,%22setupRef%22:%22setup-ref%22,%22setupConst%22:%22setup-const%22,%22setupLet%22:%22setup-let%22,%22setupMaybeRef%22:%22setup-maybe-ref%22,%22setupProp%22:%22props%22,%22vMySetupDir%22:%22setup-const%22%7D%7D%7D)
Vue会将模板处理成下面的代码：

```javascript

import { createVNode as _createVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock("div", null, [
    _createVNode("div", null, [
      _createVNode("span", null, "static"),
      _createVNode("p", null, _toDisplayString(_ctx.msg), 1 /* TEXT */)
    ]),
    _createVNode("span", null, "static"),
    _createVNode("span", null, "static")
  ]))
}

// Check the console for the AST

```

从上面的例子可以看出模板语法会变成虚拟DOM，然后通过render函数渲染。

&nbsp;
##  如何在项目中使用JSX

> 项目是Vue3.0 + TS

想要使用JSX必须做两件事：

 1. 给文件一个.tsx扩展名 
 2. 启用jsx选项

TypeScript具有三种JSX模式：preserve，react和react-native。 这些模式只在代码生成阶段起作用 - 类型检查并不受影响。 在preserve模式下生成代码中会保留JSX以供后续的转换操作使用（比如：Babel）。 另外，输出文件会带有.jsx扩展名。 react模式会生成React.createElement，在使用前不需要再进行转换操作了，输出文件的扩展名为.js。 react-native相当于preserve，它也保留了所有的JSX，但是输出文件的扩展名是.js。


![在这里插入图片描述](https://img-blog.csdnimg.cn/20201212143124547.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1pZX0ZseVdheQ==,size_16,color_FFFFFF,t_70)

tsconfig 默认    "jsx": "preserve",

```bash
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",
    "types": [
      "webpack-env",
      "jest"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

**JSX也是通过babel 进行编译成js,最后变成虚拟DOM进行渲染。**


&nbsp;
## 路由添加一个TSX组件


1、创建一个组件：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201212144156199.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1pZX0ZseVdheQ==,size_16,color_FFFFFF,t_70)

```js
import { defineComponent } from 'vue'
export default defineComponent({
  render () {
    return <div>
            my custom router
    </div>
  }
})

```


2、在Router里引用添加

```js
/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-11 15:27:32
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-12 14:38:31
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test'
import MyRouter from '../views/MyRouter'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/myRouter',
    name: 'MyRouter',
    component: MyRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

```

运行下应该可以看到效果了。


&nbsp;
##  渲染函数

> Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器。

通过例子实现一个通过属性实现动态生成标签的组件：

1、通常我们可以这么写

```javascript
<template>
   <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="level === 6">
      <slot></slot>
    </h6>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
```

2、我们也可以通过渲染函数和h函数这么写

```javascript
<script lang="ts">
import { defineComponent, h } from 'vue'


export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup () {
    return {}
  },
  render () {
    return h(
      'h' + this.level, // 标签名字
      {}, // props/attributes
      this.$slots // array of children
    )
})
</script>

```

3、当然你也可以换个函数写法

```javascript

<script lang="ts">
import { defineComponent, openBlock as _openBlock, createBlock as _createBlock } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup () {
    return {}
  },
  render () {
    return (_openBlock(), _createBlock('h' + this.level, null, this.$slots))
  }
})
</script>
```

&nbsp;
##  JSX 语法

看了Vue中的各种render函数写法，你是否感觉写哪种都比较不舒服，这时候JSX可以出场了。

jsx 语法和vue模板语法思想大致相同，{{}}变成了{}，class支持面向对象style，等....


### 属性
支持data,setup和基本写法

```javascript
import { defineComponent, ref } from 'vue'
import CustomCompent from '@/components/CustomCompent'
export default defineComponent({
  setup () {
    const msg = ref('msg')
    return { msg }
  },
  data () {
    return {
      msg3: 'msg3'
    }
  },
  render () {
    const msg1 = 'msg1'
    return <div>
      {1 + 1}
      {true?"this is true":"false"}
      my custom router{msg1}-{this.msg}-{this.msg3}
    </div>
  }
})

```

### 表达式和函数

同理method 和 setup 倒出去的函数也是支持的。

```javascript
import { defineComponent, ref } from 'vue'
import CustomCompent from '@/components/CustomCompent'
export default defineComponent({
  render () {
    function getElement (str: string) {
      return <h1>{str}</h1>
    }
    return <div>
      {1 + 1}
      {true?"this is true":"false"}
      {getElement('ceshi')}
    </div>
  }
})

```

### 样式

JSX 你可以选择css 或者 面向对象的style，同理可以使用setup 挂在this上。

```javascript
import { defineComponent, ref } from 'vue'
import CustomCompent from '@/components/CustomCompent'
export default defineComponent({
  setup () {
    const myStyle = {
      fontSize: 100,
      color: '#FF0000'
    }
    return { myStyle }
  },
  render () {
    const myStyle1 = {
      fontSize: 100,
      color: 'red'
    }
    return <div style={myStyle1}>
            my custom router{msg1}-{this.msg}-{this.msg3}
    </div>
  }
})

```

### 组件

关于组件，可以和.vue 组件共存，import 导入使用即可。

详情看demo代码



###  灵活组合

我们可以定义标签，动态组合插入render函数，组合渲染。


```javascript
import { defineComponent, ref } from 'vue'
import CustomCompent from '@/components/CustomCompent'
export default defineComponent({
  components: {
    'custom-compent': CustomCompent
  },
  render () {
  
    const el = <h1>el</h1>
    const elArray = [
      <h1>h1</h1>,
      <h3>h3</h3>
    ]
    const dymicArray = ['demo1', 'demo2']
    const dymicElAray = dymicArray.map((str: string) => {
      return <h1>{str}</h1>
    })
    return <div style={myStyle1}>
      {el}
      {elArray}
      {dymicElAray}
      <custom-compent></custom-compent>
    </div>
  }
})

```

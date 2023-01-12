### ts文件引入js时
```js
  // util.js

  const util = {
    getInfo() {
      return {
        id: 'p'
      }
    }
  }

  export {
    util
  }


```

```js
  // user.ts中

  import { util } from '../js/util.js' // 报错缺少js模块的声明文件

```

### 解决方式

```js

// 新建一个js文件的声明文件util.d.ts

//util.d.ts中, 如下书写即可解决, 此声明文件仍是全局声明文件，非包声明文件

interface utilType {
  getInfo: ()=> object
}

declare module '*/util.js' { // 此处最为重要，标识util.js 是一个模块，ts则会正常编译
  export const util: utilType // util.js模块需要导出的内容使用export
}


```
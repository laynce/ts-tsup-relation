interface的名称同名导出时可以类型合并，type不可以

```ts
  export interface MyFn {
    x: number
  }

  export interface MyFn {
    y: string
  }

  const m : MyFn = {
    x: 10,
    y: 'value'
  }

```
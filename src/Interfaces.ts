// 对象类型的接口
interface Person {
  readonly age: number; // readonly只读属性，对象中的一些字段只能在初次创建对象的时候被赋值
  sex: string;
  len?: number; // 可选属性, 属性可以不存在，
  // [propName: string]: unknown // 任意属性，一个接口只能定义一个任意属性, 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
  [propName: string]: string | number
}

const zhang: Person = {
  age: 12,
  sex: 'woman',
  len: 200
}


// zhang.age = 9 // 只读属性，不允许再次赋值


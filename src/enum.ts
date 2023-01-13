
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：

// 常数枚举,不能计算
const enum myEnum {
  green,
  orange,
  blue = 'blue1', // blue = 'blue1‘.length 会报错s
}


// console.log(myEnum.green, myEnum.orange, myEnum.blue, 11)
console.log(myEnum['0'], myEnum['1'], myEnum['blue'], 22)


// 普通枚举

enum myEnum1 {
  green,
  orange,
  blue
}

// 计算枚举

enum myEnum11 {
  green,
  orange,
  blue="blue1".length // 正常
}


export {
  myEnum,
  myEnum1,
  myEnum11
}
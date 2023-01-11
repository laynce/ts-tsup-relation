const arr1: number[] = [1, 2, 4]
const arr2: Array<string> = ['1', '2']

// 数组类型也可以通过接口方式来定义类型

interface arrayType {
  [index: number]: string | number
}

const arr3: arrayType = [2, '5', 5]

const arr4: (number | boolean)[] = [4, true]

type arrayType1 = number | string | {item: number}

const arr5: arrayType1[] = [2, '3334', { item: 3 }]

function b() {
  let args: IArguments = arguments  // 类数组定义只能通过接口方式定义, IArguments是内置的参数数组的类型
}

function c() {
  let args: arrayType = arguments  // 类数组定义只能通过接口方式定义, IArguments是内置的参数数组的类型
}


export {
  arr1,
  arr2,
  arr3,
  arr4,
}
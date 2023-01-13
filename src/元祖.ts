// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

let y: [number, string] = [1, '666']


y.push('555')
y.push(111)
// y.push(true) //error， 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型： number | string


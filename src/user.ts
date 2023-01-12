import { util } from '../js/util.js'   // 导入js的时候ts不确定这是一个模块，所以要为该js模块写声明

console.log(user.age) // 正常
console.log(user.sex) // 正常
// console.log(user.name) // 错误，不存在此属性


// user = {} error , user全局声明文件标识这是一个常量

const b: number[] = new Array(6)

// $.name
$.getAge('12')//

$.extend.fn({})//

const s: $.Q = {q: '22'}
const C: Cat = {name: 'ww', run(){ }}
const D: Dog = { name: 'ww', ww() { } }

jQuery('ma')
jQuery.ajax('reer', 23)

 util.getInfo()



const mm: utilType = { getInfo: () => ({}) }

export type{
  util
}


import { a } from './UnionTypes'

const t: any = 8
const g: a = '34'
console.log(g) // any类型的值返回的也是任意类型，不会报错
export {
  t,
  g
}
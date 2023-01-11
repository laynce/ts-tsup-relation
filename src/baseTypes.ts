const t: boolean = false
const s: number = 20
const m: Boolean = new Boolean(false)
const n: number = NaN
const o = function (): number {
  return 20
}

const p =  function (): void {
  // void 此函数就没有返回  
}

const q: undefined = undefined
const r: null = null

const tip = 'undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量'

export {
  t,
  s,
  m,
  n,
  o,
  p,
  q,
  r,
  tip
}
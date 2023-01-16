

const t: any = 8
const g: string = '34'
console.log(g) // any类型的值返回的也是任意类型，不会报错
export {
  t,
  g
}


var rrr = 100  

function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id];
  }
  return target;
}

interface gga {
  b: number,
  d: number
}

interface gga1 {
  a: number,
  b: number
  c: number
  d: number
}

let x: gga1 = { a: 1, b: 2, c: 3, d: 4 };
let y: gga = { b: 2, d: 56 };

copyFields<gga1, gga>(x, y)

interface gghh {
  <T>(x: string): T
}


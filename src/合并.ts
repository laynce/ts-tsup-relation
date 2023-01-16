// 同名接口会合并
interface Cat {
  name: string
  run(x: string, y: number): string
}

interface Cat {
  age: string,
  run(x: string): string
}

// 以上相当于

// interface Cat {
//   name: string
//   age: string,
//  run(x: string, y?: number): string
// }

const C: Cat = {
  name: 'ww',
  age: '4',
  run(x: string, y?: number): string {
    return x
  } 
}


// 函数重载, 函数合并

function P (x: string): string
function P (x: number): string
function P (x: number, y: string): string
function P(x: number | string, y?: string): string {

  return String(x + (y ?? ''))
}

P(3, '8')

var myName = 'Tom';
var myName = 'Tom'; 

type Foo = {};
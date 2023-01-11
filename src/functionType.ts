// 函数声明
function sum(x: number, y: string): string{
  return x + y
}

sum(3, '9')


// 函数表达式

let mySum: (x: number, y: string) => string = (x: number, z: string): string => {
  return x + z
}

// 函数类型接口
interface Myfn {
  (x: string, y?: string): number
}




const del: Myfn = (x: string, y?: string): number => {
  return Number(x) + Number(y) 
}

del('4', '5') 


// 函数重载


function reverse (x:number): number
function reverse (x:string): string
function reverse(x: number | string): number | string {
  return x
}


// 对象类型的接口
interface myFn {
  run: (x: number) => number
  win(q: string): string
}


const t: myFn = {
  run(x: number): number {
    return 10
  },
  win(x: string): string { 
    return '22'
  }
}




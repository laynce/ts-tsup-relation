// 泛型

// 可以传递多个泛型类型参数
// 当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。
function swap<T, U=string>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap<number, string>([7, '5']); // ['seven', 7]
swap([7, 5]); // ['seven', 7]


function P1<T>(x: T): T {
  return x
}


let gg: string = P1<string>('34')


interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

interface Leng{
  length: number
}

loggingIdentity<Leng>({length: 8})
loggingIdentity<string>('343434')
loggingIdentity<number[]>([2332, 11])
loggingIdentity<Array<number>>([2332, 11]);


// 泛型接口

interface N1 {
  <T>(x: T): T[]
}

const t13: N1 = <T>(x: T) : T[] => {
  return [x]
}

interface N2 <T, U = number>{
  (x: T | U): (T | U)[]
}

const t14: N2<number> = (x: number) : number[] => {
  return [x]
}

t14(123)

const t15: N2<string> = <T>(x: T) : T[] => {
  return [x]
}

t15('44')


const t16: N2<string> = (x: string | number): (string | number)[] => {
  const res: number[] = [Number(x)]
  return res
}

t15('44')


class Yyt<T> {
  x: T
  constructor(x: T) {
    this.x = x
  }

  getVal(): T {
    return this.x
  }
}


const bhh: Yyt<string> = new Yyt('78')

bhh.getVal()


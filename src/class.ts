class Animal {
  private name: string
  static age: number = 45
  constructor(name: string) {
    this.name = name
  }
}

const t1: Animal = new Animal('liming')

console.log(t1, Animal.age)

// 抽象类

abstract class Yo {
  name: string
  constructor(name: string) {
    this.name = name
  }

  run() {
    console.log(999)
  }

  abstract ww(): string
}


class Yy extends Yo {
  ww(): string {
    return 'erer'
  }
}


const y2 = new Yy('lli')
console.log(y2)


class Animal1 {
  readonly name;
  public constructor(name: string) {
    this.name = name;
  }
}

let a = new Animal1('Jack');
console.log(a.name); // Jack
// a.name = 'Tom'; // 无法赋值，只读属性


/* 
明 Point 类时同时创建了 Point 类型（也是Point类实例的类型）， Point是不包含构造函数的。另外，除了构造函数是不包含的，静态属性或静态方法也是不包含的（实例的类型当然不应该包括构造函数、静态属性或静态方法）。

换句话说，声明 Point 类时创建的 Point 类型只包含其中的实例属性和实例方法：
*/


class Point {
  x: number
  y: string
  constructor(x: number, y: string) {
    this.x = x
    this.y = y
  }
}

// 产生的类型等价于 interface Po

interface Po {
  x: number
  y: string
}
// 接口继承， 此处的point 指的是类型
interface Po1 extends Point {
  z: string
}


class Pp implements Po1 {
  z: string
  x: number
  y: string

  constructor(x: number, y: string, z: string) {
    this.x = x
    this.y = y
    this.z = z
  }
}


const ttt: Po1 = {x: 1, y: '1', z: "2"}
// 定义全局变量
declare const user: { age: number, sex: string };  //定义了全局变量user是一个常量


// 定义全局函数
declare function getUser(params: Array<number>): string;



// 声明全局变量是一个对象，且拥有多个子属性
declare namespace $ {
  function getAge(id: string): number
  const name: string
  namespace extend {
    const fn: (obj: object)=> void
  }

  interface Q {
    q: string
  }

}

// 全局接口或者声明

interface Cat {
  name: string

}


type Dog = {
  name: string
  ww(): void
}


// 全局类
declare class Pe {
  name: number;
  constructor(name: string);
  sayHi(): string;
}


// 声明合并

declare function jQuery(selector: string): any;

declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}


// 也支持扩展
declare namespace jQuery {
  function ajax12(url: string, settings?: any): void;
}


declare enum myEnum1122{
  green = 0,
  orange = 1,
  blue
}
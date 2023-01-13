//此文件仍然是全局声明文件


interface utilType {
  getInfo: ()=> object
}

// 也支持扩展
declare module '*/util.js' {
  export const util: utilType
}

declare module '*/util.js' {
  export const util2: utilType
}


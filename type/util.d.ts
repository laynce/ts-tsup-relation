//此文件仍然是全局声明文件


interface utilType {
  getInfo: ()=> object
}

declare module '*/util.js' {
  export const util: utilType
}
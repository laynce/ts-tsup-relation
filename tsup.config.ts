import type { Options } from "tsup";

export const tsup: Options = {
  entry: {
    'index': 'main.ts'
  }, //["main.ts"],
  format: ["esm"],
  dts: true, // 生成声明文件
  splitting: true,
  clean: true, // 打包前先清除dist
  watch: true, // 实时编译
  outDir: 'target', // 不写默认生成dist目录
};
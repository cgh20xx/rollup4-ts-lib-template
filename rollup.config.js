/**
 * config 文件：https://cn.rollupjs.org/command-line-interface/#configuration-files
 */

import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default defineConfig({
  input: {
    tools: 'src/index.ts',
  },
  // 必需 (可以是陣列，用於描述多個輸出)
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].esm.js',
      format: 'es', // ES Module
    },
    {
      name: 'tools', // global name under window
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'iife', // for browser
      plugins: [terser()], // compress js
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    resolve(), // 使 Rollup 能解析 node_modules 模組
    commonjs(), // 使 Rollup 能將 CommonJS Module 轉換成 ES Module
    json(), // 使 Rollup 能解析 json
  ],
  // external: ['lodash-es'], // 外部模組不會被打包，需額外設定 output.globals
});

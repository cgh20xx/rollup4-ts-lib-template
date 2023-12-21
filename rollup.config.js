import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  input: {
    tools: 'src/index.ts',
  },
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].esm.js',
      format: 'es', // ES Mdoule
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
  ],
  // external: ['lodash-es'], // 外部模組不會被打包，需額外設定 output.globals
});

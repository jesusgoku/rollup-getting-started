// import json from 'rollup-plugin-json';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: [
      'src/main.js',
    ],
    external: ['axios'],
    output: [
      {
        // dir: 'dist',
        file: 'dist/darksky.umd.js',
        format: 'umd', // amd, cjs, esm, iife, umd, system
        name: 'DarkSky',
        globals: {
          axios: 'axios',
        },
      },
      {
        // dir: 'dist',
        file: 'dist/darksky.js',
        format: 'cjs', // amd, cjs, esm, iife, umd, system
        name: 'DarkSky',
        globals: {
          axios: 'axios',
        },
      },
      {
        // dir: 'dist',
        file: 'dist/darksky.iife.js',
        format: 'iife', // amd, cjs, esm, iife, umd, system
        name: 'DarkSky',
        globals: {
          axios: 'axios',
        },
      },
    ],
    plugins: [
      // json(),
      // resolve(),
      // commonjs(),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
];

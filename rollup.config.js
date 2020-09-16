import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'

export default [
  {
    input: 'lib/index.js',
    output: {
      name: 'ArrayUtils',
      file: 'lib/browser.min.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      minify({
        comments: false,
      }),
    ],
  },
]

import babel from 'rollup-plugin-babel'
import peerDepsExternal  from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json';
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      modules: false,
      extract: false,
      use: ['sass'],
    }),
    peerDepsExternal({
      includeDependencies: true,
    }),
    url(),
    svgr(),
    json(),
    babel({
      runtimeHelpers: true,
      exclude: '/node_modules/'
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
      namedExports: {
        '../node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement'
        ],
        '../node_modules/react-dom/index.js': ['render', 'hydrate'],
        '../node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef'
        ],
        '../../../node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef',
          'composeWithDevTools',
          'isContextConsumer'
        ],
      }
    }),
  ],
  external: ['react', 'react-dom', 'prop-types', 'styled-components']
}
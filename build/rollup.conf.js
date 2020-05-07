import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';


export default {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    babel(),
  ],
  output: [
    {
      format: 'umd',
      name: 'VueMaskRu',
      exports: 'named',
      file: 'dist/v-mask-ru.js',
    },
    {
      format: 'esm',
      file: 'dist/v-mask-ru.esm.js',
    },
  ],
};

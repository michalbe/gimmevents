import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/main.js',
	output: {
		name: 'Gimmevents',
		format: 'umd',
		file: 'dist/gimmevents.js'
	},
  plugins: [
    commonjs({
      include: 'node_modules/**',
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    serve({
      contentBase: ['dist']
    }),
    livereload({
      watch: ['dist']
    })
  ]
}

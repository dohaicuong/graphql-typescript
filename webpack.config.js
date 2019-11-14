const path = require('path')
const nodeExternals = require('webpack-node-externals')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')

const {
  NODE_ENV = 'dev'
} = process.env

module.exports = {
  mode: NODE_ENV === 'dev' ? 'development' : 'production',
  devtool: NODE_ENV === 'dev' ? 'inline-source-map' : 'source-map',
  plugins: NODE_ENV === 'dev'
    ? [
      new CleanWebpackPlugin(),
      new WebpackShellPlugin({
        onBuildStart: ['yarn gql-gen'],
        onBuildEnd: ['yarn start:watch']
      })
    ]
    : [new CleanWebpackPlugin()],
  watch: NODE_ENV === 'dev' ? true : false,

  entry: [ path.join(__dirname, 'src/index.ts') ],
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, '**/*.test.ts'),
          path.resolve(__dirname, '**/*.spec.ts'),
        ],
        use: 'ts-loader'
      },
      {
        test: /\.graphql$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, '**/*.test.ts'),
          path.resolve(__dirname, '**/*.spec.ts'),
        ],
        loader: 'graphql-tag/loader',
      }
    ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node'
}
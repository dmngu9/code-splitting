const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    assetModuleFilename: 'assets/[name][hash][ext]'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_module/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.svg/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  context: __dirname,
  target: 'web',
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    compress: true,
    hot: true
  }
};
import path from  'path';

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'drivers/views/index')
  ],
  target :'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'drivers/views')
  },
  plugins:[],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}

const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client/src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
}
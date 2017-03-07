module.exports = {
  entry: "./frontend/todo_redux.jsx",
  output: {
      filename: "./bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

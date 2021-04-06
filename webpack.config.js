const path = require('path'); // import module from node module

console.log(path.join(__dirname, 'public')); // you can see the log on terminal with "node webpack.config.js"

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // module property setup for babel (if you use ES6 or react etc)
  module: {
    rules: [
      {
        loader: 'babel-loader', // run babel through the presets on .babelrc, everytime webpack sees js files
        test: /\.js$/, // looking for a file with .js in the end
        exclude: /node_modules/, // ignore node_modules
      },
      {
        test: /\.s?css$/, // looking for a file with .scss in the end
        use: ['style-loader', 'css-loader', 'sass-loader'], // register required loaders
      },
    ],
  },
  // devtool - source-map setup
  devtool: 'cheap-module-eval-source-map',
  // webpack-dev-sever
  devServer: {
    contentBase: path.join(__dirname, 'public'), // set where to find the public folder for webpack to run dev-server
    historyApiFallback: true,
  },
};

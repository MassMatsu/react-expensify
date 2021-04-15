const path = require('path'); // import module from node module
const ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log(path.join(__dirname, 'public')); // you can see the log on terminal with "node webpack.config.js"

module.exports = (env) => {
  const isProduction = env === 'production';
  // create a instance for ExtractTextPlugin
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return {
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
          //use: ['style-loader', 'css-loader', 'sass-loader'], // register required loaders
          use: CSSExtract.extract({
            use: [
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } },
            ],
          }),
        },
      ],
    },
    // register CSSExtract to plugins array (3rd party library to plugins)
    plugins: [CSSExtract],
    // devtool - source-map setup
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    // webpack-dev-sever
    devServer: {
      contentBase: path.join(__dirname, 'public'), // set where to find the public folder for webpack to run dev-server
      historyApiFallback: true,
    },
  };
};

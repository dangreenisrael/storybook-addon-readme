module.exports = {
  entry: {
    index: './src/index.js',
    register: './src/register.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  watch: true,
  watchOptions: {
    poll: 100
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};

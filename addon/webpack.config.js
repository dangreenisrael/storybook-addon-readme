module.exports = {
  entry: {
    index: './src/index.js',
    register: './src/register.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
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
          presets: ['@babel/preset-env', "@babel/preset-react",],
          plugins: ["@babel/plugin-proposal-class-properties"]
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
  }
};

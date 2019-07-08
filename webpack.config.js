module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: "bundle.js",
      path: __dirname + '/public',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    context: __dirname,
    node: {
      fs: 'empty'
    },
    module: {
      rules: [
        {
          test: /jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
              presets: [
              "@babel/preset-react",
              "@babel/env"
            ]
        }
        }
      ]
    },
    devtool: 'source-map'
}
console.log(__dirname)
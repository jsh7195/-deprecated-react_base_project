const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const domain = process.env.NODE_ENV === 'local' ? 'http://localhost:9071/' : 'http://221.139.14.153:9071'
const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      '@atoms': resolve('src/components/atoms/'),
      '@module': resolve('src/components/module/'),
      '@template': resolve('src/components/template/'),
      '@lib': resolve('src/lib/'),
      '@const': resolve('src/constants/serviceConstants'),
    },
  },
  entry: {
    app: ['core-js/stable', './src/index.js'],
  },
  output: {
    path: path.resolve(`${__dirname}/dist`),
    publicPath: '/',
    filename: 'site.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader', { loader: 'url-loader' }],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader?-url',
          },
        ],
      },
    ],
  },
  devServer: {
    port: 9070,
    host: '0.0.0.0',
    contentBase: path.resolve(`${__dirname}`),
    inline: true,
    writeToDisk: true,
    historyApiFallback: true,
    watchOptions: {
      poll: 5000,
      aggregateTimeout: 1000,
      ignored: ['node_modules'],
    },
    proxy: {
      '/PD': {
        target: `${domain}/master/api/v1/pd/`,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/PD/': '/',
        },
      },
      '/CM': {
        target: `${domain}/master/api/v1/cm/`,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/CM/': '/',
        },
      },
    },
  },

  optimization: {
    minimize: false,
    splitChunks: {},
    concatenateModules: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      chunks: ['css', 'images', 'webfonts'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

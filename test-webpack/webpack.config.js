const path = require('path')

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLInlineCSSWebpackPlugin =
  require('html-inline-css-webpack-plugin').default

module.exports = [
  {
    name: 'app',
    entry: path.resolve(__dirname, 'src', 'app.js'),
    target: 'web',
    mode: 'production',
    devtool: 'inline-source-map',
    node: false,
    module: {
      rules: [
        {
          test: /\.svg$/i,
          type: 'asset/source'
        },
        {
          test: /\.txt$/i,
          type: 'asset/source'
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.html$/i,
          exclude: /index\.html$/,
          loader: 'html-loader',
          options: {
            sources: false,
            esModule: false,
            minimize: {
              collapseWhitespace: false,
              conservativeCollapse: true,
              preserveLineBreaks: true,
              removeComments: true,
              removeCommentsFromCDATA: true,
              removeCDATASectionsFromCDATA: true,
              collapseBooleanAttributes: false,
              removeAttributeQuotes: false,
              removeRedundantAttributes: false,
              useShortDoctype: false,
              removeEmptyAttributes: false,
              removeScriptTypeAttributes: false,
              removeStyleLinkTypeAttributes: false,
              removeOptionalTags: false,
              removeIgnored: false,
              removeEmptyElements: false,
              lint: false,
              keepClosingSlash: false,
              caseSensitive: false,
              minifyJS: false,
              minifyCSS: false,
              minifyURLs: false
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        dataBasalteApp: JSON.stringify({
          ellie: false,
          lisA: false,
          web: true,
          liveOnly: false
        })
      }),
      // new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body',
        // minify: {
        //   collapseWhitespace: true,
        //   conservativeCollapse: false,
        //   preserveLineBreaks: false,
        //   removeComments: true,
        //   removeCommentsFromCDATA: true,
        //   removeCDATASectionsFromCDATA: true,
        //   collapseBooleanAttributes: false,
        //   removeAttributeQuotes: false,
        //   removeRedundantAttributes: false,
        //   useShortDoctype: false,
        //   removeEmptyAttributes: false,
        //   removeScriptTypeAttributes: false,
        //   removeStyleLinkTypeAttributes: false,
        //   removeOptionalTags: false,
        //   removeIgnored: false,
        //   removeEmptyElements: false,
        //   lint: false,
        //   keepClosingSlash: false,
        //   caseSensitive: false,
        //   minifyJS: false,
        //   minifyCSS: false,
        //   minifyURLs: false
        // },
        minify: false
      }),
      // new HTMLInlineCSSWebpackPlugin()
    ],
    optimization: {
      minimize: false
    },
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'www')
    }
  }
]

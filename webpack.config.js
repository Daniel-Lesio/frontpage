const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname ,'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.(vue$)/,
                use: 'vue-loader'
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : ['babel-loader']
            },
            {
                test : /\.html$/,
                use : [
                    
                    {
                        loader : "html-loader",
                        options : {minimize : false}
                    },
                ]
            },
            {
                test : /\.(png|svg|jpeg|jpg|gif)$/i,
                loader : 'file-loader',
                options : {
                    name : 'assets/[name].[ext]',
                    esModule: false,
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'vue-style-loader' },
                    MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader'
                    },
                    {
                      loader: 'postcss-loader',
                      options: {
                        config: {
                          path: './postcss.config.js'
                        }
                      }
                    },
                    {
                      loader: 'sass-loader'
                    }
                ]
              }
        ],
    },
    // resolve: {
    //     alias: {
    //       'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    //     }
    // },
    plugins  : [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname , './src/index.html'),
            filename : "index.html",
            minify: false,
        }),
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname , './src/about.html'),
        //     filename : "about.html",
        //     minify: false,
        // }),
         
        // new HtmlWebpackPartialsPlugin({
        //     path :path.join(__dirname,'./src/partials/navigation.html'),
        //     priority: 'high',
        //     location : 'body',
        //     template_filename : ['index.html']
        // }),
        new miniCssExtractPlugin({
            filename : "[name].css",
            chunkFilename : "[id].css"
         }) 

    ]
}
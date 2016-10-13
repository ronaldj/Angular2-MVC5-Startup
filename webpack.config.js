/// <binding ProjectOpened='Watch - Development' /> 
var path = require('path');
var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ReplacePlugin = require('replace-webpack-plugin');
var gutil = require("gulp-util");
var helpers = require('./webpack.helpers');
var isProd = process.env.NODE_ENV.indexOf("production") > -1;

module.exports = function makeWebpackConfig() {
    var config = {};

    config.debug = !isProd;

    console.log('Running ' + process.env.NODE_ENV + ' config');

    if (config.debug) {
        config.devtool = 'source-map';
        config.output = {
            path: __dirname + '\\wwwroot\\dist',
            publicPath: '/',
            filename: 'js/[name].js',
            chunkFilename: '[id].chunk.js',
        }
    } else {
        config.devtool = 'eval-source-map';
        config.output = {
            path: 'wwwroot/dist',
            publicPath: '/',
            filename: 'js/[name].[hash].js',
            chunkFilename: '[id].chunk.js',
        }
    }

    config.entry = {
        'polyfills': './wwwroot/src/polyfills.ts',
        'vendor': './wwwroot/src/vendor.ts',
        'app': './wwwroot/src/main.ts',
    };

    config.resolve = {
        cache: !config.debug,
        root: helpers.root(),
        // only discover files that have those extensions
        extensions: ['', '.ts', '.js', '.json', '.css', '.html'],
        alias: {
            'app': 'src/app'
        }
    };

    config.module = {
        loaders: [
          // Support for .ts files.
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader'],
                exclude: [config.debug ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
            },
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

            //// copy those assets to output
            //{
            //    test: /\.(png|jpe?g|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //    loader: 'file?name=images/[name].[ext]?'
            //},
            // Support for *.json files.
            { test: /\.json$/, loader: 'json' },
            // Support for CSS as raw text
            // all css in src/style will be bundled in an external css file
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
            },
            // support for .html as raw text
            // todo: change the loader to something that adds a hash to images
            {
                test: /\.html$/, loader: 'raw',
                exclude: helpers.root('src', 'public')
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[ext]" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml" },
        ],
        postLoaders: []
    };

    config.plugins = [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //Inject script and link tags into html files
        new HtmlWebpackPlugin({
            inject: !config.debug,
            template: 'views/home/index.cshtml',
            chunksSortMode: 'dependency'
        }),
        new ReplacePlugin({
            skip: config.debug,
            entry: 'views/home/index.cshtml',
            hash: '[hash]',
            output: 'wwwroot/dist/index.html',
            data: {
                css: '<link rel="stylesheet" type="text/css" href="css/vendor.[hash].css" />\n' +
                    '<link rel="stylesheet" type="text/css" href="css/app.[hash].css" />',
                js: '<script src="js/polyfills.[hash].js" type="text/javascript"></script>\n' +
                    '<script src="js/vendor.[hash].js" type="text/javascript"></script>\n' +
                    '<script src="js/app.[hash].js" type="text/javascript"></script>'
            }
        }),
    ];

    config.plugins.push(
          new CommonsChunkPlugin({
              name: ['vendor', 'polyfills']
          }),

          // Extract css files
          new ExtractTextPlugin(config.debug ? 'css/[name].css' : 'css/[name].[hash].css')
        );

    config.plugins.push(
        // Only emit files when there are no errors
        new webpack.NoErrorsPlugin(),

        // Dedupe modules in the output
        new webpack.optimize.DedupePlugin(),

        // Minify all javascript, switch loaders to minimizing mode
        new webpack.optimize.UglifyJsPlugin({ mangle: { keep_fnames: true } }),

        // Copy assets from the public folder
        new CopyWebpackPlugin([{
            from: helpers.root('src/public')
        }])
    );

    /**
     * Add vendor prefixes to your css
     */
    config.postcss = [
      autoprefixer({
          browsers: ['last 2 version']
      })
    ];

    /**
     * Dev server configuration
     */
    config.devServer = {
        contentBase: './src/public',
        historyApiFallback: true,
        stats: 'errors-only' // none (or false), errors-only, minimal, normal (or true) and verbose
    };

    return config;
}();

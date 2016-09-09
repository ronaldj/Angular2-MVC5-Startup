/// <binding ProjectOpened='webpack-dev-server' />
var gulp = require('gulp');
var webpack = require('webpack');
var webpackDevServer = require("webpack-dev-server");
var gutil = require("gulp-util");

gulp.task("webpack-dev-server", function (callback) {
    process.env.NODE_ENV = 'development';

    var myConfig = Object.create(require('./webpack.config.js'));
    myConfig.devtool = "eval";

    new webpackDevServer(webpack(myConfig), {
        publicPath: 'http://localhost:8080/',
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});
var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = __dirname + '/node_modules';

module.exports = {
    devtool: 'eval',
    resolve: {
        root: path.join(__dirname, 'src')
    },
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [nodeModulesPath],
            include: path.join(__dirname, 'src'),
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }]
    }
};

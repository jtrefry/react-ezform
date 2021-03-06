var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    externals: {
        "react" : "React",
        "react-dom": "ReactDOM",
        "react-bootstrap" : "ReactBootstrap"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: 'node_modules',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }]
    }
};

var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: './dist/js',
        filename: 'bundle.js'
    },
    externals: {
        "react" : "React",
        "react-dom": "ReactDOM",
        "react-bootstrap" : "ReactBootstrap"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            mangle: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
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

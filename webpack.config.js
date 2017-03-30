module.exports = {
    entry: './public/index.html',
    watch: true,
    module: {
        rules: [{
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html-loader'
        }]
    },
    devServer: {
        contentBase: __dirname + '/public',
        compress: true,
        port: 9000
    }
};

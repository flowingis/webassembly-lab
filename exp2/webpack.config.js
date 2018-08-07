module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(c|cpp)$/,
                use: {
                    loader: 'cpp-min-wasm-loader',
                    options: {
                        emccFlags: ["-s SIDE_MODULE=1", "-s WASM=1"],
                    }
                }
            }
        ],
    },
    devServer: {
        contentBase: __dirname + '/public',
        compress: true,
        port: 8081
    }

};
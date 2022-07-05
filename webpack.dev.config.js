const { resolve } = require('path');


module.exports = {
    entry: './dist/src/index.js',
    'mode': 'development',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.umd.js',
        library: {
            name: "AlgebraForYou",
            type: "umd"
        }
    },

    resolve: {
        extensions: ['.js', '.ts']
    }
}
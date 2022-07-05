const { resolve } = require('path');


module.exports = {
    entry: './dist/src/index.js',
    'mode': 'production',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'index.umd.js',
        library: {
            name: "AlgebraForYou",
            type: "umd"
        }
    },
    resolve: {
        extensions: ['.js', '.ts']
    }
}
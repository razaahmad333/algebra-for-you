const { resolve } = require('path');


module.exports = {
    entry: './src/index.js',
    'mode': 'production',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'index.umd.js',
        library: {
            name: "AlgebraForYou",
            type: "umd"
        }
    },
}
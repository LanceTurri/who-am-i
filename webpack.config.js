const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: "inline-source-map",
    entry: "./src/scripts/app.ts",
    output: {
        filename: "app.bundle.min.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
};

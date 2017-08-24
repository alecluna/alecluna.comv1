module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "build.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "css-loader",
                options: {
                    minimize: true
                }
            }
        ]
    }
};

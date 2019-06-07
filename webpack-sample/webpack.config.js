const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    mode: "development",
    module: {
        rules: [{
            test: /\.css/,
            use: [
                "style-loader",
                "css-loader",
            ],
        }]
    },
    plugins: [
        new StyleLintPlugin({
            configFile: `${__dirname}/.stylelintrc`,
            context: `${__dirname}/src/css`,
            files: "**/*.css",
        }),
    ],
};

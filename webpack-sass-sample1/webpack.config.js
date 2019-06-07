const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    mode: "development",
    module: {
        rules: [{
            test: /\.scss/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        }]
    },
    plugins: [
        new StyleLintPlugin({
            configFile: `${__dirname}/.stylelintrc`,
            context: `${__dirname}/src/scss`,
            files: "**/*.scss",
        }),
    ],
};

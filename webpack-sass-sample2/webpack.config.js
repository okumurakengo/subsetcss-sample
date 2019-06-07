const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/scss/style.scss",
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].css", // 生成するjsファイル名
    },
    module: {
        rules: [{
            test: /\.scss/,
            use: ExtractTextPlugin.extract({
                use: [
                    "css-loader",
                    "sass-loader",
                ],
            }),
        }]
    },
    plugins: [
        // cssファイルを生成されたjsファイルと同じ名前にし上書きする
        //  -> cssファイルのみ出力という結果になる
        new ExtractTextPlugin("[name].css"),

        new StyleLintPlugin({
            configFile: `${__dirname}/.stylelintrc`,
            context: `${__dirname}/src/scss`,
            files: "**/*.scss",
        }),
    ],
};

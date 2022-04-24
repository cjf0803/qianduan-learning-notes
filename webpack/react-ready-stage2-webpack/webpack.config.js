var webpack =require("webpack")
var borwerOpen =require("open-browser-webpack-plugin")
var HtmlTemp =require("html-webpack-plugin")

module.exports = {
    //devtool: "eval-source-map",
    entry: __dirname + "/src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "test.js"
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.json$/,
                use:"json-loader"
            },
            {
                test:/\.(js|jsx)$/,
                use:"babel-loader"

            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.(png|jpg|gif|jpeg|svg)$/,
                use: "url-loader?limit=2048" //大于2M进行压缩
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }

        ]
    },
    plugins:[
        //自动打开浏览器插件
        new borwerOpen({
            url:"http://localhost:8080"
        }),
        //html模板
        new HtmlTemp({
            template:__dirname+"/src/index.temp.html"
        }),
        //可在业务js代码中使用__DEV__判断是否是dev模式（dev模式下可以提示错误，测试报告，product）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV =='dev')||'false'))
        })

]
};
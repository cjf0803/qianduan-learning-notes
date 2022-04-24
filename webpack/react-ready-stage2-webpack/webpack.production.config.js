var pkg =require('./package.json')
var webpack =require("webpack")
var borwerOpen =require("open-browser-webpack-plugin")
var HtmlTemp =require("html-webpack-plugin")
var path=require("path")

module.exports = {
    //devtool: "eval-source-map",
    entry: {
      app:path.resolve(__dirname, 'src/app.js'),
      //将第三方依赖 （node_modules中的）  单独打包
      vendor: Object.keys(pkg.dependencies)
    },
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
        //webpack 内置的 banner-plugin
        new webpack.BannerPlugin("@Copyright http://github/cjf0803 "),
        //自动打开浏览器插件
        new borwerOpen({
            url:"http://localhost:8080"
        }),
        //定义为生产环境 编译React 时压缩到最小
        new webpack.DefinePlugin({
           'progress.env':{
               'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
           }
        }),
        //压缩去掉警告
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warning:false
            }
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
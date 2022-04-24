
//let hello =require("./hello.js");
//document.getElementById("root").appendChild(hello());

   import React from  "react"
    import ReactDom from "react-dom"
    import Hello from "./hello"
    import  Header from  "./header/index"
    import "./header/header.less"
    //引入css
    import "./app.css"

    //创建一个组件：app
    class App extends React.Component{
        render() {
            return(
                <div className="container"><Hello /><Header /></div>
            )
        }
    }
    //渲染
        ReactDom.render(<App />,document.getElementById("root"));
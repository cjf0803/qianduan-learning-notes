// var data =require("./data/data.json");
// module.exports=function () {
//     let hello =document.createElement("div");
//     hello.textContent=`${data.name}:${data.desc}`;
//     return hello;
// };

    import React from "react"
    import logoImg from "./img/8.jpg"

    export  default  class Hello extends React.Component{
        render() {
        return (
            <div>
                <p>Hello react!!</p>
                <img src={logoImg}/>
            </div>

        )
    }
    }
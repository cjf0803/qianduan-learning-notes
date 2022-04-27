import React,{Component} from "react"
import $ from "jquery"
export default class App extends Component{
    //构造函数：当前类的初始化状态
    constructor(){
        super();
        //state状态要放在构造函数中
        this.state={
            time:"2022/4/27"
        }

    }

    hander(event){
        console.log(this)
        this.setState({
            time:"2022/4/28"
        })
    }
    componentDidMount() {
        console.log("组件渲染之后");
    }

    render() {
        return(
            <div>
                <p>登录时间:{ this.state.time }</p>
                <button onClick={ this.hander.bind(this) }>按钮</button>
            </div>
        )
    }
}
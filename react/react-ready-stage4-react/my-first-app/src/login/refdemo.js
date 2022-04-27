import React,{ Component } from "react"

export default class RefDemo extends Component {


    constructor(){
        super();
        //ref:React中不能直接操作dom
        //给当前div设置一个文本信息：hello,而且通过点击事件修改hello为world
        this.state={
            info:"hello"
        }
    }
    handlerClick(event){
        this.setState({
            info:"world"
        })
    }

    render() {
        return(
            <div>
                { this.state.info }
                <button onClick={this.handlerClick.bind(this)}>按钮</button>
            </div>

        )
    }
}

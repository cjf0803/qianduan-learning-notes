import React,{ Component } from "react"

export default  class Info extends Component {


    constructor(){
        super();
        //受控组件：受react控制的组件
        //this.state+event.target
        this.state={
            username:"",
            password:""
        }
    }
    usernamechage(event){

        this.setState({
            username:event.target.value
        })
        console.log(this.state.username)
    }
    userpasswordchage(event){

        this.setState({
            password:event.target.value
        })
        console.log(this.state.password)
    }
    handlerSubmit(event){
        console.log("用户名："+this.state.username,"密码："+this.state.password)
        //获取数据后 供业务逻辑
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handlerSubmit.bind(this)}>
                    <input name="username" type="text" value={this.state.username} onChange={this.usernamechage.bind(this)}/>
                    <input type="password" name="password" value={this.state.password} onChange={this.userpasswordchage.bind(this)} />
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
}

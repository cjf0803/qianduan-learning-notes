import React,{ Component } from "react"
import User from "./user"
import Login from "./login/index"
import Info from "./info"
import RefDemo from "./login/refdemo"

export  default  class App extends Component{
  render() {
    var num="10";
    return(
        <div className="App">
          <User name="cjf" />
          <User name="zzs" />
          <User name="aac" />
          <User name={num} />
          <Login />
            <Info />
            <RefDemo />
        </div>
    )
  }
}
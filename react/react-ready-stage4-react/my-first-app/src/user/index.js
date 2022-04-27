import React, { Component } from "react"
import PropTypes from "prop-types"
export default class User extends Component {
    render() {
        return (
            <div>
                <h3>用户：{this.props.name}</h3>
            </div>
        )

    }
}
//属性类型为string 否则警告warning
/*User.propTypes= {
    name:PropTypes.string
}
*/
//属性必选项 isRequired
User.propTypes={
    name:PropTypes.string.isRequired
}

//属性默认值
/*User.defaultProps={
    name:"默认值"
}
*/
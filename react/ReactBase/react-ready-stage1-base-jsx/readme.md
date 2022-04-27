1.React是什么?
    A JavaScript library for building user interfaces
    用户视图！！
    最开始，很多人说React是MVC中的v 总结React就是一套为视图而准备的js框架
    React由facebook打造的 致力于DOM渲染 更易于维护的DOM层
    jsx语法：由javascript+xml语言组成 其中xml相当于html语言
            -遇到{}按照js语法解析
            -遇到<>按照xml语法解析
            
            warning:每一个列表元素需要指定一个key作为该元素的索引
            
            组件：
                   在React中，整体是一个组件化设计
                   1.创建组件时命名首字母必须大写
                   2.组件中只能存在一个根容器
                   3.组件与组件之间可以互相嵌套
                   4.组件本身可以具有业务逻辑
                   5.组件数据交互:props (组件与组件之间联系)
                        this.props.属性名
                        数据传递
                   6.组件内部状态改变：state（组件内状态改变）
                        1.this.state.属性名   
                        2.this.setState({})  
                   7.组件加样式
                        类命名 className=""
                        行内样式 style={{}} 两个花括号 因为style 接收的是一个对象
                            如：<span style={{color:'green',fontSize:'35px'}}>lalalal</span>
	       添加事件  同样是onclick={} 如 <button onMouseOver={this.hander}>按钮</button>
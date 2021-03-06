import React, {Component} from 'react';
import './MyHeader.less'

export default class MyHeader extends Component {
    render() {
        return (
            <div className='my-header'>
                {this.props.showBack && <a onClick={()=>{window.history.back()}} className='iconfont icon-fanhui'></a>}
                {this.props.title}
            </div>
        )
    }
}

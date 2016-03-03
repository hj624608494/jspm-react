'use strict';

import React from 'react';

class TabBox extends React.Component{
    constructor() {
        super();

        this.state = {
            isVisible: true
        };
    }

    handleConsole(){
        console.log(this);
        this.setState({ isVisible: !this.state.isVisible })
    }

    render(){
        console.log(this.state.isVisible)
        var active = this.state.isVisible ? 'content active' : 'content';
        var visible = this.state.isVisible ? 'transition visible' : 'transition hidden';

        return(
            <div className="ui styled accordion">
                <div className="title" onClick={this.handleConsole.bind(this)}><i className="dropdown icon"></i> What is a dog? </div>
                <div className={active}>
                    <p className={visible}>狗算是一种家畜。以其忠诚与忠心广受人类欢迎, 可以在世界各地的许多家庭里发现这个受欢迎的客人。</p>
                </div>
            </div>
        );
    }
}

export { TabBox as default };
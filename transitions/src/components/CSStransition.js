import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'

import '../css/App.css';

class Fade extends Component{

    state = {
        show:true
    }

    DisplayDiv = ()=>{
        this.setState({
            show: !this.state.show ? true : false
        })
    }

    render(){
        return(
            <div>
                <CSSTransition
                    in = {this.state.show}
                    timeout={2000}
                    classNames= "square"
                    mountOnEnter
                    unmountOnExit
                >
                    <div className={`square ${this.state.show}`}>
                        Hello
                    </div>
                </CSSTransition>
                <div className = "showDiv" onClick={this.DisplayDiv}> show or hide</div>

            </div>
        )
    }
}


export default Fade;
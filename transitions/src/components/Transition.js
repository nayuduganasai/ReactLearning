import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition'
import '../css/App.css';


class TransitionComp extends Component{

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
                {/* { this.state.show? <div style={{
                background:'skyblue',
                height:'100px'
               }}> 
               
               </div>: null
                } */}
                <Transition
                    in ={this.state.show}
                    timeout ={
                       { enter:2000,
                        exit:2000
                    }
                    }
                    mountOnEnter
                    unmountOnExit
                >
                   { state => 
                            <div 
                            // style ={{
                            //     background:'skyblue',
                            //     height:'100px',
                            //     transition:'all 2s ease',
                            //     opacity:state ==='exited' || state === 'exiting' ? 0:1

                            // }}
                            className={`square square-${state}`}
                            >
                                {`square square - ${state}`}

                            </div>
                   
                   }

                </Transition>
               
               <div className = "showDiv" onClick={this.DisplayDiv}> show or hide</div>
            </div>

        )
    }
}


export default TransitionComp;
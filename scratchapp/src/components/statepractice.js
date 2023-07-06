  import React, { Component } from 'react';

  class StatePractice extends Component{

    constructor(props){
        super(props)

        this.state = {
          title :'The keywords are:',
          //keywords:'Hello'
        }
    }

    inputChangehandler= (event) => {
       // console.log(event.target.value);
       this.setState({
        keywords:event.target.value
       })
    }
    state = {
      keywords:"hello world"
    }

    render(){
      console.log(this.state.keywords)
        return(
           <>
           <div style={{background:'green',margin:100}}>This is Statepractice block<br></br>
           {/* <input type = "text" onChange={this.inputChangehandler.bind(this)} ></input> */}
           <input type = "text" onChange={this.inputChangehandler} ></input>
           <p>{this.state.title}{this.state.keywords}</p>
           </div>
            
           </>
               
        )

    }   
  }


 export default StatePractice;
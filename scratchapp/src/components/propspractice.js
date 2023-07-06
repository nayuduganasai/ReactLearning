import React, { Component } from 'react';

class PropsPractice extends Component{


  
  state = {
    keywords:"hello world"
  }

  render(){
    console.log(this.state.keywords)
      return(
         <>
         <div style={{background:'orange',margin:100}}>This is propspractice block<br></br>
         <input type = "text" ></input>
         
         </div>
          
         </>
             
      )

  }   
}


export default PropsPractice;
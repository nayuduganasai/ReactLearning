import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Components
import Header from './components/header';
import Button from './components/eventhandlingp';
import StatePractice from './components/statepractice';
import PropsPractice from './components/propspractice';
import JSON from './db.json';
import NewsList from './components/news_list';



class App extends Component{
   state = {
      news:JSON
   }
   render(){
     // console.log(this.state.news)
   return (
    <>
       <div className = "newElement">
          <h1> Hello World !!! </h1>
          <div>This is fun</div>   
       </div>
       {/* first component used */}
       <Header/><br/>
       <Button/>
       <StatePractice/>
       <PropsPractice/>
       <NewsList news= {this.state.news} Monkey = "me">

         <h3>THIS IS A CHILD , we can call it using "props.children" </h3>
       </NewsList>
       
    </>
   )
     
   }
  
  // return createElement('h1',null,React.createElement('div',null, "Hello world !!! "));
}





ReactDOM.render(<App/> , document.querySelector('#root')); 
 
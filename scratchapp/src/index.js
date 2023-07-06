import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Link,NavLink,Route,Routes} from 'react-router-dom';
//Components
import Header from './components/header';
import Button from './components/eventhandlingp';
import StatePractice from './components/statepractice';
import PropsPractice from './components/propspractice';
import JSON from './db.json';
import NewsList from './components/news_list';
import Conditionalpractice from './components/conditionalpractice';
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';
import Postitem from './components/post_item';
import User from './components/user';




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

       <BrowserRouter>
    <div>
      <header style={{background:'grey',padding:'10px',margin:'50px'}}>
        <Link to ="/">Home</Link><br/>
        <Link to ="/posts">posts</Link><br/>
        <Link to ={{
          pathname:'/profiles'
          // hash:'#francis',
          // search:'?profiles = true'
        }}>profiles</Link><br/>
        <NavLink to ="/conditional"> Conditional</NavLink><br/>
        <NavLink to = "/userhoc"> USER</NavLink>
     </header>
      
      <Routes >
      
        <Route path = "/" Component={Home}/>
        <Route path = "/posts"exact  Component={Posts}></Route>
        <Route path ="/profiles" Component={Profiles}></Route>
        <Route path = "/posts/:id/" Component={Postitem}></Route>
        <Route path = "/conditional" Component={Conditionalpractice}></Route>
        <Route path = "/userhoc" Component={User}></Route>

       </Routes>
       
      </div>
       
    </BrowserRouter>
       
    </>
   )
     
   }
  
  // return createElement('h1',null,React.createElement('div',null, "Hello world !!! "));
}





ReactDOM.render(<App/> , document.querySelector('#root')); 
 
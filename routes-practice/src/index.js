import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Link,NavLink,Route,Routes} from 'react-router-dom';
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';
import Postitem from './components/post_item';
import Conditional from './components/conditionalpractice';


const App = () =>{
  return(
    <BrowserRouter>
    <div>
      <header>
        <Link to ="/">Home</Link><br/>
        <Link to ="/posts">posts</Link><br/>
        <Link to ={{
          pathname:'/profiles'
          // hash:'#francis',
          // search:'?profiles = true'
        }}>profiles</Link><br/>
        <NavLink to ="/Conditional"> Conditional</NavLink>
     </header>
      
      <Routes>
      
        <Route path = "/" Component={Home}/>
        <Route path = "/posts"exact  Component={Posts}></Route>
        <Route path ="/profiles" Component={Profiles}></Route>
        <Route path = "/posts/:id/" Component={Postitem}></Route>
        <Route path = "/conditional" Component={Conditional}></Route>
       
       </Routes>
       
      </div>
       
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
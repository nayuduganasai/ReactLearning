import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

const App = () =>{

    return(
        <BrowserRouter>
                <Routes/>
        </BrowserRouter>
        
        )
      

}

ReactDom.render(<App/>, document.getElementById('root'));

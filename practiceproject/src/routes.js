import React,{Component} from "react";
import {Route,Switch} from 'react-router-dom'

class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route path = "/" exact component = {Home}></Route>

            </Switch>
        )
    }
}

export default Routes;
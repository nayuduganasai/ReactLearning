import React from 'react';


const Auth = (props) => {
    const pass = 'passwd'
   if(pass !== 'passwd'){
    return(<h3>You are not authorized</h3>)
   }
   else{
    return props.children
   }
}

export default Auth;
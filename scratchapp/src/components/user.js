import React from 'react';
import UserHoc from '../hoc/userhoc';

const User = () =>{
    
    return(
        <div name='surya' age='21'>
            User 1
        </div>
    )
}

const User2 = () =>{
    
    return(
        <div>
            User 2
        </div>
    )
}

export default UserHoc(User,User2,"Hello");
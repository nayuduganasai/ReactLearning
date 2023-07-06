import React from 'react';

const UserHoc = (WrappedComponent,WrappedComponent2,arg1) =>{
    return() =>(
        <div>
            {arg1}<br/>
          <WrappedComponent/>
          <WrappedComponent2/>
        </div>
    )
}

export default UserHoc;
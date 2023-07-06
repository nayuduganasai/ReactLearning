import React from 'react';

const Conditional = ()=>{
    const value = true;

     

    return(
        <div style={{background:'green',padding:'10px',margin:'50px'}}>
            {
                value? <div>
                            Hello it's true

                        </div>:<div>
                            Hello it's false

                        </div>

            }
           
        
        </div>
    )
}

export default Conditional;
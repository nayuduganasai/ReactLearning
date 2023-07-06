import React,{ useEffect } from 'react';

const Header = () =>{
    const getYear = () => {
        const newDate = new Date();
        return newDate.getFullYear();
    }
    
    useEffect(() => {
        const ele = document.getElementById('firstevent');
            ele.addEventListener('change', (event) => {
            console.log(event.target.value);
            });

    },[]);
    return (
        <div>
            <h1>Header</h1>
            <br/> The Date is {getYear()} {10+10}<br/>
            <br/> <input  id = 'firstevent' type='text' placeholder='hello'></input>
        </div>

    );
   
};

export default Header;
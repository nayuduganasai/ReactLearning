import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    //if(event.target.value.trim() > 0){
      setIsValid(true);
   // }
    
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false); 
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className= {`form-control ${!isValid? 'invalid' : ''}`}>



        {/*
        
        This is inline Dynamic Styling we can do another way which is more efficeient and good practice..let's do that below
        
        <label style={{color: !isValid? 'red':'black'}}>Course Goal</label>
        <input style={{bordercolor: !isValid? 'red':'black',background: !isValid? 'salmon':'transparent',}} type="text" onChange={goalInputChangeHandler} /> */}
     

      <label>Course Goal</label>
      <input  onChange={goalInputChangeHandler} />
     
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

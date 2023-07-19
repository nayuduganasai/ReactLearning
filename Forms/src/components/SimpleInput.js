// import {useState} from 'react';

// const SimpleInput = (props) => {

// //name realatd state values
//   const [entreredName, setEnteredName] = useState('');
//   const [enteredNameTouched,setEnteredNameTouched] = useState(false);
//   const nameIsValid = entreredName.trim() !== '';
//   const nameInputIsInvalid = !nameIsValid && enteredNameTouched;

//   // e-mail related state values
//    const [entreredEmail, setEnteredEmail] = useState('');
//   const [enteredEmailTouched,setEnteredEmailTouched] = useState(false);
//   const emailIsValid = entreredEmail.includes('@');
//   const emailInputIsInvalid = !emailIsValid && enteredEmailTouched;


//   let formIsValid = false;

//   if(nameIsValid && emailIsValid){
//     formIsValid = true;
//   }

//   const nameInputHandler = event=>{
//       setEnteredName(event.target.value);
//   };

//   const nameInputBlurHandler = event=>{
//      setEnteredNameTouched(true);
//   }

//    const emailInputHandler = event=>{
//       setEnteredEmail(event.target.value);
//   };

//   const emailInputBlurHandler = event=>{
//      setEnteredEmailTouched(true);
//   }



//   const formSubmitHandler = event =>{

//     event.preventDefault();
//     setEnteredNameTouched(true);

//     if(!nameIsValid || !emailIsValid){
//         return;
//     }
//     console.log(entreredName);
//     console.log(entreredEmail)

//     setEnteredName('');
//     setEnteredNameTouched(false);

//     setEnteredEmail('');
//     setEnteredEmailTouched(false);
//   }
//   const nameInputClass = nameInputIsInvalid? 'form-control invalid':'form-control';

//    const emailInputClass = emailInputIsInvalid? 'form-control invalid':'form-control';

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={nameInputClass}>
//         <label htmlFor='name'>Your Name</label>
//         <input
//                type='text' 
//               id='name' 
//               onChange={nameInputHandler}
//               onBlur={nameInputBlurHandler}
//               value={entreredName}/>
//              {nameInputIsInvalid && 
//              <p className='error-text'>Name field should not be empty</p>
//              } 
//       </div>
//       <div className={emailInputClass}>
//         <label htmlFor='name'>Your E-mail</label>
//         <input
//                type='email' 
//               id='email' 
//               onChange={emailInputHandler}
//               onBlur={emailInputBlurHandler}
//               value={entreredEmail}/>
//              {emailInputIsInvalid && 
//              <p className='error-text'>Eamil field should not be empty & Enter valid mail id</p>
//              } 
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };


// lets write  entire code using custom hook and lets see how it looks
import { useState } from "react";
import useInput from "../hooks/useInput";

const SimpleInput = (props)=>{
   const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

   const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  const formSubmitHandler = (event)=>{
    
    event.preventDefault();

    if(!enteredEmailIsValid || !enteredNameIsValid){
      return;
    }

    console.log(enteredEmail);
    console.log(enteredName);

    resetNameInput();
    resetEmailInput();
  }
 const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = enteredEmailIsValid
    ? 'form-control invalid'
    : 'form-control';

    return(

       <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {EmailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>

    )

}
export default SimpleInput;

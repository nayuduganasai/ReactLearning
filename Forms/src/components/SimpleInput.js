import {useRef,useState} from 'react';

const SimpleInput = (props) => {

  const nameInpuRef = useRef();
  const [entreredName, setEnteredName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);
  
  const nameInputHandler = event=>{
      setEnteredName(event.target.value);
  };

  const formSubmitHandler = event =>{

    event.preventDefault();
    if(entreredName.trim() ===''){
        setNameIsValid(false);
        return;
    }
     
    setNameIsValid(true);
    console.log(entreredName);

    const enteredValue = nameInpuRef.current.value;
    console.log(enteredValue);

    setEnteredName('');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInpuRef}
               type='text' 
              id='name' 
              onChange={nameInputHandler}
              value={entreredName}/>
             {!nameIsValid && <p className='error-text'>Name field should not be empty</p>} 
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

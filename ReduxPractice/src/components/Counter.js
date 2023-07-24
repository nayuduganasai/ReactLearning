import classes from './Counter.module.css';
import {useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector(state=>state.counter.showCounter);

  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
  };

  const increaseHandler =()=>{
      dispatch(counterActions.increment());
  };

  const decreaseHandler =()=>{
    dispatch(counterActions.decrement())
  }

  const incrementHandler=()=>{
    dispatch(counterActions.increase(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      
      <div>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={decreaseHandler}>decrease</button>
        <button onClick={incrementHandler}>increase by 5</button>

      </div>
      

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

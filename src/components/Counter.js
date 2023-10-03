import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counterNumber = useSelector(store => store.counter);
  const toggleCounterHandler = () => {};

  const incrementCounterHandler = () => {
    dispatch({type: 'increment'});
  };
  const descrementCounterHandler = () => {
    dispatch({type: 'decrement'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterNumber}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementCounterHandler}>Increment Counter</button>
      <button onClick={descrementCounterHandler}>Descrement Counter</button>
    </main>
  );
};

export default Counter;

import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counterNumber = useSelector(store => store.counter);
  const showToggle = useSelector(store => store.show);
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  const incrementCounterHandler = () => {
    dispatch({type: 'increment'});
  };
  const descrementCounterHandler = () => {
    dispatch({type: 'decrement'});
  };
  const counterHandler = (event, opr = 'increase', val=5) => {
    dispatch({type: 'counter', op:opr, value: val});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle &&<div className={classes.value}>{counterNumber}</div>}
      <button onClick={incrementCounterHandler}>Increment Counter</button>
      <button onClick={descrementCounterHandler}>Descrement Counter</button>
      <button onClick={event => counterHandler(event, 'increase', 10)}>Increase Counter by 10</button>
      <button onClick={event => counterHandler(event, 'descrese', 10)}>Descrese Counter by 10</button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

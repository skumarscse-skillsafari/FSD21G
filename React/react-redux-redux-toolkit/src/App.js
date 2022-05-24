import {useSelector, useDispatch} from 'react-redux';
import {actions} from './store';

function App() {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const dispatch = useDispatch();

  // const increment = () => {
  //   dispatch({type: 'INC'})
  // }

  const increment = () => {
    dispatch(actions.increment())
  }

  // const decrement = () => {
  //   dispatch({type: 'DEC'})
  // }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  // const addBy = () => {
  //   dispatch({type: 'ADD', payload: 10})
  // }

  const addBy = () => {
    dispatch(actions.addBy(5))
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>AddBy Value</button>
    </div>
  )
}

export default App;
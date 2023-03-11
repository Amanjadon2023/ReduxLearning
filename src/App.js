/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import store from './store';
import { decNumber, incNumber } from './actions';
function App() {
  // const unsubscribe = store.subscribe(() => { console.log(store.getState()) })
  // store.dispatch({ type: 'increment' })
  const counter = useSelector((state) => { return state.changeTheNumber })
  const theme = useSelector((state) => { return state.getTheme })

  console.log(counter, theme)
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={() => { store.dispatch(incNumber()) }}>+</button>
      <div>{counter}</div>
      <button onClick={() => { store.dispatch(decNumber()) }}>-</button>
      <p>Theme-{theme}</p>
      <button onClick={() => { theme === 'dark' ? store.dispatch({ type: 'light' }) : store.dispatch({ type: 'dark' }) }}>change theme</button>
    </div >
  );
}

export default App;

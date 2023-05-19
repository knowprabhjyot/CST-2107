import "./styles.css";
import { useState } from 'react';

export default function App() {

  const buttonStyles = {
    backgroundColor: 'brown',
    padding: '8px 12px',
    border: 'none',
    color: 'white'
  }

  // let count = 0;
  const [count, setCount] = useState(10);

  const increment = () => {
    // count++; // We don't want to mutate state directly
    // setCount(count + 1); // First Way
    setCount((prevState) => prevState + 1) // I personally prefer
    console.log(count);
  }

  const decrement = () => {
    // count--; // We don't want to mutate state directly
    setCount(count - 1);
  }

  return (
    <div className="App">
      <button onClick={increment} style={buttonStyles}>Increment</button>
      <span style={{ padding: '20px'}}>{count}</span>
      <button onClick={decrement} style={buttonStyles}>Decrement</button>
    </div>
  );
}

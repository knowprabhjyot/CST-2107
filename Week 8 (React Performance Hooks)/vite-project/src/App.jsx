import { useCallback, useState } from 'react';
import './App.css'
import Child from './Childcomponent/Child'

function App() {

  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(10);

  const increment = () => {
    setParentCount(parentCount + 1);
  }


  // Memoize this function
  const incrementChild = (value) => {
    setChildCount(value);
  }

  const memoizedIncrementchild = useCallback(incrementChild, []);

  return (
    <div className="App">

      <p>{parentCount}</p>
      <button onClick={increment}>Increment Parent</button>
      <hr />

      <Child updateChildCounter={memoizedIncrementchild} childCount={childCount}  />

    </div>
  )
}

export default App

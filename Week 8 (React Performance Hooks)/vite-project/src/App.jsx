import { useCallback, useMemo, useState } from 'react';
import './App.css'
import Child from './Childcomponent/Child'

function App() {

  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(10);
  const [array , setArray] = useState([20, 40, 100, 0, -10, 22, 400, 1, 22, 10, 2]);

  const increment = () => {
    setParentCount(parentCount + 1);
  }


  // Memoize this function
  const incrementChild = (value) => {
    setChildCount(value);
  }

  const memoizedIncrementchild = useCallback(incrementChild, []);

  const getMaximumValue = () => {
    console.log('Maximum value calculated');
    return Math.max(...array);
  }

  const memoizedCalculatedMax = useMemo(() => getMaximumValue(), [array]);

  return (
    <div className="App">

      <p>{parentCount}</p>
      <button onClick={increment}>Increment Parent</button>
      <hr />

      <Child updateChildCounter={memoizedIncrementchild} childCount={childCount}  />

      <h1>
        MAXIMUM VALUE : {memoizedCalculatedMax}
      </h1>


      <button onClick={() => setArray([2,3,20, 100])}>Change Array</button>
    </div>
  )
}

export default App


// useMemo --> so if you have an expensive calculation, which you don't want to call again adn again


// Midterm Assignment (revised)

// 1. Go back to your midterm project
// 2. And where ever you are using child components or you operating any expensive logic
// 3. Try to add console in them, and see if those function calls or re-renders were required ?
// 4. If they weren't required, try to play with useMemo, useCallback and memo HOC

// Create a custom Hook in Class.

// Firebase and Sign in with google, facebook ---> FRIDAY


// Wednesday 5th July (CUSTOM HOOKS & PERFORMANCE HOOKS)
// Friday 7th July (Firebase, Oauth)

// Wednesday 12th July Redux, its an alternative for Context

// Friday 14th July , Typescript

// Wednesday 19th July, 


// 21st July (Friday) I will be away --> Montreal
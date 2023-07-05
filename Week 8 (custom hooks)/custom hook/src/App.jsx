import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './hooks/useFetch'
import useLocalStorage from './hooks/useLocalStorage'
import { useEffect } from 'react'

// We want to call an api from a custom that we will make.



function App() {
  // const [count, setCount] = useState(0)
  const { data, isLoading, error } = useFetch('https://reqres.in/api/users');
  const [value, setValue] = useLocalStorage('users', []);

  useEffect(() => {
    if (data) {
      setValue(data.data);
    }
  }, [data]);

  function renderUsers() {
    console.log(data, 'output');
    return value.map((user) => {
      return <h1>{user.first_name}</h1>
    })
  }

  return (
    <div className="App">
      {
        isLoading  ? <h1>Loading...</h1> : renderUsers()
      }

      
    </div>
  )
}

export default App


// 2 Assignments --> 

// Midterm Assignment (revised)

// 1. Go back to your midterm project
// 2. And where ever you are using child components or you operating any expensive logic
// 3. Try to add console in them, and see if those function calls or re-renders were required ?
// 4. If they weren't required, try to play with useMemo, useCallback and memo HOC

// Custom Hooks

// 1. You have to write a custom hook, to check if a specific key was pressed (A little Challenging)
// 2. You have to a write a hook that starts an interval, and that hook should also return function to stop that interval

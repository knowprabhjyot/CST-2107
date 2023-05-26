import { useState } from 'react'
import './App.css'
import EmployeeForm from './components/EmployeeForm/EmployeeForm'
import EmployeeTable from './components/EmployeeTable/EmployeeTable'

function App() {

  const [employeeList, setEmployeeList] = useState([]);

  const handleNewEmployee = (newEmployee) => {
    setEmployeeList((prevState) => [...prevState, newEmployee]);
  }
 
  return (
    <>
      <EmployeeForm addEmployeeData={(newEmployee) => handleNewEmployee(newEmployee)} />
      <EmployeeTable employeeList={employeeList} />
    </>
  )
}

export default App

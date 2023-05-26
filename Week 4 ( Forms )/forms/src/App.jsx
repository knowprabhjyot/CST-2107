import './App.css'
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm'
import ControlledForm from './components/controlledForms/ControlledForm'

function App() {

  return (
      <div className='main-container'>
        <h1>CONTROLLED FORM</h1>
        <ControlledForm />
        <hr/>
        <h1>UNCONTROLLED FORM</h1>
        <UncontrolledForm />
      </div>
  )
}

export default App

import './App.css'
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm'
import ControlledForm from './components/controlledForms/ControlledForm'

function App() {

  return (
      <div className='main-container'>
        <ControlledForm />
        <UncontrolledForm />
      </div>
  )
}

export default App

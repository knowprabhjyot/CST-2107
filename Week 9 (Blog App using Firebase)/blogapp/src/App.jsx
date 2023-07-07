import { useRoutes } from 'react-router-dom';
import './App.css'
import SignInPage from './pages/Signin';
import HomePage from './pages/Home';

function App() {

  let element = useRoutes([
    {
      path: '/',
      element: <SignInPage />
    },
    {
      path: '/home',
      element: <HomePage />
    },
  ])

  return element;
}

export default App

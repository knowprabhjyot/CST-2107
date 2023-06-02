import { useRoutes } from 'react-router-dom'
import './App.css'
import CryptoDetailPage from './pages/CryptoDetailPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  // React Router is ? DONE ***
  // How to call an API ?
  // Whole application work together !
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/crypto/:coin',
      element: <CryptoDetailPage />
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ])

  return element;
}

export default App

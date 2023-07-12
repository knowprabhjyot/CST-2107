import { useRoutes } from 'react-router-dom';
import './App.css'
import SignInPage from './pages/Signin';
import HomePage from './pages/Home';
import useLocalStorage from './hooks/useLocalStorage';
import ViewBlogsPage from './pages/ViewBlogs';
import SignupPage from './pages/signup';

function App() {


  const [value, setValue] = useLocalStorage('user', null);

  let element = useRoutes([
    {
      path: '/',
      element: value ? <HomePage /> : <SignInPage />
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
    {
      path: '/home',
      element: <HomePage />
    },
    {
      path: '/view-blogs',
      element: <ViewBlogsPage />
    },
  ])

  return element;
}

export default App

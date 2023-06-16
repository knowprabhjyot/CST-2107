import { Button, Switch, TextField } from '@mui/material';
import './App.css'
import Box from '@mui/material/Box';
import { useState } from 'react';
import axios from 'axios';
import UserContext from './context/UserContext';
import { ThemeProvider } from '@emotion/react';
import RepoList from './components/RepoList/RepoList';
import { darkTheme, lightTheme } from './themeConfig';

const repoUrl = `https://api.github.com/users`;
function App() {


  const [keyword, setKeyword] = useState('');
  const [reposList, setRepostList] = useState([]);

  // Theme State
  const [appTheme, setAppTheme] = useState('dark');

  // Call the API
  // PASS the data to the Context

  const handleSearch = () => {
    axios.get(`${repoUrl}/${keyword}/repos`).then(({ data }) => {
      setRepostList(data);
      setKeyword('');
    })
  }

  const toggleTheme = () => {
    setAppTheme(appTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <UserContext.Provider value={reposList}>
      <ThemeProvider theme={appTheme === 'dark' ? darkTheme : lightTheme}>
      {/* <ThemeContext.Provider value={appTheme}>  LATER */}
        <Switch onChange={toggleTheme} defaultChecked />
        <Box display="flex">
          <TextField fullWidth value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='Enter user name' />
          <Button onClick={handleSearch} variant='contained'>Search</Button>
        </Box>
        <RepoList />
      {/* </ThemeContext.Provider> */}
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default App

import { useState } from 'react';
import '@fontsource/roboto';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './Components/Home/Home';
import './App.css';
// Define theme settings
const light = {
  palette: {
    mode: 'light',
  },
  inputBorderColor: '#ECECEC',
  inputBackColor: '#FAFAFA',
  color: '#C4C4C4',
};

const dark = {
  palette: {
    mode: 'dark',
  },
  inputBorderColor: '#858484',
  inputBackColor: '#4F4F4F',
  color: '#8D8D8D',
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline>
        <Home changeTheme={changeTheme} isDarkTheme={isDarkTheme} />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;

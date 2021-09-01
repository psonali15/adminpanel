import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {red, blueGrey} from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: red,
    secondary : blueGrey,  
  },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
   </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();

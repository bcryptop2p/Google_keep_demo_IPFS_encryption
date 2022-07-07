import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from "react-router-dom"; 
import Router from './Routes'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <App />
      <Router />
    </ThemeProvider>
  </BrowserRouter>
);
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import App from './App';

const contains = {
  backgroundColor: "#FBF8F1"
}


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={contains}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


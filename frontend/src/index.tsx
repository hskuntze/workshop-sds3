import React from 'react';
import ReactDOM from 'react-dom';
//yarn add bootstrap; adicionar também dependência do popper -> 
//yarn add @popper.js/@...
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
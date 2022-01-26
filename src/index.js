import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
require('dotenv').config();

console.log('$$$$$$$$$$');
console.log(process.env);
console.log('$$$$$$$$$$');

ReactDOM.render(
  //<React.StrictMode> Google map markers won't unmount on strict mode
    <App />,
  //</React.StrictMode>,
  document.getElementById('root')
);

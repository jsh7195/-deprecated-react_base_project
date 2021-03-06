import 'core-js/stable';
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable'; // For IE 11 support

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

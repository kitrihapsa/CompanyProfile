import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/font.css'
import './assets/css/global.css'
import './assets/css/product.css'
import './assets/css/newsevent.css'
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Routes from './config/routes'

ReactDOM.render(
  <div>
    <Routes />
  </div>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

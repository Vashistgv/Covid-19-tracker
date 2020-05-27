import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Root from './component/Router/root'
import {BrowserRouter} from 'react-router-dom'
import history from './component/Router/History'

ReactDOM.render(
  <BrowserRouter  history={history}>
    <Root />
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

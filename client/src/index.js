import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import * as serviceWorker from './registerServiceWorker';
import store from '../src/store/index.js';


ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

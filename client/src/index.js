import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Main } from './components'

// import * as serviceWorker from './serviceWorker';
import store from '../src/ChatStore';


ReactDOM.render(
  <Provider store={store}>
    <Router>
       <Main/>
    </Router> 
  </Provider>,
  document.getElementById('app')
);

// serviceWorker.unregister();

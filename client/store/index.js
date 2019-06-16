import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from '../reducers'; // better to {}

// Construct Redux Store;
const rootReducer = combineReducers(reducers);
const logger = createLogger({collasped:true});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(rootReducer, middleware);

export default store; 

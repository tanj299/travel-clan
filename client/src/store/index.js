import { combineReducers, applyMiddleware, createStore} from 'redux'; 
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// individual reducers imported altogether under alias
import * as reducers from '../reducers';

// construct our redux store 
const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });
const middleware = (applyMiddleware(thunkMiddleware), logger); 
const store = createStore(rootReducer, middleware);

// export our store file, index.js by default and injected within our entire application
export default store; 
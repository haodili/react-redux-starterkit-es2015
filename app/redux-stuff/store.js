import { createStore,applyMiddleware } from 'redux';
import  reducer from './reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
const logger = createLogger();


let store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger)
);


export default store;

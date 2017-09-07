import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import createHistory from 'history/createBrowserHistory';

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(createHistory());

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export default createStore(
  rootReducer,
  applyMiddleware(historyMiddleware, thunk, logger)
);


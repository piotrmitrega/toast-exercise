import { applyMiddleware, compose, createStore } from 'redux';
import { reducers } from './reducers';
import { middleware } from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers, /* preloadedState, */
  composeEnhancers(applyMiddleware(middleware))
);


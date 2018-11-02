import {createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import './index.css';
import App from './containers/App';
import { settings } from './state/reducers';

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxMiddleware = composeEnhancers(
  applyMiddleware(
    thunk,
    createLogger(),
    promiseMiddleware(),
  ),
);

const preloadedState = {
};

const store = createStore(settings, preloadedState, reduxMiddleware);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

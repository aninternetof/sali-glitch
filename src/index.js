import {createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import './index.css';
import App from './containers/App';
import rootReducer from './state/reducers';

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
const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(rootReducer),
  preloadedState,
  reduxMiddleware
);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

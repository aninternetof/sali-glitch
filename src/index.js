import {createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './containers/App';
import { settings } from './state/reducers';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(settings, preloadedState, reduxMiddleware);
persistStore(store)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

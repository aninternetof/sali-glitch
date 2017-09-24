import {createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './containers/App';
import { settings } from './state/reducers';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log(settings);

const store = compose(autoRehydrate())(createStore)(settings)
persistStore(store)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

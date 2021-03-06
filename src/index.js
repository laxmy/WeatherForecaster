import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './App';
import './index.css';
import reducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store = {createStoreWithMiddleware(reducers)}>
  <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

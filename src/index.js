import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import configureStore from './config/store';
const store = configureStore();
console.log('Getstate', store.getState())

const app = (
  <Provider store={store}>
    <App />
  </Provider >
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();

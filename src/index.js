import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
  );

ReactDOM.render(app, document.getElementById('root'));

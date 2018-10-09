import React from 'react';
import ReactDOM from 'react-dom';

import * as AuthApi from './util/api/auth_util';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // for testing
  window.AuthApi = AuthApi;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // end for testing
  const root = document.getElementById('root');
  ReactDOM.render(<h1>It's working!</h1>, root);
});

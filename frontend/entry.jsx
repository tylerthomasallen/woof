import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as AuthApi from './util/api/auth_util';
import { login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // for testing
  window.AuthApi = AuthApi;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // end for testing
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as AuthApi from './util/api/auth_util';
import * as UserApi from './util/api/user_util';
import * as MapApi from './util/api/map_util';
import { login, retrieveUser } from './actions/session_actions';
import { retrieveDog } from './actions/dog_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id }
    };

    store = configureStore(preloadState);
  } else {
    store = configureStore();
  }
  // for testing
  window.AuthApi = AuthApi;
  window.retrieveDog = retrieveDog;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.UserApi = UserApi;
  window.MapApi = MapApi;
  window.retrieveUser = retrieveUser;
  // end for testing
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

import React from 'react';
import ReactDOM from 'react-dom';

import * as AuthApi from './util/api/auth_util';


document.addEventListener('DOMContentLoaded', () => {

  window.AuthApi = AuthApi;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>It's working!</h1>, root);
});

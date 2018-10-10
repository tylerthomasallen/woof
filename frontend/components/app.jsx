import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/routes/routes_util';

import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import DogIndexContainer from './dog/dog_index_container';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/dog/:dogId" component={DogIndexContainer}/>
        <Route exact path="/" component={SplashContainer} />
        <Redirect to="/"/>
      </Switch>
    </div>
  );
};

export default App;

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routes/routes_util';

import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import DogIndexContainer from './dog/dog_index_container';
import ReviewCreateContainer from './reviews/review_create_container';
import ReviewEditContainer from './reviews/review_edit_container';


const App = () => {
  return (
    <div className="app-body">
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/dog/:dogId" component={DogIndexContainer}/>
        <ProtectedRoute exact path="/dog/:dogId/writeareview" component={ReviewCreateContainer} />
        <ProtectedRoute exact path="/dog/:dogId/editreview/:reviewId" component={ReviewEditContainer} />
        <Route exact path="/" component={SplashContainer} />
        <Redirect to="/"/>
      </Switch>
    </div>
  );
};

export default App;
